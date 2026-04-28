import { createRouter, createWebHistory } from 'vue-router';
import { posts, routes, scrollBehavior, setupRouterGuards } from './config';

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior,
});

setupRouterGuards(router);

// Add global error handler
router.onError((error) => {
	console.error('Router error:', error);
});

export default router;
export { posts, routes, scrollBehavior, setupRouterGuards };
