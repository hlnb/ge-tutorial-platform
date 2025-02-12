<script setup>
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import CodeMirror from '@/components/CodeMirror.vue';
import { ref, computed } from 'vue';
import DOMPurify from 'dompurify';

// Element Selectors Example
const elementExample = ref(`<!-- HTML -->
<h1>Welcome to my website</h1>
<p>This is a paragraph with navy text.</p>
<p>This is another paragraph that will also be styled.</p>

/* CSS */
p {
	color: navy;
	line-height: 1.6;
}

h1 {
	color: #333;
	font-size: 2em;
}`);

// Class Selectors Example
const classExample = ref(`<!-- HTML -->
<p class="highlight">This important text is highlighted</p>
<div class="button">Click me</div>
<p class="highlight">This text is also highlighted</p>

/* CSS */
.highlight {
	background-color: yellow;
	padding: 10px;
}

.button {
	background-color: blue;
	color: white;
	padding: 8px 16px;
	cursor: pointer;
}`);

// ID Selectors Example
const idExample = ref(`<!-- HTML -->
<header id="header">
	<h1>Main Website Header</h1>
</header>

<main id="main-content">
	<p>This is the main content area.</p>
</main>

/* CSS */
#header {
	background-color: black;
	color: white;
	padding: 20px;
}

#main-content {
	max-width: 800px;
	margin: 0 auto;
}`);

// Basic Combinations Example
const combinationsExample = ref(`<!-- HTML -->
<article>
	<h2>Article Title</h2>
	<p>This paragraph is inside the article.</p>
	<p>This one too!</p>
</article>

<div class="card featured">
	<p>This is a featured card</p>
</div>

<div class="container">
	<p>Direct child paragraph</p>
	<div>
		<p>Not a direct child paragraph</p>
	</div>
</div>

/* CSS */
article p {
	font-size: 16px;
	color: #666;
}

.card.featured {
	border: 2px solid gold;
	background: #fff8e7;
}

.container > p {
	margin: 10px;
	background: #f0f0f0;
}`);

// Add computed properties for sanitized previews
const sanitizedElementPreview = computed(() =>
	DOMPurify.sanitize(`
<div class="preview-example">
	<style>
		.preview-example p { color: navy; line-height: 1.6; }
		.preview-example h1 { color: #333; font-size: 2em; }
	</style>
	<h1>Welcome to my website</h1>
	<p>This is a paragraph with navy text.</p>
	<p>This is another paragraph that will also be styled.</p>
</div>
`),
);

const sanitizedClassPreview = computed(() =>
	DOMPurify.sanitize(`
<div class="preview-example">
	<style>
		.preview-example .highlight {
			background-color: yellow;
			padding: 10px;
		}
		.preview-example .button {
			background-color: blue;
			color: white;
			padding: 8px 16px;
			display: inline-block;
			margin-top: 10px;
		}
	</style>
	<p class="highlight">This is highlighted text</p>
	<a href="#" class="button">Click me</a>
	<p class="highlight">This is another paragraph</p>
</div>
`),
);

const sanitizedIdPreview = computed(() =>
	DOMPurify.sanitize(`
<div class="preview-example">
	<style>
		.preview-example #header {
			background-color: black;
			color: white;
			padding: 20px;
		}
		.preview-example #main-content {
			max-width: 800px;
			margin: 0 auto;
			padding: 20px;
			background-color: #f5f5f5;
		}
	</style>
	<div id="header">Header Content</div>
	<div id="main-content">Main content area</div>
</div>
`),
);

const sanitizedCombinationsPreview = computed(() =>
	DOMPurify.sanitize(`
<div class="preview-example">
	<style>
		.preview-example article p {
			font-size: 16px;
			color: #666;
		}
		.preview-example .card.featured {
			border: 2px solid gold;
			padding: 10px;
			margin: 10px 0;
		}
		.preview-example .container > p {
			margin: 10px;
			background: #f0f0f0;
		}
	</style>
	<article>
		<p>This paragraph is inside an article</p>
	</article>
	<div class="card featured">This is a featured card</div>
	<div class="container">
		<p>Direct child paragraph</p>
		<div>
			<p>Not a direct child paragraph</p>
		</div>
	</div>
</div>
`),
);

