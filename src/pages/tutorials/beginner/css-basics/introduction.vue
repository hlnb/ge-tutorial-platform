<template>
	<div class="container">
		<section class="section">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li><router-link to="/">Home</router-link></li>
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

			<header class="tutorial-header">
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
				<p class="subtitle is-4">{{ frontmatter.description }}</p>
			</header>

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

				<h2 class="title is-3 mt-5">What is CSS?</h2>
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

				<h2 class="title is-3 mt-5">Adding CSS to HTML</h2>
				<p>There are three ways to add CSS to your HTML documents:</p>

				<h3 class="subtitle is-5">1. Inline CSS</h3>
				<p>Added directly to HTML elements using the style attribute:</p>
				<div class="box">
					<h3 class="title is-4">Inline CSS Example:</h3>
					<CodeMirror v-model="inlineExample" :height="100" :readonly="true" />
					<div
						class="preview-container mt-4"
						v-html="sanitizedInlinePreview"
					></div>
				</div>

				<h3 class="subtitle is-5">2. Internal CSS</h3>
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

				<h3 class="subtitle is-5">3. External CSS (Recommended)</h3>
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

				<h2 class="title is-3 mt-5">CSS Syntax</h2>
				<p>CSS rules have two main parts:</p>
				<ol>
					<li>Selector: What to style</li>
					<li>Declaration block: How to style it</li>
				</ol>
				<div class="box">
					<CodeMirror v-model="syntaxExample" :height="150" :readonly="true" />
				</div>

				<h2 class="title is-3 mt-5">CSS Naming Conventions</h2>
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

				<div class="cta-box">
					<p>
						Ready to practice what you've learned? Try the exercises in the next
						section!
					</p>
					<TutorialNavigation :next="'css-basics-selectors'" />
				</div>
			</article>
		</section>
	</div>
</template>

<script>
export default {
	name: 'CSSBasicsIntroduction',
};
</script>

<script setup>
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import CodeMirror from '@/components/CodeMirror.vue';
import { format } from 'date-fns';
import { ref, computed } from 'vue';
import DOMPurify from 'dompurify';

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
	color: #264de4;
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
</style>
