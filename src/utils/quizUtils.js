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
	return getQuizQuestionsForPath(path).length > 0;
}

/**
 * Resolve both legacy tutorial paths and paths containing a curriculum level.
 * Unknown collections, missing lessons, and non-path inputs have no quiz.
 */
export function getQuizQuestionsForPath(path) {
	if (typeof path !== 'string') return [];

	const parts = path.split(/[?#]/, 1)[0].split('/').filter(Boolean);
	if (parts.shift() !== 'tutorials') return [];
	if (['beginner', 'intermediate', 'advanced'].includes(parts[0])) {
		parts.shift();
	}
	if (parts.length !== 2) return [];

	return getQuizQuestions(parts[0], parts[1]);
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
