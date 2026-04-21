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
	{ id: 'what-polish-means', title: 'What Polish Means' },
	{
		id: 'pass-1-cascade-cleanup',
		title: 'Pass 1 — Cascade Cleanup',
		subsections: [
			{ id: 'audit-specificity', title: 'Audit Specificity' },
			{ id: 'simplify-selectors', title: 'Simplify Selectors' },
		],
	},
	{
		id: 'pass-2-detail-selectors',
		title: 'Pass 2 — Detail Selectors',
		subsections: [
			{ id: 'pseudo-classes', title: 'Pseudo-classes' },
			{ id: 'pseudo-elements', title: 'Pseudo-elements' },
		],
	},
	{
		id: 'pass-3-motion',
		title: 'Pass 3 — Restrained Motion',
		subsections: [
			{ id: 'transitions', title: 'Transitions' },
			{ id: 'transforms', title: 'Transforms' },
			{ id: 'reduced-motion', title: 'Reduced Motion' },
		],
	},
	{ id: 'pass-4-final-review', title: 'Pass 4 — Final Review' },
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
		question: 'Why should you audit specificity before adding new selectors or transitions?',
		answer:
			'High-specificity selectors make future changes harder because each new rule has to fight the existing ones. Cleaning up specificity first gives you a stable foundation so the motion and detail work you add next stays predictable and easy to maintain.',
	},
	{
		question: 'When is a transition helpful, and when does it get in the way?',
		answer:
			'A transition is helpful when it gives the user a clear signal that something responded to their action, like a button hover or a card lift. It gets in the way when it slows down navigation, distracts from content, or runs on every property change including layout shifts.',
	},
	{
		question: 'What does the prefers-reduced-motion media query protect against?',
		answer:
			'It protects users who experience motion sensitivity, vestibular disorders, or simply prefer a calmer interface. When this preference is active, your CSS should disable or reduce transitions, transforms, and animations so the site stays comfortable and accessible.',
	},
];

// ── Guided Practice steps ─────────────────────────────────────────
const guidedPracticeSteps = [
	{
		title: 'Audit one page for specificity problems',
		instructions:
			'<p>Open DevTools on the BSB homepage. Find one element where a style is being overridden. Check the Styles panel to see which selector wins and why.</p><p>If the winning selector uses an ID or a long chain like <code>.hero .container .section-title</code>, rewrite it using a single class. Confirm the visual result stays the same.</p>',
		hints: [
			'Look for crossed-out styles in the Styles panel — those are the losing rules.',
			'A single class like .hero-title is almost always better than a long chain of descendant selectors.',
		],
	},
	{
		title: 'Add a hover transition to navigation links',
		instructions:
			'<p>In your shared stylesheet, find the <code>.site-nav__link</code> rule. Add a colour or border-bottom change on hover, with a transition:</p><pre><code>.site-nav__link {\n  transition: color 0.2s ease;\n}\n\n.site-nav__link:hover {\n  color: var(--color-golden-orange);\n}</code></pre><p>Check that the active link still looks distinct from the hover state.</p>',
		hints: [
			'Keep the transition under 0.3s — navigation should feel instant, not sluggish.',
			'Only transition the property you are changing. Avoid transition: all.',
		],
	},
		{
			title: 'Add a subtle card lift on hover',
			instructions:
				'<p>Find your <code>.menu-card</code> component rule. Add a transform and box-shadow on hover:</p><pre><code>.menu-card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.menu-card:hover,\n.menu-card:focus-within {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n}</code></pre><p>The lift should be small — just enough to signal interactivity.</p>',
		hints: [
			'translateY(-2px) is subtle. More than -4px starts to look jumpy.',
			'Test with your keyboard too — :hover alone does not help keyboard users. Consider adding :focus-within if the card contains a link.',
		],
	},
	{
		title: 'Wrap motion in a reduced-motion guard',
		instructions:
			'<p>At the end of your stylesheet, add a media query that removes or reduces all transitions and transforms when the user prefers reduced motion:</p><pre><code>@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    transition-duration: 0.01ms !important;\n    animation-duration: 0.01ms !important;\n  }\n}</code></pre><p>Test by enabling "Reduce motion" in your operating system accessibility settings or in DevTools under Rendering.</p>',
		hints: [
			'Setting duration to 0.01ms instead of 0s avoids breaking JavaScript that listens for transitionend events.',
			'In macOS: System Settings → Accessibility → Display → Reduce motion. In DevTools: Rendering panel → Emulate CSS media feature prefers-reduced-motion.',
		],
	},
];

