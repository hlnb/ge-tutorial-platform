<script setup>
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const sections = [
	{ id: 'intro', title: 'Introduction' },
	{ id: 'what-you-will-build', title: 'What You Will Build' },
	{ id: 'component-refactor', title: 'Component Refactor' },
	{ id: 'pattern-inventory', title: 'Pattern Inventory' },
	{ id: 'component-contracts', title: 'Component Contracts' },
	{
		id: 'refactor-steps',
		title: 'Refactor Steps',
		subsections: [
			{ id: 'nav-component', title: 'Navigation' },
			{ id: 'menu-card-component', title: 'Menu Cards' },
			{ id: 'cta-component', title: 'CTA Blocks' },
			{ id: 'footer-component', title: 'Footer' },
		],
	},
	{ id: 'css-organisation', title: 'CSS Organisation' },
	{ id: 'accessibility-check', title: 'Accessibility Check' },
	{ id: 'part-4-prep', title: 'Prepare for Part 4' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'reflection-questions', title: 'Reflection Questions' },
	{ id: 'additional-resources', title: 'Additional Resources' },
];

usePageSections(sections);

const closureKeyTakeaways = [
	'Components are reusable HTML and CSS patterns, not just visual decorations.',
	'A strong component has a stable outer structure and clear internal parts.',
	'Navigation, menu cards, CTA blocks, and footer patterns should become predictable before the site becomes multi-page.',
	'Good component refactoring makes Part 4 easier because shared page sections already have names, structure, and behaviour.',
];

