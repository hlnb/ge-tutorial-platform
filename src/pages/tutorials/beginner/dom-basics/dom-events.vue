<template>
  <div class="tutorial-container">
    <!-- Add breadcrumb navigation -->
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li><router-link to="/tutorials/beginner/dom-basics">DOM Basics</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">Event Handling</a>
        </li>
      </ul>
    </nav>

    <div class="tutorial-content">
      <h1 class="title is-1">
        <i class="fas fa-mouse-pointer"></i> DOM Events
      </h1>
      
      <section id="what-are-events">
        <h2>What Are Events?</h2>
        <p>
          Events are the foundation of interactivity on the web. They represent actions or occurrences that happen in your web page,
          such as a user clicking a button, typing in a text field, or resizing a window. Think of events as signals that something
          has happened, and event handlers as the code that responds to these signals.
        </p>

        <div class="info-box">
          <h3>Key Concepts:</h3>
          <ul>
            <li><strong>Event:</strong> An action or occurrence that happens in your web page</li>
            <li><strong>Event Handler:</strong> A function that runs when an event occurs</li>
            <li><strong>Event Listener:</strong> The mechanism that connects events to their handlers</li>
            <li><strong>Event Object:</strong> Contains information about the event that occurred</li>
          </ul>
        </div>

        <div class="example-container">
          <div class="code-example">
            <pre><code>
// Basic event handling structure
element.addEventListener('eventName', function(event) {
    // This is the event handler
    // 'event' is the event object
    // Your code here
});
            </code></pre>
            <div class="code-explanation">
              <p>This basic structure shows how events work:</p>
              <ul>
                <li><code>element:</code> The DOM element you want to listen to</li>
                <li><code>addEventListener:</code> The method that connects events to handlers</li>
                <li><code>'eventName':</code> The type of event to listen for</li>
                <li><code>function(event):</code> The handler that runs when the event occurs</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Why Are Events Important?</h3>
        <p>
          Events are crucial for creating interactive web applications because they:
        </p>
        <ul>
          <li>Enable user interaction with web pages</li>
          <li>Allow dynamic content updates without page reloads</li>
          <li>Make web applications feel responsive and engaging</li>
          <li>Enable real-time features like chat, notifications, and live updates</li>
        </ul>

        <div class="info-box">
          <h3>Common Event Categories:</h3>
          <ul>
            <li><strong>User Interface Events:</strong> Click, hover, scroll, resize</li>
            <li><strong>Form Events:</strong> Submit, input, change, focus</li>
            <li><strong>Keyboard Events:</strong> Key press, key down, key up</li>
            <li><strong>Document Events:</strong> Load, unload, DOM content loaded</li>
            <li><strong>Touch Events:</strong> Touch start, touch move, touch end</li>
          </ul>
        </div>

        <h3>Event Flow in the DOM</h3>
        <p>
          When an event occurs, it follows a specific path through the DOM tree:
        </p>
        <ol>
          <li>The event starts at the target element (where the action occurred)</li>
          <li>It then bubbles up through parent elements (event bubbling)</li>
          <li>It can also be captured on the way down (event capturing)</li>
          <li>Event handlers can stop this flow using methods like <code>stopPropagation()</code></li>
        </ol>
      </section>

      <section id="first-event-example">
        <h2>Your First Event Handler</h2>
        <p>
          Let's start with a simple example to see how events work in practice. We'll create a button that responds
          to clicks and updates some text on the page. This demonstrates the basic structure of event handling:
          selecting an element, adding an event listener, and responding to the event.
        </p>
        <div class="example-container">
          <div class="interactive-demo">
            <button id="clickMeBtn" class="demo-button">Click Me!</button>
            <p id="clickResult" class="result-text">Click the button to see what happens!</p>
          </div>
          <div class="code-example">
            <pre><code>
// Adding a click event listener
const button = document.getElementById('clickMeBtn');
const result = document.getElementById('clickResult');

button.addEventListener('click', function() {
    result.textContent = 'Button clicked! 🎉';
    setTimeout(() => {
        result.textContent = 'Click the button to see what happens!';
    }, 2000);
});
            </code></pre>
            <div class="code-explanation">
              <p>This example shows the basic components of event handling:</p>
              <ul>
                <li>Select the element you want to interact with using <code>getElementById()</code></li>
                <li>Add an event listener using <code>addEventListener()</code></li>
                <li>Define what happens when the event occurs in the handler function</li>
                <li>Update the DOM to show the result of the interaction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="event-types">
        <h2>Interactive Event Examples</h2>
        <p>
          Let's explore different types of events through an interactive demonstration. This example shows how various
          events work in practice, from mouse movements to keyboard input. Try interacting with the elements below
          to see how different events are triggered and handled.
        </p>
        <div class="interactive-demo">
          <div id="eventTypesDemo" class="demo-box">
            <input type="text" id="textInput" placeholder="Type something...">
            <div id="mouseArea" class="mouse-area">
              Move your mouse here
            </div>
            <p id="eventResult">Events will be shown here</p>
          </div>
        </div>
        
        <div class="code-example mt-4">
          <h3>Event Categories Overview</h3>
          <p>
            Here's a comprehensive list of the most commonly used event categories in web development:
          </p>
          <ul class="event-categories">
            <li><strong>Mouse Events:</strong> click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave</li>
            <li><strong>Keyboard Events:</strong> keydown, keyup, keypress</li>
            <li><strong>Form Events:</strong> submit, change, input, focus, blur</li>
            <li><strong>Document Events:</strong> DOMContentLoaded, load, unload</li>
            <li><strong>Touch Events:</strong> touchstart, touchmove, touchend</li>
          </ul>
          <div class="code-explanation">
            <p>In the demo above, we're handling several types of events:</p>
            <ul>
              <li><code>input</code> event on the text field to show typing</li>
              <li><code>mousemove</code> event to track mouse position</li>
              <li><code>mouseenter</code> and <code>mouseleave</code> for hover effects</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="event-propagation">
        <h2>Event Propagation</h2>
        <p>
          Remember how we discussed event flow in the DOM earlier? Event propagation is the mechanism that makes this flow possible.
          When an event occurs, it doesn't just affect the element where it happened - it follows a specific path through the DOM tree.
        </p>

        <div class="info-box">
          <h3>Event Flow Phases:</h3>
          <ol>
            <li><strong>Capturing Phase:</strong> The event travels down from the root to the target element</li>
            <li><strong>Target Phase:</strong> The event reaches the target element</li>
            <li><strong>Bubbling Phase:</strong> The event bubbles up from the target back to the root</li>
          </ol>
        </div>

        <div class="event-bubbling-diagram">
          <img src="/images/event-bubbling.svg" alt="Event Bubbling Diagram" class="bubbling-image">
          <div class="diagram-explanation">
            <p>In this diagram:</p>
            <ol>
              <li>User clicks the innermost element (Target)</li>
              <li>Event bubbles up through each parent element</li>
              <li>Each parent's click handler is triggered in sequence</li>
              <li>Use <code>stopPropagation()</code> to prevent further bubbling</li>
            </ol>
            <div class="code-explanation">
              <p>By default, event listeners are registered in the bubbling phase. To register in the capturing phase:</p>
              <pre><code>
