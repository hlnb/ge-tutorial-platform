import { createRouter, createWebHistory } from 'vue-router';
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
	// Main tutorials page
	{
		path: '/tutorials',
		name: 'Tutorials',
		component: () => import('@/pages/tutorials/index.vue'),
		children: [
			// Getting Started section
			{
				path: 'getting-started',
				name: 'getting-started-section',
				component: () => import('@/layouts/TutorialLayout.vue'),
				children: [
					{
						path: '',
						name: 'getting-started-index',
						component: () =>
							import('@/pages/tutorials/getting-started/index.vue'),
					},
					{
						path: 'how-internet-works',
						name: 'getting-started-how-internet-works',
						component: () =>
							import(
								'@/pages/tutorials/getting-started/how-internet-works.vue'
							),
					},
					{
						path: 'web-basics',
						name: 'getting-started-web-basics',
						component: () =>
							import('@/pages/tutorials/getting-started/web-basics.vue'),
					},
					{
						path: 'dev-environment',
						name: 'getting-started-dev-environment',
						component: () =>
							import('@/pages/tutorials/getting-started/dev-environment.vue'),
					},
					{
						path: 'browser-tools',
						name: 'getting-started-browser-tools',
						component: () =>
							import('@/pages/tutorials/getting-started/browser-tools.vue'),
					},
					{
						path: 'text-editors',
						name: 'getting-started-text-editors',
						component: () =>
							import('@/pages/tutorials/getting-started/text-editors.vue'),
					},
					{
						path: 'domain-hosting',
						name: 'getting-started-domain-hosting',
						component: () =>
							import('@/pages/tutorials/getting-started/domain-hosting.vue'),
					},
				],
			},

			// HTML Basics section
			{
				path: 'html-basics',
				name: 'html-basics-section',
				component: () => import('@/layouts/TutorialLayout.vue'),
				children: [
					{
						path: '',
						name: 'html-basics-index',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/index.vue'),
					},
					{
						path: 'introduction',
						name: 'html-basics-introduction',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/introduction.vue'),
					},
					{
						path: 'first-page',
						name: 'html-basics-first-page',
						component: () =>
							import(
								'@/pages/tutorials/beginner/html-basics/HTMLFirstPage.vue'
							),
					},
					{
						path: 'text',
						name: 'html-basics-text',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLText.vue'),
					},
					{
						path: 'links',
						name: 'html-basics-links',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLLinks.vue'),
					},
					{
						path: 'images',
						name: 'html-basics-images',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLImages.vue'),
					},
					{
						path: 'doc-structure',
						name: 'html-basics-doc-structure',
						component: () =>
							import(
								'@/pages/tutorials/beginner/html-basics/HTMLDocStructure.vue'
							),
					},
					{
						path: 'forms',
						name: 'html-basics-forms',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLForms.vue'),
					},
					{
						path: 'html-emmet',
						name: 'html-basics-html-emmet',
						component: () =>
							import('@/pages/tutorials/beginner/html-basics/HTMLEmmet.vue'),
					},
				],
			},

			// CSS Basics section
			{
				path: 'css-basics',
				name: 'css-basics-section',
				component: () => import('@/layouts/TutorialLayout.vue'),
				children: [
					{
						path: '',
						name: 'css-basics-index',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/index.vue'),
					},
					{
						path: 'introduction',
						name: 'css-basics-introduction',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/introduction.vue'),
					},
					{
						path: 'selectors',
						name: 'css-basics-selectors',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/selectors.vue'),
					},
					{
						path: 'box-model',
						name: 'css-basics-box-model',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/box-model.vue'),
					},
					{
						path: 'text-properties',
						name: 'css-basics-text-properties',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/text.vue'),
					},
					{
						path: 'layout',
						name: 'css-basics-layout',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/layout.vue'),
					},
					{
						path: 'colors',
						name: 'css-basics-colors',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/colors.vue'),
					},
					{
						path: 'modern',
						name: 'css-basics-modern',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/modern.vue'),
					},
					{
						path: 'responsive',
						name: 'css-basics-responsive',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/responsive.vue'),
					},
					{
						path: 'flexbox',
						name: 'css-basics-flexbox',
						component: () =>
							import('@/pages/tutorials/beginner/css-basics/flexbox.vue'),
					},
				],
			},
		],
	},

	// Rest of the routes
	{
		path: '/',
		component: () => import('@/layouts/MainLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
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
	// Redirects for backward compatibility with old route names
	{
		path: '/tutorials/getting-started',
		name: 'GettingStarted',
		redirect: { name: 'getting-started-index' },
	},
	{
		path: '/tutorials/html-basics',
		name: 'HTMLBasics',
		redirect: { name: 'html-basics-index' },
	},
	{
		path: '/tutorials/css-basics',
		name: 'CSSBasics',
		redirect: { name: 'css-basics-index' },
	},
	// Additional redirects for other naming patterns
	{
		path: '/tutorials/html-basics',
		name: 'html-basics',
		redirect: { name: 'html-basics-index' },
	},
	{
		path: '/tutorials/getting-started',
		name: 'getting-started',
		redirect: { name: 'getting-started-index' },
	},
	{
		path: '/tutorials/css-basics',
		name: 'css-basics',
		redirect: { name: 'css-basics-index' },
	},
	// Add redirect for html-basics-emmet
	{
		path: '/tutorials/html-basics/html-emmet',
		name: 'html-basics-emmet',
		redirect: { name: 'html-basics-html-emmet' },
	},
	// Add the student progress route
	{
		path: '/my-progress',
		name: 'student-progress',
		component: () => import('@/pages/StudentProgressPage.vue'),
		meta: {
			title: 'My Learning Progress',
		},
	},
	// Catch-all route for 404
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/pages/404.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			};
		} else if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
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
