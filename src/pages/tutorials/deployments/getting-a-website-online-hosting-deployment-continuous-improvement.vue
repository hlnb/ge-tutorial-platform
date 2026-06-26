<script setup>
import { ref } from 'vue';
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

const tutorialPath =
	'/tutorials/deployments/getting-a-website-online-hosting-deployment-continuous-improvement';

useTutorialHead({
	title: 'Getting a Website Online: Hosting, Deployment and Continuous Improvement',
	description:
		'Learn how to deploy a basic HTML, CSS and JavaScript website using traditional hosting, manual static hosting, GitHub Pages, Netlify, Vercel and a simple continuous improvement workflow.',
	keywords:
		'deployment, web hosting, static hosting, GitHub Pages, Netlify, Vercel, HTML, CSS, JavaScript, beginner web development',
	path: tutorialPath,
	breadcrumbs: [
		{ name: 'Tutorials', path: '/tutorials' },
		{ name: 'Deployments', path: '/tutorials/deployments' },
		{
			name: 'Getting a Website Online',
			path: tutorialPath,
		},
	],
});

const sections = [
	{ id: 'where-this-fits', title: 'Where This Lesson Fits' },
	{ id: 'what-deployment-means', title: 'What Deployment Means' },
	{ id: 'key-terms', title: 'Key Terms' },
	{ id: 'local-vs-live', title: 'Local Files Versus Live Websites' },
	{ id: 'checkpoint', title: 'Checkpoint' },
	{ id: 'hosting-paths', title: 'The Three Main Hosting Paths' },
	{ id: 'student-hosting-options', title: 'Student Hosting Options' },
	{ id: 'static-vs-dynamic', title: 'Static vs Dynamic Deployment' },
	{ id: 'plain-static-deployment', title: 'Plain HTML, CSS and JavaScript Deployment' },
	{ id: 'vite-deployment', title: 'Vite Deployment' },
	{ id: 'domains-dns-going-live', title: 'Domains, DNS, and Going Live' },
	{ id: 'guided-practice', title: 'Guided Practice: Deploy a Tiny Test Site' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'continuous-improvement', title: 'Continuous Improvement Workflow' },
	{ id: 'common-problems', title: 'Common Deployment Problems' },
	{ id: 'deployment-checklist', title: 'Deployment Checklist' },
	{ id: 'reflection', title: 'Reflection Questions' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
	{ id: 'additional-resources', title: 'Additional Resources' },
];

usePageSections(sections);

const copyStatus = ref('Copy checklist');

const anticipatoryHook = `
	<p>A website is not truly finished when it works on your computer.</p>
	<p>That is only the "it works in my room" stage. Deployment is the process of putting the website somewhere other people can access it through a browser. It is the point where your files leave the cosy little nest of your laptop and meet the wider internet.</p>
	<p>This is also where hidden problems often appear: broken image paths, missing files, incorrect folder structure, case-sensitive filenames, and pages that only worked because they were sitting on your own machine.</p>
`;

const learningObjectives = [
	{ verb: 'Explain', text: 'what deployment means' },
	{ verb: 'Describe', text: 'the difference between a local website and a live website' },
	{ verb: 'Identify', text: 'the basic parts of web hosting' },
	{
		verb: 'Understand',
		text: 'traditional hosting, manual static hosting, and Git-based deployment',
	},
	{
		verb: 'Deploy',
		text: 'a simple HTML, CSS and JavaScript website using an appropriate method',
	},
	{ verb: 'Compare', text: 'static and dynamic hosting needs at a beginner level' },
	{ verb: 'Understand', text: 'how Vite changes the deployment process' },
	{ verb: 'Explain', text: 'the basic role of domains, DNS records, and propagation' },
	{ verb: 'Use', text: 'a pre-deployment checklist before publishing' },
	{ verb: 'Create', text: 'a simple continuous improvement workflow' },
	{
		verb: 'Recognise',
		text: 'the difference between student practice hosting and production-ready hosting',
	},
];

const closureObjectives = learningObjectives.map(
	(objective) => `${objective.verb} ${objective.text}`,
);

const readinessQuestions = [
	{
		question: 'Why is "it works on my laptop" not enough evidence that a site is ready?',
		answer:
			'Local testing can hide problems with paths, missing files, case-sensitive filenames, mobile layout, cache, and deployment folder structure. A live site has to work from a server for someone else, not just from your own computer.',
	},
	{
		question: 'What file does a static host usually look for first at the root of the site?',
		answer:
			'Most static hosts look for index.html. If that file is missing or nested one folder too deep, the homepage may not load at the main address.',
	},
	{
		question: 'Why should filenames be simple, consistent, and lowercase before deployment?',
		answer:
			'Many servers treat uppercase and lowercase filenames as different. Simple lowercase names reduce path mistakes and make links, images, CSS, and JavaScript easier to debug.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Create a tiny deployment test folder',
		instructions:
			'<p>Create a folder called <code>deployment-test</code>. Inside it, add <code>index.html</code>, <code>styles.css</code>, and <code>script.js</code>. Keep this first deployment deliberately small so any problem is easy to find.</p>',
		hints: [
			'Do not start with your largest project. A tiny site helps you learn the hosting workflow without extra noise.',
			'Keep the three files at the top level of the folder.',
		],
	},
	{
		title: 'Step 2: Add the test HTML, CSS, and JavaScript',
		instructions:
			'<p>Use the code examples in the next section. Check that the page opens locally, the stylesheet loads, and the button updates the message text.</p>',
		hints: [
			'If the button does nothing locally, fix that before deployment.',
			'If the CSS does not load locally, check the <code>href</code> value in the <code>link</code> element.',
		],
	},
	{
		title: 'Step 3: Choose one deployment method',
		instructions:
			'<p>Deploy the tiny site using traditional hosting, Netlify Drop, Vercel Drop, GitHub Pages, Netlify with GitHub, or Vercel with GitHub. Follow the hosting service instructions for the method you choose.</p>',
		hints: [
			'For plain HTML/CSS/JS, the folder containing index.html is the important folder.',
			'For Git-based deployment, make sure the files are committed and pushed to the repository branch your host is using.',
		],
	},
	{
		title: 'Step 4: Test the live URL',
		instructions:
			'<p>Open the published URL in a normal browser window and a private or incognito window. Click the JavaScript button, check the layout on a narrow screen, and record any issue you find.</p>',
		hints: [
			'Always test the live URL, not just the local file.',
			'Private windows are useful because they reduce cache confusion.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'The live URL opens from a browser',
	'The homepage loads from index.html',
	'The stylesheet loads on the live site',
	'The JavaScript button works on the live site',
	'You recorded the deployment method, live URL, and at least one test result',
];

const independentPracticeRubric = [
	{
		criteria: 'Deployment evidence',
		success:
			'The learner records the hosting service, live URL, folder or repository used, and any build settings.',
	},
	{
		criteria: 'Testing',
		success:
			'The learner tests the live URL, checks links/assets, and records at least one issue or confirmation.',
	},
	{
		criteria: 'Method fit',
		success:
			'The learner can explain why manual hosting, drag-and-drop hosting, or Git-based deployment suited the task.',
	},
	{
		criteria: 'Improvement workflow',
		success:
			'The learner can make one small update, redeploy it, test it live, and record the change.',
	},
];

const closureKeyTakeaways = [
	'Deployment means putting a website online where other people can reach it.',
	'Plain HTML, CSS, and JavaScript sites can usually be deployed as static files.',
	'Traditional hosting, manual static hosting, and Git-based deployment each teach different parts of the system.',
	'Vite projects usually need a build step before deployment; the finished output is commonly the dist folder.',
	'Free hosting is useful for learning, but production and business sites may need stronger reliability, support, and ownership.',
	'Testing the live site is essential because deployment exposes problems local testing can hide.',
	'A checklist and improvement log turn launch into a repeatable workflow.',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-rocket',
		title: 'First Launch',
		questions: [
			'Which part of deployment felt most concrete once you saw the live URL?',
			'Which part still feels abstract enough that you would want to practise it again?',
		],
	},
	{
		icon: 'fas fa-list-check',
		title: 'Future Workflow',
		questions: [
			'What would you check before sending a live URL to someone else?',
			'Which deployment method would you choose for a class exercise, and which would you choose for a business site?',
		],
	},
];

const checklistMarkdown = `# Deployment Checklist

Use this checklist before and after deploying a website.

It is designed for beginner HTML, CSS and JavaScript projects, with extra notes for Vite projects.

## Student details

| Item | Details |
|---|---|
| Student name |  |
| Project name |  |
| Deployment method |  |
| Hosting service |  |
| Live URL |  |
| Date deployed |  |

## 1. Files and folders

- [ ] My homepage is named \`index.html\`.
- [ ] My CSS file is linked correctly.
- [ ] My JavaScript file is linked correctly.
- [ ] My images are inside the project folder.
- [ ] My folder names are simple and consistent.
- [ ] My file names do not contain accidental spaces.
- [ ] My file names use consistent lowercase naming.
- [ ] I have not linked to files on my own computer using local file paths.
- [ ] I have removed unused test files.
- [ ] I know which folder needs to be uploaded or deployed.

## 2. Content

- [ ] The page title is meaningful.
- [ ] The main heading is clear.
- [ ] Placeholder text has been removed.
- [ ] Spelling and obvious grammar errors have been checked.
- [ ] Images have useful alt text where needed.
- [ ] Decorative images have empty alt text if appropriate.
- [ ] Contact or business details are correct.
- [ ] Navigation labels make sense.
- [ ] Buttons and links use clear text.
- [ ] The website makes sense to someone who did not build it.

## 3. Layout and accessibility

- [ ] The site works on desktop.
- [ ] The site works on mobile.
- [ ] Text is readable.
- [ ] Buttons and links are easy to tap.
- [ ] Colour contrast is acceptable.
- [ ] Keyboard focus is visible.
- [ ] The page has a logical heading order.
- [ ] Content does not overflow sideways on mobile.
- [ ] Images resize appropriately.
- [ ] Animations or movement are not distracting.

## 4. Technical checks

- [ ] All navigation links work.
- [ ] All images load.
- [ ] CSS loads correctly.
- [ ] JavaScript loads correctly.
- [ ] The browser console does not show obvious errors.
- [ ] The site works in a private or incognito browser window.
- [ ] The site has been refreshed after deployment.
- [ ] I tested the live URL, not just the local file.
- [ ] I tested at least one link from each page.
- [ ] I tested any button or interaction I added.

## 5. Deployment method checks

### If using traditional hosting

- [ ] I know the name of my public website folder.
- [ ] I uploaded the correct files to the correct folder.
- [ ] \`index.html\` is in the public website folder.
- [ ] CSS, JavaScript and image folders were uploaded.
- [ ] I did not accidentally upload the project folder one level too deep.
- [ ] I checked the live site after uploading.

### If using manual static hosting

- [ ] I chose the correct folder to upload.
- [ ] For plain HTML/CSS/JS, \`index.html\` is at the root of the uploaded folder.
- [ ] For Vite, I ran the build command first.
- [ ] For Vite, I uploaded the generated \`dist\` folder or the required output folder.
- [ ] I recorded which folder I uploaded.
- [ ] I tested the generated live URL.

### If using GitHub Pages

- [ ] My project files are in a GitHub repository.
- [ ] My homepage is named \`index.html\`.
- [ ] I enabled GitHub Pages in repository settings.
- [ ] I selected the correct branch and folder.
- [ ] I waited for the site to publish.
- [ ] I opened the published GitHub Pages URL.
- [ ] I tested the live site.

### If using Netlify with GitHub

- [ ] My project is pushed to GitHub.
- [ ] Netlify is connected to the correct repository.
- [ ] I checked the build command.
- [ ] I checked the publish directory.
- [ ] For Vite, the build command is usually \`npm run build\`.
- [ ] For Vite, the publish directory is usually \`dist\`.
- [ ] I checked the deployment log if the build failed.
- [ ] I tested the live Netlify URL.

### If using Vercel with GitHub

- [ ] My project is pushed to GitHub.
- [ ] Vercel is connected to the correct repository.
- [ ] I checked the detected framework settings.
- [ ] For Vite, the build command is usually \`npm run build\`.
- [ ] For Vite, the output directory is usually \`dist\`.
- [ ] I checked the deployment log if the build failed.
- [ ] I tested the live Vercel URL.

## 6. After deployment

- [ ] I opened the live URL in a normal browser window.
- [ ] I opened the live URL in a private/incognito window.
- [ ] I checked the homepage.
- [ ] I checked all main pages.
- [ ] I checked navigation links.
- [ ] I checked images.
- [ ] I checked mobile layout.
- [ ] I checked browser console errors.
- [ ] I wrote down any issues.
- [ ] I fixed the most important problems.
- [ ] I tested the site again after fixing issues.

## 7. Continuous improvement check

- [ ] I created an improvement log.
- [ ] I recorded the first deployment date.
- [ ] I recorded the live URL.
- [ ] I wrote down any known issues.
- [ ] I prioritised the most important issue.
- [ ] I know how to update the site again.
- [ ] I know whether updates are manual or automatic.
- [ ] I kept a backup or version history.

## 8. Improvement log template

| Date | Issue or improvement | Change made | Tested locally? | Tested live? | Notes |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

## 9. Deployment notes

Do not write passwords here. Record safe details only.

| Item | Notes |
|---|---|
| Hosting service |  |
| Project/site name |  |
| Live URL |  |
| Repository URL |  |
| Build command |  |
| Output/publish folder |  |
| Public hosting folder |  |
| Date created |  |

## 10. Final confidence check

1. Can someone else open the website from their own device?
2. Does the homepage explain what the site is?
3. Can visitors move around the site?
4. Are the most obvious errors fixed?
5. Do I know how to make the next update?

If you can answer yes to those questions, the site is ready to share for review.

If not, that is not failure. That is testing doing its job.
`;

function copyChecklist() {
	navigator.clipboard
		.writeText(checklistMarkdown)
		.then(() => {
			copyStatus.value = 'Checklist copied';
			window.setTimeout(() => {
				copyStatus.value = 'Copy checklist';
			}, 2400);
		})
		.catch(() => {
			copyStatus.value = 'Copy failed';
		});
}

function downloadChecklist() {
	const blob = new Blob([checklistMarkdown], { type: 'text/markdown;charset=utf-8' });
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = 'deployment-checklist.md';
	link.click();
	URL.revokeObjectURL(url);
}

function printChecklist() {
	window.print();
}
</script>

<template>
	<div class="container section">
		<div class="tutorial-content deployment-fundamentals">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/">
							<i class="fas fa-house mr-2"></i> Home
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials">Tutorials</router-link>
					</li>
					<li>
						<router-link to="/tutorials/deployments">Deployments</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Getting a Website Online</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-warning">Advanced</span>
					<span class="tag is-light">55 min</span>
					<span class="tag is-light">Deployment</span>
					<span class="tag is-light">Non-project tutorial</span>
				</div>
			</div>

			<h1 class="title is-1">
				Getting a Website Online: Hosting, Deployment and Continuous Improvement
			</h1>

			<p class="subtitle is-5">
				Learn how deployment works, how hosting options compare, and how to keep
				improving a website after it goes live.
			</p>

			<AnticipatorySet
				title="Leaving Your Laptop"
				icon="fas fa-rocket"
				:hook="anticipatoryHook"
				:reflection-prompts="[
					'Have you ever had a file, image, or link work locally but fail somewhere else?',
					'What would you want to check before sending a live website link to another person?',
					'Which feels clearer right now: building the site or publishing it?'
				]"
				connection="This lesson sits before Black Swan Bistro Part 5 so the deployment system makes sense before you prepare a project for production."
			/>

			<LearningObjectives
				:objectives="learningObjectives"
				purpose="Deployment is where your project becomes part of the web. Understanding the system helps you choose the right hosting method, avoid folder mistakes, and keep improving the site after launch."
				:prerequisites="[
					{ topic: 'Git Basics', link: '/tutorials/intermediate/git-basics' },
					{ topic: 'Test and Validate Your Site', link: '/tutorials/intermediate/test-and-validate-your-site' }
				]"
			/>

			<h2 id="where-this-fits" class="title is-3">Where This Lesson Fits</h2>
			<p>
				This is a general deployment tutorial. It is not tied to one project. You will
				use these ideas later when you deploy project work such as Black Swan Bistro,
				Rotto Rocks, portfolio projects, small business websites, accessibility practice
				projects, and SEO practice projects.
			</p>
			<p>
				The aim is to understand the system before pressing buttons. Button pressing is
				easy. Understanding why the buttons matter is the useful bit.
			</p>

			<h2 id="what-deployment-means" class="title is-3">What Deployment Means</h2>
			<p>
				Deployment means publishing a website so it can be viewed online. For a basic
				static website, the browser needs access to the site files: HTML, CSS,
				JavaScript, images, fonts, and other assets.
			</p>
			<p>
				Your local project folder is like the kitchen. Deployment is putting the
				finished meal on the table. The browser cannot access your laptop directly, so
				the website needs to be placed on a server or hosting platform that is connected
				to the internet.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-deployment-workflow.svg"
					alt="Diagram showing a local website moving through hosting or build steps to a live URL, followed by testing and improvement."
				/>
				<figcaption>
					Deployment is a workflow, not a single button: prepare the files, publish them
					to a host, test the live URL, then improve the site with evidence.
				</figcaption>
			</figure>

			<h2 id="key-terms" class="title is-3">Key Terms</h2>
			<div class="table-container">
				<table class="table is-bordered is-striped is-fullwidth">
					<thead>
						<tr>
							<th>Term</th>
							<th>Meaning</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Local site</td>
							<td>The version of the website stored on your own computer.</td>
						</tr>
						<tr>
							<td>Live site</td>
							<td>The version of the website available online.</td>
						</tr>
						<tr>
							<td>Web host</td>
							<td>A service that stores and serves website files.</td>
						</tr>
						<tr>
							<td>Domain name</td>
							<td>The human-friendly address for a website.</td>
						</tr>
						<tr>
							<td>Server</td>
							<td>A computer that sends website files to visitors.</td>
						</tr>
						<tr>
							<td>Deployment</td>
							<td>The act of publishing or updating the live site.</td>
						</tr>
						<tr>
							<td>Static site</td>
							<td>A website made from files that do not need server-side processing.</td>
						</tr>
						<tr>
							<td>Build</td>
							<td>The process of preparing a development project for production.</td>
						</tr>
						<tr>
							<td>Output folder</td>
							<td>The folder generated by a build process, such as <code>dist</code> in many Vite projects.</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2 id="local-vs-live" class="title is-3">Local Files Versus Live Websites</h2>
			<p>
				When you are learning HTML, CSS and JavaScript, you may open
				<code>index.html</code> directly from your computer and see the page in your
				browser. That is useful for early testing. It is not the same as deploying the
				site.
			</p>
			<p>Local viewing can hide problems such as:</p>
			<ul>
				<li>file paths that only work on your machine</li>
				<li>filenames that fail on case-sensitive servers</li>
				<li>missing files hidden by browser cache</li>
				<li>forms that do not behave as expected</li>
				<li>routing issues</li>
				<li>image paths that point to the wrong location</li>
				<li>mobile layout problems</li>
				<li>JavaScript errors that only appear after deployment</li>
			</ul>
			<p>
				The site working on your laptop is encouraging. It is not yet evidence.
				Deployment is where the browser gets brutally honest.
			</p>

			<CheckpointBox
				id="checkpoint"
				title="Checkpoint: Is This Ready to Leave Your Laptop?"
				description="Before you deploy, can you answer these?"
				:questions="readinessQuestions"
			/>

			<div class="box">
				<h3 class="title is-5">Quick Pre-deployment Check</h3>
				<ul class="checklist-list">
					<li><i class="fas fa-square"></i> Does the homepage open correctly?</li>
					<li><i class="fas fa-square"></i> Do all navigation links work?</li>
					<li><i class="fas fa-square"></i> Are images stored inside the project folder?</li>
					<li><i class="fas fa-square"></i> Are filenames simple, consistent and lowercase?</li>
					<li><i class="fas fa-square"></i> Are CSS files linked correctly?</li>
					<li><i class="fas fa-square"></i> Are JavaScript files linked correctly?</li>
					<li><i class="fas fa-square"></i> Does the site work on a phone-sized screen?</li>
					<li><i class="fas fa-square"></i> Are there no obvious console errors?</li>
					<li><i class="fas fa-square"></i> Is the main page named <code>index.html</code>?</li>
					<li><i class="fas fa-square"></i> Have you removed placeholder content?</li>
				</ul>
			</div>

			<h2 id="hosting-paths" class="title is-3">The Three Main Hosting Paths</h2>
			<p>
				There are many hosting services, but beginner deployment usually falls into
				three broad paths.
			</p>

			<div class="columns hosting-options">
				<div class="column">
					<div class="box">
						<h3 class="title is-5">Option A: Traditional web hosting</h3>
						<p>
							Traditional web hosting usually gives you a dashboard or control panel, a
							file manager, and sometimes FTP access. You upload your HTML, CSS,
							JavaScript and image files into a public website folder.
						</p>
						<p>Common public folder names include:</p>
						<ul>
							<li><code>public_html</code></li>
							<li><code>htdocs</code></li>
							<li><code>www</code></li>
						</ul>
						<h4 class="title is-6">Best for</h4>
						<ul>
							<li>learning how hosting folders work</li>
							<li>simple static sites</li>
							<li>small manual projects</li>
							<li>understanding many small business hosting accounts</li>
						</ul>
						<h4 class="title is-6">Limitations</h4>
						<ul>
							<li>manual updates can become messy</li>
							<li>it is easy to overwrite files</li>
							<li>there is no version history unless you keep backups</li>
							<li>it is less suitable for modern development workflows</li>
						</ul>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-5">Option B: Manual static hosting</h3>
						<p>
							Some modern static hosting services let you upload a finished folder
							manually. Examples include Netlify Drop, Vercel Drop, and Cloudflare
							Pages Direct Upload.
						</p>
						<h4 class="title is-6">Best for</h4>
						<ul>
							<li>prototypes</li>
							<li>class exercises</li>
							<li>simple HTML, CSS and JavaScript demos</li>
							<li>quick portfolio experiments</li>
						</ul>
						<h4 class="title is-6">Limitations</h4>
						<ul>
							<li>updates still require manual uploads</li>
							<li>you must remember exactly which folder you uploaded</li>
							<li>multiple versions can become confusing</li>
							<li>it is not as repeatable as Git-based deployment</li>
						</ul>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-5">Option C: Git-based deployment</h3>
						<p>
							Git-based deployment connects a GitHub repository to a hosting service.
							When you push changes to GitHub, the hosting service automatically
							rebuilds and redeploys the website.
						</p>
						<p>
							Examples include GitHub Pages, Netlify connected to GitHub, Vercel
							connected to GitHub, and Cloudflare Pages connected to GitHub.
						</p>
						<h4 class="title is-6">Best for</h4>
						<ul>
							<li>ongoing projects</li>
							<li>portfolio sites</li>
							<li>Vite projects</li>
							<li>team workflows</li>
							<li>version history and continuous improvement</li>
						</ul>
						<h4 class="title is-6">Limitations</h4>
						<ul>
							<li>you need basic Git and GitHub confidence</li>
							<li>setup can feel abstract at first</li>
							<li>build settings matter</li>
							<li>error logs can look intimidating until you learn how to read them</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="notification is-warning is-light">
				<p>
					<strong>Free hosting is useful for learning, not magic.</strong> Free plans may
					have limits, slower performance, platform branding, usage caps, less support,
					or features that change over time. That can be fine for student practice. A
					business, client, or long-term project may need more reliable hosting,
					backups, support, and clear ownership.
				</p>
			</div>

			<h2 id="student-hosting-options" class="title is-3">Student Hosting Options</h2>
			<p>
				The right hosting choice depends on what you are practising. A first deployment
				does not need the fanciest platform. It needs a clear path, a live URL, and a
				workflow you can repeat without losing track of your files.
			</p>

			<div class="table-container">
				<table class="table is-bordered is-striped is-fullwidth">
					<thead>
						<tr>
							<th>Pathway</th>
							<th>GitHub required?</th>
							<th>Best for</th>
							<th>Main caution</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Traditional free hosting</td>
							<td>No</td>
							<td>Learning file upload and public folders</td>
							<td>Limits, slower performance, limited support</td>
						</tr>
						<tr>
							<td>Manual static hosting</td>
							<td>No</td>
							<td>Quick static demos and prototypes</td>
							<td>Manual updates can become confusing</td>
						</tr>
						<tr>
							<td>GitHub Pages</td>
							<td>Yes</td>
							<td>Simple static sites and portfolios</td>
							<td>Requires GitHub confidence</td>
						</tr>
						<tr>
							<td>Netlify with GitHub</td>
							<td>Yes</td>
							<td>Ongoing static and Vite projects</td>
							<td>Build settings matter</td>
						</tr>
						<tr>
							<td>Vercel with GitHub</td>
							<td>Yes</td>
							<td>Vite projects and modern frontend workflows</td>
							<td>Check plan terms for commercial use</td>
						</tr>
						<tr>
							<td>Paid hosting</td>
							<td>Varies</td>
							<td>Business, client, and long-term sites</td>
							<td>Costs, renewal pricing, support quality, and ownership details</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="columns hosting-provider-notes">
				<div class="column is-half">
					<div class="box">
						<h3 class="title is-5">Traditional hosting practice</h3>
						<p>
							Services such as InfinityFree and AwardSpace can help students see a
							real hosting dashboard, file manager, and public website folder. They
							are useful for practising uploads to folders such as <code>htdocs</code>
							or <code>public_html</code>.
						</p>
						<p>
							Use this path when the goal is understanding where files live on a host.
							Do not treat free traditional hosting as the default answer for client
							or business sites.
						</p>
					</div>
				</div>
				<div class="column is-half">
					<div class="box">
						<h3 class="title is-5">Manual static hosting practice</h3>
						<p>
							Netlify Drop, Vercel Drop, and Cloudflare Pages Direct Upload are useful
							when students need a quick live URL without GitHub. For plain HTML, CSS
							and JavaScript, upload the folder that contains <code>index.html</code>.
						</p>
						<p>
							For Vite, run <code>npm run build</code> first, then use the generated
							<code>dist</code> output if the provider asks for prebuilt static files.
						</p>
					</div>
				</div>
			</div>

			<div class="columns hosting-provider-notes">
				<div class="column is-half">
					<div class="box">
						<h3 class="title is-5">Git-based hosting practice</h3>
						<p>
							GitHub Pages is a good fit for simple static sites, portfolios, and
							documentation once students understand repositories. Netlify and Vercel
							can connect to GitHub and redeploy when changes are pushed.
						</p>
						<p>
							For plain HTML/CSS/JS, the publish directory is usually the project root
							or the folder containing <code>index.html</code>. For Vite, the common
							settings are <code>npm run build</code> and <code>dist</code>.
						</p>
					</div>
				</div>
				<div class="column is-half">
					<div class="box">
						<h3 class="title is-5">Paid hosting later</h3>
						<p>
							Paid hosting is not required for this tutorial. It becomes more relevant
							when a site needs a custom domain, email accounts, stronger reliability,
							better support, or business credibility.
						</p>
						<p>
							Read plan terms before using any host for commercial work. Hosting
							services change limits, pricing, acceptable use rules, and signup flows
							over time.
						</p>
					</div>
				</div>
			</div>

			<h2 id="static-vs-dynamic" class="title is-3">Static vs Dynamic Deployment</h2>
			<p>
				Most beginner HTML, CSS and JavaScript projects are static sites. That does not
				mean they are boring. It means the host can serve finished files directly to the
				browser without running server-side code for every visitor.
			</p>
			<p>
				A dynamic site needs server-side processing, a database, logged-in user areas,
				real checkout flows, or other backend behaviour. Those projects need a hosting
				choice that supports more than static files.
			</p>

			<div class="table-container">
				<table class="table is-bordered is-striped is-fullwidth">
					<thead>
						<tr>
							<th>Site type</th>
							<th>Usually contains</th>
							<th>Beginner hosting fit</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Static</td>
							<td>HTML, CSS, JavaScript, images, fonts, built Vite output</td>
							<td>Traditional hosting, manual static hosting, GitHub Pages, Netlify, Vercel, Cloudflare Pages</td>
						</tr>
						<tr>
							<td>Dynamic</td>
							<td>Server code, databases, authentication, private dashboards, checkout, CMS editing</td>
							<td>Requires platform support for backend features, databases, serverless functions, or a CMS</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="notification is-info is-light">
				<p>
					<strong>Good news:</strong> Black Swan Bistro, portfolio demos, landing pages,
					and many small informational sites can start as static sites. Reach for dynamic
					hosting when the project actually needs dynamic behaviour, not because the word
					sounds more professional.
				</p>
			</div>

			<h2 id="plain-static-deployment" class="title is-3">Plain HTML, CSS and JavaScript Deployment</h2>
			<p>For a plain static website, your project might look like this:</p>

			<pre><code>my-website/
