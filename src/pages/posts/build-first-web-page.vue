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
			<section class="section">
				<div class="content">
					<article class="blog-post">
						<!-- Hero Image Section -->
						<div class="post-hero">
							<!-- Background image set in CSS -->
							<h2 class="title is-1">
								<i class="fas fa-globe section-icon"></i> Getting Started with
								HTML and CSS: Building Your First Web Page
							</h2>
						</div>
						<p>
							Want to create your own website but don't know where to start?
							This beginner-friendly guide will walk you through creating a
							simple web page using HTML and CSS. By the end of this tutorial,
							you'll have a basic understanding of web development fundamentals
							and a working webpage to show for it!
						</p>

						<h2>Prerequisites:</h2>
						<ul>
							<li>A computer with internet access</li>
							<li>Basic familiarity with using a text editor</li>
							<li>No prior coding experience required</li>
						</ul>

						<p>
							Creating your first web page can be both exciting and rewarding.
							HTML (HyperText Markup Language) forms the structure of a webpage,
							while CSS (Cascading Style Sheets) enhances its visual appearance.
						</p>

						<h2>Step 1: Setting Up Your Project</h2>
						<p>
							Before we begin, you'll need a code editor like VS Code or Sublime
							Text. These tools make writing and organising your HTML and CSS
							files easier. They provide features like syntax highlighting and
							auto-completion that make coding much easier than using a basic
							text editor.
						</p>

						<p>
							Create a new folder on your computer and name it
							"my-first-website". Inside this folder, create two files:
						</p>
						<ul>
							<li>index.html (for the HTML structure)</li>
							<li>style.css (for styling with CSS)</li>
						</ul>

						<h2>Step 2: Writing Your First HTML</h2>
						<p>
							HTML uses tags to structure your content. Each tag serves a
							specific purpose in organizing your webpage. Here's a basic
							template to get you started:
						</p>

						<p>
							Open index.html in your code editor and add the following code:
						</p>

						<!-- HTML Code Example -->
						<div class="code-example">
							<h3>HTML Structure</h3>
							<CodeMirror
								v-model="htmlCode"
								:options="{
									mode: 'xml',
									theme: 'monokai',
									lineNumbers: true,
									readOnly: true,
									lineWrapping: true,
									viewportMargin: Infinity,
								}"
							/>
						</div>

						<p>Let's break down what each main section does:</p>
						<ul>
							<li>
								The &lt;head&gt; section contains information about your webpage
								that isn't visible to users
							</li>
							<li>The &lt;body&gt; section contains all the visible content</li>
							<li>
								&lt;header&gt;, &lt;main&gt;, and &lt;footer&gt; are semantic
								tags that help organize your content in a meaningful way
							</li>
							<li>&lt;h1&gt; is the most important heading on your page</li>
							<li>&lt;p&gt; tags contain paragraph text</li>
						</ul>

						<h2>Step 3: Adding CSS for Styling</h2>
						<p>
							Now, let's make the page look better by adding styles in
							style.css. CSS uses selectors to target HTML elements and
							properties to define their appearance:
						</p>

						<!-- CSS Code Example -->
						<div class="code-example">
							<h3>CSS Styling</h3>
							<CodeMirror
								v-model="cssCode"
								:options="{
									mode: 'css',
									theme: 'monokai',
									lineNumbers: true,
									readOnly: true,
									lineWrapping: true,
									viewportMargin: Infinity,
								}"
							/>
						</div>

						<h2>Understanding CSS Properties:</h2>
						<ul>
							<li>
								font-family: Specifies what fonts to use, with fallbacks after
								the comma
							</li>
							<li>margin: Controls space outside an element</li>
							<li>padding: Controls space inside an element</li>
							<li>
								background-color/background: Sets the background color (can use
								color names, hex codes, or RGB values)
							</li>
							<li>color: Sets the text color</li>
							<li>border-radius: Rounds the corners of an element</li>
							<li>
								text-align: Controls how text is aligned within an element
							</li>
						</ul>

						<h2>Common Issues and Troubleshooting</h2>
						<ul>
							<li>
								If your styles aren't appearing, make sure your CSS file is in
								the same folder as your HTML file
							</li>
							<li>Check that the file names match exactly in your link tag</li>
							<li>
								Verify that all your CSS curly braces {} and semicolons ; are in
								place
							</li>
							<li>
								Use your browser's developer tools (F12) to inspect elements and
								debug issues
							</li>
						</ul>

						<h2>Try These Modifications!</h2>
						<p>
							Now that you have a basic page, try these simple changes to
							practice:
						</p>
						<ul>
							<li>Change the background color to your favorite color</li>
							<li>Add a new paragraph in the main section</li>
							<li>Modify the header text to say something different</li>
							<li>Try adding an image using the &lt;img&gt; tag</li>
						</ul>

						<h2>Next Steps</h2>
						<p>
							Congratulations! You've built your first web page using HTML and
							CSS.
						</p>

						<p>You've learned about:</p>
						<ul>
							<li>Basic HTML structure</li>
							<li>CSS styling fundamentals</li>
							<li>File organization</li>
							<li>How to view your page in a browser</li>
						</ul>

						<p>Ready for More?</p>
						<ul>
							<li>Learn about responsive design</li>
							<li>Explore JavaScript basics</li>
							<li>Discover CSS flexbox and grid</li>
							<li>Start building more complex layouts</li>
						</ul>

						<p>
							If you have any questions, drop an email or
							<router-link to="/community">join our community</router-link>!
							Happy coding! 🎉
						</p>

						<BlogSignup />
					</article>
				</div>
			</section>
		</div>
	</PostVisibility>
	<PostNavigation :current-path="'build-first-web-page'" />
