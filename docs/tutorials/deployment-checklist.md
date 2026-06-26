---
title: "Deployment Checklist"
slug: "deployment-checklist"
type: "downloadable checklist source"
parentTutorial: "getting-a-website-online-hosting-deployment-continuous-improvement"
description: "A student-facing checklist for preparing, deploying, testing and improving a basic website."
---

# Deployment Checklist

Use this checklist before and after deploying a website.

It is designed for beginner HTML, CSS and JavaScript projects, with extra notes for Vite projects.

## Student details

| Item | Details |
|---|---|
| Student name |  |
| Project name |  |
| Deployment method |  |
| Hosting service |  |
| Live URL |  |
| Date deployed |  |

## 1. Files and folders

Before deployment, check the project files.

- [ ] My homepage is named `index.html`.
- [ ] My CSS file is linked correctly.
- [ ] My JavaScript file is linked correctly.
- [ ] My images are inside the project folder.
- [ ] My folder names are simple and consistent.
- [ ] My file names do not contain accidental spaces.
- [ ] My file names use consistent lowercase naming.
- [ ] I have not linked to files on my own computer using local file paths.
- [ ] I have removed unused test files.
- [ ] I know which folder needs to be uploaded or deployed.

## 2. Content

Check the visible website content.

- [ ] The page title is meaningful.
- [ ] The main heading is clear.
- [ ] Placeholder text has been removed.
- [ ] Spelling and obvious grammar errors have been checked.
- [ ] Images have useful alt text where needed.
- [ ] Decorative images have empty alt text if appropriate.
- [ ] Contact or business details are correct.
- [ ] Navigation labels make sense.
- [ ] Buttons and links use clear text.
- [ ] The website makes sense to someone who did not build it.

## 3. Layout and accessibility

Check the experience for visitors.

- [ ] The site works on desktop.
- [ ] The site works on mobile.
- [ ] Text is readable.
- [ ] Buttons and links are easy to tap.
- [ ] Colour contrast is acceptable.
- [ ] Keyboard focus is visible.
- [ ] The page has a logical heading order.
- [ ] Content does not overflow sideways on mobile.
- [ ] Images resize appropriately.
- [ ] Animations or movement are not distracting.

## 4. Technical checks

Check the site behaviour.

- [ ] All navigation links work.
- [ ] All images load.
- [ ] CSS loads correctly.
- [ ] JavaScript loads correctly.
- [ ] The browser console does not show obvious errors.
- [ ] The site works in a private or incognito browser window.
- [ ] The site has been refreshed after deployment.
- [ ] I tested the live URL, not just the local file.
- [ ] I tested at least one link from each page.
- [ ] I tested any button or interaction I added.

## 5. Deployment method checks

Choose the section that matches your deployment method.

### If using traditional hosting

- [ ] I know the name of my public website folder.
- [ ] I uploaded the correct files to the correct folder.
- [ ] `index.html` is in the public website folder.
- [ ] CSS, JavaScript and image folders were uploaded.
- [ ] I did not accidentally upload the project folder one level too deep.
- [ ] I checked the live site after uploading.

### If using manual static hosting

- [ ] I chose the correct folder to upload.
- [ ] For plain HTML/CSS/JS, `index.html` is at the root of the uploaded folder.
- [ ] For Vite, I ran the build command first.
- [ ] For Vite, I uploaded the generated `dist` folder or the required output folder.
- [ ] I recorded which folder I uploaded.
- [ ] I tested the generated live URL.

### If using GitHub Pages

- [ ] My project files are in a GitHub repository.
- [ ] My homepage is named `index.html`.
- [ ] I enabled GitHub Pages in repository settings.
- [ ] I selected the correct branch and folder.
- [ ] I waited for the site to publish.
- [ ] I opened the published GitHub Pages URL.
- [ ] I tested the live site.

### If using Netlify with GitHub

- [ ] My project is pushed to GitHub.
- [ ] Netlify is connected to the correct repository.
- [ ] I checked the build command.
- [ ] I checked the publish directory.
- [ ] For Vite, the build command is usually `npm run build`.
- [ ] For Vite, the publish directory is usually `dist`.
- [ ] I checked the deployment log if the build failed.
- [ ] I tested the live Netlify URL.

### If using Vercel with GitHub

- [ ] My project is pushed to GitHub.
- [ ] Vercel is connected to the correct repository.
- [ ] I checked the detected framework settings.
- [ ] For Vite, the build command is usually `npm run build`.
- [ ] For Vite, the output directory is usually `dist`.
- [ ] I checked the deployment log if the build failed.
- [ ] I tested the live Vercel URL.

## 6. After deployment

Check the live website as a visitor.

- [ ] I opened the live URL in a normal browser window.
- [ ] I opened the live URL in a private/incognito window.
- [ ] I checked the homepage.
- [ ] I checked all main pages.
- [ ] I checked navigation links.
- [ ] I checked images.
- [ ] I checked mobile layout.
- [ ] I checked browser console errors.
- [ ] I wrote down any issues.
- [ ] I fixed the most important problems.
- [ ] I tested the site again after fixing issues.

## 7. Continuous improvement check

Deployment is not the end. It is the beginning of maintaining the site.

- [ ] I created an improvement log.
- [ ] I recorded the first deployment date.
- [ ] I recorded the live URL.
- [ ] I wrote down any known issues.
- [ ] I prioritised the most important issue.
- [ ] I know how to update the site again.
- [ ] I know whether updates are manual or automatic.
- [ ] I kept a backup or version history.

## 8. Improvement log template

| Date | Issue or improvement | Change made | Tested locally? | Tested live? | Notes |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

## 9. Deployment notes

Use this section to record anything important.

### Hosting account notes

Do not write passwords here.

Record safe details only, such as:

- hosting service name
- project name
- deployment method
- public URL
- repository URL if using GitHub
- build command if used
- output folder if used

| Item | Notes |
|---|---|
| Hosting service |  |
| Project/site name |  |
| Live URL |  |
| Repository URL |  |
| Build command |  |
| Output/publish folder |  |
| Public hosting folder |  |
| Date created |  |

## 10. Final confidence check

Before sharing the website link, answer these:

1. Can someone else open the website from their own device?
2. Does the homepage explain what the site is?
3. Can visitors move around the site?
4. Are the most obvious errors fixed?
5. Do I know how to make the next update?

If you can answer yes to those questions, the site is ready to share for review.

If not, that is not failure. That is testing doing its job.
