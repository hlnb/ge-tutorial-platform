<template>
	<div class="student-progress-page">
		<div class="container">
			<div class="page-header">
				<h1 class="title is-1">
					<i class="fas fa-chart-line"></i> My Learning Progress
				</h1>
				<p class="subtitle">
					Track your journey through our tutorials and see your achievements
				</p>
			</div>

			<!-- Authentication Status -->
			<div v-if="!isAuthenticated" class="notification is-warning">
				<p>
					<i class="fas fa-exclamation-triangle mr-2"></i>
					<strong>You are not logged in.</strong> Your progress is currently
					stored only on this device.
				</p>
				<p class="mt-2">
					<router-link to="/auth/login" class="button is-primary is-small mr-2">
						Login
					</router-link>
					<router-link to="/auth/register" class="button is-info is-small">
						Create Account
					</router-link>
				</p>
			</div>

			<div v-else class="notification is-success">
				<p>
					<i class="fas fa-check-circle mr-2"></i>
					<strong>Welcome, {{ currentUser.name }}!</strong> Your progress is
					being saved to your account.
				</p>
				<p class="mt-2">
					<router-link to="/auth/logout" class="button is-light is-small">
						Logout
					</router-link>
				</p>
			</div>

			<div v-else>
				<div class="progress-summary">
					<div class="card">
						<div class="card-content">
							<div class="columns">
								<div class="column">
									<div class="stat-box">
										<h3 class="title is-4">{{ completedTutorials }}</h3>
										<p class="subtitle is-6">Tutorials Completed</p>
									</div>
								</div>
								<div class="column">
									<div class="stat-box">
										<h3 class="title is-4">{{ visitedTutorials }}</h3>
										<p class="subtitle is-6">Tutorials Visited</p>
									</div>
								</div>
								<div class="column">
									<div class="stat-box">
										<h3 class="title is-4">{{ completedQuizzes }}</h3>
										<p class="subtitle is-6">Quizzes Completed</p>
									</div>
								</div>
								<div class="column">
									<div class="stat-box">
										<h3 class="title is-4">{{ averageQuizScore }}%</h3>
										<p class="subtitle is-6">Average Quiz Score</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="section-progress mt-6">
					<h2 class="title is-3">Your Progress</h2>

					<div v-if="Object.keys(progressBySection).length > 0">
						<div
							v-for="([sectionKey, section]) in Object.entries(progressBySection)"
							:key="sectionKey"
							class="section-progress mb-6"
						>
							<h2 class="title is-3">{{ formatSectionTitle(sectionKey) }}</h2>

							<div class="progress-bar-container">
								<div
									class="progress-bar"
									:style="{ width: `${section.completionPercentage || 0}%` }"
								></div>
								<span class="progress-text"
									>{{ section.completionPercentage || 0 }}% Complete</span
								>
							</div>

							<div class="box mt-4">
								<table class="table is-fullwidth">
									<thead>
										<tr>
											<th>Tutorial</th>
											<th>Status</th>
											<th>Last Visited</th>
											<th>Quiz Score</th>
										</tr>
									</thead>
									<tbody>
										<tr
											v-for="tutorial in (section.tutorials || [])"
											:key="tutorial.path"
										>
											<td>
												<router-link :to="tutorial.path">{{
													tutorial.title
												}}</router-link>
											</td>
											<td>
												<span v-if="tutorial.completed" class="tag is-success">
													<i class="fas fa-check mr-1"></i> Completed
												</span>
												<span
													v-else-if="tutorial.visited"
													class="tag is-warning"
												>
													<i class="fas fa-eye mr-1"></i> In Progress
												</span>
												<span v-else class="tag is-light">
													<i class="fas fa-circle mr-1"></i> Not Started
												</span>
											</td>
											<td>
												{{
													tutorial.lastVisited
														? formatDate(tutorial.lastVisited)
														: 'Never'
												}}
											</td>
											<td>
												<span v-if="tutorial.quizCompleted" class="tag is-info">
													{{ tutorial.quizScore }}/{{
														tutorial.quizTotalQuestions
													}}
												</span>
												<span v-else class="tag is-light">Not Taken</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div v-else class="notification is-info">
						<p>
							<i class="fas fa-info-circle mr-2"></i>
							You haven't started any tutorials yet.
							<router-link to="/tutorials">Browse our tutorials</router-link> to
							get started!
						</p>
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
								<button class="button is-info" @click="exportProgress">
									<span class="icon"><i class="fas fa-download"></i></span>
									<span>Export Progress</span>
								</button>
								<button
									class="button is-danger"
									@click="showResetConfirmation = true"
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
							<button class="button is-danger" @click="resetProgress">
								Reset All Progress
							</button>
							<button class="button" @click="showResetConfirmation = false">
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
import { format } from 'date-fns';
import { useProgress } from '@/composables/useProgress';
import { clearUserProgress, getUserProgress } from '@/utils/progressUtils';
import { useRouter } from 'vue-router';
import authService from '@/services/AuthService';

