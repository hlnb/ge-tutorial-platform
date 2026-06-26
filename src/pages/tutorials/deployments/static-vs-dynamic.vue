<script setup>
import { onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';

const targetPath =
	'/tutorials/deployments/getting-a-website-online-hosting-deployment-continuous-improvement#static-vs-dynamic';
const targetUrl = `https://www.graphitedge.com.au${targetPath}`;
const legacyRedirectMeta = { noindex: true };

useHead({
	title: 'Static vs Dynamic Deployment - Moved',
	meta: [{ name: 'robots', content: legacyRedirectMeta.noindex ? 'noindex' : 'index' }],
	link: [{ rel: 'canonical', href: targetUrl }],
});

const router = useRouter();

onMounted(() => {
	router.replace(targetPath);
});
</script>

<template>
	<div class="container section">
		<div class="content">
			<h1 class="title is-1">Static vs Dynamic Deployment Has Moved</h1>
			<p>
				This content is now part of the consolidated deployment fundamentals tutorial.
			</p>
			<router-link :to="targetPath" class="button is-primary">
				Go to Deployment Fundamentals
			</router-link>
		</div>
	</div>
</template>
