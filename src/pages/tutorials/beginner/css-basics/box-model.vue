<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import DOMPurify from 'dompurify';
import CodeMirror from '@/components/CodeMirror.vue';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { usePageSections } from '@/composables/usePageSections';
import { useRoute } from 'vue-router';
import progressService from '@/services/ProgressService';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';

const frontmatter = {
	title: 'The Box Model',
	date: '2024-03-20',
	author: 'Helen Burgess',
	description: 'Understanding padding, margins, borders, and element sizing',
	tags: ['CSS', 'Box Model', 'Layout', 'Spacing'],
	duration: '25 minutes',
	difficulty: 'beginner',
};

const sections = [
	{
		id: 'understanding-box-model',
		title: 'Understanding the Box Model',
		subsections: [
			{ id: 'what-is-box-model', title: 'What is the Box Model?' },
			{ id: 'box-components', title: 'Box Model Components' },
		],
	},
	{
		id: 'box-sizing',
		title: 'Box Sizing Behavior',
		subsections: [
			{ id: 'content-box', title: 'Content-box (Default)' },
			{ id: 'border-box', title: 'Border-box' },
			{ id: 'choosing-box-sizing', title: 'Which One to Use?' },
		],
	},
	{
		id: 'practical-usage',
		title: 'Practical Usage',
		subsections: [
			{ id: 'common-patterns', title: 'Common Patterns' },
			{ id: 'responsive-considerations', title: 'Responsive Considerations' },
		],
	},
	{
		id: 'exercises',
		title: 'Practical Exercises',
		subsections: [
			{ id: 'black-swan-exercise', title: 'Black Swan Bistro' },
			{ id: 'rotto-rocks-exercise', title: 'Rotto Rocks' },
		],
	},
];

const { pageSections } = usePageSections(sections);

const margin = ref(20);
const border = ref(2);
const padding = ref(20);
const activeLayer = ref(null);

const getLayerDescription = (layer) => {
	const descriptions = {
		margin: 'Creates space outside the element',
		border: 'The boundary around the element',
		padding: 'Space between content and border',
		content: 'The actual element content',
	};
	return descriptions[layer] || '';
};

// Example code snippets
const cardExample = ref(`<!-- Card Layout Example -->
<style>
.card {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}

.card img {
  width: 100%;
  height: 200px;
  border-radius: 4px;
  object-fit: cover;
  background: #f0f0f0;
}

.card-content {
  margin-top: 15px;
}
</style>

<div class="card">
  <svg width="100%" height="200" viewBox="0 0 300 200">
    <!-- Background -->
    <rect width="100%" height="100%" fill="#f0f0f0"/>
    
    <!-- Image placeholder icon -->
    <g transform="translate(125,75)">
      <rect x="0" y="0" width="50" height="50" fill="#ddd"/>
      <path d="M10 35l10-10 5 5 15-15 10 10" 
            stroke="#999" 
            fill="none" 
            stroke-width="2"/>
      <circle cx="40" cy="15" r="5" fill="#999"/>
    </g>
    
    <!-- Text -->
    <text x="150" y="160" 
          text-anchor="middle" 
          fill="#999"
          font-family="system-ui, sans-serif"
          font-size="14">
      Sample Image
    </text>
  </svg>
  <div class="card-content">
    <h3>Card Title</h3>
    <p>Card description goes here.</p>
  </div>
</div>`);

const containerExample = ref(`<!-- Content Container Example -->
<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.content-section {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>

<div class="container">
  <div class="content-section">
    <h2>Welcome</h2>
    <p>Content goes here...</p>
  </div>
</div>`);

const responsiveExample = ref(`<!-- Responsive Layout Example -->
<style>
.responsive-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(1rem + 2vw);
}

.responsive-card {
  padding: clamp(1rem, 3vw, 2rem);
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .responsive-container {
    width: 95%;
    padding: 1rem;
  }
}
</style>

<div class="responsive-container">
  <div class="responsive-card">
    <h3>Responsive Content</h3>
    <p>This adapts to different screen sizes.</p>
  </div>
</div>`);

