<template>
	<div class="container">
		<section class="section">
			<!--
			  The content that was previously directly in this template (hero, about, features)
			  is now primarily handled by the src/layouts/home.vue layout,
			  which receives its data via the `frontmatter` object defined below.
			  If you have any content that is unique to the index page and *not* part of
			  the shared layout, it would go here. Otherwise, this template can be minimal.
			-->
			<div class="content">
				<!-- Hero Section -->
				<section class="hero is-large mb-6">
					<div class="hero-body has-text-centered">
						<h2 class="title has-text-white">{{ hero.title }}</h2>
						<p class="subtitle has-text-white">{{ hero.description }}</p>
						<a href="/tutorials" class="button is-primary is-large mt-4">
							Start Your Journey
						</a>
					</div>
				</section>

				<!-- About GraphitEdge Section -->
				<section class="section mb-6">
					<div class="container">
						<h2 class="title is-3">
							Web Development Isn't Just Code—It's a Whole Ecosystem
						</h2>

						<div class="content">
							<p class="is-size-5 mb-5">
								Most web development tutorials teach you how to write code, but
								they leave out the bigger picture—the crucial elements that make
								a website functional, discoverable, and successful. That's where
								GraphiteEdge comes in.
							</p>

							<p class="is-size-5 mb-5">
								I'm Helen Burgess, and with over 20 years in the web industry,
								I've seen too many developers struggle not because they can't
								code, but because they don't know the stuff no one talks
								about—how the internet actually works, how to deploy a site, how
								to optimize for SEO, and how to make designs translate into
								real, effective websites.
							</p>

							<p class="is-size-5 mb-4">
								At GraphiteEdge, I break down these missing pieces in plain
								English, with visuals, flowcharts, and practical examples,
								helping:
							</p>

							<ul class="benefits-list mb-5">
								<li>
									Beginners build confidence in understanding web development
									beyond just syntax.
								</li>
								<li>
									Self-taught developers fill in the gaps that hold them back
									from leveling up.
								</li>
								<li>
									Designers transitioning into development bridge the gap
									between aesthetics and functionality.
								</li>
							</ul>

							<div
								class="mission-statement has-background-light p-5 has-text-centered"
							>
								<h3 class="title is-4 mb-3">Our Mission</h3>
								<p class="is-size-5 is-italic">
									"Web development isn't just code—demystifying the full process
									from DNS to SEO, design to deployment."
								</p>
							</div>

							<p class="is-size-5 mt-5">
								If you've ever felt overwhelmed by the technical side of
								launching and managing websites, you're in the right place.
								Let's make web development clearer, together.
							</p>

							<h3 class="title is-4 mt-6 mb-4">
								Learn Web Development by Building Real Projects
							</h3>

							<p class="is-size-5 mb-5">
								At GraphiteEdge, we believe the best way to learn is by doing.
								That's why our tutorials center around "Rotto Rocks", a
								real-world web project inspired by Rottnest Island's beauty and
								the Black Swan Bistro, a classic Western Australian restaurant.
							</p>

							<p class="is-size-5 mb-4">
								Through hands-on learning, you'll go beyond just writing HTML,
								CSS, and JavaScript. You'll also understand:
							</p>

							<ul class="benefits-list mb-5">
								<li>
									How the internet works (domains, DNS, hosting, and
									deployment).
								</li>
								<li>How to take a design and turn it into a real website.</li>
								<li>
									The science behind effective web pages (SEO, CTAs, performance
									optimization).
								</li>
								<li>
									How to build interactive, modern web experiences using Vue.js
									& Bulma.
								</li>
							</ul>

							<p class="is-size-5 mb-5">
								No more disconnected tutorials—GraphiteEdge gives you the
								missing pieces of web development in one structured, practical
								learning experience.
							</p>

							<div class="tech-stack">
								<span class="tech-badge tag is-medium">HTML</span>
								<span class="tech-badge tag is-medium">CSS</span>
								<span class="tech-badge tag is-medium">JavaScript</span>
								<span class="tech-badge tag is-medium">Vue.js</span>
								<span class="tech-badge tag is-medium">Bulma</span>
							</div>
						</div>
					</div>
				</section>

				<!-- Features Section -->
				<section class="section features mb-6">
					<div class="container">
						<h2 class="title is-3 has-text-centered mb-6">
							What You'll Learn with GraphiteEdge
						</h2>

						<p class="is-size-5 has-text-centered mb-6">
							At GraphiteEdge, our tutorials go beyond just writing code. We
							help beginners, self-taught developers, and designers understand
							the entire web development process by building real-world
							projects.
						</p>

						<div class="features-grid">
							<div
								v-for="feature in features"
								:key="feature.title"
								class="feature-card"
							>
								<h3 class="title is-4">
									<span class="icon-text">
										<span class="icon">{{ feature.icon }}</span>
										<span>{{ feature.title }}</span>
									</span>
								</h3>
								<ul class="feature-list">
									<li v-for="item in feature.items" :key="item.heading">
										<strong>{{ item.heading }}:</strong>
										{{ item.description }}
									</li>
								</ul>
							</div>
						</div>

						<div class="notification is-light is-info mt-6">
							<p class="has-text-centered mb-0">
								<span class="icon">💡</span>
								Everything is taught through "Rotto Rocks"—a real-world project
								that makes learning practical, fun, and effective.
							</p>
						</div>
					</div>
				</section>
			</div>
		</section>
	</div>
</template>

<script setup>
import { computed } from 'vue'; // Import computed if not already there
import { useHead } from '@vueuse/head';

