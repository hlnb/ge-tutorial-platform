<template>
	<div class="tutorials-container">
		<NavBar />
		<div class="tutorials-content">
			<router-view></router-view>
		</div>
		<Footer />
	</div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.tutorials-container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.tutorials-content {
	flex: 1;
}
</style>
