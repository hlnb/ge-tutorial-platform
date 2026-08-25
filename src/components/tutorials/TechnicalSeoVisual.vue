<script setup>
import { computed } from 'vue';

const props = defineProps({
	variant: {
		type: String,
		required: true,
	},
});

const visualContent = {
	pipeline: {
		title: 'Technical search pipeline',
		alt: 'A flow from URL discovery to crawl permission, HTTP response, rendering, index decision, and search presentation, with possible failure checks between stages.',
		caption:
			'Search visibility depends on a series of hand-offs. A page can work in the browser and still fail earlier in discovery, crawling, rendering, or indexing.',
		nodes: [
			['URL known', 35, 55],
			['Crawl allowed', 175, 55],
			['HTTP response', 335, 55],
			['Render', 505, 55],
			['Index choice', 635, 55],
			['Result', 805, 55],
		],
		note: 'First classify the symptom, then choose the test.',
	},
	'site-graph': {
		title: 'Connected architecture',
		alt: 'A connected site graph showing home linking to menu, booking, dietary information, and contact, with one orphan page outside the graph.',
		caption:
			'Important pages need real internal links. A sitemap can help discovery, but it should not be the only path to useful content.',
		nodes: [
			['Home', 70, 45],
			['Menu', 250, 30],
			['Dietary', 440, 30],
			['Booking', 250, 125],
			['Contact', 440, 125],
			['Orphan page', 720, 80],
		],
		note: 'A crawler should be able to follow meaningful links through the site.',
	},
	directives: {
		title: 'Crawl, index, and access controls',
		alt: 'Three labelled circles comparing crawl control, index control, and real access control, with authentication shown as the privacy boundary.',
		caption:
			'robots.txt, noindex, and authentication solve different problems. robots.txt is public crawl guidance, not privacy protection.',
		nodes: [
			['Crawl rules', 120, 70],
			['Index rules', 360, 70],
			['Access lock', 600, 70],
			['robots.txt', 120, 135],
			['noindex header', 360, 135],
			['login rules', 600, 135],
		],
		note: 'Private content needs a lock, not a crawler instruction.',
	},
	sitemap: {
		title: 'Sitemap as a discovery hint',
		alt: 'A sitemap submitted to a search engine, then discovered, evaluated, and possibly indexed, with indexing not guaranteed.',
		caption:
			'A sitemap reduces ambiguity when it lists canonical, successful, indexable URLs. It does not force indexing.',
		nodes: [
			['Sitemap URL', 65, 70],
			['Submitted', 255, 70],
			['Discovered', 455, 70],
			['Evaluated', 645, 70],
			['May index', 820, 70],
		],
		note: 'Accuracy matters more than decoration.',
	},
	canonical: {
		title: 'Canonical signal cluster',
		alt: 'Multiple URL variants send redirect, sitemap, internal-link, and canonical signals toward one preferred URL.',
		caption:
			'Canonicalisation works best when redirects, canonicals, internal links, and sitemaps point to the same preferred URL.',
		nodes: [
			['/menu', 90, 35],
			['/menu/', 90, 120],
			['?utm=poster', 90, 205],
			['Canonical URL', 545, 120],
			['Links + sitemap', 545, 205],
		],
		note: 'One canonical tag cannot fix a confused URL system by itself.',
	},
	'status-flow': {
		title: 'HTTP response truth',
		alt: 'A request receives a status response, then either real content, a redirect destination, a missing page response, or a server error.',
		caption:
			'Status codes are the server speaking clearly. The visible page and the HTTP response should tell the same story.',
		nodes: [
			['Request URL', 70, 95],
			['Server response', 270, 95],
			['200 real page', 500, 35],
			['301/308 moved', 500, 95],
			['404/410 gone', 500, 155],
			['5xx unavailable', 500, 215],
		],
		note: 'A styled error page returned as 200 is still a soft-404 risk.',
	},
	'js-timeline': {
		title: 'Initial HTML versus rendered DOM',
		alt: 'A two-stage timeline comparing initial HTML from the server with the rendered DOM after JavaScript runs.',
		caption:
			'JavaScript can add useful content, metadata, and links, but that creates another stage to test. Compare source, network response, rendered DOM, and mobile output.',
		nodes: [
			['Initial HTML', 80, 75],
			['JS loads', 305, 75],
			['Rendered DOM', 545, 75],
			['Mobile checks', 760, 75],
		],
		note: 'JavaScript is not the problem; untested assumptions are.',
	},
	'structured-data': {
		title: 'Structured-data validation gates',
		alt: 'Three gates labelled JSON syntax, Schema.org vocabulary, and search feature eligibility before an honest page/content match check.',
		caption:
			'Structured data has more than one validation layer. Passing a syntax check does not prove rich-result eligibility or visible-content accuracy.',
		nodes: [
			['Valid JSON', 80, 70],
			['Schema type', 285, 70],
			['Feature rules', 500, 70],
			['Visible match', 715, 70],
		],
		note: 'Never invent ratings, addresses, opening hours, or prices.',
	},
	diagnosis: {
		title: 'Report-to-question map',
		alt: 'Search Console and Bing reports mapped to questions about discovery, indexing, sitemaps, enhancements, security, and performance.',
		caption:
			'Reports are scoped observations. Start with the question, then choose the report, then separate evidence from inference.',
		nodes: [
			['Question', 80, 95],
			['Correct report', 280, 95],
			['Evidence', 480, 95],
			['Interpretation', 680, 95],
			['Retest', 835, 95],
		],
		note: 'Not every exclusion is a fault.',
	},
	audit: {
		title: 'Technical SEO audit system map',
		alt: 'An audit map connecting discovery, responses, directives, canonical signals, rendering, structured data, tools, and retesting.',
		caption:
			'The final audit joins the pathway together: observe, inspect, explain, change, and verify.',
		nodes: [
			['Scope', 70, 60],
			['Collect evidence', 250, 60],
			['Classify findings', 455, 60],
			['Prioritise fixes', 655, 60],
			['Retest', 830, 60],
		],
		note: 'Severity is impact plus scope, not the colour of a tool warning.',
	},
};