element.addEventListener('click', handler, true); // Capturing phase
element.addEventListener('click', handler, false); // Bubbling phase (default)
              </code></pre>
            </div>
          </div>
        </div>

        <div class="interactive-demo">
          <div id="propagationDemo" class="propagation-box">
            <div class="outer-box">
              <div class="middle-box">
                <div class="inner-box">
                  Click anywhere to see event propagation
                </div>
              </div>
            </div>
            <div id="propagationResult" class="propagation-result"></div>
          </div>
        </div>

        <div class="code-example mt-4">
          <pre><code>
// Event propagation example
const boxes = document.querySelectorAll('.propagation-box div');
boxes.forEach(box => {
  box.addEventListener('click', (e) => {
    // Stop propagation at any level
    // e.stopPropagation();
    console.log(`${box.className} clicked`);
  });
});
          </code></pre>
          <div class="code-explanation">
            <p>This code demonstrates event bubbling:</p>
            <ul>
              <li>We attach click listeners to all nested boxes</li>
              <li>When you click the inner box, events trigger in this order:</li>
              <ol>
                <li>inner-box clicked</li>
                <li>middle-box clicked</li>
                <li>outer-box clicked</li>
              </ol>
              <li>Uncomment <code>e.stopPropagation()</code> to prevent bubbling</li>
            </ul>
            <div class="info-box">
              <h4>Common Use Cases for stopPropagation():</h4>
              <ul>
                <li>Preventing form submission when clicking a cancel button</li>
                <li>Stopping click events from triggering parent handlers</li>
                <li>Controlling event flow in complex UI components</li>
                <li>Optimizing event handling in nested structures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="keyboard-events">
        <h2>Keyboard Events</h2>
        <p>
          Keyboard events are essential for handling user input and creating interactive experiences. They allow you to
          respond to key presses, combinations, and special keys. Understanding keyboard events is crucial for building
          forms, games, and keyboard shortcuts.
        </p>

        <div class="info-box">
          <h3>Keyboard Event Types:</h3>
          <ul>
            <li><strong>keydown:</strong> Fires when a key is first pressed down (before character is generated)</li>
            <li><strong>keypress:</strong> Fires when a character is generated (after keydown)</li>
            <li><strong>keyup:</strong> Fires when a key is released</li>
          </ul>
          <p class="mt-2">
            <strong>Note:</strong> The order of events is: keydown → keypress → keyup
          </p>
        </div>

        <div class="interactive-demo">
          <div id="keyboardDemo" class="keyboard-demo">
            <h3>Keyboard Event Demo</h3>
            <div class="demo-section">
              <h4>Basic Key Events</h4>
              <input type="text" id="keyboardInput" placeholder="Type to see keyboard events...">
              <div id="keyboardResult" class="keyboard-result"></div>
            </div>

            <div class="demo-section">
              <h4>Key Information</h4>
              <div class="keyboard-info">
                <p>Last Key: <span id="lastKey">-</span></p>
                <p>Key Code: <span id="keyCode">-</span></p>
                <p>Modifier Keys: <span id="modifierKeys">-</span></p>
              </div>
            </div>

            <div class="demo-section">
              <h4>Special Keys Demo</h4>
              <div class="special-keys">
                <p>Try these special keys:</p>
                <ul>
                  <li>Arrow keys (↑, ↓, ←, →)</li>
                  <li>Function keys (F1-F12)</li>
                  <li>Enter, Space, Tab</li>
                  <li>Escape, Backspace, Delete</li>
                </ul>
                <div id="specialKeyResult" class="special-key-result"></div>
              </div>
            </div>

            <div class="demo-section">
              <h4>Keyboard Shortcuts</h4>
              <p>Try these combinations:</p>
              <ul>
                <li>Ctrl + S (Save)</li>
                <li>Ctrl + C (Copy)</li>
                <li>Ctrl + V (Paste)</li>
                <li>Ctrl + Z (Undo)</li>
              </ul>
              <div id="shortcutResult" class="shortcut-result"></div>
            </div>
          </div>
        </div>

        <div class="code-example mt-4">
          <h3>Keyboard Event Properties</h3>
          <p>
            Each keyboard event provides useful properties to help you understand what happened:
          </p>
          <ul class="event-properties">
            <li><code>key:</code> The actual character or key name (e.g., "a", "Enter", "ArrowUp")</li>
            <li><code>keyCode:</code> The numeric code for the key (deprecated, use code instead)</li>
            <li><code>code:</code> The physical key on the keyboard (e.g., "KeyA", "Enter", "ArrowUp")</li>
            <li><code>ctrlKey, shiftKey, altKey, metaKey:</code> Boolean values for modifier keys</li>
            <li><code>repeat:</code> Boolean indicating if the key is being held down</li>
          </ul>

          <div class="code-example">
            <pre><code>
