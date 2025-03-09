<template>
	<!-- Main Content -->
	<div class="tutorial-content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link :to="{ name: 'html-basics' }">HTML Basics</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Your First HTML Page</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">20 minutes</span>
			<span class="tag is-success">Theory</span>
			<span class="tag is-primary">Practice</span>
			<span class="tag is-link">Project</span>
		</div>

		<h1 class="title is-1">
			<i class="fab fa-html5"></i> Your First HTML Page
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Learning Objectives
			</h3>
			<ul>
				<li>Understand the basic structure of an HTML document</li>
				<li>Learn about essential head elements</li>
				<li>Create a complete restaurant web page</li>
				<li>Practice with real-world content</li>
			</ul>
		</div>

		<h2 id="basic-html-document-structure" class="title is-3">
			Basic HTML Document Structure
		</h2>
		<p>Every HTML page needs a basic structure. Here's the template:</p>

		<div class="box">
			<CodeMirror v-model="basicTemplate" :height="200" :readonly="true" />
		</div>

		<h3 class="title is-4">Understanding Each Part:</h3>
		<ul>
			<li>
				<code>&lt;!DOCTYPE html&gt;</code> tells browsers this is an HTML5
				document
			</li>
			<li><code>&lt;html&gt;</code> is the root element of the page</li>
			<li><code>&lt;head&gt;</code> contains metadata about the document</li>
			<li><code>&lt;body&gt;</code> contains the visible content</li>
		</ul>

		<h2 id="essential-head-elements" class="title is-3">
			Essential Head Elements
		</h2>
		<p>
			The <code>&lt;head&gt;</code> section contains important information about
			your page:
		</p>

		<div class="box">
			<CodeMirror v-model="headExample" :height="150" :readonly="true" />
		</div>

		<ul>
			<li><code>charset</code> defines the character encoding</li>
			<li><code>viewport</code> helps with mobile responsiveness</li>
			<li><code>title</code> sets the page title shown in browser tabs</li>
		</ul>

		<div class="box is-warning">
			<h4 class="title is-5">
				<i class="fas fa-exclamation-triangle"></i> Important Note
			</h4>
			<p>
				These meta tags should always be placed at the top of your
				<code>&lt;head&gt;</code> section:
			</p>
			<ul>
				<li>
					The <code>charset</code> declaration should be the first element in
					<code>&lt;head&gt;</code> to ensure proper character encoding
				</li>
				<li>
					The <code>viewport</code> meta tag is crucial for responsive design on
					mobile devices
				</li>
			</ul>
			<p class="mt-3">
				<i class="fas fa-book"></i>
				<strong>Further Reading:</strong> Check the
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
					target="_blank"
					rel="noopener"
				>
					MDN documentation on meta tags
				</a>
				for detailed information about these and other meta elements.
			</p>
		</div>

		<CodingOptions filename="index.html" class="mt-4" />

		<h2 id="project-black-swan-bistro" class="title is-3">
			Project: Black Swan Bistro
		</h2>
		<p>
			Let's create a real webpage for a Perth restaurant. Here's our content:
		</p>

		<div class="box is-light mb-4">
			<h4 class="title is-5">Content to Use:</h4>
			<pre>{{ bistroContent }}</pre>
		</div>

		<p>Let's structure this content with HTML:</p>

		<div class="columns">
			<div class="column is-6">
				<h4 class="title is-4"><i class="fas fa-code"></i> Code</h4>
				<CodeMirror
					v-model="exerciseCode"
					:height="400"
					@change="updateExercisePreview"
				/>
			</div>
			<div class="column is-6">
				<h4 class="title is-4"><i class="fas fa-eye"></i> Preview</h4>
				<div class="preview-container" v-html="sanitizedExercisePreview"></div>
			</div>
		</div>

		<div class="box is-success mt-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> HTML Elements Used
			</h3>
			<p>Notice how we used:</p>
			<ul>
				<li><code>&lt;h1&gt;</code> for the main title</li>
				<li><code>&lt;h2&gt;</code> for section headings</li>
				<li><code>&lt;p&gt;</code> for paragraphs</li>
				<li><code>&lt;br&gt;</code> for line breaks</li>
			</ul>
		</div>

		<div class="box is-info mt-6">
			<h2 id="practice" class="title is-4">
				<i class="fas fa-tasks"></i> Practice
			</h2>
			<p>Create a home page for "Rotto Rocks" using this content:</p>

			<div class="notification is-light mt-3">
				<pre>
Rotto Rocks

About Rottnest
Rottnest Island (Wadjemup) is a pristine island paradise located just off the coast of Perth, Western Australia. 
Famous for its beautiful beaches, crystal clear waters, and friendly quokkas.

