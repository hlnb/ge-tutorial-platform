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

			<div v-if="!progressEnabled" class="notification is-warning">
				<p>
					<strong>Progress tracking is disabled.</strong> Enable cookies to
					track your progress across tutorials.
				</p>
				<button @click="enableProgressTracking" class="button is-warning mt-2">
					Enable Progress Tracking
				</button>
			</div>

			<div v-else>
				<div class="progress-summary">
					<div class="card">
						<div class="card-content">
							<div class="columns">
								<div class="column">
									<div class="stat-box">
										<h3 class="title is-4">{{ completedTutorials.length }}</h3>
										<p class="subtitle is-6">Tutorials Completed</p>
									</div>
								</div>
								<div class="column">
									<div class="stat-box">
										<h3 class="title is-4">{{ inProgressTutorials.length }}</h3>
										<p class="subtitle is-6">Tutorials In Progress</p>
									</div>
								</div>
								<div class="column">
									<div class="stat-box">
										<h3 class="title is-4">{{ completedQuizzes.length }}</h3>
										<p class="subtitle is-6">Quizzes Completed</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="section-progress mt-6">
					<h2 class="title is-3">Your Progress</h2>

					<div v-if="!hasProgress" class="notification is-info">
						<p>
							You haven't started any tutorials yet.
							<router-link to="/tutorials">Browse our tutorials</router-link> to
							get started!
						</p>
					</div>

					<div v-else>
						<!-- Getting Started Section -->
						<div class="progress-section mb-6">
							<h3 class="title is-4">Getting Started</h3>
							<progress-section-list
								:tutorials="gettingStartedTutorials"
								section-path="/tutorials/getting-started"
							></progress-section-list>
						</div>

						<!-- HTML Basics Section -->
						<div class="progress-section mb-6">
							<h3 class="title is-4">HTML Basics</h3>
							<progress-section-list
								:tutorials="htmlBasicsTutorials"
								section-path="/tutorials/html-basics"
							></progress-section-list>
						</div>

						<!-- CSS Basics Section -->
						<div class="progress-section mb-6">
							<h3 class="title is-4">CSS Basics</h3>
							<progress-section-list
								:tutorials="cssBasicsTutorials"
								section-path="/tutorials/css-basics"
							></progress-section-list>
						</div>
					</div>
				</div>

				<div class="quiz-results mt-6">
					<h2 class="title is-3">Quiz Results</h2>

					<div v-if="!hasQuizResults" class="notification is-info">
						<p>
							You haven't completed any quizzes yet. Complete the quizzes at the
							end of tutorials to test your knowledge!
						</p>
					</div>

					<div v-else class="quiz-results-list">
						<div
							v-for="(result, path) in quizResults"
							:key="path"
							class="card mb-4"
						>
							<div class="card-content">
								<div class="columns is-vcentered">
									<div class="column">
										<h4 class="title is-5">{{ getTutorialTitle(path) }}</h4>
										<p class="subtitle is-6">{{ formatPath(path) }}</p>
									</div>
									<div class="column is-narrow">
										<div class="score-circle" :class="getScoreClass(result)">
											<span class="score">{{ result.score }}</span>
											<span class="total">/ {{ result.total }}</span>
										</div>
									</div>
									<div class="column">
										<p>
											<strong>{{ getScorePercentage(result) }}%</strong> -
											{{ getScoreMessage(result) }}
										</p>
										<p class="is-size-7 has-text-grey">
											Completed on {{ formatDate(result.completedAt) }}
										</p>
									</div>
									<div class="column is-narrow">
										<router-link
											:to="path + '#quiz'"
											class="button is-small is-primary"
										>
											Review Quiz
										</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="data-management mt-6">
					<h2 class="title is-3">Data Management</h2>
					<div class="card">
						<div class="card-content">
							<p>
								Your progress is stored locally in your browser. You can reset
								your progress or export it for backup.
							</p>
							<div class="buttons mt-4">
								<button @click="exportProgress" class="button is-info">
									<span class="icon"><i class="fas fa-download"></i></span>
									<span>Export Progress</span>
								</button>
								<button
									@click="showResetConfirmation = true"
									class="button is-danger"
								>
									<span class="icon"><i class="fas fa-trash"></i></span>
									<span>Reset Progress</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Reset Confirmation Modal -->
				<div class="modal" :class="{ 'is-active': showResetConfirmation }">
					<div
						class="modal-background"
						@click="showResetConfirmation = false"
					></div>
					<div class="modal-card">
						<header class="modal-card-head">
							<p class="modal-card-title">Reset Progress</p>
							<button
								class="delete"
								aria-label="close"
								@click="showResetConfirmation = false"
							></button>
						</header>
						<section class="modal-card-body">
							<p>
								Are you sure you want to reset all your progress? This action
								cannot be undone.
							</p>
						</section>
						<footer class="modal-card-foot">
							<button @click="resetProgress" class="button is-danger">
								Reset All Progress
							</button>
							<button @click="showResetConfirmation = false" class="button">
								Cancel
							</button>
						</footer>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import progressService from '@/services/ProgressService';