// Basic keyboard event handling
input.addEventListener('keydown', (e) => {
  // Prevent default behavior (e.g., form submission)
  if (e.key === 'Enter') {
    e.preventDefault();
  }
  
  // Check for modifier keys
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('Save shortcut pressed!');
  }
  
  // Handle special keys
  if (e.code.startsWith('Arrow')) {
    console.log('Arrow key pressed:', e.key);
  }
});
            </code></pre>
            <div class="code-explanation">
              <p>This code demonstrates common keyboard event patterns:</p>
              <ul>
                <li>Preventing default browser behavior</li>
                <li>Handling keyboard shortcuts</li>
                <li>Detecting special keys</li>
                <li>Using modern key properties</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="info-box">
          <h3>Best Practices for Keyboard Events:</h3>
          <ul>
            <li>Use <code>key</code> for character input, <code>code</code> for physical keys</li>
            <li>Always prevent default behavior when handling shortcuts</li>
            <li>Consider accessibility by supporting keyboard navigation</li>
            <li>Handle both keydown and keyup for complex interactions</li>
            <li>Remember that modifier keys can be combined</li>
          </ul>
        </div>
      </section>

      <section id="touch-events">
        <h2>Touch Events</h2>
        <p>
          Touch events are crucial for mobile web applications. They provide a way to handle touch interactions
          on touch-enabled devices. The main touch events are:
        </p>
        <ul>
          <li><strong>touchstart:</strong> Fires when a touch point is placed on the touch surface</li>
          <li><strong>touchmove:</strong> Fires when a touch point moves along the surface</li>
          <li><strong>touchend:</strong> Fires when a touch point is removed from the surface</li>
        </ul>
        <p>
          Touch events provide detailed information about the touch points:
        </p>
        <ul>
          <li><code>touches:</code> Array of all current touch points</li>
          <li><code>clientX/clientY:</code> Coordinates relative to the viewport</li>
          <li><code>targetTouches:</code> Array of touches that started on the current element</li>
        </ul>

        <div class="info-box">
          <h3>Device Compatibility</h3>
          <p>
            <strong>Important:</strong> Touch events only work on touch-enabled devices (mobile phones, tablets, touch screens).
            If you're viewing this on a desktop computer without a touch screen, you won't be able to interact with the demo below.
          </p>
        </div>

        <div class="interactive-demo">
          <div id="touchDemo" class="touch-demo">
            <div class="touch-area">
              <div id="touchDeviceMessage" class="touch-device-message">
                Touch and drag here
              </div>
              <div id="nonTouchDeviceMessage" class="non-touch-device-message">
                This demo requires a touch-enabled device
              </div>
            </div>
            <div id="touchResult" class="touch-result"></div>
          </div>
        </div>

        <div class="code-example mt-4">
          <h3>Detecting Touch Support</h3>
          <p>
            You can detect if a device supports touch events using the following code:
          </p>
          <pre><code>
// Check if device supports touch events
if ('ontouchstart' in window) {
  console.log('Device supports touch events');
} else {
  console.log('Device does not support touch events');
}

// Alternative method
if (window.TouchEvent) {
  console.log('Device supports touch events');
} else {
  console.log('Device does not support touch events');
}
          </code></pre>
          <div class="code-explanation">
            <p>This code helps you:</p>
            <ul>
              <li>Detect if the current device supports touch events</li>
              <li>Provide appropriate fallbacks for non-touch devices</li>
              <li>Ensure your application works across different devices</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="error-handling">
        <h2>Error Handling in Events</h2>
        <p>
          Proper error handling in event listeners is crucial for creating robust applications.
          It helps prevent crashes, provides meaningful feedback to users, and makes debugging easier.
        </p>

        <div class="info-box">
          <h3>Why Error Handling is Important:</h3>
          <ul>
            <li>Prevents application crashes from unhandled errors</li>
            <li>Provides user-friendly error messages</li>
            <li>Helps with debugging and maintenance</li>
            <li>Maintains application state even when errors occur</li>
            <li>Improves user experience by handling edge cases gracefully</li>
          </ul>
        </div>

        <div class="interactive-demo">
          <div id="errorDemo" class="error-demo">
            <h3>Error Handling Examples</h3>
            
            <div class="demo-section">
              <h4>Basic Error Handling</h4>
              <button id="errorButton" class="demo-button">Trigger Basic Error</button>
              <div id="errorResult" class="error-result"></div>
            </div>

            <div class="demo-section">
              <h4>Async Operation Error</h4>
              <button id="asyncErrorButton" class="demo-button">Trigger Async Error</button>
              <div id="asyncErrorResult" class="error-result"></div>
            </div>

            <div class="demo-section">
              <h4>Form Validation Error</h4>
              <div class="form-group">
                <input type="number" id="ageInput" placeholder="Enter age (1-100)">
                <button id="validateButton" class="demo-button">Validate</button>
              </div>
              <div id="validationErrorResult" class="error-result"></div>
            </div>
          </div>
        </div>

        <div class="code-example mt-4">
          <h3>Error Handling Patterns</h3>
          <p>
            Here are common patterns for handling errors in event listeners:
          </p>

          <div class="code-example">
            <pre><code>
// 1. Basic try-catch with error logging
button.addEventListener('click', (e) => {
  try {
    // Simulate an error
    throw new Error('Something went wrong!');
  } catch (error) {
    console.error('Error caught:', error);
    errorResult.textContent = `Error: ${error.message}`;
  }
});

// 2. Async error handling
asyncButton.addEventListener('click', async (e) => {
  try {
    const result = await fetchData();
    // Handle success
  } catch (error) {
    console.error('Async error:', error);
    asyncErrorResult.textContent = `Failed to fetch data: ${error.message}`;
  }
});

// 3. Custom error types
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

