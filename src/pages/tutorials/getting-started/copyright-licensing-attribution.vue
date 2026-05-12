<template>
	<div class="container section">
		<div class="tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/"
							><i class="fa-solid fa-house mr-2"></i> Home</router-link
						>
					</li>
					<li>
						<router-link to="/tutorials">Tutorials</router-link>
					</li>
					<li>
						<router-link :to="'/tutorials/getting-started/'"
							>Getting Started</router-link
						>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page"
							>Copyright, Licensing, and Attribution</a
						>
					</li>
				</ul>
			</nav>

			<div class="tags mb-4">
				<span class="tag is-info">Beginner</span>
				<span class="tag is-light">30 mins</span>
				<span class="tag is-success">Responsible Web</span>
				<span class="tag is-light">Creative Commons</span>
			</div>

			<h1 class="title is-1">Copyright, Licensing, and Attribution</h1>

			<AnticipatorySet
				title="Can I Use This?"
				icon="⚖️"
				:hook="`<p>You are building your first website and find the perfect photo, icon, song clip, and paragraph of text online. It is easy to copy them into your project. The harder question is whether you are allowed to.</p><p>Good web developers do not just ask, &quot;Can I make this work?&quot; They also ask, &quot;Do I have permission, and have I credited the creator properly?&quot;</p>`"
				:reflection-prompts="[
					'Have you ever saved an image from Google Images without checking where it came from?',
					'What would you want someone else to do if they used your photo, drawing, article, or code?',
					'Where would you look if the client, audience, or country changed?'
				]"
				connection="This lesson gives you a practical decision process, not legal advice. For high-risk or commercial work, check official sources or ask a qualified professional."
			/>

			<LearningObjectives
				:objectives="[
					'Explain what copyright protects and why it matters on websites',
					'Describe the key Australian copyright ideas beginners should know',
					'Recognise common Creative Commons licence conditions',
					'Write a useful attribution for images, text, code, and media',
					'Know where to look for copyright guidance in Australia, the US, Europe, and other countries'
				]"
				purpose="Most beginner websites use other people&apos;s images, icons, fonts, text, videos, or code examples. Understanding copyright and attribution helps you build ethically, avoid preventable risk, and respect the people who made the materials you learn from."
			/>

			<div class="notification is-warning is-light">
				<p>
					<strong>Important:</strong> This tutorial is general education for web
					learners. Copyright law changes by country, situation, and use case. It
					is not legal advice.
				</p>
			</div>

			<h2 id="why-copyright-matters" class="title is-3">
				Why copyright matters on the web
			</h2>
			<p>
				Websites are made of creative material: writing, photographs,
				illustrations, diagrams, code, video, music, icons, and layouts. Copyright
				is one of the systems that controls who can copy, publish, adapt, or share
				those materials.
			</p>
			<p>
				The big beginner mistake is assuming that “online” means “free to use”.
				A file can be easy to download and still be protected by copyright. Before
				you add outside material to a website, slow down and check the permission.
			</p>

			<figure class="permission-flow" aria-labelledby="permission-flow-title">
				<figcaption id="permission-flow-title" class="has-text-weight-semibold">
					A practical “can I use this?” decision flow
				</figcaption>
				<div class="permission-steps">
					<div class="permission-step">
						<span class="step-number">1</span>
						<h3>Who made it?</h3>
						<p>Find the creator, publisher, source page, and original context.</p>
					</div>
					<div class="permission-step">
						<span class="step-number">2</span>
						<h3>What licence applies?</h3>
						<p>Look for terms of use, a Creative Commons licence, or written permission.</p>
					</div>
					<div class="permission-step">
						<span class="step-number">3</span>
						<h3>Does my use fit?</h3>
						<p>Check commercial use, editing, sharing, education, and country rules.</p>
					</div>
					<div class="permission-step">
						<span class="step-number">4</span>
						<h3>How do I credit it?</h3>
						<p>Record the title, creator, source link, licence, and any changes.</p>
					</div>
				</div>
			</figure>

			<div class="columns is-multiline">
				<div class="column is-half">
					<div class="box safe-card">
						<h3 class="title is-5">Usually safer starting points</h3>
						<ul>
							<li>Work you created yourself</li>
							<li>Material with clear written permission</li>
							<li>Material under a licence that allows your planned use</li>
							<li>Public domain material, if you have checked the source</li>
						</ul>
					</div>
				</div>
				<div class="column is-half">
					<div class="box caution-card">
						<h3 class="title is-5">Stop and check carefully</h3>
						<ul>
							<li>Images copied from search results or social media</li>
							<li>“Free” stock assets with unclear terms</li>
							<li>Music, video, logos, maps, characters, or brand material</li>
							<li>Anything for a client, business, advertisement, or product</li>
						</ul>
					</div>
				</div>
			</div>

			<h2 id="australian-copyright-basics" class="title is-3">
				Australian copyright basics
			</h2>
			<p>
				In Australia, copyright is governed mainly by the
				<em>Copyright Act 1968</em>. The Attorney-General’s Department explains
				that copyright protects original expression in forms such as writing,
				visual images, music, moving images, software code, films, broadcasts,
				and sound recordings.
			</p>
			<p>
				For beginners, the most useful Australian ideas are:
			</p>
			<ul>
				<li>
					<strong>Protection is automatic:</strong> copyright protection is free
					and automatic in Australia. There is no official copyright registration
					system for ordinary protection.
				</li>
				<li>
					<strong>Ideas are different from expression:</strong> copyright does not
					protect a general idea by itself, but it can protect the way that idea is
					written, drawn, photographed, coded, filmed, or recorded.
				</li>
				<li>
					<strong>Creators have economic rights:</strong> owners generally control
					acts such as copying, publishing, communicating, and publicly performing
					their material.
				</li>
				<li>
					<strong>Moral rights matter:</strong> Australian law recognises rights
					such as attribution, protection against false attribution, and integrity
					of authorship.
				</li>
				<li>
					<strong>Exceptions are specific:</strong> Australia has fair dealing
					exceptions for certain purposes, but “I found it online” or “I am
					learning” is not automatically enough.
				</li>
			</ul>

			<div class="box source-note">
				<h3 class="title is-5">Australian learner habit</h3>
				<p>
					If you are unsure, start with the official Attorney-General’s Department
					pages for copyright basics, copyright owners, and copyright users. Then
					record the source and the rule you relied on in your project notes.
				</p>
			</div>

			<CheckpointBox
				title="Pause & Check: Permission Before Copying"
				description="Before you use outside content, can you answer these?"
				:questions="copyrightCheckpointQuestions"
			/>

			<h2 id="creative-commons" class="title is-3">
				Creative Commons licences
			</h2>
			<p>
				Creative Commons licences are standard public licences creators can use
				when they want to let other people share or reuse their work under clear
				conditions. They are useful for learning projects because they make the
				permission visible.
			</p>
			<p>
				Do not stop at the words “Creative Commons”. Check which licence applies.
				The conditions change what you can do.
			</p>

			<div class="license-grid">
				<div class="license-card">
					<h3>BY</h3>
					<p>Attribution. Give appropriate credit to the creator.</p>
				</div>
				<div class="license-card">
					<h3>SA</h3>
					<p>ShareAlike. Share adapted work under the same licence terms.</p>
				</div>
				<div class="license-card">
					<h3>NC</h3>
					<p>NonCommercial. Do not use it for commercial purposes without permission.</p>
				</div>
				<div class="license-card">
					<h3>ND</h3>
					<p>NoDerivatives. Do not share edited or remixed versions.</p>
				</div>
				<div class="license-card">
					<h3>CC0</h3>
					<p>A public-domain dedication. Attribution may not be required, but it is still good scholarly practice.</p>
				</div>
			</div>

			<h2 id="attribution-recipe" class="title is-3">
				A simple attribution recipe
			</h2>
			<p>
				A useful attribution answers four questions: what is it, who made it,
				where did it come from, and what licence lets you use it? Many people
				remember this as <strong>TASL</strong>: Title, Author, Source, Licence.
			</p>

			<div class="box attribution-example">
				<h3 class="title is-5">Suggested attribution format</h3>
				<pre><code>&lt;figure&gt;
  &lt;img src="images/coral-reef.jpg" alt="Colourful coral reef with small fish"&gt;
  &lt;figcaption&gt;
    "Coral Reef" by Maya Chen, via Example Archive,
    licensed under CC BY 4.0. Cropped for layout.
  &lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
			</div>

			<div class="attribution-parts">
				<div>
					<h3>Title</h3>
					<p>Name the work if a title is provided.</p>
				</div>
				<div>
					<h3>Author</h3>
					<p>Name the creator or rights holder as requested.</p>
				</div>
				<div>
					<h3>Source</h3>
					<p>Link to the original page, not just the downloaded file.</p>
				</div>
				<div>
					<h3>Licence</h3>
					<p>Name and link the licence, and mention changes you made.</p>
				</div>
			</div>

			<h2 id="finding-licensed-material" class="title is-3">
				Finding licensed material
			</h2>
			<p>
				When you need practice assets, use sources that make rights and licence
				terms easy to inspect. Good places to start include Creative Commons
				search tools, Wikimedia Commons, museum or government collections with
				open-licence filters, and stock sites with clear licence pages.
			</p>
			<p>
				Even then, check the page for the actual asset. Sites can contain a mix
				of licences, and the licence might limit commercial use, editing,
				redistribution, or attribution style.
			</p>

			<h2 id="image-libraries-and-archives" class="title is-3">
				Image libraries and archives to try
			</h2>
			<p>
				There are many good places to find images for learning projects. The
				trick is to know what kind of permission each site offers. Some sites use
				their own free-use licence. Some host Creative Commons material. Some
				hold public-domain or “no known copyright restrictions” archive images.
			</p>
			<p>
				That is why “copyright-free” is not always the best phrase. A safer habit
				is to ask: <strong>what licence or rights statement applies to this exact
				image?</strong>
			</p>

			<div class="source-grid">
				<div class="box source-card">
					<h3 class="title is-5">Modern stock-style images</h3>
					<ul>
						<li>
							<strong>Unsplash:</strong> free-use photography under the
							Unsplash licence. Attribution is appreciated, even when not
							required.
						</li>
						<li>
							<strong>Pexels:</strong> free photos and videos under the Pexels
							licence. Check limits around identifiable people, brands, and
							reselling unaltered copies.
						</li>
					</ul>
				</div>

				<div class="box source-card">
					<h3 class="title is-5">Open licence search</h3>
					<ul>
						<li>
							<strong>Openverse:</strong> searches Creative Commons and
							public-domain works, but still tells users to verify the licence.
						</li>
						<li>
							<strong>Wikimedia Commons:</strong> hosts reusable media with
							different licence requirements. Read each file page carefully.
						</li>
					</ul>
				</div>

				<div class="box source-card">
					<h3 class="title is-5">Archives and public-domain collections</h3>
					<ul>
						<li>
							<strong>Library of Congress:</strong> “Free to Use and Reuse” sets
							of rights-free historical images.
						</li>
						<li>
							<strong>Smithsonian Open Access:</strong> millions of collection
							items available for reuse through its open access program.
						</li>
						<li>
							<strong>NASA:</strong> image and media resources are often usable
							for educational or informational purposes, but NASA logos,
							identifiable people, endorsements, and third-party material need
							care.
						</li>
						<li>
							<strong>Trove and the National Library of Australia:</strong>
							useful Australian collections, with item-level copyright status
							and reuse notes.
						</li>
					</ul>
				</div>
			</div>

			<div class="box source-note">
				<h3 class="title is-5">A good image-source checklist</h3>
				<ul>
					<li>Read the licence or rights statement on the original item page.</li>
					<li>Check whether attribution is required or simply appreciated.</li>
					<li>Check whether commercial use, editing, or redistribution is allowed.</li>
					<li>Watch for people, brands, artworks, buildings, or cultural material shown inside the image.</li>
					<li>Keep the source URL and licence note in your project documentation.</li>
				</ul>
			</div>

			<h2 id="checking-image-search-results" class="title is-3">
				Checking image search results
			</h2>
			<p>
				Search engines can help you narrow your image search, but they do not
				give final permission. Treat image search licence filters as a
				<strong>shortlist tool</strong>: useful for finding possible images, not
				enough to prove that you can publish one.
			</p>

			<div class="search-check-grid">
				<div class="box search-engine-card">
					<h3 class="title is-5">
						<i class="fa-brands fa-google mr-2"></i>Google Images
					</h3>
					<ol>
						<li>Go to <strong>images.google.com</strong> and search for the image you need.</li>
						<li>Choose <strong>Tools</strong>, then <strong>Usage rights</strong>.</li>
						<li>Select a licence filter such as Creative Commons licences or commercial licences.</li>
						<li>Open the image result and follow <strong>License details</strong>.</li>
						<li>Confirm the licence on both the licence provider page and the original host page.</li>
					</ol>
				</div>

				<div class="box search-engine-card">
					<h3 class="title is-5">DuckDuckGo Images</h3>
					<ol>
						<li>Search in DuckDuckGo, then switch to the <strong>Images</strong> tab.</li>
						<li>Open the <strong>License</strong> filter.</li>
						<li>Choose the reuse type that matches your project.</li>
						<li>Click through to the original website.</li>
						<li>Check the actual licence, restrictions, and attribution requirements before using it.</li>
					</ol>
				</div>

				<div class="box search-engine-card">
					<h3 class="title is-5">
						<i class="fa-brands fa-microsoft mr-2"></i>Bing Images
					</h3>
					<ol>
						<li>Search in Bing Images.</li>
						<li>Use the <strong>License</strong> filter.</li>
						<li>Pick the option that matches whether you need to share, use commercially, or modify.</li>
						<li>Visit the originating website for the image.</li>
						<li>Read the licence terms and Creative Commons conditions before publishing.</li>
					</ol>
				</div>
			</div>

			<div class="box warning-card">
				<h3 class="title is-5">The search filter is not the final answer</h3>
				<p>
					Google says its usage-rights filter depends on licence information
					provided by image hosts or providers. DuckDuckGo and Bing also warn
					that they cannot verify that a specific licence is correctly attached
					to an image. Your job is to click through and confirm.
				</p>
			</div>

			<div class="box attribution-example">
				<h3 class="title is-5">Suggested image-check note</h3>
				<pre><code>Image: "Coastal path at sunset"
