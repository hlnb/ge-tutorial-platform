<template>
	<div class="tutorial-layout" :class="{ 'full-width': isMainTutorialsPage }">
		<!-- Hide sidebar on main tutorials page -->
		<aside v-if="!isMainTutorialsPage" class="sidebar">
			<!-- Dynamic navigation component -->
			<component :is="currentNav" v-if="currentNav" />

			<!-- On this page navigation is now handled by the navigation components -->
		</aside>

		<!-- Main Content Area -->
		<main class="main-content">
			<div class="content">
				<router-view />
			</div>

			<!-- Tutorial Navigation -->
			<TutorialNavigation
				:prev="currentTutorial.prev"
				:next="currentTutorial.next"
				:hide-completion="shouldHideCompletion"
				:hide-quiz-indicator="shouldHideQuizIndicator"
			/>
		</main>
	</div>
</template>

<script setup>
import { ref, provide, watch, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import HTMLBasicsNav from '@/components/HTMLBasicsNav.vue';
import GetStartedNav from '@/components/GetStartedNav.vue';
import CSSBasicsNav from '@/components/CSSBasicsNav.vue';
import JavaScriptBasicsNav from '@/components/JavaScriptBasicsNav.vue';
import DOMBasicsNav from '@/components/DOMBasicsNav.vue';
import GitBasicsNav from '@/components/GitBasicsNav.vue';
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import progressService from '@/services/ProgressService';
import { hasQuiz } from '@/utils/quizUtils';

const route = useRoute();
const router = useRouter();
const pageSections = ref([]);

// Add scroll tracking variables
const scrollThrottleTimeout = ref(null);
const scrollThrottleDelay = 1000; // 1 second delay between scroll tracking updates

// Check if we're on the main tutorials page
const isMainTutorialsPage = computed(() => {
	return route.path === '/tutorials';
});

// Create a components map for dynamic rendering
const navComponents = {
	HTMLBasicsNav,
	GetStartedNav,
	CSSBasicsNav,
	JavaScriptBasicsNav,
	DOMBasicsNav,
	GitBasicsNav, // Added GitBasicsNav
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
	} else if (path.includes('/javascript-basics')) {
		return JavaScriptBasicsNav;
	} else if (path.includes('/dom-basics')) {
		return DOMBasicsNav;
	} else if (path.includes('/git-basics')) {
		return GitBasicsNav;
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
	'html-basics-index': {
		prev: { path: '/tutorials/getting-started',title: 'Getting Started' },
		next: {
			path: '/tutorials/html-basics/first-page',
			title: 'Your First HTML Page',
		},
	},
	'html-basics-first-page': {
		prev: { path: '/tutorials/html-basics',title: 'Introduction' },
		next: { path: '/tutorials/html-basics/text',title: 'Working with Text' },
	},
	'html-basics-text': {
		prev: {
			path: '/tutorials/html-basics/first-page',
			title: 'Your First HTML Page',
		},
		next: { path: '/tutorials/html-basics/links',title: 'Links & Navigation' },
	},
	'html-basics-links': {
		prev: { path: '/tutorials/html-basics/text',title: 'Working with Text' },
		next: { path: '/tutorials/html-basics/images',title: 'Images' },
	},
	'html-basics-images': {
		prev: { path: '/tutorials/html-basics/links',title: 'Links & Navigation' },
		next: {
			path: '/tutorials/html-basics/doc-structure',
			title: 'Document Structure',
		},
	},
	'html-basics-doc-structure': {
		prev: { path: '/tutorials/html-basics/images',title: 'Images' },
		next: { path: '/tutorials/html-basics/forms',title: 'Forms' },
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
	'html-basics-html-emmet': {
		prev: { path: '/tutorials/html-basics/forms',title: 'Forms' },
		next: { path: '/tutorials/css-basics',title: 'CSS Basics Introduction' },
	},

	// Getting Started routes
	'getting-started-index': {
		prev: { path: '/tutorials',title: 'Tutorials Home' },
		next: {
			path: '/tutorials/getting-started/how-internet-works',
			title: 'How the Internet Works',
		},
	},
	'getting-started-how-internet-works': {
		prev: { path: '/tutorials/getting-started',title: 'Introduction' },
		next: {
			path: '/tutorials/getting-started/web-basics',
			title: 'Web Basics',
		},
	},
	'getting-started-web-basics': {
		prev: {
			path: '/tutorials/getting-started/how-internet-works',
			title: 'How the Internet Works',
		},
		next: {
			path: '/tutorials/getting-started/dev-environment',
			title: 'Setting Up Your Environment',
		},
	},
	'getting-started-dev-environment': {
		prev: {
			path: '/tutorials/getting-started/web-basics',
			title: 'Web Basics',
		},
		next: {
			path: '/tutorials/getting-started/text-editors',
			title: 'Text Editors',
		},
	},
	'getting-started-text-editors': {
		prev: {
			path: '/tutorials/getting-started/dev-environment',
			title: 'Setting Up Your Environment',
		},
		next: {
			path: '/tutorials/getting-started/browser-tools',
			title: 'Browser Development Tools',
		},
	},
	'getting-started-browser-tools': {
		prev: {
			path: '/tutorials/getting-started/text-editors',
			title: 'Text Editors',
		},
		next: {
			path: '/tutorials/getting-started/domain-hosting',
			title: 'Domain Names & Web Hosting',
		},
	},
	'getting-started-domain-hosting': {
		prev: {
			path: '/tutorials/getting-started/browser-tools',
			title: 'Browser Development Tools',
		},
		next: { path: '/tutorials/html-basics',title: 'HTML Basics' },
	},

	// CSS Basics routes
	'css-basics-index': {
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
		prev: { path: '/tutorials/css-basics',title: 'CSS Basics Overview' },
		next: { path: '/tutorials/css-basics/selectors',title: 'CSS Selectors' },
	},
	'css-basics-selectors': {
		prev: {
			path: '/tutorials/css-basics/introduction',
			title: 'Introduction to CSS',
		},
		next: {
			path: '/tutorials/css-basics/box-model',
			title: 'The Box Model',
		},
	},
	'css-basics-box-model': {
		prev: { path: '/tutorials/css-basics/selectors',title: 'CSS Selectors' },
		next: {
			path: '/tutorials/css-basics/text-properties',
			title: 'Text Properties',
		},
	},
	'css-basics-text-properties': {
		prev: { path: '/tutorials/css-basics/box-model',title: 'The Box Model' },
		next: { path: '/tutorials/css-basics/layout',title: 'Layout Basics' },
	},
	'css-basics-layout': {
		prev: {
			path: '/tutorials/css-basics/text-properties',
			title: 'Text Properties',
		},
		next: {
			path: '/tutorials/css-basics/colors',
			title: 'Working with Colors',
		},
	},
	'css-basics-colors': {
		prev: { path: '/tutorials/css-basics/layout',title: 'Layout Basics' },
		next: { path: '/tutorials/css-basics/modern',title: 'Modern CSS' },
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
		prev: { path: '/tutorials/css-basics/modern',title: 'Modern CSS' },
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
		next: { path: '/tutorials',title: 'Tutorials Home' },
	},

	// JavaScript Basics routes
	'javascript-basics-index': {
		prev: { path: '/tutorials/css-basics/flexbox',title: 'Flexbox' },
		next: {
			path: '/tutorials/javascript-basics/introduction',
			title: 'Introduction to JavaScript',
		},
	},
	'javascript-basics-introduction': {
		prev: {
			path: '/tutorials/javascript-basics',
			title: 'JavaScript Basics Overview',
		},
		next: {
			path: '/tutorials/javascript-basics/variables-data-types',
			title: 'Variables and Data Types',
		},
	},
	'javascript-basics-variables-data-types': {
		prev: {
			path: '/tutorials/javascript-basics/introduction',
			title: 'Introduction to JavaScript',
		},
		next: {
			path: '/tutorials/javascript-basics/conditionals',
			title: 'Conditionals and Logic',
		},
	},

	// DOM Basics routes
	'dom-basics-index': {
		prev: { path: '/tutorials/javascript-basics/conditionals',title: 'JavaScript Conditionals' },
		next: { path: '/tutorials/dom-basics/introduction',title: 'Introduction to DOM' }
	},
	'dom-basics-introduction': {
		prev: { path: '/tutorials/dom-basics',title: 'DOM Basics Overview' },
		next: { path: '/tutorials/dom-basics/arrays',title: 'Arrays and Methods' }
	},
	'dom-basics-arrays': {
		prev: { path: '/tutorials/dom-basics/introduction',title: 'Introduction to DOM' },
		next: { path: '/tutorials/dom-basics/dom-manipulation',title: 'DOM Manipulation' }
	},
	'dom-basics-dom-manipulation': {
		prev: { path: '/tutorials/dom-basics/arrays',title: 'Arrays and Methods' },
		next: { path: '/tutorials/dom-basics/dom-events',title: 'Event Handling' }
	},
	'dom-basics-dom-events': {
		prev: { path: '/tutorials/dom-basics/dom-manipulation',title: 'DOM Manipulation' },
		next: { path: '/tutorials',title: 'Tutorials Home' }
	},
	// Git Basics routes
	'git-basics-index': {
		prev: { path: '/tutorial',title: 'Tutorials Home' },
		next: { path: '/tutorials/git-basics/introduction',title: 'Introduction to Git' }
	},
	'git-basics-introduction': {
		prev: { path: '/tutorials/git-basics',title: 'Git Basics Overview' },
		next: { path: '/tutorials/git-basics/basic-commands',title: 'Basic Commands' }
	},
	'git-basics-basic-commands': {
		prev: { path: '/tutorials/git-basics/introduction',title: 'Introduction to Git' },
		next: { path: '/tutorials/git-basics/branching',title: 'Branching & Merging' }
	},
	'git-basics-branching': {
		prev: { path: '/tutorials/git-basics/basic-commands',title: 'Basic Commands' },
		next: { path: '/tutorials/git-basics/remote',title: 'Remote Repositories' }
	},
	'git-basics-remote': {
		prev: { path: '/tutorials/git-basics/branching',title: 'Branching & Merging' },
		next: { path: '/tutorials/git-basics/workflow',title: 'Workflow' }
	},
	'git-basics-workflow': {
		prev: { path: '/tutorials/git-basics/remote',title: 'Remote Repositories' },
		next: { path: '/tutorials',title: 'Tutorials Home' }
	}

};

const currentTutorial = computed(() => {
	// Use route.path to find the matching tutorial instead of route.name
	const pathSegments = route.path.split('/');
	let routeKey = '';

	if (pathSegments.length >= 3) {
		// For main section pages like /tutorials/html-basics
		if (pathSegments.length === 3) {
			const section = pathSegments[2]; // e.g., 'html-basics'
			routeKey = `${section}-index`; // e.g., 'html-basics-index'
		}
		// For subsection pages like /tutorials/html-basics/first-page
		else if (pathSegments.length >= 4) {
			const section = pathSegments[2]; // e.g., 'html-basics'
			const subsection = pathSegments[3]; // e.g., 'first-page'
			routeKey = `${section}-${subsection}`; // e.g., 'html-basics-first-page'
		}
	}

	console.log('Current route key:', routeKey);
	console.log('Current route name:', route.name);
	console.log('Available tutorial map keys:', Object.keys(tutorialMap));

	// Handle legacy route names
	let legacyRouteKey = null;
	if (route.name === 'GettingStarted') {
		legacyRouteKey = 'getting-started-index';
	} else if (route.name === 'HTMLBasics') {
		legacyRouteKey = 'html-basics-index';
	} else if (route.name === 'CSSBasics') {
		legacyRouteKey = 'css-basics-index';
	} else if (route.name === 'html-basics-emmet') {
		legacyRouteKey = 'html-basics-html-emmet';
	}

	// Try to find the tutorial in this order:
	// 1. By derived route key from path
	// 2. By legacy route name mapping
	// 3. By exact route name
	// 4. Fallback to empty navigation
	return (
		tutorialMap[routeKey] ||
		(legacyRouteKey && tutorialMap[legacyRouteKey]) ||
		tutorialMap[route.name] || { prev: null, next: null }
	);
});

// Add this after the currentNav computed property
watch(
	() => route.name,
	(newName) => {
		console.log('Route name changed to:', newName);
		console.log(
			'All available routes:',
			router
				.getRoutes()
				.map((r) => r.name)
				.filter(Boolean),
		);
	},
	{ immediate: true },
);

// Add this after the imports
onMounted(() => {
	console.log('TutorialLayout mounted');
	console.log('Current route:', route.path, route.name);
	console.log(
		'All routes:',
		router.getRoutes().map((r) => ({ name: r.name, path: r.path })),
	);

	// Add scroll event listener for progress tracking
	window.addEventListener('scroll', handleScroll);
});

// Add this before the end of the script
onBeforeUnmount(() => {
	// Remove scroll event listener
	window.removeEventListener('scroll', handleScroll);

	// Clear any pending throttle timeout
	if (scrollThrottleTimeout.value) {
		clearTimeout(scrollThrottleTimeout.value);
	}
});

// Handle scroll event for progress tracking
const handleScroll = () => {
	// Skip if we're on the main tutorials page
	if (isMainTutorialsPage.value) return;

	// Throttle scroll events to avoid excessive updates
	if (scrollThrottleTimeout.value) return;

	scrollThrottleTimeout.value = setTimeout(() => {
		// Calculate scroll position
		const scrollPosition = window.scrollY + window.innerHeight;
		const totalHeight = document.documentElement.scrollHeight;

		// Track progress
		progressService.trackScrollProgress(
			route.path,
			scrollPosition,
			totalHeight,
		);

		// Clear timeout
		scrollThrottleTimeout.value = null;
	}, scrollThrottleDelay);
};

// Add this after the currentTutorial computed property
const shouldHideCompletion = computed(() => {
	// List of routes that have their own custom completion sections
	const routesWithCustomCompletion = [
		'/tutorials/html-basics/first-page',
		'/tutorials/html-basics/text',
		'/tutorials/html-basics/links',
		'/tutorials/html-basics/images',
		'/tutorials/html-basics/doc-structure',
		'/tutorials/html-basics/forms',
		'/tutorials/html-basics/html-emmet',
		// Add other routes here as needed
	];

	return routesWithCustomCompletion.includes(route.path);
});

// Add this after the shouldHideCompletion computed property
const shouldHideQuizIndicator = computed(() => {
	// List of routes that have their own quiz indicators
	const routesWithCustomQuizIndicators = [
		'/tutorials/html-basics/text',
		// Add other routes here as needed
	];

	return routesWithCustomQuizIndicators.includes(route.path);
});

// Check if current tutorial has a quiz
const tutorialHasQuiz = computed(() => {
	return hasQuiz(route.path);
});

// Provide this to child components
provide('hasQuiz', tutorialHasQuiz);

// Provide the current tutorial info to child components
provide('currentTutorial', currentTutorial);
</script>

<style scoped>
.tutorial-layout {
	display: grid;
	grid-template-columns: 300px 1fr;
	gap: 2rem;
	max-width: 1440px;
	margin: 0 auto;
	padding: 2rem;
	/* Ensure this doesn't affect the main layout */
	position: relative;
	z-index: 1;
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
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-height: calc(100vh - 4rem);
	overflow-y: auto;
}

.main-content {
	min-width: 0;
	padding: 1rem;
	display: flex;
	flex-direction: column;
}

.content {
	flex: 1;
	margin-bottom: 2rem; /* Add margin to separate content from navigation */
}

/* On this page navigation */
.on-this-page {
	background-color: var(--color-light);
	border-radius: 8px;
	padding: 1.5rem;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.on-this-page-links {
	max-height: calc(100vh - 50vh);
	overflow-y: auto;
	padding-right: 5px;
}

.on-this-page ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.on-this-page ul ul {
	margin-left: 1.5rem;
	font-size: 0.9em;
}

.on-this-page li {
	margin: 0.5rem 0;
}

.on-this-page a {
	color: #4a4a4a;
	text-decoration: none;
	display: block;
	padding: 0.25rem 0;
	transition: color 0.2s ease;
}

.on-this-page a:hover {
	color: #3273dc;
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
		max-height: none;
		overflow-y: visible;
	}

	.table-of-contents,
	.on-this-page {
		display: none;
	}
}
</style>
