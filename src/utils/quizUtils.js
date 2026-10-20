/**
 * Quiz Utilities
 * Helper functions for working with quizzes
 */

import { htmlBasicsQuizzes } from '@/data/quizzes/html-basics';
import { cssBasicsQuizzes } from '@/data/quizzes/css-basics';
import jsBasicsQuizzes from '@/data/quizzes/javascript-basics';
import { domBasicsQuizzes } from '@/data/quizzes/dom-basics';
import { gitBasicsQuizzes } from '@/data/quizzes/git-basics';

/**
 * Get quiz questions for a specific tutorial
 * @param {string} section - The tutorial section (e.g., 'html-basics', 'css-basics')
 * @param {string} tutorial - The specific tutorial (e.g., 'first-page', 'text')
 * @returns {Array} - Array of quiz questions or empty array if not found
 */
export function getQuizQuestions(section, tutorial) {
	// Determine which quiz collection to use based on section
	let quizCollection;

	switch (section) {
		case 'html-basics':
			quizCollection = htmlBasicsQuizzes;
			break;
		case 'css-basics':
			quizCollection = cssBasicsQuizzes;
			break;
		case 'javascript-basics':
			quizCollection = jsBasicsQuizzes;
			break;
		case 'dom-basics':
			quizCollection = domBasicsQuizzes;
			break;
		case 'git-basics':
			quizCollection = gitBasicsQuizzes;
			break;
		default:
			return [];
	}

	// Return the questions for the specific tutorial or an empty array if not found
	const tutorialEntry = quizCollection[tutorial];
	let questions = [];

	if (Array.isArray(tutorialEntry)) {
		questions = tutorialEntry;
	} else if (tutorialEntry && Array.isArray(tutorialEntry.questions)) {
		questions = tutorialEntry.questions;
	}

	if (!questions.length) {
		return [];
	}

	// Normalize question shape (older quizzes used `text` instead of `question`)
	return questions.map((question) => {
		if (question && typeof question.question === 'string') {
			return question;
		}
		if (question && typeof question.text === 'string') {
			const { text, ...rest } = question;
			return { ...rest, question: text };
		}
		return question;
	});
}

/**
 * Check if a tutorial has a quiz
 * @param {string} path - The full path of the tutorial (e.g., '/tutorials/html-basics/first-page')
 * @returns {boolean} - True if the tutorial has a quiz, false otherwise
 */
export function hasQuiz(path) {
	// Extract section and tutorial from path
	const pathParts = path.split('/').filter(Boolean);

	if (pathParts.length < 3) return false;

	// Handle paths with 'beginner' segment
	let section, tutorial;
	if (pathParts.includes('beginner')) {
		const beginnerIndex = pathParts.indexOf('beginner');
		if (beginnerIndex + 2 >= pathParts.length) return false;
		section = pathParts[beginnerIndex + 1];
		tutorial = pathParts[beginnerIndex + 2];
	} else {
		section = pathParts[1];
		tutorial = pathParts[2];
	}

	// Get quiz questions
	const questions = getQuizQuestions(section, tutorial);

	// Return true if there are questions
	return questions.length > 0;
}

/**
 * Get quiz questions for a tutorial path
 * @param {string} path - The full path of the tutorial (e.g., '/tutorials/html-basics/first-page')
 * @returns {Array} - Array of quiz questions or empty array if not found
 */
export function getQuizQuestionsForPath(path) {
	if (!path) return [];

	// Extract section and tutorial from path
	const pathParts = path.split('/').filter(Boolean);

	if (pathParts.length < 3) return [];

	// Handle paths with 'beginner' segment
	let section, tutorial;
	if (pathParts.includes('beginner')) {
		const beginnerIndex = pathParts.indexOf('beginner');
		if (beginnerIndex + 2 >= pathParts.length) return [];
		section = pathParts[beginnerIndex + 1];
		tutorial = pathParts[beginnerIndex + 2];
	} else {
		section = pathParts[1];
		tutorial = pathParts[2];
	}

	// Get quiz questions
	return getQuizQuestions(section, tutorial);
}

/**
 * Get tutorial title from path
 * @param {string} path - The full path of the tutorial (e.g., '/tutorials/html-basics/first-page')
 * @returns {string} - The formatted tutorial title
 */
export function getTutorialTitle(path) {
	const pathParts = path.split('/').filter(Boolean);

	if (pathParts.length < 3) return '';

	const tutorial = pathParts[pathParts.length - 1];

	// Convert kebab-case to Title Case
	return tutorial
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

/**
 * Get section title from path
 * @param {string} path - The full path of the tutorial (e.g., '/tutorials/html-basics/first-page')
 * @returns {string} - The formatted section title
 */
export function getSectionTitle(path) {
	const pathParts = path.split('/').filter(Boolean);

	if (pathParts.length < 2) return '';

	const section = pathParts[1];

	// Convert kebab-case to Title Case
	return section
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}