validateButton.addEventListener('click', (e) => {
  try {
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 1 || age > 100) {
      throw new ValidationError('Age must be between 1 and 100');
    }
    validationErrorResult.textContent = 'Valid age!';
    validationErrorResult.style.backgroundColor = '#e8f5e9';
    validationErrorResult.style.color = '#2e7d32';
  } catch (error) {
    if (error instanceof ValidationError) {
      validationErrorResult.textContent = `Validation Error: ${error.message}`;
      validationErrorResult.style.backgroundColor = '#ffebee';
      validationErrorResult.style.color = '#c62828';
    } else {
      validationErrorResult.textContent = `Unexpected Error: ${error.message}`;
      validationErrorResult.style.backgroundColor = '#ffebee';
      validationErrorResult.style.color = '#c62828';
    }
  }
});
            </code></pre>
            <div class="code-explanation">
              <p>This code demonstrates three common error handling patterns:</p>
              <ul>
                <li><strong>Basic Error Handling:</strong> Using try-catch with error logging</li>
                <li><strong>Async Error Handling:</strong> Handling errors in asynchronous operations</li>
                <li><strong>Custom Error Types:</strong> Creating and handling specific error types</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="info-box">
          <h3>Best Practices for Error Handling:</h3>
          <ul>
            <li>Always use try-catch blocks for potentially risky operations</li>
            <li>Log errors to console for debugging purposes</li>
            <li>Show user-friendly error messages</li>
            <li>Use custom error types for specific error cases</li>
            <li>Handle async errors with try-catch and async/await</li>
            <li>Clean up resources in finally blocks when necessary</li>
            <li>Don't swallow errors unless absolutely necessary</li>
          </ul>
        </div>
      </section>

      <section id="performance">
        <h2>Performance Optimization</h2>
        <p>
          Optimizing event handling is crucial for smooth user experiences, especially in complex applications.
          Here are key techniques and considerations:
        </p>

        <div class="info-box">
          <h3>Browser Compatibility & Performance</h3>
          <ul>
            <li>Event delegation works in all modern browsers (IE9+)</li>
            <li>Passive event listeners are supported in modern browsers</li>
            <li>requestAnimationFrame has good browser support (IE10+)</li>
            <li>Touch events are supported on all modern mobile browsers</li>
            <li>Performance monitoring tools vary by browser</li>
          </ul>
        </div>

        <div class="interactive-demo">
          <div id="performanceDemo" class="performance-demo">
            <h3>Performance Examples</h3>
            
            <div class="demo-section">
              <h4>Event Throttling</h4>
              <div class="scroll-area">
                <p>Scroll to see throttled event handling in action</p>
                <div id="throttleResult" class="performance-result"></div>
              </div>
            </div>

            <div class="demo-section">
              <h4>Event Delegation</h4>
              <div class="delegation-demo">
                <button id="addItemBtn" class="demo-button">Add Item</button>
                <ul id="delegationList" class="demo-list">
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
                <div id="delegationResult" class="performance-result"></div>
              </div>
            </div>

            <div class="demo-section">
              <h4>Performance Monitoring</h4>
              <div class="monitoring-demo">
                <button id="startMonitoring" class="demo-button">Start Monitoring</button>
                <button id="stopMonitoring" class="demo-button">Stop Monitoring</button>
                <div id="monitoringResult" class="performance-result"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-example mt-4">
          <h3>Performance Optimization Patterns</h3>
          <div class="code-example">
            <pre><code>
// 1. Event Throttling
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function(...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// 2. Event Delegation with Accessibility
const list = document.getElementById('delegationList');
list?.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.matches('li')) {
    // Handle click with accessibility in mind
    target.setAttribute('aria-selected', 'true');
    target.focus();
  }
});

// 3. Performance Monitoring
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Performance:', entry);
    // Log to monitoring service
  }
});

observer.observe({ entryTypes: ['event'] });
            </code></pre>
            <div class="code-explanation">
              <p>Key performance optimization techniques:</p>
              <ul>
                <li><strong>Event Throttling:</strong> Limits event handler execution frequency</li>
                <li><strong>Event Delegation:</strong> Reduces memory usage and improves performance</li>
                <li><strong>Performance Monitoring:</strong> Tracks event handling performance</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="info-box">
          <h3>Debugging Event Performance</h3>
          <ul>
            <li>Use Chrome DevTools Performance tab to record event handling</li>
            <li>Monitor event listener count in Elements panel</li>
            <li>Use PerformanceObserver API for programmatic monitoring</li>
            <li>Check for memory leaks in Chrome DevTools Memory panel</li>
            <li>Use console.time() for quick performance measurements</li>
          </ul>
        </div>
      </section>

      <section id="form-events">
        <h2>Form Events and Validation</h2>
        <p>
          Form handling requires careful consideration of user experience, accessibility, and validation.
          Here's a comprehensive approach:
        </p>

        <div class="info-box">
          <h3>Browser Compatibility & Form Events</h3>
          <ul>
            <li>Form validation API supported in all modern browsers</li>
            <li>Custom validation messages supported in modern browsers</li>
            <li>FormData API has good browser support</li>
            <li>Some validation attributes may behave differently across browsers</li>
          </ul>
        </div>

        <div class="interactive-demo">
          <div id="formDemo" class="form-demo">
            <h3>Form Validation Examples</h3>
            
            <div class="demo-section">
              <h4>Real-time Validation</h4>
              <form id="validationForm" class="demo-form">
                <div class="form-group">
                  <label for="username">Username:</label>
                  <input type="text" id="username" required 
                         minlength="3" maxlength="20"
                         aria-describedby="username-error">
                  <div id="username-error" class="error-message" role="alert"></div>
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" required
                         aria-describedby="email-error">
                  <div id="email-error" class="error-message" role="alert"></div>
                </div>
                <button type="submit" class="demo-button">Submit</button>
                <div id="formResult" class="form-result"></div>
              </form>
            </div>

            <div class="demo-section">
              <h4>Custom Validation</h4>
              <form id="customValidationForm" class="demo-form">
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" id="password" required
                         aria-describedby="password-requirements">
                  <div id="password-requirements" class="requirements" role="status">
                    Password must contain:
                    <ul>
                      <li id="length">At least 8 characters</li>
                      <li id="uppercase">One uppercase letter</li>
                      <li id="lowercase">One lowercase letter</li>
                      <li id="number">One number</li>
                    </ul>
                  </div>
                </div>
                <button type="submit" class="demo-button">Validate Password</button>
                <div id="customValidationResult" class="form-result"></div>
              </form>
            </div>
          </div>
        </div>

        <div class="code-example mt-4">
          <h3>Form Validation Patterns</h3>
          <div class="code-example">
            <pre><code>
// 1. Real-time Validation with Accessibility
const username = document.getElementById('username') as HTMLInputElement;
const usernameError = document.getElementById('username-error');

username?.addEventListener('input', (e) => {
  const value = (e.target as HTMLInputElement).value;
  if (value.length < 3) {
    usernameError!.textContent = 'Username must be at least 3 characters';
    username.setAttribute('aria-invalid', 'true');
  } else {
    usernameError!.textContent = '';
    username.setAttribute('aria-invalid', 'false');
  }
});

// 2. Custom Validation
const password = document.getElementById('password') as HTMLInputElement;
const requirements = {
  length: document.getElementById('length'),
  uppercase: document.getElementById('uppercase'),
  lowercase: document.getElementById('lowercase'),
  number: document.getElementById('number')
};

password?.addEventListener('input', (e) => {
  const value = (e.target as HTMLInputElement).value;
  requirements.length!.classList.toggle('valid', value.length >= 8);
  requirements.uppercase!.classList.toggle('valid', /[A-Z]/.test(value));
  requirements.lowercase!.classList.toggle('valid', /[a-z]/.test(value));
  requirements.number!.classList.toggle('valid', /[0-9]/.test(value));
});

