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
import { getTutorialNavigationByPath } from '@/data/tutorials';

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
const currentTutorial = computed(() => {
	return getTutorialNavigationByPath(route.path);
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
