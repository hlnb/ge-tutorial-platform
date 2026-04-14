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

usePageSections([
	{ id: 'intro', title: 'Introduction' },
	{ id: 'what-you-will-build', title: 'What You Will Build' },
	{ id: 'site-structure', title: 'Multi-page Structure' },
	{ id: 'file-setup', title: 'Step 1 — File Setup' },
	{
		id: 'shared-shell',
		title: 'Step 2 — Shared Shell',
		subsections: [
			{ id: 'shared-header', title: 'Shared Header' },
			{ id: 'shared-footer', title: 'Shared Footer' },
		],
	},
	{
		id: 'build-pages',
		title: 'Step 3 — Build Pages',
		subsections: [
			{ id: 'menu-page', title: 'Menu Page' },
			{ id: 'about-page', title: 'About Page' },
			{ id: 'contact-page', title: 'Contact Page' },
		],
	},
	{ id: 'active-nav', title: 'Step 4 — Active Navigation' },
	{ id: 'shared-css', title: 'Step 5 — Page-Specific CSS' },
	{ id: 'checkpoint', title: 'Checkpoint' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
	{ id: 'additional-resources', title: 'Additional Resources' },
]);

// ── Checkpoint questions ──────────────────────────────────────────
const checkpointQuestions = [
	{
		question: 'Why do all four HTML pages link to the same css/style.css file?',
		answer:
			'A single shared stylesheet means you only write and maintain one set of component styles. When you update a colour variable or fix a card layout, the change applies to every page at once.',
	},
	{
		question:
			'Why should new page files sit at the project root alongside index.html, instead of inside a subfolder?',
		answer:
			'Keeping all pages at the same directory level means every page can use the same relative paths to shared assets: css/style.css, images/, and js/main.js. Nesting pages inside subfolders would break those paths or require different ones per page.',
	},
	{
		question: 'What does the is-active class do and why does it change between pages?',
		answer:
			'The is-active class visually marks which page the visitor is currently on by adding a bold weight, underline, or colour change. Each page sets the class on its own nav link so the visitor always sees where they are in the site.',
	},
];

// ── Guided Practice steps ─────────────────────────────────────────
const guidedPracticeSteps = [
	{
		title: 'Copy the shared shell into menu.html',
		instructions:
			'<p>Open <code>index.html</code> and copy the entire <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> blocks into a new file called <code>menu.html</code>. Keep the same <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;head&gt;</code>, and stylesheet link.</p><p>Tip: copy the full document, then delete the homepage content between header and footer. That gives you a clean shell to fill.</p>',
		hints: [
			'Make sure the <link> tag still says href="css/style.css" — the path is the same because menu.html is at the same directory level.',
			'Update the <title> tag to say "Menu — Black Swan Bistro".',
		],
	},
	{
		title: 'Add menu content sections',
		instructions:
			'<p>Between the header and footer, add the menu content using the <code>.menu-card</code> component from Part 3:</p><pre><code>&lt;main&gt;\n  &lt;section class="section"&gt;\n    &lt;div class="container"&gt;\n      &lt;h1&gt;Our Menu&lt;/h1&gt;\n      &lt;p&gt;Seasonal dishes made with local produce.&lt;/p&gt;\n    &lt;/div&gt;\n  &lt;/section&gt;\n\n  &lt;section class="section"&gt;\n    &lt;div class="container"&gt;\n      &lt;h2 class="section-title"&gt;Starters&lt;/h2&gt;\n      &lt;div class="menu-card-grid"&gt;\n        &lt;!-- menu-card components here --&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/section&gt;\n&lt;/main&gt;</code></pre>',
		hints: [
			'Reuse the .menu-card component structure from Part 3, including __eyebrow, __title, __description, and __price parts.',
			'You can add as many menu sections as you like: Starters, Mains, Desserts, Drinks.',
		],
	},
	{
		title: 'Set the active navigation link',
		instructions:
			'<p>In menu.html, find the Menu link inside the <code>.site-nav</code> and add the <code>is-active</code> class:</p><pre><code>&lt;a class="site-nav__link is-active" href="menu.html"&gt;Menu&lt;/a&gt;</code></pre><p>Then open <code>index.html</code> and add <code>is-active</code> to the Home link instead.</p>',
		hints: [
			'Only one link per page should have is-active. Remove it from the old location if you copy-pasted the full nav.',
		],
	},
	{
		title: 'Repeat for about.html and contact.html',
		instructions:
			'<p>Create <code>about.html</code> and <code>contact.html</code> using the same process:</p><ol><li>Copy the shell (header + footer + head section) from any existing page</li><li>Replace the <code>&lt;main&gt;</code> content with page-specific material</li><li>Move the <code>is-active</code> class to the correct nav link</li><li>Update the <code>&lt;title&gt;</code> tag</li></ol>',
		hints: [
			'The about page might include a story section, a team list, and a photo. The contact page might include address details, opening hours, and a simple contact form placeholder.',
			'Keep the content short for now. You can expand it later.',
		],
	},
	{
		title: 'Test all navigation links',
		instructions:
			'<p>Open <code>index.html</code> in your browser and click every navigation link. Verify:</p><ul><li>Each link opens the correct page</li><li>The active link highlights correctly on every page</li><li>The header and footer look identical on every page</li><li>The stylesheet loads on every page (check that colours and spacing appear)</li></ul>',
		hints: [
			'If a link is broken, check the href value. If menu.html is at the project root, the link should be href="menu.html" — no slashes, no subfolders.',
		],
	},
];

// ── Closure data ──────────────────────────────────────────────────
const closureKeyTakeaways = [
	'A multi-page site reuses the same header, footer, navigation, and stylesheet across every page.',
	'Each page is a separate HTML file at the project root, sharing relative paths to CSS and images.',
	'The is-active class on navigation links tells the visitor which page they are viewing.',
	'Page-specific CSS keeps unique layout rules from cluttering the shared stylesheet.',
	'Good component structure from Part 3 made this expansion straightforward — reusable patterns paid off immediately.',
];

const closureObjectives = [
	'Plan a multi-page site structure with shared and page-specific regions',
	'Create menu, about, and contact pages that reuse the shared header and footer',
	'Link pages together with working relative-path navigation',
	'Mark the current page with an active navigation state',
	'Add page-specific CSS without disrupting shared component styles',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-sitemap',
		title: 'Site Structure',
		questions: [
			'Which part of the shared shell was easiest to reuse across pages?',
			'Where did you need to change something slightly between pages, and how did you decide what to keep consistent?',
		],
	},
	{
		icon: 'fas fa-compass',
		title: 'Navigation Thinking',
		questions: [
			'How does active navigation help a visitor who lands on a page from a search engine?',
			'What would happen to the user experience if the navigation links were in a different order on each page?',
		],
	},
	{
		icon: 'fas fa-arrow-right',
		title: 'Looking Ahead',
		questions: [
			'What repetitive work would disappear if you could use a templating system or a framework in a future version?',
			'What has the plain-HTML approach taught you about site structure that a framework alone would not?',
		],
	},
];
</script>

