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
	{ id: 'first-pass', title: 'First Pass' },
	{ id: 'spacing-structure', title: 'Spacing and Structure' },
	{ id: 'colour-type', title: 'Colour and Typography' },
	{ id: 'patterns', title: 'Repeated Patterns' },
	{ id: 'states-assets', title: 'States and Assets' },
	{ id: 'notes-checklist', title: 'Notes Checklist' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'additional-resources', title: 'Additional Resources' },
	{ id: 'recap', title: 'Recap' },
];

usePageSections(sections);

const checkpointQuestions = [
	{
		question: 'Why should you read spacing and structure before trying to copy exact colours or pixel values?',
		answer:
			'Because spacing and structure reveal how the page is organised, which repeated parts belong together, and which rules might need to become reusable in code.',
	},
	{
		question: 'What is one sign that a visual pattern in a design may become shared CSS later?',
		answer:
			'If the same card shell, button style, section heading, or spacing pattern appears more than once, it is probably a candidate for reuse.',
	},
	{
		question: 'Predict what happens if you open a mockup and jump straight into coding without collecting notes first.',
		answer:
			'You are more likely to miss repeated patterns, make inconsistent spacing decisions, and treat reusable parts as separate one-off styling problems.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Take a structured first pass',
		instructions:
			'<p>Open a homepage mockup, landing page screenshot, or reference site. Spend a minute identifying the main message, the biggest sections, and the areas that repeat.</p><p>Do not measure anything yet. Focus on what the page is trying to communicate and how it is grouped.</p>',
		hints: [
			'Start by asking what the user notices first, second, and third.',
			'Write short observations, not polished notes.',
		],
	},
	{
		title: 'Step 2: Read spacing, type, and pattern clues',
		instructions:
			'<p>Now inspect the design more closely. Look for repeated container widths, section gaps, heading sizes, button treatments, and card shells.</p><p>Your goal is to move from “this looks nice” to “these are the rules I can see.”</p>',
		hints: [
			'If the same kind of space or style appears twice, write it down as a repeated rule.',
			'You do not need exact values to notice visual consistency.',
		],
	},
	{
		title: 'Step 3: Turn the mockup into implementation notes',
		instructions:
			'<p>Write a short design-to-code note list that captures structure, spacing, repeated patterns, states, and needed assets.</p><p>Keep the notes practical enough that they would help you or another learner start building the page.</p>',
		hints: [
			'Good notes are specific enough to guide implementation, but short enough to scan.',
			'Try to end with notes that point toward HTML structure and reusable CSS patterns.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You captured the main message and major sections before smaller details',
	'You identified repeated spacing, pattern, or typography clues',
	'You turned the mockup into short implementation notes',
	'You can explain how the notes would make coding easier',
];

const independentPracticeRubric = [
	{
		criteria: 'Reading order',
		success: 'The learner starts with structure and hierarchy before focusing on polish.',
	},
	{
		criteria: 'Pattern recognition',
		success: 'The notes identify repeated blocks, shared spacing, or visual rules that could support reuse later.',
	},
	{
		criteria: 'Implementation usefulness',
		success: 'The notes are practical enough to guide HTML and CSS decisions.',
	},
	{
		criteria: 'Transfer',
		success: 'The learner can apply the same reading method to a fresh design, not just the example from the lesson.',
	},
];

const closureKeyTakeaways = [
	'Reading a design is a practical skill, not a mysterious creative gift.',
	'Start with structure and spacing before worrying about exact visual polish.',
	'Look for repeated patterns, visual rules, and clues about content hierarchy.',
	'Your goal is to turn a mockup into useful notes that make coding easier.',
];

const closureObjectives = [
	'Inspect a design in a deliberate order instead of guessing',
	'Extract spacing, hierarchy, colour, and pattern clues from a mockup',
	'Spot repeated blocks that may become reusable styles or components later',
	'Create simple implementation notes before you write code',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-eye',
		title: 'Observation',
		questions: [
			'Which design detail do you usually notice first: colour, spacing, text, or structure?',
			'What did you miss before you started reading the design more systematically?',
		],
	},
	{
		icon: 'fas fa-sticky-note',
		title: 'Preparation',
		questions: [
			'How would your code change if you captured better notes before you started?',
			'Which repeated patterns in a design are worth writing down immediately?',
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
						<a href="#" aria-current="page">How to Read a Design</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">Design</span>
					<span class="tag is-light">UI</span>
				</div>
			</div>

			<h1 class="title is-1">How to Read a Design</h1>

			<p class="subtitle is-5">
				Learn to extract spacing, colours, typography, and structure from a mockup.
			</p>

			<AnticipatorySet
				title="Design Files Are Full of Clues"
				icon="🔎"
				:hook="`<p>A mockup is not just a pretty picture. It is a set of decisions waiting to be translated into code.</p><p>When you know what to look for, you can read a design the way a builder reads a plan: spacing, alignment, hierarchy, repeated blocks, states, and assets all start to reveal themselves.</p><p>You do not need to copy every pixel by instinct. You need to learn how to collect the right clues in the right order.</p>`"
				:reflection-prompts="[
					'When you open a design, do you usually feel clear about what to look for first?',
					'Have you ever missed a repeated pattern because you focused only on the page as a whole?',
					'What details in a mockup tend to confuse you most?'
				]"
				connection="In the builder path, reading the design well comes before coding the layout well. This lesson helps you build that habit."
			/>

			<LearningObjectives
				:objectives="[
					'Read a design in a structured order instead of randomly inspecting details',
					'Notice spacing, alignment, typography, and colour clues that affect implementation',
					'Spot repeated visual patterns that will matter later for reuse',
					'Create coding notes that make the HTML and CSS stages more deliberate'
				]"
				purpose="Design-to-code work becomes much easier once you stop asking “what should I copy first?” and start asking “what information does this design give me about structure, hierarchy, and repetition?”"				:prerequisites="[
					{ topic: 'How to Think About Layouts', link: '/tutorials/intermediate/think-about-layouts' }
				]"			/>

			<h2 id="first-pass">Step 1: Take a First Pass</h2>
			<p>
				Do not zoom into the smallest details immediately. Start by asking broad questions.
			</p>
			<ul>
				<li>How many major sections are on the page?</li>
				<li>What is the main message in the hero area?</li>
				<li>Where does the eye go first, second, and third?</li>
				<li>Which areas feel repeated?</li>
			</ul>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-how-to-read-a-design-first-pass-annotated-mockup.svg"
					alt="Annotated mockup with numbered callouts showing the first pass reading order: main message, supporting content, repeated areas, and overall page structure."
				/>
				<figcaption>
					This first-pass diagram keeps your attention on structure and scanning order.
					Before you inspect exact values, make sure you can tell what the page is saying
					first, what supports it, and where patterns begin to repeat.
				</figcaption>
			</figure>
			<p>
				This first pass helps you understand the page as a whole before you start pulling
				it apart.
			</p>

			<h2 id="spacing-structure">Step 2: Read Spacing and Structure</h2>
			<p>
				Spacing is one of the most important design clues because it tells you which things
				belong together and which things should feel separate.
			</p>
			<ul>
				<li>Look at the gaps between sections.</li>
				<li>Look at the gaps inside cards or content blocks.</li>
				<li>Look for consistent left and right edges.</li>
				<li>Look for repeated width patterns, such as centered containers.</li>
			</ul>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-how-to-read-a-design-spacing-and-patterns-callouts.svg"
					alt="Annotated layout showing shared container edges, section spacing, repeated card padding, and repeated button styles as reusable design patterns."
				/>
				<figcaption>
					Spacing and repetition are some of the clearest clues in a design. When the
					same edges, gaps, card shells, or button styles appear more than once, they are
					often pointing you toward reusable rules rather than one-off styling choices.
				</figcaption>
			</figure>

			<div class="notification is-info is-light">
				<p><strong>Useful habit:</strong> if two things share the same spacing pattern more than once, write it down as a reusable rule instead of treating it as a one-off decision.</p>
			</div>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="📝"
				description="Pause here and check whether you are reading the design as a system of clues rather than as decoration."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="colour-type">Step 3: Read Colour and Typography</h2>
			<p>
				You do not need a perfect style guide to start noticing design rules.
			</p>
			<ul>
				<li>Which colours are used for actions like buttons and links?</li>
				<li>Which colours are used for headings, body text, and backgrounds?</li>
				<li>How many heading sizes are visible?</li>
				<li>Is there a consistent text rhythm from large heading to smaller body copy?</li>
			</ul>
			<p>
				This helps you move toward reusable colour variables and heading patterns later.
			</p>

			<h2 id="patterns">Step 4: Spot Repeated Patterns</h2>
			<p>
				This is where design reading starts to connect directly to better code.
			</p>
			<ul>
				<li>Do multiple sections use the same kind of card?</li>
				<li>Do buttons share the same shape and colour?</li>
				<li>Do section headings follow the same visual rule?</li>
				<li>Do image blocks repeat a similar size or framing style?</li>
			</ul>
			<p>
				Repeated patterns may begin as shared CSS classes. Later, they may grow into
				reusable components.
			</p>

			<h2 id="states-assets">Step 5: Check States and Assets</h2>
			<p>
				A design file often contains more than static layout. It may also hint at hover
				states, active links, icons, logos, and images that the final build will need.
			</p>
			<ul>
				<li>Are there obvious buttons or links that need hover states?</li>
				<li>Is there a logo that should influence the project colour system?</li>
				<li>Are some images real content and others only placeholders?</li>
				<li>Will the layout depend on icons, profile photos, or gallery images?</li>
			</ul>

			<h2 id="notes-checklist">Step 6: Make a Simple Notes Checklist</h2>
			<p>
				Before coding, write down practical notes. They do not need to be elegant. They
				need to be useful.
			</p>
			<div class="box">
				<pre><code>Design notes

- 6 main sections
- centered page container
- repeated card pattern in 2 places
- one main button style
- warm neutral background
- strong hero headline
- gallery needs grid layout
- footer is simple link cluster</code></pre>
			</div>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-how-to-read-a-design-mockup-to-coding-notes.svg"
					alt="Split diagram showing a marked-up design on the left and practical implementation notes on the right."
				/>
				<figcaption>
					This is the handoff you are aiming for. The design stays visual, but your notes
					turn that visual information into layout, pattern, and implementation decisions
					you can act on in code.
				</figcaption>
			</figure>
			<p>
				These notes are the bridge between the visual design and your implementation plan.
			</p>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Read one design like a builder"
				description="Use a structured process to turn a visual design into notes you could actually build from."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Read a fresh mockup"
				description="Now apply the same process to a different design without step-by-step support."
				task-title="Your Task:"
				task="<p>Choose a different homepage, hero section, or small landing page design. Create your own short reading notes that cover structure, spacing, repeated patterns, typography clues, and any important states or assets.</p><p>Keep the notes practical enough that they would help you start building the page later.</p>"
				:requirements="[
					'Identify the major sections and main message first',
					'Note at least two repeated patterns or reusable clues',
					'Capture one typography or colour rule you can see',
					'Write notes that would help guide later HTML or CSS work'
				]"
				:stretch-goals="[
					'Compare two designs and note how their repeated patterns differ',
					'Identify one part of the design that would likely become a reusable component later'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="additional-resources">Additional Resources</h2>
			<p>
				These readings are especially useful if you want to get better at reading homepage
				purpose, repeated patterns, and design systems:
			</p>
			<ul>
				<li>
					<a
						href="https://www.nngroup.com/articles/homepage-design-principles/"
						target="_blank"
						rel="noopener"
					>
						Nielsen Norman Group: Homepage Design Principles
					</a>
					&mdash; strong for understanding hierarchy, scanning, and what users expect from
					a homepage.
				</li>
				<li>
					Every Layout
					&mdash; helpful for recognising repeated layout patterns beneath the visual
					surface of a mockup.
				</li>
			</ul>

			<h2 id="recap">Recap</h2>
			<p>
				Reading a design well means collecting useful clues in a sensible order. Start big,
				then move inward: sections, spacing, hierarchy, colour, patterns, states, and
				assets. Once you do that, the code stops feeling like guesswork.
			</p>

			<ClosureSection
				title="Lesson Complete: You Can Read Designs More Deliberately"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="Next, you will turn that design reading into a practical HTML plan by breaking the page into semantic sections."
			/>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/how-to-read-a-design'" />
		</div>
	</div>
</template>
