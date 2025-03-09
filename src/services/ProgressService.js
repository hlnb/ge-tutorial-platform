/**
 * ProgressService.js
 * Service for tracking and managing student progress through tutorials
 */

// Check if progress tracking is enabled
const isProgressTrackingEnabled = () => {
	try {
		const cookieSettings = JSON.parse(localStorage.getItem('cookieSettings'));
		return cookieSettings && cookieSettings.progress === true;
	} catch (e) {
		console.error('Error checking progress tracking settings', e);
		return false;
	}
};

// Get student progress data
const getProgress = () => {
	if (!isProgressTrackingEnabled()) return null;

	try {
		const progress = localStorage.getItem('studentProgress');
		return progress
			? JSON.parse(progress)
			: {
					completedTutorials: [],
					inProgressTutorials: {},
					quizResults: {},
					lastVisited: null,
			  };
	} catch (e) {
		console.error('Error getting progress data', e);
		return null;
	}
};

// Save student progress data
const saveProgress = (progressData) => {
	if (!isProgressTrackingEnabled()) return false;

	try {
		localStorage.setItem('studentProgress', JSON.stringify(progressData));
		return true;
	} catch (e) {
		console.error('Error saving progress data', e);
		return false;
	}
};

// Mark a tutorial as completed
const markTutorialCompleted = (tutorialPath) => {
	if (!isProgressTrackingEnabled()) return false;

	try {
		const progress = getProgress() || {
			completedTutorials: [],
			inProgressTutorials: {},
			quizResults: {},
			lastVisited: null,
		};

		// Add to completed tutorials if not already there
		if (!progress.completedTutorials.includes(tutorialPath)) {
			progress.completedTutorials.push(tutorialPath);
		}

		// Remove from in-progress tutorials if present
		if (progress.inProgressTutorials[tutorialPath]) {
			delete progress.inProgressTutorials[tutorialPath];
		}

		// Update last visited
		progress.lastVisited = tutorialPath;

		return saveProgress(progress);
	} catch (e) {
		console.error('Error marking tutorial as completed', e);
		return false;
	}
};

// Update tutorial progress (for partially completed tutorials)
const updateTutorialProgress = (
	tutorialPath,
	progressPercentage,
	lastSection,
) => {
	if (!isProgressTrackingEnabled()) return false;

	try {
		const progress = getProgress() || {
			completedTutorials: [],
			inProgressTutorials: {},
			quizResults: {},
			lastVisited: null,
		};

		// Update in-progress tutorials
		progress.inProgressTutorials[tutorialPath] = {
			percentage: progressPercentage,
			lastSection: lastSection,
			lastUpdated: new Date().toISOString(),
		};

		// Update last visited
		progress.lastVisited = tutorialPath;

		return saveProgress(progress);
	} catch (e) {
		console.error('Error updating tutorial progress', e);
		return false;
	}
};

// Track tutorial progress based on scroll position
const trackScrollProgress = (tutorialPath, scrollPosition, totalHeight) => {
	if (!isProgressTrackingEnabled()) return false;

	try {
		// Calculate progress percentage based on scroll position
		// We consider a tutorial "in progress" once the user has scrolled at least 10%
		// and "nearly complete" when they've scrolled at least 90%
		const scrollPercentage = Math.min(
			Math.round((scrollPosition / totalHeight) * 100),
			100,
		);

		// Only update if scroll percentage is at least 10%
		if (scrollPercentage >= 10) {
			// Get current section from DOM (optional)
			let currentSection = 'Introduction';
			const headings = document.querySelectorAll('h2, h3');

			if (headings.length > 0) {
				// Find the last heading that is above the current scroll position
				for (let i = headings.length - 1; i >= 0; i--) {
					const heading = headings[i];
					if (heading.getBoundingClientRect().top <= 100) {
						currentSection = heading.textContent.trim();
						break;
					}
				}
			}

			// If user has scrolled to at least 90%, we can consider it nearly complete
			// but we'll let them manually mark it as fully complete
			updateTutorialProgress(tutorialPath, scrollPercentage, currentSection);

			return true;
		}

		return false;
	} catch (e) {
		console.error('Error tracking scroll progress', e);
		return false;
	}
};

// Save quiz results
const saveQuizResult = (quizId, score, maxScore, answers) => {
	if (!isProgressTrackingEnabled()) return false;

	try {
		const progress = getProgress() || {
			completedTutorials: [],
			inProgressTutorials: {},
			quizResults: {},
			lastVisited: null,
		};

		// Save quiz results
		progress.quizResults[quizId] = {
			score,
			maxScore,
			percentage: (score / maxScore) * 100,
			answers,
			completedAt: new Date().toISOString(),
		};

		return saveProgress(progress);
	} catch (e) {
		console.error('Error saving quiz result', e);
		return false;
	}
};

// Get recommended next tutorials based on progress
const getRecommendedTutorials = () => {
	if (!isProgressTrackingEnabled()) return [];

	try {
		const progress = getProgress();
		if (!progress) return [];

		// This is a placeholder - in a real implementation, you would have
		// logic to determine which tutorials to recommend based on the
		// student's progress, perhaps using a predefined learning path

		// For now, we'll just return a simple recommendation
		return [
			{
				path: '/tutorials/html-basics',
				title: 'HTML Basics',
				description: 'Learn the fundamentals of HTML',
			},
			{
				path: '/tutorials/css-basics',
				title: 'CSS Basics',
				description: 'Style your web pages with CSS',
			},
		];
	} catch (e) {
		console.error('Error getting recommended tutorials', e);
		return [];
	}
};

// Get progress summary
const getProgressSummary = () => {
	if (!isProgressTrackingEnabled()) return null;

	try {
		const progress = getProgress();
		if (!progress) return null;

		return {
			completedCount: progress.completedTutorials.length,
			inProgressCount: Object.keys(progress.inProgressTutorials).length,
			quizCount: Object.keys(progress.quizResults).length,
			lastVisited: progress.lastVisited,
		};
	} catch (e) {
		console.error('Error getting progress summary', e);
		return null;
	}
};

// Clear all progress data
const clearAllProgress = () => {
	try {
		localStorage.removeItem('studentProgress');
		return true;
	} catch (e) {
		console.error('Error clearing progress data', e);
		return false;
	}
};

export default {
	isProgressTrackingEnabled,
	getProgress,
	saveProgress,
	markTutorialCompleted,
	updateTutorialProgress,
	trackScrollProgress,
	saveQuizResult,
	getRecommendedTutorials,
	getProgressSummary,
	clearAllProgress,
};
