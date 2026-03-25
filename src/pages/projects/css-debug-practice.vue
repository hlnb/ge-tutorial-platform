<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/">
						<i class="fa-solid fa-house mr-2"></i> Home
					</router-link>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">CSS Debug Practice</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">45 minutes</span>
			<span class="tag is-success">CSS</span>
			<span class="tag is-primary">Debugging</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-bug"></i> CSS Debug Practice
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li>Practise finding and fixing common CSS bugs in a real stylesheet</li>
				<li>Use browser DevTools to diagnose broken rules</li>
				<li>Recognise missing brackets, selector typos, syntax errors, and specificity conflicts</li>
				<li>Build a systematic debugging habit: fix one thing at a time, test, repeat</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should
				complete the
				<router-link to="/tutorials/beginner/why-your-css-isnt-working"
					>Why Your CSS Isn&rsquo;t Working</router-link
				>
				tutorial.
			</p>
		</div>

		<!-- ─── Part 1: Guided Practice (4 bugs) ─────────────── -->
		<section class="project-section">
			<h2 class="title is-2">Part 1 &mdash; Guided: Fix 4 Broken Styles</h2>
			<p>
				Start with a simple page that has <strong>4 intentional CSS bugs</strong>.
				Work through them one at a time using the debugging checklist from the tutorial.
			</p>

			<h3 class="title is-4 mt-5">Step 1: Create the HTML file</h3>
			<p>Create a new folder called <code>css-debug-practice</code>. Inside it, create <code>debug-practice.html</code>:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="guidedHtml"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						readOnly: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 2: Create the broken stylesheet</h3>
			<p>Inside a <code>css/</code> subfolder, create <code>debug.css</code> with these intentionally broken rules:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="guidedCss"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						readOnly: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 3: Open the page &amp; observe</h3>
			<p>Open <code>debug-practice.html</code> in your browser. You should notice:</p>
			<ul>
				<li>The h1 may not be styled at all</li>
				<li>The hero section has no background</li>
				<li>The nav links are still in a vertical list</li>
				<li>The intro paragraph font-size looks wrong</li>
			</ul>
			<p>Open DevTools (<strong>F12</strong>) and inspect the h1. What do you see in the Styles panel?</p>

			<h3 class="title is-4 mt-5">Step 4: Fix the bugs</h3>
			<div class="box">
				<ol>
					<li>
						<strong>Bug 1 &mdash; Missing closing bracket:</strong>
						The <code>h1</code> rule has no <code>}&hairsp;</code>. Add it. Save &amp; hard-refresh.
						Notice how fixing this one bracket may also fix rules below it.
					</li>
					<li>
						<strong>Bug 2 &mdash; Selector typo:</strong>
						The HTML uses <code>class="hero-section"</code> but the CSS says
						<code>.hero_section</code> (underscore). Change it to <code>.hero-section</code>.
					</li>
					<li>
						<strong>Bug 3 &mdash; Missing colon:</strong>
						<code>list-style none</code> should be <code>list-style: none;</code>
					</li>
					<li>
						<strong>Bug 4 &mdash; Space in value:</strong>
						<code>1.2 rem</code> should be <code>1.2rem</code> (no space).
					</li>
				</ol>
			</div>

			<h3 class="title is-4 mt-5">Step 5: Verify in DevTools</h3>
			<p>After all fixes, inspect each element and confirm no rules are crossed out or inactive:</p>
			<ul>
				<li><code>h1</code> &rarr; <code>color: navy; font-size: 2.5rem;</code></li>
				<li><code>.hero-section</code> &rarr; <code>background-color: #f0f0f0;</code></li>
				<li><code>nav ul</code> &rarr; <code>display: flex; list-style: none;</code></li>
				<li><code>.intro</code> &rarr; <code>font-size: 1.2rem;</code></li>
			</ul>

			<div class="notification is-success is-light mt-4">
				<p><i class="fas fa-check-circle mr-2"></i> <strong>Part 1 complete!</strong> You&rsquo;ve fixed 4 common CSS bugs. Move on to Part 2 for a bigger challenge.</p>
			</div>
		</section>

		<!-- ─── Part 2: Independent Challenge (7 bugs) ────────── -->
		<section class="project-section">
			<h2 class="title is-2">Part 2 &mdash; Challenge: 7 Bug Detective</h2>
			<p>
				This page is a small news-style site called <strong>The Daily Code</strong>.
				The stylesheet has <strong>7 bugs</strong> spread across 5 categories.
				Use DevTools to find and fix them all.
			</p>

			<h3 class="title is-4 mt-5">Step 1: Create the HTML file</h3>
			<p>In a new folder (or the same project folder), create <code>detective-challenge.html</code>:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="challengeHtml"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						readOnly: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 2: Create the broken stylesheet</h3>
			<p>Create <code>css/detective.css</code>:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="challengeCss"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						readOnly: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 3: Find all 7 bugs</h3>
			<p>Open the page in your browser. Use DevTools to systematically inspect each section. The 7 bugs span these categories:</p>

			<div class="box">
				<table class="table is-fullwidth">
					<thead>
						<tr>
							<th>Category</th>
							<th>How many?</th>
							<th>Hint</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Syntax error (missing punctuation)</td>
							<td>2</td>
							<td>One is a semicolon, one is a colon</td>
						</tr>
						<tr>
							<td>Missing bracket</td>
							<td>1</td>
							<td>It will break rules below it too</td>
						</tr>
						<tr>
							<td>Selector mismatch</td>
							<td>1</td>
							<td>Check underscores vs hyphens</td>
						</tr>
						<tr>
							<td>Value error</td>
							<td>1</td>
							<td>Watch for spaces where they shouldn&rsquo;t be</td>
						</tr>
						<tr>
							<td>Specificity / cascade conflict</td>
							<td>2</td>
							<td>One involves !important, one involves selector weight</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="notification is-warning is-light mt-4">
				<p>
					<i class="fas fa-exclamation-triangle mr-2"></i>
					<strong>Challenge rules:</strong> Fix one bug at a time. After each fix, save and hard-refresh to confirm. Document each bug and your fix in an HTML comment before moving to the next one.
				</p>
			</div>

			<h3 class="title is-4 mt-5">Step 4: Stretch goals</h3>
			<ul>
				<li>Add a third-party CSS file (like a simple reset) and create a conflict that your custom styles override</li>
				<li>Use the Computed tab in DevTools to trace an inherited property through three levels of nesting</li>
				<li>Create a z-index bug and fix it by adding the correct <code>position</code> property</li>
			</ul>
		</section>

		<!-- ─── Submit ─────────────────────────────────────────── -->
		<section class="project-section">
			<h2 class="title is-2">Submit Your Project</h2>
			<p>Once you&rsquo;ve completed both parts, you can:</p>
			<ul>
				<li>Save your fixed files for future reference</li>
				<li>Compare your fixes with a classmate&rsquo;s to see different approaches</li>
				<li>Create your own &ldquo;buggy stylesheet&rdquo; challenge for someone else</li>
			</ul>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Next Steps:</strong> Now that you can debug CSS, try the
					<router-link to="/tutorials/beginner/css-basics/flexbox">CSS Flexbox</router-link>
					tutorial to learn modern layout techniques &mdash; and use your new debugging skills
					whenever something goes wrong.
				</p>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

