<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import { usePageSections } from '@/composables/usePageSections';
import { useRoute } from 'vue-router';
import progressService from '@/services/ProgressService';
import CodeMirror from '@/components/CodeMirror.vue';
import DOMPurify from 'dompurify';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

// Define a ref for the code editor instances
const codeEditors = ref([]);
const progressEnabled = ref(true);

const frontmatter = {
	title: 'CSS Flexbox',
	description: 'Learn how to create flexible layouts with CSS Flexbox',
	difficulty: 'Beginner',
	duration: '30 minutes',
	tags: ['CSS', 'Layout', 'Flexbox'],
};

const sections = [
	{
		id: 'flexbox-basics',
		title: 'Flexbox Basics',
		subsections: [
			{ id: 'flex-container', title: 'Flex Container' },
			{ id: 'flex-items', title: 'Flex Items' },
		],
	},
	{
		id: 'flex-properties',
		title: 'Flex Properties',
		subsections: [
			{ id: 'flex-direction', title: 'Flex Direction' },
			{ id: 'justify-content', title: 'Justify Content' },
			{ id: 'align-items', title: 'Align Items' },
		],
	},
	{
		id: 'practical-examples',
		title: 'Practical Examples',
		subsections: [
			{ id: 'navigation', title: 'Navigation Bar' },
			{ id: 'card-layout', title: 'Card Layout' },
		],
	},
	{
		id: 'flexbox-in-practice',
		title: 'Flexbox in Practice',
		subsections: [
			{ id: 'bistro-menu', title: 'Bistro Menu' },
			{ id: 'gallery-grid', title: 'Gallery Grid' },
		],
	},
];

const { pageSections } = usePageSections(sections);

const checkpointQuestions = [
	{
		question: 'What happens when you set display: flex on a container?',
		answer:
			'Setting display: flex establishes a flex formatting context. The element becomes a flex container, its direct children become flex items, and layout shifts to using the main and cross axes for alignment and distribution.',
	},
	{
		question: 'How do the main axis and cross axis differ in Flexbox?',
		answer:
			'The main axis follows flex-direction (row by default). justify-content aligns items along the main axis. The cross axis is perpendicular to the main axis; align-items and align-content control alignment along it. Changing flex-direction swaps the axes.',
	},
	{
		question: 'When would you use justify-content vs align-items?',
		answer:
			'justify-content distributes extra space along the main axis (left/right in rows, top/bottom in columns). align-items controls alignment on the cross axis (vertical in rows, horizontal in columns). Use justify-content for spacing between items, align-items for baseline, center, or stretch alignment.',
	},
	{
		question: 'What do flex-grow, flex-shrink, and flex-basis control?',
		answer:
			'flex-grow defines how extra space is distributed among items, flex-shrink controls how items shrink when space is limited, and flex-basis sets the initial size before growing or shrinking. Combined as flex: grow shrink basis, they create responsive components.',
	},
];

const closureKeyTakeaways = [
	'Flex containers are created with display: flex/inline-flex and control layout of direct children',
	'flex-direction sets the main axis; justify-content and align-items manage spacing across axes',
	'flex-wrap enables multi-line layouts; gap adds spacing without margins',
	'flex-grow, flex-shrink, and flex-basis define how items scale in responsive layouts',
	'Align-self overrides alignment per item; order rearranges items without changing HTML',
];

const closureObjectives = [
	'Create flexible navigation bars, cards, and page sections with Flexbox',
	'Control alignment, spacing, and wrapping along main/cross axes',
	'Use flex shorthand to build responsive components quickly',
	'Apply Flexbox to real projects like Black Swan Bistro and Rotto Rocks',
	'Debug Flexbox layouts using browser DevTools',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-arrows-alt',
		title: 'Axis Awareness',
		questions: [
			'What happens to alignment when you switch flex-direction to column?',
			'How can you use gap and justify-content together to manage spacing?',
		],
		content:
			'Draw the main and cross axes before writing CSS. Knowing which properties affect each axis prevents confusion and speeds up layout building.',
	},
	{
		icon: 'fas fa-mobile-alt',
		title: 'Responsive Mindset',
		questions: [
			'How do flex properties help components adapt across breakpoints?',
			'When do you need media queries in addition to Flexbox?',
		],
		content:
			'Flexbox handles many responsive cases automatically, but combining it with media queries lets you change direction, wrap behavior, and spacing for different screen sizes.',
	},
];