// ── Closure data ──────────────────────────────────────────────────
const closureKeyTakeaways = [
	'Polish is deliberate refinement, not decoration — every change should solve a real problem or improve a real interaction.',
	'Cascade cleanup comes first because high-specificity CSS makes every future change harder.',
	'Pseudo-classes and pseudo-elements add detail without adding HTML clutter.',
	'Transitions and transforms should be restrained: fast, purposeful, and limited to interactive moments.',
	'The prefers-reduced-motion query is not optional — it is an accessibility requirement for any site with motion.',
	'A Polish Pass is something you can repeat with every project: audit, detail, motion, review.',
];

const closureObjectives = [
	'Audit and simplify CSS specificity across a multi-page site',
	'Use pseudo-classes and pseudo-elements to refine interactive and decorative details',
	'Add restrained transitions and transforms to interactive components',
	'Guard all motion with the prefers-reduced-motion media query',
	'Apply a structured polish workflow that can carry forward to future projects',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-broom',
		title: 'Cascade Thinking',
		questions: [
			'Which specificity problem was the most surprising when you audited your stylesheet?',
			'How did simplifying selectors change how easy it was to add the hover and motion work?',
		],
	},
	{
		icon: 'fas fa-magic',
		title: 'Detail and Motion',
		questions: [
			'Which transition or pseudo-element made the biggest difference for the smallest amount of CSS?',
			'Where did you decide not to add motion, and why?',
		],
	},
	{
		icon: 'fas fa-arrow-right',
		title: 'Looking Ahead',
		questions: [
			'How would you apply this same four-pass polish workflow to a different project?',
			'What parts of the BSB site would benefit from JavaScript interaction that CSS alone cannot provide?',
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
						<a href="#" aria-current="page">BSB Part 4B: Polish and Refine</a>
					</li>
				</ul>
			</nav>

			<div class="tags">
				<span class="tag is-info">Intermediate</span>
				<span class="tag is-light">50 min</span>
				<span class="tag is-light">Project</span>
				<span class="tag is-light">CSS Polish</span>
			</div>

			<h1 class="title is-1">BSB Part 4B: Polish and Refine</h1>

			<p class="subtitle is-5">
				Apply cascade cleanup, detail selectors, pseudo-elements, and restrained motion to bring the Black Swan Bistro site to a polished finish.
			</p>

			<AnticipatorySet
				title="From Working to Finished"
				icon="✨"
				:hook="`<p>After Part 4, the Black Swan Bistro is a working multi-page site. It has shared navigation, reusable components, responsive layouts, and consistent styling. That is real progress.</p><p>But working is not the same as finished. The navigation links do not respond to hover. The cards sit flat on the page. Some selectors are more specific than they need to be, which will make future changes harder. Small details — a transition here, a pseudo-element there — are what turn a functional layout into a site that feels considered.</p><p>This is a polish pass. It is structured, deliberate, and restrained. You are not redesigning. You are refining.</p>`"
				:reflection-prompts="[
					'What is the difference between a site that works and a site that feels finished?',
					'Have you ever added hover effects or animations that made a page feel worse instead of better?',
					'Which small CSS details do you notice on sites you admire?'
				]"
				connection="This project applies the cascade, specificity, selector, pseudo-element, and motion skills from the previous two tutorials to the BSB site you have been building since Part 2."
			/>

			<LearningObjectives
				:objectives="[
					'Audit and simplify CSS specificity across a multi-page site',
					'Use pseudo-classes and pseudo-elements to refine interactive and decorative details',
					'Add restrained transitions and transforms to interactive components',
					'Guard all motion with the prefers-reduced-motion media query',
					'Apply a structured polish workflow that can carry forward to future projects'
				]"
				purpose="Polish is not about adding more CSS. It is about making existing CSS clearer, more intentional, and more responsive to user interaction. This pass teaches a repeatable refinement workflow."
				:prerequisites="[
					{ topic: 'Styling Details: Selectors, Pseudo-elements, and Motion', link: '/tutorials/intermediate/styling-details-selectors-pseudo-elements-and-motion' },
					{ topic: 'Cascade, Specificity, and Debugging CSS', link: '/tutorials/intermediate/cascade-specificity-and-debugging-css' },
					{ topic: 'BSB Part 4: Multi-page Site', link: '/tutorials/intermediate/black-swan-bistro-part-4' }
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- INTRODUCTION                                       -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="intro">Tutorial Introduction</h2>
			<p>
				This tutorial is a structured polish pass. You will work through the Black Swan
				Bistro site in four focused passes, each building on the last:
			</p>
			<ol>
				<li><strong>Cascade cleanup</strong> — audit specificity and simplify selectors</li>
				<li><strong>Detail selectors</strong> — add hover states, focus styles, and decorative pseudo-elements</li>
				<li><strong>Restrained motion</strong> — add transitions and transforms to interactive moments</li>
				<li><strong>Final review</strong> — check accessibility, reduced motion, and overall feel</li>
			</ol>
			<p>
				Each pass is short and focused. You are not rewriting the site. You are making
				targeted improvements that show you understand the tools from the last two
				tutorials well enough to apply them to a real project.
			</p>

			<div class="notification is-info is-light">
				<p><strong>Keep the scope small:</strong> a polish pass is not a redesign. If you find yourself wanting to restructure HTML or rethink the layout, note it for later. This pass is about CSS refinement only.</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- WHAT POLISH MEANS                                  -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="what-polish-means">What Polish Means in CSS</h2>
			<p>
				Polish is the difference between a page that works and a page that feels
				considered. It shows up in small details:
			</p>
			<ul>
				<li>Links that respond smoothly to hover instead of snapping to a new colour</li>
				<li>Cards that lift slightly when interactive, signalling that they lead somewhere</li>
				<li>Navigation that shows focus states for keyboard users</li>
				<li>Decorative touches with pseudo-elements instead of extra HTML</li>
				<li>A stylesheet that is easy to read and change because specificity is low and selectors are clear</li>
			</ul>
			<p>
				None of these changes are large on their own. Together, they signal care and
				intention. And the process of adding them teaches restraint — knowing when a
				detail helps and when it just adds noise.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- PASS 1 — CASCADE CLEANUP                          -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="pass-1-cascade-cleanup">Pass 1: Cascade Cleanup</h2>
			<p>
				Before adding any new CSS, clean up what you have. High specificity and
				unnecessary selector chains make every future change harder. This pass makes the
				stylesheet easier to work with.
			</p>

			<h3 id="audit-specificity">Audit Specificity</h3>
			<p>
				Open DevTools on each page and look for crossed-out styles in the Styles panel.
				Each crossed-out rule is a specificity conflict. Ask:
			</p>
			<ul>
				<li>Is the winning selector more specific than it needs to be?</li>
				<li>Are there ID selectors that could be replaced with classes?</li>
				<li>Are there long descendant chains like <code>.hero .container .section-title</code> that could be a single class?</li>
			</ul>
			<p>
				Write down each problem you find. You do not need to fix everything at once —
				just build a clear picture before changing anything.
			</p>

			<h3 id="simplify-selectors">Simplify Selectors</h3>
			<p>
				For each problem in your audit, rewrite the selector to be as simple as possible
				while keeping the same visual result. The pattern is usually the same:
			</p>
			<ul>
				<li>Replace ID selectors with class selectors</li>
				<li>Replace long descendant chains with a single purpose-named class</li>
				<li>Remove <code>!important</code> by fixing the specificity conflict underneath</li>
			</ul>
			<p>
				After each change, check the page in the browser. If it looks the same, the
				simplification worked. If something breaks, you have found a specificity
				dependency worth understanding.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- PASS 2 — DETAIL SELECTORS                         -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="pass-2-detail-selectors">Pass 2: Detail Selectors</h2>
			<p>
				With a cleaner stylesheet, you can now add interactive and decorative detail
				with confidence that new rules will not fight old ones.
			</p>

			<h3 id="pseudo-classes">Pseudo-classes for Interaction</h3>
			<p>
				Review every interactive element on the site — links, buttons, cards that contain
				links, and navigation items. Each one should have clear <code>:hover</code> and
				<code>:focus-visible</code> states.
			</p>
			<ul>
				<li><strong>Navigation links:</strong> a colour or underline shift on hover, plus a visible focus ring</li>
				<li><strong>Buttons:</strong> a background or shadow change that signals interactivity</li>
				<li><strong>Cards with links:</strong> consider styling the whole card on <code>:hover</code> and <code>:focus-within</code></li>
			</ul>
			<p>
				The key rule: every interactive element should look different in its hovered and
				focused state. If it looks the same regardless of interaction, the user has no
				feedback.
			</p>

			<h3 id="pseudo-elements">Pseudo-elements for Decoration</h3>
			<p>
				Pseudo-elements let you add decorative detail without touching the HTML. Use
				them for:
			</p>
			<ul>
				<li>Section dividers between content areas</li>
				<li>Subtle accent lines under headings</li>
				<li>Decorative marks next to the active navigation link</li>
			</ul>
			<p>
				Keep pseudo-element decoration modest. One or two well-placed touches improve
				the feel. Five or six make the page feel noisy.
			</p>

			<pre><code>/* Example: accent line under section titles */
