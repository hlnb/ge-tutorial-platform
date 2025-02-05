<template>
	<PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
		<div class="content">
			<!-- Hero Image Section -->
			<div class="post-hero">
				<!-- Background image set in CSS -->
				<h1 class="title is-1">
					<i class="fas fa-globe section-icon"></i> Understanding DNS: The
					Internet's Phone Book
				</h1>
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
				DNS stands for Domain Name System. It's essentially a network of servers
				that translate domain names (like <code>graphitedge.com.au</code>) into
				IP (Internet Protocol) addresses, which are strings of numbers that
				identify devices on a network. For example, the IP address for a website
				might look like <code>192.168.1.1</code> or, in modern cases, a longer
				string like <code>2606:4700:4700::1111</code> (IPv6).
			</p>

			<h2 class="title is-3">Why Do We Need DNS?</h2>
			<p>
				DNS solves a fundamental problem of accessibility. While computers rely
				on IP addresses to locate each other on the internet, these addresses
				are difficult for humans to remember. Without DNS, you'd need to
				memorize complex number sequences for every website you want to visit.
			</p>

			<h2 class="title is-3">How Does DNS Work?</h2>
			<div class="box">
				<h3 class="title is-4">The DNS Resolution Process:</h3>
				<img
					src="/images/posts/dns-resolution-process.png"
					alt="DNS Resolution Process"
					class="mb-5"
				/>
				<ol>
					<li>
						<strong>You Type a URL into Your Browser</strong>
						<p>
							When you enter a URL, your browser first checks if it already
							knows the IP address (caching).
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
							The resolver asks one of the 13 sets of root servers worldwide.
						</p>
					</li>
					<li>
						<strong>Asking the TLD Servers</strong>
						<p>TLD servers manage domain extensions like .com, .org, or .au.</p>
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

			<h2 class="title is-3">Why Should You Care About DNS?</h2>
			<div class="box">
				<ul>
					<li>
						<strong>Performance:</strong> Using fast DNS services can improve
						browsing speed
					</li>
					<li>
						<strong>Security:</strong> Protection against DNS spoofing and other
						attacks
					</li>
					<li>
						<strong>Reliability:</strong> Backup DNS providers ensure consistent
						access
					</li>
					<li>
						<strong>Privacy:</strong> Privacy-focused DNS services protect your
						browsing data
					</li>
				</ul>
			</div>

			<div class="notification is-warning is-light">
				<p>
					<strong>Best Practices:</strong>
					Use reliable DNS providers, configure backup DNS servers, implement
					DNS caching, keep local DNS records for critical services, and monitor
					DNS health regularly.
				</p>
			</div>

			<SocialShare
				:title="frontmatter.title"
				:description="frontmatter.description"
				:url="currentUrl"
			/>
		</div>
	</PostVisibility>
	<PostNavigation :current-path="'dns-web-browsing'" />
</template>

<script>
export const frontmatter = {
	title:
		"Understanding DNS: The Internet's Phone Book and Why It's Critical for Web Browsing",
	date: '2025-01-29',
	author: 'Graphitedge',
	image: '/images/posts/dns-web-browsing.svg',
	description:
		'Learn how DNS works, why it matters, and best practices for managing your DNS settings.',
	tags: ['DNS', 'Web', 'Networking', 'Technical', 'Tutorial'],
	status: 'published',
	readingTime: '5 min',
};
</script>

<script setup>
import { computed } from 'vue';
import PostVisibility from '@/components/PostVisibility.vue';
import SocialShare from '@/components/SocialShare.vue';
import PostNavigation from '../../components/PostNavigation.vue';

const currentUrl = computed(() => window.location.href);
</script>

<style scoped>
.post-hero {
	margin: -3rem -3rem 3rem -3rem;
	background-color: #f5f5f5;
	padding: 3rem;
	height: 400px;
	background-image: url('/images/posts/dns-web-browsing.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
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
