# Progress Tracking

Status: partially current. The core storage and progress services are present in the repo, but some earlier descriptions were too broad or too confident about behavior that should still be treated as implementation-specific.

## Current Overview

Progress tracking in the current repository is centered on:

- `src/services/ProgressService.js`
- `src/utils/progressUtils.js`
- `src/composables/useProgress.js`
- `src/pages/my-progress.vue`

Related UI/supporting files include:

- `src/components/ProgressSectionList.vue`
- tutorial completion and quiz components

## Current Storage Model

The live code supports a hybrid model:

- authenticated users: progress stored in Firestore
- guests: progress stored in browser `localStorage`

This behavior is implemented in:

- `src/services/ProgressService.js`

## Tracked Data

The current progress model includes fields such as:

- `completedTutorials`
- `tutorialProgress`
- `inProgressTutorials`
- `completedQuizzes`
- `quizResults`
- `lastVisited`

The service also tracks scroll progress for tutorials through the shared tutorial layout.

## Current UI

The main visible progress page in the current repo is:

- `src/pages/my-progress.vue`

Current UI features visible in that file include:

- auth-aware messaging
- tutorial/quiz summary stats
- section progress views
- quiz result review
- export progress action
- reset progress action

## Current Behavior Notes

Progress-related behavior currently includes:

- quiz completion tracking
- tutorial completion tracking
- scroll progress updates from `TutorialLayout`
- summary/stat calculation via the progress service

The `useProgress` composable provides a convenience layer for components but does not replace the service itself.

## Known Limits And Cautions

Treat the following carefully:

- not every earlier doc claim should be assumed accurate unless visible in current code
- auth sync behavior should be verified against the live service implementation, not just older narrative docs
- export/reset UI is present in `my-progress.vue`, but any broader import/export claims should only be documented if clearly implemented

## Best Current Practice

When editing progress-related features:

- start with `src/services/ProgressService.js`
- verify how `useProgress` is currently used in the UI
- check `my-progress.vue` for actual user-facing behavior
- confirm tutorial components and layout interactions before changing progress assumptions

## Troubleshooting

If progress appears wrong:

1. inspect `src/services/ProgressService.js`
2. inspect `src/utils/progressUtils.js`
3. inspect `src/composables/useProgress.js`
4. inspect `src/pages/my-progress.vue`
5. verify whether the user is authenticated or using local device storage

## Important Documentation Note

This system should be documented from the code outward.

Where docs and implementation disagree, trust the current service/UI code until the architecture is intentionally changed.
