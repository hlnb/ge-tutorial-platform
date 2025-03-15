<template>
	<div class="student-progress">
		<div
			v-if="!progressService.isProgressTrackingEnabled()"
			class="no-tracking"
		>
			<div class="notification is-warning">
				<h3 class="title is-4">
					<i class="fas fa-exclamation-triangle"></i> Progress Tracking Disabled
				</h3>
				<p>
					You have disabled progress tracking in your cookie settings. Enable
					progress tracking to keep track of your learning journey.
				</p>
				<button @click="openCookieSettings" class="button is-primary mt-3">
					Update Cookie Settings
				</button>
			</div>
		</div>

		<div v-else-if="loading" class="loading-progress">
			<div class="has-text-centered">
				<i class="fas fa-spinner fa-spin fa-3x"></i>
				<p class="mt-3">Loading your progress...</p>
			</div>
		</div>

		<div v-else class="progress-dashboard">
			<!-- Progress Summary -->
			<div class="box progress-summary">
				<h3 class="title is-4">
					<i class="fas fa-chart-line"></i> Your Learning Progress
				</h3>

				<div class="columns is-multiline mt-4">
					<div class="column is-6">
						<div class="progress-stat">
							<div class="progress-stat-value">
								{{ summary.completedCount }}
							</div>
							<div class="progress-stat-label">Tutorials Completed</div>
						</div>
					</div>

					<div class="column is-6">
						<div class="progress-stat">
							<div class="progress-stat-value">
								{{ summary.inProgressCount }}
							</div>
							<div class="progress-stat-label">Tutorials In Progress</div>
						</div>
					</div>

					<div class="column is-6">
						<div class="progress-stat">
							<div class="progress-stat-value">{{ summary.quizCount }}</div>
							<div class="progress-stat-label">Quizzes Completed</div>
						</div>
					</div>

					<div class="column is-6">
						<div class="progress-stat">
							<div class="progress-stat-value">
								{{ calculateOverallProgress }}%
							</div>
							<div class="progress-stat-label">Overall Progress</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Continue Learning -->
			<div v-if="progress.lastVisited" class="box continue-learning">
				<h3 class="title is-4">
					<i class="fas fa-bookmark"></i> Continue Learning
				</h3>

				<div class="continue-card">
					<div class="continue-info">
						<h4 class="title is-5">{{ getLastVisitedTitle }}</h4>
						<p>
							You last visited this tutorial on
							{{ formatDate(getLastVisitedDate) }}
						</p>

						<div v-if="getLastVisitedProgress" class="mt-3">
							<p>Your progress: {{ getLastVisitedProgress.percentage }}%</p>
							<progress
								class="progress is-primary"
								:value="getLastVisitedProgress.percentage"
								max="100"
							></progress>
							<p class="is-size-7">
								Last section: {{ getLastVisitedProgress.lastSection }}
							</p>
						</div>
					</div>

					<div class="continue-action">
						<router-link :to="progress.lastVisited" class="button is-primary">
							Continue
						</router-link>
					</div>
				</div>
			</div>

			<!-- Recommended Tutorials -->
			<div class="box recommended-tutorials">
				<h3 class="title is-4">
					<i class="fas fa-lightbulb"></i> Recommended Next Steps
				</h3>

				<div
					v-if="recommendations.length === 0"
					class="notification is-info is-light"
				>
					<p>Complete more tutorials to get personalized recommendations.</p>
				</div>

				<div v-else class="recommendations-list">
					<div
						v-for="(rec, index) in recommendations"
						:key="index"
						class="recommendation-card"
					>
						<div class="recommendation-info">
							<h4 class="title is-5">{{ rec.title }}</h4>
							<p>{{ rec.description }}</p>
						</div>

						<div class="recommendation-action">
							<router-link :to="rec.path" class="button is-link">
								Start
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<!-- Completed Tutorials -->
			<div class="box completed-tutorials">
				<h3 class="title is-4">
					<i class="fas fa-check-circle"></i> Completed Tutorials
				</h3>

				<div
					v-if="progress.completedTutorials.length === 0"
					class="notification is-info is-light"
				>
					<p>You haven't completed any tutorials yet. Keep learning!</p>
				</div>

				<div v-else class="completed-list">
					<div
						v-for="(tutorial, index) in progress.completedTutorials"
						:key="index"
						class="completed-item"
					>
						<i class="fas fa-check-circle has-text-success"></i>
						<router-link :to="tutorial">{{
							getTutorialTitle(tutorial)
						}}</router-link>
						<span class="completed-date">{{ formatDate(new Date()) }}</span>
					</div>
				</div>
			</div>

			<!-- In Progress Tutorials -->
			<div class="box in-progress-tutorials">
				<h3 class="title is-4"><i class="fas fa-spinner"></i> In Progress</h3>

				<div
					v-if="Object.keys(progress.inProgressTutorials).length === 0"
					class="notification is-info is-light"
				>
					<p>You don't have any tutorials in progress.</p>
				</div>

				<div v-else class="in-progress-list">
					<div
						v-for="(details, tutorial) in progress.inProgressTutorials"
						:key="tutorial"
						class="in-progress-item"
					>
						<div class="in-progress-info">
							<h4 class="title is-5">{{ getTutorialTitle(tutorial) }}</h4>
							<p>Progress: {{ details.percentage }}%</p>
							<progress
								class="progress is-primary"
								:value="details.percentage"
								max="100"
							></progress>
							<p class="is-size-7">
								Last updated: {{ formatDate(new Date(details.lastUpdated)) }}
							</p>
						</div>

						<div class="in-progress-action">
							<router-link :to="tutorial" class="button is-link is-small">
								Continue
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<!-- Quiz Results -->
			<div class="box quiz-results">
				<h3 class="title is-4">
					<i class="fas fa-question-circle"></i> Quiz Results
				</h3>

				<div
					v-if="Object.keys(progress.quizResults).length === 0"
					class="notification is-info is-light"
				>
					<p>You haven't completed any quizzes yet.</p>
				</div>

				<div v-else class="quiz-results-list">
					<div
						v-for="(result, quizId) in progress.quizResults"
						:key="quizId"
						class="quiz-result-item"
					>
						<div class="quiz-result-info">
							<h4 class="title is-5">{{ getQuizTitle(quizId) }}</h4>
							<p>
								Score: {{ result.score }}/{{ result.maxScore }} ({{
									result.percentage
								}}%)
							</p>
							<progress
								class="progress"
								:class="getScoreClass(result.percentage)"
								:value="result.percentage"
								max="100"
							></progress>
							<p class="is-size-7">
								Completed on: {{ formatDate(new Date(result.completedAt)) }}
							</p>
						</div>

						<div class="quiz-result-action">
							<button
								@click="viewQuizDetails(quizId)"
								class="button is-info is-small"
							>
								View Details
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Clear Progress -->
			<div class="box clear-progress">
				<h3 class="title is-4"><i class="fas fa-trash"></i> Reset Progress</h3>
				<p>
					If you want to start fresh, you can clear all your progress data. This
					action cannot be undone.
				</p>
				<button @click="confirmClearProgress" class="button is-danger mt-3">
					Clear All Progress
				</button>
			</div>
		</div>

		<!-- Clear Progress Confirmation Modal -->
		<div class="modal" :class="{ 'is-active': showClearConfirmation }">
			<div
				class="modal-background"
				@click="showClearConfirmation = false"
			></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Confirm Reset</p>
					<button
						class="delete"
						aria-label="close"
						@click="showClearConfirmation = false"
					></button>
				</header>
				<section class="modal-card-body">
					<p>
						Are you sure you want to clear all your progress data? This includes
						completed tutorials, in-progress tutorials, and quiz results.
					</p>
					<p class="has-text-danger mt-3">
						<strong>This action cannot be undone.</strong>
					</p>
				</section>
				<footer class="modal-card-foot">
					<button @click="clearProgress" class="button is-danger">
						Yes, Clear All Progress
					</button>
					<button @click="showClearConfirmation = false" class="button">
						Cancel
					</button>
				</footer>
			</div>
		</div>

		<!-- Cookie Settings Modal -->
		<div class="modal" :class="{ 'is-active': showCookieSettings }">
			<div class="modal-background" @click="showCookieSettings = false"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Cookie Settings</p>
					<button
						class="delete"
						aria-label="close"
						@click="showCookieSettings = false"
					></button>
				</header>
				<section class="modal-card-body">
					<div class="cookie-settings">
						<div class="cookie-setting-item">
							<div class="cookie-setting-header">
								<label class="checkbox">
									<input
										type="checkbox"
										v-model="cookieSettings.essential"
										disabled
									/>
									<span>Essential Cookies</span>
								</label>
								<span class="tag is-info is-light">Required</span>
							</div>
							<p class="cookie-setting-description">
								These cookies are necessary for the website to function and
								cannot be switched off.
							</p>
						</div>

						<div class="cookie-setting-item">
							<div class="cookie-setting-header">
								<label class="checkbox">
									<input type="checkbox" v-model="cookieSettings.progress" />
									<span>Progress Tracking</span>
								</label>
								<span class="tag is-success is-light">Recommended</span>
							</div>
							<p class="cookie-setting-description">
								These cookies allow us to track your progress through tutorials
								and remember where you left off.
							</p>
						</div>

						<div class="cookie-setting-item">
							<div class="cookie-setting-header">
								<label class="checkbox">
									<input type="checkbox" v-model="cookieSettings.preferences" />
									<span>Preferences</span>
								</label>
							</div>
							<p class="cookie-setting-description">
								These cookies allow us to remember your preferences and
								settings.
							</p>
						</div>
					</div>
				</section>
				<footer class="modal-card-foot">
					<button class="button is-primary" @click="saveCookieSettings">
						Save Settings
					</button>
					<button class="button" @click="showCookieSettings = false">
						Cancel
					</button>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import progressService from '@/services/ProgressService';