// Computed properties for sanitized previews
const sanitizedCardPreview = computed(() =>
	DOMPurify.sanitize(cardExample.value),
);
const sanitizedContainerPreview = computed(() =>
	DOMPurify.sanitize(containerExample.value),
);
const sanitizedResponsivePreview = computed(() =>
	DOMPurify.sanitize(responsiveExample.value),
);

const blackSwanExercise = ref(`/* Reset and Base Styles */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Header Styles */
.header {
  padding: 32px 48px;
  text-align: center;
}

/* Navigation */
.nav {
  padding: 16px;
  border-bottom: 1px solid #ddd;
}

/* Menu Sections */
.menu-section {
  margin: 24px 0;
}

/* Content Sections */
.content-section {
  margin: 48px 0;
}

/* Footer */
.footer {
  padding: 24px;
  border-top: 1px solid #eee;
}`);

const rottoRocksExercise = ref(`/* Reset and Base Styles */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Container */
.container {
  width: 100%;
  margin: 0 auto;
  padding: 16px;
}

/* Cards */
.attraction-card {
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  background: white;
}

/* Responsive Layouts */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding: 24px;
  }
  
  .section {
    margin: 32px 0;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 32px 48px;
  }
  
  .section {
    margin: 48px 0;
  }
}`);
</script>

<template>
	<div class="tutorial-content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li>
					<router-link to="/tutorials">Tutorials</router-link>
				</li>
				<li>
					<router-link to="/tutorials/beginner/css-basics/">CSS Basics</router-link>
				</li>
				<li class="is-active"><a href="#" aria-current="page">Box Model</a></li>
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

		<div id="understanding-box-model" class="mt-6">
			<h2 class="title is-3">Understanding the Box Model</h2>

			<div id="what-is-box-model" class="box mt-4">
				<h3 class="title is-4">What is the Box Model?</h3>
				<p>
					The CSS Box Model is the fundamental concept that describes how every
					element on a webpage is structured. Think of each element as a box
					with multiple layers.
				</p>

				<!-- Basic Box Model Diagram -->
				<div class="box-model-diagram mt-4">
					<svg width="500" height="400" viewBox="0 0 500 400">
						<!-- Margin Layer -->
						<rect
							x="50"
							y="50"
							width="400"
							height="300"
							fill="#FFE0B2"
							class="margin-layer"
						/>
						<text x="60" y="75" class="layer-label">Margin</text>

						<!-- Border Layer -->
						<rect
							x="100"
							y="100"
							width="300"
							height="200"
							fill="#FFCC80"
							class="border-layer"
						/>
						<text x="110" y="125" class="layer-label">Border</text>

						<!-- Padding Layer -->
						<rect
							x="150"
							y="150"
							width="200"
							height="100"
							fill="#FFB74D"
							class="padding-layer"
						/>
						<text x="160" y="175" class="layer-label">Padding</text>

						<!-- Content Layer -->
						<rect
							x="175"
							y="175"
							width="150"
							height="50"
							fill="#FFA726"
							class="content-layer"
						/>
						<text x="185" y="205" class="layer-label">Content</text>

						<!-- Arrows and Measurements -->
						<g class="measurements">
							<!-- Add measurement lines and labels here -->
						</g>
					</svg>
				</div>

				<div class="notification is-info is-light mt-4">
					<strong>Key Concepts:</strong>
					<ul>
						<li>Every HTML element is treated as a box</li>
						<li>
							The box consists of four main parts: content, padding, border, and
							margin
						</li>
						<li>Each part serves a specific purpose in layout and spacing</li>
						<li>
							Understanding these parts is crucial for proper layout design
						</li>
					</ul>
				</div>
			</div>

			<div id="box-components" class="box mt-4">
				<h3 class="title is-4">Box Model Components</h3>
				<p>
					Let's explore each layer of the box model in detail, starting from the
					inside out.
				</p>

				<div class="components-grid mt-4">
					<!-- Content Component -->
					<div class="component-section">
						<h4 class="title is-5">Content</h4>
						<svg width="200" height="150" viewBox="0 0 200 150">
							<rect x="25" y="25" width="150" height="100" fill="#FFA726" />
							<text x="75" y="85" class="component-label">Content</text>
						</svg>
						<div class="component-info">
							<p>The actual content of the element (text, image, etc.)</p>
							<pre v-pre><code>width: 200px;
	height: 100px;</code></pre>
						</div>
					</div>

					<!-- Padding Component -->
					<div class="component-section">
						<h4 class="title is-5">Padding</h4>
						<svg width="200" height="150" viewBox="0 0 200 150">
							<rect x="25" y="25" width="150" height="100" fill="#FFB74D" />
							<rect x="45" y="45" width="110" height="60" fill="#FFA726" />
							<text x="75" y="80" class="component-label">Padding</text>
						</svg>
						<div class="component-info">
							<p>Clear space around the content, inside the border</p>
							<pre v-pre><code>padding: 20px;
