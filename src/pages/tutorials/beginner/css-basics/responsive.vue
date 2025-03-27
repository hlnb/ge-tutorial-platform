<script setup>
import { ref, computed, inject, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import progressService from '@/services/ProgressService';
import CodeMirror from '@/components/CodeMirror.vue';
import { usePageSections } from '@/composables/usePageSections';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';

const frontmatter = {
	title: 'Responsive Design',
	description:
		'Learn how to create websites that adapt to different screen sizes and devices.',
	position: 4,
	layout: 'tutorial',
	prev: 'modern',
	next: 'flexbox',
	tutorialId: 'css-basics',
	difficulty: 'Beginner',
	timeEstimate: '35 minutes',
	tags: [
		'Media Queries',
		'Responsive Units',
		'Breakpoints',
		'Mobile-First Design',
		'Responsive Images',
		'Layout Patterns',
	],
	stackBlitz: 'css-basics-responsive',
};

const sections = [
	{
		id: 'introduction',
		title: 'Introduction to Responsive Design',
	},
	{
		id: 'mobile-first',
		title: 'Mobile-First Design',
		subsections: [
			{ id: 'mobile-first-concept', title: 'Understanding Mobile-First' },
			{ id: 'mobile-first-practice', title: 'Mobile-First in Practice' },
		],
	},
	{
		id: 'media-queries',
		title: 'Media Queries',
		subsections: [
			{ id: 'basic-queries', title: 'Basic Media Queries' },
			{ id: 'breakpoints', title: 'Common Breakpoints' },
			{ id: 'modern-queries', title: 'Modern Media Query Features' },
		],
	},
	{
		id: 'responsive-units',
		title: 'Responsive Units',
		subsections: [
			{ id: 'relative-units', title: 'Relative Units' },
			{ id: 'viewport-units', title: 'Viewport Units' },
			{ id: 'fluid-typography', title: 'Fluid Typography' },
		],
	},
	{
		id: 'responsive-images',
		title: 'Responsive Images',
		subsections: [
			{ id: 'image-sizing', title: 'Image Sizing Techniques' },
			{ id: 'art-direction', title: 'Art Direction' },
			{ id: 'performance', title: 'Performance Considerations' },
		],
	},
	{
		id: 'layout-patterns',
		title: 'Responsive Layout Patterns',
		subsections: [
			{ id: 'common-patterns', title: 'Common Layout Patterns' },
			{ id: 'navigation', title: 'Responsive Navigation' },
			{ id: 'best-practices', title: 'Best Practices' },
		],
	},
	{
		id: 'testing',
		title: 'Testing Responsive Designs',
	},
	{
		id: 'summary',
		title: 'Summary',
	},
];

const { pageSections } = usePageSections(sections);

const responsiveHolyGrail = ref(`/* Holy Grail Layout - Responsive */
@media (max-width: 768px) {
  .holy-grail-content,
  .holy-grail-nav,
  .holy-grail-ads {
    float: none;
    width: 100%;
  }
}`);

const responsiveContainer = ref(`/* Responsive Container */
@media (max-width: 992px) {
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

const responsiveMenu = ref(`/* Responsive Menu */
@media (max-width: 768px) {
  .menu-column {
    float: none;
    width: 100%;
    padding: 0;
    margin-bottom: 2rem;
  }
}`);

const responsiveGrid = ref(`/* Responsive Grid */
@media (max-width: 768px) {
  .grid-item {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .grid-item {
    width: 100%;
  }
}`);

const responsiveNav = ref(`/* Responsive Navigation */
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

const desktopFirstExample = ref(`/* ❌ Desktop-First Approach */
.container {
  /* Start with desktop styles */
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  /* Add media queries for smaller screens */
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
}`);

const mobileFirstExample = ref(`/* ✅ Mobile-First Approach */
.container {
  /* Start with mobile styles */
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  
  /* Add styles for larger screens */
  @media (min-width: 768px) {
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
  }
}`);

const cardExample = ref(`/* Mobile-First Card Component */
.card {
  /* Base styles (mobile) */
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  /* Image handling */
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Content spacing */
  .card-content {
    padding: 1rem;
  }

  /* Tablet and up */
  @media (min-width: 768px) {
    max-width: 350px;
    
    .card-content {
      padding: 1.5rem;
    }
  }

  /* Desktop and up */
  @media (min-width: 1024px) {
    &:hover {
      transform: translateY(-5px);
      transition: transform 0.3s ease;
    }
  }
}`);

const commonPatternsExample = ref(`/* Common Mobile-First Patterns */
.stack-to-row {
  /* Mobile: Stack elements */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  /* Tablet and up: Row layout */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

/* Hide/Show Elements */
.mobile-menu-button {
  display: block; /* Show on mobile */
  
  @media (min-width: 768px) {
    display: none; /* Hide on larger screens */
  }
}

/* Responsive Text */
.title {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  line-height: 1.2;
}`);

const basicMediaQueryExample = ref(`/* Basic Media Query Structure */
/* Mobile-first base styles */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Multiple conditions */
@media (min-width: 1024px) and (orientation: landscape) {
  .container {
    padding: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* Print styles */
@media print {
  .no-print {
    display: none;
  }
}`);

const breakpointsExample = ref(`/* Common Breakpoint System */
/* Base styles (Mobile first) */
.container {
  width: 100%;
  padding: 1rem;
}

/* Small tablets and large phones */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
    margin: 0 auto;
  }
}

/* Tablets and small desktops */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

/* Large desktops */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Extra large desktops */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}`);

const modernMediaExample = ref(`/* Modern Media Query Features */
/* Preference-based queries */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* Modern range syntax */
@media (width >= 768px) {
  .container {
    padding: 2rem;
  }
}

/* Multiple ranges */
@media (768px <= width <= 1024px) {
  .sidebar {
    width: 250px;
  }
}

/* Future: Custom Media Queries */
@custom-media --tablet (min-width: 768px);
@custom-media --dark-mode (prefers-color-scheme: dark);

@media (--tablet) and (--dark-mode) {
  /* Styles for dark mode on tablets and up */
}`);

const relativeUnitsExample = ref(`/* Relative Units Examples */
:root {
  /* Base font size for rem units */
  font-size: 16px;
}

.container {
  /* Relative to parent width */
  width: 80%;
  
  /* Relative to root font size */
  margin-bottom: 2rem;
  
  /* Relative to parent font size */
  padding: 1.5em;
}

/* Text container with character width */
.text-content {
  max-width: 65ch;
  line-height: 1.5;
}`);

const viewportUnitsExample = ref(`/* Viewport Units */
.hero {
  /* Full viewport height */
  height: 100vh;
  
  /* Half viewport width */
  width: 50vw;
}

/* Modern viewport units */
.mobile-header {
  /* Accounts for mobile browser chrome */
  height: 100svh;
}

.sidebar {
  /* Dynamic viewport width */
  width: 25dvw;
}

/* Combining units */
.banner {
  padding: calc(2rem + 2vh) calc(2rem + 2vw);
}`);

const fluidTypographyExample = ref(`/* Fluid Typography */
/* Basic fluid scaling */
.fluid-text {
  font-size: clamp(1rem, 1rem + 1vw, 1.5rem);
}

/* More complex fluid typography system */
:root {
  /* Fluid font size variables */
  --fluid-min-width: 320;
  --fluid-max-width: 1200;
  --fluid-min-size: 16;
  --fluid-max-size: 24;
  
  /* Calculate fluid font size */
  --fluid-size: calc(
    (var(--fluid-min-size) * 1px) + 
    (var(--fluid-max-size) - var(--fluid-min-size)) * 
    (100vw - (var(--fluid-min-width) * 1px)) / 
    (var(--fluid-max-width) - var(--fluid-min-width))
  );
  
  /* Clamp between min and max sizes */
  font-size: clamp(
    var(--fluid-min-size) * 1px,
    var(--fluid-size),
    var(--fluid-max-size) * 1px
  );
}`);

const basicImageExample = ref(`/* Basic Responsive Image Techniques */
/* Max-width approach */
.responsive-image {
  max-width: 100%;
  height: auto;
}

/* Object-fit approach */
.image-wrapper {
  width: 100%;
  height: 300px; /* Fixed height */
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Background image approach */
.bg-image {
  width: 100%;
  height: 50vh;
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}`);

const artDirectionExample = ref(`/* Art Direction with Picture Element */
/* Basic picture element usage */
<picture>
  <!-- Large desktop image -->
  <source
    media="(min-width: 1024px)"
    srcset="large.jpg"
  >
  <!-- Tablet image -->
  <source
    media="(min-width: 768px)"
    srcset="medium.jpg"
  >
  <!-- Default (mobile) image -->
  <img src="small.jpg" alt="Description">
</picture>

/* Responsive images with srcset */
<img
  srcset="
    small.jpg 300w,
    medium.jpg 600w,
    large.jpg 900w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1024px) 50vw,
    900px
  "
  src="small.jpg"
  alt="Description"
>`);

const performanceExample = ref(`/* Image Performance Optimization */
/* Lazy loading */
.lazy-image {
  width: 100%;
  height: auto;
  opacity: 0;
  transition: opacity 0.3s;
}

.lazy-image.loaded {
  opacity: 1;
}

/* Blur-up technique */
.image-container {
  position: relative;
  overflow: hidden;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modern loading attribute */
<img
  src="image.jpg"
  loading="lazy"
  width="800"
  height="400"
  alt="Description"
>`);

const layoutPatternsExample = ref(`/* Common Layout Patterns */
/* Basic Grid Pattern */
.grid-container {
  display: grid;
  gap: 1rem;
  
  /* Mobile: Single column */
  grid-template-columns: 1fr;
  
  /* Tablet: Two columns */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Desktop: Four columns */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Holy Grail Layout */
.holy-grail {
  display: grid;
  gap: 1rem;
  
  /* Mobile: Stack everything */
  grid-template-areas:
    "header"
    "nav"
    "main"
    "sidebar"
    "footer";
    
  /* Desktop: Classic layout */
  @media (min-width: 1024px) {
    grid-template-areas:
      "header  header  header"
      "nav     main    sidebar"
      "footer  footer  footer";
    grid-template-columns: 200px 1fr 200px;
  }
}`);

const navigationExample = ref(`/* Responsive Navigation */
.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
}

/* Mobile menu button */
.nav-toggle {
  display: none;
}

/* Mobile styles */
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  
  .nav-menu {
    display: none;
    width: 100%;
    
    &.active {
      display: block;
    }
  }
  
  .nav-menu li {
    display: block;
    margin: 1rem 0;
  }
}

/* Desktop styles */
@media (min-width: 769px) {
  .nav-menu {
    display: flex;
    gap: 2rem;
  }
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
					<a href="#" aria-current="page">Responsive Design</a>
				</li>
			</ul>
		</nav>

		<header class="tutorial-header">
			<div class="tags mb-4">
				<span class="tag is-info">{{ frontmatter.difficulty }}</span>
				<span class="tag is-warning">{{ frontmatter.timeEstimate }}</span>
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

		<div class="notification is-info is-light">
			<p>
				<strong>Prerequisites:</strong> Understanding of basic CSS and modern
				CSS features (covered in previous tutorials)
			</p>
		</div>

		<section id="introduction">
			<h2 class="title is-2">Introduction to Responsive Design</h2>
			<p>
				Responsive web design is an approach that makes web pages render well on
				a variety of devices and window or screen sizes. In this tutorial, we'll
				learn how to create responsive layouts that adapt to different viewing
				contexts.
			</p>

			<div class="box">
				<h3 class="title is-4">What We'll Cover</h3>
				<ul>
					<li>Mobile-first design principles</li>
					<li>Using media queries effectively</li>
					<li>Working with responsive units</li>
					<li>Handling images responsively</li>
					<li>Implementing common responsive patterns</li>
					<li>Testing responsive layouts</li>
				</ul>
			</div>

			<div class="notification is-warning is-light mt-4">
				<p>
					<strong>Note:</strong> This tutorial builds on concepts from the
					Modern CSS tutorial. Make sure you're comfortable with CSS Custom
					Properties and modern units before proceeding.
				</p>
			</div>
		</section>

		<section id="mobile-first" class="mt-6">
			<h2 class="title is-2">Mobile-First Design</h2>
			<p>
				Mobile-first design is an approach that starts with designing for mobile
				devices first, then progressively enhances the design for larger
				screens.
			</p>

			<section id="mobile-first-concept">
				<h3 class="title is-3">Understanding Mobile-First</h3>
				<div class="box">
					<h4 class="title is-4">Key Principles</h4>
					<ul>
						<li>
							<strong>Start Small:</strong> Design for mobile screens first
						</li>
						<li>
							<strong>Progressive Enhancement:</strong> Add features as screen
							size increases
						</li>
						<li>
							<strong>Content Priority:</strong> Focus on essential content and
							features
						</li>
						<li>
							<strong>Performance:</strong> Optimize for mobile devices and
							connections
						</li>
					</ul>

					<div class="code-comparison mt-4">
						<h5 class="title is-5">Desktop-First vs Mobile-First Approach</h5>
						<div class="columns">
							<div class="column">
								<h6 class="title is-6">❌ Desktop-First (Old Way)</h6>
								<CodeMirror v-model="desktopFirstExample" readonly />
							</div>
							<div class="column">
								<h6 class="title is-6">✅ Mobile-First (Modern Way)</h6>
								<CodeMirror v-model="mobileFirstExample" readonly />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="mobile-first-practice" class="mt-5">
				<h3 class="title is-3">Mobile-First in Practice</h3>

				<div class="box">
					<h4 class="title is-4">Example: Card Component</h4>
					<CodeMirror v-model="cardExample" readonly />

					<div class="demo-container mt-4">
						<div class="responsive-card">
							<img src="https://picsum.photos/300/200" alt="Demo image" />
							<div class="card-content">
								<h3>Card Title</h3>
								<p>This card demonstrates mobile-first design principles.</p>
							</div>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<h5 class="title is-5">Mobile-First Benefits</h5>
						<ul>
							<li>
								<strong>Better Performance:</strong> Lighter code for mobile
								devices
							</li>
							<li>
								<strong>Focused Design:</strong> Forces prioritization of
								content
							</li>
							<li>
								<strong>Future-Proof:</strong> Easier to adapt to new device
								sizes
							</li>
							<li>
								<strong>Maintainable Code:</strong> Clearer structure and fewer
								overrides
							</li>
						</ul>
					</div>
				</div>

				<div class="box mt-4">
					<h4 class="title is-4">Common Patterns</h4>
					<CodeMirror v-model="commonPatternsExample" readonly />

					<div class="pattern-demos mt-4">
						<div class="stack-to-row">
							<div class="demo-box">1</div>
							<div class="demo-box">2</div>
							<div class="demo-box">3</div>
						</div>
					</div>
				</div>
			</section>
		</section>

		<section id="media-queries" class="mt-6">
			<h2 class="title is-2">Media Queries</h2>
			<p>
				Media queries allow us to apply CSS rules based on device
				characteristics, such as screen width, height, or device capabilities.
			</p>

			<section id="basic-queries">
				<h3 class="title is-3">Basic Media Queries</h3>
				<div class="box">
					<h4 class="title is-4">Syntax and Structure</h4>
					<CodeMirror v-model="basicMediaQueryExample" readonly />

					<div class="notification is-info is-light mt-4">
						<h5 class="title is-5">Common Media Features</h5>
						<ul>
							<li>
								<code>width</code>, <code>min-width</code>,
								<code>max-width</code>
							</li>
							<li>
								<code>height</code>, <code>min-height</code>,
								<code>max-height</code>
							</li>
							<li><code>orientation</code> (portrait/landscape)</li>
							<li><code>aspect-ratio</code></li>
							<li><code>display-mode</code> (fullscreen, standalone, etc.)</li>
						</ul>
					</div>
				</div>
			</section>

			<section id="breakpoints" class="mt-5">
				<h3 class="title is-3">Common Breakpoints</h3>
				<div class="box">
					<h4 class="title is-4">Standard Breakpoints</h4>
					<CodeMirror v-model="breakpointsExample" readonly />

					<div class="breakpoints-demo mt-4">
						<div class="responsive-element">
							<p>Resize window to see changes</p>
							<span class="current-breakpoint"></span>
						</div>
					</div>

					<div class="notification is-warning is-light mt-4">
						<p>
							<strong>Important:</strong> These breakpoints are guidelines, not
							strict rules. Always design based on your content's needs rather
							than specific device sizes.
						</p>
					</div>
				</div>
			</section>

			<section id="modern-queries" class="mt-5">
				<h3 class="title is-3">Modern Media Query Features</h3>
				<div class="box">
					<h4 class="title is-4">New Capabilities</h4>
					<CodeMirror v-model="modernMediaExample" readonly />

					<div class="features-grid mt-4">
						<div class="feature-card">
							<h5>Preference Queries</h5>
							<p>Adapt to user preferences like dark mode and reduced motion</p>
						</div>
						<div class="feature-card">
							<h5>Range Syntax</h5>
							<p>Use modern range syntax for cleaner media queries</p>
						</div>
						<div class="feature-card">
							<h5>Custom Media Queries</h5>
							<p>Create reusable query aliases (Coming soon)</p>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<h5 class="title is-5">Best Practices</h5>
						<ul>
							<li>Use mobile-first approach with <code>min-width</code></li>
							<li>Keep media queries organized and consistent</li>
							<li>Consider user preferences and accessibility</li>
							<li>Test across different devices and orientations</li>
						</ul>
					</div>
				</div>
			</section>
		</section>

		<section id="responsive-units" class="mt-6">
			<h2 class="title is-2">Responsive Units</h2>
			<p>
				Responsive units allow elements to scale fluidly based on viewport size
				or parent element dimensions.
			</p>

			<section id="relative-units">
				<h3 class="title is-3">Relative Units</h3>
				<div class="box">
					<h4 class="title is-4">Common Relative Units</h4>
					<div class="units-table">
						<table class="table is-fullwidth">
							<thead>
								<tr>
									<th>Unit</th>
									<th>Relative To</th>
									<th>Common Uses</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>em</code></td>
									<td>Parent element's font size</td>
									<td>Typography, margins, padding</td>
								</tr>
								<tr>
									<td><code>rem</code></td>
									<td>Root element's font size</td>
									<td>Global sizing, consistent spacing</td>
								</tr>
								<tr>
									<td><code>%</code></td>
									<td>Parent element's size</td>
									<td>Layouts, widths, heights</td>
								</tr>
								<tr>
									<td><code>ch</code></td>
									<td>Width of "0" character</td>
									<td>Text container widths</td>
								</tr>
							</tbody>
						</table>
					</div>

					<CodeMirror v-model="relativeUnitsExample" readonly />

					<div class="units-demo mt-4">
						<div class="em-example">
							Text with em units
							<div class="nested">Nested text</div>
						</div>
						<div class="rem-example">
							Text with rem units
							<div class="nested">Nested text</div>
						</div>
					</div>
				</div>
			</section>

			<section id="viewport-units" class="mt-5">
				<h3 class="title is-3">Viewport Units</h3>
				<div class="box">
					<h4 class="title is-4">Viewport-Based Sizing</h4>
					<CodeMirror v-model="viewportUnitsExample" readonly />

					<div class="viewport-demo mt-4">
						<div class="vw-element">50vw width</div>
						<div class="vh-element">50vh height</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<h5 class="title is-5">Modern Viewport Units</h5>
						<ul>
							<li>
								<code>svh</code>, <code>lvh</code>, <code>dvh</code> - Small,
								large, and dynamic viewport height
							</li>
							<li>
								<code>svw</code>, <code>lvw</code>, <code>dvw</code> - Small,
								large, and dynamic viewport width
							</li>
							<li>
								<code>vi</code>, <code>vb</code> - Viewport inline and block
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section id="fluid-typography" class="mt-5">
				<h3 class="title is-3">Fluid Typography</h3>
				<div class="box">
					<h4 class="title is-4">Creating Responsive Text</h4>
					<CodeMirror v-model="fluidTypographyExample" readonly />

					<div class="typography-demo mt-4">
						<h1 class="fluid-title">Fluid Heading</h1>
						<p class="fluid-text">
							This text scales smoothly between viewport sizes.
						</p>
					</div>

					<div class="notification is-warning is-light mt-4">
						<h5 class="title is-5">Best Practices</h5>
						<ul>
							<li>Use <code>rem</code> for consistent spacing system</li>
							<li>Prefer <code>em</code> for component-level spacing</li>
							<li>
								Use viewport units carefully to avoid text becoming too
								large/small
							</li>
							<li>Test fluid typography across different devices</li>
						</ul>
					</div>
				</div>
			</section>
		</section>

		<section id="responsive-images" class="mt-6">
			<h2 class="title is-2">Responsive Images</h2>
			<p>
				Responsive images adapt to different screen sizes and device
				capabilities while optimizing performance.
			</p>

			<section id="image-sizing">
				<h3 class="title is-3">Image Sizing Techniques</h3>
				<div class="box">
					<h4 class="title is-4">Basic Responsive Images</h4>
					<CodeMirror v-model="basicImageExample" readonly />

					<div class="image-demos mt-4">
						<div class="demo-container">
							<h5 class="title is-6">Max-width Approach</h5>
							<img
								src="https://picsum.photos/800/400"
								alt="Demo image"
								class="max-width-image"
							/>
						</div>

						<div class="demo-container">
							<h5 class="title is-6">Object-fit Approach</h5>
							<div class="image-wrapper">
								<img
									src="https://picsum.photos/800/400"
									alt="Demo image"
									class="object-fit-image"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="art-direction" class="mt-5">
				<h3 class="title is-3">Art Direction</h3>
				<div class="box">
					<h4 class="title is-4">Different Images for Different Screens</h4>
					<CodeMirror v-model="artDirectionExample" readonly />

					<div class="art-direction-demo mt-4">
						<picture class="demo-picture">
							<!-- Resize window to see different images -->
							<source
								media="(min-width: 1024px)"
								srcset="https://picsum.photos/1200/400"
							/>
							<source
								media="(min-width: 768px)"
								srcset="https://picsum.photos/800/400"
							/>
							<img
								src="https://picsum.photos/400/300"
								alt="Responsive demo image"
								class="art-directed-image"
							/>
						</picture>
					</div>

					<div class="notification is-info is-light mt-4">
						<h5 class="title is-5">When to Use Picture Element</h5>
						<ul>
							<li>Different image aspects for different screens</li>
							<li>Art direction needs (cropping, focus points)</li>
							<li>Supporting modern image formats with fallbacks</li>
							<li>Complex responsive image scenarios</li>
						</ul>
					</div>
				</div>
			</section>

			<section id="performance" class="mt-5">
				<h3 class="title is-3">Performance Considerations</h3>
				<div class="box">
					<h4 class="title is-4">Optimizing Image Loading</h4>
					<CodeMirror v-model="performanceExample" readonly />

					<div class="performance-demo mt-4">
						<div class="lazy-image-container">
							<img
								src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"
								data-src="https://picsum.photos/800/400"
								alt="Lazy loaded image"
								class="lazy-image"
								loading="lazy"
							/>
							<div class="placeholder">Image loading...</div>
						</div>
					</div>

					<div class="notification is-warning is-light mt-4">
						<h5 class="title is-5">Image Performance Checklist</h5>
						<ul>
							<li>Use appropriate image formats (WebP with fallbacks)</li>
							<li>Implement lazy loading for off-screen images</li>
							<li>Provide proper width and height attributes</li>
							<li>Use responsive images with srcset and sizes</li>
							<li>Optimize images for different pixel densities</li>
						</ul>
					</div>
				</div>
			</section>
		</section>

		<section id="layout-patterns" class="mt-6">
			<h2 class="title is-2">Responsive Layout Patterns</h2>
			<p>
				Common patterns for creating responsive layouts that work across
				different screen sizes.
			</p>

			<section id="common-patterns">
				<h3 class="title is-3">Common Layout Patterns</h3>
				<div class="box">
					<h4 class="title is-4">Basic Patterns</h4>
					<CodeMirror v-model="layoutPatternsExample" readonly />

					<div class="patterns-demo mt-4">
						<div class="pattern-grid">
							<div class="pattern-item">1</div>
							<div class="pattern-item">2</div>
							<div class="pattern-item">3</div>
							<div class="pattern-item">4</div>
						</div>
					</div>
				</div>
			</section>

			<section id="navigation" class="mt-5">
				<h3 class="title is-3">Responsive Navigation</h3>
				<div class="box">
					<h4 class="title is-4">Navigation Patterns</h4>
					<CodeMirror v-model="navigationExample" readonly />

					<div class="nav-demo mt-4">
						<nav class="demo-nav">
							<div class="nav-brand">Logo</div>
							<button class="nav-toggle">☰</button>
							<ul class="nav-menu">
								<li><a href="#">Home</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</section>

			<section id="best-practices" class="mt-5">
				<h3 class="title is-3">Best Practices</h3>
				<div class="box">
					<h4 class="title is-4">Responsive Design Guidelines</h4>
					<ul>
						<li>
							<strong>Mobile-First Approach</strong>
							<ul>
								<li>Start with mobile layout</li>
								<li>Progressive enhancement for larger screens</li>
								<li>Focus on core content first</li>
							</ul>
						</li>
						<li>
							<strong>Performance</strong>
							<ul>
								<li>Optimize images and media</li>
								<li>Minimize layout shifts</li>
								<li>Consider loading times</li>
							</ul>
						</li>
						<li>
							<strong>Testing</strong>
							<ul>
								<li>Test on real devices</li>
								<li>Check different orientations</li>
								<li>Verify breakpoint transitions</li>
							</ul>
						</li>
					</ul>
				</div>
			</section>
		</section>

		<section id="testing" class="mt-6">
			<h2 class="title is-2">Testing Responsive Designs</h2>
			<div class="box">
				<h3 class="title is-4">Testing Methods</h3>
				<div class="content">
					<ul>
						<li>
							<strong>Browser Dev Tools</strong>
							<ul>
								<li>Device emulation</li>
								<li>Responsive design mode</li>
								<li>Network throttling</li>
							</ul>
						</li>
						<li>
							<strong>Real Device Testing</strong>
							<ul>
								<li>Different screen sizes</li>
								<li>Various browsers</li>
								<li>Different operating systems</li>
							</ul>
						</li>
						<li>
							<strong>Testing Tools</strong>
							<ul>
								<li>Browser Stack</li>
								<li>Lambda Test</li>
								<li>Responsive Design Checker</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section id="summary" class="mt-6">
			<h2 class="title is-2">Summary</h2>
			<div class="box">
				<h3 class="title is-4">Key Takeaways</h3>
				<ul>
					<li>
						Mobile-first design is the foundation of modern responsive design
					</li>
					<li>Media queries help create breakpoint-based layouts</li>
					<li>Responsive units enable fluid and flexible designs</li>
					<li>Images require special handling for responsive layouts</li>
					<li>
						Common patterns help solve recurring responsive design challenges
					</li>
				</ul>

				<div class="notification is-warning is-light mt-4">
					<h4 class="title is-5">Next Steps</h4>
					<p>
						Now that you understand responsive design principles, you're ready
						to learn about Flexbox! Flexbox will give you even more tools for
						creating flexible, responsive layouts.
					</p>
					<p class="mt-3">
						<a href="/tutorials/css-basics/flexbox" class="button is-warning">
							Continue to Flexbox →
						</a>
					</p>
				</div>
			</div>
		</section>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/css-basics/responsive'" />

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div v-if="progressEnabled" class="completion-section mt-6">
			<h2 class="title is-2">Completion</h2>
			<div class="box">
				<h3 class="title is-4">Congratulations!</h3>
				<p>You've completed the Responsive Design tutorial.</p>
				<p>Your progress has been recorded. Keep up the good work!</p>
			</div>
		</div>

		<TutorialNavigation prev="modern" next="flexbox" />
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

.content {
	max-width: 960px;
	margin: 0 auto;
	padding: 2rem;
}

.demo-container {
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.responsive-card {
	width: 100%;
	max-width: 350px;
	margin: 0 auto;
	background: white;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.responsive-card img {
	width: 100%;
	height: auto;
	display: block;
}

.responsive-card .card-content {
	padding: 1rem;
}

.pattern-demos {
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.stack-to-row {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

@media (min-width: 768px) {
	.stack-to-row {
		flex-direction: row;
		justify-content: space-between;
	}
}

.demo-box {
	background-color: #3b82f6;
	color: white;
	padding: 2rem;
	text-align: center;
	border-radius: 4px;
	flex: 1;
}

.breakpoints-demo {
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.responsive-element {
	background-color: #3b82f6;
	color: white;
	padding: 2rem;
	text-align: center;
	border-radius: 4px;
}

.current-breakpoint::before {
	content: 'Mobile';
}

@media (min-width: 576px) {
	.current-breakpoint::before {
		content: 'Small Tablet';
	}
}

@media (min-width: 768px) {
	.current-breakpoint::before {
		content: 'Tablet';
	}
}

@media (min-width: 1024px) {
	.current-breakpoint::before {
		content: 'Desktop';
	}
}

@media (min-width: 1280px) {
	.current-breakpoint::before {
		content: 'Large Desktop';
	}
}

.features-grid {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.feature-card {
	background-color: #f8fafc;
	padding: 1.5rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-card h5 {
	margin: 0 0 0.5rem 0;
	color: #3b82f6;
}

.feature-card p {
	margin: 0;
	font-size: 0.9rem;
	color: #64748b;
}

.units-table {
	margin-bottom: 1rem;
}

.units-table table {
	width: 100%;
	border-collapse: collapse;
}

.units-table th,
.units-table td {
	padding: 0.5rem;
	text-align: left;
}

.units-table th {
	background-color: #f8fafc;
}

.units-table td:first-child {
	font-weight: bold;
}

.units-table td:last-child {
	text-align: right;
}

.units-demo {
	display: grid;
	gap: 2rem;
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.em-example,
.rem-example {
	padding: 1em;
	background-color: #3b82f6;
	color: white;
	border-radius: 4px;
	font-size: 1.2em;
}

.em-example .nested,
.rem-example .nested {
	margin-top: 1em;
	padding: 1em;
	background-color: #1d4ed8;
	border-radius: 4px;
}

.rem-example,
.rem-example .nested {
	font-size: 1.2rem;
}

.viewport-demo {
	position: relative;
	height: 60vh;
	background-color: #f5f5f5;
	border-radius: 8px;
	overflow: hidden;
}

.vw-element {
	width: 50vw;
	padding: 1rem;
	background-color: #3b82f6;
	color: white;
	text-align: center;
}

.vh-element {
	height: 50vh;
	width: 100px;
	background-color: #1d4ed8;
	color: white;
	writing-mode: vertical-rl;
	text-align: center;
	padding: 1rem;
}

.typography-demo {
	padding: 2rem;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.fluid-title {
	font-size: clamp(2rem, 5vw + 1rem, 4rem);
	margin-bottom: 1rem;
	color: #1d4ed8;
}

.fluid-text {
	font-size: clamp(1rem, 1rem + 1vw, 1.5rem);
	line-height: 1.5;
	color: #374151;
}

.image-demos {
	display: grid;
	gap: 2rem;
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.demo-container {
	background-color: white;
	padding: 1rem;
	border-radius: 4px;
}

.max-width-image {
	max-width: 100%;
	height: auto;
	display: block;
}

.image-wrapper {
	width: 100%;
	height: 200px;
	overflow: hidden;
}

.object-fit-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}

.art-direction-demo {
	background-color: #f5f5f5;
	padding: 1rem;
	border-radius: 8px;
}

.art-directed-image {
	width: 100%;
	height: auto;
	display: block;
	border-radius: 4px;
}

.lazy-image-container {
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 50%;
	background-color: #f0f0f0;
	border-radius: 4px;
	overflow: hidden;
}

.lazy-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity 0.3s;
}

.lazy-image.loaded {
	opacity: 1;
}

.placeholder {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #666;
	font-size: 0.9rem;
}

.nav-demo {
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.demo-nav {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	background-color: white;
	border-radius: 4px;
}

.demo-nav .nav-brand {
	font-weight: bold;
	font-size: 1.25rem;
	color: #3b82f6;
}

.demo-nav .nav-toggle {
	display: none;
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	color: #3b82f6;
}

.demo-nav .nav-menu {
	display: flex;
	gap: 2rem;
	list-style: none;
	margin: 0;
	padding: 0;
}

@media (max-width: 768px) {
	.demo-nav .nav-toggle {
		display: block;
	}

	.demo-nav .nav-menu {
		display: none;
		width: 100%;
		margin-top: 1rem;
	}

	.demo-nav .nav-menu li {
		margin: 1rem 0;
	}
}

.patterns-demo {
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.pattern-grid {
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;
}

@media (min-width: 768px) {
	.pattern-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1024px) {
	.pattern-grid {
		grid-template-columns: repeat(4, 1fr);
	}
}

.pattern-item {
	background-color: #3b82f6;
	color: white;
	padding: 2rem;
	text-align: center;
	border-radius: 4px;
}

.nav-demo {
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.demo-nav {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	background-color: white;
	border-radius: 4px;
}

.nav-brand {
	font-weight: bold;
	font-size: 1.25rem;
	color: #3b82f6;
}

.nav-toggle {
	display: none;
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	color: #3b82f6;
}

.nav-menu {
	display: flex;
	gap: 2rem;
	list-style: none;
	margin: 0;
	padding: 0;
}

@media (max-width: 768px) {
	.nav-toggle {
		display: block;
	}

	.nav-menu {
		display: none;
		width: 100%;
		margin-top: 1rem;
	}

	.nav-menu.active {
		display: block;
	}

	.nav-menu li {
		margin: 1rem 0;
	}
}
</style>
