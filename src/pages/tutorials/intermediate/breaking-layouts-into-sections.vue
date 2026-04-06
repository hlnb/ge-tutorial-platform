<script setup>
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const sections = [
	{ id: 'why-sections', title: 'Why Sections Matter' },
	{ id: 'page-regions', title: 'Page Regions' },
	{ id: 'bsb-example', title: 'Black Swan Bistro Example' },
	{ id: 'html-skeleton', title: 'HTML Skeleton' },
	{ id: 'sections-vs-blocks', title: 'Sections vs Blocks' },
	{ id: 'before-styling', title: 'Before Styling' },
	{ id: 'additional-resources', title: 'Additional Resources' },
	{ id: 'recap', title: 'Recap' },
];

usePageSections(sections);

const closureKeyTakeaways = [
	'Sections turn a visual design into an HTML plan that is easier to build and maintain.',
	'Not every visible part of a page needs to be its own top-level section.',
	'Semantic page regions make styling, navigation, and accessibility clearer.',
	'Good section planning makes later CSS work faster and less fragile.',
];

const closureObjectives = [
	'Break a full-page design into sensible semantic regions',
	'Write a rough HTML skeleton before styling the page',
	'Distinguish between page sections and smaller repeated content blocks',
	'Prepare a page structure that supports later layout and reuse'
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-sitemap',
		title: 'Structure Choices',
		questions: [
			'Did you create too many sections the first time you tried this?',
			'Which areas of a page feel like major regions and which feel like smaller internal groups?',
		],
	},
	{
		icon: 'fas fa-code',
		title: 'Code Readiness',
		questions: [
			'How does a clear skeleton reduce confusion once you start writing HTML?',
			'What part of your page structure is likely to stay stable even if the design evolves later?',
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
						<a href="#" aria-current="page">Breaking Layouts into Sections</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">30 min</span>
					<span class="tag is-light">Layout</span>
					<span class="tag is-light">HTML</span>
				</div>
			</div>

			<h1 class="title is-1">Breaking Layouts into Sections</h1>

			<p class="subtitle is-5">
				Divide a full-page design into header, hero, content sections, and footer.
			</p>

			<AnticipatorySet
				title="Structure Before Styling"
				icon="🧱"
				:hook="`<p>Once you understand a design and its patterns, the next question is: how should this page be organised in HTML?</p><p>This is where section thinking matters. A clear page structure makes your code easier to write, style, debug, and explain to other people.</p><p>When you skip this step, layouts often become messy because the HTML never had a strong plan to begin with.</p>`"
				:reflection-prompts="[
					'Have you ever started styling a page and realised your HTML structure no longer made sense?',
					'Do you sometimes create too many divs because the page plan is not clear yet?',
					'What would make a homepage skeleton feel easier to build?'
				]"
				connection="This lesson turns layout thinking into a rough HTML plan so later CSS work has something stable to build on."
			/>

			<LearningObjectives
				:objectives="[
					'Divide a design into major page regions before styling',
					'Use semantic HTML sections in a practical way',
					'Know the difference between a full section and a repeated block inside a section',
					'Create a starter page skeleton that is ready for layout work'
				]"
				purpose="If layout thinking is the mental model, section planning is the practical bridge into code. This step makes the page buildable."
			/>

			<h2 id="why-sections">Why Sections Matter</h2>
			<p>
				A page section is a meaningful chunk of the page, not just any visible box. Good
				sectioning helps you answer questions like:
			</p>
			<ul>
				<li>What are the major parts of this page?</li>
				<li>Where does one purpose end and another begin?</li>
				<li>Which headings belong together?</li>
				<li>Which areas should be link targets from the navigation?</li>
			</ul>

			<h2 id="page-regions">Start with the Main Page Regions</h2>
			<p>
				Many pages can begin with a simple top-level structure:
			</p>
			<div class="box">
				<pre><code>&lt;body&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;main&gt;
    &lt;section&gt;...&lt;/section&gt;
    &lt;section&gt;...&lt;/section&gt;
    &lt;section&gt;...&lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;</code></pre>
			</div>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-breaking-layouts-into-sections-page-region-breakdown.svg"
					alt="Page region breakdown showing the major semantic sections of a homepage, including header, hero, featured dishes, about, menu preview, gallery, booking call to action, location and hours, and footer."
				/>
				<figcaption>
					This visual shows the page as a set of meaningful regions instead of one large
					undifferentiated layout. That is the mindset you want before you start writing a
					full HTML skeleton.
				</figcaption>
			</figure>
			<p>
				This does not finish the page for you, but it gives the design a stable frame.
			</p>

			<h2 id="bsb-example">Black Swan Bistro Example</h2>
			<p>
				If we take a homepage like Black Swan Bistro, a sensible section breakdown might
				look like this:
			</p>
			<ul>
				<li>Header with logo and navigation</li>
				<li>Hero section</li>
				<li>Featured dishes section</li>
				<li>About section</li>
				<li>Menu preview section</li>
				<li>Gallery section</li>
				<li>Booking call-to-action section</li>
				<li>Location and opening hours section</li>
				<li>Footer</li>
			</ul>

			<p>
				That is already enough to start building a semantic homepage skeleton before any
				real styling happens.
			</p>

			<h2 id="html-skeleton">Write the HTML Skeleton</h2>
			<p>
				Once you know the sections, write a rough structure with clear placeholders. It
				does not need final text yet.
			</p>
			<div class="box">
				<pre><code>&lt;body&gt;
  &lt;header&gt;
    &lt;!-- logo and nav --&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;section id="hero"&gt;
      &lt;!-- main headline and intro --&gt;
    &lt;/section&gt;

    &lt;section id="featured-dishes"&gt;
      &lt;!-- repeated dish cards --&gt;
    &lt;/section&gt;

    &lt;section id="about"&gt;
      &lt;!-- about content --&gt;
    &lt;/section&gt;

    &lt;section id="menu-preview"&gt;
      &lt;!-- repeated menu blocks --&gt;
    &lt;/section&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;!-- footer links and contact details --&gt;
  &lt;/footer&gt;
