<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

useTutorialHead({
  title: "Black Swan Bistro — Part 2",
  description: "Build the homepage layout with CSS — wireframe structure, reusable patterns, and a real bistro website project.",
  path: "/tutorials/intermediate/black-swan-bistro-part-2",
});

const sections = [
	{ id: 'project-brief', title: 'Project Brief' },
	{ id: 'intro', title: 'Introduction' },
	{ id: 'project-brief-wireframes', title: 'Project Brief & Wireframes' },
	{ id: 'what-you-will-build', title: 'What You Will Build' },
	{ id: 'what-you-will-learn', title: 'What You Will Learn' },
	{ id: 'wireframe-layout', title: 'Wireframe Layout' },
	{ id: 'starter-html', title: 'Starter HTML' },
	{ id: 'starter-css', title: 'Starter CSS' },
	{
		id: 'main-css-patterns',
		title: 'Main CSS Patterns',
		subsections: [
			{ id: 'container-pattern', title: 'Container' },
			{ id: 'section-pattern', title: 'Section Spacing' },
			{ id: 'section-title-pattern', title: 'Section Titles' },
			{ id: 'button-pattern', title: 'Buttons' },
			{ id: 'card-grid-pattern', title: 'Card Grid' },
			{ id: 'header-layout-pattern', title: 'Header Layout' },
			{ id: 'footer-layout-pattern', title: 'Footer Layout' },
		],
	},
	{ id: 'recap', title: 'Recap' },
	{ id: 'reflection-questions', title: 'Reflection Questions' },
	{ id: 'additional-resources', title: 'Additional Resources' },
];

usePageSections(sections);

const closureKeyTakeaways = [
	'CSS helps you turn semantic HTML into a readable page layout without changing the meaning of the content.',
	'Reusable classes like .container, .section, .card, and .button save time and keep the page consistent.',
	'Low-fidelity design is useful because it lets you focus on structure, spacing, and hierarchy before polish.',
	'Repeated visual patterns are the bridge between one-off styling and reusable components.',
];

