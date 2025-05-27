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
      Merging in Git is the process of combining the changes from one branch into another. This is a core part of collaborative workflows and feature development.
    </p>
    <p>
      The most common merge is bringing changes from a feature branch into the <code>main</code> branch after the feature is complete.
    </p>

    <h2 class="title is-2">How to Merge Branches</h2>
    <ol>
      <li>
        <strong>Switch to the branch you want to merge into (usually <code>main</code>):</strong>
        <CodeMirror :code="`git checkout main`" language="bash" :read-only="true" />
      </li>
      <li>
        <strong>Run the merge command:</strong>
        <CodeMirror :code="`git merge feature-branch`" language="bash" :read-only="true" />
        <p>This will bring the changes from <code>feature-branch</code> into <code>main</code>.</p>
      </li>
    </ol>

    <h2 class="title is-2">Merge Conflicts</h2>
    <p>
      Sometimes, Git can't automatically combine changes and will report a <strong>merge conflict</strong>. This happens when the same part of a file was changed in both branches.
    </p>
    <ol>
      <li>
        <strong>Git will mark the conflict in your files:</strong>
        <CodeMirror :code="`<<<<<<< HEAD\nYour changes\n=======\nIncoming changes\n>>>>>>> feature-branch`" language="diff" :read-only="true" />
      </li>
      <li>
        <strong>Edit the file to resolve the conflict, then stage and commit:</strong>
        <CodeMirror :code="`git add <file>\ngit commit`" language="bash" :read-only="true" />
      </li>
    </ol>

    <div class="notification is-info is-light">
      <p>
        <i class="fas fa-lightbulb mr-2"></i>
        <strong>Tip:</strong> Use <code>git status</code> to see which files have conflicts and need to be resolved.
      </p>
    </div>

    <h2 class="title is-2">Best Practices for Merging</h2>
    <ul>
      <li>Pull the latest changes from <code>main</code> before merging your branch</li>
      <li>Resolve conflicts as soon as they arise</li>
      <li>Test your code after merging</li>
      <li>Write clear commit messages when resolving conflicts</li>
    </ul>

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
    description: 'Learn how to merge branches and resolve conflicts in Git',
    category: 'Git Basics',
    level: 'Beginner',
    order: 5,
    tags: ['git', 'merging', 'conflict', 'tutorial'],
    lastUpdated: '2025-05-27',
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
</style>