import ProgressSectionList from '@/components/ProgressSectionList.vue';

// State
const progressEnabled = ref(false);
const showResetConfirmation = ref(false);
const progress = ref({});
const quizResults = ref({});

// Computed properties
const hasProgress = computed(() => {
	return Object.keys(progress.value).length > 0;
});

const hasQuizResults = computed(() => {
	return Object.keys(quizResults.value).length > 0;
});

const completedTutorials = computed(() => {
	if (!progress.value.completedTutorials) return [];
	return progress.value.completedTutorials;
});

const inProgressTutorials = computed(() => {
	if (!progress.value.inProgressTutorials) return [];
	const completed = new Set(completedTutorials.value);
	return Object.keys(progress.value.tutorialProgress || {}).filter(
		(path) => !completed.has(path) && progress.value.tutorialProgress[path] > 0,
	);
});

const completedQuizzes = computed(() => {
	if (!progress.value.completedQuizzes) return [];
	return progress.value.completedQuizzes;
});

// Filter tutorials by section
const gettingStartedTutorials = computed(() => {
	return filterTutorialsBySection('/tutorials/getting-started');
});

const htmlBasicsTutorials = computed(() => {
	return filterTutorialsBySection('/tutorials/html-basics');
});

const cssBasicsTutorials = computed(() => {
	return filterTutorialsBySection('/tutorials/css-basics');
});

// Methods
function filterTutorialsBySection(sectionPath) {
	const result = [];

	// Add completed tutorials
	if (progress.value.completedTutorials) {
		progress.value.completedTutorials.forEach((path) => {
			if (path.startsWith(sectionPath)) {
				result.push({
					path,
					status: 'completed',
					progress: 100,
				});
			}
		});
	}

	// Add in-progress tutorials
	if (progress.value.tutorialProgress) {
		Object.entries(progress.value.tutorialProgress).forEach(([path, value]) => {
			if (
				path.startsWith(sectionPath) &&
				!completedTutorials.value.includes(path)
			) {
				result.push({
					path,
					status: 'in-progress',
					progress: Math.round(value * 100),
				});
			}
		});
	}

	return result;
}

function getTutorialTitle(path) {
	// Extract the last part of the path
	const parts = path.split('/');
	const lastPart = parts[parts.length - 1];

	// Convert to title case with spaces
	return lastPart.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}

function formatPath(path) {
	const parts = path.split('/');
	return parts.slice(1, -1).join(' > ');
}

function formatDate(timestamp) {
	if (!timestamp) return 'Unknown date';
	const date = new Date(timestamp);
	return date.toLocaleDateString();
}

function getScorePercentage(result) {
	return Math.round((result.score / result.total) * 100);
}

function getScoreClass(result) {
	const percentage = getScorePercentage(result);
	if (percentage >= 80) return 'is-success';
	if (percentage >= 60) return 'is-warning';
	return 'is-danger';
}

function getScoreMessage(result) {
	const percentage = getScorePercentage(result);
	if (percentage === 100) return 'Perfect score!';
	if (percentage >= 80) return 'Great job!';
	if (percentage >= 60) return 'Good effort!';
	return 'Keep practicing!';
}

function enableProgressTracking() {
	progressService.enableProgressTracking();
	loadProgress();
}

function loadProgress() {
	progressEnabled.value = progressService.isProgressTrackingEnabled();

	if (progressEnabled.value) {
		// Get progress data
		progress.value = progressService.getProgress() || {};

		// Get quiz results
		quizResults.value = progress.value.quizResults || {};
	}
}

function exportProgress() {
	const dataStr = JSON.stringify(progress.value, null, 2);
	const dataUri =
		'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

	const exportFileDefaultName = 'tutorial-progress.json';

	const linkElement = document.createElement('a');
	linkElement.setAttribute('href', dataUri);
	linkElement.setAttribute('download', exportFileDefaultName);
	linkElement.click();
}

function resetProgress() {
	progressService.resetProgress();
	progress.value = {};
	quizResults.value = {};
	showResetConfirmation.value = false;
}

// Lifecycle hooks
onMounted(() => {
	loadProgress();
});
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

.stat-box {
	text-align: center;
	padding: 1.5rem;
	background-color: #f8f9fa;
	border-radius: 8px;
}

.score-circle {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: #f5f5f5;
	border: 2px solid #dbdbdb;
}

.score-circle.is-success {
	background-color: #effaf5;
	border-color: #48c78e;
}

.score-circle.is-warning {
	background-color: #fffaeb;
	border-color: #ffe08a;
}

.score-circle.is-danger {
	background-color: #feecf0;
	border-color: #f14668;
}

.score {
	font-size: 1.5rem;
	font-weight: bold;
	line-height: 1;
}

.total {
	font-size: 0.8rem;
	color: #666;
}
</style>