<template>
	<div class="container section">
		<div class="tutorial-content">
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
					<li class="is-active">
						<a href="#" aria-current="page"
							>Black Swan Bistro &mdash; Part 4</a
						>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">65 min</span>
					<span class="tag is-link">Project</span>
					<span class="tag is-light">Part 4 of 7</span>
				</div>
			</div>

			<h1 class="title is-1">Black Swan Bistro &mdash; Part 4</h1>
			<h2 class="subtitle is-4">Multi-page Site</h2>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- ANTICIPATORY SET                                   -->
			<!-- ═══════════════════════════════════════════════════ -->
			<AnticipatorySet
				title="One Page Is Not a Website Yet."
				icon="🗂️"
				:hook="`<p>In Parts 1–3, you built a homepage for the Black Swan Bistro. You structured the HTML, created a wireframe layout, and refactored repeated patterns into reusable components.</p><p>That homepage is solid. But a real restaurant site needs more than one page. Visitors expect a dedicated menu, an about page, and a way to get in touch. Part 4 is where the bistro becomes a real multi-page website.</p><p>The good news: the reusable components you built in Part 3 — site header, footer, menu cards, and navigation — are about to prove their worth. You will copy those shared structures into new pages and see the benefit of consistent naming and predictable patterns firsthand.</p>`"
				:reflection-prompts="[
					'What parts of the homepage belong on every page of the site?',
					'What new content does each page need that the homepage does not have?',
					'How will a visitor know which page they are currently viewing?'
				]"
				connection="This tutorial builds directly on the reusable components and consistent naming from Part 3. Those refactored patterns now become the shared shell for every page."
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- LEARNING OBJECTIVES                                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<LearningObjectives
				:objectives="[
					'Plan a multi-page site structure: which content is shared, which is page-specific',
					'Create menu, about, and contact pages using the shared header, footer, and navigation',
					'Link pages together with relative-path navigation that works from every page',
					'Add an active state to navigation links so visitors know which page they are on',
					'Organise page-specific CSS alongside shared component styles without conflicts'
				]"
				purpose="Building a multi-page site with plain HTML and CSS teaches you how websites actually work at the file level. Frameworks automate some of this later, but the underlying concepts — shared structure, relative paths, navigation states — stay the same."
				:prerequisites="[
					{ topic: 'Multi-page Structure', link: '/tutorials/intermediate/multi-page-structure' },
					{ topic: 'BSB Part 3: Component Refactor', link: '/tutorials/intermediate/black-swan-bistro-part-3' }
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- INTRODUCTION                                       -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="intro">Tutorial Introduction</h2>
			<p>
				Until now, the Black Swan Bistro has been a single page. Everything — the hero, the
				menu preview, the about blurb, the booking CTA — lives in one long
				<code>index.html</code>.
			</p>
			<p>
				That is normal for an early project. But a real restaurant site needs dedicated
				pages so visitors can find what they want without scrolling through everything.
				Part 4 expands the bistro into four distinct pages:
			</p>
			<ul>
				<li><strong>Home</strong> — the existing homepage, trimmed to an overview</li>
				<li><strong>Menu</strong> — the full food and drinks menu</li>
				<li><strong>About</strong> — the restaurant story and team</li>
				<li><strong>Contact</strong> — location, hours, and how to book</li>
			</ul>
			<p>
				Every page shares the same header, navigation, footer, and stylesheet. That means
				the reusable components from Part 3 do most of the structural work — you just need
				to add page-specific content in the middle.
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Project checkpoint:</strong> you should have the Part 3 refactored
					homepage before beginning this lesson, with named components for the header,
					navigation, menu cards, CTA blocks, and footer. If your refactor is not
					complete, go back and finish it first — this lesson depends on those shared
					patterns.
				</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- WHAT YOU WILL BUILD                                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="what-you-will-build">What You Will Build</h2>
			<p>
				By the end of this tutorial, your Black Swan Bistro project will have four
				working HTML pages linked together with consistent navigation. The visitor will
				be able to browse between pages, always see the same header and footer, and
				always know which page they are on thanks to an active navigation state.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-4-site-map.svg"
					alt="Site map showing four pages — Home, Menu, About, and Contact — connected by navigation arrows."
				/>
				<figcaption>
					The final site structure: four pages connected through shared navigation.
					Every page links to every other page.
				</figcaption>
			</figure>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- MULTI-PAGE SITE STRUCTURE                          -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="site-structure">How Multi-page Sites Work</h2>
			<p>
				A multi-page HTML website is a collection of separate <code>.html</code> files.
				There is no magic framework gluing them together. The browser loads one file at a
				time, and links tell it where to go next.
			</p>
			<p>
				That simplicity is powerful once you understand two ideas:
			</p>
			<ol>
				<li>
					<strong>Shared structure</strong> — the header, navigation, and footer are
					identical on every page. You copy them into each file so the visitor
					experiences a consistent site.
				</li>
				<li>
					<strong>Page-specific content</strong> — the middle of each page is unique.
					The menu page shows dishes. The about page tells the story. The contact page
					gives directions.
				</li>
			</ol>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-4-shared-vs-unique.svg"
					alt="Three page outlines showing shared header and footer regions in warm tones, with unique content areas in blue, illustrating that only the middle changes between pages."
				/>
				<figcaption>
					The header and footer stay the same across every page. Only the content area
					in the middle changes. This is the core idea behind multi-page site
					structure.
				</figcaption>
			</figure>

			<p>
				When you work with a framework like Vue or React in the future, it will handle
				the shared shell automatically. But the underlying concept is the same: a layout
				wraps page-specific content. Learning to do it by hand first means you will
				understand what the framework is doing for you.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 1 — FILE SETUP                                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="file-setup">Step 1: Set Up the New Files</h2>
			<p>
				Create three new HTML files at the project root — the same level where
				<code>index.html</code> already lives. Do <strong>not</strong> put them inside a
				subfolder. Keeping all pages at the same level means every page can use the same
				relative paths to the shared stylesheet and images.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-4-file-structure.svg"
					alt="Project file tree showing index.html, menu.html, about.html, and contact.html at the root, with shared css, images, and js folders below."
				/>
				<figcaption>
					New pages sit alongside <code>index.html</code> at the project root. They
					all share the same <code>css/</code> and <code>images/</code> folders.
				</figcaption>
			</figure>

			<pre><code># In your terminal, from the project root:
