<template>
	<MarkdownTutorialPage
		:source="source"
		current-path="/tutorials/accessibility-essentials/accessible-forms"
		section-id="accessibility-essentials"
	/>
</template>

<script setup>
import MarkdownTutorialPage from '@/components/tutorials/MarkdownTutorialPage.vue';
import source from './accessible-forms.md?raw';
</script>