const flexContainerHTML = `<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>`;

const flexContainerCSS = `/* Basic Flex Container */
.flex-container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}

.flex-item {
  background-color: #3273dc;
  color: white;
  padding: 20px;
  margin: 10px;
  text-align: center;
}`;

const flexDirectionHTML = flexContainerHTML;

const flexDirectionCSS = `/* Flex Direction Examples */
.flex-container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
  /* Try changing to: row, row-reverse, column, column-reverse */
  flex-direction: row;
}

.flex-item {
  background-color: #3273dc;
  color: white;
  padding: 20px;
  margin: 10px;
  text-align: center;
}`;

const justifyContentHTML = flexContainerHTML;

const justifyContentCSS = `/* Justify Content Examples */
.flex-container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
  height: 200px;
  /* Try changing to: flex-start, flex-end, center, space-between, space-around, space-evenly */
  justify-content: flex-start;
}

.flex-item {
  background-color: #3273dc;
  color: white;
  padding: 20px;
  margin: 10px;
  text-align: center;
}`;

const alignItemsHTML = flexContainerHTML;

const alignItemsCSS = `/* Align Items Examples */
.flex-container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
  height: 200px;
  /* Try changing to: flex-start, flex-end, center, stretch, baseline */
  align-items: stretch;
}

.flex-item {
  background-color: #3273dc;
  color: white;
  padding: 20px;
  margin: 10px;
  text-align: center;
}`;

const navBarHTML = `<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`;

const navBarCSS = `/* Navigation Bar with Flexbox */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}`;

const cardLayoutHTML = `<div class="card-container">
  <div class="card">
    <img src="https://via.placeholder.com/150" alt="Card image">
    <div class="card-content">
      <h3>Card Title 1</h3>
      <p>This is some sample text for the first card.</p>
      <button>Learn More</button>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/150" alt="Card image">
    <div class="card-content">
      <h3>Card Title 2</h3>
      <p>This is some sample text for the second card.</p>
      <button>Learn More</button>
    </div>
  </div>
  <div class="card">
    <img src="https://via.placeholder.com/150" alt="Card image">
    <div class="card-content">
      <h3>Card Title 3</h3>
      <p>This is some sample text for the third card.</p>
      <button>Learn More</button>
    </div>
  </div>
</div>`;