// Get all .vue files from the src/pages/posts directory
const postModules = import.meta.glob('/src/pages/posts/*.vue', { eager: true });
console.log('Post modules:', postModules); // Debugging line to check loaded modules
// Ensure the postModules object is not empty
if (Object.keys(postModules).length === 0) {
	console.warn('No post modules found. Check your import path or file structure.');
}
// Function to process posts and get the latest ones
const getLatestPosts = () =>
{
	const processedPosts = Object.entries(postModules)
		.map(([path,module]) =>
		{
			const fm = module.frontmatter;
			// Log the frontmatter for each post to see what's being processed
			console.log(`Processing ${ path }: frontmatter =`,fm);
			if (fm && fm.status === 'published' && fm.date)
			{
				const slug = path.split('/').pop().replace('.vue','');
				return {
					title: fm.title,
					status: fm.status, // Good to include for debugging
					dateString: fm.date, // Original date string
					link: `/posts/${ slug }`,
					snippet: fm.description || '',
					date: new Date(fm.date),
				};
			}
			return null;
		})
		.filter(post => post !== null)
		.sort((a,b) => b.date - a.date)
		.slice(0,3);
	// This log shows what posts actually made it through the filter and sort
	console.log('Posts after processing (getLatestPosts):',processedPosts);
	return processedPosts;
};

// This 'frontmatter' object is what gets passed to your home.vue layout
const frontmatter = {
	title: 'GraphitEdge', // Existing title for SEO
	description: 'Welcome to GraphitEdge - Web Development Tutorials and Practical Projects', // Existing description for SEO
	hero: { // Existing hero data
		title: 'Web Development Isn’t Just Code',
		description: 'Demystifying the full process from DNS to SEO, design to deployment.',
		// tagline and actions would also be here if they were part of your original hero
	},
	features: [ // Existing features data
		{
			title: 'Foundations of Web Development',
			icon: '📌',
			items: [
				{
					heading: 'Understand the Internet',
					description: 'Learn about domains, DNS, hosting, and how websites actually work behind the scenes.',
				},
				// ... other items and features
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
				// ... other items
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
		// ... other features
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
					heading: 'CSS & Layouts',
					description: 'Discover best practices for structuring and styling web pages.',
				},
			],
		},
		// ... other features
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
// ... other features
	],
	latestPosts: getLatestPosts(), // This is from our previous work

  // ✨ NEW: Add your general FAQs here
  generalFaqs: [
    {
      question: 'What is GraphiteEdge?',
      answer: 'GraphiteEdge is a learning platform dedicated to demystifying web development. We focus on teaching the full process, from understanding how the internet works to deploying and optimizing your websites.'
    },
    {
      question: 'Who are these tutorials for?',
      answer: 'Our tutorials are designed for beginners starting their web development journey, self-taught developers looking to fill knowledge gaps, and designers transitioning into development. We aim to make complex topics accessible to everyone.'
    },
    {
      question: 'How are the tutorials structured?',
      answer: 'Most of our tutorials are part of a larger learning path, often centered around building real-world projects like "The Black Swan Bistro" (a restaurant website) and "Rotto Rocks" (a tourism website). This project-based approach helps you apply concepts practically.'
    }
    // Add more general FAQs as needed
  ]
};
// This log shows the final array being passed to the layout
console.log('Final frontmatter.latestPosts to be used by layout:',frontmatter.latestPosts);

// SEO metadata (this part remains the same)
useHead({
	title: frontmatter.title,
	meta: [
		{ name: 'description',content: frontmatter.description },
		{
			name: 'keywords',
			content: 'web development, tutorials, beginner to advanced, practical projects, Western Australia, Vue.js, HTML, CSS, JavaScript',
		},
		// Open Graph tags
		{ property: 'og:title',content: frontmatter.title },
		{ property: 'og:description',content: frontmatter.description },
		{ property: 'og:type',content: 'website' },
		// Twitter Card tags
		{ name: 'twitter:title',content: frontmatter.title },
		{ name: 'twitter:description',content: frontmatter.description },
		{ name: 'twitter:card',content: 'summary_large_image' },
	],
});

const hero = {
	title: 'Web Development Isn’t Just Code',
	description:
		'Demystifying the full process from DNS to SEO, design to deployment.',
};

const features = [
	{
		title: 'Foundations of Web Development',
		icon: '📌',
		items: [
			{
				heading: 'Understand the Internet',
				description:
					'Learn about domains, DNS, hosting, and how websites actually work behind the scenes.',
			},
			{
				heading: 'HTML, CSS & JavaScript',
				description:
					'Master the building blocks of web development with clear, visual explanations.',
			},
			{
				heading: 'Vue.js & Bulma',
				description:
					'Build modern, responsive interfaces with real-world frameworks.',
			},
		],
	},
	{
		title: 'Turning Design into Reality',
		icon: '📌',
		items: [
			{
				heading: 'Design to Code',
				description:
					'Learn how to translate a mockup or an image into a functional website.',
			},
			{
				heading: 'CSS & Layouts',
				description:
					'Discover best practices for structuring and styling web pages.',
			},
		],
	},
	{
		title: 'Web Performance & SEO',
		icon: '📌',
		items: [
			{
				heading: 'SEO Optimization',
				description:
					'Understand how search engines rank pages and how to create SEO-friendly content.',
			},
			{
				heading: 'Page Speed & Performance',
				description:
					'Learn why speed matters and how to optimize your site for fast loading times.',
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
];
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