padding-left: 10px;</code></pre>
						</div>
					</div>

					<!-- Border Component -->
					<div class="component-section">
						<h4 class="title is-5">Border</h4>
						<svg width="200" height="150" viewBox="0 0 200 150">
							<rect x="25" y="25" width="150" height="100" fill="#FFCC80" />
							<rect x="35" y="35" width="130" height="80" fill="#FFB74D" />
							<rect x="45" y="45" width="110" height="60" fill="#FFA726" />
							<text x="75" y="80" class="component-label">Border</text>
						</svg>
						<div class="component-info">
							<p>The border around the padding and content</p>
							<pre v-pre><code>border: 2px solid black;
border-radius: 4px;</code></pre>
						</div>
					</div>

					<!-- Margin Component -->
					<div class="component-section">
						<h4 class="title is-5">Margin</h4>
						<svg width="200" height="150" viewBox="0 0 200 150">
							<rect x="15" y="15" width="170" height="120" fill="#FFE0B2" />
							<rect x="25" y="25" width="150" height="100" fill="#FFCC80" />
							<rect x="35" y="35" width="130" height="80" fill="#FFB74D" />
							<rect x="45" y="45" width="110" height="60" fill="#FFA726" />
							<text x="75" y="80" class="component-label">Margin</text>
						</svg>
						<div class="component-info">
							<p>Clear space outside the border</p>
							<pre v-pre><code>margin: 10px;
	margin-top: 20px;</code></pre>
						</div>
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<strong>Important Properties:</strong>
					<ul>
						<li>
							<strong>Content:</strong> Controlled by width and height
							properties
						</li>
						<li>
							<strong>Padding:</strong> Can be set for each side individually or
							all at once
						</li>
						<li>
							<strong>Border:</strong> Has properties for width, style, and
							color
						</li>
						<li>
							<strong>Margin:</strong> Creates space between elements, can be
							negative
						</li>
					</ul>
				</div>

				<div class="notification is-warning is-light mt-4">
					<strong>Common Gotchas:</strong>
					<ul>
						<li>Margins can collapse between elements</li>
						<li>Padding and border add to element size by default</li>
						<li>Percentage paddings are based on parent width</li>
						<li>Auto margins can center block elements</li>
					</ul>
				</div>

				<!-- Interactive Example -->
				<div class="interactive-demo mt-4">
					<h4 class="title is-5">Interactive Box Model Demo</h4>
					<p>
						Hover over different parts of the box model to see details. Use the
						controls to adjust values.
					</p>

					<div class="demo-container">
						<svg
							width="400"
							height="300"
							viewBox="0 0 400 300"
							class="demo-box"
						>
							<!-- Background Grid -->
							<defs>
								<pattern
									id="grid"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
								>
									<path
										d="M 20 0 L 0 0 0 20"
										fill="none"
										stroke="#eee"
										stroke-width="0.5"
									/>
								</pattern>
							</defs>
							<rect width="400" height="300" fill="url(#grid)" />

							<!-- Box Model Layers -->
							<g class="box-layers">
								<!-- Margin Layer -->
								<rect
									:x="100 - margin"
									:y="50 - margin"
									:width="200 + margin * 2"
									:height="200 + margin * 2"
									fill="#FFE0B2"
									class="margin-layer"
									@mouseover="activeLayer = 'margin'"
									@mouseout="activeLayer = null"
								/>
								<!-- Border Layer -->
								<rect
									:x="100"
									:y="50"
									:width="200"
									:height="200"
									:stroke-width="border"
									fill="#FFCC80"
									stroke="#666"
									class="border-layer"
									@mouseover="activeLayer = 'border'"
									@mouseout="activeLayer = null"
								/>
								<!-- Padding Layer -->
								<rect
									:x="100 + border"
									:y="50 + border"
									:width="200 - border * 2"
									:height="200 - border * 2"
									fill="#FFB74D"
									class="padding-layer"
									@mouseover="activeLayer = 'padding'"
									@mouseout="activeLayer = null"
								/>
								<!-- Content Layer -->
								<rect
									:x="100 + border + padding"
									:y="50 + border + padding"
									:width="200 - border * 2 - padding * 2"
									:height="200 - border * 2 - padding * 2"
									fill="#FFA726"
									class="content-layer"
									@mouseover="activeLayer = 'content'"
									@mouseout="activeLayer = null"
								/>
							</g>

							<!-- Measurements -->
							<g class="measurements" fill="#666" font-size="12">
								<!-- Margin Label -->
								<line
									x1="50"
									y1="50"
									x2="90"
									y2="50"
									stroke="#666"
									stroke-dasharray="2,2"
								/>
								<text x="50" y="45">margin: {{ margin }}px</text>

								<!-- Border Label -->
								<line
									x1="90"
									y1="100"
									x2="98"
									y2="100"
									stroke="#666"
									stroke-dasharray="2,2"
								/>
								<text x="50" y="105">border: {{ border }}px</text>

								<!-- Padding Label -->
								<line
									x1="102"
									y1="150"
									x2="120"
									y2="150"
									stroke="#666"
									stroke-dasharray="2,2"
								/>
								<text x="50" y="155">padding: {{ padding }}px</text>
							</g>
						</svg>

						<!-- Controls -->
						<div class="demo-controls">
							<div class="control">
								<label>Margin:</label>
								<input v-model.number="margin" type="range" min="0" max="40" />
								<span>{{ margin }}px</span>
							</div>

							<div class="control">
								<label>Border:</label>
								<input v-model.number="border" type="range" min="0" max="20" />
								<span>{{ border }}px</span>
							</div>

							<div class="control">
								<label>Padding:</label>
								<input v-model.number="padding" type="range" min="0" max="40" />
								<span>{{ padding }}px</span>
							</div>
						</div>

						<div v-if="activeLayer" class="layer-info">
							<strong
								>{{
									activeLayer.charAt(0).toUpperCase() + activeLayer.slice(1)
								}}:</strong
							>
							<p>{{ getLayerDescription(activeLayer) }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="box-sizing" class="mt-6">
			<h2 class="title is-3">Box Sizing Behavior</h2>
			<p>
				The box-sizing property determines how the total width and height of an
				element is calculated.
			</p>

			<div id="content-box" class="box mt-4">
				<h3 class="title is-4">Content-box (Default)</h3>
				<p>
					With content-box, padding and border are added to the specified width
					and height.
				</p>

				<div class="columns">
					<div class="column">
						<svg
							width="400"
							height="250"
							viewBox="0 0 400 250"
							class="sizing-diagram"
						>
							<!-- Element with content-box -->
							<g class="content-box-example">
								<!-- Total width annotation -->
								<line
									x1="50"
									y1="30"
									x2="350"
									y2="30"
									stroke="#666"
									marker-end="url(#arrow)"
								/>
								<text x="200" y="25" text-anchor="middle" class="annotation">
									Total width: 300px
								</text>

								<!-- Margin -->
								<rect x="50" y="50" width="300" height="150" fill="#FFE0B2" />

								<!-- Border -->
								<rect x="70" y="70" width="260" height="110" fill="#FFCC80" />

								<!-- Padding -->
								<rect x="90" y="90" width="220" height="70" fill="#FFB74D" />

								<!-- Content -->
								<rect x="110" y="110" width="180" height="30" fill="#FFA726" />

								<!-- Measurements -->
								<g class="measurements" fill="#666" font-size="12">
									<text x="200" y="125" text-anchor="middle">width: 200px</text>
									<text x="85" y="180">+ padding: 20px × 2</text>
									<text x="85" y="195">+ border: 10px × 2</text>
									<text x="85" y="210">= total: 260px</text>
								</g>
							</g>
						</svg>

						<pre v-pre><code>box-sizing: content-box;
width: 200px;
padding: 20px;
border: 10px solid black;

/* Total width = 260px */</code></pre>
					</div>
				</div>
			</div>

			<div id="border-box" class="box mt-4">
				<h3 class="title is-4">Border-box</h3>
				<p>
					With border-box, width and height include padding and border. The
					content area shrinks to accommodate them.
				</p>

				<div class="columns">
					<div class="column">
						<svg
							width="400"
							height="250"
							viewBox="0 0 400 250"
							class="sizing-diagram"
						>
							<!-- Element with border-box -->
							<g class="border-box-example">
								<!-- Total width annotation -->
								<line
									x1="50"
									y1="30"
									x2="350"
									y2="30"
									stroke="#666"
									marker-end="url(#arrow)"
								/>
								<text x="200" y="25" text-anchor="middle" class="annotation">
									Total width: 200px
								</text>

								<!-- Margin -->
								<rect x="50" y="50" width="300" height="150" fill="#FFE0B2" />

								<!-- Border -->
								<rect x="70" y="70" width="200" height="110" fill="#FFCC80" />

								<!-- Padding -->
								<rect x="90" y="90" width="160" height="70" fill="#FFB74D" />

								<!-- Content -->
								<rect x="110" y="110" width="120" height="30" fill="#FFA726" />

								<!-- Measurements -->
								<g class="measurements" fill="#666" font-size="12">
									<text x="200" y="125" text-anchor="middle">width: 200px</text>
									<text x="85" y="180">- padding: 20px × 2</text>
									<text x="85" y="195">- border: 10px × 2</text>
									<text x="85" y="210">= content: 140px</text>
								</g>
							</g>
						</svg>

						<pre v-pre><code>box-sizing: border-box;
width: 200px;
padding: 20px;
border: 10px solid black;

/* Total width = 200px */</code></pre>
					</div>
				</div>
			</div>

			<div id="choosing-box-sizing" class="box mt-4">
				<h3 class="title is-4">Which One to Use?</h3>

				<div class="notification is-info is-light">
					<strong>Modern Best Practice:</strong>
					<p>Most developers prefer border-box because:</p>
					<ul>
						<li>
							It's more intuitive - the element's width is exactly what you
							specify
						</li>
						<li>Easier to calculate layouts</li>
						<li>Better for responsive design</li>
					</ul>

                    <pre v-pre><code>/* Common CSS Reset */
*, *::before, *::after {
	box-sizing: border-box;
}</code></pre>
				</div>

				<div class="notification is-warning is-light mt-4">
					<strong>Note:</strong>
					<p>
						content-box is still the default in browsers for historical reasons,
						but most modern CSS frameworks and resets change this to border-box.
					</p>
				</div>
			</div>
		</div>

		<div id="practical-usage" class="mt-6">
			<h2 class="title is-3">Practical Usage</h2>
			<p>
				Let's explore common patterns and real-world applications of the box
				model.
			</p>

			<div id="common-patterns" class="box mt-4">
				<h3 class="title is-4">Common Patterns</h3>

				<!-- Card Layout Example -->
				<div class="example-container">
					<h4 class="title is-5">1. Card Layout</h4>
					<div class="columns">
						<div class="column is-half">
							<CodeMirror
								v-model="cardExample"
								:extensions="[html(), css(), javascript()]"
								:basic-setup="{
									lineNumbers: true,
									highlightActiveLineGutter: true,
									highlightActiveLine: true,
									foldGutter: true,
								}"
							/>
						</div>
						<div class="column is-half">
							<div
								class="preview-container"
								v-html="sanitizedCardPreview"
							></div>
							<div class="explanation mt-4">
								<p>Key points:</p>
								<ul>
									<li>Using padding for internal spacing</li>
									<li>Border for visual boundary</li>
									<li>Margin for spacing between cards</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- Content Container Example -->
				<div class="example-container mt-4">
					<h4 class="title is-5">2. Content Container</h4>
					<div class="columns">
						<div class="column is-half">
							<CodeMirror
								v-model="containerExample"
								:extensions="[html(), css(), javascript()]"
								:basic-setup="{
									lineNumbers: true,
									highlightActiveLineGutter: true,
									highlightActiveLine: true,
									foldGutter: true,
								}"
							/>
						</div>
						<div class="column is-half">
							<div
								class="preview-container"
								v-html="sanitizedContainerPreview"
							></div>
							<div class="explanation mt-4">
								<p>Key points:</p>
								<ul>
									<li>Max-width for readability</li>
									<li>Auto margins for centering</li>
									<li>Consistent padding for spacing</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="responsive-considerations" class="box mt-4">
				<h3 class="title is-4">Responsive Considerations</h3>
				<div class="example-container">
					<div class="columns">
						<div class="column is-half">
							<CodeMirror
								v-model="responsiveExample"
								:extensions="[html(), css(), javascript()]"
								:basic-setup="{
									lineNumbers: true,
									highlightActiveLineGutter: true,
									highlightActiveLine: true,
									foldGutter: true,
								}"
							/>
						</div>
						<div class="column is-half">
							<div
								class="preview-container"
								v-html="sanitizedResponsivePreview"
							></div>
							<div class="explanation mt-4">
								<p>Responsive best practices:</p>
								<ul>
									<li>Use relative units (%, em, rem)</li>
									<li>Adjust padding for different screens</li>
									<li>Consider min/max constraints</li>
									<li>Use calc() for flexible sizing</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="exercises" class="mt-6">
			<h2 class="title is-3">Exercises</h2>

			<div id="black-swan-exercise" class="box mt-4">
				<h3 class="title is-4">Exercise 1: Black Swan Bistro</h3>
				<p>
					Apply box model properties to enhance the restaurant website layout.
				</p>

				<div class="notification is-info is-light">
					<strong>Guidelines:</strong>
					<ul>
						<li>Header section: 32px padding top/bottom, 48px padding sides</li>
						<li>Navigation: 16px padding, 1px bottom border</li>
						<li>Menu items: 24px margin between sections</li>
						<li>Content sections: 48px margin top/bottom</li>
						<li>Footer: 24px padding, light top border</li>
					</ul>
				</div>

				<CodeMirror
					v-model="blackSwanExercise"
					:extensions="[css()]"
					:basic-setup="{
						lineNumbers: true,
						highlightActiveLineGutter: true,
						highlightActiveLine: true,
						foldGutter: true,
					}"
				/>
			</div>

			<div id="rotto-rocks-exercise" class="box mt-4">
				<h3 class="title is-4">Exercise 2: Rotto Rocks</h3>
				<p>
					Implement responsive box model properties following the layout guide.
				</p>

				<div class="notification is-info is-light">
					<strong>Requirements:</strong>
					<ul>
						<li>
							Mobile (320px - 767px):
							<ul>
								<li>Card padding: 24px</li>
								<li>Section margins: 24px</li>
								<li>Minimum padding: 16px</li>
							</ul>
						</li>
						<li>
							Tablet (768px - 1023px):
							<ul>
								<li>Maximum content width: 720px</li>
								<li>Padding: 24px</li>
								<li>Section margins: 32px</li>
							</ul>
						</li>
						<li>
							Desktop (1024px+):
							<ul>
								<li>Maximum content width: 1200px</li>
								<li>Padding: 32px-48px</li>
								<li>Section margins: 48px</li>
							</ul>
						</li>
					</ul>
				</div>

				<CodeMirror
					v-model="rottoRocksExercise"
					:extensions="[css()]"
					:basic-setup="{
						lineNumbers: true,
						highlightActiveLineGutter: true,
						highlightActiveLine: true,
						foldGutter: true,
					}"
				/>
			</div>
		</div>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/css-basics/box-model'" />

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div v-if="progressEnabled" class="completion-section mt-6">
			<div class="box has-text-centered">
				<h3 class="title is-4">Congratulations!</h3>
				<p class="subtitle">You've completed the tutorial</p>
				<div class="content">
					<p>You've learned about:</p>
					<ul>
						<li>The CSS Box Model</li>
						<li>Padding, margins, borders, and element sizing</li>
						<li>Box Sizing Behavior</li>
						<li>Practical Usage</li>
					</ul>
				</div>
				<router-link
					:to="'/tutorials/beginner/css-basics/text'"
					class="button is-primary is-medium"
				>
					Continue to Text Properties →
				</router-link>
			</div>
		</div>
		<TutorialNavigation
			prev="css-basics-introduction"
			next="css-basics-text-properties"
		/>
	</div>
