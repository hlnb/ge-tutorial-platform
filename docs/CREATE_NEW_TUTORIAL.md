# Creating New Tutorials

**Complete guide for creating new tutorials from scratch with Hunter teaching methodology, quizzes, and progress tracking.**

---

## Quick Start Checklist

- [ ] Create tutorial Vue file with proper naming
- [ ] Add breadcrumb navigation and metadata tags
- [ ] Integrate Hunter components (AnticipatorySet, LearningObjectives)
- [ ] Write tutorial content with clear sections
- [ ] Add quiz questions to quizzes data file
- [ ] Configure recommendations in tutorialUtils.js
- [ ] Add tutorial card to section index.vue
- [ ] Test navigation, progress tracking, and completion

---

## Step 1: Create Tutorial File

### File Location and Naming

```
src/pages/tutorials/[level]/[section]/[tutorial-name].vue
```

**Examples**:

- `src/pages/tutorials/beginner/html-basics/html-forms.vue`
- `src/pages/tutorials/intermediate/javascript/arrays.vue`
- `src/pages/tutorials/getting-started/dev-environment.vue`

**Naming Convention**:

- Use kebab-case (lowercase with hyphens)
- Be descriptive but concise
- Match the tutorial topic exactly
- Avoid abbreviations unless commonly understood

---

## Step 2: Tutorial Template Structure

### Basic Template

```vue
<template>
	<div class="container section">
		<div class="content tutorial-content">
			<!-- Breadcrumb Navigation -->
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/">
							<i class="fa-solid fa-house mr-2"></i> Home
						</router-link>
					</li>
					<li><router-link to="/tutorials">Tutorials</router-link></li>
					<li>
						<router-link to="/tutorials/[level]/[section]/">
							[Section Name]
						</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">[Tutorial Name]</a>
					</li>
				</ul>
			</nav>

			<!-- Metadata Tags -->
			<div class="tags">
				<span class="tag is-info">Beginner</span>
				<span class="tag is-warning">30 minutes</span>
				<span class="tag is-success">Theory</span>
				<span class="tag is-primary">Practice</span>
			</div>

			<!-- Tutorial Title -->
			<h1 class="title is-1"><i class="[icon-class]"></i> [Tutorial Title]</h1>

			<!-- Hunter Element 1: Anticipatory Set -->
			<AnticipatorySet
				title="🎯 [Engaging Hook Title]"
				:hook="`<p>[Compelling introduction that connects to real-world scenarios]</p>
				<p><strong>Why this matters:</strong> [Real-world application or benefit]</p>`"
				:reflection-prompts="[
					'[Question to activate prior knowledge]',
					'[Question about personal experience]',
					'[Question about challenges or curiosity]',
				]"
				connection="In this tutorial, you'll learn [specific skills and outcomes]."
			/>

			<!-- Hunter Element 2: Learning Objectives -->
			<LearningObjectives
				:objectives="[
					'[Specific, measurable objective 1]',
					'[Specific, measurable objective 2]',
					'[Specific, measurable objective 3]',
					'[Specific, measurable objective 4]',
					'[Specific, measurable objective 5]',
				]"
				purpose="[Explain why these skills are important and how they fit into the bigger picture]"
			/>

			<!-- Main Content Sections -->
			<div class="box">
				<h2 class="title is-3">
					<i class="fas fa-[icon]"></i> [Section Title]
				</h2>
				<p>[Section introduction and context]</p>

				<!-- Subsections, code examples, explanations -->
			</div>

			<!-- Optional: Checkpoint for Formative Assessment -->
			<CheckpointBox
				title="Quick Check: [Topic]"
				:questions="['[Self-check question 1]', '[Self-check question 2]']"
				:tips="['[Key takeaway or tip 1]', '[Key takeaway or tip 2]']"
			/>

			<!-- More content sections as needed -->

			<!-- Recommendations -->
			<TutorialRecommendations
				:current-path="'/tutorials/[level]/[section]/[tutorial-name]'"
			/>

			<!-- Quiz -->
			<TutorialQuiz />

			<!-- Optional: Completion Section -->
			<div class="completion-section mt-6">
				<h2 class="title is-3">
					<i class="fas fa-check-circle"></i> Congratulations!
				</h2>
				<p>You've completed the [Tutorial Name] tutorial!</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import DOMPurify from 'dompurify';

// Components
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';

// Route and page sections
const route = useRoute();
const pageSections = inject('pageSections');

// SEO Meta Tags
useHead({
	title: '[Tutorial Title] - [Section Name] - GraphitEdge Tutorials',
	meta: [
		{
			name: 'description',
			content:
				'[Brief description of what students will learn in this tutorial]',
		},
	],
});

// Define page sections for navigation
onMounted(() => {
	if (pageSections) {
		pageSections.value = [
			{
				id: 'introduction',
				title: 'Introduction',
				subsections: [],
			},
			{
				id: 'main-content',
				title: '[Main Section Title]',
				subsections: [],
			},
			// Add more sections as needed
		];
	}
});

// Tutorial-specific reactive data
const exampleCode = ref('');
const outputPreview = ref('');
</script>

<style scoped>
/* Tutorial-specific styles if needed */
</style>
```

