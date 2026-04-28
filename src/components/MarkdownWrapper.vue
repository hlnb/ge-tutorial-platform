<template>
  <div class="markdown-content" v-html="renderedContent"></div>
</template>

<script setup>
import { sanitizeHtml } from '@/utils/sanitizeHtml';
import { renderMarkdown } from '@/utils/markdownRenderer';
import { computed } from 'vue';

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});

const renderedContent = computed(() => sanitizeHtml(renderMarkdown(props.content)));
</script>

<style>
.markdown-content {
  padding: 20px;
}

.markdown-content h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.markdown-content h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  font-size: 1.15em;
  margin-bottom: 0.5em;
}

.markdown-content p {
  margin-bottom: 1em;
}

.markdown-content ul {
  list-style-type: disc;
  padding-left: 2em;
  margin-bottom: 1em;
}

.markdown-content li + li {
  margin-top: 0.35em;
}

.markdown-content code {
  background: #f4f4f4;
  padding: 0.2em 0.4em;
  border-radius: 3px;
}

.markdown-content pre {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.markdown-content pre code {
  background: transparent;
  padding: 0;
}
</style>
