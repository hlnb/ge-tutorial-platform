<template>
	<div class="container section">
		<div class="tutorial-content">
			<!-- Breadcrumb -->
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/">
							<i class="fa-solid fa-house mr-2"></i> Home
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials">Tutorials</router-link>
					</li>
					<li>
						<router-link to="/tutorials/getting-started">Getting Started</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Files, Folders &amp; Project Structure</a>
					</li>
				</ul>
			</nav>

			<!-- Tutorial Metadata -->
			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Beginner</span>
					<span class="tag is-light">20 minutes</span>
					<span class="tag is-light">Foundation</span>
					<span class="tag is-light">Setup</span>
				</div>
			</div>

			<h1>Files, Folders, and Project Structure</h1>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 1: ANTICIPATORY SET -->
			<!-- ═══════════════════════════════════════════════════ -->
			<AnticipatorySet
				title="Before You Write a Single Line of Code&hellip;"
				icon="📁"
				:hook="`<p>Imagine you just moved into a brand new house. You have boxes of stuff everywhere &mdash; clothes, books, kitchen supplies, random cables. You <em>could</em> just dump everything on the floor and start living. But within a week you won&rsquo;t be able to find anything, and you&rsquo;ll dread coming home.</p><p>Web projects are exactly the same. Before you write any HTML, CSS, or JavaScript, you need a clean, organised place to put it all. This tutorial is about building that house &mdash; the folder structure, file names, and conventions that professional developers use every single day.</p>`"
				:reflection-prompts="[
					'Have you ever lost a file because you couldn&rsquo;t remember where you saved it?',
					'Do you have a Downloads folder with hundreds of unsorted files right now?',
					'What would happen if two people tried to work on a project with no agreed file structure?'
				]"
				connection="In the next 20 minutes, you&rsquo;ll learn the simple system that prevents all of these headaches &mdash; and you&rsquo;ll set up your first proper project folder."
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 2: LEARNING OBJECTIVES -->
			<!-- ═══════════════════════════════════════════════════ -->
			<LearningObjectives
				:objectives="[
					'Create a standard web project folder structure from scratch',
					'Apply professional file and folder naming conventions',
					'Explain why index.html is the default entry point for websites',
					'Organise CSS, JavaScript, and image files into logical folders',
					'Identify common mistakes that break file paths and links'
				]"
				purpose="Every website you build &mdash; from a one-page portfolio to a full web app &mdash; starts with the same foundation: a well-organised project folder. Getting this right from day one saves you hours of debugging broken links, missing images, and tangled file paths. It also makes your projects instantly understandable to other developers (and to future-you)."
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 3: INPUT -->
			<!-- New Information & Concepts -->
			<!-- ═══════════════════════════════════════════════════ -->

			<h2 id="why-structure-matters">Why Project Structure Matters</h2>

			<p>When you visit a website, your browser needs to find and load several files: the HTML page, stylesheets, scripts, images, and fonts. Every one of those files lives at a specific <strong>path</strong> on the server. If the path is wrong, the file doesn&rsquo;t load &mdash; and you get a broken page.</p>

			<p>A consistent folder structure means:</p>

			<ul>
				<li><strong>Your links always work</strong> &mdash; because files are where you expect them to be</li>
				<li><strong>Other people can help</strong> &mdash; because the layout follows industry conventions</li>
				<li><strong>Your project scales</strong> &mdash; adding new pages or features doesn&rsquo;t create chaos</li>
				<li><strong>Deployment is simpler</strong> &mdash; hosting platforms expect standard structures</li>
			</ul>

			<div class="box analogy-box">
				<strong><i class="fas fa-lightbulb mr-2"></i>Think of it like a filing cabinet:</strong>
				<ul>
					<li>The <strong>cabinet</strong> is your project folder</li>
					<li>Each <strong>drawer</strong> is a subfolder (css, js, images)</li>
					<li>Each <strong>file</strong> inside is labelled clearly so you can grab it instantly</li>
				</ul>
				<p class="mt-2">Nobody labels a drawer &ldquo;stuff2-FINAL(1)&rdquo; &mdash; and you shouldn&rsquo;t name your files that way either.</p>
			</div>

			<h2 id="standard-project-folder">The Standard Project Folder</h2>

			<p>Here is the folder structure used by most simple websites. You&rsquo;ll see this pattern everywhere &mdash; in courses, documentation, and real production sites:</p>

			<pre><code>my-first-website/
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── logo.png
    ├── hero-banner.jpg
    └── icons/
        ├── email.svg
        └── phone.svg</code></pre>

			<p>Let&rsquo;s break down each piece:</p>

			<h3>The root folder</h3>
			<p>The top-level folder (<code>my-first-website/</code>) is your <strong>project root</strong>. Everything lives inside it. When you open this folder in VS Code, it becomes your <strong>workspace</strong>.</p>

			<h3>index.html &mdash; The front door</h3>
			<p>Web servers look for a file called <code>index.html</code> by default. When someone visits <code>yoursite.com</code>, the server automatically serves <code>index.html</code>. That&rsquo;s why your homepage should always be called <code>index.html</code> &mdash; not <code>home.html</code>, not <code>main.html</code>, not <code>page1.html</code>.</p>

			<div class="box highlight-box">
				<strong><i class="fas fa-info-circle mr-2"></i>Why &ldquo;index&rdquo;?</strong>
				<p>The name comes from the early web, when servers would show an <em>index</em> (a directory listing) of files if no default page was specified. The convention stuck, and today every web server in the world knows to look for <code>index.html</code> first.</p>
			</div>

			<h3>Additional HTML pages</h3>
			<p>Other pages like <code>about.html</code> and <code>contact.html</code> sit in the root alongside <code>index.html</code>. You link between them with simple relative paths:</p>

			<pre><code class="language-html">&lt;a href="about.html"&gt;About Us&lt;/a&gt;