// Use the new progress composable
const {
	isAuthenticated: composableIsAuthenticated,
	currentUser: composableCurrentUser,
	progress,
	summary,
	reloadProgress,
} = useProgress();

const showResetConfirmation = ref(false);
const router = useRouter();

// Always use AuthService for authentication check
const isAuthenticated = computed(() => authService.isUserAuthenticated());
const currentUser = computed(() => authService.getCurrentUser());

// Tutorial metadata (static)
const tutorialMetadata = ref({
	'getting-started': {
		title: 'Getting Started',
		tutorials: {
			'/tutorials/getting-started': { title: 'Introduction' },
			'/tutorials/getting-started/how-internet-works': {
				title: 'How the Internet Works',
			},
			'/tutorials/getting-started/web-basics': { title: 'Web Basics' },
			'/tutorials/getting-started/dev-environment': {
				title: 'Development Environment',
			},
			'/tutorials/getting-started/browser-tools': { title: 'Browser Tools' },
			'/tutorials/getting-started/text-editors': { title: 'Text Editors' },
			'/tutorials/getting-started/domain-hosting': {
				title: 'Domain Names & Hosting',
			},
		},
	},
	'html-basics': {
		title: 'HTML Basics',
		tutorials: {
			'/tutorials/beginner/html-basics/': { title: 'Introduction' },
			'/tutorials/beginner/html-basics/html-first-page': { title: 'Your First HTML Page' },
			'/tutorials/beginner/html-basics/html-text': { title: 'Working with Text' },
			'/tutorials/beginner/html-basics/html-links': { title: 'Links & Navigation' },
			'/tutorials/beginner/html-basics/html-images': { title: 'Images' },
			'/tutorials/beginner/html-basics/html-doc-structure': { title: 'Document Structure' },
			'/tutorials/beginner/html-basics/html-forms': { title: 'Forms' },
			'/tutorials/beginner/html-basics/html-emmet': { title: 'HTML Emmet' },
		},
	},
	'css-basics': {
		title: 'CSS Basics',
		tutorials: {
			'/tutorials/beginner/css-basics/': { title: 'Introduction' },
			'/tutorials/beginner/css-basics/introduction': {
				title: 'Getting Started with CSS',
			},
			'/tutorials/beginner/css-basics/selectors': { title: 'CSS Selectors' },
			'/tutorials/beginner/css-basics/box-model': { title: 'The Box Model' },
			'/tutorials/beginner/css-basics/text': { title: 'Text Properties' },
			'/tutorials/beginner/css-basics/layout': { title: 'Layout Basics' },
			'/tutorials/beginner/css-basics/colors': { title: 'Working with Colors' },
			'/tutorials/beginner/css-basics/modern': { title: 'Modern CSS' },
			'/tutorials/beginner/css-basics/responsive': { title: 'Responsive Design' },
			'/tutorials/beginner/css-basics/flexbox': { title: 'Flexbox' },
		},
	},
});