Found via: Google Images → Tools → Usage rights → Creative Commons licences
Original source: example-museum.org/coastal-path
Creator: A. Rivera
Licence: CC BY 4.0
Checked on: 12 May 2026
Use: Cropped for a non-commercial learning project
Attribution shown: Yes, in figcaption</code></pre>
			</div>

			<div class="box practice-box">
				<h3 class="title is-4">Guided practice: asset permission audit</h3>
				<p>
					Choose one image, icon, font, or code snippet you might use in a small
					website. Create a note with these fields:
				</p>
				<ol>
					<li><strong>Asset:</strong> What is the material?</li>
					<li><strong>Creator/source:</strong> Who made it, and where is the original page?</li>
					<li><strong>Licence or permission:</strong> What terms apply?</li>
					<li><strong>Your use:</strong> Personal practice, school task, client site, or commercial project?</li>
					<li><strong>Attribution:</strong> What credit will appear on the page or in project notes?</li>
				</ol>
				<p>
					If you cannot answer those five questions, choose a different asset or
					ask for permission before publishing.
				</p>
			</div>

			<h2 id="other-countries" class="title is-3">
				Where to check other countries
			</h2>
			<p>
				Copyright is territorial, which means the details can change by country.
				International treaties create shared foundations, but national law still
				matters. If your audience, client, creator, or hosting context is outside
				Australia, check official sources for that place.
			</p>

			<div class="columns is-multiline">
				<div class="column is-one-third">
					<div class="box region-card">
						<h3 class="title is-5">United States</h3>
						<p>
							Start with the U.S. Copyright Office for copyright basics,
							registration, fair use information, and circulars.
						</p>
					</div>
				</div>
				<div class="column is-one-third">
					<div class="box region-card">
						<h3 class="title is-5">European Union</h3>
						<p>
							Start with Your Europe for practical copyright information and the
							European Commission for EU copyright law and policy.
						</p>
					</div>
				</div>
				<div class="column is-one-third">
					<div class="box region-card">
						<h3 class="title is-5">Other countries</h3>
						<p>
							Use WIPO Lex to find national copyright legislation and official IP
							material by jurisdiction.
						</p>
					</div>
				</div>
			</div>

			<CheckpointBox
				title="Pause & Check: Attribution and Country Rules"
				description="Can you make a responsible publishing decision?"
				:questions="attributionCheckpointQuestions"
			/>

			<TestYourKnowledgeSection
				tutorial-path="/tutorials/getting-started/copyright-licensing-attribution"
			/>

			<ClosureSection
				title="Lesson Complete: Build With Permission"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="<p>Next, keep this permission habit beside you as you learn about <strong>Domains, DNS, and Hosting</strong>. Publishing makes your choices public, so it is worth knowing where every asset came from.</p>"
			/>

			<TutorialRecommendations
				:current-path="'/tutorials/getting-started/copyright-licensing-attribution'"
			/>

			<TutorialCompletion
				tutorial-path="/tutorials/getting-started/copyright-licensing-attribution"
			/>
		</div>
	</div>
