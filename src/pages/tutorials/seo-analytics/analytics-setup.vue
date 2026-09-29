<template>
	<MarkdownTutorialPage
		:source="source"
		current-path="/tutorials/seo-analytics/analytics-setup"
		section-id="seo-analytics"
	/>
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './analytics-setup.md?raw';
</script>
