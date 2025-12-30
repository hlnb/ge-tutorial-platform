<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(async () => {
	// Perform logout
	const { default: authService } = await import('@/services/AuthService');
	await authService.logout();
	// Redirect to home
	router.replace('/');
});
</script>

<template>
	<div>Logging out...</div>
</template>