---

## Step 3: Content Structure Best Practices

### Section Organization

**1. Introduction Section** (after Hunter components)

- Context and overview
- Prerequisites (if any)
- What students will build/create

**2. Core Concept Sections**

- Clear heading hierarchy (h2, h3)
- Explanation with examples
- Code snippets with syntax highlighting
- Visual diagrams or screenshots (if helpful)
- Real-world applications

**3. Hands-On Practice**

- Interactive code editors (CodeMirror)
- Step-by-step exercises
- Solution viewers
- Common mistakes to avoid

**4. Advanced Topics** (optional)

- Best practices
- Performance considerations
- Common patterns
- Tips and tricks

### Code Examples

Use CodeMirror component for interactive examples:

```vue
<CodeMirror
	v-model="exampleCode"
	:mode="'htmlmixed'"
	:line-numbers="true"
	:read-only="false"
/>
```

For read-only code blocks:

```vue
<pre><code class="language-html">&lt;div class="example"&gt;
  &lt;p&gt;Hello World&lt;/p&gt;
&lt;/div&gt;</code></pre>
```

### Visual Elements

**Boxes for important information**:

```vue
<div class="box">
  <h3 class="title is-5">💡 Pro Tip</h3>
  <p>Helpful advice or best practice</p>
</div>
```

**Notifications for warnings**:

```vue
<div class="notification is-warning">
  <p><strong>⚠️ Important:</strong> Critical information</p>
</div>
```

**Success messages**:

```vue
<div class="notification is-success is-light">
  <p><strong>✅ Great job!</strong> Positive reinforcement</p>
</div>
```

---

## Step 4: Create Quiz Questions

### Location

`src/data/quizzes/[section].js`

### Add Quiz Entry

```javascript
export const [section]Quizzes = {
	// ... existing quizzes

	'[tutorial-name]': [
		{
			text: 'Question text here?',
			options: [
				'Option A',
				'Option B',
				'Option C',
				'Option D',
			],
			correctAnswer: 0, // Index of correct option
			explanation: 'Explanation of why this is correct and others are wrong.',
		},
		{
			text: 'Second question?',
			options: [
				'Option A',
				'Option B',
				'Option C',
				'Option D',
			],
			correctAnswer: 2,
			explanation: 'Detailed explanation.',
		},
		// Add 5-10 questions per tutorial
	],
};
```

### Quiz Question Guidelines

- **5-10 questions** per tutorial
- Mix difficulty levels (easy → hard)
- Cover all main concepts
- Write clear, unambiguous questions
- Provide helpful explanations
- Avoid trick questions
- Test understanding, not memorization

---

## Step 5: Configure Recommendations

### Location

`src/utils/tutorialUtils.js`

### Add Recommendation Entry

Find the section in `tutorialRecommendations` and add:

```javascript
const tutorialRecommendations = {
	'[section-name]': {
		// ... existing tutorials

		'[tutorial-name]': {
			nextTutorial: {
				path: '/tutorials/[level]/[section]/[next-tutorial]',
				title: '[Next Tutorial Title]',
			},
			relatedTutorials: [
				{
					path: '/tutorials/[level]/[other-section]/[related-tutorial]',
					title: '[Related Tutorial Title]',
				},
			],
			practiceProjects: [
				{
					title: '[Project Name]',
					description: '[Brief project description]',
					tags: ['HTML', 'CSS', 'Beginner'],
					path: '/projects/[project-name]',
				},
			],
			resources: [
				{
					title: '[Resource Name]',
					url: 'https://...',
					description: '[Resource description]',
				},
				{
					title: '[Another Resource]',
					url: 'https://...',
					description: '[Description]',
				},
			],
		},
	},
};
```

