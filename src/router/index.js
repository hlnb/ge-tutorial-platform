import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../components/MainLayout.vue';
import TutorialLayout from '@/layouts/TutorialLayout.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: MainLayout,
			children: [
				{
					path: '', // default child route (home)
					name: 'home',
					component: () => import('../pages/index.vue'),
				},
				// Main Navigation Routes
				{
					path: 'tutorials',
					name: 'tutorials',
					component: () => import('../pages/tutorials/index.vue'),
				},
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
					path: 'the-graphite-journal',
					name: 'journal',
					component: () => import('../pages/the-graphite-journal.vue'),
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
				// Getting Started Routes
				{
					path: '/tutorials',
					component: TutorialLayout,
					children: [
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
									'../pages/tutorials/beginner/html-basics/introduction.vue'
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
					],
				},
			],
		},
	],
});

// Add global navigation guard to handle errors
router.onError((error) => {
	console.error('Router error:', error);
});

export default router;
