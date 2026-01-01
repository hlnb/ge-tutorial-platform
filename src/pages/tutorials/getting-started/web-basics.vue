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
						<a href="#" aria-current="page">Web Basics</a>
					</li>
				</ul>
			</nav>

			<!-- Tutorial Metadata -->
			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Beginner</span>
					<span class="tag is-light">45 minutes</span>
					<span class="tag is-light">Fundamentals</span>
					<span class="tag is-light">Concepts</span>
				</div>
			</div>

			<h1>Understanding Web Development Basics</h1>

		<!-- ═══════════════════════════════════════════════════ -->
		<!-- HUNTER ELEMENT 1: ANTICIPATORY SET -->
		<!-- Hook + Prior Knowledge Activation -->
		<!-- ═══════════════════════════════════════════════════ -->
		<section class="anticipatory-set">
			<div class="box engagement-hook">
				<h3>🌐 Start Here: A Quick Challenge</h3>
				<p>
					Right now, you're reading this tutorial on a screen. But have you ever 
					wondered what's actually happening behind the scenes? How did this page 
					travel from a computer somewhere in the world to appear on YOUR device 
					in less than a second?
				</p>
				
				<div class="reflection-prompt">
					<strong>Quick Reflection:</strong> Think about your favorite website...
					<ul>
						<li>How does clicking a button make something happen instantly?</li>
						<li>Why do some websites look beautiful while others look plain?</li>
						<li>What makes a website "interactive" versus just displaying text?</li>
					</ul>
					<p><em>In the next 45 minutes, you'll discover the answers to all of these questions.</em></p>
				</div>
			</div>
		</section>

		<!-- ═══════════════════════════════════════════════════ -->
		<!-- HUNTER ELEMENT 2: OBJECTIVES & PURPOSE -->
		<!-- Clear Learning Goals + Why It Matters -->
		<!-- ═══════════════════════════════════════════════════ -->
		<section class="objectives">
			<div class="box highlight-box">
				<h3><i class="fas fa-graduation-cap"></i> Learning Objectives</h3>
				<p><strong>By the end of this lesson, you'll be able to:</strong></p>
				<ul class="objectives-list">
					<li>✓ <strong>Explain</strong> the 4-step process of how websites load and display in your browser</li>
					<li>✓ <strong>Identify</strong> the role of HTML, CSS, and JavaScript and how they work together</li>
					<li>✓ <strong>Describe</strong> the client-server model using real-world examples</li>
					<li>✓ <strong>Demonstrate</strong> using browser DevTools to inspect any webpage</li>
				</ul>
				
				<div class="purpose-statement">
					<h4><i class="fas fa-lightbulb"></i> Why This Matters:</h4>
					<p>
						Understanding how the web works is like gaining X-ray vision for the internet. 
						You'll see past the polished surfaces of websites and understand the technology 
						that powers everything from social media to online shopping to this very tutorial. 
						This foundation is essential for EVERY web developer, regardless of what you build later.
					</p>
				</div>
			</div>
		</section>

		<!-- ═══════════════════════════════════════════════════ -->
		<!-- HUNTER ELEMENT 3: INPUT -->
		<!-- New Information & Concepts -->
		<!-- ═══════════════════════════════════════════════════ -->
		<h2 id="how-websites-work">How Websites Work</h2>

		<p>When you visit a website, several things happen:</p>

		<div class="image-container">
			<img
				src="/images/tutorials/getting-started/client-server.svg"
				alt="Client-Server Model"
			/>
		</div>

		<ol>
			<li>
				<strong>Request</strong>: Your browser requests a webpage from a
				server
			</li>
			<li><strong>Processing</strong>: The server processes the request</li>
			<li>
				<strong>Response</strong>: The server sends back HTML, CSS, and
				JavaScript files
			</li>
			<li><strong>Rendering</strong>: Your browser displays the webpage</li>
		</ol>

		<div class="box analogy-box">
			<strong>Think of it like ordering from a restaurant:</strong>
			<ul>
				<li>You (the browser) request a meal (webpage)</li>
				<li>The kitchen (server) prepares it</li>
				<li>The waiter (internet) delivers it</li>
				<li>You receive and enjoy the meal (rendered page)</li>
			</ul>
		</div>

		<!-- ═══════════════════════════════════════════════════ -->
		<!-- HUNTER ELEMENT 5: CHECKING FOR UNDERSTANDING #1 -->
		<!-- Formative Assessment Checkpoint -->
		<!-- ═══════════════════════════════════════════════════ -->
		<section class="check-understanding">
			<div class="box checkpoint">
				<h3>⏸️ Pause & Check: Do You Understand?</h3>
				<p><strong>Before moving forward, can you answer these?</strong></p>
				<ol>
					<li>In your own words, what are the 4 steps that happen when you visit a website?</li>
					<li>Using the restaurant analogy, what does the "server" do?</li>
					<li>Why can't you see a website without a browser?</li>
				</ol>
				
				<details>
					<summary class="button is-info is-light mt-3">
						<i class="fas fa-eye"></i> Check Your Answers
					</summary>
					<div class="answer-key mt-3">
						<ol>
							<li><strong>The 4 steps:</strong> Request (browser asks for page) → Processing (server prepares it) → Response (server sends HTML/CSS/JS) → Rendering (browser displays it)</li>
							<li><strong>Server role:</strong> Like a kitchen, it stores website files, processes requests, and sends back the files needed to display the page</li>
							<li><strong>Why browsers are needed:</strong> Browsers interpret HTML, CSS, and JavaScript code and render it into the visual webpage you see. Without a browser, you'd just see raw code!</li>
						</ol>
					</div>
				</details>
				
				<div class="self-assessment mt-4">
					<p><strong>How confident are you with this concept?</strong></p>
					<p class="confidence-scale">😕 Still confused | 🤔 Getting there | 😊 Got it! | 🎉 Could explain it to a friend!</p>
				</div>
			</div>
		</section>

		<h2 id="core-web-technologies">Core Web Technologies</h2>

		<p>
			The three main technologies that power the web work together like this:
		</p>
		<div class="image-container">
			<img
				src="/images/tutorials/getting-started/website-technologies.svg"
				alt="Web Technologies"
			/>
		</div>

		<h3>HTML (Structure)</h3>
		<ul>
			<li>The backbone of web pages</li>
			<li>Defines content structure</li>
			<li>Like the skeleton of a building</li>
		</ul>

		<pre><code class="language-html">&lt;h1&gt;Welcome&lt;/h1&gt;