// State
const loading = ref(true);
const progress = ref({
	completedTutorials: [],
	inProgressTutorials: {},
	quizResults: {},
	lastVisited: null,
});
const summary = ref({
	completedCount: 0,
	inProgressCount: 0,
	quizCount: 0,
});
const recommendations = ref([]);
const showClearConfirmation = ref(false);
const showCookieSettings = ref(false);
const cookieSettings = ref({
	essential: true,
	progress: true,
	preferences: true,
});

// Load progress data
const loadProgressData = async () => {
	if (!progressService.isProgressTrackingEnabled()) return;

	try {
		const progressData = await progressService.getProgress();
		if (progressData) {
			progress.value = progressData;
			const summaryData = await progressService.getProgressSummary();
			summary.value = summaryData;
		}
	} catch (error) {
		console.error('Error loading progress data:', error);
	}
};

// Format date
const formatDate = (date) => {
	return new Date(date).toLocaleDateString('en-AU', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
};

// Get tutorial title from path
const getTutorialTitle = (path) => {
	// This is a placeholder - in a real implementation, you would have
	// a mapping of paths to titles or fetch the title from the router

	// Extract the last part of the path
	const parts = path.split('/');
	const lastPart = parts[parts.length - 1];

	// Convert to title case
	return lastPart
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

// Get quiz title from ID
const getQuizTitle = (quizId) => {
	// This is a placeholder - in a real implementation, you would have
	// a mapping of quiz IDs to titles

	return `Quiz: ${quizId}`;
};

// Get score class based on percentage
const getScoreClass = (percentage) => {
	if (percentage >= 80) return 'is-success';
	if (percentage >= 60) return 'is-primary';
	if (percentage >= 40) return 'is-warning';
	return 'is-danger';
};

// Calculate overall progress
const calculateOverallProgress = computed(() => {
	// This is a simplified calculation - in a real implementation,
	// you would have a more sophisticated algorithm

	const totalTutorials = 20; // Placeholder - total number of tutorials
	const completed = summary.value.completedCount;

	// Calculate in-progress percentage contribution
	let inProgressContribution = 0;
	for (const tutorial in progress.value.inProgressTutorials) {
		inProgressContribution +=
			progress.value.inProgressTutorials[tutorial].percentage / 100;
	}

	const overallPercentage =
		((completed + inProgressContribution) / totalTutorials) * 100;
	return Math.round(overallPercentage);
});

// Get last visited title
const getLastVisitedTitle = computed(() => {
	if (!progress.value.lastVisited) return '';
	return getTutorialTitle(progress.value.lastVisited);
});

// Get last visited date
const getLastVisitedDate = computed(() => {
	if (!progress.value.lastVisited) return new Date();

	// Check if it's in inProgressTutorials
	if (progress.value.inProgressTutorials[progress.value.lastVisited]) {
		return new Date(
			progress.value.inProgressTutorials[
				progress.value.lastVisited
			].lastUpdated,
		);
	}

	// Otherwise, use current date as fallback
	return new Date();
});

// Get last visited progress
const getLastVisitedProgress = computed(() => {
	if (!progress.value.lastVisited) return null;
	return progress.value.inProgressTutorials[progress.value.lastVisited];
});

// Confirm clear progress
const confirmClearProgress = () => {
	showClearConfirmation.value = true;
};

// Clear progress
const clearProgress = async () => {
	try {
		await progressService.clearAllProgress();
		progress.value = {
			completedTutorials: [],
			inProgressTutorials: {},
			quizResults: {},
			lastVisited: null,
		};
		summary.value = {
			completedCount: 0,
			inProgressCount: 0,
			quizCount: 0,
		};
		recommendations.value = [];
		showClearConfirmation.value = false;
	} catch (error) {
		console.error('Error clearing progress:', error);
	}
};

// View quiz details
const viewQuizDetails = (quizId) => {
	// This is a placeholder - in a real implementation, you would
	// navigate to a quiz details page or show a modal
	alert(`Quiz details for ${quizId}`);
};

// Open cookie settings
const openCookieSettings = () => {
	showCookieSettings.value = true;
};

// Save cookie settings
const saveCookieSettings = () => {
	localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings.value));
	showCookieSettings.value = false;

	// Reload progress data if progress tracking was enabled
	if (cookieSettings.value.progress) {
		loadProgressData();
	}
};

