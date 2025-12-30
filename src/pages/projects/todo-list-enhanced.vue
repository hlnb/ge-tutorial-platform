<!-- eslint-disable no-useless-escape -->
<template>
	<div class="container">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active"><a href="#" aria-current="page">Enhanced Todo List</a></li>
			</ul>
		</nav>

		<div class="content">
			<h1 class="title">Enhanced Todo List</h1>
			<p class="subtitle">
				Build an interactive todo list with modern CSS features and animations
			</p>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-bullseye"></i> Project Objectives
				</h2>
				<ul>
					<li>Create a responsive todo list application</li>
					<li>Implement smooth animations and transitions</li>
					<li>Add interactive features and filters</li>
					<li>Ensure accessibility and performance</li>
					<li>Use modern CSS techniques</li>
				</ul>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-graduation-cap"></i> Learning Outcomes
				</h2>
				<ul>
					<li>Master CSS animations and transitions</li>
					<li>Learn about CSS custom properties</li>
					<li>Practice responsive design principles</li>
					<li>Understand CSS Grid and Flexbox</li>
					<li>Improve accessibility in web applications</li>
				</ul>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-tasks"></i> Project Steps
				</h2>
				<div class="steps">
					<div class="step">
						<h3 class="title is-5">1. HTML Structure</h3>
						<p>Create the basic HTML structure:</p>
						<CodeMirror
							:code="htmlStructure"
							:options="{ mode: 'htmlmixed', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">2. CSS Variables & Base Styles</h3>
						<p>Set up CSS variables and base styles:</p>
						<CodeMirror
							:code="baseStyles"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">3. Layout & Components</h3>
						<p>Implement the layout and component styles:</p>
						<CodeMirror
							:code="layoutStyles"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">4. Animations & Effects</h3>
						<p>Add animations and interactive effects:</p>
						<CodeMirror
							:code="animations"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">5. Responsive Design</h3>
						<p>Make the todo list responsive:</p>
						<CodeMirror
							:code="responsiveDesign"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>
				</div>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-lightbulb"></i> Tips & Best Practices
				</h2>
				<div class="content">
					<ul>
						<li>Use CSS Grid for the main layout</li>
						<li>Implement CSS custom properties for theming</li>
						<li>Add smooth transitions and animations</li>
						<li>Ensure proper contrast and readability</li>
						<li>Optimize performance with CSS containment</li>
					</ul>
				</div>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-code"></i> Complete Example
				</h2>
				<CodeMirror
					:code="completeExample"
					:options="{ mode: 'htmlmixed', readOnly: true }"
				/>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-exclamation-circle"></i> Common Issues & Solutions
				</h2>
				<div class="content">
					<ul>
						<li>
							<strong>Animations not smooth:</strong> Use transform and opacity for better performance
						</li>
						<li>
							<strong>Layout breaking on mobile:</strong> Use proper media queries and flexible units
						</li>
						<li>
							<strong>Items not animating:</strong> Check CSS transition properties and timing
						</li>
					</ul>
				</div>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-tachometer-alt"></i> Performance Tips
				</h2>
				<div class="content">
					<ul>
						<li>Use CSS containment for better rendering</li>
						<li>Minimize repaints and reflows</li>
						<li>Optimize animations for mobile</li>
						<li>Use hardware acceleration when possible</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
/* eslint-disable no-useless-escape */
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

const htmlStructure = ref(`<div class="todo-container">
  <header class="todo-header">
    <h1>My Todo List</h1>
    <div class="todo-stats">
      <span class="total-tasks">Total: <span id="total-count">0</span></span>
      <span class="completed-tasks">Completed: <span id="completed-count">0</span></span>
    </div>
  </header>

  <main class="todo-content">
    <div class="todo-input-container">
      <input type="text" id="todo-input" placeholder="Add a new task..." aria-label="New todo input">
      <button id="add-todo" aria-label="Add todo">
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <div class="todo-filters">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="active">Active</button>
      <button class="filter-btn" data-filter="completed">Completed</button>
      <button class="clear-completed">Clear Completed</button>
    </div>

    <ul class="todo-list" id="todo-list">
      <!-- Todo items will be dynamically added here -->
    </ul>
  </main>
</div>`);

