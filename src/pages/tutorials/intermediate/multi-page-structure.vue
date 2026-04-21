<script setup>
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const sections = [
	{ id: 'why-multi-page', title: 'Why Multi-page Structure' },
	{ id: 'site-map', title: 'Site Map' },
	{ id: 'file-structure', title: 'File Structure' },
	{ id: 'shared-navigation', title: 'Shared Navigation' },
	{ id: 'shared-styles', title: 'Shared Styles' },
	{ id: 'page-specific-styles', title: 'Page-specific Styles' },
	{ id: 'links-and-paths', title: 'Links and Paths' },
	{ id: 'consistency-checklist', title: 'Consistency Checklist' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'additional-resources', title: 'Additional Resources' },
];

usePageSections(sections);

const anticipatoryHook = `
	<p>A one-page site can hide a lot of organisational problems. Once you add a menu page, about page, and contact page, every small inconsistency becomes easier to notice.</p>
	<p>The navigation needs to point to the right places. The header and footer should feel shared. The CSS should have a home. Page-specific styling should not leak into every file.</p>
	<p>This lesson helps you move from one good page to a small website system that can grow without becoming a folder full of guesses.</p>
`;

const checkpointQuestions = [
	{
		question: 'What is the main difference between shared CSS and page-specific CSS?',
		answer:
			'Shared CSS supports patterns used across multiple pages, such as header, footer, buttons, containers, and cards. Page-specific CSS supports layout or content that belongs to one page only.',
	},
	{
		question: 'Why should navigation be planned before creating several pages?',
		answer:
			'Navigation becomes the map of the site. If it is inconsistent or incomplete, users can get lost and every page becomes harder to maintain.',
	},
	{
		question: 'Predict what happens if each page has its own separate header CSS.',
		answer:
			'The headers will likely drift apart over time. A small change has to be repeated in several places, which increases mistakes and inconsistency.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Sketch the pages and shared parts',
		instructions:
			'<p>Choose a small site with three or four pages. Write the page names first, then list the parts that should appear on every page, such as header, navigation, footer, and shared button styles.</p>',
		hints: [
			'For Black Swan Bistro, the likely pages are Home, Menu, About, and Contact.',
			'Shared parts usually include the site header, navigation, footer, containers, buttons, and cards.',
		],
	},
		{
			title: 'Step 2: Create a simple folder plan',
			instructions:
			'<p>Plan the files before writing page content. Keep HTML files at the same level while shared CSS lives in one predictable folder.</p>',
			hints: [
			'A beginner-friendly structure is index.html, menu.html, about.html, contact.html, and css/style.css.',
			'Keep image assets in an images folder so paths stay predictable.',
			],
		},
	{
		title: 'Step 3: Copy shared structure carefully',
		instructions:
			'<p>Create the same header and footer structure on each page. Update only the page-specific title, main content, and active navigation state.</p>',
		hints: [
			'This is still plain HTML, so duplication is expected. The goal is controlled duplication.',
			'If the nav appears on every page, every page should include every main nav link.',
		],
	},
	{
		title: 'Step 4: Test links and shared styles',
		instructions:
			'<p>Open each page in the browser. Click every nav link, check that the CSS loads, and confirm the header/footer still look consistent.</p>',
		hints: [
			'Broken links are usually path problems, not mysterious browser behaviour.',
			'If one page looks unstyled, check the path to the CSS file first.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You can describe which parts of the site are shared across pages',
	'Your file structure keeps shared CSS and assets in predictable places',
	'Every page can link to every other main page',
	'Your shared header, footer, and basic styles stay consistent across pages',
];

const independentPracticeRequirements = [
	'Name at least three pages and explain the purpose of each',
	'Plan a file structure with HTML pages, a CSS folder, and an assets or images folder',
	'Write a shared navigation snippet that links the pages together',
	'Identify which styles belong in shared CSS',
	'Identify at least one page-specific style that should stay limited',
];

const independentPracticeStretchGoals = [
	'Add an active navigation state with aria-current="page"',
	'Write a quick link-testing checklist for your site',
];

const independentPracticeRubric = [
	{
		criteria: 'Clear site map',
		success: 'The learner identifies the main pages and how users move between them.',
	},
	{
		criteria: 'Predictable files',
		success: 'HTML, CSS, and assets are organised so paths are easy to reason about.',
	},
	{
		criteria: 'Shared structure',
		success: 'Header, navigation, footer, and shared CSS patterns remain consistent across pages.',
	},
	{
		criteria: 'Link testing',
		success: 'The learner tests navigation and can explain how to fix a broken relative path.',
	},
];

const closureKeyTakeaways = [
	'A multi-page site needs a simple map before it needs more HTML.',
	'Shared navigation, footer, and CSS patterns keep pages feeling like one website.',
	'Global styles should support the whole site; page-specific styles should stay limited and intentional.',
	'Relative links and asset paths become more important as soon as a site has more than one page.',
	'Consistent structure now makes Black Swan Bistro Part 4 much easier to build.',
];

const closureObjectives = [
	'Plan a small multi-page website with clear page relationships',
	'Create a beginner-friendly file structure for several linked HTML pages',
	'Reuse navigation, footer, and shared CSS across pages',
	'Separate global styles from page-specific styles',
	'Check links, paths, and consistency before expanding a project',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-sitemap',
		title: 'Website Structure',
		questions: [
			'Which pages in your next project need to share the same navigation?',
			'Which content belongs on a separate page instead of being squeezed into the homepage?',
		],
	},
	{
		icon: 'fas fa-link',
		title: 'Consistency and Links',
		questions: [
			'What shared structure would become annoying to update if every page handled it differently?',
			'Which file paths will you test before calling the site ready?'
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
						<a href="#" aria-current="page">Multi-page Structure</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">Multi-page</span>
					<span class="tag is-light">Navigation</span>
				</div>
			</div>

			<h1 class="title is-1">Multi-page Structure</h1>

			<p class="subtitle is-5">
				Organise a website with multiple linked pages, shared navigation, and consistent styles.
			</p>

			<AnticipatorySet
				title="A Website Is More Than One Good Page"
				icon="[]"
				:hook="anticipatoryHook"
				:reflection-prompts="[
					'What changes when a homepage becomes part of a larger site?',
					'Which parts of a site should stay the same from page to page?',
					'Why do broken links become easier to create when folders multiply?'
				]"
				connection="This lesson prepares you for Black Swan Bistro Part 4, where the bistro homepage expands into a menu page, about page, and contact page."
			/>

			<LearningObjectives
				:objectives="[
					'Plan the pages and shared structure of a small website',
					'Organise HTML, CSS, and assets into a predictable file structure',
					'Build shared navigation that works across multiple pages',
					'Separate site-wide CSS from page-specific CSS',
					'Test links and paths before moving into a larger project build'
				]"
				purpose="Multi-page structure is a maintainability skill. It helps learners move from building isolated pages to managing a small website where navigation, styles, and content relationships all need to stay consistent."
				:prerequisites="[
					{ topic: 'Responsive Refinement for Reusable Components', link: '/tutorials/intermediate/responsive-refinement-for-reusable-components' },
					{ topic: 'Building Reusable Components', link: '/tutorials/intermediate/building-reusable-components' }
				]"
			/>

			<h2 id="why-multi-page">Why Multi-page Structure Matters</h2>
			<p>
				A single page can be built from top to bottom. A multi-page site needs a plan.
				Each page has its own purpose, but the pages still need to feel like one website.
				That means shared navigation, shared visual patterns, shared assets, and clear
				links between pages.
			</p>
			<p>
				This lesson stays in plain HTML and CSS. You are not creating templates or using a
				framework. You are learning the structure underneath those tools: how to organise
				pages, repeat shared patterns carefully, and keep paths understandable.
			</p>

			<h2 id="site-map">Start with a Small Site Map</h2>
			<p>
				Before creating files, decide what pages the site needs and how people will move
				between them. For a small business or restaurant site, a simple map is usually
				enough.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-multi-page-structure-site-map.svg"
					alt="Diagram showing a homepage linked to menu, about, and contact pages through shared navigation."
				/>
				<figcaption>
					A site map shows the relationship between pages before you start duplicating
					headers, footers, and links.
				</figcaption>
			</figure>

			<p>
				For Black Swan Bistro, the starter multi-page structure might be:
			</p>
			<ul>
				<li><strong>Home:</strong> overview, featured dishes, booking prompt</li>
				<li><strong>Menu:</strong> full food and drink sections</li>
				<li><strong>About:</strong> story, values, local produce</li>
				<li><strong>Contact:</strong> booking information, address, opening hours</li>
			</ul>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="[]"
				description="Check that the shared-site mental model is clear before planning files."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="file-structure">Plan the File Structure</h2>
			<p>
				For a beginner-friendly static site, keep the main HTML pages beside each other.
				Put shared CSS and image assets into clear folders.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-multi-page-structure-file-tree.svg"
					alt="Diagram of a small static site file tree with HTML pages, a CSS folder, and an images folder."
				/>
				<figcaption>
					A predictable file structure makes links and asset paths easier to debug.
				</figcaption>
			</figure>

			<pre><code>black-swan-bistro/
  index.html
  menu.html
  about.html
  contact.html
  css/
    style.css
  images/
    dining-room.jpg
    featured-dish.jpg
    bistro-front.jpg</code></pre>

			<p>
				This structure is intentionally simple. Every HTML page can reach the shared CSS
				file with the same path: <code>css/style.css</code>. Every page can link to the
				other main pages with direct filenames like <code>menu.html</code>.
			</p>

			<h2 id="shared-navigation">Build Shared Navigation</h2>
			<p>
				Navigation is the most visible shared structure. Every main page should include
				the same set of important links so visitors can move around without thinking about
				where they are.
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
				On the current page, you can add a small active state to help orientation:
			</p>
			<pre><code>&lt;a class="site-nav__link is-active" href="menu.html" aria-current="page"&gt;
  Menu
&lt;/a&gt;</code></pre>

			<p>
				The key idea is consistency. In plain HTML, you will copy this shared navigation
				into each page. That is not failure. It is controlled repetition until you later
				learn tools that can generate shared templates.
			</p>

			<h2 id="shared-styles">Keep Shared Styles Global</h2>
			<p>
				Your shared stylesheet should contain the patterns that belong to the whole site:
				colour tokens, type rules, layout helpers, buttons, cards, navigation, and footer
				styles.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-multi-page-structure-shared-styles.svg"
					alt="Diagram showing several pages connected to one shared stylesheet for consistent header, footer, button, and card styles."
				/>
				<figcaption>
					Shared CSS acts like the visual agreement between pages. Each page can have
					different content while still feeling like the same site.
				</figcaption>
			</figure>

			<pre><code>/* Foundations */
:root {
  --color-cream: #f7efe2;
  --color-ink: #1f1b18;
  --color-red: #8f2f23;
}

body {
  margin: 0;
  font-family: Georgia, serif;
  background: var(--color-cream);
  color: var(--color-ink);
}

/* Shared layout */
.container {
  width: min(1100px, 92%);
  margin-inline: auto;
}

.section {
  padding-block: 3rem;
}

/* Shared components */
.site-header,
.site-footer,
.button,
.menu-card {
  /* shared component styles live here */
}</code></pre>

			<h2 id="page-specific-styles">Limit Page-specific Styles</h2>
			<p>
				Some styles only belong to one page. That is okay, but keep them clearly labelled
				and limited. If a style starts appearing on two or three pages, it may need to
				move into the shared component area.
			</p>

			<pre><code>/* Page: Menu */
.menu-category {
  margin-block: 2rem;
}

.menu-category__title {
  border-bottom: 2px solid var(--color-red);
  padding-bottom: 0.5rem;
}</code></pre>

			<p>
				The page-specific rule here supports a menu page section. It does not change the
				global header, footer, or button styles. That boundary helps future you understand
				what each rule is responsible for.
			</p>

			<h2 id="links-and-paths">Check Links and Paths</h2>
			<p>
				Most multi-page beginner bugs are path bugs. The browser is not being dramatic;
				it is simply looking in the place you told it to look.
			</p>
			<ul>
				<li><code>href="menu.html"</code> links to a file beside the current page.</li>
				<li><code>href="css/style.css"</code> links to a file inside the css folder.</li>
				<li><code>src="images/dining-room.jpg"</code> links to an image inside the images folder.</li>
				<li><code>href="../index.html"</code> means go up one folder, then find index.html.</li>
			</ul>

			<div class="notification is-warning is-light">
				<p>
					<strong>Small habit, big payoff:</strong> after adding a new page, click every
					navigation link from that page. Then check that the CSS and images load. Do
					not wait until the whole site is finished.
				</p>
			</div>

			<h2 id="consistency-checklist">Multi-page Consistency Checklist</h2>
			<p>
				Before moving into a project build, check the structure:
			</p>
			<ul>
				<li>Every page has the same main navigation links.</li>
				<li>The current page has a clear active navigation state.</li>
				<li>Every page links to the same shared stylesheet.</li>
				<li>Header and footer structure stays consistent.</li>
				<li>Page titles and main headings are unique.</li>
				<li>Image and CSS paths are tested from each page.</li>
				<li>Shared styles are not duplicated in several page-specific places.</li>
			</ul>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Plan and connect a small multi-page site"
				description="Build the structure before worrying about final page content."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Create a multi-page structure plan"
				description="Apply the structure process to a small site idea of your own."
				task-title="Your Task:"
				task="<p>Choose a small website idea with three or four pages. Create a site map, a file structure, and a shared navigation snippet. You do not need to write full page content.</p><p>Keep the task focused on structure, links, and shared styles.</p>"
				:requirements="independentPracticeRequirements"
				:stretch-goals="independentPracticeStretchGoals"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="recap">Recap</h2>
			<p>
				Multi-page structure is about consistency and orientation. Each page has its own
				job, but the site needs shared navigation, shared styles, predictable files, and
				tested links. If you plan those pieces before adding lots of content, the site
				feels calmer to build and easier to maintain.
			</p>
			<p>
				This is the final standalone bridge before Black Swan Bistro Part 4. You now have
				the concepts needed to expand a one-page bistro site into a small linked website.
			</p>

			<ClosureSection
				title="Lesson Complete: You Can Structure a Multi-page Site"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="Next, you will apply this directly in Black Swan Bistro Part 4 by creating menu, about, and contact pages that share navigation and styles."
			/>

			<div id="additional-resources">
				<TutorialRecommendations :current-path="'/tutorials/intermediate/multi-page-structure'" />
			</div>
		</div>
	</div>
</template>