// Exercise Starter Code
const exerciseStarterCode = ref(`<!-- HTML Structure -->
<header id="bistro-header">
  <img src="/images/tutorials/html-basics/black-swan-logo.svg" 
       alt="Black Swan Bistro logo" 
       width="200">
  <h1>Black Swan Bistro</h1>
  <p>Fine Dining & Elegant Atmosphere</p>
</header>

<section class="hero">
  <img src="/images/tutorials/html-basics/black-swan-storefront.jpg"
       alt="Black Swan Bistro exterior at sunset"
       class="hero-image">
</section>

<section class="menu">
  <h2>Our Menu</h2>
  
  <div class="menu-item featured">
    <img src="/images/tutorials/html-basics/black-swan-steak.jpg"
         alt="Premium ribeye steak with roasted vegetables"
         class="menu-image">
    <h3>Premium Ribeye</h3>
    <p>28-day aged beef with seasonal vegetables</p>
    <span class="price">$42</span>
  </div>

  <div class="menu-item">
    <img src="/images/tutorials/html-basics/black-swan-pasta.jpg"
         alt="Handmade fettuccine with wild mushrooms"
         class="menu-image">
    <h3>Wild Mushroom Pasta</h3>
    <p>House-made fettuccine with seasonal mushrooms</p>
    <span class="price">$28</span>
  </div>
</section>

<section id="about">
  <h2>Our Restaurant</h2>
  <img src="/images/tutorials/html-basics/black-swan-interior.jpg"
       alt="Elegant dining room interior of Black Swan Bistro"
       class="interior-image">
  <p>Experience fine dining in our elegant atmosphere...</p>
</section>`);

// Exercise Solution
const exerciseSolution = ref(`/* Header Styles */
#bistro-header {
  text-align: center;
  padding: 2em;
  background-color: #f8f9fa;
  border-bottom: 3px solid gold;
}

#bistro-header img {
  margin-bottom: 1em;
}

/* Hero Section */
.hero-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

/* Menu Styles */
.menu-item {
  padding: 1.5em;
  margin: 1em 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1.5em;
}

.menu-image {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.featured {
  background-color: #fff8dc;
  border: 2px solid gold;
}

.price {
  color: #e74c3c;
  font-weight: bold;
  font-size: 1.2em;
}

/* About Section */
.interior-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin: 1em 0;
}`);

// Exercise Preview
const sanitizedExercisePreview = computed(() =>
	DOMPurify.sanitize(`
<div class="preview-example">
	<style>
		.preview-example #bistro-header { text-align: center; padding: 2em; background-color: #f8f9fa; border-bottom: 3px solid gold; }
		.preview-example #bistro-header img { margin-bottom: 1em; }
		.preview-example .hero-image { width: 100%; max-height: 400px; object-fit: cover; }
		.preview-example .menu-item { padding: 1.5em; margin: 1em 0; border: 1px solid #ddd; border-radius: 4px; display: grid; grid-template-columns: 200px 1fr; gap: 1.5em; }
		.preview-example .menu-image { width: 200px; height: 150px; object-fit: cover; border-radius: 4px; }
		.preview-example .featured { background-color: #fff8dc; border: 2px solid gold; }
		.preview-example .price { color: #e74c3c; font-weight: bold; font-size: 1.2em; }
		.preview-example .interior-image { width: 100%; max-height: 300px; object-fit: cover; border-radius: 8px; margin: 1em 0; }
		.preview-example h1 { font-size: 2.8em; color: #2c3e50; margin-bottom: 0.2em; }
		.preview-example h2 { font-size: 2em; color: #34495e; margin: 1.5em 0 1em; }
		.preview-example h3 { font-size: 1.4em; color: #2c3e50; margin: 0.5em 0; }
		.preview-example p { line-height: 1.6; }
	</style>
	
	<header id="bistro-header">
		<img src="/images/tutorials/html-basics/black-swan-logo.svg" 
			 alt="Black Swan Bistro logo" 
			 width="200">
		<h1>Black Swan Bistro</h1>
		<p>Fine Dining & Elegant Atmosphere</p>
	</header>

	<section class="hero">
		<img src="/images/tutorials/html-basics/black-swan-storefront.jpg"
			 alt="Black Swan Bistro exterior at sunset"
			 class="hero-image">
	</section>

	<section class="menu">
		<h2>Our Menu</h2>
		
		<div class="menu-item featured">
			<img src="/images/tutorials/html-basics/black-swan-steak.jpg"
				 alt="Premium ribeye steak with roasted vegetables"
				 class="menu-image">
			<div class="menu-content">
				<h3>Premium Ribeye</h3>
				<p>28-day aged beef with seasonal vegetables</p>
				<span class="price">$42</span>
			</div>
		</div>

		<div class="menu-item">
			<img src="/images/tutorials/html-basics/black-swan-pasta.jpg"
				 alt="Handmade fettuccine with wild mushrooms"
				 class="menu-image">
			<div class="menu-content">
				<h3>Wild Mushroom Pasta</h3>
				<p>House-made fettuccine with seasonal mushrooms</p>
				<span class="price">$28</span>
			</div>
		</div>
	</section>

	<section id="about">
		<h2>Our Restaurant</h2>
		<img src="/images/tutorials/html-basics/black-swan-interior.jpg"
			 alt="Elegant dining room interior of Black Swan Bistro"
			 class="interior-image">
		<p>Experience fine dining in our elegant atmosphere...</p>
	</section>
</div>
`),
);

