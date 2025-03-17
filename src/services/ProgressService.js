/**
 * ProgressService.js
 * Service for tracking and managing student progress through tutorials
 */

// Constants
const PROGRESS_STORAGE_KEY = 'tutorial_progress';

// Default progress structure
const defaultProgress = {
	completedTutorials: [],
	tutorialProgress: {},
	completedQuizzes: [],
	quizResults: {},
};

// Load progress from localStorage
async function loadProgress() {
	try {
		const savedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
		if (savedProgress) {
			return JSON.parse(savedProgress);
		}
		return defaultProgress;
	} catch (error) {
		console.error('Error loading progress:', error);
		return defaultProgress;
	}
}

// Save progress to localStorage
async function saveProgress(progress) {
	try {
		localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
		return true;
	} catch (error) {
		console.error('Error saving progress:', error);
		return false;
	}
}

// Check if progress tracking is enabled
function isProgressTrackingEnabled() {
	if (typeof window === 'undefined') return false;

	try {
		const consent = localStorage.getItem('cookieConsent');
		const settingsStr = localStorage.getItem('cookieSettings');
		
		if (consent !== 'true') return false;
		
		try {
			const settings = JSON.parse(settingsStr);
			return settings && settings.progress === true;
		} catch (error) {
			console.error('Error parsing cookie settings:', error);
			return false;
		}
	} catch (error) {
		console.error('Error checking progress tracking status:', error);
		return false;
	}
}

// Enable progress tracking
function enableProgressTracking() {
	if (typeof window === 'undefined') return;

	try {
		localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({
			completedTutorials: [],
			tutorialProgress: {},
			completedQuizzes: [],
			quizResults: {},
		}));
	} catch (error) {
		console.error('Error enabling progress tracking:', error);
	}
}

// Disable progress tracking
function disableProgressTracking() {
	if (typeof window === 'undefined') return;

	try {
		localStorage.removeItem(PROGRESS_STORAGE_KEY);
	} catch (error) {
		console.error('Error disabling progress tracking:', error);
	}
}

// Get current progress
async function getProgress() {
	if (!isProgressTrackingEnabled()) return null;
	return await loadProgress();
}

// Mark tutorial as completed
async function markTutorialCompleted(tutorialPath) {
	if (!isProgressTrackingEnabled()) return false;

	try {
		const progress = await loadProgress();
		if (!progress.completedTutorials.includes(tutorialPath)) {
			progress.completedTutorials.push(tutorialPath);
			await saveProgress(progress);
		}
		return true;
	} catch (error) {
		console.error('Error marking tutorial as completed:', error);
		return false;
	}
}

// Update tutorial progress
async function updateTutorialProgress(tutorialPath, progressData) {
	if (!isProgressTrackingEnabled()) return false;

	try {
		const progress = await loadProgress();
		progress.tutorialProgress[tutorialPath] = {
			...progressData,
			lastUpdated: new Date().toISOString()
		};
		await saveProgress(progress);
		return true;
	} catch (error) {
		console.error('Error updating tutorial progress:', error);
		return false;
	}
}

// Save quiz result
async function saveQuizResult(quizId, result) {
	if (!isProgressTrackingEnabled()) return false;

	try {
		const progress = await loadProgress();
		progress.quizResults[quizId] = {
			...result,
			completedAt: new Date().toISOString()
		};
		if (result.passed && !progress.completedQuizzes.includes(quizId)) {
			progress.completedQuizzes.push(quizId);
		}
		await saveProgress(progress);
		return true;
	} catch (error) {
		console.error('Error saving quiz result:', error);
		return false;
	}
}

// Clear all progress
async function clearAllProgress() {
	try {
		localStorage.removeItem(PROGRESS_STORAGE_KEY);
		return true;
	} catch (error) {
		console.error('Error clearing progress:', error);
		return false;
	}
}

// Get progress summary
async function getProgressSummary() {
	try {
		const progress = await loadProgress();
		return {
			completedCount: progress.completedTutorials.length,
			inProgressCount: Object.keys(progress.tutorialProgress).length,
			quizCount: progress.completedQuizzes.length
		};
	} catch (error) {
		console.error('Error getting progress summary:', error);
		return {
			completedCount: 0,
			inProgressCount: 0,
			quizCount: 0
		};
	}
}

// Track scroll progress for a tutorial
async function trackScrollProgress(tutorialPath, scrollPosition, totalHeight) {
	if (!isProgressTrackingEnabled() || !tutorialPath) return;

	try {
		// Skip if already completed
		const progress = await loadProgress();
		if (progress.completedTutorials.includes(tutorialPath)) return;

		// Calculate progress percentage (0 to 1)
		const progressPercentage = Math.min(scrollPosition / totalHeight, 1);

		// Update tutorial progress
		await updateTutorialProgress(tutorialPath, {
			percentage: Math.round(progressPercentage * 100),
			lastSection: 'scrolled',
			scrollPosition: scrollPosition,
			totalHeight: totalHeight
		});

		return true;
	} catch (error) {
		console.error('Error tracking scroll progress:', error);
		return false;
	}
}

// Track tutorial progress
async function trackProgress(tutorialPath) {
	if (!isProgressTrackingEnabled() || !tutorialPath) return false;

	try {
		const progress = await loadProgress();
		
		// Update tutorial progress
		await updateTutorialProgress(tutorialPath, {
			visited: true,
			lastVisited: new Date().toISOString()
		});
		
		return true;
	} catch (error) {
		console.error('Error tracking tutorial progress:', error);
		return false;
	}
}

// Export all functions
export default {
	isProgressTrackingEnabled,
	enableProgressTracking,
	disableProgressTracking,
	getProgress,
	markTutorialCompleted,
	updateTutorialProgress,
	saveQuizResult,
	clearAllProgress,
	getProgressSummary,
	trackScrollProgress,
	trackProgress
};
