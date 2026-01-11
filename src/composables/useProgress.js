import { ref } from 'vue';
import {
    getUserProgress,
    saveUserProgress,
    completeTutorial,
    completeQuiz,
    clearUserProgress,
} from '@/utils/progressUtils';
import ProgressService from '@/services/ProgressService';

export function useProgress() {
    const progress = ref(null);
    const loading = ref(false);
    const isAuthenticated = ref(false);
    const currentUser = ref(null);
    const summary = ref({
        completedCount: 0,
        inProgressCount: 0,
        quizCount: 0
    });

    async function fetchProgress() {
        loading.value = true;
        try {
            progress.value = await getUserProgress();
            if (progress.value) {
                summary.value = await ProgressService.getProgressSummary();
            }
        } catch (error) {
            console.error('Error fetching progress:', error);
            progress.value = null;
        }
        loading.value = false;
    }

    async function markTutorialComplete(tutorialId) {
        await completeTutorial(tutorialId);
        await fetchProgress();
    }

    async function markQuizComplete(quizId, result) {
        await completeQuiz(quizId, result);
        await fetchProgress();
    }

    async function saveProgress(newProgress) {
        await saveUserProgress(newProgress);
        progress.value = newProgress;
    }

    async function clearProgress() {
        await clearUserProgress();
        progress.value = null;
    }

    // Don't auto-fetch on composable creation, let components do it
    // This prevents issues with SSR and module initialization

    return {
        progress,
        loading,
        isAuthenticated,
        currentUser,
        summary,
        fetchProgress,
        reloadProgress: fetchProgress,
        markTutorialComplete,
        markQuizComplete,
        saveProgress,
        clearProgress,
    };
}  