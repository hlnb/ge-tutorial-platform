<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

useTutorialHead({
  title: "From Idea to Live Website",
  description: "Follow the full journey from idea to live website — planning, building, and deploying a real project explained simply.",
  path: "/tutorials/beginner/idea-to-live-website",
});

const sections = [
	{ id: 'big-picture', title: 'The Big Picture' },
	{ id: 'stages', title: 'Main Stages' },
	{ id: 'black-swan-example', title: 'Black Swan Bistro Example' },
	{ id: 'mistakes', title: 'Common Mistakes' },
	{ id: 'additional-resources', title: 'Additional Resources' },
	{ id: 'recap', title: 'Recap' },
];

usePageSections(sections);

const closureKeyTakeaways = [
	'A website project usually moves through planning, structure, styling, content, testing, publishing, and maintenance.',
	'You do not need to finish every design decision before you begin, but you do need a clear next step.',
	'Good web projects are built in layers: idea first, then structure, then layout, then polish, then launch.',
	'The goal is not to rush from blank screen to live site. The goal is to build something clear, maintainable, and useful.',
];

const closureObjectives = [
	'Explain the major stages between an idea and a live website',
	'Describe what belongs in planning, building, testing, and publishing',
	'See where Black Swan Bistro fits into the wider learning journey',
	'Understand why later lessons focus on layout, patterns, components, and deployment in that order',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-map-signs',
		title: 'Project Journey',
		questions: [
			'Which stage of the website journey feels most familiar to you already?',
			'Which stage feels most unclear or intimidating right now?',
		],
	},
	{
		icon: 'fas fa-hammer',
		title: 'Build Order',
		questions: [
			'Why is it useful to separate structure, layout, and polish into different stages?',
			'What problems happen when you jump straight to the final look too early?',
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
						<a href="#" aria-current="page">From Idea to Live Website</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-success">Beginner</span>
					<span class="tag is-light">25 min</span>
					<span class="tag is-light">Overview</span>
					<span class="tag is-light">Workflow</span>
				</div>
			</div>

			<h1 class="title is-1">From Idea to Live Website: The Full Journey Explained</h1>

			<p class="subtitle is-5">
				A high-level walkthrough of the entire process from concept to deployment.
			</p>

			<AnticipatorySet
				title="A Website Is Not One Big Step"
				icon="🗺️"
				:hook="`<p>When people first imagine building a website, they often picture one giant task: open the editor, write some code, and somehow end up with a finished site on the internet.</p><p>Real projects do not work like that. They move through stages. You make decisions, test ideas, change direction, improve structure, add styling, and only then think about publishing.</p><p>This is good news. Once you understand the stages, web development feels less mysterious and much more manageable.</p>`"
				:reflection-prompts="[
					'When you picture building a website, which part comes to mind first: design, code, content, or publishing?',
					'Have you ever felt stuck because the whole project felt too big at once?',
					'What do you think has to happen before a site can go live?'
				]"
				connection="This lesson gives you the map. Later tutorials will zoom into individual stages such as writing HTML, building layouts with CSS, creating reusable patterns, and deploying a site properly."
			/>

			<LearningObjectives
				:objectives="[
					'Understand the main stages in a web project from idea to launch',
					'See how planning, structure, styling, testing, and deployment connect together',
					'Recognise why website work is usually iterative rather than perfectly linear',
					'Place the Black Swan Bistro project inside the larger GraphiteEdge learning journey'
				]"
				purpose="Beginners often learn HTML, CSS, JavaScript, and deployment as separate topics. This lesson connects them into one practical process so each future lesson feels like part of a bigger system rather than a disconnected skill."
			/>

			<h2 id="big-picture">The Big Picture</h2>
			<p>
				A website project usually begins with a simple question: what are we trying to
				make, and who is it for? Everything that follows grows out of that. The design,
				the code, the content, and the hosting all support the same job.
			</p>
			<p>
				That means a good web workflow is not just about writing code. It is about moving
				from rough idea to clear structure, then from structure to layout, then from
				layout to a tested live website.
			</p>

			<div class="box">
				<pre><code>Idea
  ↓
Plan
  ↓
Structure
  ↓
Layout and Styling
  ↓
Content and Media
  ↓
Testing and Fixing
  ↓
Deployment
  ↓
