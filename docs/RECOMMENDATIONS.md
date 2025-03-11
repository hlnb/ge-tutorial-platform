# Adding Tutorial Recommendations

This document explains how to add personalized recommendations to tutorial pages in the GraphiteEdge platform.

## Overview

The tutorial recommendation system helps guide users to relevant content after completing a tutorial. It provides:

- Next tutorial in sequence
- Related tutorials on similar topics
- Practice projects to apply what they've learned
- Additional resources for deeper learning

## Adding Recommendations to a Tutorial Page

### Method 1: Using the TutorialRecommendations Component (Recommended)

The easiest way to add recommendations to a tutorial page is to use the `TutorialRecommendations` component:

```vue
<template>
	<!-- Tutorial content -->

	<!-- Add recommendations before the quiz -->
	<TutorialRecommendations />

	<!-- Quiz and completion sections -->
</template>

<script setup>
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
// Other imports...
</script>
```

### Method 2: Using the TutorialRecommendations Component with Custom Recommendations

For more control, you can pass custom recommendations directly to the component:

```vue
<template>
	<!-- Tutorial content -->

	<TutorialRecommendations
		:next-tutorial="nextTutorial"
		:related-tutorials="relatedTutorials"
		:practice-projects="practiceProjects"
		:resources="resources"
	/>

	<!-- Quiz and completion sections -->
</template>

<script setup>
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
// Other imports...

// Custom recommendations
const nextTutorial = {
	path: '/tutorials/html-basics/text',
	title: 'Working with Text',
};

const relatedTutorials = [
	{
		path: '/tutorials/getting-started/web-basics',
		title: 'Web Basics',
	},
];

const practiceProjects = [
	{
		title: 'Personal Profile Page',
		description:
			'Create a simple personal profile page with basic HTML structure',
		tags: ['HTML', 'Beginner', 'Structure'],
		path: '/projects/personal-profile',
	},
];

const resources = [
	{
		title: 'MDN: Getting started with HTML',
		url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
		description: 'Comprehensive guide to HTML basics',
	},
];
</script>
```

## Adding Global Recommendations

To add or update global recommendations for all tutorials, edit the `tutorialRecommendations` object in `src/utils/tutorialUtils.js`.

### Recommendation Structure

The recommendations are organized by section and tutorial:

```javascript
const tutorialRecommendations = {
	'html-basics': {
		'first-page': {
			nextTutorial: {
				path: '/tutorials/html-basics/text',
				title: 'Working with Text',
			},
			relatedTutorials: [
				{
					path: '/tutorials/getting-started/web-basics',
					title: 'Web Basics',
				},
			],
			practiceProjects: [
				{
					title: 'Personal Profile Page',
					description:
						'Create a simple personal profile page with basic HTML structure',
					tags: ['HTML', 'Beginner', 'Structure'],
					path: '/projects/personal-profile',
				},
			],
			resources: [
				{
					title: 'MDN: Getting started with HTML',
					url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
					description: 'Comprehensive guide to HTML basics',
				},
			],
		},
		// More tutorials...
	},
	// More sections...
};
```

## Recommendation Types

### Next Tutorial

The next tutorial in the learning sequence:

```javascript
nextTutorial: {
  path: '/tutorials/html-basics/text',
  title: 'Working with Text'
}
```

### Related Tutorials

Other tutorials that complement the current one:

```javascript
relatedTutorials: [
	{
		path: '/tutorials/getting-started/web-basics',
		title: 'Web Basics',
	},
	{
		path: '/tutorials/css-basics/text-properties',
		title: 'CSS Text Properties',
	},
];
```

### Practice Projects

Projects that help apply the concepts learned:

```javascript
practiceProjects: [
	{
		title: 'Personal Profile Page',
		description:
			'Create a simple personal profile page with basic HTML structure',
		tags: ['HTML', 'Beginner', 'Structure'],
		path: '/projects/personal-profile', // Internal link
	},
	{
		title: 'CSS Zen Garden',
		description: 'Practice CSS by styling the same HTML in different ways',
		tags: ['CSS', 'Design', 'Creativity'],
		url: 'http://www.csszengarden.com/', // External link
	},
];
```

### Resources

Additional learning resources:

```javascript
resources: [
	{
		title: 'MDN: Getting started with HTML',
		url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
		description: 'Comprehensive guide to HTML basics',
	},
];
```

## Best Practices

1. **Relevance**: Ensure recommendations are directly relevant to the current tutorial
2. **Progression**: The next tutorial should follow a logical learning progression
3. **Variety**: Include a mix of related tutorials, projects, and external resources
4. **Quality**: Only link to high-quality, up-to-date external resources
5. **Consistency**: Maintain a consistent style and format across all recommendations

## Troubleshooting

If recommendations are not appearing:

1. Check that the `TutorialRecommendations` component is properly imported
2. Verify the tutorial path is correctly formatted in `tutorialUtils.js`
3. Ensure the recommendations object has the correct structure
4. Check the browser console for any errors