const closureObjectives = [
	'Create a simple homepage wireframe with plain HTML and CSS',
	'Use CSS custom properties in :root for a small colour system',
	'Apply repeatable layout classes instead of styling each section from scratch',
	'Recognise which repeated pieces are good candidates for component refactoring later',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-ruler-combined',
		title: 'Layout Thinking',
		questions: [
			'Which class in this tutorial saves the most repeated work?',
			'Which sections feel connected because they share the same spacing and width?',
		],
	},
	{
		icon: 'fas fa-layer-group',
		title: 'Patterns Before Components',
		questions: [
			'Where do you see repeated visual patterns in the homepage?',
			'How does using the same card and button styles prepare you for Part 3?',
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
						<a href="#" aria-current="page">Black Swan Bistro &mdash; Part 2</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">60 min</span>
					<span class="tag is-link">Project</span>
					<span class="tag is-light">Part 2 of 7</span>
				</div>
			</div>

			<h1 class="title is-1">Black Swan Bistro (BSB) Part 2</h1>
			<h2 class="subtitle is-4">Build the Homepage Wireframe Layout with CSS</h2>

			<AnticipatorySet
				title="From Structure to Layout"
				icon="🧱"
				:hook="`<p>In Part 1, you built the homepage structure with semantic HTML. That gave the page a clear skeleton, but it probably still looked like one long stack of plain content.</p><p>That is completely normal. HTML gives the page meaning. CSS helps you organise that meaning into a layout people can scan, follow, and understand.</p><p>In this part, you are not chasing a polished restaurant website yet. You are building a calm, low-fidelity wireframe so you can clearly see how repeated layout patterns make a page feel organised.</p>`"
				:reflection-prompts="[
					'What changed when you wrote the HTML in Part 1, even before any styling existed?',
					'Which parts of a homepage usually repeat the same spacing or card style?',
					'Why might it be useful to keep the design simple while you learn layout?'
				]"
				connection="This lesson focuses on layout first. You will use plain HTML and CSS to build a homepage wireframe, create reusable styling patterns, and prepare the site for the component refactor in Part 3."
			/>

			<LearningObjectives
				:objectives="[
					'Turn semantic homepage HTML into a low-fidelity wireframe layout with CSS',
					'Create a small logo-inspired colour system with CSS custom properties in :root',
					'Use reusable classes such as .container, .section, .section-title, .button, .card, and .card-grid',
					'Style the header, hero, gallery, menu preview, and footer with simple repeatable patterns',
					'Understand the difference between visual reuse with CSS classes and structural reuse with components'
				]"
				purpose="Beginners often try to style every section as if it is a brand-new problem. This lesson shows a better habit: define a few strong patterns, then reuse them across the page so the layout feels consistent and easier to maintain."
				:prerequisites="[
					{ topic: 'Breaking Layouts into Sections', link: '/tutorials/intermediate/breaking-layouts-into-sections' },
					{ topic: 'Box Model', link: '/tutorials/beginner/css-basics/box-model' },
					{ topic: 'Layout Fundamentals', link: '/tutorials/beginner/css-basics/layout' }
				]"
			/>

			<h2 id="project-brief">Project Brief</h2>
			<p>
				This tutorial series uses a real client brief as its source material. Before you
				write any code, download and read the
				<a href="/projects/black-swan-bistro-client-brief.pdf" target="_blank">Black Swan Bistro client brief</a>.
				It describes the restaurant, its audience, and the pages the site needs to include.
				You will refer back to this brief throughout Parts 2, 3, and 4.
			</p>
			<div class="notification is-light">
				<p><strong>Structure first, content later.</strong> Your job in this part is to build
				the layout skeleton. Use the brief to understand what sections the site needs, but do
				not worry about matching the final copy, images, or colours yet. Keep the page in
				wireframe mode and focus on spacing, hierarchy, and repeatable patterns.</p>
			</div>

			<h2 id="intro">Tutorial Introduction</h2>
			<p>
				In this lesson, you will take the homepage from Part 1 and turn it into a
				wireframe-style layout using plain CSS. The goal is not to make the site look
				finished yet. The goal is to make the structure easier to read, easier to scan,
				and easier to build on.
			</p>
			<p>
				As you work, pay attention to repeated patterns. You will use the same spacing,
				card shapes, and button styles across several sections. That is an important step
				toward maintainable CSS, and it sets up the refactor you will do in Part 3.
			</p>

			<h2 id="project-brief-wireframes">Project Brief &amp; Wireframes</h2>
			<p>
				Before writing CSS, review the Black Swan Bistro project brief so your layout work
				comes from the client goals, the content pack, and the wireframe structure rather
				than from guesswork.
			</p>
			<p>
				Use the wireframes to guide your layout decisions. They show the order of sections,
				the repeated shells, and the parts of the page that should stay consistent as the
				project grows.
			</p>
			<div class="notification is-info is-light">
				<p>
					<strong>Required project step:</strong> students should review the
					<router-link to="/projects/black-swan-bistro/brief">Black Swan Bistro Project Brief</router-link>
					before styling the homepage. The brief makes the wireframes active project guidance,
					not optional extra reading.
				</p>
			</div>

			<h2 id="what-you-will-build">What You Will Build</h2>
			<p>
				You will build a low-fidelity homepage wireframe for Black Swan Bistro with these
				sections:
			</p>
			<ul>
				<li>Header with logo and navigation</li>
				<li>Hero section with a short introduction and call to action</li>
				<li>Featured dishes area using repeated cards</li>
				<li>About the bistro section</li>
				<li>Menu preview section</li>
				<li>Simple gallery grid</li>
				<li>Booking call to action</li>
				<li>Location and opening hours</li>
				<li>Footer</li>
			</ul>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-2-homepage-wireframe.svg"
					alt="Low-fidelity homepage wireframe for Black Swan Bistro showing header, hero, featured dishes, about section, menu preview, gallery, booking call to action, location and hours, and footer."
				/>
				<figcaption>
					This wireframe keeps the lesson focused on structure and scanning. You are not
					trying to make the final restaurant site yet. You are trying to make the layout
					read clearly.
				</figcaption>
			</figure>

			<div class="notification is-warning is-light">
				<p><strong>Keep the page in wireframe mode:</strong> simple blocks, clear spacing, and repeatable patterns matter more than polished copy, fancy images, or advanced effects.</p>
			</div>

			<h2 id="what-you-will-learn">What You Will Learn</h2>
			<ul>
				<li>How a <code>.container</code> keeps content at a comfortable page width</li>
				<li>Why shared <code>.section</code> spacing makes long pages easier to follow</li>
				<li>How a reusable <code>.section-title</code> creates visual consistency</li>
				<li>How one <code>.button</code> class can be reused across the homepage</li>
				<li>Why <code>.card</code> and <code>.card-grid</code> are useful before you build components</li>
				<li>How CSS custom properties help you manage colours from one place</li>
			</ul>

			<h2 id="wireframe-layout">Low-Fidelity Text Wireframe</h2>
			<p>
				Before you write CSS, it helps to picture the page as a stack of clear layout
				blocks. This wireframe is intentionally simple:
			</p>

			<div class="box wireframe-box">
				<pre class="wireframe-pre">[ Header ]
