<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
	// Redirect to the main tutorials page
	router.replace('/tutorials');
});
</script>

<template>
	<div>Redirecting...</div>
</template>