&lt;a href="contact.html"&gt;Contact&lt;/a&gt;</code></pre>

			<h3>The css/ folder</h3>
			<p>All your stylesheets go here. Start with a single <code>style.css</code> file. As your project grows, you might add more:</p>

			<pre><code>css/
├── style.css          &lt;!-- Main styles --&gt;
├── reset.css          &lt;!-- Browser reset (optional) --&gt;
└── responsive.css     &lt;!-- Media queries (optional) --&gt;</code></pre>

			<p>You link to it from your HTML like this:</p>

			<pre><code class="language-html">&lt;link rel="stylesheet" href="css/style.css"&gt;</code></pre>

			<h3>The js/ folder</h3>
			<p>JavaScript files live here. Start with <code>main.js</code> and add more as needed:</p>

			<pre><code class="language-html">&lt;script src="js/main.js"&gt;&lt;/script&gt;</code></pre>

			<h3>The images/ folder</h3>
			<p>All images, icons, and graphics go here. For larger projects, you can create subfolders like <code>images/icons/</code> or <code>images/blog/</code> to keep things tidy.</p>

			<!-- Hunter Element 5: Checking for Understanding #1 -->
			<CheckpointBox
				title="⏸️ Pause &amp; Check: The Basics"
				description="Make sure you&rsquo;ve got the fundamentals before we continue:"
				:questions="checkpointQuestions1"
				:show-self-assessment="true"
			/>

			<h2 id="naming-conventions">File and Folder Naming Rules</h2>

			<p>Bad file names are one of the most common causes of broken websites. Follow these rules and you&rsquo;ll avoid hours of frustration:</p>

			<h3>The golden rules</h3>

			<ol>
				<li>
					<strong>Always use lowercase</strong>
					<p><code>style.css</code> &mdash; not <code>Style.css</code> or <code>STYLE.CSS</code></p>
					<p>Web servers (especially Linux) treat uppercase and lowercase as different files. <code>Style.css</code> and <code>style.css</code> are two different files on a Linux server, even though they look the same on your Mac.</p>
				</li>
				<li>
					<strong>Use hyphens instead of spaces</strong>
					<p><code>my-first-website</code> &mdash; not <code>my first website</code> or <code>My First Website</code></p>
					<p>Spaces in file names get converted to <code>%20</code> in URLs, which looks messy and can cause bugs.</p>
				</li>
				<li>
					<strong>Stick to letters, numbers, and hyphens</strong>
					<p>Avoid special characters like <code># @ ! &amp; ( )</code>. They have special meanings in URLs and can break your links.</p>
				</li>
				<li>
					<strong>Be descriptive but short</strong>
					<p><code>hero-banner.jpg</code> &mdash; not <code>IMG_20240315_142356.jpg</code></p>
					<p>You should be able to tell what a file is without opening it.</p>
				</li>
				<li>
					<strong>Never remove file extensions</strong>
					<p>Every file needs its extension: <code>.html</code>, <code>.css</code>, <code>.js</code>, <code>.png</code>, <code>.jpg</code>. The extension tells the browser (and you) what type of file it is.</p>
				</li>
			</ol>

			<div class="columns mt-4">
				<div class="column">
					<div class="box" style="border-left: 4px solid #48c774;">
						<h4><i class="fas fa-check mr-2" style="color: #48c774;"></i>Good names</h4>
						<ul>
							<li><code>index.html</code></li>
							<li><code>about-us.html</code></li>
							<li><code>style.css</code></li>
							<li><code>hero-banner.jpg</code></li>
							<li><code>main.js</code></li>
							<li><code>contact-form.js</code></li>
						</ul>
					</div>
				</div>
				<div class="column">
					<div class="box" style="border-left: 4px solid #f14668;">
						<h4><i class="fas fa-times mr-2" style="color: #f14668;"></i>Bad names</h4>
						<ul>
							<li><code>Home Page.html</code></li>
							<li><code>About_Us (copy).HTML</code></li>
							<li><code>Style_Final_v2.CSS</code></li>
							<li><code>IMG_20240315.JPG</code></li>
							<li><code>script</code> (no extension!)</li>
							<li><code>my code!.js</code></li>
						</ul>
					</div>
				</div>
			</div>

			<h2 id="file-paths">Understanding File Paths</h2>

			<p>When you link to a stylesheet, image, or another page, you&rsquo;re writing a <strong>file path</strong> &mdash; directions that tell the browser where to find that file. There are two types:</p>

			<h3>Relative paths (what you&rsquo;ll use most)</h3>
			<p>Relative paths start from the current file&rsquo;s location:</p>

			<pre><code class="language-html">&lt;!-- From index.html in the root --&gt;
&lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;img src="images/logo.png" alt="Logo"&gt;
&lt;a href="about.html"&gt;About&lt;/a&gt;</code></pre>

			<p>If you need to go <strong>up</strong> a directory level, use <code>../</code>:</p>

			<pre><code class="language-html">&lt;!-- From a file inside a subfolder, e.g. pages/about.html --&gt;
&lt;link rel="stylesheet" href="../css/style.css"&gt;
&lt;img src="../images/logo.png" alt="Logo"&gt;</code></pre>

			<h3>Absolute paths (for external resources)</h3>
			<p>Absolute paths include the full URL. Use these for external resources like fonts or CDN libraries:</p>

			<pre><code class="language-html">&lt;link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Raleway"&gt;</code></pre>

			<div class="box analogy-box">
				<strong><i class="fas fa-lightbulb mr-2"></i>Think of file paths like giving directions:</strong>
				<ul>
					<li><strong>Relative:</strong> &ldquo;Go two doors down the hall and turn right&rdquo; &mdash; depends on where you&rsquo;re starting from</li>
					<li><strong>Absolute:</strong> &ldquo;Go to 42 Smith Street, Sydney&rdquo; &mdash; works from anywhere</li>
				</ul>
			</div>

			<!-- Hunter Element 5: Checking for Understanding #2 -->
			<CheckpointBox
				title="⏸️ Quick Knowledge Check"
				description="Test your understanding of naming and paths:"
				:questions="checkpointQuestions2"
			/>

			<h2 id="common-mistakes">Common Mistakes That Break Websites</h2>

			<p>Here are the problems that trip up beginners most often &mdash; and how to avoid them:</p>

			<div class="box" style="border-left: 4px solid #ffdd57;">
				<h4><i class="fas fa-exclamation-triangle mr-2" style="color: #ffdd57;"></i>Mistake 1: Wrong case in file names</h4>
				<p>Your stylesheet is called <code>style.css</code> but your HTML says <code>href="css/Style.css"</code>. Works on your Mac, breaks when you deploy to a Linux server.</p>
				<p><strong>Fix:</strong> Always use lowercase. Always.</p>
			</div>

			<div class="box mt-3" style="border-left: 4px solid #ffdd57;">
				<h4><i class="fas fa-exclamation-triangle mr-2" style="color: #ffdd57;"></i>Mistake 2: Broken relative paths</h4>
				<p>You moved a file into a subfolder but forgot to update the links that point to it. The browser can&rsquo;t find it and your images or styles disappear.</p>
				<p><strong>Fix:</strong> After moving any file, search your project for references to the old path and update them.</p>
			</div>

			<div class="box mt-3" style="border-left: 4px solid #ffdd57;">
				<h4><i class="fas fa-exclamation-triangle mr-2" style="color: #ffdd57;"></i>Mistake 3: Spaces in folder names</h4>
				<p>Your project folder is called <code>My Website</code> and suddenly your file paths have <code>%20</code> in them. Some tools and hosting platforms choke on spaces entirely.</p>
				<p><strong>Fix:</strong> Use hyphens: <code>my-website</code>.</p>
			</div>

			<div class="box mt-3" style="border-left: 4px solid #ffdd57;">
				<h4><i class="fas fa-exclamation-triangle mr-2" style="color: #ffdd57;"></i>Mistake 4: Files outside the project folder</h4>
				<p>You drag an image from your Desktop into your HTML, and the path is something like <code>/Users/yourname/Desktop/photo.jpg</code>. It works on your computer but nobody else can see it.</p>
				<p><strong>Fix:</strong> Always copy files <em>into</em> your project&rsquo;s <code>images/</code> folder first, then reference them with a relative path.</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 4: GUIDED PRACTICE -->
			<!-- ═══════════════════════════════════════════════════ -->

			<h2 id="guided-practice">Guided Practice: Set Up Your First Project</h2>

			<GuidedPractice
				title="Create Your Project Folder"
				context="Let&rsquo;s build a project folder from scratch using your terminal (or file explorer). This is the exact structure you&rsquo;ll use for the Black Swan Bistro project later in the curriculum."
				:steps="guidedPracticeSteps"
				:success-criteria="[
					'You have a folder called black-swan-bistro on your computer',
					'Inside it you have index.html, a css/ folder with style.css, a js/ folder with main.js, and an images/ folder',
					'Your index.html links to css/style.css and js/main.js correctly',
					'Opening index.html in your browser shows your heading and styled text'
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 6: INDEPENDENT PRACTICE -->
			<!-- ═══════════════════════════════════════════════════ -->

			<h2 id="independent-practice">Independent Challenge: Portfolio Starter</h2>

			<IndependentPractice
				title="Build a Portfolio Project Structure"
				scenario="You&rsquo;ve been asked to start building a personal portfolio website. Before writing any content, set up the complete project structure with proper naming conventions."
				:requirements="[
					'Create a project folder called my-portfolio',
					'Add index.html, about.html, and projects.html in the root',
					'Create css/, js/, and images/ folders',
					'Inside images/, create subfolders: profile/ and projects/',
					'Add a style.css and main.js in the right folders',
					'In index.html, link to your stylesheet and script with correct relative paths',
					'Add at least one placeholder image in each images subfolder'
				]"
				:stretch-goals="[
					'Add a fonts/ folder and research how to use a custom web font from a local file',
					'Create a docs/ folder with a README.md file describing your project',
					'Try opening your project in VS Code and use the file explorer to verify the structure looks clean'
				]"
				:success-criteria="[
					{ criterion: 'All folders use lowercase and hyphens', level: 'Meets expectations' },
					{ criterion: 'HTML files link correctly to CSS and JS', level: 'Meets expectations' },
					{ criterion: 'Images are inside the images/ folder (not on Desktop)', level: 'Meets expectations' },
					{ criterion: 'The project opens cleanly in a browser with no console errors', level: 'Exceeds expectations' },
					{ criterion: 'README and docs folder are included', level: 'Exceeds expectations' }
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 8: CLOSURE -->
			<!-- ═══════════════════════════════════════════════════ -->

			<h2 id="summary">Summary</h2>

			<ClosureSection
				title="🏁 Lesson Complete: Your Project Has a Home"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				:real-world-application="`<p><strong>From now on, every project you create should start the same way:</strong></p><ol><li>Create a project folder with a clear, hyphenated name</li><li>Add index.html, css/, js/, and images/ folders</li><li>Name every file in lowercase with hyphens</li><li>Use relative paths to link everything together</li></ol><p>This structure will carry you through every tutorial on this platform &mdash; and into professional work.</p>`"
				:next-steps="`<p>Now that your files have a home, it&rsquo;s time to fill them with content! In the next tutorial you&rsquo;ll learn HTML essentials and start building real web pages inside the structure you just created.</p>`"
			/>

			<TutorialRecommendations current-path="/tutorials/getting-started/files-folders-project-structure" />

			<TutorialCompletion tutorial-path="/tutorials/getting-started/files-folders-project-structure" />
		</div>
	</div>
