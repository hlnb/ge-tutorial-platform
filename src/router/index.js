import { createRouter, createWebHistory } from 'vue-router';

// Import all markdown files from pages directory
const pages = import.meta.glob(['../pages/**/*.md', '../pages/*.md'], {
	eager: true,
});

// Create routes for markdown files
const routes = Object.entries(pages).map(([path, mod]) => {
	// Remove '../pages/' and '.md' from path
	let routePath = path
		.replace('../pages/', '/')
		.replace('.md', '')
		// Convert /index to /
		.replace(/\/index$/, '/');

	// Ensure root path is just '/'
	if (routePath === '/index') routePath = '/';

	// Handle dynamic routes for posts
	if (path.includes('/posts/')) {
		routePath = routePath.replace('/posts/', '/post/');
	}

	return {
		path: routePath,
		component: mod.default,
		meta: {
			layout: mod.frontmatter?.layout || 'default',
			title: mod.frontmatter?.title,
		},
	};
});

// Add a catch-all 404 route
routes.push({
	path: '/:pathMatch(.*)*',
	name: 'NotFound',
	component: () => import('../pages/404.md'),
});

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// Optional: Log routes during development
if (import.meta.env.DEV) {
	console.log('Generated routes:', routes);
}

export default router;
