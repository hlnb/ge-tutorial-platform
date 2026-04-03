# Creating A Tutorial

Status: transitional. This guide reflects the current repository and the agreed direction for the tutorial system, but some manual steps still exist until the curriculum architecture is further centralized.

## Before You Start

GraphiteEdge already has:

- a reusable tutorial layout
- section-specific tutorial nav components
- shared recommendation, quiz, and completion components
- custom CSS that intentionally works alongside Bulma

When creating or editing tutorials, the goal is to extend the existing system rather than recreate it.

## Where Tutorial Files Live

Tutorial page files currently live under:

```text
src/pages/tutorials/
```

Examples from the current repo:

- `src/pages/tutorials/getting-started/how-internet-works.vue`
- `src/pages/tutorials/beginner/html-basics/html-first-page.vue`
- `src/pages/tutorials/intermediate/git-basics/introduction.vue`

Use kebab-case file names and place each tutorial in the correct level/section folder based on the current page structure.

## Registering Tutorial Metadata

Confirmed direction:

- `src/data/tutorials.js` should be the source of truth for curriculum metadata

This means new or changed tutorials should be represented there for pathway/sequence purposes.

At the moment, the system is still transitional, so the codebase may also require updates in older manual structures until those are replaced.

## Current Reality

Today, tutorial behavior is not driven from a single source everywhere yet.

Depending on the section, a new tutorial may still require updates in places such as:

- `src/data/tutorials.js`
- section landing page `index.vue` files
- `src/layouts/TutorialLayout.vue`
- `src/utils/tutorialUtils.js`
- section nav components in `src/components/tutorial-navs/*`

That duplication is a current limitation, not the intended final model.

## Preferred Lesson Structure

A practical lesson in the current system usually includes:

1. breadcrumb navigation
2. tags and title
3. Hunter introductory teaching blocks where appropriate
4. core lesson content
5. optional checkpoints, examples, diagrams, or guided practice
6. recommendations
7. learner assessment
8. closure/summary/completion content

Use the existing tutorial voice and structure already present in the repo rather than inventing a new lesson format.

## Page Wrapper And Navigation Context

Tutorial pages should work with the existing layout and navigation system.

That usually means:

- using the tutorial page wrapper structure already common in the repo
- defining page sections for sidebar “On This Page” behavior

Current patterns in the repo include both:

- manual `inject('pageSections')` assignment
- `usePageSections(sections)`

Prefer the existing helper/composable pattern where it already fits the section you are working in.

## Hunter Components

Hunter-style components currently in use include:

- `AnticipatorySet`
- `LearningObjectives`
- `CheckpointBox`
- `ClosureSection`

Use them intentionally:

- to improve teaching clarity
- to make the lesson more structured
- to support reflection and reinforcement

Do not add them mechanically if they do not help the lesson.

## Assessment Pattern

Preferred learner-facing pattern:

- use `TestYourKnowledgeSection`

Current live component:

- `src/components/TestYourKnowledgeSection.vue`

That component already wraps:

- `TutorialQuiz`

Preferred order near the bottom of a lesson:

1. `TutorialRecommendations`
2. `TestYourKnowledgeSection`
3. Hunter closure/summary section
4. completion content if the page uses it

This matches the clarified direction for the tutorial system.

## Recommendations

Current recommendations are displayed through:

- `src/components/TutorialRecommendations.vue`

Current recommendation data is still partly sourced from:

- `src/utils/tutorialUtils.js`

Longer-term direction:

- recommendation sequence should align with `src/data/tutorials.js`

Until that work is complete, update only the pieces that are actually required by the current section/page.

## Section Landing Pages

Confirmed direction:

- section landing pages should keep hand-written intro content
- lesson cards should be generated from source-of-truth curriculum data

Current reality:

- several section landing pages still have manually written tutorial card grids

Do not assume those grids are already generated.

## Validation Checklist

Before finishing a tutorial update:

1. check the route resolves correctly
2. confirm the tutorial renders inside the shared tutorial layout
3. confirm section navigation still works
4. confirm page sections appear where expected
5. confirm recommendations render if configured
6. confirm the assessment section appears in the right place
7. run build and lint when appropriate and possible

## Important Caution

Until the tutorial architecture is further centralized, always verify what the current section actually does in code before following a purely generic workflow.
