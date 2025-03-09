<template>
	<div class="tutorial-navigation">
		<div class="columns is-mobile">
			<div class="column">
				<router-link v-if="prev" :to="prev.path" class="button is-outlined">
					<span class="icon">
						<i class="fas fa-arrow-left"></i>
					</span>
					<span>{{ prev.title }}</span>
				</router-link>
			</div>
			<div class="column has-text-right">
				<router-link v-if="next" :to="next.path" class="button is-outlined">
					<span>{{ next.title }}</span>
					<span class="icon">
						<i class="fas fa-arrow-right"></i>
					</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
	prev: {
		type: Object,
		default: null,
	},
	next: {
		type: Object,
		default: null,
	},
});

const route = useRoute();
const router = useRouter();

onMounted(() => {
	console.log('TutorialNavigation component mounted');
	console.log(
		'Available routes:',
		router
			.getRoutes()
			.map((r) => r.name)
			.filter(Boolean),
	);
});
</script>

<style scoped>
.tutorial-navigation {
	margin-top: 3rem;
	padding-top: 1.5rem;
	border-top: 1px solid #eee;
}

.button {
	transition: transform 0.2s ease;
}

.button:hover {
	transform: translateX(0);
}

.button.is-outlined:hover {
	transform: translateX(-2px);
}
</style>
