import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/MainLayout.vue';
import TutorialLayout from '@/layouts/TutorialLayout.vue';

// Post metadata registry
const posts = {
	'dns-web-browsing': {
		title: 'DNS and Web Browsing',
		description: 'Understanding how DNS works and its role in web browsing',
		status: 'scheduled',
		publishDate: '2025-01-29T00:00:00Z',
		lastUpdated: '2025-01-29T00:00:00Z',
		author: 'Helen Burgess',
		tags: ['DNS', 'Web', 'Networking'],
		readingTime: '5 min',
		series: 'Web Fundamentals',
		seriesOrder: 1,
		relatedPosts: ['internet-everywhere'],
		imageUrl: '/images/posts/dns-web-browsing.svg',
		excerpt: 'A deep dive into the Domain Name System...',
		featured: true,
	},
	'internet-everywhere': {
		title: 'Internet Everywhere',
		description: 'The evolution of internet connectivity and its impact',
		status: 'published',
		publishDate: '2025-01-14T00:00:00Z',
		lastUpdated: '2025-01-14T00:00:00Z',
		author: 'Helen Burgess',
		tags: ['Internet', 'Technology', 'Connectivity'],
		readingTime: '7 min',
		series: 'Web Fundamentals',
		seriesOrder: 2,
		relatedPosts: ['dns-web-browsing', 'work-with-clients'],
		imageUrl: '/images/posts/internet-everywhere.svg',
		excerpt: 'From dial-up to 5G, the internet has transformed...',
		featured: false,
	},
	'work-with-clients': {
		title: 'Working with Clients',
		description: 'Best practices for client relationships in web development',
		status: 'published',
		publishDate: '2025-01-07T00:00:00Z',
		lastUpdated: '2025-01-07T00:00:00Z',
		author: 'Helen Burgess',
		tags: ['Business', 'Web Development', 'Client Relations'],
		readingTime: '6 min',
		series: 'Business Skills',
		seriesOrder: 1,
		relatedPosts: ['internet-everywhere'],
		imageUrl: '/images/posts/work-with-clients.svg',
		excerpt: 'Building successful client relationships requires...',
		featured: false,
	},
	'responsive-design': {
		title: 'Responsive Design',
		description: 'Understanding the principles of responsive design',
		status: 'published',
		publishDate: '2025-01-14T00:00:00Z',
		lastUpdated: '2025-01-14T00:00:00Z',
		author: 'Helen Burgess',
		tags: ['Design', 'Web', 'Responsive'],
		readingTime: '5 min',
		series: 'Web Fundamentals',
		seriesOrder: 3,
		relatedPosts: ['dns-web-browsing', 'internet-everywhere'],
		imageUrl: '/images/posts/responsive-design.svg',
		excerpt: 'Responsive design is the practice of designing websites...',
		featured: false,
	},
};

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: () => import('../layouts/MainLayout.vue'),
			children: [
				{
					path: '',
					name: 'home',
					component: () => import('../pages/index.vue'),
				},
				{
					path: 'the-graphite-journal',
					name: 'journal',
					component: () => import('../pages/the-graphite-journal.vue'),
				},
				// Main Navigation Routes
				{
					path: 'about',
					name: 'about',
					component: () => import('../pages/about.vue'),
				},
				{
					path: 'contact',
					name: 'contact',
					component: () => import('../pages/contact.vue'),
				},
				{
					path: 'privacy',
					name: 'privacy',
					component: () => import('../pages/privacy.vue'),
				},
				{
					path: 'terms',
					name: 'terms',
					component: () => import('../pages/terms.vue'),
				},
				{
					path: 'tutorials',
					component: () => import('../layouts/TutorialLayout.vue'),
					children: [
						{
							path: '',
							name: 'tutorials',
							component: () => import('../pages/tutorials/index.vue'),
						},

						// Getting Started Routes
						{
							path: 'getting-started',
							name: 'getting-started',
							component: () =>
								import('../pages/tutorials/getting-started/index.vue'),
						},
						{
							path: 'getting-started/browser-tools',
							name: 'getting-started-browser-tools',
							component: () =>
								import('../pages/tutorials/getting-started/browser-tools.vue'),
						},
						{
							path: 'getting-started/dev-environment',
							name: 'getting-started-dev-environment',
							component: () =>
								import(
									'../pages/tutorials/getting-started/dev-environment.vue'
								),
						},
						{
							path: 'getting-started/domain-hosting',
							name: 'getting-started-domain-hosting',
							component: () =>
								import('../pages/tutorials/getting-started/domain-hosting.vue'),
						},
						{
							path: 'getting-started/how-internet-works',
							name: 'getting-started-how-internet-works',
							component: () =>
								import(
									'../pages/tutorials/getting-started/how-internet-works.vue'
								),
						},
						{
							path: 'getting-started/text-editors',
							name: 'getting-started-text-editors',
							component: () =>
								import('../pages/tutorials/getting-started/text-editors.vue'),
						},
						{
							path: 'getting-started/web-basics',
							name: 'getting-started-web-basics',
							component: () =>
								import('../pages/tutorials/getting-started/web-basics.vue'),
						},
						// HTML Basics Routes
						{
							path: 'html-basics',
							name: 'html-basics',
							component: () =>
								import('../pages/tutorials/beginner/html-basics/index.vue'),
						},
						{
							path: 'html-basics/introduction',
							name: 'html-basics-introduction',
							component: () =>
								import(
									'@/pages/tutorials/beginner/html-basics/introduction.vue'
								),
						},
						{
							path: 'html-basics/html-first-page',
							name: 'html-basics-first-page',
							component: () =>
								import(
									'../pages/tutorials/beginner/html-basics/HTMLFirstPage.vue'
								),
						},
						{
							path: 'html-basics/html-text',
							name: 'html-basics-text',
							component: () =>
								import('../pages/tutorials/beginner/html-basics/HTMLText.vue'),
						},
						{
							path: 'html-basics/html-links',
							name: 'html-basics-links',
							component: () =>
								import('../pages/tutorials/beginner/html-basics/HTMLLinks.vue'),
						},
						{
							path: 'html-basics/html-images',
							name: 'html-basics-images',
							component: () =>
								import(
									'../pages/tutorials/beginner/html-basics/HTMLImages.vue'
								),
						},
						{
							path: 'html-basics/html-doc-structure',
							name: 'html-basics-doc-structure',
							component: () =>
								import(
									'../pages/tutorials/beginner/html-basics/HTMLDocStructure.vue'
								),
						},
						{
							path: 'html-basics/html-forms',
							name: 'html-basics-forms',
							component: () =>
								import('../pages/tutorials/beginner/html-basics/HTMLForms.vue'),
						},
						{
							path: 'html-basics/html-emmet',
							name: 'html-basics-emmet',
							component: () =>
								import('../pages/tutorials/beginner/html-basics/HTMLEmmet.vue'),
						},
						// CSS Basics Routes
						{
							path: 'beginner/css-basics',
							name: 'css-basics',
							component: () =>
								import('@/pages/tutorials/beginner/css-basics/index.vue'),
						},
						{
							path: 'beginner/css-basics/introduction',
							name: 'css-basics-introduction',
							component: () =>
								import(
									'@/pages/tutorials/beginner/css-basics/introduction.vue'
								),
						},
						{
							path: 'beginner/css-basics/selectors',
							name: 'css-basics-selectors',
							component: () =>
								import('@/pages/tutorials/beginner/css-basics/selectors.vue'),
						},
						{
							path: 'beginner/css-basics/colors',
							name: 'css-basics-colors',
							component: () =>
								import('@/pages/tutorials/beginner/css-basics/colors.vue'),
						},
						{
							path: 'beginner/css-basics/box-model',
							name: 'css-basics-box-model',
							component: () =>
								import('@/pages/tutorials/beginner/css-basics/box-model.vue'),
						},
						{
							path: 'beginner/css-basics/layout',
							name: 'css-basics-layout',
							component: () =>
								import('@/pages/tutorials/beginner/css-basics/layout.vue'),
						},
						{
							path: 'beginner/css-basics/flexbox',
							name: 'css-basics-flexbox',
							component: () =>
								import('@/pages/tutorials/beginner/css-basics/flexbox.vue'),
						},
						{
							path: 'beginner/css-basics/responsive',
							name: 'css-basics-responsive',
							component: () =>
								import('@/pages/tutorials/beginner/css-basics/responsive.vue'),
						},
						{
							path: 'beginner/css-basics/modern',
							name: 'css-basics-modern',
							component: () =>
								import('@/pages/tutorials/beginner/css-basics/modern.vue'),
						},
					],
				},
				// Posts section
				{
					path: 'posts',
					children: [
						{
							path: 'internet-everywhere',
							component: () => import('../pages/posts/internet-everywhere.vue'),
							props: true,
							beforeEnter: (to, from, next) =>
								checkPostAccess('internet-everywhere', next),
						},
						{
							path: 'work-with-clients',
							component: () => import('../pages/posts/work-with-clients.vue'),
							props: true,
							beforeEnter: (to, from, next) =>
								checkPostAccess('work-with-clients', next),
						},
						{
							path: 'dns-web-browsing',
							component: () => import('../pages/posts/dns-web-browsing.vue'),
							props: true,
							beforeEnter: (to, from, next) =>
								checkPostAccess('dns-web-browsing', next),
						},
						{
							path: 'build-first-web-page',
							component: () =>
								import('../pages/posts/build-first-web-page.vue'),
							props: true,
							beforeEnter: (to, from, next) => {
								console.log('Checking route access for build-first-web-page');
								// Don't redirect, let PostVisibility handle the display
								next();
							},
						},
						{
							path: 'responsive-design',
							component: () => import('../pages/posts/responsive-design.vue'),
							props: true,
							beforeEnter: (to, from, next) =>
								checkPostAccess('responsive-design', next),
						},
					],
				},
			],
		},
	],
});

// Check if post should be accessible
function checkPostAccess(slug, next) {
	console.log('Checking access for post:', slug);
	const post = posts[slug];
	if (!post) {
		next('/'); // Redirect to home if post doesn't exist
		return;
	}

	const now = new Date();
	const publishDate = new Date(post.publishDate);

	// Allow access if post is published or scheduled and past publish date
	if (
		post.status === 'published' ||
		(post.status === 'scheduled' && now >= publishDate)
	) {
		next();
	} else {
		next('/'); // Redirect to home if post is not ready
	}
}

// Add global navigation guard to handle errors
router.onError((error) => {
	console.error('Router error:', error);
});

export default router;
