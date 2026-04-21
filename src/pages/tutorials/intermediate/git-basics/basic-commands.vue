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
          <a href="#" aria-current="page">Basic Commands</a>
        </li>
      </ul>
    </nav>

    <div class="tags">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">15 minutes</span>
      <span class="tag is-success">Git</span>
      <span class="tag is-success">Level 1</span>
    </div>

    <h1 class="title is-1">
      <i class="fas fa-terminal mr-2"></i>
      Basic Git Commands
    </h1>

    <!-- Hunter Element 1: Anticipatory Set -->
    <AnticipatorySet
      title="Start Here"
      :hook="`<p>You've got Git installed—now it's time to actually USE it! Think of these commands as the basic vocabulary of a new language. Once you learn these few essential words, you can start having conversations with Git.</p>`"
      :reflection-prompts="[
        'Have you ever wanted to undo changes you made to a file?',
        'How do you currently save different versions of your work?'
      ]"
      connection="These four commands (init, status, add, commit) are the foundation of everything you will do with Git."
    />

    <!-- Hunter Element 2: Learning Objectives -->
    <LearningObjectives
      :objectives="[
        'Initialize a Git repository',
        'Stage and commit changes',
        'Check the status of your repository',
        'View commit history'
      ]"
      :prerequisites="[
        'Have Git installed and configured',
        'Have a project folder ready to use for practice'
      ]"
      purpose="These basic commands are the ones you will use every single day as a developer. Mastering them now builds the muscle memory you need for efficient version control."
    />

    <h2 class="title is-2">Step 1: Initialize a Repository</h2>
             <p>
        To start tracking a project with Git, use the <code>git init</code> command. This sets up a new Git repository in your project folder by creating a hidden <code>.git</code> folder, which Git uses to track changes.
      </p>
    <p>
      Open your terminal, navigate to your project folder, and run:
    </p>
    <CodeMirror
      :code="`git init`"
      language="bash"
      :read-only="true"
    />

 

    <h2 class="title is-2">Step 2: Check Repository Status</h2>
      <p>
      Use the <code>git status</code> command to see the current state of your repository. It shows which files are staged, unstaged, or untracked (new files not yet added to Git).
    </p>
    <p>
      To check the status of your repository, run:
    </p>
    <CodeMirror
      :code="`git status`"
      language="bash"
      :read-only="true"
    />


    <h2 class="title is-2">Step 3: Stage Changes</h2>
      <p>
      To prepare changes for a commit, you need to stage them. Use <code>git add &lt;file-name&gt;</code> to stage a specific file, or <code>git add .</code> to stage all changes in the repository. Staging means preparing the files to be included in the next snapshot of your project.
    </p>
    <p>
      To stage a specific file, use:
    </p>
    <CodeMirror
      :code="`git add <file-name>`"
      language="bash"
      :read-only="true"
    />
    <p>
      To stage all changes in the repository, use:
    </p>
    <CodeMirror
      :code="`git add .`"
      language="bash"
      :read-only="true"
    />

    <h2 class="title is-2">Step 4: Commit Changes</h2>
                <p>
          Once your changes are staged, use the <code>git commit -m 'Your commit message'</code> command to save them to the repository. The commit message should briefly describe the changes you made.
        </p>
    <p>
      To commit your staged changes, run:
    </p>
    <CodeMirror
      :code="`git commit -m 'Your commit message'`"
      language="bash"
      :read-only="true"
    />
    <p>
      The commit message should briefly describe the changes you made.
    </p>

    <h2 class="title is-2">Step 5: View Commit History</h2>
<p>
  Use the <code>git log</code> command to view the history of commits in your repository. Each commit includes details like the author, date, a unique hash identifier, and the commit message.
</p>
    <p>
      To see a list of all commits in your repository, use:
    </p>
    <CodeMirror
      :code="`git log`"
      language="bash"
      :read-only="true"
    />


    <!-- Interactive Demo -->
    <div class="box interactive-demo mb-6">
      <h3 class="title is-4">
        <i class="fas fa-hand-pointer"></i> Try It Yourself
      </h3>
      <p>
        Use the interactive terminal below to practice the basic Git commands:
      </p>
      <CodeMirror
        :code="`# Initialize a repository\ngit init\n\n# Check the status\ngit status\n\n# Stage a file\ngit add <file-name>\n\n# Commit changes\ngit commit -m 'Initial commit'\n\n# View commit history\ngit log`"
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

    <!-- Hunter Bottom Components -->
    <TestYourKnowledgeSection tutorial-path="/tutorials/intermediate/git-basics/basic-commands" />

    <ClosureSection
      title="🏁 Lesson Complete: Basic Git Commands"
      :key-takeaways="closureKeyTakeaways"
      :objectives="closureObjectives"
      :reflection-prompts="closureReflectionPrompts"
      :next-steps="`<p>Now that you know the basic commands, you're ready to learn about <strong>branching</strong>—one of Git's most powerful features for working on multiple things at once.</p>`"
    />

    <TutorialRecommendations :current-path="'/tutorials/intermediate/git-basics/basic-commands'" />

    <TutorialCompletion tutorial-path="/tutorials/intermediate/git-basics/basic-commands" />
  </div>
</template>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TestYourKnowledgeSection from '@/components/TestYourKnowledgeSection.vue';
import TutorialCompletion from '@/components/TutorialCompletion.vue';

useTutorialHead({
  title: 'Basic Git Commands',
  description: 'Learn the essential Git commands — init, add, commit, status, and log for tracking changes in your projects.',
  path: '/tutorials/intermediate/git-basics/basic-commands',
});

const closureKeyTakeaways = [
  'git init creates a new repository in your project folder',
  'git status shows you which files are modified, staged, or untracked',
  'git add stages files to prepare them for committing',
  'git commit saves a snapshot of your staged changes with a descriptive message',
  'git log shows your commit history so you can review past changes',
];

const closureObjectives = [
  'Initialize a Git repository',
  'Stage and commit changes',
  'Check the status of your repository',
  'View commit history',
];

const closureReflectionPrompts = [
  {
    title: '\ud83d\udcad Reflection Questions',
    questions: [
      'What is the difference between staging and committing?',
      'Why is it important to write clear commit messages?',
      'How often should you commit your changes?',
    ],
  },
];

const onQuizCompleted = (results) => {
  saveQuizResult('git-basics-basic-commands-quiz', results);
};
</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Basic Commands',
    description: 'Learn the basic Git commands to initialize, stage, commit, and view history',
    category: 'Git Basics',
    level: 'Beginner',
    order: 4,
    tags: ['git', 'commands', 'beginner', 'tutorial'],
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
  background-color: #f9f9f9;
  border-left: 4px solid #ffdd57;
  padding: 1.5rem;
  border-radius: 4px;
}
</style>