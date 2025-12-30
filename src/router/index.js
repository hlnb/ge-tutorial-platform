import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import RSSFeedService from '@/services/RSSFeedService';

// Post metadata registry (keep this for post access control)
export const posts = {
	'design-to-code': {
		title: 'Design to Code – Part 1: Breaking Down a Mockup into Sections',
		description: 'A practical guide to breaking down a design mockup into code-ready sections for developers.',
		status: 'published',
		publishDate: '2025-09-29',
		lastUpdated: '2025-09-29',
		author: 'Helen Burgess',
		tags: ['Design', 'HTML', 'CSS', 'Workflow'],
		readingTime: '14 min',
		series: 'Design to Code',
		seriesOrder: 1,
		relatedPosts: ['modern-js-patterns', 'responsive-design'],
		imageUrl: '/images/posts/design-to-code.svg',
		excerpt: 'Learn how to break down a visual design mockup into manageable, code-ready sections and patterns.',
		featured: false,
	},
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
		excerpt: 'Ready to start your web development journey? Learn how to create your very first web page using HTML...',
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
		description: 'Learn how to add interactivity to your website with JavaScript, from basic concepts to practical examples.',
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
		excerpt: 'Discover how JavaScript brings websites to life with interactive features and dynamic content...',
		featured: false,
	},
	'backend-programming': {
		title: 'Introduction to Backend Programming with PHP and Databases',
		description: 'Discover the world of backend development with PHP and databases. Learn how these technologies work together to power dynamic websites.',
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
		excerpt: 'Ready to dive into the world of backend development? Learn how PHP and databases work together to create powerful, dynamic websites that can store and process data.',
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

// Check if post should be accessible
function checkPostAccess(slug, next) {
	const post = posts[slug];
	if (!post) {
		next('/'); 
		return;
	}

	const now = new Date();
	const publishDate = new Date(post.publishDate);

	if (
		post.status === 'published' ||
		(post.status === 'scheduled' && now >= publishDate)
	) {
		next();
	} else {
		next('/');
	}
}

// Create router with auto-generated routes
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

// Add beforeEnter guard to post routes for access control
router.beforeEach((to, from, next) => {
	// Check if it's a post route
	if (to.path.startsWith('/posts/')) {
		const slug = to.path.split('/').pop();
		checkPostAccess(slug, next);
	} else if (to.path === '/rss.xml') {
		// Handle RSS feed
		const xml = RSSFeedService.generateRSSFeed();
		const blob = new Blob([xml], { type: 'application/xml' });
		const url = URL.createObjectURL(blob);
		window.location.href = url;
		next(false);
	} else {
		next();
	}
});

// Add global error handler
router.onError((error) => {
	console.error('Router error:', error);
});

export default router;
