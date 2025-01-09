<template>
	<MainLayout>
		<div class="container">
			<section v-if="frontmatter" class="hero">
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
			<section v-else class="hero loading">
				<div class="hero-content">
					<div class="loading-text">Loading post...</div>
				</div>
			</section>

			<section class="section">
				<div class="content">
					<article class="blog-post">
						<h2>
							Introduction: Why Web Developers Need Strong Client Communication
						</h2>
						<p>
							Building a website isn’t just about writing
							<strong>HTML, CSS, and JavaScript</strong>—it’s about
							<strong
								>understanding the client’s needs, managing expectations, and
								ensuring the project is a success</strong
							>.
						</p>

						<p>
							Many new developers, especially those who are
							<strong>self-taught or transitioning from design</strong>,
							struggle with the <em>client conversation</em> part of web
							development. They either:
						</p>

						<ul>
							<li>
								Jump into coding
								<strong>without clarifying project goals</strong>, leading to
								endless revisions.
							</li>
							<li>
								Get caught up in <strong>technical explanations</strong>, losing
								the client’s trust.
							</li>
							<li>
								Forget to <strong>set boundaries</strong>, leading to scope
								creep and unpaid work.
							</li>
						</ul>

						<p>This guide will teach you:</p>

						<ul>
							<li>
								<strong>How to start the conversation</strong> with a client
								(and what questions to ask).
							</li>
							<li>
								<strong>What you need from them</strong> before you even touch a
								line of code.
							</li>
							<li>
								<strong>How to set expectations</strong> around pricing,
								contracts, and project timelines.
							</li>
							<li>
								<strong>How to handle common issues</strong> like unclear
								requirements, late payments, and unrealistic expectations.
							</li>
						</ul>

						<h2>Step 1: Setting the Right Expectations from the Start</h2>

						<p>
							Before you start coding, you need to have
							<strong>a real conversation</strong> with your client. This isn't
							just a <em>list of questions</em>—it's about
							<strong>understanding their needs, goals, and expectations</strong
							>.
						</p>

						<h3>Key Questions to Ask Clients Before Starting a Web Project</h3>

						<ul>
							<li>
								<strong>What’s the main purpose of this website?</strong>
								Portfolio, e-commerce, blog?
							</li>
							<li>
								<strong>What features are necessary?</strong> Contact form,
								booking system, blog, payment gateway?
							</li>
							<li>
								<strong>Who will be updating the site after launch?</strong>
								Do they need training or a maintenance plan?
							</li>
							<li>
								<strong>What is their budget and timeline?</strong> What’s
								realistic for their goals?
							</li>
							<li>
								<strong>Who is providing the content?</strong> Do they have
								branding, images, or do they need help?
							</li>
						</ul>

						<p class="tip">
							<i class="fa-solid fa-lightbulb-on"></i>
							<strong>Pro Tip:</strong> Clients often say,
							<em>“I just need a simple website.”</em>
							<i class="fa-sharp-duotone fa-solid fa-flag"></i> This is a red
							flag! Always clarify
							<strong>exactly what they mean by ‘simple’</strong>.
						</p>

						<h2>Step 2: Avoiding Scope Creep & Setting Boundaries</h2>

						<p>
							<strong>Scope creep</strong> happens when a client
							<em>keeps adding features</em> beyond what was agreed upon—without
							increasing the budget or timeline. Here's how to avoid it:
						</p>

						<ul class="feature-list">
							<li>
								<i class="fa-solid fa-pen-to-square"></i
								><strong>Have a clear contract.</strong> Outline what’s included
								and what’s extra.
							</li>
							<li>
								<i class="fa-solid fa-clipboard-list-check"></i
								><strong>Create a feature list.</strong> If something’s not on
								the list, it’s a separate project.
							</li>
							<li>
								<i class="fa-solid fa-traffic-light-stop"></i
								><strong>Use change orders.</strong> New features require a
								quote for additional work.
							</li>
							<li>
								<i class="fa-solid fa-sack-dollar"></i
								><strong>Be upfront about costs.</strong> Extra work = extra
								payment.
							</li>
						</ul>

						<h2>Step 3: Technical Details Clients Need to Understand</h2>

						<p>
							Clients don’t need to be developers, but they should understand
							the basics:
						</p>

						<ul>
							<li>
								<strong>Domain, Hosting, and DNS:</strong> Explain that buying a
								domain doesn’t mean they have a website.
							</li>
							<li>
								<strong>SEO & Performance:</strong> A site needs optimization to
								rank and load quickly.
							</li>
							<li>
								<strong>Security & Maintenance:</strong> Explain risks of
								outdated plugins, weak passwords, and cheap hosting.
							</li>
						</ul>

						<h2>
							Step 4: How to Handle Difficult Clients (Without Losing Your
							Sanity)
						</h2>

						<p>Some common client issues and how to handle them:</p>

						<ul class="feature-list">
							<li>
								<i class="fa-solid fa-flag-pennant"></i>
								<strong>“I need this website finished in two weeks.”</strong>
								<i class="fa-solid fa-arrow-right"></i>Require all content
								upfront.
							</li>
							<li>
								<i class="fa-solid fa-flag-pennant"></i>
								<strong>“I’ll pay you when the website is done.”</strong>
								<i class="fa-solid fa-arrow-right"></i> Require a 50% deposit
								before starting.
							</li>
							<li>
								<i class="fa-solid fa-flag-pennant"></i>
								<strong
									>“I don’t like how this looks. Can you just change
									everything?”</strong
								>
								<i class="fa-solid fa-arrow-right"></i> Limit revisions in your
								contract.
							</li>
						</ul>

						<h2>Conclusion: Set Yourself Up for Success</h2>

						<p>
							Working with clients is <strong>a skill</strong>—just like coding.
							If you learn to
							<strong
								>ask the right questions, set boundaries, and communicate
								effectively</strong
							>, you’ll avoid <em>stressful projects</em> and build
							<strong>successful websites</strong>.
						</p>

						<p>
							At <strong>GraphiteEdge</strong>, I teach
							<strong>the full web development process</strong>, from
							<strong>DNS to SEO, design to deployment</strong>—so you’re not
							just coding, you’re
							<strong>creating web experiences that work</strong>.
						</p>

						<!-- Optional call-to-action section -->
						<div class="cta-box">
							<h3>Ready to learn more?</h3>
							<p>
								<i class="fa-regular fa-envelope"></i> Join The Graphite Journal
								Newsletter for web development insights.
							</p>
							<BlogSignup />
						</div>
					</article>
				</div>
			</section>

			<PostNavigation :current-path="'work-with-clients'" />
		</div>
	</MainLayout>
