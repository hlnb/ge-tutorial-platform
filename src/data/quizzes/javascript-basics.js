export default {
  introduction: {
    questions: [
      {
        question: "What is JavaScript primarily used for in web development?",
        options: [
          "Making websites interactive",
          "Styling web pages",
          "Creating page structure",
          "Managing databases"
        ],
        correctAnswer: 0,
        explanation: "JavaScript is primarily used to make websites interactive by handling user interactions and dynamic content updates."
      },
      {
        question: "Which tag is used to include external JavaScript files in HTML?",
        options: [
          "<javascript>",
          "<js>",
          "<script>",
          "<code>"
        ],
        correctAnswer: 2,
        explanation: "The <script> tag is used to include JavaScript files in HTML documents."
      },
      {
        question: "Where is the browser console typically found?",
        options: [
          "In a separate window",
          "In the browser's Developer Tools",
          "In the browser's settings",
          "In the browser's history"
        ],
        correctAnswer: 1,
        explanation: "The browser console is found in the Developer Tools, which can be opened using F12 or right-click > Inspect."
      }
    ]
  },
  "variables-data-types": {
    questions: [
      {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: [
          "var",
          "let",
          "const",
          "static"
        ],
        correctAnswer: 2,
        explanation: "const is used to declare variables whose values cannot be changed after initialization."
      },
      {
        question: "What is the result of typeof 'Hello'?",
        options: [
          "text",
          "String",
          "string",
          "char"
        ],
        correctAnswer: 2,
        explanation: "The typeof operator returns 'string' for string values in JavaScript."
      },
      {
        question: "Which of these is a valid way to create an array in JavaScript?",
        options: [
          "array(1, 2, 3)",
          "[1, 2, 3]",
          "Array.create(1, 2, 3)",
          "{1, 2, 3}"
        ],
        correctAnswer: 1,
        explanation: "Square brackets [] are used to create arrays in JavaScript."
      }
    ]
  },
  operators: {
    questions: [
      {
        question: "What is the difference between == and === in JavaScript?",
        options: [
          "They are the same",
          "=== checks both value and type, == only checks value",
          "== is invalid in JavaScript",
          "=== is only for strings"
        ],
        correctAnswer: 1,
        explanation: "=== is the strict equality operator that checks both value and type, while == only checks value and performs type coercion."
      },
      {
        question: "What does the + operator do when used with strings?",
        options: [
          "Adds numbers within the strings",
          "Concatenates the strings",
          "Throws an error",
          "Converts strings to numbers"
        ],
        correctAnswer: 1,
        explanation: "The + operator concatenates (joins) strings when used with string values."
      },
      {
        question: "What is the result of 5 + '3' in JavaScript?",
        options: [
          "8",
          "'53'",
          "Error",
          "undefined"
        ],
        correctAnswer: 1,
        explanation: "When + is used with a number and string, JavaScript converts the number to a string and performs concatenation."
      }
    ]
  },
  conditionals: {
    questions: [
      {
        question: "Which statement is used to execute different code based on a condition?",
        options: [
          "switch",
          "if",
          "while",
          "for"
        ],
        correctAnswer: 1,
        explanation: "The if statement is used to execute code conditionally based on whether a condition is true or false."
      },
      {
        question: "What is the purpose of the else statement?",
        options: [
          "To end an if statement",
          "To check another condition",
          "To execute code when the if condition is false",
          "To skip the next line of code"
        ],
        correctAnswer: 2,
        explanation: "The else statement provides an alternative code block to execute when the if condition is false."
      },
      {
        question: "When should you use a switch statement instead of if/else?",
        options: [
          "When checking multiple conditions",
          "When comparing a single value against multiple possible values",
          "When using loops",
          "When working with arrays"
        ],
        correctAnswer: 1,
        explanation: "Switch statements are best used when comparing a single value against multiple possible values."
      }
    ]
  },
  loops: {
    questions: [
      {
        question: "Which loop is best for iterating over array elements?",
        options: [
          "while loop",
          "for...in loop",
          "for...of loop",
          "do...while loop"
        ],
        correctAnswer: 2,
        explanation: "The for...of loop is specifically designed for iterating over array elements and other iterable objects."
      },
      {
        question: "What happens if you forget to include the increment expression in a for loop?",
        options: [
          "The loop runs once",
          "The loop never runs",
          "The loop might run infinitely",
          "JavaScript adds it automatically"
        ],
        correctAnswer: 2,
        explanation: "Without an increment expression, the loop condition might never become false, causing an infinite loop."
      },
      {
        question: "What is the key difference between while and do...while loops?",
        options: [
          "while loops are faster",
          "do...while always executes at least once",
          "while loops can only use numbers",
          "do...while can only run 10 times"
        ],
        correctAnswer: 1,
        explanation: "A do...while loop always executes its code block at least once before checking the condition."
      },
      {
        question: "When should you use a for...in loop?",
        options: [
          "For iterating over array indices",
          "For iterating over object properties",
          "For counting numbers",
          "For string manipulation"
        ],
        correctAnswer: 1,
        explanation: "The for...in loop is designed to iterate over the enumerable properties of an object."
      },
      {
        question: "What does the continue statement do in a loop?",
        options: [
          "Exits the loop completely",
          "Pauses the loop for a moment",
          "Skips to the next iteration",
          "Restarts the loop from the beginning"
        ],
        correctAnswer: 2,
        explanation: "The continue statement skips the rest of the current iteration and moves to the next one."
      },
      {
        question: "Which type of loop would be best for processing user input until they type 'quit'?",
        options: [
          "for loop",
          "for...of loop",
          "while loop",
          "for...in loop"
        ],
        correctAnswer: 2,
        explanation: "A while loop is ideal when you don't know how many iterations will be needed, like waiting for specific user input."
      },
      {
        question: "What is the purpose of the break statement in a loop?",
        options: [
          "To exit the loop immediately",
          "To skip the current iteration",
          "To pause the loop execution",
          "To reset the loop counter"
        ],
        correctAnswer: 0,
        explanation: "The break statement immediately terminates the loop and continues with the code after the loop."
      },
      {
        question: "Which loop type is best when you know the exact number of iterations needed?",
        options: [
          "while loop",
          "for loop",
          "do...while loop",
          "for...in loop"
        ],
        correctAnswer: 1,
        explanation: "The for loop is ideal when you know exactly how many times you need to iterate, as it combines initialization, condition, and increment in one line."
      }
    ]
  },
  functions: {
    questions: [
      {
        question: "What is the correct way to declare a function in JavaScript?",
        options: [
          "func myFunction() {}",
          "function: myFunction() {}",
          "function myFunction() {}",
          "def myFunction() {}"
        ],
        correctAnswer: 2,
        explanation: "Functions are declared using the 'function' keyword followed by the function name and parentheses."
      },
      {
        question: "What is the purpose of the return statement in a function?",
        options: [
          "To end the function execution",
          "To send a value back to where the function was called",
          "To print a value to the console",
          "To declare a variable"
        ],
        correctAnswer: 1,
        explanation: "The return statement sends a value back to the code that called the function and ends the function execution."
      },
      {
        question: "Which is a valid arrow function syntax?",
        options: [
          "function => (x) { return x * 2; }",
          "const double => (x) { return x * 2; }",
          "const double = (x) => x * 2;",
          "const double = x => { x * 2 }"
        ],
        correctAnswer: 2,
        explanation: "Arrow functions use => syntax and can have an implicit return when the body is a single expression."
      },
      {
        question: "What happens to variables declared inside a function?",
        options: [
          "They can be accessed anywhere in the code",
          "They only exist while the function is running",
          "They are automatically global variables",
          "They persist between function calls"
        ],
        correctAnswer: 1,
        explanation: "Variables declared inside a function have function scope and are only accessible within that function."
      },
      {
        question: "What is a callback function?",
        options: [
          "A function that calls itself",
          "A function passed as an argument to another function",
          "A function that returns another function",
          "A function that only runs once"
        ],
        correctAnswer: 1,
        explanation: "A callback function is a function passed as an argument to another function, to be executed later."
      },
      {
        question: "What is the difference between parameters and arguments?",
        options: [
          "They are the same thing",
          "Parameters are in the function definition, arguments are the values passed when calling",
          "Arguments are in the function definition, parameters are the values passed when calling",
          "Parameters are only for arrow functions"
        ],
        correctAnswer: 1,
        explanation: "Parameters are placeholders in the function definition, while arguments are the actual values passed when calling the function."
      }
    ]
  }
} 