touch menu.html about.html contact.html</code></pre>

			<p>
				Or in VS Code, right-click the project root in the Explorer panel and choose
				<strong>New File</strong> for each one.
			</p>

			<div class="notification is-warning is-light">
				<p>
					<strong>Why the root?</strong> If <code>menu.html</code> were inside a
					<code>pages/</code> subfolder, the path to the stylesheet would need to be
					<code>../css/style.css</code> instead of <code>css/style.css</code>. Keeping
					all pages at the root keeps every relative path identical across the site.
				</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 2 — SHARED SHELL                              -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="shared-shell">Step 2: Copy the Shared Shell</h2>
			<p>
				Every page needs the same document structure: <code>&lt;!DOCTYPE html&gt;</code>,
				<code>&lt;head&gt;</code> with the stylesheet link, the site header, and the site
				footer. The easiest way to start is to copy the entire <code>index.html</code>,
				then delete the homepage-specific content between the header and footer.
			</p>
			<p>
				What stays:
			</p>
			<ul>
				<li>The <code>&lt;!DOCTYPE html&gt;</code> declaration</li>
				<li>The <code>&lt;head&gt;</code> section (including the <code>&lt;link&gt;</code> to <code>css/style.css</code>)</li>
				<li>The <code>&lt;header class="site-header"&gt;</code> block with navigation</li>
				<li>The <code>&lt;footer class="site-footer"&gt;</code> block</li>
			</ul>
			<p>
				What changes:
			</p>
			<ul>
				<li>The <code>&lt;title&gt;</code> tag — update it for each page</li>
				<li>The <code>&lt;main&gt;</code> content — replace with page-specific sections</li>
				<li>The active navigation link — move <code>is-active</code> to the current page&rsquo;s link</li>
			</ul>

			<h3 id="shared-header">The Shared Header</h3>
			<p>
				This header block should be identical on every page. It uses the
				<code>.site-header</code> component from Part 3:
			</p>
			<pre><code>&lt;header class="site-header"&gt;
  &lt;div class="container site-header__inner"&gt;
    &lt;a class="site-logo" href="index.html"&gt;Black Swan Bistro&lt;/a&gt;

    &lt;nav class="site-nav" aria-label="Main navigation"&gt;
      &lt;ul class="site-nav__list"&gt;
        &lt;li&gt;&lt;a class="site-nav__link" href="index.html"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="site-nav__link" href="menu.html"&gt;Menu&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="site-nav__link" href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class="site-nav__link" href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  &lt;/div&gt;
