import { createRouter, createWebHistory } from 'vue-router';
import RSSFeedService from '@/services/RSSFeedService';

// Post metadata registry
export const posts = {
	'api-best-practices-beginner': {
		title: "API Best Practices: A Beginner's Guide to Building Better Web APIs",
		description: 'Learn the best practices for building APIs, from clear naming conventions to security tips, in this beginner-friendly guide.',
		status: 'published',
		publishDate: '2025-05-29',
		lastUpdated: '2025-05-29',
		author: 'Helen Burgess',
		tags: ['API', 'Web Development', 'Best Practices'],
		readingTime: '10 min',
		series: 'Web Development Fundamentals',
		seriesOrder: 9,
		relatedPosts: ['web-security-essentials', 'backend-programming', 'docker-basics-guide-for-web-developers'],
		imageUrl: '/images/posts/api-best-practices-beginner.svg',
		excerpt: 'Learn the best practices for building APIs, from clear naming conventions to security tips, in this beginner-friendly guide.',
		featured: false,
	},
	'modern-js-patterns': {
		title: 'Modern JavaScript Patterns: Best Practices for 2025',
		description: 'A practical guide to modern JavaScript patterns, including modules, async/await, composition, and more. Stay up to date with the latest best practices for writing clean, maintainable JS.',
		status: 'published',
		publishDate: '2025-07-15',
		lastUpdated: '2025-07-15',
		author: 'Elizabeth H. Burgess',
		tags: ['JavaScript', 'Best Practices', 'Patterns', 'ES2025', 'Frontend'],
		readingTime: '14 min',
		series: 'JavaScript Mastery',
		seriesOrder: 1,
		relatedPosts: ['javascript-basics', 'api-best-practices-beginner'],
		imageUrl: '/images/posts/modern-js-patterns.svg',
		excerpt: 'Explore the latest JavaScript patterns and techniques for writing robust, modern web applications in 2025.',
		featured: false,
	},
		'docker-basics-guide-for-web-developers': {
		title: 'Docker for Web Developers: Simplifying Setup and Deployment',
		description: 'A practical guide to using Docker, containers, and Docker Compose for modern web development and deployment.',
		status: 'published',
		publishDate: '2025-07-29',
		lastUpdated: '2025-07-29',
		author: 'Elizabeth H. Burgess',
		tags: ['Docker', 'Web Development', 'Containers', 'DevOps', 'Guide'],
		readingTime: '12 min',
		series: 'DevOps & Deployment',
		seriesOrder: 1,
		relatedPosts: ['api-best-practices-beginner', 'backend-programming'],
		imageUrl: '/images/posts/docker-basics-guide.svg',
		excerpt: 'Learn how Docker, containers, and Docker Compose can simplify your web development workflow and deployment process.',
		featured: false,
	},
	'dns-web-browsing': {
		title: 'DNS and Web Browsing',
		description: 'Understanding how DNS works and its role in web browsing',
		status: 'published',
		publishDate: '2025-01-29',
		lastUpdated: '2025-05-07',
		author: 'Helen Burgess',
		tags: ['DNS', 'Web', 'Networking'],
		readingTime: '5 min',
		series: 'Web Fundamentals',
		seriesOrder: 1,
		relatedPosts: ['internet-everywhere'],
		imageUrl: '/images/posts/dns-web-browsing.svg',
		excerpt: 'A deep dive into the Domain Name System...',
		featured: false,
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
		seriesOrder: 3,
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
		seriesOrder: 4,
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
		seriesOrder: 5,
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
		seriesOrder: 6,
		relatedPosts: ['javascript-basics', 'build-first-web-page'],
		imageUrl: '/images/posts/backend-programming.svg',
		excerpt:
			'Ready to dive into the world of backend development? Learn how PHP and databases work together to create powerful, dynamic websites that can store and process data.',
		featured: false,
	},
	'web-security-essentials': {
		title: 'Web Security Essentials: Protecting Your Site From Common Threats',
		description: 'Learn essential web security practices to protect your website from common threats. From SSL/TLS to security headers, we cover everything you need to know.',
		status: 'published',
		publishDate: '2025-04-15',
		lastUpdated: '2025-04-15',
		author: 'Helen Burgess',
		tags: ['Security', 'Web Development', 'Best Practices'],
		readingTime: '12 min',
		series: 'Web Development Fundamentals',
		seriesOrder: 7,
		relatedPosts: ['web-performance-optimization', 'backend-programming'],
		imageUrl: '/images/posts/web-security-essentials.svg',
		excerpt: 'Learn how to protect your website from common security threats with practical, actionable steps that don\'t require advanced technical knowledge.',
		featured: true,
	},
	'web-performance-optimization': {
		title: 'Speed Matters: A Practical Guide to Web Performance Optimization',
		description: 'Learn practical strategies to optimize your website\'s performance, from caching to image optimization, with real-world examples and case studies.',
		status: 'published',
		publishDate: '2025-04-30',
		lastUpdated: '2025-04-30',
		author: 'Helen Burgess',
		tags: ['Performance', 'Web Development', 'Optimization'],
		readingTime: '15 min',
		series: 'Web Development Fundamentals',
		seriesOrder: 8,
		relatedPosts: ['web-security-essentials', 'backend-programming'],
		imageUrl: '/images/posts/web-performance-optimization.svg',
		excerpt: 'Discover how to make your website blazingly fast with practical optimization strategies, real-world case studies, and actionable tips you can implement today.',
		featured: false,
	},
	'git-basics': {
		title: 'Git Basics: Version Control Made Simple',
		description: 'Learn the fundamentals of Git version control in plain English. Perfect for beginners who want to understand why version control matters and how to get started.',
		status: 'published',
		publishDate: '2025-05-15',
		lastUpdated: '2025-05-15',
		author: 'Helen Burgess',
		tags: ['Git', 'Version Control', 'Beginners', 'Development'],
		readingTime: '8 min',
		series: 'Development Tools',
		seriesOrder: 1,
		relatedPosts: ['javascript-basics', 'backend-programming'],
		imageUrl: '/images/posts/git-basics.svg',
		excerpt: 'Ever saved multiple versions of a file with names like "final", "final_v2", "final_REALLY_FINAL"? Then you already understand why we need version control! Let\'s demystify Git - the tool that solves this problem and so much more.',
		featured: false,
	},
};