// ── Part 1: Guided Practice code ──────────────────────────────────
const guidedHtml = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Debug Practice</title>
    <link rel="stylesheet" href="css/debug.css">
</head>
<body>
    <header>
        <h1>My Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section id="hero" class="hero-section">
        <h2>Welcome</h2>
        <p class="intro">This is a test page for debugging CSS.</p>
    </section>
</body>
</html>`);

const guidedCss = ref(`/* Bug 1: Missing closing bracket */
h1 {
    color: navy;
    font-size: 2.5rem;

/* Bug 2: Selector typo */
.hero_section {
    background-color: #f0f0f0;
    padding: 3rem;
}

/* Bug 3: Missing colon */
nav ul {
    list-style none;
    display: flex;
    gap: 1.5rem;
}

/* Bug 4: Space in value */
.intro {
    font-size: 1.2 rem;
    line-height: 1.8;
}`);

// ── Part 2: Independent Challenge code ────────────────────────────
const challengeHtml = ref(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Detective Challenge</title>
    <link rel="stylesheet" href="css/detective.css">
</head>
<body>
    <header class="site-header">
        <h1>The Daily Code</h1>
        <nav class="main-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h2>Welcome to The Daily Code</h2>
        <p class="tagline">Your source for web development news and tutorials.</p>
    </section>

    <main class="content">
        <article class="featured-post">
            <h3>Getting Started with CSS Grid</h3>
            <p class="post-meta">Published: 15 January 2025</p>
            <p>CSS Grid is a powerful two-dimensional layout system that lets you
               create complex page layouts with simple, clean code. In this article,
               we explore the basics of rows, columns, and grid areas.</p>
            <a href="#" class="read-more">Read More</a>
        </article>

        <aside class="sidebar">
            <div class="widget">
                <h4>Popular Topics</h4>
                <ul class="topic-list">
                    <li>HTML Basics</li>
                    <li>CSS Layouts</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                </ul>
            </div>
            <div class="widget newsletter">
                <h4>Subscribe</h4>
                <p>Get weekly tips delivered to your inbox.</p>
                <button class="subscribe-btn">Sign Up</button>
            </div>
        </aside>
    </main>

    <footer class="site-footer">
        <p>&copy; 2025 The Daily Code. All rights reserved.</p>
    </footer>
</body>
</html>`);

