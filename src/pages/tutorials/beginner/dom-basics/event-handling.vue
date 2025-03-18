<template>
  <div class="tutorial-container">
    <div class="tutorial-content">
      <h1>DOM Events: Making Your Web Pages Interactive</h1>
      
      <section id="introduction">
        <h2>Introduction to DOM Events</h2>
        <p>
          DOM Events are the foundation of interactivity on the web. They allow your web pages
          to respond to user actions like clicks, key presses, form submissions, and more.
          In this tutorial, you'll learn how to:
        </p>
        <ul>
          <li>Add and remove event listeners</li>
          <li>Work with different types of events</li>
          <li>Handle form events and validation</li>
          <li>Use event delegation for better performance</li>
        </ul>
      </section>

      <section id="event-basics">
        <h2>Event Basics</h2>
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
          </div>
        </div>
      </section>

      <section id="event-types">
        <h2>Common Event Types</h2>
        <div class="interactive-demo">
          <div id="eventTypesDemo" class="demo-box">
            <input type="text" id="textInput" placeholder="Type something...">
            <div id="mouseArea" class="mouse-area">
              Move your mouse here
            </div>
            <p id="eventResult">Events will be shown here</p>
          </div>
        </div>
      </section>

      <section id="form-events">
        <h2>Form Events and Validation</h2>
        <div class="interactive-demo">
          <form id="demoForm" class="demo-form">
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" required minlength="3">
              <span class="validation-message"></span>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" required>
              <span class="validation-message"></span>
            </div>
            <button type="submit">Submit</button>
          </form>
          <div id="formResult" class="form-result"></div>
        </div>
      </section>

      <section id="event-delegation">
        <h2>Event Delegation</h2>
        <div class="interactive-demo">
          <div id="todoList" class="todo-list">
            <h3>Todo List with Event Delegation</h3>
            <ul id="todoItems">
              <li>Learn DOM Events <button class="delete-btn">❌</button></li>
              <li>Practice Event Delegation <button class="delete-btn">❌</button></li>
              <li>Master JavaScript <button class="delete-btn">❌</button></li>
            </ul>
            <div class="add-todo">
              <input type="text" id="newTodoInput" placeholder="Add new todo">
              <button id="addTodoBtn">Add</button>
            </div>
          </div>
        </div>
      </section>

      <section id="best-practices">
        <h2>Best Practices and Common Patterns</h2>
        <div class="info-box">
          <h3>Key Takeaways:</h3>
          <ul>
            <li>Always remove event listeners when they're no longer needed</li>
            <li>Use event delegation for dynamic elements</li>
            <li>Debounce or throttle events that fire frequently</li>
            <li>Prevent event bubbling when necessary using stopPropagation()</li>
          </ul>
        </div>
      </section>

      <!-- Quiz section -->
      <tutorial-quiz :quiz-data="quizData" />

      <!-- Next steps section -->
      <section id="next-steps">
        <h2>Next Steps</h2>
        <div class="tutorial-recommendations">
          <router-link to="/tutorials/beginner/web-storage-basics" class="recommendation-card">
            <h3>Web Storage Basics</h3>
            <p>Learn how to persist data in the browser</p>
          </router-link>
          <router-link to="/tutorials/beginner/fetch-api-basics" class="recommendation-card">
            <h3>Fetch API Basics</h3>
            <p>Make HTTP requests and handle responses</p>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getQuizQuestionsForPath } from '@/utils/quizUtils'
import TutorialQuiz from '@/components/TutorialQuiz.vue'

// Quiz data
const quizData = ref(getQuizQuestionsForPath('/tutorials/beginner/dom-basics/event-handling'))

// Initialize all interactive demos when component is mounted
onMounted(() => {
  setTimeout(() => {
    initializeEventBasics()
    initializeEventTypes()
    initializeFormEvents()
    initializeEventDelegation()
  }, 100)
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

function initializeFormEvents() {
  const form = document.getElementById('demoForm') as HTMLFormElement
  const username = document.getElementById('username') as HTMLInputElement
  const email = document.getElementById('email') as HTMLInputElement
  const formResult = document.getElementById('formResult')
  
  if (form && username && email && formResult) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      
      if (form.checkValidity()) {
        formResult.textContent = `Form submitted with username: ${username.value} and email: ${email.value}`
        formResult.className = 'form-result success'
      } else {
        formResult.textContent = 'Please fix the validation errors'
        formResult.className = 'form-result error'
      }
    })

    // Real-time validation
    username.addEventListener('input', validateField)
    email.addEventListener('input', validateField)
  }
}

function validateField(e: Event) {
  const input = e.target as HTMLInputElement
  const validationMessage = input.nextElementSibling as HTMLElement
  
  if (input.validity.valid) {
    validationMessage.textContent = '✓'
    validationMessage.className = 'validation-message valid'
  } else {
    validationMessage.textContent = getValidationMessage(input)
    validationMessage.className = 'validation-message invalid'
  }
}

function getValidationMessage(input: HTMLInputElement): string {
  if (input.validity.valueMissing) return 'This field is required'
  if (input.validity.typeMismatch) return 'Please enter a valid value'
  if (input.validity.tooShort) return `Minimum length is ${input.minLength} characters`
  return 'Invalid input'
}

function initializeEventDelegation() {
  const todoList = document.getElementById('todoItems')
  const newTodoInput = document.getElementById('newTodoInput') as HTMLInputElement
  const addTodoBtn = document.getElementById('addTodoBtn')
  
  if (todoList && newTodoInput && addTodoBtn) {
    // Event delegation for delete buttons
    todoList.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('delete-btn')) {
        const listItem = target.parentElement
        if (listItem) {
          listItem.remove()
        }
      }
    })

    // Add new todo
    addTodoBtn.addEventListener('click', () => {
      const todoText = newTodoInput.value.trim()
      if (todoText) {
        const li = document.createElement('li')
        li.innerHTML = `${todoText} <button class="delete-btn">❌</button>`
        todoList.appendChild(li)
        newTodoInput.value = ''
      }
    })
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
</style>
