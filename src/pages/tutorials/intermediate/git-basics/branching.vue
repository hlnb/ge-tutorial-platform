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
          <a href="#" aria-current="page">Branching</a>
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
      <i class="fas fa-code-branch mr-2"></i>
      Git Branching
    </h1>

    <!-- Learning Objectives -->
    <div class="box highlight-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-graduation-cap"></i> Learning Objectives
      </h3>
      <p>After completing this section, you'll be able to:</p>
      <ul>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand what branches are and why they are useful</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Create and switch between branches</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Merge branches to combine changes</li>
        <li><i class="fas fa-check-circle has-text-success mr-2"></i>Resolve merge conflicts</li>
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
          Be familiar with basic Git commands - <router-link to="/tutorials/git-basics/basic-commands">Review Basic Commands</router-link>
        </li>
        <li>
          <i class="fas fa-folder has-text-warning mr-2"></i>
          Have a Git repository ready to practice with
        </li>
      </ul>
    </div>

    <h2 class="title is-2">What is a Branch?</h2>
    <p>
      A branch in Git is like a parallel version of your project. It allows you to work on new features, bug fixes, or experiments without affecting the main codebase.
    </p>
    <p>
      Think of branches as alternate timelines in your project. You can create a branch, make changes, and then merge it back into the main timeline when you're ready.
    </p>

    <h2 class="title is-2">Step 1: Create a Branch</h2>
    <p>
      To create a new branch, use the following command:
    </p>
    <CodeMirror
      :code="`git branch <branch-name>`"
      language="bash"
      :read-only="true"
    />
    <p>
      Replace <code>&lt;branch-name&gt;</code> with the name of your branch. For example:
    </p>
    <CodeMirror
      :code="`git branch feature-login`"
      language="bash"
      :read-only="true"
    />
    <p>
      This creates a new branch called <code>feature-login</code>, but it does not switch to it yet.
    </p>

    <h2 class="title is-2">Step 2: Switch to a Branch</h2>
    <p>
      To switch to a branch, use the following command:
    </p>
    <CodeMirror
      :code="`git checkout <branch-name>`"
      language="bash"
      :read-only="true"
    />
    <p>
      For example:
    </p>
    <CodeMirror
      :code="`git checkout feature-login`"
      language="bash"
      :read-only="true"
    />
    <p>
      This switches your working directory to the <code>feature-login</code> branch. Any changes you make will now be saved to this branch.
    </p>

    <h2 class="title is-2">Step 3: Merge a Branch</h2>
    <p>
      Once you've finished working on a branch, you can merge it back into the main branch (usually called <code>main</code> or <code>master</code>). First, switch to the branch you want to merge into:
    </p>
    <CodeMirror
      :code="`git checkout main`"
      language="bash"
      :read-only="true"
    />
    <p>
      Then, merge the branch using:
    </p>
    <CodeMirror
      :code="`git merge <branch-name>`"
      language="bash"
      :read-only="true"
    />
    <p>
      For example:
    </p>
    <CodeMirror
      :code="`git merge feature-login`"
      language="bash"
      :read-only="true"
    />
    <p>
      This combines the changes from <code>feature-login</code> into the <code>main</code> branch.
    </p>

    <h2 class="title is-2">Step 4: Resolve Merge Conflicts</h2>
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

    <!-- Interactive Demo -->
    <div class="box interactive-demo mb-6">
      <h3 class="title is-4">
        <i class="fas fa-hand-pointer"></i> Try It Yourself
      </h3>
      <p>
        Use the interactive terminal below to practice creating, switching, and merging branches:
      </p>
      <CodeMirror
        :code="`# Create a branch\ngit branch feature-login\n\n# Switch to the branch\ngit checkout feature-login\n\n# Merge the branch\ngit checkout main\ngit merge feature-login`"
        language="bash"
        :read-only="false"
      />
    </div>

        <h2 class="title is-2">Setting Up Git in VS Code</h2>
    <p>
      Visual Studio Code has built-in Git support, making it easy to manage your repositories directly from the editor. Follow these steps to set up Git in VS Code:
    </p>
    
    <h3 class="title is-4">Step 1: Open the Source Control Panel</h3>
    <p>
      Click on the <i class="fas fa-code-branch"></i> Source Control icon in the Activity Bar on the left side of the editor. If you have a Git repository initialized in your project folder, it will automatically appear here.
    </p>
    
    <h3 class="title is-4">Step 2: Configure Git in VS Code</h3>
    <p>
      If you haven't already configured Git globally, VS Code will prompt you to set your name and email. You can also configure it manually by running the following commands in the integrated terminal:
    </p>
    <CodeMirror
      :code="`git config --global user.name 'Your Name'\ngit config --global user.email 'your.email@example.com'`"
      language="bash"
      :read-only="true"
    />
    
    <h3 class="title is-4">Step 3: Commit Changes</h3>
    <p>
      To commit changes, stage your files by clicking the <i class="fas fa-plus"></i> icon next to the file name in the Source Control panel. Then, enter a commit message in the text box and click the checkmark icon to commit.
    </p>
    
    <h3 class="title is-4">Step 4: Push and Pull Changes</h3>
    <p>
      Use the Source Control panel to push your changes to a remote repository or pull changes from it. You can also use the integrated terminal to run <code>git push</code> and <code>git pull</code> commands.
    </p>
    
    <h3 class="title is-4">Step 5: View Git History</h3>
    <p>
      Install the <a href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory" target="_blank">Git History</a> extension to view your commit history in a visual format. This can be helpful for tracking changes and understanding your project's timeline.
    </p>
    <!-- Tutorial Quiz -->
    <div class="quiz-box mt-6">
      <h2 class="title is-4"><i class="fas fa-question-circle"></i> Quick Quiz: Git Branching</h2>
      <TutorialQuiz :quiz-id="'git-basics-branching'" />
    </div>

    <!-- Tutorial Recommendations -->
    <TutorialRecommendations :current-path="'/tutorials/git-basics/branching'" />

    <div class="level mt-6">
      <div class="level-left">
        <div class="level-item">
          <router-link to="/tutorials/git-basics/basic-commands" class="button is-info">
            <i class="fas fa-arrow-left mr-2"></i> Previous: Basic Commands
          </router-link>
        </div>
      </div>
            <div class="level-right">
        <div class="level-item">
          <router-link to="/tutorials/git-basics/merging" class="button is-success">
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
import { useProgress } from '@/composables/useProgress';

// Initialize progress tracking
const { trackTutorial, saveQuizResult } = useProgress();

onMounted(() => {
  trackTutorial('/tutorials/git-basics/branching');
});

const onQuizCompleted = (results) => {
  saveQuizResult('git-basics-branching-quiz', results);
};
</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Branching',
    description: 'Learn how to create, switch, and merge branches in Git',
    category: 'Git Basics',
    level: 'Beginner',
    order: 4,
    tags: ['git', 'branching', 'version control', 'tutorial'],
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

.quiz-box {
  background-color: #fff8f0;
  border-left: 4px solid #ffdd57;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
</style>