### Recommendations Guidelines

- **nextTutorial**: Always include the logical next step
- **relatedTutorials**: 1-2 related topics (optional)
- **practiceProjects**: Hands-on projects to reinforce learning
- **resources**: 2-3 high-quality external resources (MDN, W3C, etc.)

---

## Step 6: Add to Section Index

### Location

`src/pages/tutorials/[level]/[section]/index.vue`

### Add Tutorial Card

```vue
<!-- [Tutorial Name] -->
<div class="column is-one-third">
	<div class="box tutorial-card">
		<h2 class="title is-4">
			<router-link to="/tutorials/[level]/[section]/[tutorial-name]">
				[Tutorial Title]
			</router-link>
		</h2>
		<div class="tags mb-4">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-light">30 mins</span>
			<span class="tag is-primary">Practice</span>
		</div>
		<p>
			[Brief description of what students will learn]
		</p>
		<router-link
			to="/tutorials/[level]/[section]/[tutorial-name]"
			class="button is-primary is-outlined mt-4"
		>
			Start Tutorial
		</router-link>
	</div>
</div>
```

### Update Tutorial Metadata

Also update the tutorial metadata in `my-progress.vue` if needed:

```javascript
tutorialMetadata: {
	'[section-name]': {
		title: '[Section Title]',
		tutorials: {
			// ... existing tutorials
			'/tutorials/[level]/[section]/[tutorial-name]': {
				title: '[Tutorial Title]'
			},
		},
	},
}
```

---

## Step 7: Testing Checklist

### Functionality Tests

- [ ] Tutorial loads without errors
- [ ] Breadcrumb navigation works correctly
- [ ] All Hunter components render properly
- [ ] Code examples display correctly
- [ ] Interactive elements (CodeMirror) function
- [ ] Quiz questions load and can be completed
- [ ] Recommendations section displays with content
- [ ] Progress tracking marks tutorial as visited
- [ ] Completion tracking works correctly
- [ ] Links to next tutorial work

### Content Review

- [ ] Spelling and grammar checked
- [ ] Code examples are correct and tested
- [ ] Learning objectives match content
- [ ] Prerequisites are clearly stated
- [ ] Images/diagrams load properly
- [ ] External links are valid
- [ ] Content flows logically

### Browser Console Check

- [ ] No Vue warnings
- [ ] No JavaScript errors
- [ ] No 404 errors for resources
- [ ] No console warnings about missing components

---

## Common File Locations Reference

```
src/
├── pages/
│   └── tutorials/
│       ├── getting-started/
│       │   ├── index.vue
│       │   └── [tutorial-name].vue
│       ├── beginner/
│       │   ├── html-basics/
│       │   │   ├── index.vue
│       │   │   └── [tutorial-name].vue
│       │   └── css-basics/
│       │       ├── index.vue
│       │       └── [tutorial-name].vue
│       └── intermediate/
│           └── javascript/
│               ├── index.vue
│               └── [tutorial-name].vue
├── data/
│   └── quizzes/
│       ├── html-basics.js
│       ├── css-basics.js
│       └── [section].js
├── components/
│   ├── hunter/
│   │   ├── AnticipatorySet.vue
│   │   ├── LearningObjectives.vue
│   │   └── CheckpointBox.vue
│   ├── TutorialQuiz.vue
│   └── TutorialRecommendations.vue
└── utils/
    └── tutorialUtils.js
```

---

## Writing Style Guidelines

### Tone

- Friendly and encouraging
- Clear and concise
- Assume beginner knowledge
- Explain technical terms
- Use active voice

### Structure

- Short paragraphs (2-4 sentences)
- Bullet points for lists
- Code examples after explanations
- Visual breaks between sections
- Clear headings and subheadings

### Examples

- Always include working code examples
- Explain what each line does
- Show common mistakes and corrections
- Provide real-world use cases
- Include interactive demos when possible

---

## Hunter Teaching Methodology

### Why Hunter Model?

The Hunter model improves learning outcomes by:

1. **Activating prior knowledge** (Anticipatory Set)
2. **Setting clear objectives** (Learning Objectives)
3. **Checking understanding** (Checkpoint Boxes)
4. **Providing guided practice** (Hands-on exercises)
5. **Assessing learning** (Quizzes)

### Component Usage