.section-title::after {
    content: '';
    display: block;
    width: 3rem;
    height: 2px;
    background-color: var(--color-golden-orange);
    margin-top: 0.5rem;
}</code></pre>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- PASS 3 — MOTION                                   -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="pass-3-motion">Pass 3: Restrained Motion</h2>
			<p>
				Motion draws attention. Used well, it signals that the page is responding
				to the user. Used carelessly, it makes the page feel slow or distracting.
			</p>

			<h3 id="transitions">Transitions on Interactive Elements</h3>
			<p>
				Add transitions to the interactive states you created in Pass 2. The rules
				are simple:
			</p>
			<ul>
				<li>Only transition the properties you are changing — never use <code>transition: all</code></li>
				<li>Keep durations between 0.15s and 0.3s for interactive feedback</li>
				<li>Use <code>ease</code> or <code>ease-out</code> for most hover transitions</li>
			</ul>

			<pre><code>/* Navigation link transition */
.site-nav__link {
    transition: color 0.2s ease;
}

/* Button transition */
.button {
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
}</code></pre>

			<h3 id="transforms">Transforms for Subtle Depth</h3>
			<p>
				A small <code>translateY</code> on card hover gives a sense of lift without
				physically moving content around the page. Pair it with a soft box-shadow change
				for depth:
			</p>