</template>

<script>
// Regular script to export frontmatter
export const frontmatter = {
	title: 'How to Work with Clients as a Web Developer: The Essential Guide',
	date: '2025-01-07',
	author: 'Helen Burgess',
	image: '/images/web-development-client-guide.svg',
	description:
		'Learn how to communicate effectively with clients as a web developer. Avoid scope creep, set expectations, and manage web projects smoothly.',
	tags: [
		'web development',
		'client management',
		'freelancing',
		'working with clients',
		'web design process',
	],
};
</script>

<script setup>
import { ref } from 'vue';
import MainLayout from '../../components/MainLayout.vue';
import { useHead } from '@vueuse/head';
import BlogSignup from '../../components/BlogSignup.vue';
import webDevClientGuide from '../../assets/images/web-development-client-guide.svg';
import PostNavigation from '../../components/PostNavigation.vue';

const frontmatter = {
	title: 'How to Work with Clients as a Web Developer: The Essential Guide',
	date: '2024-01-07',
	description:
		'Learn how to communicate effectively with clients as a web developer. Avoid scope creep, set expectations, and manage web projects smoothly.',
	tags: [
		'web development',
		'client management',
		'freelancing',
		'working with clients',
		'web design process',
	],
	author: 'Helen Burgess',
	image: webDevClientGuide,
};

const postData = ref(frontmatter);

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

// Add date formatter function
const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-AU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
};
</script>

<style scoped>
.blog-post {
	max-width: 80vw;
	margin: 0 auto;
	padding: 2rem;
}

.meta {
	margin: 1rem 0 2rem;
	color: #666;
	font-size: 0.9rem;
}

.meta .tags {
	margin-left: 1rem;
}

.content {
	line-height: 1.6;
	font-size: 1.1rem;
}

h1 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: var(--color-red-berry);
}

h2 {
	font-size: 1.8rem;
	margin: 2rem 0 1rem;
	color: var(--color-mine-shaft);
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

/* Responsive adjustments */
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

.hero {
	background-image: url('../../assets/images/web-development-client-guide.svg');
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
	background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
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

.hero .meta {
	color: white;
	margin: 1rem 0;
}

.hero .meta .tags {
	margin-left: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
	.hero {
		min-height: 300px;
	}

	.hero h1 {
		font-size: 1.8rem;
	}
}

.loading {
	background-color: var(--color-snow, #f5f5f5);
	min-height: 300px;
}

.loading-text {
	color: var(--color-mine-shaft, #333);
	font-size: 1.2rem;
	text-align: center;
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
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
}

.feature-list {
	list-style: none;
	padding: 0;
	margin: 2rem 0;
}

.feature-list li {
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
}

.feature-list i {
	color: var(--color-red-berry);
	width: 20px;
}

.note,
.tip {
	background: var(--color-snow);
	padding: 1rem;
	border-radius: 8px;
	margin: 1rem 0;
	display: flex;
	align-items: flex-start;
	gap: 1rem;
}

.note i,
.tip i {
	color: var(--color-red-berry);
	margin-top: 0.2rem;
}

.cta-box {
	background: var(--color-snow);
	padding: 2rem;
	border-radius: 8px;
	margin: 2rem 0;
	text-align: center;
}

.cta-box i {
	color: var(--color-red-berry);
	margin-right: 0.5rem;
}
</style>