// Common Properties Examples
const textPropertiesExample = ref(`/* CSS */
.text-demo {
  font-size: 18px;
  color: #2c3e50;
  line-height: 1.6;
  text-align: center;
  font-weight: bold;
  font-family: Arial, sans-serif;
}`);

const boxPropertiesExample = ref(`/* HTML */
<div class="box-demo">Box with properties</div>

/* CSS */
.box-demo {
  width: 200px;
  height: 100px;
  padding: 20px;
  margin: 10px;
  border: 2px solid #333;
  background-color: #f0f0f0;
  border-radius: 8px;
}`);

const backgroundPropertiesExample = ref(`/* CSS */
.bg-demo {
  height: 200px;
  background-color: #3498db;
  background-image: linear-gradient(45deg, #3498db, #2ecc71);
  background-size: cover;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}`);

// Specificity Examples
const idSpecificityExample = ref(`#header {
	/* These styles win over class and element selectors */
	background-color: #333;
}`);

const classSpecificityExample = ref(`.nav-item {
	/* These styles win over element selectors */
	color: blue;
}`);

const elementSpecificityExample = ref(`p {
	/* These styles can be overridden by class and ID selectors */
	margin: 1em;
}`);

// Common Mistakes Examples
const overSpecificExample = ref(`/* ❌ Too specific */
html body div.container nav ul li a {
	color: blue;
}

/* ✅ Better */
.nav-link {
	color: blue;
}`);

const overusingIDsExample = ref(`/* ❌ Hard to reuse */
#nav-link {
	color: blue;
}

/* ✅ More flexible */
.nav-link {
	color: blue;
}`);

const specificityMistakeExample = ref(`/* ❌ Won't override ID styles */
.button {
	background: blue;
}

/* ✅ More specific when needed */
#submit-button {
	background: blue;
}`);

// Rotto Rocks Exercise
const rottoStarterCode = ref(`<!-- HTML Structure -->
<header id="main-header">
  <img src="/images/tutorials/html-basics/rotto-rocks-logo.svg" 
       alt="Rotto Rocks logo" 
       width="150">
  <nav class="main-nav">
    <ul>
      <li><a href="#wildlife">Wildlife</a></li>
      <li><a href="#beaches">Beaches</a></li>
      <li><a href="#activities">Activities</a></li>
    </ul>
  </nav>
</header>

<section id="hero">
  <img src="/images/tutorials/html-basics/basin.jpg"
       alt="Crystal clear waters at The Basin"
       class="hero-image">
  <h1>Discover Rottnest Island</h1>
  <p class="tagline">Your island adventure awaits</p>
</section>

<section id="wildlife" class="gallery-section">
  <h2>Island Wildlife</h2>
  <div class="gallery">
    <figure class="gallery-item featured">
      <img src="/images/tutorials/html-basics/quokka.jpg"
           alt="A smiling quokka"
           class="gallery-image">
      <figcaption>Meet the world's happiest animal!</figcaption>
    </figure>
    <!-- More gallery items... -->
  </div>
</section>

<section id="activities">
  <h2>Island Activities</h2>
  <div class="activity-grid">
    <div class="activity-card">
      <img src="/images/tutorials/html-basics/cycling.jpg"
           alt="Cycling around the island"
           class="activity-image">
      <h3>Island Cycling</h3>
      <p>Explore the island on two wheels</p>
    </div>
    <!-- More activity cards... -->
  </div>
</section>`);

