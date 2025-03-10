<script setup>
import { ref, computed, inject, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import progressService from '@/services/ProgressService';
import CodeMirror from '@/components/CodeMirror.vue';
import { usePageSections } from '@/composables/usePageSections';
import TutorialQuiz from '@/components/TutorialQuiz.vue';

const frontmatter = {
	title: 'Layout Basics',
	date: '2024-03-20',
	author: 'Helen Burgess',
	description:
		'Learn the basics of CSS layout including positioning and display properties',
	tags: ['CSS', 'Layout', 'Positioning', 'Display'],
	duration: '30 minutes',
	difficulty: 'beginner',
};

const sections = [
	{
		id: 'layout-fundamentals',
		title: 'Layout Fundamentals',
		subsections: [
			{ id: 'display-property', title: 'The Display Property' },
			{ id: 'positioning', title: 'CSS Positioning' },
			{ id: 'float-clear', title: 'Float and Clear' },
		],
	},
	{
		id: 'layout-techniques',
		title: 'Common Layout Techniques',
		subsections: [
			{ id: 'two-column', title: 'Two Column Layout' },
			{ id: 'three-column', title: 'Three Column Layout' },
			{ id: 'holy-grail', title: 'Holy Grail Layout' },
		],
	},
	{
		id: 'basic-patterns',
		title: 'Basic Layout Patterns',
		subsections: [
			{ id: 'stack', title: 'The Stack Pattern' },
			{ id: 'box pattern', title: 'The Box Pattern' },
			{ id: 'center pattern', title: 'The Center Pattern' },
		],
	},
	{
		id: 'common-structures',
		title: 'Common Layout Structures',
		subsections: [
			{ id: 'cluster pattern', title: 'The Cluster Pattern' },
			{ id: 'sidebar pattern', title: 'The Sidebar Pattern' },
			{ id: 'grid pattern', title: 'The Grid Pattern' },
		],
	},
	{
		id: 'exercises',
		title: 'Practical Exercises',
		subsections: [
			{ id: 'black-swan-exercise', title: 'Black Swan Bistro Layout' },
			{ id: 'rotto-rocks-exercise', title: 'Rotto Rocks Layout' },
		],
	},
];

const { pageSections } = usePageSections(sections);

// Code examples
const displayExample = ref(`/* Block elements take full width */
.block-element {
	display: block;
	width: 100%;
	margin-bottom: 1rem;
}

/* Inline elements flow with text */
.inline-element {
	display: inline;
	/* width and height are ignored */
}

/* Inline-block combines both behaviors */
.inline-block {
	display: inline-block;
	width: 200px;
	height: 100px;
}`);

const positioningExample = ref(`/* Parent without positioning */
.parent {
	/* No position set (static by default) */
	width: 300px;
	height: 200px;
	background: #f0f4f8;
}

/* Absolute child will position to viewport */
.absolute-child {
	position: absolute;
	top: 0;
	left: 0;
	/* Will go to viewport top-left corner */
}

/* Parent with positioning context */
.positioned-parent {
	position: relative;
	width: 300px;
	height: 200px;
	background: #f0f4f8;
}

/* Absolute child will position within parent */
.absolute-child {
	position: absolute;
	top: 20px;
	left: 20px;
	/* Will position 20px from parent's top-left */
}`);

const twoColumnExample = ref(`/* Two Column Layout */
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
}

.sidebar {
	float: left;
	width: 25%;
	padding: 20px;
}

.main-content {
	float: right;
	width: 75%;
	padding: 20px;
}

/* Clearfix */
.container::after {
	content: "";
	display: table;
	clear: both;
}`);

const holyGrailExample = ref(`/* Holy Grail Layout using floats */
.holy-grail {
	min-height: 100vh;
}

header, footer {
	padding: 20px;
	background: #f8f9fa;
}

.holy-grail-body {
	overflow: hidden; /* clearfix */
}

.holy-grail-content {
	width: calc(100% - 400px);
	float: left;
	padding: 20px;
}

.holy-grail-nav {
	width: 200px;
	float: left;
	padding: 20px;
}

.holy-grail-ads {
	width: 200px;
	float: right;
	padding: 20px;
}`);

// Black Swan Bistro exercise code examples
const blackSwanContainer = ref(`/* Main container with center pattern */
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
}

/* Basic content spacing */
.section {
	margin-bottom: 2rem;
}`);

const blackSwanMenu = ref(`/* Two-column menu layout using floats */
.menu-section::after {
	content: "";
	display: table;
	clear: both;
}

.menu-column {
	float: left;
	width: 50%;
	padding: 0 15px;
	box-sizing: border-box;
}

/* Responsive adjustment */
@media (max-width: 768px) {
	.menu-column {
		float: none;
		width: 100%;
		padding: 0;
		margin-bottom: 2rem;
	}
}`);

const blackSwanItems = ref(`/* Menu items using stack pattern */
.menu-item {
	margin-bottom: 1.5rem;
}

.menu-item h3 {
	margin-bottom: 0.5rem;
}

.menu-item p {
	margin-bottom: 0.5rem;
}

.menu-item .price {
	font-weight: bold;
}`);

const blackSwanSidebar = ref(`/* Specials sidebar layout */
.specials-section::after {
	content: "";
	display: table;
	clear: both;
}

.sidebar {
	float: right;
	width: 30%;
	padding: 2rem;
	background: #f8f9fa;
}

/* Responsive adjustment */
@media (max-width: 768px) {
	.sidebar {
		float: none;
		width: 100%;
		padding: 0;
	}
}`);

// Rotto Rocks exercise code examples
const rottoContainer = ref(`/* Main container using floats */
.page-container {
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem;
	overflow: hidden; /* clearfix */
}

.main-content {
	float: left;
	width: calc(100% - 320px);
	padding-right: 2rem;
}

.sidebar {
	float: right;
	width: 300px;
	padding: 2rem;
	background: white;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`);

const rottoSidebar = ref(`/* Basic sidebar */
.sidebar {
	width: 300px;
	padding: 2rem;
	background: white;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.sidebar-section {
	margin-bottom: 2rem;
}

.sidebar-section:last-child {
	margin-bottom: 0;
}`);

const rottoGallery = ref(`/* Photo gallery grid */
.gallery {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1rem;
	padding: 1rem;
}

.gallery-item {
	aspect-ratio: 1;
	overflow: hidden;
	border-radius: 8px;
}

.gallery-item img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.gallery-item:hover img {
	transform: scale(1.05);
}`);

const rottoNav = ref(`/* Responsive navigation */
.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
}

.nav-menu {
	display: flex;
	gap: 2rem;
}

@media (max-width: 768px) {
	.nav-menu {
		display: none;
	}
	
	.nav-menu.is-active {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background: white;
		padding: 1rem;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}
}`);

const stackExample = ref(`/* The Stack Pattern */
.stack {
	/* Create consistent spacing between child elements */
	margin-bottom: 1.5rem;
}

.stack > * + * {
	/* Add space between elements, but not before the first one */
	margin-top: 1.5rem;
}

/* Alternative method using individual elements */
h3 {
	margin-bottom: 1rem;
}

p {
	margin-bottom: 1rem;
}

button {
	margin-top: 1rem;
}`);

const boxExample = ref(`/* The Box Pattern */
.box {
	padding: 1.5rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	background-color: white;
}

/* Optional variations */
.box.has-shadow {
	box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.box.is-large {
	padding: 2rem;
}`);

const centerExample = ref(`/* The Center Pattern */
.container {
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 1rem;
	padding-right: 1rem;
}

/* For inline or text elements */
.text-center {
	text-align: center;
}

/* For block elements */
.center-block {
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: fit-content;
}`);

const clusterExample = ref(`/* The Cluster Pattern */
.cluster {
	/* Old-school method using inline-block */
	text-align: center;
}

.cluster > * {
	display: inline-block;
	margin: 0.5rem;
}

/* Alternative using float */
.cluster-float::after {
	content: "";
	display: table;
	clear: both;
}

.cluster-float > * {
	float: left;
	margin: 0.5rem;
}`);

const sidebarExample = ref(`/* The Sidebar Pattern */
.layout-with-sidebar::after {
	content: "";
	display: table;
	clear: both;
}

.main-content {
	float: left;
	width: 70%;
	padding-right: 2rem;
}

.sidebar {
	float: right;
	width: 30%;
}

/* Responsive adjustment */
@media (max-width: 768px) {
	.main-content,
	.sidebar {
		float: none;
		width: 100%;
		padding-right: 0;
	}
	
	.sidebar {
		margin-top: 2rem;
	}
}`);

const simpleGridExample = ref(`/* The Simple Grid Pattern */
.simple-grid::after {
	content: "";
	display: table;
	clear: both;
}

.grid-item {
	float: left;
	width: 33.333%;
	padding: 1rem;
	box-sizing: border-box;
}`);

const floatBasicExample = ref(`/* Basic float example */
.float-left {
	float: left;
	width: 150px;
	height: 100px;
	margin-right: 15px;
	padding: 10px;
	background: #e9ecef;
	border: 1px solid #dee2e6;
}

/* Text will automatically wrap around the floated element */
p {
	margin: 0;
}`);

const floatColumnsExample = ref(`/* Two-column layout using floats */
.float-columns-demo {
	/* Clearfix to contain floats */
	overflow: hidden;
}

.sidebar {
	float: left;
	width: 200px;
	padding: 20px;
	background: #e9ecef;
	border: 1px solid #dee2e6;
}

.main-content {
	margin-left: 220px; /* sidebar width + margin */
	padding: 20px;
	background: #f8f9fa;
	border: 1px solid #dee2e6;
}

/* Responsive adjustment */
@media (max-width: 768px) {
	.sidebar {
		float: none;
		width: auto;
		margin-bottom: 20px;
	}
	
	.main-content {
		margin-left: 0;
	}
}`);

const clearExample = ref(`/* Clear example */
.clear-demo::after {
	content: "";
	display: table;
	clear: both;
}

.float-left {
	float: left;
	width: 100px;
	height: 100px;
	margin-right: 10px;
	padding: 10px;
	background: #e9ecef;
	border: 1px solid #dee2e6;
}

.cleared {
	clear: both;
	padding: 10px;
	background: #f8f9fa;
	border: 1px solid #dee2e6;
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
					<a href="#" aria-current="page">Layout Fundamentals</a>
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
				{{ frontmatter.title }}
			</h1>
			<p class="subtitle is-4">{{ frontmatter.description }}</p>
		</header>
		<section id="layout-fundamentals">
			<h2 class="title is-3">Layout Fundamentals</h2>

			<div id="display-property">
				<h3 class="title is-4">The Display Property</h3>
				<p>
					The display property determines how an element behaves in the document
					flow.
				</p>

				<div class="example-container">
					<h4 class="title is-5">Common Display Values:</h4>
					<ul>
						<li>
							<strong>block</strong>: Takes up full width, starts on new line
						</li>
						<li><strong>inline</strong>: Flows with text, no width/height</li>
						<li>
							<strong>inline-block</strong>: Flows with text but accepts
							width/height
						</li>
						<li><strong>none</strong>: Removes element from document flow</li>
					</ul>

					<CodeMirror v-model="displayExample" readonly />

					<div class="demo mt-4">
						<div class="block-element">Block Element</div>
						<span class="inline-element">Inline Element 1</span>
						<span class="inline-element">Inline Element 2</span>
						<div class="inline-block">Inline-Block 1</div>
						<div class="inline-block">Inline-Block 2</div>
					</div>
				</div>
			</div>

			<div id="positioning" class="mt-6">
				<h3 class="title is-4">Positioning</h3>
				<p>
					Positioning allows you to control where elements appear on the page.
					Understanding the relationship between parent and child positioning is
					crucial.
				</p>

				<div class="example-container">
					<h4 class="title is-5">Position Values:</h4>

					<!-- Positioning Diagram -->
					<div class="positioning-diagram">
						<svg width="600" height="400" viewBox="0 0 600 400">
							<!-- Viewport Border -->
							<rect
								x="10"
								y="10"
								width="580"
								height="380"
								fill="none"
								stroke="#999"
								stroke-dasharray="4"
							/>
							<text x="20" y="30" fill="#666">Viewport</text>

							<!-- Parent without position:relative -->
							<g class="diagram-group">
								<rect
									x="50"
									y="50"
									width="240"
									height="150"
									fill="#f0f4f8"
									stroke="#666"
								/>
								<text x="60" y="70">Parent (position: static)</text>

								<!-- Absolute Child -->
								<rect
									x="20"
									y="20"
									width="100"
									height="60"
									fill="#ffebee"
									stroke="#d32f2f"
								/>
								<text x="30" y="35" fill="#d32f2f">Absolute Child</text>
								<text x="30" y="50" fill="#d32f2f" font-size="12">
									Goes to viewport 0,0
								</text>

								<!-- Arrow showing movement -->
								<path
									d="M 70,80 L 20,20"
									stroke="#d32f2f"
									fill="none"
									marker-end="url(#arrow)"
									stroke-dasharray="4"
								/>
							</g>

							<!-- Parent with position:relative -->
							<g class="diagram-group" transform="translate(300, 50)">
								<rect
									x="50"
									y="50"
									width="240"
									height="150"
									fill="#f0f4f8"
									stroke="#666"
								/>
								<text x="60" y="70">Parent (position: relative)</text>

								<!-- Absolute Child -->
								<rect
									x="70"
									y="90"
									width="100"
									height="60"
									fill="#e8f5e9"
									stroke="#2e7d32"
								/>
								<text x="80" y="110" fill="#2e7d32">Absolute Child</text>
								<text x="80" y="125" fill="#2e7d32" font-size="12">
									Stays within parent
								</text>
							</g>

							<!-- Arrow Marker Definition -->
							<defs>
								<marker
									id="arrow"
									viewBox="0 0 10 10"
									refX="9"
									refY="5"
									markerWidth="6"
									markerHeight="6"
									orient="auto"
								>
									<path d="M 0 0 L 10 5 L 0 10 z" />
								</marker>
							</defs>

							<!-- Update the labels positioning -->
							<g class="diagram-labels">
								<!-- First label -->
								<text x="20" y="350" fill="#666" font-size="12">
									Without position:relative, absolute children position to
									viewport
								</text>
								<!-- Second label moved down -->
								<text x="20" y="370" fill="#666" font-size="12">
									With position:relative, absolute children stay within parent
								</text>
							</g>
						</svg>
					</div>

					<h4 class="title is-5 mt-4">Position Values:</h4>
					<ul>
						<li><strong>static</strong>: Default flow (not positioned)</li>
						<li>
							<strong>relative</strong>:
							<ul>
								<li>Positioned relative to normal position</li>
								<li>Creates a positioning context for absolute children</li>
							</ul>
						</li>
						<li>
							<strong>absolute</strong>:
							<ul>
								<li>Positioned relative to nearest positioned ancestor</li>
								<li>If no positioned ancestor, positions to viewport</li>
							</ul>
						</li>
						<li>
							<strong>fixed</strong>: Positioned relative to viewport, stays
							during scroll
						</li>
					</ul>

					<CodeMirror v-model="positioningExample" readonly />
				</div>
			</div>

			<div id="float-clear" class="mt-6">
				<h3 class="title is-4">Float and Clear</h3>
				<p>
					Float moves elements to the left or right, allowing content to wrap
					around them. Clear prevents elements from wrapping around floated
					elements.
				</p>

				<div class="example-container">
					<!-- Float Behavior Diagram -->
					<h4 class="title is-5">Float Behavior:</h4>
					<svg width="600" height="250" viewBox="0 0 600 250" class="mb-4">
						<!-- Container Box -->
						<rect
							x="10"
							y="10"
							width="580"
							height="230"
							fill="#f8f9fa"
							stroke="#dee2e6"
						/>

						<!-- Float: left example -->
						<g transform="translate(30, 30)">
							<rect width="120" height="80" fill="#e9ecef" stroke="#868e96" />
							<text x="60" y="45" text-anchor="middle" fill="#495057">
								float: left
							</text>
							<!-- Text wrapping around -->
							<g transform="translate(140, 0)">
								<rect width="200" height="15" fill="#adb5bd" opacity="0.3" />
								<rect
									y="25"
									width="200"
									height="15"
									fill="#adb5bd"
									opacity="0.3"
								/>
								<rect
									y="50"
									width="200"
									height="15"
									fill="#adb5bd"
									opacity="0.3"
								/>
							</g>
						</g>

						<!-- Float: right example -->
						<g transform="translate(30, 140)">
							<g transform="translate(220, 0)">
								<rect width="120" height="80" fill="#e9ecef" stroke="#868e96" />
								<text x="60" y="45" text-anchor="middle" fill="#495057">
									float: right
								</text>
							</g>
							<!-- Text wrapping around -->
							<g>
								<rect width="200" height="15" fill="#adb5bd" opacity="0.3" />
								<rect
									y="25"
									width="200"
									height="15"
									fill="#adb5bd"
									opacity="0.3"
								/>
								<rect
									y="50"
									width="200"
									height="15"
									fill="#adb5bd"
									opacity="0.3"
								/>
							</g>
						</g>
					</svg>
				</div>

				<div class="example-container mt-4">
					<h4 class="title is-5">Basic Float Example:</h4>
					<CodeMirror v-model="floatBasicExample" readonly />

					<div class="demo mt-4">
						<div class="float-basic-demo">
							<div class="float-left">Floated Left</div>
							<p>
								This text will wrap around the floated element. Lorem ipsum
								dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</div>

				<div class="example-container mt-4">
					<h4 class="title is-5">Two-Column Layout with Float:</h4>
					<CodeMirror v-model="floatColumnsExample" readonly />

					<div class="demo mt-4">
						<div class="float-columns-demo">
							<div class="sidebar">Sidebar</div>
							<div class="main-content">Main Content Area</div>
						</div>
					</div>
				</div>

				<div class="box mt-4">
					<h4 class="title is-5">5. Common Mistakes to Avoid</h4>
					<ul>
						<li>Don't use fixed heights unless absolutely necessary</li>
						<li>Avoid mixing different positioning methods unnecessarily</li>
						<li>Don't forget to clear floats</li>
						<li>Avoid deep nesting of elements</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="layout-techniques" class="box mt-6">
			<h2 class="title is-3">Common Layout Techniques</h2>

			<div id="two-column">
				<h3 class="title is-4">Two Column Layout</h3>
				<CodeMirror v-model="twoColumnExample" readonly />

				<!-- Two Column Layout Diagram -->
				<svg
					width="600"
					height="200"
					viewBox="0 0 600 200"
					class="layout-diagram"
				>
					<!-- Container -->
					<rect
						x="20"
						y="10"
						width="480"
						height="180"
						fill="#f0f4f8"
						stroke="#94a3b8"
					/>
					<text x="30" y="30" fill="#475569">Container</text>

					<!-- Sidebar -->
					<rect
						x="20"
						y="40"
						width="100"
						height="140"
						fill="#bfdbfe"
						stroke="#3b82f6"
					/>
					<text x="40" y="100" fill="#1e40af">Sidebar</text>

					<!-- Main Content -->
					<rect
						x="130"
						y="40"
						width="250"
						height="140"
						fill="#bbf7d0"
						stroke="#22c55e"
					/>
					<text x="200" y="100" fill="#15803d">Main Content</text>
				</svg>
			</div>

			<div id="holy-grail" class="box mt-6">
				<h3 class="title is-4">Holy Grail Layout</h3>
				<CodeMirror v-model="holyGrailExample" readonly />

				<!-- Holy Grail Layout Diagram -->
				<svg
					width="400"
					height="300"
					viewBox="0 0 400 300"
					class="layout-diagram"
				>
					<!-- Container -->
					<rect
						x="10"
						y="10"
						width="380"
						height="280"
						fill="#f0f4f8"
						stroke="#94a3b8"
					/>

					<!-- Header -->
					<rect
						x="20"
						y="20"
						width="360"
						height="50"
						fill="#fde68a"
						stroke="#f59e0b"
					/>
					<text x="170" y="50" fill="#92400e">Header</text>

					<!-- Navigation -->
					<rect
						x="20"
						y="80"
						width="80"
						height="160"
						fill="#bfdbfe"
						stroke="#3b82f6"
					/>
					<text x="35" y="160" fill="#1e40af">Nav</text>

					<!-- Main Content -->
					<rect
						x="110"
						y="80"
						width="180"
						height="160"
						fill="#bbf7d0"
						stroke="#22c55e"
					/>
					<text x="170" y="160" fill="#15803d">Content</text>

					<!-- Ads/Sidebar -->
					<rect
						x="300"
						y="80"
						width="80"
						height="160"
						fill="#fecaca"
						stroke="#ef4444"
					/>
					<text x="315" y="160" fill="#991b1b">Ads</text>

					<!-- Footer -->
					<rect
						x="20"
						y="250"
						width="360"
						height="30"
						fill="#fde68a"
						stroke="#f59e0b"
					/>
					<text x="170" y="270" fill="#92400e">Footer</text>
				</svg>
			</div>
		</section>

		<section id="basic-patterns" class="box mt-6">
			<h2 class="title is-3">Basic Layout Patterns</h2>

			<!-- The Stack -->
			<div id="stack-pattern" class="box">
				<h3 class="title is-4">The Stack Pattern</h3>
				<p>
					The Stack pattern creates consistent vertical spacing between
					elements. This is one of the most fundamental layout patterns in web
					design.
				</p>

				<div class="example-container">
					<CodeMirror v-model="stackExample" readonly />

					<div class="demo-box mt-4">
						<div class="stack-demo">
							<h3>Stack Example</h3>
							<p>First paragraph of text.</p>
							<p>Second paragraph with spacing.</p>
							<button>A Button</button>
						</div>
					</div>
				</div>

				<!-- Stack Pattern Diagram -->
				<svg
					width="300"
					height="200"
					viewBox="0 0 300 200"
					class="layout-diagram"
				>
					<!-- Container -->
					<rect
						x="10"
						y="10"
						width="280"
						height="180"
						fill="#f0f4f8"
						stroke="#94a3b8"
					/>

					<!-- Stacked Elements -->
					<rect
						x="20"
						y="20"
						width="260"
						height="40"
						fill="#bfdbfe"
						stroke="#3b82f6"
					/>
					<text x="140" y="45" fill="#1e40af">Element 1</text>

					<rect
						x="20"
						y="70"
						width="260"
						height="40"
						fill="#bfdbfe"
						stroke="#3b82f6"
					/>
					<text x="140" y="95" fill="#1e40af">Element 2</text>

					<rect
						x="20"
						y="120"
						width="260"
						height="40"
						fill="#bfdbfe"
						stroke="#3b82f6"
					/>
					<text x="140" y="145" fill="#1e40af">Element 3</text>
				</svg>
			</div>

			<!-- The Box -->
			<div id="box-pattern" class="box mt-6">
				<h3 class="title is-4">The Box Pattern</h3>
				<p>
					The Box pattern creates contained content with consistent padding and
					optional borders or backgrounds.
				</p>

				<div class="example-container">
					<CodeMirror v-model="boxExample" readonly />

					<div class="demo-box mt-4">
						<div class="box-demo">
							<h3>Box Title</h3>
							<p>Content inside a box with padding.</p>
						</div>
					</div>
				</div>

				<!-- Box Pattern Diagram -->
				<svg
					width="300"
					height="200"
					viewBox="0 0 300 200"
					class="layout-diagram"
				>
					<!-- Outer Container -->
					<rect
						x="10"
						y="10"
						width="280"
						height="180"
						fill="#f0f4f8"
						stroke="#94a3b8"
					/>

					<!-- Box with padding -->
					<rect
						x="30"
						y="30"
						width="240"
						height="140"
						fill="#bfdbfe"
						stroke="#3b82f6"
					/>
					<rect
						x="40"
						y="40"
						width="220"
						height="120"
						fill="#dbeafe"
						stroke="none"
						stroke-dasharray="4"
					/>
					<text x="150" y="100" fill="#1e40af">Padding</text>
				</svg>
			</div>

			<!-- The Center -->
			<div id="center-pattern" class="box mt-6">
				<h3 class="title is-4">The Center Pattern</h3>
				<p>
					The Center pattern creates horizontally centered content, commonly
					used for main page containers.
				</p>

				<div class="example-container">
					<CodeMirror v-model="centerExample" readonly />

					<div class="demo-box mt-4">
						<div class="center-demo">
							<div class="centered-content">
								<h3>Centered Content</h3>
								<p>This content is centered on the page.</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Center Pattern Diagram -->
				<svg
					width="400"
					height="200"
					viewBox="0 0 400 200"
					class="layout-diagram"
				>
					<!-- Viewport -->
					<rect
						x="10"
						y="10"
						width="380"
						height="180"
						fill="#f0f4f8"
						stroke="#94a3b8"
					/>

					<!-- Centered Container -->
					<rect
						x="60"
						y="30"
						width="280"
						height="140"
						fill="#bfdbfe"
						stroke="#3b82f6"
					/>
					<text x="200" y="100" fill="#1e40af">Centered Content</text>

					<!-- Margin Indicators -->
					<path d="M 20,100 L 60,100" stroke="#94a3b8" stroke-dasharray="4" />
					<path d="M 340,100 L 380,100" stroke="#94a3b8" stroke-dasharray="4" />
				</svg>
			</div>
		</section>

		<section id="common-structures" class="mt-6">
			<h2 class="title is-3">Common Structures</h2>

			<!-- The Cluster -->
			<div id="cluster-pattern" class="box">
				<h3 class="title is-4">The Cluster Pattern</h3>
				<p>
					The Cluster pattern groups related items together, like navigation
					links or tags.
				</p>

				<div class="example-container">
					<CodeMirror v-model="clusterExample" readonly />

					<div class="demo-box mt-4">
						<div class="cluster-demo">
							<a href="#">Link 1</a>
							<a href="#">Link 2</a>
							<a href="#">Link 3</a>
						</div>
					</div>
				</div>
			</div>

			<!-- The Sidebar -->
			<div id="sidebar-pattern" class="box mt-6">
				<h3 class="title is-4">The Sidebar Pattern</h3>
				<p>
					The Sidebar pattern creates a two-column layout with main content and
					a sidebar.
				</p>

				<div class="example-container">
					<CodeMirror v-model="sidebarExample" readonly />

					<div class="demo-box mt-4">
						<div class="sidebar-demo">
							<div class="main-content">Main Content</div>
							<div class="sidebar-content">Sidebar</div>
						</div>
					</div>
				</div>
			</div>

			<!-- The Simple Grid -->
			<div id="simple-grid-pattern" class="box mt-6">
				<h3 class="title is-4">The Simple Grid Pattern</h3>
				<p>A basic grid layout using floats and percentage widths.</p>

				<div class="example-container">
					<CodeMirror v-model="simpleGridExample" readonly />

					<div class="demo-box mt-4">
						<div class="simple-grid-demo">
							<div class="grid-item">Item 1</div>
							<div class="grid-item">Item 2</div>
							<div class="grid-item">Item 3</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="exercises" class="box mt-6">
			<h2 class="title is-3">Practical Exercises</h2>

			<!-- Black Swan Exercise -->
			<div class="box exercise">
				<h3 class="title is-4">Exercise 1: Black Swan Bistro Layout</h3>

				<div class="notification is-light">
					<h4 class="title is-5">Requirements</h4>
					<ul>
						<li>Create a centered container for the main content</li>
						<li>
							Implement a two-column layout using floats for the menu section
						</li>
						<li>
							Add proper spacing between menu items using the stack pattern
						</li>
						<li>Create a sidebar layout for the specials section</li>
					</ul>
				</div>

				<div class="steps mt-4">
					<h4 class="title is-5">Steps</h4>
					<ol>
						<li>
							Set up the centered container:
							<CodeMirror v-model="blackSwanContainer" readonly />
						</li>
						<li>
							Create the menu section with two columns:
							<CodeMirror v-model="blackSwanMenu" readonly />
						</li>
						<li>
							Style the menu items with proper spacing:
							<CodeMirror v-model="blackSwanItems" readonly />
						</li>
						<li>
							Implement the specials sidebar:
							<CodeMirror v-model="blackSwanSidebar" readonly />
						</li>
					</ol>
				</div>
			</div>

			<!-- Rotto Rocks Exercise -->
			<div class="box exercise">
				<h3 class="title is-4">Exercise 2: Rotto Rocks Layout</h3>

				<div class="notification is-light">
					<h4 class="title is-5">Requirements</h4>
					<ul>
						<li>Create a simple three-column layout using the float pattern</li>
						<li>Implement a cluster pattern for the navigation links</li>
						<li>Use the box pattern for featured content</li>
						<li>Add proper stack spacing between sections</li>
					</ul>
				</div>

				<div class="steps mt-4">
					<h4 class="title is-5">Steps</h4>
					<ol>
						<li>
							Set up the main container:
							<CodeMirror v-model="rottoContainer" readonly />
						</li>
						<li>
							Style the sidebar:
							<CodeMirror v-model="rottoSidebar" readonly />
						</li>
						<li>
							Create the photo gallery:
							<CodeMirror v-model="rottoGallery" readonly />
						</li>
						<li>
							Add the navigation:
							<CodeMirror v-model="rottoNav" readonly />
						</li>
					</ol>
				</div>
			</div>
		</section>

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div v-if="progressEnabled" class="completion-section mt-6">
			<h2 class="title is-3">Summary</h2>

			<div class="content">
				<h3 class="title is-4">What We've Learned</h3>
				<ul>
					<li>
						<strong>Display Properties</strong>: Understanding block, inline,
						and inline-block elements
					</li>
					<li>
						<strong>Positioning</strong>: How to control element placement with
						static, relative, and absolute positioning
					</li>
					<li>
						<strong>Float and Clear</strong>: Using floats for layout and
						clearing them properly
					</li>
					<li>
						<strong>Basic Layout Patterns</strong>:
						<ul>
							<li>The Stack Pattern for vertical layouts</li>
							<li>The Box Pattern for contained content</li>
							<li>The Center Pattern for alignment</li>
						</ul>
					</li>
					<li>
						<strong>Common Structures</strong>:
						<ul>
							<li>Two-column layouts</li>
							<li>Holy Grail layout</li>
							<li>Sidebar patterns</li>
						</ul>
					</li>
				</ul>

				<div class="next-steps mt-6">
					<h3 class="title is-4">Where to Next?</h3>
					<p>
						Now that you understand how to structure and layout your web pages,
						it's time to make them visually appealing! In the next tutorial,
						we'll cover:
					</p>
					<ul>
						<li>Color theory basics</li>
						<li>CSS color properties and values</li>
						<li>Working with background colors</li>
						<li>Creating effective color schemes</li>
						<li>Applying colors to enhance your layouts</li>
					</ul>

					<div class="notification is-info is-light mt-4">
						<p>
							<strong>Next Tutorial:</strong>
							<router-link to="/tutorials/css-basics/colors"
								>Working with Colors</router-link
							>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.css-icon {
	color: #264de4;
	margin-right: 0.5rem;
}

.tutorial-header {
	margin-bottom: 3rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid var(--color-border);
}

.example-container {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-top: 1.5rem;
}

.demo {
	border: 2px solid #eee;
	padding: 1rem;
	border-radius: 4px;
}

/* Display property demo styles */
.block-element {
	background: #e3f2fd;
	padding: 1rem;
	margin-bottom: 1rem;
}

.inline-element {
	background: #f3e5f5;
	padding: 0.5rem;
	margin: 0 0.5rem;
}

.inline-block {
	background: #e8f5e9;
	padding: 1rem;
	width: 150px;
	margin: 0.5rem;
	display: inline-block;
}

/* Ensure CodeMirror instances are properly sized */
:deep(.cm-editor) {
	height: auto !important;
	min-height: 200px;
}

.exercise {
	margin-bottom: 2rem;
}

.steps ol {
	list-style-type: decimal;
	margin-left: 1.5rem;
}

.steps li {
	margin-bottom: 1.5rem;
}

.notification ul {
	margin-left: 1.5rem;
	list-style-type: disc;
}

:deep(.cm-editor) {
	margin-top: 1rem;
	margin-bottom: 1rem;
}

/* Demo styles */
.demo-box {
	border: 2px solid #eee;
	padding: 1rem;
	border-radius: 4px;
	background: #f8f9fa;
}

.stack-demo > * + * {
	margin-top: 1.5rem;
}

.box-demo {
	padding: 1.5rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	background: white;
}

.center-demo {
	max-width: 600px;
	margin: 0 auto;
	text-align: center;
}

.cluster-demo {
	text-align: center;
}

.cluster-demo a {
	display: inline-block;
	margin: 0.5rem;
	padding: 0.5rem 1rem;
	background: #e9ecef;
	border-radius: 4px;
	text-decoration: none;
	color: #333;
}

.sidebar-demo {
	overflow: hidden;
}

.sidebar-demo::after {
	content: '';
	display: table;
	clear: both;
}

.sidebar-demo .main-content,
.sidebar-demo .sidebar-content {
	float: left;
	padding: 1rem;
	background: #e9ecef;
	min-height: 100px;
}

.sidebar-demo .main-content {
	width: 70%;
}

.sidebar-demo .sidebar-content {
	width: 30%;
}

.simple-grid-demo {
	overflow: hidden;
}

.simple-grid-demo::after {
	content: '';
	display: table;
	clear: both;
}

.simple-grid-demo .grid-item {
	float: left;
	width: 33.333%;
	padding: 1rem;
	box-sizing: border-box;
	background: #e9ecef;
	text-align: center;
}

@media (max-width: 768px) {
	.sidebar-demo .main-content,
	.sidebar-demo .sidebar-content {
		float: none;
		width: 100%;
		margin-bottom: 1rem;
	}

	.simple-grid-demo .grid-item {
		width: 50%;
	}
}

@media (max-width: 480px) {
	.simple-grid-demo .grid-item {
		width: 100%;
	}
}

.positioning-diagram {
	background: white;
	padding: 1rem;
	margin: 2rem 0;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.diagram-group text {
	font-family: monospace;
	font-size: 14px;
}

.example-container svg {
	background: white;
	border-radius: 4px;
	margin: 1rem 0;
}

.example-container text {
	font-family: monospace;
}

.example-container ul {
	margin-left: 1.5rem;
	list-style-type: disc;
}

.example-container li {
	margin-bottom: 0.5rem;
}

/* Float Basic Demo */
.float-basic-demo {
	overflow: hidden;
}

.float-basic-demo .float-left {
	float: left;
	width: 150px;
	height: 100px;
	margin-right: 15px;
	padding: 10px;
	background: #e9ecef;
	border: 1px solid #dee2e6;
}

/* Float Columns Demo */
.float-columns-demo {
	overflow: hidden;
	min-height: 200px;
}

.float-columns-demo .sidebar {
	float: left;
	width: 200px;
	padding: 20px;
	background: #e9ecef;
	border: 1px solid #dee2e6;
}

.float-columns-demo .main-content {
	margin-left: 220px;
	padding: 20px;
	background: #f8f9fa;
	border: 1px solid #dee2e6;
}

/* Clear Demo */
.clear-demo {
	margin-bottom: 1rem;
}

.clear-demo::after {
	content: '';
	display: table;
	clear: both;
}

.clear-demo .float-left {
	float: left;
	width: 100px;
	height: 100px;
	margin-right: 10px;
	padding: 10px;
	background: #e9ecef;
	border: 1px solid #dee2e6;
}

.clear-demo .cleared {
	clear: both;
	padding: 10px;
	background: #f8f9fa;
	border: 1px solid #dee2e6;
}

@media (max-width: 768px) {
	.float-columns-demo .sidebar {
		float: none;
		width: auto;
		margin-bottom: 20px;
	}

	.float-columns-demo .main-content {
		margin-left: 0;
	}
}

.layout-diagram {
	margin: 2rem 0;
	background: white;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.layout-diagram text {
	font-family: system-ui, -apple-system, sans-serif;
	font-size: 14px;
	text-anchor: middle;
	dominant-baseline: middle;
}

.summary-section {
	background-color: white;
	padding: 2rem;
}

.summary-section ul {
	margin-left: 1.5rem;
	margin-bottom: 1rem;
}

.summary-section ul ul {
	margin-top: 0.5rem;
}

.next-steps {
	border-top: 1px solid var(--color-border);
	padding-top: 2rem;
}
</style>
