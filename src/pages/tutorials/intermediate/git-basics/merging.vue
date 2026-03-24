<template>
  <div class="tutorial-content">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li><router-link to="/tutorials/intermediate/git-basics">Git Basics</router-link></li>
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

    <!-- Hunter Element 1: Anticipatory Set -->
    <AnticipatorySet
      title="Start Here"
      :hook="`<p>You've learned how to create branches and work on separate features. But what happens when it's time to bring everything together? Merging is how you combine work from different branches—and knowing how to handle conflicts when they arise is a critical developer skill.</p>`"
      :reflection-prompts="[
        'What do you think happens when two people edit the same line of code?',
        'How would you decide which changes to keep and which to discard?'
      ]"
      connection="Let's learn how Git merging works and how to resolve conflicts like a pro."
    />

    <!-- Hunter Element 2: Learning Objectives -->
    <LearningObjectives
      :objectives="[
        'Understand what merging is and why it is important',
        'Merge branches in Git',
        'Resolve merge conflicts',
        'Follow best practices for merging'
      ]"
      :prerequisites="[
        'Be familiar with Git branching',
        'Have a Git repository with multiple branches to practice merging'
      ]"
      purpose="Merging is how collaborative development works. Every pull request, every feature—they all end with a merge. Understanding this process is essential for working on any team."
    />

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

    <!-- Hunter Bottom Components -->
    <TestYourKnowledgeSection tutorial-path="/tutorials/intermediate/git-basics/merging" />

    <ClosureSection
      title="🏁 Lesson Complete: Git Merging"
      :key-takeaways="closureKeyTakeaways"
      :objectives="closureObjectives"
      :reflection-prompts="closureReflectionPrompts"
      :next-steps="`<p>Now that you can merge branches and resolve conflicts, it's time to learn about <strong>remote repositories</strong>—how to share your code with the world using GitHub or GitLab.</p>`"
    />

    <TutorialRecommendations :current-path="'/tutorials/intermediate/git-basics/merging'" />

    <TutorialCompletion tutorial-path="/tutorials/intermediate/git-basics/merging" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TestYourKnowledgeSection from '@/components/TestYourKnowledgeSection.vue';
import TutorialCompletion from '@/components/TutorialCompletion.vue';

const closureKeyTakeaways = [
  'Merging combines changes from one branch into another',
  'Always switch to the target branch (e.g., main) before running git merge',
  'Merge conflicts occur when the same lines are changed in both branches',
  'Resolve conflicts by editing the file, then staging and committing',
  'Best practices: pull latest changes before merging, test after merging, write clear commit messages',
];

const closureObjectives = [
  'Understand what merging is and why it is important',
  'Merge branches in Git',
  'Resolve merge conflicts',
  'Follow best practices for merging',
];

const closureReflectionPrompts = [
  {
    title: '\ud83d\udcad Reflection Questions',
    questions: [
      'What strategies can you use to minimize merge conflicts?',
      'Why should you test your code after a merge?',
      'How does merging relate to the pull request workflow?',
    ],
  },
];

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
    order: 6,
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