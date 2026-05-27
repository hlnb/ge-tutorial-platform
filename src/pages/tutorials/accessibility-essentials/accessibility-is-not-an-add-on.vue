<template>
	<MarkdownTutorialPage
		:source="source"
		current-path="/tutorials/accessibility-essentials/accessibility-is-not-an-add-on"
		section-id="accessibility-essentials"
	/>
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './accessibility-is-not-an-add-on.md?raw';
</script>