├── index.html
├── about.html
├── styles.css
├── script.js
└── images/
    └── hero.jpg</code></pre>

			<p>
				To deploy this kind of site manually, you usually upload the files as they are.
				The most important rule is this:
			</p>
			<p><code>index.html</code> must be in the correct public folder.</p>
			<p>
				If you upload the whole <code>my-website</code> folder into the hosting folder,
				your homepage may end up one level too deep.
			</p>

			<div class="columns">
				<div class="column">
					<div class="box">
						<h3 class="title is-6">Usually wrong for the main address</h3>
						<pre><code>htdocs/
└── my-website/
    └── index.html</code></pre>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-6">Usually better</h3>
						<pre><code>htdocs/
├── index.html
├── about.html
├── styles.css
├── script.js
└── images/
    └── hero.jpg</code></pre>
					</div>
				</div>
			</div>

			<p>
				The server looks for <code>index.html</code> first. Do not make it go on a
				treasure hunt.
			</p>

			<h2 id="vite-deployment" class="title is-3">Vite Deployment</h2>
			<p>
				A Vite project is different from a plain HTML folder. During development, you
				usually run:
			</p>

			<pre><code class="language-bash">npm run dev</code></pre>

			<p>
				That starts a local development server. Before deployment, you usually run:
			</p>

			<pre><code class="language-bash">npm run build</code></pre>

			<p>
				This creates a production-ready version of the site. In many Vite projects, the
				output folder is:
			</p>

			<pre><code>dist/</code></pre>

			<p>
				For manual deployment, you usually upload the contents of the
				<code>dist</code> folder or the <code>dist</code> folder itself, depending on the
				hosting service instructions. For Git-based deployment with Netlify or Vercel,
				you usually set:
			</p>

			<div class="table-container">
				<table class="table is-bordered is-striped">
					<thead>
						<tr>
							<th>Setting</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Build command</td>
							<td><code>npm run build</code></td>
						</tr>
						<tr>
							<td>Output / publish directory</td>
							<td><code>dist</code></td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="notification is-warning is-light">
				<p>
					<strong>Plain sites first, Vite as an extra path.</strong> Do not upload the
					whole development project folder to a manual host and expect it to behave like
					the finished site. Your source files are the workshop. Your
					<code>dist</code> folder is the packed and polished version ready for
					visitors.
				</p>
			</div>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-deployment-plain-vite-files.svg"
					alt="Comparison diagram showing plain HTML sites deploying the project folder and Vite sites deploying a generated dist folder after a build step."
				/>
				<figcaption>
					Plain HTML projects can usually publish the folder that contains
					<code>index.html</code>. Vite adds a build step: the deployable version is the
					generated output folder.
				</figcaption>
			</figure>

			<h2 id="domains-dns-going-live" class="title is-3">Domains, DNS, and Going Live</h2>
			<p>
				A deployment gives your site a live address, often on a hosting provider’s
				subdomain. A custom domain is the human-friendly name you can point at that hosted
				site. DNS is the system that tells browsers where that domain should go.
			</p>
			<p>
				You do not need a custom domain for your first student deployment. Learn the
				hosting workflow first. Add domain setup when the site is ready to be shared more
				seriously.
			</p>

			<div class="columns">
				<div class="column">
					<div class="box">
						<h3 class="title is-5">Common DNS pieces</h3>
						<ul>
							<li><strong>Domain registrar:</strong> where the domain is registered and renewed.</li>
							<li><strong>DNS records:</strong> instructions that point names to services.</li>
							<li><strong>A record:</strong> points a domain or subdomain to an IP address.</li>
							<li><strong>CNAME record:</strong> points one name to another hostname.</li>
							<li><strong>Nameservers:</strong> tell the internet which DNS provider manages the domain.</li>
						</ul>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-5">Going-live checks</h3>
						<ul>
							<li>Follow the exact DNS instructions from your hosting provider.</li>
							<li>Check whether you are setting an apex domain, such as <code>example.com</code>, or a subdomain, such as <code>www.example.com</code>.</li>
							<li>Wait for DNS propagation before assuming something is broken.</li>
							<li>Test both <code>http://</code> and <code>https://</code> after SSL is enabled.</li>
							<li>Record where the domain, DNS, hosting, and repository are managed.</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="notification is-warning is-light">
				<p>
					<strong>Do not guess DNS records.</strong> Hosts change their domain setup
					instructions, and different account types can use different records. Use the
					current instructions from the host and registrar, then test the live domain
					after the change has had time to settle.
				</p>
			</div>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-deployment-dns-path.svg"
					alt="Diagram showing a visitor entering a domain, DNS pointing the domain to the hosting platform, and the host serving website files."
				/>
				<figcaption>
					A domain is the readable address. DNS points that address to the hosting
					platform, and the host serves the site files to the visitor's browser.
				</figcaption>
			</figure>

			<h2 id="guided-practice" class="title is-3">Guided Practice: Deploy a Tiny Test Site</h2>
			<p>
				Before deploying a larger project, create and deploy a tiny test website. This
				keeps the first deployment low-pressure. If something breaks, there are only
				three files to inspect.
			</p>

			<GuidedPractice
				title="Deploy a Tiny Test Site"
				icon="fas fa-upload"
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
			/>

			<h3 class="title is-4">Create This Folder Structure</h3>
			<pre><code>deployment-test/
