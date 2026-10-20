# Unconnected lesson data retained during unused-code cleanup

These source excerpts were not referenced by their lesson templates or executable code when reviewed on 20 October 2026. They are retained here for future editorial review. They include disconnected teaching examples, legacy metadata, and unused quiz collections.

The website continues to use its existing rendered content, curriculum registry, and active page metadata. These excerpts are historical reference material, not an additional curriculum source of truth. Some excerpts depend on imports or surrounding declarations from their original file and are not standalone runnable examples.

During cleanup, navigation registration calls and other initialisation with possible side effects were preserved. Imports that could supply component CSS or module initialisation were retained as side-effect imports where their local binding was unused. No lint rules were disabled.

## codeEditors

Original file: `src/pages/tutorials/beginner/css-basics/flexbox.vue`

```js
const codeEditors = ref([]);
```

## progressEnabled

Original file: `src/pages/tutorials/beginner/css-basics/flexbox.vue`

```js
const progressEnabled = ref(true);
```

## codeExamples

Original file: `src/pages/tutorials/beginner/css-basics/introduction.vue`

```js
const codeExamples = {
	cssSyntax: `selector {
  property: value;
  another-property: value;
}`,

	badExamples: `.Header {} /* Uppercase */
.nav_menu {} /* Underscore */
.searchbox1 {} /* Numbers at end */
.featured!article {} /* Special characters */
.s {} /* Not descriptive */`,

	goodExamples: `.header {} /* Lowercase */
.nav-menu {} /* Hyphen */
.search-box {} /* Descriptive */
.featured-article {} /* Clean naming */
.site-navigation {} /* Clear purpose */`,
};
```

## clearExample

Original file: `src/pages/tutorials/beginner/css-basics/layout.vue`

```js
const clearExample = ref(`/* Clear example */
.clear-demo::after {
	content: "";
	display: table;
	clear: both;
}

.float-left {
	float: left;
	width: 100px;
	height: 100px;
	margin-right: 10px;
	padding: 10px;
	background: #e9ecef;
	border: 1px solid #dee2e6;
}

.cleared {
	clear: both;
	padding: 10px;
	background: #f8f9fa;
	border: 1px solid #dee2e6;
}`);
```

## progressEnabled

Original file: `src/pages/tutorials/beginner/css-basics/modern.vue`

```js
const progressEnabled = ref(true);
```

## cssFunctionsExample

Original file: `src/pages/tutorials/beginner/css-basics/modern.vue`

```js
const cssFunctionsExample = ref(`/* Basic CSS Function Examples */
.container {
	/* Calculate width minus padding */
	width: calc(100% - 2rem);
	
	/* Clamp value between min and max */
	font-size: clamp(1rem, 2vw, 1.5rem);
	
	/* Use minimum of multiple values */
	margin: min(2rem, 5vw);
	
	/* Use maximum of multiple values */
	padding: max(1rem, 2vh);
}

/* Combining functions */
.responsive-element {
	width: clamp(
		300px,
		calc(50% + 2rem),
		800px
	);
}`);
```

## minMaxExample

Original file: `src/pages/tutorials/beginner/css-basics/modern.vue`

```js
const minMaxExample = ref(`/* min() and max() Examples */
.card {
	/* Use smaller of two values */
	padding: min(2rem, 5vw);
	
	/* Use larger of two values */
	margin: max(1rem, 2vh);
}

.image {
	/* Responsive but constrained width */
	width: min(100%, 500px);
	
	/* Ensure minimum readable size */
	font-size: max(12px, 1em);
}`);
```

## responsiveHolyGrail

Original file: `src/pages/tutorials/beginner/css-basics/responsive.vue`

```js
const responsiveHolyGrail = ref(`/* Holy Grail Layout - Responsive */
@media (max-width: 768px) {
  .holy-grail-content,
  .holy-grail-nav,
  .holy-grail-ads {
    float: none;
    width: 100%;
  }
}`);
```

## responsiveContainer

Original file: `src/pages/tutorials/beginner/css-basics/responsive.vue`

```js
const responsiveContainer = ref(`/* Responsive Container */
@media (max-width: 992px) {
  .main-content,
  .sidebar {
    float: none;
    width: 100%;
    padding-right: 0;
  }
  
  .sidebar {
    margin-top: 2rem;
  }
}`);
```

## responsiveMenu

