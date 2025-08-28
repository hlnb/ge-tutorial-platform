<template>
	<HomeLayout :frontmatter="frontmatter">
		<template #hero>
			<section class="hero is-fullheight-with-navbar has-background-white">
				<div class="hero-body">
					<div class="container has-text-centered">
						<h1 class="title is-1 has-text-white">{{ frontmatter.hero.title }}</h1>
						<p class="subtitle is-4 has-text-white">{{ frontmatter.hero.description }}</p>
						<div class="buttons is-centered">
							<a href="/tutorials" class="button is-primary is-large">Start Learning</a>
							<a href="/about" class="button is-light is-large">Learn More</a>
						</div>
					</div>
				</div>
			</section>
		</template>
		<template #about>
			<section class="section mb-6">
				<div class="container">
					<h2 class="title is-3">
						Web Development Isn't Just Code—It's a Whole Ecosystem
					</h2>
					<div class="content">
						<p class="is-size-5 mb-5">
							Most web development tutorials teach you how to write code, but they leave out the bigger
							picture—the crucial elements that make a website functional, discoverable, and successful.
							That's where GraphiteEdge comes in.
						</p>
						<p class="is-size-5 mb-5">
							I'm Helen Burgess, and with over 20 years in the web industry, I've seen too many developers
							struggle not because they can't code, but because they don't know the stuff no one talks
							about—how the internet actually works, how to deploy a site, how to optimize for SEO, and how
							to make designs translate into real, effective websites.
						</p>
						<p class="is-size-5 mb-4">
							At GraphiteEdge, I break down these missing pieces in plain English, with visuals, flowcharts,
							and practical examples, helping:
						</p>
						<ul class="benefits-list mb-5">
							<li>
								Beginners build confidence in understanding web development beyond just
								syntax.
							</li>
							<li>
								Self-taught developers fill in the gaps that hold them back from leveling
								up.
							</li>
							<li>
								Designers transitioning into development bridge the gap between aesthetics
								and functionality.
							</li>
						</ul>
					</div>
				</div>
			</section>
		</template>
		<template #mission>
			<div class="mission-statement box has-background-black accent p-5 has-text-centered">
				<h3 class="title is-4 mb-3 has-text-white">Our Mission</h3>
				<p class="is-size-5 is-italic has-text-white">
					"Web development isn't just code—demystifying the full process from DNS to SEO, design to
					deployment."
				</p>
			</div>
		</template>
		<template #techstack>
			<div class="tech-stack box has-background-white">
				<span class="tech-badge tag is-medium">HTML</span>
				<span class="tech-badge tag is-medium">CSS</span>
				<span class="tech-badge tag is-medium">JavaScript</span>
				<span class="tech-badge tag is-medium">Vue.js</span>
				<span class="tech-badge tag is-medium">Bulma</span>
			</div>
		</template>
		<template #learning>
			<section class="section mb-6 box has-background-white">
				<div class="container">
					<h2 class="title is-3">Learn Web Development by Building Real Projects</h2>
					<p class="is-size-5 mb-5">
						At GraphiteEdge, we believe the best way to learn is by doing. That's why our tutorials center around "Rotto
						Rocks", a real-world web project inspired by Rottnest Island's beauty and the Black Swan Bistro, a classic
						Western Australian restaurant.
					</p>
					<p>As you build this real-world project step by step, you'll master not just HTML, CSS, and JavaScript, but
						the entire web development ecosystem.</p>
					<p>Through hands-on learning, you'll go beyond just writing HTML, CSS, and JavaScript. You'll also understand:
					</p>
					<ul class="benefits-list mb-5">
						<li>How the internet works (domains, DNS, hosting, and deployment)</li>
						<li>How to take a design and turn it into a real website</li>
						<li>The science behind effective web pages (SEO, CTAs, performance optimization)</li>
						<li>How to build interactive, modern web experiences using Vue.js & Bulma</li>
					</ul>
					<p>No more piecemeal tutorials that leave you with more questions than answers. With GraphiteEdge, you'll gain
						a holistic understanding of web development, empowering you to create websites that are not only functional
						but also beautiful, fast, and user-friendly.</p>
					<p>No more disconnected tutorials—GraphiteEdge gives you the missing pieces of web development in one
						structured, practical learning experience.</p>
				</div>
			</section>
		</template>
		<template #faqs>
			<FaqSection :faqs="generalFaqs" />
		</template>
	</HomeLayout>
</template>

<script setup>
import HomeLayout from '@/layouts/home.vue';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import generalFaqs from '@/data/faqs';
import FaqSection from '@/components/FaqSection.vue';

// Get all .vue files from the src/pages/posts directory
const postModules = import.meta.glob('/src/pages/posts/*.vue', { eager: true });
// Ensure the postModules object is not empty
if (Object.keys(postModules).length === 0) {
	console.warn('No post modules found. Check your import path or file structure.');
}
// Function to process posts and get the latest ones
const getLatestPosts = () => {
  const processedPosts = Object.entries(postModules)
    .map(([path, module]) => {
      let fm;
      // Use only bracket notation to avoid type errors
      try {
        if (module && typeof module === 'object') {
          if (module['frontmatter']) {
            fm = module['frontmatter'];
          } else if (module['default'] && module['default']['frontmatter']) {
            fm = module['default']['frontmatter'];
          }
        }
      } catch (e) {
        fm = undefined;
      }
      if (fm && typeof fm === 'object' && fm['status'] === 'published' && fm['date']) {
        const slug = path.split('/').pop().replace('.vue', '');
        const dateObj = new Date(fm['date']);
        if (!isNaN(dateObj.getTime())) {
          return {
            title: fm['title'],
            status: fm['status'],
            dateString: fm['date'],
            link: `/posts/${slug}`,
            snippet: fm['description'] || '',
            date: dateObj,
          };
        }
      }
      return null;
    })
    .filter(post => post !== null)
    .sort((a, b) => a.date && b.date ? b.date.getTime() - a.date.getTime() : 0)
    .slice(0, 3);
  return processedPosts;
};