const cardLayoutCSS = `/* Card Layout with Flexbox */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-content h3 {
  margin-top: 0;
}

.card-content button {
  margin-top: auto;
  padding: 8px 16px;
  background-color: #3273dc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.card-content button:hover {
  background-color: #2366d1;
}`;
</script>

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
						<router-link to="/tutorials/beginner/css-basics/">CSS Basics</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Flexbox Basics</a>
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

			<AnticipatorySet
				title="🔄 Layout Made Flexible"
				:reflection-prompts="[
					'Have you ever struggled to center something or create equal-height columns with CSS?',
					'Think about app navigation bars. How do they keep the logo on the left and menu items on the right?',
					'What happens to website layouts when you resize your browser window or rotate your phone?',
				]"
			>
				<p>
					For years, web developers struggled with CSS layouts. Creating a simple
					horizontal navigation bar or centering content vertically required complicated
					hacks and workarounds. Then Flexbox arrived and changed everything.
				</p>
				<p>
					Flexbox (Flexible Box Layout) gives you powerful control over how elements are
					distributed and aligned in one dimension—either horizontally or vertically. Once
					you understand its mental model, tasks that were once frustrating become
					trivial. In this tutorial, you'll master Flexbox and discover why it's become
					one of the most essential tools in modern CSS.
				</p>
			</AnticipatorySet>

			<LearningObjectives
				:objectives="[
					'Understand the Flexbox mental model of containers and items',
					'Control flex direction to create row and column layouts',
					'Master justify-content for main axis alignment and spacing',
					'Use align-items and align-self for cross-axis positioning',
					'Implement flex-wrap for responsive multi-line layouts',
					'Apply flex-grow, flex-shrink, and flex-basis for flexible sizing',
					'Build real-world components like navigation bars and card grids',
				]"
			/>
			<section :id="sections[0].id" class="mb-6">
				<h2 class="title is-2">{{ sections[0].title }}</h2>
				<p>
					Flexbox (Flexible Box Layout) is a one-dimensional layout method
					designed for laying out items in rows or columns. It makes it easier
					to design flexible responsive layout structures without using float or
					positioning.
				</p>

				<div :id="sections[0].subsections[0].id" class="mb-5">
					<h3 class="title is-3">{{ sections[0].subsections[0].title }}</h3>
					<p>
						To create a flex container, you set the
						<code>display</code> property to <code>flex</code> or
						<code>inline-flex</code>. This establishes a new flex formatting
						context for the container's direct children, which become flex
						items.
					</p>

					<div class="columns">
						<div class="column">
							<h4 class="title is-5">HTML</h4>
							<pre
								class="language-html"
							><code>{{ flexContainerHTML }}</code></pre>
						</div>
						<div class="column">
							<h4 class="title is-5">CSS</h4>
							<pre
								class="language-css"
							><code>{{ flexContainerCSS }}</code></pre>
						</div>
					</div>

					<div class="example-output mt-4 mb-4">
						<h4 class="title is-5">Result</h4>
						<div class="flex-container-example">
							<div class="flex-item-example">1</div>
							<div class="flex-item-example">2</div>
							<div class="flex-item-example">3</div>
						</div>
					</div>
				</div>

				<div :id="sections[0].subsections[1].id" class="mb-5">
					<h3 class="title is-3">{{ sections[0].subsections[1].title }}</h3>
					<p>
						Flex items are the direct children of a flex container. They
						automatically arrange themselves according to the flex properties
						set on the container and can have their own flex properties.
					</p>
					<p>Key properties for flex items include:</p>
					<ul>
						<li>
							<code>flex-grow</code>: Determines how much an item can grow
							relative to other items
						</li>
						<li>
							<code>flex-shrink</code>: Determines how much an item can shrink
							relative to other items
						</li>
						<li>
							<code>flex-basis</code>: Sets the initial main size of an item
						</li>
						<li>
							<code>flex</code>: Shorthand for flex-grow, flex-shrink, and
							flex-basis
						</li>
						<li>
							<code>align-self</code>: Overrides the container's align-items
							property for specific items
						</li>
						<li>
							<code>order</code>: Controls the order in which items appear
						</li>
					</ul>
				</div>
			</section>

			<section :id="sections[1].id" class="mb-6">
				<h2 class="title is-2">{{ sections[1].title }}</h2>
				<p>
					Flexbox provides several properties to control the layout of flex
					containers and items. Let's explore the most important ones.
				</p>

				<div :id="sections[1].subsections[0].id" class="mb-5">
					<h3 class="title is-3">{{ sections[1].subsections[0].title }}</h3>
					<p>
						The <code>flex-direction</code> property establishes the main axis,
						defining the direction in which flex items are placed in the flex
						container.
					</p>

					<div class="columns">
						<div class="column">
							<h4 class="title is-5">HTML</h4>
							<pre
								class="language-html"
							><code>{{ flexDirectionHTML }}</code></pre>
						</div>
						<div class="column">
							<h4 class="title is-5">CSS</h4>
							<pre
								class="language-css"
							><code>{{ flexDirectionCSS }}</code></pre>
						</div>
					</div>

					<div class="example-output mt-4 mb-4">
						<h4 class="title is-5">Result</h4>
						<p>Try these values for <code>flex-direction</code>:</p>
						<div class="buttons">
							<button class="button is-small is-info">row</button>
							<button class="button is-small is-info">row-reverse</button>
							<button class="button is-small is-info">column</button>
							<button class="button is-small is-info">column-reverse</button>
						</div>
						<div class="flex-direction-example">
							<div class="flex-item-example">1</div>
							<div class="flex-item-example">2</div>
							<div class="flex-item-example">3</div>
						</div>
					</div>
				</div>

				<div :id="sections[1].subsections[1].id" class="mb-5">
					<h3 class="title is-3">{{ sections[1].subsections[1].title }}</h3>
					<p>
						The <code>justify-content</code> property aligns flex items along
						the main axis of the flex container. It helps distribute extra free
						space when items don't use all available space.
					</p>

					<div class="columns">
						<div class="column">
							<h4 class="title is-5">HTML</h4>
							<pre
								class="language-html"
							><code>{{ justifyContentHTML }}</code></pre>
						</div>
						<div class="column">
							<h4 class="title is-5">CSS</h4>
							<pre
								class="language-css"
							><code>{{ justifyContentCSS }}</code></pre>
						</div>
					</div>

					<div class="example-output mt-4 mb-4">
						<h4 class="title is-5">Result</h4>
						<p>Try these values for <code>justify-content</code>:</p>
						<div class="buttons">
							<button class="button is-small is-info">flex-start</button>
							<button class="button is-small is-info">flex-end</button>
							<button class="button is-small is-info">center</button>
							<button class="button is-small is-info">space-between</button>
							<button class="button is-small is-info">space-around</button>
							<button class="button is-small is-info">space-evenly</button>
						</div>
						<div class="justify-content-example">
							<div class="flex-item-example">1</div>
							<div class="flex-item-example">2</div>
							<div class="flex-item-example">3</div>
						</div>
					</div>
				</div>

				<div :id="sections[1].subsections[2].id" class="mb-5">
					<h3 class="title is-3">{{ sections[1].subsections[2].title }}</h3>
					<p>
						The <code>align-items</code> property defines how flex items are
						laid out along the cross axis of the flex container. Think of it as
						the vertical alignment when your flex-direction is row.
					</p>

					<div class="columns">
						<div class="column">
							<h4 class="title is-5">HTML</h4>
							<pre class="language-html"><code>{{ alignItemsHTML }}</code></pre>
						</div>
						<div class="column">
							<h4 class="title is-5">CSS</h4>
							<pre class="language-css"><code>{{ alignItemsCSS }}</code></pre>
						</div>
					</div>

					<div class="example-output mt-4 mb-4">
						<h4 class="title is-5">Result</h4>
						<p>Try these values for <code>align-items</code>:</p>
						<div class="buttons">
							<button class="button is-small is-info">flex-start</button>
							<button class="button is-small is-info">flex-end</button>
							<button class="button is-small is-info">center</button>
							<button class="button is-small is-info">stretch</button>
							<button class="button is-small is-info">baseline</button>
						</div>
						<div class="align-items-example">
							<div class="flex-item-example">1</div>
							<div class="flex-item-example">2</div>
							<div class="flex-item-example">3</div>
						</div>
					</div>
				</div>
			</section>

			<section :id="sections[2].id" class="mb-6">
				<h2 class="title is-2">{{ sections[2].title }}</h2>
				<p>
					Let's look at some practical examples of how Flexbox can be used to
					create common UI patterns.
				</p>

				<div :id="sections[2].subsections[0].id" class="mb-5">
					<h3 class="title is-3">{{ sections[2].subsections[0].title }}</h3>
					<p>
						Navigation bars are one of the most common use cases for Flexbox.
						With just a few lines of CSS, you can create a responsive navigation
						bar.
					</p>

					<div class="columns">
						<div class="column">
							<h4 class="title is-5">HTML</h4>
							<pre class="language-html"><code>{{ navBarHTML }}</code></pre>
						</div>
						<div class="column">
							<h4 class="title is-5">CSS</h4>
							<pre class="language-css"><code>{{ navBarCSS }}</code></pre>
						</div>
					</div>

					<div class="example-output mt-4 mb-4">
						<h4 class="title is-5">Result</h4>
						<div class="navbar-example">
							<div class="logo-example">Logo</div>
							<ul class="nav-links-example">
								<li><a href="#">Home</a></li>
								<li><a href="#">About</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div :id="sections[2].subsections[1].id" class="mb-5">
					<h3 class="title is-3">{{ sections[2].subsections[1].title }}</h3>
					<p>
						Card layouts are another common pattern that benefits from Flexbox.
						You can easily create responsive card grids that adjust to different
						screen sizes.
					</p>

					<div class="columns">
						<div class="column">
							<h4 class="title is-5">HTML</h4>
							<pre class="language-html"><code>{{ cardLayoutHTML }}</code></pre>
						</div>
						<div class="column">
							<h4 class="title is-5">CSS</h4>
							<pre class="language-css"><code>{{ cardLayoutCSS }}</code></pre>
						</div>
					</div>

					<div class="example-output mt-4 mb-4">
						<h4 class="title is-5">Result</h4>
						<div class="card-container-example">
							<div class="card-example">
								<div class="card-image-example"></div>
								<div class="card-content-example">
									<h3>Card Title 1</h3>
									<p>This is some sample text for the first card.</p>
									<button>Learn More</button>
								</div>
							</div>
							<div class="card-example">
								<div class="card-image-example"></div>
								<div class="card-content-example">
									<h3>Card Title 2</h3>
									<p>This is some sample text for the second card.</p>
									<button>Learn More</button>
								</div>
							</div>
							<div class="card-example">
								<div class="card-image-example"></div>
								<div class="card-content-example">
									<h3>Card Title 3</h3>
									<p>This is some sample text for the third card.</p>
									<button>Learn More</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="summary" class="mb-6">
				<h2 class="title is-2">Summary</h2>
				<p>
					Flexbox is a powerful layout tool that makes it easy to create
					flexible, responsive designs. Key takeaways:
				</p>
				<ul>
					<li>Use <code>display: flex</code> to create a flex container</li>
					<li>Control the direction with <code>flex-direction</code></li>
					<li>
						Align items along the main axis with
						<code>justify-content</code>
					</li>
					<li>
						Align items along the cross axis with <code>align-items</code>
					</li>
					<li>
						Control individual items with properties like <code>flex</code>,
						<code>align-self</code>, and <code>order</code>
					</li>
				</ul>
				<p>
					With these properties, you can create complex layouts that adapt to
					different screen sizes without relying on floats or positioning.
				</p>
			</section>

			<section id="further-resources" class="mb-6">
				<h2 class="title is-2">Further Resources</h2>
				<ul>
					<li>
						<a
							href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
							target="_blank"
							>CSS-Tricks: A Complete Guide to Flexbox</a
						>
					</li>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
							target="_blank"
							>MDN: Basic Concepts of Flexbox</a
						>
					</li>
					<li>
						<a href="https://flexboxfroggy.com/" target="_blank"
							>Flexbox Froggy</a
						>
						- A game for learning Flexbox
					</li>
				</ul>
			</section>

			<!-- Hunter Element: Checkpoint -->
			<CheckpointBox :questions="checkpointQuestions" />

			<section id="flexbox-in-practice" class="mb-6">
				<h2 class="title is-2">
					Practical Application: Site-Wide Flexbox Implementation
				</h2>
				<p>
					Now that you understand the fundamentals of Flexbox, it's time to
					apply these concepts to create cohesive, responsive layouts for the
					two websites we've been building throughout this course: The Black
					Swan Bistro restaurant site and the Rotto Rocks tourist information
					site.
				</p>

				<div class="mb-5">
					<h3 id="bistro-style-guide" class="title is-3">The Black Swan Bistro Style Guide</h3>
					<p>
						For The Black Swan Bistro restaurant site, we'll use Flexbox to
						create an elegant, appetizing layout that showcases the restaurant's
						offerings and ambiance.
					</p>

					<div class="box">
						<h4 class="title is-4">Layout Structure</h4>
						<pre class="language-css"><code>/* Main Layout Structure */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
  font-family: 'Playfair Display', serif;
  color: #333;
}

