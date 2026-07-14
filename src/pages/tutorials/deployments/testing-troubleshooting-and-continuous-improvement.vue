<script setup>
import { onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const targetPath = '/tutorials/deployments/testing-troubleshooting-live-website';
const targetUrl = `https://www.graphitedge.com.au${targetPath}`;
const router = useRouter();

useHead({
  title: 'Deployment Troubleshooting - Moved',
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
      <h1 class="title is-1">This Deployment Troubleshooting Lesson Has Moved</h1>
      <p>
        Testing and troubleshooting now has its own expanded live-website lesson.
      </p>
      <router-link :to="targetPath" class="button is-primary">
        Go to Testing and Troubleshooting a Live Website
      </router-link>
    </div>
  </div>
</template>
