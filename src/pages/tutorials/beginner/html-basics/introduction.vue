<template>
	<div class="tutorial-content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link :to="{ name: 'html-basics' }">HTML Basics</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Introduction to HTML</a>
				</li>
			</ul>
		</nav>

		<div class="tags mb-4">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">15 minutes</span>
			<span class="tag is-success">Theory</span>
		</div>

		<h1 class="title is-1">
			<i class="fab fa-html5 html-icon"></i>Introduction to HTML
		</h1>

		<div class="box box-info mb-6">
			<p>
				<strong><i class="fas fa-bullseye"></i> Goal:</strong> Understand what
				HTML is, its history, and how it works with HTTP to create web pages.
			</p>
		</div>

		<div class="box is-info mb-6">
			<h3 class="title is-4">
				<i class="fas fa-clipboard-check"></i> Prerequisites
			</h3>
			<p>
				If you've completed the Getting Started section, you'll already have:
			</p>
			<ul>
				<li><i class="fas fa-check"></i> VS Code installed with extensions</li>
				<li>
					<i class="fas fa-check"></i> A basic understanding of web technologies
				</li>
				<li><i class="fas fa-check"></i> Browser developer tools ready</li>
			</ul>
			<p>
				If you haven't completed Getting Started,
				<router-link to="/tutorials/getting-started"
					>start there first</router-link
				>.
			</p>
		</div>

		<h2 id="what-is-html" class="title is-3">
			<i class="fas fa-info-circle"></i> What is HTML?
		</h2>
		<p>
			HTML (HyperText Markup Language) is the standard markup language for
			creating web pages. It describes the structure and content of a web page
			using a system of tags and attributes.
		</p>

		<h2 id="a-brief-history" class="title is-3">
			<i class="fas fa-history"></i> A Brief History
		</h2>
		<p>
			HTML was created by Sir Tim Berners-Lee in 1989 while working at CERN
			(European Organization for Nuclear Research). He needed a way for
			scientists to share documents and data across different computers and
			networks.
		</p>

		<div class="timeline mb-6">
			<div class="timeline-item">
				<div class="timeline-marker">
					<i class="fas fa-circle"></i>
				</div>
				<div class="timeline-content">
					<p class="heading">1989</p>
					<p>Tim Berners-Lee invents the World Wide Web and HTML</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-marker">
					<i class="fas fa-circle"></i>
				</div>
				<div class="timeline-content">
					<p class="heading">1993</p>
					<p>HTML 1.0 is released</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-marker">
					<i class="fas fa-circle"></i>
				</div>
				<div class="timeline-content">
					<p class="heading">1995</p>
					<p>HTML 2.0 adds forms and tables</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-marker">
					<i class="fas fa-circle"></i>
				</div>
				<div class="timeline-content">
					<p class="heading">1997-1999</p>
					<p>HTML 4.0 introduces CSS support and deprecates styling tags</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-marker">
					<i class="fas fa-circle"></i>
				</div>
				<div class="timeline-content">
					<p class="heading">2014</p>
					<p>
						HTML5 becomes the official standard, representing a complete
						overhaul of HTML
					</p>
				</div>
			</div>
		</div>

		<div class="box is-info mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> Understanding HTML5
			</h3>
			<p>
				HTML5 isn't just a new version of HTML4 - it's a complete reimagining of
				the standard. It introduces:
			</p>
			<ul>
				<li>
					<i class="fas fa-play-circle"></i>
					<strong>Native multimedia support</strong> - Audio and video playback
					without plugins
				</li>
				<li>
					<i class="fas fa-paint-brush"></i>
					<strong>Canvas and SVG</strong> - Built-in tools for graphics and
					animations
				</li>
				<li>
					<i class="fas fa-mobile-alt"></i>
					<strong>Mobile-first design</strong> - Better support for mobile
					devices and responsive layouts
				</li>
				<li>
					<i class="fas fa-database"></i> <strong>Local storage</strong> - Store
					data on the client side
				</li>
				<li>
					<i class="fas fa-puzzle-piece"></i>
					<strong>Semantic elements</strong> - New tags that give meaning to
					page structure
				</li>
				<li>
					<i class="fas fa-gamepad"></i>
					<strong>Game development</strong> - APIs for creating browser-based
					games
				</li>
				<li>
					<i class="fas fa-wifi"></i>
					<strong>Real-time communication</strong> - WebSockets and Server-Sent
					Events
				</li>
			</ul>
			<p class="mt-4">
				<i class="fas fa-info-circle"></i> HTML5 represents a shift from HTML
				being just a markup language to becoming a platform for web
				applications.
			</p>
		</div>

		<h2 id="how-html-works-with-http" class="title is-3">
			<i class="fas fa-exchange-alt"></i> How HTML Works with HTTP
		</h2>
		<p>
			HTML works hand-in-hand with HTTP (HyperText Transfer Protocol) to deliver
			web pages:
		</p>

		<div class="http-diagram mb-4">
			<svg viewBox="0 0 800 300" class="http-svg">
				<!-- Browser -->
				<g class="browser">
					<rect
						x="50"
						y="100"
						width="200"
						height="150"
						rx="10"
						fill="#f5f5f5"
						stroke="#3273dc"
						stroke-width="2"
					/>
					<rect x="50" y="100" width="200" height="30" rx="10" fill="#3273dc" />
					<circle cx="70" cy="115" r="5" fill="#ff3860" />
					<circle cx="90" cy="115" r="5" fill="#ffdd57" />
					<circle cx="110" cy="115" r="5" fill="#23d160" />
					<!-- Browser Content -->
					<foreignObject x="60" y="140" width="180" height="100">
						<div xmlns="http://www.w3.org/1999/xhtml" class="browser-content">
							<div class="loading-spinner">
								<i class="fas fa-circle-notch fa-spin"></i>
							</div>
							<div class="rendered-content">
								<div class="mini-heading"></div>
								<div class="mini-text"></div>
								<div class="mini-text"></div>
							</div>
						</div>
					</foreignObject>
					<text x="150" y="240" text-anchor="middle" class="diagram-text">
						Browser
					</text>
				</g>

				<!-- Server -->
				<g class="server">
					<rect
						x="550"
						y="100"
						width="200"
						height="150"
						rx="10"
						fill="#f5f5f5"
						stroke="#3273dc"
						stroke-width="2"
					/>
					<path d="M 550,190 L 750,190" stroke="#3273dc" stroke-width="2" />
					<path d="M 550,230 L 750,230" stroke="#3273dc" stroke-width="2" />
					<text x="650" y="180" text-anchor="middle" class="diagram-text">
						Web Server
					</text>
					<!-- Server glow effect -->
					<circle cx="650" cy="160" r="5" class="server-active">
						<animate
							attributeName="opacity"
							values="0;1;0"
							dur="2s"
							repeatCount="indefinite"
						/>
					</circle>
				</g>

				<!-- Request Arrow -->
				<g class="request">
					<path
						d="M 250,150 L 550,150"
						stroke="#23d160"
						stroke-width="2"
						marker-end="url(#arrowhead)"
					/>
					<text x="400" y="140" text-anchor="middle" class="diagram-text">
						HTTP Request
					</text>
					<!-- Request icon -->
					<circle cx="380" cy="150" r="10" fill="#23d160" class="request-icon">
						<animate
							attributeName="cx"
							values="280;520"
							dur="3s"
							repeatCount="indefinite"
						/>
					</circle>
				</g>

				<!-- Response Arrow -->
				<g class="response">
					<path
						d="M 550,200 L 250,200"
						stroke="#ff3860"
						stroke-width="2"
						marker-end="url(#arrowhead)"
					/>
					<text x="400" y="240" text-anchor="middle" class="diagram-text">
						HTML Response
					</text>
					<!-- HTML snippet in response -->
					<g class="html-snippet" transform="translate(380, 200)">
						<rect width="60" height="30" rx="5" fill="#fff" stroke="#ff3860" />
						<text x="30" y="20" text-anchor="middle" class="code-text">
							&lt;html&gt;
						</text>
						<animateTransform
							attributeName="transform"
							type="translate"
							values="520,200; 280,200"
							dur="3s"
							begin="1.5s"
							repeatCount="indefinite"
						/>
					</g>
				</g>

				<!-- Arrowhead definition -->
				<defs>
					<marker
						id="arrowhead"
						markerWidth="10"
						markerHeight="7"
						refX="9"
						refY="3.5"
						orient="auto"
					>
						<polygon points="0 0, 10 3.5, 0 7" fill="#3273dc" />
					</marker>
				</defs>

				<!-- Tooltips -->
				<g class="tooltips">
					<title>
						Click for more information about the HTTP request-response cycle
					</title>
				</g>
			</svg>
		</div>

		<ol>
			<li>
				<i class="fas fa-arrow-right"></i> Your browser sends an HTTP request to
				a web server
			</li>
			<li>
				<i class="fas fa-arrow-left"></i> The server responds with an HTML
				document
			</li>
			<li>
				<i class="fas fa-desktop"></i> Your browser reads the HTML and renders
				it as a formatted web page
			</li>
		</ol>

		<h2 id="basic-tools-you-need" class="title is-3">
			<i class="fas fa-tools"></i> Basic Tools You'll Need
		</h2>

		<div class="columns">
			<div class="column is-6">
				<div class="box">
					<h4 class="title is-4"><i class="fas fa-edit"></i> Text Editor</h4>
					<ul>
						<li><i class="fas fa-star"></i> VS Code (recommended)</li>
						<li><i class="fas fa-edit"></i> Sublime Text</li>
						<li><i class="fas fa-edit"></i> Notepad++ (Windows)</li>
					</ul>
				</div>
			</div>

			<div class="column is-6">
				<div class="box">
					<h4 class="title is-4"><i class="fas fa-globe"></i> Web Browser</h4>
					<ul>
						<li><i class="fas fa-star"></i> Chrome (recommended)</li>
						<li><i class="fas fa-globe"></i> Firefox</li>
						<li><i class="fas fa-globe"></i> Safari</li>
						<li><i class="fas fa-globe"></i> Edge</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="box is-info mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> VS Code Features
			</h3>
			<p>
				While you can use any text editor, we recommend VS Code because it
				offers:
			</p>
			<ul>
				<li><i class="fas fa-check"></i> Syntax highlighting</li>
				<li><i class="fas fa-check"></i> Auto-completion</li>
				<li><i class="fas fa-check"></i> Live preview extensions</li>
			</ul>
		</div>

		<h2 id="html-elements" class="title is-3">
			<i class="fas fa-code"></i> HTML Elements
		</h2>
		<p>
			HTML uses "elements" to structure content. An element typically consists
			of:
		</p>
		<ul>
			<li>An opening tag: <code>&lt;tagname&gt;</code></li>
			<li>The content</li>
			<li>A closing tag: <code>&lt;/tagname&gt;</code></li>
		</ul>

		<div class="box">
			<h4 class="title is-4">Example:</h4>
			<CodeMirror v-model="elementExample" :height="80" :readonly="true" />
		</div>

		<div class="box is-info mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> Practice Options
			</h3>
			<p>You can complete the exercises in two ways:</p>
			<div class="columns mt-3">
				<div class="column is-6">
					<div class="notification is-primary is-light">
						<h4 class="title is-5">
							<i class="fas fa-laptop-code"></i> Built-in Editor
						</h4>
						<ul>
							<li>
								<i class="fas fa-check"></i> Use the code editor right here in
								the tutorial
							</li>
							<li><i class="fas fa-check"></i> See instant results</li>
							<li><i class="fas fa-check"></i> No setup required</li>
						</ul>
					</div>
				</div>
				<div class="column is-6">
					<div class="notification is-info is-light">
						<h4 class="title is-5">
							<i class="fas fa-folder-open"></i> Local Development
						</h4>
						<ul>
							<li>
								<i class="fas fa-check"></i> Use your own text editor (VS Code
								recommended)
							</li>
							<li><i class="fas fa-check"></i> Create real project files</li>
							<li>
								<i class="fas fa-check"></i> Build your portfolio as you learn
							</li>
						</ul>
					</div>
				</div>
			</div>
			<p class="mt-3">
				<i class="fas fa-info-circle"></i> <strong>Tip:</strong> We recommend
				trying both approaches! The built-in editor is great for quick practice,
				while local development helps you learn real-world workflows.
			</p>
		</div>

		<h2 id="try-it-yourself" class="title is-3">
			<i class="fas fa-laptop-code"></i> Try It Yourself
		</h2>

		<div class="box">
			<div class="columns">
				<div class="column is-6">
					<h4 class="title is-4"><i class="fas fa-code"></i> Code</h4>
					<CodeMirror
						v-model="firstExample"
						:height="200"
						@change="updatePreview"
					/>
				</div>
				<div class="column is-6">
					<h4 class="title is-4"><i class="fas fa-eye"></i> Preview</h4>
					<div class="preview-container" v-html="sanitizedFirstPreview"></div>
				</div>
			</div>
		</div>

		<div class="box">
			<h3 class="title is-4">
				<i class="fas fa-tasks"></i> Interactive Exercise: Create a Simple
				Profile
			</h3>
			<p>Using what you've learned, create a simple profile with:</p>
			<ul>
				<li>A heading with your name</li>
				<li>A paragraph about yourself</li>
				<li>Another heading for "My Hobbies"</li>
				<li>A paragraph listing your hobbies</li>
			</ul>

			<div class="columns mt-4">
				<div class="column is-6">
					<h4 class="title is-5"><i class="fas fa-code"></i> Your Code</h4>
					<CodeMirror
						v-model="exerciseCode"
						:height="200"
						@change="updateExercisePreview"
					/>
				</div>
				<div class="column is-6">
					<h4 class="title is-5"><i class="fas fa-eye"></i> Your Result</h4>
					<div
						class="preview-container"
						v-html="sanitizedExercisePreview"
					></div>
				</div>
			</div>

			<details class="mt-4">
				<summary class="button is-info is-light">
					<i class="fas fa-lightbulb"></i> Click to see a solution
				</summary>
				<div class="solution-container mt-4">
					<CodeMirror
						v-model="solutionExample"
						:height="150"
						:readonly="true"
					/>
				</div>
			</details>
		</div>

		<div class="box mt-6">
			<h2 id="your-learning-journey" class="title is-3">
				<i class="fas fa-project-diagram section-icon"></i> Your Learning
				Journey
			</h2>

			<p>
				Throughout this HTML basics tutorial series, you'll build two complete
				websites from scratch:
			</p>

			<div class="columns mt-4">
				<div class="column">
					<div class="card">
						<div class="card-content">
							<h3 class="title is-4">
								<i class="fas fa-utensils mr-2"></i> Black Swan Bistro
							</h3>
							<p class="subtitle is-6">A restaurant website</p>
							<div class="content">
								<p>You'll create this website step by step, learning:</p>
								<ul>
									<li>Basic page structure</li>
									<li>Text formatting and links</li>
									<li>Adding images and media</li>
									<li>Creating navigation</li>
									<li>Building forms</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<div class="card-content">
							<h3 class="title is-4">
								<i class="fas fa-island-tropical mr-2"></i> Rotto Rocks
							</h3>
							<p class="subtitle is-6">A tourism website for Rottnest Island</p>
							<div class="content">
								<p>This more complex project will teach you:</p>
								<ul>
									<li>Multi-page website structure</li>
									<li>Complex navigation systems</li>
									<li>Image galleries</li>
									<li>Location information</li>
									<li>Booking forms</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="notification is-info is-light mt-4">
				<p>
					<strong>Progressive Learning:</strong> Each tutorial builds upon the
					previous ones, gradually adding features to these websites. By the end
					of this HTML series, you'll have two complete, well-structured
					websites ready for styling with CSS! The solid HTML foundation you
					build here will make adding beautiful designs and layouts much easier
					in the CSS tutorials.
				</p>
			</div>
		</div>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/html-basics/introduction'" />

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import DOMPurify from 'dompurify';
import { useHead } from '@vueuse/head';
import { usePageSections } from '@/composables/usePageSections';

