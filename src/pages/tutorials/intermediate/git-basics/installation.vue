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
          <a href="#" aria-current="page">Installation</a>
        </li>
      </ul>
    </nav>

    <div class="tags">
      <span class="tag is-info">Beginner</span>
      <span class="tag is-warning">20 minutes</span>
      <span class="tag is-success">Git</span>
      <span class="tag is-success">Level 1</span>
    </div>

    <h1 class="title is-1">
      <i class="fas fa-code-branch mr-2"></i>
      Installing Git & Recommended Tools
    </h1>

    <!-- Hunter Element 1: Anticipatory Set -->
    <AnticipatorySet
      title="Start Here"
      :hook="`<p>Before you can start tracking your code, you need the right tools installed. Think of this like a carpenter setting up their workshop—you need your tools ready before you can build anything.</p><p>The good news? Installing Git takes just a few minutes, and once it's done, you're ready to start versioning your projects!</p>`"
      :reflection-prompts="[
        'Have you ever installed a command-line tool before?',
        'Do you know which operating system you are using?'
      ]"
      connection="Let's get Git installed and configured so you can start using it right away."
    />

    <!-- Hunter Element 2: Learning Objectives -->
    <LearningObjectives
      :objectives="[
        'Install Git on your operating system',
        'Configure Git with your name and email',
        'Verify your Git installation',
        'Explore recommended GUI tools for Git'
      ]"
      :prerequisites="[
        'Be comfortable using the command line',
        'Have administrator privileges on your computer'
      ]"
      purpose="Having Git properly installed and configured is the foundation for everything else in this tutorial series. A correct setup now prevents frustrating issues later."
    />

    <h2 class="title is-2">Step 1: Install Git</h2>
    <p>
      Git is available for Windows, macOS, and Linux. Follow the instructions below to install Git on your operating system:
    </p>

    <div class="columns">
      <div class="column">
        <div class="box">
          <h3 class="title is-4">Windows</h3>
          <p>
            Visit the official Git website: <a href="https://git-scm.com/" target="_blank">https://git-scm.com/</a>
          </p>
          <p>Download the installer and follow the setup wizard.</p>
          <p>
            During installation, select the following options:
          </p>
          <ul>
            <li>Use Git from the command line and third-party software</li>
            <li>Use the default editor (or choose your preferred editor)</li>
            <li>Use Git from Git Bash only</li>
          </ul>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">macOS</h3>
          <p>
            Open the Terminal and type the following command:
          </p>
          <CodeMirror
            :code="'xcode-select --install'"
            language="bash"
            :read-only="true"
          />
          <p>
            This will install Git along with the Xcode Command Line Tools.
          </p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">Linux</h3>
          <p>
            Use your package manager to install Git. For example:
          </p>
          <CodeMirror
          :code="'sudo apt install git\nsudo yum install git'"
          language="bash"
          :read-only="true"
        />
        </div>
      </div>
    </div>

    <h2 class="title is-2">Step 2: Configure Git</h2>
    <p>
      After installing Git, you need to configure your identity. This information will be attached to your commits.
    </p>
    <CodeMirror
        :code="`git config --global user.name 'Your Name'
git config --global user.email 'your.email@example.com'`"
        language="bash"
        :read-only="true"
    />
    <p>
      To verify your configuration, run:
    </p>
    <CodeMirror
      :code="'git config --list'"
      language="bash"
      :read-only="true"
    />

    <h2 class="title is-2">Step 3: Verify Installation</h2>
    <p>
      To ensure Git is installed correctly, run the following command:
    </p>
    <CodeMirror
      :code="'git --version'"
      language="bash"
      :read-only="true"
    />
    <p>
      You should see the installed version of Git.
    </p>

    <h2 class="title is-2">Recommended GUI Tools</h2>
    <p>
      While Git is primarily used via the command line, there are several GUI tools that make it easier to visualize and manage your repositories:
    </p>
    <div class="columns">
      <div class="column">
        <div class="box">
          <h3 class="title is-4">GitHub Desktop</h3>
          <p>
            A free and user-friendly Git client for Windows and macOS. Ideal for beginners.
          </p>
          <p>
            <a href="https://desktop.github.com/" target="_blank">Download GitHub Desktop</a>
          </p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">Sourcetree</h3>
          <p>
            A powerful Git GUI client for Windows and macOS, developed by Atlassian.
          </p>
          <p>
            <a href="https://www.sourcetreeapp.com/" target="_blank">Download Sourcetree</a>
          </p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <h3 class="title is-4">GitKraken</h3>
          <p>
            A cross-platform Git client with a sleek interface and advanced features.
          </p>
          <p>
            <a href="https://www.gitkraken.com/" target="_blank">Download GitKraken</a>
          </p>
        </div>
      </div>
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
    <TestYourKnowledgeSection tutorial-path="/tutorials/intermediate/git-basics/installation" />

    <ClosureSection
      title="🏁 Lesson Complete: Git Installation"
      :key-takeaways="closureKeyTakeaways"
      :objectives="closureObjectives"
      :reflection-prompts="closureReflectionPrompts"
      :next-steps="`<p>Now that Git is installed and configured, you're ready to learn the <strong>basic Git commands</strong> for tracking your code changes.</p>`"
    />

    <TutorialRecommendations :current-path="'/tutorials/intermediate/git-basics/installation'" />

    <TutorialCompletion tutorial-path="/tutorials/intermediate/git-basics/installation" />
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
  'Git can be installed on Windows, macOS, and Linux with just a few steps',
  'Configuring your name and email is essential so Git can identify your commits',
  'Use git --version to verify your installation is working',
  'GUI tools like VS Code, Sourcetree, and GitKraken make Git more visual and beginner-friendly',
  'VS Code has built-in Git support for staging, committing, pushing, and pulling',
];

const closureObjectives = [
  'Install Git on your operating system',
  'Configure Git with your name and email',
  'Verify your Git installation',
  'Explore recommended GUI tools for Git',
];

const closureReflectionPrompts = [
  {
    title: '\ud83d\udcad Reflection Questions',
    questions: [
      'Were you able to install Git without issues? If not, what problems did you encounter?',
      'Do you prefer using Git from the command line or a GUI tool?',
      'Why is it important to set your name and email in Git?',
    ],
  },
];

const onQuizCompleted = (results) => {
  saveQuizResult('git-basics-installation-quiz', results);
};
</script>

<script>
// Frontmatter for the tutorial
export default {
  frontmatter: {
    title: 'Installation & Setup',
    description: 'Learn how to install and configure Git on your system',
    category: 'Git Basics',
    level: 'Beginner',
    order: 2,
    tags: ['git', 'installation', 'setup', 'beginner'],
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

.code-example pre {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 16px;
  overflow-x: auto;
}

.code-example code {
  color: #24292e;
  font-family: monospace;
}
</style>