**AnticipatorySet**: Start of tutorial

- Hook students' attention
- Connect to prior knowledge
- Create curiosity and motivation

**LearningObjectives**: After anticipatory set

- Set clear expectations
- Help students self-assess
- Provide roadmap for tutorial

**CheckpointBox**: After major sections

- Check understanding before proceeding
- Reinforce key concepts
- Identify areas needing review

---

## Example: Creating a Tutorial from Scratch

Let's create a tutorial: "CSS Flexbox Basics"

### 1. Create File

`src/pages/tutorials/beginner/css-basics/flexbox.vue`

### 2. Set Up Template

- Add breadcrumb: Home > Tutorials > CSS Basics > Flexbox
- Add tags: Beginner, 45 minutes, Practice
- Add title: "CSS Flexbox Basics"

### 3. Add Hunter Components

```vue
<AnticipatorySet
	title="📦 Mastering Modern Layouts"
	:hook="`<p>Remember struggling to center a div? Flexbox makes layout challenges simple and intuitive.</p>`"
	:reflection-prompts="[
		'What layout challenges have you faced?',
		'How do you currently align items?',
	]"
	connection="Learn to create flexible, responsive layouts with ease."
/>

<LearningObjectives
	:objectives="[
		'Understand the flexbox layout model',
		'Use flex container and item properties',
		'Create responsive layouts with flexbox',
	]"
	purpose="Flexbox is essential for modern web layout."
/>
```

### 4. Add Content Sections

- Introduction to Flexbox
- Flex Container Properties
- Flex Item Properties
- Common Layout Patterns
- Practice Exercises

### 5. Create Quiz

In `src/data/quizzes/css-basics.js`, add 'flexbox' entry with 7 questions

### 6. Configure Recommendations

In `src/utils/tutorialUtils.js`:

- Next: CSS Grid
- Related: CSS Layout Basics
- Projects: Responsive Navigation
- Resources: MDN Flexbox Guide, CSS-Tricks Flexbox Guide

### 7. Add to Index

Update `src/pages/tutorials/beginner/css-basics/index.vue` with tutorial card

### 8. Test

- Navigate to tutorial
- Complete quiz
- Check progress tracking
- Verify all links work

---

## Tips for Success

1. **Start with an outline** - Plan sections before coding
2. **Use existing tutorials as templates** - Copy structure from similar tutorials
3. **Test as you go** - Don't wait until the end to test
4. **Get feedback** - Have others review content
5. **Update incrementally** - Don't try to do everything at once
6. **Keep it simple** - Clear and concise beats comprehensive and confusing
7. **Use visuals** - Diagrams, screenshots, and examples enhance learning
8. **Provide context** - Explain WHY, not just HOW
9. **Include practice** - Learning by doing is most effective
10. **Celebrate progress** - Encourage and motivate learners

---

## Troubleshooting

### Tutorial doesn't appear in navigation

- Check file path matches router expectations
- Verify file is in correct directory
- Check for typos in filename

### Hunter components not rendering

- Verify imports in script section
- Check component names match exactly
- Look for Vue warnings in console

### Quiz not loading

- Verify quiz exists in quizzes file
- Check tutorial key matches filename
- Ensure TutorialQuiz component is imported

### Recommendations showing "No recommendations found"

- Check tutorial key in tutorialUtils.js
- Verify path matches exactly
- Look for typos in section or tutorial name

### Progress not tracking

- Check TutorialCompletion component
- Verify progress service is working
- Test with browser console open

---

## Additional Resources

- [Hunter Teaching Model Overview](HUNTER_TUTORIAL_ENHANCEMENT.md)
- [Tutorial Structure Documentation](TUTORIAL_STRUCTURE.md)
- [Progress Tracking Documentation](PROGRESS_TRACKING.md)
- [Quiz Component Documentation](QUIZZES.md)

---

## Quick Reference: Required Imports

```javascript
// Essential imports for every tutorial
import { ref, computed, inject, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';

// Hunter components (required)
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';

// Tutorial components (as needed)
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import CodeMirror from '@/components/CodeMirror.vue';

// Utilities (as needed)
import DOMPurify from 'dompurify';
```

---

## Need Help?

If you encounter issues:

1. Check browser console for errors
2. Review existing tutorials for examples
3. Verify all file paths are correct
4. Test incrementally as you build
5. Refer to component documentation

Happy tutorial creating! 🚀
