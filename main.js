/* Ba-La-Bayt bilingual website. No external libraries or tracking. */
(function () {
  'use strict';
  const COPY = window.BALABAYT_COPY;

  const $ = (selector) => document.querySelector(selector);
  const safeUrl = (value) => {
    if (typeof value !== 'string' || !value) return null;
    try { const url = new URL(value, window.location.href); return ['https:', 'http:', 'mailto:'].includes(url.protocol) ? url.href : null; } catch { return null; }
  };
  const make = (tag, cls, content) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (content != null) el.textContent = content;
    return el;
  };
  const getLocale = (field, lang) => field && typeof field === 'object' ? (field[lang] || field.en || '') : (field || '');
  const validDate = (iso) => typeof iso === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(iso) && !Number.isNaN(new Date(iso + 'T12:00:00').getTime()) && new Date(iso + 'T12:00:00').toISOString().slice(0,10) === iso;
  const upcoming = (e) => {
    if (!e || e.published !== true || !validDate(e.date)) return false;
    const day = new Date(e.date + 'T23:59:59');
    return day >= new Date();
  };
  function renderEvents(lang) {
    const root = $('#events-list');
    if (!root) return;
    root.replaceChildren();
    const events = (window.BALABAYT_EVENTS || []).filter(upcoming).sort((a,b) => a.date.localeCompare(b.date));
    if (!events.length) {
      const holder = make('div', 'empty-events');
      const symbol = make('div','empty-icon','✳'); symbol.setAttribute('aria-hidden','true');
      const wrap = make('div');
      wrap.append(make('h3',null,COPY[lang].emptyTitle),make('p',null,COPY[lang].emptyText));
      holder.append(symbol, wrap); root.append(holder); return;
    }
    for (const e of events) {
      const card = make('article','event-card');
      const title = make('h3',null,getLocale(e.title,lang));
      const date = new Date(e.date + 'T12:00:00');
      const prettyDate = new Intl.DateTimeFormat(lang === 'he' ? 'he-IL' : 'en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'}).format(date);
      card.append(make('span','event-type',getLocale(e.category,lang)), title, make('div','event-date',prettyDate + (e.time ? ' · ' + e.time : '')));
      if (getLocale(e.description,lang)) card.append(make('p',null,getLocale(e.description,lang)));
      const url = safeUrl(e.registrationUrl);
      const actions=make('div','event-actions');
      if (url) { const link = make('a',null,COPY[lang].register);link.href=url;link.target='_blank';link.rel='noopener noreferrer';actions.append(link); }
      if (e.qrImage && /^assets\/[\w.-]+\.(png|svg|webp|jpg|jpeg)$/i.test(e.qrImage)) {
        const img=document.createElement('img');img.className='event-qr';img.src=e.qrImage;img.alt=lang==='he'?'קוד QR להרשמה לאירוע':'Event registration QR code';img.loading='lazy';actions.append(img);
      }
      if (actions.children.length) card.append(actions);
      root.append(card);
    }
  }
  function setLanguage(lang) {
    lang = lang === 'he' ? 'he' : 'en';
    document.documentElement.lang=lang;
    document.documentElement.dir=lang==='he'?'rtl':'ltr';
    for (const element of document.querySelectorAll('[data-i18n]')) {
      const key=element.dataset.i18n;
      if (!(key in COPY[lang])) continue;
      if (key==='heroTitle') element.innerHTML=COPY[lang][key];
      else element.textContent=COPY[lang][key];
    }
    for (const button of document.querySelectorAll('[data-lang]')) {
      const active=button.dataset.lang===lang;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));
    }
    document.title=COPY[lang].pageTitle;
    const description=$('meta[name="description"]');if(description)description.content=COPY[lang].metaDescription;
    renderEvents(lang);
    try{localStorage.setItem('balabayt-language',lang)}catch{}
  }
  for(const button of document.querySelectorAll('[data-lang]')) button.addEventListener('click',()=>setLanguage(button.dataset.lang));
  const saved=(()=>{try{return localStorage.getItem('balabayt-language')}catch{return null}})();
  setLanguage(saved || (navigator.language && navigator.language.startsWith('he')?'he':'en'));
}());
