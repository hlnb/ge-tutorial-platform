<template>
	<div class="main-layout">
		<NavBar />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<style scoped>
.main-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>
