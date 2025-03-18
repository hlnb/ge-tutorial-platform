import { createRouter, createWebHistory } from 'vue-router';
import BackendProgramming from '@/pages/posts/backend-programming.vue';
import RSSFeedService from '@/services/RSSFeedService';

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

// Project routes
const projectRoutes = [
	{
		path: '/projects',
		name: 'projects',
		component: () => import('@/pages/projects/index.vue'),
		meta: {
			title: 'Practice Projects',
			description:
				"Apply what you've learned with these hands-on web development projects",
		},
	},
	{
		path: '/projects/personal-profile',
		name: 'personal-profile',
		component: () => import('@/pages/projects/personal-profile.vue'),
		meta: {
			title: 'Personal Profile Page Project',
			description:
				'Create a simple personal profile page with basic HTML structure',
		},
	},
	{
		path: '/projects/recipe-page',
		name: 'recipe-page',
		component: () => import('@/pages/projects/recipe-page.vue'),
		meta: {
			title: 'Recipe Page Project',
			description: 'Build a page for your favorite recipe using HTML structure',
		},
	},
	{
		path: '/projects/photo-gallery',
		name: 'photo-gallery',
		component: () => import('@/pages/projects/photo-gallery.vue'),
		meta: {
			title: 'Photo Gallery Project',
			description: 'Build a simple photo gallery with images and captions',
		},
	},
	{
		path: '/projects/card-components',
		name: 'card-components',
		component: () => import('@/pages/projects/card-components.vue'),
		meta: {
			title: 'Card Components Project',
			description: 'Create different card designs using the CSS box model',
		},
	},
	{
		path: '/projects/selector-challenge',
		name: 'selector-challenge',
		component: () => import('@/pages/projects/selector-challenge.vue'),
		meta: {
			title: 'CSS Selector Challenge',
			description: 'Practice using different CSS selectors to style elements',
		},
	},
	{
		path: '/projects/calculator',
		name: 'calculator',
		component: () => import('@/pages/projects/calculator.vue'),
		meta: {
			title: 'Calculator App Project',
			description: 'Build a basic calculator with arithmetic operators',
		},
	},
	{
		path: '/projects/todo-list',
		name: 'todo-list',
		component: () => import('@/pages/projects/todo-list.vue'),
		meta: {
			title: 'Todo List Project',
			description: 'Build a todo list with array iteration',
		},
	},
	{
		path: '/projects/quiz-game',
		name: 'quiz-game',
		component: () => import('@/pages/projects/quiz-game.vue'),
		meta: {
			title: 'Quiz Game Project',
			description: 'Build an interactive quiz game with JavaScript',
		},
	},
	{
		path: '/projects/hello-world',
		name: 'hello-world',
		component: () => import('@/pages/projects/hello-world.vue'),
		meta: {
			title: 'Hello World App Project',
			description: 'Create a simple interactive greeting application',
		},
	},
	{
		path: '/projects/number-game',
		name: 'number-game',
		component: () => import('@/pages/projects/number-game.vue'),
		meta: {
			title: 'Number Guessing Game Project',
			description: 'Build a number guessing game with basic JavaScript',
		},
	},
	{
		path: '/projects/interactive-demo',
		name: 'interactive-demo',
		component: () => import('@/pages/projects/interactive-demo.vue'),
		meta: {
			title: 'Interactive Message Board Project',
			description: 'Build an interactive message board with dynamic content',
		},
	},
	{
		path: '/projects/color-switcher',
		name: 'color-switcher',
		component: () => import('@/pages/projects/color-switcher.vue'),
		meta: {
			title: 'Dynamic Color Switcher Project',
			description: 'Create a color switcher with dynamic updates',
		},
	},
	{
		path: '/projects/grade-calculator',
		name: 'grade-calculator',
		component: () => import('@/pages/projects/grade-calculator.vue'),
		meta: {
			title: 'Grade Calculator Project',
			description: 'Build a calculator that computes final grades based on weighted assignments',
		},
	},
	{
		path: '/projects/temp-converter',
		name: 'temperature-converter',
		component: () => import('@/pages/projects/temperature-converter.vue'),
		meta: {
			title: 'Temperature Converter Project',
			description: 'Build a temperature converter that handles different units and real-time updates',
		},
	},
	{
		path: '/projects/photo-gallery-2',
		name: 'photo-gallery-2',
		component: () => import('@/pages/projects/photo-gallery-2.vue'),
		meta: {
			title: 'Enhanced Photo Gallery Project',
			description: 'Building on your JavaScript and DOM knowledge, create an advanced interactive photo gallery that demonstrates array operations and dynamic DOM manipulation.',
		},
	},
	{
		path: '/projects/todo-list-2',
		name: 'todo-list-2',
		component: () => import('@/pages/projects/todo-list-2.vue'),
		meta: {
			title: 'Enhanced Todo List Project',
			description: 'Apply your JavaScript array methods and DOM manipulation skills to build a sophisticated task management application.',
		},
	},
	// Add more project routes as needed
];