const baseStyles = ref(`/* CSS Variables */
:root {
  --primary-color: #4A90E2;
  --secondary-color: #2C3E50;
  --accent-color: #E74C3C;
  --success-color: #2ECC71;
  --text-color: #333;
  --light-gray: #F5F5F5;
  --dark-gray: #666;
  --white: #FFFFFF;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --transition-speed: 0.3s;
}

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--light-gray);
}

/* Typography */
h1 {
  color: var(--secondary-color);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

/* Container */
.todo-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}`);

const layoutStyles = ref(`/* Header Styles */
.todo-header {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
  text-align: center;
}

.todo-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  color: var(--dark-gray);
}

/* Input Container */
.todo-input-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

#todo-input {
  flex: 1;
  padding: 1rem;
  border: 2px solid var(--light-gray);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color var(--transition-speed);
}

#todo-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

#add-todo {
  padding: 0 1.5rem;
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color var(--transition-speed);
}

#add-todo:hover {
  background-color: var(--secondary-color);
}

/* Filters */
.todo-filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--white);
  color: var(--dark-gray);
  cursor: pointer;
  transition: all var(--transition-speed);
}

.filter-btn.active {
  background-color: var(--primary-color);
  color: var(--white);
}

.clear-completed {
  margin-left: auto;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--accent-color);
  color: var(--white);
  cursor: pointer;
  transition: background-color var(--transition-speed);
}

.clear-completed:hover {
  background-color: #C0392B;
}

/* Todo List */
.todo-list {
  list-style: none;
  display: grid;
  gap: 1rem;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: var(--shadow);
  transition: transform var(--transition-speed);
}

.todo-item:hover {
  transform: translateX(5px);
}

.todo-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all var(--transition-speed);
}

.todo-checkbox.checked {
  background-color: var(--success-color);
  border-color: var(--success-color);
}

.todo-text {
  flex: 1;
  font-size: 1rem;
}

.todo-text.completed {
  text-decoration: line-through;
  color: var(--dark-gray);
}

.delete-todo {
  padding: 0.5rem;
  background: none;
  border: none;
  color: var(--accent-color);
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--transition-speed);
}

.todo-item:hover .delete-todo {
  opacity: 1;
}`);

const animations = ref(`/* Animations & Transitions */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100px);
  }
}

.todo-item {
  animation: slideIn 0.3s ease forwards;
}

.todo-item.removing {
  animation: slideOut 0.3s ease forwards;
}

/* Hover Effects */
.todo-item {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.todo-item:hover {
  transform: translateX(5px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
}

.filter-btn {
  transition: all 0.3s ease;
}

.filter-btn:hover {
  transform: translateY(-2px);
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}`);

const responsiveDesign = ref(`/* Responsive Design */
@media (max-width: 768px) {
  .todo-container {
    margin: 1rem auto;
  }

  .todo-header {
    padding: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  .todo-stats {
    flex-direction: column;
    gap: 0.5rem;
  }

  .todo-filters {
    flex-direction: column;
  }

  .clear-completed {
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  .todo-input-container {
    flex-direction: column;
  }

  #add-todo {
    width: 100%;
    padding: 1rem;
  }

  .todo-item {
    padding: 0.75rem;
  }

  .todo-text {
    font-size: 0.9rem;
  }
}`);

