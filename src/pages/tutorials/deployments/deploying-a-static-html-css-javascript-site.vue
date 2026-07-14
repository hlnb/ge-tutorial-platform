<script setup>
import { onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const targetPath = '/tutorials/deployments/uploading-html-css-javascript-website';
const targetUrl = `https://www.graphitedge.com.au${targetPath}`;
const router = useRouter();

useHead({
  title: 'Uploading a Plain Website - Moved',
  meta: [{ name: 'robots', content: 'noindex' }],
  link: [{ rel: 'canonical', href: targetUrl }],
});

onMounted(() => {
  router.replace(targetPath);
});
</script>

<template>
  <div class="container section">
    <div class="content">
      <h1 class="title is-1">This Static Deployment Lesson Has Moved</h1>
      <p>
        Plain HTML, CSS and JavaScript upload steps now live in the expanded upload lesson.
      </p>
      <router-link :to="targetPath" class="button is-primary">
        Go to Uploading a Plain HTML, CSS and JavaScript Website
      </router-link>
    </div>
  </div>
</template>
