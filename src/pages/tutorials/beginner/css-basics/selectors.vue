<script setup>
import { ref, computed, inject, onMounted, watch } from 'vue';
import DOMPurify from 'dompurify';
import CodeMirror from '@/components/CodeMirror.vue';
import { usePageSections } from '@/composables/usePageSections';
import { useRoute } from 'vue-router';
import progressService from '@/services/ProgressService';
import TutorialQuiz from '@/components/TutorialQuiz.vue';

// Define page sections
const sections = [
	{
		id: 'basic-selectors',
		title: 'Basic Selectors',
		subsections: [
			{ id: 'element-selectors', title: 'Element Selectors' },
			{ id: 'class-selectors', title: 'Class Selectors' },
			{ id: 'id-selectors', title: 'ID Selectors' },
			{ id: 'universal-selector', title: 'Universal Selector' },
		],
	},
	{
		id: 'combinators',
		title: 'Combining Selectors',
		subsections: [
			{ id: 'descendant-combinator', title: 'Descendant Combinator' },
			{ id: 'child-combinator', title: 'Child Combinator' },
		],
	},
	{
		id: 'attribute-selectors',
		title: 'Attribute Selectors',
		subsections: [
			{ id: 'basic-attribute', title: 'Basic Attribute Selector' },
			{ id: 'exact-value', title: 'Exact Value Selector' },
		],
	},
	{
		id: 'pseudo-classes',
		title: 'Pseudo-classes',
		subsections: [
			{ id: 'state-pseudo', title: 'State Pseudo-classes' },
			{ id: 'structural-pseudo', title: 'Simple Structural Pseudo-classes' },
		],
	},
	{ id: 'specificity', title: 'Specificity' },
	{ id: 'practice', title: 'Practical Exercises' },
];

const { pageSections } = usePageSections(sections);

onMounted(() => {
	pageSections.value = [
		{
			id: 'basic-selectors',
			title: 'Basic Selectors',
			subsections: [
				{ id: 'element-selectors', title: 'Element Selectors' },
				{ id: 'class-selectors', title: 'Class Selectors' },
				{ id: 'id-selectors', title: 'ID Selectors' },
				{ id: 'universal-selector', title: 'Universal Selector' },
			],
		},
		{
			id: 'combinators',
			title: 'Combining Selectors',
			subsections: [
				{ id: 'descendant-combinator', title: 'Descendant Combinator' },
				{ id: 'child-combinator', title: 'Child Combinator' },
			],
		},
		{
			id: 'attribute-selectors',
			title: 'Attribute Selectors',
			subsections: [
				{ id: 'basic-attribute', title: 'Basic Attribute Selector' },
				{ id: 'exact-value', title: 'Exact Value Selector' },
			],
		},
		{
			id: 'pseudo-classes',
			title: 'Pseudo-classes',
			subsections: [
				{ id: 'state-pseudo', title: 'State Pseudo-classes' },
				{ id: 'structural-pseudo', title: 'Simple Structural Pseudo-classes' },
			],
		},
		{ id: 'specificity', title: 'Specificity' },
		{ id: 'practice', title: 'Practical Exercises' },
	];
});

// Example code
const elementExample = ref(
	'<!-- HTML -->\n' +
		'<h1>Welcome to my website</h1>\n' +
		'<p>This is a paragraph with navy text.</p>\n' +
		'<p>This is another paragraph that will also be styled.</p>\n\n' +
		'/* CSS */\n' +
		'p {\n' +
		'  color: navy;\n' +
		'  line-height: 1.6;\n' +
		'}\n\n' +
		'h1 {\n' +
		'  color: #333;\n' +
		'  font-size: 2em;\n' +
		'}',
);

// Preview
const sanitizedElementPreview = computed(() => {
	const previewHtml =
		'<div class="preview-example">' +
		'<style>' +
		'.preview-example p { color: navy; line-height: 1.6; }' +
		'.preview-example h1 { color: #333; font-size: 2em; }' +
		'</style>' +
		'<h1>Welcome to my website</h1>' +
		'<p>This is a paragraph with navy text.</p>' +
		'<p>This is another paragraph that will also be styled.</p>' +
		'</div>';

	return DOMPurify.sanitize(previewHtml);
});

