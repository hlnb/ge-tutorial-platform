<template>
	<MarkdownTutorialPage
		:source="source"
		current-path="/tutorials/accessibility-essentials/aria-use-with-care"
		section-id="accessibility-essentials"
	/>
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './aria-use-with-care.md?raw';
</script>
