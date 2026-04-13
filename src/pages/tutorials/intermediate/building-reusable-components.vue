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
	{ id: 'what-components-mean', title: 'What Components Mean' },
	{ id: 'pattern-vs-component', title: 'Pattern vs Component' },
	{ id: 'component-contract', title: 'Component Contract' },
	{ id: 'card-component', title: 'Card Component' },
	{ id: 'button-actions', title: 'Buttons and Actions' },
	{ id: 'nav-footer', title: 'Nav and Footer Systems' },
	{ id: 'component-checklist', title: 'Component Checklist' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'additional-resources', title: 'Additional Resources' },
	{ id: 'recap', title: 'Recap' },
];

usePageSections(sections);

const checkpointQuestions = [
	{
		question: 'What makes a repeated card pattern different from a reusable component-style pattern?',
		answer:
			'A repeated card pattern becomes component-style when it has a stable HTML structure, predictable class names, and clear rules about which parts can change.',
	},
	{
		question: 'Why should a component have a small “contract” between its HTML and CSS?',
		answer:
			'The contract makes the component easier to reuse because the markup and CSS agree on what each class is responsible for.',
	},
	{
		question: 'Predict what happens if every card, button, or footer section gets its own unique markup and class names.',
		answer:
			'The site becomes harder to maintain because repeated parts cannot share styling or structure reliably.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Choose one repeated pattern',
		instructions:
			'<p>Start with a repeated piece from a homepage, such as a dish card, feature card, button, or footer link group. Write down what stays the same each time it appears and what changes from one instance to the next.</p>',
		hints: [
			'Stable parts might include the outer card, heading, description, and action area.',
			'Variable parts might include title text, image, price, link target, or button label.',
		],
	},
	{
		title: 'Step 2: Define the HTML structure',
		instructions:
			'<p>Create a small, predictable markup structure for that pattern. Use purposeful classes such as <code>.menu-card</code>, <code>.menu-card__title</code>, and <code>.menu-card__action</code>.</p><p>Keep the markup semantic first. Classes should support styling, not replace meaningful HTML.</p>',
		hints: [
			'Use a heading for a real title, not a generic div.',
			'Only add extra wrapper elements when they solve a real layout or grouping problem.',
		],
	},
	{
		title: 'Step 3: Write CSS for the shared shell',
		instructions:
			'<p>Style the stable shell first: spacing, border, background, radius, and internal layout. Then add small rules for the variable parts, such as the title, meta text, or action area.</p>',
		hints: [
			'Start with the common card shape before adding special variations.',
			'If the component needs a variant, name the variant clearly instead of rewriting the whole component.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You identified what stays the same and what changes in the repeated pattern',
	'You wrote semantic markup with predictable component-style class names',
	'You styled the shared shell before adding special-case rules',
	'You can reuse the component at least twice without changing its structure',
];

const independentPracticeRubric = [
	{
		criteria: 'Reusable structure',
		success: 'The pattern has a stable markup shape that can be repeated without rewriting it from scratch.',
	},
	{
		criteria: 'Clear class responsibility',
		success: 'Class names describe the component and its parts instead of temporary visual details.',
	},
	{
		criteria: 'Semantic HTML',
		success: 'The component uses meaningful elements for headings, links, lists, or content groups where appropriate.',
	},
	{
		criteria: 'Maintainable variation',
		success: 'Any variation is handled deliberately instead of creating a disconnected one-off component.',
	},
];

const closureKeyTakeaways = [
	'Reusable components are stable HTML and CSS patterns, not framework-specific magic.',
	'A component-style pattern has a clear structure, clear class responsibilities, and predictable variation points.',
	'Cards, buttons, nav groups, and footers are good early candidates because they repeat across real websites.',
	'Good reusable components make the next page easier to build without hiding the underlying HTML and CSS.',
];

const closureObjectives = [
	'Explain what component-style thinking means in plain HTML and CSS',
	'Identify repeated patterns that are good candidates for reusable components',
	'Create a simple component contract between markup and styling',
	'Build reusable card, action, nav, or footer patterns without introducing a framework',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-cubes',
		title: 'Reuse',
		questions: [
			'Which repeated piece in your current project would benefit most from becoming a reusable component-style pattern?',
			'What part of that pattern should stay stable every time it appears?',
		],
	},
	{
		icon: 'fas fa-code',
		title: 'Structure',
		questions: [
			'Where would semantic HTML help your component stay understandable?',
			'What variation should be allowed without rewriting the whole component?',
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
						<a href="#" aria-current="page">Building Reusable Components</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">40 min</span>
					<span class="tag is-light">Components</span>
					<span class="tag is-light">HTML &amp; CSS</span>
				</div>
			</div>

			<h1 class="title is-1">Building Reusable Components</h1>

			<p class="subtitle is-5">
				Create cards, buttons, navigation groups, and footer patterns you can reuse across pages.
			</p>

			<AnticipatorySet
				title="Components Are Patterns You Can Trust"
				icon="🧩"
				:hook="`<p>After building a few sections, you start noticing that some pieces repeat: cards, buttons, navigation links, footer groups, and call-to-action blocks. At first, copying and editing them feels fast. Later, it becomes fragile.</p><p>Reusable component thinking solves that problem. You do not need Vue, React, or any framework yet. You need to learn how stable HTML and CSS patterns work before tools automate them for you.</p><p>That is the goal of this lesson: build reusable pieces while still understanding the fundamentals underneath.</p>`"
				:reflection-prompts="[
					'Which repeated pieces have you already copied from one part of a page to another?',
					'What usually changes between repeated cards or buttons?',
					'What would become easier if those repeated pieces had a predictable structure?'
				]"
				connection="This lesson prepares you for Black Swan Bistro Part 3, where repeated homepage patterns become reusable structures for cards, navigation, and footer content."
			/>

			<LearningObjectives
				:objectives="[
					'Describe reusable components as stable HTML and CSS patterns',
					'Identify repeated pieces that are worth turning into component-style structures',
					'Create a simple contract between component markup and component CSS',
					'Build reusable card, button, nav, and footer patterns without using a framework',
					'Decide when variation belongs inside a component and when it should stay section-specific'
				]"
				purpose="Component thinking helps you stop solving the same layout and styling problem from scratch. The aim is not abstraction for its own sake. The aim is clearer, more maintainable HTML and CSS."
			/>

			<h2 id="what-components-mean">What Components Mean Without a Framework</h2>
			<p>
				When people talk about components, they often mean framework components. Those are
				useful later, but the idea starts much earlier. In plain HTML and CSS, a component
				is a repeated piece of interface with a predictable structure and predictable
				styling.
			</p>
			<p>
				That means a component-style pattern usually has:
			</p>
			<ul>
				<li>A clear purpose, such as showing a menu item, action, or link group</li>
				<li>A stable HTML shape that repeats</li>
				<li>Class names that describe the component and its parts</li>
				<li>CSS that styles the shared pattern instead of one single instance</li>
			</ul>

			<div class="notification is-info is-light">
				<p><strong>Important idea:</strong> reusable components are not about hiding HTML and CSS. They are about making repeated HTML and CSS easier to reason about.</p>
			</div>

			<h2 id="pattern-vs-component">Pattern vs Component</h2>
			<p>
				A pattern is something you notice. A component-style structure is something you
				define deliberately.
			</p>
			<p>
				For example, after BSB Part 2 you may notice that the homepage has several cards.
				That is a pattern. It becomes a reusable component-style pattern when you decide
				what the card structure should be and how its CSS should work every time it
				appears.
			</p>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-building-reusable-components-pattern-to-component.svg"
					alt="Diagram showing three similar cards becoming one reusable card component structure with stable parts and changing content."
				/>
				<figcaption>
					This is the shift you are practising: repeated pieces become reusable only
					after you define the stable structure and the parts that are allowed to
					change.
				</figcaption>
			</figure>

			<div class="box">
				<pre><code>&lt;article class="menu-card"&gt;
  &lt;h3 class="menu-card__title"&gt;Pan-Seared Barramundi&lt;/h3&gt;
  &lt;p class="menu-card__description"&gt;
    Lemon butter, asparagus, and crushed potatoes.
  &lt;/p&gt;
  &lt;p class="menu-card__meta"&gt;$34&lt;/p&gt;
&lt;/article&gt;</code></pre>
			</div>

			<p>
				The exact dish changes. The structure stays stable. That is the shift from
				“several similar cards” to “a reusable card pattern.”
			</p>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="🧱"
				description="Pause here and check whether the component idea is clear before you build one."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="component-contract">Create a Component Contract</h2>
			<p>
				A reusable component works best when the HTML and CSS have a small agreement. You
				can think of this as a component contract:
			</p>
			<ul>
				<li>The outer class names the component.</li>
				<li>Inner classes name meaningful parts of the component.</li>
				<li>The CSS styles those parts predictably.</li>
				<li>New content can be swapped in without changing the whole structure.</li>
			</ul>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-building-reusable-components-component-contract.svg"
					alt="Diagram connecting HTML classes for a menu card to their CSS responsibilities, such as shell, title, description, and meta styles."
				/>
				<figcaption>
					A component contract is small but powerful. The HTML names the parts, and the
					CSS gives each part a clear responsibility.
				</figcaption>
			</figure>

			<pre><code>.menu-card {
  padding: var(--space-md);
  background: var(--color-surface);
  border: var(--border-soft);
  border-radius: var(--card-radius);
}

.menu-card__title {
  margin-bottom: 0.5rem;
}

.menu-card__description {
  color: var(--color-text-muted);
}

.menu-card__meta {
  font-weight: 700;
}</code></pre>

			<p>
				This does not require a strict naming system, but it does require consistency. If
				the class names change randomly from card to card, the component becomes harder to
				reuse.
			</p>

			<h2 id="card-component">Build a Card Component</h2>
			<p>
				Cards are a good first component-style pattern because they repeat often and have
				clear internal parts. A card usually has a shell, a title, supporting text, and
				sometimes an image, metadata, or action.
			</p>

			<pre><code>&lt;article class="feature-card"&gt;
  &lt;img class="feature-card__image" src="images/dish.jpg" alt="Seasonal pasta dish"&gt;
  &lt;div class="feature-card__body"&gt;
    &lt;h3 class="feature-card__title"&gt;Seasonal Menu&lt;/h3&gt;
    &lt;p class="feature-card__text"&gt;
      Fresh dishes built around local produce.
    &lt;/p&gt;
    &lt;a class="button-primary feature-card__action" href="menu.html"&gt;
      View Menu
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/article&gt;</code></pre>

			<p>
				Notice that the image, title, text, and action are allowed to change. The
				component structure does not need to change every time.
			</p>

			<h2 id="button-actions">Buttons and Actions</h2>
			<p>
				Buttons and links are another strong place to practise reuse. A primary action
				should feel consistent whether it appears in the hero, a card, or a booking
				section.
			</p>

			<pre><code>.button-primary {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  background: var(--color-accent);
  color: white;
  text-decoration: none;
  border-radius: 999px;
}

.button-secondary {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  color: var(--color-accent);
  border: 1px solid currentColor;
  border-radius: 999px;
}</code></pre>

			<p>
				The key is to keep the action style reusable while still using the correct HTML.
				If the action navigates somewhere, use a link. If it submits or triggers an
				interface action, use a button.
			</p>

			<h2 id="nav-footer">Navigation and Footer Systems</h2>
			<p>
				Navigation and footer areas are not single cards, but they still benefit from
				component-style thinking. They repeat across pages and need predictable structure.
			</p>

			<pre><code>&lt;nav class="site-nav" aria-label="Main navigation"&gt;
  &lt;ul class="site-nav__list"&gt;
    &lt;li&gt;&lt;a class="site-nav__link" href="index.html"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="site-nav__link" href="menu.html"&gt;Menu&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a class="site-nav__link" href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>

			<p>
				The structure stays stable as you move from page to page. That makes Part 4’s
				multi-page work much easier later.
			</p>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-building-reusable-components-page-reuse-map.svg"
					alt="Diagram showing shared navigation, cards, buttons, and footer groups reused across a homepage, menu page, and contact page."
				/>
				<figcaption>
					Reusable components matter most when the site grows. A stable nav, card, action,
					or footer pattern can support the homepage and the next pages without starting
					over.
				</figcaption>
			</figure>

			<h2 id="component-checklist">Reusable Component Checklist</h2>
			<p>
				Before calling something reusable, check it against a few practical questions:
			</p>
			<ul>
				<li>Does this pattern appear more than once, or is it likely to?</li>
				<li>Can the HTML structure stay mostly the same each time?</li>
				<li>Are the class names describing purpose instead of decoration?</li>
				<li>Can content change without rewriting the component?</li>
				<li>Does the component still use semantic HTML?</li>
				<li>Are focus, link, and button states still clear?</li>
			</ul>

			<div class="notification is-warning is-light">
				<p><strong>Keep it grounded:</strong> not every piece needs to become reusable. If something appears once and has a very specific purpose, a simple section-specific rule may be clearer.</p>
			</div>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Turn a repeated card into a reusable component-style pattern"
				description="Use a repeated piece from a homepage and define its structure, class responsibilities, and shared styling."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Design one reusable pattern"
				description="Now apply component-style thinking to a new repeated interface piece."
				task-title="Your Task:"
				task="<p>Choose one repeated pattern from a small website idea: a testimonial card, menu item, service card, footer link group, or call-to-action block. Define the component’s stable HTML structure and write the shared CSS rules it would need.</p><p>Keep the task small. You are building one reusable pattern, not a full site.</p>"
				:requirements="[
					'Choose one realistic repeated interface pattern',
					'Identify what stays the same and what changes between instances',
					'Write semantic HTML for one instance of the pattern',
					'Write shared CSS for the component shell and key parts',
					'Explain how you would reuse the same pattern at least twice'
				]"
				:stretch-goals="[
					'Add one clearly named variant, such as a featured card or secondary action',
					'Add a focus or hover state that keeps the component accessible and readable'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="additional-resources">Additional Resources</h2>
			<p>
				These are helpful once you are ready to keep strengthening component-style
				thinking without reaching for a framework too early:
			</p>
			<ul>
				<li>
					<a href="https://getbem.com" target="_blank" rel="noopener">
						BEM — Block Element Modifier
					</a>
					&mdash; useful for understanding component-like naming and predictable
					relationships between outer blocks and inner parts.
				</li>
				<li>
					Every Layout
					&mdash; useful for seeing reusable layout patterns as composable building
					blocks rather than one-off page tricks.
				</li>
			</ul>

			<h2 id="recap">Recap</h2>
			<p>
				Reusable components are the next step after noticing repeated visual patterns.
				They give repeated HTML and CSS a stable shape, so cards, buttons, navigation,
				and footer pieces can move across pages without being rebuilt from scratch.
			</p>

			<ClosureSection
				title="Lesson Complete: You Can Build Reusable HTML and CSS Patterns"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="Next, you will apply this component-style thinking directly in Black Swan Bistro Part 3 by refactoring repeated cards, navigation, and footer patterns."
			/>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/building-reusable-components'" />
		</div>
	</div>
</template>