</template>

<script setup>
import '@/assets/styles/tutorials.css';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialCompletion from '@/components/TutorialCompletion.vue';

// ── Checkpoint Questions ──────────────────────────────────────────
const checkpointQuestions1 = [
	{
		question: 'Why should your homepage always be called index.html?',
		answer: 'Web servers look for index.html by default. When someone visits your domain without specifying a filename, the server automatically serves index.html.',
	},
	{
		question: 'Name the three standard subfolders in a web project and what goes in each.',
		answer: 'css/ for stylesheets, js/ for JavaScript files, and images/ for pictures, icons, and graphics.',
	},
	{
		question: 'What does the project root mean?',
		answer: 'The top-level folder that contains your entire project. When you open it in VS Code, it becomes your workspace. All other folders and files sit inside it.',
	},
];

const checkpointQuestions2 = [
	{
		question: 'What is wrong with the filename "About Us.HTML"?',
		answer: 'Three problems: (1) it has a space instead of a hyphen, (2) the extension is uppercase (.HTML instead of .html), and (3) the first letters are capitalised. It should be about-us.html.',
	},
	{
		question: 'If your HTML file is in the root folder and your stylesheet is in css/style.css, what href do you use?',
		answer: 'href="css/style.css" — a relative path that goes into the css folder from the current location.',
	},
	{
		question: 'You moved style.css from the root into a css/ folder. What will happen if you don\'t update your HTML?',
		answer: 'The browser won\'t find the stylesheet because the old path is now wrong. Your page will load with no styles — just plain unstyled HTML.',
	},
];

