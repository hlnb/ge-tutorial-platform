<template>
	<div class="tutorial-layout" :class="{ 'full-width': isMainTutorialsPage }">
		<aside v-if="!isMainTutorialsPage" class="sidebar desktop-sidebar">
			<component :is="currentNav" v-if="currentNav" />
		</aside>

		<main class="main-content">
			<button
				v-if="showMobileNavTrigger"
				class="tutorial-mobile-toggle"
				type="button"
				@click="toggleMobileNav"
			>
				<span class="icon" aria-hidden="true">
					<i :class="['fas', isMobileNavOpen ? 'fa-times' : 'fa-bars']"></i>
				</span>
				<span>{{ isMobileNavOpen ? 'Hide Lesson Menu' : 'Lesson Menu' }}</span>
			</button>

			<div class="content">
				<router-view />
			</div>

			<TutorialNavigation
				v-if="!isMainTutorialsPage"
				:prev="currentTutorial.prev"
				:next="currentTutorial.next"
				:hide-completion="shouldHideCompletion"
				:hide-quiz-indicator="shouldHideQuizIndicator"
			/>
		</main>

		<transition name="tutorial-drawer">
			<div
				v-if="showMobileNavDrawer"
				class="mobile-sidebar-drawer"
				role="dialog"
				aria-modal="true"
				aria-label="Lesson menu"
			>
				<div class="mobile-drawer-header">
					<h3>Lesson Menu</h3>
					<button class="icon-button" type="button" aria-label="Close lesson menu" @click="closeMobileNav">
						<i class="fas fa-times"></i>
					</button>
				</div>
				<component :is="currentNav" v-if="currentNav" />
			</div>
		</transition>
		<div
			v-if="showMobileNavDrawer"
			class="mobile-sidebar-backdrop"
			aria-hidden="true"
			@click="closeMobileNav"
		></div>
	</div>
</template>

<script setup>
import { ref, provide, watch, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import HTMLBasicsNav from '@/components/tutorial-navs/HTMLBasicsNav.vue';
import GetStartedNav from '@/components/tutorial-navs/GetStartedNav.vue';
import CSSBasicsNav from '@/components/tutorial-navs/CSSBasicsNav.vue';
import JavaScriptBasicsNav from '@/components/tutorial-navs/JavaScriptBasicsNav.vue';
import DOMBasicsNav from '@/components/tutorial-navs/DOMBasicsNav.vue';
import GitBasicsNav from '@/components/tutorial-navs/GitBasicsNav.vue';
import AiAssistedNav from '@/components/tutorial-navs/AiAssistedNav.vue';
import BackendNav from '@/components/tutorial-navs/BackendNav.vue';
import DeploymentsNav from '@/components/tutorial-navs/DeploymentsNav.vue';
import SeoAnalyticsNav from '@/components/tutorial-navs/SeoAnalyticsNav.vue';
import CapstoneNav from '@/components/tutorial-navs/CapstoneNav.vue';
import StandaloneNav from '@/components/tutorial-navs/StandaloneNav.vue';
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import progressService from '@/services/ProgressService';
import { hasQuiz } from '@/utils/quizUtils';

const route = useRoute();
const pageSections = ref([]);
const isMobileNavOpen = ref(false);

const closeMobileNav = () => {
	isMobileNavOpen.value = false;
};

const toggleMobileNav = () => {
	isMobileNavOpen.value = !isMobileNavOpen.value;
};

const handleDrawerKeydown = (event) => {
	if (event.key === 'Escape') {
		closeMobileNav();
	}
};

// Add scroll tracking variables
const scrollThrottleTimeout = ref(null);
const scrollThrottleDelay = 1000; // 1 second delay between scroll tracking updates

// Check if we're on the main tutorials page
const isMainTutorialsPage = computed(() => {
	return route.path === '/tutorials';
});

// (nav components are returned directly from the computed `currentNav`)

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
	} else if (path.includes('/ai-assisted')) {
		return AiAssistedNav;
	} else if (path.includes('/backend')) {
		return BackendNav;
	} else if (path.includes('/deployments')) {
		return DeploymentsNav;
	} else if (path.includes('/seo-analytics')) {
		return SeoAnalyticsNav;
	} else if (path.includes('/capstone')) {
		return CapstoneNav;
	}
	return StandaloneNav;
});

