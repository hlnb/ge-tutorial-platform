<template>
	<div class="post-layout">
		<article class="post-content">
			<slot></slot>
		</article>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style>
.post-content {
	max-width: 800px;
	margin: 0 auto;
	padding: 2rem;
}

/* Add any other styling for your markdown content */
</style>
