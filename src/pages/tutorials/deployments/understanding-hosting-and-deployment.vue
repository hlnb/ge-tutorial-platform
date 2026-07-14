<script setup>
import { onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const targetPath = '/tutorials/deployments/deployment-is-publishing-not-just-uploading';
const targetUrl = `https://www.graphitedge.com.au${targetPath}`;
const router = useRouter();

useHead({
  title: 'Deployment Is Publishing, Not Just Uploading - Moved',
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
      <h1 class="title is-1">This Deployment Lesson Has Moved</h1>
      <p>
        The deployment introduction now lives in the expanded publishing workflow lesson.
      </p>
      <router-link :to="targetPath" class="button is-primary">
        Go to Deployment Is Publishing, Not Just Uploading
      </router-link>
    </div>
  </div>
</template>
