<template>
	<div class="student-progress-page">
		<div class="container">
			<div class="page-header">
				<h1 class="title is-1">
					<i class="fas fa-user-graduate"></i> My Learning Progress
				</h1>
				<p class="subtitle">
					Track your journey through our tutorials and see your achievements
				</p>
			</div>

			<StudentProgress />
		</div>
	</div>
</template>

<script setup>
import StudentProgress from '@/components/StudentProgress.vue';
</script>

<style scoped>
.student-progress-page {
	padding: 2rem 1rem;
}

.page-header {
	text-align: center;
	margin-bottom: 3rem;
}

.page-header .title {
	color: #485fc7;
}

.page-header .subtitle {
	max-width: 600px;
	margin: 1rem auto 0;
}
</style>