const visual = computed(() => visualContent[props.variant] || visualContent.pipeline);

const arrows = computed(() =>
	visual.value.nodes
		.slice(0, props.variant === 'site-graph' ? -2 : -1)
		.map((node, index) => ({
		x1: node[1] + 92,
		y1: node[2] + 20,
		x2: visual.value.nodes[index + 1][1] - 14,
		y2: visual.value.nodes[index + 1][2] + 20,
	})),
);
</script>

<template>
	<figure class="technical-seo-visual" :aria-label="visual.alt">
		<svg viewBox="0 0 960 270" role="img" :aria-labelledby="`${variant}-title ${variant}-desc`">
			<title :id="`${variant}-title`">{{ visual.title }}</title>
			<desc :id="`${variant}-desc`">{{ visual.alt }}</desc>
			<defs>
				<marker
					id="technical-seo-arrow"
					viewBox="0 0 10 10"
					refX="8"
					refY="5"
					markerWidth="7"
					markerHeight="7"
					orient="auto-start-reverse"
				>
					<path d="M 0 0 L 10 5 L 0 10 z" fill="#355c7d" />
				</marker>
			</defs>
			<rect x="10" y="10" width="940" height="250" rx="8" fill="#f7fbfc" />
			<line
				v-for="arrow in arrows"
				:key="`${arrow.x1}-${arrow.x2}`"
				:x1="arrow.x1"
				:y1="arrow.y1"
				:x2="arrow.x2"
				:y2="arrow.y2"
				stroke="#355c7d"
				stroke-width="3"
				marker-end="url(#technical-seo-arrow)"
			/>
			<g v-for="node in visual.nodes" :key="node[0]">
				<rect :x="node[1]" :y="node[2]" width="120" height="48" rx="8" fill="#ffffff" stroke="#118ab2" stroke-width="2" />
				<text :x="node[1] + 60" :y="node[2] + 29" text-anchor="middle" font-size="13" font-weight="700" fill="#263238">
					{{ node[0] }}
				</text>
			</g>
			<text x="480" y="245" text-anchor="middle" font-size="15" fill="#263238">{{ visual.note }}</text>
		</svg>
		<figcaption>
			<strong>{{ visual.title }}:</strong> {{ visual.caption }}
		</figcaption>
	</figure>
</template>

<style scoped>
.technical-seo-visual {
	margin: 2rem 0;
	padding: 1rem;
	border: 1px solid #d6e8ef;
	border-radius: 8px;
	background: #ffffff;
}

.technical-seo-visual svg {
	display: block;
	width: 100%;
	height: auto;
}

.technical-seo-visual figcaption {
	margin-top: 0.75rem;
	color: #425466;
	font-size: 0.95rem;
}
</style>
