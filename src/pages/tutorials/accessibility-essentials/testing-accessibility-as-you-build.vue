<template>
	<MarkdownTutorialPage
		:source="source"
		current-path="/tutorials/accessibility-essentials/testing-accessibility-as-you-build"
		section-id="accessibility-essentials"
	/>
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './testing-accessibility-as-you-build.md?raw';
</script>
