<template>
	<div class="container section">
		<div class="content tutorial-content">
			<!-- Breadcrumb -->
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
						<router-link to="/tutorials/getting-started"
							>Getting Started</router-link
						>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Text Editors</a>
					</li>
				</ul>
			</nav>

			<!-- Tutorial Metadata -->
			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Getting Started</span>
					<span class="tag is-success">Beginner</span>
				</div>
			</div>

			<h1>Text Editors</h1>

			<p>
				Learn about different text editors for web development and how to choose
				the right one for your needs.
			</p>

			<div class="box highlight-box">
				<strong>In this tutorial, you'll learn:</strong>
				<ul>
					<li>Introduction to Text Editors</li>
					<li>Types of Text Editors</li>
					<li>Key Features to Look For</li>
					<li>Visual Studio Code: A Closer Look</li>
					<li>Choosing the Right Editor</li>
					<li>Next Steps</li>
				</ul>
			</div>

			<h2 id="introduction">Introduction to Text Editors</h2>

			<p>
				A text editor is one of the most important tools in a web developer's
				toolkit. It's where you'll write your code, and the right editor can
				significantly improve your productivity and coding experience.
			</p>

			<h2 id="types-of-editors">Types of Text Editors</h2>

			<h3>Simple Text Editors</h3>
			<p>
				These are basic editors that come pre-installed on most operating
				systems:
			</p>
			<ul>
				<li><strong>Notepad</strong> (Windows)</li>
				<li><strong>TextEdit</strong> (macOS)</li>
				<li><strong>Gedit</strong> (Linux)</li>
			</ul>
			<p>
				While these can be used for coding, they lack features that make coding
				easier and more efficient.
			</p>

			<h3>Code Editors</h3>
			<p>
				These are specialized text editors designed specifically for writing
				code:
			</p>
			<ul>
				<li>
					<strong>Visual Studio Code</strong> - Free, open-source, highly
					extensible
				</li>
				<li><strong>Sublime Text</strong> - Fast, lightweight, paid license</li>
				<li><strong>Atom</strong> - Free, open-source, customizable</li>
				<li><strong>Notepad++</strong> - Free, lightweight, Windows-only</li>
			</ul>

			<h3>Integrated Development Environments (IDEs)</h3>
			<p>
				These are comprehensive development tools that include a text editor
				along with other features:
			</p>
			<ul>
				<li><strong>WebStorm</strong> - Specialized for web development</li>
				<li>
					<strong>Visual Studio</strong> - Microsoft's full IDE (not to be
					confused with VS Code)
				</li>
				<li><strong>PhpStorm</strong> - Specialized for PHP development</li>
			</ul>

			<h2 id="features">Key Features to Look For</h2>

			<div class="columns is-multiline">
				<div class="column is-6">
					<div class="box">
						<h4>Syntax Highlighting</h4>
						<p>
							Colors different parts of your code to make it more readable and
							help identify errors.
						</p>
					</div>
				</div>

				<div class="column is-6">
					<div class="box">
						<h4>Code Completion</h4>
						<p>Suggests code as you type, saving time and reducing errors.</p>
					</div>
				</div>

				<div class="column is-6">
					<div class="box">
						<h4>Multiple Cursors</h4>
						<p>Edit multiple parts of your code simultaneously.</p>
					</div>
				</div>

				<div class="column is-6">
					<div class="box">
						<h4>Extensions/Plugins</h4>
						<p>Add functionality to your editor to suit your specific needs.</p>
					</div>
				</div>

				<div class="column is-6">
					<div class="box">
						<h4>Git Integration</h4>
						<p>Work with version control directly from your editor.</p>
					</div>
				</div>

				<div class="column is-6">
					<div class="box">
						<h4>Debugging Tools</h4>
						<p>Find and fix errors in your code more easily.</p>
					</div>
				</div>
			</div>

			<h2 id="vs-code">Visual Studio Code: A Closer Look</h2>

			<p>
				Visual Studio Code (VS Code) has become one of the most popular text
				editors for web development. Here's why:
			</p>

			<h3>Getting Started with VS Code</h3>
			<ol>
				<li>
					Download and install VS Code from
					<a href="https://code.visualstudio.com/" target="_blank"
						>code.visualstudio.com</a
					>
				</li>
				<li>
					Install essential extensions for web development:
					<ul>
						<li>Live Server</li>
						<li>HTML CSS Support</li>
						<li>JavaScript (ES6) code snippets</li>
						<li>ESLint</li>
						<li>Prettier - Code formatter</li>
					</ul>
				</li>
				<li>Customize your settings to match your preferences</li>
			</ol>

			<h3>Useful Keyboard Shortcuts</h3>
			<div class="table-container">
				<table class="table is-bordered is-striped">
					<thead>
						<tr>
							<th>Action</th>
							<th>Windows/Linux</th>
							<th>macOS</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Save file</td>
							<td>Ctrl + S</td>
							<td>Cmd + S</td>
						</tr>
						<tr>
							<td>Copy line</td>
							<td>Shift + Alt + Up/Down</td>
							<td>Shift + Option + Up/Down</td>
						</tr>
						<tr>
							<td>Multiple cursors</td>
							<td>Ctrl + Alt + Up/Down</td>
							<td>Cmd + Option + Up/Down</td>
						</tr>
						<tr>
							<td>Find</td>
							<td>Ctrl + F</td>
							<td>Cmd + F</td>
						</tr>
						<tr>
							<td>Replace</td>
							<td>Ctrl + H</td>
							<td>Cmd + Option + F</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2 id="choosing">Choosing the Right Editor</h2>

			<p>
				The "best" text editor is subjective and depends on your specific needs
				and preferences. Consider these factors:
			</p>
			<ul>
				<li>
					<strong>Learning curve</strong>: Some editors are more
					beginner-friendly than others
				</li>
				<li>
					<strong>Performance</strong>: Consider how the editor performs on your
					computer
				</li>
				<li>
					<strong>Features</strong>: Make sure it has the features you need
				</li>
				<li>
					<strong>Community support</strong>: A large community means more
					resources and extensions
				</li>
				<li>
					<strong>Cost</strong>: Many great editors are free, but some premium
					options offer additional features
				</li>
			</ul>

			<div class="notification is-info is-light mt-4">
				<p>
					<strong>💡 Pro Tip:</strong> Don't be afraid to try different editors
					to find the one that works best for you. Many developers switch
					editors multiple times throughout their careers as their needs change.
				</p>
			</div>

			<h2 id="next-steps">Next Steps</h2>

			<p>
				Now that you understand the importance of choosing the right text
				editor, you're ready to move on to learning about browser development
				tools, which will help you debug and test your web pages.
			</p>
		</div>
	</div>
