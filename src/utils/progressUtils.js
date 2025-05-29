// NOTE: useProgressTracking is obsolete. Use the useProgress composable (src/composables/useProgress.js) or direct utility functions below.

import ProgressService from '@/services/ProgressService';

// Get the user's progress (from Firebase if logged in, else localStorage)
export async function getUserProgress() {
    return await ProgressService.getProgress();
}

// Save the user's progress
export async function saveUserProgress(progress) {
    return await ProgressService.saveProgress(progress);
}

// Mark a tutorial as completed
export async function completeTutorial(tutorialId) {
    const progress = await ProgressService.getProgress();
    if (!progress.completedTutorials.includes(tutorialId)) {
        progress.completedTutorials.push(tutorialId);
        await ProgressService.saveProgress(progress);
    }
}

// Mark a quiz as completed and store the result
export async function completeQuiz(quizId, result) {
    const progress = await ProgressService.getProgress();
    if (!progress.completedQuizzes.includes(quizId)) {
        progress.completedQuizzes.push(quizId);
        progress.quizResults[quizId] = result;
        await ProgressService.saveProgress(progress);
    }
}

// Clear all user progress
export async function clearUserProgress() {
    await ProgressService.clearProgress();
}