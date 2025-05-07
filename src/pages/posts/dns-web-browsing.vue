<template>
	<PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
		<div class="container">
			<section class="hero" v-if="frontmatter">
				<div class="hero-content">
					<h1>{{ frontmatter.title }}</h1>
					<div class="meta">
						<time class="date">{{ formatDate(frontmatter.date) }}</time>
						<span class="tags" v-if="frontmatter.tags?.length">
							Tags: {{ frontmatter.tags.join(', ') }}
						</span>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="content">
					<article class="blog-post">
						<!-- Hero Image Section -->
						<div class="post-hero">
							<!-- Background image set in CSS -->
							<h2 class="title is-1">
								<i class="fas fa-globe section-icon"></i> Understanding DNS: The
								Internet's Phone Book
							</h2>
						</div>

						<p class="mb-5">
							Have you ever wondered how typing a website address magically
							takes you to the right page? Behind the scenes, a vital system
							called DNS (Domain Name System) makes this possible. Think of DNS
							as the internet's address book — a translator that connects
							human-friendly URLs like
							<code>www.graphitedge.com.au</code> to the numerical IP addresses
							computers understand.
						</p>

						<h2 class="title is-3">What is DNS?</h2>
						<p>
							DNS stands for Domain Name System. It's essentially a network of
							servers that translate domain names (like
							<code>graphitedge.com.au</code>) into IP (Internet Protocol)
							addresses, which are strings of numbers that identify devices on a
							network. For example, the IP address for a website might look like
							<code>192.168.1.1</code> or, in modern cases, a longer string like
							<code>2606:4700:4700::1111</code> (IPv6).
						</p>

						<h2 class="title is-3">Why Do We Need DNS?</h2>
						<p>
							DNS solves a fundamental problem of accessibility. While computers
							rely on IP addresses to locate each other on the internet, these
							addresses are difficult for humans to remember. Without DNS, you'd
							need to memorize complex number sequences for every website you
							want to visit.
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
										When you enter a URL, your browser first checks if it
										already knows the IP address (caching).
									</p>
								</li>
								<li>
									<strong>Querying a Recursive Resolver</strong>
									<p>
										If not cached, your browser asks a DNS resolver (usually
										provided by your ISP).
									</p>
								</li>
								<li>
									<strong>Contacting the Root Servers</strong>
									<p>
										The resolver asks one of the 13 sets of root servers
										worldwide.
									</p>
								</li>
								<li>
									<strong>Asking the TLD Servers</strong>
									<p>
										TLD servers manage domain extensions like .com, .org, or
										.au.
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

						<h2 class="title is-3">Why Should You Care About DNS?</h2>
						<div class="box">
							<ul>
								<li>
									<strong>Performance:</strong> Using fast DNS services can
									improve browsing speed
								</li>
								<li>
									<strong>Security:</strong> Protection against DNS spoofing and
									other attacks
								</li>
								<li>
									<strong>Reliability:</strong> Backup DNS providers ensure
									consistent access
								</li>
								<li>
									<strong>Privacy:</strong> Privacy-focused DNS services protect
									your browsing data
								</li>
							</ul>
						</div>

						<div class="notification is-warning is-light">
							<p>
								<strong>Best Practices:</strong>
								Use reliable DNS providers, configure backup DNS servers,
								implement DNS caching, keep local DNS records for critical
								services, and monitor DNS health regularly.
							</p>
						</div>

						<BlogSignup />
					</article>
				</div>
			</section>
		</div>
	</PostVisibility>
	<PostNavigation :current-path="'dns-web-browsing'" />
</template>

<script>
export const frontmatter = {
	title: 'Understanding DNS and Web Browsing: A Deep Dive',
	date: '2025-01-29', // Adjust date as needed
	author: 'Helen Burgess',
	image: '/images/posts/dns-web-browsing.svg',
	description:
		'Learn how DNS works and the journey of a web request from your browser to the server and back.',
	tags: ['DNS', 'Web Development', 'Infrastructure', 'Networking'],
	publishDate: '2025-01-29',
	status: 'published',
};
</script>

<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import BlogSignup from '@/components/BlogSignup.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import PostVisibility from '@/components/PostVisibility.vue';

// ... rest of the setup code remains the same as internet-everywhere.vue ...
const postData = ref(frontmatter);

const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-AU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
};

useHead({
	title: postData.value.title,
	meta: [
		{ name: 'description', content: postData.value.description },
		{ property: 'og:title', content: postData.value.title },
		{ property: 'og:description', content: postData.value.description },
		{ property: 'og:image', content: postData.value.image },
	],
});

// Emit frontmatter to parent layout
const emit = defineEmits(['update:frontmatter']);

onMounted(() => {
	emit('update:frontmatter', frontmatter);
});
</script>

<style scoped>
.blog-post {
	max-width: 80vw;
	margin: 0 auto;
	padding: 2rem;
}

.content {
	line-height: 1.6;
	font-size: 1.1rem;
}

.hero {
	background-image: url('/images/posts/internet-everywhere-guide.svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 2rem;
}

.hero::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
}

.hero-content {
	position: relative;
	z-index: 1;
	text-align: center;
	color: white;
	padding: 2rem;
	max-width: 800px;
}

.hero h1 {
	color: white;
	margin-bottom: 1rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.meta {
	color: white;
	margin: 1rem 0;
}

.meta .date {
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
	font-family: monospace;
	font-size: 0.9rem;
	letter-spacing: 0.02em;
}

.meta .tags {
	margin-left: 1rem;
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
}

h1 {
	font-size: 2.5rem;
	margin-bottom: 2rem;
	color: var(--color-red-berry);
}

h2 {
	font-size: 1.8rem;
	margin: 2rem 0 1rem;
	color: var(--color-mine-shaft);
}

.checklist,
.process-list,
.role-list {
	list-style: none;
	padding-left: 0;
	margin: 2rem 0;
}

.checklist li,
.process-list li,
.role-list li {
	margin-bottom: 1rem;
	padding-left: 2rem;
	position: relative;
}

.checklist li i,
.process-list li i,
.role-list li i {
	position: absolute;
	left: 0;
	top: 0.25rem;
	color: var(--color-red-berry);
}

.cta-box {
	background-color: var(--color-snow);
	border-radius: 8px;
	padding: 2rem;
	margin: 2rem 0;
	text-align: center;
}

.cta-box h3 {
	color: var(--color-red-berry);
	margin-bottom: 1rem;
}

.cta-box i {
	color: var(--color-red-berry);
	margin-right: 0.5rem;
}

@media (max-width: 768px) {
	.blog-post {
		padding: 1rem;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.5rem;
	}
}
@media (max-width: 768px) {
	.hero {
		min-height: 300px;
	}

	.hero h1 {
		font-size: 1.8rem;
	}
}
</style>
