/**
 * Progress Tracking Utilities
 * Helper functions for working with the progress service
 */

import progressService from '@/services/ProgressService';

/**
 * Initialize progress tracking for a tutorial page
 * @returns {Object} - Object with reactive properties and methods for progress tracking
 */
export function useProgressTracking() {
	// Check if progress tracking is enabled
	const progressEnabled = progressService.isProgressTrackingEnabled();

	// Track the current tutorial
	const trackTutorial = (path) => {
		if (progressEnabled) {
			progressService.trackProgress(path);
		}
	};

	// Mark the current tutorial as completed
	const markCompleted = (path) => {
		if (progressEnabled) {
			progressService.markTutorialCompleted(path);
		}
	};

	// Mark the current tutorial as incomplete
	const markIncomplete = (path) => {
		if (progressEnabled) {
			progressService.markTutorialIncomplete(path);
		}
	};

	// Check if the current tutorial is completed
	const isCompleted = (path) => {
		return progressEnabled ? progressService.isTutorialCompleted(path) : false;
	};

	// Save quiz result
	const saveQuizResult = (path, score, total) => {
		if (progressEnabled) {
			progressService.saveQuizResult(path, score, total);
		}
	};

	// Enable progress tracking
	const enableProgressTracking = () => {
		progressService.enableProgressTracking();
	};

	return {
		progressEnabled,
		trackTutorial,
		markCompleted,
		markIncomplete,
		isCompleted,
		saveQuizResult,
		enableProgressTracking,
	};
}
