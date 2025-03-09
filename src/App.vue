<template>
	<div id="app">
		<!-- Header should be outside router-view to appear on all pages -->
		<header-component></header-component>

		<!-- Main content area -->
		<main>
			<router-view></router-view>
		</main>

		<!-- Footer should be outside router-view to appear on all pages -->
		<footer-component></footer-component>

		<!-- Cookie consent component -->
		<cookie-consent></cookie-consent>
	</div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import CookieConsent from '@/components/CookieConsent.vue';

// Handle consent update
const handleConsentUpdate = (settings) => {
	console.log('Consent updated:', settings);
	// Here you can initialize tracking based on settings
	if (settings.progress) {
		initializeProgressTracking();
	}
};

// Initialize progress tracking
const initializeProgressTracking = () => {
	// This function will be implemented later
	// It will set up the necessary tracking for student progress
	console.log('Progress tracking initialized');
};
</script>

<style>
/* ... existing styles ... */
</style>