[ Logo ] [ Navigation links ..................................... ]

[ Hero ]
[ Headline ..................................................... ]
[ Short intro text ............................................. ]
[ Button ]

[ Featured Dishes ]
[ Card ] [ Card ] [ Card ]

[ About the Bistro ]
[ Short text block ............................................. ]

[ Menu Preview ]
[ Card ] [ Card ] [ Card ]

[ Gallery ]
[ Image ] [ Image ] [ Image ] [ Image ]

[ Booking CTA ]
[ Short text ................................ ] [ Button ]

[ Location and Opening Hours ]
[ Address / map placeholder ] [ Hours list ]

[ Footer ]
[ Small site links and copyright ]
</pre>
			</div>

			<p>
				This is the main idea of the lesson: the homepage is not a random pile of
				different styles. It is a group of sections that can share layout rules.
			</p>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-2-layout-map.svg"
					alt="Layout map showing shared container width, shared section shells, and repeated card patterns across the Black Swan Bistro homepage."
				/>
				<figcaption>
					This layout map highlights the repeated structure underneath the homepage. That
					is the reason the page can be styled with a small set of reusable classes rather
					than a different rule for every section.
				</figcaption>
			</figure>

			<h2 id="starter-html">Beginner-Friendly Homepage HTML Starter Code</h2>
			<p>
				If you finished Part 1, you already have most of this structure. This version adds
				simple reusable classes so the CSS can style repeated patterns more easily.
			</p>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-2-pattern-inventory.svg"
					alt="Pattern inventory board listing reusable page patterns such as container, section, section title, button, card, card grid, header layout, and footer links."
				/>
				<figcaption>
					Think of these patterns as the pieces you want to reuse across the homepage.
					They are still CSS classes at this point, but they are already preparing you for
					the component thinking that comes next.
				</figcaption>
			</figure>

			<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Black Swan Bistro | Homepage Wireframe&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Site header --&gt;
    &lt;header class="site-header"&gt;
        &lt;div class="container header-layout"&gt;
            &lt;a href="#" class="logo"&gt;Black Swan Bistro&lt;/a&gt;

            &lt;nav class="site-nav" aria-label="Main navigation"&gt;
                &lt;ul class="nav-list"&gt;
                    &lt;li&gt;&lt;a href="#hero"&gt;Home&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#featured-dishes"&gt;Dishes&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#menu-preview"&gt;Menu&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#location-hours"&gt;Visit&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/nav&gt;
        &lt;/div&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;!-- Hero section --&gt;
        &lt;section id="hero" class="section hero"&gt;
            &lt;div class="container"&gt;
                &lt;p class="eyebrow"&gt;Under construction&lt;/p&gt;
                &lt;h1&gt;A calm riverside bistro homepage, built step by step&lt;/h1&gt;
                &lt;p&gt;
                    We are still drafting the final content, but this homepage wireframe
                    shows how the Black Swan Bistro site will be organised.
                &lt;/p&gt;
                &lt;a href="#menu-preview" class="button"&gt;View the layout&lt;/a&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;!-- Featured dishes --&gt;
        &lt;section id="featured-dishes" class="section"&gt;
            &lt;div class="container"&gt;
                &lt;h2 class="section-title"&gt;Featured Dishes&lt;/h2&gt;

                &lt;div class="card-grid"&gt;
                    &lt;article class="card"&gt;
                        &lt;h3&gt;Barramundi&lt;/h3&gt;
                        &lt;p&gt;Simple placeholder text for a featured dish card.&lt;/p&gt;
                    &lt;/article&gt;

                    &lt;article class="card"&gt;
                        &lt;h3&gt;Pumpkin Soup&lt;/h3&gt;
                        &lt;p&gt;Simple placeholder text for a featured dish card.&lt;/p&gt;
                    &lt;/article&gt;

                    &lt;article class="card"&gt;
                        &lt;h3&gt;Pavlova&lt;/h3&gt;
                        &lt;p&gt;Simple placeholder text for a featured dish card.&lt;/p&gt;
                    &lt;/article&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;!-- About section --&gt;
        &lt;section id="about" class="section"&gt;
            &lt;div class="container card"&gt;
                &lt;h2 class="section-title"&gt;About the Bistro&lt;/h2&gt;
                &lt;p&gt;
                    Black Swan Bistro is a fictional restaurant project. Right now, our goal
                    is to organise the homepage layout before we worry about polished copy.
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;!-- Menu preview --&gt;
        &lt;section id="menu-preview" class="section"&gt;
            &lt;div class="container"&gt;
                &lt;h2 class="section-title"&gt;Menu Preview&lt;/h2&gt;

                &lt;div class="card-grid"&gt;
                    &lt;article class="card"&gt;
                        &lt;h3&gt;Starters&lt;/h3&gt;
                        &lt;p&gt;A short summary of what belongs in this menu group.&lt;/p&gt;
                    &lt;/article&gt;

                    &lt;article class="card"&gt;
                        &lt;h3&gt;Mains&lt;/h3&gt;
                        &lt;p&gt;A short summary of what belongs in this menu group.&lt;/p&gt;
                    &lt;/article&gt;

                    &lt;article class="card"&gt;
                        &lt;h3&gt;Desserts&lt;/h3&gt;
                        &lt;p&gt;A short summary of what belongs in this menu group.&lt;/p&gt;
                    &lt;/article&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;!-- Gallery section --&gt;
        &lt;section id="gallery" class="section"&gt;
            &lt;div class="container"&gt;
                &lt;h2 class="section-title"&gt;Gallery&lt;/h2&gt;

                &lt;div class="gallery-grid"&gt;
                    &lt;img src="images/gallery-1.jpg" alt="Placeholder dish image"&gt;
                    &lt;img src="images/gallery-2.jpg" alt="Placeholder dining room image"&gt;
                    &lt;img src="images/gallery-3.jpg" alt="Placeholder bistro exterior image"&gt;
                    &lt;img src="images/gallery-4.jpg" alt="Placeholder table setting image"&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;!-- Booking call to action --&gt;
        &lt;section id="booking" class="section"&gt;
            &lt;div class="container booking-layout card"&gt;
                &lt;div&gt;
                    &lt;h2 class="section-title"&gt;Book a Table&lt;/h2&gt;
                    &lt;p&gt;This is a simple call to action area for future booking content.&lt;/p&gt;
                &lt;/div&gt;
                &lt;a href="#" class="button"&gt;Booking Coming Soon&lt;/a&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;!-- Location and hours --&gt;
        &lt;section id="location-hours" class="section"&gt;
            &lt;div class="container info-grid"&gt;
                &lt;section class="card"&gt;
                    &lt;h2 class="section-title"&gt;Location&lt;/h2&gt;
                    &lt;p&gt;Elizabeth Quay, Perth&lt;/p&gt;
                    &lt;p&gt;Map placeholder for now&lt;/p&gt;
                &lt;/section&gt;

                &lt;section class="card"&gt;
                    &lt;h2 class="section-title"&gt;Opening Hours&lt;/h2&gt;
                    &lt;ul&gt;
                        &lt;li&gt;Tuesday to Thursday: 5pm - 9pm&lt;/li&gt;
                        &lt;li&gt;Friday to Saturday: 5pm - 10pm&lt;/li&gt;
                        &lt;li&gt;Sunday: 5pm - 8pm&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/section&gt;
            &lt;/div&gt;
        &lt;/section&gt;
    &lt;/main&gt;

    &lt;!-- Site footer --&gt;
    &lt;footer class="site-footer"&gt;
        &lt;div class="container footer-layout"&gt;
            &lt;p&gt;&amp;copy; 2026 Black Swan Bistro&lt;/p&gt;
            &lt;nav aria-label="Footer navigation"&gt;
                &lt;ul class="footer-links"&gt;
                    &lt;li&gt;&lt;a href="#hero"&gt;Top&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#menu-preview"&gt;Menu&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#location-hours"&gt;Visit&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/nav&gt;
        &lt;/div&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

			<h2 id="starter-css">Matching CSS Starter Code</h2>
			<p>
				This stylesheet keeps the design modest. It gives the page structure, spacing,
				and repeated patterns without turning it into a finished brand site yet.
			</p>

			<pre><code>/* ---------------------------------- */