&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>

		<h3>CSS (Style)</h3>
		<ul>
			<li>Controls appearance</li>
			<li>Handles layout and design</li>
			<li>Like paint and decorations</li>
		</ul>

		<pre><code class="language-css">h1 {

color: var(--primary-dark-red);
font-size: 24px;
}</code></pre>

		<h3>JavaScript (Behavior)</h3>
		<ul>
			<li>Adds interactivity</li>
			<li>Handles user actions</li>
			<li>Like the electrical system</li>
		</ul>

		<pre><code class="language-javascript">button.addEventListener('click', () => {

alert('Hello!');
});</code></pre>

		<h2 id="client-server-model">The Client-Server Model</h2>

		<div class="columns">
			<div class="column">
				<h3>Client (Frontend)</h3>
				<ul>
					<li>Web browser</li>
					<li>Displays content</li>
					<li>Handles user interaction</li>
					<li>Runs on user's device</li>
				</ul>
			</div>
			<div class="column">
				<h3>Server (Backend)</h3>
				<ul>
					<li>Stores website files</li>
					<li>Processes requests</li>
					<li>Manages data</li>
					<li>Runs on remote computer</li>
				</ul>
			</div>
		</div>

		<div class="box highlight-box">
			<strong>Local Development</strong>: When developing, your computer acts
			as both client and server:
			<ul>
				<li>VS Code edits the files</li>
				<li>Live Server acts as your web server</li>
				<li>Chrome displays the results</li>
			</ul>
		</div>

		<!-- ═══════════════════════════════════════════════════ -->
		<!-- HUNTER ELEMENT 5: CHECKING FOR UNDERSTANDING #2 -->
		<!-- Formative Assessment Checkpoint -->
		<!-- ═══════════════════════════════════════════════════ -->
		<section class="check-understanding">
			<div class="box checkpoint">
				<h3>⏸️ Quick Knowledge Check</h3>
				<p><strong>Test your understanding of web technologies:</strong></p>
				<div class="quiz-questions">
					<div class="question-box">
						<p><strong>Question:</strong> If you wanted to change the color of text on a webpage, which technology would you use?</p>
						<details>
							<summary class="button is-info is-light is-small">Show Answer</summary>
							<p class="mt-2"><strong>Answer:</strong> CSS (Cascading Style Sheets) - it controls all visual styling including colors, fonts, layouts, and more.</p>
						</details>
					</div>
					<div class="question-box mt-3">
						<p><strong>Question:</strong> What would happen if a webpage had HTML and JavaScript but no CSS?</p>
						<details>
							<summary class="button is-info is-light is-small">Show Answer</summary>
							<p class="mt-2"><strong>Answer:</strong> The page would still work functionally - content would display and buttons would work - but it would look plain with default browser styling (black text, Times New Roman font, no colors or layout).</p>
						</details>
					</div>
				</div>
			</div>
		</section>

		<h2 id="browser-process">How Browsers Work</h2>

		<p>Browsers process web pages in several steps:</p>

		<div class="image-container">
			<img
					src="/images/tutorials/getting-started/browser-process.svg"
					alt="Browser Process"
				/>
			</div>

			<ol>
				<li>
					<strong>Parse HTML</strong>
					<ul>
						<li>Read HTML code</li>
						<li>Create Document Object Model (DOM)</li>
					</ul>
				</li>
				<li>
					<strong>Process CSS</strong>
					<ul>
						<li>Apply styles</li>
						<li>Calculate layouts</li>
					</ul>
				</li>
				<li>
					<strong>Execute JavaScript</strong>
					<ul>
						<li>Run scripts</li>
						<li>Add interactivity</li>
					</ul>
				</li>
				<li>
					<strong>Render Page</strong>
					<ul>
						<li>Display final result</li>
						<li>Update as needed</li>
					</ul>
				</li>
			</ol>

			<h2 id="try-it-yourself">Try It Yourself</h2>

			<div class="steps">
				<div class="step-item">
					<h3>View Page Source</h3>
					<ul>
						<li>Visit any website</li>
						<li>Right-click > View Page Source</li>
						<li>Observe HTML structure</li>
					</ul>
				</div>

				<div class="step-item">
					<h3>Inspect Elements</h3>
					<ul>
						<li>Right-click > Inspect</li>
						<li>Try modifying text</li>
						<li>Watch changes live</li>
					</ul>
				</div>

				<div class="step-item">
					<h3>Network Tab</h3>
					<ul>
						<li>Open DevTools</li>
						<li>Go to Network tab</li>
						<li>Reload page</li>
						<li>Watch resources load</li>
					</ul>
				</div>
			</div>

			<div class="box practice-box">
				<strong>Practice Exercise:</strong>
				<ol>
					<li>Create a simple HTML file</li>
					<li>View it in Chrome</li>
					<li>Use DevTools to inspect it</li>
					<li>Watch the Network tab as it loads</li>
				</ol>
			</div>

			<h2 id="common-terms">Common Terms</h2>
			<dl class="terms-list">
				<dt>URL</dt>
				<dd>Web page address</dd>
				<dt>Domain</dt>
				<dd>Website name (e.g., google.com)</dd>
				<dt>HTTP</dt>
				<dd>Protocol for web communication</dd>
				<dt>DNS</dt>
				<dd>System that converts domains to IP addresses</dd>
				<dt>Hosting</dt>
				<dd>Service that stores website files</dd>
			</dl>

		<!-- ═══════════════════════════════════════════════════ -->
		<!-- HUNTER ELEMENT 8: CLOSURE -->
		<!-- Summary, Reflection, Connection -->
		<!-- ═══════════════════════════════════════════════════ -->
		<section class="closure">
			<div class="box closure-section">
				<h2><i class="fas fa-flag-checkered"></i> Lesson Complete: What You Discovered</h2>
				
				<!-- Summary -->
				<div class="key-takeaways">
					<h3><i class="fas fa-star"></i> Key Takeaways:</h3>
					<ul>
						<li>Websites work through a <strong>4-step process</strong>: Request → Processing → Response → Rendering</li>
						<li><strong>HTML structures content</strong> (the skeleton), <strong>CSS styles it</strong> (the paint), and <strong>JavaScript makes it interactive</strong> (the electrical system)</li>
						<li>The <strong>client-server model</strong> is like a restaurant: you (client/browser) order, the kitchen (server) prepares, and the internet delivers</li>
						<li>Browsers are incredibly powerful - they parse HTML, apply CSS, execute JavaScript, and render everything in milliseconds</li>
						<li>During development, your computer acts as BOTH client and server</li>
					</ul>
				</div>
				
				<!-- Objectives Review -->
				<div class="objectives-review mt-5">
					<h3><i class="fas fa-check-double"></i> Learning Objectives Review:</h3>
					<p>Look back at what you set out to learn. Can you now:</p>
					<ul class="objectives-checklist">
						<li>✅ <strong>Explain</strong> the 4-step process of how websites load? <span class="has-text-success">Check!</span></li>
						<li>✅ <strong>Identify</strong> the role of HTML, CSS, and JavaScript? <span class="has-text-success">Got it!</span></li>
						<li>✅ <strong>Describe</strong> the client-server model? <span class="has-text-success">Can explain it!</span></li>
						<li>✅ <strong>Demonstrate</strong> using browser DevTools? <span class="has-text-success">Hands-on experience!</span></li>
					</ul>
					<p class="mt-3">If you can confidently answer "yes" to most of these, you're ready to move forward! If not, that's okay - review the sections you found challenging.</p>
				</div>
				
				<!-- Real-World Application -->
				<div class="reflection-prompts mt-5">
					<h3><i class="fas fa-brain"></i> Think & Reflect:</h3>
					<div class="reflection-questions">
						<div class="question-card">
							<p><strong>🤔 Real-World Test:</strong> Next time you visit ANY website, try this:</p>
							<ol>
								<li>Right-click → View Page Source and identify the HTML, CSS, and JavaScript</li>
								<li>Open DevTools → Network tab and watch the files load</li>
								<li>Right-click → Inspect and change some text (just for fun!)</li>
							</ol>
							<p class="has-text-success"><strong>You now see the web differently than 99% of people!</strong></p>
						</div>
						
						<div class="question-card mt-4">
							<p><strong>💭 Reflection Questions:</strong></p>
							<ul>
								<li>What surprised you most about how websites work?</li>
								<li>How does understanding the client-server model change how you think about the internet?</li>
								<li>What's one concept you want to remember from today?</li>
								<li>What would you tell a friend who asks "how do websites work?"</li>
							</ul>
						</div>

						<div class="question-card mt-4">
							<p><strong>🎯 Looking Ahead:</strong></p>
							<p>Now that you understand HOW the web works, you're ready to start BUILDING for the web! In the next lessons, you'll:</p>
							<ul>
								<li>Write your first HTML code</li>
								<li>Style pages with CSS</li>
								<li>Make things interactive with JavaScript</li>
							</ul>
							<p><em>The journey from "user" to "creator" starts now!</em></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
