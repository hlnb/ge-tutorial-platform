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
					<router-link :to="'/tutorials/beginner/html-basics/'">HTML Basics</router-link>
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

		<!-- Hunter Element 1: Anticipatory Set -->
		<AnticipatorySet
			title="⚡ Code at Lightning Speed"
			:hook="`<p>Imagine typing <code>ul>li*5</code> and instantly getting a complete unordered list with 5 items. Or typing <code>nav>ul>li*3>a</code> and getting a full navigation structure. That's Emmet!</p>
			<p><strong>Professional developers use Emmet every day.</strong> It can make you 10x faster at writing HTML and CSS. Once you learn it, you'll never want to hand-code HTML tags again!</p>`"
			:reflection-prompts="[
				'How much time do you spend typing opening and closing HTML tags?',
				'What if you could write complex HTML structures in seconds?',
				'Why do professional developers seem to code so much faster?'
			]"
			connection="In the next 20 minutes, you'll learn the productivity tool that professional developers rely on daily. This will change how you write code forever!"
		/>

		<!-- Hunter Element 2: Learning Objectives -->
		<LearningObjectives
			:objectives="[
				'Understand Emmet syntax and how abbreviations expand',
				'Master common Emmet shortcuts for rapid development',
				'Create nested elements and grouped structures instantly',
				'Use multiplication and automatic numbering',
				'Apply Emmet to real-world coding scenarios'
			]"
			purpose="Emmet is an industry-standard tool used by developers worldwide. Learning it will dramatically speed up your workflow and make you more productive. This is a skill that will save you hundreds of hours over your career."
		/>

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

		<!-- Hunter Element: Checkpoint -->
		<CheckpointBox
			:questions="checkpointQuestions"
		/>

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

		<!-- Hunter Element: Closure -->
		<ClosureSection
			:key-takeaways="closureKeyTakeaways"
			:objectives="closureObjectives"
			:reflection-prompts="closureReflectionPrompts"
			real-world-application="<p>Professional web developers use Emmet daily to scaffold HTML structures quickly. Whether building component templates, creating page layouts, or generating repetitive structures, Emmet is an essential tool in modern web development workflows.</p><p>Companies like Google, Microsoft, and Adobe incorporate Emmet into their development tools. Learning Emmet is a small time investment that pays dividends throughout your career, saving hours of repetitive typing and reducing syntax errors.</p>"
			next-steps="<p>Congratulations! You've completed the HTML Basics series. You've learned HTML elements, semantic structure, forms, document organization, and now productivity tools like Emmet. You have a solid foundation in HTML.</p><p>Next, you're ready to move into CSS Basics, where you'll learn to style and layout the HTML structures you've been creating. CSS brings your semantic HTML to life with colors, layouts, typography, and responsive design.</p>"
		/>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/html-basics/html-emmet'" />

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div class="completion-section mt-6">
			<h2 class="title is-3">
				<i class="fas fa-graduation-cap"></i> HTML Basics Series Complete!
			</h2>
			<div class="content">
				<p>
					Congratulations! You've completed the entire HTML Basics tutorial series. 
					You now have a solid foundation in HTML and are ready to move on to CSS!
				</p>

				<div class="box has-background-success-light mt-4">
					<h3 class="title is-4">
						<i class="fas fa-trophy mr-2"></i> What You've Accomplished
					</h3>
					<ul>
						<li><strong>8 tutorials completed</strong> covering all fundamental HTML concepts</li>
						<li>Learned to create <strong>semantic, accessible HTML</strong></li>
						<li>Built two complete projects: <strong>Black Swan Bistro</strong> and <strong>Rotto Rocks</strong></li>
						<li>Mastered the <strong>Emmet workflow</strong> for faster development</li>
					</ul>
				</div>

				<div class="box mt-4">
					<h3 class="title is-4">
						<i class="fas fa-external-link-alt mr-2"></i> Review Your Project Work
					</h3>
					<p class="mb-3">
						Take a look at the complete HTML reference versions to see how all the concepts
						you learned come together:
					</p>
					<div class="buttons">
						<a href="/projects/html-basics/black-swan-bistro/index.html" target="_blank" class="button is-primary">
							<span class="icon"><i class="fas fa-utensils"></i></span>
							<span>Black Swan Bistro - Complete HTML</span>
						</a>
						<a href="/projects/html-basics/rotto-rocks/index.html" target="_blank" class="button is-link">
							<span class="icon"><i class="fas fa-island-tropical"></i></span>
							<span>Rotto Rocks - Complete HTML</span>
						</a>
					</div>
					<p class="is-size-7 mt-2">
						<em>Compare your work with these reference implementations to reinforce your learning!</em>
					</p>
				</div>

				<div class="notification is-info mt-4">
					<h3 class="title is-5">
						<i class="fas fa-forward mr-2"></i> Next Steps: CSS Basics
					</h3>
					<p>
						Now that you have solid HTML foundation, it's time to learn CSS to make
						your websites beautiful! In the CSS Basics series, you'll style both
						projects and transform them from plain HTML into visually stunning sites.
					</p>
					<router-link to="/tutorials/beginner/css-basics" class="button is-info mt-3">
						<span class="icon"><i class="fab fa-css3-alt"></i></span>
						<span>Start CSS Basics</span>
					</router-link>
				</div>

				<div class="buttons mt-4">
					<router-link to="/tutorials" class="button is-light">
						<i class="fas fa-arrow-left mr-2"></i>
						Back to All Tutorials
					</router-link>
				</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script setup>
