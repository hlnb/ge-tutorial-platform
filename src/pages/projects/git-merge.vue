<template>
  <div class="content">
    <h1 class="title is-1"><i class="fas fa-code-merge mr-2"></i> Merge Conflict Practice</h1>
    <div class="tags mb-4">
      <span class="tag is-success">Git</span>
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">Project</span>
    </div>
    <p>Practice resolving merge conflicts in a sample repository.</p>
    <ol>
      <li>Initialize a new repository and create a file:
        <CodeMirror :code="`git init\necho 'Line 1' > file.txt\ngit add file.txt\ngit commit -m 'Initial commit'`" language="bash" :read-only="true" />
      </li>
      <li>Create and switch to a new branch, make a change, and commit:
        <CodeMirror :code="`git checkout -b feature\necho 'Feature change' >> file.txt\ngit commit -am 'Feature change'`" language="bash" :read-only="true" />
      </li>
      <li>Switch back to main, make a conflicting change, and commit:
        <CodeMirror :code="`git checkout main\necho 'Main change' >> file.txt\ngit commit -am 'Main change'`" language="bash" :read-only="true" />
      </li>
      <li>Try to merge the feature branch:
        <CodeMirror :code="`git merge feature`" language="bash" :read-only="true" />
        <p>You should see a merge conflict. Open <code>file.txt</code> and resolve the conflict, then run:</p>
        <CodeMirror :code="`git add file.txt\ngit commit`" language="bash" :read-only="true" />
      </li>
    </ol>
    <div class="notification is-warning is-light mt-4">
      <i class="fas fa-exclamation-triangle mr-2"></i> Merge conflicts are a normal part of collaboration. Practice resolving them!
    </div>
  </div>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';
</script>

<script>
export default {
  frontmatter: {
    title: 'Merge Conflict Practice',
    description: 'Practice resolving merge conflicts in a sample repo.',
    tags: ['git', 'merge', 'conflict'],
    difficulty: 'Beginner',
    lastUpdated: '2025-05-27',
  },
};
</script>