defineExpose({
	pageSections,
});
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

		<section id="basic-selectors">
			<h2 class="title is-2 section-title">Basic Selectors</h2>
			<p>
				Basic selectors target HTML elements directly by their tag name. They
				apply styles to <strong>all</strong> instances of that element on the
				page.
			</p>

			<div class="box">
				<h2 class="title is-4">Understanding CSS Rules</h2>
				<p>
					Before diving into selectors, let's understand how CSS rules are
					written in both internal and external styles:
				</p>

				<!-- SVG Diagram of CSS Rule Structure -->
				<div class="css-rule-diagram my-5">
					<svg width="600" height="200" viewBox="0 0 600 200">
						<!-- Selector -->
						<g>
							<rect
								x="10"
								y="60"
								width="120"
								height="40"
								rx="5"
								fill="#4a9eff"
								opacity="0.2"
							/>
							<text x="70" y="85" text-anchor="middle" fill="#2c3e50">h1</text>
							<text
								x="70"
								y="110"
								text-anchor="middle"
								font-size="12"
								fill="#666"
							>
								selector
							</text>
						</g>

						<!-- Opening Bracket -->
						<g>
							<rect
								x="140"
								y="60"
								width="30"
								height="40"
								rx="5"
								fill="#ff9f4a"
								opacity="0.2"
							/>
							<text x="155" y="85" text-anchor="middle" fill="#2c3e50">{</text>
							<text
								x="155"
								y="110"
								text-anchor="middle"
								font-size="12"
								fill="#666"
							>
								start
							</text>
						</g>

						<!-- Property -->
						<g>
							<rect
								x="180"
								y="60"
								width="120"
								height="40"
								rx="5"
								fill="#4aff98"
								opacity="0.2"
							/>
							<text x="240" y="85" text-anchor="middle" fill="#2c3e50">
								color
							</text>
							<text
								x="240"
								y="110"
								text-anchor="middle"
								font-size="12"
								fill="#666"
							>
								property
							</text>
						</g>

						<!-- Colon -->
						<g>
							<rect
								x="310"
								y="60"
								width="30"
								height="40"
								rx="5"
								fill="#ff4a4a"
								opacity="0.2"
							/>
							<text x="325" y="85" text-anchor="middle" fill="#2c3e50">:</text>
							<text
								x="325"
								y="110"
								text-anchor="middle"
								font-size="12"
								fill="#666"
							>
								colon
							</text>
						</g>

						<!-- Value -->
						<g>
							<rect
								x="350"
								y="60"
								width="120"
								height="40"
								rx="5"
								fill="#9f4aff"
								opacity="0.2"
							/>
							<text x="410" y="85" text-anchor="middle" fill="#2c3e50">
								blue
							</text>
							<text
								x="410"
								y="110"
								text-anchor="middle"
								font-size="12"
								fill="#666"
							>
								value
							</text>
						</g>

						<!-- Semicolon -->
						<g>
							<rect
								x="480"
								y="60"
								width="30"
								height="40"
								rx="5"
								fill="#ff4a4a"
								opacity="0.2"
							/>
							<text x="495" y="85" text-anchor="middle" fill="#2c3e50">;</text>
							<text
								x="495"
								y="110"
								text-anchor="middle"
								font-size="12"
								fill="#666"
							>
								end
							</text>
						</g>

						<!-- Closing Bracket -->
						<g>
							<rect
								x="520"
								y="60"
								width="30"
								height="40"
								rx="5"
								fill="#ff9f4a"
								opacity="0.2"
							/>
							<text x="535" y="85" text-anchor="middle" fill="#2c3e50">}</text>
							<text
								x="535"
								y="110"
								text-anchor="middle"
								font-size="12"
								fill="#666"
							>
								close
							</text>
						</g>
					</svg>
				</div>

				<div class="notification is-info is-light">
					<strong>Note:</strong> While inline styles use a different format
					(directly in the HTML style attribute), internal and external CSS
					follow this same rule structure.
				</div>

				<div class="columns mt-4">
					<div class="column">
						<h3 class="title is-5">External CSS</h3>
						<pre><code>.css file:
h1 {
  color: blue;
}</code></pre>
					</div>
					<div class="column">
						<h3 class="title is-5">Internal CSS</h3>
						<pre><code>&lt;style&gt;
h1 {
  color: blue;
}
&lt;/style&gt;</code></pre>
					</div>
					<div class="column">
						<h3 class="title is-5">Inline CSS</h3>
						<pre><code>&lt;h1 style="color: blue;"&gt;
  Heading
&lt;/h1&gt;</code></pre>
					</div>
				</div>
			</div>

			<div id="element-selectors" class="mt-6">
				<h2 class="title is-4">Element Selectors</h2>
				<p>
					Element selectors target HTML elements by their tag name. They affect
					all elements of that type on the page.
				</p>

				<div class="columns">
					<div class="column">
						<div class="box">
							<h3 class="title is-5">Syntax</h3>
							<pre><code>element-name {
  property: value;
}</code></pre>

							<h3 class="title is-5 mt-4">Example</h3>
							<pre><code>p {
  color: navy;
  line-height: 1.6;
}

