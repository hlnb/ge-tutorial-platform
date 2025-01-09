import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../pages/404.vue';

// Import all page components
const pages = import.meta.glob(['../pages/**/*.vue', '../pages/*.vue'], {
	eager: true,
});

// Create routes for Vue components
const routes = Object.entries(pages)
	.map(([path, mod]) => {
		// Remove '../pages/' and '.vue' from path
		let routePath = path
			.replace('../pages/', '/')
			.replace('.vue', '')
			// Convert /index to /
			.replace(/\/index$/, '/');

		// Ensure root path is just '/'
		if (routePath === '/index') routePath = '/';

		// Skip the 404 page as we'll add it separately
		if (routePath === '/404') return null;

		return {
			path: routePath,
			component: mod.default,
			meta: {
				layout: mod.default?.layout || 'default',
				title: mod.default?.frontmatter?.title,
				description: mod.default?.frontmatter?.description,
			},
		};
	})
	.filter(Boolean); // Remove null entries

// Add the 404 route
routes.push({
	path: '/:pathMatch(.*)*',
	name: 'NotFound',
	component: NotFound,
});

const router = createRouter({
	history: createWebHistory(),
	routes: [
		...routes,
		{
			path: '/posts/:id',
			component: () => import('../pages/posts/internet-everywhere.vue'),
		},
		{
			path: '/the-graphite-journal',
			component: () => import('../pages/the-graphite-journal.vue'),
		},
	],
});

// Navigation guard for setting page metadata
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = `${to.meta.title} - GraphitEdge`;
	}
	next();
});

export default router;
