# Ba-La-Bayt — website setup and editing guide

**No paid hosting, no website builder, no command line.** This is a static bilingual site. Upload it to a public GitHub repository, switch on GitHub Pages, and use GitHub's pencil (Edit) button for future updates.

## A. Publish it the first time (about 10 minutes)

1. **Download the ZIP** provided with this guide. Unzip it on your computer.
2. Sign in at [github.com](https://github.com). In the top-right **+** menu choose **New repository**.
3. Name the repository **`balabayt-site`** (or another name you prefer). Set **Public**. Do **not** check “Add a README file.” Click **Create repository**.
4. On the new repository's page, choose **uploading an existing file** (or **Add file → Upload files**).
5. **Important:** open the unzipped `balabayt_site` folder on your computer. Select **all the files and the `assets` folder INSIDE it**, and drag those items onto GitHub's upload area. Do **not** upload the ZIP itself, and do **not** put the whole folder inside an extra subfolder. The top of the repository should show `index.html`, `styles.css`, `content.js`, `events.js`, `main.js`, `.nojekyll`, and `assets/`.
6. Click **Commit changes**. (GitHub may display a confirmation dialog; accept it.)
7. Open the repository's **Settings → Pages** menu. Under **Build and deployment**, choose **Deploy from a branch**. Set Branch to **main**, folder to **/(root)**. Click **Save**.
8. Wait a few minutes. Refresh **Settings → Pages** until the live site URL appears. Usually it is `https://YOUR-USERNAME.github.io/balabayt-site/`. Open that address in a new tab. Check **EN / עברית**, events, links, and mobile layout.
9. Share the *site URL*, not the GitHub repository link. This is your public address until/unless you buy a custom domain.

If you name the repository exactly `YOUR-USERNAME.github.io` where YOUR-USERNAME is your actual GitHub account name, the usual homepage is `https://YOUR-USERNAME.github.io/` instead. Only use that naming pattern if this is your intended account-wide GitHub Pages site.

## B. Regular changes — the 3 things organizers need to know

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

## C. Common problems and recovery

| Problem | What to check |
|---|---|
| Website is 404 | **Settings → Pages** saved as `main` + `/(root)`? Is `index.html` at repository root (not inside another folder)? Give GitHub a few minutes. |
| Image looks broken | Check `assets/balabayt-logo.webp` is in the `assets` folder. Filenames are case-sensitive. |
| Events don't show | `published: true`; valid confirmed `date` in `YYYY-MM-DD`; date today or later; no missing comma/quote. |
| Page shows blank or old text | Open `content.js` and `events.js` in GitHub and look for a misplaced quote, comma, or brace. Check GitHub **Actions** for Pages deployment status. Try a hard refresh. |
| Accidentally broke something | Open the file → **History** → open a good older revision → copy its contents back, or use GitHub's revert option for the bad commit. |

**Permission management:** GitHub → repository → **Settings → Collaborators and teams** (name may vary) → invite organizers by their GitHub usernames; assign only the access level needed. In a public repository, *anyone on the internet can see the files*, but only authorized collaborators can change them. Never put passwords, private attendee lists, mailing-list exports, or private event locations in this repository.

**No visitor accounts or personal data collection:** this site contains no analytics, tracker, or signup database. The external donation and registration links, if enabled, operate on their own services. The website is static and does not take payments itself.

## D. File reference

- `content.js` — **editable English and Hebrew wording**. Most organizers edit this.
- `events.js` — **editable event listings**. Most organizers edit this.
- `assets/balabayt-logo.webp` — provisional logo.
- `assets/favicon.png` — small icon for browser tabs.
- `assets/support-qr.png` — QR code for the existing club support link.
- `index.html`, `styles.css`, `main.js` — layout and presentation, generally leave unchanged.
- `.nojekyll` — compatibility file for GitHub Pages; leave it in place.

The original English/Hebrew presentation materials contained a precise street address. **That address has deliberately been omitted from the website and from this package.** Event entries are hidden until their dates are confirmed. Review organization contact information, membership pricing, and the destination of the donation link before announcing the site publicly.