</template>

<style scoped>
.css-icon {
	color: rebeccapurple;
	margin-right: 0.5rem;
}

.tutorial-header {
	margin-bottom: 3rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid var(--color-border);
}

.content {
	max-width: 960px;
	margin: 0 auto;
	padding: 1rem;
}

.mt-4 {
	margin-top: 1rem;
}

.mt-6 {
	margin-top: 1.5rem;
}

.box-model-diagram {
	display: flex;
	justify-content: center;
	background: white;
	padding: 1rem;
	border-radius: 8px;
}

.layer-label {
	font-family: system-ui, -apple-system, sans-serif;
	font-size: 14px;
	fill: #333;
}

/* Hover effects for the diagram */
.margin-layer:hover,
.border-layer:hover,
.padding-layer:hover,
.content-layer:hover {
	opacity: 0.8;
	cursor: pointer;
}

@media (max-width: 768px) {
	.box-model-diagram svg {
		width: 100%;
		height: auto;
	}
}

.components-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
}

.component-section {
	background: white;
	padding: 1rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.component-info {
	margin-top: 1rem;
}

.component-label {
	font-family: system-ui, -apple-system, sans-serif;
	font-size: 12px;
	fill: #333;
	text-anchor: middle;
}

.interactive-demo {
	background: white;
	padding: 1rem;
	border-radius: 8px;
}

.demo-box {
	width: 100%;
	height: auto;
	max-width: 400px;
	margin: 0 auto;
	display: block;
}

pre {
	background: #f5f5f5;
	padding: 0.5rem;
	border-radius: 4px;
	margin-top: 0.5rem;
}

code {
	font-family: monospace;
	color: #2c3e50;
}

.demo-container {
	background: white;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.demo-controls {
	margin-top: 2rem;
}

.control {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
}

.control label {
	min-width: 80px;
	font-weight: 500;
}

.control input[type='range'] {
	flex: 1;
}

.control span {
	min-width: 50px;
	text-align: right;
}

.measurements line {
	stroke-width: 1;
}

.measurements text {
	dominant-baseline: middle;
}

.box-layers rect {
	transition: all 0.3s ease;
}

.box-layers rect:hover {
	opacity: 0.8;
	cursor: pointer;
}

.sizing-diagram {
	background: white;
	margin: 1rem 0;
}

.annotation {
	font-family: system-ui, -apple-system, sans-serif;
	font-size: 12px;
	fill: #666;
}

/* Arrow marker for measurements */
svg {
	overflow: visible;
}

defs {
	position: absolute;
}

marker {
	fill: #666;
}

.example-container {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-top: 1.5rem;
	overflow: hidden;
}

.preview-container {
	border: 2px solid #eee;
	border-radius: 8px;
	padding: 1rem;
	min-height: 200px;
	background: #f8f9fa;
}

.explanation {
	background: #f8f9fa;
	padding: 1rem;
	border-radius: 4px;
}

.explanation ul {
	margin-left: 1.5rem;
	margin-top: 0.5rem;
}

.column {
	overflow: hidden;
}

.next-tutorial-cta {
	margin: 4rem 0;
	padding: 2rem;
	background: var(--color-red-berry);
	border-radius: 8px;
}

.next-tutorial-cta .box {
	max-width: 600px;
	margin: 0 auto;
	padding: 2rem;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.next-tutorial-cta .content ul {
	display: inline-block;
	text-align: left;
	margin: 1rem 0;
}

.next-tutorial-cta .button {
	margin-top: 1rem;
}
</style>
