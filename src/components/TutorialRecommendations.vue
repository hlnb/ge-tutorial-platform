<template>
	<section class="tutorial-recommendations mt-6">
		<h2 class="title is-3">
			<i class="fas fa-compass"></i> Recommended Next Steps
		</h2>

		<div class="columns is-multiline">
			<!-- Next tutorial in sequence -->
			<div v-if="computedNextTutorial" class="column is-full">
				<div class="box recommendation-box is-primary">
					<div class="recommendation-content">
						<div class="recommendation-icon">
							<i class="fas fa-arrow-right"></i>
						</div>
						<div class="recommendation-text">
							<h3 class="title is-4">Continue Learning</h3>
							<p>Ready to move forward? Continue with the next tutorial in this series:</p>
							<router-link :to="computedNextTutorial.path" class="button is-primary mt-3">
								{{ computedNextTutorial.title }} <i class="fas fa-arrow-right ml-2"></i>
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<!-- Related tutorials -->
			<div v-if="computedRelatedTutorials.length > 0" class="column is-full">
				<div class="box recommendation-box is-info">
					<div class="recommendation-content">
						<div class="recommendation-icon">
							<i class="fas fa-project-diagram"></i>
						</div>
						<div class="recommendation-text">
							<h3 class="title is-4">Related Topics</h3>
							<p>Explore these related tutorials to expand your knowledge:</p>
							<div class="buttons mt-3">
								<router-link
									v-for="tutorial in computedRelatedTutorials"
									:key="tutorial.path"
									:to="tutorial.path"
									class="button is-info is-light"
								>
									{{ tutorial.title }}
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Practice projects -->
			<div v-if="computedPracticeProjects.length > 0" class="column is-full">
				<div class="box recommendation-box is-success">
					<div class="recommendation-content">
						<div class="recommendation-icon">
							<i class="fas fa-laptop-code"></i>
						</div>
						<div class="recommendation-text">
							<h3 class="title is-4">Practice Projects</h3>
							<p>Apply what you've learned with these hands-on projects:</p>
							<div class="project-cards mt-3">
								<div
									v-for="project in computedPracticeProjects"
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
												:to="{
													path: project.path,
													query: { tutorial: currentPath }
												}"
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
				</div>
			</div>

			<!-- Resources -->
			<div v-if="computedResources.length > 0" class="column is-full">
				<div class="box recommendation-box is-warning">
					<div class="recommendation-content">
						<div class="recommendation-icon">
							<i class="fas fa-book"></i>
						</div>
						<div class="recommendation-text">
							<h3 class="title is-4">Additional Resources</h3>
							<p>Deepen your understanding with these helpful resources:</p>
							<div class="content mt-3">
								<ul class="resource-list">
									<li v-for="resource in computedResources" :key="resource.title">
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
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';
import { getRecommendationsFromProps } from '@/utils/tutorialUtils';

// Provide component name for tooling that expects a default export
defineOptions({ name: 'TutorialRecommendations' });

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

const recommendations = computed(() => {
	if (!props.currentPath && !providedTutorial) {
		return {
			nextTutorial: null,
			relatedTutorials: [],
			practiceProjects: [],
			resources: []
		};
	}
	return getRecommendationsFromProps(props, providedTutorial);
});
// Computed properties to get recommendations (renamed to avoid prop name collision)
const computedNextTutorial = computed(() => recommendations.value?.nextTutorial || null);
const computedRelatedTutorials = computed(() => recommendations.value?.relatedTutorials || []);
const computedPracticeProjects = computed(() => recommendations.value?.practiceProjects || []);
const computedResources = computed(() => recommendations.value?.resources || []);
</script>

<script>
export default {
	name: 'TutorialRecommendations'
};
</script>

<style scoped>
.tutorial-recommendations {
	margin-top: 3rem;
}

.recommendation-box {
	height: 100%;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	padding: 1.5rem;
}

.recommendation-box:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.recommendation-content {
	display: flex;
	align-items: flex-start;
	gap: 1.5rem;
}

.recommendation-icon {
	flex-shrink: 0;
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.2);
}

.recommendation-icon i {
	font-size: 1.5rem;
}

.recommendation-text {
	flex-grow: 1;
}

.project-cards {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem;
	margin-top: 1rem;
}

.project-card {
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	padding: 1rem;
}

.project-card-content {
	height: 100%;
	display: flex;
	flex-direction: column;
}

.resource-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.resource-list li {
	margin-bottom: 0.75rem;
}

.resource-list a {
	color: inherit;
	text-decoration: none;
	font-weight: 500;
}

.resource-list a:hover {
	text-decoration: underline;
}

.resource-description {
	color: rgba(0, 0, 0, 0.7);
	font-size: 0.9em;
}

@media screen and (max-width: 768px) {
	.recommendation-content {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.recommendation-icon {
		margin-bottom: 1rem;
	}

	.project-cards {
		grid-template-columns: 1fr;
	}
}
</style>
