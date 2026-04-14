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
	{ id: 'cascade', title: 'The Cascade' },
	{ id: 'specificity', title: 'Specificity' },
	{ id: 'inheritance', title: 'Inheritance' },
	{ id: 'common-conflicts', title: 'Common Conflicts' },
	{ id: 'devtools-debugging', title: 'Debugging with DevTools' },
	{ id: 'strategies', title: 'Practical Strategies' },
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
			'Two rules target the same element. One uses a class selector, the other uses an element selector. Which one wins and why?',
		answer:
			'The class selector wins because it has higher specificity (0-1-0 vs 0-0-1). Specificity is compared column by column from left to right, and the class column is checked before the element column.',
	},
	{
		question:
			'You set font-family on the body element, but you never set it on a paragraph inside a section. Why does the paragraph still use that font?',
		answer:
			'Because font-family is an inherited property. When no direct rule sets it, the paragraph inherits the value from its nearest ancestor that has one — in this case, body.',
	},
	{
		question:
			'A developer adds !important to fix a style conflict. What is the risk of that approach?',
		answer:
			'!important overrides the normal cascade, so it wins regardless of specificity. The risk is that future rules also need !important to override it, creating an arms race that makes the stylesheet harder to debug and maintain.',
	},
	{
		question:
			'In DevTools, you see a CSS property value with a strikethrough. What does that tell you?',
		answer:
			'It means another rule with higher specificity, later source order, or !important is overriding that property. The rule above the struck-through one in the Styles panel is the winner.',
	},
];

// ── Guided Practice steps ─────────────────────────────────────────
const guidedPracticeSteps = [
	{
		title: 'Find the conflict in DevTools',
		instructions:
			'<p>Open any web page you have been working on — your Black Swan Bistro project is ideal. Right-click an element that has a colour or font style and choose <strong>Inspect</strong>.</p><p>In the <strong>Styles</strong> panel, look at the list of rules targeting that element. Can you find a property that appears in more than one rule? If so, one of them should be struck through.</p>',
		hints: [
			'Navigation links are a good place to start because they often have hover states and layout rules from multiple selectors.',
			'If nothing is struck through, try adding a temporary rule in the Styles panel to create a conflict on purpose.',
		],
	},
	{
		title: 'Read the specificity',
		instructions:
			'<p>For the winning rule, count its specificity score using the three-column method: IDs, classes, elements. Do the same for the losing rule.</p><p>Write the scores on paper or in a code comment. Does the higher-specificity rule match what DevTools is showing as the winner?</p>',
		hints: [
			'Pseudo-classes like :hover count in the class column.',
			'If both rules have the same specificity, the one later in the source file wins.',
		],
	},
	{
		title: 'Fix a conflict without !important',
		instructions:
			'<p>If your stylesheet has a style conflict that is currently resolved by source order or a selector that is more specific than it needs to be, try refactoring it:</p><ol><li>Lower the specificity of the over-specific selector (e.g. remove unnecessary parent selectors)</li><li>Make both selectors equal specificity and rely on deliberate source order</li><li>Verify in DevTools that the intended rule still wins</li></ol>',
		hints: [
			'A selector like nav ul li a.link can often be simplified to .site-nav__link — same element, lower specificity, clearer intent.',
			'If you are using component-based class names from the BSB project, they should already be low specificity.',
		],
	},
	{
		title: 'Trace an inherited value',
		instructions:
			'<p>Select a deeply nested element — a paragraph inside a section inside main. In the <strong>Computed</strong> tab of DevTools, find a property like <code>color</code> or <code>font-family</code>.</p><p>Click the arrow or expand the property to see where the value was inherited from. Trace the chain back to the element that set it.</p>',
		hints: [
			'Switch from the Styles tab to the Computed tab to see the final resolved value.',
			'The Computed tab shows "Inherited from body" or similar labels when a value was not set directly.',
		],
	},
];