├── index.html
├── styles.css
└── script.js</code></pre>

			<h3 class="title is-4">Create <code>index.html</code></h3>
			<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Deployment Test&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main&gt;
    &lt;h1&gt;My first deployed test site&lt;/h1&gt;
    &lt;p&gt;If you can read this online, deployment worked.&lt;/p&gt;
    &lt;button id="messageButton"&gt;Test JavaScript&lt;/button&gt;
    &lt;p id="message"&gt;&lt;/p&gt;
  &lt;/main&gt;

  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

			<h3 class="title is-4">Create <code>styles.css</code></h3>
			<pre><code class="language-css">body {
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 2rem;
  background: #f7f3ed;
  color: #222;
}

main {
  max-width: 42rem;
  margin: 0 auto;
}

button {
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
}</code></pre>

			<h3 class="title is-4">Create <code>script.js</code></h3>
			<pre><code class="language-js">const button = document.querySelector('#messageButton');
const message = document.querySelector('#message');

button.addEventListener('click', () =&gt; {
  message.textContent = 'JavaScript is working on the live site.';
});</code></pre>

			<p>Deploy this test site using one method:</p>
			<ul>
				<li>traditional hosting</li>
				<li>Netlify Drop</li>
				<li>Vercel Drop</li>
				<li>GitHub Pages</li>
				<li>Netlify with GitHub</li>
				<li>Vercel with GitHub</li>
			</ul>
			<p>Then complete the deployment checklist.</p>

			<IndependentPractice
				id="independent-practice"
				title="Independent Practice: Choose Your Deployment Path"
				icon="fas fa-route"
				task="<p>Choose one deployment option and record enough detail that you could repeat the process later. If you want a stronger comparison, deploy the same tiny site twice: once manually and once with GitHub integration.</p>"
				:requirements="[
					'Record the hosting service and deployment method',
					'Record the folder uploaded or repository connected',
					'Record the live URL',
					'Test the live URL in a normal and private browser window',
					'Record one issue you found or one change you made after the first deployment'
				]"
				:stretch-goals="[
					'Compare manual deployment with Git-based deployment',
					'Explain which method feels safer for future changes',
					'Decide which method you would use for a student project and which you would use for a real client site'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="continuous-improvement" class="title is-3">Continuous Improvement Workflow</h2>
			<p>
				Deployment is not the end of the work. It is the beginning of maintaining the
				site. A simple improvement workflow prevents you from randomly changing files
				and hoping for the best.
			</p>

			<div class="box">
				<h3 class="title is-5">Manual hosting workflow</h3>
				<pre><code>Notice issue → Write it down → Fix local file → Test locally → Upload changed file → Test live site → Record the change</code></pre>
				<div class="table-container">
					<table class="table is-bordered is-striped is-fullwidth">
						<thead>
							<tr>
								<th>Step</th>
								<th>Why it matters</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Notice issue</td>
								<td>You identify what needs to change.</td>
							</tr>
							<tr>
								<td>Write it down</td>
								<td>You avoid relying on memory. Memory is not a project management system.</td>
							</tr>
							<tr>
								<td>Fix local file</td>
								<td>You update the source version first.</td>
							</tr>
							<tr>
								<td>Test locally</td>
								<td>You catch obvious mistakes before uploading.</td>
							</tr>
							<tr>
								<td>Upload changed file</td>
								<td>You update the live site.</td>
							</tr>
							<tr>
								<td>Test live site</td>
								<td>You confirm the real website works.</td>
							</tr>
							<tr>
								<td>Record the change</td>
								<td>You create a history of what happened.</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="box">
				<h3 class="title is-5">Git-based workflow</h3>
				<pre><code>Notice issue → Create issue or task → Fix locally → Test locally → Commit → Push → Deployment runs → Test live site</code></pre>
				<p>
					GitHub-connected deployment creates a cleaner trail of changes. You can see
					what changed, when it changed, and often why it changed. That is helpful when
					something breaks and the website starts behaving like it has joined a witness
					protection program.
				</p>
			</div>

			<h3 class="title is-4">Student Improvement Log</h3>
			<div class="table-container">
				<table class="table is-bordered is-striped is-fullwidth">
					<thead>
						<tr>
							<th>Date</th>
							<th>Issue or improvement</th>
							<th>Change made</th>
							<th>Tested locally?</th>
							<th>Tested live?</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>YYYY-MM-DD</td>
							<td>Navigation link broken</td>
							<td>Fixed file path</td>
							<td>Yes</td>
							<td>Yes</td>
							<td>Link now works</td>
						</tr>
						<tr>
							<td>YYYY-MM-DD</td>
							<td>Image too large</td>
							<td>Compressed image</td>
							<td>Yes</td>
							<td>Yes</td>
							<td>Page loads faster</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2 id="common-problems" class="title is-3">Common Deployment Problems</h2>
			<div class="deployment-problems">
				<details>
					<summary>My homepage does not load</summary>
					<p><strong>Likely causes:</strong> <code>index.html</code> is missing, the wrong folder was uploaded, the file is inside the wrong folder, or the host has not finished setting up.</p>
					<p><strong>Fix:</strong> check the public folder, move <code>index.html</code> to the correct location, refresh the live URL, and wait a few minutes if the host is still provisioning the site.</p>
				</details>
				<details>
					<summary>CSS is missing</summary>
					<p><strong>Likely causes:</strong> the CSS path is wrong, the file was not uploaded, the filename uses different capitalisation, or the folder structure changed.</p>
					<p><strong>Fix:</strong> check the <code>&lt;link&gt;</code> path, check the uploaded folder, and match file and folder names exactly.</p>
				</details>
				<details>
					<summary>Images are broken</summary>
					<p><strong>Likely causes:</strong> image files were not uploaded, local file paths were used, folder names do not match, capitalisation differs, or filenames contain spaces.</p>
					<p><strong>Fix:</strong> use relative paths, use simple lowercase filenames, keep images in the project folder, and re-upload missing images.</p>
				</details>
				<details>
					<summary>The site works locally but not online</summary>
					<p><strong>Likely causes:</strong> local file paths, incorrect folder upload, case-sensitive filename issues, Vite source uploaded instead of build output, or incorrect build settings.</p>
					<p><strong>Fix:</strong> check paths, check the public folder, run the build command if using Vite, upload <code>dist</code> if deploying manually, and check build logs if using Git deployment.</p>
				</details>
				<details>
					<summary>Updates do not appear</summary>
					<p><strong>Likely causes:</strong> browser cache, the wrong site or folder was updated, deployment is still processing, or the Git push did not happen.</p>
					<p><strong>Fix:</strong> hard refresh, check the deployment dashboard, check the live URL, confirm the correct folder or repository, and test in a private browser window.</p>
				</details>
			</div>

			<h2 id="deployment-checklist" class="title is-3">Deployment Checklist</h2>
			<p>
				Use this checklist before and after deploying a website. It is designed for
				beginner HTML, CSS and JavaScript projects, with extra notes for Vite projects.
			</p>

			<div class="box checklist-download-box">
				<div>
					<h3 class="title is-5">Copy or download the checklist</h3>
					<p>
						The checklist below is plain Markdown so students can paste it into notes,
						a README, a project issue, or a shared document.
					</p>
				</div>
				<div class="buttons">
					<button class="button is-primary" type="button" @click="copyChecklist">
						<span class="icon"><i class="fas fa-copy"></i></span>
						<span>{{ copyStatus }}</span>
					</button>
					<button class="button is-link is-light" type="button" @click="downloadChecklist">
						<span class="icon"><i class="fas fa-download"></i></span>
						<span>Download Markdown</span>
					</button>
					<button class="button is-light" type="button" @click="printChecklist">
						<span class="icon"><i class="fas fa-print"></i></span>
						<span>Print</span>
					</button>
				</div>
			</div>

			<details class="checklist-preview" open>
				<summary>Preview the full deployment checklist</summary>
				<pre><code>{{ checklistMarkdown }}</code></pre>
			</details>

			<h2 id="reflection" class="title is-3">Reflection Questions</h2>
			<p>Answer these after your first deployment:</p>
			<ol>
				<li>What surprised you about deployment?</li>
				<li>What part of the process felt most confusing?</li>
				<li>What is the difference between uploading files and managing a project?</li>
				<li>Why might a business website need more reliable hosting than a class exercise?</li>
				<li>How does Git-based deployment support continuous improvement?</li>
				<li>What would you check before sending a live URL to someone else?</li>
			</ol>

			<h2 id="recap" class="title is-3">Recap</h2>
			<p>
				Deployment means putting a website online. Static websites can be hosted using
				traditional hosting, manual static hosting, or Git-based workflows. Free hosting
				is useful for learning, but it has limits. Paid hosting may be appropriate for
				business, client and long-term projects.
			</p>
			<p>
				GitHub integration helps with repeatable deployment and continuous improvement.
				Testing the live site is essential. A checklist prevents avoidable mistakes. In
				the next Black Swan Bistro project step, you will apply this workflow to prepare
				the bistro website for deployment, test it as a real visitor, and create a simple
				improvement log.
			</p>

			<ClosureSection
				id="closure"
				title="Ready to Publish With Evidence"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				readiness-message="If you can explain the hosting method, identify the correct folder, test the live URL, and record the next improvement, you are ready to move from local project to live website with a much calmer pulse."
				:reflection-prompts="closureReflectionPrompts"
				next-steps="<p>Next, move into Black Swan Bistro Part 5 with the deployment system already mapped in your head. The project-specific step can focus on preparing the bistro site instead of making hosting feel like a fog machine.</p>"
			/>

			<div>
				<h2 id="additional-resources" class="title is-3">Additional Resources</h2>
				<div class="box resource-links">
					<h3 class="title is-5">Internal next steps</h3>
					<ul>
						<li>
							<router-link to="/tutorials/intermediate/git-basics">Git Basics</router-link>
						</li>
						<li>
							<router-link to="/tutorials/intermediate/working-with-vite">Working with Vite</router-link>
						</li>
						<li>
							<router-link to="/tutorials/intermediate/test-and-validate-your-site">
								Test and Validate Your Site
							</router-link>
						</li>
						<li>
							<router-link to="/tutorials/accessibility-essentials/testing-accessibility-as-you-build">
								Testing Accessibility as You Build
							</router-link>
						</li>
						<li>
							<router-link to="/tutorials/advanced/black-swan-bistro-part-5">
								Black Swan Bistro Part 5: Prepare for Deployment
							</router-link>
						</li>
					</ul>
				</div>

				<div class="box resource-links">
					<h3 class="title is-5">Official hosting references</h3>
					<ul>
						<li>
							<a href="https://www.infinityfree.com/" target="_blank" rel="noopener noreferrer">
								InfinityFree
							</a>
						</li>
						<li>
							<a href="https://www.awardspace.com/" target="_blank" rel="noopener noreferrer">
								AwardSpace
							</a>
						</li>
						<li>
							<a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
								GitHub Pages
							</a>
						</li>
						<li>
							<a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer">
								Netlify Drop
							</a>
						</li>
						<li>
							<a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">
								Vercel
							</a>
						</li>
						<li>
							<a href="https://developers.cloudflare.com/pages/" target="_blank" rel="noopener noreferrer">
								Cloudflare Pages
							</a>
						</li>
					</ul>
				</div>

				<TutorialRecommendations :current-path="tutorialPath" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.deployment-fundamentals pre {
	overflow-x: auto;
}

