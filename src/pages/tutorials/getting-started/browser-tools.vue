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

			<!-- Anticipatory Set -->
			<section class="anticipatory-set">
				<div class="box engagement-hook">
					<h3>🎯 Start Here</h3>
					<p>Imagine being a detective investigating a crime scene, but instead of clues, you're hunting for why a website looks broken or why a button won't click. That's exactly what browser developer tools let you do!</p>
					<p>Every professional developer spends hours in DevTools every day. It's like having X-ray vision for websites—you can see exactly how they're built, what's broken, and how to fix it.</p>
					
					<div class="reflection-prompt">
						<strong>Quick Reflection:</strong>
						<ul>
							<li>Have you ever seen a website with something broken and wondered "why does this look weird?"</li>
							<li>What if you could peek "under the hood" of any website and see exactly how it works?</li>
						</ul>
						<p><em>That's what you'll learn today—and it's easier than you think!</em></p>
					</div>
				</div>
			</section>

			<!-- Learning Objectives -->
			<section class="objectives">
				<div class="box highlight-box">
					<h3><i class="fas fa-graduation-cap"></i> Learning Objectives</h3>
					<p><strong>By the end of this lesson, you'll be able to:</strong></p>
					<ul class="objectives-list">
						<li>✓ <strong>Open</strong> DevTools using multiple methods (right-click, keyboard, menu)</li>
						<li>✓ <strong>Inspect</strong> HTML elements and modify styles in real-time using the Elements panel</li>
						<li>✓ <strong>Debug</strong> JavaScript using the Console panel</li>
						<li>✓ <strong>Analyze</strong> network requests and page loading performance</li>
						<li>✓ <strong>Test</strong> responsive designs using the Device Toolbar</li>
					</ul>
					
					<div class="purpose-statement">
						<h4><i class="fas fa-lightbulb"></i> Why This Matters:</h4>
						<p>DevTools are the most important tool in a web developer's arsenal. They help you understand how websites work, debug problems in seconds instead of hours, and learn from the best websites on the internet. Every single professional developer uses these tools daily—they're not optional, they're essential.</p>
					</div>
				</div>
			</section>

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

			<!-- Checkpoint #1 -->
			<section class="check-understanding">
				<div class="box checkpoint">
					<h3>⏸️ Quick Check: Opening DevTools</h3>
					<p><strong>Can you open DevTools right now?</strong></p>
					<ol class="checkpoint-questions">
						<li>What are 3 different ways to open Developer Tools?</li>
						<li>Try opening DevTools on this page right now. Which method did you use?</li>
					</ol>
					
					<details>
						<summary class="button is-info is-light mt-3"><i class="fas fa-eye"></i> Check Your Answers</summary>
						<div class="answer-key mt-3">
							<ol>
								<li><strong>Answer:</strong> (1) Right-click → Inspect, (2) F12 or Ctrl+Shift+I (Cmd+Option+I on Mac), (3) Browser menu (Tools → Developer Tools)</li>
								<li><strong>Answer:</strong> Any method works! Most developers prefer keyboard shortcuts because they're fastest. F12 is the universal shortcut across all browsers.</li>
							</ol>
						</div>
					</details>
					
					<div class="self-assessment mt-4">
						<p><strong>How confident are you with this?</strong></p>
						<p class="confidence-scale">😕 Need to practice | 🤔 Got it once | 😊 Can do it easily | 🎉 Can teach someone else!</p>
					</div>
				</div>
			</section>

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

			<!-- Checkpoint #2 -->
			<section class="check-understanding">
				<div class="box checkpoint">
					<h3>⏸️ Pause & Check: Understanding DevTools Panels</h3>
					<p><strong>Test your understanding of the key features:</strong></p>
					<ol class="checkpoint-questions">
						<li>Which panel would you use to change the color of text on a webpage?</li>
						<li>Where would you go to see JavaScript errors?</li>
						<li>If you want to see how long it takes an image to load, which panel helps with that?</li>
					</ol>
					
					<details>
						<summary class="button is-info is-light mt-3"><i class="fas fa-eye"></i> Check Your Answers</summary>
						<div class="answer-key mt-3">
							<ol>
								<li><strong>Answer:</strong> Elements panel—it shows HTML and CSS, letting you inspect and modify styles in real-time.</li>
								<li><strong>Answer:</strong> Console panel—it displays all JavaScript errors, warnings, and log messages.</li>
								<li><strong>Answer:</strong> Network panel—it monitors all network requests and shows loading times, file sizes, and performance data.</li>
							</ol>
						</div>
					</details>
				</div>
			</section>

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

