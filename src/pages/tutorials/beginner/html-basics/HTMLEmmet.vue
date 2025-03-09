<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link :to="{ name: 'html-basics' }">HTML Basics</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Emmet Workflow</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">20 minutes</span>
			<span class="tag is-success">Productivity</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-bolt"></i> Emmet: Write HTML & CSS Faster
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Learning Objectives
			</h3>
			<ul>
				<li>Understand Emmet syntax and abbreviations</li>
				<li>Learn common Emmet shortcuts</li>
				<li>Master nested elements and grouping</li>
				<li>Use multiplication and numbering</li>
			</ul>
		</div>

		<div class="notification is-success is-light mt-4">
			<h4 class="title is-4">
				<i class="fas fa-lightbulb"></i> Moving Forward with Emmet
			</h4>
			<p>
				While we've been hand-coding HTML elements up to this point to learn the
				fundamentals, going forward we encourage using Emmet to speed up your
				development workflow. Emmet is an industry standard tool that will help
				you code faster and more efficiently.
			</p>
		</div>

		<div class="box">
			<h2 class="title is-3">
				<i class="fas fa-code"></i> Editors with Built-in Emmet Support
			</h2>
			<div class="content">
				<p>These popular code editors come with Emmet pre-installed:</p>
				<ul class="editor-list">
					<li>
						<i class="fa-solid fa-check"></i>
						<strong>Visual Studio Code</strong> - Full support out of the box
					</li>
					<li>
						<i class="fa-solid fa-check"></i>
						<strong>Sublime Text</strong> - Available through Package Control
					</li>
					<li>
						<i class="fa-solid fa-check"></i>
						<strong>Atom</strong> - Built-in support
					</li>
					<li>
						<i class="fa-solid fa-check"></i>
						<strong>WebStorm</strong> - Integrated by default
					</li>
					<li>
						<i class="fa-solid fa-check"></i>
						<strong>Brackets</strong> - Built-in support
					</li>
				</ul>
			</div>
		</div>

		<div class="box">
			<h2 class="title is-3"><i class="fas fa-cog"></i> VS Code Emmet Setup</h2>
			<div class="content">
				<p>To ensure Emmet works properly in VS Code, check these settings:</p>

				<h4 class="title is-5">1. Open Settings</h4>
				<p>
					Press <kbd>Ctrl</kbd> + <kbd>,</kbd> (Windows/Linux) or
					<kbd>Cmd</kbd> + <kbd>,</kbd> (Mac) to open Settings
				</p>

				<h4 class="title is-5">2. Check These Settings</h4>
				<div class="codemirror-wrapper">
					<CodeMirror
						v-model="vsCodeSettings"
						:options="{
							mode: 'javascript',
							theme: 'material',
							lineNumbers: true,
							lineWrapping: true,
							tabSize: 2,
						}"
					/>
				</div>

				<div class="notification is-info is-light mt-4">
					<p>
						<strong>Note:</strong> You can paste these settings directly into
						your <code>settings.json</code> file by opening the Command Palette
						(<kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>) and
						searching for "Preferences: Open Settings (JSON)"
					</p>
				</div>

				<h4 class="title is-5">3. Additional Tips</h4>
				<ul class="setup-tips">
					<li>
						<p>
							<i class="fa-regular fa-square-check"></i> Enable Emmet for
							additional languages:
						</p>
						<div class="code-block">
							<code
								>"emmet.includeLanguages": { "javascript": "javascriptreact",
								"vue-html": "html", "plaintext": "pug" }</code
							>
						</div>
					</li>
					<li>
						<p>
							<i class="fa-regular fa-square-check"></i> Enable Emmet
							suggestions:
						</p>
						<div class="code-block">
							<code>"emmet.showSuggestionsAsSnippets": true</code>
						</div>
					</li>
					<li>
						<p>
							<i class="fa-regular fa-square-check"></i> Enable Emmet in
							suggestion list:
						</p>
						<div class="code-block">
							<code>"emmet.showExpandedAbbreviation": "always"</code>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="box">
			<h2 class="title is-3">
				<i class="fas fa-download"></i> Get the Cheat Sheet
			</h2>
			<div class="content">
				<p>
					We strongly recommend downloading the official Emmet cheat sheet for
					quick reference while coding:
				</p>
				<div class="buttons">
					<a
						href="https://docs.emmet.io/cheat-sheet/"
						target="_blank"
						class="button is-primary"
					>
						<i class="fas fa-download mr-2"></i>
						Download Emmet Cheat Sheet
					</a>
				</div>
				<div class="notification is-info is-light mt-4">
					<p>
						<strong>Pro Tip:</strong> Keep the cheat sheet handy during your
						first few weeks of using Emmet. You'll be surprised how quickly
						these shortcuts become second nature!
					</p>
				</div>
			</div>
		</div>

		<h2 class="title is-3">Basic Emmet Syntax</h2>
		<p>
			Emmet allows you to create HTML elements quickly by typing a single
			abbreviation and pressing <kbd>Tab</kbd>. Please use your editor's Emmet
			support to create the following elements.
		</p>
		<div class="box">
			<h4 class="title is-4">Element Creation</h4>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="basicExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
			<div class="notification is-info is-light mt-4">
				<p>
					<strong>Try typing:</strong> <code>div</code> and press <kbd>Tab</kbd>
				</p>
			</div>
		</div>

		<h2 class="title is-3 mt-6">Nested Elements</h2>
		<div class="box">
			<h4 class="title is-4">Child Elements</h4>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="nestedExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
			<div class="notification is-info is-light mt-4">
				<p>
					<strong>Try typing:</strong> <code>nav>ul>li</code> and press
					<kbd>Tab</kbd>
				</p>
			</div>
		</div>

		<h2 class="title is-3 mt-6">Common Emmet Shortcuts</h2>
		<div class="box">
			<div class="content">
				<table class="table is-fullwidth">
					<thead>
						<tr>
							<th>Emmet Shortcut</th>
							<th>Output</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>!</code></td>
							<td>HTML5 boilerplate</td>
							<td>Creates a basic HTML5 document structure</td>
						</tr>
						<tr>
							<td><code>div.className</code></td>
							<td><code>&lt;div class="className"&gt;&lt;/div&gt;</code></td>
							<td>Element with class</td>
						</tr>
						<tr>
							<td><code>div#idName</code></td>
							<td><code>&lt;div id="idName"&gt;&lt;/div&gt;</code></td>
							<td>Element with ID</td>
						</tr>
						<tr>
							<td><code>ul>li*3</code></td>
							<td>Unordered list with 3 items</td>
							<td>Multiplication</td>
						</tr>
						<tr>
							<td><code>div+p+bq</code></td>
							<td>Sibling elements</td>
							<td>Creates elements at the same level</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<h2 class="title is-3 mt-6">Practice Examples</h2>
		<div class="box">
			<h4 class="title is-4">Try These Emmet Expressions:</h4>
			<div class="content">
				<ol>
					<li>
						<code>header>nav>ul>li*4>a</code>
						<p>Creates a header with navigation and 4 links</p>
					</li>
					<li>
						<code>form:post>input:text+input:email+input:submit</code>
						<p>Creates a form with text, email inputs and submit button</p>
					</li>
					<li>
						<code>div.container>div.row*3>div.col*3</code>
						<p>Creates a grid-like structure with classes</p>
					</li>
				</ol>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-graduation-cap"></i> Best Practices
			</h2>
			<div class="content">
				<ul class="best-practices">
					<li>
						<i class="fa-regular fa-square-check"></i>
						Start using Emmet for all new HTML/CSS development
					</li>
					<li>
						<i class="fa-regular fa-square-check"></i>
						Practice common abbreviations until they become muscle memory
					</li>
					<li>
						<i class="fa-regular fa-square-check"></i>
						Use the cheat sheet as a reference until you're comfortable
					</li>
					<li>
						<i class="fa-regular fa-square-check"></i>
						Learn editor-specific Emmet shortcuts to maximize efficiency
					</li>
					<li>
						<i class="fa-regular fa-square-check"></i>
						Share Emmet tips with your team to improve collaboration
					</li>
				</ul>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-book"></i> Additional Resources
			</h2>
			<div class="content">
				<ul>
					<li>
						<a href="https://docs.emmet.io/" target="_blank">
							Official Emmet Documentation
						</a>
					</li>
					<li>
						<a
							href="https://code.visualstudio.com/docs/editor/emmet"
							target="_blank"
						>
							VS Code Emmet Support
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import DOMPurify from 'dompurify';