</template>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TestYourKnowledgeSection from '@/components/TestYourKnowledgeSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialCompletion from '@/components/TutorialCompletion.vue';

const copyrightCheckpointQuestions = [
	{
		question: 'Why is “I found it online” not enough permission to use an image?',
		answer:
			'Because online access is not the same as a licence. The image may still be protected by copyright, and the owner may control copying, publishing, adaptation, or commercial use.',
	},
	{
		question: 'What should you do if an asset has no visible licence or terms of use?',
		answer:
			'Find a clearer source, contact the rights holder for written permission, or choose a different asset with terms that match your use.',
	},
	{
		question: 'What are moral rights in the Australian copyright context?',
		answer:
			'Moral rights include attribution, protection against false attribution, and integrity of authorship. They focus on a creator’s connection to the work.',
	},
];

const attributionCheckpointQuestions = [
	{
		question: 'What does TASL stand for in attribution?',
		answer:
			'Title, Author, Source, Licence. It is a simple way to remember the key parts of a useful credit.',
	},
	{
		question: 'What extra note should you include if you crop or edit a Creative Commons image?',
		answer:
			'Indicate that changes were made, such as “cropped for layout” or “colours adjusted”.',
	},
	{
		question:
			'Where could you look if you need copyright information for a country outside Australia, the US, or Europe?',
		answer:
			'WIPO Lex is a useful starting point for finding national IP laws and copyright legislation by jurisdiction.',
	},
];