</template>

<script setup>
import '@/assets/styles/tutorials.css';
import { usePageSections } from '@/composables/usePageSections';

const frontmatter = {
	title: 'Web Basics',
	description: 'Learn the basics of web development',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'web basics'],
	duration: '20 minutes',
	difficulty: 'beginner',
};

const sections = [
	{
		id: 'web-basics',
		title: 'Web Basics',
		subsections: [
			{
				id: 'anticipatory-set',
				title: 'Start Here',
			},
			{
				id: 'objectives',
				title: 'Learning Objectives',
			},
			{
				id: 'how-websites-work',
				title: 'How Websites Work',
			},
			{
				id: 'core-web-technologies',
				title: 'Core Web Technologies',
			},
			{
				id: 'client-server-model',
				title: 'The Client-Server Model',
			},
			{
				id: 'browser-process',
				title: 'How Browsers Work',
			},
			{
				id: 'try-it-yourself',
				title: 'Guided Practice',
			},
			{
				id: 'common-terms',
				title: 'Common Terms',
			},
		],
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
}

.reflection-prompt {
	background: rgba(255, 255, 255, 0.1);
	padding: 1rem;
	border-radius: 8px;
	margin-top: 1rem;
}

.reflection-prompt strong {
	color: #ffd700;
}

.objectives {
	margin: 2rem 0;
}

.objectives-list {
	list-style: none;
	padding-left: 0;
}

.objectives-list li {
	padding: 0.5rem 0;
	padding-left: 1.5rem;
	position: relative;
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
}

.check-understanding {
	margin: 3rem 0;
}

.checkpoint {
	background: #f0f9ff;
	border-left: 4px solid #3b82f6;
}

.checkpoint h3 {
	color: #1e40af;
	margin-bottom: 1rem;
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
	margin: 0.5rem 0;
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

.question-box {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	border: 1px solid #e5e7eb;
}

.practice-guided {
	background: #f0fdf4;
	border-left: 4px solid #22c55e;
}

.practice-guided h3 {
	color: #15803d;
	margin-bottom: 1rem;
}

.step-item {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-bottom: 1.5rem;
	border: 1px solid #e5e7eb;
}

.step-item h4 {
	color: #15803d;
	margin-bottom: 0.75rem;
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
}

.hint-box details[open] {
	padding: 0.5rem;
}

.success-criteria {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	margin-top: 1.5rem;
}

.success-criteria h4 {
	color: #15803d;
	margin-bottom: 0.75rem;
}

.success-criteria ul {
	list-style: none;
	padding-left: 0;
}

.success-criteria li {
	padding: 0.25rem 0;
}

.practice-independent {
	background: #fef2f2;
	border-left: 4px solid #dc2626;
	margin-top: 2rem;
}

.practice-independent h3 {
	color: #991b1b;
	margin-bottom: 1rem;
}

.challenge-box {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 1rem 0;
}

.challenge-box h4 {
	color: #991b1b;
	margin-bottom: 0.75rem;
}

.rubric {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-top: 1rem;
}

.rubric h4 {
	margin-bottom: 1rem;
	color: #991b1b;
}

.rubric table {
	width: 100%;
	margin-top: 0.5rem;
}

.closure {
	margin: 3rem 0;
}

.closure-section {
	background: linear-gradient(135deg, #10b981 0%, #059669 100%);
	color: white;
	border: none;
	padding: 2rem;
}

.closure-section h2,
.closure-section h3 {
	color: white;
}

.key-takeaways,
.objectives-review,
.reflection-prompts {
	background: rgba(255, 255, 255, 0.1);
	padding: 1.5rem;
	border-radius: 8px;
}

.key-takeaways ul,
.objectives-review ul {
	list-style: none;
	padding-left: 0;
}

.key-takeaways li,
.objectives-checklist li {
	padding: 0.5rem 0;
	padding-left: 1.5rem;
	position: relative;
}

.key-takeaways li:before {
	content: '→';
	position: absolute;
	left: 0;
	color: #ffd700;
	font-weight: bold;
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
}

.question-card strong {
	color: #059669;
}

.question-card ul,
.question-card ol {
	margin: 0.75rem 0;
	margin-left: 1.5rem;
}
.image-container {
	margin: 2rem 0;
	text-align: center;
}

.image-container img {
	max-width: 100%;
	height: auto;
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

.box.analogy-box {
	background-color: #f0f7ff;
}

.box.practice-box {
	background-color: #f0fff4;
}

.steps {
	margin: 2rem 0;
}

.step-item {
	margin-bottom: 2rem;
}

.step-item h3 {
	color: var(--color-primary);
	margin-bottom: 0.5rem;
}

.terms-list dt {
	font-weight: bold;
	margin-top: 1rem;
}

.terms-list dd {
	margin-left: 1rem;
}

.tutorial-navigation {
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
	padding-top: 2rem;
	border-top: 1px solid #eee;
}
</style>
