<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/">
						<i class="fa-solid fa-house mr-2"></i> Home
					</router-link>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">Todo List</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">90 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-primary">Arrays</span>
			<span class="tag is-link">DOM</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-list-check"></i> Todo List Project
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li>Build a functional todo list application</li>
				<li>Practice working with arrays and array methods</li>
				<li>Implement CRUD operations (Create, Read, Update, Delete)</li>
				<li>Use loops to render and update list items</li>
				<li>Store data in the browser's local storage</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should
				complete the
				<router-link to="/tutorials/javascript-basics/loops"
					>JavaScript Loops</router-link
				>
				tutorial.
			</p>
		</div>

		<section class="project-section">
			<h2 class="title is-2">Project Description</h2>
			<p>
				In this project, you'll create a todo list application that allows users
				to add, complete, edit, and delete tasks. This project will help you
				understand how to work with arrays, manipulate the DOM, and persist data
				using local storage.
			</p>

			<div class="box mt-5">
				<h3 class="title is-4">Your Todo List Should Include:</h3>
				<ul>
					<li>An input field to add new tasks</li>
					<li>A list of tasks with checkboxes for completion</li>
					<li>Delete buttons for removing tasks</li>
					<li>Edit functionality for existing tasks</li>
					<li>Local storage to persist tasks</li>
					<li>A clean, user-friendly interface</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Getting Started</h2>

			<h3 class="title is-4">Step 1: Set Up Your Project Files</h3>
			<p>Create the following files for your project:</p>
			<ul>
				<li><code>index.html</code> - The HTML structure</li>
				<li><code>styles.css</code> - CSS styles for your todo list</li>
				<li><code>script.js</code> - JavaScript code for todo list logic</li>
			</ul>

			<h3 class="title is-4 mt-5">Step 2: Create the HTML Structure</h3>
			<p>Set up the basic HTML structure in your <code>index.html</code> file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="htmlStructure"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 3: Add Basic Styles</h3>
			<p>Add some basic styles to your <code>styles.css</code> file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="cssStyles"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 4: Implement Todo List Logic</h3>
			<p>Add the basic todo list logic to your <code>script.js</code> file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="jsLogic"
					:options="{
						mode: 'javascript',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Challenge Yourself</h2>
			<p>Once you've completed the basic todo list, try these enhancements:</p>

			<div class="box">
				<h3 class="title is-5">Advanced Features</h3>
				<ul>
					<li>Add due dates to tasks</li>
					<li>Implement task categories or tags</li>
					<li>Add task priority levels</li>
					<li>Include task sorting and filtering</li>
					<li>Add a task search feature</li>
					<li>Implement drag-and-drop reordering</li>
				</ul>
			</div>
		</section>


	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

// Code examples
const htmlStructure = ref('<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'  <meta charset="UTF-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'  <title>Todo List App</title>\n' +
'  <link rel="stylesheet" href="styles.css">\n' +
'</head>\n' +
'<body>\n' +
'  <div class="todo-app">\n' +
'    <div class="todo-header">\n' +
'      <h1>Todo List</h1>\n' +
'      <div class="todo-form">\n' +
'        <input type="text" id="new-todo" placeholder="What needs to be done?">\n' +
'        <button id="add-todo">Add</button>\n' +
'      </div>\n' +
'    </div>\n\n' +
'    <ul id="todo-list">\n' +
'      <!-- Todo items will be added here -->\n' +
'    </ul>\n\n' +
'    <div class="todo-stats">\n' +
'      <span id="tasks-left">0 tasks remaining</span>\n' +
'      <button id="clear-completed">Clear Completed</button>\n' +
'    </div>\n' +
'  </div>\n' +
`  ` + ('</' + 'script>') + `\n` +
'</body>\n' +
'</html>');

const cssStyles = ref(`.todo-app {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
}

.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

#new-todo {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #45a049;
}

#todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  gap: 10px;
}

.todo-item.completed {
  text-decoration: line-through;
  color: #888;
}

.todo-item input[type="checkbox"] {
  margin-right: 10px;
}

.todo-item .delete-btn {
  margin-left: auto;
  background: #ff4444;
}

.todo-item .delete-btn:hover {
  background: #cc0000;
}

.todo-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

#clear-completed {
  background: #888;
}

#clear-completed:hover {
  background: #666;
}`);

const jsLogic = ref(`// Get DOM elements
const newTodoInput = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const tasksLeft = document.getElementById('tasks-left');
const clearCompletedBtn = document.getElementById('clear-completed');

// Initialize todos array from localStorage or empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render initial todos
renderTodos();

// Add new todo
addButton.addEventListener('click', () => {
  const todoText = newTodoInput.value.trim();
  if (todoText) {
    addTodo(todoText);
    newTodoInput.value = '';
  }
});

// Handle enter key
newTodoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addButton.click();
  }
});

// Clear completed todos
clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed);
  saveTodos();
  renderTodos();
});

function addTodo(text) {
  todos.push({
    id: Date.now(),
    text,
    completed: false
  });
  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  saveTodos();
  renderTodos();
}

function editTodo(id, newText) {
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, text: newText };
    }
    return todo;
  });
  saveTodos();
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = '';
  
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item' + (todo.completed ? ' completed' : '');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodo(todo.id));
    
    const text = document.createElement('span');
    text.textContent = todo.text;
    text.addEventListener('dblclick', () => {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = todo.text;
      text.replaceWith(input);
      input.focus();
      
      input.addEventListener('blur', () => {
        editTodo(todo.id, input.value.trim());
      });
      
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          input.blur();
        }
      });
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
    
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
  
  // Update tasks counter
  const remaining = todos.filter(todo => !todo.completed).length;
  tasksLeft.textContent = \`\${remaining} task\${remaining === 1 ? '' : 's'} remaining\`;
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}`);
</script>

<script>
// Frontmatter for the project
export default {
	frontmatter: {
		title: 'Todo List',
		description: 'Build a todo list with array iteration',
		category: 'JavaScript Projects',
		level: 'Beginner',
		tags: ['JavaScript', 'Arrays', 'DOM'],
		lastUpdated: '2024-03-15',
	},
};
</script>

<style scoped>
.project-section {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.codemirror-wrapper {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	margin: 1.5rem 0;
}

code {
	background-color: #f5f5f5;
	color: #485fc7;
	padding: 0.2rem 0.4rem;
	border-radius: 4px;
}
</style> 