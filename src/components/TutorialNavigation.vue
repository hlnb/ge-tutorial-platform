<template>
	<nav class="tutorial-navigation">
		<div class="level">
			<div class="level-left">
				<div class="level-item" v-if="prev">
					<router-link :to="prev.path" class="button is-light">
						<span class="icon">
							<i class="fas fa-arrow-left"></i>
						</span>
						
						<span>{{ prev.title }}</span>
					</router-link>
				</div>
			</div>

			<div class="level-right">
				<div class="level-item" v-if="next">
					<router-link :to="next.path" class="button is-primary">
						<span>{{ next.title }}</span>
						<span class="icon">
							<i class="fas fa-arrow-right"></i>
						</span>
					</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const props = defineProps({
	prev: {
		type: Object,
		validator: (obj) => {
			return (
				obj &&
				typeof obj.path === 'string' &&
				typeof obj.title === 'string' &&
				obj.path.startsWith('/tutorials/')
			);
		},
	},
	next: {
		type: Object,
		validator: (obj) => {
			return (
				obj &&
				typeof obj.path === 'string' &&
				typeof obj.title === 'string' &&
				obj.path.startsWith('/tutorials/')
			);
		},
	},
});

const route = useRoute();
</script>

<style scoped>
.tutorial-navigation {
	margin-top: 2rem;
	padding: 1rem 0;
	border-top: 1px solid var(--color-border);
}

.button {
	transition: transform 0.2s ease;
}

.button:hover {
	transform: translateX(0);
}

.button.is-light:hover {
	transform: translateX(-2px);
}

.button.is-primary:hover {
	transform: translateX(2px);
}
</style>
