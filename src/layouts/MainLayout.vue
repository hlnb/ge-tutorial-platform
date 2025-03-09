<template>
	<div class="main-layout">
		<!-- Main content only, no header or footer -->
		<router-view></router-view>
	</div>
</template>

<script setup>
// Remove any imports for NavBar and Footer
</script>

<style scoped>
.main-layout {
	max-width: 1440px;
	margin: 0 auto;
	padding: 1rem;
}
</style>
