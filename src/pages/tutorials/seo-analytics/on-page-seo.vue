<script setup>
import '@/assets/styles/tutorials.css';
import { useTutorialHead } from '@/composables/useTutorialHead';
import { usePageSections } from '@/composables/usePageSections';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

useTutorialHead({
	title: 'SEO Fundamentals: Search, Findability, and AI',
	description:
		'Learn practical on-page SEO for modern search: helpful content, metadata, headings, links, structured data, images, page experience, and AI search findability.',
	path: '/tutorials/seo-analytics/on-page-seo',
});

const sections = [
	{ id: 'what-seo-is', title: 'What SEO Is' },
	{ id: 'visibility-layers', title: 'Visibility Layers' },
	{ id: 'search-intent', title: 'Search Intent' },
	{ id: 'page-anatomy', title: 'Page Anatomy' },
	{ id: 'metadata', title: 'Metadata' },
	{ id: 'structured-data', title: 'Structured Data' },
	{ id: 'ai-search', title: 'AI Search' },
	{ id: 'images-media', title: 'Images and Media' },
	{ id: 'measure-and-improve', title: 'Measure and Improve' },
	{ id: 'checkpoint', title: 'Checkpoint' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
];

usePageSections(sections);

const anticipatoryHook = `
	<p>SEO can sound like a bag of tricks: keywords, rankings, snippets, schema, algorithms, AI Overviews, and whatever the internet is arguing about this week. That noise makes beginners feel as if search is something mysterious that happens after a website is built.</p>
	<p>A healthier way to think about SEO is findability. Can the right people find the right page, understand what it offers, and trust it enough to continue? Can search systems crawl it, interpret it, and show it in useful ways?</p>
	<p>This lesson focuses on the fundamentals that still matter in modern search, including AI-shaped search experiences: helpful content, clear structure, metadata, links, images, page experience, and structured data that matches what users can actually see.</p>
`;

const checkpointQuestions = [
	{
		question: 'Why is SEO better understood as findability rather than ranking tricks?',
		answer:
			'Findability keeps the focus on helping the right person reach the right page for the right reason. Ranking tricks often lead to shallow content, confusing structure, or decisions made for algorithms instead of users.',
	},
	{
		question: 'What should be true before structured data is added to a page?',
		answer:
			'The information in the structured data should also be visible and accurate on the page. Structured data should clarify real content, not invent information that users cannot see.',
	},
	{
		question: 'How does AI search change SEO priorities?',
		answer:
			'AI search increases the value of clear, original, well-structured content that can answer more specific questions. It does not remove the need for crawlable pages, useful headings, trustworthy content, media, metadata, and good page experience.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Choose one page and one search need',
		instructions:
			'<p>Choose a page from a project you have built, such as the Black Swan Bistro homepage, menu page, or contact page. Write the main search need in one sentence.</p><p>Example: <code>A local customer wants to find the restaurant menu before deciding whether to book.</code></p>',
		hints: [
			'Do not start with a keyword list. Start with the person and the task.',
			'If the page tries to answer too many unrelated needs, choose the most important one.',
		],
	},
	{
		title: 'Step 2: Audit the visible structure',
		instructions:
			'<p>Check the page title, H1, H2 headings, opening paragraph, image alt text, and internal links. Ask whether a person can understand the page purpose in the first few seconds.</p><p>Record one improvement that would make the page clearer.</p>',
		hints: [
			'The H1 should describe the page, not just repeat the brand name.',
			'Internal links should help users move to the next useful page, not just decorate the footer.',
		],
	},
	{
		title: 'Step 3: Write a title tag and meta description',
		instructions:
			'<p>Draft a title tag and meta description that set clear expectations. Keep the title specific and the description useful.</p><pre><code>Title: Black Swan Bistro Menu | Seasonal Dining in Fremantle\nDescription: Explore Black Swan Bistro&apos;s seasonal menu, dietary options, and booking details before your visit.</code></pre>',
		hints: [
			'Search systems may rewrite snippets, but clear metadata still helps describe page intent.',
			'Avoid stuffing the same phrase repeatedly. Sound like a helpful page, not a label machine.',
		],
	},
	{
		title: 'Step 4: Add one AI-era findability improvement',
		instructions:
			'<p>Improve the page so it answers a more specific user question. Add a short FAQ, a comparison table, a clear summary, or a descriptive image with useful alt text.</p><p>The aim is to make the page easier for both people and search systems to understand.</p>',
		hints: [
			'Specific questions are common in AI-shaped search experiences.',
			'Do not add content just to be longer. Add content because it helps a real user make progress.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You defined a real search need before editing the page',
	'You checked visible structure before metadata or schema',
	'You wrote metadata that accurately describes the page',
	'You added one improvement that helps specific user questions',
];

const independentPracticeRubric = [
	{
		criteria: 'User intent',
		success:
			'The learner can explain who the page is for and what question or task it helps with.',
	},
	{
		criteria: 'Page structure',
		success:
			'The page has a clear title, H1, section headings, useful body content, and meaningful internal links.',
	},
	{
		criteria: 'Modern findability',
		success:
			'The page includes original explanation, specific answers, media or examples where useful, and no AI-generated filler.',
	},
	{
		criteria: 'Technical clarity',
		success:
			'Metadata, images, and any structured data match the visible page content and can be validated.',
	},
];

const closureKeyTakeaways = [
	'SEO is the practice of making useful pages easier to find, understand, and trust.',
	'Technical access matters first: search systems need crawlable, indexable pages that return a successful response.',
	'On-page SEO starts with visible structure: titles, headings, body content, links, images, and page purpose.',
	'Structured data helps search systems interpret content, but it must match what users can see.',
	'AI search makes original, specific, well-structured content more important, not less important.',
	'AI can help with research and drafting, but it should not replace expertise, evidence, or human review.',
];

const closureObjectives = [
	'Explain SEO as findability rather than ranking tricks',
	'Identify the main visibility layers of a search-friendly page',
	'Improve title tags, meta descriptions, headings, image alt text, and internal links',
	'Explain how structured data supports search understanding',
	'Describe how AI search affects content quality, specificity, and measurement',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-magnifying-glass',
		title: 'Findability',
		questions: [
			'Which page on your site has the clearest purpose right now?',
			'Which page would be hardest for a search engine or AI assistant to understand, and why?',
		],
	},
	{
		icon: 'fas fa-user-check',
		title: 'People First',
		questions: [
			'Where could your page show more first-hand knowledge, clearer examples, or better sourcing?',
			'What would you remove if it only exists for search engines and not for readers?',
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
						<a href="#" aria-current="page">SEO Fundamentals</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-warning">Advanced</span>
					<span class="tag is-light">45 min</span>
					<span class="tag is-light">SEO</span>
					<span class="tag is-light">AI Search</span>
				</div>
			</div>

			<h1 class="title is-1">SEO Fundamentals: Search, Findability, and AI</h1>

			<p class="subtitle is-5">
				Learn how helpful content, clear structure, metadata, schema, media, and AI-aware
				findability work together in modern search.
			</p>

			<AnticipatorySet
				title="SEO Is Findability, Not Magic"
				icon="fas fa-magnifying-glass"
				:hook="anticipatoryHook"
				:reflection-prompts="[
					'When you search for a local business, tutorial, recipe, or product, what makes you trust one result over another?',
					'Have you ever opened a search result that technically matched your query but did not actually help?',
					'What should AI search make easier for users, and what could it make harder for website owners?'
				]"
				connection="This lesson follows validation and pre-launch QA because search visibility depends on the same foundations: clear structure, working pages, useful content, accessibility, performance, and trust."
			/>

			<LearningObjectives
				:objectives="[
					'Explain SEO as findability rather than ranking tricks',
					'Identify the technical and content layers that support search visibility',
					'Write useful title tags, meta descriptions, headings, image alt text, and internal links',
					'Understand how structured data helps search systems interpret a page',
					'Describe how AI search affects content quality, specificity, media, and measurement'
				]"
				purpose="SEO is not a separate afterthought. It is part of designing a page so people and search systems can understand what the page is for, why it is useful, and when it should be shown."
				:prerequisites="[
					{ topic: 'Test and Validate Your Site', link: '/tutorials/intermediate/test-and-validate-your-site' },
					{ topic: 'HTML Document Structure', link: '/tutorials/beginner/html-basics/html-doc-structure' },
					{ topic: 'Working with Images', link: '/tutorials/beginner/html-basics/html-images' }
				]"
			/>

			<h2 id="what-seo-is" class="title is-3">What SEO Actually Is</h2>
			<p>
				Search engine optimization is the practice of helping search systems discover,
				understand, and present useful pages. That does not mean writing for robots instead
				of people. A search-friendly page should also be a reader-friendly page: clear,
				specific, accessible, trustworthy, and easy to use.
			</p>
			<p>
				Google's current Search guidance continues to emphasize helpful, reliable,
				people-first content. That matters even more now that search includes classic
				results, rich results, image and video surfaces, AI Overviews, AI Mode, and
				follow-up style queries.
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Important:</strong> SEO can help search systems better discover and
					understand good content. It cannot rescue a page that has no clear purpose,
					no useful answer, or no reason for a reader to trust it.
				</p>
			</div>

			<h2 id="visibility-layers" class="title is-3">The Layers of Search Visibility</h2>
			<p>
				Search visibility is not one setting. It is a stack of decisions. If the page is
				blocked from crawling, the best title tag in the world will not help. If the page
				is crawlable but thin, confusing, or unpleasant to use, metadata alone will not make
				it satisfying.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-seo-search-visibility-layers.svg"
					alt="Layered diagram showing crawlability, page meaning, helpful content, page experience, and search presentation supporting findability."
				/>
				<figcaption>
					SEO works best when the foundations line up: access, meaning, usefulness,
					experience, and a search result that sets the right expectation.
				</figcaption>
			</figure>

			<p>
				For most beginner and small-business sites, the practical checklist is simple:
			</p>
			<ul>
				<li>the page loads successfully and is not accidentally hidden from search</li>
				<li>the title, headings, and opening content describe the page clearly</li>
				<li>the content answers a real user need with enough detail to be useful</li>
				<li>images, links, and navigation support the page purpose</li>
				<li>the page works well on mobile and is not cluttered or slow</li>
			</ul>

			<h2 id="search-intent" class="title is-3">Start with Search Intent</h2>
			<p>
				Search intent means the reason behind a search. Someone searching
				<code>black swan bistro menu</code> probably wants dishes, prices, dietary
				options, opening hours, or booking information. Someone searching
				<code>how to add schema to a website</code> wants an explanation and steps.
			</p>
			<p>
				Good SEO starts by matching the page to a need. Before writing metadata or adding
				schema, ask:
			</p>
			<ul>
				<li>Who is this page for?</li>
				<li>What question, decision, or task should it help with?</li>
				<li>What would make the page more useful than a generic answer?</li>
				<li>What should the person do next after reading?</li>
			</ul>

			<h2 id="page-anatomy" class="title is-3">The Anatomy of an SEO-Friendly Page</h2>
			<p>
				On-page SEO is mostly visible. Search systems use page titles and metadata, but
				they also rely on the actual content: headings, body text, links, images, captions,
				lists, examples, and structured relationships.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-seo-page-anatomy.svg"
					alt="Annotated web page showing title tag, meta description, heading hierarchy, helpful content, image alt text, internal links, and JSON-LD schema."
				/>
				<figcaption>
					Metadata helps, but the visible page has to carry the meaning. A strong page is
					easy to interpret before schema is added.
				</figcaption>
			</figure>

			<div class="box">
				<h3 class="title is-5">Common on-page SEO elements</h3>
				<ul>
					<li><strong>Title tag:</strong> the concise title used by browsers and often search results</li>
					<li><strong>Meta description:</strong> a short summary that can help shape snippets</li>
					<li><strong>H1:</strong> the visible main heading that describes the page topic</li>
					<li><strong>Section headings:</strong> a scannable outline of the page</li>
					<li><strong>Internal links:</strong> pathways to related pages and next steps</li>
					<li><strong>Image alt text:</strong> text alternatives and image meaning when relevant</li>
					<li><strong>Structured data:</strong> machine-readable labels for specific page types</li>
				</ul>
			</div>

			<h2 id="metadata" class="title is-3">Title Tags and Meta Descriptions</h2>
			<p>
				A title tag should describe the page specifically. It should usually include the
				page topic and, when useful, the brand or site name. A meta description should
				explain what the page offers in plain language. Search engines may rewrite visible
				snippets, but good metadata still helps define the page.
			</p>

			<pre><code>&lt;title&gt;Black Swan Bistro Menu | Seasonal Dining in Fremantle&lt;/title&gt;
&lt;meta
  name="description"
  content="Explore Black Swan Bistro's seasonal menu, dietary options, and booking details before your visit."
&gt;</code></pre>

			<p>
				Avoid stuffing the same phrase repeatedly. Repetition can make a result look less
				trustworthy, and it often makes the page worse for humans too.
			</p>

			<h2 id="structured-data" class="title is-3">Structured Data and Schema</h2>
			<p>
				Structured data is code that gives search systems explicit clues about the meaning
				of a page. For example, it can label a page as an article, local business, recipe,
				event, FAQ, product, or breadcrumb trail, depending on what is actually present.
			</p>
			<p>
				For many sites, JSON-LD is the easiest format to maintain. The important rule is
				that structured data should describe visible page content. Do not add schema for
				information that users cannot find on the page.
			</p>

			<pre><code>&lt;script type="application/ld+json"&gt;
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Black Swan Bistro",
  "servesCuisine": "Modern Australian",
  "url": "https://example.com",
  "menu": "https://example.com/menu"
}
&lt;/script&gt;</code></pre>

			<div class="notification is-warning is-light">
				<p>
					<strong>Schema is not a shortcut:</strong> valid structured data can make a page
					eligible for richer search features, but it does not guarantee a special result
					and it should never contradict the visible page.
				</p>
			</div>

			<h2 id="ai-search" class="title is-3">AI Search, Searchability, and Findability</h2>
			<p>
				AI search experiences change how people ask questions. Queries are often longer,
				more specific, more conversational, and sometimes multimodal. A person might ask
				for a comparison, upload an image, continue with a follow-up question, or expect
				a direct explanation with links to useful sources.
			</p>
			<p>
				This does not mean you need a separate trick called AI SEO. Current Google guidance
				says the same SEO foundations remain relevant for AI features. What changes is the
				pressure on quality: vague, copied, generic, or mass-produced content is easier to
				ignore when users can ask more precise questions.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-seo-ai-search-findability.svg"
					alt="Diagram showing classic search and AI search both depending on useful, crawlable, well-structured web pages."
				/>
				<figcaption>
					AI changes the search interface, but the page still needs to be useful,
					accessible, specific, and understandable enough to be worth showing and visiting.
				</figcaption>
			</figure>

			<p>
				To make pages more findable in an AI-shaped search landscape:
			</p>
			<ul>
				<li>answer real, specific questions instead of writing broad filler</li>
				<li>show first-hand knowledge, examples, process, evidence, or local context</li>
				<li>use headings that make the page easy to scan and cite</li>
				<li>include useful images or video when the topic benefits from visual evidence</li>
				<li>keep business details, author information, dates, and page purpose clear</li>
				<li>review AI-assisted content carefully so it is accurate, original, and useful</li>
			</ul>

			<div class="notification is-info is-light">
				<p>
					<strong>Using AI responsibly:</strong> AI can help brainstorm questions, draft
					outlines, summarize research, or check clarity. It should not invent expertise,
					copy other sources, publish unchecked facts, or create lots of shallow pages
					just to chase search traffic.
				</p>
			</div>

			<h2 id="images-media" class="title is-3">Images, Video, and Multimodal Search</h2>
			<p>
				Modern search is not only text. Images, videos, maps, product data, business
				profiles, and visual search all affect how people find and evaluate information.
				For a website owner, this means media should be useful, not decorative filler.
			</p>
			<p>
				Use descriptive filenames where practical, compress images properly, include
				meaningful alt text, and place images near the content they support. If the image
				shows a product, place, diagram, process, or result, make that meaning visible in
				the surrounding text too.
			</p>

			<h2 id="measure-and-improve" class="title is-3">Measure and Improve</h2>
			<p>
				SEO is not finished when the page is published. Use Search Console to check whether
				Google can find and index the page, what queries surface it, and whether structured
				data has validation issues. Use analytics to understand whether visitors actually
				do something useful after they arrive.
			</p>
			<p>
				In an AI search landscape, clicks may not tell the whole story. Some visits may be
				more informed because the search experience gave users more context before they
				arrived. Track meaningful outcomes such as enquiries, bookings, signups, time on
				useful pages, or successful information lookups, not only raw traffic.
			</p>

			<CheckpointBox
				id="checkpoint"
				title="Checkpoint: Can You Spot Search-Friendly Thinking?"
				:questions="checkpointQuestions"
			/>

			<GuidedPractice
				id="guided-practice"
				title="Guided Practice: Improve One Page for Findability"
				icon="fas fa-search-plus"
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
			/>

			<IndependentPractice
				id="independent-practice"
				title="Independent Practice: SEO and AI Findability Audit"
				icon="fas fa-clipboard-check"
				task="<p>Choose one page from your own project. Create a short SEO audit that explains the page purpose, the likely search need, the visible structure, the metadata, image/media support, internal links, and one AI-era findability improvement.</p>"
				:requirements="[
					'Name the primary user and search need',
					'Review the title tag, meta description, H1, H2 headings, and opening content',
					'Check image alt text and at least one internal link',
					'Decide whether structured data would genuinely describe visible content',
					'Add one improvement that helps a specific question, comparison, local detail, example, or next step'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="recap" class="title is-3">Recap</h2>
			<p>
				SEO is not a trick layer added after the site is done. It is the combined effect
				of clear purpose, useful content, accessible structure, technical availability,
				metadata, media, links, page experience, and honest signals of trust.
			</p>
			<p>
				AI search does not make those foundations obsolete. It makes weak pages easier to
				outgrow and strong pages more valuable: specific answers, real examples, visible
				expertise, clear structure, useful media, and content that deserves to be found.
			</p>

			<ClosureSection
				id="closure"
				title="Build Pages Worth Finding"
				:summary="`<p>The best SEO habit is to build pages that deserve the search result they want. A clear page helps users, search engines, and AI-shaped search experiences understand what the page is, who it is for, and why it matters.</p><p>Use AI as an assistant for research, outlines, and clarity checks, but keep responsibility with the human builder. The final page should show real judgement, accurate information, and a useful path forward.</p>`"
				:key-takeaways="closureKeyTakeaways"
				:objectives-met="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
			/>

			<div id="recommendations">
				<TutorialRecommendations :current-path="'/tutorials/seo-analytics/on-page-seo'" />
			</div>
		</div>
	</div>
</template>
