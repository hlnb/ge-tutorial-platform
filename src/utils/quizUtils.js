/**
 * Quiz Utilities
 * Helper functions for working with quizzes
 */

import { htmlBasicsQuizzes } from '@/data/quizzes/html-basics';
import { cssBasicsQuizzes } from '@/data/quizzes/css-basics';
import jsBasicsQuizzes from '@/data/quizzes/javascript-basics';
import { domBasicsQuizzes } from '@/data/quizzes/dom-basics';

// Add JavaScript Basics quizzes
const javascriptBasicsQuizzes = {
	'/tutorials/beginner/javascript-basics/introduction': [
		{
			text: 'What is JavaScript primarily used for in web development?',
			options: [
				'Styling web pages',
				'Creating the structure of web pages',
				'Adding interactivity to web pages',
				'Hosting web pages',
			],
			correctAnswer: 2,
		},
		{
			text: 'Which of the following is NOT a way to add JavaScript to an HTML page?',
			options: [
				'Inline JavaScript',
				'Internal JavaScript',
				'External JavaScript',
				'Imported JavaScript',
			],
			correctAnswer: 3,
		},
		{
			text: 'What does DOM stand for?',
			options: [
				'Document Object Model',
				'Data Object Model',
				'Document Oriented Markup',
				'Digital Object Management',
			],
			correctAnswer: 0,
		},
		{
			text: 'Which method is used to find an HTML element by its ID?',
			options: [
				'document.findElement()',
				'document.querySelector()',
				'document.getElementById()',
				'document.getElementByName()',
			],
			correctAnswer: 2,
		},
		{
			text: 'In JavaScript, what is the correct way to write an if statement?',
			options: [
				'if (x === 5) then { ... }',
				'if x = 5 then { ... }',
				'if x === 5 { ... }',
				'if (x === 5) { ... }',
			],
			correctAnswer: 3,
		},
	],
};

// Add the JavaScript Basics quizzes to the allQuizzes object
const allQuizzes = {
	...htmlBasicsQuizzes,
	...cssBasicsQuizzes,
	...javascriptBasicsQuizzes,
	...domBasicsQuizzes
};

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
		default:
			return [];
	}

	// Return the questions for the specific tutorial or an empty array if not found
	const questions = quizCollection[tutorial] || [];
	
	// Transform DOM basics quiz format if needed
	if (section === 'dom-basics' && questions.length > 0) {
		return questions.map(q => ({
			question: q.text,
			options: q.options,
			correctAnswer: q.correctAnswer,
			explanation: q.explanation
		}));
	}

	return questions;
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