&lt;/header&gt;</code></pre>

			<p>
				Notice the navigation links use simple filenames: <code>menu.html</code>,
				<code>about.html</code>. Because all pages are at the same directory level, these
				relative paths work from every page without modification.
			</p>

			<h3 id="shared-footer">The Shared Footer</h3>
			<p>
				The footer is the same on all pages too:
			</p>
			<pre><code>&lt;footer class="site-footer"&gt;
  &lt;div class="container site-footer__inner"&gt;
    &lt;p class="site-footer__brand"&gt;Black Swan Bistro&lt;/p&gt;

    &lt;ul class="site-footer__links"&gt;
      &lt;li&gt;&lt;a href="menu.html"&gt;Menu&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/footer&gt;</code></pre>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 3 — BUILD PAGES                               -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="build-pages">Step 3: Build Each Page</h2>
			<p>
				Each page follows the same pattern: shared shell on the outside, unique content in
				the <code>&lt;main&gt;</code> block. Here is the general template:
			</p>
			<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Page Title — Black Swan Bistro&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- Shared header (identical on every page) --&gt;
  &lt;header class="site-header"&gt;...&lt;/header&gt;

  &lt;!-- Page-specific content --&gt;
  &lt;main&gt;
    &lt;!-- unique sections go here --&gt;
  &lt;/main&gt;

  &lt;!-- Shared footer (identical on every page) --&gt;
  &lt;footer class="site-footer"&gt;...&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

			<h3 id="menu-page">The Menu Page</h3>
			<p>
				The menu page is the most content-rich new page. It reuses the
				<code>.menu-card</code> component from Part 3 to show the full food and drinks
				menu, organised by course.
			</p>
			<pre><code>&lt;main&gt;
  &lt;section class="section"&gt;
    &lt;div class="container"&gt;
      &lt;h1&gt;Our Menu&lt;/h1&gt;
      &lt;p&gt;Seasonal dishes made with local produce, updated regularly.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;section class="section"&gt;
    &lt;div class="container"&gt;
      &lt;h2 class="section-title"&gt;Starters&lt;/h2&gt;
      &lt;div class="menu-card-grid"&gt;
        &lt;article class="menu-card"&gt;
          &lt;p class="menu-card__eyebrow"&gt;Seasonal&lt;/p&gt;
          &lt;h3 class="menu-card__title"&gt;Roasted beetroot salad&lt;/h3&gt;
          &lt;p class="menu-card__description"&gt;
            Roasted beetroot, goat cheese, candied walnuts, balsamic glaze.
          &lt;/p&gt;
          &lt;p class="menu-card__price"&gt;$18&lt;/p&gt;
        &lt;/article&gt;

        &lt;article class="menu-card"&gt;
          &lt;p class="menu-card__eyebrow"&gt;House favourite&lt;/p&gt;
          &lt;h3 class="menu-card__title"&gt;Crispy squid&lt;/h3&gt;
          &lt;p class="menu-card__description"&gt;
            Lightly battered squid, aioli, lemon, and fresh herbs.
          &lt;/p&gt;
          &lt;p class="menu-card__price"&gt;$19&lt;/p&gt;
        &lt;/article&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;section class="section"&gt;
    &lt;div class="container"&gt;
      &lt;h2 class="section-title"&gt;Mains&lt;/h2&gt;
      &lt;div class="menu-card-grid"&gt;
        &lt;article class="menu-card"&gt;
          &lt;p class="menu-card__eyebrow"&gt;Chef favourite&lt;/p&gt;
          &lt;h3 class="menu-card__title"&gt;Charred pumpkin risotto&lt;/h3&gt;
          &lt;p class="menu-card__description"&gt;
            Roasted pumpkin, sage, parmesan, and toasted pepitas.
          &lt;/p&gt;
          &lt;p class="menu-card__price"&gt;$28&lt;/p&gt;
        &lt;/article&gt;

        &lt;article class="menu-card"&gt;
          &lt;p class="menu-card__eyebrow"&gt;Signature&lt;/p&gt;
          &lt;h3 class="menu-card__title"&gt;Black swan linguine&lt;/h3&gt;
          &lt;p class="menu-card__description"&gt;
            Squid ink pasta, prawns, chilli, lemon, and herbs.
          &lt;/p&gt;
          &lt;p class="menu-card__price"&gt;$32&lt;/p&gt;
        &lt;/article&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/main&gt;</code></pre>

			<p>
				Notice how the menu content uses exactly the same <code>.menu-card</code> structure
				you defined in Part 3. The component shell stays stable. Only the dish names,
				descriptions, and prices change.
			</p>

			<h3 id="about-page">The About Page</h3>
			<p>
				The about page tells the restaurant&rsquo;s story. It does not need cards — it uses
				simple content sections and possibly an image.
			</p>
			<pre><code>&lt;main&gt;
  &lt;section class="section"&gt;
    &lt;div class="container"&gt;
      &lt;h1&gt;About Black Swan Bistro&lt;/h1&gt;
      &lt;p class="lead"&gt;
        A neighbourhood restaurant that believes great food starts
        with honest ingredients and genuine hospitality.
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;section class="section"&gt;
    &lt;div class="container"&gt;
      &lt;h2 class="section-title"&gt;Our Story&lt;/h2&gt;
      &lt;p&gt;
        Black Swan Bistro opened its doors in 2019 with a simple idea:
        serve seasonal, locally sourced food in a relaxed dining room.
        We work with farmers and growers from the region to build a menu
        that changes with what is fresh and available.
      &lt;/p&gt;
      &lt;p&gt;
        The name comes from the lake behind the original building, where
        black swans gather in the early morning. It felt right for a place
        that values natural, unhurried things.
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;section class="section"&gt;
    &lt;div class="container"&gt;
      &lt;h2 class="section-title"&gt;The Team&lt;/h2&gt;
      &lt;p&gt;
        Our kitchen is led by head chef Angela Liu, who trained in Melbourne
        and Lyon before bringing her modern regional style to Black Swan.
        Front of house is run by Sam Torres, who can pair a wine with
        anything on the menu.
      &lt;/p&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/main&gt;</code></pre>

			<h3 id="contact-page">The Contact Page</h3>
			<p>
				The contact page gives visitors the practical information they need: where the
				restaurant is, when it is open, and how to book.
			</p>
			<pre><code>&lt;main&gt;
  &lt;section class="section"&gt;
    &lt;div class="container"&gt;
      &lt;h1&gt;Contact &amp;amp; Reservations&lt;/h1&gt;
      &lt;p&gt;We would love to hear from you.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;section class="section"&gt;
    &lt;div class="container info-grid"&gt;
      &lt;div&gt;
        &lt;h2 class="section-title"&gt;Location&lt;/h2&gt;
        &lt;address&gt;
          42 Lakeside Drive&lt;br&gt;
          Willowbrook, VIC 3150&lt;br&gt;
          Australia
        &lt;/address&gt;
      &lt;/div&gt;

      &lt;div&gt;
        &lt;h2 class="section-title"&gt;Hours&lt;/h2&gt;
        &lt;table class="table"&gt;
          &lt;tr&gt;&lt;td&gt;Monday&ndash;Tuesday&lt;/td&gt;&lt;td&gt;Closed&lt;/td&gt;&lt;/tr&gt;
          &lt;tr&gt;&lt;td&gt;Wednesday&ndash;Saturday&lt;/td&gt;&lt;td&gt;12 pm &amp;ndash; 10 pm&lt;/td&gt;&lt;/tr&gt;
          &lt;tr&gt;&lt;td&gt;Sunday&lt;/td&gt;&lt;td&gt;12 pm &amp;ndash; 4 pm&lt;/td&gt;&lt;/tr&gt;
        &lt;/table&gt;
      &lt;/div&gt;

      &lt;div&gt;
        &lt;h2 class="section-title"&gt;Reservations&lt;/h2&gt;
        &lt;p&gt;
          Call us at &lt;a href="tel:+61398765432"&gt;(03) 9876 5432&lt;/a&gt;
          or email
          &lt;a href="mailto:hello@blackswanbistro.com.au"&gt;hello@blackswanbistro.com.au&lt;/a&gt;.
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/main&gt;</code></pre>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 4 — ACTIVE NAVIGATION                         -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="active-nav">Step 4: Mark the Active Navigation Link</h2>
			<p>
				When a visitor arrives on the menu page, they should immediately see that
				&ldquo;Menu&rdquo; is the active link. This is a small usability detail that
				makes a big difference — it tells the visitor where they are in the site without
				them having to think about it.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-4-active-nav.svg"
					alt="Two navigation bars side by side showing Menu highlighted on the menu page and About highlighted on the about page, with an annotation explaining the is-active class."
				/>
				<figcaption>
					Each page sets <code>is-active</code> on its own link. The CSS does the rest.
				</figcaption>
			</figure>

			<p>
				Add a class called <code>is-active</code> to the current page&rsquo;s navigation
				link. On <code>menu.html</code>, the Menu link gets the class:
			</p>
			<pre><code>&lt;!-- In menu.html --&gt;