h1 {
  font-size: 24px;
  margin-bottom: 1em;
}</code></pre>
						</div>
					</div>
					<div class="column">
						<div class="notification is-info is-light">
							<strong>Key Points:</strong>
							<ul>
								<li>Targets all elements of specified type</li>
								<li>No special characters needed</li>
								<li>Commonly used for basic styling</li>
								<li>Lower specificity than classes and IDs</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div id="class-selectors" class="mt-6">
				<h2 class="title is-4">Class Selectors</h2>
				<p>
					Class selectors target elements with a specific class attribute.
					Multiple elements can share the same class.
				</p>

				<div class="columns">
					<div class="column">
						<div class="box">
							<h3 class="title is-5">CSS Syntax</h3>
							<pre><code>.highlight {
  background-color: yellow;
}

.btn {
  padding: 10px 20px;
  border-radius: 4px;
}</code></pre>

							<h3 class="title is-5 mt-4">HTML Usage</h3>
							<pre><code>&lt;p class="highlight"&gt;This text will be highlighted&lt;/p&gt;

&lt;button class="btn"&gt;Click me&lt;/button&gt;

&lt;!-- Multiple classes on one element --&gt;
&lt;div class="highlight btn"&gt;
  Both classes will apply
&lt;/div&gt;</code></pre>
						</div>
					</div>
					<div class="column">
						<div class="notification is-info is-light">
							<strong>Rules to Follow:</strong>
							<ul>
								<li>Must start with a period (.)</li>
								<li>Can contain letters, numbers, hyphens, and underscores</li>
								<li>Case-sensitive</li>
								<li>Cannot start with a number</li>
								<li>No spaces allowed in class names</li>
							</ul>
						</div>
						<div class="notification is-warning is-light mt-4">
							<strong>Best Practices:</strong>
							<ul>
								<li>Use meaningful, descriptive names</li>
								<li>Use hyphens for multi-word classes</li>
								<li>Keep names as short as practical</li>
								<li>Elements can have multiple classes (space-separated)</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div id="id-selectors" class="mt-6">
				<h2 class="title is-4">ID Selectors</h2>
				<p>
					ID selectors target a single, unique element on the page. Each ID
					should only be used once per HTML document.
				</p>

				<div class="columns">
					<div class="column">
						<div class="box">
							<h3 class="title is-5">CSS Syntax</h3>
							<pre><code>#main-header {
  background-image: url('header.jpg');
}

#contact-form {
  max-width: 600px;
  margin: 0 auto;
}</code></pre>

							<h3 class="title is-5 mt-4">HTML Usage</h3>
							<pre><code>&lt;header id="main-header"&gt;
  Site Header
&lt;/header&gt;

&lt;form id="contact-form"&gt;
  Contact form fields
&lt;/form&gt;

&lt;!-- INCORRECT: Don't use the same ID multiple times --&gt;
&lt;div id="main-header"&gt;
  This is not allowed!