// Project routes
const projectRoutes = [
	{
		path: '/projects',
		name: 'projects',
		component: () => import('@/pages/projects/index.vue'),
		children: [
			{
				path: 'photo-gallery',
				name: 'photo-gallery',
				component: () => import('@/pages/projects/photo-gallery.vue'),
				props: true,
				meta: {
					title: 'Photo Gallery Project',
					description: 'Create a beautiful photo gallery with CSS Grid and Flexbox',
				}
			},
			{
				path: 'todo-list',
				name: 'todo-list',
				component: () => import('@/pages/projects/todo-list.vue'),
				props: true,
				meta: {
					title: 'Todo List Project',
					description: 'Build a functional todo list application with JavaScript',
				}
			},
			{
				path: 'personal-profile',
				name: 'personal-profile',
				component: () => import('@/pages/projects/personal-profile.vue'),
				props: true,
				meta: {
					title: 'Personal Profile Page Project',
					description:
						'Create a simple personal profile page with basic HTML structure',
				}
			},
			{
				path: 'recipe-page',
				name: 'recipe-page',
				component: () => import('@/pages/projects/recipe-page.vue'),
				props: true,
				meta: {
					title: 'Recipe Page Project',
					description: 'Build a page for your favorite recipe using HTML structure',
				}
			},
			{
				path: 'card-components',
				name: 'card-components',
				component: () => import('@/pages/projects/card-components.vue'),
				props: true,
				meta: {
					title: 'Card Components Project',
					description: 'Create different card designs using the CSS box model',
				}
			},
			{
				path: 'selector-challenge',
				name: 'selector-challenge',
				component: () => import('@/pages/projects/selector-challenge.vue'),
				props: true,
				meta: {
					title: 'CSS Selector Challenge',
					description: 'Practice using different CSS selectors to style elements',
				}
			},
			{
				path: 'calculator',
				name: 'calculator',
				component: () => import('@/pages/projects/calculator.vue'),
				props: true,
				meta: {
					title: 'Calculator App Project',
					description: 'Build a basic calculator with arithmetic operators',
				}
			},
			{
				path: 'quiz-game',
				name: 'quiz-game',
				component: () => import('@/pages/projects/quiz-game.vue'),
				props: true,
				meta: {
					title: 'Quiz Game Project',
					description: 'Build an interactive quiz game with JavaScript',
				}
			},
			{
				path: 'hello-world',
				name: 'hello-world',
				component: () => import('@/pages/projects/hello-world.vue'),
				props: true,
				meta: {
					title: 'Hello World App Project',
					description: 'Create a simple interactive greeting application',
				}
			},
			{
				path: 'number-game',
				name: 'number-game',
				component: () => import('@/pages/projects/number-game.vue'),
				props: true,
				meta: {
					title: 'Number Guessing Game Project',
					description: 'Build a number guessing game with basic JavaScript',
				}
			},
			{
				path: 'interactive-demo',
				name: 'interactive-demo',
				component: () => import('@/pages/projects/interactive-demo.vue'),
				props: true,
				meta: {
					title: 'Interactive Message Board Project',
					description: 'Build an interactive message board with dynamic content',
				}
			},
			{
				path: 'color-switcher',
				name: 'color-switcher',
				component: () => import('@/pages/projects/color-switcher.vue'),
				props: true,
				meta: {
					title: 'Dynamic Color Switcher Project',
					description: 'Create a color switcher with dynamic updates',
				}
			},
			{
				path: 'grade-calculator',
				name: 'grade-calculator',
				component: () => import('@/pages/projects/grade-calculator.vue'),
				props: true,
				meta: {
					title: 'Grade Calculator Project',
					description: 'Build a calculator that computes final grades based on weighted assignments',
				}
			},
			{
				path: 'temp-converter',
				name: 'temperature-converter',
				component: () => import('@/pages/projects/temperature-converter.vue'),
				props: true,
				meta: {
					title: 'Temperature Converter Project',
					description: 'Build a temperature converter that handles different units and real-time updates',
				}
			},
			{
				path: 'photo-gallery-2',
				name: 'photo-gallery-2',
				component: () => import('@/pages/projects/photo-gallery-2.vue'),
				props: true,
				meta: {
					title: 'Enhanced Photo Gallery Project',
					description: 'Building on your JavaScript and DOM knowledge, create an advanced interactive photo gallery that demonstrates array operations and dynamic DOM manipulation.',
				}
			},
			{
				path: 'todo-list-2',
				name: 'todo-list-2',
				component: () => import('@/pages/projects/todo-list-2.vue'),
				props: true,
				meta: {
					title: 'Enhanced Todo List Project',
					description: 'Apply your JavaScript array methods and DOM manipulation skills to build a sophisticated task management application.',
				}
			},
			{
				path: 'color-palette',
				name: 'color-palette',
				component: () => import('@/pages/projects/color-palette.vue'),
				props: true,
				meta: {
					title: 'Color Palette Project',
					description: 'Learn about CSS colors and typography by creating a design system',
				}
			},
			{
				path: 'photo-gallery-enhanced',
				name: 'photo-gallery-enhanced',
				component: () => import('@/pages/projects/photo-gallery-enhanced.vue'),
				props: true,
				meta: {
					title: 'Enhanced Photo Gallery Project',
					description: 'Transform the basic photo gallery into a responsive, visually appealing showcase using CSS Grid and Flexbox',
				}
			},
			{
				path: 'personal-profile-enhanced',
				name: 'personal-profile-enhanced',
				component: () => import('@/pages/projects/personal-profile-enhanced.vue'),
				props: true,
				meta: {
					title: 'Enhanced Personal Profile Project',
					description: 'Style your personal profile page with modern CSS techniques and create a professional online presence',
				}
			},
			{
				path: 'todo-list-enhanced',
				name: 'todo-list-enhanced',
				component: () => import('@/pages/projects/todo-list-enhanced.vue'),
				props: true,
				meta: {
					title: 'Enhanced Todo List Project',
					description: 'Add smooth animations and transitions to your todo list, making it more engaging and interactive',
				}
			},
			{
				path: 'git-install',
				name: 'project-git-install',
				component: () => import('@/pages/projects/git-install.vue'),
				props: true,
			},
			{
				path: 'git-verify',
				name: 'project-git-verify',
				component: () => import('@/pages/projects/git-verify.vue'),
				props: true,
			},
			{
				path: 'git-clone',
				name: 'project-git-clone',
				component: () => import('@/pages/projects/git-clone.vue'),
				props: true,
			},
			{
				path: 'git-commit',
				name: 'project-git-commit',
				component: () => import('@/pages/projects/git-commit.vue'),
				props: true,
			},
			{
				path: 'git-branch',
				name: 'project-git-branch',
				component: () => import('@/pages/projects/git-branch.vue'),
				props: true,
			},
			{
				path: 'git-merge',
				name: 'project-git-merge',
				component: () => import('@/pages/projects/git-merge.vue'),
				props: true,
			},
			{
				path: 'git-remote',
				name: 'project-git-remote',
				component: () => import('@/pages/projects/git-remote.vue'),
				props: true,
			},
		],
	},
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

	// Main tutorials page
	{
		path: '/tutorials',
		name: 'tutorials-index',
		component: () => import('@/layouts/TutorialLayout.vue'),
		children: [
			{
				path: '',
				name: 'tutorials-index-page',
				component: () => import('@/pages/tutorials/index.vue'),
			},
			// Getting Started section
			{
				path: 'getting-started',
				component: () => import('@/pages/tutorials/getting-started/index.vue'),
				children: [
					{
						path: '',
						name: 'getting-started-index',
						component: () => import('@/pages/tutorials/getting-started/index.vue'),
					},
					{
						path: 'how-internet-works',
						name: 'getting-started-how-internet-works',
						component: () => import('@/pages/tutorials/getting-started/how-internet-works.vue'),
					},
					{
						path: 'web-basics',
						name: 'getting-started-web-basics',
						component: () => import('@/pages/tutorials/getting-started/web-basics.vue'),
					},
					{
						path: 'dev-environment',
						name: 'getting-started-dev-environment',
						component: () => import('@/pages/tutorials/getting-started/dev-environment.vue'),
					},
					{
						path: 'browser-tools',
						name: 'getting-started-browser-tools',
						component: () => import('@/pages/tutorials/getting-started/browser-tools.vue'),
					},
					{
						path: 'text-editors',
						name: 'getting-started-text-editors',
						component: () => import('@/pages/tutorials/getting-started/text-editors.vue'),
					},
					{
						path: 'domain-hosting',
						name: 'getting-started-domain-hosting',
						component: () => import('@/pages/tutorials/getting-started/domain-hosting.vue'),
					},
				],
			},

			// HTML Basics section
			{
				path: 'html-basics',
				component: () => import('@/pages/tutorials/beginner/html-basics/index.vue'),
				children: [
					{
						path: '',
						name: 'html-basics-index',
						component: () => import('@/pages/tutorials/beginner/html-basics/index.vue'),
					},
					{
						path: 'introduction',
						name: 'html-basics-introduction',
						component: () => import('@/pages/tutorials/beginner/html-basics/introduction.vue'),
					},
					{
						path: 'first-page',
						name: 'html-basics-first-page',
						component: () => import('@/pages/tutorials/beginner/html-basics/HTMLFirstPage.vue'),
					},
					{
						path: 'text',
						name: 'html-basics-text',
						component: () => import('@/pages/tutorials/beginner/html-basics/HTMLText.vue'),
					},
					{
						path: 'links',
						name: 'html-basics-links',
						component: () => import('@/pages/tutorials/beginner/html-basics/HTMLLinks.vue'),
					},
					{
						path: 'images',
						name: 'html-basics-images',
						component: () => import('@/pages/tutorials/beginner/html-basics/HTMLImages.vue'),
					},
					{
						path: 'doc-structure',
						name: 'html-basics-doc-structure',
						component: () => import('@/pages/tutorials/beginner/html-basics/HTMLDocStructure.vue'),
					},
					{
						path: 'forms',
						name: 'html-basics-forms',
						component: () => import('@/pages/tutorials/beginner/html-basics/HTMLForms.vue'),
					},
					{
						path: 'html-emmet',
						name: 'html-basics-html-emmet',
						component: () => import('@/pages/tutorials/beginner/html-basics/HTMLEmmet.vue'),
					},
				],
			},

			// CSS Basics section
			{
				path: 'css-basics',
				component: () => import('@/pages/tutorials/beginner/css-basics/index.vue'),
				children: [
					{
						path: '',
						name: 'css-basics-index',
						component: () => import('@/pages/tutorials/beginner/css-basics/index.vue'),
					},
					{
						path: 'introduction',
						name: 'css-basics-introduction',
						component: () => import('@/pages/tutorials/beginner/css-basics/introduction.vue'),
					},
					{
						path: 'selectors',
						name: 'css-basics-selectors',
						component: () => import('@/pages/tutorials/beginner/css-basics/selectors.vue'),
					},
					{
						path: 'box-model',
						name: 'css-basics-box-model',
						component: () => import('@/pages/tutorials/beginner/css-basics/box-model.vue'),
					},
					{
						path: 'text',
						name: 'css-basics-text-properties',
						component: () => import('@/pages/tutorials/beginner/css-basics/text.vue'),
					},
					{
						path: 'layout',
						name: 'css-basics-layout',
						component: () => import('@/pages/tutorials/beginner/css-basics/layout.vue'),
					},
					{
						path: 'colors',
						name: 'css-basics-colors',
						component: () => import('@/pages/tutorials/beginner/css-basics/colors.vue'),
					},
					{
						path: 'modern',
						name: 'css-basics-modern',
						component: () => import('@/pages/tutorials/beginner/css-basics/modern.vue'),
					},
					{
						path: 'responsive',
						name: 'css-basics-responsive',
						component: () => import('@/pages/tutorials/beginner/css-basics/responsive.vue'),
					},
					{
						path: 'flexbox',
						name: 'css-basics-flexbox',
						component: () => import('@/pages/tutorials/beginner/css-basics/flexbox.vue'),
					},
				],
			},

			// JavaScript Basics section
			{
				path: 'javascript-basics',
				component: () => import('@/pages/tutorials/beginner/javascript-basics/index.vue'),
				children: [
					{
						path: '',
						name: 'javascript-basics-index',
						component: () => import('@/pages/tutorials/beginner/javascript-basics/index.vue'),
					},
					{
						path: 'introduction',
						name: 'javascript-basics-introduction',
						component: () => import('@/pages/tutorials/beginner/javascript-basics/introduction.vue'),
					},
					{
						path: 'variables-data-types',
						name: 'javascript-basics-variables-data-types',
						component: () => import('@/pages/tutorials/beginner/javascript-basics/variables-data-types.vue'),
					},
					{
						path: 'conditionals',
						name: 'javascript-basics-conditionals',
						component: () => import('@/pages/tutorials/beginner/javascript-basics/conditionals.vue'),
					},
					{
						path: 'operators',
						name: 'javascript-basics-operators',
						component: () => import('@/pages/tutorials/beginner/javascript-basics/operators.vue'),
						meta: {
							title: 'Operators & Expressions in JavaScript',
							description: 'Learn about JavaScript operators for calculations, comparisons, and logical operations',
						},
					},
					{
						path: 'loops',
						name: 'javascript-basics-loops',
						component: () => import('@/pages/tutorials/beginner/javascript-basics/loops.vue'),
						meta: {
							title: 'Loops in JavaScript',
							description: 'Learn how to use loops to repeat actions and iterate through data in JavaScript',
						},
					},
					{
						path: 'functions',
						name: 'javascript-basics-functions',
						component: () => import('@/pages/tutorials/beginner/javascript-basics/functions.vue'),
						meta: {
							title: 'Functions in JavaScript',
							description: 'Learn how to create and use functions in JavaScript to write reusable code',
						},
					},
				],
			},

			// DOM Basics section
			{
				path: 'dom-basics',
				component: () => import('@/pages/tutorials/beginner/dom-basics/index.vue'),
				children: [
					{
						path: '',
						name: 'dom-basics-index',
						component: () => import('@/pages/tutorials/beginner/dom-basics/index.vue'),
					},
					{
						path: 'introduction',
						name: 'dom-basics-introduction',
						component: () => import('@/pages/tutorials/beginner/dom-basics/introduction.vue'),
					},
					{
						path: 'arrays',
						name: 'dom-basics-arrays',
						component: () => import('@/pages/tutorials/beginner/dom-basics/arrays.vue'),
						meta: {
							title: 'Arrays and Array Methods in JavaScript',
							description: 'Master JavaScript arrays with hands-on practice in DOM manipulation, leading to enhanced photo gallery and todo list projects',
							practiceProjects: ['photo-gallery-2','todo-list-2']
						}
					},
					{
						path: 'dom-manipulation',
						name: 'dom-basics-dom-manipulation',
						component: () => import('@/pages/tutorials/beginner/dom-basics/dom-manipulation.vue'),
					},
					{
						path: 'dom-events',
						name: 'dom-basics-dom-events',
						component: () => import('@/pages/tutorials/beginner/dom-basics/dom-events.vue'),
					},
				],
			},

			// Git Basics section
			{
				path: 'git-basics',
				component: () => import('@/pages/tutorials/beginner/git-basics/index.vue'),
				children: [
					{
						path: '',
						name: 'git-basics-index',
						component: () => import('@/pages/tutorials/beginner/git-basics/index.vue'),
					},
					{
						path: 'introduction',
						name: 'git-basics-introduction',
						component: () => import('@/pages/tutorials/beginner/git-basics/introduction.vue'),
					},
					{
						path: 'installation',
						name: 'git-basics-installation',
						component: () => import('@/pages/tutorials/beginner/git-basics/installation.vue'),
					},
					{
						path: 'basic-commands',
						name: 'git-basics-commands',
						component: () => import('@/pages/tutorials/beginner/git-basics/basic-commands.vue'),
					},
					{
						path: 'branching',
						name: 'git-basics-branching',
						component: () => import('@/pages/tutorials/beginner/git-basics/branching.vue'),
					},
					{
						path:'merging',
						name: 'git-basics-merging',
						component: () => import('@/pages/tutorials/beginner/git-basics/merging.vue'),
					},
					{
						path: 'remote-repositories',
						name: 'git-basics-remote-repositories',
						component: () => import('@/pages/tutorials/beginner/git-basics/remote-repositories.vue'),
					},
					{
						path: 'workflow',
						name: 'git-basics-workflow',
						component: () => import('@/pages/tutorials/beginner/git-basics/workflow.vue'),
					},
					{
						path: 'conclusion',
						name: 'git-basics-conclusion',
						component: () => import('@/pages/tutorials/beginner/git-basics/conclusion.vue'),
					},
				],
			},
		],
	},	

	// Spread in project and auth routes
	...projectRoutes,
	...authRoutes,

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
						beforeEnter: (to, from, next) =>
							checkPostAccess('build-first-web-page', next),
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
						component: () => import('../pages/posts/backend-programming.vue'),
						props: true,
						beforeEnter: (to, from, next) =>
							checkPostAccess('backend-programming', next),
					},
					{
						path: 'web-security-essentials',
						component: () => import('../pages/posts/web-security-essentials.vue'),
						props: true,
						beforeEnter: (to, from, next) =>
							checkPostAccess('web-security-essentials', next),
					},
					{
						path: 'web-performance-optimization',
						component: () => import('../pages/posts/web-performance-optimization.vue'),
						props: true,
						beforeEnter: (to, from, next) =>
							checkPostAccess('web-performance-optimization', next),
					},
					{
						path: 'git-basics',
						component: () => import('@/pages/posts/git-basics.vue'),
						props: true,
						beforeEnter: (to, from, next) =>
							checkPostAccess('git-basics', next),
					},
					{
						path: 'api-best-practices-beginner',
						component: () => import('../pages/posts/api-best-practices-beginner.vue'),
						props: true,
						beforeEnter: (to, from, next) =>
								checkPostAccess('api-best-practices-beginner', next),
					},
					{
						path: 'docker-basics-guide-for-web-developers',
						component: () => import('../pages/posts/docker-basics-guide-for-web-developers.vue'),
						props: true,
						beforeEnter: (to, from, next) =>
							checkPostAccess('docker-basics-guide-for-web-developers', next),
					},
					{
						path: 'modern-js-patterns',
						component: () => import('../pages/posts/modern-js-patterns.vue'),
						props: true,
						beforeEnter: (to, from, next) =>
							checkPostAccess('modern-js-patterns', next),
					},
				],
			},
		],
	},
	// Redirects for backward compatibility with old route names
	{
		path: '/tutorials/getting-started',
		redirect: { name: 'getting-started-index' },
	},
	{
		path: '/tutorials/html-basics',
		redirect: { name: 'html-basics-index' },
	},
	{
		path: '/tutorials/css-basics',
		redirect: { name: 'css-basics-index' },
	},
	{
		path: '/tutorials/dom-basics',
		redirect: { name: 'dom-basics-index' },
	},
	{
		path: '/tutorials/html-basics/html-emmet',
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
	// Community page route
	{
		path: '/community',
		name: 'community',
		component: () => import('@/pages/community.vue'),
		meta: {
			title: 'GraphitEdge Community',
			description: 'Connect with other learners, get support, and join the GraphitEdge community.'
		}
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

// Add a function to get the current tutorial path
function getCurrentTutorialPath(to) {
	const tutorialPath = to.meta.tutorialPath;
	if (tutorialPath) return tutorialPath;
	
	// If no tutorial path is specified, try to get it from the referrer
	const referrer = document.referrer;
	if (referrer) {
		const url = new URL(referrer);
		if (url.pathname.startsWith('/tutorials/')) {
			return url.pathname;
		}
	}
	
	return null;
}

export default router;
