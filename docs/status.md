# Project Status

Status: current snapshot based on the live repository during the Phase 1 documentation audit.

## Stable Areas

- Vue 3 + Vite app structure is established
- file-based routing is active through `unplugin-vue-router`
- Vercel deployment configuration exists and is straightforward
- the tutorial system already has a reusable layout, section nav components, and supporting tutorial components
- custom CSS working alongside Bulma is part of the current implementation

## Transitional Areas

- tutorial architecture is only partly centralized
- tutorial sequence and metadata still live in more than one place
- some tutorial pages follow newer shared patterns while others still use older/manual page patterns
- documentation quality and freshness vary across the `docs/` folder

## Confirmed Direction

The following project decisions have been clarified:

- `src/data/tutorials.js` should become the source of truth for curriculum data
- section landing pages should keep hand-written intro content but move toward generated tutorial card listings
- `/tutorials` should be the primary entry point for learning pathways
- section pages should act as secondary drill-down pages
- Git Basics belongs under the intermediate level
- the preferred learner-facing assessment pattern is `TestYourKnowledgeSection`, with quiz behavior inside that section and placed before the Hunter summary/closure section

## Current Drift Between Docs And Code

- several docs still reflect older manual/template-oriented workflows
- some docs describe a more unified tutorial system than the current code actually enforces
- deployment/version notes in older docs do not consistently match the live repo config
- some docs are incomplete, malformed, or empty

## Immediate Next Documentation Work

After this Phase 1 update, the next highest-value documentation work is:

1. tutorial architecture docs
2. tutorial authoring and quiz/recommendation docs
3. styling/content/testing docs
4. roadmap and longer-term planning notes

## Important Caution

Until the next documentation phases are complete, contributors should trust the current codebase over older docs where they conflict.
