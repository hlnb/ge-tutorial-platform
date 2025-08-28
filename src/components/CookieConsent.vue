<template>
	<div v-if="!consentGiven" class="cookie-consent-container">
		<div class="cookie-consent">
			<div class="cookie-content">
				<h3 class="title is-4">
					<i class="fas fa-cookie-bite"></i> Cookie Consent
				</h3>
				<p>
					We use cookies to enhance your experience and track your progress
					through our tutorials. This helps us provide personalized learning
					recommendations and remember where you left off.
				</p>
				<p class="mt-2">
					<strong>What we collect:</strong>
				</p>
				<ul>
					<li>Tutorial completion status</li>
					<li>Quiz and exercise results</li>
					<li>Your preferences and settings</li>
				</ul>
			</div>
			<div class="cookie-actions">
				<button class="button is-primary" @click="acceptAll">Accept All</button>
				<button class="button is-light" @click="acceptEssential">
					Essential Only
				</button>
				<button class="button is-link is-light" @click="showSettings">
					Cookie Settings
				</button>
			</div>
		</div>
	</div>

	<!-- Cookie Settings Modal -->
	<div class="modal" :class="{ 'is-active': showSettingsModal }">
		<div class="modal-background" @click="closeSettings"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Cookie Settings</p>
				<button
					class="delete"
					aria-label="close"
					@click="closeSettings"
				></button>
			</header>
			<section class="modal-card-body">
				<div class="cookie-settings">
					<div class="cookie-setting-item">
						<div class="cookie-setting-header">
							<label class="checkbox">
								<input v-model="settings.essential" type="checkbox" disabled />
								<span>Essential Cookies</span>
							</label>
							<span class="tag is-info is-light">Required</span>
						</div>
						<p class="cookie-setting-description">
							These cookies are necessary for the website to function and cannot
							be switched off.
						</p>
					</div>

					<div class="cookie-setting-item">
						<div class="cookie-setting-header">
							<label class="checkbox">
								<input v-model="settings.progress" type="checkbox" />
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
								<input v-model="settings.preferences" type="checkbox" />
								<span>Preferences</span>
							</label>
						</div>
						<p class="cookie-setting-description">
							These cookies allow us to remember your preferences and settings.
						</p>
					</div>
				</div>
			</section>
			<footer class="modal-card-foot">
				<button class="button is-primary" @click="saveSettings">
					Save Settings
				</button>
				<button class="button" @click="closeSettings">Cancel</button>
			</footer>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const consentGiven = ref(false);
const showSettingsModal = ref(false);
const settings = ref({
	essential: true,
	progress: true,
	preferences: true,
});

// Check if consent has already been given
onMounted(() => {
	const storedConsent = localStorage.getItem('cookieConsent');
	if (storedConsent) {
		consentGiven.value = true;
		try {
			const parsedSettings = JSON.parse(localStorage.getItem('cookieSettings'));
			if (parsedSettings) {
				settings.value = { ...settings.value, ...parsedSettings };
			}
		} catch (e) {
			console.error('Error parsing cookie settings', e);
		}
	}
});

// Accept all cookies
const acceptAll = () => {
	settings.value = {
		essential: true,
		progress: true,
		preferences: true,
	};
	saveConsent();
};

// Accept only essential cookies
const acceptEssential = () => {
	settings.value = {
		essential: true,
		progress: false,
		preferences: false,
	};
	saveConsent();
};

// Show cookie settings modal
const showSettings = () => {
	showSettingsModal.value = true;
};

// Close cookie settings modal
const closeSettings = () => {
	showSettingsModal.value = false;
};

// Save cookie settings
const saveSettings = () => {
	saveConsent();
	closeSettings();
};

// Save consent to localStorage
const saveConsent = () => {
	localStorage.setItem('cookieConsent', 'true');
	localStorage.setItem('cookieSettings', JSON.stringify(settings.value));
	consentGiven.value = true;

	// Emit event for parent components
	emit('consent-updated', settings.value);
};

// Define emits
const emit = defineEmits(['consent-updated']);
</script>

<style scoped>
.cookie-consent-container {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	padding: 1rem;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
}

.cookie-consent {
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	max-width: 800px;
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.cookie-content {
	padding: 1.5rem;
}

.cookie-actions {
	display: flex;
	gap: 0.5rem;
	padding: 1rem 1.5rem;
	background-color: #f5f5f5;
	justify-content: flex-end;
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
	.cookie-consent {
		max-width: 100%;
	}

	.cookie-actions {
		flex-direction: column;
	}

	.cookie-actions .button {
		width: 100%;
	}
}
</style>