Activities
Explore pristine beaches, cycle around the island, snorkel in turquoise bays, and meet the 
world-famous quokkas. Perfect for day trips or extended stays.

Visitor Information
Ferry terminal: Hillarys Boat Harbour, Perth
Open: Daily, all year round
Best time to visit: September to May</pre
				>
			</div>

			<p class="mt-4">Your task:</p>
			<ol>
				<li>Create a new file named <code>index.html</code></li>
				<li>Use the same HTML structure as the Black Swan Bistro example</li>
				<li>Include all the required meta tags in the head section</li>
				<li>Structure the content using appropriate headings and paragraphs</li>
				<li>Use line breaks for the visitor information details</li>
			</ol>
		</div>

		<div class="box is-link mt-6">
			<h3 class="title is-4">
				<i class="fas fa-arrow-right"></i> What's Next?
			</h3>
			<p>In the next lesson, we'll explore more text elements like:</p>
			<ul>
				<li>Different types of lists</li>
				<li>Text formatting elements</li>
				<li>Quotations and citations</li>
				<li>Comments and special characters</li>
			</ul>
			<p class="mt-3">
				These elements will help us create more detailed and better-structured
				content.
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import DOMPurify from 'dompurify';
import CodingOptions from '@/components/CodingOptions.vue';

// Get the pageSections array from the parent component
const pageSections = inject('pageSections');

// Define the sections for this tutorial
onMounted(() => {
	if (pageSections) {
		pageSections.value = [
			{
				id: 'basic-html-document-structure',
				title: 'Basic HTML Document Structure',
				subsections: [],
			},
			{
				id: 'essential-head-elements',
				title: 'Essential Head Elements',
				subsections: [],
			},
			{
				id: 'project-black-swan-bistro',
				title: 'Project: Black Swan Bistro',
				subsections: [],
			},
			{
				id: 'practice',
				title: 'Practice',
				subsections: [],
			},
			{
				id: 'whats-next',
				title: "What's Next?",
				subsections: [],
			},
		];
	}
});

const basicTemplate = ref(`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>My First Web Page</title>
	</head>
	<body>
		<h1>Hello, World!</h1>
		<p>This is my first web page.</p>
	</body>
</html>`);

const headExample = ref(`<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Black Swan Bistro</title>
</head>`);

const bistroContent = ref(`Black Swan Bistro

The Restaurant
The Black Swan Bistro offers casual lunch and dinner fare in a relaxed riverside atmosphere.
The menu changes seasonally to highlight the freshest Western Australian ingredients.

Catering
You enjoy the Swan River views. We'll handle the cooking. Black Swan Catering can handle events
from casual sundowners to elegant corporate functions.

Location and Hours
Elizabeth Quay, Perth;
Monday through Thursday 11am to 9pm;
Friday and Saturday, 11am to midnight`);

const exerciseCode = ref(`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Black Swan Bistro</title>
	</head>
	<body>
		<h1>Black Swan Bistro</h1>

		<h2>The Restaurant</h2>
		<p>
			The Black Swan Bistro offers casual lunch and dinner fare in a relaxed
			riverside atmosphere. The menu changes seasonally to highlight the
			freshest Western Australian ingredients.
		</p>

		<h2>Catering</h2>
		<p>
			You enjoy the Swan River views. We'll handle the cooking. Black Swan
			Catering can handle events from casual sundowners to elegant corporate
			functions.
		</p>

		<h2>Location and Hours</h2>
		<p>
			Elizabeth Quay, Perth;<br />
			Monday through Thursday 11am to 9pm;<br />
			Friday and Saturday, 11am to midnight
		</p>
	</body>
</html>`);

const sanitizedExercisePreview = computed(() =>
	DOMPurify.sanitize(exerciseCode.value),
);

const updateExercisePreview = () => {
	// Preview updates automatically through computed property
};
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Your First HTML Page',
		description:
			'Learn how to create your first HTML page and build a restaurant website using basic HTML elements.',
		category: 'HTML Basics',
		level: 'Beginner',
		order: 2,
		tags: ['web development', 'beginner', 'html'],
		lastUpdated: '2024-03-20',
	},
};
</script>

<style scoped>
.preview-container {
	padding: 1rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	background: white;
	min-height: 400px;
	overflow-y: auto;
}

.html-icon {
	color: #e34f26;
	margin-right: 0.5rem;
}

.box-info {
	background-color: #f5f5f5;
}

pre {
	white-space: pre-wrap;
	background-color: transparent;
	padding: 0;
}

.columns {
	margin-top: 0;
}

@media screen and (min-width: 769px) {
	.column.is-3 {
		position: sticky;
		top: 1rem;
		height: calc(100vh - 2rem);
		overflow-y: auto;
	}
}
</style>
