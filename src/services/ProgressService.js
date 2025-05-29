/**
 * ProgressService.js
 * Service for tracking and managing student progress through tutorials
 */

import { auth, db } from './firebase';
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

// Constants
const PROGRESS_STORAGE_KEY = 'tutorial_progress';

// Default progress structure
const defaultProgress = {
	completedTutorials: [],
	tutorialProgress: {},
	completedQuizzes: [],
	quizResults: {},
};

// Get current user ID
function getCurrentUserId() {
	return auth.currentUser ? auth.currentUser.uid : null;
}

// Load progress from Firestore or localStorage
async function loadProgress() {
	const userId = getCurrentUserId();
	if (userId) {
		// Authenticated: load from Firestore
		try {
			const docRef = doc(db, 'progress', userId);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				return docSnap.data();
			}
			return defaultProgress;
		} catch (error) {
			console.error('Error loading progress from Firestore:', error);
			return defaultProgress;
		}
	} else {
		// Guest: load from localStorage
		try {
			const savedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY);
			if (savedProgress) {
				return JSON.parse(savedProgress);
			}
			return defaultProgress;
		} catch (error) {
			console.error('Error loading progress from localStorage:', error);
			return defaultProgress;
		}
	}
}

// Save progress to Firestore or localStorage
async function saveProgress(progress) {
	const userId = getCurrentUserId();
	if (userId) {
		// Authenticated: save to Firestore
		try {
			const docRef = doc(db, 'progress', userId);
			await setDoc(docRef, progress, { merge: true });
			return true;
		} catch (error) {
			console.error('Error saving progress to Firestore:', error);
			return false;
		}
	} else {
		// Guest: save to localStorage
		try {
			localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
			return true;
		} catch (error) {
			console.error('Error saving progress to localStorage:', error);
			return false;
		}
	}
}

// Check if progress tracking is enabled
function isProgressTrackingEnabled() {
	if (typeof window === 'undefined') return false;
	// You may want to add logic for cookie consent, etc.
	return true;
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

// Merge two progress objects, preferring the most recently updated fields
function mergeProgress(local, remote) {
	if (!local) return remote || defaultProgress;
	if (!remote) return local || defaultProgress;
	const merged = { ...remote };
	// Merge completedTutorials and completedQuizzes as union
	merged.completedTutorials = Array.from(new Set([...(local.completedTutorials || []), ...(remote.completedTutorials || [])]));
	merged.completedQuizzes = Array.from(new Set([...(local.completedQuizzes || []), ...(remote.completedQuizzes || [])]));
	// Merge tutorialProgress by most recent lastUpdated
	merged.tutorialProgress = { ...remote.tutorialProgress };
	for (const key in local.tutorialProgress) {
		if (!merged.tutorialProgress[key] || new Date(local.tutorialProgress[key].lastUpdated || 0) > new Date((merged.tutorialProgress[key]||{}).lastUpdated || 0)) {
			merged.tutorialProgress[key] = local.tutorialProgress[key];
		}
	}
	// Merge quizResults by most recent completedAt
	merged.quizResults = { ...remote.quizResults };
	for (const key in local.quizResults) {
		if (!merged.quizResults[key] || new Date(local.quizResults[key].completedAt || 0) > new Date((merged.quizResults[key]||{}).completedAt || 0)) {
			merged.quizResults[key] = local.quizResults[key];
		}
	}
	return merged;
}

// On login: merge/sync local progress to Firestore for the user
export async function syncProgressOnLogin() {
	const userId = getCurrentUserId();
	if (!userId) return;
	const local = (() => {
		try {
			const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
			return raw ? JSON.parse(raw) : null;
		} catch { return null; }
	})();
	let remote = defaultProgress;
	try {
		const docRef = doc(db, 'progress', userId);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			const data = docSnap.data();
			remote = {
				completedTutorials: data.completedTutorials || [],
				tutorialProgress: data.tutorialProgress || {},
				completedQuizzes: data.completedQuizzes || [],
				quizResults: data.quizResults || {},
			};
		}
	} catch {}
	const merged = mergeProgress(local, remote);
	try {
		const docRef = doc(db, 'progress', userId);
		await setDoc(docRef, merged, { merge: true });
		localStorage.removeItem(PROGRESS_STORAGE_KEY);
	} catch (e) { console.error('Error syncing progress on login:', e); }
}

// On logout: switch back to localStorage
export async function switchToLocalOnLogout() {
	const userId = getCurrentUserId();
	if (!userId) return;
	try {
		const docRef = doc(db, 'progress', userId);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(docSnap.data()));
		}
	} catch (e) { console.error('Error switching to local progress on logout:', e); }
}

// Export all functions
export default {
	loadProgress,
	saveProgress,
	isProgressTrackingEnabled,
	getCurrentUserId,
};