const frontmatter = {
	title: 'Introduction to HTML',
	description: 'Learn about HTML, its history, and create your first web page',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'html'],
};

useHead({
	frontmatter,
});

const sections = [
	{
		id: 'introduction',
		title: 'Introduction to HTML',
		subsections: [],
	},
	{
		id: 'what-is-html',
		title: 'What is HTML?',
		subsections: [],
	},
	{
		id: 'a-brief-history',
		title: 'A Brief History',
		subsections: [],
	},
	{
		id: 'how-html-works-with-http',
		title: 'How HTML Works with HTTP',
		subsections: [],
	},
	{
		id: 'basic-tools-you-need',
		title: 'Basic Tools You Need',
		subsections: [],
	},
	{
		id: 'html-elements',
		title: 'HTML Elements',
		subsections: [],
	},
	{
		id: 'try-it-yourself',
		title: 'Try It Yourself',
		subsections: [],
	},
	{
		id: 'your-learning-journey',
		title: 'Your Learning Journey',
		subsections: [],
	},
	{
		id: 'exercises',
		title: 'Exercises',
		subsections: [],
	},
];

const { pageSections } = usePageSections(sections);

const elementExample = ref('<p>This is a paragraph.</p>');

const firstExample = ref(`<h1>Hello, World!</h1>
<p>This is my first HTML element.</p>`);