&lt;/div&gt;</code></pre>

							<div class="notification is-warning is-light mt-4">
								<strong>Common Mistake:</strong> Unlike classes, you cannot:
								<ul>
									<li>Use the same ID multiple times in a document</li>
									<li>Add multiple IDs to one element</li>
									<li>Combine IDs with spaces like you can with classes</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="column">
						<div class="notification is-info is-light">
							<strong>Rules to Follow:</strong>
							<ul>
								<li>Must start with a hash (#)</li>
								<li>Must be unique in the document</li>
								<li>Can contain letters, numbers, hyphens, and underscores</li>
								<li>Case-sensitive</li>
								<li>Cannot start with a number</li>
								<li>No spaces allowed in ID names</li>
							</ul>
						</div>
						<div class="notification is-danger is-light mt-4">
							<strong>Important Notes:</strong>
							<ul>
								<li>Highest specificity of the basic selectors</li>
								<li>Should be used sparingly</li>
								<li>Better to use classes for styling</li>
								<li>IDs are better for JavaScript hooks and anchor links</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div id="universal-selector" class="mt-6">
				<h2 class="title is-4">Universal Selector</h2>
				<p>
					The universal selector (*) matches any element on the page. It's a
					powerful tool that should be used carefully.
				</p>

				<div class="columns">
					<div class="column">
						<div class="box">
							<h3 class="title is-5">CSS Syntax</h3>
							<pre><code>/* Selects all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* With a specific parent */
.container * {
  border: 1px solid #ccc;
}

/* With pseudo-classes */
*:hover {
  cursor: pointer;
}</code></pre>

							<h3 class="title is-5 mt-4">HTML Context</h3>
							<pre><code>&lt;div class="container"&gt;
  &lt;h1&gt;Heading&lt;/h1&gt;  <!-- Affected -->
  &lt;p&gt;Paragraph&lt;/p&gt;  <!-- Affected -->
  &lt;ul&gt;              <!-- Affected -->
    &lt;li&gt;Item&lt;/li&gt;  <!-- Affected -->
  &lt;/ul&gt;
&lt;/div&gt;</code></pre>
						</div>
					</div>

					<div class="column">
						<div class="notification is-info is-light">
							<strong>Common Use Cases:</strong>
							<ul>
								<li>CSS resets</li>
								<li>Box-sizing adjustments</li>
								<li>Debugging layouts</li>
								<li>Applying base styles</li>
							</ul>
						</div>

						<div class="notification is-warning is-light mt-4">
							<strong>Performance Considerations:</strong>
							<ul>
								<li>Can impact page performance if overused</li>
								<li>
									Affects every element, including new ones added dynamically
								</li>
								<li>
									Use sparingly and with specific parent selectors when possible
								</li>
								<li>
									Consider using more specific selectors for better performance
								</li>
							</ul>
						</div>

						<div class="notification is-danger is-light mt-4">
							<strong>Best Practices:</strong>
							<ul>
								<li>Avoid using for general styling</li>
								<li>Prefer element or class selectors for specific styles</li>
								<li>Use primarily for CSS resets or global box-sizing</li>
								<li>Be cautious with properties that inherit naturally</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="combinators" class="mt-6">
			<h2 class="title is-3">Combining Selectors</h2>
			<p>
				Combinators allow us to select elements based on their relationship with
				other elements. Let's look at the two most common combinators.
			</p>

			<div id="descendant-combinator" class="mt-4">
				<h3 class="title is-4">Descendant Combinator (space)</h3>
				<p>
					Selects all elements that are descendants of a specified element. The
					elements don't need to be direct children.
				</p>

				<div class="columns">
					<div class="column">
						<div class="box">
							<h4 class="title is-5">CSS Syntax</h4>
							<pre><code>/* Selects all p elements inside article */
article p {
  color: navy;
}

/* Selects all spans inside div with class 'container' */
.container span {
  font-weight: bold;
}</code></pre>

							<h4 class="title is-5 mt-4">HTML Example</h4>
							<pre><code>&lt;article&gt;
  &lt;p&gt;This paragraph is selected&lt;/p&gt;
  &lt;div&gt;
    &lt;p&gt;This nested paragraph is also selected&lt;/p&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>
						</div>
					</div>

					<div class="column">
						<div class="notification is-info is-light">
							<strong>Key Points:</strong>
							<ul>
								<li>Matches elements at any level of nesting</li>
								<li>Uses a space between selectors</li>
								<li>Very common in CSS styling</li>
								<li>Can impact performance if too broad</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div id="child-combinator" class="mt-5">
				<h3 class="title is-4">Child Combinator (>)</h3>
				<p>
					Selects elements that are direct children of a specified element. Only
					works for immediate children.
				</p>

				<div class="columns">
					<div class="column">
						<div class="box">
							<h4 class="title is-5">CSS Syntax</h4>
							<pre><code>/* Selects only direct li children of ul */
ul > li {
  list-style: square;
}

/* Selects only direct p children of div.container */
.container > p {
  margin-bottom: 1em;
}</code></pre>

							<h4 class="title is-5 mt-4">HTML Example</h4>
							<pre><code>&lt;ul&gt;
  &lt;li&gt;Direct child - Selected&lt;/li&gt;
  &lt;li&gt;Direct child - Selected
    &lt;ul&gt;
      &lt;li&gt;Nested - Not Selected&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
						</div>
					</div>

					<div class="column">
						<div class="notification is-info is-light">
							<strong>Key Points:</strong>
							<ul>
								<li>Only matches direct children</li>
								<li>More specific than descendant selector</li>
								<li>Useful for strict hierarchies</li>
								<li>Better performance than descendant selector</li>
							</ul>
						</div>

						<div class="notification is-warning is-light mt-4">
							<strong>Best Practices:</strong>
							<ul>
								<li>Use when you need to target only immediate children</li>
								<li>Helps prevent unintended styling of nested elements</li>
								<li>Consider using when building component-based designs</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div id="attribute-selectors" class="mt-6">
			<h2 class="title is-3">Attribute Selectors</h2>
			<p>
				Attribute selectors allow you to select elements based on their
				attributes or attribute values. These are especially useful when working
				with forms and custom data attributes.
			</p>

			<div class="box mt-4">
				<h3 class="title is-4">Basic Attribute Selector [attribute]</h3>
				<p>
					Selects elements that have a specific attribute, regardless of its
					value.
				</p>

				<div class="columns">
					<div class="column">
						<h4 class="title is-5">CSS Syntax</h4>
						<pre><code>/* Selects all elements with a title attribute */
[title] {
  cursor: help;
}

/* Selects all inputs with required attribute */
input[required] {
  border-color: red;
}</code></pre>

						<h4 class="title is-5 mt-4">HTML Example</h4>
						<pre><code>&lt;p title="More info"&gt;Hover me for a tooltip&lt;/p&gt;

&lt;form&gt;
  &lt;input type="text" required&gt;
  &lt;input type="text"&gt; &lt;!-- Not selected --&gt;
&lt;/form&gt;</code></pre>
					</div>

					<div class="column">
						<div class="notification is-info is-light">
							<strong>Common Use Cases:</strong>
							<ul>
								<li>Styling required form fields</li>
								<li>Adding indicators to elements with tooltips</li>
								<li>Targeting elements with specific ARIA attributes</li>
								<li>Styling elements with custom data attributes</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="box mt-5">
				<h3 class="title is-4">Exact Value Selector [attribute="value"]</h3>
				<p>Selects elements where the attribute matches an exact value.</p>

				<div class="columns">
					<div class="column">
						<h4 class="title is-5">CSS Syntax</h4>
						<pre><code>/* Selects inputs of type "submit" */
input[type="submit"] {
  background-color: blue;
  color: white;
}

/* Selects elements with specific role */
[role="button"] {
  cursor: pointer;
  padding: 0.5em 1em;
}</code></pre>

						<h4 class="title is-5 mt-4">HTML Example</h4>
						<pre><code>&lt;form&gt;
  &lt;input type="text"&gt;     &lt;!-- Not selected --&gt;
  &lt;input type="submit"&gt;   &lt;!-- Selected --&gt;
&lt;/form&gt;

&lt;div role="button"&gt;Click Me&lt;/div&gt;</code></pre>
					</div>

					<div class="column">
						<div class="notification is-info is-light">
							<strong>Common Use Cases:</strong>
							<ul>
								<li>Styling specific types of form inputs</li>
								<li>Targeting elements with specific roles</li>
								<li>
									Styling links with specific relationships (rel attribute)
								</li>
								<li>Matching exact data attribute values</li>
							</ul>
						</div>

						<div class="notification is-warning is-light mt-4">
							<strong>Best Practices:</strong>
							<ul>
								<li>Use for specific, targeted styling</li>
								<li>
									Consider using data-* attributes for custom styling hooks
								</li>
								<li>Combine with other selectors when needed</li>
								<li>Keep selectors simple and readable</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="notification is-info is-light mt-4">
				<strong>Note:</strong> There are more advanced attribute selectors (like
				partial matching with ^=, $=, *=) that we'll cover in the intermediate
				CSS tutorial. These basic selectors will handle most common use cases.
			</div>

			<div class="box mt-4">
				<h3 class="title is-5">Practical Example: Styling Form Inputs</h3>
				<pre><code>/* Style all required inputs */
input[required] {
  border: 2px solid #ff9f43;
}

/* Style different input types */
input[type="email"] {
  background: url('email-icon.png') no-repeat 10px center;
  padding-left: 35px;
}

input[type="tel"] {
  background: url('phone-icon.png') no-repeat 10px center;
  padding-left: 35px;
}

/* Style external links */
a[target="_blank"] {
  padding-right: 20px;
  background: url('external-link.png') no-repeat right;
}</code></pre>
			</div>
		</div>

		<section id="pseudo-classes" class="mt-6">
			<h2 class="title is-3">Pseudo-classes</h2>
			<p>
				Pseudo-classes select elements based on their state or position. They
				allow you to style elements differently based on how users interact with
				them or where they appear in the document.
			</p>

			<div id="state-pseudo" class="box mt-4">
				<h3 class="title is-4">State Pseudo-classes</h3>
				<p>
					These pseudo-classes respond to user interactions like hovering,
					clicking, or focusing on elements.
				</p>

				<div class="columns">
					<div class="column">
						<h4 class="title is-5">Common State Pseudo-classes</h4>
						<pre><code>/* Hover state */
button:hover {
  background-color: #0056b3;
}

/* Active state (while clicking) */
button:active {
  transform: scale(0.98);
}

/* Focus state */
input:focus {
  border-color: #007bff;
  outline: none;
}

/* Visited links */
a:visited {
  color: purple;
}</code></pre>

						<h4 class="title is-5 mt-4">HTML Example</h4>
						<pre><code>&lt;button class="btn"&gt;Hover Me&lt;/button&gt;

&lt;input type="text" placeholder="Focus Me"&gt;

&lt;a href="#"&gt;Click Me&lt;/a&gt;</code></pre>
					</div>

					<div class="column">
						<div class="notification is-info is-light">
							<strong>Common Use Cases:</strong>
							<ul>
								<li>Creating interactive button states</li>
								<li>Showing focus states for accessibility</li>
								<li>Differentiating visited links</li>
								<li>Providing user feedback on interactions</li>
							</ul>
						</div>

						<div class="notification is-warning is-light mt-4">
							<strong>Best Practices:</strong>
							<ul>
								<li>Always maintain visible focus states for accessibility</li>
								<li>Use :hover for supplementary information only</li>
								<li>Ensure sufficient color contrast in all states</li>
								<li>Test interactions across different devices</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div id="structural-pseudo" class="box mt-5">
				<h3 class="title is-4">Simple Structural Pseudo-classes</h3>
				<p>
					These pseudo-classes select elements based on their position in the
					document structure.
				</p>

				<div class="columns">
					<div class="column">
						<h4 class="title is-5">Basic Structural Selectors</h4>
						<pre><code>/* First child element */
li:first-child {
  font-weight: bold;
}

/* Last child element */
li:last-child {
  border-bottom: none;
}

/* Only child */
p:only-child {
  font-style: italic;
}</code></pre>

						<h4 class="title is-5 mt-4">HTML Example</h4>
						<pre><code>&lt;ul&gt;
  &lt;li&gt;First item (bold)&lt;/li&gt;
  &lt;li&gt;Middle item&lt;/li&gt;
  &lt;li&gt;Last item (no border)&lt;/li&gt;
&lt;/ul&gt;

&lt;div&gt;
  &lt;p&gt;Only paragraph (italic)&lt;/p&gt;
&lt;/div&gt;</code></pre>
					</div>

					<div class="column">
						<div class="notification is-info is-light">
							<strong>Common Use Cases:</strong>
							<ul>
								<li>Removing borders from last items in lists</li>
								<li>Styling first or last elements differently</li>
								<li>Special styling for single elements</li>
								<li>Basic list styling</li>
							</ul>
						</div>

						<div class="notification is-warning is-light mt-4">
							<strong>Note:</strong> More complex structural pseudo-classes like
							:nth-child() and :nth-of-type() will be covered in the
							intermediate CSS tutorial.
						</div>
					</div>
				</div>
			</div>
		</section>

		<div id="specificity" class="mt-6">
			<h2 class="title is-3">Specificity</h2>
			<p>
				Specificity determines which CSS rules are applied when multiple rules
				target the same element. Think of it as a scoring system that decides
				which styles take precedence.
			</p>

			<div class="box mt-4">
				<h3 class="title is-4">Specificity Hierarchy</h3>
				<p>From highest to lowest specificity:</p>

				<div class="specificity-levels">
					<div class="level-item">
						<h4 class="title is-5">1. Inline Styles</h4>
						<code>&lt;div style="color: blue;"&gt;</code>
						<p>
							Highest specificity, but should be avoided for maintainability
						</p>
					</div>

					<div class="level-item">
						<h4 class="title is-5">2. ID Selectors</h4>
						<code>#header { color: blue; }</code>
						<p>Very high specificity, use sparingly</p>
					</div>

					<div class="level-item">
						<h4 class="title is-5">
							3. Class, Attribute, and Pseudo-class Selectors
						</h4>
						<code>.highlight, [type="text"], :hover { color: blue; }</code>
						<p>Medium specificity, commonly used</p>
					</div>

					<div class="level-item">
						<h4 class="title is-5">4. Element and Pseudo-element Selectors</h4>
						<code>p, ::before { color: blue; }</code>
						<p>Lowest specificity, most general</p>
					</div>
				</div>
			</div>

			<div class="notification is-info is-light mt-4">
				<strong>How to Calculate Specificity:</strong>
				<ul>
					<li>Count the number of ID selectors (a)</li>
					<li>
						Count the number of class, attribute, and pseudo-class selectors (b)
					</li>
					<li>Count the number of element selectors (c)</li>
					<li>Write as: a-b-c</li>
				</ul>
			</div>

			<div class="notification is-warning is-light mt-4">
				<strong>Best Practices:</strong>
				<ul>
					<li>Keep selectors as simple as possible</li>
					<li>Avoid inline styles</li>
					<li>Use classes instead of IDs for styling</li>
					<li>Don't over-qualify selectors</li>
				</ul>
			</div>

			<div class="notification is-danger is-light mt-4">
				<strong>Important Note:</strong>
				<p>
					The !important declaration overrides normal specificity rules and
					should be avoided. It makes styles harder to maintain and debug.
				</p>
			</div>

			<div class="specificity-diagram box mt-4">
				<h3 class="title is-4">Specificity Visual Guide</h3>
				<svg width="600" height="400" viewBox="0 0 600 400">
					<!-- Background -->
					<rect x="50" y="20" width="500" height="360" fill="#f8f9fa" rx="8" />

					<!-- Specificity Levels -->
					<g class="specificity-bars">
						<!-- Inline Styles -->
						<rect
							x="100"
							y="40"
							width="400"
							height="60"
							fill="#ff6b6b"
							rx="4"
						/>
						<text x="120" y="75" fill="#fff" font-size="14">
							<tspan x="120" dy="0">Inline Styles</tspan>
							<tspan x="120" dy="20">(1,0,0,0)</tspan>
						</text>

						<!-- ID -->
						<rect
							x="100"
							y="120"
							width="300"
							height="60"
							fill="#4dabf7"
							rx="4"
						/>
						<text x="120" y="155" fill="#fff" font-size="14">
							<tspan x="120" dy="0">ID Selectors</tspan>
							<tspan x="120" dy="20">(0,1,0,0)</tspan>
						</text>

						<!-- Classes -->
						<rect
							x="100"
							y="200"
							width="200"
							height="80"
							fill="#51cf66"
							rx="4"
						/>
						<text x="120" y="235" fill="#fff" font-size="14">
							<tspan x="120" dy="0">Classes, Attributes,</tspan>
							<tspan x="120" dy="20">Pseudo-classes</tspan>
							<tspan x="120" dy="20">(0,0,1,0)</tspan>
						</text>

						<!-- Elements -->
						<rect
							x="100"
							y="300"
							width="100"
							height="60"
							fill="#fab005"
							rx="4"
						/>
						<text x="120" y="335" fill="#fff" font-size="14">
							<tspan x="120" dy="0">Elements</tspan>
							<tspan x="120" dy="20">(0,0,0,1)</tspan>
						</text>
					</g>

					<!-- Arrows -->
					<path
						d="M 50 40 L 50 360"
						stroke="#dee2e6"
						stroke-width="2"
						marker-end="url(#arrow)"
					/>
					<text
						x="30"
						y="200"
						fill="#495057"
						font-size="12"
						transform="rotate(-90 30 200)"
					>
						Specificity Weight
					</text>

					<!-- Arrow Marker -->
					<defs>
						<marker
							id="arrow"
							markerWidth="10"
							markerHeight="10"
							refX="9"
							refY="5"
							orient="auto"
						>
							<path d="M0,0 L10,5 L0,10" fill="none" stroke="#dee2e6" />
						</marker>
					</defs>
				</svg>

				<div class="notification is-info is-light mt-4 how-to-read">
					<strong>How to Read:</strong>
					<ul class="explanation-list">
						<li>The wider the bar, the higher the specificity weight</li>
						<li>Each level shows a different type of selector</li>
						<li>
							Numbers in parentheses show the specificity score (Inline, ID,
							Class, Element)
						</li>
						<li>
							Inline styles always override other selectors unless !important is
							used
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div id="practical-exercises" class="mt-6">
			<h2 class="title is-3">Practical Exercises</h2>
			<p>
				Let's practice organizing selectors for our restaurant websites. We'll
				focus on structuring our CSS selectors before adding properties in later
				lessons.
			</p>

			<div class="box mt-4">
				<h3 class="title is-4">Exercise 1: Black Swan Bistro</h3>
				<p>
					Create an external stylesheet (style.css) for common elements and an
					internal style block for page-specific styles.
				</p>
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
				<p>The styles below are just one way to achieve the desired result.</p>

				<div class="columns">
					<div class="column">
						<h4 class="title is-5">External Stylesheet (style.css)</h4>
						<pre><code>/* Header Styles */
header {}
.main-header {}
#restaurant-name {}
.tagline {}

/* Navigation */
nav {}
.main-nav {}
.nav-list {}
.nav-item {}
.nav-link {}

/* Footer */
footer {}
.footer-content {}
.social-links {}
.contact-info {}

/* Common Elements */
.container {}
.section {}
.button {}</code></pre>
					</div>

					<div class="column">
						<h4 class="title is-5">Internal Styles (index.html)</h4>
						<pre><code>&lt;style&gt;
/* Hero Section */
.hero-section {}
.hero-content {}
.hero-image {}

/* Featured Menu */
.featured-menu {}
.menu-item {}
.menu-title {}
.menu-description {}
.menu-price {}

/* Special Events */
.events-section {}
.event-card {}
.event-date {}
.event-details {}
&lt;/style&gt;</code></pre>
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<strong>Selector Organization:</strong>
					<ul>
						<li>External stylesheet for site-wide elements</li>
						<li>Class-based selectors for reusable components</li>
						<li>IDs only for unique elements</li>
						<li>Semantic class names that describe purpose</li>
					</ul>
				</div>
			</div>

			<div class="box mt-4">
				<h3 class="title is-4">Exercise 2: Rotto Rocks</h3>
				<p>
					Create a modular selector structure for a modern beach-side venue,
					using the following goals:
				</p>
				<i class="fas fa-lightbulb"></i> Styling Goals

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
			<p>The code below is just one way to achieve the desired result.</p>
			<div class="columns">
				<div class="column">
					<h4 class="title is-5">External Stylesheet (rotto-styles.css)</h4>
					<pre><code>/* Site Header */
.site-header {}
.logo-container {}
#site-logo {}
.header-nav {}

/* Main Navigation */
.nav-wrapper {}
.primary-nav {}
.nav-item {}
.nav-link {}
.dropdown-menu {}

/* Layout Components */
.main-container {}
.sidebar {}
.content-area {}
.widget {}

/* Footer */
.site-footer {}
.footer-nav {}
.social-icons {}
.newsletter-signup {}</code></pre>
				</div>

				<div class="column">
					<h4 class="title is-5">Internal Styles (venue-page.html)</h4>
					<pre><code>&lt;style&gt;
/* Venue Features */
.venue-highlights {}
.feature-grid {}
.feature-card {}
.feature-icon {}
.feature-title {}

/* Booking Section */
.booking-area {}
.calendar-widget {}
.time-slots {}
.booking-form {}

/* Gallery */
.venue-gallery {}
.gallery-grid {}
.gallery-item {}
.image-overlay {}
&lt;/style&gt;</code></pre>
				</div>
			</div>

			<div class="notification is-warning is-light mt-4">
				<strong>Best Practices:</strong>
				<ul>
					<li>Group related selectors together</li>
					<li>Use consistent naming conventions</li>
					<li>Keep specificity low for flexibility</li>
					<li>Plan for component reusability</li>
				</ul>
			</div>
		</div>

		<div class="notification is-success is-light mt-4">
			<strong>Exercise Goals:</strong>
			<p>Practice organizing selectors before adding properties. This helps:</p>
			<ul>
				<li>Plan the structure of your stylesheets</li>
				<li>Create maintainable and scalable CSS</li>
				<li>Understand the relationship between HTML and CSS</li>
				<li>Prepare for adding properties in future lessons</li>
			</ul>
		</div>

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div v-if="progressEnabled" class="completion-section mt-6">
			<h2 class="title is-3">Completion</h2>
			<p>Congratulations! You've completed the CSS selectors tutorial.</p>
			<p>
				Feel free to explore more CSS tutorials or apply your new skills to
				real-world projects.
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
	gap: 1.5rem;
}