const closureObjectives = [
	'Identify repeated patterns from the BSB Part 2 homepage wireframe',
	'Define small component contracts for navigation, cards, CTA blocks, and footer content',
	'Refactor repeated HTML into consistent class names and reusable structures',
	'Organise component CSS so layout rules and component rules do not blur together',
	'Prepare the bistro site for multi-page reuse in Part 4',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-clone',
		title: 'Pattern Recognition',
		questions: [
			'Which repeated pattern became easier to understand after you gave it a clear component name?',
			'Where did you decide not to make something a component yet, and why?',
		],
	},
	{
		icon: 'fas fa-sitemap',
		title: 'Preparing for More Pages',
		questions: [
			'Which component will save the most work when the menu, about, and contact pages arrive?',
			'What class names now describe purpose instead of page position?',
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
						<a href="#" aria-current="page">Black Swan Bistro &mdash; Part 3</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">55 min</span>
					<span class="tag is-link">Project</span>
					<span class="tag is-light">Part 3 of 7</span>
				</div>
			</div>

			<h1 class="title is-1">Black Swan Bistro &mdash; Part 3</h1>
			<h2 class="subtitle is-4">Refactor Repeated Patterns into Components</h2>

			<AnticipatorySet
				title="The Page Works. Now Make It Reusable."
				icon="▣"
				:hook="`<p>In Part 2, you built a wireframe layout for the Black Swan Bistro homepage. You created repeated visual patterns: cards, buttons, navigation links, section spacing, and footer content.</p><p>That is a good place to be. The page has enough structure that you can now see what repeats. Part 3 is where you stop treating those repeated pieces as one-off HTML and start treating them as reusable components.</p><p>We are still using plain HTML and CSS. No framework. No build magic. Just better structure, clearer names, and patterns that can survive the next stage of the project.</p>`"
				:reflection-prompts="[
					'Which parts of your homepage repeat the same shape or role?',
					'Which repeated pieces will probably appear again on the menu, about, or contact page?',
					'What would become easier if those pieces had one reliable structure?'
				]"
				connection="This project part applies the systems, Flexbox, and reusable component thinking from the previous bridge lessons. It prepares the bistro site for Part 4, where shared patterns need to work across multiple pages."
			/>

			<LearningObjectives
				:objectives="[
					'Review the BSB homepage and identify repeated UI patterns',
					'Refactor navigation, cards, CTA blocks, and footer content into reusable structures',
					'Separate component CSS from page-specific layout CSS',
					'Use purpose-based class names that describe what a pattern does',
					'Check component accessibility basics before reusing patterns across pages'
				]"
				purpose="A component is not a framework feature. It is a repeatable design decision. Learning to build components with plain HTML and CSS gives you the mental model you need before any future framework can be useful."
				:prerequisites="[
					{ topic: 'Building Reusable Components', link: '/tutorials/intermediate/building-reusable-components' },
					{ topic: 'BSB Part 2: Homepage Wireframe', link: '/tutorials/intermediate/black-swan-bistro-part-2' }
				]"
			/>

			<h2 id="intro">Tutorial Introduction</h2>
			<p>
				This part is a refactor lesson. You are not starting the bistro site again. You are
				taking the Part 2 homepage and making its repeated structures more consistent,
				easier to reuse, and easier to extend.
			</p>
			<p>
				That matters because the next major project step is multi-page structure. If every
				card, footer link, and call-to-action is slightly different before you create more
				pages, those small differences multiply quickly. A calm refactor now saves mess
				later.
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Project checkpoint:</strong> you should have the Part 2 homepage
					wireframe before beginning this lesson. If your page is not polished yet, that
					is fine. This lesson is about structure and reuse, not final visual design.
				</p>
			</div>

			<div class="notification is-light">
				<p>
					<strong>Keep the client brief close:</strong> the components you are about to
					build — navigation, cards, calls to action, footer — come directly from the
					content and structure described in the
					<a href="/projects/black-swan-bistro-client-brief.pdf" target="_blank">Black Swan Bistro client brief</a>.
					If you are unsure what belongs inside a component, the brief tells you what the
					restaurant needs and who it is for.
				</p>
			</div>

			<h2 id="what-you-will-build">What You Will Build</h2>
			<p>
				By the end of this lesson, your bistro homepage should still look familiar, but
				the code underneath it should be cleaner. You will create reusable structures for:
			</p>
			<ul>
				<li>the site header and navigation</li>
				<li>menu and featured-dish cards</li>
				<li>call-to-action sections</li>
				<li>the site footer</li>
				<li>shared component CSS that can be used again in Part 4</li>
			</ul>

			<h2 id="component-refactor">What Component Refactoring Means Here</h2>
			<p>
				In this lesson, a component means a repeatable HTML pattern with CSS that supports
				it. It is not a Vue component, React component, or custom element. Those tools can
				come later. First, you need the underlying thinking.
			</p>
			<p>
				A useful component has three parts:
			</p>
			<ul>
				<li>a stable outer wrapper, such as <code>.menu-card</code></li>
				<li>named internal parts, such as <code>.menu-card__title</code> and <code>.menu-card__meta</code></li>
				<li>flexible content that can change without changing the component structure</li>
			</ul>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-3-refactor-flow.svg"
					alt="Diagram showing repeated homepage HTML being refactored into reusable navigation, card, CTA, and footer components before multi-page reuse."
				/>
				<figcaption>
					Part 3 is the bridge between one working homepage and reusable structures that
					can support the next pages of the project.
				</figcaption>
			</figure>

			<h2 id="pattern-inventory">Step 1: Create a Pattern Inventory</h2>
			<p>
				Before writing new code, scan your Part 2 homepage and list the repeated patterns.
				This prevents you from inventing components too early. You only refactor what the
				page has already shown you it needs.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-3-pattern-inventory.svg"
					alt="Diagram of a bistro homepage with repeated navigation, card, CTA, and footer patterns labelled as component candidates."
				/>
				<figcaption>
					A pattern inventory helps you separate real repeated structures from one-off
					page content.
				</figcaption>
			</figure>

			<div class="box">
				<h3 class="title is-5">Pattern Inventory</h3>
				<table class="table is-fullwidth is-striped">
					<thead>
						<tr>
							<th>Pattern</th>
							<th>Where it appears</th>
							<th>Component decision</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Navigation links</td>
							<td>Header, later every page</td>
							<td>Make reusable now</td>
						</tr>
						<tr>
							<td>Menu cards</td>
							<td>Featured dishes, menu preview</td>
							<td>Make reusable now</td>
						</tr>
						<tr>
							<td>CTA blocks</td>
							<td>Hero, booking section</td>
							<td>Make reusable lightly</td>
						</tr>
						<tr>
							<td>Footer links</td>
							<td>Footer, later every page</td>
							<td>Make reusable now</td>
						</tr>
						<tr>
							<td>Gallery items</td>
							<td>Homepage gallery</td>
							<td>Keep simple until Grid lesson</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2 id="component-contracts">Step 2: Define Component Contracts</h2>
			<p>
				A component contract is a small agreement with yourself: this pattern has a name,
				these are its internal parts, and this is the kind of content it expects. The
				contract keeps the component predictable when you reuse it later.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-3-component-contract.svg"
					alt="Diagram showing a menu card component with a stable shell, named internal parts, and changing dish content."
				/>
				<figcaption>
					The component shell stays stable. The dish name, description, price, and label
					can change from card to card.
				</figcaption>
			</figure>

			<p>
				For example, a menu card might use this contract:
			</p>
			<pre><code>&lt;article class="menu-card"&gt;
  &lt;p class="menu-card__eyebrow"&gt;Chef favourite&lt;/p&gt;
  &lt;h3 class="menu-card__title"&gt;Charred pumpkin risotto&lt;/h3&gt;
  &lt;p class="menu-card__description"&gt;
    Roasted pumpkin, sage, parmesan, and toasted pepitas.
  &lt;/p&gt;
  &lt;p class="menu-card__price"&gt;$28&lt;/p&gt;