const exerciseCode = ref(`<!-- Write your profile here -->
<h1></h1>
<p></p>

<h2>My Hobbies</h2>
<p></p>`);

const solutionExample = ref(`<h1>John Smith</h1>
<p>Hi! I'm John, a web development student.</p>

<h2>My Hobbies</h2>
<p>I enjoy reading, hiking, and learning to code!</p>`);

const sanitizedFirstPreview = computed(() =>
	DOMPurify.sanitize(firstExample.value),
);
const sanitizedExercisePreview = computed(() =>
	DOMPurify.sanitize(exerciseCode.value),
);

const updatePreview = () => {
	// Preview updates automatically through computed properties
};

const updateExercisePreview = () => {
	// Preview updates automatically through computed properties
};
</script>

<style scoped>
.preview-container {
	padding: 1rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	min-height: 200px;
	background: white;
	overflow-y: auto;
}

.solution-container {
	border-top: 1px solid #dbdbdb;
	padding-top: 1rem;
}

/* Updated Timeline Styles */
.timeline {
	position: relative;
	max-width: 800px;
	margin: 2rem auto;
	padding: 2rem;
}

/* Vertical line */
.timeline::before {
	content: '';
	position: absolute;
	top: 0;
	left: 8px;
	height: 100%;
	width: 2px;
	background: #3273dc;
}