/* Base styles and colour system    */
/* ---------------------------------- */

:root {
    --color-black: #161312;
    --color-burnt-red: #7b2d26;
    --color-golden-orange: #c98b2e;
    --color-cream: #f5eee3;
    --color-text: #2e2724;
    --color-border: #d9c8b4;
    --color-surface: #fffaf4;
    --color-white: #ffffff;
}

/* Keep sizing predictable */
*,
*::before,
*::after {
    box-sizing: border-box;
}

body,
h1,
h2,
h3,
p,
ul {
    margin: 0;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: var(--color-cream);
    color: var(--color-text);
}

ul {
    padding-left: 1.25rem;
}

a {
    color: var(--color-burnt-red);
    text-decoration: none;
}

a:hover,
a:focus {
    color: var(--color-golden-orange);
}

img {
    display: block;
    width: 100%;
    height: auto;
    border: 2px solid var(--color-border);
    background-color: var(--color-white);
}

/* ---------------------------------- */
/* Reusable layout patterns           */
/* ---------------------------------- */

.container {
    width: min(1100px, 92%);
    margin: 0 auto;
}

.section {
    padding: 3rem 0;
}

.section-title {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    color: var(--color-black);
}

.button {
    display: inline-block;
    padding: 0.85rem 1.25rem;
    border: 2px solid var(--color-burnt-red);
    background-color: var(--color-burnt-red);
    color: var(--color-white);
    font-weight: 700;
}

