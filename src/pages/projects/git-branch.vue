<template>
  <div class="content">
    <h1 class="title is-1"><i class="fas fa-code-branch mr-2"></i> Branching Exercise</h1>
    <div class="tags mb-4">
      <span class="tag is-success">Git</span>
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">Project</span>
    </div>
    <p>Practice creating, switching, and merging branches in a sample repository.</p>
    <ol>
      <li>Initialize a new repository:
        <CodeMirror :code="`git init`" language="bash" :read-only="true" />
      </li>
      <li>Create a new branch and switch to it:
        <CodeMirror :code="`git checkout -b feature-branch`" language="bash" :read-only="true" />
      </li>
      <li>Make changes, add, and commit them:
        <CodeMirror :code="`echo 'Feature work' > feature.txt\ngit add feature.txt\ngit commit -m 'Add feature work'`" language="bash" :read-only="true" />
      </li>
      <li>Switch back to main and merge:
        <CodeMirror :code="`git checkout main\ngit merge feature-branch`" language="bash" :read-only="true" />
      </li>
    </ol>
    <div class="notification is-info is-light mt-4">
      <i class="fas fa-lightbulb mr-2"></i> Try creating more branches and merging them!
    </div>
  </div>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';
</script>

<script>
export default {
  frontmatter: {
    title: 'Branching Exercise',
    description: 'Create, switch, and merge branches in a sample repo.',
    tags: ['git', 'branch', 'merge'],
    difficulty: 'Beginner',
    lastUpdated: '2025-05-27',
  },
};
</script>
