<template>
	<div class="markdown-content" v-html="renderedContent"></div>
</template>

<script setup>
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkHtml from 'remark-html';
import { ref, onMounted } from 'vue';

const props = defineProps({
	content: {
		type: String,
		required: true,
	},
});

const renderedContent = ref('');

onMounted(async () => {
	const result = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(remarkHtml)
		.process(props.content);

	renderedContent.value = String(result);
});
</script>

<style>
.markdown-content {
	padding: 20px;
}

/* Basic markdown styling */
.markdown-content h1 {
	font-size: 2em;
	margin-bottom: 0.5em;
}
.markdown-content h2 {
	font-size: 1.5em;
	margin-bottom: 0.5em;
}
.markdown-content p {
	margin-bottom: 1em;
}
.markdown-content ul {
	list-style-type: disc;
	padding-left: 2em;
}
.markdown-content code {
	background: #f4f4f4;
	padding: 0.2em 0.4em;
	border-radius: 3px;
}
</style>
