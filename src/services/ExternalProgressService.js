/**
 * External Progress Service
 * Handles storing and retrieving student progress data using Vercel KV (Redis)
 */

// Import the KV client from the Vercel SDK
// Note: You'll need to install @vercel/kv with: npm install @vercel/kv
import { kv } from '@vercel/kv';

class ExternalProgressService {
	constructor() {
		this.isAuthenticated = false;
		this.userId = null;
		this.localStorageKey = 'ge_user_progress';
		this.syncInProgress = false;
	}

	/**
	 * Initialize the service and check authentication status
	 */
	async init() {
		// Check if user is authenticated (you'll need to implement your auth logic)
		this.userId = this.getUserId();
		this.isAuthenticated = !!this.userId;

		// If authenticated, sync local progress with server
		if (this.isAuthenticated) {
			await this.syncProgress();
		}

		return this.isAuthenticated;
	}

	/**
	 * Get the current user ID (implement your auth logic here)
	 */
	getUserId() {
		// This is a placeholder - replace with your actual auth implementation
		// For example, you might get this from a JWT token or session cookie
		return localStorage.getItem('ge_user_id');
	}

	/**
	 * Set the user ID (after login/registration)
	 */
	setUserId(userId) {
		if (!userId) return false;

		localStorage.setItem('ge_user_id', userId);
		this.userId = userId;
		this.isAuthenticated = true;

		// Sync progress after setting user ID
		this.syncProgress();

		return true;
	}

	/**
	 * Clear user ID (after logout)
	 */
	clearUserId() {
		localStorage.removeItem('ge_user_id');
		this.userId = null;
		this.isAuthenticated = false;
	}

	/**
	 * Get progress data from local storage
	 */
	getLocalProgress() {
		try {
			const progressData = localStorage.getItem(this.localStorageKey);
			return progressData ? JSON.parse(progressData) : {};
		} catch (error) {
			console.error('Error getting local progress:', error);
			return {};
		}
	}

	/**
	 * Save progress data to local storage
	 */
	saveLocalProgress(progressData) {
		try {
			localStorage.setItem(this.localStorageKey, JSON.stringify(progressData));
			return true;
		} catch (error) {
			console.error('Error saving local progress:', error);
			return false;
		}
	}

	/**
	 * Get progress data from Vercel KV
	 */
	async getRemoteProgress() {
		if (!this.isAuthenticated) return null;

		try {
			// Get progress data from Vercel KV
			const progressData = await kv.get(`progress:${this.userId}`);
			return progressData || {};
		} catch (error) {
			console.error('Error getting remote progress:', error);
			return null;
		}
	}

	/**
	 * Save progress data to Vercel KV
	 */
	async saveRemoteProgress(progressData) {
		if (!this.isAuthenticated) return false;

		try {
			// Save progress data to Vercel KV with an expiration of 1 year
			await kv.set(`progress:${this.userId}`, progressData, { ex: 31536000 });
			return true;
		} catch (error) {
			console.error('Error saving remote progress:', error);
			return false;
		}
	}

	/**
	 * Sync local progress with remote progress
	 */
	async syncProgress() {
		if (!this.isAuthenticated || this.syncInProgress) return false;

		this.syncInProgress = true;

		try {
			// Get local and remote progress
			const localProgress = this.getLocalProgress();
			const remoteProgress = await this.getRemoteProgress();

			if (!remoteProgress) {
				// If no remote progress, save local progress to remote
				await this.saveRemoteProgress(localProgress);
				this.syncInProgress = false;
				return true;
			}

			// Merge local and remote progress (prioritize newer timestamps)
			const mergedProgress = this.mergeProgress(localProgress, remoteProgress);

			// Save merged progress to both local and remote
			this.saveLocalProgress(mergedProgress);
			await this.saveRemoteProgress(mergedProgress);

			this.syncInProgress = false;
			return true;
		} catch (error) {
			console.error('Error syncing progress:', error);
			this.syncInProgress = false;
			return false;
		}
	}

	/**
	 * Merge local and remote progress data
	 */
	mergeProgress(localProgress, remoteProgress) {
		const mergedProgress = { ...remoteProgress };

		// Iterate through local progress
		Object.keys(localProgress).forEach((tutorialPath) => {
			const localTutorial = localProgress[tutorialPath];
			const remoteTutorial = remoteProgress[tutorialPath];

			// If tutorial doesn't exist in remote or local is newer, use local
			if (
				!remoteTutorial ||
				localTutorial.lastUpdated > remoteTutorial.lastUpdated
			) {
				mergedProgress[tutorialPath] = localTutorial;
			}
		});

		return mergedProgress;
	}

	/**
	 * Track tutorial progress
	 */
	async trackTutorial(tutorialPath, progress = {}) {
		if (!tutorialPath) return false;

		// Get current progress
		const progressData = this.getLocalProgress();

		// Update progress for this tutorial
		progressData[tutorialPath] = {
			...progressData[tutorialPath],
			...progress,
			lastUpdated: Date.now(),
			visited: true,
		};

		// Save to local storage
		this.saveLocalProgress(progressData);

		// If authenticated, sync with remote
		if (this.isAuthenticated) {
			this.syncProgress();
		}

		return true;
	}

	/**
	 * Track tutorial completion
	 */
	async trackCompletion(tutorialPath) {
		if (!tutorialPath) return false;

		// Get current progress
		const progressData = this.getLocalProgress();

		// Update completion status
		progressData[tutorialPath] = {
			...progressData[tutorialPath],
			completed: true,
			completedAt: Date.now(),
			lastUpdated: Date.now(),
		};

		// Save to local storage
		this.saveLocalProgress(progressData);

		// If authenticated, sync with remote
		if (this.isAuthenticated) {
			this.syncProgress();
		}

		return true;
	}

	/**
	 * Track quiz completion
	 */
	async trackQuizCompletion(tutorialPath, score, totalQuestions) {
		if (!tutorialPath) return false;

		// Get current progress
		const progressData = this.getLocalProgress();

		// Update quiz completion
		progressData[tutorialPath] = {
			...progressData[tutorialPath],
			quizCompleted: true,
			quizCompletedAt: Date.now(),
			quizScore: score,
			quizTotalQuestions: totalQuestions,
			lastUpdated: Date.now(),
		};

		// Save to local storage
		this.saveLocalProgress(progressData);

		// If authenticated, sync with remote
		if (this.isAuthenticated) {
			this.syncProgress();
		}

		return true;
	}

	/**
	 * Get progress for a specific tutorial
	 */
	async getTutorialProgress(tutorialPath) {
		if (!tutorialPath) return null;

		// Get current progress
		const progressData = this.getLocalProgress();

		// Return progress for this tutorial
		return progressData[tutorialPath] || null;
	}

	/**
	 * Get all tutorial progress
	 */
	async getAllProgress() {
		// If authenticated, sync first to get latest data
		if (this.isAuthenticated) {
			await this.syncProgress();
		}

		// Return all progress data
		return this.getLocalProgress();
	}
}

// Create and export a singleton instance
const externalProgressService = new ExternalProgressService();
export default externalProgressService;