<pre><code>.menu-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.menu-card:hover,
.menu-card:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}</code></pre>
			<p>
				Restraint matters here. A 2px lift is enough to signal interactivity. More
				than 4px starts to feel like the card is jumping off the page.
			</p>

			<h3 id="reduced-motion">Guarding with prefers-reduced-motion</h3>
			<p>
				Every transition and transform you add needs a reduced-motion fallback. Place
				this at the end of your stylesheet:
			</p>
			<pre><code>@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
    }
}</code></pre>
			<p>
				This is not a nice-to-have. It is an accessibility requirement. Users with
				motion sensitivity, vestibular disorders, or a preference for calm interfaces
				depend on this media query working correctly.
			</p>
			<p>
				Test it: in macOS, go to System Settings → Accessibility → Display → Reduce
				motion. In DevTools, open the Rendering panel and emulate
				<code>prefers-reduced-motion: reduce</code>. Every transition on the site should
				effectively disappear.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- PASS 4 — FINAL REVIEW                             -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="pass-4-final-review">Pass 4: Final Review</h2>
			<p>
				The last pass is a full walkthrough. Open each page and check:
			</p>
			<ol>
				<li><strong>Consistency:</strong> do hover states, focus styles, and card lifts feel the same across all pages?</li>
				<li><strong>Reduced motion:</strong> enable the preference and verify all motion stops</li>
				<li><strong>Keyboard navigation:</strong> tab through every page and check that focus-visible styles appear on every interactive element</li>
				<li><strong>Specificity:</strong> open DevTools one more time and confirm there are no unnecessary overrides left</li>
				<li><strong>Feel:</strong> does the site feel considered, or does it feel over-decorated?</li>
			</ol>
			<p>
				If something feels like too much, remove it. The best polish passes end with
				fewer lines of CSS than you expected, not more.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CHECKPOINT                                         -->
			<!-- ═══════════════════════════════════════════════════ -->
			<CheckpointBox :questions="checkpointQuestions" />

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- GUIDED PRACTICE                                    -->
			<!-- ═══════════════════════════════════════════════════ -->
			<GuidedPractice
				title="Polish the BSB Homepage"
				description="Work through these four steps on the BSB homepage. Each step corresponds to one of the four passes."
				:steps="guidedPracticeSteps"
				:success-criteria="[
					'At least one specificity problem is identified and fixed',
					'Navigation links have a visible hover transition',
						'Menu cards lift subtly on hover with transform and box-shadow',
					'A prefers-reduced-motion query disables all transitions and transforms',
					'The page looks and feels the same as before, but interactions are smoother'
				]"
				success-criteria-title="You know it is working when:"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- INDEPENDENT PRACTICE                               -->
			<!-- ═══════════════════════════════════════════════════ -->
			<IndependentPractice
				:task="`Apply the same four-pass polish workflow to the remaining BSB pages (menu, about, and contact). Since they share the same stylesheet, some of your homepage changes will already apply. Focus on any page-specific elements that still need hover states, focus styles, or decorative touches.`"
				:requirements="[
					'Every interactive element on every page has a visible :hover and :focus-visible state',
					'At least one pseudo-element adds a decorative detail that improves visual hierarchy',
					'All transitions use specific properties (not transition: all) and stay under 0.3s',
					'The prefers-reduced-motion query covers every transition and animation on the site',
					'Keyboard navigation works on every page with visible focus indicators'
				]"
				:stretch-goals="[
					'Add a ::before or ::after accent to the active navigation link that shows only on the current page',
					'Use :first-child or :last-child to remove border or margin from the first/last card in a grid',
					'Add a subtle scale transform to buttons on :active so they feel like they press inward'
				]"
				:rubric="[
					{ criteria: 'Specificity cleanup', success: 'No unnecessary ID selectors or long descendant chains remain in the shared stylesheet.' },
					{ criteria: 'Interaction states', success: 'Every link, button, and interactive card has visually distinct hover and focus states.' },
					{ criteria: 'Motion restraint', success: 'Transitions are fast, purposeful, and limited to specific properties.' },
					{ criteria: 'Accessibility', success: 'prefers-reduced-motion disables all motion. Focus-visible styles work on every interactive element.' },
					{ criteria: 'Overall feel', success: 'The site feels considered and professional without being over-decorated.' }
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- RECAP                                              -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="recap">Recap</h2>
			<p>
				In this tutorial, you applied a structured polish workflow to the Black Swan
				Bistro site:
			</p>
			<ol>
				<li><strong>Cascade cleanup</strong> made the stylesheet easier to work with by removing specificity conflicts</li>
				<li><strong>Detail selectors</strong> added hover, focus, and decorative refinements</li>
				<li><strong>Restrained motion</strong> gave interactive elements smooth, purposeful transitions</li>
				<li><strong>Final review</strong> checked accessibility, consistency, and overall feel</li>
			</ol>
			<p>
				This four-pass structure is not specific to the bistro. You can apply it to
				any project when the layout is working but the experience is not yet polished.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CLOSURE                                            -->
			<!-- ═══════════════════════════════════════════════════ -->
			<ClosureSection
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- RECOMMENDATIONS                                    -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="additional-resources">
				<TutorialRecommendations
					:current-path="'/tutorials/intermediate/black-swan-bistro-part-4b-polish-and-refine'"
				/>
			</div>
		</div>
	</div>
</template>