</template>

<script setup>
import { usePageSections } from '@/composables/usePageSections';

const frontmatter = {
	title: 'Text Editors',
	description:
		'Learn about different text editors for web development and how to choose the right one for your needs.',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'text editors'],
};

const sections = [
	{
		id: 'introduction',
		title: 'Introduction to Text Editors',
		subsections: [],
	},
	{
		id: 'types-of-editors',
		title: 'Types of Text Editors',
		subsections: [
			{ id: 'simple-editors', title: 'Simple Text Editors' },
			{ id: 'code-editors', title: 'Code Editors' },
			{ id: 'ides', title: 'Integrated Development Environments (IDEs)' },
		],
	},
	{
		id: 'features',
		title: 'Key Features to Look For',
		subsections: [],
	},
	{
		id: 'vs-code',
		title: 'Visual Studio Code: A Closer Look',
		subsections: [
			{ id: 'getting-started-vs-code', title: 'Getting Started with VS Code' },
			{ id: 'keyboard-shortcuts', title: 'Useful Keyboard Shortcuts' },
		],
	},
	{
		id: 'choosing',
		title: 'Choosing the Right Editor',
		subsections: [],
	},
	{
		id: 'next-steps',
		title: 'Next Steps',
		subsections: [],
	},
];

const { pageSections } = usePageSections(sections);
</script>

<style scoped>
.tutorial-content {
	max-width: 800px;
	margin: 0 auto;
}

.tutorial-meta {
	margin: 2rem 0;
}

.image-container {
	margin: 2rem 0;
	text-align: center;
}

.image-container img {
	max-width: 100%;
	height: auto;
}

.extensions-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1rem;
	margin: 2rem 0;
}

.extension-box {
	padding: 1rem;
	background-color: #f5f5f5;
}

.extension-box h3 {
	margin-bottom: 0.5rem;
	color: var(--color-primary);
}

.shortcuts-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;
	margin-top: 1rem;
}

.shortcut {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.shortcut code {
	background-color: #f0f0f0;
	padding: 0.2rem 0.4rem;
	border-radius: 4px;
}

.code-examples .example {
	margin-bottom: 1.5rem;
}

.code-examples .example:last-child {
	margin-bottom: 0;
}

pre {
	background: #f4f4f4;
	padding: 1rem;
	border-radius: 4px;
	margin: 1rem 0;
	overflow-x: auto;
}

.box.highlight-box {
	background-color: #f5f5f5;
}

.tutorial-navigation {
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
	padding-top: 2rem;
	border-top: 1px solid #eee;
}

.box.info-box {
	background-color: #f0f7ff;
	border-left: 4px solid #3273dc;
}

.info-box a {
	color: #3273dc;
	text-decoration: underline;
}

.info-box a:hover {
	color: #363636;
}

.table-container {
	overflow-x: auto;
}

.table {
	width: 100%;
}
</style>