const closureKeyTakeaways = [
	'Online material is not automatically free to copy, publish, adapt, or reuse',
	'Australian copyright protection is generally automatic and includes economic and moral rights',
	'Creative Commons licences are useful, but each licence condition changes what you can do',
	'A practical attribution includes the title, author, source, licence, and changes made',
	'Copyright rules vary by country, so official national and international sources matter',
];

const closureObjectives = [
	'Explain what copyright protects and why it matters on websites',
	'Describe key Australian copyright ideas for beginner web projects',
	'Recognise common Creative Commons licence conditions',
	'Write a useful attribution for web assets',
	'Find official copyright guidance for Australia, the US, Europe, and other countries',
];

const closureReflectionPrompts = [
	{
		title: 'Project habit',
		icon: '🧾',
		questions: [
			'Which assets in your current project need a source or licence note?',
			'Where would attribution fit naturally: beside the asset, in a credits page, or in project documentation?',
		],
	},
	{
		title: 'Professional judgement',
		icon: '⚖️',
		questions: [
			'Which uses feel low risk because they are private learning exercises?',
			'Which uses become higher risk because they are public, commercial, client-facing, or brand-related?',
		],
	},
];

useTutorialHead({
	title: 'Copyright, Licensing, and Attribution',
	description:
		'Learn how copyright, Creative Commons licences, and attribution apply to beginner web projects, with Australian, US, EU, and WIPO resources.',
	path: '/tutorials/getting-started/copyright-licensing-attribution',
});