// Reset pageSections when route changes
watch(
	() => route.path,
	() => {
		pageSections.value = [];
		closeMobileNav();
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
			path: '/tutorials/beginner/html-basics/html-first-page',
			title: 'Your First HTML Page',
		},
	},
	'html-basics-first-page': {
		prev: { path: '/tutorials/beginner/html-basics',title: 'Introduction' },
		next: { path: '/tutorials/beginner/html-basics/html-text',title: 'Working with Text' },
	},
	'html-basics-text': {
		prev: {
			path: '/tutorials/beginner/html-basics/html-first-page',
			title: 'Your First HTML Page',
		},
		next: { path: '/tutorials/beginner/html-basics/html-links',title: 'Links & Navigation' },
	},
	'html-basics-links': {
		prev: { path: '/tutorials/beginner/html-basics/html-text',title: 'Working with Text' },
		next: { path: '/tutorials/beginner/html-basics/html-images',title: 'Images' },
	},
	'html-basics-images': {
		prev: { path: '/tutorials/beginner/html-basics/html-links',title: 'Links & Navigation' },
		next: {
			path: '/tutorials/beginner/html-basics/html-doc-structure',
			title: 'Document Structure',
		},
	},
	'html-basics-doc-structure': {
		prev: { path: '/tutorials/beginner/html-basics/html-images',title: 'Images' },
		next: { path: '/tutorials/beginner/html-basics/html-forms',title: 'Forms' },
	},
	'html-basics-forms': {
		prev: {
			path: '/tutorials/beginner/html-basics/html-doc-structure',
			title: 'Document Structure',
		},
		next: {
			path: '/tutorials/beginner/html-basics/html-emmet',
			title: 'HTML Emmet',
		},
	},
	'html-basics-html-emmet': {
		prev: { path: '/tutorials/beginner/html-basics/html-forms',title: 'Forms' },
		next: { path: '/tutorials/beginner/css-basics',title: 'CSS Basics Introduction' },
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
			path: '/tutorials/getting-started/text-editors',
			title: 'Text Editors',
		},
	},
	'getting-started-text-editors': {
		prev: {
			path: '/tutorials/getting-started/web-basics',
			title: 'Web Basics',
		},
		next: {
			path: '/tutorials/getting-started/dev-environment',
			title: 'Setting Up Your Environment',
		},
	},
	'getting-started-dev-environment': {
		prev: {
			path: '/tutorials/getting-started/text-editors',
			title: 'Text Editors',
		},
		next: {
			path: '/tutorials/getting-started/browser-tools',
			title: 'Browser Development Tools',
		},
	},
	'getting-started-browser-tools': {
		prev: {
			path: '/tutorials/getting-started/dev-environment',
			title: 'Setting Up Your Environment',
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
		next: {
			path: '/tutorials/getting-started/files-folders-project-structure',
			title: 'Files, Folders & Project Structure',
		},
	},
	'getting-started-files-folders-project-structure': {
		prev: {
			path: '/tutorials/getting-started/domain-hosting',
			title: 'Domain Names & Web Hosting',
		},
		next: { path: '/tutorials/beginner/html-basics', title: 'HTML Basics' },
	},

	// CSS Basics routes
	'css-basics-index': {
		prev: {
			path: '/tutorials/beginner/html-basics/html-emmet',
			title: 'HTML Emmet',
		},
		next: {
			path: '/tutorials/beginner/css-basics/introduction',
			title: 'Introduction to CSS',
		},
	},
	'css-basics-introduction': {
		prev: { path: '/tutorials/beginner/css-basics',title: 'CSS Basics Overview' },
		next: { path: '/tutorials/beginner/css-basics/selectors',title: 'CSS Selectors' },
	},
	'css-basics-selectors': {
		prev: {
			path: '/tutorials/beginner/css-basics/introduction',
			title: 'Introduction to CSS',
		},
		next: {
			path: '/tutorials/beginner/css-basics/box-model',
			title: 'The Box Model',
		},
	},
	'css-basics-box-model': {
		prev: { path: '/tutorials/beginner/css-basics/selectors',title: 'CSS Selectors' },
		next: {
			path: '/tutorials/beginner/css-basics/text',
			title: 'Text Properties',
		},
	},
	'css-basics-text': {
		prev: { path: '/tutorials/beginner/css-basics/box-model',title: 'The Box Model' },
		next: { path: '/tutorials/beginner/css-basics/layout',title: 'Layout Basics' },
	},
	'css-basics-layout': {
		prev: {
			path: '/tutorials/beginner/css-basics/text',
			title: 'Text Properties',
		},
		next: {
			path: '/tutorials/beginner/css-basics/colors',
			title: 'Working with Colors',
		},
	},
	'css-basics-colors': {
		prev: { path: '/tutorials/beginner/css-basics/layout',title: 'Layout Basics' },
		next: { path: '/tutorials/beginner/css-basics/modern',title: 'Modern CSS' },
	},
	'css-basics-modern': {
		prev: {
			path: '/tutorials/beginner/css-basics/colors',
			title: 'Working with Colors',
		},
		next: {
			path: '/tutorials/beginner/css-basics/responsive',
			title: 'Responsive Design',
		},
	},
	'css-basics-responsive': {
		prev: { path: '/tutorials/beginner/css-basics/modern',title: 'Modern CSS' },
		next: {
			path: '/tutorials/beginner/css-basics/flexbox',
			title: 'Flexbox',
		},
	},
	'css-basics-flexbox': {
		prev: {
			path: '/tutorials/beginner/css-basics/responsive',
			title: 'Responsive Design',
		},
		next: { path: '/tutorials/beginner/javascript-basics', title: 'JavaScript Basics' },
	},

	// JavaScript Basics routes
	'javascript-basics-index': {
		prev: { path: '/tutorials/beginner/css-basics/flexbox',title: 'Flexbox' },
		next: {
			path: '/tutorials/beginner/javascript-basics/introduction',
			title: 'Introduction to JavaScript',
		},
	},
	'javascript-basics-introduction': {
		prev: {
			path: '/tutorials/beginner/javascript-basics',
			title: 'JavaScript Basics Overview',
		},
		next: {
			path: '/tutorials/beginner/javascript-basics/variables-data-types',
			title: 'Variables and Data Types',
		},
	},
	'javascript-basics-variables-data-types': {
		prev: {
			path: '/tutorials/beginner/javascript-basics/introduction',
			title: 'Introduction to JavaScript',
		},
		next: {
			path: '/tutorials/beginner/javascript-basics/operators',
			title: 'Operators',
		},
	},
	'javascript-basics-operators': {
		prev: {
			path: '/tutorials/beginner/javascript-basics/variables-data-types',
			title: 'Variables and Data Types',
		},
		next: {
			path: '/tutorials/beginner/javascript-basics/conditionals',
			title: 'Conditionals',
		},
	},
	'javascript-basics-conditionals': {
		prev: {
			path: '/tutorials/beginner/javascript-basics/operators',
			title: 'Operators',
		},
		next: {
			path: '/tutorials/beginner/javascript-basics/loops',
			title: 'Loops',
		},
	},
	'javascript-basics-loops': {
		prev: {
			path: '/tutorials/beginner/javascript-basics/conditionals',
			title: 'Conditionals',
		},
		next: {
			path: '/tutorials/beginner/javascript-basics/functions',
			title: 'Functions',
		},
	},
	'javascript-basics-functions': {
		prev: {
			path: '/tutorials/beginner/javascript-basics/loops',
			title: 'Loops',
		},
		next: {
			path: '/tutorials/beginner/dom-basics',
			title: 'DOM Basics',
		},
	},

	// DOM Basics routes
	'dom-basics-index': {
		prev: { path: '/tutorials/beginner/javascript-basics/functions',title: 'JavaScript Functions' },
		next: { path: '/tutorials/beginner/dom-basics/introduction',title: 'Introduction to DOM' }
	},
	'dom-basics-introduction': {
		prev: { path: '/tutorials/beginner/dom-basics',title: 'DOM Basics Overview' },
		next: { path: '/tutorials/beginner/dom-basics/arrays',title: 'Arrays and Methods' }
	},
	'dom-basics-arrays': {
		prev: { path: '/tutorials/beginner/dom-basics/introduction',title: 'Introduction to DOM' },
		next: { path: '/tutorials/beginner/dom-basics/dom-manipulation',title: 'DOM Manipulation' }
	},
	'dom-basics-dom-manipulation': {
		prev: { path: '/tutorials/beginner/dom-basics/arrays',title: 'Arrays and Methods' },
		next: { path: '/tutorials/beginner/dom-basics/dom-events',title: 'Event Handling' }
	},
	'dom-basics-dom-events': {
		prev: { path: '/tutorials/beginner/dom-basics/dom-manipulation',title: 'DOM Manipulation' },
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
	},
	// Black Swan Bistro project (7 parts spanning beginner → advanced)
	'beginner-black-swan-bistro-part-1': {
		prev: { path: '/tutorials',title: 'Tutorials Home' },
		next: { path: '/tutorials/intermediate/black-swan-bistro-part-2',title: 'BSB Part 2 — Layout & Sections' }
	},
	'intermediate-black-swan-bistro-part-2': {
		prev: { path: '/tutorials/beginner/black-swan-bistro-part-1',title: 'BSB Part 1 — First Page' },
		next: { path: '/tutorials/intermediate/black-swan-bistro-part-3',title: 'BSB Part 3 — Components' }
	},
	'intermediate-black-swan-bistro-part-3': {
		prev: { path: '/tutorials/intermediate/black-swan-bistro-part-2',title: 'BSB Part 2 — Layout & Sections' },
		next: { path: '/tutorials/intermediate/black-swan-bistro-part-4',title: 'BSB Part 4 — Multi-page Site' }
	},
	'intermediate-black-swan-bistro-part-4': {
		prev: { path: '/tutorials/intermediate/black-swan-bistro-part-3',title: 'BSB Part 3 — Components' },
		next: { path: '/tutorials/advanced/black-swan-bistro-part-5',title: 'BSB Part 5 — Prepare for Deployment' }
	},
	'advanced-black-swan-bistro-part-5': {
		prev: { path: '/tutorials/intermediate/black-swan-bistro-part-4',title: 'BSB Part 4 — Multi-page Site' },
		next: { path: '/tutorials/advanced/black-swan-bistro-part-6',title: 'BSB Part 6 — Deploy the Site' }
	},
	'advanced-black-swan-bistro-part-6': {
		prev: { path: '/tutorials/advanced/black-swan-bistro-part-5',title: 'BSB Part 5 — Prepare for Deployment' },
		next: { path: '/tutorials/advanced/black-swan-bistro-part-7',title: 'BSB Part 7 — Maintain & Improve' }
	},
	'advanced-black-swan-bistro-part-7': {
		prev: { path: '/tutorials/advanced/black-swan-bistro-part-6',title: 'BSB Part 6 — Deploy the Site' },
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


	// Handle legacy route names
	let legacyRouteKey = null;
	if (route.name === 'GettingStarted') {
		legacyRouteKey = 'getting-started-index';
	} else if (route.name === 'HTMLBasics') {
		legacyRouteKey = 'html-basics-index';
	} else if (route.name === 'CSSBasics') {
		legacyRouteKey = 'css-basics-index';
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
// no-op route name watcher removed to satisfy linter

onMounted(() => {
	// Add scroll event listener for progress tracking
	window.addEventListener('scroll', handleScroll);
	window.addEventListener('keydown', handleDrawerKeydown);
});

onBeforeUnmount(() => {
	// Remove scroll event listener
	window.removeEventListener('scroll', handleScroll);
	window.removeEventListener('keydown', handleDrawerKeydown);

	// Clear any pending throttle timeout
	if (scrollThrottleTimeout.value) {
		window.clearTimeout(scrollThrottleTimeout.value);
	}
	if (typeof document !== 'undefined') {
		document.body.style.overflow = '';
	}
});

// Handle scroll event for progress tracking
const handleScroll = () => {
	// Skip if we're on the main tutorials page
	if (isMainTutorialsPage.value) return;

	// Throttle scroll events to avoid excessive updates
	if (scrollThrottleTimeout.value) return;

	scrollThrottleTimeout.value = window.setTimeout(() => {
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
		'/tutorials/beginner/html-basics/html-first-page',
		'/tutorials/beginner/html-basics/html-text',
		'/tutorials/beginner/html-basics/html-links',
		'/tutorials/beginner/html-basics/html-images',
		'/tutorials/beginner/html-basics/html-doc-structure',
		'/tutorials/beginner/html-basics/html-forms',
		'/tutorials/beginner/html-basics/html-emmet',
		'/tutorials/getting-started/how-internet-works',
		'/tutorials/getting-started/web-basics',
		'/tutorials/getting-started/text-editors',
		'/tutorials/getting-started/dev-environment',
		'/tutorials/getting-started/browser-tools',
		'/tutorials/getting-started/domain-hosting',
		'/tutorials/getting-started/files-folders-project-structure',
		'/tutorials/beginner/black-swan-bistro-part-1',		// Add other routes here as needed
	];

	return routesWithCustomCompletion.includes(route.path);
});

// Add this after the shouldHideCompletion computed property
const shouldHideQuizIndicator = computed(() => {
	// List of routes that have their own quiz indicators
	const routesWithCustomQuizIndicators = [
		'/tutorials/beginner/html-basics/html-text',
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

const showMobileNavTrigger = computed(() => {
	return !isMainTutorialsPage.value && !!currentNav.value;
});

const showMobileNavDrawer = computed(() => {
	return showMobileNavTrigger.value && isMobileNavOpen.value;
});

watch(showMobileNavDrawer, (isOpen) => {
	if (typeof document === 'undefined') return;
	document.body.style.overflow = isOpen ? 'hidden' : '';
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

.tutorial-mobile-toggle {
	display: none;
	align-items: center;
	gap: 0.5rem;
	margin: 0 0 1.5rem;
	padding: 0.65rem 1.1rem;
	border-radius: 999px;
	border: 1px solid rgba(15, 23, 42, 0.15);
	background: #ffffff;
	font-weight: 600;
	color: #111827;
	cursor: pointer;
}

.icon-button {
	border: none;
	background: transparent;
	font-size: 1.1rem;
	color: #1f2933;
}

.mobile-sidebar-backdrop {
	position: fixed;
	inset: 0;
	background: rgba(15, 23, 42, 0.45);
	z-index: 40;
}

.mobile-sidebar-drawer {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: min(420px, 90vw);
	background: #ffffff;
	box-shadow: 0 25px 45px rgba(15, 23, 42, 0.25);
	z-index: 45;
	padding: 1.5rem 1.25rem 2rem;
	overflow-y: auto;
}

.mobile-drawer-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
}

.mobile-sidebar-drawer :deep(.tutorial-nav) {
	box-shadow: none;
	padding: 0;
	background: transparent;
}

.mobile-sidebar-drawer :deep(.tutorial-nav .menu) {
	padding: 0;
}

.mobile-sidebar-drawer :deep(.tutorial-nav .menu-list) {
	max-height: none;
}

.tutorial-drawer-enter-from,
.tutorial-drawer-leave-to {
	transform: translateX(-24px);
	opacity: 0;
}

.tutorial-drawer-enter-active,
.tutorial-drawer-leave-active {
	transition: transform 0.25s ease, opacity 0.25s ease;
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


@media screen and (max-width: 1024px) {
	.tutorial-layout {
		grid-template-columns: 1fr;
		padding: clamp(1.25rem, 5vw, 2rem);
	}

	.sidebar {
		display: none;
	}

	.table-of-contents,
	.on-this-page {
		display: none;
	}

	.tutorial-mobile-toggle {
		display: inline-flex;
	}
}
</style>
