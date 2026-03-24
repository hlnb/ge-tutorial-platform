<template>
	<div class="container section">
		<div class="tutorial-content">
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

			<!-- Hunter Element 1: Anticipatory Set -->
			<AnticipatorySet
				title="Start Here"
				:hook="`<p>Imagine an artist without a canvas, or a carpenter without tools. As a web developer, your tools are just as important as your skills!</p><p>Your development environment is the foundation of everything you'll build. Setting it up correctly from the start will save you countless hours of frustration.</p>`"
				:reflection-prompts="[
					'Have you ever tried to code in a plain text editor like Notepad? What was difficult about it?',
					'What makes a workspace comfortable and productive for you?'
				]"
				connection="By the end of this lesson, you'll have a professional development setup that makes coding a joy!"
			/>

			<!-- Hunter Element 2: Learning Objectives -->
			<LearningObjectives
				:objectives="[
					'Install Chrome browser for testing web pages',
					'Download and configure Visual Studio Code for web development',
					'Add essential VS Code extensions that enhance productivity',
					'Verify your setup is working correctly'
				]"
				purpose="Your development environment is where you'll spend most of your time as a developer. A proper setup provides syntax highlighting to catch typos, live previews to see changes instantly, and debugging tools to fix errors quickly. This one-time setup will pay dividends for your entire coding journey."
			/>

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

			<!-- Hunter Element 3: Checkpoint -->
			<CheckpointBox
				title="Quick Check: Browser Setup"
				description="Before moving on:"
				:questions="checkpointQuestions"
			/>

			<h2 id="code-editor">Code Editor</h2>
			<p>
				Visual Studio Code (VS Code) is a free, powerful editor for web
				development.
			</p>

			<!-- Guided Practice -->
			<div class="box practice-guided">
				<h3><i class="fas fa-hands-helping"></i> Guided Practice: Installing and Configuring VS Code</h3>
				<p>Follow along as we set up VS Code step by step.</p>
				
				<div class="steps">
					<div class="step-item">
						<h4 id="installing-vs-code">Step 1: Download and Install VS Code</h4>
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
						<div class="hint-box">
							<details>
								<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
								<div class="hint-content">
									<div class="hint">The website automatically detects your operating system and shows the correct download button.</div>
									<div class="hint">On Windows, run the .exe installer. On Mac, drag the app to your Applications folder. On Linux, follow the package manager instructions.</div>
									<div class="hint">During installation, you can check "Add to PATH" (Windows) or create a desktop icon if you'd like quick access.</div>
								</div>
							</details>
						</div>
					</div>
					
					<div class="step-item">
						<h4 id="essential-vs-code-extensions">Step 2: Install Essential Extensions</h4>
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
						<div class="hint-box">
							<details>
								<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
								<div class="hint-content">
									<div class="hint">The Extensions icon is on the left sidebar and looks like 4 squares with one separated.</div>
									<div class="hint">You can also open extensions with Ctrl+Shift+X on Windows/Linux or Cmd+Shift+X on Mac.</div>
									<div class="hint">Live Server lets you right-click an HTML file and choose "Open with Live Server" to see it in your browser automatically.</div>
								</div>
							</details>
						</div>
					</div>
					
					<div class="step-item">
						<h4>Step 3: Test Your Setup</h4>
						<ol>
							<li>Create a new file (File → New File)</li>
							<li>Save it as <code>test.html</code></li>
							<li>Type <code>!</code> and press Tab (should create HTML template)</li>
							<li>Add "Hello World!" in the body</li>
							<li>Right-click the file → Open with Live Server</li>
							<li>See your page in Chrome!</li>
						</ol>
						<div class="hint-box">
							<details>
								<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
								<div class="hint-content">
									<div class="hint">If the <code>!</code> + Tab trick doesn't work, make sure your file is saved with an <code>.html</code> extension first.</div>
									<div class="hint">Live Server should open your browser automatically at http://localhost:5500 or a similar port.</div>
									<div class="hint">Any changes you make to the file will automatically refresh in the browser!</div>
								</div>
							</details>
						</div>
					</div>
				</div>
				
				<div class="success-criteria">
					<h4><i class="fas fa-check-circle"></i> You're on track if you can:</h4>
					<ul>
						<li>☐ Open VS Code and create a new file</li>
						<li>☐ See the Extensions panel with installed extensions</li>
						<li>☐ Use the <code>!</code> + Tab shortcut to create HTML structure</li>
						<li>☐ Launch Live Server and see your page in the browser</li>
					</ul>
				</div>
			</div>

			<!-- Independent Practice -->
			<div class="box practice-independent">
				<h3>💪 Independent Challenge: Create Your Workspace</h3>
				<p>Now personalize your development environment!</p>
				
				<div class="challenge-box">
					<h4>Your Task:</h4>
					<p>Set up a dedicated folder for your web development projects and create your first test page.</p>
					
					<div class="requirements mt-3">
						<h5>Requirements:</h5>
						<ul>
							<li>Create a folder called "WebProjects" in a location you'll remember</li>
							<li>Open this folder in VS Code (File → Open Folder)</li>
							<li>Create a new HTML file called <code>index.html</code></li>
							<li>Write a basic webpage that includes your name and a short bio</li>
							<li>Use Live Server to view your page</li>
						</ul>
					</div>
					
					<div class="stretch-goals mt-3">
						<h5>Stretch Goals (Optional):</h5>
						<ul>
							<li>Install a color theme you like (File → Preferences → Color Theme)</li>
							<li>Explore additional extensions (try "Prettier" for code formatting)</li>
							<li>Learn 3 keyboard shortcuts that interest you</li>
							<li>Create a folder structure (css/, js/, images/) for organizing projects</li>
						</ul>
					</div>
				</div>
				
				<div class="rubric">
					<h4>Success Criteria:</h4>
					<table class="table is-bordered">
						<thead>
							<tr>
								<th>Criteria</th>
								<th>You've succeeded if...</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Organization</td>
								<td>You have a dedicated folder for projects that you can easily find and open</td>
							</tr>
							<tr>
								<td>Functionality</td>
								<td>Your HTML file opens correctly in Live Server and displays in the browser</td>
							</tr>
							<tr>
								<td>Confidence</td>
								<td>You feel comfortable creating files, saving them, and viewing them in the browser</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- Test Your Knowledge -->
			<TestYourKnowledgeSection
				tutorial-path="/tutorials/getting-started/dev-environment"
			/>

			<!-- Hunter Element: Closure -->
			<ClosureSection
				title="🏁 Lesson Complete: Your Dev Environment is Ready!"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="<p>With your development environment ready, you're all set to start coding! Next, we'll explore <strong>Browser Developer Tools</strong>—your secret weapon for inspecting, debugging, and understanding websites like a pro!</p>"
			/>

			<TutorialRecommendations :current-path="'/tutorials/getting-started/dev-environment'" />

			<TutorialCompletion tutorial-path="/tutorials/getting-started/dev-environment" />
		</div>
	</div>
