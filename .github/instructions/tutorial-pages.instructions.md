---
applyTo: 'src/pages/tutorials/**'
description: 'Use when editing or creating tutorial pages. Loads Hunter lesson component props, section flow, and tutorial conventions.'
---

# Tutorial page conventions

## Lesson section flow

anticipatory set → learning objectives → concept explanation → checkpoint → guided practice → independent practice → resources → recap → closure → recommendations

## Hunter lesson components

Import from `@/components/hunter/`:

### AnticipatorySet

Props: `scenario` (string, v-html)

### LearningObjectives

Props: `objectives` (string[])

### CheckpointBox

Props: `questions` (array of `{ question, answer }`)

### GuidedPractice

Props: `title`, `description`, `steps` (array of `{ title, instructions, hints, hintLabel? }`), `successCriteria` (string[]), `successCriteriaTitle`

- Use `instructions` not `content`
- Use `hints` (string[]) not `hint` (string)

### IndependentPractice

Props: `task` (string, v-html), `requirements` (string[]), `stretchGoals` (string[]), `rubric` (array of `{ criteria, success }`)

- Use `task` not `challenge`
- Use `{ criteria, success }` not `{ criterion, level }`
- No `tips` prop

### ClosureSection

Props: `keyTakeaways` (string[]), `objectives` (plain strings, not objects), `reflectionPrompts` (array of `{ title, icon, questions[] }`)

- `objectives` are plain strings, NOT `{ text, met }`
- `reflectionPrompts` are objects, NOT plain strings

## HTML in template strings

- Template strings with HTML tags: escape with `&lt;`/`&gt;`
- v-html props: double-escape with `&amp;lt;`/`&amp;gt;`

## Other components

- **Quiz:** Use `TestYourKnowledgeSection` over bare `TutorialQuiz` — see [docs/QUIZZES.md](../../docs/QUIZZES.md)
- **Recommendations:** `TutorialRecommendations.vue` with data from `src/data/tutorialRecommendations.js`
- **Sections composable:** `usePageSections` for section tracking in layout

## Layout

Tutorial pages are wrapped by `TutorialLayout.vue` automatically based on route path. Do not manually add layout wrappers.

## File naming

Kebab-case `.vue` files under `src/pages/tutorials/{level}/{section}/`. Adding a file auto-creates the route.
