<template>
	<div class="container section">
		<div class="content tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/"
							><i class="fa-solid fa-house mr-2"></i> Home</router-link
						>
					</li>
					<li><router-link to="/tutorials">Tutorials</router-link></li>
					<li>
						<router-link to="/tutorials/beginner/css-basics"
							>CSS Basics</router-link
						>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Introduction</a>
					</li>
				</ul>
			</nav>

			<div class="tags mb-4">
				<span class="tag is-info">{{ frontmatter.difficulty }}</span>
				<span class="tag is-warning">{{ frontmatter.duration }}</span>
				<span v-for="tag in frontmatter.tags" :key="tag" class="tag is-light">
					{{ tag }}
				</span>
			</div>

			<h1 class="title is-1">
				<i class="fa-brands fa-css css-icon"></i>
				{{ frontmatter.title }}
			</h1>

			<!-- Hunter Element 1: Anticipatory Set -->
			<AnticipatorySet
				title="🎨 Transforming the Web from Plain to Beautiful"
				:hook="`<p>Every stunning website you've ever visited—from your favorite social media platform to beautifully designed portfolios—uses CSS to create its visual appeal. Without CSS, the web would be nothing but plain black text on white backgrounds.</p>
				<p><strong>Think about it:</strong> Have you ever wondered how designers make buttons hover with color changes, create smooth animations, or ensure websites look perfect on both phones and desktops? The answer is CSS.</p>`"
				:reflection-prompts="[
					'What makes a website visually appealing to you?',
					'Have you noticed how some websites adapt beautifully to your phone screen?',
					'Why do you think separating content from design matters?'
				]"
				connection="In this tutorial, you'll learn the fundamental concepts of CSS and how to add professional styling to your web pages. This is where your journey into beautiful web design begins."
			/>

			<!-- Hunter Element 2: Learning Objectives -->
			<LearningObjectives
				:objectives="[
					'Understand what CSS is and its role in web development',
					'Learn the three different ways to add CSS to HTML documents',
					'Master basic CSS syntax and selector usage',
					'Apply CSS naming conventions for clean, maintainable code',
					'Write your first CSS rules to style web content',
					'Understand the cascade and how styles are applied',
					'Use browser developer tools to inspect and modify CSS'
				]"
				purpose="CSS is the cornerstone of modern web design. Mastering these fundamentals will enable you to transform any HTML content into visually appealing, professional websites. Every web developer must understand CSS deeply—it's one of the three core technologies of the web."
			/>

			<article class="tutorial">
				<!-- Introduction -->
				<p class="lead">
					CSS (Cascading Style Sheets) is what makes the web beautiful. It
					transforms plain HTML into visually appealing websites.
				</p>

				<div class="highlight-box">
					<h3 class="subtitle is-4">In this tutorial, you'll learn:</h3>
					<ul class="icon-list">
						<li><i class="fas fa-code"></i> What CSS is and how it works</li>
						<li>
							<i class="fas fa-code"></i> Different ways to add CSS to HTML
						</li>
						<li><i class="fas fa-code"></i> Basic CSS syntax</li>
						<li><i class="fas fa-code"></i> CSS naming conventions</li>
					</ul>
				</div>

				<div class="box is-info mb-6">
					<h3 class="title is-4">
						<i class="fas fa-lightbulb"></i> Why CSS Matters
					</h3>
					<ul class="icon-list">
						<li>
							<i class="fas fa-code"></i> Separates content (HTML) from
							presentation (CSS)
						</li>
						<li>
							<i class="fas fa-code"></i> Enables responsive design for
							different screen sizes
						</li>
						<li><i class="fas fa-code"></i> Improves website accessibility</li>
						<li>
							<i class="fas fa-code"></i> Makes maintenance easier with reusable
							styles
						</li>
						<li>
							<i class="fas fa-code"></i> Reduces page load times with efficient
							styling
						</li>
					</ul>
				</div>

				<h2 id="what-is-css" class="title is-3 mt-5">What is CSS?</h2>
				<p>
					CSS is a style sheet language that describes how HTML elements should
					look on screen. It controls:
				</p>
				<ul class="icon-list">
					<li><i class="fas fa-palette"></i> Colors</li>
					<li><i class="fas fa-font"></i> Fonts</li>
					<li><i class="fas fa-arrows-alt"></i> Spacing</li>
					<li><i class="fas fa-th-large"></i> Layout</li>
					<li><i class="fas fa-film"></i> Animations</li>
					<li><i class="fas fa-plus-circle"></i> And much more!</li>
				</ul>

				<h2 id="how-css-works" class="title is-3 mt-5">How CSS Works</h2>
				<p>
					CSS works by applying styles to HTML elements through a process called
					the cascade. When a web browser reads your CSS, it:
				</p>

				<ol>
					<li>Loads the HTML content first</li>
					<li>Processes any CSS rules that match elements on the page</li>
					<li>Applies styles according to specificity and cascade rules</li>
					<li>Renders the final styled page</li>
				</ol>

				<div id="selectors" class="mt-4">
					<h3 id="selectors-title" class="title is-4">Selectors</h3>
					<p>
						Selectors tell the browser which HTML elements should be styled.
						They can target:
					</p>
					<ul>
						<li>Element types (like paragraphs or headings)</li>
						<li>Classes (custom groups of elements)</li>
						<li>IDs (unique elements)</li>
						<li>Elements in specific relationships</li>
					</ul>
				</div>

				<div id="properties" class="mt-4">
					<h3 id="properties-title" class="title is-4">Properties</h3>
					<p>
						Properties are the specific aspects of an element you want to style,
						such as:
					</p>
					<ul>
						<li>Colors and backgrounds</li>
						<li>Text and fonts</li>
						<li>Spacing and layout</li>
						<li>Borders and shadows</li>
					</ul>
				</div>

				<div id="values" class="mt-4">
					<h3 id="values-title" class="title is-4">Values</h3>
					<p>Values define how properties should be styled. These can be:</p>
					<ul>
						<li>Keywords (like 'red' or 'bold')</li>
						<li>Numbers with units (like '16px' or '2em')</li>
						<li>Functions (like 'rgb()' or 'calc()')</li>
					</ul>
				</div>

				<div id="cascade" class="mt-4">
					<h3 id="cascade-title" class="title is-4">The Cascade</h3>
					<p>
						The cascade determines which styles take precedence when multiple
						rules target the same element. It considers:
					</p>
					<ul>
						<li>Specificity of selectors</li>
						<li>Source order of CSS rules</li>
						<li>Importance (normal vs !important)</li>
					</ul>
				</div>

				<h2 id="adding-css" class="title is-3 mt-5">Adding CSS to HTML</h2>
				<p>There are three ways to add CSS to your HTML documents:</p>

				<h3 id="inline" class="subtitle is-5">1. Inline CSS</h3>
				<p>Added directly to HTML elements using the style attribute:</p>
				<div class="box">
					<h3 class="title is-4">Inline CSS Example:</h3>
					<CodeMirror v-model="inlineExample" :height="100" :readonly="true" />
					<div
						class="preview-container mt-4"
						v-html="sanitizedInlinePreview"
					></div>
				</div>

				<h3 id="internal" class="subtitle is-5">2. Internal CSS</h3>
				<p>Added in the head section using style tags:</p>
				<div class="box">
					<h3 class="title is-4">Internal CSS Example:</h3>
					<CodeMirror
						v-model="internalExample"
						:height="200"
						:readonly="true"
					/>
					<div
						class="preview-container mt-4"
						v-html="sanitizedInternalPreview"
					></div>
				</div>

				<h3 id="external" class="subtitle is-5">
					3. External CSS (Recommended)
				</h3>
				<p>Stored in a separate .css file and linked in the HTML:</p>
				<div class="box">
					<h3 class="title is-4">External CSS Example:</h3>
					<CodeMirror
						v-model="externalExample"
						:height="250"
						:readonly="true"
					/>
					<div
						class="preview-container mt-4"
						v-html="sanitizedExternalPreview"
					></div>
				</div>

				<h2 id="css-syntax" class="title is-3 mt-5">CSS Syntax</h2>
				<p>CSS rules have two main parts:</p>
				<ol>
					<li>Selector: What to style</li>
					<li>Declaration block: How to style it</li>
				</ol>
				<div class="box">
					<CodeMirror v-model="syntaxExample" :height="150" :readonly="true" />
				</div>

				<h2 id="css-naming-conventions" class="title is-3 mt-5">
					CSS Naming Conventions
				</h2>
				<p>Examples of what to avoid:</p>
				<div class="box">
					<CodeMirror
						v-model="badNamingExample"
						:height="200"
						:readonly="true"
					/>
				</div>

				<p>Better examples:</p>
				<div class="box">
					<CodeMirror
						v-model="goodNamingExample"
						:height="200"
						:readonly="true"
					/>
				</div>

				<div class="box is-warning mb-6">
					<h3 class="title is-4">
						<i class="fas fa-exclamation-triangle"></i> Common Beginner Mistakes
					</h3>
					<ul class="icon-list">
						<li>
							<i class="fas fa-file-code"></i> Not closing CSS rules with a
							semicolon
						</li>
						<li>
							<i class="fas fa-file-code"></i> Forgetting to link the CSS file
							to HTML
						</li>
						<li>
							<i class="fas fa-file-code"></i> Mixing up class and ID selectors
							(. vs #)
						</li>
						<li>
							<i class="fas fa-file-code"></i> Misspelling property names or
							values
						</li>
						<li>
							<i class="fas fa-file-code"></i> Using the wrong file path for
							external CSS
						</li>
					</ul>
				</div>

				<div class="box is-success mb-6">
					<h2 class="title is-4">
						<i class="fas fa-check-circle"></i> Best Practices
					</h2>
					<ul class="icon-list">
						<li>
							<i class="fas fa-file-code"></i> Use external CSS files for better
							organization
						</li>
						<li>
							<i class="fas fa-file-code"></i> Follow consistent naming
							conventions
						</li>
						<li>
							<i class="fas fa-file-code"></i> Comment your code for clarity
						</li>
						<li>
							<i class="fas fa-file-code"></i> Keep selectors simple and
							efficient
						</li>
						<li>
							<i class="fas fa-file-code"></i> Test across different browsers
						</li>
					</ul>
				</div>

				<div class="box mb-6">
					<h2 class="title is-4">
						<i class="fas fa-tools"></i> Essential Tools
					</h2>
					<div class="columns">
						<div class="column">
							<h3 class="subtitle is-5">Code Editors</h3>
							<ul class="icon-list">
								<li><i class="fas fa-code"></i> Visual Studio Code</li>
								<li><i class="fas fa-code"></i> Sublime Text</li>
								<li><i class="fas fa-code"></i> Atom</li>
							</ul>
						</div>
						<div class="column">
							<h3 class="subtitle is-5">Browser Tools</h3>
							<ul class="icon-list">
								<li><i class="fas fa-code"></i> Chrome DevTools</li>
								<li><i class="fas fa-code"></i> Firefox Inspector</li>
								<li><i class="fas fa-code"></i> Safari Web Inspector</li>
							</ul>
						</div>
						<div class="column">
							<h3 class="title is-5">Validation</h3>
							<ul class="icon-list">
								<li><i class="fas fa-file-code"></i> W3C CSS Validator</li>
								<li><i class="fas fa-file-code"></i> CSS Lint</li>
								<li><i class="fas fa-file-code"></i> Stylelint</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="notification is-info is-light">
					<p>
						<strong>Pro Tip:</strong> As you work through these tutorials, try
						experimenting with the code examples in your browser's DevTools.
						It's a great way to learn how CSS properties affect elements in
						real-time!
					</p>
				</div>

				<div class="box">
					<h2 id="practice" class="title is-3">
						<i class="fas fa-laptop-code"></i> Getting Ready to Practice
					</h2>

					<div class="content">
						<p>
							Remember, you have several options to practice CSS as you learn:
						</p>

						<h3 class="title is-4">Code Editor Options</h3>
						<ul class="practice-list">
							<li>
								<i class="fas fa-desktop"></i>
								<div>
									<strong>Local Editor:</strong> Use VS Code or your preferred
									code editor with your practice files
								</div>
							</li>
							<li>
								<i class="fas fa-cloud"></i>
								<div>
									<strong>Online Editor:</strong> Use CodePen or our built-in
									editor for quick experiments
								</div>
							</li>
						</ul>

						<h3 class="title is-4">Practice Methods</h3>
						<ul class="practice-list">
							<li>
								<i class="fas fa-code"></i>
								<div>
									<strong>Follow Along:</strong> Code along with each example in
									your editor
								</div>
							</li>
							<li>
								<i class="fas fa-pencil-alt"></i>
								<div>
									<strong>Take Notes:</strong> Write down key concepts and
									create your own reference guide
								</div>
							</li>
							<li>
								<i class="fas fa-puzzle-piece"></i>
								<div>
									<strong>Experiment:</strong> Try modifying the examples to see
									how changes affect the output
								</div>
							</li>
						</ul>

						<div class="notification is-info is-light mt-4">
							<i class="fas fa-lightbulb"></i>
							<strong>Learning Tip:</strong> The best way to learn CSS is
							through hands-on practice. Try to spend at least 50% of your
							learning time actively coding and experimenting.
						</div>
					</div>
				</div>

				<div class="cta-box">
					<p>
						Ready to practice what you've learned? Try the exercises in the next
						section!
					</p>
				</div>
			</article>

		<!-- Hunter Element: Checkpoint -->
		<CheckpointBox :questions="checkpointQuestions" />

		<!-- Hunter Element: Closure -->
		<ClosureSection
			:key-takeaways="closureKeyTakeaways"
			:objectives="closureObjectives"
			:reflection-prompts="closureReflectionPrompts"
			real-world-application="<p>Every professional website uses CSS to create its visual identity. Companies like Apple, Google, and Airbnb employ teams of CSS specialists to craft beautiful, consistent user experiences. CSS frameworks like Bootstrap and Tailwind CSS, used by millions of websites, are built on the same fundamental CSS principles you're learning now.</p><p>Understanding CSS fundamentals is crucial before using frameworks or preprocessors. These tools abstract CSS complexity, but when something breaks or needs customization, you need to understand the underlying CSS to fix it. Master the basics first, then explore advanced tools.</p>"
			next-steps="<p>Now that you understand CSS fundamentals, you're ready to dive deeper into CSS selectors. In the next lesson, you'll master element selectors, class selectors, ID selectors, combinators, and pseudo-classes—giving you precise control over which elements receive styling.</p><p>Selectors are the foundation of CSS targeting. The better you understand selectors, the more efficiently you can write CSS and the less you'll need to modify HTML just to add styles.</p>"
		/>

		<section class="mt-6">
			<h2 class="title is-3">Test Your Knowledge</h2>
			<p class="mb-4">
				Let's see how well you understand the concepts covered in this tutorial.
				Take this quick quiz to test your knowledge!
			</p>
		</section>

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div class="completion-section mt-6">
			<h2 class="title is-3">
				<i class="fas fa-check-circle"></i> Congratulations!
			</h2>
			<p>You've completed the CSS Basics tutorial. Great job!</p>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CSSBasicsIntroduction',
};
</script>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';
import { format } from 'date-fns';
import { ref, computed, inject, onMounted, watch } from 'vue';
import DOMPurify from 'dompurify';
import { usePageSections } from '@/composables/usePageSections';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { useRoute } from 'vue-router';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const frontmatter = {
	title: 'Introduction to CSS',
	date: '2024-03-20',
	author: 'Helen Burgess',
	description: 'Learn how CSS works and how to add styles to your HTML',
	tags: ['CSS', 'Web Development', 'Styling', 'Beginners'],
	status: 'published',
	order: 2,
	duration: '30 minutes',
	difficulty: 'beginner',
};

const formatDate = (date) => {
	return format(new Date(date), 'MMMM do, yyyy');
};

const codeExamples = {
	cssSyntax: `selector {
  property: value;
  another-property: value;
}`,

	badExamples: `.Header {} /* Uppercase */
