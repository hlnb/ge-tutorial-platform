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
        <li><router-link to="/tutorials/git-basics">Git Basics</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">Merging</a>
        </li>
      </ul>
    </nav>

    <div class="tags">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">30 minutes</span>
      <span class="tag is-success">Git</span>
      <span class="tag is-success">Level 2</span>
    </div>

    <h1 class="title is-1">
      <i class="fas fa-object-group mr-2"></i>
      Merging in Git
    </h1>

    <!-- Learning Objectives -->
    <div class="box highlight-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-graduation-cap"></i> Learning Objectives
      </h3>
      <p>After completing this section, you'll be able to:</p>
      <ul>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand what merging is and why it's important</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Merge branches in Git</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Resolve merge conflicts</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Follow best practices for merging</li>
      </ul>
    </div>

    <!-- Prerequisites -->
    <div class="box prerequisite-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-clipboard-check"></i> Before You Start
      </h3>
      <p>To get the most out of this section, you should:</p>
      <ul>
        <li>
          <i class="fas fa-terminal has-text-dark mr-2"></i>
          Be familiar with Git branching - <router-link to="/tutorials/git-basics/branching">Review Branching</router-link>
        </li>
        <li>
          <i class="fas fa-folder has-text-warning mr-2"></i>
          Have a Git repository with multiple branches to practice merging
        </li>
      </ul>
    </div>

    <h2 class="title is-2">What is Merging?</h2>
    <p>
      Merging in Git is the process of combining changes from one branch into another. It allows you to integrate new features, bug fixes, or updates into your main codebase.
    </p>

    <h2 class="title is-2">Step 1: Merge a Branch</h2>
    <p>
      To merge a branch into your current branch, use the following command:
    </p>
    <CodeMirror
      :code="`git merge <branch-name>`"
      language="bash"
      :read-only="true"
    />
    <p>
      For example, to merge the <code>feature-login</code> branch into the <code>main</code> branch:
    </p>
    <CodeMirror
      :code="`git checkout main\ngit merge feature-login`"
      language="bash"
      :read-only="true"
    />

    <h2 class="title is-2">Step 2: Resolve Merge Conflicts</h2>
    <p>
      Sometimes, Git cannot automatically merge changes because the same lines of code were modified in both branches. This is called a merge conflict.
    </p>
    <p>
      Git will mark the conflicting files and ask you to resolve the conflicts manually. Open the files, look for the conflict markers (e.g., <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>), and decide which changes to keep.
    </p>
    <p>
      After resolving the conflicts, stage the changes and complete the merge:
    </p>
    <CodeMirror
      :code="`git add <file-name>\ngit commit`"
      language="bash"
      :read-only="true"
    />

    <h2 class="title is-2">Best Practices for Merging</h2>
    <ul>
      <li>Always pull the latest changes from the remote repository before merging</li>
      <li>Test your code after merging to ensure everything works as expected</li>
      <li>Write clear commit messages for merge commits</li>
    </ul>

    <!-- Interactive Demo -->
    <div class="box interactive-demo mb-6">
      <h3 class="title is-4">
        <i class="fas fa-hand-pointer"></i> Try It Yourself
      </h3>
      <p>
        Use the interactive terminal below to practice merging branches:
      </p>
      <CodeMirror
        :code="`# Merge a branch\ngit checkout main\ngit merge feature-login\n\n# Resolve conflicts\ngit add <file-name>\ngit commit`"
        language="bash"
        :read-only="false"
      />
    </div>

    <!-- Tutorial Quiz -->
    <TutorialQuiz :quiz-id="'git-basics-merging-quiz'" @quiz-completed="onQuizCompleted" />

    <!-- Tutorial Recommendations -->
    <TutorialRecommendations :current-path="'/tutorials/git-basics/merging'" />

    <div class="level mt-6">
      <div class="level-left">
        <div class="level-item">
          <router-link to="/tutorials/git-basics/branching" class="button is-info">
            <i class="fas fa-arrow-left mr-2"></i> Previous: Branching
          </router-link>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <router-link to="/tutorials/git-basics/remote-repositories" class="button is-success">
            Next: Remote Repositories <i class="fas fa-arrow-right ml-2"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { useProgressTracking } from '@/utils/progressUtils';

// Initialize progress tracking
const { trackTutorial, saveQuizResult } = useProgressTracking();

// Track tutorial on mount
onMounted(() => {
  trackTutorial('/tutorials/git-basics/merging');
});

// Quiz handling
const onQuizCompleted = (results) => {
  saveQuizResult('git-basics-merging-quiz', results);
};
</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Merging',
    description: 'Learn how to merge branches in Git and resolve conflicts',
    category: 'Git Basics',
    level: 'Beginner',
    order: 4,
    tags: ['git', 'merging', 'branches', 'tutorial'],
    lastUpdated: '2025-05-12',
  },
};
</script>

<style scoped>
.highlight-box {
  background-color: #fafafa;
  border-left: 4px solid #f05033;
}

.prerequisite-box {
  background-color: #f8f9fa;
  border-left: 4px solid #3273dc;
}

.interactive-demo {
  background-color: #f0f8ff;
  border-left: 4px solid #00d1b2;
}
</style>