header, footer {
  flex-shrink: 0; /* Prevent header/footer from shrinking */
  background-color: #1a1a1a;
  color: #f8f8f8;
}

main {
  flex: 1; /* Take up remaining space */
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

/* Responsive container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}</code></pre>

						<h4 class="title is-4 mt-4">Navigation</h4>
						<pre class="language-css"><code>/* Navigation Bar */
.bistro-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a1a;
}

.bistro-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #f8f8f8;
}

.bistro-nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.bistro-nav-links a {
  color: #f8f8f8;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.bistro-nav-links a:hover {
  color: #d4af37; /* Gold accent color */
}

/* Responsive navigation for mobile */
@media (max-width: 768px) {
  .bistro-nav {
    flex-direction: column;
    padding: 1rem;
  }
  
  .bistro-nav-links {
    margin-top: 1rem;
    width: 100%;
    justify-content: space-around;
  }
}</code></pre>

						<h4 class="title is-4 mt-4">Menu Section</h4>
						<pre class="language-css"><code>/* Menu Section */
.menu-section {
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
}

.menu-categories {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.menu-category {
  padding: 0.5rem 1.5rem;
  border: 1px solid #d4af37;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-category.active, .menu-category:hover {
  background-color: #d4af37;
  color: #fff;
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.menu-item {
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 2rem);
  min-width: 300px;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
}

.menu-item-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px dotted #d4af37;
  padding-bottom: 0.5rem;
}