import { ref, inject } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const checkpointQuestions = [
	{
		question: 'What does the Emmet abbreviation "div>ul>li*3" expand to?',
		answer:
			'It creates a div containing a ul (unordered list) with 3 li (list items). The > operator creates child elements, and the * operator multiplies elements.',
	},
	{
		question: 'How do you add a class name to an element using Emmet?',
		answer:
			'Use a dot (.) after the element name, like "div.container" which creates <div class="container"></div>. Multiple classes can be chained: "div.container.main".',
	},
	{
		question: 'What is the difference between the + and > operators in Emmet?',
		answer:
			'The + operator creates sibling elements (at the same level), while the > operator creates child elements (nested inside). For example: "div>p+p" creates a div with two paragraph siblings inside it.',
	},
	{
		question: 'How can Emmet improve your HTML workflow?',
		answer:
			'Emmet dramatically speeds up HTML writing by expanding abbreviations into full HTML code, reducing typing, minimizing errors, and allowing you to scaffold complex structures quickly. It helps you focus on structure and content rather than typing tags.',
	},
];

const closureKeyTakeaways = [
	'Emmet is a productivity toolkit that expands abbreviations into full HTML/CSS code',
	'The > operator creates child elements, + creates siblings, and * multiplies elements',
	'Use . for classes, # for IDs, and [] for custom attributes in Emmet abbreviations',
	'Emmet is built into VS Code and most modern code editors, requiring no installation',
	'Mastering Emmet abbreviations can speed up your HTML/CSS workflow by 50% or more',
];

const closureObjectives = [
	'Understand what Emmet is and how it improves productivity',
	'Use Emmet abbreviations to quickly generate HTML structures',
	'Apply operators like >, +, *, (), and ^ to create complex nested structures',
	'Add classes, IDs, and attributes using Emmet shortcuts',
	'Practice common Emmet patterns for faster HTML development',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-bolt',
		title: 'Productivity Boost',
		questions: [
			'How much time could you save by using Emmet for repetitive HTML structures?',
			'Which Emmet abbreviations would be most useful for your projects?'
		],
		content:
			'Emmet transforms the way you write HTML. Instead of typing opening tags, closing tags, and attributes manually, you express structure as abbreviations and let Emmet handle the details. This lets you think at a higher level about document structure.',
	},
	{
		icon: 'fas fa-lightbulb',
		title: 'Learning Process',
		questions: [
			"What's the best way to memorize Emmet abbreviations?",
			'How can you practice Emmet to make it second nature?'
		],
		content:
			"Start with basic abbreviations and gradually incorporate more complex patterns. Use Emmet every day, even for simple structures. Within a few weeks, common patterns become muscle memory and you'll wonder how you ever coded without it.",
	},
];

// Get the pageSections array from the parent component (if provided)
const pageSections = inject('pageSections', null);

// Define the sections for this tutorial
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