// ── Guided Practice Steps ──────────────────────────────────────────
const guidedPracticeSteps = [
	{
		title: 'Create the project folder',
		content: '<p>Open your terminal (Mac: Terminal app, Windows: Command Prompt or PowerShell) and run:</p><pre><code>mkdir black-swan-bistro\ncd black-swan-bistro</code></pre><p>Or simply create a new folder called <code>black-swan-bistro</code> using Finder/File Explorer.</p>',
		hint: 'On Mac you can also right-click in Finder → New Folder. Just make sure the name is all lowercase with a hyphen.',
	},
	{
		title: 'Create the subfolders',
		content: '<p>Inside your project folder, create three subfolders:</p><pre><code>mkdir css js images</code></pre><p>Your folder should now look like:</p><pre><code>black-swan-bistro/\n├── css/\n├── js/\n└── images/</code></pre>',
		hint: 'In VS Code, you can right-click in the Explorer panel → New Folder to create each one.',
	},
	{
		title: 'Create your files',
		content: '<p>Create the core files in their correct locations:</p><pre><code>touch index.html css/style.css js/main.js</code></pre><p>Or in VS Code: right-click the appropriate folder → New File.</p>',
		hint: 'Make sure style.css goes inside the css/ folder, not in the root!',
	},
	{
		title: 'Add starter HTML',
		content: '<p>Open <code>index.html</code> in VS Code and add this boilerplate:</p><pre><code>&lt;!DOCTYPE html&gt;\n&lt;html lang="en"&gt;\n&lt;head&gt;\n    &lt;meta charset="UTF-8"&gt;\n    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;\n    &lt;title&gt;Black Swan Bistro&lt;/title&gt;\n    &lt;link rel="stylesheet" href="css/style.css"&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;h1&gt;Welcome to Black Swan Bistro&lt;/h1&gt;\n    &lt;p&gt;Our restaurant website is coming soon.&lt;/p&gt;\n    &lt;script src="js/main.js"&gt;&lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre><p>Notice how the <code>link</code> and <code>script</code> tags use relative paths to find files in their subfolders.</p>',
		hint: 'In VS Code, type ! and press Tab to generate HTML boilerplate automatically (Emmet shortcut). Then add the link and script tags manually.',
	},
	{
		title: 'Add a test style',
		content: '<p>Open <code>css/style.css</code> and add:</p><pre><code>body {\n    font-family: Arial, sans-serif;\n    margin: 2rem;\n    background-color: #fafafa;\n}\n\nh1 {\n    color: #333;\n}</code></pre>',
		hint: 'If the heading colour doesn\'t change, check that your link tag href matches the actual file path exactly.',
	},
	{
		title: 'Open in your browser',
		content: '<p>Double-click <code>index.html</code> to open it in your browser (or right-click → Open With → Chrome). You should see your styled heading and paragraph.</p><p>If the text is styled (sans-serif font, grey heading), your file paths are working!</p>',
		hint: 'If the page looks unstyled (Times New Roman, black text), right-click → Inspect → Console and look for a 404 error on style.css. That means your path is wrong.',
	},
];

