# Tutorial Architecture

Status: partially current. This document describes the live tutorial system in the repository and notes where the architecture is still transitional.

## Current Overview

GraphiteEdge tutorial pages are built on top of an existing shared tutorial system.

The core live pieces are:

- `src/layouts/TutorialLayout.vue`
- `src/components/tutorial-navs/*`
- `src/components/TutorialNavigation.vue`
- `src/components/TutorialRecommendations.vue`
- `src/components/TutorialCompletion.vue`
- `src/components/TestYourKnowledgeSection.vue`
- `src/components/TutorialQuiz.vue`
- `src/services/ProgressService.js`
- `src/utils/quizUtils.js`
- `src/utils/tutorialUtils.js`
- `src/composables/usePageSections.js`

Tutorial pages themselves live under `src/pages/tutorials/**`.

## Shared Layout

The reusable tutorial layout lives in:

- `src/layouts/TutorialLayout.vue`

This layout currently provides:

- section-specific sidebar navigation
- a mobile lesson menu/drawer
- injected `pageSections` for “On This Page” style navigation
- previous/next tutorial navigation
- quiz indicator support
- completion display support
- scroll-based progress tracking

The layout is used from:

- `src/App.vue`

Current route behavior:

- tutorial routes under `/tutorials/...` use the shared tutorial layout
- `/tutorials` itself is handled separately as the pathway landing page

## Tutorial Page Structure In Practice

Most lesson pages currently follow this broad pattern:

1. breadcrumb navigation
2. tags and title
3. tutorial teaching content
4. Hunter components where used
5. optional code examples, diagrams, or guided practice
6. recommendations
7. assessment
8. closure/completion content

However, this is not yet fully standardized across all tutorial files.

Current reality:

- some pages use `usePageSections(sections)`
- some pages still inject and assign `pageSections` manually
- some pages are more fully built out than others
- some intermediate/advanced pages are still lighter or stub-like

## Assessment Pattern

The current learner-facing assessment wrapper is:

- `src/components/TestYourKnowledgeSection.vue`

That component already renders:

- `TutorialQuiz`

This means the quiz system is still reusable internally through `TutorialQuiz`, but the preferred page-level assessment pattern is the `TestYourKnowledgeSection` block rather than dropping a raw `TutorialQuiz` into the page by itself.

## Recommendations And Navigation

Current recommendation display uses:

- `src/components/TutorialRecommendations.vue`

Current recommendation data is still partly maintained in:

- `src/utils/tutorialUtils.js`

Current previous/next tutorial flow is still partly maintained inside:

- `src/layouts/TutorialLayout.vue`

This is one of the major transitional areas in the system.

## Progress Tracking

Current progress tracking is handled primarily through:

- `src/services/ProgressService.js`
- `src/utils/progressUtils.js`
- `src/composables/useProgress.js`

The tutorial layout currently participates in progress tracking by monitoring scroll progress and exposing tutorial context used by other tutorial components.

## Curriculum And Pathways

The strongest current curriculum registry is:

- `src/data/tutorials.js`

This file already contains structured pathway, level, and tutorial metadata for the pathway landing page and related tutorial browsing components.

Current pathway landing page implementation is centered on:

- `src/pages/tutorials/index.vue`
- `src/components/tutorials/TutorialsPage.vue`
- `src/components/tutorials/*`

## Confirmed Direction

The following direction has been clarified and should guide future architecture work:

- `src/data/tutorials.js` should become the source of truth for curriculum data
- `/tutorials` should remain the main entry point for learning pathways
- section landing pages should become secondary drill-down pages
- section landing pages should keep hand-written introductory content
- section landing page tutorial cards should be generated from source-of-truth curriculum data
- section navs and previous/next navigation should move toward reading from the same curriculum source
- Git Basics belongs under the intermediate level

## Current Gaps

The system is not yet fully centralized.

Important areas of drift visible in the code:

- tutorial sequence is maintained in more than one place
- recommendation data and curriculum data are separate
- section page card grids are still hand-authored in several section `index.vue` files
- not all tutorials use the same page composition pattern
- some route-specific logic in tutorial navigation/layout still reflects older structures

## Best Current Practice

When editing or creating tutorials in the current repository:

- reuse the existing tutorial layout and components
- preserve the Bulma-plus-custom-CSS layering
- treat `src/data/tutorials.js` as the long-term curriculum registry
- avoid introducing new parallel tutorial patterns unless necessary
- improve consistency incrementally rather than rewriting the system wholesale

## Related Docs

- [CREATE_NEW_TUTORIAL.md](./CREATE_NEW_TUTORIAL.md)
- [QUIZZES.md](./QUIZZES.md)
- [RECOMMENDATIONS.md](./RECOMMENDATIONS.md)
- [HUNTER_TUTORIAL_ENHANCEMENT.md](./HUNTER_TUTORIAL_ENHANCEMENT.md)