const sections = [
	{
		id: 'why-copyright-matters',
		title: 'Why copyright matters',
		subsections: [],
	},
	{
		id: 'australian-copyright-basics',
		title: 'Australian basics',
		subsections: [],
	},
	{
		id: 'creative-commons',
		title: 'Creative Commons',
		subsections: [],
	},
	{
		id: 'attribution-recipe',
		title: 'Attribution recipe',
		subsections: [],
	},
	{
		id: 'finding-licensed-material',
		title: 'Finding material',
		subsections: [],
	},
	{
		id: 'image-libraries-and-archives',
		title: 'Image sources',
		subsections: [],
	},
	{
		id: 'checking-image-search-results',
		title: 'Image search checks',
		subsections: [],
	},
	{
		id: 'other-countries',
		title: 'Other countries',
		subsections: [],
	},
];

usePageSections(sections);
</script>

<style scoped>
.permission-flow {
	background: #f8fafc;
	border: 1px solid #e5e7eb;
	border-radius: 12px;
	margin: 2rem 0;
	padding: 1.5rem;
}

.permission-flow figcaption {
	margin-bottom: 1rem;
	color: #111827;
}

.permission-steps {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.permission-step {
	background: white;
	border-radius: 10px;
	padding: 1rem;
	box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
}

.step-number {
	align-items: center;
	background: #10b981;
	border-radius: 999px;
	color: white;
	display: inline-flex;
	font-weight: 700;
	height: 2rem;
	justify-content: center;
	margin-bottom: 0.75rem;
	width: 2rem;
}

.permission-step h3,
.attribution-parts h3,
.license-card h3 {
	color: #111827;
	font-size: 1.1rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
}

.safe-card {
	border-left: 4px solid #10b981;
	background: #ecfdf5;
}

.caution-card {
	border-left: 4px solid #f59e0b;
	background: #fffbeb;
}

.source-note {
	border-left: 4px solid #3b82f6;
	background: #eff6ff;
}

.license-grid {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	margin: 1.5rem 0 2rem;
}

.license-card {
	background: #f4f7fb;
	border: 1px solid #dbeafe;
	border-radius: 10px;
	padding: 1rem;
}

.license-card h3 {
	color: #2563eb;
	font-size: 1.4rem;
}

.attribution-example {
	background: #f8fafc;
	border-left: 4px solid #10b981;
}

.attribution-example pre {
	background: #1f2937;
	border-radius: 8px;
	color: #f8fafc;
	overflow-x: auto;
	padding: 1rem;
	white-space: pre-wrap;
}

.attribution-example code {
	color: inherit;
}

.attribution-parts {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	margin: 1.5rem 0 2rem;
}

.attribution-parts > div {
	background: #eefcf7;
	border-radius: 10px;
	padding: 1rem;
}

.source-grid {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	margin: 1.5rem 0;
}

.source-card {
	background: #f8fafc;
	border-top: 4px solid #10b981;
	height: 100%;
}

.source-card li {
	margin-bottom: 0.75rem;
}

.search-check-grid {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	margin: 1.5rem 0;
}

.search-engine-card {
	border-top: 4px solid #2563eb;
	height: 100%;
}

.search-engine-card ol {
	margin-left: 1.25rem;
}

.search-engine-card li {
	margin-bottom: 0.65rem;
}

.warning-card {
	background: #fffbeb;
	border-left: 4px solid #f59e0b;
}

.practice-box {
	background: #f0fdf4;
	border-left: 4px solid #10b981;
}

.region-card {
	height: 100%;
	border-top: 4px solid #3b82f6;
}
</style>
