# Setup Guide

Status: transitional. This file now describes the current project setup at a high level and flags older setup assumptions that are no longer part of the active workflow.

## Current Local Setup

### Requirements

- Node.js `22.x`
- npm

### Install Dependencies

```bash
npm install
```

### Run The Project

Frontend plus local API:

```bash
npm run dev
```

Frontend only:

```bash
npm run dev:vite
```

API only:

```bash
npm run dev:api
```

CMS-related local workflow currently present in the repo:

```bash
npm run dev:cms
```

## Active Project Shape

The current app is organized around page files and shared components, not around a template-copy system.

Relevant live locations include:

- `src/pages/tutorials`
- `src/pages/posts`
- `src/pages/projects`
- `src/layouts`
- `src/components`
- `src/data`
- `src/assets`

Routing is generated from the page files in `src/pages` through the current Vite/router setup.

## Tutorial System Setup Notes

The tutorial experience already has shared structure in the repo.

Important current files:

- `src/layouts/TutorialLayout.vue`
- `src/components/tutorial-navs/*`
- `src/components/TutorialNavigation.vue`
- `src/components/TutorialRecommendations.vue`
- `src/components/TutorialCompletion.vue`
- `src/components/TestYourKnowledgeSection.vue`
- `src/assets/styles/tutorials.css`

When working on tutorials:

- reuse this existing system
- preserve the existing Bulma-plus-custom-CSS approach
- prefer incremental cleanup over introducing a parallel structure

## Environment And Services

The repository includes:

- Firebase initialization in `src/services/firebase.js`
- auth-related pages and services under `src/pages/auth` and `src/services/AuthService.js`
- a local API server under `api/`

Environment-specific setup should be derived from the code actually in use and the deployment environment being targeted.

## Legacy Notes

The repository does not currently use `src/templates` as part of the active content workflow.

Older setup patterns that should not be treated as current unless reintroduced deliberately:

- manual router entry creation for each page
- template-copy instructions based on `src/templates`
- post-only setup guidance that ignores tutorials/projects/current routing

## Basic First Check After Setup

After installing dependencies:

1. run `npm run dev`
2. open `http://localhost:5173`
3. check the home page
4. check `/tutorials`
5. check one representative deep tutorial route

If anything fails, inspect:

- `package.json`
- `vite.config.js`
- `src/router/index.js`
- `vercel.json` for production behavior assumptions
