<script setup>
import { onMounted } from 'vue';
import { usePageSections } from '@/composables/usePageSections';

const frontmatter = {
	title: 'Browser Development Tools',
	description: 'Learn how to use browser developer tools for web development',
	difficulty: 'Beginner',
	duration: '20 minutes',
	tags: ['Tools', 'Browser', 'Development'],
};

const sections = [
	{
		id: 'introduction',
		title: 'Introduction to Browser Tools',
		subsections: [],
	},
	{
		id: 'elements-panel',
		title: 'Elements Panel',
		subsections: [
			{ id: 'dom-inspection', title: 'DOM Inspection' },
			{ id: 'css-inspection', title: 'CSS Inspection' },
		],
	},
	{
		id: 'console-panel',
		title: 'Console Panel',
		subsections: [
			{ id: 'logging', title: 'Logging Messages' },
			{ id: 'error-handling', title: 'Error Handling' },
		],
	},
	{
		id: 'network-panel',
		title: 'Network Panel',
		subsections: [
			{ id: 'request-monitoring', title: 'Request Monitoring' },
			{ id: 'performance-analysis', title: 'Performance Analysis' },
		],
	},
	{
		id: 'application-panel',
		title: 'Application Panel',
		subsections: [
			{ id: 'storage', title: 'Storage Inspection' },
			{ id: 'cache', title: 'Cache Management' },
		],
	},
	{
		id: 'responsive-design',
		title: 'Responsive Design Mode',
		subsections: [],
	},
	{
		id: 'summary',
		title: 'Summary',
		subsections: [],
	},
];

const { pageSections } = usePageSections(sections);

onMounted(() => {
	// Any initialization code
});
</script>

<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/getting-started"
						>Getting Started</router-link
					>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Browser Development Tools</a>
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
				<i class="fa-solid fa-wrench tool-icon"></i>
				{{ frontmatter.title }}
			</h1>
			<p class="subtitle is-4">{{ frontmatter.description }}</p>
		</header>

		<!-- Tutorial Content -->
		<div class="tutorial-content">
			<section id="introduction" class="mb-6">
				<h2 class="title is-2">Introduction to Browser Tools</h2>
				<p>
					Browser developer tools are built-in features in modern web browsers
					that help developers inspect, debug, and optimize websites. These
					tools provide insights into the HTML, CSS, JavaScript, and network
					activity of a web page.
				</p>
				<p>
					In this tutorial, we'll explore the most important features of browser
					developer tools and how they can help you become a more efficient web
					developer.
				</p>
				<div class="notification is-info is-light">
					<p>
						<strong>Note:</strong> While the developer tools in Chrome, Firefox,
						Safari, and Edge have similar features, there might be slight
						differences in their interfaces. This tutorial primarily focuses on
						Chrome DevTools, but the concepts apply to all modern browsers.
					</p>
				</div>
			</section>

			<section id="elements-panel" class="mb-6">
				<h2 class="title is-2">Elements Panel</h2>
				<p>
					The Elements panel allows you to inspect and modify the DOM (Document
					Object Model) and CSS of a web page in real-time.
				</p>

				<div id="dom-inspection" class="mb-5">
					<h3 class="title is-3">DOM Inspection</h3>
					<p>
						The DOM tree view shows the HTML structure of the current page. You
						can:
					</p>
					<ul>
						<li>Hover over elements to highlight them on the page</li>
						<li>Click on elements to select them</li>
						<li>Edit HTML by double-clicking on elements</li>
						<li>Delete elements by selecting and pressing Delete</li>
						<li>Drag elements to reorder them</li>
					</ul>
					<div class="box">
						<h4 class="title is-4">How to Access the Elements Panel</h4>
						<ol>
							<li>
								Right-click on any element on a web page and select "Inspect" or
								"Inspect Element"
							</li>
							<li>
								Or press F12 (Windows/Linux) or Cmd+Option+I (Mac) to open
								DevTools, then click on the "Elements" tab
							</li>
						</ol>
					</div>
				</div>

				<div id="css-inspection" class="mb-5">
					<h3 class="title is-3">CSS Inspection</h3>
					<p>
						The Styles pane shows all CSS rules applied to the selected element.
						You can:
					</p>
					<ul>
						<li>See which CSS rules are applied and which are overridden</li>
						<li>Edit CSS properties and values in real-time</li>
						<li>Add new CSS properties</li>
						<li>Toggle CSS properties on and off</li>
						<li>View the CSS box model</li>
					</ul>
					<div class="notification is-warning is-light">
						<p>
							<strong>Remember:</strong> Changes made in the developer tools are
							temporary and will be lost when you refresh the page. Make sure to
							copy any changes you want to keep to your actual CSS files.
						</p>
					</div>
				</div>
			</section>

			<section id="console-panel" class="mb-6">
				<h2 class="title is-2">Console Panel</h2>
				<p>
					The Console panel is a JavaScript command line and log viewer. It's
					essential for debugging JavaScript code.
				</p>

				<div id="logging" class="mb-5">
					<h3 class="title is-3">Logging Messages</h3>
					<p>You can use various console methods to log information:</p>
					<pre><code>// Basic logging
console.log('Hello, world!');

// Information
console.info('This is an informational message');

// Warnings
console.warn('This is a warning');

// Errors
console.error('This is an error message');