</template>

<script setup>
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TestYourKnowledgeSection from '@/components/TestYourKnowledgeSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialCompletion from '@/components/TutorialCompletion.vue';

const checkpointQuestions = [
	{
		question: 'Why do we recommend Chrome for web development? (Hint: Developer tools!)',
		answer: 'Chrome has excellent built-in developer tools for inspecting elements, debugging JavaScript, and monitoring network activity. It also has the largest market share, so you\'ll be testing with what most users see.',
	},
	{
		question: 'Should you install multiple browsers? Why or why not?',
		answer: 'Yes! Good developers test their sites in multiple browsers because each renders pages slightly differently. Install at least 2-3 different browsers for cross-browser testing.',
	},
];

const closureKeyTakeaways = [
	'Chrome provides excellent developer tools that help you inspect, debug, and test your websites',
	'VS Code is free, powerful, and the most popular code editor among web developers',
	'Extensions like Live Server dramatically improve your workflow by showing changes instantly',
	'A proper workspace setup (organized folders, good tools) makes coding more enjoyable and productive',
	'This one-time setup will serve you throughout your entire development journey',
];

const closureObjectives = [
	'Install Chrome browser for testing web pages',
	'Download and configure Visual Studio Code',
	'Add essential VS Code extensions',
	'Verify your setup is working correctly',
];

const closureReflectionPrompts = [
	{
		title: '💭 Compare Before & After',
		questions: [
			'Think about trying to code in Notepad vs. VS Code with Live Server. What\'s the biggest difference?',
			'How will seeing your changes instantly help you learn faster?',
		],
	},
];

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