// 3. Form Submission with Validation
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  try {
    const formData = new FormData(form);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData
    });
    // Handle response
  } catch (error) {
    // Handle error
  }
});
            </code></pre>
            <div class="code-explanation">
              <p>Key form validation patterns:</p>
              <ul>
                <li><strong>Real-time Validation:</strong> Immediate feedback with accessibility support</li>
                <li><strong>Custom Validation:</strong> Complex validation rules with visual feedback</li>
                <li><strong>Form Submission:</strong> Async submission with error handling</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="info-box">
          <h3>Accessibility Best Practices for Forms</h3>
          <ul>
            <li>Use semantic HTML elements (form, label, input)</li>
            <li>Include proper ARIA attributes (aria-invalid, aria-describedby)</li>
            <li>Provide clear error messages with role="alert"</li>
            <li>Ensure keyboard navigation works properly</li>
            <li>Use proper focus management</li>
            <li>Include visible labels for all inputs</li>
            <li>Provide clear validation requirements</li>
          </ul>
        </div>
      </section>

      <section id="event-delegation">
        <h2>Event Delegation</h2>
        <p>
          Event delegation is a powerful pattern for handling events efficiently,
          especially for dynamic content. Here's a comprehensive guide:
        </p>

        <div class="info-box">
          <h3>Browser Compatibility & Event Delegation</h3>
          <ul>
            <li>Event delegation works in all modern browsers</li>
            <li>Event bubbling is consistent across browsers</li>
            <li>Some older browsers may have issues with certain event types</li>
            <li>Touch events require special handling for delegation</li>
          </ul>
        </div>

        <div class="interactive-demo">
          <div id="delegationDemo" class="delegation-demo">
            <h3>Event Delegation Examples</h3>
            
            <div class="demo-section">
              <h4>Dynamic List</h4>
              <div class="list-controls">
                <button id="addListItem" class="demo-button">Add Item</button>
                <button id="removeListItem" class="demo-button">Remove Last</button>
              </div>
              <ul id="dynamicList" class="demo-list" role="list">
                <li role="listitem">Item 1</li>
                <li role="listitem">Item 2</li>
              </ul>
              <div id="delegationResult" class="delegation-result"></div>
            </div>

            <div class="demo-section">
              <h4>Nested Elements</h4>
              <div id="nestedDemo" class="nested-demo">
                <div class="outer" role="button" tabindex="0">
                  Outer
                  <div class="middle" role="button" tabindex="0">
                    Middle
                    <div class="inner" role="button" tabindex="0">
                      Inner
                    </div>
                  </div>
                </div>
                <div id="nestedResult" class="delegation-result"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-example mt-4">
          <h3>Event Delegation Patterns</h3>
          <div class="code-example">
            <pre><code>
// 1. Basic Event Delegation
const list = document.getElementById('dynamicList');
list?.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (target.matches('li')) {
    // Handle click with accessibility
    target.setAttribute('aria-selected', 'true');
    target.focus();
  }
});

// 2. Nested Event Delegation
const nestedDemo = document.getElementById('nestedDemo');
nestedDemo?.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  const closest = target.closest('[role="button"]');
  if (closest) {
    // Handle click with event phase information
    const phase = e.eventPhase;
    const result = document.getElementById('nestedResult');
    result!.textContent = `Clicked ${closest.className} in ${phase} phase`;
  }
});

// 3. Touch Event Delegation
const touchDemo = document.getElementById('touchDemo');
touchDemo?.addEventListener('touchstart', (e) => {
  const target = e.target as HTMLElement;
  if (target.matches('.touchable')) {
    // Handle touch with proper event handling
    e.preventDefault(); // Prevent scrolling
    target.classList.add('active');
  }
}, { passive: false });
            </code></pre>
            <div class="code-explanation">
              <p>Key event delegation patterns:</p>
              <ul>
                <li><strong>Basic Delegation:</strong> Handling events on dynamic content</li>
                <li><strong>Nested Delegation:</strong> Managing event propagation</li>
                <li><strong>Touch Delegation:</strong> Special handling for touch events</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="info-box">
          <h3>Debugging Event Delegation</h3>
          <ul>
            <li>Use Chrome DevTools Elements panel to inspect event listeners</li>
            <li>Check event.target vs event.currentTarget</li>
            <li>Monitor event propagation in console</li>
            <li>Use breakpoints in event handlers</li>
            <li>Check for memory leaks with detached event listeners</li>
          </ul>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <p>
          Following best practices ensures maintainable, performant, and accessible event handling.
          Here's a comprehensive guide:
        </p>

        <div class="info-box">
          <h3>General Best Practices</h3>
          <ul>
            <li>Use semantic HTML elements</li>
            <li>Implement proper error handling</li>
            <li>Follow accessibility guidelines</li>
            <li>Consider performance implications</li>
            <li>Use TypeScript for type safety</li>
            <li>Document event handlers</li>
            <li>Test across different browsers</li>
          </ul>
        </div>

        <div class="info-box">
          <h3>Accessibility Guidelines</h3>
          <ul>
            <li>Ensure keyboard navigation works</li>
            <li>Use proper ARIA attributes</li>
            <li>Provide focus management</li>
            <li>Include screen reader support</li>
            <li>Maintain color contrast</li>
            <li>Support reduced motion</li>
            <li>Handle focus trapping when needed</li>
          </ul>
        </div>

        <div class="info-box">
          <h3>Performance Guidelines</h3>
          <ul>
            <li>Use event delegation for dynamic content</li>
            <li>Implement proper event cleanup</li>
            <li>Throttle/debounce frequent events</li>
            <li>Use passive event listeners when possible</li>
            <li>Monitor event listener count</li>
            <li>Profile event handling performance</li>
            <li>Consider memory usage</li>
          </ul>
        </div>

        <div class="info-box">
          <h3>Debugging Tips</h3>
          <ul>
            <li>Use browser DevTools effectively</li>
            <li>Implement proper logging</li>
            <li>Test edge cases</li>
            <li>Monitor error rates</li>
            <li>Use performance profiling</li>
            <li>Check memory leaks</li>
            <li>Test across devices</li>
          </ul>
        </div>

        <div class="info-box">
          <h3>Browser Compatibility</h3>
          <ul>
            <li>Test in multiple browsers</li>
            <li>Use feature detection</li>
            <li>Include polyfills when needed</li>
            <li>Handle vendor prefixes</li>
            <li>Consider mobile browsers</li>
            <li>Test touch events</li>
            <li>Check event API support</li>
          </ul>
        </div>
      </section>

      <!-- Add recommendations section before the quiz -->
      <section id="next-steps">
        <TutorialRecommendations :current-path="'/tutorials/beginner/dom-basics/dom-events'" />
      </section>

      <!-- Quiz section -->
      <tutorial-quiz :quiz-data="quizData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, provide } from 'vue'