</template>

<script>
export const frontmatter = {
	title: 'Build Your First Web Page',
	date: '2025-02-12', // Future date for testing
	author: 'Helen Burgess',
	image: '/images/posts/first-webpage-guide.svg',
	description:
		'Learn how to build your first web page from scratch with HTML and CSS.',
	tags: ['HTML', 'CSS', 'Web Development', 'Beginners'],
	status: 'published',
};
</script>

<script setup>
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import CodeMirror from '@/components/CodeMirror.vue';
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import BlogSignup from '../../components/BlogSignup.vue';
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

const htmlCode = ref(`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>My First Web Page</title>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<header>
			<h1>Welcome to My Website</h1>
		</header>
		<main>
			<p>This is my first webpage. I'm learning HTML and CSS!</p>
		</main>
		<footer>
			<p>&copy; 2025 My First Website</p>
		</footer>
	</body>
</html>`);

const cssCode = ref(`/* Basic reset and body styles */
body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
	text-align: center;
	background-color: #f4f4f4;
}

/* Header styling */
header {
	background: #333;
	color: white;
	padding: 20px;
}

/* Main content area styling */
main {
	margin: 20px;
	padding: 20px;
	background: white;
	border-radius: 5px;
}

/* Footer styling */
footer {
	margin-top: 20px;
	padding: 10px;
	background: #222;
	color: white;
}`);

onMounted(() => {
	emit('update:frontmatter', frontmatter);
});
</script>

<style scoped>
/* ... Copy all styles from internet-everywhere.vue ... */

.blog-post {
	max-width: 80vw;
	margin: 0 auto;
	padding: 2rem;
}

.content {
	line-height: 1.6;
	font-size: 1.1rem;
}

.hero {
	background-image: url('/images/posts/first-webpage-guide.svg');
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

.checklist,
.process-list,
.role-list {
	list-style: none;
	padding-left: 0;
	margin: 2rem 0;
}

.checklist li,
.process-list li,
.role-list li {
	margin-bottom: 1rem;
	padding-left: 2rem;
	position: relative;
}

.checklist li i,
.process-list li i,
.role-list li i {
	position: absolute;
	left: 0;
	top: 0.25rem;
	color: var(--color-red-berry);
}

.cta-box {
	background-color: var(--color-snow);
	border-radius: 8px;
	padding: 2rem;
	margin: 2rem 0;
	text-align: center;
}

.cta-box h3 {
	color: var(--color-red-berry);
	margin-bottom: 1rem;
}

.cta-box i {
	color: var(--color-red-berry);
	margin-right: 0.5rem;
}

@media (max-width: 768px) {
	.blog-post {
		padding: 1rem;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.5rem;
	}
}
@media (max-width: 768px) {
	.hero {
		min-height: 300px;
	}

	.hero h1 {
		font-size: 1.8rem;
	}
}

.code-example {
	margin: 2rem 0;
	background: var(--color-alabaster);
	border-radius: 8px;
	padding: 1.5rem;
}

.code-example h3 {
	color: var(--color-mine-shaft);
	margin-bottom: 1rem;
	font-size: 1.2rem;
}

/* Style for the CodeMirror container */
:deep(.CodeMirror) {
	height: auto;
	border-radius: 4px;
	font-family: 'Fira Code', monospace;
	font-size: 0.9rem;
	line-height: 1.5;
}

:deep(.CodeMirror-scroll) {
	max-height: 400px;
}

@media (max-width: 768px) {
	.code-example {
		padding: 1rem;
	}

	:deep(.CodeMirror) {
		font-size: 0.8rem;
	}
}
</style>