// Get the pageSections array from the parent component
const pageSections = inject('pageSections');

// Define the sections for this tutorial
onMounted(() => {
	if (pageSections) {
		pageSections.value = [
			{
				id: 'introduction',
				title: 'Introduction to Emmet',
				subsections: [],
			},
			{
				id: 'basic-syntax',
				title: 'Basic Emmet Syntax',
				subsections: [],
			},
			{
				id: 'nesting-operators',
				title: 'Nesting Operators',
				subsections: [
					{ id: 'child-operator', title: 'Child Operator (>)' },
					{ id: 'sibling-operator', title: 'Sibling Operator (+)' },
					{ id: 'climb-up-operator', title: 'Climb-up Operator (^)' },
					{
						id: 'multiplication-operator',
						title: 'Multiplication Operator (*)',
					},
				],
			},
			{
				id: 'attributes-ids-classes',
				title: 'Attributes, IDs, and Classes',
				subsections: [],
			},
			{
				id: 'text-content',
				title: 'Text Content',
				subsections: [],
			},
			{
				id: 'practice',
				title: 'Practice Exercise',
				subsections: [],
			},
			{
				id: 'cheat-sheet',
				title: 'Emmet Cheat Sheet',
				subsections: [],
			},
		];
	}
});

const basicExample = ref(`<!-- Type 'div' and press Tab -->
<div></div>

<!-- Type 'p' and press Tab -->
<p></p>

<!-- Type 'h1' and press Tab -->
<h1></h1>`);