.menu-item-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.menu-item-price {
  color: #d4af37;
  font-weight: bold;
}

.menu-item-description {
  font-style: italic;
  color: #666;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .menu-item {
    flex-basis: 100%;
  }
  
  .menu-categories {
    flex-wrap: wrap;
  }
}</code></pre>
					</div>
				</div>

				<div class="mb-5">
					<h3 id="rotto-rocks-style-guide" class="title is-3">Rotto Rocks Tourist Site Style Guide</h3>
					<p>
						For the Rotto Rocks tourist information site, we'll use Flexbox to
						create a vibrant, informative layout that showcases the beauty and
						attractions of the location.
					</p>

					<div class="box">
						<h4 id="layout-structure" class="title is-4">Layout Structure</h4>
						<pre class="language-css"><code>/* Main Layout Structure */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

.site-header {
  background-color: #0077b6; /* Ocean blue */
  color: white;
}

.site-content {
  flex: 1;
  display: flex;
  padding: 2rem;
}

.main-content {
  flex: 3; /* Takes up 3/4 of the space */
  padding-right: 2rem;
}

.sidebar {
  flex: 1; /* Takes up 1/4 of the space */
  background-color: #f0f0f0;
  padding: 1.5rem;
  border-radius: 8px;
}

/* Responsive layout */
@media (max-width: 768px) {
  .site-content {
    flex-direction: column;
    padding: 1rem;
  }
  
  .main-content {
    padding-right: 0;
    margin-bottom: 2rem;
  }
}</code></pre>

						<h4 id="attraction-cards" class="title is-4 mt-4">Attraction Cards</h4>
						<pre class="language-css"><code>/* Attraction Cards */
