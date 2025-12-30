<template>
	<div id="app">
		<!-- Header should be outside router-view to appear on all pages -->
		<NavBar></NavBar>

		<!-- Main content area -->
		<main>
			<!-- Wrap tutorial pages in TutorialLayout -->
			<TutorialLayout v-if="isTutorialPage">
				<router-view></router-view>
			</TutorialLayout>
			<!-- Other pages render directly -->
			<router-view v-else></router-view>
		</main>

		<!-- Footer should be outside router-view to appear on all pages -->
		<Footer></Footer>

		<!-- Cookie consent component -->
		<CookieConsent></CookieConsent>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import CookieConsent from '@/components/CookieConsent.vue';
import TutorialLayout from '@/layouts/TutorialLayout.vue';

const route = useRoute();

// Determine if current page is a tutorial page
const isTutorialPage = computed(() => {
	const path = route.path;
	// Tutorial pages are under /tutorials/ but not the main index
	return path.startsWith('/tutorials/') && path !== '/tutorials/';
});

// Handle consent update
const handleConsentUpdate = (settings) => {
	// Here you can initialize tracking based on settings
	if (settings.progress) {
		initializeProgressTracking();
	}
};

// Initialize progress tracking
const initializeProgressTracking = () => {
	// This function will be implemented later
	// It will set up the necessary tracking for student progress
};
</script>

<style>
/* ... existing styles ... */
</style>
