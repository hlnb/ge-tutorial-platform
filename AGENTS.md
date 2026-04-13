# AGENTS.md — GraphiteEdge

## Project purpose

GraphiteEdge is a calm, credible web development education site.
It teaches how the web works end-to-end: design, code, deployment, security, structure, and ethical AI-assisted development.

This is not a content farm.
Prefer structured learning pathways over random isolated posts.
Prefer clarity, reuse, and maintainability over novelty.

## Audience

- Beginners learning web development
- Small business owners who want to understand and manage their own websites
- Learners who need practical guidance without jargon overload

## Product direction

- Pathways over blog-like streams — tutorials ladder from beginner to intermediate
- AI is framed as an assistant, not a substitute for fundamentals
- Fewer, higher-quality tutorials over more shallow content

## Tech stack

- **Frontend:** Vue 3 + Vite (ES2015 target)
- **Styling:** Bulma CSS + intentional custom CSS — do not introduce Tailwind
- **Routing:** File-based via `unplugin-vue-router` — pages live in `src/pages/`
- **Hosting:** Vercel (SPA rewrite in `vercel.json`)
- **Auth/data:** Firebase (`VITE_FIREBASE_*` env vars)
- **API:** Express serverless functions in `api/` (deployed as Vercel functions)
- **Node:** 22.x required

## Build and test

```sh
npm run dev          # Vite frontend + API server (concurrently)
npm run build        # Production build → dist/
npm run lint         # ESLint + Prettier (Vue, JS, CJS, MJS)
npm run format       # Prettier on src/
npm run preview      # Local preview of built site
npm run generate:sitemap  # Regenerate sitemap
```

See [docs/SETUP.md](docs/SETUP.md) for local environment setup and [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for Vercel config.

## Architecture

### Key directories

| Directory                   | Purpose                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------- |
| `src/pages/`                | File-based routes (tutorials, posts, projects, auth, etc.)                                   |
| `src/layouts/`              | `TutorialLayout.vue`, `ProjectLayout.vue`, `PostLayout.vue`, `MainLayout.vue`                |
| `src/components/hunter/`    | Hunter lesson framework components (AnticipatorySet, CheckpointBox, GuidedPractice, etc.)    |
| `src/components/tutorials/` | Tutorial-specific components                                                                 |
| `src/components/diagrams/`  | Concept-teaching visual components                                                           |
| `src/data/`                 | Curriculum metadata: `tutorials.js`, `projects.js`, `tutorialRecommendations.js`, `quizzes/` |
| `src/composables/`          | `usePageNavigation`, `usePageSections`, `useProgress`                                        |
| `src/services/`             | `firebase.js`, `AuthService.js`, `ProgressService.js`                                        |
| `src/assets/styles/`        | `global.css`, `main.css`, `tutorials.css`, `vendor/`                                         |
| `api/`                      | Express serverless functions (progress, subscribe, auth)                                     |

### Routing

File-based routing via `unplugin-vue-router`. Adding a `.vue` file to `src/pages/` auto-creates the route. See [docs/FILE_BASED_ROUTING.md](docs/FILE_BASED_ROUTING.md).

### Tutorial system

The tutorial layout system already exists — reuse and refine it, don't recreate it.

- **Layout:** `TutorialLayout.vue` provides sidebar nav, mobile drawer, prev/next navigation, progress tracking
- **Lesson flow:** anticipatory set → objectives → concept explanation → checkpoint → guided practice → independent practice → resources → recap → closure → recommendations
- **Quiz preference:** Use `TestYourKnowledgeSection` over bare `TutorialQuiz` — see [docs/QUIZZES.md](docs/QUIZZES.md)
- **Recommendations:** `TutorialRecommendations.vue` — transitioning to centralised data in `src/data/tutorials.js`
- **CSS:** Custom CSS files (`tutorials.css`, etc.) are intentional alongside Bulma — do not assume Bulma alone should replace them

See [docs/TUTORIAL_STRUCTURE.md](docs/TUTORIAL_STRUCTURE.md) and [docs/CREATE_NEW_TUTORIAL.md](docs/CREATE_NEW_TUTORIAL.md) for full details.

## Working style

1. Prefer understanding and improving existing implementation over recreating it
2. Preserve existing architecture unless there is a strong reason to change it
3. Prefer incremental improvements over rewrites
4. Explain major structural recommendations before implementing them
5. Keep changes scoped to the requested task
6. Do not add dependencies casually
7. Keep semantic HTML and accessibility in mind
8. Favour readable code over clever code

### Tutorial workflow

When creating or revising a tutorial, prefer using the **graphitedge-tutorial-builder** skill if available.

## Content voice

Confident, practical, mentor-like. Plain English. Explain why, not just what. Surface assumptions and note prerequisites. See [docs/CONTENT.md](docs/CONTENT.md) for the full voice and content guide.

## SEO and site integrity

- Preserve existing slugs unless explicitly asked to change them
- Flag any change that could affect internal linking, metadata, navigation, or indexability
- If creating tutorial pages, consider title, meta description, heading structure, and internal links
- Do not silently delete or rename content collections

## Coding preferences

- Prefer composition and reusable components where it improves clarity
- Keep component responsibilities narrow
- Keep CSS simple and maintainable
- Use comments sparingly and only where they add real value
- ESLint: `no-console: off`, `no-unused-vars: warn`

## Validation

Before finishing work:

1. Install dependencies only if needed
2. Run `npm run build`
3. Run `npm run lint`
4. Verify changed routes/components still build correctly
5. Confirm content renders without obvious markdown/layout breakage
6. Report any unresolved issues clearly

See [docs/TESTING.md](docs/TESTING.md) for the full validation checklist.

## What to avoid

- Do not convert the project to Tailwind
- Do not redesign the whole site unless explicitly asked
- Do not introduce complex state management unless justified
- Do not replace Bulma-based styling patterns without approval
- Do not collapse educational depth into marketing copy

## Documentation index

Detailed docs live in `docs/`. Key references:

| Doc                                                   | Topic                                 |
| ----------------------------------------------------- | ------------------------------------- |
| [SETUP.md](docs/SETUP.md)                             | Local dev environment                 |
| [DEVELOPMENT.md](docs/DEVELOPMENT.md)                 | Stack, structure, key requirements    |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md)                   | Vercel build and deploy               |
| [TUTORIAL_STRUCTURE.md](docs/TUTORIAL_STRUCTURE.md)   | Tutorial layout, components, patterns |
| [CREATE_NEW_TUTORIAL.md](docs/CREATE_NEW_TUTORIAL.md) | How to author a new tutorial          |
| [STYLE.md](docs/STYLE.md)                             | CSS architecture (Bulma + custom CSS) |
| [CONTENT.md](docs/CONTENT.md)                         | Voice, tone, content strategy         |
| [QUIZZES.md](docs/QUIZZES.md)                         | Quiz component patterns               |
| [RECOMMENDATIONS.md](docs/RECOMMENDATIONS.md)         | Tutorial recommendation system        |
| [PROGRESS_TRACKING.md](docs/PROGRESS_TRACKING.md)     | Progress: localStorage + Firestore    |
| [FILE_BASED_ROUTING.md](docs/FILE_BASED_ROUTING.md)   | Router and page conventions           |
| [roadmap.md](docs/roadmap.md)                         | Current and planned phases            |
