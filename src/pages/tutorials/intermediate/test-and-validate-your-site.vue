<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import '@/assets/styles/tutorials.css';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

useTutorialHead({
	title: 'Test and Validate Your Site',
	description:
		'Learn a practical pre-launch QA workflow using HTML validation, CSS checks, Lighthouse, browser testing, accessibility checks, and final content review.',
	path: '/tutorials/intermediate/test-and-validate-your-site',
});

const sections = [
	{ id: 'why-validation-matters', title: 'Why Validation Matters' },
	{ id: 'qa-layers', title: 'QA Layers' },
	{ id: 'html-validation', title: 'HTML Validation' },
	{ id: 'css-validation', title: 'CSS Validation' },
	{ id: 'lighthouse-audit', title: 'Lighthouse Audit' },
	{ id: 'manual-browser-testing', title: 'Browser Testing' },
	{ id: 'accessibility-content-checks', title: 'Accessibility and Content' },
	{ id: 'pre-launch-checklist', title: 'Pre-launch Checklist' },
	{ id: 'checkpoint', title: 'Checkpoint' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
	{ id: 'additional-resources', title: 'Additional Resources' },
];

usePageSections(sections);

const anticipatoryHook = `
	<p>A site can look finished and still have problems hiding just below the surface. A missing alt attribute, an invalid heading structure, a broken link, a slow image, or a layout that only fails on a narrow phone screen can all slip through if you only check the page once in your favourite browser.</p>
	<p>Testing and validation is the calm final pass where you ask the site to prove it is ready. You are not trying to make the project perfect. You are making sure the most important promises hold: the page loads, the content is understandable, the layout works, and users are not blocked.</p>
	<p>This lesson gives you a practical pre-launch QA workflow you can reuse before deploying a project like Black Swan Bistro.</p>
`;

const checkpointQuestions = [
	{
		question: 'Why should validation happen before deployment rather than after a site is already live?',
		answer:
			'Pre-launch validation catches structural, accessibility, performance, and content issues before users experience them. It is easier to fix a broken link, invalid HTML, or slow image while the project is still in your working context.',
	},
	{
		question: 'What is the difference between an automated audit and manual testing?',
		answer:
			'Automated tools can detect many technical issues quickly, such as invalid HTML, missing labels, or performance warnings. Manual testing checks the real experience: whether navigation feels clear, content makes sense, forms are usable, and layouts hold up across screen sizes.',
	},
	{
		question: 'Why should you keep a written QA checklist instead of relying on memory?',
		answer:
			'A written checklist makes the process repeatable. It prevents skipped steps, gives you evidence of what was checked, and helps you improve the workflow project by project.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Choose one page to audit',
		instructions:
			'<p>Open a page from your Black Swan Bistro project or another small project you have built. Start with the homepage because it usually contains navigation, images, links, headings, and repeated layout sections.</p><p>Create a simple note with four headings: <strong>Structure</strong>, <strong>Performance</strong>, <strong>Accessibility</strong>, and <strong>Content</strong>.</p>',
		hints: [
			'One page is enough for this practice. The goal is to learn the workflow, not audit an entire site at once.',
			'If the site has several pages, test the homepage first, then repeat the same process on each important page.',
		],
	},
	{
		title: 'Step 2: Validate the HTML and CSS',
		instructions:
			'<p>Use the W3C HTML validator to check your page markup. If your project is local, view the page source or copy the rendered HTML into the validator. Then use the CSS validator or browser DevTools to check for invalid CSS declarations.</p><p>Record any errors separately from warnings. Fix errors first.</p>',
		hints: [
			'An error usually means the browser had to recover from invalid code.',
			'A warning may still matter, but it often needs judgement rather than an automatic fix.',
		],
	},
	{
		title: 'Step 3: Run Lighthouse',
		instructions:
			'<p>Open Chrome DevTools, go to the Lighthouse panel, and run an audit for Performance, Accessibility, Best Practices, and SEO. Do this in an incognito window or with extensions disabled if the score looks strange.</p><p>Pick the top two useful recommendations. Do not chase the score blindly.</p>',
		hints: [
			'Lighthouse is a diagnostic tool, not a report card on your worth as a developer.',
			'Performance warnings about oversized images are especially useful before deployment.',
		],
	},
	{
		title: 'Step 4: Test manually across real conditions',
		instructions:
			'<p>Resize the browser from narrow mobile width to desktop width. Click every navigation link. Use Tab and Shift+Tab to move through interactive elements. Check that focus is visible and the page still makes sense without using a mouse.</p><p>Add anything you find to your QA note with a short description and the page where it happened.</p>',
		hints: [
			'Keyboard testing catches issues that visual inspection misses.',
			'When you find a bug, write the symptom first before jumping into the fix.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You tested one real page rather than only reading about testing',
	'You separated automated validation results from manual experience checks',
	'You recorded errors, warnings, and judgement calls clearly',
	'You identified a small set of fixes instead of trying to perfect everything at once',
];

const independentPracticeRubric = [
	{
		criteria: 'Coverage',
		success:
			'The checklist covers structure, links, responsive layout, accessibility, performance, and content review.',
	},
	{
		criteria: 'Evidence',
		success:
			'The learner can point to tool results, browser behaviour, or manual test notes rather than vague impressions.',
	},
	{
		criteria: 'Prioritisation',
		success:
			'Blocking issues and clear errors are fixed before cosmetic improvements or score-chasing.',
	},
	{
		criteria: 'Repeatability',
		success:
			'The final checklist is reusable for future projects, not only the current page.',
	},
];

const closureKeyTakeaways = [
	'Testing is not a separate personality trait. It is a repeatable workflow.',
	'Validation checks whether your HTML and CSS are structurally sound.',
	'Lighthouse gives useful signals, but scores need judgement and context.',
	'Manual browser testing catches real experience problems that automated tools miss.',
	'Accessibility, content, performance, and links all belong in a pre-launch check.',
	'A written QA checklist turns launch preparation into a habit instead of a panic.',
];

const closureObjectives = [
	'Explain why validation matters before a site goes live',
	'Use HTML and CSS validators to find structural issues',
	'Run a Lighthouse audit and interpret the results with judgement',
	'Manually test responsive layout, links, keyboard navigation, and content',
	'Create a practical pre-launch checklist for future projects',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-clipboard-check',
		title: 'QA Habits',
		questions: [
			'Which part of the QA process caught something you would usually miss?',
			'What would make this checklist easy for you to reuse before every launch?',
		],
	},
	{
		icon: 'fas fa-balance-scale',
		title: 'Good Judgement',
		questions: [
			'Which automated warning was useful, and which one needed more context?',
			'How would you explain a remaining non-critical issue to a client or teammate?',
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
						<a href="#" aria-current="page">Test and Validate Your Site</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">40 min</span>
					<span class="tag is-light">QA</span>
					<span class="tag is-light">Pre-launch</span>
				</div>
			</div>

			<h1 class="title is-1">Test and Validate Your Site</h1>

			<p class="subtitle is-5">
				Build a practical pre-launch QA workflow for validation, Lighthouse, browser testing,
				accessibility, and content review.
			</p>

			<AnticipatorySet
				title="Finished Means Checked"
				icon="fas fa-clipboard-check"
				:hook="anticipatoryHook"
				:reflection-prompts="[
					'What do you usually check before you call a website finished?',
					'Have you ever found a broken link, layout issue, or missing image after you thought a page was done?',
					'Which feels more natural right now: building the page or proving that it works?'
				]"
				connection="This lesson comes after the Design to Code build work and the debugging workflow. You now have enough structure, styling, and project experience to run a proper quality pass before moving into deployment."
			/>

			<LearningObjectives
				:objectives="[
					'Explain why validation matters before a site goes live',
					'Use HTML and CSS validation to catch structural problems',
					'Run a Lighthouse audit and interpret the results with judgement',
					'Manually test links, forms, responsive layout, and keyboard navigation',
					'Create a reusable pre-launch checklist for future projects'
				]"
				purpose="Good validation protects users, clients, and your future self. It turns launch preparation into a calm checklist instead of a last-minute guessing session."
				:prerequisites="[
					{ topic: 'BSB Part 4B: Polish and Refine', link: '/tutorials/intermediate/black-swan-bistro-part-4b-polish-and-refine' },
					{ topic: 'How to Debug a Broken Web Page', link: '/tutorials/intermediate/debug-broken-web-page' }
				]"
			/>

			<h2 id="why-validation-matters">Why Validation Matters</h2>
			<p>
				Validation is the process of checking whether a site is built on reliable
				foundations. The browser is forgiving, which is useful while you are learning,
				but it also means mistakes can hide. A missing closing tag might still render.
				An invalid CSS rule might be ignored silently. A button might look fine while
				being difficult to reach with a keyboard.
			</p>
			<p>
				A validation pass helps you catch those issues before deployment. It also changes
				the way you think about quality. Instead of asking, "Does it look okay on my
				screen?", you start asking, "Does this hold up for different users, browsers,
				devices, and conditions?"
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Professional habit:</strong> validation is not about embarrassment or
					perfection. It is about evidence. Every issue you catch before launch is one
					less issue a real user has to discover for you.
				</p>
			</div>

			<h2 id="qa-layers">The Layers of a Good QA Pass</h2>
			<p>
				A useful pre-launch check looks at several layers. Each layer answers a different
				question about the site.
			</p>

			<figure class="tutorial-figure">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-test-validate-qa-workflow.svg"
					alt="Circular workflow showing structure, presentation, experience, and readiness checks feeding into a launch decision."
				/>
				<figcaption>
					A pre-launch check works best when you test the site as a system, not as a
					single screenshot.
				</figcaption>
			</figure>

			<p>
				This matters because no single tool can judge the whole site. A validator can
				find invalid markup. Lighthouse can point out common performance and accessibility
				risks. Your own manual testing can notice whether the navigation feels clear and
				whether the content makes sense.
			</p>

			<h2 id="html-validation">Validate the HTML</h2>
			<p>
				HTML validation checks whether your markup follows the rules the browser expects.
				The most common tool is the W3C Markup Validation Service. You can validate a
				public URL, upload a file, or paste HTML directly.
			</p>
			<p>
				When validating a local project, you may need to copy the rendered HTML from the
				browser or validate the built page after deployment preview. For a beginner or
				intermediate static site, focus on fixing clear errors first.
			</p>

			<div class="box">
				<h3 class="title is-5">HTML issues worth fixing before launch</h3>
				<ul>
					<li>unclosed or incorrectly nested elements</li>
					<li>duplicate IDs on the same page</li>
					<li>missing required attributes, such as <code>alt</code> on images</li>
					<li>form inputs without labels</li>
					<li>links or buttons used for the wrong purpose</li>
				</ul>
			</div>

			<p>
				Warnings need judgement. Some are useful. Some are more contextual. Errors are a
				better first priority because they usually mean the browser is repairing your
				document behind the scenes.
			</p>

			<h2 id="css-validation">Check the CSS</h2>
			<p>
				CSS validation is less dramatic than HTML validation because invalid CSS is often
				ignored one declaration at a time. That can make CSS mistakes easy to miss. A typo
				in a property name, a missing unit, or an unsupported value might simply fail
				without breaking the whole stylesheet.
			</p>

			<pre><code>.menu-card {
  margin-top: 24;      /* Missing unit */
  colour: #222;        /* UK spelling is invalid in CSS */
  display: grid;
}</code></pre>

			<p>
				In this example, the browser ignores the invalid declarations and keeps the valid
				ones. That is helpful, but it can also make you wonder why a style "doesn't work."
				DevTools will usually show invalid or crossed-out declarations in the Styles
				panel.
			</p>

			<div class="notification is-warning is-light">
				<p>
					<strong>Keep perspective:</strong> vendor-prefixed or experimental CSS can create
					validator noise. Use validation as evidence, then decide whether the warning
					applies to the browsers and features you are actually supporting.
				</p>
			</div>

			<h2 id="lighthouse-audit">Run a Lighthouse Audit</h2>
			<p>
				Lighthouse is built into Chrome DevTools. It checks common issues across
				performance, accessibility, best practices, and SEO. It is useful because it gives
				you a broad scan quickly.
			</p>
			<p>
				For learning projects, Lighthouse is most helpful when you treat it as a set of
				clues rather than a score to worship. A perfect score is not the goal. A page that
				loads reasonably, uses meaningful content, supports keyboard navigation, and avoids
				obvious accessibility failures is much more important.
			</p>

			<div class="box">
				<h3 class="title is-5">How to read Lighthouse results</h3>
				<ol>
					<li><strong>Start with red items:</strong> these usually represent clearer problems.</li>
					<li><strong>Look for repeated themes:</strong> oversized images, missing labels, poor contrast.</li>
					<li><strong>Fix what improves real users:</strong> not every point is equally important.</li>
					<li><strong>Retest after fixes:</strong> confirm the issue changed instead of assuming.</li>
				</ol>
			</div>

			<p>
				Run Lighthouse against a production-like version when possible. Local development
				servers, browser extensions, and throttling settings can affect results. If a score
				looks strange, rerun the audit in an incognito window with extensions disabled.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-test-validate-automated-vs-manual.svg"
					alt="Split diagram comparing automated checks such as validation and Lighthouse with manual checks such as keyboard navigation, forms, links, and content clarity."
				/>
				<figcaption>
					Automated tools give you useful signals, but manual testing checks meaning,
					context, and the real path a person takes through the page.
				</figcaption>
			</figure>

			<h2 id="manual-browser-testing">Manual Browser Testing</h2>
			<p>
				Automated tools are useful, but they do not experience the site like a person.
				Manual browser testing checks the real path through the page.
			</p>
			<p>
				For a site like Black Swan Bistro, manual testing should include:
			</p>
			<ul>
				<li>clicking every navigation link on every page</li>
				<li>checking that the current page is clear in the navigation</li>
				<li>testing mobile, tablet, and desktop widths</li>
				<li>checking that images load and do not distort</li>
				<li>submitting or testing forms safely, if forms exist</li>
				<li>using the keyboard to move through links and controls</li>
			</ul>

			<p>
				When you find an issue, write it down as a symptom first. For example:
				<code>Menu link wraps awkwardly at 375px</code> is more useful than
				<code>fix CSS</code>. A clear symptom gives you a better starting point for debugging.
			</p>

			<h2 id="accessibility-content-checks">Accessibility and Content Checks</h2>
			<p>
				A pre-launch pass should include basic accessibility and content review. This does
				not replace a full accessibility audit, but it helps catch common blockers before
				real users hit them.
			</p>

			<div class="columns">
				<div class="column">
					<div class="box">
						<h3 class="title is-5">Accessibility checks</h3>
						<ul>
							<li>headings follow a logical order</li>
							<li>images have useful alt text or intentionally empty alt text</li>
							<li>links make sense out of context</li>
							<li>keyboard focus is visible</li>
							<li>text has enough colour contrast</li>
						</ul>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-5">Content checks</h3>
						<ul>
							<li>page titles and headings match the page purpose</li>
							<li>spelling and grammar have been reviewed</li>
							<li>placeholder text has been removed</li>
							<li>contact details and links are correct</li>
							<li>metadata is ready for previews and search</li>
						</ul>
					</div>
				</div>
			</div>

			<p>
				These checks also prepare you for the SEO and deployment lessons. Search engines,
				assistive technologies, and social previews all rely on clear structure and
				meaningful content. A tidy page is easier for both people and machines to
				understand.
			</p>

			<h2 id="pre-launch-checklist">A Reusable Pre-launch Checklist</h2>
			<p>
				Here is a checklist you can adapt for future projects:
			</p>

			<div class="box">
				<h3 class="title is-5">Pre-launch QA checklist</h3>
				<ul>
					<li>HTML validates without serious errors</li>
					<li>CSS has no obvious invalid declarations or broken selectors</li>
					<li>all navigation links work</li>
					<li>images load, have appropriate alt text, and are not unnecessarily large</li>
					<li>layout works at mobile, tablet, laptop, and wide desktop widths</li>
					<li>keyboard navigation reaches all interactive elements</li>
					<li>focus styles are visible</li>
					<li>forms have labels, useful error states, and safe submission behaviour</li>
					<li>Lighthouse has been reviewed for major performance and accessibility issues</li>
					<li>page titles, meta descriptions, and visible headings are accurate</li>
					<li>placeholder copy, test links, and unused assets have been removed</li>
				</ul>
			</div>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-test-validate-checklist-funnel.svg"
					alt="Funnel diagram showing raw QA findings being sorted by risk into known launch decisions and a ready-to-launch state."
				/>
				<figcaption>
					A checklist is most useful when it turns findings into decisions: fix blockers,
					handle important launch issues, and record lower-risk improvements for later.
				</figcaption>
			</figure>

			<p>
				You do not need to fix every non-critical warning before launch. You do need to
				understand what remains and make a deliberate decision. That is the difference
				between skipping quality and managing quality.
			</p>

			<CheckpointBox
				id="checkpoint"
				title="Checkpoint: Can You Read a QA Result?"
				:questions="checkpointQuestions"
			/>

			<GuidedPractice
				id="guided-practice"
				title="Guided Practice: Audit One Page"
				icon="fas fa-list-check"
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
			/>

			<IndependentPractice
				id="independent-practice"
				title="Independent Practice: Build Your Own Pre-launch QA Note"
				icon="fas fa-clipboard-list"
				task="<p>Choose a small multi-section page from your own work, preferably the Black Swan Bistro homepage. Run a pre-launch QA pass and create a short written report with the checks you completed, the issues you found, and the fixes you made or deferred.</p>"
				:requirements="[
					'Validate or inspect the HTML structure',
					'Check CSS behaviour across at least three viewport widths',
					'Run a Lighthouse audit and choose two useful findings',
					'Test navigation with mouse and keyboard',
					'Write a short final checklist you could reuse on another project'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="recap">Recap</h2>
			<p>
				Testing and validation turn "it looks done" into "I have checked the important
				parts." HTML validation, CSS inspection, Lighthouse audits, manual browser testing,
				accessibility checks, and content review each catch different kinds of problems.
			</p>
			<p>
				The strongest workflow is not complicated. Check the structure. Check the styles.
				Check the experience. Check the launch details. Write down what you found, fix the
				blockers first, and retest.
			</p>

			<ClosureSection
				id="closure"
				title="From Builder to Launch Thinker"
				:summary="`<p>A site is not ready just because the last section has been coded. It is ready when you have checked that the structure, experience, content, and performance can hold up for real users.</p><p>This is the bridge between building and deploying. Once you can run a calm QA pass, deployment becomes less like throwing a project over a wall and more like sending out something you have inspected with care.</p>`"
				:key-takeaways="closureKeyTakeaways"
				:objectives-met="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
			/>

			<div id="additional-resources">
				<TutorialRecommendations
					:current-path="'/tutorials/intermediate/test-and-validate-your-site'"
				/>
			</div>
		</div>
	</div>
</template>