const completeExample = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enhanced Todo List</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style>
    /* CSS Variables */
    :root {
      --primary-color: #4A90E2;
      --secondary-color: #2C3E50;
      --accent-color: #E74C3C;
      --success-color: #2ECC71;
      --text-color: #333;
      --light-gray: #F5F5F5;
      --dark-gray: #666;
      --white: #FFFFFF;
      --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      --transition-speed: 0.3s;
    }

    /* Reset & Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: var(--text-color);
      background-color: var(--light-gray);
    }

    /* Typography */
    h1 {
      color: var(--secondary-color);
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    /* Container */
    .todo-container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    /* Header Styles */
    .todo-header {
      background-color: var(--white);
      padding: 2rem;
      border-radius: 8px;
      box-shadow: var(--shadow);
      margin-bottom: 2rem;
      text-align: center;
    }

    .todo-stats {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 1rem;
      color: var(--dark-gray);
    }

    /* Input Container */
    .todo-input-container {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    #todo-input {
      flex: 1;
      padding: 1rem;
      border: 2px solid var(--light-gray);
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color var(--transition-speed);
    }

    #todo-input:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    #add-todo {
      padding: 0 1.5rem;
      background-color: var(--primary-color);
      color: var(--white);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color var(--transition-speed);
    }

    #add-todo:hover {
      background-color: var(--secondary-color);
    }

    /* Filters */
    .todo-filters {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      background-color: var(--white);
      color: var(--dark-gray);
      cursor: pointer;
      transition: all var(--transition-speed);
    }

    .filter-btn.active {
      background-color: var(--primary-color);
      color: var(--white);
    }

    .clear-completed {
      margin-left: auto;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      background-color: var(--accent-color);
      color: var(--white);
      cursor: pointer;
      transition: background-color var(--transition-speed);
    }

    .clear-completed:hover {
      background-color: #C0392B;
    }

    /* Todo List */
    .todo-list {
      list-style: none;
      display: grid;
      gap: 1rem;
    }

    .todo-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      background-color: var(--white);
      border-radius: 4px;
      box-shadow: var(--shadow);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .todo-item:hover {
      transform: translateX(5px);
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    }

    .todo-checkbox {
      width: 20px;
      height: 20px;
      border: 2px solid var(--primary-color);
      border-radius: 50%;
      cursor: pointer;
      transition: all var(--transition-speed);
    }

    .todo-checkbox.checked {
      background-color: var(--success-color);
      border-color: var(--success-color);
    }

    .todo-text {
      flex: 1;
      font-size: 1rem;
    }

    .todo-text.completed {
      text-decoration: line-through;
      color: var(--dark-gray);
    }

    .delete-todo {
      padding: 0.5rem;
      background: none;
      border: none;
      color: var(--accent-color);
      cursor: pointer;
      opacity: 0;
      transition: opacity var(--transition-speed);
    }

    .todo-item:hover .delete-todo {
      opacity: 1;
    }

    /* Animations */
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(100px);
      }
    }

    .todo-item {
      animation: slideIn 0.3s ease forwards;
    }

    .todo-item.removing {
      animation: slideOut 0.3s ease forwards;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .todo-container {
        margin: 1rem auto;
      }

      .todo-header {
        padding: 1.5rem;
      }

      h1 {
        font-size: 2rem;
      }

      .todo-stats {
        flex-direction: column;
        gap: 0.5rem;
      }

      .todo-filters {
        flex-direction: column;
      }

      .clear-completed {
        margin-left: 0;
      }
    }

    @media (max-width: 480px) {
      .todo-input-container {
        flex-direction: column;
      }

      #add-todo {
        width: 100%;
        padding: 1rem;
      }

      .todo-item {
        padding: 0.75rem;
      }

      .todo-text {
        font-size: 0.9rem;
      }
    }
  </style>
