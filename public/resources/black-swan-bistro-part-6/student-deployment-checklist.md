# Black Swan Bistro - Student Deployment Checklist

**Student:** ______________________________  **Date:** __________________

**Project URL:** _________________________________________________________

**Pathway:** ☐ Static HTML / traditional hosting  ☐ GitHub Pages  ☐ Vercel

Use this checklist before, during, and after deployment. Check an item only when you have verified it yourself.

## 1. Protect the project

- [ ] I have a backup or a clean Git commit before deployment changes.
- [ ] I know which folder or branch is the release source.
- [ ] I have not included passwords, API keys, private data, or real secret `.env` files.
- [ ] I know how to restore the previous live version.

## 2. Prepare the release

- [ ] The site content, address, hours, menu, and contact details are final.
- [ ] Placeholder text, test links, and unused public files are removed.
- [ ] Filenames and import paths use matching capitalisation.
- [ ] Images are appropriately sized and compressed.
- [ ] Page titles, descriptions, headings, and image alternative text are present.

## 3A. Static HTML / traditional hosting

Skip this section if you are deploying Vue/Vite.

- [ ] My clean release folder has `index.html` at its top level.
- [ ] I tested the release through a local web server.
- [ ] I confirmed the exact document root for the domain.
- [ ] I backed up any existing site in that document root.
- [ ] I uploaded the release contents without an accidental extra folder.
- [ ] The server contains the expected CSS, JavaScript, image, and page files.
- [ ] I removed the upload archive if it is no longer needed.

## 3B. Vue/Vite, GitHub, and hosting

Skip this section if you are deploying plain static HTML.

- [ ] `npm install` or `npm ci` succeeds.
- [ ] `npm run build` succeeds and produces `dist`.
- [ ] `npm run preview` shows the correct production build.
- [ ] `package.json`, the lockfile, source, public assets, and config are committed.
- [ ] `node_modules`, `dist`, and real secret files are excluded from Git.
- [ ] The intended repository and production branch are pushed to GitHub.

### If using GitHub Pages

- [ ] Vite `base` matches `/REPOSITORY/`, `/`, or the custom-domain setup.
- [ ] `.github/workflows/deploy.yml` builds and uploads `dist`.
- [ ] Repository Settings → Pages uses GitHub Actions as its source.
- [ ] The latest Pages workflow completes successfully.
- [ ] My Vue Router history strategy works on direct visits and refreshes.

### If using Vercel

- [ ] The correct GitHub repository and project root are imported.
- [ ] Vercel detects Vite, `npm run build`, and `dist` correctly.
- [ ] Required environment variables exist in the correct environment.
- [ ] The production branch is correct.
- [ ] If this is a history-mode SPA, its direct-route rewrite is configured.
- [ ] A preview deployment has been reviewed when available.

## 4. Test the public URL

- [ ] The expected URL loads the current site over HTTPS.
- [ ] The home page is not a host placeholder, directory listing, or old release.
- [ ] All pages/views, navigation links, buttons, and footer links work.
- [ ] Images, fonts, CSS, and JavaScript load without 404 errors.
- [ ] Mobile, tablet, and desktop layouts are usable.
- [ ] Keyboard navigation works and focus is visible.
- [ ] Text remains readable at 200% browser zoom.
- [ ] Informative images have useful alt text.
- [ ] Contact links and forms behave honestly and correctly.
- [ ] Direct visits and refreshes work for every client-side route.
- [ ] The browser console has no unexplained errors.
- [ ] I tested in another browser or on another device.

## 5. Record the release

- [ ] I recorded the live URL and deployment date.
- [ ] I recorded the host, repository, and production branch.
- [ ] I know where to read build or deployment logs.
- [ ] I made and verified one small follow-up deployment.
- [ ] I saved any DNS, domain, or HTTPS notes for the next release.

## Sign-off

**Deployment result:** ☐ Ready  ☐ Ready with noted issue  ☐ Roll back / fix first

**Issue or follow-up:**

____________________________________________________________________________

____________________________________________________________________________

**Student signature:** __________________________  **Review:** _______________
