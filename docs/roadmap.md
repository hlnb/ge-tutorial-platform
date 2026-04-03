# Roadmap

Status: current planning document based on the live repository and the tutorial architecture decisions already clarified.

This roadmap is intentionally practical. It focuses on the next documentation and architecture alignment steps visible from the current codebase rather than on speculative future systems.

## Phase 1: Documentation Alignment

Goal:

- make the docs describe the current repo honestly

Status:

- completed for the main development, deployment, setup, tutorial, styling, routing, progress, testing, diagram, and status docs

Outcome:

- current behavior is now documented more accurately
- transitional areas are explicitly labeled
- older template/manual-router assumptions have been removed from active guidance

## Phase 2: Curriculum Source Of Truth

Goal:

- move the tutorial system toward `src/data/tutorials.js` as the canonical curriculum registry

Why:

- the current codebase keeps sequence and tutorial metadata in more than one place
- this duplication increases drift risk between landing pages, navs, recommendations, and previous/next flow

Likely work:

1. review fields already present in `src/data/tutorials.js`
2. define what additional metadata must live there
3. align section/lesson identity rules with real routes
4. decide how tutorial sequence should be derived from the registry

## Phase 3: Generated Section Landing Pages

Goal:

- keep section intro copy hand-authored while generating tutorial cards from curriculum data

Why:

- section landing pages are currently mixed between editorial content and hand-maintained lesson card markup
- generated lesson cards would reduce duplication and keep pathway data aligned

Likely work:

1. preserve current section intros
2. introduce generated lesson listing for section pages
3. verify route/title/order consistency against `src/data/tutorials.js`

## Phase 4: Navigation Alignment

Goal:

- reduce manual tutorial sequence logic in layout and nav components

Why:

- `TutorialLayout.vue`, section nav components, and section landing pages currently share overlapping responsibility
- some route-specific logic still reflects older structures

Likely work:

1. align previous/next generation with curriculum data
2. align section sidebar nav ordering with curriculum data
3. verify Git Basics and other intermediate/advanced sections follow the intended structure

## Phase 5: Recommendation Alignment

Goal:

- move recommendation sequence toward curriculum-driven behavior while preserving useful editorial control

Why:

- current recommendation logic partly lives in `src/utils/tutorialUtils.js`
- next-step flow should support pathways, not just isolated lesson suggestions

Likely work:

1. derive “next tutorial” from curriculum sequence
2. keep related resources/projects editorial where helpful
3. remove avoidable duplication between recommendation and navigation data

## Phase 6: Assessment Pattern Standardization

Goal:

- standardize lesson assessment flow around `TestYourKnowledgeSection`

Why:

- the preferred learner-facing assessment wrapper is already in the repo
- lesson pages still vary in how they place and render quizzes/completion sections

Likely work:

1. audit lesson bottom-section ordering
2. standardize recommendations → assessment → closure flow
3. remove duplicated or conflicting quiz UI where found

## Phase 7: Incremental CSS Consolidation

Goal:

- reduce styling overlap without replacing the Bulma-plus-custom-CSS approach

Why:

- the current styling system works, but it has visible duplication
- simplifying it incrementally will make future tutorial/layout work safer

Likely work:

1. identify overlapping shared rules
2. reduce repeated imports and duplicate selectors where safe
3. keep tutorial/custom CSS structure intact while consolidating intentionally

## Working Principles For All Phases

- prefer the live codebase over older assumptions
- preserve the existing tutorial layout/components/custom CSS unless there is a strong reason to change them
- improve the current system incrementally rather than rewriting it
- keep `/tutorials` as the primary pathway entry point
- keep section pages as secondary drill-down pages
- document drift openly instead of hiding it