// ── Closure data ──────────────────────────────────────────────────
const closureKeyTakeaways = [
	'The cascade resolves style conflicts in a clear order: origin and importance, then specificity, then source order.',
	'Specificity is a three-column comparison (IDs, classes, elements) — not a single total.',
	'Inheritance passes text-related properties down the DOM tree automatically. Layout properties do not inherit.',
	'DevTools shows exactly which rule wins and which rules lose. Debugging starts there, not by guessing.',
	'Keeping specificity low and consistent is the best way to avoid !important and make stylesheets maintainable.',
];

const closureObjectives = [
	'Explain how the cascade resolves conflicting CSS rules',
	'Calculate and compare specificity scores for different selectors',
	'Predict which properties inherit and which do not',
	'Use DevTools to identify and fix style conflicts',
	'Apply low-specificity strategies to keep CSS maintainable',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-layer-group',
		title: 'Cascade Thinking',
		questions: [
			'Before this lesson, when a style did not apply, what was your first instinct? Has that changed?',
			'Can you think of a time you used !important that could have been solved by adjusting specificity instead?',
		],
	},
	{
		icon: 'fas fa-bug',
		title: 'Debugging Confidence',
		questions: [
			'Which DevTools feature feels most useful for CSS debugging now?',
			'How would you explain a struck-through rule to someone who has never used DevTools?',
		],
	},
	{
		icon: 'fas fa-code',
		title: 'Writing Better CSS',
		questions: [
			'How does keeping specificity low help when multiple developers work on the same stylesheet?',
			'What naming convention have you seen that naturally keeps specificity flat?',
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
							>Cascade, Specificity, and Debugging CSS</a
						>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">40 min</span>
					<span class="tag is-light">CSS</span>
					<span class="tag is-light">Debugging</span>
				</div>
			</div>

			<h1 class="title is-1">Cascade, Specificity, and Debugging CSS</h1>
			<h2 class="subtitle is-4">
				Understand why styles collide, inherit, or lose, then debug those
				conflicts with more confidence.
			</h2>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- ANTICIPATORY SET                                   -->
			<!-- ═══════════════════════════════════════════════════ -->
			<AnticipatorySet
				title="Why Did My Style Disappear?"
				icon="🔍"
				:hook="`<p>You write a CSS rule. It should work. You reload the page and nothing changes. Or worse — some other style appears instead of yours, and you have no idea where it came from.</p><p>This is one of the most common frustrations in CSS. The good news is that the browser is not acting randomly. It follows a precise set of rules called the <strong>cascade</strong> to decide which style wins when multiple rules target the same element.</p><p>Once you understand those rules, CSS debugging stops feeling like guesswork and starts feeling like detective work.</p>`"
				:reflection-prompts="[
					'Have you ever added !important to force a style to work? Did it feel like a fix or a workaround?',
					'When two CSS rules conflict, how do you currently figure out which one wins?',
					'Do you know which CSS properties are inherited from a parent element and which are not?'
				]"
				connection="This lesson fills a gap between knowing CSS properties and being able to debug real stylesheets. The specificity and cascade concepts here apply to every CSS project you work on, including the Black Swan Bistro series."
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- LEARNING OBJECTIVES                                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<LearningObjectives
				:objectives="[
					'Explain the four layers of the cascade: origin, specificity, source order, and inheritance',
					'Calculate specificity scores and predict which selector wins a conflict',
					'Distinguish inherited properties from non-inherited ones',
					'Use browser DevTools to identify why a style is overridden',
					'Apply practical strategies to write lower-specificity, more maintainable CSS'
				]"
				purpose="Debugging CSS is not about finding tricks. It is about understanding the system. When you know how the cascade works, you stop guessing and start reading the browser's decisions."
				:prerequisites="[
					{ topic: 'BSB Part 4: Multi-page Site', link: '/tutorials/intermediate/black-swan-bistro-part-4' },
					{ topic: 'Why Your CSS Isn\u2019t Working', link: '/tutorials/beginner/why-your-css-isnt-working' }
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- THE CASCADE                                        -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="cascade">The Cascade: How the Browser Decides</h2>
			<p>
				CSS stands for <strong>Cascading</strong> Style Sheets. The cascade is the
				algorithm the browser uses to decide which CSS rule wins when more than one
				rule targets the same property on the same element.
			</p>
			<p>
				The browser checks four things, in order. As soon as one layer produces a
				clear winner, the browser stops and applies that rule.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-cascade-flow.svg"
					alt="Vertical flow diagram showing the four cascade layers: Origin and Importance, Specificity, Source Order, and Inheritance, checked top to bottom."
				/>
				<figcaption>
					The cascade checks origin first, then specificity, then source order. If
					no rule targets the property directly, the browser checks whether the
					property inherits from a parent.
				</figcaption>
			</figure>

			<div class="box">
				<h3 class="title is-5">The Four Cascade Layers</h3>
				<ol>
					<li>
						<strong>Origin and importance</strong> — browser defaults, your
						stylesheet, and <code>!important</code> declarations are ranked. Your
						author styles override browser defaults.
						<code>!important</code> overrides everything else.
					</li>
					<li>
						<strong>Specificity</strong> — among rules from the same origin, the
						more specific selector wins. This is where most conflicts are decided.
					</li>
					<li>
						<strong>Source order</strong> — if two rules have the same origin and
						specificity, the one that appears later in the stylesheet wins.
					</li>
					<li>
						<strong>Inheritance</strong> — if no rule targets the property
						directly, some properties (like <code>color</code> and
						<code>font-family</code>) inherit from the parent element.
					</li>
				</ol>
			</div>

			<p>
				In practice, most CSS conflicts come down to <strong>specificity</strong> and
				<strong>source order</strong>. If you can read those two layers, you can
				debug most style problems.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- SPECIFICITY                                        -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="specificity">Specificity: Why Some Selectors Win</h2>
			<p>
				Specificity is how the browser ranks selectors. Each selector gets a score
				split into three columns:
			</p>
			<ul>
				<li>
					<strong>Column A — IDs.</strong> Each <code>#id</code> in the selector
					adds 1 to this column.
				</li>
				<li>
					<strong>Column B — Classes, attributes, and pseudo-classes.</strong>
					Each <code>.class</code>, <code>[attribute]</code>, or
					<code>:hover</code> adds 1 here.
				</li>
				<li>
					<strong>Column C — Element types and pseudo-elements.</strong> Each
					<code>p</code>, <code>nav</code>, or <code>::before</code> adds 1 here.
				</li>
			</ul>
			<p>
				The browser compares specificity column by column, from left to right. The
				first column where one selector scores higher is the winner. This means one
				ID will always beat any number of classes.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-specificity-scoring.svg"
					alt="Table showing five selectors with their specificity scores in three columns: IDs, Classes, and Elements. Selectors are ordered from lowest to highest specificity."
				/>
				<figcaption>
					Specificity is not a single total — it is a three-column comparison.
					One ID outweighs any number of classes.
				</figcaption>
			</figure>

			<h3>Working through examples</h3>
			<p>
				Let's score some real selectors:
			</p>
			<pre><code>/* 0-0-1 — one element selector */