.attractions-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.attraction-card {
  display: flex;
  flex-direction: column;
  flex-basis: calc(33.333% - 2rem);
  min-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: white;
  transition: transform 0.3s ease;
}

.attraction-card:hover {
  transform: translateY(-5px);
}

.attraction-image {
  height: 200px;
  overflow: hidden;
}

.attraction-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.attraction-card:hover .attraction-image img {
  transform: scale(1.1);
}

.attraction-details {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.attraction-category {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: #0077b6;
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
}

.attraction-details h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #0077b6;
}

.attraction-details p {
  margin-bottom: 1.5rem;
  flex-grow: 1;
  color: #666;
}

.attraction-details .btn {
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background-color: #0077b6;
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.attraction-details .btn:hover {
  background-color: #005b8a;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .attraction-card {
    flex-basis: calc(50% - 2rem);
  }
}

@media (max-width: 576px) {
  .attraction-card {
    flex-basis: 100%;
  }
}</code></pre>

						<h4 class="title is-4 mt-4">Featured Destinations Section</h4>
						<pre class="language-css"><code>/* Featured Destinations */
.featured-destinations {
  display: flex;
  margin-bottom: 3rem;
  gap: 2rem;
}

.featured-main {
  flex: 2;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  min-height: 400px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.featured-secondary {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.featured-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  min-height: 190px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.featured-destination-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-main:hover .featured-destination-img,
.featured-item:hover .featured-destination-img {
  transform: scale(1.1);
}

.featured-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
  color: white;
  z-index: 1;
}

.featured-content h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.featured-content p {
  margin-bottom: 0;
  opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .featured-destinations {
    flex-direction: column;
  }
  
  .featured-main, .featured-item {
    min-height: 250px;
  }
}</code></pre>
					</div>
				</div>

				<div class="notification is-info is-light mb-5">
					<h3 class="title is-4">Challenge: Apply Flexbox to Your Sites</h3>
					<p>
						Now it's your turn to put these concepts into practice! Take the
						style guides above and apply them to The Black Swan Bistro and Rotto
						Rocks tourist information sites you've been building throughout this
						course.
					</p>
					<p class="mt-3">
						<strong>Your task:</strong>
					</p>
					<ol>
						<li>Implement the layout structure for both sites using Flexbox</li>
						<li>
							Create responsive navigation bars that adapt to different screen
							sizes
						</li>
						<li>
							For The Black Swan Bistro:
							<ul>
								<li>Build the menu section with categories and menu items</li>
								<li>
									Create a responsive layout for showcasing special dishes or
									events
								</li>
							</ul>
						</li>
						<li>
							For Rotto Rocks:
							<ul>
								<li>
									Design the attraction cards to showcase tourist destinations
								</li>
								<li>
									Implement the featured destinations section for highlighting
									key attractions
								</li>
							</ul>
						</li>
						<li>
							Test your layouts on different screen sizes and make adjustments
							as needed
						</li>
					</ol>
					<p class="mt-3">
						Remember to use the browser's developer tools to inspect and debug
						your layouts. The Flexbox properties we've covered in this tutorial
						will give you all the tools you need to create professional,
						responsive designs for both websites.
					</p>
					<p class="mt-3">
						<strong>Bonus challenge:</strong> Add animations to your layouts
						using CSS transitions when elements are hovered or focused, such as
						menu items highlighting on The Black Swan Bistro site or attraction
						images zooming slightly on the Rotto Rocks site.
					</p>
				</div>

				<div class="has-text-centered">
					<a href="#" class="button is-primary is-large">
						Submit Your Completed Sites
					</a>
				</div>
			</section>

		<!-- Hunter Element: Closure -->
		<ClosureSection
			:key-takeaways="closureKeyTakeaways"
			:objectives="closureObjectives"
			:reflection-prompts="closureReflectionPrompts"
			real-world-application="<p>Product teams use Flexbox for navigation bars, dashboards, pricing cards, and countless UI components. Frameworks like Bootstrap and Tailwind rely on Flexbox under the hood. Mastering Flexbox makes custom component work faster and helps you debug framework utilities with confidence.</p><p>Design systems often start with Flexbox primitives (stacks, clusters, sidebar layouts). Your ability to implement these patterns accurately ensures consistency across apps.</p>"
			next-steps="<p>Next up is the modern CSS module, where you will learn advanced techniques (Grid, clamp(), container queries) building on Flexbox fundamentals. Continue practicing by recreating real-world layouts—Flexbox is foundational to all responsive design work.</p>"
		/>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/css-basics/flexbox'" />

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div v-if="progressEnabled" class="completion-section mt-6">
			<h2 class="title is-2">Congratulations!</h2>
			<p>You've completed the tutorial. Great job!</p>
			<div class="has-text-centered">
				<a href="#" class="button is-primary is-large"> Return to Dashboard </a>
			</div>
		</div>
	</div>
	</div>
</template>

<style scoped>
.tutorial-header {
	margin-bottom: 3rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid var(--color-border);
}

/* Example styles */
.flex-container-example,
.flex-direction-example,
.justify-content-example,
.align-items-example {
	display: flex;
	background-color: #f0f0f0;
	padding: 10px;
	margin-bottom: 20px;
}

.justify-content-example,
.align-items-example {
	height: 200px;
}

.flex-item-example {
	background-color: #3273dc;
	color: white;
	padding: 20px;
	margin: 10px;
	text-align: center;
}

/* Navigation example */
.navbar-example {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #333;
	color: white;
	padding: 1rem;
	border-radius: 4px;
}

.logo-example {
	font-size: 1.5rem;
	font-weight: bold;
}

.nav-links-example {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
}

.nav-links-example li {
	margin-left: 1rem;
}

.nav-links-example a {
	color: white;
	text-decoration: none;
}

.nav-links-example a:hover {
	text-decoration: underline;
}

/* Card example */
.card-container-example {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
}

.card-example {
	display: flex;
	flex-direction: column;
	width: 250px;
	border: 1px solid #ddd;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-image-example {
	width: 100%;
	height: 150px;
	background-color: #ddd;
}

.card-content-example {
	padding: 15px;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}

.card-content-example h3 {
	margin-top: 0;
	margin-bottom: 10px;
}

.card-content-example p {
	margin-bottom: 15px;
}

.card-content-example button {
	margin-top: auto;
	padding: 8px 16px;
	background-color: #3273dc;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

.card-content-example button:hover {
	background-color: #2366d1;
}

.example-output {
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 15px;
	background-color: #fff;
}

/* Add some styling for the code blocks */
pre {
	background-color: #f5f5f5;
	border-radius: 4px;
	padding: 1rem;
	overflow-x: auto;
	margin-bottom: 1rem;
}

code {
	font-family: 'Courier New', Courier, monospace;
	white-space: pre-wrap;
}
</style>