&lt;/body&gt;</code></pre>
			</div>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-breaking-layouts-into-sections-page-to-html-skeleton-map.svg"
					alt="Split diagram mapping visible page regions on the left to semantic HTML structure on the right."
				/>
				<figcaption>
					A strong HTML skeleton mirrors the visible structure of the page. That makes the
					markup easier to read and gives the CSS a clearer foundation to build on.
				</figcaption>
			</figure>

			<h2 id="sections-vs-blocks">Know the Difference Between Sections and Blocks</h2>
			<p>
				One of the easiest mistakes is turning every visible item into a top-level section.
				That usually creates messy HTML.
			</p>
			<ul>
				<li>A hero area may be a section.</li>
				<li>Each card inside that section is usually not another top-level section.</li>
				<li>A gallery may be a section.</li>
				<li>Each image tile inside the gallery is usually a smaller internal block.</li>
			</ul>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-breaking-layouts-into-sections-section-vs-block-comparison.svg"
					alt="Two-panel comparison showing a correct section containing cards and an incorrect structure where each card becomes its own top-level section."
				/>
				<figcaption>
					Use top-level sections for major purposes, not for every visible box. Internal
					cards and tiles usually belong inside a parent section rather than replacing it.
				</figcaption>
			</figure>
			<p>
				Think in layers: major purpose first, smaller content pieces second.
			</p>

			<h2 id="before-styling">What to Check Before You Start Styling</h2>
			<ul>
				<li>Does each major area of the page have a clear purpose?</li>
				<li>Do section headings make sense in order?</li>
				<li>Are repeated blocks grouped inside the right parent section?</li>
				<li>Would another developer understand the page structure by reading the HTML?</li>
			</ul>

			<div class="notification is-warning is-light">
				<p><strong>Important:</strong> if the HTML skeleton feels unclear, styling usually gets harder very quickly. It is worth slowing down here.</p>
			</div>

			<h2 id="additional-resources">Additional Resources</h2>
			<p>
				If you want more support for the ideas in this lesson, these are especially useful:
			</p>
			<ul>
				<li>
					Every Layout
					&mdash; particularly valuable for thinking about page sections as compositional
					layout structures rather than page-specific hacks.
				</li>
				<li>
					<a href="https://getbem.com" target="_blank" rel="noopener">
						BEM — Block Element Modifier
					</a>
					&mdash; helpful once you start naming the page regions and repeated blocks in a
					clear, predictable way.
				</li>
			</ul>

			<h2 id="recap">Recap</h2>
			<p>
				Breaking layouts into sections is the step that turns a design into code-ready
				structure. Once the HTML skeleton is sensible, later layout work becomes much
				easier, because your CSS is building on a page that already makes sense.
			</p>

			<ClosureSection
				title="Lesson Complete: Your Layout Can Now Become HTML"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="The next project lesson applies this thinking directly to Black Swan Bistro by turning homepage structure into a low-fidelity CSS wireframe."
			/>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/breaking-layouts-into-sections'" />
		</div>
	</div>
</template>
