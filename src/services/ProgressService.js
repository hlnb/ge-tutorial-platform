/**
 * ProgressService.js
 * Service for tracking and managing student progress through tutorials
 */

// Constants
const COOKIE_ENABLED_KEY = 'progress_tracking_enabled';
const API_BASE_URL = '/api/progress';

// Default progress structure
const defaultProgress = {
	completedTutorials: [],
	tutorialProgress: {},
	completedQuizzes: [],
	quizResults: {},
};

// Load progress from API
async function loadProgress(userId = 'default') {
	try {
		const response = await fetch(`${API_BASE_URL}/${userId}`);
		if (!response.ok) {
			throw new Error('Failed to load progress');
		}
		const data = await response.json();
		return data || defaultProgress;
	} catch (error) {
		console.error('Error loading progress:', error);
		return defaultProgress;
	}
}

// Save progress to API
async function saveProgress(progress, userId = 'default') {
	try {
		const response = await fetch(`${API_BASE_URL}/${userId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(progress),
		});
		if (!response.ok) {
			throw new Error('Failed to save progress');
		}
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
		return localStorage.getItem(COOKIE_ENABLED_KEY) === 'true';
	} catch (error) {
		console.error('Error checking progress tracking status:', error);
		return false;
	}
}

// Enable progress tracking
function enableProgressTracking() {
	if (typeof window === 'undefined') return;

	try {
		localStorage.setItem(COOKIE_ENABLED_KEY, 'true');
	} catch (error) {
		console.error('Error enabling progress tracking:', error);
	}
}

// Disable progress tracking
function disableProgressTracking() {
	if (typeof window === 'undefined') return;

	try {
		localStorage.setItem(COOKIE_ENABLED_KEY, 'false');
	} catch (error) {
		console.error('Error disabling progress tracking:', error);
	}
}

// Get current progress
async function getProgress(userId = 'default') {
	if (!isProgressTrackingEnabled()) return null;
	return await loadProgress(userId);
}

// Mark tutorial as completed
async function markTutorialCompleted(tutorialPath, userId = 'default') {
	if (!isProgressTrackingEnabled()) return false;

	try {
		const progress = await loadProgress(userId);
		if (!progress.completedTutorials.includes(tutorialPath)) {
			progress.completedTutorials.push(tutorialPath);
			await saveProgress(progress, userId);
		}
		return true;
	} catch (error) {
		console.error('Error marking tutorial as completed:', error);
		return false;
	}
}

// Update tutorial progress
async function updateTutorialProgress(tutorialPath, progressData, userId = 'default') {
	if (!isProgressTrackingEnabled()) return false;

	try {
		const progress = await loadProgress(userId);
		progress.tutorialProgress[tutorialPath] = {
			...progressData,
			lastUpdated: new Date().toISOString()
		};
		await saveProgress(progress, userId);
		return true;
	} catch (error) {
		console.error('Error updating tutorial progress:', error);
		return false;
	}
}

// Save quiz result
async function saveQuizResult(quizId, result, userId = 'default') {
	if (!isProgressTrackingEnabled()) return false;

	try {
		const progress = await loadProgress(userId);
		progress.quizResults[quizId] = {
			...result,
			completedAt: new Date().toISOString()
		};
		if (result.passed && !progress.completedQuizzes.includes(quizId)) {
			progress.completedQuizzes.push(quizId);
		}
		await saveProgress(progress, userId);
		return true;
	} catch (error) {
		console.error('Error saving quiz result:', error);
		return false;
	}
}

// Clear all progress
async function clearAllProgress(userId = 'default') {
	try {
		const response = await fetch(`${API_BASE_URL}/${userId}`, {
			method: 'DELETE',
		});
		if (!response.ok) {
			throw new Error('Failed to clear progress');
		}
		return true;
	} catch (error) {
		console.error('Error clearing progress:', error);
		return false;
	}
}

// Get progress summary
async function getProgressSummary(userId = 'default') {
	try {
		const progress = await loadProgress(userId);
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
async function trackScrollProgress(tutorialPath, scrollPosition, totalHeight, userId = 'default') {
	if (!isProgressTrackingEnabled() || !tutorialPath) return;

	try {
		// Skip if already completed
		const progress = await loadProgress(userId);
		if (progress.completedTutorials.includes(tutorialPath)) return;

		// Calculate progress percentage (0 to 1)
		const progressPercentage = Math.min(scrollPosition / totalHeight, 1);

		// Update tutorial progress
		await updateTutorialProgress(tutorialPath, {
			percentage: Math.round(progressPercentage * 100),
			lastSection: 'scrolled',
			scrollPosition: scrollPosition,
			totalHeight: totalHeight
		}, userId);

		return true;
	} catch (error) {
		console.error('Error tracking scroll progress:', error);
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
	trackScrollProgress
};