.hosting-options .box {
	height: 100%;
}

.hosting-provider-notes .box {
	height: 100%;
}

.checklist-list {
	list-style: none;
	margin-left: 0;
}

.checklist-list li {
	align-items: flex-start;
	display: flex;
	gap: 0.75rem;
	margin: 0.4rem 0;
}

.checklist-list i {
	color: #64748b;
	font-size: 0.82rem;
	line-height: 1.75;
}

.deployment-problems {
	display: grid;
	gap: 0.75rem;
	margin: 1.5rem 0 2rem;
}

.deployment-problems details,
.checklist-preview {
	background: #fff;
	border: 1px solid #e5e7eb;
	border-radius: 8px;
	padding: 1rem;
}

.deployment-problems summary,
.checklist-preview summary {
	cursor: pointer;
	font-weight: 700;
}

.deployment-problems p:last-child {
	margin-bottom: 0;
}

.checklist-download-box {
	align-items: center;
	display: flex;
	gap: 1rem;
	justify-content: space-between;
}

.checklist-download-box .buttons {
	flex-shrink: 0;
}

.checklist-preview pre {
	margin-top: 1rem;
	max-height: 34rem;
	overflow: auto;
	white-space: pre;
}

.resource-links ul {
	margin-left: 1.25rem;
}

@media (max-width: 768px) {
	.checklist-download-box {
		align-items: stretch;
		flex-direction: column;
	}

	.checklist-download-box .buttons {
		display: grid;
	}
}

@media print {
	.deployment-fundamentals > :not(#deployment-checklist):not(.checklist-preview),
	.checklist-download-box,
	.breadcrumb,
	.tutorial-meta {
		display: none !important;
	}

	.checklist-preview {
		border: 0;
		padding: 0;
	}

	.checklist-preview pre {
		max-height: none;
		overflow: visible;
		white-space: pre-wrap;
	}
}
</style>
