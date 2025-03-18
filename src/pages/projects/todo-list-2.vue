<template>
  <div class="content">
    <h1 class="title is-1">
      <i class="fas fa-tasks"></i> Interactive Todo List
    </h1>

    <div class="box project-intro">
      <h2 class="title is-4">Project Overview</h2>
      <p>
        Create an advanced todo list application that demonstrates your mastery of arrays and DOM manipulation.
        This project builds on the basic todo list by adding more sophisticated array operations and dynamic features.
      </p>

      <div class="tags mt-4">
        <span class="tag is-info">Arrays</span>
        <span class="tag is-info">DOM Manipulation</span>
        <span class="tag is-info">Event Handling</span>
        <span class="tag is-success">Intermediate</span>
        <span class="tag is-warning">60 minutes</span>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Learning Objectives</h2>
      <ul>
        <li>Master array methods for data management</li>
        <li>Implement complex filtering and sorting</li>
        <li>Handle dynamic DOM updates efficiently</li>
        <li>Practice advanced array transformations</li>
        <li>Implement data persistence</li>
      </ul>
    </div>

    <div class="box">
      <h2 class="title is-4">Project Requirements</h2>
      
      <div class="requirement-group">
        <h3 class="title is-5">1. Task Management</h3>
        <ul>
          <li>Create an array of task objects with properties:
            <ul>
              <li>id: number (unique identifier)</li>
              <li>title: string (task description)</li>
              <li>completed: boolean (task status)</li>
              <li>priority: string (high, medium, low)</li>
              <li>dueDate: Date (optional)</li>
              <li>tags: array (task categories)</li>
            </ul>
          </li>
          <li>Display tasks in a structured list</li>
          <li>Show task details and status indicators</li>
        </ul>
      </div>

      <div class="requirement-group">
        <h3 class="title is-5">2. Array Operations</h3>
        <ul>
          <li>Filter tasks by status using array filter()</li>
          <li>Sort tasks by priority and due date using sort()</li>
          <li>Group tasks by tags using reduce()</li>
          <li>Search tasks using array methods</li>
          <li>Batch operations (complete all, delete completed)</li>
        </ul>
      </div>

      <div class="requirement-group">
        <h3 class="title is-5">3. Advanced Features</h3>
        <ul>
          <li>Implement task categories with tag management</li>
          <li>Add task priority levels and sorting</li>
          <li>Create task statistics using array reduce()</li>
          <li>Add data persistence using localStorage</li>
          <li>Implement undo/redo functionality</li>
        </ul>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Getting Started</h2>
      
      <div class="steps">
        <div class="step-item">
          <h3 class="title is-5">Step 1: Set Up Data Structure</h3>
          <pre><code>const todoApp = {
  tasks: [
    {
      id: 1,
      title: 'Complete project documentation',
      completed: false,
      priority: 'high',
      dueDate: new Date('2024-03-20'),
      tags: ['work', 'documentation']
    },
    // Add more tasks...
  ],
  filters: {
    status: 'all',
    priority: 'all',
    tags: []
  }
};</code></pre>
        </div>

        <div class="step-item">
          <h3 class="title is-5">Step 2: Implement Core Functions</h3>
          <pre><code>// Filter tasks
function filterTasks() {
  return todoApp.tasks
    .filter(task => {
      const statusMatch = todoApp.filters.status === 'all' || 
        (todoApp.filters.status === 'completed') === task.completed;
      const priorityMatch = todoApp.filters.priority === 'all' ||
        todoApp.filters.priority === task.priority;
      const tagMatch = todoApp.filters.tags.length === 0 ||
        todoApp.filters.tags.some(tag => task.tags.includes(tag));
      return statusMatch && priorityMatch && tagMatch;
    });
}

// Sort tasks
function sortTasks(tasks) {
  const priorityOrder = { high: 1, medium: 2, low: 3 };
  return [...tasks].sort((a, b) => {
    // Sort by priority first
    const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (priorityDiff !== 0) return priorityDiff;
    // Then by due date
    return a.dueDate - b.dueDate;
  });
}</code></pre>
        </div>

        <div class="step-item">
          <h3 class="title is-5">Step 3: Add Statistics and Persistence</h3>
          <pre><code>// Calculate statistics
function getStatistics() {
  return todoApp.tasks.reduce((stats, task) => {
    stats.total++;
    if (task.completed) stats.completed++;
    stats.byPriority[task.priority]++;
    task.tags.forEach(tag => {
      stats.byTag[tag] = (stats.byTag[tag] || 0) + 1;
    });
    return stats;
  }, {
    total: 0,
    completed: 0,
    byPriority: { high: 0, medium: 0, low: 0 },
    byTag: {}
  });
}

// Save to localStorage
function saveState() {
  localStorage.setItem('todoApp', 
    JSON.stringify(todoApp)
  );
}</code></pre>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Tips for Success</h2>
      <ul>
        <li>Use immutable array operations to maintain data integrity</li>
        <li>Implement proper error handling for all operations</li>
        <li>Use meaningful variable names and add comments</li>
        <li>Break down complex operations into smaller functions</li>
        <li>Test edge cases in your filtering and sorting logic</li>
      </ul>
    </div>

    <div class="box">
      <h2 class="title is-4">Bonus Challenges</h2>
      <ul>
        <li>Add subtasks using nested arrays</li>
        <li>Implement task dependencies</li>
        <li>Add drag-and-drop task reordering</li>
        <li>Create task analytics dashboard</li>
        <li>Add task sharing functionality</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Component logic will be added here
</script>

<style scoped>
.project-intro {
  background-color: #f8f9fa;
  border-left: 4px solid #3273dc;
}

.requirement-group {
  margin-bottom: 2rem;
}

.step-item {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
}

.step-item pre {
  margin-top: 1rem;
  padding: 1rem;
  background: #2c3e50;
  color: #fff;
  border-radius: 4px;
}

.step-item code {
  color: #fff;
}
</style> 