.level-item {
	padding: 1rem;
	background: #f8f9fa;
	border-radius: 4px;
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

.css-rule-diagram {
	background: white;
	padding: 1rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

pre {
	background-color: #f5f5f5;
	padding: 1rem;
	border-radius: 4px;
}

code {
	color: #2c3e50;
}

.notification ul {
	margin-top: 0.5rem;
	margin-left: 1.5rem;
}

.notification ul li {
	margin-bottom: 0.25rem;
}

pre {
	background-color: #f5f5f5;
	padding: 1rem;
	border-radius: 4px;
	overflow-x: auto;
}

code {
	color: #2c3e50;
	font-family: monospace;
}

.specificity-diagram {
	text-align: center;
	padding: 2rem;
}

.specificity-diagram svg {
	max-width: 100%;
	height: auto;
}

text {
	font-family: system-ui, -apple-system, sans-serif;
}

/* Make sure SVG is responsive */
@media (max-width: 600px) {
	.specificity-diagram svg {
		width: 100%;
		height: auto;
	}
}

.how-to-read {
	max-width: 600px;
	margin: 1rem auto;
	text-align: left;
}

.explanation-list {
	margin-top: 0.5rem;
	margin-left: 1.5rem;
	list-style-type: disc;
}

.explanation-list li {
	margin-bottom: 0.5rem;
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

.specificity-diagram {
	text-align: center;
	padding: 2rem;
}

.how-to-read {
	max-width: 600px;
	margin: 1rem auto;
	text-align: left;
}

.explanation-list {
	margin-top: 0.5rem;
	margin-left: 1.5rem;
	list-style-type: disc;
}

.explanation-list li {
	margin-bottom: 0.5rem;
}

/* Code block styles */
pre {
	background-color: #f5f5f5;
	padding: 1rem;
	border-radius: 4px;
	overflow-x: auto;
}

code {
	font-family: monospace;
	color: #2c3e50;
}

.columns {
	display: flex;
	gap: 1rem;
	margin-top: 1rem;
}

.column {
	flex: 1;
}

@media (max-width: 768px) {
	.columns {
		flex-direction: column;
	}
}
</style>
