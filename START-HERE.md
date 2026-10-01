# Ba-La-Bayt — website setup and editing guide

**No paid hosting, no website builder, no command line.** This is a static bilingual site. Upload it to a public GitHub repository, switch on GitHub Pages, and use GitHub's pencil (Edit) button for future updates.

## Regular changes

**1. Change wording in English or Hebrew**

* GitHub → repository → **`content.js`** → pencil icon (**Edit this file**).
* Find the text to change. English entries live under `en: {`, Hebrew under `he: {`.
* Change only the words between the matching quote marks. **Do not remove keys, commas, apostrophes that are part of code, or braces.** If a sentence contains an apostrophe, keep the existing outer double quotes or escape the apostrophe with `\'` inside single quotes.
* Click **Commit changes**. The page normally updates after 1–3 minutes. Refresh your website; if needed, hard-refresh the browser.

**2. Add, change, or cancel an event**

* GitHub → **`events.js`** → pencil icon.
* A ready-made **unpublished** Nir Oz talk is included. It will not appear until you add a REAL confirmed date (`YYYY-MM-DD`, e.g., `2026-11-21`) and change `published: false` to `published: true`.
* Each event has `title` / `description` in **both languages**, `date`, `time`, `category`, `registrationUrl`, and optional `qrImage`. If you have no registration URL, leave it as `""`.
* To create an additional event, duplicate everything from `{` through the closing `}` of an event and add a comma **between** the entries. Change the copied event's `id` to a unique short identifier, and fill in its fields. Keep `published: false` while preparing it.
* To temporarily hide/cancel an event: set its `published` to `false` and commit. Past-dated events automatically disappear after their date passes.
* **Privacy:** this website intentionally does not include a street address or an event-address field. Share exact locations privately through registration/email as appropriate.
* Click **Commit changes**. There is no deployment command or build process.

**3. Change the provisional logo**

* Create a new image named **`balabayt-logo.webp`** and upload it to `assets/`, choosing to replace the existing file; keep the same name. A square image works best. The small favicon is `assets/favicon.png` and may be replaced separately.
* On GitHub's website, open `assets`, select **Add file → Upload files** and upload the new image. If GitHub warns about a same-name file, follow its replacement flow. Alternatively use the GitHub desktop app to replace the file and commit.
* The website uses the same filename so no HTML needs editing.

## Common problems and recovery

| Problem | What to check |
|---|---|
| Website is 404 | **Settings → Pages** saved as `main` + `/(root)`? Is `index.html` at repository root (not inside another folder)? Give GitHub a few minutes. |
| Image looks broken | Check `assets/balabayt-logo.webp` is in the `assets` folder. Filenames are case-sensitive. |
| Events don't show | `published: true`; valid confirmed `date` in `YYYY-MM-DD`; date today or later; no missing comma/quote. |
| Page shows blank or old text | Open `content.js` and `events.js` in GitHub and look for a misplaced quote, comma, or brace. Check GitHub **Actions** for Pages deployment status. Try a hard refresh. |
| Accidentally broke something | Open the file → **History** → open a good older revision → copy its contents back, or use GitHub's revert option for the bad commit. |

**Permission management:** GitHub → repository → **Settings → Collaborators and teams** (name may vary) → invite organizers by their GitHub usernames; assign only the access level needed. In a public repository, *anyone on the internet can see the files*, but only authorized collaborators can change them. Never put passwords, private attendee lists, mailing-list exports, or private event locations in this repository.

**No visitor accounts or personal data collection:** this site contains no analytics, tracker, or signup database. The external donation and registration links, if enabled, operate on their own services. The website is static and does not take payments itself.

## File reference

- `content.js` — **editable English and Hebrew wording**. Most organizers edit this.
- `events.js` — **editable event listings**. Most organizers edit this.
- `assets/balabayt-logo.webp` — provisional logo.
- `assets/favicon.png` — small icon for browser tabs.
- `assets/support-qr.png` — QR code for the existing club support link.
- `index.html`, `styles.css`, `main.js` — layout and presentation, generally leave unchanged.
- `.nojekyll` — compatibility file for GitHub Pages; leave it in place.

The original English/Hebrew presentation materials contained a precise street address. **That address has deliberately been omitted from the website and from this package.** Event entries are hidden until their dates are confirmed. Review organization contact information, membership pricing, and the destination of the donation link before announcing the site publicly.
