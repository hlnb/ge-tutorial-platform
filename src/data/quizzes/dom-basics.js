/**
 * Quiz questions for DOM Basics tutorials
 * Each tutorial has its own set of questions
 */

export const domBasicsQuizzes = {
    // Introduction quiz
    'introduction': [
        {
            text: 'What does DOM stand for in web development?',
            options: [
                'Document Object Management',
                'Document Oriented Model',
                'Document Object Model',
                'Digital Object Management'
            ],
            correctAnswer: 2,
            explanation: 'DOM stands for Document Object Model, which represents the HTML document as a tree structure of objects.'
        },
        {
            text: 'Which method is used to select a single element by its ID?',
            options: [
                'document.querySelector()',
                'document.getElementsByClassName()',
                'document.getElementById()',
                'document.getElementByName()'
            ],
            correctAnswer: 2,
            explanation: 'document.getElementById() is specifically designed to select a single element using its unique ID attribute.'
        },
        {
            text: 'What is the correct way to access the text content of an element?',
            options: [
                'element.text',
                'element.content',
                'element.textContent',
                'element.innerHTML'
            ],
            correctAnswer: 2,
            explanation: 'element.textContent is the proper way to access or modify the text content of an element.'
        },
        {
            text: 'Which property is used to change the CSS style of an element using JavaScript?',
            options: [
                'element.css',
                'element.style',
                'element.stylesheet',
                'element.design'
            ],
            correctAnswer: 1,
            explanation: 'The style property is used to access and modify the CSS styles of an element directly through JavaScript.'
        },
        {
            text: 'What is the difference between innerHTML and textContent?',
            options: [
                'They are exactly the same',
                'innerHTML can contain HTML tags, textContent treats everything as text',
                'textContent can contain HTML tags, innerHTML treats everything as text',
                'They are both used only for styling elements'
            ],
            correctAnswer: 1,
            explanation: 'innerHTML can render HTML tags as actual elements, while textContent treats everything as plain text, including HTML tags.'
        }
    ],

    // Arrays quiz
    'arrays': [
        {
            text: 'Which method is used to select multiple elements with the same class name?',
            options: [
                'document.getElementByClass()',
                'document.querySelector()',
                'document.getElementsByClassName()',
                'document.selectAllByClass()'
            ],
            correctAnswer: 2,
            explanation: 'getElementsByClassName() returns a live HTMLCollection of elements with the specified class name.'
        },
        {
            text: 'What type of object is returned by querySelectorAll()?',
            options: [
                'Array',
                'HTMLCollection',
                'NodeList',
                'Object'
            ],
            correctAnswer: 2,
            explanation: 'querySelectorAll() returns a static NodeList containing all elements that match the specified CSS selector.'
        },
        {
            text: 'How do you convert a NodeList to an Array?',
            options: [
                'NodeList.toArray()',
                'Array.from(NodeList)',
                'NodeList.convertToArray()',
                'new Array(NodeList)'
            ],
            correctAnswer: 1,
            explanation: 'Array.from() is a method that creates a new Array from an array-like object like a NodeList.'
        },
        {
            text: 'Which array method is used to execute a function on each element?',
            options: [
                'map()',
                'forEach()',
                'filter()',
                'reduce()'
            ],
            correctAnswer: 1,
            explanation: 'forEach() executes a provided function once for each array element in ascending order.'
        },
        {
            text: 'What is the main difference between an HTMLCollection and a NodeList?',
            options: [
                'They are exactly the same',
                'HTMLCollection is live, NodeList is static',
                'NodeList is live, HTMLCollection is static',
                'Both are always static'
            ],
            correctAnswer: 1,
            explanation: 'An HTMLCollection is live, meaning it automatically updates when the DOM changes, while a NodeList is typically static (except for some cases like childNodes).'
        }
    ],
    
    // DOM Manipulation quiz
    'dom-manipulation': [
        {
            text: 'Which method is used to create a new HTML element?',
            options: [
                'document.createNode()',
                'document.createElement()',
                'document.addElement()',
                'document.makeElement()'
            ],
            correctAnswer: 1,
            explanation: 'document.createElement() is the correct method to create a new HTML element that can be added to the DOM.'
        },
        {
            text: 'How do you add a new element as a child of another element?',
            options: [
                'parent.appendChild(child)',
                'parent.addChild(child)',
                'parent.insert(child)',
                'parent.append = child'
            ],
            correctAnswer: 0,
            explanation: 'appendChild() is a method that adds a node to the end of the list of children of a specified parent node.'
        },
        {
            text: 'What is the difference between textContent and innerHTML?',
            options: [
                'They are identical and can be used interchangeably',
                'textContent is faster and more secure than innerHTML',
                'innerHTML allows you to insert HTML while textContent only inserts text',
                'textContent can parse HTML, innerHTML cannot'
            ],
            correctAnswer: 2,
            explanation: 'innerHTML parses content as HTML and takes longer to process, while textContent treats content as plain text and is more efficient and secure.'
        },
        {
            text: 'Which of these DOM traversal properties returns the parent element?',
            options: [
                'element.child',
                'element.sibling',
                'element.parent',
                'element.parentNode'
            ],
            correctAnswer: 3,
            explanation: 'parentNode property returns the parent of the specified node in the DOM tree.'
        },
        {
            text: 'What method is used to remove an element from the DOM?',
            options: [
                'element.delete()',
                'element.remove()',
                'document.removeElement(element)',
                'element.parentNode.removeChild(element)'
            ],
            correctAnswer: 1,
            explanation: 'The remove() method removes the element from the DOM. The parentNode.removeChild() method is an older alternative.'
        },
        {
            text: 'How do you modify an element\'s CSS class?',
            options: [
                'element.style.class = "new-class"',
                'element.class = "new-class"',
                'element.className = "new-class"',
                'element.cssClass = "new-class"'
            ],
            correctAnswer: 2,
            explanation: 'The className property sets or returns the class attribute of an element. Modern applications might also use element.classList methods.'
        },
        {
            text: 'Which method is used to set an attribute on an element?',
            options: [
                'element.addAttribute(name, value)',
                'element.setAttribute(name, value)',
                'element.setAttr(name, value)',
                'element.attribute(name, value)'
            ],
            correctAnswer: 1,
            explanation: 'setAttribute() adds a new attribute or changes the value of an existing attribute on the specified element.'
        }
    ]
}; 