<style scoped>
/* Hunter Framework Styles */
.anticipatory-set {
	margin: 2rem 0;
}

.engagement-hook {
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	border: none;
	padding: 1.5rem;
}

.engagement-hook h3 {
	color: white;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.reflection-prompt {
	background: rgba(255, 255, 255, 0.1);
	padding: 1rem;
	border-radius: 8px;
	margin-top: 1rem;
}

.reflection-prompt strong {
	color: #ffd700;
	font-size: 1.1rem;
}

.reflection-prompt ul {
	margin: 0.75rem 0;
	margin-left: 1.5rem;
}

.reflection-prompt li {
	margin: 0.5rem 0;
}

.objectives {
	margin: 2rem 0;
}

.objectives-list {
	list-style: none;
	padding-left: 0;
	margin: 1rem 0;
}

.objectives-list li {
	padding: 0.75rem 0;
	padding-left: 1.5rem;
	position: relative;
	line-height: 1.6;
}

.purpose-statement {
	background: #fff9e6;
	padding: 1rem;
	border-radius: 8px;
	margin-top: 1rem;
	border-left: 4px solid #ffd700;
}

.purpose-statement h4 {
	color: #d97706;
	margin-bottom: 0.5rem;
	font-size: 1.1rem;
	font-weight: bold;
}

.purpose-statement p {
	color: #78350f;
	line-height: 1.6;
}

.check-understanding {
	margin: 3rem 0;
}

.checkpoint {
	background: #f0f9ff;
	border-left: 4px solid #3b82f6;
	padding: 1.5rem;
	border-radius: 8px;
}

.checkpoint h3 {
	color: #1e40af;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.checkpoint-questions {
	margin: 1rem 0;
	margin-left: 1.5rem;
}

.checkpoint-questions li {
	margin: 0.75rem 0;
	line-height: 1.6;
}

.answer-key {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	border: 2px solid #3b82f6;
}

.answer-key ol {
	margin-left: 1.5rem;
}

.answer-key li {
	margin: 0.75rem 0;
	line-height: 1.6;
}

.self-assessment {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	text-align: center;
}

.confidence-scale {
	font-size: 1.1rem;
	margin-top: 0.5rem;
}

.practice-guided {
	background: #f0fdf4;
	border-left: 4px solid #22c55e;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 2rem 0;
}

.practice-guided h3 {
	color: #15803d;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.practice-guided > p {
	margin-bottom: 1.5rem;
	line-height: 1.6;
}

.steps {
	margin: 1.5rem 0;
}

.step-item {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-bottom: 1.5rem;
	border: 1px solid #e5e7eb;
}

.step-item:last-child {
	margin-bottom: 0;
}

.step-item h4 {
	color: #15803d;
	margin-bottom: 0.75rem;
	font-size: 1.25rem;
	font-weight: bold;
}

.hint-box {
	margin-top: 1rem;
	padding: 0.75rem;
	background: #fef3c7;
	border-radius: 4px;
}

.hint-box details summary {
	cursor: pointer;
	color: #92400e;
	font-weight: 600;
	list-style: none;
}

.hint-box details summary::-webkit-details-marker {
	display: none;
}

.hint-box details[open] {
	padding: 0.5rem;
}

.hint-content {
	margin-top: 0.75rem;
	padding-left: 0.5rem;
}

.hint {
	margin: 0.5rem 0;
	padding: 0.5rem;
	background: white;
	border-radius: 4px;
	line-height: 1.6;
}

.success-criteria {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	margin-top: 1.5rem;
	border: 2px solid #22c55e;
}

.success-criteria h4 {
	color: #15803d;
	margin-bottom: 0.75rem;
	font-size: 1.1rem;
	font-weight: bold;
}

.success-criteria ul {
	list-style: none;
	padding-left: 0;
	margin: 0;
}

.success-criteria li {
	padding: 0.25rem 0;
	padding-left: 1.5rem;
	position: relative;
}

.practice-independent {
	background: #fef2f2;
	border-left: 4px solid #dc2626;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 2rem 0;
}

.practice-independent h3 {
	color: #991b1b;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.practice-independent > p {
	margin-bottom: 1.5rem;
	line-height: 1.6;
}

.challenge-box {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 1rem 0;
	border: 1px solid #fecaca;
}

.challenge-box h4, .challenge-box h5 {
	color: #991b1b;
	margin-bottom: 0.75rem;
	font-size: 1.25rem;
	font-weight: bold;
}

.challenge-box h5 {
	font-size: 1.1rem;
}

.requirements ul, .stretch-goals ul {
	margin-left: 1.5rem;
}

.requirements li, .stretch-goals li {
	margin: 0.5rem 0;
	line-height: 1.6;
}

.stretch-goals {
	padding-top: 1rem;
	border-top: 1px dashed #fca5a5;
}

.rubric {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-top: 1rem;
	border: 2px solid #dc2626;
}

.rubric h4 {
	margin-bottom: 1rem;
	color: #991b1b;
	font-size: 1.25rem;
	font-weight: bold;
}

.rubric table {
	width: 100%;
	margin-top: 0.5rem;
}

.rubric th {
	background: #fee2e2;
	color: #991b1b;
	font-weight: bold;
	padding: 0.75rem;
}

.rubric td {
	padding: 0.75rem;
	line-height: 1.6;
}

.rubric tr:nth-child(even) {
	background: #fef2f2;
}

.closure {
	margin: 3rem 0;
}

.closure-section {
	background: linear-gradient(135deg, #10b981 0%, #059669 100%);
	color: white;
	border: none;
	padding: 2rem;
	border-radius: 8px;
}

.closure-section h2, .closure-section h3 {
	color: white;
	margin-bottom: 1rem;
}

.closure-section h2 {
	font-size: 1.75rem;
	font-weight: bold;
}

.closure-section h3 {
	font-size: 1.5rem;
	font-weight: bold;
}

.key-takeaways, .objectives-review, .reflection-prompts {
	background: rgba(255, 255, 255, 0.1);
	padding: 1.5rem;
	border-radius: 8px;
}

.key-takeaways ul, .objectives-review ul {
	list-style: none;
	padding-left: 0;
	margin: 1rem 0;
}

.key-takeaways li, .objectives-checklist li {
	padding: 0.5rem 0;
	padding-left: 1.5rem;
	position: relative;
	line-height: 1.6;
}

.key-takeaways li:before {
	content: '→';
	position: absolute;
	left: 0;
	color: #ffd700;
	font-weight: bold;
	font-size: 1.2rem;
}

.objectives-review p {
	margin: 0.5rem 0;
	line-height: 1.6;
}

.reflection-questions {
	margin-top: 1rem;
}

.question-card {
	background: white;
	color: #1f2937;
	padding: 1.5rem;
	border-radius: 8px;
	border-left: 4px solid #10b981;
	margin-bottom: 1rem;
}

.question-card:last-child {
	margin-bottom: 0;
}

.question-card strong {
	color: #059669;
	font-size: 1.1rem;
}

.question-card ul, .question-card ol {
	margin: 0.75rem 0;
	margin-left: 1.5rem;
}

.question-card li {
	margin: 0.5rem 0;
	line-height: 1.6;
}

.question-card p {
	line-height: 1.6;
}
</style>