// Tabular data
console.table([
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
]);</code></pre>
					<p>
						These messages will appear in the Console panel, helping you
						understand what's happening in your code.
					</p>
				</div>

				<div id="error-handling" class="mb-5">
					<h3 class="title is-3">Error Handling</h3>
					<p>
						The Console automatically displays JavaScript errors that occur on
						your page. Each error includes:
					</p>
					<ul>
						<li>A description of the error</li>
						<li>The file and line number where the error occurred</li>
						<li>
							A stack trace showing the sequence of function calls that led to
							the error
						</li>
					</ul>
					<p>
						You can click on the file name and line number to jump directly to
						the source code in the Sources panel.
					</p>
				</div>
			</section>

			<section id="network-panel" class="mb-6">
				<h2 class="title is-2">Network Panel</h2>
				<p>
					The Network panel shows all network requests made by the browser,
					allowing you to analyze network performance and debug request issues.
				</p>

				<div id="request-monitoring" class="mb-5">
					<h3 class="title is-3">Request Monitoring</h3>
					<p>The Network panel displays a list of all requests, including:</p>
					<ul>
						<li>HTML, CSS, JavaScript, and image files</li>
						<li>API calls and AJAX requests</li>
						<li>WebSocket connections</li>
					</ul>
					<p>For each request, you can see:</p>
					<ul>
						<li>Status code (200, 404, 500, etc.)</li>
						<li>Request and response headers</li>
						<li>Request and response body</li>
						<li>Timing information</li>
					</ul>
				</div>

				<div id="performance-analysis" class="mb-5">
					<h3 class="title is-3">Performance Analysis</h3>
					<p>The Network panel provides valuable performance metrics:</p>
					<ul>
						<li>Total number of requests</li>
						<li>Total transferred data size</li>
						<li>Page load time</li>
						<li>DOMContentLoaded and Load event timings</li>
						<li>Waterfall chart showing request timing</li>
					</ul>
					<div class="box">
						<h4 class="title is-4">Performance Tips</h4>
						<ul>
							<li>Minimize the number of requests</li>
							<li>Reduce file sizes through compression and optimization</li>
							<li>Use browser caching effectively</li>
							<li>Prioritize critical resources</li>
						</ul>
					</div>
				</div>
			</section>

			<section id="application-panel" class="mb-6">
				<h2 class="title is-2">Application Panel</h2>
				<p>
					The Application panel helps you inspect and manage storage used by a
					web page, including cookies, local storage, and caching.
				</p>

				<div id="storage" class="mb-5">
					<h3 class="title is-3">Storage Inspection</h3>
					<p>You can inspect and modify various types of storage:</p>
					<ul>
						<li>
							<strong>Local Storage:</strong> Key-value pairs that persist
							across browser sessions
						</li>
						<li>
							<strong>Session Storage:</strong> Key-value pairs that last for
							the duration of the page session
						</li>
						<li>
							<strong>Cookies:</strong> Small pieces of data stored by the
							browser
						</li>
						<li>
							<strong>IndexedDB:</strong> A more powerful client-side database
						</li>
					</ul>
					<p>
						This is useful for debugging authentication issues, user
						preferences, and other client-side data storage.
					</p>
				</div>

				<div id="cache" class="mb-5">
					<h3 class="title is-3">Cache Management</h3>
					<p>The Application panel allows you to:</p>
					<ul>
						<li>View and clear the browser cache</li>
						<li>Inspect Service Worker activity</li>
						<li>Manage Cache Storage API entries</li>
						<li>Test offline functionality</li>
					</ul>
					<p>
						These features are particularly useful when developing Progressive
						Web Apps (PWAs) or implementing caching strategies.
					</p>
				</div>
			</section>

			<section id="responsive-design" class="mb-6">
				<h2 class="title is-2">Responsive Design Mode</h2>
				<p>
					The responsive design mode (or device mode) allows you to test how
					your website looks and behaves on different screen sizes and devices.
				</p>
				<p>Key features include:</p>
				<ul>
					<li>Simulating various device screen sizes</li>
					<li>Testing different device pixel ratios</li>
					<li>Emulating touch events</li>
					<li>Throttling network connections to simulate slower speeds</li>
					<li>Testing media queries</li>
				</ul>
				<div class="notification is-info is-light">
					<p>
						<strong>Tip:</strong> While the device mode is useful for quick
						testing, always test your website on actual devices when possible,
						as emulation can't perfectly replicate all device behaviors.
					</p>
				</div>
			</section>

			<section id="summary" class="mb-6">
				<h2 class="title is-2">Summary</h2>
				<p>
					Browser developer tools are essential for modern web development. They
					help you:
				</p>
				<ul>
					<li>Inspect and modify HTML and CSS in real-time</li>
					<li>Debug JavaScript code using the console</li>
					<li>Analyze network performance and requests</li>
					<li>Manage client-side storage</li>
					<li>Test responsive designs across different devices</li>
				</ul>
				<p>
					Becoming proficient with these tools will significantly improve your
					development workflow and help you create better websites.
				</p>
				<div class="box">
					<h3 class="title is-4">Next Steps</h3>
					<p>To continue learning about development tools:</p>
					<ul>
						<li>
							Explore the Performance and Memory panels for advanced debugging
						</li>
						<li>Learn about browser extensions that enhance developer tools</li>
						<li>Practice using keyboard shortcuts to speed up your workflow</li>
						<li>
							Check out browser-specific documentation for unique features
						</li>
					</ul>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
.tool-icon {
	color: #ff6b6b;
	margin-right: 0.5rem;
}

.tutorial-header {
	margin-bottom: 3rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid var(--color-border);
}

pre {
	background-color: #f5f5f5;
	border-radius: 4px;
	padding: 1rem;
	overflow-x: auto;
}

code {
	font-family: 'Courier New', Courier, monospace;
}

.box {
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
}
</style>
