import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('../pages/index.vue'),
	},
	{
		path: '/posts/:id',
		component: () => import('../pages/posts/[id].vue'),
	},
	// Add other routes as needed
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