import { getQuizQuestionsForPath } from '@/utils/quizUtils'
import TutorialQuiz from '@/components/TutorialQuiz.vue'
import TutorialRecommendations from '@/components/TutorialRecommendations.vue'
import { usePageSections } from '@/composables/usePageSections'

// Define sections for sidebar navigation
const sections = [
  {
    id: 'what-are-events',
    title: 'What Are Events?'
  },
  {
    id: 'first-event-example',
    title: 'Your First Event Handler'
  },
  {
    id: 'event-types',
    title: 'Interactive Event Examples'
  },
  {
    id: 'event-propagation',
    title: 'Event Propagation'
  },
  {
    id: 'keyboard-events',
    title: 'Keyboard Events'
  },
  {
    id: 'touch-events',
    title: 'Touch Events'
  },
  {
    id: 'error-handling',
    title: 'Error Handling'
  },
  {
    id: 'performance',
    title: 'Performance Optimization'
  },
  {
    id: 'form-events',
    title: 'Form Events and Validation'
  },
  {
    id: 'event-delegation',
    title: 'Event Delegation'
  },
  {
    id: 'best-practices',
    title: 'Best Practices'
  },
  {
    id: 'next-steps',
    title: 'Next Steps'
  }
]

// Provide sections data for the page navigation
const { pageSections } = usePageSections(sections);

// Quiz data
const quizData = ref(getQuizQuestionsForPath('/tutorials/beginner/dom-basics/dom-events'))



// Initialize all interactive demos when component is mounted
onMounted(() => {
  initializeEventBasics()
  initializeEventTypes()
  initializeFormValidation()
  initializeEventDelegation()
  initializeKeyboardEvents()
  initializeTouchEvents()
  initializeErrorHandling()
  initializePerformanceDemo()
})

function initializeEventBasics() {
  const button = document.getElementById('clickMeBtn')
  const result = document.getElementById('clickResult')
  
  if (button && result) {
    button.addEventListener('click', () => {
      result.textContent = 'Button clicked! 🎉'
      setTimeout(() => {
        result.textContent = 'Click the button to see what happens!'
      }, 2000)
    })
  }
}

function initializeEventTypes() {
  const textInput = document.getElementById('textInput')
  const mouseArea = document.getElementById('mouseArea')
  const eventResult = document.getElementById('eventResult')
  
  if (textInput && mouseArea && eventResult) {
    textInput.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement
      eventResult.textContent = `Input event: ${target.value}`
    })

    mouseArea.addEventListener('mousemove', (e) => {
      const mouseEvent = e as MouseEvent
      eventResult.textContent = `Mouse position: X=${mouseEvent.offsetX}, Y=${mouseEvent.offsetY}`
    })

    mouseArea.addEventListener('mouseenter', () => {
      mouseArea.style.backgroundColor = '#e0e0e0'
    })

    mouseArea.addEventListener('mouseleave', () => {
      mouseArea.style.backgroundColor = '#ffffff'
    })
  }
}

function initializeFormValidation() {
  const validationForm = document.getElementById('validationForm') as HTMLFormElement
  const username = document.getElementById('username') as HTMLInputElement
  const usernameError = document.getElementById('username-error')
  const email = document.getElementById('email') as HTMLInputElement
  const emailError = document.getElementById('email-error')
  const formResult = document.getElementById('formResult')
  const customValidationForm = document.getElementById('customValidationForm') as HTMLFormElement
  const password = document.getElementById('password') as HTMLInputElement
  const customValidationResult = document.getElementById('customValidationResult')
  const requirements = {
    length: document.getElementById('length'),
    uppercase: document.getElementById('uppercase'),
    lowercase: document.getElementById('lowercase'),
    number: document.getElementById('number')
  }

  // Real-time validation
  if (username && usernameError) {
    username.addEventListener('input', (e) => {
      const value = (e.target as HTMLInputElement).value
      if (value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters'
        username.setAttribute('aria-invalid', 'true')
      } else {
        usernameError.textContent = ''
        username.setAttribute('aria-invalid', 'false')
      }
    })
  }

  if (email && emailError) {
    email.addEventListener('input', (e) => {
      const value = (e.target as HTMLInputElement).value
      if (!value.includes('@')) {
        emailError.textContent = 'Please enter a valid email address'
        email.setAttribute('aria-invalid', 'true')
      } else {
        emailError.textContent = ''
        email.setAttribute('aria-invalid', 'false')
      }
    })
  }

  // Form submission
  if (validationForm && formResult) {
    validationForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      if (!validationForm.checkValidity()) {
        validationForm.reportValidity()
        return
      }

      try {
        const formData = new FormData(validationForm)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        formResult.textContent = 'Form submitted successfully!'
        formResult.style.backgroundColor = '#e8f5e9'
        formResult.style.color = '#2e7d32'
      } catch (error) {
        formResult.textContent = `Error submitting form: ${error.message}`
        formResult.style.backgroundColor = '#ffebee'
        formResult.style.color = '#c62828'
      }
    })
  }

  // Custom password validation
  if (password && requirements.length && requirements.uppercase && 
      requirements.lowercase && requirements.number) {
    password.addEventListener('input', (e) => {
      const value = (e.target as HTMLInputElement).value
      requirements.length.classList.toggle('valid', value.length >= 8)
      requirements.uppercase.classList.toggle('valid', /[A-Z]/.test(value))
      requirements.lowercase.classList.toggle('valid', /[a-z]/.test(value))
      requirements.number.classList.toggle('valid', /[0-9]/.test(value))
    })
  }

  if (customValidationForm && customValidationResult) {
    customValidationForm.addEventListener('submit', (e) => {
      e.preventDefault()
      if (password && password.value.length >= 8 && 
          /[A-Z]/.test(password.value) && 
          /[a-z]/.test(password.value) && 
          /[0-9]/.test(password.value)) {
        customValidationResult.textContent = 'Password meets all requirements!'
        customValidationResult.style.backgroundColor = '#e8f5e9'
        customValidationResult.style.color = '#2e7d32'
      } else {
        customValidationResult.textContent = 'Password does not meet all requirements'
        customValidationResult.style.backgroundColor = '#ffebee'
        customValidationResult.style.color = '#c62828'
      }
    })
  }
}