// Map progress data to tutorial paths
const progressData = computed(() => progress.value?.tutorialProgress || {});
const quizResults = computed(() => progress.value?.quizResults || {});

// Progress statistics
const completedTutorials = computed(() => progress.value?.completedTutorials?.length || 0);
const visitedTutorials = computed(() => Object.values(progressData.value).filter(t => t.visited).length);
const completedQuizzes = computed(() => progress.value?.completedQuizzes?.length || 0);
const averageQuizScore = computed(() => {
	const quizzes = Object.values(quizResults.value);
	if (!quizzes.length) return 0;
	const total = quizzes.reduce(
		(sum, q) => sum + (q.score / (q.total || 1)) * 100,
		0,
	);
	return Math.round(total / quizzes.length);
});
const hasQuizResults = computed(() => Object.keys(quizResults.value).length > 0);

// Section progress
const progressBySection = computed(() => {
	const sections = {};
	Object.keys(tutorialMetadata.value).forEach((sectionKey) => {
		const section = tutorialMetadata.value[sectionKey];
		sections[sectionKey] = {
			title: section.title,
			tutorials: [],
			completedCount: 0,
			totalCount: Object.keys(section.tutorials).length,
			completionPercentage: 0,
		};
		Object.entries(section.tutorials).forEach(([path, metadata]) => {
			const progress = progressData.value[path] || {};
			const quiz = quizResults.value[path] || {};
			const tutorial = {
				path,
				title: metadata.title,
				visited: !!progress.visited,
				completed:
					progress.value?.completedTutorials?.includes(path) || !!progress.completed,
				lastVisited: progress.lastUpdated,
				quizCompleted: !!quiz.score,
				quizScore: quiz.score || 0,
				quizTotalQuestions: quiz.total || 0,
			};
			sections[sectionKey].tutorials.push(tutorial);
			if (tutorial.completed) sections[sectionKey].completedCount++;
		});
		sections[sectionKey].completionPercentage = Math.round(
			(sections[sectionKey].completedCount / sections[sectionKey].totalCount) * 100,
		);
	});
	return sections;
});

// Formatting helpers
const formatDate = (timestamp) => {
	if (!timestamp) return 'Never';
	return format(new Date(timestamp), 'MMM d, yyyy');
};
const formatSectionTitle = (sectionKey) => {
	return tutorialMetadata.value[sectionKey]?.title || sectionKey.replace(/-/g, ' ');
};
const getTutorialTitle = (path) => {
	for (const section of Object.values(tutorialMetadata.value)) {
		if (section.tutorials[path]) return section.tutorials[path].title;
	}
	return path;
};
const formatPath = (path) =>
	path.replace(/^\/tutorials\//, '').replace(/\//g, ' > ');
const getScoreClass = (result) => {
	const pct = result && result.total ? (result.score / result.total) * 100 : 0;
	if (pct >= 80) return 'is-success';
	if (pct >= 60) return 'is-warning';
	return 'is-danger';
};
const getScorePercentage = (result) => {
	if (!result || !result.total) return 0;
	return Math.round((result.score / result.total) * 100);
};
const getScoreMessage = (result) => {
	const pct = getScorePercentage(result);
	if (pct >= 80) return 'Excellent!';
	if (pct >= 60) return 'Good job!';
	if (pct >= 40) return 'Keep practicing!';
	return 'Needs improvement';
};

// Reset progress
const resetProgress = async () => {
	await clearUserProgress();
	await reloadProgress();
	showResetConfirmation.value = false;
};

// Export progress
const exportProgress = async () => {
	const data = await getUserProgress();
	const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = 'progress.json';
	a.click();
	URL.revokeObjectURL(url);
};
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

.progress-bar-container {
	position: relative;
	height: 30px;
	background-color: #f5f5f5;
	border-radius: 15px;
	overflow: hidden;
}

.progress-bar {
	height: 100%;
	background-color: #48c78e;
	transition: width 0.5s ease;
}

.progress-text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #333;
	font-weight: bold;
}

.section-progress {
	margin-top: 2rem;
}
</style>
