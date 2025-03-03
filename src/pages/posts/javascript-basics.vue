<template>
	<PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
		<div class="container">
			<section class="hero" v-if="frontmatter">
				<div class="hero-content">
					<h1>{{ frontmatter.title }}</h1>
					<div class="meta">
						<time class="date">{{ formatDate(frontmatter.date) }}</time>
						<span class="tags" v-if="frontmatter.tags?.length">
							Tags: {{ frontmatter.tags.join(', ') }}
						</span>
					</div>
				</div>
			</section>
			<article class="box blog-post">
				<!-- Hero Image Section -->
				<div class="post-hero">
					<!-- Background image set in CSS -->
					<h2 class="title is-1">
						<i class="fas fa-globe section-icon"></i> JavaScript Basics: Adding
						Interactivity to Your Website
					</h2>
				</div>

				<p>
					Have you ever wondered how websites seem to "come alive" when you use
					them? Maybe you've noticed how:
				</p>
				<ul class="feature-list">
					<li>
						<i class="fas fa-photo-video"></i> Instagram loads new photos as you
						scroll
					</li>
					<li>
						<i class="fas fa-film"></i> Netflix suggests shows you might like
					</li>
					<li>
						<i class="fas fa-shopping-cart"></i> Your shopping cart updates
						instantly when you add items
					</li>
					<li>
						<i class="fas fa-check-circle"></i> Forms tell you right away if
						you've made a typing mistake
					</li>
				</ul>
				<p class="highlight">That's all JavaScript in action! 💫</p>
				<div class="analogy-box">
					<p>Think of a website like a house:</p>
					<ul>
						<li><strong>HTML</strong> is the structure (walls, rooms, roof)</li>
						<li>
							<strong>CSS</strong> is the interior design (colors, furniture,
							decorations)
						</li>
						<li>
							<strong>JavaScript</strong> is like electricity and plumbing—it
							makes everything actually work and respond to you!
						</li>
					</ul>
				</div>

				<h2>Understanding JavaScript: Your First Step into Programming</h2>
				<p>
					If you're completely new to programming, welcome! You're about to
					start an exciting journey. JavaScript is the perfect first programming
					language because:
				</p>

				<h3>What is JavaScript?</h3>
				<p>
					JavaScript is like giving instructions to your website—telling it how
					to respond when visitors click buttons, type in forms, or scroll down
					pages. Imagine it as writing a recipe: you're telling the website
					step-by-step what to do in different situations.
				</p>
				<div class="code-example">
					<p>
						Want to see JavaScript in action right now? Open any website,
						right-click, and select "Inspect" (or press F12). Click the
						"Console" tab, type:
					</p>
					<CodeMirror
						v-model="consoleExample"
						:options="{
							mode: 'javascript',
							theme: 'monokai',
							lineNumbers: true,
							readOnly: true,
						}"
					/>
					<p class="code-caption">Try it: Your first JavaScript code! 🎉</p>
				</div>

				<h2>History of JavaScript</h2>
				<p>
					JavaScript was created in 1995 by Brendan Eich while he was working at
					Netscape. The company needed a lightweight scripting language to
					enhance web pages, so Eich developed JavaScript in just 10 days.
					Initially called "Mocha" and later "LiveScript," the language was
					ultimately renamed JavaScript to capitalise on the popularity of Java,
					despite the two languages being quite different.
				</p>

				<p>
					Over the years, JavaScript evolved significantly, gaining new features
					and becoming more powerful. Today, it's a cornerstone of web
					development, used alongside HTML (for structure) and CSS (for styling)
					to create rich, interactive experiences on the web. JavaScript is also
					used outside the browser, powering servers (Node.js), mobile apps, and
					even desktop applications.
				</p>

				<h2>Why Learn JavaScript?</h2>
				<p>
					JavaScript is a fantastic starting point for new programmers for
					several reasons:
				</p>
				<ul class="benefits-list">
					<li>
						<i class="fas fa-rocket"></i>
						<div class="benefit-content">
							<strong>Beginner-Friendly:</strong>
							JavaScript runs in a browser and doesn't require complex setup
						</div>
					</li>
					<li>
						<i class="fas fa-tools"></i>
						<div class="benefit-content">
							<strong>Versatile:</strong>
							Used for web development, mobile apps, server-side programming,
							and game development
						</div>
					</li>
					<li>
						<i class="fas fa-chart-line"></i>
						<div class="benefit-content">
							<strong>High Demand:</strong>
							JavaScript developers are in high demand, making it a valuable
							career skill
						</div>
					</li>
					<li>
						<i class="fas fa-users"></i>
						<div class="benefit-content">
							<strong>Huge Community:</strong>
							Abundant free resources, tutorials, and forums support learning
						</div>
					</li>
				</ul>

				<h2>What You'll Learn</h2>
				<p>In this guide, we'll cover:</p>
				<ul class="learning-list">
					<li>
						<i class="fas fa-wand-magic-sparkles"></i>
						<div class="learning-content">
							<strong>The magic of JavaScript</strong>
							<span>and why your website needs it</span>
						</div>
					</li>
					<li>
						<i class="fas fa-code"></i>
						<div class="learning-content">
							<strong>Three ways to add JavaScript to your pages</strong>
							<span>and which one you should actually use</span>
						</div>
					</li>
					<li>
						<i class="fas fa-hat-wizard"></i>
						<div class="learning-content">
							<strong>Your first JavaScript spells</strong>
							<span>er, code snippets</span>
						</div>
					</li>
					<li>
						<i class="fas fa-laptop-code"></i>
						<div class="learning-content">
							<strong>Real examples you can try right now</strong>
							<span>with interactive demos</span>
						</div>
					</li>
					<li>
						<i class="fas fa-graduation-cap"></i>
						<div class="learning-content">
							<strong>Where to go next</strong>
							<span>when you're ready to level up your JavaScript skills</span>
						</div>
					</li>
				</ul>

				<h2>Why JavaScript?</h2>
				<p>JavaScript allows you to:</p>
				<ul class="features-list">
					<li>
						<i class="fas fa-hand-pointer"></i>
						<div class="feature-content">
							<strong>Respond to User Actions</strong>
							<span
								>Handle clicks, form submissions, and scrolling with ease</span
							>
						</div>
					</li>
					<li>
						<i class="fas fa-sync-alt"></i>
						<div class="feature-content">
							<strong>Dynamic Updates</strong>
							<span>Update content without refreshing the page</span>
						</div>
					</li>
					<li>
						<i class="fas fa-check-circle"></i>
						<div class="feature-content">
							<strong>Form Validation</strong>
							<span>Create interactive forms with real-time validation</span>
						</div>
					</li>
					<li>
						<i class="fas fa-magic"></i>
						<div class="feature-content">
							<strong>Animations</strong>
							<span
								>Bring your page elements to life with smooth animations</span
							>
						</div>
					</li>
					<li>
						<i class="fas fa-database"></i>
						<div class="feature-content">
							<strong>Data Management</strong>
							<span
								>Fetch and display data from various sources dynamically</span
							>
						</div>
					</li>
				</ul>

				<h2>Getting Started</h2>
				<p>
					Adding JavaScript to your website is straightforward. You have three
					main options:
				</p>
				<h3>Three Ways to Add JavaScript</h3>
				<div class="code-examples">
					<div class="code-block">
						<h4>1. Inline JavaScript</h4>
						<CodeMirror
							v-model="inlineJsCode"
							:options="{
								mode: 'xml',
								theme: 'monokai',
								lineNumbers: true,
								readOnly: true,
							}"
						/>
					</div>

					<div class="code-block">
						<h4>2. Internal JavaScript</h4>
						<CodeMirror
							v-model="internalJsCode"
							:options="{
								mode: 'xml',
								theme: 'monokai',
								lineNumbers: true,
								readOnly: true,
							}"
						/>
					</div>

					<div class="code-block">
						<h4>3. External JavaScript (Recommended)</h4>
						<CodeMirror
							v-model="externalJsCode"
							:options="{
								mode: 'xml',
								theme: 'monokai',
								lineNumbers: true,
								readOnly: true,
							}"
						/>
					</div>
				</div>
				<p>
					Using defer ensures that JavaScript loads only after the HTML has
					fully rendered, improving page performance.
				</p>

				<h2>Next Steps: Let's Get Coding!</h2>
				<div class="codepen-intro">
					<div class="codepen-logo">
						<i class="fab fa-codepen"></i>
					</div>
					<div class="codepen-explanation">
						<h3>What is CodePen?</h3>
						<p>
							CodePen is a free online playground for web developers. It lets
							you write code and see the results instantly in your browser. No
							setup needed—just click, type, and learn! Each example below has
							its own CodePen that you can:
						</p>
						<ul>
							<li><i class="fas fa-eye"></i> View the live demo</li>
							<li><i class="fas fa-code"></i> See the complete code</li>
							<li>
								<i class="fas fa-copy"></i> Copy and modify for your own use
							</li>
							<li>
								<i class="fas fa-save"></i> Save to your own CodePen account
								(it's free!)
							</li>
						</ul>
					</div>
				</div>

				<p>
					Ready to start your JavaScript journey? We've created some fun
					mini-projects for you to explore and experiment with:
				</p>

				<div class="project-grid">
					<div class="project-card">
						<div class="project-icon">
							<i class="fas fa-keyboard"></i>
						</div>
						<h3>Click Counter</h3>
						<p>Count your clicks (perfect for when you're procrastinating!)</p>
						<div class="project-links">
							<a
								href="https://codepen.io/hlnbee/pen/jEOBbBR"
								class="project-link"
							>
								<i class="fas fa-code"></i> See it in action on CodePen
							</a>
						</div>
						<div class="project-tip">
							<i class="fas fa-lightbulb"></i>
							<span
								>Try changing the counter message or adding a reset button</span
							>
						</div>
					</div>

					<div class="project-card">
						<div class="project-icon">
							<i class="fas fa-palette"></i>
						</div>
						<h3>Mood Background</h3>
						<p>Change the page background with a click</p>
						<div class="project-links">
							<a
								href="https://codepen.io/hlnbee/pen/gbOmaWz"
								class="project-link"
							>
								<i class="fas fa-code"></i> Play with it on CodePen
							</a>
						</div>
						<div class="project-tip">
							<i class="fas fa-lightbulb"></i>
							<span>Experiment with your own favorite colors</span>
						</div>
					</div>

					<div class="project-card">
						<div class="project-icon">
							<i class="fas fa-comment-dots"></i>
						</div>
						<h3>Message Flipper</h3>
						<p>Switch between different messages</p>
						<div class="project-links">
							<a
								href="https://codepen.io/hlnbee/pen/zxYZvzq"
								class="project-link"
							>
								<i class="fas fa-code"></i> Check it out on CodePen
							</a>
						</div>
						<div class="project-tip">
							<i class="fas fa-lightbulb"></i>
							<span>Can you add more messages to the mix?</span>
						</div>
					</div>

					<div class="project-card">
						<div class="project-icon">
							<i class="fas fa-dice"></i>
						</div>
						<h3>Number Guessing Game</h3>
						<p>Guess the number between 1-10</p>
						<div class="project-links">
							<a
								href="https://codepen.io/hlnbee/pen/ogNZjew"
								class="project-link"
							>
								<i class="fas fa-code"></i> Try your luck on CodePen
							</a>
						</div>
						<div class="project-tip">
							<i class="fas fa-lightbulb"></i>
							<span
								>Challenge: Make it harder by changing the number range!</span
							>
						</div>
					</div>

					<div class="project-card">
						<div class="project-icon">
							<i class="fas fa-tasks"></i>
						</div>
						<h3>To-Do List</h3>
						<p>Keep track of your tasks</p>
						<div class="project-links">
							<a
								href="https://codepen.io/hlnbee/pen/XJWMmzd"
								class="project-link"
							>
								<i class="fas fa-code"></i> See the demo on CodePen
							</a>
						</div>
						<div class="project-tip">
							<i class="fas fa-lightbulb"></i>
							<span>Try adding categories or due dates to tasks!</span>
						</div>
					</div>
				</div>
				<div class="content">
					<h2>Want to Explore More?</h2>
					<p>
						Each CodePen example comes with commented code explaining how
						everything works. Feel free to:
					</p>
					<ul>
						<li>Fork the projects and make them your own</li>
						<li>Play around with the code</li>
						<li>Break things (it's how we learn!)</li>
						<li>Share your creations with us</li>
					</ul>

					<p>
						Remember: Every JavaScript expert started with
						<code>console.log("Hello, World!")</code>. The only difference
						between them and you is they kept going. So what are you waiting
						for? 😊
					</p>
				</div>
				<div class="content">
					<p>
						Want to dive deeper into web development? Stay tuned for our next
						post where we'll explore JavaScript's core concepts and start
						writing more complex code. In the meantime, have fun experimenting
						with these examples and check out our other tutorials on
						GraphiteEdge!
					</p>
					<BlogSignup />
				</div>
			</article>
		</div>
	</PostVisibility>
	<PostNavigation :current-path="'javascript-basics'" />
</template>

<script>
export const frontmatter = {
	title: 'JavaScript Basics: Adding Interactivity to Your Website',
	date: '2025-03-12',
	author: 'Helen Burgess',
	image: '/images/posts/javascript-basics.svg',
	description:
		'Learn how to add interactivity to your website with JavaScript, from basic concepts to practical examples.',
	tags: ['JavaScript', 'Web Development', 'Programming', 'Beginners'],
	status: 'published',
};
</script>

<script setup>
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import CodeMirror from '@/components/CodeMirror.vue';
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import BlogSignup from '@/components/BlogSignup.vue';
import { format } from 'date-fns';

const postData = ref(frontmatter);

const formatDate = (date) => {
	return format(new Date(date), 'MMMM do, yyyy');
};

useHead({
	title: postData.value.title,
	meta: [
		{ name: 'description', content: postData.value.description },
		{ property: 'og:title', content: postData.value.title },
		{ property: 'og:description', content: postData.value.description },
		{ property: 'og:image', content: postData.value.image },
	],
});

const emit = defineEmits(['update:frontmatter']);

// Example code snippets for the tutorial
const inlineJsCode = `<button onclick="alert('Hello!')">Click me</button>`;

const internalJsCode = `<script>
	function sayHello() {
		alert('Hello!');
	}
<\/script>`;

const externalJsCode = `<script src="script.js" defer><\/script>`;

const consoleExample = `console.log("Hello! 👋");`;

onMounted(() => {
	emit('update:frontmatter', frontmatter);
});
</script>

<style scoped>
.blog-post {
	max-width: 80vw;
	margin: 0 auto;
	padding: 2rem;
}
.hero {
	background-image: url('/images/posts/javascript-basics.svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 2rem;
}

.hero::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
}

.hero-content {
	position: relative;
	z-index: 1;
	text-align: center;
	color: white;
	padding: 2rem;
	max-width: 800px;
}

.hero h1 {
	font-size: 2.5rem;
	color: white;
	margin-bottom: 1rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.meta {
	color: white;
	margin: 1rem 0;
}

.meta .date {
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
	font-family: monospace;
	font-size: 0.9rem;
	letter-spacing: 0.02em;
}

.meta .tags {
	margin-left: 1rem;
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
}
h1 {
	font-size: 2.5rem;
	margin-bottom: 2rem;
	color: var(--color-red-berry);
}

h2 {
	font-size: 1.8rem;
	margin: 2rem 0 1rem;
	color: var(--color-mine-shaft);
}

.content {
	line-height: 1.6;
	font-size: 1.1rem;
}

.post-meta {
	color: var(--text-muted);
	font-size: 0.9rem;
	margin-bottom: 2rem;
}

.feature-list {
	list-style: none;
	padding-left: 0;
	margin: 2rem 0;
}

.feature-list li {
	margin: 1rem 0;
	padding-left: 2rem;
	position: relative;
}

.feature-list li i {
	position: absolute;
	left: 0;
	color: var(--color-red-berry);
}

.highlight {
	font-size: 1.2rem;
	color: var(--color-red-berry);
	margin: 2rem 0;
}

.analogy-box {
	background: var(--color-alabaster);
	border-left: 4px solid var(--color-red-berry);
	padding: 1.5rem;
	margin: 2rem 0;
	border-radius: 0 4px 4px 0;
}

.code-example {
	background: var(--color-mine-shaft);
	padding: 1.5rem;
	border-radius: 8px;
	margin: 2rem 0;
}

.code-caption {
	color: var(--color-silver);
	font-size: 0.9rem;
	margin-top: 1rem;
	text-align: center;
}

.code-examples {
	display: grid;
	gap: 2rem;
	margin: 2rem 0;
}

.code-block {
	background: var(--color-alabaster);
	padding: 1.5rem;
	border-radius: 8px;
}

.code-block h4 {
	margin-top: 0;
	color: var(--color-red-berry);
}

@media (max-width: 768px) {
	.blog-post {
		max-width: 95vw;
		padding: 1rem;
	}

	.code-examples {
		grid-template-columns: 1fr;
	}

	.hero {
		min-height: 300px;
	}
}

.benefits-list {
	list-style: none;
	padding: 0;
	margin: 2rem 0;
}

.benefits-list li {
	display: flex;
	align-items: flex-start;
	margin-bottom: 1.5rem;
	padding: 1rem;
	background: var(--color-alabaster);
	border-radius: 8px;
	transition: transform 0.2s ease-in-out;
}

.benefits-list li:hover {
	transform: translateX(10px);
}

.benefits-list i {
	font-size: 1.5rem;
	color: var(--color-red-berry);
	margin-right: 1rem;
	min-width: 2rem;
	text-align: center;
	padding-top: 0.2rem;
}

.benefit-content {
	flex: 1;
}

.benefit-content strong {
	display: block;
	color: var(--color-mine-shaft);
	margin-bottom: 0.3rem;
}

@media (max-width: 768px) {
	.benefits-list li {
		padding: 0.8rem;
	}

	.benefits-list i {
		font-size: 1.2rem;
		min-width: 1.5rem;
	}
}

.learning-list {
	list-style: none;
	padding: 0;
	margin: 2rem 0;
}

.learning-list li {
	display: flex;
	align-items: center;
	margin-bottom: 1.2rem;
	padding: 1rem;
	background: var(--color-alabaster);
	border-radius: 8px;
	transition: all 0.3s ease;
	border-left: 4px solid var(--color-red-berry);
}

.learning-list li:hover {
	transform: translateX(10px);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.learning-list i {
	font-size: 1.5rem;
	color: var(--color-red-berry);
	margin-right: 1.5rem;
	min-width: 2rem;
	text-align: center;
}

.learning-content {
	flex: 1;
}

.learning-content strong {
	display: block;
	color: var(--color-mine-shaft);
	font-size: 1.1rem;
	margin-bottom: 0.2rem;
}

.learning-content span {
	color: var(--color-gray);
	font-size: 0.9rem;
}

@media (max-width: 768px) {
	.learning-list li {
		padding: 0.8rem;
		margin-bottom: 1rem;
	}

	.learning-list i {
		font-size: 1.2rem;
		margin-right: 1rem;
		min-width: 1.5rem;
	}

	.learning-content strong {
		font-size: 1rem;
	}
}

.features-list {
	list-style: none;
	padding: 0;
	margin: 2rem 0;
}

.features-list li {
	display: flex;
	align-items: center;
	margin-bottom: 1.2rem;
	padding: 1.2rem;
	background: var(--color-alabaster);
	border-radius: 8px;
	transition: all 0.3s ease;
	border-left: 4px solid var(--color-red-berry);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.features-list li:hover {
	transform: translateX(10px);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.features-list i {
	font-size: 1.5rem;
	color: var(--color-red-berry);
	margin-right: 1.5rem;
	min-width: 2rem;
	text-align: center;
	transition: transform 0.3s ease;
}

.features-list li:hover i {
	transform: scale(1.2);
}

.feature-content {
	flex: 1;
}

.feature-content strong {
	display: block;
	color: var(--color-mine-shaft);
	font-size: 1.1rem;
	margin-bottom: 0.3rem;
}

.feature-content span {
	color: var(--color-gray);
	font-size: 0.9rem;
	line-height: 1.4;
}

@media (max-width: 768px) {
	.features-list li {
		padding: 1rem;
		margin-bottom: 1rem;
	}

	.features-list i {
		font-size: 1.2rem;
		margin-right: 1rem;
		min-width: 1.5rem;
	}

	.feature-content strong {
		font-size: 1rem;
	}
}

.project-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 2rem;
	margin: 2rem 0;
}

.project-card {
	background: var(--color-alabaster);
	border-radius: 12px;
	padding: 1.5rem;
	transition: all 0.3s ease;
	border: 1px solid rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
}

.project-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.project-icon {
	background: var(--color-red-berry);
	color: white;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
}

.project-icon i {
	font-size: 1.5rem;
}

.project-card h3 {
	color: var(--color-mine-shaft);
	margin: 0.5rem 0;
	font-size: 1.2rem;
}

.project-card p {
	color: var(--color-gray);
	margin-bottom: 1rem;
	flex-grow: 1;
}

.project-links {
	margin: 1rem 0;
}

.project-link {
	color: var(--color-red-berry);
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.9rem;
	transition: color 0.2s ease;
}

.project-link:hover {
	color: var(--color-mine-shaft);
}

.project-tip {
	background: rgba(var(--color-red-berry-rgb), 0.1);
	padding: 0.8rem;
	border-radius: 8px;
	font-size: 0.9rem;
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
}

.project-tip i {
	color: var(--color-red-berry);
}

.project-tip span {
	color: var(--color-mine-shaft);
	line-height: 1.4;
}

@media (max-width: 768px) {
	.project-grid {
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.project-card {
		padding: 1rem;
	}
}

.codepen-intro {
	background: var(--color-alabaster);
	border-radius: 12px;
	padding: 1.5rem;
	margin: 2rem 0;
	display: flex;
	gap: 2rem;
	align-items: flex-start;
}

.codepen-logo {
	font-size: 3rem;
	color: var(--color-mine-shaft);
	flex-shrink: 0;
}

.codepen-explanation h3 {
	margin-top: 0;
	color: var(--color-mine-shaft);
}

.codepen-explanation p {
	margin-bottom: 1rem;
}

.codepen-explanation ul {
	list-style: none;
	padding: 0;
}

.codepen-explanation li {
	margin: 0.5rem 0;
	display: flex;
	align-items: center;
	gap: 0.75rem;
}

.codepen-explanation li i {
	color: var(--color-red-berry);
	width: 1.5rem;
	text-align: center;
}

@media (max-width: 768px) {
	.codepen-intro {
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}

	.codepen-logo {
		font-size: 2rem;
	}
}
</style>
