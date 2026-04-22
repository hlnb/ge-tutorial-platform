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

const sections = [
	{ id: 'why-pages-break', title: 'Why Pages Break' },
	{ id: 'debugging-loop', title: 'The Debugging Loop' },
	{ id: 'console-first', title: 'Start with the Console' },
	{ id: 'inspect-html-css', title: 'Inspect HTML and CSS' },
	{ id: 'check-files-paths', title: 'Check Files and Paths' },
	{ id: 'test-javascript', title: 'Test JavaScript Assumptions' },
	{ id: 'step-by-step-checklist', title: 'Step-by-Step Checklist' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
	{ id: 'additional-resources', title: 'Additional Resources' },
];

usePageSections(sections);

const anticipatoryHook = `
	<p>A broken web page can feel chaotic. The layout collapses, a button stops responding, an image disappears, or the whole screen turns blank. In that moment, many learners start changing random code and hoping something works.</p>
	<p>That approach usually makes the problem harder to understand. Debugging gets easier when you slow down and treat the browser like a source of evidence instead of an enemy.</p>
	<p>This lesson gives you a calm, repeatable workflow for tracking down broken HTML, CSS, file-path, and JavaScript problems one step at a time.</p>
`;

const checkpointQuestions = [
	{
		question: 'If the page looks wrong but still loads, what should you do before editing code?',
		answer:
			'Describe the exact symptom first. Notice what still works, what is broken, and whether the problem looks like structure, styling, missing files, or JavaScript behaviour.',
	},
	{
		question: 'Why is the browser console often the best first stop when a page suddenly breaks?',
		answer:
			'Because the console often shows direct error messages for missing files, JavaScript exceptions, and failed requests. It can tell you what the browser already knows instead of making you guess.',
	},
	{
		question: 'Predict what happens if you change three different things before testing any of them.',
		answer:
			'You lose the evidence trail. If the page improves or gets worse, you no longer know which change caused it.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Name the symptom before touching code',
		instructions:
			'<p>Open a page you have built recently, ideally one from Black Swan Bistro or another tutorial project. Pick one visible bug or pretend one exists.</p><p>Write one sentence that describes the problem plainly, such as <code>The navigation links are unstyled</code>, <code>The menu cards are stacked in the wrong order</code>, or <code>The button click does nothing</code>.</p>',
		hints: [
			'A useful bug description talks about what the learner sees, not what they assume caused it.',
			'If the whole page is broken, start with the first visible problem rather than all of them at once.',
		],
	},
	{
		title: 'Step 2: Gather browser evidence',
		instructions:
			'<p>Open DevTools. Check the <strong>Console</strong> for red errors and warnings. Then inspect the broken element in the <strong>Elements</strong> panel and open the <strong>Network</strong> panel if the issue might involve a missing file.</p><p>Write down the strongest clue you find.</p>',
		hints: [
			'Console clues are often direct: file not found, variable not defined, or unexpected token.',
			'If an image or stylesheet seems missing, reload the page with the Network panel open.',
		],
	},
	{
		title: 'Step 3: Isolate one likely layer',
		instructions:
			'<p>Choose the one layer that seems most likely: HTML structure, CSS, file path/loading, or JavaScript.</p><p>Check that layer only. For example, if a class is missing in the Elements panel, stay with HTML and CSS first. If the browser shows <code>404</code>, stay with the file path problem first.</p>',
		hints: [
			'Do not jump between CSS and JavaScript unless the evidence tells you to.',
			'The aim is to remove uncertainty, not to inspect every file at once.',
		],
	},
	{
		title: 'Step 4: Make one fix and retest',
		instructions:
			'<p>Apply one small fix. Reload the page and ask: did the symptom change, stay the same, or reveal a deeper issue?</p><p>If it changed, you learned something. If it did not, undo the assumption and check the next strongest clue.</p>',
		hints: [
			'One change per test keeps the debugging story readable.',
			'Even a failed fix can be useful if it rules something out clearly.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You described the bug in plain language before editing code',
	'You checked the browser for evidence instead of guessing first',
	'You isolated one likely layer before fixing anything',
	'You made one change at a time and retested after each change',
];

const independentPracticeRubric = [
	{
		criteria: 'Clear diagnosis',
		success: 'The learner can explain whether the bug came from structure, CSS, file loading, or JavaScript behaviour.',
	},
	{
		criteria: 'Evidence-based workflow',
		success: 'The learner refers to a browser clue such as a console error, a missing class, a 404 request, or a failed event.',
	},
	{
		criteria: 'Scoped fix',
		success: 'The learner makes a targeted correction rather than rewriting large sections of code.',
	},
	{
		criteria: 'Retest habit',
		success: 'The learner reloads or rechecks the page after each meaningful change and notices what changed.',
	},
];

const closureKeyTakeaways = [
	'Debugging starts with observing the symptom clearly, not changing code immediately.',
	'The browser already contains useful evidence through the Console, Elements, Styles, and Network panels.',
	'Most broken pages can be narrowed to one layer at a time: HTML, CSS, file loading, or JavaScript.',
	'Small, testable fixes are easier to trust than large guessing-based rewrites.',
	'A repeatable debugging loop builds confidence faster than memorising isolated fixes.',
];

const closureObjectives = [
	'Describe a broken-page symptom clearly before editing code',
	'Use the Console, Elements, Styles, and Network panels as debugging tools',
	'Separate HTML, CSS, file-path, and JavaScript problems instead of mixing them together',
	'Fix one likely cause at a time and retest the result',
	'Build a repeatable debugging habit for future projects',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-search',
		title: 'Evidence First',
		questions: [
			'When a page breaks, what do you usually do first right now?',
			'Which browser panel feels most useful for the kinds of bugs you hit most often?',
		],
	},
	{
		icon: 'fas fa-wrench',
		title: 'Troubleshooting Habits',
		questions: [
			'Which kind of bug do you tend to misdiagnose: HTML structure, CSS, file paths, or JavaScript?',
			'How would your debugging change if you always made one fix at a time?',
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
						<a href="#" aria-current="page">How to Debug a Broken Web Page (Step-by-Step)</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">Debugging</span>
					<span class="tag is-light">DevTools</span>
				</div>
			</div>

			<h1 class="title is-1">How to Debug a Broken Web Page (Step-by-Step)</h1>

			<p class="subtitle is-5">
				Learn a calm troubleshooting workflow for broken HTML, CSS, file paths, and JavaScript behaviour.
			</p>

			<AnticipatorySet
				title="A Broken Page Is a Clue, Not a Disaster"
				icon="🔧"
				:hook="anticipatoryHook"
				:reflection-prompts="[
					'What do you usually do first when a page breaks?',
					'Have you ever fixed a bug by accident without understanding what caused it?',
					'Which feels harder right now: spotting the problem or knowing where to look next?'
				]"
				connection="This troubleshooting lesson comes after the main builder-path CSS and project work because learners now have enough real code to debug. The goal is to make the next broken page feel manageable rather than mysterious."
			/>

			<LearningObjectives
				:objectives="[
					'Describe a broken-page symptom clearly before editing code',
					'Use the browser Console as an early source of evidence',
					'Inspect HTML structure and CSS rules to find mismatches',
					'Check file paths and loading failures with the Network panel',
					'Apply a repeatable one-change-at-a-time debugging workflow'
				]"
				purpose="Troubleshooting is a professional skill, not a sign that you are failing. A repeatable debugging workflow helps you learn faster and protects you from random guessing."
				:prerequisites="[
					{ topic: 'Black Swan Bistro — Part 4B: Polish and Refine', link: '/tutorials/intermediate/black-swan-bistro-part-4b-polish-and-refine' },
					{ topic: 'Cascade, Specificity, and Debugging CSS', link: '/tutorials/intermediate/cascade-specificity-and-debugging-css' }
				]"
			/>

			<h2 id="why-pages-break">Why Pages Break in Different Ways</h2>
			<p>
				When learners say a page is broken, they often mean one of several different
				things. The page may load but look wrong. It may look fine but have a button
				that does nothing. It may be missing an image or stylesheet. Or it may fail so
				badly that the browser stops running JavaScript altogether.
			</p>
			<p>
				That is why the first debugging step is not <em>fix it</em>. The first step is
				to identify the kind of failure you are seeing.
			</p>

			<div class="box">
				<h3 class="title is-5">Four Common Layers of Broken Behaviour</h3>
				<ul>
					<li><strong>HTML structure:</strong> the wrong element, missing class, invalid nesting, or missing attribute</li>
					<li><strong>CSS:</strong> the right structure exists, but styles do not apply or conflict</li>
					<li><strong>File loading:</strong> a stylesheet, image, script, or page is not being found</li>
					<li><strong>JavaScript:</strong> the page loads, but interactive behaviour fails because the code errors or never runs</li>
				</ul>
			</div>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-debug-broken-web-page-layers-map.svg"
					alt="Diagram grouping broken page symptoms into four layers: HTML structure, CSS, file loading, and JavaScript behaviour, with example symptoms for each."
				/>
				<figcaption>
					Start by naming the kind of failure you are seeing. That helps you look in the
					right layer first instead of checking everything at once.
				</figcaption>
			</figure>

			<div class="notification is-warning is-light">
				<p>
					<strong>Helpful mindset:</strong> a broken page is usually not one giant mystery.
					It is usually one smaller problem that is showing itself through visible symptoms.
				</p>
			</div>

			<h2 id="debugging-loop">The Debugging Loop</h2>
			<p>
				Good debugging is not random. It follows a loop:
			</p>
			<ol>
				<li>observe the symptom clearly</li>
				<li>collect evidence from the browser</li>
				<li>choose the most likely layer</li>
				<li>make one small fix</li>
				<li>retest and learn from the result</li>
			</ol>
			<p>
				This loop matters because it keeps your thinking connected to evidence. When you
				skip straight to editing code, you often solve the wrong problem or create a new
				one on top of the first.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-debug-broken-web-page-debug-loop.svg"
					alt="Flow diagram showing the debugging loop: observe the symptom, collect browser evidence, choose a likely layer, make one small fix, and retest."
				/>
				<figcaption>
					This is the habit to repeat. Each pass through the loop should reduce
					uncertainty, even if the first fix is not the final one.
				</figcaption>
			</figure>

			<h2 id="console-first">Start with the Console</h2>
			<p>
				If something suddenly stops working, open DevTools and check the
				<strong>Console</strong> before you rewrite anything. The console often tells
				you exactly what the browser already knows.
			</p>

			<div class="box">
				<h3 class="title is-5">Console clues often look like this</h3>
				<pre><code>Uncaught ReferenceError: menuButton is not defined
Failed to load resource: the server responded with a status of 404
Uncaught TypeError: Cannot read properties of null
</code></pre>
			</div>

			<p>
				Each of those messages points in a different direction. A reference error often
				means a variable name is wrong or unavailable. A <code>404</code> points to a
				file path or missing file. A <code>null</code> error often means JavaScript is
				trying to use an element the browser did not find.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-debug-broken-web-page-browser-evidence-map.svg"
					alt="Diagram mapping common debugging questions to browser panels: Console for errors, Elements and Styles for structure and CSS, and Network for missing files."
				/>
				<figcaption>
					The browser panels do different jobs. Matching the symptom to the right panel
					makes troubleshooting faster and calmer.
				</figcaption>
			</figure>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="🧭"
				description="Pause here and make sure the basic troubleshooting rhythm is clear before you dive into specific panels and bug types."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="inspect-html-css">Inspect HTML and CSS Before Assuming the Browser Is Wrong</h2>
			<p>
				If the page loads but looks wrong, inspect the broken element. The
				<strong>Elements</strong> panel lets you check whether the HTML you expected is
				actually on the page. This is where you catch problems like:
			</p>
			<ul>
				<li>a class name in HTML that does not match the CSS selector</li>
				<li>a missing wrapper that the layout depends on</li>
				<li>a button rendered as the wrong element</li>
				<li>content appearing in a different order than expected</li>
			</ul>
			<p>
				Once the structure looks right, move to the <strong>Styles</strong> and
				<strong>Computed</strong> panels. Check whether the rule is missing, crossed
				out, or overridden. That tells you whether the problem is absent CSS, conflicting
				CSS, or the wrong HTML hook.
			</p>

			<div class="box">
				<h3 class="title is-5">A common mismatch</h3>
				<div class="columns is-variable is-5">
					<div class="column">
						<h4 class="title is-6">HTML</h4>
						<pre><code>&lt;a class="nav-link"&gt;Menu&lt;/a&gt;</code></pre>
					</div>
					<div class="column">
						<h4 class="title is-6">CSS</h4>
						<pre><code>.site-nav__link {
  color: #1f3a44;
}</code></pre>
					</div>
				</div>
				<p class="mt-3">
					The CSS is not wrong in isolation. It just targets a different class name from
					the one the browser is actually rendering.
				</p>
			</div>

			<h2 id="check-files-paths">Check Files and Paths When Assets Are Missing</h2>
			<p>
				If an image does not appear, a stylesheet is not loading, or a script never runs,
				do not stay only in the code editor. Open the <strong>Network</strong> panel and
				reload the page.
			</p>
			<p>
				This is where you can see whether the browser asked for the file at all, whether
				it found it, and what path it tried to use. A missing stylesheet or script can
				make a whole page look broken even though the HTML is fine.
			</p>

			<div class="box">
				<h3 class="title is-5">Path problems often come from details like:</h3>
				<ul>
					<li><code>css/style.css</code> vs <code>./css/style.css</code> in the wrong folder context</li>
					<li>moving from one page to multiple pages without updating relative paths</li>
					<li>renaming a file but not updating the HTML reference</li>
					<li>wrong image file extension such as <code>.jpg</code> vs <code>.png</code></li>
				</ul>
			</div>

			<pre><code>&lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;img src="images/dining-room.jpg" alt="Dining room"&gt;
&lt;script src="js/menu.js"&gt;&lt;/script&gt;</code></pre>

			<p>
				Each of those references is a promise that the browser will find a file in that
				location. If the path is wrong, the browser cannot keep the promise, no matter how
				good the CSS or JavaScript is.
			</p>

			<h2 id="test-javascript">Test JavaScript Assumptions One by One</h2>
			<p>
				When a click handler or interactive feature stops working, the bug is often not
				in the whole script. It is usually in one assumption the script made.
			</p>
			<p>
				Common examples include:
			</p>
			<ul>
				<li>the selector does not match any element</li>
				<li>the script runs before the element exists</li>
				<li>the variable name is misspelled</li>
				<li>an earlier error stops the rest of the script from running</li>
			</ul>

			<div class="box">
				<h3 class="title is-5">A typical JavaScript debugging check</h3>
				<pre><code>const menuButton = document.querySelector('.menu-toggle');

console.log(menuButton);

menuButton.addEventListener('click', () =&gt; {
  console.log('clicked');
});</code></pre>
				<p class="mt-3">
					If the first <code>console.log</code> prints <code>null</code>, the browser did
					not find the element. That means the next line is likely to fail. At that point,
					you stop and investigate the selector or the timing, rather than editing the
					event listener itself.
				</p>
			</div>

			<h2 id="step-by-step-checklist">A Step-by-Step Checklist You Can Reuse</h2>
			<p>
				When a page breaks, run through this checklist in order:
			</p>
			<ol>
				<li><strong>Name the symptom:</strong> what exactly is wrong?</li>
				<li><strong>Check the Console:</strong> is the browser already showing an error?</li>
				<li><strong>Inspect the element:</strong> is the expected HTML actually present?</li>
				<li><strong>Check Styles and Computed:</strong> is the CSS missing or overridden?</li>
				<li><strong>Check Network:</strong> did a stylesheet, image, or script fail to load?</li>
				<li><strong>Test one assumption:</strong> what is the simplest thing that could be false?</li>
				<li><strong>Make one fix:</strong> change one thing only</li>
				<li><strong>Retest:</strong> what changed, and what does that tell you?</li>
			</ol>

			<div class="notification is-info is-light">
				<p>
					<strong>Professional habit:</strong> every failed debugging attempt can still be
					useful if it rules out a wrong assumption clearly.
				</p>
			</div>

			<GuidedPractice
				id="guided-practice"
				title="Guided Practice: Troubleshoot One Visible Bug"
				icon="fas fa-life-ring"
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
			/>

			<IndependentPractice
				id="independent-practice"
				title="Independent Practice: Diagnose a Small Broken Page Problem"
				icon="fas fa-bug"
				task="<p>Choose a small page problem from one of your own projects or create one deliberately. Good examples include a missing image, a button that does not respond, a class name mismatch, a broken stylesheet link, or a layout rule that is not applying.</p><p>Use the debugging checklist from this lesson to identify the symptom, collect evidence, make one fix, and confirm the result.</p>"
				:requirements="[
					'Write one sentence describing the visible symptom before debugging',
					'Use at least one browser panel as evidence: Console, Elements, Styles, Computed, or Network',
					'Name the layer where the bug lived: HTML, CSS, file path, or JavaScript',
					'Make one targeted fix and retest the page'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="recap">Recap</h2>
			<p>
				Debugging a broken page gets easier when you stop treating it like a personal
				failure and start treating it like evidence gathering. The browser can show you
				missing files, invalid assumptions, structure mismatches, and overridden styles.
				Your job is to read those clues in a calm order.
			</p>
			<p>
				The real skill is not memorising every possible bug. It is learning a repeatable
				way to narrow the problem until the next step becomes obvious.
			</p>

			<ClosureSection
				id="closure"
				title="What Strong Troubleshooting Looks Like"
				:summary="`<p>A strong debugger does not panic and does not guess wildly. They observe the symptom, check the browser, isolate one likely layer, test one fix, and learn from the result.</p><p>That habit will help you far beyond this lesson. Every future project will break sometimes. The difference is that now you have a process for meeting that moment with more confidence.</p>`"
				:key-takeaways="closureKeyTakeaways"
				:objectives-met="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
			/>

			<div id="additional-resources">
				<TutorialRecommendations :current-path="'/tutorials/intermediate/debug-broken-web-page'" />
			</div>
		</div>
	</div>
</template>
