<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import { usePageSections } from '@/composables/usePageSections';
const frontmatter = {
	title: 'Modern CSS',
	description:
		'Learn about current CSS features and best practices that make styling more maintainable and powerful.',
	position: 3,
	layout: 'tutorial',
	prev: 'colors',
	next: 'responsive',
	tutorialId: 'css-basics',
	difficulty: 'Beginner',
	timeEstimate: '30 minutes',
	topics: [
		'CSS Custom Properties',
		'Modern Selectors',
		'CSS Functions',
		'Modern Units',
		'Logical Properties',
		'Grid Basics',
	],
	tags: ['CSS', 'Modern CSS', 'Styling', 'Design'],
	duration: '30 minutes',
};

const sections = [
	{
		id: 'introduction',
		title: 'Introduction to Modern CSS',
	},
	{
		id: 'custom-properties',
		title: 'CSS Custom Properties',
	},
	{
		id: 'modern-selectors',
		title: 'Modern Selectors',
	},
	{
		id: 'css-functions',
		title: 'CSS Functions',
		subsections: [
			{ id: 'calc', title: 'calc()' },
			{ id: 'clamp', title: 'clamp()' },
			{ id: 'minmax', title: 'minmax()' },
		],
	},
	{
		id: 'modern-units',
		title: 'Modern CSS Units',
		subsections: [
			{ id: 'viewport-units', title: 'Viewport Units' },
			{ id: 'container-units', title: 'Container Units' },
			{ id: 'relative-units', title: 'Modern Relative Units' },
		],
	},
	{
		id: 'logical-properties',
		title: 'Logical Properties',
		subsections: [
			{
				id: 'understanding-logical',
				title: 'Understanding Logical Properties',
			},
			{ id: 'common-logical', title: 'Common Logical Properties' },
			{ id: 'practical-examples', title: 'Practical Examples' },
		],
	},
	{
		id: 'browser-support',
		title: 'Browser Compatibility',
	},
	{
		id: 'summary',
		title: 'Summary',
	},
];

const { pageSections } = usePageSections(sections);

const customPropertiesExample = ref(`/* CSS Custom Properties (CSS Variables) */
:root {
	--primary-color: #3b82f6;
	--spacing-unit: 1rem;
	--border-radius: 4px;
	--transition-speed: 0.3s;
}

.card {
	background-color: var(--primary-color);
	padding: var(--spacing-unit);
	border-radius: var(--border-radius);
	transition: transform var(--transition-speed) ease;
}

.card:hover {
	transform: translateY(-5px);
}`);

const modernSelectorsExample = ref(`/* Modern CSS Selectors */
/* Select all elements with a specific attribute */
[data-theme="dark"] {
	--primary-color: #1e3a8a;
}

/* Select elements that match a pattern */
[class*="card-"] {
	border-radius: var(--border-radius);
}

/* :is() selector for grouping */
:is(h1, h2, h3) {
	color: var(--primary-color);
}

/* :where() selector (similar to :is() but with 0 specificity) */
:where(ul, ol) li {
	margin-block: 0.5em;
}`);

const cssFunctionsExample = ref(`/* Basic CSS Function Examples */
.container {
	/* Calculate width minus padding */
	width: calc(100% - 2rem);
	
	/* Clamp value between min and max */
	font-size: clamp(1rem, 2vw, 1.5rem);
	
	/* Use minimum of multiple values */
	margin: min(2rem, 5vw);
	
	/* Use maximum of multiple values */
	padding: max(1rem, 2vh);
}

/* Combining functions */
.responsive-element {
	width: clamp(
		300px,
		calc(50% + 2rem),
		800px
	);
}`);

const functionExamplesCode = ref(`/* Real-world Examples */

/* Responsive padding that scales with viewport */
.header {
	padding: clamp(1rem, 5vw, 3rem);
}

/* Flexible card grid */
.card-grid {
	display: grid;
	/* Minimum 200px, expand to fill available space */
	grid-template-columns: repeat(
		auto-fit,
		minmax(200px, 1fr)
	);
	gap: max(1rem, 2vw);
}

/* Dynamic font sizing */
.hero-title {
	font-size: clamp(2rem, 5vw + 1rem, 5rem);
}

/* Calculated spacing with Custom Properties */
.section {
	--spacing: 2rem;
	padding: calc(var(--spacing) * 2);
	margin-bottom: calc(var(--spacing) / 2);
}`);