p { color: grey; }

/* 0-1-0 — one class selector */
.warning { color: orange; }

/* 0-1-1 — one class + one element */
nav .site-nav__link { color: #1f2933; }

/* 1-1-0 — one ID + one class */
#main-nav .link { color: #8f2f23; }

/* 1-0-1 — one ID + one element */
#header a { color: #333; }</code></pre>

			<p>
				If <code>.warning</code> and <code>p</code> both target the same paragraph,
				<code>.warning</code> wins because 0-1-0 beats 0-0-1 in the class column.
				Source order does not matter here — the class always wins.
			</p>

			<div class="notification is-warning is-light">
				<p>
					<strong>Watch out for specificity escalation.</strong> If you fix a
					conflict by making a selector more specific, the next conflict might need
					an even more specific selector. This arms race is how stylesheets become
					hard to maintain. Prefer keeping selectors at a consistently low
					specificity instead.
				</p>
			</div>

			<h3>Where <code>!important</code> fits</h3>
			<p>
				<code>!important</code> jumps ahead of normal specificity entirely. A
				declaration marked <code>!important</code> beats any normal declaration,
				regardless of selector specificity.
			</p>
			<pre><code>/* This wins over even #header #nav a.active */
.site-nav__link {
  color: navy !important;
}</code></pre>
			<p>
				That sounds useful, but it is a trap. If two rules both use
				<code>!important</code>, they fall back to the normal cascade — and now both
				sides of the conflict are harder to override. Use
				<code>!important</code> only as a last resort, and treat it as a code smell
				that suggests the specificity structure needs rethinking.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- INHERITANCE                                        -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="inheritance">Inheritance: What Passes Down the Tree</h2>
			<p>
				When no CSS rule directly targets a property on an element, some properties
				<strong>inherit</strong> the value from the nearest ancestor that has one.
				This is how you can set <code>font-family</code> on the
				<code>&lt;body&gt;</code> and have every paragraph, heading, and list item
				use that font without extra rules.
			</p>
			<p>
				But not all properties inherit. Layout and box-model properties like
				<code>border</code>, <code>padding</code>, <code>margin</code>, and
				<code>display</code> do <strong>not</strong> inherit — otherwise every
				child element would duplicate its parent's border, which would be chaos.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-inheritance-tree.svg"
					alt="Tree diagram showing font-family inheriting from body down through section to paragraph and heading, alongside a second branch showing border on a div NOT inheriting to its child paragraph."
				/>
				<figcaption>
					Text properties like <code>font-family</code> and <code>color</code>
					flow down the tree. Layout properties like <code>border</code> and
					<code>padding</code> stop where they are set.
				</figcaption>
			</figure>

			<div class="box">
				<h3 class="title is-5">Common Inherited vs Non-Inherited Properties</h3>
				<table class="table is-fullwidth is-striped">
					<thead>
						<tr>
							<th>Inherits ✓</th>
							<th>Does not inherit ✗</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>color</code></td>
							<td><code>border</code></td>
						</tr>
						<tr>
							<td><code>font-family</code></td>
							<td><code>padding</code></td>
						</tr>
						<tr>
							<td><code>font-size</code></td>
							<td><code>margin</code></td>
						</tr>
						<tr>
							<td><code>line-height</code></td>
							<td><code>width</code> / <code>height</code></td>
						</tr>
						<tr>
							<td><code>letter-spacing</code></td>
							<td><code>display</code></td>
						</tr>
						<tr>
							<td><code>text-align</code></td>
							<td><code>background</code></td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3>Controlling inheritance explicitly</h3>
			<p>
				You can force or remove inheritance with the <code>inherit</code>,
				<code>initial</code>, and <code>unset</code> keywords:
			</p>
			<pre><code>/* Force a non-inheriting property to inherit */
.child {
  border: inherit;
}

/* Reset a property to the browser default */
.reset {
  color: initial;
}

/* If the property normally inherits, act like inherit.
   If it does not, act like initial. */
.flexible {
  all: unset;
}</code></pre>
			<p>
				These keywords are most useful for debugging or for resetting styles in a
				component boundary. You do not need them in everyday CSS.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- COMMON CONFLICTS                                   -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="common-conflicts">Common Style Conflicts and Why They Happen</h2>
			<p>
				Most CSS frustration comes from a small set of recurring patterns. Once you
				recognise them, the mystery disappears.
			</p>

			<h3>Conflict 1: A class rule loses to a more specific selector</h3>
			<pre><code>/* 0-1-0 */
.button { background: navy; }

/* 0-1-1 — wins because of the extra element selector */
section .button { background: grey; }</code></pre>
			<p>
				The second rule is more specific. The fix is usually to keep both selectors at
				the same specificity — for example, by removing the unnecessary parent
				<code>section</code> from the second rule.
			</p>

			<h3>Conflict 2: Source order overrides what you expect</h3>
			<pre><code>/* Both have specificity 0-1-0 */
.card { padding: 2rem; }

/* This one wins because it comes later */
.card { padding: 1rem; }</code></pre>
			<p>
				When specificity is tied, the last rule in the file wins. The fix is to remove
				the duplicate or organise the stylesheet so the intended value appears last.
			</p>

			<h3>Conflict 3: An inherited value is mistaken for a direct rule</h3>
			<pre><code>body { color: #333; }

/* The .card has no color rule, but text appears grey
   because it inherits color from body.
   Adding a direct rule will override the inheritance. */
.card { color: #1f2933; }</code></pre>
			<p>
				Inheritance is not a bug — it is the expected behaviour. But it can be
				confusing if you do not realise the value is coming from an ancestor.
			</p>

			<h3>Conflict 4: <code>!important</code> blocking a later fix</h3>
			<pre><code>.nav-link {
  color: navy !important;
}

/* This does NOT work — !important can only be overridden
   by another !important with higher specificity */
.nav-link.is-active {
  color: #8f2f23;
}</code></pre>
			<p>
				The solution is to remove the <code>!important</code> from the first rule and
				let normal specificity handle the conflict.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- DEVTOOLS DEBUGGING                                  -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="devtools-debugging">Debugging with DevTools</h2>
			<p>
				The browser's DevTools Styles panel is the single most useful tool for CSS
				debugging. It shows you exactly what the browser sees: which rules target the
				selected element, which values are applied, and which are overridden.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-devtools-styles-panel.svg"
					alt="Simplified DevTools Styles panel showing a winning rule with specificity 0-2-0 and a losing rule with specificity 0-1-0 whose color value is struck through, with annotations explaining why the browser chose one over the other."
				/>
				<figcaption>
					The Styles panel lists rules from highest to lowest priority. Overridden
					values are struck through. Click the filename to jump to the source.
				</figcaption>
			</figure>

			<h3>Step-by-step DevTools debugging</h3>
			<ol>
				<li>
					<strong>Inspect the element.</strong> Right-click the element in the page
					and choose <em>Inspect</em>. The Elements panel highlights the element in
					the DOM tree and the Styles panel shows all rules targeting it.
				</li>
				<li>
					<strong>Read the Styles panel top to bottom.</strong> Rules are listed
					from highest priority to lowest. The winning declaration is the one that
					is <em>not</em> struck through.
				</li>
				<li>
					<strong>Look for strikethroughs.</strong> A struck-through value means
					another rule overrides it. The winning rule is above it in the panel.
				</li>
				<li>
					<strong>Check the Computed tab.</strong> Switch to the
					<strong>Computed</strong> tab to see the final resolved values the browser
					is actually using, including inherited values and their source.
				</li>
				<li>
					<strong>Click the source link.</strong> Each rule shows a filename and
					line number. Click it to jump directly to the rule in the source code.
				</li>
			</ol>

			<div class="notification is-info is-light">
				<p>
					<strong>Computed tab tip:</strong> the Computed tab is especially useful
					for tracing inheritance. It shows where a value came from — whether it was
					set directly or inherited from an ancestor.
				</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- PRACTICAL STRATEGIES                                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="strategies">Practical Strategies for Maintainable CSS</h2>
			<p>
				Understanding the cascade is not just for debugging. It also helps you write
				CSS that causes fewer conflicts in the first place.
			</p>

			<div class="box">
				<h3 class="title is-5">Keep Specificity Low and Flat</h3>
				<p>
					If most selectors in your stylesheet are single classes (0-1-0), conflicts
					are decided by source order, which is easy to control. Avoid nesting
					selectors unnecessarily.
				</p>
				<pre><code>/* ❌ High specificity — hard to override later */
#sidebar .widget ul li a { color: grey; }

/* ✅ Low specificity — easy to override with another class */
.widget-link { color: grey; }
.widget-link.is-active { color: navy; }</code></pre>
			</div>

			<div class="box">
				<h3 class="title is-5">Use Source Order Intentionally</h3>
				<p>
					Organise your stylesheet in layers: resets first, then foundations, then
					layout, then components, then overrides. That way, later rules naturally
					override earlier ones when specificity is equal.
				</p>
				<pre><code>/* 1. Reset / foundations */
/* 2. Layout helpers */
/* 3. Components */
/* 4. Page-specific overrides */</code></pre>
			</div>

			<div class="box">
				<h3 class="title is-5">Avoid <code>!important</code> Except for Utilities</h3>
				<p>
					The one reasonable use of <code>!important</code> is for small utility
					classes that must always win — like a visually-hidden class or a
					print-only override. Everywhere else, prefer fixing the specificity
					structure.
				</p>
			</div>

			<div class="box">
				<h3 class="title is-5">Name Components for Purpose, Not Position</h3>
				<p>
					Class names that describe what a component does
					(<code>.menu-card</code>) are easier to reuse than names that describe
					where it sits (<code>.sidebar-box</code>). Purpose-based names also tend
					to keep specificity flat because they do not need parent selectors.
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
					title="Debug a Style Conflict"
					description="Use DevTools to find, diagnose, and fix a real CSS conflict in your own project."
					:steps="guidedPracticeSteps"
					:success-criteria="[
						'You found a conflicting property in the Styles panel',
						'You calculated the specificity of both the winning and losing selectors',
						'You resolved a conflict by adjusting specificity rather than adding !important',
						'You traced an inherited value in the Computed tab back to its source'
					]"
					success-criteria-title="You have finished when:"
				/>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- INDEPENDENT PRACTICE                               -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="independent-practice">
				<IndependentPractice
					task="Audit the specificity of a stylesheet. Open <code>css/style.css</code> from any project (the Black Swan Bistro project works well) and identify the <strong>three highest-specificity selectors</strong>. For each one, calculate its score and decide whether the specificity is necessary or could be reduced."
					:requirements="[
						'Calculate the three-column specificity score for at least five selectors in the stylesheet',
						'Identify the three highest-specificity selectors and explain why they are high',
						'Refactor at least one high-specificity selector to a lower-specificity alternative that still works',
						'Verify the refactored rule still applies correctly using DevTools'
					]"
					:stretch-goals="[
						'Check the entire stylesheet for any !important declarations and decide if each one is justified',
						'Reorganise the stylesheet into clear layers: reset, layout, components, overrides',
						'Add a comment at the top of the stylesheet documenting the intended specificity strategy'
					]"
					:rubric="[
						{ criteria: 'Specificity awareness', success: 'Scores are calculated correctly using the three-column method' },
						{ criteria: 'Practical refactoring', success: 'At least one selector is simplified without changing the visual result' },
						{ criteria: 'Tool use', success: 'DevTools is used to verify that the refactored rule still applies correctly' }
					]"
				/>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- RECAP                                              -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="recap">Recap</h2>
			<p>
				The cascade is not a mystery — it is a decision tree. When two rules target
				the same property on the same element, the browser checks origin and
				importance first, then specificity, then source order. If no rule targets
				the property at all, inheritance may supply a value from a parent element.
			</p>
			<p>
				Specificity is the layer that causes the most confusion. But once you can
				score selectors in three columns — IDs, classes, elements — you can predict
				which rule wins before you open the browser. And when something unexpected
				happens, DevTools shows you the browser's reasoning directly.
			</p>
			<p>
				The best defence against style conflicts is not a clever trick. It is a
				consistent, low-specificity approach to writing selectors: flat class names,
				intentional source order, and no <code>!important</code> unless you genuinely
				need it.
			</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CLOSURE                                            -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="closure">
				<ClosureSection
					title="You Can Read the Cascade Now"
					:key-takeaways="closureKeyTakeaways"
					:objectives="closureObjectives"
					:reflection-prompts="closureReflectionPrompts"
					next-steps="Next, you will explore selectors, pseudo-elements, and motion — using the specificity awareness from this lesson to make confident styling decisions."
				/>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- RECOMMENDATIONS                                    -->
			<!-- ═══════════════════════════════════════════════════ -->
			<div id="additional-resources">
				<TutorialRecommendations
					:current-path="'/tutorials/intermediate/cascade-specificity-and-debugging-css'"
				/>
			</div>
		</div>
	</div>
</template>