function initializeEventDelegation() {
  const dynamicList = document.getElementById('dynamicList')
  const delegationResult = document.getElementById('delegationResult')
  const addListItem = document.getElementById('addListItem')
  const removeListItem = document.getElementById('removeListItem')
  const nestedDemo = document.getElementById('nestedDemo')
  const nestedResult = document.getElementById('nestedResult')

  // Dynamic list delegation
  if (dynamicList && delegationResult) {
    let itemCount = 2
    dynamicList.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.matches('li')) {
        delegationResult.textContent = `Clicked item: ${target.textContent}`
        target.setAttribute('aria-selected', 'true')
        target.focus()
      }
    })

    if (addListItem) {
      addListItem.addEventListener('click', () => {
        itemCount++
        const li = document.createElement('li')
        li.textContent = `Item ${itemCount}`
        li.setAttribute('role', 'listitem')
        dynamicList.appendChild(li)
      })
    }

    if (removeListItem) {
      removeListItem.addEventListener('click', () => {
        const items = dynamicList.querySelectorAll('li')
        if (items.length > 0) {
          items[items.length - 1].remove()
          itemCount--
        }
      })
    }
  }

  // Nested elements delegation
  if (nestedDemo && nestedResult) {
    nestedDemo.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const closest = target.closest('[role="button"]')
      if (closest) {
        const phase = e.eventPhase
        nestedResult.textContent = `Clicked ${closest.className} in ${phase} phase`
      }
    })
  }
}

function initializeKeyboardEvents() {
  const input = document.getElementById('keyboardInput') as HTMLInputElement
  const lastKey = document.getElementById('lastKey')
  const keyCode = document.getElementById('keyCode')
  const modifierKeys = document.getElementById('modifierKeys')
  const result = document.getElementById('keyboardResult')
  const specialKeyResult = document.getElementById('specialKeyResult')
  const shortcutResult = document.getElementById('shortcutResult')
  
  if (input && lastKey && keyCode && modifierKeys && result && specialKeyResult && shortcutResult) {
    // Basic key events
    input.addEventListener('keydown', (e) => {
      lastKey.textContent = e.key
      keyCode.textContent = e.keyCode.toString()
      modifierKeys.textContent = [
        e.ctrlKey && 'Ctrl',
        e.shiftKey && 'Shift',
        e.altKey && 'Alt',
        e.metaKey && 'Meta'
      ].filter(Boolean).join(', ') || 'None'
      
      result.textContent = `Key pressed: ${e.key} (Code: ${e.keyCode})`
    })

    // Special keys
    input.addEventListener('keydown', (e) => {
      if (e.code.startsWith('Arrow')) {
        specialKeyResult.textContent = `Arrow key pressed: ${e.key}`
      } else if (e.code.startsWith('F')) {
        specialKeyResult.textContent = `Function key pressed: ${e.key}`
      } else if (['Enter', 'Space', 'Tab', 'Escape', 'Backspace', 'Delete'].includes(e.key)) {
        specialKeyResult.textContent = `Special key pressed: ${e.key}`
      }
    })

    // Keyboard shortcuts
    input.addEventListener('keydown', (e) => {
      if (e.ctrlKey) {
        switch(e.key.toLowerCase()) {
          case 's':
            e.preventDefault()
            shortcutResult.textContent = 'Save shortcut pressed!'
            break
          case 'c':
            e.preventDefault()
            shortcutResult.textContent = 'Copy shortcut pressed!'
            break
          case 'v':
            e.preventDefault()
            shortcutResult.textContent = 'Paste shortcut pressed!'
            break
          case 'z':
            e.preventDefault()
            shortcutResult.textContent = 'Undo shortcut pressed!'
            break
        }
      }
    })

    // Clear results after 2 seconds
    const clearResults = () => {
      setTimeout(() => {
        specialKeyResult.textContent = ''
        shortcutResult.textContent = ''
      }, 2000)
    }

    input.addEventListener('keyup', clearResults)
  }
}

function initializeTouchEvents() {
  const touchArea = document.querySelector('.touch-area')
  const result = document.getElementById('touchResult')
  
  if (touchArea && result) {
    touchArea.addEventListener('touchstart', (e: TouchEvent) => {
      result.textContent = 'Touch started'
    })
    
    touchArea.addEventListener('touchmove', (e: TouchEvent) => {
      const touch = e.touches[0]
      result.textContent = `Touch moving: X=${touch.clientX}, Y=${touch.clientY}`
    })
    
    touchArea.addEventListener('touchend', () => {
      result.textContent = 'Touch ended'
    })
  }
}

function initializeErrorHandling() {
  const errorButton = document.getElementById('errorButton')
  const errorResult = document.getElementById('errorResult')
  const asyncErrorButton = document.getElementById('asyncErrorButton')
  const asyncErrorResult = document.getElementById('asyncErrorResult')
  const validateButton = document.getElementById('validateButton')
  const ageInput = document.getElementById('ageInput') as HTMLInputElement
  const validationErrorResult = document.getElementById('validationErrorResult')
  
  if (errorButton && errorResult) {
    // Basic error handling
    errorButton.addEventListener('click', () => {
      try {
        throw new Error('This is a simulated error!')
      } catch (error) {
        console.error('Error caught:', error)
        errorResult.textContent = `Error caught: ${error.message}`
        setTimeout(() => {
          errorResult.textContent = ''
        }, 2000)
      }
    })
  }

  if (asyncErrorButton && asyncErrorResult) {
    // Async error handling
    asyncErrorButton.addEventListener('click', async () => {
      try {
        asyncErrorResult.textContent = 'Loading...'
        // Simulate an async operation
        await new Promise(resolve => setTimeout(resolve, 1000))
        throw new Error('Failed to fetch data from server')
      } catch (error) {
        console.error('Async error:', error)
        asyncErrorResult.textContent = `Async Error: ${error.message}`
        setTimeout(() => {
          asyncErrorResult.textContent = ''
        }, 2000)
      }
    })
  }

  if (validateButton && ageInput && validationErrorResult) {
    // Form validation error handling
    validateButton.addEventListener('click', () => {
      try {
        const age = parseInt(ageInput.value)
        if (isNaN(age)) {
          throw new Error('Please enter a valid number')
        }
        if (age < 1 || age > 100) {
          throw new Error('Age must be between 1 and 100')
        }
        validationErrorResult.textContent = 'Valid age!'
        validationErrorResult.style.backgroundColor = '#e8f5e9'
        validationErrorResult.style.color = '#2e7d32'
      } catch (error) {
        console.error('Validation error:', error)
        validationErrorResult.textContent = `Validation Error: ${error.message}`
        validationErrorResult.style.backgroundColor = '#ffebee'
        validationErrorResult.style.color = '#c62828'
      }
    })
  }
}