const rottoSolution = ref(`/* Header and Navigation */
#main-header {
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.main-nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
}

.main-nav a {
  color: #1a5f7a;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: #2d9cdb;
}

/* Hero Section */
#hero {
  position: relative;
  text-align: center;
  color: white;
}

.hero-image {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}

#hero h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

/* Gallery Section */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.gallery-item {
  margin: 0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.gallery-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.featured {
  grid-column: span 2;
}

/* Activity Cards */
.activity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.activity-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-5px);
}

.activity-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}`);

// Add the preview computation for Rotto Rocks
const sanitizedRottoPreview = computed(() =>
	DOMPurify.sanitize(`
<div class="preview-example">
  <style>
    /* Add all the CSS styles from rottoSolution here */
  </style>
  <!-- Add the HTML structure from rottoStarterCode here -->
</div>
`),
);

// Fix the navigation props by providing objects instead of strings
const navigationLinks = {
	prev: {
		path: '/tutorials/beginner/css-basics/introduction',
		title: 'Introduction to CSS',
	},
	next: {
		path: '/tutorials/beginner/css-basics/colors',
		title: 'CSS Colors',
	},
};

// Add the missing computed properties
const sanitizedTextPreview = computed(() =>
	DOMPurify.sanitize(`
<div class="preview-example">
  <style>
    .preview-example .text-demo {
      font-size: 18px;
      color: #2c3e50;
      line-height: 1.6;
      text-align: center;
      font-weight: bold;
      font-family: Arial, sans-serif;
      margin: 20px 0;
    }
  </style>
  <div class="text-demo">This is a text example with various properties applied.</div>
</div>
`),
);

const sanitizedBoxPreview = computed(() =>
	DOMPurify.sanitize(`
<div class="preview-example">
  <style>
    .preview-example .box-demo {
      width: 200px;
      height: 100px;
      padding: 20px;
      margin: 10px;
      border: 2px solid #333;
      background-color: #f0f0f0;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
  <div class="box-demo">Box with properties</div>
</div>
`),
);

const sanitizedBackgroundPreview = computed(() =>
	DOMPurify.sanitize(`
<div class="preview-example">
  <style>
    .preview-example .bg-demo {
      height: 200px;
      background-color: #3498db;
      background-image: linear-gradient(45deg, #3498db, #2ecc71);
      background-size: cover;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: sans-serif;
      margin: 20px 0;
    }
  </style>
  <div class="bg-demo">Background Example</div>
</div>
`),
);
</script>