.nav_menu {} /* Underscore */
.searchbox1 {} /* Numbers at end */
.featured!article {} /* Special characters */
.s {} /* Not descriptive */`,

	goodExamples: `.header {} /* Lowercase */
.nav-menu {} /* Hyphen */
.search-box {} /* Descriptive */
.featured-article {} /* Clean naming */
.site-navigation {} /* Clear purpose */`,
};

const checkpointQuestions = [
	{
		question:
			'What are the three ways to add CSS to an HTML document, and when would you use each?',
		answer:
			'Inline CSS (style attribute) for single-element quick fixes; Internal CSS (<style> in <head>) for single-page styles; External CSS (separate .css file) for multi-page websites and best maintainability. External CSS is preferred for production websites.',
	},
	{
		question: 'Explain the parts of a CSS rule: h1 { color: blue; }',
		answer:
			'h1 is the selector (targets which elements to style), color is the property (what aspect to change), and blue is the value (how to change it). The curly braces {} contain the declarations, and the semicolon ; separates multiple declarations.',
	},
	{
		question: 'Why are naming conventions important in CSS?',
		answer:
			'Consistent naming conventions make code more readable, maintainable, and collaborative. They prevent naming conflicts, make it easier to find styles, and help teams work together effectively on large projects.',
	},
	{
		question: 'What is the "cascade" in CSS?',
		answer:
			'The cascade determines which styles apply when multiple rules target the same element. It considers specificity (how specific the selector is), source order (later rules override earlier ones), and importance (!important). Understanding the cascade is crucial for controlling styles effectively.',
	},
];

const closureKeyTakeaways = [
	'CSS (Cascading Style Sheets) separates presentation from content, making websites maintainable and flexible',
	'The three ways to add CSS are: inline (style attribute), internal (<style> tag), and external (.css file)',
	'CSS syntax consists of selectors, properties, and values: selector { property: value; }',
	'Naming conventions (BEM, kebab-case, camelCase) keep CSS organized and prevent conflicts',
	'The cascade determines which styles apply based on specificity, source order, and importance',
	'Browser DevTools are essential for inspecting, testing, and debugging CSS in real-time',
	'External stylesheets are the professional standard for multi-page websites',
];

const closureObjectives = [
	'Understand what CSS is and its role in web development',
	'Learn the three different ways to add CSS to HTML documents',
	'Master basic CSS syntax and selector usage',
	'Apply CSS naming conventions for clean, maintainable code',
	'Write your first CSS rules to style web content',
	'Understand the cascade and how styles are applied',
	'Use browser developer tools to inspect and modify CSS',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-palette',
		title: 'Design Thinking',
		questions: [
			'How does separating structure (HTML) from presentation (CSS) benefit web development?',
			'What makes a website visually appealing while remaining accessible to all users?',
		],
		content:
			"Good CSS isn't just about making things pretty—it creates experiences that work for everyone. Consider accessibility, performance, and maintainability from the start, not as afterthoughts.",
	},
	{
		icon: 'fas fa-code',
		title: 'Best Practices',
		questions: [
			'Why is external CSS preferred over inline or internal CSS for production websites?',
			'How do naming conventions help when working in teams or revisiting code later?',
		],
		content:
			'Professional CSS follows conventions and patterns that make code predictable and maintainable. Establishing good habits early—like using external stylesheets and consistent naming—saves countless hours in the long run.',
	},
];

const inlineExample = ref(
	`<p style="color: blue; font-size: 18px;">This is inline CSS</p>`,
);

const internalExample = ref(`<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
<p>This text is styled using internal CSS</p>`);

// For the external example, we'll show both the HTML and CSS together
const externalExample = ref(`<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<p>This text is styled using external CSS</p>

