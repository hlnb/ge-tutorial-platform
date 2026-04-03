# Hunter Tutorial Workflow

Status: transitional workflow guidance. This document is intended as an internal guide for improving tutorials with Hunter-style teaching components while staying aligned with the current GraphiteEdge codebase.

## Purpose

Use this workflow when updating tutorial pages to:

- strengthen lesson structure
- improve learner clarity and reinforcement
- keep quiz/recommendation placement consistent
- work within the existing GraphiteEdge tutorial system instead of creating a parallel one

## Core Rule

Treat the existing tutorial layout, shared components, and custom CSS as intentional.

That means:

- reuse current structures where they exist
- improve consistency incrementally
- avoid rewriting a tutorial section just to make it look “cleaner” on paper

## Recommended Lesson Order

For most fully developed lessons, the preferred order is:

1. breadcrumb navigation
2. tags and title
3. `AnticipatorySet`
4. `LearningObjectives`
5. core lesson content
6. `CheckpointBox` where useful
7. `TutorialRecommendations`
8. `TestYourKnowledgeSection`
9. Hunter closure/summary section
10. completion content where the page uses it

This ordering reflects the clarified project direction and the current live `TestYourKnowledgeSection` component.

## Hunter Components In Current Use

Current Hunter-style components in the repo include:

- `src/components/hunter/AnticipatorySet.vue`
- `src/components/hunter/LearningObjectives.vue`
- `src/components/hunter/CheckpointBox.vue`
- `src/components/hunter/ClosureSection.vue`

Use them to support teaching, not to decorate the page.

## Assessment Placement

Preferred learner-facing assessment pattern:

- `src/components/TestYourKnowledgeSection.vue`

That component already renders:

- `TutorialQuiz`

So, for page composition:

- prefer `TestYourKnowledgeSection`
- place it before the closure/summary section
- avoid duplicate quiz blocks in the same lesson

## Recommendations Placement

Recommendation display currently uses:

- `src/components/TutorialRecommendations.vue`

Place recommendations before the assessment block unless there is a strong lesson-specific reason not to.

## Navigation And Section Context

Tutorial pages should continue to work with:

- `src/layouts/TutorialLayout.vue`
- `src/components/tutorial-navs/*`
- injected `pageSections`

When updating a lesson:

- confirm the page defines sections for sidebar navigation where needed
- prefer existing section/page patterns already used in that part of the repo

## Recommendation And Sequence Data

Current behavior is still transitional.

Live sequence/recommendation logic currently spans:

- `src/layouts/TutorialLayout.vue`
- `src/utils/tutorialUtils.js`
- `src/data/tutorials.js`

Confirmed direction:

- `src/data/tutorials.js` should become the curriculum source of truth

Until that work is complete, do not assume every lesson can be updated by changing only one file.

## Practical Checklist When Enhancing A Tutorial

1. inspect the existing lesson structure first
2. preserve the current route and section placement
3. add or refine Hunter components where they improve teaching clarity
4. verify recommendation placement
5. verify assessment placement
6. confirm there is only one learner-facing assessment block
7. check page sections/sidebar navigation still work
8. test the route in the running app when possible

## Common Failure Modes

- adding Hunter components mechanically without improving the lesson
- duplicating quiz UI by rendering both `TestYourKnowledgeSection` and standalone `TutorialQuiz`
- assuming recommendation or sequence data comes from one central place already
- changing paths/titles without checking the live route structure
- treating older docs as more authoritative than the current code

## Best Current Practice

The safest approach is:

- inspect the live lesson
- follow existing section conventions
- move the page toward the agreed structure without forcing a rewrite
- document any remaining inconsistency rather than hiding it
