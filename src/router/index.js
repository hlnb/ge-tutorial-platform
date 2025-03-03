import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/MainLayout.vue';
import TutorialLayout from '@/layouts/TutorialLayout.vue';
import BackendProgramming from '@/pages/posts/backend-programming.vue';

// Post metadata registry
export const posts = {
	'dns-web-browsing': {
		title: 'DNS and Web Browsing',
		description: 'Understanding how DNS works and its role in web browsing',
		status: 'scheduled',
		publishDate: '2025-01-29',
		lastUpdated: '2025-01-29',
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
		publishDate: '2025-01-20',
		lastUpdated: '2025-01-20',
		author: 'Helen Burgess',
		tags: ['Internet', 'Technology', 'Connectivity'],
		readingTime: '7 min',
		series: 'Web Fundamentals',
		seriesOrder: 2,
		relatedPosts: ['dns-web-browsing', 'work-with-clients'],
		imageUrl: '/images/posts/internet-everywhere-guide.svg',
		excerpt: 'From dial-up to 5G, the internet has transformed...',
		featured: false,
	},
	'work-with-clients': {
		title: 'Working with Clients',
		description: 'Best practices for client relationships in web development',
		status: 'published',
		publishDate: '2025-01-07',
		lastUpdated: '2025-01-07',
		author: 'Helen Burgess',
		tags: ['Business', 'Web Development', 'Client Relations'],
		readingTime: '6 min',
		series: 'Business Skills',
		seriesOrder: 1,
		relatedPosts: ['internet-everywhere'],
		imageUrl: '/images/posts/web-development-client-guide.svg',
		excerpt: 'Building successful client relationships requires...',
		featured: false,
	},
	'build-first-web-page': {
		title: 'Build Your First Web Page',
		description: 'A step-by-step guide to creating your first HTML web page',
		status: 'published',
		publishDate: '2025-02-12',
		lastUpdated: '2025-02-12',
		author: 'Helen Burgess',
		tags: ['HTML', 'Web Development', 'Beginners'],
		readingTime: '6 min',
		series: 'Web Fundamentals',
		seriesOrder: 1,
		relatedPosts: ['javascript-basics', 'responsive-design'],
		imageUrl: '/images/posts/first-webpage-guide.svg',
		excerpt:
			'Ready to start your web development journey? Learn how to create your very first web page using HTML...',
		featured: false,
	},
	'responsive-design': {
		title: 'Responsive Design',
		description: 'Understanding the principles of responsive design',
		status: 'published',
		publishDate: '2025-01-14',
		lastUpdated: '2025-01-14',
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
	'javascript-basics': {
		title: 'JavaScript Basics: Adding Interactivity to Your Website',
		description:
			'Learn how to add interactivity to your website with JavaScript, from basic concepts to practical examples.',
		status: 'published',
		publishDate: '2025-03-12',
		lastUpdated: '2025-03-12',
		author: 'Helen Burgess',
		tags: ['JavaScript', 'Web Development', 'Programming', 'Beginners'],
		readingTime: '8 min',
		series: 'Web Fundamentals',
		seriesOrder: 4,
		relatedPosts: ['responsive-design', 'build-first-web-page'],
		imageUrl: '/images/posts/javascript-basics.svg',
		excerpt:
			'Discover how JavaScript brings websites to life with interactive features and dynamic content...',
		featured: false,
	},
	'backend-programming': {
		title: 'Introduction to Backend Programming with PHP and Databases',
		description:
			'Discover the world of backend development with PHP and databases. Learn how these technologies work together to power dynamic websites.',
		status: 'published',
		publishDate: '2025-03-26',
		lastUpdated: '2025-03-26',
		author: 'Helen Burgess',
		tags: ['PHP', 'Databases', 'Backend', 'Web Development', 'MySQL'],
		readingTime: '10 min',
		series: 'Web Fundamentals',
		seriesOrder: 5,
		relatedPosts: ['javascript-basics', 'build-first-web-page'],
		imageUrl: '/images/posts/backend-programming.svg',
		excerpt:
			'Ready to dive into the world of backend development? Learn how PHP and databases work together to create powerful, dynamic websites that can store and process data.',
		featured: false,
	},
};

const routes = [
	// CSS Basics tutorial routes
	{
		path: '/tutorials',
		name: 'tutorials',
		component: () => import('@/layouts/MainLayout.vue'),
		children: [
			// HTML Basics section
			{
				path: 'beginner/html-basics',
				name: 'html-basics',
				component: () => import('@/layouts/TutorialLayout.vue'),
				children: [
					{
						path: 'HTMLEmmet',
						name: 'html-basics-emmet',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLEmmet.vue'),
						meta: {
							layout: 'tutorial',
						},
					},
				],
			},

			// CSS Basics section
			{
				path: 'css-basics',
				name: 'css-basics',
				component: () => import('@/layouts/TutorialLayout.vue'),
				children: [
					{
						path: '',
						name: 'css-basics-index',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/index.vue'),
						meta: {
							layout: 'tutorial',
						},
					},
					{
						path: 'selectors',
						name: 'css-basics-selectors',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/selectors.vue'),
						meta: {
							layout: 'tutorial',
						},
					},
					{
						path: 'box-model',
						name: 'css-basics-box-model',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/box-model.vue'),
						meta: {
							layout: 'tutorial',
						},
					},
					{
						path: 'text',
						name: 'css-basics-text',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/text.vue'),
						meta: {
							layout: 'tutorial',
						},
					},
					{
						path: 'colors',
						name: 'css-basics-colors',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/colors.vue'),
						meta: {
							layout: 'tutorial',
						},
					},
				],
			},
		],
	},
	// CSS Basics tutorial routes
	{
		path: '/',
		component: () => import('@/layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'home',
				component: () => import('@/pages/index.vue'),
			},
			{
				path: 'the-graphite-journal',
				name: 'journal',
				component: () => import('@/pages/the-graphite-journal.vue'),
			},
			// Main Navigation Routes
			{
				path: 'about',
				name: 'about',
				component: () => import('@/pages/about.vue'),
			},
			{
				path: 'contact',
				name: 'contact',
				component: () => import('@/pages/contact.vue'),
			},
			{
				path: 'privacy',
				name: 'privacy',
				component: () => import('@/pages/privacy.vue'),
			},
			{
				path: 'terms',
				name: 'terms',
				component: () => import('@/pages/terms.vue'),
			},
			{
				path: 'tutorials',
				component: () => import('@/layouts/TutorialLayout.vue'),
				children: [
					{
						path: '',
						name: 'tutorials',
						component: () => import('@/pages/tutorials/index.vue'),
					},

					// Getting Started Routes
					{
						path: 'getting-started',
						name: 'getting-started',
						component: () =>
							import('@/pages/tutorials/getting-started/index.vue'),
					},
					{
						path: 'getting-started/browser-tools',
						name: 'getting-started-browser-tools',
						component: () =>
							import('@/pages/tutorials/getting-started/browser-tools.vue'),
					},
					{
						path: 'getting-started/dev-environment',
						name: 'getting-started-dev-environment',
						component: () =>
							import('@/pages/tutorials/getting-started/dev-environment.vue'),
					},
					{
						path: 'getting-started/domain-hosting',
						name: 'getting-started-domain-hosting',
						component: () =>
							import('@/pages/tutorials/getting-started/domain-hosting.vue'),
					},
					{
						path: 'getting-started/how-internet-works',
						name: 'getting-started-how-internet-works',
						component: () =>
							import(
								'@/pages/tutorials/getting-started/how-internet-works.vue'
							),
					},
					{
						path: 'getting-started/text-editors',
						name: 'getting-started-text-editors',
						component: () =>
							import('@/pages/tutorials/getting-started/text-editors.vue'),
					},
					{
						path: 'getting-started/web-basics',
						name: 'getting-started-web-basics',
						component: () =>
							import('@/pages/tutorials/getting-started/web-basics.vue'),
					},
					// HTML Basics Routes
					{
						path: 'html-basics',
						name: 'html-basics',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/index.vue'),
					},
					{
						path: 'html-basics/introduction',
						name: 'html-basics-introduction',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/introduction.vue'),
					},
					{
						path: 'html-basics/html-first-page',
						name: 'html-basics-first-page',
						component: () =>
							import(
								'@/pages/tutorials/beginner/html-basics/HTMLFirstPage.vue'
							),
					},
					{
						path: 'html-basics/html-text',
						name: 'html-basics-text',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLText.vue'),
					},
					{
						path: 'html-basics/html-links',
						name: 'html-basics-links',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLLinks.vue'),
					},
					{
						path: 'html-basics/html-images',
						name: 'html-basics-images',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLImages.vue'),
					},
					{
						path: 'html-basics/html-doc-structure',
						name: 'html-basics-doc-structure',
						component: () =>
							import(
								'@/pages/tutorials/beginner/html-basics/HTMLDocStructure.vue'
							),
					},
					{
						path: 'html-basics/html-forms',
						name: 'html-basics-forms',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLForms.vue'),
					},
					{
						path: 'html-basics/html-emmet',
						name: 'html-basics-emmet',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLEmmet.vue'),
					},
					// CSS Basics Routes
					{
						path: 'css-basics',
						name: 'css-basics',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/index.vue'),
					},
					{
						path: 'css-basics/introduction',
						name: 'css-basics-introduction',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/introduction.vue'),
					},
					{
						path: 'css-basics/selectors',
						name: 'css-basics-selectors',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/selectors.vue'),
					},
					{
						path: 'css-basics/box-model',
						name: 'css-basics-box-model',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/box-model.vue'),
					},
					{
						path: 'css-basics/text-properties',
						name: 'css-basics-text-properties',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/text.vue'),
					},
					{
						path: 'css-basics/layout',
						name: 'css-basics-layout',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/layout.vue'),
					},
					{
						path: 'css-basics/colors',
						name: 'css-basics-colors',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/colors.vue'),
					},
					{
						path: 'css-basics/modern',
						name: 'css-basics-modern',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/modern.vue'),
					},
					{
						path: 'css-basics/responsive',
						name: 'css-basics-responsive',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/responsive.vue'),
					},
					{
						path: 'css-basics/flexbox',
						name: 'css-basics-flexbox',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/flexbox.vue'),
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
						component: () => import('../pages/posts/build-first-web-page.vue'),
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
					{
						path: 'javascript-basics',
						component: () => import('../pages/posts/javascript-basics.vue'),
						props: true,
						beforeEnter: (to, from, next) =>
							checkPostAccess('javascript-basics', next),
					},
					{
						path: 'backend-programming',
						component: BackendProgramming,
						meta: {
							layout: 'default',
							title: posts['backend-programming'].title,
							description: posts['backend-programming'].description,
						},
					},
				],
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
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