.button:hover,
.button:focus {
    background-color: var(--color-golden-orange);
    border-color: var(--color-golden-orange);
    color: var(--color-black);
}

.card {
    padding: 1.5rem;
    border: 2px solid var(--color-border);
    background-color: var(--color-surface);
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
}

/* ---------------------------------- */
/* Header and navigation              */
/* ---------------------------------- */

.site-header {
    padding: 1rem 0;
    border-bottom: 3px solid var(--color-burnt-red);
    background-color: var(--color-surface);
}

.header-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-black);
}

.nav-list,
.footer-links {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
}

/* ---------------------------------- */
/* Hero section                       */
/* ---------------------------------- */

.hero {
    background-color: var(--color-surface);
}

.hero .container {
    padding: 2rem;
    border: 2px dashed var(--color-burnt-red);
}

.eyebrow {
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.875rem;
    color: var(--color-burnt-red);
}

.hero h1 {
    margin-bottom: 1rem;
    font-size: 2.25rem;
}

.hero p {
    max-width: 60ch;
    margin-bottom: 1rem;
}

/* ---------------------------------- */
/* Menu preview, booking, and info    */
/* ---------------------------------- */

.booking-layout,
.info-grid {
    display: grid;
    gap: 1rem;
}

.booking-layout {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    align-items: center;
}

.info-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

/* ---------------------------------- */
/* Gallery                            */
/* ---------------------------------- */

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
}

.gallery-grid img {
    min-height: 180px;
    object-fit: cover;
}

/* ---------------------------------- */
/* Footer                             */
/* ---------------------------------- */

.site-footer {
    padding: 1.5rem 0;
    background-color: var(--color-black);
    color: var(--color-cream);
}

.footer-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.site-footer a {
    color: var(--color-cream);
}

/* ---------------------------------- */
/* Small-screen tidy-up               */
/* ---------------------------------- */

