<template>
	<section class="tutorial-recommendations mt-6">
		<h2 class="title is-3">
			<i class="fas fa-compass"></i> Recommended Next Steps
		</h2>

		<div class="columns is-multiline">
			<!-- Next tutorial in sequence -->
			<div v-if="nextTutorial" class="column is-half">
				<div class="box recommendation-box is-primary">
					<h3 class="title is-4">
						<i class="fas fa-arrow-right"></i> Continue Learning
					</h3>
					<p>
						Ready to move forward? Continue with the next tutorial in this
						series:
					</p>
					<router-link :to="nextTutorial.path" class="button is-primary mt-3">
						{{ nextTutorial.title }} <i class="fas fa-arrow-right ml-2"></i>
					</router-link>
				</div>
			</div>

			<!-- Related tutorial -->
			<div
				v-if="relatedTutorials.length > 0"
				class="column"
				:class="nextTutorial ? 'is-half' : 'is-full'"
			>
				<div class="box recommendation-box is-info">
					<h3 class="title is-4">
						<i class="fas fa-project-diagram"></i> Related Topics
					</h3>
					<p>Explore these related tutorials to expand your knowledge:</p>
					<div class="buttons mt-3">
						<router-link
							v-for="tutorial in relatedTutorials"
							:key="tutorial.path"
							:to="tutorial.path"
							class="button is-info is-light"
						>
							{{ tutorial.title }}
						</router-link>
					</div>
				</div>
			</div>

			<!-- Practice project -->
			<div v-if="practiceProjects.length > 0" class="column is-full">
				<div class="box recommendation-box is-success">
					<h3 class="title is-4">
						<i class="fas fa-laptop-code"></i> Practice Projects
					</h3>
					<p>Apply what you've learned with these hands-on projects:</p>
					<div class="project-cards mt-3">
						<div
							v-for="project in practiceProjects"
							:key="project.title"
							class="project-card"
						>
							<div class="project-card-content">
								<h4 class="title is-5">{{ project.title }}</h4>
								<p>{{ project.description }}</p>
								<div class="tags mt-2">
									<span
										v-for="tag in project.tags"
										:key="tag"
										class="tag is-light"
										>{{ tag }}</span
									>
								</div>
								<router-link
									v-if="project.path"
									:to="project.path"
									class="button is-success is-small mt-2"
								>
									Start Project
								</router-link>
								<a
									v-else-if="project.url"
									:href="project.url"
									target="_blank"
									class="button is-success is-small mt-2"
								>
									View Project <i class="fas fa-external-link-alt ml-1"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Resources -->
			<div v-if="resources.length > 0" class="column is-full">
				<div class="box recommendation-box is-warning">
					<h3 class="title is-4">
						<i class="fas fa-book"></i> Additional Resources
					</h3>
					<p>Deepen your understanding with these helpful resources:</p>
					<div class="content mt-3">
						<ul class="resource-list">
							<li v-for="resource in resources" :key="resource.title">
								<a :href="resource.url" target="_blank" rel="noopener">
									{{ resource.title }}
								</a>
								<span v-if="resource.description" class="resource-description">
									- {{ resource.description }}
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';
import { getTutorialRecommendations } from '@/utils/tutorialUtils';

const props = defineProps({
	nextTutorial: {
		type: Object,
		default: null,
	},
	relatedTutorials: {
		type: Array,
		default: () => [],
	},
	practiceProjects: {
		type: Array,
		default: () => [],
	},
	resources: {
		type: Array,
		default: () => [],
	},
	currentPath: {
		type: String,
		default: null,
	},
});

const route = useRoute();

// Try to get the current tutorial info from the parent component
const providedTutorial = inject('currentTutorial', null);

// If recommendations aren't provided via props, get them from the utility
const recommendations = computed(() => {
	if (
		props.nextTutorial ||
		props.relatedTutorials.length > 0 ||
		props.practiceProjects.length > 0 ||
		props.resources.length > 0
	) {
		// Use provided props
		return {
			nextTutorial: props.nextTutorial,
			relatedTutorials: props.relatedTutorials,
			practiceProjects: props.practiceProjects,
			resources: props.resources,
		};
	} else {
		// Get recommendations from utility
		const recs = getTutorialRecommendations(props.currentPath || route.path);

		// If no next tutorial is found in recommendations but we have one from the parent, use that
		if (!recs.nextTutorial && providedTutorial && providedTutorial.next) {
			recs.nextTutorial = providedTutorial.next;
		}

		return recs;
	}
});

// Computed properties to get recommendations
const nextTutorial = computed(() => recommendations.value.nextTutorial);
const relatedTutorials = computed(
	() => recommendations.value.relatedTutorials || [],
);
const practiceProjects = computed(
	() => recommendations.value.practiceProjects || [],
);
const resources = computed(() => recommendations.value.resources || []);
</script>

<script>
export default {
	name: 'TutorialRecommendations',
};
</script>

<style scoped>
.tutorial-recommendations {
	margin-top: 3rem;
}

.recommendation-box {
	height: 100%;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.recommendation-box:hover {
	transform: translateY(-3px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.recommendation-box.is-primary {
	border-left: 5px solid #3e8ed0;
}

.recommendation-box.is-info {
	border-left: 5px solid #3298dc;
}

.recommendation-box.is-success {
	border-left: 5px solid #48c78e;
}

.recommendation-box.is-warning {
	border-left: 5px solid #ffe08a;
}

.project-cards {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1rem;
}

.project-card {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
	transform: translateY(-3px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.project-card-content {
	padding: 1rem;
}

.resource-list li {
	margin-bottom: 0.75rem;
}

.resource-description {
	color: #666;
	font-size: 0.9em;
}

@media screen and (max-width: 768px) {
	.project-cards {
		grid-template-columns: 1fr;
	}
}
</style>
