<template>
	<div class="tutorial-layout" :class="{ 'full-width': isMainTutorialsPage }">
		<!-- Hide sidebar on main tutorials page -->
		<aside class="sidebar" v-if="!isMainTutorialsPage">
			<!-- Dynamic navigation component -->
			<component :is="currentNav" v-if="currentNav" />
		</aside>

		<!-- Main Content Area -->
		<main class="main-content">
			<div class="content">
				<router-view></router-view>
			</div>

			<!-- Tutorial Navigation -->
			<TutorialNavigation
				:prev="currentTutorial.prev"
				:next="currentTutorial.next"
			/>
		</main>
	</div>
</template>

<script setup>
import { ref, provide, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import HTMLBasicsNav from '@/components/HTMLBasicsNav.vue';
import GetStartedNav from '@/components/GetStartedNav.vue';
import CSSBasicsNav from '@/components/CSSBasicsNav.vue';
import TutorialNavigation from '@/components/TutorialNavigation.vue';

const route = useRoute();
const pageSections = ref([]);

// Check if we're on the main tutorials page
const isMainTutorialsPage = computed(() => {
	return route.path === '/tutorials';
});

// Create a components map for dynamic rendering
const navComponents = {
	HTMLBasicsNav,
	GetStartedNav,
	CSSBasicsNav,
};

// Determine which navigation component to show based on route
const currentNav = computed(() => {
	const path = route.path;
	if (path.includes('/html-basics')) {
		return HTMLBasicsNav;
	} else if (path.includes('/getting-started')) {
		return GetStartedNav;
	} else if (path.includes('/css-basics')) {
		return CSSBasicsNav;
	}
	return null;
});

// Reset pageSections when route changes
watch(
	() => route.path,
	() => {
		pageSections.value = [];
	},
);

// Provide the sections array to child components
provide('pageSections', pageSections);

// Complete tutorial map including CSS Basics
const tutorialMap = {
	// HTML Basics routes
	'html-basics': {
		prev: { path: '/tutorials/getting-started', title: 'Getting Started' },
		next: {
			path: '/tutorials/html-basics/html-basics-first-page',
			title: 'Your First HTML Page',
		},
	},
	'html-basics-first-page': {
		prev: { path: '/tutorials/html-basics', title: 'Introduction' },
		next: { path: '/tutorials/html-basics/text', title: 'Working with Text' },
	},
	'html-basics-text': {
		prev: {
			path: '/tutorials/html-basics/first-page',
			title: 'Your First HTML Page',
		},
		next: { path: '/tutorials/html-basics/links', title: 'Links & Navigation' },
	},
	'html-basics-links': {
		prev: { path: '/tutorials/html-basics/text', title: 'Working with Text' },
		next: { path: '/tutorials/html-basics/images', title: 'Images' },
	},
	'html-basics-images': {
		prev: { path: '/tutorials/html-basics/links', title: 'Links & Navigation' },
		next: {
			path: '/tutorials/html-basics/doc-structure',
			title: 'Document Structure',
		},
	},
	'html-basics-doc-structure': {
		prev: { path: '/tutorials/html-basics/images', title: 'Images' },
		next: { path: '/tutorials/html-basics/forms', title: 'Forms' },
	},
	'html-basics-forms': {
		prev: {
			path: '/tutorials/html-basics/doc-structure',
			title: 'Document Structure',
		},
		next: {
			path: '/tutorials/html-basics/html-emmet',
			title: 'HTML Emmet',
		},
	},
	'html-basics-emmet': {
		prev: { path: '/tutorials/html-basics/forms', title: 'Forms' },
		next: { path: '/tutorials/css-basics', title: 'CSS Basics Introduction' },
	},

	// CSS Basics routes
	'css-basics': {
		prev: {
			path: '/tutorials/html-basics/html-emmet',
			title: 'HTML Emmet',
		},
		next: {
			path: '/tutorials/css-basics/introduction',
			title: 'Introduction to CSS',
		},
	},
	'css-basics-introduction': {
		prev: { path: '/tutorials/css-basics', title: 'CSS Basics Overview' },
		next: { path: '/tutorials/css-basics/selectors', title: 'CSS Selectors' },
	},
	'css-basics-selectors': {
		prev: {
			path: '/tutorials/css-basics/introduction',
			title: 'Introduction to CSS',
		},
		next: {
			path: '/tutorials/css-basics/text-properties',
			title: 'Text Properties',
		},
	},
	'css-basics-box-model': {
		prev: { path: '/tutorials/css-basics/selectors', title: 'CSS Selectors' },
		next: {
			path: '/tutorials/css-basics/text-properties',
			title: 'Text Properties',
		},
	},
	'css-basics-text-properties': {
		prev: { path: '/tutorials/css-basics/box-model', title: 'The Box Model' },
		next: { path: '/tutorials/css-basics/layout', title: 'Layout Basics' },
	},

	'css-basics-layout': {
		prev: { path: '/tutorials/css-basics/box-model', title: 'The Box Model' },
		next: {
			path: '/tutorials/css-basics/colors',
			title: 'Working with Colors',
		},
	},
	'css-basics-colors': {
		prev: { path: '/tutorials/css-basics/layout', title: 'Layout Basics' },
		next: { path: '/tutorials/css-basics/modern', title: 'Modern CSS' },
	},
	'css-basics-modern': {
		prev: {
			path: '/tutorials/css-basics/colors',
			title: 'Working with Colors',
		},
		next: {
			path: '/tutorials/css-basics/responsive',
			title: 'Responsive Design',
		},
	},
	'css-basics-responsive': {
		prev: { path: '/tutorials/css-basics/modern', title: 'Modern CSS' },
		next: {
			path: '/tutorials/css-basics/flexbox',
			title: 'Flexbox',
		},
	},
	'css-basics-flexbox': {
		prev: {
			path: '/tutorials/css-basics/responsive',
			title: 'Responsive Design',
		},
		next: { path: '/tutorials', title: 'Tutorials Home' },
	},
};

const currentTutorial = computed(() => {
	return tutorialMap[route.name] || { prev: null, next: null };
});
</script>

<style scoped>
.tutorial-layout {
	display: grid;
	grid-template-columns: 300px 1fr;
	gap: 2rem;
	max-width: 1440px;
	margin: 0 auto;
	padding: 2rem;
}

/* Full width layout for main tutorials page */
.tutorial-layout.full-width {
	grid-template-columns: 1fr;
}

.sidebar {
	position: sticky;
	top: 2rem;
	height: fit-content;
	align-self: start;
}

.main-content {
	min-width: 0;
	padding: 1rem;
}

.table-of-contents {
	padding: 1.5rem;
}

.table-of-contents ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.table-of-contents li {
	margin: 0.5rem 0;
}

.table-of-contents ul ul {
	margin-left: 1.5rem;
	font-size: 0.9em;
}

.table-of-contents a {
	color: #4a4a4a;
	text-decoration: none;
	display: block;
	padding: 0.25rem 0;
}

.table-of-contents a:hover {
	color: #3273dc;
}

@media screen and (max-width: 768px) {
	.tutorial-layout {
		grid-template-columns: 1fr;
	}

	.sidebar {
		position: static;
	}

	.table-of-contents {
		display: none;
	}
}
</style>