// Load progress data on mount
onMounted(async () => {
	// Load cookie settings
	try {
		const storedSettings = JSON.parse(localStorage.getItem('cookieSettings'));
		if (storedSettings) {
			cookieSettings.value = { ...cookieSettings.value, ...storedSettings };
		}
	} catch (e) {
		console.error('Error loading cookie settings:', e);
	}

	// Load progress data with a loading state
	loading.value = true;
	await loadProgressData();
	loading.value = false;
});
</script>

<style scoped>
.student-progress {
	max-width: 960px;
	margin: 0 auto;
	padding: 2rem 1rem;
}

.loading-progress {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 300px;
}

.progress-dashboard {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.progress-summary {
	background-color: #f8f9fa;
}

.progress-stat {
	text-align: center;
	padding: 1rem;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.progress-stat-value {
	font-size: 2.5rem;
	font-weight: bold;
	color: #485fc7;
}

.progress-stat-label {
	font-size: 0.9rem;
	color: #666;
	margin-top: 0.5rem;
}

.continue-card,
.recommendation-card,
.in-progress-item,
.quiz-result-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #f8f9fa;
	border-radius: 8px;
	margin-bottom: 1rem;
}

.continue-info,
.recommendation-info,
.in-progress-info,
.quiz-result-info {
	flex: 1;
}

.continue-action,
.recommendation-action,
.in-progress-action,
.quiz-result-action {
	margin-left: 1rem;
}

.completed-item {
	display: flex;
	align-items: center;
	padding: 0.75rem;
	border-bottom: 1px solid #f0f0f0;
}

.completed-item:last-child {
	border-bottom: none;
}

.completed-item i {
	margin-right: 0.75rem;
}

.completed-date {
	margin-left: auto;
	font-size: 0.9rem;
	color: #666;
}

.cookie-setting-item {
	margin-bottom: 1.5rem;
	padding-bottom: 1.5rem;
	border-bottom: 1px solid #f0f0f0;
}

.cookie-setting-item:last-child {
	border-bottom: none;
	margin-bottom: 0;
	padding-bottom: 0;
}

.cookie-setting-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.5rem;
}

.cookie-setting-description {
	color: #666;
	font-size: 0.9rem;
	margin-left: 1.8rem;
}

@media (max-width: 768px) {
	.continue-card,
	.recommendation-card,
	.in-progress-item,
	.quiz-result-item {
		flex-direction: column;
		align-items: flex-start;
	}

	.continue-action,
	.recommendation-action,
	.in-progress-action,
	.quiz-result-action {
		margin-left: 0;
		margin-top: 1rem;
		width: 100%;
	}

	.continue-action .button,
	.recommendation-action .button,
	.in-progress-action .button,
	.quiz-result-action .button {
		width: 100%;
	}

	.completed-item {
		flex-direction: column;
		align-items: flex-start;
	}

	.completed-date {
		margin-left: 0;
		margin-top: 0.5rem;
	}
}
</style>
