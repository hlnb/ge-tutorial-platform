<template>
	<div class="container section">
		<div class="columns">
			<!-- Left Sidebar Navigation -->
			<div class="column is-3">
				<HTMLBasicsNav class="mb-4" />
				<GetStartedNav />
			</div>

			<!-- Main Content -->
			<div class="column is-9">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import HTMLBasicsNav from '@/components/HTMLBasicsNav.vue';
import GetStartedNav from '@/components/GetStartedNav.vue';

const route = useRoute();
</script>

<style scoped>
.container {
	max-width: 1200px;
	width: 100%;
	padding: 1.5rem;
}

.columns {
	margin-top: 0;
	margin-left: 0;
	margin-right: 0;
}

/* Make sidebar sticky */
@media screen and (min-width: 769px) {
	.column.is-3 {
		position: sticky;
		top: 1rem;
		height: calc(100vh - 2rem);
		overflow-y: auto;
	}
}

/* Ensure content doesn't get too narrow */
.column.is-9 {
	min-width: 0;
	padding: 1.5rem;
}
</style>