.timeline-item {
	position: relative;
	padding-bottom: 2.5rem;
}

.timeline-item:last-child {
	padding-bottom: 0;
}

.timeline-marker {
	position: absolute;
	left: 0;
	top: 0;
}

.timeline-marker i {
	position: relative;
	left: -4px;
	font-size: 12px;
	color: #3273dc;
	background: white;
	padding: 2px;
}

.timeline-content {
	padding-left: 2rem;
	position: relative;
}

.timeline-content .heading {
	color: #3273dc;
	font-weight: bold;
	margin-bottom: 0.5rem;
}

.timeline-content p {
	margin: 0;
}

.fas {
	margin-right: 0.5rem;
}

li .fas {
	font-size: 0.9em;
}

.http-diagram {
	width: 100%;
	max-width: 800px;
	margin: 2rem auto;
}

.http-svg {
	width: 100%;
	height: auto;
}

.diagram-text {
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		sans-serif;
	font-size: 14px;
	fill: #363636;
}

.request path {
	animation: dash 3s linear infinite;
}

.response path {
	animation: dash 3s linear infinite;
	animation-delay: 1.5s;
}

@keyframes dash {
	0% {
		stroke-dasharray: 15;
		stroke-dashoffset: 300;
	}
	100% {
		stroke-dasharray: 15;
		stroke-dashoffset: 0;
	}
}