/* styles.css */
p {
  color: blue;
  font-size: 18px;
}`);

// Create styled HTML for the previews
const internalPreviewHTML = `
<div class="preview-example">
  <style>
    .preview-example p {
      color: blue !important;
      font-size: 18px !important;
    }
  </style>
  <p>This text is styled using internal CSS</p>
</div>
`;

const externalPreviewHTML = `
<div class="preview-example">
  <style>
    .preview-example p {
      color: blue !important;
      font-size: 18px !important;
    }
  </style>
  <p>This text is styled using external CSS</p>
</div>
`;

// Add computed properties for sanitized previews
const sanitizedInlinePreview = computed(() =>
	DOMPurify.sanitize(inlineExample.value),
);
const sanitizedInternalPreview = computed(() =>
	DOMPurify.sanitize(internalPreviewHTML),
);
const sanitizedExternalPreview = computed(() =>
	DOMPurify.sanitize(externalPreviewHTML),
);

// Add these new code examples
const syntaxExample = ref(`selector {
  property: value;
  another-property: value;
}`);

const badNamingExample = ref(`.Header {} /* Uppercase */
.nav_menu {} /* Underscore */
.searchbox1 {} /* Numbers at end */
.featured!article {} /* Special characters */
.s {} /* Not descriptive */`);

const goodNamingExample = ref(`.header {} /* Lowercase */
.nav-menu {} /* Hyphen */
.search-box {} /* Descriptive */
.featured-article {} /* Clean naming */
.site-navigation {} /* Clear purpose */`);

// Update the navigation links
const navigationLinks = {
	prev: {
		path: '/tutorials/beginner/css-basics',
		title: 'CSS Basics Overview',
	},
	next: {
		path: '/tutorials/beginner/css-basics/selectors',
		title: 'CSS Selectors',
	},
};

const sections = [
	{
		id: 'what-is-css',
		title: 'What is CSS?',
		subsections: [
			{ id: 'css-purpose', title: 'Purpose of CSS' },
			{ id: 'css-history', title: 'Brief History' },
		],
	},
	{
		id: 'how-css-works',
		title: 'How CSS Works',
		subsections: [
			{ id: 'css-syntax', title: 'CSS Syntax' },
			{ id: 'applying-css', title: 'Applying CSS to HTML' },
		],
	},
	{
		id: 'getting-started',
		title: 'Getting Started',
		subsections: [
			{ id: 'tools-needed', title: 'Tools Needed' },
			{ id: 'first-styles', title: 'Your First Styles' },
		],
	},
];

const { pageSections } = usePageSections(sections);

onMounted(() => {
	pageSections.value = [
		{ id: 'what-is-css', title: 'What is CSS?' },
		{
			id: 'how-css-works',
			title: 'How CSS Works',
			subsections: [
				{ id: 'selectors', title: 'Selectors' },
				{ id: 'properties', title: 'Properties' },
				{ id: 'values', title: 'Values' },
				{ id: 'cascade', title: 'The Cascade' },
			],
		},
		{
			id: 'adding-css',
			title: 'Adding CSS to HTML',
			subsections: [
				{ id: 'external', title: 'External CSS' },
				{ id: 'internal', title: 'Internal CSS' },
				{ id: 'inline', title: 'Inline CSS' },
			],
		},
		{ id: 'css-syntax', title: 'CSS Syntax' },
		{ id: 'practice', title: 'Practice Exercise' },
	];
});
</script>

<style scoped>
.learning-path li {
	padding: 0.5rem 0;
	border-bottom: 1px solid var(--color-snow);
}

.timeline li {
	margin-bottom: 1rem;
}

.cta-box {
	background: var(--color-snow);
	padding: 2rem;
	border-radius: 8px;
	margin-top: 2rem;
	text-align: center;
}

.lead {
	font-size: 1.2rem;
	line-height: 1.6;
	color: var(--color-mine-shaft);
	margin-bottom: 2rem;
}

.highlight-box {
	background-color: #f5f5f5;
	border-left: 4px solid #3298dc;
	padding: 1.5rem;
	margin-bottom: 2rem;
	border-radius: 4px;
}

.highlight-box h3 {
	color: #363636;
	font-size: 1.25rem;
	margin-bottom: 1rem;
}

.highlight-box ul {
	margin-left: 1.5rem;
}

.highlight-box li {
	margin-bottom: 0.5rem;
}

pre {
	background: var(--color-snow);
	padding: 1.5rem;
	border-radius: 4px;
	overflow-x: auto;
	margin: 1rem 0;
}

code {
	font-family: monospace;
}

@media (max-width: 768px) {
	.lead {
		font-size: 1.1rem;
	}
}

.css-icon {
	color: rebeccapurple;
	margin-right: 0.5rem;
}

.preview-container {
	padding: 1rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	background: white;
	min-height: 50px;
	overflow-y: auto;
}

.box.is-info {
	background-color: #f0f8ff;
	border-left: 4px solid #3298dc;
}

.box.is-warning {
	background-color: #fff8f0;
	border-left: 4px solid #ffdd57;
}

.box.is-success {
	background-color: #f0fff4;
	border-left: 4px solid #48c774;
}

.columns {
	margin-top: 1rem;
}

.title.is-5 {
	margin-bottom: 0.75rem;
}

.icon-list {
	list-style: none !important;
	margin-left: 0 !important;
}

.icon-list li {
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
}

.icon-list li svg {
	margin-right: 0.5em;
	color: #4a4a4a;
	width: 1.25em;
	text-align: center;
}

.box.is-info .icon-list li svg {
	color: #3298dc;
}

.box.is-warning .icon-list li svg {
	color: #ffdd57;
}

.box.is-success .icon-list li svg {
	color: #48c774;
}

:deep(.preview-container) {
	padding: 1rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	background: white;
	min-height: 50px;
	overflow-y: auto;
}

:deep(.preview-example p) {
	margin: 0;
	padding: 0;
}

.practice-list {
	list-style: none;
	padding-left: 0;
	margin-top: 1rem;
}

.practice-list li {
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	margin-bottom: 1rem;
	padding: 0.5rem;
	border-radius: 4px;
	background-color: #f8f9fa;
}

.practice-list i {
	color: #3273dc;
	margin-top: 0.25rem;
	width: 1.5em;
	text-align: center;
}

.notification i {
	margin-right: 0.5rem;
}
</style>
