<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/">
						<i class="fa-solid fa-house mr-2"></i> Home
					</router-link>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">CSS Selector Challenge</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">60 minutes</span>
			<span class="tag is-success">CSS</span>
			<span class="tag is-primary">Selectors</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-bullseye"></i> CSS Selector Challenge
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li>Practice using different types of CSS selectors</li>
				<li>Understand selector specificity and how it affects styling</li>
				<li>Learn to target elements efficiently without modifying HTML</li>
				<li>
					Apply styling to complex HTML structures using advanced selectors
				</li>
				<li>Develop problem-solving skills for CSS selection challenges</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should
				complete the
				<router-link to="/tutorials/beginner/css-basics/selectors"
					>CSS Selectors</router-link
				>
				tutorial.
			</p>
		</div>

		<section class="project-section">
			<h2 class="title is-2">Project Description</h2>
			<p>
				In this project, you'll practice using different CSS selectors to style
				elements without modifying the HTML structure. You'll be given a
				pre-built HTML document with various elements, and your task is to apply
				specific styles using only CSS selectors. This will help you master the
				art of targeting elements precisely and efficiently.
			</p>

			<div class="box mt-5">
				<h3 class="title is-4">Your Selector Challenge Should Include:</h3>
				<ul>
					<li>Using basic selectors (element, class, ID)</li>
					<li>Implementing attribute selectors</li>
					<li>Working with pseudo-classes and pseudo-elements</li>
					<li>
						Applying combinators (descendant, child, adjacent sibling, general
						sibling)
					</li>
					<li>Understanding and applying selector specificity</li>
					<li>Solving styling challenges without modifying the HTML</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Getting Started</h2>

			<h3 class="title is-4">Step 1: Set Up Your Project Files</h3>
			<p>Create the following files for your project:</p>
			<ul>
				<li><code>index.html</code> - The HTML structure (provided below)</li>
				<li><code>styles.css</code> - Where you'll write your CSS selectors</li>
			</ul>

			<h3 class="title is-4 mt-5">Step 2: Set Up Your HTML Structure</h3>
			<p>Copy this HTML structure to your <code>index.html</code> file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="htmlStructure"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<div class="notification is-warning is-light mt-4">
				<p>
					<i class="fas fa-exclamation-triangle mr-2"></i>
					<strong>Important:</strong> For this challenge, you should NOT modify
					the HTML structure. The goal is to practice using CSS selectors to
					target elements as they are.
				</p>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Challenge Tasks</h2>
			<p>
				Complete the following tasks using only CSS selectors in your
				<code>styles.css</code> file:
			</p>

			<div class="box">
				<h3 class="title is-4">Basic Selectors</h3>
				<ol>
					<li>
						Make all paragraphs in the document have a font size of 16px and
						line height of 1.6
					</li>
					<li>
						Change the text color of all elements with the class "highlight" to
						#ff6b6b
					</li>
					<li>
						Make the element with ID "main-title" have a font size of 32px and
						center-aligned text
					</li>
					<li>
						Style all h2 elements to have a bottom border of 2px solid #4a6cf7
					</li>
				</ol>
			</div>

			<div class="box mt-4">
				<h3 class="title is-4">Attribute Selectors</h3>
				<ol>
					<li>
						Style all links that open in a new tab (with target="_blank") to
						have a different color (#2575fc)
					</li>
					<li>
						Add a small icon (📎) after links that point to PDF files (href
						ending with .pdf)
					</li>
					<li>
						Style all buttons with a "data-type" attribute to have a background
						color based on their type value
					</li>
					<li>
						Select all images with an "alt" attribute containing the word
						"profile" and give them a circular shape
					</li>
				</ol>
			</div>

			<div class="box mt-4">
				<h3 class="title is-4">Pseudo-classes and Pseudo-elements</h3>
				<ol>
					<li>
						Style the first paragraph in each section to have a larger font size
						(18px)
					</li>
					<li>
						Add a hover effect to all buttons that changes their background
						color
					</li>
					<li>
						Style every odd list item in the unordered lists to have a light
						gray background
					</li>
					<li>
						Add a special style to the first letter of each heading in the
						"article" section
					</li>
					<li>
						Style the placeholder text in the form inputs to be italic and light
						gray
					</li>
				</ol>
			</div>

			<div class="box mt-4">
				<h3 class="title is-4">Combinators</h3>
				<ol>
					<li>
						Style paragraphs that are direct children of the "content" section
						differently from other paragraphs
					</li>
					<li>
						Add a margin to list items that immediately follow another list item
					</li>
					<li>Style all paragraphs that are siblings of h2 elements</li>
					<li>
						Target all labels that are descendants of the form element and make
						them bold
					</li>
				</ol>
			</div>

			<div class="box mt-4">
				<h3 class="title is-4">Specificity Challenges</h3>
				<ol>
					<li>
						Create a situation where you need to use an ID selector to override
						a class selector
					</li>
					<li>
						Style an element using a combination of selectors that has higher
						specificity than a single class
					</li>
					<li>
						Override a style without using !important by creating a more
						specific selector
					</li>
				</ol>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Solution Examples</h2>
			<p>
				Here are some examples of how you might solve a few of the challenges:
			</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="solutionExamples"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<div class="notification is-success is-light mt-4">
				<p>
					<i class="fas fa-check-circle mr-2"></i>
					<strong>Remember:</strong> There are often multiple ways to select
					elements. Try to use the most efficient and specific selector for each
					task.
				</p>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Testing Your Selectors</h2>
			<p>
				As you work through the challenges, regularly check your browser to see
				if your selectors are working correctly. You can use the browser's
				developer tools to inspect elements and see which styles are being
				applied.
			</p>

			<div class="box">
				<h3 class="title is-5">Tips for Testing</h3>
				<ul>
					<li>
						Use the browser's inspector to check if your selectors are targeting
						the right elements
					</li>
					<li>
						Look at the "Styles" panel to see if your styles are being applied
						or overridden
					</li>
					<li>
						Try modifying your selectors in the developer tools before updating
						your CSS file
					</li>
					<li>Test edge cases to make sure your selectors are robust</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Challenge Yourself</h2>
			<p>
				Once you've completed the basic challenges, try these advanced tasks:
			</p>

			<div class="box">
				<h3 class="title is-5">Advanced Selector Challenges</h3>
				<ul>
					<li>
						Use the :not() pseudo-class to exclude certain elements from a
						selection
					</li>
					<li>
						Implement a complex selector that uses multiple pseudo-classes
						together
					</li>
					<li>
						Create a selector that targets elements based on their position in
						the DOM
					</li>
					<li>
						Use the :nth-child() selector with a formula (like 3n+1) to create a
						pattern
					</li>
					<li>
						Implement a selector that uses multiple attribute selectors together
					</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Submit Your Project</h2>
			<p>Once you've completed your selector challenge, you can:</p>
			<ul>
				<li>Save it to your computer for future reference</li>
				<li>Share it with friends to get feedback on your selector skills</li>
				<li>Deploy it to a free hosting service like GitHub Pages</li>
				<li>Create additional challenges for yourself to further practice</li>
			</ul>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Next Steps:</strong> After completing this project, you might
					want to check out the
					<router-link to="/tutorials/beginner/css-basics/box-model"
						>CSS Box Model</router-link
					>
					tutorial to learn more about styling elements.
				</p>
			</div>
		</section>

	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

// Code examples
const htmlStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Selector Challenge</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1 id="main-title">CSS Selector Challenge</h1>
    <nav>
      <ul>
        <li><a href="#basic">Basic Selectors</a></li>
        <li><a href="#attributes">Attribute Selectors</a></li>
        <li><a href="#pseudo">Pseudo-classes</a></li>
        <li><a href="#combinators">Combinators</a></li>
        <li><a href="#specificity">Specificity</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="basic" class="section">
      <h2>Basic Selectors</h2>
      <p class="highlight">This paragraph should be highlighted.</p>
      <p>This is a regular paragraph with <span class="highlight">highlighted text</span> inside.</p>
      <div class="container">
        <h3>Container Title</h3>
        <p>This paragraph is inside a container.</p>
      </div>
    </section>

    <section id="attributes" class="section">
      <h2>Attribute Selectors</h2>
      <div class="links-container">
        <a href="document.pdf">PDF Document</a>
        <a href="image.jpg">Image Link</a>
        <a href="https://another-site.com" target="_blank">Another External Link</a>
        <a href="spreadsheet.xlsx">Spreadsheet</a>
      </div>
      <div class="buttons-container">
        <button data-type="primary">Primary Button</button>
        <button data-type="secondary">Secondary Button</button>
        <button data-type="danger">Danger Button</button>
        <button>Default Button</button>
      </div>
      <div class="images-container">
        <img src="placeholder.jpg" alt="Profile picture of John" width="100" height="100">
        <img src="placeholder.jpg" alt="Landscape photo" width="100" height="100">
        <img src="placeholder.jpg" alt="Team profile image" width="100" height="100">
      </div>
    </section>

    <section id="pseudo" class="section">
      <h2>Pseudo-classes and Pseudo-elements</h2>
      <article>
        <h3>Pseudo-classes</h3>
        <p>Pseudo-classes select elements based on their state or position.</p>
        <ul>
          <li>:hover - Styles when the user hovers over an element</li>
          <li>:first-child - Styles the first child element</li>
          <li>:nth-child() - Styles elements based on their position</li>
          <li>:focus - Styles an element when it has focus</li>
          <li>:checked - Styles checked form elements</li>
        </ul>
      </article>
      <article>
        <h3>Pseudo-elements</h3>
        <p>Pseudo-elements create "virtual" elements that can be styled.</p>
        <ul>
          <li>::first-letter - Styles the first letter of text</li>
          <li>::first-line - Styles the first line of text</li>
          <li>::before - Inserts content before an element</li>
          <li>::after - Inserts content after an element</li>
          <li>::placeholder - Styles placeholder text in form inputs</li>
        </ul>
      </article>
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" placeholder="Enter your message"></textarea>
        </div>
      </form>
    </section>

    <section id="combinators" class="section">
      <h2>Combinators</h2>
      <p>Combinators allow you to target elements based on their relationship to other elements.</p>
      <div class="content">
        <p>This paragraph is a direct child of the content div.</p>
        <div class="nested">
          <p>This paragraph is not a direct child of the content div.</p>
        </div>
      </div>
      <ul class="sibling-list">
        <li>First item</li>
        <li>Second item (adjacent to first)</li>
        <li>Third item (adjacent to second)</li>
        <li>Fourth item (adjacent to third)</li>
      </ul>
      <h3>Heading with sibling paragraphs</h3>
      <p>This paragraph is a sibling of the heading above.</p>
      <p>This is another sibling paragraph.</p>
    </section>

    <section id="specificity" class="section">
      <h2>Specificity</h2>
      <p>Specificity determines which CSS rule applies when multiple rules target the same element.</p>
      <div class="specificity-example" id="specificity-box">
        <p class="text important-text" id="special-text">This text can be targeted with different levels of specificity.</p>
      </div>
      <div class="example-box">
        <h3>Specificity Hierarchy (from lowest to highest):</h3>
        <ol>
          <li>Element selectors (e.g., p)</li>
          <li>Class selectors, attribute selectors, pseudo-classes (e.g., .class, [type], :hover)</li>
          <li>ID selectors (e.g., #id)</li>
          <li>Inline styles (style attribute)</li>
          <li>!important declaration</li>
        </ol>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2023 CSS Selector Challenge</p>
    <p>Created for learning purposes</p>
  </footer>
</body>
</html>`);

const solutionExamples = ref(`/* Basic Selectors */
p {
  font-size: 16px;
  line-height: 1.6;
}

.highlight {
  color: #ff6b6b;
}

#main-title {
  font-size: 32px;
  text-align: center;
}

h2 {
  border-bottom: 2px solid #4a6cf7;
  padding-bottom: 10px;
}

/* Attribute Selectors */
a[target="_blank"] {
  color: #2575fc;
}

a[href$=".pdf"]::after {
  content: " 📎";
}

button[data-type="primary"] {
  background-color: #4a6cf7;
  color: white;
}

button[data-type="secondary"] {
  background-color: #6c757d;
  color: white;
}

button[data-type="danger"] {
  background-color: #ff6b6b;
  color: white;
}

img[alt*="profile"] {
  border-radius: 50%;
  border: 3px solid #4a6cf7;
}

/* Pseudo-classes and Pseudo-elements */
section p:first-of-type {
  font-size: 18px;
}

button:hover {
  opacity: 0.8;
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

ul li:nth-child(odd) {
  background-color: #f5f5f5;
}

article h3::first-letter {
  font-size: 1.5em;
  color: #4a6cf7;
}

input::placeholder, textarea::placeholder {
  font-style: italic;
  color: #aaa;
}

/* Combinators */
.content > p {
  font-weight: bold;
  color: #2575fc;
}

.sibling-list li + li {
  margin-top: 10px;
}

h3 ~ p {
  font-style: italic;
  color: #666;
}

form label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

/* Specificity Challenges */
.specificity-example p {
  color: #666;
}

.text {
  color: #4a6cf7;
}

.important-text {
  color: #ff6b6b !important;
}

#special-text {
  color: #2575fc;
}`);
</script>

<script>
// Frontmatter for the project
export default {
	frontmatter: {
		title: 'CSS Selector Challenge',
		description: 'Practice using different CSS selectors to style elements',
		category: 'CSS Projects',
		level: 'Beginner',
		tags: ['CSS', 'Selectors', 'Specificity'],
		lastUpdated: '2023-09-18',
	},
};
</script>

<style scoped>
.project-section {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.codemirror-wrapper {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	margin: 1.5rem 0;
}

code {
	background-color: #f5f5f5;
	color: #485fc7;
	padding: 0.2rem 0.4rem;
	border-radius: 4px;
}

ol li,
ul li {
	margin-bottom: 0.75rem;
}
</style>
