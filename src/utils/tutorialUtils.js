/**
 * Tutorial Utilities
 * Helper functions for working with tutorials
 */

import {
	getSectionLessons,
	getTutorialByPath,
	getTutorialNavigationByPath,
} from '@/data/tutorials';
import {
	projects,
	tutorialEditorialContent,
} from '@/data/tutorialRecommendations';

function createEmptyRecommendations() {
	return {
		nextTutorial: null,
		relatedTutorials: [],
		practiceProjects: [],
		resources: [],
	};
}

function normalizeRecommendationPath(path) {
	if (!path) return null;

	const [cleanPath] = path.split(/[?#]/);
	const trimmedPath = cleanPath.endsWith('/') && cleanPath.length > 1
		? cleanPath.slice(0, -1)
		: cleanPath;

	return trimmedPath.startsWith('/') ? trimmedPath : `/${trimmedPath}`;
}

function cloneEditorialContent(recommendations = createEmptyRecommendations()) {
	return {
		nextTutorial: null,
		relatedTutorials: [],
		practiceProjects: recommendations.practiceProjects.map((project) => ({ ...project })),
		resources: recommendations.resources.map((resource) => ({ ...resource })),
	};
}

function getEditorialRecommendations(path) {
	const normalizedPath = normalizeRecommendationPath(path);

	if (!normalizedPath) {
		return createEmptyRecommendations();
	}

	const tutorialRecord = getTutorialByPath(normalizedPath);
	const pathParts = normalizedPath.split('/').filter(Boolean);
	const sectionCandidates = [
		tutorialRecord?.section,
		pathParts[pathParts.length - 2],
	].filter(Boolean);
	const tutorialCandidates = [
		tutorialRecord?.id,
		tutorialRecord?.slug?.split('/').pop(),
		pathParts[pathParts.length - 1],
	].filter(Boolean);

	const tutorialRecs = sectionCandidates
		.flatMap((section) =>
			tutorialCandidates.map((tutorial) => tutorialEditorialContent[section]?.[tutorial]),
		)
		.find(Boolean);

	return tutorialRecs ? cloneEditorialContent(tutorialRecs) : createEmptyRecommendations();
}

function getCurriculumNextTutorial(path) {
	const navigation = getTutorialNavigationByPath(path);
	return navigation.next ? { ...navigation.next } : null;
}

function getCurriculumRelatedTutorials(path, limit = 3) {
	const tutorial = getTutorialByPath(path);

	if (!tutorial?.section) {
		return [];
	}

	const lessons = getSectionLessons(tutorial.section).filter((lesson) => !lesson.comingSoon);
	const currentIndex = lessons.findIndex((lesson) => lesson.slug === tutorial.slug);

	if (currentIndex === -1) {
		return [];
	}

	const relatedLessons = [];
	for (let distance = 1; relatedLessons.length < limit; distance += 1) {
		const previousLesson = lessons[currentIndex - distance];
		const nextLesson = lessons[currentIndex + distance];

		if (previousLesson) {
			relatedLessons.push(previousLesson);
		}

		if (relatedLessons.length >= limit) {
			break;
		}

		if (nextLesson) {
			relatedLessons.push(nextLesson);
		}

		if (!previousLesson && !nextLesson) {
			break;
		}
	}

	return relatedLessons.map((lesson) => ({
		path: `/tutorials/${lesson.slug}`,
		title: lesson.title,
	}));
}

/**
 * Get recommendations for a tutorial based on its path
 * @param {string} path - The current tutorial path
 * @returns {Object} - Object containing next tutorial, related tutorials, practice projects, and resources
 */
export function getTutorialRecommendations(path) {
	const normalizedPath = normalizeRecommendationPath(path);
	const editorialRecommendations = getEditorialRecommendations(normalizedPath);

	return {
		nextTutorial: getCurriculumNextTutorial(normalizedPath),
		relatedTutorials: getCurriculumRelatedTutorials(normalizedPath),
		practiceProjects: editorialRecommendations.practiceProjects,
		resources: editorialRecommendations.resources,
	};
}

/**
 * Get recommendations for a tutorial, handling both direct props and path-based lookup
 * @param {Object} props - Component props containing recommendations and current path
 * @param {Object} providedTutorial - Tutorial info provided by parent component
 * @returns {Object} - Object containing next tutorial, related tutorials, practice projects, and resources
 */
export function getRecommendationsFromProps(props, providedTutorial) {
	if (
		props.nextTutorial ||
		props.relatedTutorials.length > 0 ||
		props.practiceProjects.length > 0 ||
		props.resources.length > 0
	) {
		return {
			nextTutorial: props.nextTutorial,
			relatedTutorials: props.relatedTutorials,
			practiceProjects: props.practiceProjects,
			resources: props.resources,
		};
	}

	const recs = getTutorialRecommendations(props.currentPath);

	// Parent-provided next links still act as a final fallback during migration.
	if (!recs.nextTutorial && providedTutorial && providedTutorial.next) {
		recs.nextTutorial = providedTutorial.next;
	}

	return recs;
}

export { projects };
