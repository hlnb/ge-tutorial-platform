<template>
  <div class="content">
    <h1 class="title is-1"><i class="fas fa-history mr-2"></i> Commit Practice</h1>
    <div class="tags mb-4">
      <span class="tag is-success">Git</span>
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">Project</span>
    </div>
    <p>Practice making multiple commits and viewing the log in a Git repository.</p>
    <ol>
      <li>Initialize a new repository:
        <CodeMirror :code="`git init`" language="bash" :read-only="true" />
      </li>
      <li>Create and edit a file, then add and commit it:
        <CodeMirror :code="`echo 'First version' > file.txt\ngit add file.txt\ngit commit -m 'Add first version'`" language="bash" :read-only="true" />
      </li>
      <li>Make more changes and commit again:
        <CodeMirror :code="`echo 'Second version' >> file.txt\ngit add file.txt\ngit commit -m 'Update file'`" language="bash" :read-only="true" />
      </li>
      <li>View the commit log:
        <CodeMirror :code="`git log --oneline`" language="bash" :read-only="true" />
      </li>
    </ol>
    <div class="notification is-info is-light mt-4">
      <i class="fas fa-lightbulb mr-2"></i> Try making more commits and see how the log grows.
    </div>
  </div>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';
</script>

<script>
export default {
  frontmatter: {
    title: 'Commit Practice',
    description: 'Make multiple commits and view the log.',
    tags: ['git', 'commit', 'log'],
    difficulty: 'Beginner',
    lastUpdated: '2025-05-27',
  },
};
</script>