@media (max-width: 700px) {
    .hero h1 {
        font-size: 1.8rem;
    }

    .nav-list,
    .footer-links {
        flex-direction: column;
        gap: 0.5rem;
    }
}</code></pre>

			<h2 id="main-css-patterns">Step-by-Step: The Main CSS Patterns</h2>

			<h3 id="container-pattern">1. The <code>.container</code> Pattern</h3>
			<p>
				The <code>.container</code> class stops your content from stretching all the way
				across the screen. Very wide lines are tiring to read, so it is helpful to create
				one reusable width rule and use it in every major section.
			</p>
			<p>
				Instead of setting a different width on the hero, the gallery, the footer, and the
				menu preview, you set the rule once and reuse it everywhere.
			</p>

			<h3 id="section-pattern">2. The <code>.section</code> Spacing Pattern</h3>
			<p>
				Long pages need breathing room. The <code>.section</code> class adds top and bottom
				padding so each homepage block feels separate without needing custom spacing rules
				for every section.
			</p>
			<p>
				This is one of the clearest examples of repeatable CSS thinking: one class, many
				sections, consistent results.
			</p>

			<h3 id="section-title-pattern">3. The <code>.section-title</code> Pattern</h3>
			<p>
				Section headings should look related. By using the same
				<code>.section-title</code> class on Featured Dishes, About the Bistro, Menu
				Preview, Gallery, and other sections, you make the page easier to scan.
			</p>
			<p>
				This also makes future changes easier. If you want all section titles to become
				larger later, you only update one rule.
			</p>

			<h3 id="button-pattern">4. The <code>.button</code> Pattern</h3>
			<p>
				Buttons are another good place to practise reuse. A homepage often has more than
				one call to action. Instead of writing separate styles for each link, you create a
				single <code>.button</code> class and apply it where needed.
			</p>
			<p>
				That helps students see an important idea early: CSS classes can create consistency
				even before you move to reusable components.
			</p>

			<h3 id="card-grid-pattern">5. The <code>.card</code> and <code>.card-grid</code> Pattern</h3>
			<p>
				The featured dishes and menu preview sections both use repeated content blocks. The
				individual block is a <code>.card</code>. The layout that arranges those blocks is
				the <code>.card-grid</code>.
			</p>
			<p>
				This is the bridge into Part 3. Right now, the repeated structure still lives
				directly in the HTML. In the next part, you will notice that repetition and
				refactor it into reusable components.
			</p>

			<h3 id="header-layout-pattern">6. The Header Layout Pattern</h3>
			<p>
				The header needs two jobs to happen at once: show the logo and line up the
				navigation. A simple layout class such as <code>.header-layout</code> keeps that
				relationship tidy without forcing you to style the header from scratch every time.
			</p>
			<p>
				Using a shared layout class also makes the structure easier to understand when you
				read the HTML back later.
			</p>

			<h3 id="footer-layout-pattern">7. The Footer Layout Pattern</h3>
			<p>
				The footer follows the same thinking as the header: it is another area with small
				pieces that need to sit together in a predictable way. A simple
				<code>.footer-layout</code> class keeps the bottom of the page organised and helps
				the whole homepage feel consistent.
			</p>
			<p>
				When students see similar layout ideas appear in different places, they start to
				understand that CSS is about systems, not isolated decorations.
			</p>

			<div class="notification is-info is-light">
				<p><strong>Looking ahead:</strong> you may already notice repeated pieces like menu cards, navigation, and the footer. In the next tutorial, <router-link to="/tutorials/intermediate/css-systems-for-reusable-sections">CSS Systems for Reusable Sections</router-link>, you will formalise these shared patterns — colour tokens, spacing values, naming rules — into a small, reliable system. Then in Part 3, you will refactor repeated HTML structures into reusable components. For now, focus on visual reuse through shared CSS classes.</p>
			</div>

			<h2 id="recap">Short Recap</h2>
			<p>
				In Part 2, you did not try to make Black Swan Bistro look finished. You used CSS
				to organise the homepage into a calm wireframe layout with repeatable patterns.
			</p>
			<p>
				That matters because good CSS is rarely about styling each section as a separate
				one-off task. It is about building a small set of rules you can trust and reuse
				across the page.
			</p>

			<h2 id="reflection-questions">Student Reflection Questions</h2>
			<ol>
				<li>Which reusable class from this lesson felt most helpful, and why?</li>
				<li>Where did you notice the same visual pattern appearing more than once on the page?</li>
				<li>How does building a wireframe first make the later polish and refactor easier?</li>
			</ol>

			<h2 id="additional-resources">Additional Resources</h2>
			<p>
				If you want to strengthen the ideas from this lesson, these resources are a good
				next step:
			</p>
			<ul>
				<li>
					<a href="https://getbem.com" target="_blank" rel="noopener">
						BEM — Block Element Modifier
					</a>
					&mdash; useful for naming repeated CSS patterns clearly once your page starts to
					grow.
				</li>
				<li>
					Every Layout
					&mdash; useful for seeing classes like container, stack, grid, and cluster as
					reusable layout patterns rather than section-specific styling.
				</li>
			</ul>

			<ClosureSection
				title="Lesson Complete: Your Homepage Has Layout"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="In <strong>Part 3</strong>, you will take the repeated structures you can now clearly see and refactor them into reusable components for the navigation, menu cards, and footer."
			/>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/black-swan-bistro-part-2'" />
		</div>
	</div>
</template>

<style scoped>
.wireframe-box {
	background: #faf8f4;
	border: 1px solid #d8d1c7;
}

.wireframe-pre {
	margin: 0;
	font-family: 'Courier New', monospace;
	font-size: 0.95rem;
	line-height: 1.5;
	white-space: pre-wrap;
}
</style>
