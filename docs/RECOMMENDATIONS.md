# Recommendation System

Status: transitional. Recommendations currently work through the live component/utilities in the repo, but the agreed direction is to align them more closely with curriculum data in `src/data/tutorials.js`.

## Current Implementation

Recommendations are currently displayed through:

- `src/components/TutorialRecommendations.vue`

Current supporting utility:

- `src/utils/tutorialUtils.js`

Current behavior visible in the repo:

- a page can pass recommendation props directly
- if it does not, the component can look up recommendations from utility data
- the component can also use injected tutorial context from the shared tutorial layout

The recommendation block can currently display:

- next tutorial
- related tutorials
- practice projects
- additional resources

## Current Source Of Truth Problem

At the moment, recommendation and sequence information is not fully centralized.

Related tutorial flow is currently split across more than one place, including:

- `src/utils/tutorialUtils.js`
- `src/layouts/TutorialLayout.vue`
- section nav components
- section landing pages
- `src/data/tutorials.js`

This is one of the key architectural drift points in the tutorial system.

## Confirmed Direction

The agreed direction for the project is:

- `src/data/tutorials.js` should be the source of truth for curriculum data
- pathway and sequence logic should align with that data
- `/tutorials` should be the main entry point for pathways
- section landing pages should act as secondary drill-down pages

Applied to recommendations, that means:

- “next tutorial” should move toward curriculum-driven sequence
- pathway progression should shape recommendation behavior
- related tutorials and resource suggestions can remain partly editorial where helpful

## What Should Come From Curriculum Data

These parts are strong candidates to derive from `src/data/tutorials.js`:

- next lesson in sequence
- section and level relationships
- pathway grouping
- project progression where applicable

## What Can Stay Editorial

These parts may still make sense as editorial additions even after curriculum alignment:

- extra related tutorials outside the immediate sequence
- practice project suggestions
- external resources
- hand-curated “use this next if you struggled with X” notes

## Current Best Practice

Until the architecture is further centralized:

- update the existing recommendation structures only where the current section actually depends on them
- do not assume recommendation data is already derived from the curriculum registry
- verify route paths and titles against the live repo, not older examples

## Placement In Lessons

Current preferred lesson flow:

1. tutorial content
2. `TutorialRecommendations`
3. `TestYourKnowledgeSection`
4. Hunter closure/summary

## Troubleshooting

If recommendations do not appear:

1. check whether the page passes direct props
2. check `src/utils/tutorialUtils.js`
3. check the current tutorial path
4. check whether injected tutorial context from `TutorialLayout` is available
5. confirm the links and paths match real routes in `src/pages`
