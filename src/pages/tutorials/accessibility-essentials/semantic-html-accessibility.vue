<template>
	<MarkdownTutorialPage
		:source="source"
		current-path="/tutorials/accessibility-essentials/semantic-html-accessibility"
		section-id="accessibility-essentials"
	/>
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './semantic-html-accessibility.md?raw';
</script>