const calcExample = ref(`/* calc() Examples */
.sidebar {
	/* Subtract padding from total width */
	width: calc(100% - 2rem);
	
	/* Mix units in calculations */
	margin-top: calc(2rem + 5vh);
	
	/* Multiple operations */
	height: calc(100vh - 3rem - 2px);
}

/* Nested calc() */
.complex-width {
	width: calc(100% - calc(2rem + 10px));
}`);

const clampExample = ref(`/* clamp() Examples */
.responsive-text {
	/* Min: 1rem, Preferred: 5vw, Max: 2rem */
	font-size: clamp(1rem, 5vw, 2rem);
}

.container {
	/* Responsive width with constraints */
	width: clamp(300px, 50%, 800px);
	
	/* Responsive padding */
	padding: clamp(1rem, 3vw, 3rem);
}`);

const minMaxExample = ref(`/* min() and max() Examples */
.card {
	/* Use smaller of two values */
	padding: min(2rem, 5vw);
	
	/* Use larger of two values */
	margin: max(1rem, 2vh);
}

.image {
	/* Responsive but constrained width */
	width: min(100%, 500px);
	
	/* Ensure minimum readable size */
	font-size: max(12px, 1em);
}`);

const minmaxExample = ref(`/* minmax() Grid Examples */
.grid-container {
	display: grid;
	/* Columns at least 200px, expand up to 1fr */
	grid-template-columns: repeat(
		auto-fit,
		minmax(200px, 1fr)
	);
	
	/* Row height between 100px and auto */
	grid-template-rows: minmax(100px, auto);
	gap: 1rem;
}`);

const combinedFunctionsExample = ref(`/* Combining CSS Functions */
.advanced-layout {
	/* Clamp with calc */
	padding: clamp(
		1rem,
		calc(2rem + 2vw),
		4rem
	);
	
	/* Min with calc */
	width: min(
		calc(100% - 2rem),
		1200px
	);
	
	/* Complex responsive sizing */
	font-size: clamp(
		16px,
		calc(1rem + 1vw),
		24px
	);
}`);

const viewportUnitsExample = ref(`/* Viewport Units */
.hero {
	/* Full viewport height */
	height: 100vh;
	
	/* Half viewport width */
	width: 50vw;
	
	/* Responsive font size */
	font-size: calc(16px + 1vw);
}

/* Dynamic vertical padding */
.section {
	padding-block: 5vh;
}`);

const containerUnitsExample = ref(`/* Container Query Units */
.container {
	container-type: inline-size;
}

.card {
	/* 90% of container width */
	width: 90cqi;
	
	/* Minimum of container height */
	min-height: 10cqb;
	
	/* Font size relative to container */
	font-size: calc(1rem + 1cqi);
}`);

const relativeUnitsExample = ref(`/* Modern Relative Units */
.element {
	/* Relative to root font size */
	margin-block: 2rem;
	
	/* Relative to parent font size */
	padding: 1.5em;
	
	/* Relative to viewport */
	width: clamp(300px, 50vw, 800px);
	
	/* Character width unit */
	max-width: 65ch;
}`);

const physicalPropertiesExample = ref(`/* Physical Properties */
.box {
	margin-top: 1rem;
	margin-right: 2rem;
	margin-bottom: 1rem;
	margin-left: 2rem;
	
	padding-top: 1rem;
	padding-right: 2rem;
	padding-bottom: 1rem;
	padding-left: 2rem;
	
	border-top: 1px solid;
}`);

const logicalPropertiesExample = ref(`/* Logical Properties */
.box {
	margin-block: 1rem;
	margin-inline: 2rem;
	
	padding-block: 1rem;
	padding-inline: 2rem;
	
	border-block-start: 1px solid;
}`);