&lt;/article&gt;</code></pre>

			<p>
				The exact food changes. The structure does not. That is the point.
			</p>

			<h2 id="refactor-steps">Step-by-Step Refactor</h2>
			<p>
				Now move through the homepage one pattern at a time. Keep the changes small. A
				good refactor should make the code clearer without changing everything at once.
			</p>

			<h3 id="nav-component">1. Refactor the Navigation</h3>
			<p>
				The navigation is one of the most important reusable structures because it will
				appear on every page in Part 4. Start by making the header structure consistent.
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
				Notice the class names. They describe the pattern itself, not where it happens to
				sit on the homepage. That makes the same structure easier to reuse on future pages.
			</p>

			<h3 id="menu-card-component">2. Refactor Menu and Featured-Dish Cards</h3>
			<p>
				In Part 2, you may have used a broad class like <code>.card</code>. That is useful
				for early layout, but now the bistro has a more specific repeated pattern:
				<code>.menu-card</code>.
			</p>
			<pre><code>&lt;div class="menu-card-grid"&gt;
  &lt;article class="menu-card"&gt;
    &lt;p class="menu-card__eyebrow"&gt;Seasonal&lt;/p&gt;
    &lt;h3 class="menu-card__title"&gt;Southwest gnocchi&lt;/h3&gt;
    &lt;p class="menu-card__description"&gt;
      Potato gnocchi, roasted capsicum, basil oil, and parmesan.
    &lt;/p&gt;
    &lt;p class="menu-card__price"&gt;$26&lt;/p&gt;
  &lt;/article&gt;

  &lt;article class="menu-card"&gt;
    &lt;p class="menu-card__eyebrow"&gt;Signature&lt;/p&gt;
    &lt;h3 class="menu-card__title"&gt;Black swan linguine&lt;/h3&gt;
    &lt;p class="menu-card__description"&gt;
      Squid ink pasta, prawns, chilli, lemon, and herbs.
    &lt;/p&gt;
    &lt;p class="menu-card__price"&gt;$32&lt;/p&gt;
  &lt;/article&gt;
&lt;/div&gt;</code></pre>

			<p>
				The grid arranges the cards. The card component owns the internal structure. Keep
				those jobs separate.
			</p>

			<h3 id="cta-component">3. Refactor Call-to-Action Blocks</h3>
			<p>
				CTA blocks usually combine a heading, a short explanation, and a link. They may
				look different depending on where they appear, but the structure is often similar.
			</p>
			<pre><code>&lt;section class="section cta-block"&gt;
  &lt;div class="container cta-block__inner"&gt;
    &lt;div&gt;
      &lt;p class="eyebrow"&gt;Bookings&lt;/p&gt;
      &lt;h2 class="cta-block__title"&gt;Reserve a table for this weekend&lt;/h2&gt;
      &lt;p class="cta-block__text"&gt;
        Join us for local produce, thoughtful wine, and a relaxed dining room.
      &lt;/p&gt;
    &lt;/div&gt;

    &lt;a class="button" href="contact.html"&gt;Book now&lt;/a&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>

			<p>
				You do not need to turn every section into a complex component. This is a light
				component: consistent enough to reuse, simple enough to understand.
			</p>

			<h3 id="footer-component">4. Refactor the Footer</h3>
			<p>
				The footer is another shared site pattern. It should not be rebuilt differently on
				each page later. Give it the same treatment as the header: a stable wrapper,
				internal layout, and named parts.
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

			<h2 id="css-organisation">Organise the Component CSS</h2>
			<p>
				Component refactoring is not only about HTML. Your CSS should also show the
				difference between global foundations, layout helpers, and components.
			</p>
			<pre><code>/* 1. Foundations */
