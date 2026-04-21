<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import '@/assets/styles/tutorials.css';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';

useTutorialHead({
  title: "Selectors, Pseudo-elements & Motion",
  description: "Add decorative pseudo-elements, smooth CSS transitions, and transforms — with accessibility-aware motion guidance.",
  path: "/tutorials/intermediate/styling-details-selectors-pseudo-elements-and-motion",
});

usePageSections([
	{ id: 'selectors', title: 'Practical Selectors' },
	{ id: 'pseudo-elements', title: 'Pseudo-elements' },
	{ id: 'transitions', title: 'Transitions' },
	{ id: 'transforms', title: 'Transforms' },
	{ id: 'restrained-motion', title: 'Restrained Motion' },
	{ id: 'prefers-reduced-motion', title: 'prefers-reduced-motion' },
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
		question:
			'What is the difference between a pseudo-class (:hover) and a pseudo-element (::before)?',
		answer:
			'A pseudo-class selects an existing element in a particular state (hovered, focused, first-child). A pseudo-element creates a virtual sub-element that you can style — it does not exist in the HTML source.',
	},
	{
		question:
			'Why must you always include a content property on ::before and ::after, even if it is empty?',
		answer:
			'The browser only generates the pseudo-element when the content property is present. Without it — even if you set width, height, and background — the pseudo-element does not render at all.',
	},
	{
		question:
			'You write transition: all 0.3s ease on a card. Why might "all" cause unexpected results?',
		answer:
			'Transitioning "all" means every property that changes will animate, including layout properties like width and height that may cause jank, or properties you did not intend to animate. Listing specific properties gives you control.',
	},
	{
		question:
			'A button has a hover lift using translateY(-4px). Does the element below it shift up to fill the gap?',
		answer:
			'No. Transforms are purely visual — the element keeps its original space in the document flow. Neighbouring elements are unaffected.',
	},
];

// ── Guided Practice steps ─────────────────────────────────────────
const guidedPracticeSteps = [
	{
		title: 'Add a decorative pseudo-element',
		instructions:
			'<p>Pick a heading in your project — the Black Swan Bistro site works well. Add a <code>::after</code> pseudo-element that creates a short decorative underline bar beneath the heading.</p><ol><li>Set <code>content: ""</code> (empty string)</li><li>Set <code>display: block</code></li><li>Give it a width, height, background colour, and a small margin-top</li><li>Verify in DevTools that the pseudo-element appears inside the heading element in the DOM tree</li></ol>',
		hints: [
			'A typical decorative bar might be 40–80px wide, 3px tall, with a brand colour.',
			'If the bar does not appear, check that you have content: "" — this is the most common mistake.',
		],
	},
	{
		title: 'Add a hover transition to a link or button',
		instructions:
			'<p>Find a navigation link or button in your project. Add a smooth colour transition on hover:</p><ol><li>Set the <code>transition</code> property on the default state (not on :hover)</li><li>Specify the property name, duration, and timing function</li><li>Add the colour change on the <code>:hover</code> pseudo-class</li><li>Test it in the browser — it should feel smooth, not instant</li></ol>',
		hints: [
			'Start with transition: color 0.2s ease and adjust from there.',
			'Always set the transition on the base selector, not on :hover. The base state needs to know how to transition back.',
		],
	},
	{
		title: 'Create a hover lift with transform',
		instructions:
			'<p>Add a subtle lift effect to a card or link component:</p><ol><li>Set <code>transition: transform 0.2s ease</code> on the default state</li><li>On <code>:hover</code>, add <code>transform: translateY(-3px)</code></li><li>Optionally add a <code>box-shadow</code> transition to pair with the lift</li><li>Check that surrounding content does not shift — the transform should be purely visual</li></ol>',
		hints: [
			'Keep the lift small — 2px to 4px is enough. Larger lifts look cartoonish.',
			'If you want shadow and transform to transition together, list both: transition: transform 0.2s ease, box-shadow 0.2s ease.',
		],
	},
	{
		title: 'Respect prefers-reduced-motion',
		instructions:
			'<p>Add a media query that disables or reduces your transitions and transforms for users who prefer reduced motion:</p><ol><li>Add <code>@media (prefers-reduced-motion: reduce) { }</code> at the end of your stylesheet</li><li>Inside, set <code>transition: none</code> and <code>transform: none</code> on the animated elements</li><li>Test by enabling "Reduce motion" in your operating system preferences or via DevTools (Rendering tab → Emulate CSS media feature)</li></ol>',
		hints: [
			'In macOS: System Settings → Accessibility → Display → Reduce motion.',
			'In Chrome DevTools: open the Rendering tab (three-dot menu → More tools → Rendering), scroll to "Emulate CSS media feature prefers-reduced-motion".',
		],
	},
];

