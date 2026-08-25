<template>
	<MarkdownTutorialPage
		:source="source"
		current-path="/tutorials/seo-analytics/google-search-console"
		section-id="seo-analytics"
	/>
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './google-search-console.md?raw';
</script>
