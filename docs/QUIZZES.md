# Adding Quizzes to Tutorials

This document explains how to add quizzes to tutorial pages in the GraphiteEdge platform.

## Overview

The quiz system allows you to add interactive quizzes to any tutorial page. Quizzes help students test their knowledge and reinforce learning. The system includes:

- Pre-defined quiz questions for HTML and CSS tutorials
- A reusable quiz component
- Progress tracking for completed quizzes
- Automatic quiz detection based on the tutorial path

## Adding a Quiz to a Tutorial Page

### Method 1: Using the TutorialQuiz Component (Recommended)

The easiest way to add a quiz to a tutorial page is to use the `TutorialQuiz` component:

```vue
<template>
	<!-- Tutorial content -->

	<!-- Add quiz at the end of the tutorial -->
	<TutorialQuiz />
</template>

<script setup>
import TutorialQuiz from '@/components/TutorialQuiz.vue';
</script>
```

### Method 2: Using the QuizComponent Directly

For more control, you can use the `QuizComponent` directly:

```vue
<template>
	<!-- Tutorial content -->

	<section class="mt-6">
		<h2 class="title is-3">Test Your Knowledge</h2>
		<p class="mb-4">
			Let's see how well you understand the concepts covered in this tutorial.
		</p>

		<QuizComponent />
	</section>
</template>

<script setup>
import QuizComponent from '@/components/QuizComponent.vue';
</script>
```

## Adding Custom Quiz Questions

Quiz questions are defined in the following files:

- `src/data/quizzes/html-basics.js` - Questions for HTML tutorials
- `src/data/quizzes/css-basics.js` - Questions for CSS tutorials

To add questions for a new tutorial, edit the appropriate file and add a new entry:

```javascript
// Example: Adding questions for a new HTML tutorial
'new-tutorial': [
  {
    text: "What is the question?",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    correctAnswer: 1, // Index of the correct option (0-based)
    explanation: "Explanation of why this answer is correct."
  },
  // Add more questions...
]
```

## Quiz Component Props

The `QuizComponent` accepts the following props:

- `title` - The title of the quiz (default: auto-generated based on tutorial name)
- `description` - The description of the quiz (default: auto-generated)
- `questions` - Array of quiz questions (default: auto-loaded based on tutorial path)
- `tutorialPath` - The path of the tutorial (default: current route path)

## Quiz Question Format

Each quiz question should have the following format:

```javascript
{
  text: "The question text",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  correctAnswer: 0, // Index of the correct option (0-based)
  explanation: "Explanation of why this answer is correct."
}
```

## Quiz Events

The `QuizComponent` emits the following events:

- `quiz-started` - Emitted when the quiz is started
- `quiz-completed` - Emitted when the quiz is completed, with the score and total
- `quiz-reset` - Emitted when the quiz is reset

## Progress Tracking

Quiz completion is automatically tracked using the `ProgressService`. When a student completes a quiz, the following information is saved:

- The tutorial path is added to the `completedQuizzes` array
- The quiz result (score, total, completion date) is saved in the `quizResults` object

This information is displayed on the student progress page.

## Quiz Indicator

A quiz indicator is automatically shown on tutorial pages that have quizzes. This indicator can be hidden if the page has its own custom quiz indicator by adding the tutorial path to the `routesWithCustomQuizIndicators` array in `TutorialLayout.vue`.

## Troubleshooting

If a quiz is not appearing on a tutorial page, check the following:

1. Make sure the tutorial path matches the key in the quiz data file
2. Check that the quiz questions are properly formatted
3. Verify that the `QuizComponent` or `TutorialQuiz` component is properly imported
4. Check the browser console for any errors
