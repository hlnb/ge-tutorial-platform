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

			<!-- Anticipatory Set -->
			<section class="anticipatory-set">
				<div class="box engagement-hook">
					<h3>🎯 Start Here</h3>
					<p>Imagine trying to write a novel using sticky notes, or building a house with the wrong tools. Just like writers need word processors and carpenters need the right equipment, web developers need the right text editor.</p>
					<p>But with dozens of editors available—some free, some paid, some simple, some complex—how do you choose?</p>
					
					<div class="reflection-prompt">
						<strong>Quick Reflection:</strong>
						<ul>
							<li>Have you ever used Notepad or TextEdit to write something? What was missing?</li>
							<li>What features would make writing code easier than writing in a basic text file?</li>
						</ul>
						<p><em>By the end of this lesson, you'll know exactly which editor fits your needs and how to start using it like a pro!</em></p>
					</div>
				</div>
			</section>

			<!-- Learning Objectives -->
			<section class="objectives">
				<div class="box highlight-box">
					<h3><i class="fas fa-graduation-cap"></i> Learning Objectives</h3>
					<p><strong>By the end of this lesson, you'll be able to:</strong></p>
					<ul class="objectives-list">
						<li>✓ <strong>Identify</strong> the differences between simple text editors, code editors, and IDEs</li>
						<li>✓ <strong>Explain</strong> key features that make coding easier (syntax highlighting, code completion, etc.)</li>
						<li>✓ <strong>Evaluate</strong> which text editor best fits your needs and workflow</li>
						<li>✓ <strong>Install</strong> and configure Visual Studio Code with essential extensions</li>
					</ul>
					
					<div class="purpose-statement">
						<h4><i class="fas fa-lightbulb"></i> Why This Matters:</h4>
						<p>Your text editor is where you'll spend most of your time as a developer. Choosing the right one can boost your productivity by 10x, make learning easier, and actually make coding enjoyable. The right tool helps you catch errors before they happen, write code faster, and focus on solving problems instead of fighting with your tools.</p>
					</div>
				</div>
			</section>

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

			<!-- Checkpoint #1 -->
			<section class="check-understanding">
				<div class="box checkpoint">
					<h3>⏸️ Pause & Check: Understanding Editor Types</h3>
					<p><strong>Before moving forward, can you answer these?</strong></p>
					<ol class="checkpoint-questions">
						<li>What's the main difference between a simple text editor (like Notepad) and a code editor (like VS Code)?</li>
						<li>When might you choose an IDE over a code editor?</li>
						<li>Name three code editors mentioned in this section.</li>
					</ol>
					
					<details>
						<summary class="button is-info is-light mt-3"><i class="fas fa-eye"></i> Check Your Answers</summary>
						<div class="answer-key mt-3">
							<ol>
								<li><strong>Answer:</strong> Simple text editors lack features designed for coding like syntax highlighting, code completion, and debugging tools. Code editors are specifically built for programming and include these productivity features.</li>
								<li><strong>Answer:</strong> You might choose an IDE when working on large, complex projects that benefit from comprehensive features like built-in compilers, debuggers, and project management tools all in one place. IDEs are especially useful for enterprise development.</li>
								<li><strong>Answer:</strong> Visual Studio Code, Sublime Text, Atom, and Notepad++ (any three of these).</li>
							</ol>
						</div>
					</details>
					
					<div class="self-assessment mt-4">
						<p><strong>How confident are you with this concept?</strong></p>
						<p class="confidence-scale">😕 Still confused | 🤔 Getting there | 😊 Got it! | 🎉 Could explain it to a friend!</p>
					</div>
				</div>
			</section>

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

			<!-- Checkpoint #2 -->
			<section class="check-understanding">
				<div class="box checkpoint">
					<h3>⏸️ Pause & Check: Key Features</h3>
					<p><strong>Quick self-check on editor features:</strong></p>
					<ol class="checkpoint-questions">
						<li>What does syntax highlighting do and why is it helpful?</li>
						<li>How do extensions/plugins enhance a text editor?</li>
					</ol>
					
					<details>
						<summary class="button is-info is-light mt-3"><i class="fas fa-eye"></i> Check Your Answers</summary>
						<div class="answer-key mt-3">
							<ol>
								<li><strong>Answer:</strong> Syntax highlighting colors different parts of your code (keywords, strings, variables) to make it more readable and help you quickly identify errors like missing quotes or brackets.</li>
								<li><strong>Answer:</strong> Extensions add extra functionality tailored to your specific needs—like support for new programming languages, code formatters, themes, Git tools, or live preview features—without bloating the base editor.</li>
							</ol>
						</div>
					</details>
				</div>
			</section>

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

			<!-- Guided Practice -->
			<div class="box practice-guided">
				<h3><i class="fas fa-hands-helping"></i> Guided Practice: Setting Up VS Code</h3>
				<p>Let's walk through installing and configuring VS Code together.</p>
				
				<div class="steps">
					<div class="step-item">
						<h4>Step 1: Download and Install</h4>
						<p>Go to <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a> and download the installer for your operating system.</p>
						<div class="hint-box">
							<details>
								<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
								<div class="hint-content">
									<div class="hint">The big blue download button will automatically detect your OS (Windows, Mac, or Linux).</div>
									<div class="hint">Run the installer and use all default options—they're designed to work well for beginners.</div>
								</div>
							</details>
						</div>
					</div>
					
					<div class="step-item">
						<h4>Step 2: Install Essential Extensions</h4>
						<p>Click the Extensions icon in the sidebar (or press Ctrl+Shift+X / Cmd+Shift+X). Search for and install:</p>
						<ul>
							<li><strong>Live Server</strong> - Preview your HTML files in real-time</li>
							<li><strong>Prettier</strong> - Auto-format your code</li>
							<li><strong>HTML CSS Support</strong> - Better autocomplete for HTML</li>
						</ul>
						<div class="hint-box">
							<details>
								<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
								<div class="hint-content">
									<div class="hint">The Extensions icon looks like four squares with one separated from the others.</div>
									<div class="hint">Click the green "Install" button next to each extension name.</div>
									<div class="hint">You may need to reload VS Code after installing extensions (it will prompt you).</div>
								</div>
							</details>
						</div>
					</div>
					
					<div class="step-item">
						<h4>Step 3: Try a Basic HTML File</h4>
						<p>Create a new file (File → New File), save it as <code>test.html</code>, and type: <code>!</code> then press Tab. Watch VS Code auto-complete an HTML template!</p>
						<div class="hint-box">
							<details>
								<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
								<div class="hint-content">
									<div class="hint">Use Ctrl+S (Cmd+S on Mac) to save files.</div>
									<div class="hint">The <code>!</code> + Tab trick is an Emmet abbreviation—a powerful shortcut system built into VS Code.</div>
									<div class="hint">Right-click the file and choose "Open with Live Server" to see it in your browser.</div>
								</div>
							</details>
						</div>
					</div>
				</div>
				
				<div class="success-criteria">
					<h4><i class="fas fa-check-circle"></i> You're on track if you can:</h4>
					<ul>
						<li>☐ Open VS Code and create a new file</li>
						<li>☐ See syntax highlighting in your code</li>
						<li>☐ Install at least one extension</li>
						<li>☐ Use a keyboard shortcut (like Ctrl+S to save)</li>
					</ul>
				</div>
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

			<!-- Independent Practice -->
			<div class="box practice-independent">
				<h3>💪 Independent Challenge: Your Perfect Setup</h3>
				<p>Now customize your editor to match your workflow!</p>
				
				<div class="challenge-box">
					<h4>Your Task:</h4>
					<p>Set up your chosen text editor with a personalized configuration that makes coding enjoyable for you.</p>
					
					<div class="requirements mt-3">
						<h5>Requirements:</h5>
						<ul>
							<li>Install at least 3 extensions that support web development</li>
							<li>Choose and apply a color theme you find comfortable to look at for hours</li>
							<li>Learn and practice 5 keyboard shortcuts from the list above</li>
							<li>Create a simple HTML file to test your setup</li>
						</ul>
					</div>
					
					<div class="stretch-goals mt-3">
						<h5>Stretch Goals (Optional):</h5>
						<ul>
							<li>Customize your editor settings (font size, line height, etc.)</li>
							<li>Try out code snippets or Emmet abbreviations</li>
							<li>Explore the integrated terminal in VS Code</li>
							<li>Set up a project folder and use the folder navigation</li>
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
								<td>Setup</td>
								<td>Your editor has helpful extensions installed and is configured with a comfortable theme</td>
							</tr>
							<tr>
								<td>Efficiency</td>
								<td>You can use at least 5 keyboard shortcuts without looking them up</td>
							</tr>
							<tr>
								<td>Confidence</td>
								<td>You feel comfortable creating, editing, and saving files in your editor</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- Closure -->
			<section class="closure">
				<div class="box closure-section">
					<h2><i class="fas fa-flag-checkered"></i> Lesson Complete: What You Learned</h2>
					
					<div class="key-takeaways">
						<h3><i class="fas fa-star"></i> Key Takeaways:</h3>
						<ul>
							<li>Text editors range from simple (Notepad) to specialized code editors (VS Code) to full IDEs (WebStorm)</li>
							<li>Essential features like syntax highlighting, code completion, and extensions make coding dramatically easier</li>
							<li>VS Code is free, powerful, and widely used—making it an excellent choice for beginners</li>
							<li>The "best" editor is subjective—choose based on your needs, preferences, and workflow</li>
							<li>Learning keyboard shortcuts can 10x your productivity</li>
						</ul>
					</div>
					
					<div class="objectives-review mt-5">
						<h3><i class="fas fa-check-double"></i> Learning Objectives Review:</h3>
						<p>Look back at what you set out to learn. Can you now:</p>
						<ul class="objectives-checklist">
							<li>✅ Identify the differences between simple text editors, code editors, and IDEs <span class="has-text-success">Check!</span></li>
							<li>✅ Explain key features that make coding easier <span class="has-text-success">Got it!</span></li>
							<li>✅ Evaluate which text editor best fits your needs <span class="has-text-success">Can explain it!</span></li>
							<li>✅ Install and configure Visual Studio Code with extensions <span class="has-text-success">Could teach this!</span></li>
						</ul>
						<p class="mt-3">If you can confidently answer "yes" to most of these, you're ready to move on!</p>
					</div>
					
					<div class="reflection-prompts mt-5">
						<h3><i class="fas fa-brain"></i> Think & Reflect:</h3>
						<div class="reflection-questions">
							<div class="question-card">
								<p><strong>💭 What surprised you?</strong></p>
								<ul>
									<li>Were you surprised by how many features modern code editors have?</li>
									<li>Which feature do you think will save you the most time?</li>
								</ul>
							</div>
							<div class="question-card">
								<p><strong>� Next Steps:</strong></p>
								<p>Now that you understand text editors and their features, you're ready to set up your complete development environment. Next, we'll walk through installing and configuring everything you need to start coding!</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<h2 id="next-steps">Next Steps</h2>

			<p>
				Now that you know how to choose the right text editor, it's time to actually set up your complete development environment. In the next lesson, you'll install your chosen editor along with essential tools and extensions to start coding!
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