Original file: `src/pages/tutorials/beginner/css-basics/responsive.vue`

```js
const responsiveMenu = ref(`/* Responsive Menu */
@media (max-width: 768px) {
  .menu-column {
    float: none;
    width: 100%;
    padding: 0;
    margin-bottom: 2rem;
  }
}`);
```

## responsiveGrid

Original file: `src/pages/tutorials/beginner/css-basics/responsive.vue`

```js
const responsiveGrid = ref(`/* Responsive Grid */
@media (max-width: 768px) {
  .grid-item {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .grid-item {
    width: 100%;
  }
}`);
```

## responsiveNav

Original file: `src/pages/tutorials/beginner/css-basics/responsive.vue`

```js
const responsiveNav = ref(`/* Responsive Navigation */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .nav-menu.is-active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}`);
```

## elementExample

Original file: `src/pages/tutorials/beginner/css-basics/selectors.vue`

```js
const elementExample = ref(
	'<!-- HTML -->\n' +
		'<h1>Welcome to my website</h1>\n' +
		'<p>This is a paragraph with navy text.</p>\n' +
		'<p>This is another paragraph that will also be styled.</p>\n\n' +
		'/* CSS */\n' +
		'p {\n' +
		'  color: navy;\n' +
		'  line-height: 1.6;\n' +
		'}\n\n' +
		'h1 {\n' +
		'  color: #333;\n' +
		'  font-size: 2em;\n' +
		'}',
);
```

## sanitizedElementPreview

Original file: `src/pages/tutorials/beginner/css-basics/selectors.vue`

```js
const sanitizedElementPreview = computed(() => {
	const previewHtml =
		'<div class="preview-example">' +
		'<style>' +
		'.preview-example p { color: navy; line-height: 1.6; }' +
		'.preview-example h1 { color: #333; font-size: 2em; }' +
		'</style>' +
		'<h1>Welcome to my website</h1>' +
		'<p>This is a paragraph with navy text.</p>' +
		'<p>This is another paragraph that will also be styled.</p>' +
		'</div>';

	return sanitizeHtml(previewHtml);
});
```

## textDecorationExample

Original file: `src/pages/tutorials/beginner/css-basics/text.vue`

```js
const textDecorationExample = ref(`/* Text decoration examples */
.underline {
  text-decoration: underline;
}

.custom-underline {
  text-decoration: underline;
  text-decoration-color: #ff6b6b;
  text-decoration-thickness: 2px;
  text-decoration-style: wavy;
}

.line-through {
  text-decoration: line-through;
}

.overline {
  text-decoration: overline;
}

.no-decoration {
  text-decoration: none;  /* Removes decoration */
}

/* Multiple decorations */
.multiple-lines {
  text-decoration: underline overline;
  text-decoration-color: #4a90e2;
}`);
```

## fontPerformanceExample

Original file: `src/pages/tutorials/beginner/css-basics/text.vue`

```js
const fontPerformanceExample = ref(`/* Font loading strategies */
/* Preload critical fonts */
<link
  rel="preload"
  href="fonts/myfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin
>

/* Control loading behavior */
@font-face {
  font-family: 'MyWebFont';
  src: url('fonts/myfont.woff2') format('woff2');
  font-display: swap;    /* Show fallback until font loads */
}