</head>
<body>
  <div class="todo-container">
    <header class="todo-header">
      <h1>My Todo List</h1>
      <div class="todo-stats">
        <span class="total-tasks">Total: <span id="total-count">0</span></span>
        <span class="completed-tasks">Completed: <span id="completed-count">0</span></span>
      </div>
    </header>

    <main class="todo-content">
      <div class="todo-input-container">
        <input type="text" id="todo-input" placeholder="Add a new task..." aria-label="New todo input">
        <button id="add-todo" aria-label="Add todo">
          <i class="fas fa-plus"></i>
        </button>
      </div>

      <div class="todo-filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="active">Active</button>
        <button class="filter-btn" data-filter="completed">Completed</button>
        <button class="clear-completed">Clear Completed</button>
      </div>

      <ul class="todo-list" id="todo-list">
        <!-- Todo items will be dynamically added here -->
      </ul>
    </main>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const todoInput = document.getElementById('todo-input');
      const addTodoBtn = document.getElementById('add-todo');
      const todoList = document.getElementById('todo-list');
      const filterBtns = document.querySelectorAll('.filter-btn');
      const clearCompletedBtn = document.querySelector('.clear-completed');
      const totalCount = document.getElementById('total-count');
      const completedCount = document.getElementById('completed-count');

      let todos = JSON.parse(localStorage.getItem('todos')) || [];
      let currentFilter = 'all';

      // Update counts
      function updateCounts() {
        const total = todos.length;
        const completed = todos.filter(todo => todo.completed).length;
        totalCount.textContent = total;
        completedCount.textContent = completed;
      }

      // Save todos to localStorage
      function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
        updateCounts();
      }

      // Create todo item
      function createTodoItem(todo) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.dataset.id = todo.id;
        li.innerHTML = \`
          <div class="todo-checkbox \${todo.completed ? 'checked' : ''}" role="checkbox" aria-checked="\${todo.completed}"></div>
          <span class="todo-text \${todo.completed ? 'completed' : ''}">\${todo.text}</span>
          <button class="delete-todo" aria-label="Delete todo">
            <i class="fas fa-trash"></i>
          </button>
        \`;

        // Toggle completion
        const checkbox = li.querySelector('.todo-checkbox');
        checkbox.addEventListener('click', () => {
          todo.completed = !todo.completed;
          checkbox.classList.toggle('checked');
          li.querySelector('.todo-text').classList.toggle('completed');
          saveTodos();
        });

        // Delete todo
        const deleteBtn = li.querySelector('.delete-todo');
        deleteBtn.addEventListener('click', () => {
          li.classList.add('removing');
          setTimeout(() => {
            todos = todos.filter(t => t.id !== todo.id);
            saveTodos();
            renderTodos();
          }, 300);
        });

        return li;
      }

      // Render todos
      function renderTodos() {
        todoList.innerHTML = '';
        const filteredTodos = todos.filter(todo => {
          if (currentFilter === 'active') return !todo.completed;
          if (currentFilter === 'completed') return todo.completed;
          return true;
        });

        filteredTodos.forEach(todo => {
          todoList.appendChild(createTodoItem(todo));
        });
      }

      // Add todo
      function addTodo(text) {
        if (text.trim()) {
          const todo = {
            id: Date.now(),
            text: text.trim(),
            completed: false
          };
          todos.push(todo);
          saveTodos();
          renderTodos();
          todoInput.value = '';
        }
      }

      // Event Listeners
      addTodoBtn.addEventListener('click', () => addTodo(todoInput.value));
      todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo(todoInput.value);
      });

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentFilter = btn.dataset.filter;
          renderTodos();
        });
      });

      clearCompletedBtn.addEventListener('click', () => {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        renderTodos();
      });

      // Initial render
      renderTodos();
    });
  <\/script>
</body>
</html>`);
</script>

<style scoped>
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
}

.steps {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.step {
	background-color: #f5f5f5;
	padding: 1.5rem;
	border-radius: 8px;
}

.step h3 {
	margin-bottom: 1rem;
	color: #2c3e50;
}

.content ul {
	list-style-type: disc;
	margin-left: 1.5rem;
}

.content li {
	margin-bottom: 0.5rem;
}

.box {
	margin-bottom: 2rem;
}

.title {
	color: #2c3e50;
}

.subtitle {
	color: #666;
	margin-bottom: 2rem;
}
</style> 