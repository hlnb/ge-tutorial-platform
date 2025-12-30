<template>
	<div class="container section">
		<div class="content">
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
						<router-link :to="'/tutorials/getting-started/'"
							>Getting Started</router-link
						>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Browser Developer Tools</a>
					</li>
				</ul>
			</nav>

			<div class="tags mb-4">
				<span class="tag is-info">Beginner</span>
				<span class="tag is-light">30 mins</span>
				<span class="tag is-success">Practice</span>
				<span class="tag is-light">Tools</span>
			</div>

			<h1 class="title is-1">Browser Developer Tools</h1>

			<div class="box box-info mb-6">
				<p>
					<strong>🎯 Goal:</strong> Learn how to use browser developer tools to
					inspect, debug, and test web pages.
				</p>
			</div>

			<h2 id="what-are-browser-developer-tools" class="title is-3">
				What are Browser Developer Tools?
			</h2>
			<p>
				Browser Developer Tools (DevTools) are built-in features in modern web
				browsers that help developers inspect, debug, and optimize websites.
				They provide essential tools for:
			</p>
			<ul>
				<li>Inspecting and modifying HTML/CSS</li>
				<li>Debugging JavaScript</li>
				<li>Analyzing network requests</li>
				<li>Testing responsive designs</li>
				<li>Measuring performance</li>
			</ul>

			<h2 id="opening-devtools" class="title is-3">Opening DevTools</h2>
			<p>There are several ways to open DevTools:</p>
			<ul>
				<li>
					<strong>Right-click and Inspect:</strong> Right-click any element on a
					webpage and select "Inspect" or "Inspect Element"
				</li>
				<li>
					<strong>Keyboard shortcuts:</strong>
					<ul>
						<li>Windows/Linux: F12 or Ctrl + Shift + I</li>
						<li>macOS: Cmd + Option + I</li>
					</ul>
				</li>
				<li>
					<strong>Browser menu:</strong> Access through the browser's menu
					system (varies by browser)
				</li>
			</ul>

			<h2 id="key-features" class="title is-3">Key Features</h2>

			<h3 id="elements-panel" class="title is-4">Elements Panel</h3>
			<p>
				The Elements panel shows the HTML structure and CSS styles of the
				current page:
			</p>
			<ul>
				<li>Inspect and modify HTML elements</li>
				<li>View and edit CSS styles in real-time</li>
				<li>See box model dimensions</li>
				<li>Check element properties</li>
			</ul>

			<h3 id="console-panel" class="title is-4">Console Panel</h3>
			<p>The Console panel is useful for:</p>
			<ul>
				<li>Viewing JavaScript errors and warnings</li>
				<li>Testing JavaScript code</li>
				<li>Logging debugging information</li>
				<li>Interacting with the page's JavaScript</li>
			</ul>

			<h3 id="network-panel" class="title is-4">Network Panel</h3>
			<p>The Network panel helps you:</p>
			<ul>
				<li>Monitor network requests</li>
				<li>Analyze loading performance</li>
				<li>Debug request/response issues</li>
				<li>Test different network conditions</li>
			</ul>

			<h3 id="device-toolbar" class="title is-4">Device Toolbar</h3>
			<p>The Device Toolbar allows you to:</p>
			<ul>
				<li>Test responsive designs</li>
				<li>Simulate different screen sizes</li>
				<li>Test mobile-specific features</li>
			</ul>

			<h2 id="practice-exercise" class="title is-3">Practice Exercise</h2>
			<div class="box">
				<p>Try these tasks to practice using DevTools:</p>
				<ol>
					<li>Open DevTools on this page</li>
					<li>Use the Elements panel to inspect this list</li>
					<li>Try modifying some text or styles</li>
					<li>Open the Console and try some JavaScript commands</li>
					<li>Use the Device Toolbar to view the page in mobile size</li>
				</ol>
			</div>

			<h2 id="additional-resources" class="title is-3">Additional Resources</h2>
			<ul>
				<li>
					<a
						href="https://developer.chrome.com/docs/devtools/"
						target="_blank"
						rel="noopener noreferrer"
						>Chrome DevTools Documentation</a
					>
				</li>
				<li>
					<a
						href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools"
						target="_blank"
						rel="noopener noreferrer"
						>MDN Web Docs: Browser Developer Tools</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { usePageSections } from '@/composables/usePageSections';

useHead({
	title: 'Browser Developer Tools - GraphitEdge Tutorials',
	meta: [
		{
			name: 'description',
			content:
				'Learn how to use browser developer tools to inspect, debug, and test web pages',
		},
	],
});

const frontmatter = {
	title: 'Browser Developer Tools',
	description:
		'Learn how to use browser developer tools to inspect, debug, and test web pages.',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'browser developer tools'],
};

const sections = [
	{
		id: 'what-are-browser-developer-tools',
		title: 'What are Browser Developer Tools?',
		subsections: [],
	},
	{
		id: 'opening-devtools',
		title: 'Opening DevTools',
		subsections: [],
	},
	{
		id: 'key-features',
		title: 'Key Features',
		subsections: [
			{ id: 'elements-panel', title: 'Elements Panel' },
			{ id: 'console-panel', title: 'Console Panel' },
			{ id: 'network-panel', title: 'Network Panel' },
			{ id: 'device-toolbar', title: 'Device Toolbar' },
		],
	},
	{
		id: 'practice-exercise',
		title: 'Practice Exercise',
		subsections: [],
	},
	{
		id: 'additional-resources',
		title: 'Additional Resources',
		subsections: [],
	},
];

const { pageSections } = usePageSections(sections);
</script>
