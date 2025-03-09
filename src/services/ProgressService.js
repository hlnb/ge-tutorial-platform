/**
 * ProgressService.js
 * Service for tracking and managing student progress through tutorials
 */

// Progress Service for tracking tutorial progress
const PROGRESS_KEY = 'tutorial_progress';
const COOKIE_ENABLED_KEY = 'progress_tracking_enabled';

// Initialize with default values
let progressData = {
	completedTutorials: [],
	tutorialProgress: {},
	completedQuizzes: [],
	quizResults: {},
};

// Load progress from localStorage if available
function loadProgress() {
	if (typeof window === 'undefined') return; // Skip on server-side

	try {
		const savedProgress = localStorage.getItem(PROGRESS_KEY);
		if (savedProgress) {
			progressData = JSON.parse(savedProgress);
		}
	} catch (error) {
		console.error('Error loading progress:', error);
	}
}

// Save progress to localStorage
function saveProgress() {
	if (typeof window === 'undefined') return; // Skip on server-side

	try {
		localStorage.setItem(PROGRESS_KEY, JSON.stringify(progressData));
	} catch (error) {
		console.error('Error saving progress:', error);
	}
}

// Check if progress tracking is enabled
function isProgressTrackingEnabled() {
	if (typeof window === 'undefined') return false; // Skip on server-side

	try {
		return localStorage.getItem(COOKIE_ENABLED_KEY) === 'true';
	} catch (error) {
		console.error('Error checking progress tracking status:', error);
		return false;
	}
}

// Enable progress tracking
function enableProgressTracking() {
	if (typeof window === 'undefined') return; // Skip on server-side

	try {
		localStorage.setItem(COOKIE_ENABLED_KEY, 'true');
		loadProgress(); // Reload progress after enabling
	} catch (error) {
		console.error('Error enabling progress tracking:', error);
	}
}

// Disable progress tracking
function disableProgressTracking() {
	if (typeof window === 'undefined') return; // Skip on server-side

	try {
		localStorage.setItem(COOKIE_ENABLED_KEY, 'false');
	} catch (error) {
		console.error('Error disabling progress tracking:', error);
	}
}

// Mark a tutorial as completed
function markTutorialCompleted(tutorialPath) {
	if (!isProgressTrackingEnabled() || !tutorialPath) return;

	// Initialize if needed
	if (!progressData.completedTutorials) {
		progressData.completedTutorials = [];
	}

	// Add to completed tutorials if not already there
	if (!progressData.completedTutorials.includes(tutorialPath)) {
		progressData.completedTutorials.push(tutorialPath);
		saveProgress();
	}
}

// Mark a tutorial as incomplete
function markTutorialIncomplete(tutorialPath) {
	if (!isProgressTrackingEnabled() || !tutorialPath) return;

	// Initialize if needed
	if (!progressData.completedTutorials) {
		progressData.completedTutorials = [];
		return;
	}

	// Remove from completed tutorials
	const index = progressData.completedTutorials.indexOf(tutorialPath);
	if (index !== -1) {
		progressData.completedTutorials.splice(index, 1);
		saveProgress();
	}
}

// Check if a tutorial is completed
function isTutorialCompleted(tutorialPath) {
	if (!isProgressTrackingEnabled() || !tutorialPath) return false;

	return (
		progressData.completedTutorials &&
		progressData.completedTutorials.includes(tutorialPath)
	);
}

// Track scroll progress for a tutorial
function trackScrollProgress(tutorialPath, scrollPosition, totalHeight) {
	if (!isProgressTrackingEnabled() || !tutorialPath) return;

	// Skip if already completed
	if (isTutorialCompleted(tutorialPath)) return;

	// Calculate progress percentage (0 to 1)
	const progress = Math.min(scrollPosition / totalHeight, 1);

	// Initialize if needed
	if (!progressData.tutorialProgress) {
		progressData.tutorialProgress = {};
	}

	// Only update if new progress is higher
	if (
		!progressData.tutorialProgress[tutorialPath] ||
		progress > progressData.tutorialProgress[tutorialPath]
	) {
		progressData.tutorialProgress[tutorialPath] = progress;
		saveProgress();
	}
}

// Save quiz result
function saveQuizResult(tutorialPath, score, total) {
	if (!isProgressTrackingEnabled() || !tutorialPath) return;

	// Initialize if needed
	if (!progressData.completedQuizzes) {
		progressData.completedQuizzes = [];
	}

	if (!progressData.quizResults) {
		progressData.quizResults = {};
	}

	// Add to completed quizzes if not already there
	if (!progressData.completedQuizzes.includes(tutorialPath)) {
		progressData.completedQuizzes.push(tutorialPath);
	}

	// Save the quiz result with timestamp
	progressData.quizResults[tutorialPath] = {
		score,
		total,
		completedAt: new Date().toISOString(),
	};

	saveProgress();
}

// Get all progress data
function getProgress() {
	if (!isProgressTrackingEnabled()) return null;
	return progressData;
}

// Reset all progress
function resetProgress() {
	progressData = {
		completedTutorials: [],
		tutorialProgress: {},
		completedQuizzes: [],
		quizResults: {},
	};
	saveProgress();
}

// Initialize on load
loadProgress();

// Export the service
export default {
	isProgressTrackingEnabled,
	enableProgressTracking,
	disableProgressTracking,
	markTutorialCompleted,
	markTutorialIncomplete,
	isTutorialCompleted,
	trackScrollProgress,
	saveQuizResult,
	getProgress,
	resetProgress,
};
