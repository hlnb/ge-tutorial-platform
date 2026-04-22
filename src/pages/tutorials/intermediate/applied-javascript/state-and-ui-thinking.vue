<script setup>
import '@/assets/styles/tutorials.css';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const pageSections = [
	{ id: 'state-model', title: 'State as a Source of Truth' },
	{ id: 'events-and-updates', title: 'Events and Updates' },
	{ id: 'derived-ui', title: 'Derived UI Decisions' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
];

usePageSections(pageSections);

const checkpointQuestions = [
	{
		question: 'Why is it useful to treat state as the source of truth instead of reading values back from the page each time?',
		answer:
			'Because the page is the display layer. Keeping the important values in JavaScript makes it easier to reason about updates, compare old and new values, and avoid contradictory UI states.',
	},
	{
		question: 'What is a derived value in an interface?',
		answer:
			'It is something the UI calculates from existing state, such as whether a button should be disabled, how many items match a filter, or what label to show after a user action.',
	},
	{
		question: 'Predict what happens if two different event handlers update the same feature without agreeing on one state object.',
		answer:
			'The feature becomes harder to trust because the UI can drift out of sync. One part of the code may think the feature is open while another part thinks it is closed.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Name the state before writing DOM code',
		instructions:
			'<p>Imagine a filterable menu with category buttons and a result count. Write down the smallest set of values the feature needs to remember. For example: <code>selectedCategory</code>, <code>items</code>, and <code>searchTerm</code>.</p><p>Keep this list short. If a value can be calculated later, it probably does not need to be stored separately.</p>',
		hints: [
			'Store the selected category, not the highlighted button colour.',
			'Store the search term, not the rendered HTML.',
		],
	},
	{
		title: 'Step 2: Map one event to one update',
		instructions:
			'<p>Pick one user action, such as clicking a category button. Describe what changes in state when that action happens, and what part of the page should update afterward.</p><p>Use a short sentence like: <code>When the user clicks Dessert, update selectedCategory, then render the filtered list and count.</code></p>',
		hints: [
			'Separate the event itself from the UI update that follows it.',
			'If the action changes nothing in state, it probably should not change the display either.',
		],
	},
	{
		title: 'Step 3: Identify two derived UI details',
		instructions:
			'<p>List two things the interface can derive from state rather than store directly. Example: the count of matching cards, or whether the empty-state message should be visible.</p>',
		hints: [
			'Derived values are often booleans, counts, or labels.',
			'If the value can be recomputed at any time, derive it.',
		],
	},
	{
		title: 'Step 4: Sketch the render loop',
		instructions:
			'<p>Write a tiny flow in plain English: read current state, calculate what should appear, then update the relevant DOM areas. The goal is a stable sequence, not fancy code.</p>',
		hints: [
			'Good UI code has a repeatable order.',
			'Read state first, then decide, then render.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You identified the minimum state values the feature needs',
	'You linked a user event to a specific state change',
	'You separated stored state from derived UI details',
	'You described a repeatable render/update sequence',
];

const independentPracticeRubric = [
	{
		criteria: 'Clear state model',
		success: 'The learner stores only the values the feature genuinely needs to remember.',
	},
	{
		criteria: 'Event clarity',
		success: 'Each user action updates state in a predictable, explainable way.',
	},
	{
		criteria: 'Derived thinking',
		success: 'Counts, labels, or visibility rules are calculated from state instead of duplicated.',
	},
	{
		criteria: 'UI consistency',
		success: 'The page would not show conflicting signals after repeated user actions.',
	},
];

const closureKeyTakeaways = [
	'State is the information your feature needs to remember between user actions.',
	'The page should display state, not replace it as the source of truth.',
	'Events change state, and rendering decisions follow from those changes.',
	'Derived values help you avoid storing the same idea in multiple places.',
];

const closureObjectives = [
	'Explain state, events, and rendering as one connected interface loop',
	'Choose what should be stored versus what should be derived',
	'Describe how one user action should change one feature state',
	'Plan a clearer UI update sequence before writing DOM code',
];
</script>

<template>
	<div class="container section">
		<div class="tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li><router-link to="/"><i class="fa-solid fa-house mr-2"></i> Home</router-link></li>
					<li><router-link to="/tutorials">Tutorials</router-link></li>
					<li><router-link to="/tutorials/intermediate/applied-javascript">Applied JavaScript</router-link></li>
					<li class="is-active"><a href="#" aria-current="page">State and UI Thinking</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">JavaScript</span>
					<span class="tag is-light">State</span>
				</div>
			</div>

			<h1 class="title is-1">State and UI Thinking</h1>
			<p class="subtitle is-5">
				Build the mental model that connects data, user actions, and interface updates.
			</p>

			<AnticipatorySet
				title="Interactive Features Need a Stable Story"
				icon="🧠"
				:hook="`<p>Many learners can already make a button change text or hide a panel. The trouble starts when a feature needs to do that repeatedly, stay consistent, and react to more than one kind of input.</p><p>That is where state thinking matters. Instead of treating the page like a pile of disconnected DOM changes, you start treating the feature like a system: something remembers the important values, user actions change those values, and the interface updates because of them.</p>`"
				:reflection-prompts="[
					'Which kinds of UI changes already feel easy to you?',
					'When a feature breaks, do you usually lose track of the values or the DOM steps?',
					'What would feel different if every UI change started from one clear source of truth?'
				]"
				connection="This lesson turns beginner JavaScript and DOM knowledge into a more reliable interface-building habit."
			/>

			<LearningObjectives
				:objectives="[
					'Explain state as the information an interface needs to remember',
					'Describe how events change state and trigger updates',
					'Identify values that should be derived instead of stored separately',
					'Plan a small render loop before writing feature code'
				]"
				purpose="When you understand the state -> event -> update loop, later lessons about rendering, validation, and debugging feel much more manageable."
				:prerequisites="[
					{ topic: 'JavaScript Functions', link: '/tutorials/beginner/javascript-basics/functions' },
					{ topic: 'DOM Events', link: '/tutorials/beginner/dom-basics/dom-events' },
					{ topic: 'Dynamic Content', link: '/tutorials/beginner/dom-basics/dynamic-content' }
				]"
			/>

			<h2 id="state-model">State as a Source of Truth</h2>
			<p>
				State is the information a feature needs to remember after the user does something.
				A dropdown remembers whether it is open. A filter remembers the selected category.
				A booking form remembers what the visitor typed.
			</p>
			<p>
				The important shift is this: the browser page is the display layer, not the main
				memory. The DOM should reflect what your JavaScript knows. It should not be the only
				place where the truth lives.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<div class="concept-diagram">
					<div class="diagram-card">
						<strong>State</strong>
						<span>selectedCategory = "dessert"</span>
					</div>
					<div class="diagram-arrow">→</div>
					<div class="diagram-card">
						<strong>Decision</strong>
						<span>Show dessert cards, highlight dessert button</span>
					</div>
					<div class="diagram-arrow">→</div>
					<div class="diagram-card">
						<strong>UI</strong>
						<span>Cards and labels update together</span>
					</div>
				</div>
				<figcaption>
					Good interface code starts with remembered values, then decides what the page
					should show.
				</figcaption>
			</figure>

			<h2 id="events-and-updates">Events and Updates</h2>
			<p>
				An event is not the whole feature. It is the moment something happens: a click, a
				form submission, a checkbox toggle, or an input change. The event handler should
				update state clearly, then let the interface update from that new state.
			</p>
			<div class="notification is-info is-light">
				<p>
					<strong>Useful discipline:</strong> ask two questions for every feature:
					What values changed? What parts of the page now need to match those values?
				</p>
			</div>

			<h2 id="derived-ui">Derived UI Decisions</h2>
			<p>
				Not every interface detail deserves its own stored variable. Some values are better
				derived from other state: item counts, empty-state messages, button labels, or
				whether a result list should appear at all.
			</p>
			<ul>
				<li>Store the selected filter.</li>
				<li>Derive the filtered item count.</li>
				<li>Store the search term.</li>
				<li>Derive whether the empty-state message should show.</li>
			</ul>

			<CheckpointBox
				title="Checkpoint for Understanding"
				:questions="checkpointQuestions"
				:tips="[
					'If the page and the data can disagree, your state model is probably too blurry.',
					'Derived values help the interface stay consistent without duplicating logic.'
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Plan a Filterable Feature"
				description="Use plain English first so the JavaScript structure stays understandable."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Choose a familiar builder-path interface and write its state story before coding it."
				task-title="Your Task:"
				:task="`<p>Pick a small interactive feature such as a menu filter, FAQ accordion, gallery category switcher, or booking form. Write a short planning note that answers four things: what state the feature stores, what events can change it, what values are derived, and what parts of the interface must update after each action.</p>`"
				:requirements="[
					'Name at least three stored or derived values',
					'Describe at least two user actions',
					'Explain which interface regions update after each action'
				]"
				:stretch-goals="[
					'Note one contradictory UI state you want to avoid',
					'Sketch a tiny render function in pseudocode'
				]"
				:rubric="independentPracticeRubric"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>State is what the feature remembers.</li>
					<li>Events change that remembered information.</li>
					<li>The UI should be updated from state, not improvised one DOM change at a time.</li>
					<li>Counts, labels, and visibility rules are often best derived from existing values.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="closureKeyTakeaways"
					:objectives="closureObjectives"
					:reflection-prompts="[
						{
							icon: 'fas fa-layer-group',
							title: 'Source of Truth',
							questions: [
								'Which feature you have built recently would become clearer with a simple state object?',
								'What values were you previously trying to remember through the DOM alone?'
							]
						}
					]"
					real-world-application="<p>Menus, carts, search panels, booking widgets, and navigation drawers all rely on the same mental pattern: remember the important values, respond to actions, then update the interface from those values.</p>"
					next-steps="<p>Next, you will use this model to render repeated content from arrays and objects without duplicating markup.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/applied-javascript/state-and-ui-thinking'"
				:practice-projects="[
					{
						title: 'Color Switcher',
						description: 'A compact feature for practising state-driven visual updates.',
						tags: ['JavaScript', 'UI'],
						path: '/projects/color-switcher'
					},
					{
						title: 'Photo Gallery 2',
						description: 'A richer builder-path project where category and rendering decisions matter.',
						tags: ['JavaScript', 'Gallery'],
						path: '/projects/photo-gallery-2'
					}
				]"
			/>
		</div>
	</div>
</template>

<style scoped>
.concept-diagram {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	align-items: center;
	gap: 1rem;
}

.diagram-card {
	background: #fffbea;
	border: 1px solid #f5d76e;
	border-radius: 12px;
	padding: 1rem;
	text-align: center;
}

.diagram-card strong,
.diagram-card span {
	display: block;
}

.diagram-arrow {
	text-align: center;
	font-size: 2rem;
	color: #a07b00;
}

@media (max-width: 768px) {
	.concept-diagram {
		grid-template-columns: 1fr;
	}

	.diagram-arrow {
		transform: rotate(90deg);
	}
}
</style>