// ── Closure data ──────────────────────────────────────────────────
const closureKeyTakeaways = [
	'Selectors let you target exactly the elements you need — combinators, attribute selectors, and pseudo-classes give precision without adding extra classes to HTML.',
	'Pseudo-elements (::before, ::after) add visual detail through CSS alone. They always require a content property.',
	'Transitions animate property changes over time. Set them on the base state, not the trigger state.',
	'Transforms (translate, scale, rotate) are purely visual — they do not affect document flow or surrounding elements.',
	'Restrained motion supports user experience. Excessive motion undermines it. When in doubt, leave it out.',
	'prefers-reduced-motion is not optional. Users who need reduced motion depend on your stylesheet respecting that preference.',
];

const closureObjectives = [
	'Use combinators and pseudo-classes to target elements precisely',
	'Add decorative detail with ::before and ::after pseudo-elements',
	'Write smooth transitions with appropriate duration and timing',
	'Apply transforms for hover lifts, scale effects, and subtle rotation',
	'Judge when motion helps and when it hurts usability',
	'Implement prefers-reduced-motion to respect user accessibility needs',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-bullseye',
		title: 'Selector Precision',
		questions: [
			'Have you used a selector in this lesson that you had not tried before? Which one?',
			'Can you think of a place in your project where an attribute selector or :nth-child would simplify your CSS?',
		],
	},
	{
		icon: 'fas fa-magic',
		title: 'Visual Polish',
		questions: [
			'What is one decorative detail you could add to your project with a pseudo-element?',
			'How do you decide whether a transition duration is too short or too long?',
		],
	},
	{
		icon: 'fas fa-universal-access',
		title: 'Motion and Accessibility',
		questions: [
			'Before this lesson, had you heard of prefers-reduced-motion? How does it change your approach to adding animation?',
			'What is the simplest way to test reduced motion behaviour without changing your OS settings?',
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
							>Styling Details: Selectors, Pseudo-elements, and Motion</a
						>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">CSS</span>
					<span class="tag is-light">Polish</span>
				</div>
			</div>

			<h1 class="title is-1">
				Styling Details: Selectors, Pseudo-elements, and Motion
			</h1>
			<h2 class="subtitle is-4">
				Add finishing detail with practical selectors, pseudo-elements,
				transitions, transforms, and restrained animation.
			</h2>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- ANTICIPATORY SET                                   -->
			<!-- ═══════════════════════════════════════════════════ -->
			<AnticipatorySet
				title="The Details That Make a Page Feel Finished"
				icon="✨"
				:hook="`<p>You have built layouts, written components, and debugged specificity. The page works — but it still looks like a wireframe with colour. The navigation links do not respond when you hover. The headings have no visual weight beyond bold text. Nothing <em>moves</em>.</p><p>The difference between a working page and a polished page often comes down to small, deliberate details: a subtle underline, a smooth colour shift, a card that lifts when you point at it. These details are not decoration for its own sake — they are signals that tell users where to look, what is interactive, and what just changed.</p><p>This lesson gives you the CSS tools to add that finishing layer — selectors that target exactly what you need, pseudo-elements that add visual detail without changing your HTML, and transitions and transforms that bring your page to life without overwhelming it.</p>`"
				:reflection-prompts="[
					'When you visit a polished website, what small visual details make it feel professional?',
					'Have you ever seen an animation on a website that made it harder to use instead of easier?',
					'Do you know the difference between a transition and a transform in CSS?'
				]"
				connection="This lesson builds directly on the cascade and specificity concepts from the previous tutorial. The selector knowledge you built there — especially combinators and pseudo-classes — extends here into practical styling. The motion and polish techniques will carry forward into every project you build."
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- LEARNING OBJECTIVES                                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<LearningObjectives
				:objectives="[
					'Use combinators and pseudo-classes to target elements precisely without extra class names',
					'Add decorative detail with ::before and ::after pseudo-elements',
					'Write smooth property transitions with appropriate duration and timing',
					'Apply transforms (translate, scale, rotate) for interactive visual effects',
					'Judge when motion supports user experience and when it detracts from it',
					'Implement the prefers-reduced-motion media query for accessibility'
				]"
				purpose="These are the finishing tools. They turn a layout that works into a page that feels considered, responsive, and professional — without overcomplicating your CSS."
				:prerequisites="[
					{ topic: 'Cascade, Specificity, and Debugging CSS', link: '/tutorials/intermediate/cascade-specificity-and-debugging-css' }
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- PRACTICAL SELECTORS                                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="selectors">Practical Selectors: Targeting Exactly What You Need</h2>
			<p>
				You already know element selectors (<code>p</code>), class selectors
				(<code>.card</code>), and ID selectors (<code>#main</code>). But CSS has a
				much wider vocabulary for targeting elements — and using it well means you
				can style precisely without adding extra classes to your HTML.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-selector-types.svg"
					alt="Visual table showing five selector categories — element, class, attribute, combinator, and pseudo-class — each with a CSS example and a diagram highlighting what it matches."
				/>
				<figcaption>
					Each selector type gives you a different level of control. Classes are
					the everyday workhorse. Combinators and pseudo-classes add precision
					when you need it.
				</figcaption>
			</figure>

			<h3>Combinators: relationships between elements</h3>
			<p>
				Combinators let you select elements based on their position in the DOM tree
				relative to another element:
			</p>
			<pre><code>/* Direct child only — not deeper descendants */
.card &gt; h2 { font-size: 1.25rem; }

/* Adjacent sibling — the p immediately after an h2 */
h2 + p { margin-top: 0.5rem; }

/* General sibling — any p after an h2, at the same level */
h2 ~ p { color: #52606d; }</code></pre>
			<p>
				The child combinator (<code>&gt;</code>) is especially useful for preventing
				styles from leaking into nested components. If you style
				<code>.nav a</code>, every link inside nav is affected — including links
				inside a dropdown. <code>.nav &gt; a</code> targets only the direct
				children.
			</p>

			<h3>Attribute selectors: matching by data, not appearance</h3>
			<pre><code>/* Match inputs by type */
input[type="email"] { border-color: #3d85c6; }

/* Match links that open in a new tab */
a[target="_blank"]::after { content: " ↗"; }

/* Match elements whose class starts with "icon-" */
[class^="icon-"] { display: inline-block; }</code></pre>
			<p>
				Attribute selectors are powerful for form styling and for targeting elements
				without adding extra classes. They score the same as classes in specificity.
			</p>

			<h3>Structural pseudo-classes: position in a list</h3>
			<pre><code>/* First and last items */
li:first-child { font-weight: 700; }
li:last-child { border-bottom: none; }

/* Every other row (striped tables) */
tr:nth-child(even) { background: #f8f9fa; }

/* Only child — useful for conditional layouts */
.card:only-child { max-width: 600px; margin: 0 auto; }</code></pre>
			<p>
				Structural pseudo-classes let you style elements by their position without
				adding <code>.first</code> or <code>.last</code> classes manually. The
				browser handles the counting.
			</p>

			<h3>State pseudo-classes: interactivity</h3>
			<pre><code>/* User interaction states */
a:hover { color: #8f2f23; }
a:focus-visible { outline: 2px solid #3d85c6; outline-offset: 2px; }
button:active { transform: scale(0.98); }

/* Form validation states */
input:required { border-left: 3px solid #e67c00; }
input:valid { border-left-color: #2d6a4f; }</code></pre>
			<p>
				State pseudo-classes respond to user behaviour. <code>:focus-visible</code>
				is especially important — it shows a focus ring for keyboard users but hides
				it for mouse clicks, giving you the best of both worlds for accessibility.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- PSEUDO-ELEMENTS                                    -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="pseudo-elements">Pseudo-elements: Visual Detail Without Extra HTML</h2>
			<p>
				Pseudo-elements let you insert styled content before or after an element's
				real content, entirely through CSS. They are ideal for decorative details —
				underlines, icons, badges, dividers — that do not belong in the HTML
				because they are presentational, not structural.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-pseudo-elements-before-after.svg"
					alt="Diagram showing how ::before and ::after pseudo-elements are generated inside a heading element, with a practical example of a decorative underline bar added via CSS."
				/>
				<figcaption>
					<code>::before</code> and <code>::after</code> are generated inside
					the element as its first and last children. The
					<code>content</code> property is required — without it, nothing renders.
				</figcaption>
			</figure>

			<h3>The essential rule: <code>content</code> is required</h3>
			<p>
				Every <code>::before</code> and <code>::after</code> pseudo-element must
				have a <code>content</code> property. Even if the content is an empty
				string, the property must be there:
			</p>
			<pre><code>/* This works — empty string creates a styled box */
.heading::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: #8f2f23;
}

/* This does NOT work — no content means no element */
.heading::after {
  display: block;
  width: 60px;
  height: 3px;
  background: #8f2f23;
}</code></pre>

			<h3>Practical pseudo-element patterns</h3>
			<div class="box">
				<h4 class="title is-6">Decorative underline</h4>
				<pre><code>.section-title::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: #8f2f23;
  margin-top: 0.5rem;
}</code></pre>
			</div>

			<div class="box">
				<h4 class="title is-6">External link indicator</h4>
				<pre><code>a[target="_blank"]::after {
  content: " ↗";
  font-size: 0.8em;
  color: #7b8794;
}</code></pre>
			</div>

			<div class="box">
				<h4 class="title is-6">Required field marker</h4>
				<pre><code>label.required::after {
  content: " *";
  color: #8f2f23;
  font-weight: 700;
}</code></pre>
			</div>

			<div class="notification is-warning is-light">
				<p>
					<strong>Accessibility note:</strong> content generated by
					pseudo-elements is read by some screen readers but not all. Do not put
					meaningful text — like instructions or labels — in pseudo-elements. Use
					them for decoration only.
				</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- TRANSITIONS                                        -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="transitions">Transitions: Smooth Property Changes</h2>
			<p>
				Without a transition, CSS property changes are instant. One frame the link
				is blue, the next frame it is red. Transitions add a duration to that
				change, letting the browser interpolate between the old and new values over
				time.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-transition-anatomy.svg"
					alt="Diagram showing the four parts of a CSS transition — property, duration, timing function, and delay — with a timeline visualising a 0.3-second ease transition on hover."
				/>
				<figcaption>
					A transition has four parts: which property to animate, how long it
					takes, what speed curve to use, and how long to wait before starting.
				</figcaption>
			</figure>

			<h3>Setting transitions on the base state</h3>
			<p>
				Transitions belong on the element's default state, not on the trigger
				state. This ensures the transition runs in both directions — on hover
				<em>and</em> on hover-out:
			</p>
			<pre><code>/* ✅ Correct — transition on the base state */
.nav-link {
  color: #1f2933;
  transition: color 0.2s ease;
}
.nav-link:hover {
  color: #8f2f23;
}

/* ❌ Wrong — transition only on :hover means
   the return to default is instant */
.nav-link {
  color: #1f2933;
}
.nav-link:hover {
  color: #8f2f23;
  transition: color 0.2s ease;
}</code></pre>

			<h3>Choosing what to transition</h3>
			<p>
				Be specific about which properties you transition. Using
				<code>transition: all</code> is tempting but it can cause unexpected
				animations on properties you did not intend to change — including expensive
				layout properties:
			</p>
			<pre><code>/* ❌ Transitions everything, including layout properties */
.card { transition: all 0.3s ease; }

/* ✅ Only the properties you want animated */
.card {
  transition: background-color 0.2s ease,
              box-shadow 0.2s ease;
}</code></pre>

			<h3>Timing functions</h3>
			<p>
				The timing function controls the speed curve. For most UI work, you only need
				two or three:
			</p>
			<ul>
				<li>
					<strong><code>ease</code></strong> — starts fast, ends slow. Good
					default for most hover effects.
				</li>
				<li>
					<strong><code>ease-in-out</code></strong> — slow start and slow end.
					Good for elements entering and leaving visibility.
				</li>
				<li>
					<strong><code>linear</code></strong> — constant speed. Useful for
					progress bars or loading indicators, but feels mechanical for UI.
				</li>
			</ul>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- TRANSFORMS                                         -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="transforms">Transforms: Visual Changes Without Layout Shifts</h2>
			<p>
				Transforms change how an element looks — its position, size, or rotation —
				without affecting the document flow. The element keeps its original space in
				the layout, and neighbouring elements do not shift.
			</p>
			<p>
				This makes transforms ideal for interactive effects. A hover lift, a button
				press, or a card entrance can use transforms without causing the rest of the
				page to reflow.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-transforms-translate-scale-rotate.svg"
					alt="Three panels showing the effect of translate, scale, and rotate transforms on the same card element, with dashed outlines showing the original position."
				/>
				<figcaption>
					Transforms are purely visual. The dashed outline shows where the
					element actually sits in the document flow — surrounding content is
					unaffected.
				</figcaption>
			</figure>

			<h3>translate: shift position</h3>
			<pre><code>/* Hover lift — the classic card effect */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}</code></pre>

			<h3>scale: grow or shrink</h3>
			<pre><code>/* Button press feedback */
.button:active {
  transform: scale(0.97);
}

/* Subtle image zoom on hover */
.thumbnail:hover {
  transform: scale(1.03);
}</code></pre>

			<h3>rotate: tilt</h3>
			<pre><code>/* Playful hover accent on a small icon */
.icon-link:hover .icon {
  transform: rotate(8deg);
}</code></pre>

			<h3>Combining transforms</h3>
			<p>
				You can apply multiple transforms in a single declaration. They are applied
				right to left:
			</p>
			<pre><code>/* Lift + slight scale on hover */
.card:hover {
  transform: translateY(-4px) scale(1.02);
}</code></pre>

			<div class="notification is-info is-light">
				<p>
					<strong>Performance note:</strong> <code>transform</code> and
					<code>opacity</code> are the cheapest properties to animate because the
					browser can handle them on the GPU compositor layer. Animating
					<code>width</code>, <code>height</code>, or <code>margin</code> causes
					layout recalculation and is noticeably slower.
				</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- RESTRAINED MOTION                                  -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="restrained-motion">Restrained Motion: When Animation Helps and When It Hurts</h2>
			<p>
				Motion in CSS is a tool, not a feature list. A well-placed transition makes
				an interface feel responsive. An excessive animation makes it feel chaotic.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-restrained-motion.svg"
					alt="Side-by-side comparison of restrained button hover (subtle lift, 0.2s) versus excessive animation (spinning, scaling, 1.5s) with guidelines for good motion."
				/>
				<figcaption>
					Restrained motion signals interactivity. Excessive motion distracts
					and can cause physical discomfort for some users.
				</figcaption>
			</figure>

			<div class="box">
				<h3 class="title is-5">Motion Decision Checklist</h3>
				<ul>
					<li>
						<strong>Does this motion serve a purpose?</strong> It should signal
						interactivity, provide feedback, or guide attention — not just look cool.
					</li>
					<li>
						<strong>Is the duration appropriate?</strong> UI interactions should
						feel snappy: 0.15s to 0.4s. Longer than 0.5s feels sluggish.
					</li>
					<li>
						<strong>Am I animating more than two properties?</strong> If so,
						consider whether all of them need to animate on the same trigger.
					</li>
					<li>
						<strong>Would a user notice if I removed it?</strong> If yes, the
						motion is serving a purpose. If no, you can probably remove it.
					</li>
					<li>
						<strong>If in doubt, leave it out.</strong> You can always add motion
						later. Removing it after users have grown used to it is harder.
					</li>
				</ul>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- PREFERS-REDUCED-MOTION                             -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="prefers-reduced-motion">prefers-reduced-motion: Respecting User Preferences</h2>
			<p>
				Some users experience motion sickness, vertigo, or discomfort from screen
				animations. Operating systems let users signal this preference, and CSS
				lets you respond to it with a media query:
			</p>
			<pre><code>@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}</code></pre>
			<p>
				This is a near-instant duration rather than <code>none</code>, which
				ensures JavaScript-based animation callbacks still fire. Place this at the
				end of your stylesheet.
			</p>
			<p>
				You can also be more surgical — keeping subtle colour transitions while
				removing movement:
			</p>
			<pre><code>@media (prefers-reduced-motion: reduce) {
  .card {
    transition: background-color 0.2s ease;
    /* Remove the lift transform but keep the colour shift */
  }
  .card:hover {
    transform: none;
  }
}</code></pre>

			<div class="notification is-warning is-light">
				<p>
					<strong>This is not optional.</strong> Respecting prefers-reduced-motion
					is a baseline accessibility requirement, not a nice-to-have. WCAG 2.1
					(guideline 2.3) addresses motion that can cause seizures or discomfort.
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
					title="Add Polish to a Page"
					description="Apply pseudo-elements, transitions, transforms, and a reduced-motion fallback to an existing project page."
					:steps="guidedPracticeSteps"
					:success-criteria="[
						'A heading has a decorative ::after underline bar',
						'A link or button transitions colour smoothly on hover',
						'A card or interactive element has a hover lift using translateY',
						'A prefers-reduced-motion media query disables or reduces motion'
					]"
					success-criteria-title="You have finished when:"
				/>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- INDEPENDENT PRACTICE                               -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="independent-practice">
				<IndependentPractice
					task="Open a project page you have been building (the Black Swan Bistro site is ideal). Add a <strong>polish pass</strong> that applies at least four of the techniques from this lesson: a pseudo-element, a precise selector (combinator or attribute), a transition, and a transform. Each addition should serve a clear purpose — not just demonstrate a feature."
					:requirements="[
						'At least one pseudo-element (::before or ::after) adding a decorative detail',
						'At least one combinator or attribute selector replacing a situation where you might have added a new class',
						'At least one transition on a hover or focus interaction',
						'At least one transform (translate, scale, or rotate) paired with a transition',
						'A prefers-reduced-motion media query that handles all your motion additions'
					]"
					:stretch-goals="[
						'Use :nth-child to create alternating styles (striped rows, offset cards)',
						'Add a focus-visible outline style to all interactive elements for keyboard navigation',
						'Combine ::before content with an attribute selector to auto-label external links'
					]"
					:rubric="[
						{ criteria: 'Purposeful detail', success: 'Every visual addition (pseudo-element, transition, transform) serves a clear UI purpose, not just decoration for its own sake' },
						{ criteria: 'Selector precision', success: 'At least one selector uses a combinator or attribute selector to avoid adding a new class to the HTML' },
						{ criteria: 'Restrained motion', success: 'Transitions are 0.15s–0.4s, transforms are subtle, and no animation distracts from content' },
						{ criteria: 'Accessibility', success: 'prefers-reduced-motion media query is present and handles all animated properties' }
					]"
				/>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- RECAP                                              -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="recap">Recap</h2>
			<p>
				This lesson covered the CSS tools that turn a working layout into a polished
				page. Combinators and pseudo-classes let you target elements precisely
				without cluttering your HTML with extra classes. Pseudo-elements add
				decorative detail through CSS alone — a heading underline, an external-link
				indicator, a required-field marker — without extra DOM elements.
			</p>
			<p>
				Transitions smooth out property changes over time. Set them on the base state,
				be explicit about which properties to transition, and keep durations between
				0.15s and 0.4s for UI interactions. Transforms — translate, scale, rotate —
				change how an element looks without affecting its space in the document flow,
				making them ideal for hover lifts, button presses, and subtle reveals.
			</p>
			<p>
				The hardest skill is restraint. Good motion supports the user's attention.
				Excessive motion fights it. And <code>prefers-reduced-motion</code> is not
				a feature — it is a responsibility.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CLOSURE                                            -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="closure">
				<ClosureSection
					title="Your Pages Can Feel Considered Now"
					:key-takeaways="closureKeyTakeaways"
					:objectives="closureObjectives"
					:reflection-prompts="closureReflectionPrompts"
					next-steps="With selectors, pseudo-elements, and motion in your toolkit, you are ready to build complete, polished web pages. The next steps in the pathway bring these pieces together in project work."
				/>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- RECOMMENDATIONS                                    -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="additional-resources">
				<TutorialRecommendations
					:current-path="'/tutorials/intermediate/styling-details-selectors-pseudo-elements-and-motion'"
				/>
			</div>
		</div>
	</div>
</template>
