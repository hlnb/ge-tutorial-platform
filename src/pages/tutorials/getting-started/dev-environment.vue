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
						<a href="#" aria-current="page">Development Setup</a>
					</li>
				</ul>
			</nav>

			<!-- Tutorial Metadata -->
			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Beginner</span>
					<span class="tag is-light">45 minutes</span>
					<span class="tag is-light">Setup</span>
					<span class="tag is-light">Tools</span>
				</div>
			</div>

			<h1>Setting Up Your Development Environment</h1>

			<p>
				A proper development environment helps you write, test, and debug code
				efficiently. Let's set up the essential tools you'll need.
			</p>

			<h2 id="web-browser">Web Browser</h2>
			<p>
				A modern web browser is your primary tool for viewing and testing
				websites.
			</p>

			<h3>Recommended Browser: Google Chrome</h3>
			<ol>
				<li>
					Download from
					<a href="https://www.google.com/chrome/" target="_blank"
						>chrome.google.com</a
					>
				</li>
				<li>Install following your system's standard process</li>
				<li>Make Chrome your default browser (recommended)</li>
			</ol>

			<div class="notification is-info is-light">
				<strong>Alternative Browsers</strong><br />
				While we use Chrome in these tutorials, you can also use:
				<ul>
					<li>Firefox</li>
					<li>Safari (Mac)</li>
					<li>Microsoft Edge</li>
				</ul>
			</div>

			<h2 id="code-editor">Code Editor</h2>
			<p>
				Visual Studio Code (VS Code) is a free, powerful editor for web
				development.
			</p>

			<h3 id="installing-vs-code">Installing VS Code</h3>
			<ol>
				<li>
					Visit
					<a href="https://code.visualstudio.com/" target="_blank"
						>code.visualstudio.com</a
					>
				</li>
				<li>Download the version for your operating system</li>
				<li>Install with default settings</li>
			</ol>

			<h3 id="essential-vs-code-extensions">Essential VS Code Extensions</h3>
			<p>Install these extensions to enhance your coding experience:</p>

			<ol>
				<li>
					<strong>Live Server</strong>
					<ul>
						<li>Click the Extensions icon (or press Ctrl+Shift+X)</li>
						<li>Search for "Live Server"</li>
						<li>Click Install</li>
					</ul>
				</li>
				<li>
					<strong>HTML CSS Support</strong>
					<ul>
						<li>Search for "HTML CSS Support"</li>
						<li>Click Install</li>
					</ul>
				</li>
				<li>
					<strong>Auto Rename Tag</strong>
					<ul>
						<li>Search for "Auto Rename Tag"</li>
						<li>Click Install</li>
					</ul>
				</li>
			</ol>
		</div>
	</div>
</template>

<script setup>
import { usePageSections } from '@/composables/usePageSections';

const frontmatter = {
	title: 'Setting Up Your Development Environment',
	description: 'Learn how to set up your development environment',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'development environment'],
};

const sections = [
	{
		id: 'web-browser',
		title: 'Web Browser',
	},
	{
		id: 'code-editor',
		title: 'Code Editor',
	},
	{
		id: 'installing-vs-code',
		title: 'Installing VS Code',
	},
	{
		id: 'essential-vs-code-extensions',
		title: 'Essential VS Code Extensions',
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

.notification {
	margin: 2rem 0;
}

.tutorial-navigation {
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
	padding-top: 2rem;
	border-top: 1px solid #eee;
}

.highlight-box {
	background: #f5f5f5;
	padding: 1.5rem;
	border-radius: 4px;
	margin: 2rem 0;
}

code {
	background: #f4f4f4;
	padding: 0.2em 0.4em;
	border-radius: 3px;
}

pre {
	background: #f4f4f4;
	padding: 1rem;
	border-radius: 4px;
	overflow-x: auto;
}
</style>
