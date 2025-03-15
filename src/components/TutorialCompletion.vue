<template>
	<div class="tutorial-completion">
		<div v-if="!progressEnabled" class="notification is-warning">
			<p>
				<i class="fas fa-exclamation-triangle"></i>
				Progress tracking is disabled. Enable it in
				<button
					@click="openCookieSettings"
					class="button is-small is-link is-light"
				>
					Cookie Settings
				</button>
				to track your completed tutorials.
			</p>
		</div>

		<div v-else-if="isCompleted" class="completion-status completed">
			<div class="completion-icon">
				<i class="fas fa-check-circle"></i>
			</div>
			<div class="completion-message">
				<h3 class="title is-5">Tutorial Completed!</h3>
				<p>Great job! You've completed this tutorial.</p>
			</div>
			<div class="completion-actions">
				<button @click="markAsIncomplete" class="button is-small is-light">
					Mark as Incomplete
				</button>
			</div>
		</div>

		<div v-else class="completion-status incomplete">
			<div class="completion-icon">
				<i class="far fa-circle"></i>
			</div>
			<div class="completion-message">
				<h3 class="title is-5">Track Your Progress</h3>
				<p>Mark this tutorial as completed when you're done.</p>
			</div>
			<div class="completion-actions">
				<button @click="markAsCompleted" class="button is-primary">
					Mark as Completed
				</button>
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
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import progressService from '@/services/ProgressService';

const props = defineProps({
	tutorialPath: {
		type: String,
		default: '',
	},
});

const route = useRoute();
const isCompleted = ref(false);
const progressEnabled = computed(() =>
	progressService.isProgressTrackingEnabled(),
);
const showCookieSettings = ref(false);
const cookieSettings = ref({
	essential: true,
	progress: true,
	preferences: true,
});

// Get the current tutorial path
const currentPath = computed(() => {
	return props.tutorialPath || route.path;
});

// Check if tutorial is completed
const checkCompletionStatus = async () => {
	if (!progressEnabled.value) return;

	try {
		const progress = await progressService.getProgress();
		if (progress && progress.completedTutorials) {
			isCompleted.value = progress.completedTutorials.includes(currentPath.value);
		}
	} catch (error) {
		console.error('Error checking completion status:', error);
	}
};

// Mark tutorial as completed
const markAsCompleted = async () => {
	if (!progressEnabled.value) {
		openCookieSettings();
		return;
	}

	try {
		await progressService.markTutorialCompleted(currentPath.value);
		isCompleted.value = true;
		emit('tutorial-completed', currentPath.value);
	} catch (error) {
		console.error('Error marking tutorial as completed:', error);
	}
};

// Mark tutorial as incomplete
const markAsIncomplete = async () => {
	if (!progressEnabled.value) return;

	try {
		const progress = await progressService.getProgress();
		if (progress && progress.completedTutorials) {
			const index = progress.completedTutorials.indexOf(currentPath.value);
			if (index > -1) {
				progress.completedTutorials.splice(index, 1);
				await progressService.saveProgress(progress);
				isCompleted.value = false;
				emit('tutorial-incomplete', currentPath.value);
			}
		}
	} catch (error) {
		console.error('Error marking tutorial as incomplete:', error);
	}
};

// Open cookie settings
const openCookieSettings = () => {
	showCookieSettings.value = true;
};

// Save cookie settings
const saveCookieSettings = () => {
	localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings.value));
	showCookieSettings.value = false;

	// Check completion status after settings are saved
	checkCompletionStatus();
};

// Load cookie settings
const loadCookieSettings = () => {
	try {
		const storedSettings = JSON.parse(localStorage.getItem('cookieSettings'));
		if (storedSettings) {
			cookieSettings.value = { ...cookieSettings.value, ...storedSettings };
		}
	} catch (e) {
		console.error('Error loading cookie settings', e);
	}
};

// Initialize
onMounted(async () => {
	loadCookieSettings();
	await checkCompletionStatus();
});

// Watch for route changes
watch(
	() => route.path,
	async () => {
		await checkCompletionStatus();
	}
);

// Define emits
const emit = defineEmits(['tutorial-completed', 'tutorial-incomplete']);
</script>

<style scoped>
.tutorial-completion {
	margin-top: 2rem;
	margin-bottom: 0;
}

.completion-status {
	display: flex;
	align-items: center;
	padding: 1.5rem;
	border-radius: 8px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.completed {
	background-color: #effaf5;
	border: 1px solid #48c78e;
}

.incomplete {
	background-color: #f5f5f5;
	border: 1px solid #dbdbdb;
}

.completion-icon {
	font-size: 2rem;
	margin-right: 1.5rem;
}

.completed .completion-icon {
	color: #48c78e;
}

.incomplete .completion-icon {
	color: #7a7a7a;
}

.completion-message {
	flex: 1;
}

.completion-message h3 {
	margin-bottom: 0.5rem;
}

.completion-message p {
	margin: 0;
	color: #666;
}

.completion-actions {
	margin-left: 1.5rem;
}

.notification {
	margin-bottom: 0;
}

.notification button {
	margin-left: 0.5rem;
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
	.completion-status {
		flex-direction: column;
		text-align: center;
	}

	.completion-icon {
		margin-right: 0;
		margin-bottom: 1rem;
	}

	.completion-actions {
		margin-left: 0;
		margin-top: 1.5rem;
		width: 100%;
	}

	.completion-actions button {
		width: 100%;
	}
}
</style>
