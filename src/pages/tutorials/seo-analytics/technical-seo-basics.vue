<template>
	<MarkdownTutorialPage
		:source="source"
		current-path="/tutorials/seo-analytics/technical-seo-basics"
		section-id="seo-analytics"
	/>
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './technical-seo-basics.md?raw';
</script>
