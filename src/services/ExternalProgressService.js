/**
 * External Progress Service
 * Handles storing and retrieving student progress data using Redis
 */

// Import the shared Redis client
import { getRedisClient, isRedisConnected } from './redisClient';

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
		// Check if user is authenticated
		this.userId = this.getUserId();
		this.isAuthenticated = !!this.userId;

		// If authenticated, sync local progress with server
		if (this.isAuthenticated) {
			await this.syncProgress();
		}

		return this.isAuthenticated;
	}

	/**
	 * Get the current user ID
	 */
	getUserId() {
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
	 * Get progress data from Redis
	 */
	async getRemoteProgress() {
		if (!this.isAuthenticated || !isRedisConnected()) return null;

		try {
			// Get Redis client
			const redis = await getRedisClient();
			if (!redis) return null;

			// Get progress data from Redis
			const progressData = await redis.get(`progress:${this.userId}`);
			return progressData ? JSON.parse(progressData) : {};
		} catch (error) {
			console.error('Error getting remote progress:', error);
			return null;
		}
	}

	/**
	 * Save progress data to Redis
	 */
	async saveRemoteProgress(progressData) {
		if (!this.isAuthenticated || !isRedisConnected()) return false;

		try {
			// Get Redis client
			const redis = await getRedisClient();
			if (!redis) return false;

			// Save progress data to Redis with an expiration of 1 year (in seconds)
			await redis.set(`progress:${this.userId}`, JSON.stringify(progressData), {
				EX: 31536000,
			});
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
		if (!this.isAuthenticated || this.syncInProgress || !isRedisConnected())
			return false;

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
		if (this.isAuthenticated && isRedisConnected()) {
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
		if (this.isAuthenticated && isRedisConnected()) {
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
		if (this.isAuthenticated && isRedisConnected()) {
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
		if (this.isAuthenticated && isRedisConnected()) {
			await this.syncProgress();
		}

		// Return all progress data
		return this.getLocalProgress();
	}
}

// Create and export a singleton instance
const externalProgressService = new ExternalProgressService();
export default externalProgressService;
