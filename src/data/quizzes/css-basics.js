/**
 * Quiz questions for CSS Basics tutorials
 * Each tutorial has its own set of questions
 */

export const cssBasicsQuizzes = {
	// Introduction quiz
	introduction: [
		{
			text: 'What does CSS stand for?',
			options: [
				'Creative Style Sheets',
				'Computer Style Sheets',
				'Cascading Style Sheets',
				'Colorful Style Sheets',
			],
			correctAnswer: 2,
			explanation:
				'CSS stands for Cascading Style Sheets, which is a style sheet language used for describing the presentation of a document written in HTML.',
		},
		{
			text: 'Which HTML attribute is used to define inline styles?',
			options: ['styles', 'style', 'css', 'class'],
			correctAnswer: 1,
			explanation:
				'The style attribute is used to add inline CSS to an HTML element.',
		},
		{
			text: 'Which is the correct CSS syntax?',
			options: [
				'{body:color=black;}',
				'body {color: black;}',
				'body:color=black;',
				'{body;color:black;}',
			],
			correctAnswer: 1,
			explanation: 'The correct CSS syntax is selector {property: value;}',
		},
		{
			text: 'How do you add a comment in CSS?',
			options: [
				'// This is a comment',
				'/* This is a comment */',
				'<!-- This is a comment -->',
				"' This is a comment",
			],
			correctAnswer: 1,
			explanation: 'Comments in CSS are written inside /* and */.',
		},
		{
			text: 'Which CSS property is used to change the text color of an element?',
			options: ['text-color', 'color', 'font-color', 'text-style'],
			correctAnswer: 1,
			explanation: 'The color property is used to set the color of the text.',
		},
	],

	// Selectors quiz
	selectors: [
		{
			text: 'Which CSS selector selects all paragraph elements?',
			options: ['.p', '#p', 'paragraph', 'p'],
			correctAnswer: 3,
			explanation: 'The element selector (p) selects all paragraph elements.',
		},
		{
			text: "How do you select an element with the id 'header'?",
			options: ['.header', '#header', 'header', '*header'],
			correctAnswer: 1,
			explanation:
				'The id selector (#header) selects the element with the specific id.',
		},
		{
			text: "How do you select elements with the class 'intro'?",
			options: ['.intro', '#intro', 'intro', '*intro'],
			correctAnswer: 0,
			explanation:
				'The class selector (.intro) selects all elements with the specific class.',
		},
		{
			text: 'Which selector selects all direct child elements of a div?',
			options: ['div + *', 'div > *', 'div ~ *', 'div *'],
			correctAnswer: 1,
			explanation:
				'The child selector (div > *) selects all elements that are direct children of a div.',
		},
		{
			text: "What does the selector 'a:hover' do?",
			options: [
				'Selects all anchor elements',
				'Selects anchor elements that are being hovered over',
				'Selects anchor elements that are active',
				'Selects anchor elements that have been visited',
			],
			correctAnswer: 1,
			explanation:
				'The :hover pseudo-class selects elements when the user hovers over them.',
		},
	],

	// Box Model quiz
	'box-model': [
		{
			text: 'What are the four parts of the CSS box model?',
			options: [
				'Margin, Border, Padding, Content',
				'Header, Body, Footer, Sidebar',
				'Top, Right, Bottom, Left',
				'Width, Height, Depth, Time',
			],
			correctAnswer: 0,
			explanation:
				'The CSS box model consists of margin, border, padding, and content areas.',
		},
		{
			text: "Which CSS property is used to create space around an element's content, inside of any defined borders?",
			options: ['margin', 'spacing', 'padding', 'border'],
			correctAnswer: 2,
			explanation:
				'The padding property creates space inside an element, between the content and the border.',
		},
		{
			text: 'Which CSS property is used to create space around elements, outside of any defined borders?',
			options: ['margin', 'spacing', 'padding', 'border'],
			correctAnswer: 0,
			explanation:
				'The margin property creates space outside an element, creating distance from other elements.',
		},
		{
			text: "What does the CSS property 'box-sizing: border-box' do?",
			options: [
				'It makes the element a flex container',
				"It includes padding and border in the element's total width and height",
				'It removes the border from the box model calculation',
				'It makes the element display as an inline element',
			],
			correctAnswer: 1,
			explanation:
				"The 'box-sizing: border-box' property includes the padding and border in an element's total width and height.",
		},
		{
			text: 'If an element has a width of 300px, padding of 20px, and a border of 10px, what is its total width with the default box-sizing?',
			options: ['300px', '320px', '330px', '360px'],
			correctAnswer: 3,
			explanation:
				'With the default box-sizing (content-box), the total width is: content (300px) + padding (20px * 2) + border (10px * 2) = 360px.',
		},
	],

	// Text Properties quiz
	'text': [
		{
			text: 'Which CSS property is used to change the font of an element?',
			options: ['font-style', 'text-font', 'font-family', 'font-type'],
			correctAnswer: 2,
			explanation:
				'The font-family property is used to specify the font of text.',
		},
		{
			text: 'Which CSS property controls the size of text?',
			options: ['font-style', 'text-size', 'font-size', 'text-style'],
			correctAnswer: 2,
			explanation: 'The font-size property sets the size of the text.',
		},
		{
			text: 'Which CSS property is used to make text bold?',
			options: ['font-weight', 'text-style', 'font-style', 'text-weight'],
			correctAnswer: 0,
			explanation:
				'The font-weight property sets how thick or thin characters in text should be displayed.',
		},
		{
			text: 'Which CSS property is used to create space between characters?',
			options: [
				'character-spacing',
				'letter-spacing',
				'text-spacing',
				'font-spacing',
			],
			correctAnswer: 1,
			explanation:
				'The letter-spacing property increases or decreases the space between characters in text.',
		},
		{
			text: 'Which CSS property is used to align text?',
			options: ['text-align', 'align', 'text-position', 'font-align'],
			correctAnswer: 0,
			explanation:
				'The text-align property specifies the horizontal alignment of text in an element.',
		},
	],

	// Layout quiz
	layout: [
		{
			text: 'Which CSS property is used to specify the layout of child elements?',
			options: ['position', 'layout', 'display', 'float'],
			correctAnswer: 2,
			explanation:
				'The display property specifies how an element is displayed and affects the layout of surrounding elements.',
		},
		{
			text: "Which value of the 'position' property places an element relative to its normal position?",
			options: ['static', 'fixed', 'absolute', 'relative'],
			correctAnswer: 3,
			explanation:
				"The 'position: relative' value positions an element relative to its normal position.",
		},
		{
			text: "Which value of the 'position' property places an element relative to the viewport?",
			options: ['static', 'fixed', 'absolute', 'relative'],
			correctAnswer: 1,
			explanation:
				"The 'position: fixed' value positions an element relative to the viewport, so it always stays in the same place even if the page is scrolled.",
		},
		{
			text: 'Which CSS property is used to specify the stacking order of elements?',
			options: ['z-index', 'stack-order', 'layer', 'position-index'],
			correctAnswer: 0,
			explanation:
				'The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).',
		},
		{
			text: 'Which CSS layout model allows you to arrange elements in rows and columns?',
			options: ['Box model', 'Float model', 'Grid model', 'Flexbox model'],
			correctAnswer: 2,
			explanation:
				'CSS Grid Layout is a two-dimensional layout system designed specifically to arrange elements in rows and columns.',
		},
	],

	// Colors quiz
	colors: [
		{
			text: 'Which CSS property is used to set the background color?',
			options: ['color', 'bgcolor', 'background-color', 'background'],
			correctAnswer: 2,
			explanation:
				'The background-color property sets the background color of an element.',
		},
		{
			text: 'Which color value is represented in hexadecimal format?',
			options: ['rgb(255, 0, 0)', '#FF0000', 'red', 'hsl(0, 100%, 50%)'],
			correctAnswer: 1,
			explanation:
				'Hexadecimal color values are specified with #RRGGBB, where RR, GG, and BB are the hexadecimal values for red, green, and blue.',
		},
		{
			text: 'Which CSS function allows you to use transparency with colors?',
			options: ['rgba()', 'transparent()', 'opacity()', 'alpha()'],
			correctAnswer: 0,
			explanation:
				'The rgba() function allows you to specify a color with an alpha channel (transparency).',
		},
		{
			text: "What does the CSS property 'opacity' control?",
			options: [
				'The transparency of text only',
				'The transparency of the entire element including its children',
				'The background color intensity',
				'The border visibility',
			],
			correctAnswer: 1,
			explanation:
				'The opacity property sets the opacity (transparency) level for an element and all of its children.',
		},
		{
			text: 'Which color model is based on hue, saturation, and lightness?',
			options: ['RGB', 'CMYK', 'HSL', 'HEX'],
			correctAnswer: 2,
			explanation:
				'HSL (Hue, Saturation, Lightness) is a color model that represents colors based on these three characteristics.',
		},
	],

	// Modern CSS quiz
	modern: [
		{
			text: 'Which CSS feature allows you to define reusable pieces of CSS?',
			options: ['Mixins', 'Variables', 'Functions', 'Modules'],
			correctAnswer: 1,
			explanation:
				'CSS variables (custom properties) allow you to store specific values to be reused throughout a document.',
		},
		{
			text: 'How do you declare a CSS variable?',
			options: [
				'@variable: value;',
				'--variable: value;',
				'$variable: value;',
				'var(variable): value;',
			],
			correctAnswer: 1,
			explanation:
				'CSS variables are declared using the -- prefix, like --variable: value;',
		},
		{
			text: 'Which CSS function is used to use a CSS variable?',
			options: ['variable()', 'var()', 'use()', 'custom()'],
			correctAnswer: 1,
			explanation:
				'The var() function is used to insert the value of a CSS variable.',
		},
		{
			text: 'Which modern CSS feature allows you to create smooth transitions between two or more colors?',
			options: ['Transitions', 'Animations', 'Gradients', 'Filters'],
			correctAnswer: 2,
			explanation:
				'CSS gradients allow you to display smooth transitions between two or more specified colors.',
		},
		{
			text: 'Which CSS property is used to add shadow effects to text?',
			options: ['text-effect', 'font-shadow', 'text-shadow', 'shadow-effect'],
			correctAnswer: 2,
			explanation: 'The text-shadow property adds shadow to text.',
		},
	],

	// Responsive quiz
	responsive: [
		{
			text: 'What is a media query in CSS?',
			options: [
				'A way to query the database for media files',
				'A CSS technique to apply styles based on the device characteristics',
				'A JavaScript function to detect media types',
				'A HTML attribute for responsive images',
			],
			correctAnswer: 1,
			explanation:
				'Media queries allow you to apply different styles for different devices/screen sizes.',
		},
		{
			text: 'Which CSS unit is relative to the viewport width?',
			options: ['px', 'em', 'vw', '%'],
			correctAnswer: 2,
			explanation: 'The vw unit is relative to 1% of the viewport width.',
		},
		{
			text: 'What is the purpose of the viewport meta tag in responsive design?',
			options: [
				'To set the background color of the viewport',
				"To control the viewport's width and scaling on mobile devices",
				"To define the viewport's height",
				'To hide content on mobile devices',
			],
			correctAnswer: 1,
			explanation:
				"The viewport meta tag gives the browser instructions on how to control the page's dimensions and scaling, which is crucial for responsive design.",
		},
		{
			text: 'Which approach to responsive design starts with the mobile design first?',
			options: [
				'Desktop-first',
				'Mobile-first',
				'Tablet-first',
				'Content-first',
			],
			correctAnswer: 1,
			explanation:
				'Mobile-first responsive design starts by designing for mobile devices and then progressively enhances the design for larger screens.',
		},
		{
			text: 'Which CSS property is commonly used to make images responsive?',
			options: [
				'image-responsive',
				'max-width',
				'responsive-size',
				'auto-adjust',
			],
			correctAnswer: 1,
			explanation:
				'Setting max-width: 100% on images makes them scale down if necessary to fit their container, but never scale up beyond their original size.',
		},
	],

	// Flexbox quiz
	flexbox: [
		{
			text: 'Which CSS property makes an element a flex container?',
			options: [
				'flex: container;',
				'display: flex;',
				'position: flex;',
				'flex-container: true;',
			],
			correctAnswer: 1,
			explanation:
				"The display: flex; property establishes a new flex formatting context for the element's contents.",
		},
		{
			text: "Which axis is the main axis in a flex container with 'flex-direction: row'?",
			options: ['Vertical axis', 'Horizontal axis', 'Diagonal axis', 'Z axis'],
			correctAnswer: 1,
			explanation:
				"With 'flex-direction: row', the main axis runs horizontally (left to right).",
		},
		{
			text: 'Which property aligns flex items along the cross axis?',
			options: ['justify-content', 'align-items', 'flex-align', 'cross-align'],
			correctAnswer: 1,
			explanation:
				'The align-items property defines how flex items are aligned along the cross axis.',
		},
		{
			text: 'Which property controls how flex items wrap?',
			options: ['flex-wrap', 'wrap-items', 'flex-flow', 'item-wrap'],
			correctAnswer: 0,
			explanation:
				"The flex-wrap property specifies whether flex items should wrap or not if they don't fit in a single line.",
		},
		{
			text: 'Which property defines the ability for a flex item to grow?',
			options: ['flex-basis', 'flex-shrink', 'flex-grow', 'flex-expand'],
			correctAnswer: 2,
			explanation:
				'The flex-grow property defines the ability for a flex item to grow if necessary, taking up available space in the container.',
		},
	],
};