:root {
  --color-cream: #f7efe2;
  --color-ink: #1f1b18;
  --color-red: #8f2f23;
  --space-4: 1rem;
  --space-6: 1.5rem;
}

/* 2. Layout helpers */
.container { width: min(1100px, 92%); margin: 0 auto; }
.section { padding: 3rem 0; }

/* 3. Components */
.site-header { border-bottom: 3px solid var(--color-red); }
.site-header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.menu-card {
  display: grid;
  gap: 0.75rem;
  padding: var(--space-6);
  background: white;
  border: 1px solid rgba(31, 27, 24, 0.18);
}</code></pre>

			<div class="notification is-warning is-light">
				<p>
					<strong>Avoid accidental components:</strong> a class like
					<code>.homepage-red-box</code> describes a location and a visual detail. A class
					like <code>.cta-block</code> describes a reusable purpose.
				</p>
			</div>

			<h2 id="accessibility-check">Component Accessibility Check</h2>
			<p>
				Reusable code can spread good decisions or bad decisions. Before you reuse these
				patterns in Part 4, check the basics:
			</p>
			<ul>
				<li>Navigation uses a real <code>&lt;nav&gt;</code> element with an accessible label.</li>
				<li>Navigation links are real links, not clickable <code>&lt;div&gt;</code> elements.</li>
				<li>Headings stay in a sensible order inside cards and sections.</li>
				<li>Interactive links and buttons have visible hover and focus states.</li>
				<li>Card content still makes sense if the CSS does not load.</li>
			</ul>

			<h2 id="part-4-prep">Prepare the Site for Part 4</h2>
			<p>
				Part 4 expands the bistro into a multi-page site. Before moving on, your homepage
				should have a small set of shared patterns ready to copy into the next pages.
			</p>
			<div class="box">
				<h3 class="title is-5">Before You Move On</h3>
				<ul>
					<li>Your header and footer use purpose-based class names.</li>
					<li>Your menu cards share one consistent HTML structure.</li>
					<li>Your CTA block can be reused without changing its core CSS.</li>
					<li>Your component CSS is grouped separately from global reset and layout helpers.</li>
					<li>You can explain what content changes inside each component and what structure stays stable.</li>
				</ul>
			</div>

			<h2 id="recap">Short Recap</h2>
			<p>
				In Part 3, you turned visible repetition into reusable structure. The goal was not
				to make Black Swan Bistro more complicated. It was to make the code more honest
				about what the page already contains: repeated navigation, repeated cards,
				repeated calls to action, and repeated footer content.
			</p>
			<p>
				That gives the project a stronger foundation. When you add more pages, you will
				not be inventing the header, footer, and card structure from scratch each time.
			</p>

			<h2 id="reflection-questions">Student Reflection Questions</h2>
			<ol>
				<li>Which repeated pattern was easiest to refactor into a component?</li>
				<li>Which component needs the clearest internal class names to stay readable?</li>
				<li>Where did separating layout CSS from component CSS make the code easier to understand?</li>
				<li>What should stay the same when a component is reused on another page?</li>
			</ol>

			<ClosureSection
				title="Lesson Complete: Your Bistro Patterns Are Reusable"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="Next, you will learn how CSS Grid supports repeated layouts before returning to the bistro project for multi-page structure."
			/>

			<div id="additional-resources">
				<TutorialRecommendations :current-path="'/tutorials/intermediate/black-swan-bistro-part-3'" />
			</div>
		</div>
	</div>
</template>
