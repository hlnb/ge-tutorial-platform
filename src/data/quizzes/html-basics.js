/**
 * Quiz questions for HTML Basics tutorials
 * Each tutorial has its own set of questions
 */

export const htmlBasicsQuizzes = {
	// First Page quiz
	'first-page': [
		{
			text: 'What does HTML stand for?',
			options: [
				'Hyper Text Markup Language',
				'High Tech Modern Language',
				'Hyperlink and Text Markup Language',
				'Home Tool Markup Language',
			],
			correctAnswer: 0,
			explanation:
				'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.',
		},
		{
			text: 'Which HTML element is used to define the document type?',
			options: ['<html>', '<!DOCTYPE>', '<head>', '<meta>'],
			correctAnswer: 1,
			explanation:
				'The <!DOCTYPE> declaration is used to tell the browser what type of document to expect.',
		},
		{
			text: 'Which of these is the correct structure for an HTML document?',
			options: [
				'<head> followed by <body> followed by <html>',
				'<html> followed by <head> followed by <body>',
				'<doctype> followed by <head> followed by <body>',
				'<html> followed by <body> followed by <head>',
			],
			correctAnswer: 1,
			explanation:
				'The correct structure is <html> element containing both <head> and <body> elements, with <head> coming before <body>.',
		},
		{
			text: 'What is the purpose of the <head> element in HTML?',
			options: [
				'To contain the main content of the page',
				'To define the header section of the page',
				'To contain metadata about the document',
				'To create a heading at the top of the page',
			],
			correctAnswer: 2,
			explanation:
				'The <head> element contains metadata about the document, including the title, character set, styles, scripts, and other meta information.',
		},
		{
			text: 'Which HTML element is used to define the title of a document?',
			options: ['<meta>', '<header>', '<title>', '<heading>'],
			correctAnswer: 2,
			explanation:
				"The <title> element defines the title of the document, which appears in the browser's title bar or tab.",
		},
	],

	// Text quiz
	text: [
		{
			text: 'Which HTML element is used for the largest heading?',
			options: ['<h6>', '<heading>', '<h1>', '<head>'],
			correctAnswer: 2,
			explanation:
				'The <h1> element is used for the largest and most important heading.',
		},
		{
			text: 'Which tag is used to create a paragraph in HTML?',
			options: ['<paragraph>', '<p>', '<para>', '<text>'],
			correctAnswer: 1,
			explanation: 'The <p> tag is used to define a paragraph in HTML.',
		},
		{
			text: 'How do you create a line break in HTML?',
			options: ['<lb>', '<break>', '<br>', '<newline>'],
			correctAnswer: 2,
			explanation: 'The <br> tag creates a line break in HTML.',
		},
		{
			text: 'Which HTML element is used to emphasize text (italic)?',
			options: ['<italic>', '<i>', '<em>', '<strong>'],
			correctAnswer: 2,
			explanation:
				'The <em> element is used to emphasize text, typically displayed in italic. While <i> also displays text in italic, <em> is semantically correct for emphasis.',
		},
		{
			text: 'Which HTML element is used to define important text (bold)?',
			options: ['<b>', '<bold>', '<important>', '<strong>'],
			correctAnswer: 3,
			explanation:
				'The <strong> element is used to define text with strong importance, typically displayed in bold. While <b> also makes text bold, <strong> is semantically correct for importance.',
		},
	],

	// Links quiz
	links: [
		{
			text: 'What HTML element is used to create a hyperlink?',
			options: ['<link>', '<a>', '<href>', '<hyperlink>'],
			correctAnswer: 1,
			explanation:
				'The <a> (anchor) element is used to create hyperlinks in HTML.',
		},
		{
			text: 'Which attribute specifies the URL of the page the link goes to?',
			options: ['src', 'link', 'href', 'url'],
			correctAnswer: 2,
			explanation:
				'The href attribute specifies the URL (destination) of the link.',
		},
		{
			text: 'How do you create a link that opens in a new tab/window?',
			options: [
				'Add target="_blank" attribute',
				'Add new="tab" attribute',
				'Add open="new" attribute',
				'Add window="new" attribute',
			],
			correctAnswer: 0,
			explanation:
				'The target="_blank" attribute makes a link open in a new tab or window.',
		},
		{
			text: 'What is the correct HTML for creating a bookmark within a page?',
			options: [
				'<bookmark id="section1">Section 1</bookmark>',
				'<a name="section1">Section 1</a>',
				'<id="section1">Section 1</id>',
				'<div id="section1">Section 1</div>',
			],
			correctAnswer: 3,
			explanation:
				'To create a bookmark, you add an id attribute to an HTML element, then link to it with #id in the href attribute.',
		},
		{
			text: 'What is the correct HTML for creating a link to an email address?',
			options: [
				'<a href="mailto:example@example.com">Send email</a>',
				'<a email="example@example.com">Send email</a>',
				'<mail>example@example.com</mail>',
				'<a href="example@example.com">Send email</a>',
			],
			correctAnswer: 0,
			explanation:
				'To create an email link, use the mailto: protocol in the href attribute.',
		},
	],

	// Images quiz
	images: [
		{
			text: 'Which HTML element is used to insert an image?',
			options: ['<picture>', '<image>', '<img>', '<src>'],
			correctAnswer: 2,
			explanation: 'The <img> tag is used to insert images in HTML.',
		},
		{
			text: 'Which attribute specifies the URL of an image?',
			options: ['href', 'src', 'link', 'url'],
			correctAnswer: 1,
			explanation: 'The src (source) attribute specifies the URL of the image.',
		},
		{
			text: 'Which attribute is required for the <img> element for accessibility?',
			options: ['title', 'name', 'alt', 'description'],
			correctAnswer: 2,
			explanation:
				'The alt attribute provides alternative text for an image if it cannot be displayed and is essential for accessibility.',
		},
		{
			text: 'How do you specify the width and height of an image in HTML?',
			options: [
				'Using the size attribute',
				'Using the dimension attribute',
				'Using the width and height attributes',
				'Using the scale attribute',
			],
			correctAnswer: 2,
			explanation:
				'The width and height attributes are used to specify the dimensions of an image.',
		},
		{
			text: 'Which image format is best for photographs with many colors?',
			options: ['GIF', 'PNG', 'SVG', 'JPEG'],
			correctAnswer: 3,
			explanation:
				'JPEG is typically best for photographs with many colors as it provides good compression while maintaining reasonable quality.',
		},
	],

	// Document Structure quiz
	'doc-structure': [
		{
			text: 'Which HTML element is used to create a section header?',
			options: ['<section>', '<header>', '<head>', '<heading>'],
			correctAnswer: 1,
			explanation:
				'The <header> element represents a container for introductory content or a set of navigational links.',
		},
		{
			text: 'Which HTML element defines the main content of a document?',
			options: ['<content>', '<body>', '<main>', '<article>'],
			correctAnswer: 2,
			explanation:
				'The <main> element specifies the main content of a document. There should be only one <main> element in a document.',
		},
		{
			text: 'Which HTML element is used to create a footer for a document or section?',
			options: ['<bottom>', '<footer>', '<end>', '<section>'],
			correctAnswer: 1,
			explanation:
				'The <footer> element defines a footer for a document or section.',
		},
		{
			text: 'Which HTML element is used to define a navigation menu?',
			options: ['<menu>', '<navigation>', '<nav>', '<links>'],
			correctAnswer: 2,
			explanation: 'The <nav> element defines a set of navigation links.',
		},
		{
			text: 'Which HTML element is used to define independent, self-contained content?',
			options: ['<section>', '<div>', '<article>', '<content>'],
			correctAnswer: 2,
			explanation:
				'The <article> element specifies independent, self-contained content that should make sense on its own.',
		},
	],

	// Forms quiz
	forms: [
		{
			text: 'Which HTML element is used to create a form?',
			options: ['<input>', '<form>', '<field>', '<formfield>'],
			correctAnswer: 1,
			explanation:
				'The <form> element is used to create an HTML form for user input.',
		},
		{
			text: 'Which attribute specifies where to send the form data when a form is submitted?',
			options: ['method', 'action', 'destination', 'submit'],
			correctAnswer: 1,
			explanation:
				'The action attribute specifies the URL where the form data should be sent when submitted.',
		},
		{
			text: 'Which input type creates a checkbox?',
			options: [
				'<input type="check">',
				'<input type="box">',
				'<input type="checkbox">',
				'<input type="option">',
			],
			correctAnswer: 2,
			explanation: 'The <input type="checkbox"> creates a checkbox in a form.',
		},
		{
			text: 'Which HTML element is used to create a dropdown list?',
			options: ['<input type="dropdown">', '<list>', '<select>', '<dropdown>'],
			correctAnswer: 2,
			explanation: 'The <select> element is used to create a dropdown list.',
		},
		{
			text: 'Which HTML element is used to create a text area?',
			options: [
				'<input type="textarea">',
				'<textarea>',
				'<textfield>',
				'<input type="text">',
			],
			correctAnswer: 1,
			explanation:
				'The <textarea> element is used to create a multi-line text input control.',
		},
	],

	// HTML Emmet quiz
	'html-emmet': [
		{
			text: "What does the Emmet abbreviation 'div>ul>li' create?",
			options: [
				'A div containing a list item inside an unordered list',
				'A div, an unordered list, and a list item as siblings',
				'An unordered list containing a div and a list item',
				'A list item containing an unordered list inside a div',
			],
			correctAnswer: 0,
			explanation:
				"The '>' symbol in Emmet creates child elements, so 'div>ul>li' creates a div containing an unordered list, which contains a list item.",
		},
		{
			text: "What does the Emmet abbreviation 'div+p+span' create?",
			options: [
				'A div containing a paragraph and a span',
				'A div, a paragraph, and a span as siblings',
				'A span containing a div and a paragraph',
				'A paragraph containing a div and a span',
			],
			correctAnswer: 1,
			explanation:
				"The '+' symbol in Emmet creates sibling elements, so 'div+p+span' creates a div, a paragraph, and a span as siblings.",
		},
		{
			text: "What does the Emmet abbreviation 'ul>li*5' create?",
			options: [
				'An unordered list with 5 list items',
				'5 unordered lists each with one list item',
				"An unordered list with a list item containing the text '5'",
				'5 list items without a parent unordered list',
			],
			correctAnswer: 0,
			explanation:
				"The '*' symbol in Emmet multiplies elements, so 'ul>li*5' creates an unordered list with 5 list items.",
		},
		{
			text: "What does the Emmet abbreviation 'p.intro' create?",
			options: [
				"A paragraph with an ID of 'intro'",
				"A paragraph with a class of 'intro'",
				"A paragraph containing the text 'intro'",
				"A paragraph with a title of 'intro'",
			],
			correctAnswer: 1,
			explanation:
				"The '.' symbol in Emmet adds a class, so 'p.intro' creates a paragraph with a class of 'intro'.",
		},
		{
			text: "What does the Emmet abbreviation 'a[href=#]' create?",
			options: [
				"An anchor element with an ID of 'href'",
				"An anchor element with a class of 'href'",
				"An anchor element with an href attribute set to '#'",
				"An anchor element with a target attribute set to '#'",
			],
			correctAnswer: 2,
			explanation:
				"The square brackets in Emmet add attributes, so 'a[href=#]' creates an anchor element with an href attribute set to '#'.",
		},
	],
};