const commonLogicalExample = ref(`/* Common Logical Properties */
.element {
	/* Block direction (usually vertical) */
	margin-block: 1rem;
	padding-block: 2rem;
	border-block: 1px solid;

	/* Inline direction (usually horizontal) */
	margin-inline: auto;
	padding-inline: 1.5rem;
	border-inline: 2px solid;

	/* Size properties */
	inline-size: 300px;    /* width */
	block-size: 200px;     /* height */
	min-inline-size: 200px;
}`);

const logicalPracticalExample = ref(`/* Real-world Examples */
.card {
	/* Centers in both writing modes */
	margin-inline: auto;
	padding-block: 1rem;
	padding-inline: 1.5rem;
	
	/* Consistent border on start side */
	border-inline-start: 4px solid;
}

.article {
	/* Readable line length */
	max-inline-size: 65ch;
	
	/* Space between paragraphs */
	margin-block-end: 1.5rem;
}

/* RTL support */
[dir="rtl"] .sidebar {
	/* No changes needed! */
	margin-inline-start: 2rem;
}`);
</script>

<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/css-basics">CSS Basics</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Modern CSS</a>
				</li>
			</ul>
		</nav>

		<header class="tutorial-header">
			<div class="tags mb-4">
				<span class="tag is-info">{{ frontmatter.difficulty }}</span>
				<span class="tag is-warning">{{ frontmatter.duration }}</span>
				<span v-for="tag in frontmatter.tags" :key="tag" class="tag is-light">{{
					tag
				}}</span>
			</div>

			<h1 class="title is-1">
				<i class="fa-brands fa-css css-icon"></i>
				Modern CSS
			</h1>
			<p class="subtitle is-4">
				Learn about current CSS features and best practices that make styling
				more maintainable and powerful.
			</p>
		</header>

		<div class="notification is-info is-light">
			<p>
				<strong>Prerequisites:</strong> Basic understanding of CSS and colors
				(covered in previous tutorials)
			</p>
		</div>

		<section id="introduction">
			<h2 class="title is-2">Introduction to Modern CSS</h2>
			<p>
				Modern CSS provides powerful features that make our stylesheets more
				maintainable, flexible, and easier to work with. In this tutorial, we'll
				explore these features and how they can improve your web development
				workflow.
			</p>

			<div class="box">
				<h3 class="title is-4">What We'll Cover</h3>
				<ul>
					<li>CSS Custom Properties (Variables)</li>
					<li>Modern Selectors and Pseudo-classes</li>
					<li>CSS Functions</li>
					<li>Modern Units and Values</li>
					<li>Logical Properties</li>
					<li>Grid and Modern Layout Concepts</li>
				</ul>
			</div>
		</section>

		<section id="custom-properties">
			<h2 class="title is-2">CSS Custom Properties</h2>
			<p>
				Building on what we learned in the Colors tutorial, CSS Custom
				Properties (also known as CSS Variables) allow us to define reusable
				values throughout our stylesheets.
			</p>

			<div class="box">
				<h3 class="title is-4">Basic Usage</h3>
				<CodeMirror v-model="customPropertiesExample" readonly />

				<div class="mt-4">
					<h4 class="title is-5">Key Features:</h4>
					<ul>
						<li>
							Can store any CSS value (colors, sizes, timing functions, etc.)
						</li>
						<li>Can be updated with JavaScript</li>
						<li>Can be scoped to specific elements</li>
						<li>Support fallback values</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="modern-selectors">
			<h2 class="title is-2">Modern Selectors</h2>
			<p>
				CSS has evolved to include powerful new selectors that make targeting
				elements more precise and maintainable.
			</p>

			<div class="box">
				<h3 class="title is-4">New Selector Types</h3>
				<CodeMirror v-model="modernSelectorsExample" readonly />

				<div class="notification is-info is-light mt-4">
					<p>
						<strong>Pro Tip:</strong> Modern selectors can help reduce the need
						for extra classes and make your HTML cleaner.
					</p>
				</div>
			</div>
		</section>

		<section id="css-functions">
			<h2 class="title is-2">CSS Functions</h2>
			<p>
				Modern CSS provides powerful built-in functions that help with
				calculations, transformations, and dynamic values.
			</p>

			<div class="box">
				<h3 class="title is-4">Understanding CSS Functions</h3>

				<section class="function-explanation">
					<h4 class="title is-5">calc()</h4>
					<p>
						The <code>calc()</code> function performs calculations to determine
						CSS property values. It can:
					</p>
					<ul>
						<li>Mix different units (px, rem, %, vw, etc.)</li>
						<li>Perform basic math operations (+, -, *, /)</li>
						<li>Be nested inside other functions</li>
					</ul>
					<CodeMirror v-model="calcExample" readonly />
					<div class="demo-card calc-demo mt-3">
						calc() Demo: width: calc(100% - 2rem)
					</div>
				</section>

				<section class="function-explanation mt-5">
					<h4 class="title is-5">clamp()</h4>
					<p>
						The <code>clamp()</code> function takes three values: minimum,
						preferred, and maximum. It:
					</p>
					<ul>
						<li>Ensures a value stays within a range</li>
						<li>Great for responsive typography</li>
						<li>Useful for maintaining layout constraints</li>
					</ul>
					<CodeMirror v-model="clampExample" readonly />
					<div class="demo-card clamp-demo mt-3">
						clamp() Demo: Resize window to see font-size change
					</div>
				</section>

				<section class="function-explanation mt-5">
					<h4 class="title is-5">min() and max()</h4>
					<p>
						These functions select the smallest or largest value from a set of
						comma-separated expressions:
					</p>
					<ul>
						<li><code>min()</code> - Chooses the smallest value</li>
						<li><code>max()</code> - Chooses the largest value</li>
						<li>Useful for responsive constraints</li>
					</ul>
					<CodeMirror v-model="minMaxExample" readonly />
					<div class="demo-card min-demo mt-3">
						min() Demo: padding: min(2rem, 5vw)
					</div>
				</section>

				<section class="function-explanation mt-5">
					<h4 class="title is-5">minmax() for Grid</h4>
					<p>
						Used specifically in Grid layouts, <code>minmax()</code> sets a size
						range for grid tracks:
					</p>
					<ul>
						<li>Defines minimum and maximum sizes</li>
						<li>Creates flexible grid layouts</li>
						<li>Often used with auto-fit/auto-fill</li>
					</ul>

					<div class="notification is-warning is-light mt-3 mb-3">
						<p>
							<strong>Note:</strong> We're showing a basic example of CSS Grid
							here, but we'll cover Grid layouts in much more detail in the
							Intermediate CSS tutorials. For now, focus on understanding how
							the <code>minmax()</code> function works.
						</p>
					</div>

					<CodeMirror v-model="minmaxExample" readonly />
					<div class="grid-demo mt-3">
						<div class="grid-item">1</div>
						<div class="grid-item">2</div>
						<div class="grid-item">3</div>
					</div>
				</section>

				<div class="notification is-info is-light mt-5">
					<h4 class="title is-5">Function Combinations</h4>
					<p>CSS functions become even more powerful when combined:</p>
					<CodeMirror v-model="combinedFunctionsExample" readonly />
				</div>
			</div>
		</section>

		<section id="css-functions">
			<h2 class="title is-2">CSS Functions</h2>
			<p>
				Modern CSS provides powerful built-in functions that help with
				calculations, transformations, and dynamic values.
			</p>

			<div class="box">
				<h3 class="title is-4">Practical Examples</h3>
				<CodeMirror v-model="functionExamplesCode" readonly />

				<div class="notification is-warning is-light mt-4">
					<p>
						<strong>Pro Tip:</strong> Combining CSS functions with Custom
						Properties creates powerful, dynamic layouts.
					</p>
				</div>
			</div>
		</section>

		<section id="modern-units">
			<h2 class="title is-2">Modern CSS Units</h2>
			<p>
				Modern CSS provides flexible units that help create responsive and
				maintainable designs.
			</p>

			<div class="box">
				<h3 class="title is-4">Viewport Units</h3>
				<p>Units that are relative to the viewport (browser window) size:</p>
				<CodeMirror v-model="viewportUnitsExample" readonly />

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">New Viewport Units</h4>
					<p>
						Modern browsers now support small (s) and large (l) viewport units:
					</p>
					<ul>
						<li>
							<code>svh</code>, <code>lvh</code> - Viewport height considering
							mobile browser chrome
						</li>
						<li>
							<code>svw</code>, <code>lvw</code> - Viewport width variants
						</li>
						<li><code>svi</code>, <code>lvi</code> - Inline size variants</li>
						<li><code>svb</code>, <code>lvb</code> - Block size variants</li>
					</ul>
				</div>
			</div>

			<div class="box mt-4">
				<h3 class="title is-4">Container Units</h3>
				<p>
					Units that are relative to a container's size (with container
					queries):
				</p>
				<CodeMirror v-model="containerUnitsExample" readonly />
			</div>

			<div class="box mt-4">
				<h3 class="title is-4">Modern Relative Units</h3>
				<p>Units that provide better control over sizing:</p>
				<CodeMirror v-model="relativeUnitsExample" readonly />
			</div>
		</section>

		<section id="logical-properties" class="mt-6">
			<h2 class="title is-2">Logical Properties</h2>
			<p>
				Logical properties and values allow you to write CSS that adapts to
				different writing modes and text directions.
			</p>

			<div class="box">
				<h3 class="title is-4">Understanding Logical Properties</h3>
				<div class="columns">
					<div class="column">
						<h4 class="title is-5">Physical Properties (Old Way)</h4>
						<CodeMirror v-model="physicalPropertiesExample" readonly />
					</div>
					<div class="column">
						<h4 class="title is-5">Logical Properties (Modern Way)</h4>
						<CodeMirror v-model="logicalPropertiesExample" readonly />
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">Key Concepts:</h4>
					<ul>
						<li>
							<strong>Block</strong> - The direction blocks are stacked in
							(usually top-to-bottom)
						</li>
						<li>
							<strong>Inline</strong> - The direction text flows (usually
							left-to-right)
						</li>
						<li><strong>Start</strong> - The beginning of the flow</li>
						<li><strong>End</strong> - The end of the flow</li>
					</ul>
				</div>
			</div>

			<div class="box mt-4">
				<h3 class="title is-4">Common Logical Properties</h3>
				<CodeMirror v-model="commonLogicalExample" readonly />

				<div class="logical-demo mt-4">
					<div class="demo-box ltr">Left to Right</div>
					<div class="demo-box rtl">Right to Left</div>
				</div>
			</div>

			<div class="box mt-4">
				<h3 class="title is-4">Practical Examples</h3>
				<CodeMirror v-model="logicalPracticalExample" readonly />

				<div class="notification is-warning is-light mt-4">
					<p>
						<strong>Pro Tip:</strong> Use logical properties when building
						internationalized websites or applications that need to support
						multiple writing modes.
					</p>
				</div>
			</div>
		</section>

		<section id="browser-support" class="mt-6">
			<h2 class="title is-2">Browser Compatibility</h2>
			<p>
				Most modern browsers support these CSS features, but it's important to
				know the coverage:
			</p>

			<div class="table-container">
				<table class="table is-bordered is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>Feature</th>
							<th>Chrome</th>
							<th>Firefox</th>
							<th>Safari</th>
							<th>Edge</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>CSS Custom Properties</td>
							<td>✅ 49+</td>
							<td>✅ 31+</td>
							<td>✅ 9.1+</td>
							<td>✅ 15+</td>
							<td>Widely supported</td>
						</tr>
						<tr>
							<td>Modern Selectors (:is, :where)</td>
							<td>✅ 88+</td>
							<td>✅ 78+</td>
							<td>✅ 14+</td>
							<td>✅ 88+</td>
							<td>Good support</td>
						</tr>
						<tr>
							<td>calc()</td>
							<td>✅ 26+</td>
							<td>✅ 16+</td>
							<td>✅ 7+</td>
							<td>✅ 12+</td>
							<td>Excellent support</td>
						</tr>
						<tr>
							<td>clamp()</td>
							<td>✅ 79+</td>
							<td>✅ 75+</td>
							<td>✅ 13.1+</td>
							<td>✅ 79+</td>
							<td>Good modern support</td>
						</tr>
						<tr>
							<td>Logical Properties</td>
							<td>✅ 87+</td>
							<td>✅ 66+</td>
							<td>✅ 15+</td>
							<td>✅ 87+</td>
							<td>Modern browsers only</td>
						</tr>
						<tr>
							<td>Container Queries</td>
							<td>✅ 105+</td>
							<td>✅ 110+</td>
							<td>✅ 16+</td>
							<td>✅ 105+</td>
							<td>Recent feature</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="notification is-info is-light mt-4">
				<p>
					<strong>Note:</strong> Browser support data is approximate. Check
					<a href="https://caniuse.com" target="_blank" rel="noopener"
						>Can I Use</a
					>
					for the most current information.
				</p>
			</div>
		</section>

		<section id="summary" class="mt-6">
			<h2 class="title is-2">Summary</h2>

			<div class="box">
				<h3 class="title is-4">What We've Learned</h3>
				<ul>
					<li>
						<strong>CSS Custom Properties:</strong> Create reusable values and
						enable dynamic styling
					</li>
					<li>
						<strong>Modern Selectors:</strong> Write more efficient and
						maintainable selectors
					</li>
					<li>
						<strong>CSS Functions:</strong> Perform calculations and create
						responsive values
					</li>
					<li>
						<strong>Modern Units:</strong> Use viewport and container-relative
						measurements
					</li>
					<li>
						<strong>Logical Properties:</strong> Write direction-independent
						layouts
					</li>
				</ul>

				<div class="notification is-warning is-light mt-4">
					<h4 class="title is-5">Next Steps</h4>
					<p>
						Now that you understand modern CSS features, you're ready to learn
						about responsive design! These modern tools will help you create
						flexible, maintainable layouts that work across different screen
						sizes.
					</p>
					<p class="mt-3">
						<a
							href="/tutorials/css-basics/responsive"
							class="button is-warning"
						>
							Continue to Responsive Design →
						</a>
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.content {
	max-width: 960px;
	margin: 0 auto;
	padding: 2rem;
}
.css-icon {
	color: #264de4;
}