// This 'frontmatter' object is what gets passed to your home.vue layout
const frontmatter = {
	title: 'GraphitEdge', // Existing title for SEO
	description: 'Welcome to GraphitEdge - Web Development Tutorials and Practical Projects', // Existing description for SEO
	hero: {
		title: 'Web Development Isn’t Just Code',
		description: 'Demystifying the full process from DNS to SEO, design to deployment.',
	},
	features: [
		{
			title: 'Foundations of Web Development',
			icon: '📌',
			items: [
				{
					heading: 'Understand the Internet',
					description: 'Learn about domains, DNS, hosting, and how websites actually work behind the scenes.',
				},
				{
					heading: 'HTML, CSS & JavaScript',
					description: 'Master the building blocks of web development with clear, visual explanations.',
				},
				{
					heading: 'Vue.js & Bulma',
					description: 'Build modern, responsive interfaces with real-world frameworks.',
				},
			],
		},
		{
			title: 'Turning Design into Reality',
			icon: '📌',
			items: [
				{
					heading: 'Design to Code',
					description: 'Learn how to translate a mockup or an image into a functional website.',
				},
				{
					heading: 'Responsive Design',
					description: 'Make your websites look great on any device with practical CSS techniques.',
				},
				{
					heading: 'Accessibility & Usability',
					description: 'Create websites that are not only beautiful but also accessible to everyone.',
				},
				{
					heading: 'Web Standards & Best Practices',
					description: 'Follow industry standards to ensure your websites are maintainable and scalable.',
				},
			],
		},
	
		{
			title: 'Web Performance & SEO',
			icon: '📌',
			items: [
				{
					heading: 'SEO Optimization',
					description: 'Understand how search engines rank pages and how to create SEO-friendly content.',
				},
				{
					heading: 'Page Speed & Performance',
					description: 'Learn why speed matters and how to optimize your site for fast loading times.',
				},
			],
		},
		{
			title: 'Deployment & Security',
			icon: '📌',
			items: [
				{
					heading: 'Hosting & Deployment',
					description: 'Learn how to launch your site on the web.',
				},
				{
					heading: 'Security Best Practices',
					description: 'Keep your website safe and resilient from threats.',
				},
			],
		},
		{
			title: 'Project-Based Learning',
			icon: '📌',
			items: [
				{
					heading: 'Real-World Projects',
					description: 'Apply your skills by building complete websites like "The Black Swan Bistro" and "Rotto Rocks".',
				},
				{
					heading: 'Step-by-Step Guidance',
					description: 'Follow along with detailed tutorials that walk you through each project phase.',
				},
			],
		},
		{
			title: 'Community & Support',
			icon: '📌',
			items: [
				{
					heading: 'Join Our Community',
					description: 'Connect with fellow learners and experienced developers in our forums. Visit the community page for support, feedback, and to get involved.',
					link: '/community'
				},
				{
					heading: 'Get Help When You Need It',
					description: 'Access resources, ask questions, and share your progress with others.',
				},
			],
		},
	],
	latestPosts: getLatestPosts(),
};

// SEO metadata (this part remains the same)
useHead({
	title: frontmatter.title,
	meta: [
		{ name: 'description', content: frontmatter.description },
		{
			name: 'keywords',
			content: 'web development, tutorials, beginner to advanced, practical projects, Western Australia, Vue.js, HTML, CSS, JavaScript',
		},
		// Open Graph tags
		{ property: 'og:title', content: frontmatter.title },
		{ property: 'og:description', content: frontmatter.description },
		{ property: 'og:type', content: 'website' },
		// Twitter Card tags
		{ name: 'twitter:title', content: frontmatter.title },
		{ name: 'twitter:description', content: frontmatter.description },
		{ name: 'twitter:card', content: 'summary_large_image' },
	],
});
</script>

<style>
@import '../assets/styles/main.css';

.hero {
	background-image: url('../assets/images/home-hero-background.svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.hero-body {
	background-color: var(--color-mine-shaft);
	opacity: 0.7;
}

/* Basic styling - you can replace these with Bulma classes later */
.features {
	padding: 2rem;
}

.features-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1.5rem;
	margin-top: 1rem;
}

.feature-card {
	padding: 1.5rem;
	border: 1px solid #eee;
	border-radius: 4px;
}

.main-content {
	padding: 2rem;
}

.tech-stack {
	margin-top: 1rem;
	display: flex;
	gap: 0.5rem;
	flex-wrap: wrap;
}

.tech-badge {
	background-color: var(--color-primary);
	color: var(--color-red-berry);
	padding: 0.5rem 1rem;
	border-radius: 4px;
}

.hero .button {
	background-color: var(--color-red-berry);
	color: var(--color-white);
	font-weight: bold;
	transition: transform 0.2s ease;
}

.hero .button:hover {
	transform: translateY(-2px);
	opacity: 0.9;
}

.benefits-list {
	list-style: none;
	padding-left: 1.5rem;
}

.benefits-list li {
	position: relative;
	padding: 0.5rem 0;
}

.benefits-list li::before {
	content: '✅';
	position: absolute;
	left: -1.5rem;
}

.mission-statement {
	border-radius: 8px;
	margin: 2rem 0;
}
</style>
