/**
 * ProgressService.js
 * Service for tracking and managing student progress through tutorials
 */

class ProgressService {
	constructor() {
		this.STORAGE_KEY = 'tutorial_progress';
		this.COOKIE_SETTINGS_KEY = 'cookieSettings';
	}

	// Check if progress tracking is enabled
	isProgressTrackingEnabled() {
		try {
			const cookieSettings = JSON.parse(
				localStorage.getItem(this.COOKIE_SETTINGS_KEY),
			);
			return cookieSettings && cookieSettings.progress === true;
		} catch (e) {
			console.error('Error checking progress tracking status', e);
			return false;
		}
	}

	// Get the current progress
	getProgress() {
		if (!this.isProgressTrackingEnabled()) return null;

		try {
			const progress = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {
				completedTutorials: [],
				completedQuizzes: [],
				tutorialProgress: {},
				quizScores: {},
			};
			return progress;
		} catch (e) {
			console.error('Error getting progress', e);
			return null;
		}
	}

	// Save progress
	saveProgress(progress) {
		if (!this.isProgressTrackingEnabled()) return;

		try {
			localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
		} catch (e) {
			console.error('Error saving progress', e);
		}
	}

	// Mark a tutorial as completed
	markTutorialCompleted(tutorialPath) {
		if (!this.isProgressTrackingEnabled()) return;

		const progress = this.getProgress() || {
			completedTutorials: [],
			completedQuizzes: [],
			tutorialProgress: {},
			quizScores: {},
		};

		if (!progress.completedTutorials.includes(tutorialPath)) {
			progress.completedTutorials.push(tutorialPath);
			this.saveProgress(progress);
		}
	}

	// Check if a tutorial is completed
	isTutorialCompleted(tutorialPath) {
		const progress = this.getProgress();
		return (
			progress &&
			progress.completedTutorials &&
			progress.completedTutorials.includes(tutorialPath)
		);
	}

	// Track scroll progress for a tutorial
	trackScrollProgress(tutorialPath, scrollPosition, totalHeight) {
		if (!this.isProgressTrackingEnabled()) return;

		const progress = this.getProgress() || {
			completedTutorials: [],
			completedQuizzes: [],
			tutorialProgress: {},
			quizScores: {},
		};

		// Calculate percentage (0-100)
		const percentage = Math.min(
			Math.round((scrollPosition / totalHeight) * 100),
			100,
		);

		// Only update if the new percentage is higher than the stored one
		if (
			!progress.tutorialProgress[tutorialPath] ||
			percentage > progress.tutorialProgress[tutorialPath]
		) {
			progress.tutorialProgress[tutorialPath] = percentage;
			this.saveProgress(progress);
		}
	}

	// Get scroll progress for a tutorial
	getScrollProgress(tutorialPath) {
		const progress = this.getProgress();
		return progress &&
			progress.tutorialProgress &&
			progress.tutorialProgress[tutorialPath]
			? progress.tutorialProgress[tutorialPath]
			: 0;
	}

	// Mark a quiz as completed and save the score
	saveQuizResult(tutorialPath, score, totalQuestions) {
		if (!this.isProgressTrackingEnabled()) return;

		const progress = this.getProgress() || {
			completedTutorials: [],
			completedQuizzes: [],
			tutorialProgress: {},
			quizScores: {},
		};

		// Add to completed quizzes if not already there
		if (!progress.completedQuizzes.includes(tutorialPath)) {
			progress.completedQuizzes.push(tutorialPath);
		}

		// Save the score
		progress.quizScores[tutorialPath] = {
			score: score,
			total: totalQuestions,
			percentage: Math.round((score / totalQuestions) * 100),
			completedAt: new Date().toISOString(),
		};

		this.saveProgress(progress);
	}

	// Check if a quiz is completed
	isQuizCompleted(tutorialPath) {
		const progress = this.getProgress();
		return (
			progress &&
			progress.completedQuizzes &&
			progress.completedQuizzes.includes(tutorialPath)
		);
	}

	// Get quiz score
	getQuizScore(tutorialPath) {
		const progress = this.getProgress();
		return progress && progress.quizScores && progress.quizScores[tutorialPath]
			? progress.quizScores[tutorialPath]
			: null;
	}
}

export default new ProgressService();
