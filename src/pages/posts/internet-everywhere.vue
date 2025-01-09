<template>
	<MainLayout>
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
						<p>
							There was a time when technology was simpler. Phones were just for
							calls, letters were physical, and websites? Well, they were static
							pages—no dynamic content, no fancy frameworks, and definitely no
							SEO strategy.
						</p>

						<p>
							Fast forward to today, and everything is connected. Your phone
							holds your entire digital life, your website isn't just a
							collection of pages—it's an interactive experience, and if your
							business isn't online, does it even exist?
						</p>

						<p>
							For web developers, this technological shift isn't just
							fascinating—it's essential to understand. If you're building
							websites, you need to go beyond just code. You need to know:
						</p>

						<ul class="checklist">
							<li>
								<i class="fas fa-check"></i> How the Internet actually
								works—DNS, hosting, and deployment.
							</li>
							<li>
								<i class="fas fa-check"></i> How to translate a design into a
								real, functioning site.
							</li>
							<li>
								<i class="fas fa-check"></i> How search engines rank websites
								(SEO isn't magic, it's science).
							</li>
							<li>
								<i class="fas fa-check"></i> How to optimize for speed,
								usability, and accessibility.
							</li>
						</ul>

						<h2>The Hidden Layers of Web Development</h2>

						<p>
							Most tutorials teach how to code, but they rarely explain how that
							code actually reaches people.
						</p>

						<p>
							Take a simple website. When someone types a URL into their
							browser, do you know what happens next?
						</p>

						<ol class="process-list">
							<li>
								<i class="fas fa-globe"></i>
								<strong>DNS Resolution:</strong> The browser translates the
								domain name (like graphitedge.com.au) into an IP address.
							</li>
							<li>
								<i class="fas fa-server"></i>
								<strong>Server Request:</strong> Your browser sends a request to
								the web server.
							</li>
							<li>
								<i class="fas fa-code"></i>
								<strong>Response & Rendering:</strong> The server sends back
								files (HTML, CSS, JavaScript), which the browser assembles into
								a webpage.
							</li>
							<li>
								<i class="fas fa-search"></i>
								<strong>SEO & Performance Checks:</strong> Google analyzes how
								fast, accessible, and structured your site is.
							</li>
						</ol>

						<p>
							If you only focus on writing code but don't understand how that
							code reaches the end user, you'll always be missing half the
							picture.
						</p>

						<h2>Why Web Developers Need to Think Beyond Just Code</h2>

						<p>
							Technology has infiltrated every part of our lives—but as a
							developer, you're not just a coder. You're also:
						</p>

						<ul class="role-list">
							<li>
								<i class="fas fa-lightbulb"></i>
								<strong>A Problem Solver:</strong> Figuring out why a site is
								slow isn't just about code—it's about server load, caching, and
								image optimization.
							</li>
							<li>
								<i class="fas fa-palette"></i>
								<strong>A Translator:</strong> Taking a static design and
								turning it into a functional, interactive experience.
							</li>
							<li>
								<i class="fas fa-chart-line"></i>
								<strong>A Strategist:</strong> Understanding how SEO, user
								experience, and marketing shape how websites are built.
							</li>
						</ul>

						<p>
							The best developers don't just write code that works—they build
							sites that succeed.
						</p>

						<h2>So, How Do You Learn the Missing Pieces?</h2>

						<p>That's where GraphiteEdge comes in.</p>

						<p>
							Most tutorials only teach how to write HTML, CSS, and JavaScript,
							but real-world web development involves so much more. At
							GraphiteEdge, I teach the entire process, from design to
							deployment, DNS to SEO—so you're not just writing code, you're
							building web experiences that actually work.
						</p>

						<div class="cta-box">
							<h3>Ready to level up?</h3>
							<p>
								<i class="fas fa-envelope"></i> Join The Graphite Journal
								Newsletter for web development insights beyond just code.
							</p>
							<BlogSignup />
						</div>
					</article>
				</div>
			</section>
			<PostNavigation :current-path="'internet-everywhere'" />
		</div>
	</MainLayout>
</template>

<script>
export const frontmatter = {
	title: 'Internet Everywhere: A Guide to Modern Web Development',
	date: '2025-01-14',
	author: 'Helen Burgess',
	image: '/images/internet-everywhere-guide.svg',
	description:
		'Explore how the internet has evolved and what it means for modern web development.',
	tags: ['web development', 'internet', 'technology', 'modern web'],
};
</script>

<script setup>
import { ref } from 'vue';
import MainLayout from '../../components/MainLayout.vue';
import { useHead } from '@vueuse/head';
import BlogSignup from '../../components/BlogSignup.vue';
import internetGuide from '../../assets/images/internet-everywhere-guide.svg';
import PostNavigation from '../../components/PostNavigation.vue';

const frontmatter = {
	title:
		'The Internet is Everywhere—But Do You Really Understand How It Works?',
	date: '2024-03-21',
	description:
		'Discover the hidden layers of web development, from DNS to deployment, and learn why modern developers need to think beyond just code.',
	tags: ['Web Development', 'DNS', 'SEO', 'Infrastructure'],
	author: 'Helen Burgess',
	image: internetGuide,
};

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
		...(postData.value.image
			? [{ property: 'og:image', content: postData.value.image }]
			: []),
	],
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
	background-image: url('../../assets/images/internet-everywhere-guide.svg');
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
