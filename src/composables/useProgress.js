import { ref } from 'vue';
import {
    getUserProgress,
    saveUserProgress,
    completeTutorial,
    completeQuiz,
    clearUserProgress,
} from '@/utils/progressUtils';

export function useProgress() {
    const progress = ref(null);
    const loading = ref(false);

    async function fetchProgress() {
        loading.value = true;
        progress.value = await getUserProgress();
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

    return {
        progress,
        loading,
        fetchProgress,
        markTutorialComplete,
        markQuizComplete,
        saveProgress,
        clearProgress,
    };
}  