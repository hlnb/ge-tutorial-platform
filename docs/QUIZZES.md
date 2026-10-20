# Quiz System

Status: partially current. The underlying quiz system described here exists in the repository, but the preferred page-level lesson pattern has shifted toward `TestYourKnowledgeSection`.

## Current Implementation

The current quiz system is built from:

- `src/components/TutorialQuiz.vue`
- `src/components/QuizComponent.vue`
- `src/components/TestYourKnowledgeSection.vue`
- `src/utils/quizUtils.js`
- `src/data/quizzes/*.js`

Key behavior visible in the current repo:

- quiz availability is determined from tutorial path data
- quiz questions are loaded from section quiz data files
- `TutorialQuiz` is the reusable quiz wrapper component
- `TestYourKnowledgeSection` is the current learner-facing assessment block that renders `TutorialQuiz`

## Preferred Lesson Pattern

For tutorial pages, prefer:

- `TestYourKnowledgeSection`

instead of inserting a bare `TutorialQuiz` directly into the lesson unless there is a specific reason to do so.

Why:

- it gives the learner a clearer assessment section
- it standardizes the visual and instructional framing around the quiz
- it matches the direction already present in the live component structure

Preferred placement in a lesson:

1. recommendations
2. `TestYourKnowledgeSection`
3. Hunter summary/closure section

## Quiz Data Files

Quiz questions are currently stored in:

- `src/data/quizzes/html-basics.js`
- `src/data/quizzes/css-basics.js`
- `src/data/quizzes/javascript-basics.js`
- `src/data/quizzes/dom-basics.js`
- `src/data/quizzes/git-basics.js`

Only describe or update quiz data that actually exists in the current repo.

## Adding Or Updating Questions

To add quiz questions for a tutorial:

1. find the matching section quiz file in `src/data/quizzes`
2. add or update the entry that matches the tutorial slug/path convention used by that section
3. verify `quizUtils.js` can resolve the questions for the target route

Current caution:

- different tutorial sections have some variation in how quiz data has been authored over time
- `quizUtils.js` already contains normalization logic for older question shapes

## Question Format

The current system supports question objects with fields such as:

- `text` or normalized `question`
- `options`
- `correctAnswer`
- optional explanation text

Use the same data shape already used in the quiz file you are editing rather than inventing a new structure.

## Progress Tracking

Quiz completion is tied into the current progress tracking system through:

- `src/services/ProgressService.js`
- `src/utils/progressUtils.js`

The quiz system should be treated as part of the broader tutorial progress flow rather than a standalone feature.

## Quiz Indicator

The tutorial layout currently supports quiz indication through:

- `src/layouts/TutorialLayout.vue`

This is still partly route-specific and transitional.

## Best Current Practice

When updating quizzes:

- keep one learner-facing assessment block per tutorial unless there is a clear reason otherwise
- prefer `TestYourKnowledgeSection` for page composition
- verify the tutorial path matches the quiz lookup behavior
- verify the quiz appears in the right position in the lesson

## Troubleshooting

If a quiz does not appear:

1. check the tutorial path
2. check the section quiz file
3. check `src/utils/quizUtils.js`
4. confirm the page is rendering `TestYourKnowledgeSection` or the intended quiz wrapper
5. check for console warnings or component import issues

## Route lookup and saved results

Quiz lookup accepts `/tutorials/<section>/<lesson>` and routes with an optional
`beginner`, `intermediate`, or `advanced` segment. Trailing slashes, query strings,
and fragments do not affect availability. Unknown collections and lessons return
no questions; extra nested path segments do not fall back to another quiz.

Finishing a quiz saves numeric `score`, `total`, `maxScore`, and `percentage`, plus
`passed` and `completedAt`. The pass threshold is 80%, matching the quiz's green
success tier. All finished attempts, including zero scores, are retained and can
be restored on reload. A passing attempt adds the route to `completedQuizzes`;
retakes update the latest result without duplicating or revoking that completion.

The Finish Quiz action waits for persistence. A failed read or write leaves the
answers available with a retry message and does not emit successful completion.
When progress tracking is disabled, the attempt finishes without a storage write.
This follows the service's existing tracking decision; it does not change consent
or authentication policy.

Run `npm run test:quiz` under Node 22. The tests use Node's experimental VM modules
to isolate Firebase and browser storage without network access or new dependencies.
They exercise real quiz data, component logic, guest and mocked Firestore saves,
invalid results, storage failures, retries, and completion boundaries.
