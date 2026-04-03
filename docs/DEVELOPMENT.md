# Development Guide

Status: current for the repository structure and scripts visible in this codebase as of this update.

## Stack

GraphiteEdge currently uses:

- Vue 3
- Vite
- Vue Router with `unplugin-vue-router` auto-routes
- Bulma CSS, extended with local custom CSS
- Vercel for deployment
- Firebase for auth/data where relevant

Additional project features visible in the repo include:

- tutorial pages under `src/pages/tutorials`
- blog/post pages under `src/pages/posts`
- project/practice pages under `src/pages/projects`
- a local API server used in development via `api/server.js`

## Requirements

- Node.js `22.x`
  This matches the `engines.node` field in `package.json`.
- npm

## Install

```bash
npm install
```

## Running Locally

Available scripts from `package.json`:

- `npm run dev`
  Runs both the Vite app and the local API server.
- `npm run dev:vite`
  Runs the Vite frontend only.
- `npm run dev:api`
  Runs the local API server only.
- `npm run dev:cms`
  Runs the Vite app together with the CMS proxy workflow currently configured in the repo.
- `npm run build`
  Builds the app for production.
- `npm run preview`
  Previews the production build locally.
- `npm run lint`
  Runs ESLint with the current repo configuration.

Default local app URL:

- `http://localhost:5173`

The local API server is proxied from Vite through `/api` to `http://localhost:3000` in `vite.config.js`.

## Project Structure

Key active areas in the current repo:

```text
src/
├── assets/
│   ├── images/
│   └── styles/
├── components/
├── composables/
├── data/
├── layouts/
├── pages/
│   ├── posts/
│   ├── projects/
│   └── tutorials/
├── router/
├── services/
└── utils/
```

Other important folders:

- `docs/`
  Project documentation
- `public/`
  Static public assets and admin files
- `api/`
  Local development API server

## Routing

The project uses file-based routing through `unplugin-vue-router`.

Current source files involved:

- `vite.config.js`
- `src/router/index.js`
- `src/pages/**`

Practical implications:

- new page routes come from files under `src/pages`
- route generation is automatic
- some page-level navigation behavior is still managed manually inside app code, especially in tutorial-specific layout/navigation logic

## Tutorial Workflow

Tutorial pages are currently built on top of an existing tutorial system rather than a blank page workflow.

Key live files include:

- `src/layouts/TutorialLayout.vue`
- `src/components/TutorialNavigation.vue`
- `src/components/TutorialRecommendations.vue`
- `src/components/TutorialCompletion.vue`
- `src/components/TestYourKnowledgeSection.vue`
- `src/components/tutorial-navs/*`
- `src/assets/styles/tutorials.css`

Current expectation for tutorial work:

- reuse the existing tutorial layout and components
- preserve the existing tutorial/custom CSS layering alongside Bulma
- prefer improving current patterns over replacing them
- treat tutorial architecture as transitional where the code shows mixed older and newer patterns

## Styling

Bulma is part of the current live setup, but it is not the only styling layer.

Active styling files visible in the repo include:

- `src/assets/main.css`
- `src/assets/styles/main.css`
- `src/assets/styles/tutorials.css`
- `src/components/tutorial-navs/nav.css`

Treat this Bulma-plus-custom-CSS setup as intentional unless and until the codebase is deliberately consolidated.

## Content Authoring Notes

This repository does not currently use `src/templates` as part of the active workflow.

When creating or editing site content:

- use the existing file-based page structure
- follow current tutorial/post/project placement in `src/pages`
- reuse existing components and layout systems where available
- verify routing and rendering through the current page files rather than older template-copy instructions

## Validation Before Finishing Work

Before wrapping up changes, prefer to:

1. run `npm run build`
2. run `npm run lint`
3. verify any changed tutorial or page routes still render correctly
4. check for obvious content/layout breakage

If build or lint cannot be completed because of environment issues, note that clearly in the handoff.

## Transitional Notes

There is still some drift between docs and code in the wider `docs/` folder.

In particular:

- some older docs still mention manual router setup
- some older docs still mention template-based content creation
- tutorial architecture is partly standardized and partly hand-maintained

When in doubt, trust the current codebase over older documentation.