Maintenance and Improvement</code></pre>
			</div>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-idea-to-live-website-roadmap-staged-journey.svg"
					alt="Horizontal roadmap showing the stages from idea and planning through structure, layout, content, testing, deployment, and maintenance."
				/>
				<figcaption>
					This roadmap turns the website journey into a clear sequence. The job is not to
					solve everything at once, but to move from one layer of the project to the next
					in a sensible order.
				</figcaption>
			</figure>

			<h2 id="stages">The Main Stages</h2>
			<h3>1. Start with the idea</h3>
			<p>
				At the beginning, you are deciding what kind of site you need. Is it a portfolio,
				restaurant site, business homepage, blog, or booking site? What does the visitor
				need to understand or do?
			</p>

			<h3>2. Plan the content and sections</h3>
			<p>
				Before styling anything, it helps to list the key sections and content. A simple
				homepage might need a header, hero, services, contact details, and footer. This is
				the stage where structure starts to become visible.
			</p>

			<h3>3. Build the HTML structure</h3>
			<p>
				HTML gives the page meaning. It creates headings, paragraphs, links, images,
				navigation, and page regions. A page with good HTML may not look finished yet, but
				it already has a useful skeleton.
			</p>

			<h3>4. Add layout and styling with CSS</h3>
			<p>
				CSS turns structure into layout. It controls width, spacing, alignment, colour,
				and repeated visual patterns. This is where the page becomes easier to scan and
				feel more intentional.
			</p>

			<h3>5. Refine repeated patterns</h3>
			<p>
				Once a page starts to take shape, you begin to notice repetition. Cards, buttons,
				navigation, and footers often repeat. That is when reuse becomes important.
			</p>

			<h3>6. Test and fix</h3>
			<p>
				Before a site goes live, you check the basics: does it work on smaller screens, do
				links work, is the text readable, are the images sensible, and does the layout
				break anywhere?
			</p>

			<h3>7. Publish and maintain</h3>
			<p>
				A live site is not the end of the journey. Websites need updates, improvements,
				and occasional fixes. Launching a site is really the start of caring for it.
			</p>

			<h2 id="black-swan-example">The Black Swan Bistro Example</h2>
			<p>
				GraphiteEdge uses Black Swan Bistro to show how one project grows over time instead
				of appearing fully formed.
			</p>
			<ul>
				<li>Part 1 focuses on semantic HTML structure.</li>
				<li>Part 2 focuses on a homepage wireframe layout with CSS.</li>
				<li>Part 3 focuses on repeated patterns and reusable components.</li>
				<li>Part 4 focuses on expanding the project into a multi-page site.</li>
				<li>Later parts focus on deployment, launch decisions, and long-term improvement.</li>
			</ul>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-idea-to-live-website-black-swan-pathway-progression.svg"
					alt="Progression diagram showing Black Swan Bistro parts mapped to structure, wireframe layout, repeated patterns, multi-page structure, deployment, and ongoing site care."
				/>
				<figcaption>
					Black Swan Bistro is useful because it grows the same way a real site grows.
					Each part handles one layer of the project instead of pretending the whole site
					arrives finished on day one.
				</figcaption>
			</figure>

			<div class="notification is-info is-light">
				<p><strong>Why this matters:</strong> students often think they are “behind” if their page does not look finished early. In reality, a good project becomes clearer one layer at a time.</p>
			</div>

			<h2 id="mistakes">Common Mistakes Beginners Make</h2>
			<ul>
				<li>Trying to design, code, and publish everything at once</li>
				<li>Worrying about polished visuals before the content structure is clear</li>
				<li>Skipping testing and only checking the site on one screen size</li>
				<li>Thinking a live site is “done forever” instead of something that needs care</li>
			</ul>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-idea-to-live-website-build-order-comparison.svg"
					alt="Two-panel comparison showing a rushed workflow that jumps between design, code, and launch versus a layered workflow that moves through planning, structure, layout, testing, and deployment."
				/>
				<figcaption>
					Most beginner frustration is really a build-order problem. A layered workflow
					reduces rework because each stage gives the next one something stable to build
					on.
				</figcaption>
			</figure>

			<p>
				You do not avoid these mistakes by being perfect. You avoid them by working in a
				clear order and checking your decisions as you go.
			</p>

			<h2 id="additional-resources">Additional Resources</h2>
			<p>
				If you want a wider mental model for homepage purpose and what users expect from a
				front page, these resources are useful next steps:
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
					&mdash; a practical guide to what homepages need to communicate clearly.
				</li>
				<li>
					<a
						href="https://atomicdesign.bradfrost.com/chapter-2"
						target="_blank"
						rel="noopener"
					>
						Atomic Design by Brad Frost
					</a>
					&mdash; useful later when you start thinking about how small interface pieces
					grow into larger page systems.
				</li>
			</ul>

			<h2 id="recap">Recap</h2>
			<p>
				The journey from idea to live website is not one magical leap. It is a series of
				smaller, understandable stages. That is exactly how GraphiteEdge teaches web
				development: first understand the map, then learn each stage well.
			</p>

			<ClosureSection
				title="Lesson Complete: You Have the Map"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="In the project tutorials, you will start moving through this journey for real. First comes structure, then layout, then reusable patterns, and eventually a live website."
			/>

			<TutorialRecommendations :current-path="'/tutorials/beginner/idea-to-live-website'" />
		</div>
	</div>
</template>