function initializePerformanceDemo() {
  const scrollArea = document.querySelector('.scroll-area')
  const throttleResult = document.getElementById('throttleResult')
  const addItemBtn = document.getElementById('addItemBtn')
  const delegationList = document.getElementById('delegationList')
  const delegationResult = document.getElementById('delegationResult')
  const startMonitoring = document.getElementById('startMonitoring')
  const stopMonitoring = document.getElementById('stopMonitoring')
  const monitoringResult = document.getElementById('monitoringResult')
  let observer: PerformanceObserver | null = null

  // Event throttling demo
  if (scrollArea && throttleResult) {
    let count = 0
    const throttledHandler = throttle(() => {
      count++
      throttleResult.textContent = `Throttled scroll events: ${count}`
    }, 100)

    scrollArea.addEventListener('scroll', throttledHandler)
  }

  // Event delegation demo
  if (delegationList && delegationResult) {
    let itemCount = 2
    delegationList.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.matches('li')) {
        delegationResult.textContent = `Clicked item: ${target.textContent}`
        target.setAttribute('aria-selected', 'true')
        target.focus()
      }
    })

    if (addItemBtn) {
      addItemBtn.addEventListener('click', () => {
        itemCount++
        const li = document.createElement('li')
        li.textContent = `Item ${itemCount}`
        li.setAttribute('role', 'listitem')
        delegationList.appendChild(li)
      })
    }
  }

  // Performance monitoring demo
  if (startMonitoring && stopMonitoring && monitoringResult) {
    startMonitoring.addEventListener('click', () => {
      observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        monitoringResult.textContent = `Recorded ${entries.length} performance entries`
        console.log('Performance entries:', entries)
      })

      observer.observe({ entryTypes: ['event'] })
      monitoringResult.textContent = 'Performance monitoring started'
    })

    stopMonitoring.addEventListener('click', () => {
      if (observer) {
        observer.disconnect()
        observer = null
        monitoringResult.textContent = 'Performance monitoring stopped'
      }
    })
  }
}

function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function(...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}
</script>

<style scoped>
.tutorial-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.tutorial-content {
  line-height: 1.6;
}

section {
  margin-bottom: 40px;
}

.example-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.interactive-demo {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.demo-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.demo-button:hover {
  background-color: #45a049;
}

.result-text {
  margin-top: 10px;
  font-size: 16px;
  color: #666;
}

.mouse-area {
  width: 300px;
  height: 150px;
  border: 2px solid #ddd;
  margin: 20px 0;
  padding: 10px;
  text-align: center;
  line-height: 150px;
  background-color: #ffffff;
  transition: background-color 0.3s;
}

.demo-form {
  max-width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.validation-message {
  font-size: 14px;
  margin-left: 10px;
}

.validation-message.valid {
  color: #4CAF50;
}

.validation-message.invalid {
  color: #f44336;
}

.form-result {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
}

.form-result.success {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.form-result.error {
  background-color: #ffebee;
  color: #c62828;
}

.todo-list {
  max-width: 400px;
}

.todo-list ul {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0 5px;
}

.add-todo {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.add-todo input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-todo button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.info-box {
  background-color: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.tutorial-recommendations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.recommendation-card {
  text-decoration: none;
  color: inherit;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.2s;
}

.recommendation-card:hover {
  transform: translateY(-2px);
}

code {
  background-color: #f8f9fa;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: monospace;
}

pre code {
  display: block;
  padding: 15px;
  overflow-x: auto;
}

.propagation-box {
  padding: 20px;
}

.outer-box, .middle-box, .inner-box {
  padding: 20px;
  margin: 10px;
  border: 2px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
}

.outer-box {
  background-color: #f0f0f0;
}

.middle-box {
  background-color: #e0e0e0;
}

.inner-box {
  background-color: #d0d0d0;
}

.propagation-result {
  margin-top: 10px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.keyboard-demo {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.demo-section {
  margin: 20px 0;
  padding: 15px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.demo-section h4 {
  margin-bottom: 10px;
  color: #333;
}

.keyboard-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.special-keys ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
}

.special-keys li {
  padding: 8px;
  background-color: #f8f9fa;
  border-radius: 4px;
  text-align: center;
}

.special-key-result, .shortcut-result {
  margin-top: 10px;
  padding: 10px;
  background-color: #e3f2fd;
  border-radius: 4px;
  min-height: 40px;
}

.event-properties {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.event-properties li {
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.event-properties code {
  background-color: #e3f2fd;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: monospace;
}

.touch-demo {
  padding: 20px;
}

.touch-area {
  width: 300px;
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.touch-result {
  margin-top: 10px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.error-demo {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.error-demo .demo-section {
  margin: 20px 0;
  padding: 15px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.error-demo .demo-section h4 {
  margin-bottom: 10px;
  color: #333;
}

.error-result {
  margin-top: 10px;
  padding: 10px;
  background-color: #ffebee;
  color: #c62828;
  border-radius: 4px;
  min-height: 40px;
}

.error-demo .form-group {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.error-demo input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.performance-demo {
  padding: 20px;
}

.scroll-area {
  height: 200px;
  overflow-y: auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.performance-result {
  margin-top: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.event-categories {
  list-style: none;
  padding: 0;
}

.event-categories li {
  margin: 10px 0;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.event-bubbling-diagram {
  margin: 20px 0;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.bubbling-image {
  max-width: 400px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.diagram-explanation {
  flex: 1;
}

.diagram-explanation ol {
  margin-left: 20px;
}

.code-explanation {
  margin-top: 15px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.code-explanation ul {
  margin-left: 20px;
}

.code-explanation li {
  margin: 5px 0;
}

.diagram-explanation > .code-explanation {
  width: 30vw;
}

.touch-device-message,
.non-touch-device-message {
  text-align: center;
  color: #666;
}

.touch-device-message {
  display: none;
}

.non-touch-device-message {
  display: block;
  color: #f44336;
  font-weight: bold;
}

.touch-device-message {
  display: none;
}

.non-touch-device-message {
  display: block;
  color: #f44336;
  font-weight: bold;
}

@media (hover: none) and (pointer: coarse) {
  .touch-device-message {
    display: block;
  }
  
  .non-touch-device-message {
    display: none;
  }
}
</style>