<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/beginner/css-basics"
						>CSS Basics</router-link
					>
				</li>
				<li class="is-active"><a href="#" aria-current="page">Selectors</a></li>
			</ul>
		</nav>

		<h1 class="title is-1">
			<i class="fa-brands fa-css css-icon"></i>
			CSS Selectors
		</h1>

		<p class="lead">
			CSS selectors are patterns used to select and style HTML elements on a
			webpage. Understanding selectors is key to writing effective CSS.
		</p>

		<div class="highlight-box">
			<h3>In this tutorial, you'll learn:</h3>
			<ul class="icon-list">
				<li>
					<i class="fas fa-code"></i> How to select elements by their type
				</li>
				<li>
					<i class="fas fa-code"></i> How to use classes to style multiple
					elements
				</li>
				<li>
					<i class="fas fa-code"></i> How to style unique elements with IDs
				</li>
				<li>
					<i class="fas fa-code"></i> How to combine selectors for more specific
					styling
				</li>
			</ul>
		</div>

		<!-- Element Selectors -->
		<h2 class="title is-2 section-title">Element Selectors</h2>
		<p>
			Element selectors target HTML elements directly by their tag name. They
			apply styles to <strong>all</strong> instances of that element on the
			page.
		</p>

		<div class="box">
			<h3 class="title is-4">Example:</h3>
			<CodeMirror v-model="elementExample" :height="200" :readonly="true" />
			<div
				class="preview-container mt-4"
				v-html="sanitizedElementPreview"
			></div>
		</div>

		<!-- Class Selectors -->
		<h2 class="title is-2 section-title">Class Selectors</h2>
		<p>
			Class selectors target elements with a specific class attribute. They
			start with a dot (.) and can be used on multiple elements.
		</p>

		<div class="box">
			<h3 class="title is-4">Example:</h3>
			<CodeMirror v-model="classExample" :height="200" :readonly="true" />
			<div class="preview-container mt-4" v-html="sanitizedClassPreview"></div>
		</div>

		<div class="box is-info">
			<h4 class="title is-5"><i class="fas fa-lightbulb"></i> Pro Tip</h4>
			<p>You can apply multiple classes to the same element:</p>
			<code>&lt;div class="card featured special"&gt;</code>
		</div>

		<!-- ID Selectors -->
		<h2 class="title is-2 section-title">ID Selectors</h2>
		<p>
			ID selectors target a single, unique element using its id attribute. They
			start with a hash (#) and should only be used once per page.
		</p>

		<div class="box">
			<h3 class="title is-4">Example:</h3>
			<CodeMirror v-model="idExample" :height="200" :readonly="true" />
			<div class="preview-container mt-4" v-html="sanitizedIdPreview"></div>
		</div>

		<div class="box is-warning">
			<h4 class="title is-5">
				<i class="fas fa-exclamation-triangle"></i> Important Note
			</h4>
			<p>
				Unlike classes, IDs must be unique - don't use the same ID more than
				once on a page!
			</p>
		</div>

		<!-- Basic Combinations -->
		<h2 class="title is-2 section-title">Basic Combinations</h2>
		<p>
			You can combine selectors to target elements more precisely. Here are some
			common combinations:
		</p>

		<div class="box">
			<h3 class="title is-4">Example:</h3>
			<CodeMirror
				v-model="combinationsExample"
				:height="200"
				:readonly="true"
			/>
			<div
				class="preview-container mt-4"
				v-html="sanitizedCombinationsPreview"
			></div>
		</div>

		<!-- Common Combinations Table -->
		<div class="box">
			<h3 class="title is-4">Common Selector Combinations</h3>
			<table class="table is-fullwidth">
				<thead>
					<tr>
						<th>Pattern</th>
						<th>Example</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>element.class</code></td>
						<td><code>p.highlight</code></td>
						<td>Selects paragraphs with class "highlight"</td>
					</tr>
					<tr>
						<td><code>element element</code></td>
						<td><code>div p</code></td>
						<td>Selects paragraphs inside divs</td>
					</tr>
					<tr>
						<td><code>element > element</code></td>
						<td><code>nav > a</code></td>
						<td>Selects links that are direct children of nav</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Best Practices -->
		<div class="box is-success mb-6">
			<h3 class="title is-4">
				<i class="fas fa-check-circle"></i> Best Practices
			</h3>
			<ul class="icon-list">
				<li><i class="fas fa-check"></i> Use classes for reusable styles</li>
				<li><i class="fas fa-check"></i> Keep selectors simple and clear</li>
				<li><i class="fas fa-check"></i> Avoid overusing IDs for styling</li>
				<li><i class="fas fa-check"></i> Use meaningful class names</li>
				<li>
					<i class="fas fa-check"></i> Document complex selector combinations
				</li>
			</ul>
		</div>

		<!-- Common Properties -->
		<h2 class="title is-2 section-title">Common Properties</h2>

		<div class="box">
			<h2 class="title is-3">Common Properties</h2>

			<h3 class="title is-4">Text Properties</h3>
			<CodeMirror
				v-model="textPropertiesExample"
				:height="150"
				:readonly="true"
			/>
			<div class="preview-container mt-4" v-html="sanitizedTextPreview"></div>

			<h3 class="title is-4 mt-5">Box Properties</h3>
			<CodeMirror
				v-model="boxPropertiesExample"
				:height="150"
				:readonly="true"
			/>
			<div class="preview-container mt-4" v-html="sanitizedBoxPreview"></div>

			<h3 class="title is-4 mt-5">Background Properties</h3>
			<CodeMirror
				v-model="backgroundPropertiesExample"
				:height="150"
				:readonly="true"
			/>
			<div
				class="preview-container mt-4"
				v-html="sanitizedBackgroundPreview"
			></div>
		</div>

		<!-- Selector Specificity -->
		<h2 class="title is-2 section-title">Selector Specificity</h2>

		<div class="box">
			<p class="mb-4">
				Specificity determines which styles are applied when multiple rules
				target the same element:
			</p>

			<div class="specificity-levels">
				<div class="level-item">
					<h4 class="title is-5">1. ID Selectors</h4>
					<p>Highest specificity</p>
					<CodeMirror
						v-model="idSpecificityExample"
						:height="100"
						:readonly="true"
					/>
				</div>

				<div class="level-item">
					<h4 class="title is-5">2. Class Selectors</h4>
					<p>Medium specificity</p>
					<CodeMirror
						v-model="classSpecificityExample"
						:height="100"
						:readonly="true"
					/>
				</div>

				<div class="level-item">
					<h4 class="title is-5">3. Element Selectors</h4>
					<p>Lowest specificity</p>
					<CodeMirror
						v-model="elementSpecificityExample"
						:height="100"
						:readonly="true"
					/>
				</div>
			</div>
		</div>

		<!-- Common Mistakes -->
		<div class="box is-warning">
			<h3 class="title is-4">
				<i class="fas fa-exclamation-triangle"></i> Common Mistakes
			</h3>

			<div class="mistake-examples">
				<div class="mistake-item">
					<h4 class="title is-5">Over-specific selectors</h4>
					<CodeMirror
						v-model="overSpecificExample"
						:height="150"
						:readonly="true"
					/>
				</div>

				<div class="mistake-item">
					<h4 class="title is-5">Overusing IDs</h4>
					<CodeMirror
						v-model="overusingIDsExample"
						:height="150"
						:readonly="true"
					/>
				</div>

				<div class="mistake-item">
					<h4 class="title is-5">Forgetting specificity</h4>
					<CodeMirror
						v-model="specificityMistakeExample"
						:height="150"
						:readonly="true"
					/>
				</div>
			</div>
		</div>

		<!-- Practice Exercise -->
		<h2 class="title is-2 section-title">
			Practice Exercise: Black Swan Bistro
		</h2>

		<div class="box">
			<p class="mb-4">
				Now that you've created the HTML structure for Black Swan Bistro, let's
				style it using different types of CSS selectors!
			</p>

			<div class="exercise-steps">
				<h3 class="title is-4">Tasks:</h3>
				<ol class="icon-list">
					<li>
						<i class="fas fa-code"></i> Style the main headings using element
						selectors
					</li>
					<li>
						<i class="fas fa-code"></i> Create classes for different menu
						sections
					</li>
					<li>
						<i class="fas fa-code"></i> Style the special announcement with a
						unique ID
					</li>
					<li>
						<i class="fas fa-code"></i> Use combinators to style nested menu
						items
					</li>
				</ol>
			</div>

			<div class="mt-5">
				<h4 class="title is-5">Starting HTML Structure:</h4>
				<CodeMirror
					v-model="exerciseStarterCode"
					:height="400"
					:readonly="true"
				/>
			</div>

			<div class="box is-info mt-4">
				<h4 class="title is-5">
					<i class="fas fa-lightbulb"></i> Styling Goals
				</h4>
				<ul class="icon-list">
					<li>
						<i class="fas fa-check"></i> Create a clear visual hierarchy with
						headings
					</li>
					<li>
						<i class="fas fa-check"></i> Highlight the seasonal and special
						items
					</li>
					<li>
						<i class="fas fa-check"></i> Make the hours of operation easy to
						scan
					</li>
					<li>
						<i class="fas fa-check"></i> Ensure the menu items are
						well-organized and readable
					</li>
				</ul>
			</div>
		</div>

		<!-- Solution Preview -->
		<div class="box is-success mt-4">
			<h3 class="title is-4"><i class="fas fa-star"></i> Solution Example</h3>
			<CodeMirror v-model="exerciseSolution" :height="400" :readonly="true" />
			<div
				class="preview-container mt-4"
				v-html="sanitizedExercisePreview"
			></div>
		</div>

		<!-- Rotto Rocks Exercise -->
		<h2 class="title is-2 section-title mt-6">
			Practice Exercise: Rotto Rocks Website
		</h2>

		<div class="box">
			<p class="mb-4">
				Now it's your turn! Apply what you've learned about CSS selectors to
				style your Rottnest Island website.
			</p>

			<div class="exercise-steps">
				<h3 class="title is-4">Tasks:</h3>
				<ol class="icon-list">
					<li>
						<i class="fas fa-code"></i> Style the header and navigation using
						element selectors
					</li>
					<li>
						<i class="fas fa-code"></i> Create classes for featured attractions
						and activities
					</li>
					<li>
						<i class="fas fa-code"></i> Use ID selectors for unique sections
						like the hero area
					</li>
					<li>
						<i class="fas fa-code"></i> Style the image gallery using
						combinators
					</li>
				</ol>
			</div>

			<div class="mt-5">
				<h4 class="title is-5">Starting Code:</h4>
				<CodeMirror v-model="rottoStarterCode" :height="400" :readonly="true" />
			</div>

			<div class="box is-info mt-4">
				<h4 class="title is-5">
					<i class="fas fa-lightbulb"></i> Styling Goals
				</h4>
				<ul class="icon-list">
					<li>
						<i class="fas fa-check"></i> Create a beach-inspired color scheme
					</li>
					<li>
						<i class="fas fa-check"></i> Make the wildlife gallery visually
						engaging
					</li>
					<li>
						<i class="fas fa-check"></i> Ensure the activities section is easy
						to navigate
					</li>
					<li>
						<i class="fas fa-check"></i> Style the contact form to be
						user-friendly
					</li>
				</ul>
			</div>
		</div>

		<!-- Solution Preview -->
		<div class="box is-success mt-4">
			<h3 class="title is-4"><i class="fas fa-star"></i> Solution Example</h3>
			<CodeMirror v-model="rottoSolution" :height="400" :readonly="true" />
			<div class="preview-container mt-4" v-html="sanitizedRottoPreview"></div>
		</div>

		<!-- Additional Resources -->
		<div class="box">
			<h2 class="title is-3">
				<i class="fas fa-external-link-alt"></i> Additional Resources
			</h2>

			<div class="content">
				<h3 class="title is-4">Interactive Learning Tools</h3>
				<ul class="resource-list">
					<li>
						<a
							href="https://flukeout.github.io/"
							target="_blank"
							rel="noopener"
						>
							<i class="fas fa-gamepad"></i> CSS Diner
						</a>
						- A fun game to practice CSS selectors
					</li>
					<li>
						<a
							href="https://css-tricks.com/almanac/selectors/"
							target="_blank"
							rel="noopener"
						>
							<i class="fas fa-book"></i> CSS-Tricks Selectors Almanac
						</a>
						- Complete guide to all CSS selectors with practical examples
					</li>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"
							target="_blank"
							rel="noopener"
						>
							<i class="fas fa-graduation-cap"></i> MDN CSS Selectors Guide
						</a>
						- In-depth documentation and examples
					</li>
				</ul>

				<h3 class="title is-4 mt-5">Practice Tools</h3>
				<ul class="resource-list">
					<li>
						<a href="https://codepen.io/" target="_blank" rel="noopener">
							<i class="fab fa-codepen"></i> CodePen
						</a>
						- Online editor to experiment with CSS selectors
					</li>
					<li>
						<a
							href="https://specificity.keegan.st/"
							target="_blank"
							rel="noopener"
						>
							<i class="fas fa-calculator"></i> Specificity Calculator
						</a>
						- Tool to understand CSS specificity
					</li>
					<li>
						<a
							href="https://css-tricks.com/almanac/"
							target="_blank"
							rel="noopener"
						>
							<i class="fas fa-book-open"></i> CSS-Tricks Almanac
						</a>
						- Comprehensive reference for all CSS properties and values
					</li>
				</ul>

				<div class="notification is-info is-light mt-4">
					<i class="fas fa-info-circle"></i>
					<strong>Pro Tip:</strong> The CSS-Tricks Almanac is an excellent
					reference when you need to look up specific selectors or properties
					and see real-world examples of how they're used.
				</div>
			</div>
		</div>

		<!-- Add this after the exercises section, before the navigation -->
		<div class="box">
			<h2 class="title is-3"><i class="fas fa-code"></i> Project Solutions</h2>

			<div class="columns">
				<div class="column">
					<div class="card">
						<div class="card-content">
							<h3 class="title is-4">Black Swan Bistro</h3>
							<p>See how CSS selectors are used to style the bistro website.</p>
							<router-link
								to="/tutorials/beginner/projects/black-swan-bistro/stages/css-selectors"
								class="button is-info mt-4"
							>
								<span class="icon">
									<i class="fas fa-eye"></i>
								</span>
								<span>View Project Stage</span>
							</router-link>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<div class="card-content">
							<h3 class="title is-4">Rotto Rocks</h3>
							<p>See how CSS selectors enhance the Rottnest Island site.</p>
							<router-link
								to="/tutorials/beginner/projects/rotto-rocks/stages/css-selectors"
								class="button is-info mt-4"
							>
								<span class="icon">
									<i class="fas fa-eye"></i>
								</span>
								<span>View Project Stage</span>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Navigation -->
		<TutorialNavigation
			:prev="navigationLinks.prev"
			:next="navigationLinks.next"
		/>

		<!-- Add after the exercise section -->
		<div class="box">
			<h3 class="title is-4">
				<i class="fas fa-check-circle"></i> Ready to Check Your Work?
			</h3>

			<p>Once you've completed the exercises, you can:</p>

			<div class="buttons mt-4">
				<router-link
					to="/tutorials/beginner/solutions/black-swan-bistro/css-selectors"
					class="button is-info"
				>
					<span class="icon">
						<i class="fas fa-code"></i>
					</span>
					<span>View Black Swan Bistro Solution</span>
				</router-link>

				<router-link
					to="/tutorials/beginner/solutions/rotto-rocks/css-selectors"
					class="button is-info"
				>
					<span class="icon">
						<i class="fas fa-code"></i>
					</span>
					<span>View Rotto Rocks Solution</span>
				</router-link>
			</div>

			<p class="help mt-2">
				<i class="fas fa-info-circle"></i>
				Remember: There are often multiple valid solutions to CSS challenges.
				The solutions provided are just one way to achieve the desired result.
			</p>
		</div>
	</div>
</template>

<style scoped>
.css-icon {
	color: #264de4;
	margin-right: 0.5rem;
}

.lead {
	font-size: 1.25rem;
	line-height: 1.6;
	margin-bottom: 2rem;
}

.highlight-box {
	background-color: #f5f5f5;
	border-left: 4px solid #3298dc;
	padding: 1.5rem;
	margin-bottom: 2rem;
	border-radius: 4px;
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

.preview-container {
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 20px;
	margin-top: 1rem;
	background-color: white;
}

.exercise-steps {
	background-color: #f5f5f5;
	padding: 1.5rem;
	border-radius: 4px;
	margin-bottom: 1.5rem;
}

.exercise-steps ol {
	margin-left: 1.5rem;
}

.exercise-steps li {
	margin-bottom: 0.75rem;
}

.specificity-levels {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 2rem;
}

.level-item {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: flex-start;
	background: #f8f9fa;
	padding: 1.5rem;
	border-radius: 8px;
	border: 1px solid #dee2e6;
}

.level-item h4 {
	margin-bottom: 0.5rem;
}

.level-item p {
	color: #6c757d;
	margin-bottom: 1rem;
}

.mistake-examples {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.5rem;
	margin-top: 1.5rem;
}

.mistake-item {
	background: #fff;
	padding: 1rem;
	border-radius: 4px;
	border: 1px solid #ffeeba;
}

.resource-list {
	list-style: none;
	padding-left: 0;
}

.resource-list li {
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.resource-list a {
	color: #3273dc;
	font-weight: 500;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
}

.resource-list a:hover {
	text-decoration: underline;
}

.resource-list i {
	width: 1.5em;
	text-align: center;
}

.notification i {
	margin-right: 0.5rem;
}
</style>