.browser-content {
	width: 100%;
	height: 100%;
	position: relative;
}

.loading-spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 24px;
	color: #3273dc;
	opacity: 0;
	animation: showSpinner 3s linear infinite;
}

.rendered-content {
	padding: 10px;
	opacity: 0;
	animation: showContent 3s linear infinite;
}

.mini-heading {
	height: 10px;
	width: 80%;
	background: #dbdbdb;
	margin-bottom: 8px;
	border-radius: 2px;
}

.mini-text {
	height: 6px;
	width: 90%;
	background: #dbdbdb;
	margin-bottom: 6px;
	border-radius: 2px;
}

.mini-text:last-child {
	width: 70%;
}

.server-active {
	fill: #23d160;
}

.code-text {
	font-family: monospace;
	font-size: 12px;
	fill: #ff3860;
}

@keyframes showSpinner {
	0%,
	100% {
		opacity: 0;
	}
	25%,
	75% {
		opacity: 1;
	}
}

@keyframes showContent {
	0%,
	50% {
		opacity: 0;
	}
	75%,
	100% {
		opacity: 1;
	}
}

.html-snippet {
	animation: fadeInOut 3s linear infinite;
}

@keyframes fadeInOut {
	0%,
	50% {
		opacity: 0;
	}
	75%,
	100% {
		opacity: 1;
	}
}
.html-icon {
	color: #e34f26;
}

/* Add these styles */
.columns {
	margin-top: 0;
}

/* If you want the left nav to stick while scrolling */
@media screen and (min-width: 769px) {
	.column.is-3 {
		position: sticky;
		top: 1rem;
		height: calc(100vh - 2rem);
		overflow-y: auto;
	}
}
</style>