// ── Closure Data ──────────────────────────────────────────────────
const closureKeyTakeaways = [
	'Every web project starts with a root folder containing index.html, css/, js/, and images/ subfolders',
	'File names must be lowercase, use hyphens instead of spaces, and always include their extension',
	'index.html is the default homepage because web servers look for it automatically',
	'Relative paths (like css/style.css) tell the browser where to find files relative to the current file',
	'Common mistakes — wrong case, spaces, files outside the project — are easy to avoid once you know the rules',
];

const closureObjectives = [
	'Create a standard web project folder structure from scratch',
	'Apply professional file and folder naming conventions',
	'Explain why index.html is the default entry point',
	'Organise CSS, JS, and image files into logical folders',
	'Identify common mistakes that break file paths',
];

const closureReflectionPrompts = [
	{
		title: '💭 Reflection Questions',
		questions: [
			'How is this folder structure different from how you normally save files on your computer?',
			'Why do you think the convention is lowercase-with-hyphens instead of camelCase or spaces?',
			'What would you do first if an image wasn\'t showing up on your page?',
			'How will you set up your next project differently after this tutorial?',
		],
	},
];

// ── Page Sections (for sidebar navigation) ──────────────────────
const sections = [
	{
		id: 'files-folders-project-structure',
		title: 'Files, Folders & Project Structure',
		subsections: [
			{ id: 'why-structure-matters', title: 'Why Structure Matters' },
			{ id: 'standard-project-folder', title: 'Standard Project Folder' },
			{ id: 'naming-conventions', title: 'Naming Conventions' },
			{ id: 'file-paths', title: 'Understanding File Paths' },
			{ id: 'common-mistakes', title: 'Common Mistakes' },
			{ id: 'guided-practice', title: 'Guided Practice' },
			{ id: 'independent-practice', title: 'Independent Challenge' },
			{ id: 'summary', title: 'Summary' },
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

.analogy-box {
	background: #fff9e6;
	border-left: 4px solid #ffd700;
}

.highlight-box {
	background: #f0f9ff;
	border-left: 4px solid #3298dc;
}
</style>