.function-demos {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;
	margin: 2rem 0;
}

.demo-card {
	padding: 1rem;
	border-radius: 4px;
	text-align: center;
	color: white;
	font-weight: bold;
}

.calc-demo {
	background-color: #3b82f6;
	/* Demo of calc() */
	width: calc(100% - 2rem);
	margin: 1rem;
}

.clamp-demo {
	background-color: #10b981;
	/* Demo of clamp() */
	font-size: clamp(1rem, 3vw, 1.5rem);
}

.min-demo {
	background-color: #8b5cf6;
	/* Demo of min() */
	padding: min(2rem, 5vw);
}

.function-explanation {
	border-bottom: 1px solid #eee;
	padding-bottom: 2rem;
}

.function-explanation:last-child {
	border-bottom: none;
}

.grid-demo {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	gap: 1rem;
}

.grid-item {
	background-color: #3b82f6;
	color: white;
	padding: 1rem;
	text-align: center;
	border-radius: 4px;
}

.logical-demo {
	display: flex;
	gap: 2rem;
	margin-top: 2rem;
}

.demo-box {
	padding: 1rem;
	background-color: #3b82f6;
	color: white;
	border-inline-start: 4px solid #1d4ed8;
}

.demo-box.rtl {
	direction: rtl;
}

.table-container {
	overflow-x: auto;
}

.table th {
	background-color: #f5f5f5;
}

.table td {
	vertical-align: middle;
}

/* Checkmark styling */
.table td:nth-child(n + 2):nth-child(-n + 5) {
	text-align: center;
}
</style>