const nestedExample = ref(`<!-- Type 'nav>ul>li' and press Tab -->
<nav>
	<ul>
		<li></li>
	</ul>
</nav>

<!-- Type 'div>p>span' and press Tab -->
<div>
	<p>
		<span></span>
	</p>
</div>`);

const vsCodeSettings = ref(`{
  // Enable Emmet in all modes
  "emmet.useInlineCompletions": true,
  
  // Trigger expansion on tab
  "emmet.triggerExpansionOnTab": true,
  
  // Show Emmet suggestions
  "emmet.showSuggestionsAsSnippets": true,
  
  // Enable Emmet abbreviations
  "emmet.showExpandedAbbreviation": "always",
  
  // Enable Emmet in these languages
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue-html": "html"
  },
  
  // Syntax profiles
  "emmet.syntaxProfiles": {
    "html": {
      "attr_quotes": "single"
    }
  }
}`);
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'HTML Emmet',
		description:
			'Learn how to use Emmet to write HTML code faster and more efficiently.',
		category: 'HTML Basics',
		level: 'Beginner',
		order: 8,
		tags: ['html', 'emmet', 'productivity', 'coding shortcuts'],
		lastUpdated: '2024-03-26',
	},
};
</script>

<style scoped>
.codemirror-wrapper {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
}

kbd {
	background-color: #f5f5f5;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	padding: 0.2rem 0.4rem;
	font-size: 0.9em;
}

code {
	background-color: #f5f5f5;
	color: #485fc7;
	padding: 0.2rem 0.4rem;
	border-radius: 4px;
}

.table code {
	white-space: nowrap;
}

.editor-list {
	list-style: none;
	padding-left: 0;
}

.editor-list li {
	display: flex;
	align-items: center;
	margin-bottom: 0.75rem;
}

.editor-list i {
	color: #48c774;
	margin-right: 0.75rem;
}

.best-practices {
	list-style: none;
	padding-left: 0;
}

.best-practices li {
	display: flex;
	align-items: flex-start;
	margin-bottom: 1rem;
}

.best-practices i {
	color: #485fc7;
	margin-right: 0.75rem;
	margin-top: 0.25rem;
}

.button .fas {
	margin-right: 0.5rem;
}

.setup-tips {
	list-style: none;
	padding-left: 0;
}

.setup-tips li {
	display: flex;
	flex-direction: column;
	margin-bottom: 1.5rem;
}

.setup-tips li > i {
	color: #485fc7;
	margin-right: 0.75rem;
	margin-bottom: 0.5rem;
}

.setup-tips li > :first-child {
	display: flex;
	align-items: center;
}

.code-block {
	background: #f5f5f5;
	padding: 1rem;
	border-radius: 4px;
	margin: 0.5rem 0;
	width: 100%;
	overflow-x: auto;
}

.code-block code {
	white-space: pre-wrap;
	word-break: break-word;
	display: block;
	width: 100%;
	font-size: 0.9em;
}

.notification code {
	background-color: rgba(0, 0, 0, 0.07);
	color: inherit;
}
</style>