&lt;a class="site-nav__link is-active" href="menu.html"&gt;Menu&lt;/a&gt;</code></pre>

			<p>
				On <code>about.html</code>, the About link gets it instead:
			</p>
			<pre><code>&lt;!-- In about.html --&gt;
&lt;a class="site-nav__link is-active" href="about.html"&gt;About&lt;/a&gt;</code></pre>

			<p>
				Then add CSS for the active state in your stylesheet. This rule already fits
				inside the <code>.site-nav</code> component section from Part 3:
			</p>
			<pre><code>.site-nav__link.is-active {
  font-weight: 700;
  border-bottom: 3px solid var(--color-red, #8f2f23);
}</code></pre>

			<div class="notification is-info is-light">
				<p>
					<strong>One active link per page.</strong> Make sure only the current
					page&rsquo;s link carries <code>is-active</code>. If you copy-pasted the nav
					from another page, double-check that you moved the class to the correct link.
				</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 5 — PAGE-SPECIFIC CSS                         -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="shared-css">Step 5: Organise Page-Specific CSS</h2>
			<p>
				Most of your CSS is shared — the component styles, layout helpers, and
				foundations apply to every page. But some pages may need a few unique rules. The
				contact page, for example, might use an <code>.info-grid</code> layout that the
				menu page does not need.
			</p>
			<p>
				You have two good options for handling page-specific styles:
			</p>

			<div class="box">
				<h3 class="title is-5">Option A: One Stylesheet, Organised Sections</h3>
				<p>
					Keep everything in <code>css/style.css</code> and add a clearly labelled section
					for page-specific rules at the bottom:
				</p>
				<pre><code>/* ─── Page-specific: Contact ─── */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

/* ─── Page-specific: About ─── */
.lead {
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--color-ink, #1f1b18);
  max-width: 640px;
}</code></pre>
				<p>
					This is the simplest option and works well for a site with four or five pages.
				</p>
			</div>

			<div class="box">
				<h3 class="title is-5">Option B: Separate Page Stylesheets</h3>
				<p>
					If page-specific CSS grows, you can create separate files and link them in the
					page&rsquo;s <code>&lt;head&gt;</code> after the shared stylesheet:
				</p>
				<pre><code>&lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;link rel="stylesheet" href="css/contact.css"&gt;</code></pre>
				<p>
					This keeps the shared styles untouched and isolates page-specific rules. Either
					approach is fine — pick whichever feels more manageable for your project.
				</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CHECKPOINT                                         -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="checkpoint">
				<CheckpointBox :questions="checkpointQuestions" />
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- GUIDED PRACTICE                                    -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="guided-practice">
				<GuidedPractice
					title="Build the Multi-page Bistro Site"
					description="Follow these steps to expand your Black Swan Bistro from a single homepage into a working four-page website."
					:steps="guidedPracticeSteps"
					:success-criteria="[
						'Four HTML files exist at the project root: index.html, menu.html, about.html, contact.html',
						'Every page has the same header and footer',
						'Navigation links work between all four pages',
						'The active link is correct on each page',
						'The shared stylesheet loads and applies styles on every page',
						'Each page has a unique title tag'
					]"
					success-criteria-title="You have finished when:"
				/>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- INDEPENDENT PRACTICE                               -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="independent-practice">
				<IndependentPractice
					task="Extend the bistro site with a <strong>Drinks</strong> section on the menu page and a <strong>Gallery</strong> section on the about page. Use the existing component patterns and page structure."
					:requirements="[
						'Add a Drinks course section to menu.html using the same .menu-card-grid and .menu-card structure',
						'Add a Gallery section to about.html with at least 3 placeholder images inside a simple grid',
						'Make sure the new sections use the same .section and .container layout wrappers as the existing content',
						'Check that the page renders correctly and the layout is consistent'
					]"
					:stretch-goals="[
						'Add a Desserts course section to the menu page',
						'Create a simple contact form placeholder on the contact page using HTML form elements',
						'Add a skip-to-content link at the top of each page for keyboard users'
					]"
					:rubric="[
						{ criteria: 'Component reuse', success: 'New sections use existing .menu-card and .section patterns without inventing new class names' },
						{ criteria: 'Layout consistency', success: 'New sections feel like a natural extension of the existing page layout' },
						{ criteria: 'Code organisation', success: 'Any new CSS is clearly separated from shared component styles' }
					]"
				/>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- RECAP                                              -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="recap">Recap</h2>
			<p>
				In Part 4, you expanded the Black Swan Bistro from a single homepage into a
				four-page website. You learned that a multi-page HTML site is a collection of
				separate files sharing the same header, footer, stylesheet, and navigation.
			</p>
			<p>
				The component refactoring from Part 3 made this expansion straightforward. Because
				the header, footer, and menu cards already had consistent names and stable
				structures, copying them into new pages was a reliable process rather than a messy
				one.
			</p>
			<p>
				You also added active navigation states so visitors always know which page they are
				on — a small detail that makes the site feel intentional and complete.
			</p>
			<p>
				The main limitation of this approach is manual repetition: every time you change
				the header or footer, you need to update it in four files. That is the natural
				motivation for templating systems and frameworks, which you will encounter later.
				For now, the important thing is that you understand the structure beneath those
				tools.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CLOSURE                                            -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="closure">
				<ClosureSection
					title="Part 4 Complete: Your Bistro Is a Real Website"
					:key-takeaways="closureKeyTakeaways"
					:objectives="closureObjectives"
					:reflection-prompts="closureReflectionPrompts"
					next-steps="In Part 5, you will prepare the bistro site for deployment: optimising images, adding meta tags, and making the site ready to go live."
				/>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- RECOMMENDATIONS                                    -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="additional-resources">
				<TutorialRecommendations
					:current-path="'/tutorials/intermediate/black-swan-bistro-part-4'"
				/>
			</div>
		</div>
	</div>
</template>