const challengeCss = ref(`/* ============================================
   CSS Detective Challenge
   This stylesheet has 7 intentional bugs.
   ============================================ */

/* Global Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Georgia, serif;
    line-height: 1.6;
    color: #333;
}

/* Header */

/* BUG 1: Missing semicolon on first property */
.site-header {
    background-color: #1a1a2e
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.site-header h1 {
    color: #e0e0e0;
    font-size: 1.8rem;
}

/* Navigation */

/* BUG 2: Selector typo — HTML uses "main-nav", CSS says "main_nav" */
.main_nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
}

.main-nav a {
    color: #e0e0e0;
    text-decoration: none;
}

.main-nav a:hover {
    color: #ffd700;
}

/* Hero Section */

/* BUG 3: Missing closing bracket */
.hero {
    background-color: #16213e;
    color: white;
    text-align: center;
    padding: 4rem 2rem;

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

/* BUG 4: Space in value breaks the property */
.tagline {
    font-size: 1.2 rem;
    font-style: italic;
    opacity: 0.9;
}

/* Content Area */
.content {
    display: flex;
    gap: 2rem;
    max-width: 1100px;
    margin: 2rem auto;
    padding: 0 2rem;
}

.featured-post { flex: 2; }

.featured-post h3 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    color: #1a1a2e;
}

.post-meta {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

/* BUG 5: Specificity conflict — this rule loses to the one below */
a.read-more {
    color: #e94560;
    font-weight: bold;
    text-decoration: none;
}

.featured-post .read-more {
    color: #333;
}

/* Sidebar */
.sidebar { flex: 1; }

.widget {
    background: #f8f8f8;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
}

.widget h4 {
    margin-bottom: 0.75rem;
    color: #1a1a2e;
}

/* BUG 6: Missing colon in property declaration */
.topic-list {
    list-style none;
    padding-left: 0;
}

.topic-list li {
    padding: 0.3rem 0;
    border-bottom: 1px solid #e0e0e0;
}

/* BUG 7: !important forces white text on the newsletter widget,
   making the button text invisible against its white background */
.newsletter {
    background: #1a1a2e !important;
    color: white !important;
}

.subscribe-btn {
    background: white;
    color: #1a1a2e;
    border: none;
    padding: 0.6rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

/* Footer */
.site-footer {
    background: #1a1a2e;
    color: #999;
    text-align: center;
    padding: 1.5rem;
    margin-top: 3rem;
}`);
</script>

<script>
export default {
	frontmatter: {
		title: 'CSS Debug Practice',
		description: 'Find and fix common CSS bugs using browser DevTools and a systematic debugging checklist.',
		category: 'CSS Projects',
		level: 'Beginner',
		tags: ['CSS', 'Debugging', 'DevTools'],
		lastUpdated: '2025-03-25',
	},
};
</script>

<style scoped>
.project-section {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.codemirror-wrapper {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	margin: 1.5rem 0;
}

code {
	background-color: #f5f5f5;
	color: #485fc7;
	padding: 0.2rem 0.4rem;
	border-radius: 4px;
}

ol li,
ul li {
	margin-bottom: 0.75rem;
}
</style>