// Auth routes
const authRoutes = [
	{
		path: '/auth/login',
		name: 'login',
		component: () => import('@/pages/auth/login.vue'),
		meta: {
			title: 'Login',
			description: 'Login to track your progress',
		},
	},
	{
		path: '/auth/register',
		name: 'register',
		component: () => import('@/pages/auth/register.vue'),
		meta: {
			title: 'Register',
			description: 'Create an account to track your progress',
		},
	},
	{
		path: '/auth/logout',
		name: 'logout',
		redirect: '/',
		beforeEnter: async (to, from, next) => {
			const { default: authService } = await import('@/services/AuthService');
			await authService.logout();
			next();
		},
	},
];

const routes = [
	// RSS Feed route
	{
		path: '/rss.xml',
		name: 'rss-feed',
		component: () => import('@/pages/404.vue'),
		beforeEnter: (to, from, next) => {
			// Generate RSS feed and serve it
			const xml = RSSFeedService.generateRSSFeed();

			// Create a Blob with the XML content
			const blob = new Blob([xml], { type: 'application/xml' });

			// Create a URL for the Blob
			const url = URL.createObjectURL(blob);

			// Redirect to the URL
			window.location.href = url;

			// Don't proceed with the navigation in Vue Router
			next(false);
		},
	},

	// Auth routes
	...authRoutes,

	// Main tutorials page
	{
		path: '/tutorials',
		name: 'tutorials-index',
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
						path: 'text',
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

			// JavaScript Basics section
			{
				path: 'javascript-basics',
				name: 'javascript-basics-section',
				component: () => import('@/layouts/TutorialLayout.vue'),
				children: [
					{
						path: '',
						name: 'javascript-basics-index',
						component: () =>
							import('@/pages/tutorials/beginner/javascript-basics/index.vue'),
					},
					{
						path: 'introduction',
						name: 'javascript-basics-introduction',
						component: () =>
							import(
								'@/pages/tutorials/beginner/javascript-basics/introduction.vue'
							),
					},
					{
						path: 'variables-data-types',
						name: 'javascript-basics-variables-data-types',
						component: () =>
							import(
								'@/pages/tutorials/beginner/javascript-basics/variables-data-types.vue'
							),
					},
					{
						path: 'conditionals',
						name: 'javascript-basics-conditionals',
						component: () =>
							import(
								'@/pages/tutorials/beginner/javascript-basics/conditionals.vue'
							),
					},
					{
						path: 'operators',
						name: 'javascript-basics-operators',
						component: () =>
							import(
								'../pages/tutorials/beginner/javascript-basics/operators.vue'
							),
						meta: {
							title: 'Operators & Expressions in JavaScript',
							description:
								'Learn about JavaScript operators for calculations, comparisons, and logical operations',
						},
					},
					{
						path: 'loops',
						name: 'javascript-basics-loops',
						component: () =>
							import('../pages/tutorials/beginner/javascript-basics/loops.vue'),
						meta: {
							title: 'Loops in JavaScript',
							description:
								'Learn how to use loops to repeat actions and iterate through data in JavaScript',
						},
					},
					{
						path: 'functions',
						name: 'javascript-basics-functions',
						component: () =>
							import('../pages/tutorials/beginner/javascript-basics/functions.vue'),
						meta: {
							title: 'Functions in JavaScript',
							description: 'Learn how to create and use functions in JavaScript to write reusable code',
						},
					},
					// Add more JavaScript tutorials as they are created
				],
			},

			// DOM Basics section
			{
				path: 'dom-basics',
				name: 'dom-basics-section',
				component: () => import('@/layouts/TutorialLayout.vue'),
				children: [
					{
						path: '',
						name: 'dom-basics-index',
						component: () =>
							import('@/pages/tutorials/beginner/dom-basics/index.vue'),
					},
					{
						path: 'introduction',
						name: 'dom-basics-introduction',
						component: () =>
							import('@/pages/tutorials/beginner/dom-basics/introduction.vue'),
					},
					{
						path: 'arrays',
						name: 'dom-basics-arrays',
						component: () =>
							import('@/pages/tutorials/beginner/dom-basics/arrays.vue'),
						meta: {
							title: 'Arrays and Array Methods in JavaScript',
							description: 'Master JavaScript arrays with hands-on practice in DOM manipulation, leading to enhanced photo gallery and todo list projects',
							practiceProjects: ['photo-gallery-2', 'todo-list-2']
						}
					},
					{
						path: 'dom-manipulation',
						name: 'dom-basics-dom-manipulation',
						component: () =>
							import('@/pages/tutorials/beginner/dom-basics/dom-manipulation.vue'),
					},
					{
						path: 'event-handling',
						name: 'dom-basics-event-handling',
						component: () =>
							import('@/pages/tutorials/beginner/dom-basics/event-handling.vue'),
					},
					{
						path: 'dom-traversal',
						name: 'dom-basics-dom-traversal',
						component: () =>
							import('@/pages/tutorials/beginner/dom-basics/dom-traversal.vue'),
					},
					{
						path: 'dom-events',
						name: 'dom-basics-dom-events',
						component: () =>
							import('@/pages/tutorials/beginner/dom-basics/dom-events.vue'),
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
	{
		path: '/tutorials/dom-basics',
		name: 'DOMBasics',
		redirect: { name: 'dom-basics-index' },
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
	// Add the projects routes
	...projectRoutes,
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
