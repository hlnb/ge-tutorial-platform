<template>
	<div class="layout">
		<Navbar />

		<main class="main-content">
			<router-view v-slot="{ Component }">
				<Suspense>
					<component :is="Component" />
				</Suspense>
			</router-view>
		</main>

		<Footer />
	</div>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.main-content {
	flex: 1;
}
</style>
