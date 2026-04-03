# File-Based Routing

Status: current for the route generation setup, but not a complete description of every navigation behavior in the app.

## Current Setup

The repository uses:

- `unplugin-vue-router`

through the current Vite config in:

- `vite.config.js`

The application router uses:

- `src/router/index.js`

and imports auto-generated routes from:

- `vue-router/auto-routes`

## What Is Automatic

Page files in:

- `src/pages/**`

generate routes automatically.

Examples from the current repo:

- `src/pages/index.vue` → `/`
- `src/pages/about.vue` → `/about`
- `src/pages/tutorials/index.vue` → `/tutorials`
- `src/pages/tutorials/beginner/html-basics/introduction.vue` → `/tutorials/beginner/html-basics/introduction`
- `src/pages/posts/design-to-code.vue` → `/posts/design-to-code`

## What Is Still Manual

File-based routing does not mean the whole site is fully configuration-free.

The current app still contains manual route-dependent behavior in places such as:

- `src/App.vue`
  tutorial pages are conditionally wrapped in `TutorialLayout`
- `src/layouts/TutorialLayout.vue`
  tutorial-specific navigation and route-based layout behavior
- tutorial nav components in `src/components/tutorial-navs/*`
- older tutorial sequence and recommendation logic that still depends on route patterns

So:

- page route creation is automatic
- tutorial behavior and navigation are still partly hand-managed

## Current Configuration

Live config in `vite.config.js` includes:

- `routesFolder: 'src/pages'`
- `extensions: ['.vue']`
- `exclude: ['**/components/**', '**/layouts/**']`
- route type generation into `src/typed-router.d.ts`

## Practical Contributor Notes

When creating a new page:

1. place the `.vue` file under the correct `src/pages` folder
2. confirm the generated route is what you expect
3. check whether any additional manual tutorial/navigation/config updates are still needed for that specific area

Do not assume that creating a new tutorial page fully wires it into sequence, sidebar navigation, recommendations, or curriculum metadata automatically.

## Admin And Local Dev Note

The current Vite config also includes a local development middleware for `/admin`.

That is part of the current development setup and is separate from normal page route generation.

## Best Current Practice

Treat file-based routing as:

- authoritative for page route creation
- not yet authoritative for the full tutorial information architecture

Always check the surrounding tutorial/layout code when adding or moving tutorial pages.