/* Subset fonts for better performance */
@font-face {
  font-family: 'MyWebFont-Subset';
  src: url('fonts/myfont-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF;  /* Latin characters only */
}`);
```

## traditionalFontStackExample

Original file: `src/pages/tutorials/beginner/css-basics/text.vue`

```js
const traditionalFontStackExample = ref(`/* Traditional web safe font stacks */
.serif {
  font-family: Georgia, 'Times New Roman', Times, serif;
}`);
```

## frontmatter

Original file: `src/pages/tutorials/beginner/dom-basics/arrays.vue`

```js
const frontmatter = {
    title: 'Arrays and Array Methods in JavaScript',
    description: 'Learn how to work with arrays and array methods in JavaScript, with a focus on DOM manipulation.',
    difficulty: 'Beginner',
    duration: '30 minutes',
    tags: ['JavaScript', 'DOM', 'Arrays'],
    nextSteps: [
      {
        path: '/tutorials/beginner/javascript/loops',
        title: 'JavaScript Loops',
        description: 'Learn how to use loops to iterate over arrays and perform repeated operations efficiently.'
      },
      {
        path: '/tutorials/beginner/dom-basics/photo-gallery-2',
        title: 'Photo Gallery Project',
        description: 'Build a dynamic photo gallery using arrays to manage and display images.'
      },
      {
        path: '/tutorials/beginner/dom-basics/todo-list-2',
        title: 'Todo List Project',
        description: 'Create a todo list application that uses arrays to manage tasks and their states.'
      },
      {
        path: '/tutorials/beginner/dom-basics/dom-manipulation',
        title: 'DOM Manipulation',
        description: 'Learn how to modify HTML elements and their properties using JavaScript.'
      }
    ]
  };
```

## frontmatter

Original file: `src/pages/tutorials/beginner/html-basics/introduction.vue`

```js
const frontmatter = {
	title: 'Introduction to HTML',
	description: 'Learn about HTML, its history, and create your first web page',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'html'],
};
```

## forOfCode

Original file: `src/pages/tutorials/beginner/javascript-basics/conditionals.vue`

```js
const forOfCode = `let prices = [24.99, 29.99, 19.99];
for (let price of prices) {
  console.log(\`$\${price}\`);
}`;
```

## forInCode

Original file: `src/pages/tutorials/beginner/javascript-basics/conditionals.vue`

```js
const forInCode = `let dish = {
  name: 'Salmon',
  price: 24.99,
  isAvailable: true
};

for (let key in dish) {
  console.log(\`\${key}: \${dish[key]}\`);
}`;
```

## frontmatter

Original file: `src/pages/tutorials/beginner/javascript-basics/introduction.vue`

```js
const frontmatter = {
	title: 'Foundations-Getting Started',
	description: 'Get started with JavaScript programming',
	category: 'JavaScript Basics',
	level: 'Beginner',
	order: 1,
	tags: ['javascript', 'basics', 'foundations', 'web development'],
	lastUpdated: '2023-10-15',
};
```

## tryArithmeticExamples

Original file: `src/pages/tutorials/beginner/javascript-basics/operators.vue`

```js
const tryArithmeticExamples = `// Try these calculations
10 + 5          // Addition
20 - 7          // Subtraction
4 * 6           // Multiplication
15 / 3          // Division
10 % 3          // Remainder
2 ** 3          // Exponentiation

// Order of operations
2 + 3 * 4       // Multiplication first
(2 + 3) * 4     // Parentheses first

// Increment and decrement
let count = 5;
count++;        // Increment
console.log(count);
count--;        // Decrement
console.log(count);`;
```

## arithmeticExpressionExample

Original file: `src/pages/tutorials/beginner/javascript-basics/operators.vue`

```js
const arithmeticExpressionExample = `// Arithmetic expressions
let subtotal = 24.99 + 18.99 + 7.99; // 51.97
let tax = subtotal * 0.08; // 4.16
let total = subtotal + tax; // 56.13`;
```

## stringExpressionExample

Original file: `src/pages/tutorials/beginner/javascript-basics/operators.vue`

```js
const stringExpressionExample = `// String expressions
let firstName = "John";
let lastName = "Smith";
let fullName = firstName + " " + lastName; // "John Smith"

let greeting = \`Welcome to our restaurant, \${fullName}!\`; 
// "Welcome to our restaurant, John Smith!"`;
```

## logicalExpressionExample

Original file: `src/pages/tutorials/beginner/javascript-basics/operators.vue`

```js
const logicalExpressionExample = `// Logical expressions
let isVIP = true;
let hasReservation = false;
let canSkipLine = isVIP || hasReservation; // true

let isWeekend = true;
let hasSpecialMenu = false;
let canOrderSpecial = !isWeekend && hasSpecialMenu; // false`;
```

## assignmentExpressionExample

Original file: `src/pages/tutorials/beginner/javascript-basics/operators.vue`

```js
const assignmentExpressionExample = `// Assignment expressions
let bill = 50;
let tip = bill * 0.15; // 7.5

// This is both an assignment and an arithmetic expression
let total = bill += tip; // 57.5

// Multiple assignments
let x = y = z = 10; // All three variables get value 10`;
```

## complexExpressionExample

Original file: `src/pages/tutorials/beginner/javascript-basics/operators.vue`

```js
const complexExpressionExample = `// Complex expression example
let appetizer = 12.99;
let entree = 24.99;
let dessert = 8.99;
let drinkPrice = 5.99;
let numDrinks = 2;

// Calculate bill with tax and tip
let subtotal = appetizer + entree + dessert + (drinkPrice * numDrinks);
let tax = subtotal * 0.08;
let tip = subtotal * 0.18;
let total = subtotal + tax + tip;

console.log('Subtotal: $' + subtotal.toFixed(2)); // $58.95
console.log('Tax: $' + tax.toFixed(2)); // $4.72
console.log('Tip: $' + tip.toFixed(2)); // $10.61
console.log('Total: $' + total.toFixed(2)); // $74.28

// Check if bill is over budget
let budget = 70;
let isOverBudget = total > budget;
console.log('Is over budget? ' + isOverBudget); // true

// Calculate how much over budget
let amountOverBudget = isOverBudget ? total - budget : 0;
console.log('Amount over budget: $' + amountOverBudget.toFixed(2)); // $4.28`;
```

## frontmatter

Original file: `src/pages/tutorials/getting-started/browser-tools.vue`

```js
const frontmatter = {
	title: 'Browser Developer Tools',
	description:
		'Learn how to use browser developer tools to inspect, debug, and test web pages.',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'browser developer tools'],
};
```

## frontmatter

Original file: `src/pages/tutorials/getting-started/dev-environment.vue`

```js
const frontmatter = {
	title: 'Setting Up Your Development Environment',
	description: 'Learn how to set up your development environment',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'development environment'],
};
```

## closureKeyTakeaways

Original file: `src/pages/tutorials/getting-started/how-internet-works.vue`

```js
const closureKeyTakeaways = [
	'The internet is a network of networks where data travels in packets between IP addresses',
	'DNS is the internet\'s phonebook - converting memorable domain names into computer-readable IP addresses',
	'HTTP transfers data while HTTPS adds encryption for security (always use HTTPS for sensitive data!)',
	'Web servers are always listening, waiting to process your requests and send back responses',
	'Every website interaction involves: DNS lookup \u2192 Connect to IP \u2192 HTTP request \u2192 Server processing \u2192 Response delivery',
];
```

## closureObjectives

Original file: `src/pages/tutorials/getting-started/how-internet-works.vue`

```js
const closureObjectives = [
	'Explain how data travels using packets and IP addresses',
	'Describe the DNS lookup process',
	'Identify HTTP vs HTTPS differences',
	'Understand how servers work',
];
```

## closureReflectionPrompts

Original file: `src/pages/tutorials/getting-started/how-internet-works.vue`

```js
const closureReflectionPrompts = [
	{
		title: '\ud83d\udcad Reflection Questions',
		questions: [
			'What surprised you most about how the internet works?',
			'How will understanding DNS help you as a web developer?',
			'Why is HTTPS more important today than ever?',
			'If you had to explain the internet to someone, what analogy would you use?',
		],
	},
];
```

## frontmatter

Original file: `src/pages/tutorials/getting-started/text-editors.vue`

```js
const frontmatter = {
	title: 'Text Editors',
	description:
		'Learn about different text editors for web development and how to choose the right one for your needs.',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'text editors'],
};
```

## frontmatter

Original file: `src/pages/tutorials/getting-started/web-basics.vue`

```js
const frontmatter = {
	title: 'Web Basics',
	description: 'Learn the basics of web development',
	author: 'Helen Burgess',
	date: '2024-03-20',
	tags: ['web development', 'beginner', 'web basics'],
	duration: '20 minutes',
	difficulty: 'beginner',
};
```

## frontmatter

Original file: `src/pages/tutorials/intermediate/git-basics/introduction.vue`

```js
const frontmatter = {
  title: 'Introduction to Git',
  description: 'Learn the basics of Git version control system',
  category: 'Git Basics',
  level: 'Beginner',
  order: 3,
  tags: ['git', 'version control', 'tutorial', 'beginner'],
  lastUpdated: '2025-05-12',
};
```

## allQuizzes

Original file: `src/utils/quizUtils.js`

```js
const allQuizzes = {
	...htmlBasicsQuizzes,
	...cssBasicsQuizzes,
	...javascriptBasicsQuizzes,
	...domBasicsQuizzes,
	...gitBasicsQuizzes
};
```

## javascriptBasicsQuizzes

Original file: `src/utils/quizUtils.js`

```js
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
```
