<template>
	<PostVisibility
		:publish-date="postMetadata.publishDate"
		:status="postMetadata.status"
	>
		<div class="content">
			<!-- Hero Image Section -->
			<div class="post-hero">
				<img
					src="@/assets/posts/dns-web-browsing.svg"
					alt="DNS and Web Browsing Illustration"
					class="hero-image"
				/>
			</div>

			<h1 class="title is-1">
				<i class="fas fa-globe section-icon"></i> DNS and Web Browsing
			</h1>

			<section class="hero" v-if="postMetadata">
				<div class="hero-content">
					<h1>{{ postMetadata.title }}</h1>
					<div class="meta">
						<time class="date">{{ postMetadata.date }}</time>
						<span class="tags" v-if="postMetadata.tags?.length">
							Tags: {{ postMetadata.tags.join(', ') }}
						</span>
					</div>
				</div>
			</section>

			<div class="box box-info mb-6">
				<p>
					<strong><i class="fas fa-bullseye"></i> Goal:</strong>
					Understand how DNS works and its role in web browsing.
				</p>
			</div>

			<p class="mb-5">
				Have you ever wondered how typing a website address magically takes you
				to the right page? Behind the scenes, a vital system called DNS (Domain
				Name System) makes this possible. Think of DNS as the internet's address
				book — a translator that connects human-friendly URLs like
				<code>www.graphitedge.com.au</code> to the numerical IP addresses
				computers understand.
			</p>

			<h2 class="title is-3">What is DNS?</h2>
			<p>
				DNS stands for Domain Name System. It is essentially a network of
				servers that translate domain names (like
				<code>graphitedge.com.au</code>) into IP (Internet Protocol) addresses,
				which are strings of numbers that identify devices on a network. For
				example, the IP address for a website might look like
				<code>192.168.1.1</code> or, in modern cases, a longer string like
				<code>2606:4700:4700::1111</code> (IPv6).
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Note:</strong> Without DNS, you'd need to remember complicated
					number sequences to visit websites instead of using easy-to-remember
					names.
				</p>
			</div>

			<h2 class="title is-3">How Does DNS Work?</h2>
			<div class="box">
				<h3 class="title is-4">The DNS Resolution Process:</h3>
				<ol>
					<li>
						<strong>You Type a URL into Your Browser</strong>
						<p>
							Your browser checks if it already knows the IP address (caching).
						</p>
					</li>
					<li>
						<strong>Querying a Recursive Resolver</strong>
						<p>
							If not cached, your browser asks a DNS resolver (usually provided
							by your ISP).
						</p>
					</li>
					<li>
						<strong>Contacting the Root Servers</strong>
						<p>
							The resolver asks root servers for directions to the right TLD
							servers.
						</p>
					</li>
					<li>
						<strong>Asking the TLD Servers</strong>
						<p>
							TLD servers direct to the authoritative server for the domain.
						</p>
					</li>
					<li>
						<strong>Getting the Final Answer</strong>
						<p>
							The authoritative server provides the IP address to load the
							website.
						</p>
					</li>
				</ol>
			</div>

			<h2 class="title is-3">Common Terms Explained</h2>
			<div class="box">
				<ul>
					<li>
						<strong>Cache:</strong> Temporary storage of recently looked-up IP
						addresses
					</li>
					<li>
						<strong>Recursive Resolver:</strong> DNS server that finds IP
						addresses
					</li>
					<li><strong>Root Server:</strong> Starting point for DNS queries</li>
					<li>
						<strong>Authoritative Server:</strong> Final source of truth for
						domain IP addresses
					</li>
				</ul>
			</div>

			<h2 class="title is-3">DNS and Privacy</h2>
			<div class="notification is-warning is-light">
				<p>
					<strong>Privacy Tip:</strong> DNS queries can reveal your browsing
					history. Consider using privacy-focused DNS services like Cloudflare's
					1.1.1.1 or DNS-over-HTTPS (DoH).
				</p>
			</div>

			<div class="box mt-6">
				<h3 class="title is-4">Popular DNS Services</h3>
				<table class="table is-fullwidth">
					<thead>
						<tr>
							<th>Service</th>
							<th>Primary DNS</th>
							<th>Secondary DNS</th>
							<th>Features</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Cloudflare</td>
							<td><code>1.1.1.1</code></td>
							<td><code>1.0.0.1</code></td>
							<td>Fast, private, no logging</td>
						</tr>
						<tr>
							<td>Google</td>
							<td><code>8.8.8.8</code></td>
							<td><code>8.8.4.4</code></td>
							<td>Reliable, widely used</td>
						</tr>
					</tbody>
				</table>
			</div>

			<SocialShare
				:title="postMetadata.title"
				:description="postMetadata.description"
				:url="currentUrl"
			/>
		</div>
	</PostVisibility>
	<PostNavigation :current-path="'dns-web-browsing'" />
</template>
<script>
export const frontmatter = {
	title: 'Internet Everywhere: A Guide to Modern Web Development',
	date: '2025-01-29',
	author: 'Helen Burgess',
	image: '/images/dns-web-browsing.svg',
	description:
		'Explore how the internet has evolved and what it means for modern web development.',
	tags: ['web development', 'internet', 'technology', 'modern web'],
};
</script>
<script setup>
import { ref, computed } from 'vue';
import PostVisibility from '@/components/PostVisibility.vue';
import SocialShare from '@/components/SocialShare.vue';
import { useHead } from '@vueuse/head';
import DNSWebBrowsing from '../../assets/images/dns-web-browsing.svg';
import PostNavigation from '../../components/PostNavigation.vue';

const currentUrl = computed(() => window.location.href);

const postMetadata = {
	title: 'DNS and Web Browsing',
	description: 'Understanding how DNS works and its role in web browsing',
	publishDate: '2025-01-29T08:15:00Z', // Set your desired publish date
	author: 'Graphitedge',
	status: 'scheduled',
	tags: ['DNS', 'Web', 'Networking', 'Technical'],
	readingTime: '5 min',
	lastUpdated: new Date().toISOString(),
	image: DNSWebBrowsing,
};

// You might want to add this metadata to your page's head
useHead({
	title: postMetadata.title,
	meta: [
		{ name: 'description', content: postMetadata.description },
		{ property: 'og:title', content: postMetadata.title },
		{ property: 'og:description', content: postMetadata.description },
		...(postMetadata.image
			? [{ property: 'og:image', content: postMetadata.image }]
			: []),
	],
});
</script>

<style scoped>
.post-hero {
	margin: -3rem -3rem 3rem -3rem;
	background-color: #f5f5f5;
	padding: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

.hero-image {
	max-width: 800px;
	width: 100%;
	height: auto;
}

.section-icon {
	color: #3273dc;
}

.box ol li {
	margin-bottom: 1rem;
}

.box ol li:last-child {
	margin-bottom: 0;
}

code {
	background-color: #f5f5f5;
	color: #ff3860;
	padding: 0.2em 0.4em;
	border-radius: 3px;
}
</style>
