<script setup>
import { computed, ref } from 'vue';
import { useTutorialHead } from '@/composables/useTutorialHead';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import '@/assets/styles/tutorials.css';

const props = defineProps({
  lessonId: {
    type: String,
    required: true,
  },
});

const overviewPath =
  '/tutorials/deployments/getting-a-website-online-hosting-deployment-continuous-improvement';

const lessonSequence = [
  {
    id: 'overview',
    orderLabel: 'Overview',
    title: 'Getting a Website Online',
    shortTitle: 'Overview',
    path: overviewPath,
    duration: 'Total: 100-130 min',
    description:
      'Follow the full deployment pathway from local files to hosting, Vite builds, domains, testing, troubleshooting, and continuous improvement.',
    keywords:
      'website deployment tutorial, web hosting for beginners, deploy website, Vite deployment, DNS for beginners',
  },
  {
    id: 'understanding-hosting-and-deployment',
    orderLabel: 'Lesson 1',
    title: 'Understanding Hosting and Deployment',
    shortTitle: 'Hosting and Deployment',
    path: '/tutorials/deployments/understanding-hosting-and-deployment',
    duration: '10-15 min',
    description:
      'Learn what website deployment means, how local files differ from live sites, and why a site working locally is not enough deployment evidence.',
    keywords:
      'what website deployment means, local website vs live website, web host server browser',
  },
  {
    id: 'choosing-a-hosting-path',
    orderLabel: 'Lesson 2',
    title: 'Choosing a Hosting Path',
    shortTitle: 'Hosting Path',
    path: '/tutorials/deployments/choosing-a-hosting-path',
    duration: '15-20 min',
    description:
      'Compare traditional hosting, manual static hosting, and Git-based deployment so you can choose a sensible path for a student, portfolio, or business site.',
    keywords:
      'types of website hosting, static hosting, Git based deployment, beginner hosting choices',
  },
  {
    id: 'deploying-a-static-html-css-javascript-site',
    orderLabel: 'Lesson 3',
    title: 'Deploying a Plain HTML, CSS and JavaScript Website',
    shortTitle: 'Deploy Static Site',
    path: '/tutorials/deployments/deploying-a-static-html-css-javascript-site',
    duration: '20-25 min',
    description:
      'Prepare, publish, and test a small static HTML, CSS, and JavaScript site using a beginner-friendly deployment method.',
    keywords:
      'deploy HTML CSS JavaScript website, deploy static website, index.html hosting folder',
  },
  {
    id: 'building-and-deploying-a-vite-site',
    orderLabel: 'Lesson 4',
    title: 'Building and Deploying a Vite Website',
    shortTitle: 'Deploy Vite Site',
    path: '/tutorials/deployments/building-and-deploying-a-vite-site',
    duration: '20-25 min',
    description:
      'Understand the Vite development server, production build, dist folder, build command, output directory, and common deployment mistakes.',
    keywords:
      'deploy Vite website, npm run build, Vite dist folder, Vercel Netlify Vite settings',
  },
  {
    id: 'domains-dns-and-going-live',
    orderLabel: 'Lesson 5',
    title: 'Domains, DNS and Going Live',
    shortTitle: 'Domains and DNS',
    path: '/tutorials/deployments/domains-dns-and-going-live',
    duration: '15-20 min',
    description:
      'Learn how domains, DNS records, nameservers, HTTPS, apex domains, and www subdomains fit into a website going live.',
    keywords:
      'domains and DNS for beginners, A record CNAME nameservers, connect domain to website',
  },
  {
    id: 'testing-troubleshooting-and-continuous-improvement',
    orderLabel: 'Lesson 6',
    title: 'Testing, Troubleshooting and Continuous Improvement',
    shortTitle: 'Testing and Improvement',
    path: '/tutorials/deployments/testing-troubleshooting-and-continuous-improvement',
    duration: '20-25 min',
    description:
      'Test a live deployment, troubleshoot common deployment problems, use a checklist, and create a repeatable improvement workflow.',
    keywords:
      'deployment testing checklist, troubleshoot website deployment, live site not updating, missing CSS deployed site',
  },
];

const lessons = lessonSequence.slice(1);
const currentLesson = computed(
  () => lessonSequence.find((lesson) => lesson.id === props.lessonId) || lessonSequence[0],
);
const currentIndex = computed(() =>
  lessonSequence.findIndex((lesson) => lesson.id === currentLesson.value.id),
);
const previousLesson = computed(() => lessonSequence[currentIndex.value - 1] || null);
const nextLesson = computed(() => lessonSequence[currentIndex.value + 1] || null);

useTutorialHead({
  title: currentLesson.value.title,
  description: currentLesson.value.description,
  keywords: currentLesson.value.keywords,
  path: currentLesson.value.path,
  breadcrumbs: [
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Deployments', path: '/tutorials/deployments' },
    { name: currentLesson.value.shortTitle, path: currentLesson.value.path },
  ],
});

const sectionMap = {
  overview: [
    { id: 'sequence', title: 'Lesson Sequence' },
    { id: 'prerequisites', title: 'Prerequisites' },
    { id: 'static-vs-vite', title: 'Static and Vite Paths' },
    { id: 'resources', title: 'Resources' },
  ],
  'understanding-hosting-and-deployment': [
    { id: 'what-deployment-means', title: 'What Deployment Means' },
    { id: 'key-terms', title: 'Key Terms' },
    { id: 'local-vs-live', title: 'Local vs Live' },
    { id: 'checkpoint', title: 'Checkpoint' },
    { id: 'inspection-exercise', title: 'Inspection Exercise' },
  ],
  'choosing-a-hosting-path': [
    { id: 'hosting-paths', title: 'Hosting Paths' },
    { id: 'student-options', title: 'Student Options' },
    { id: 'static-vs-dynamic', title: 'Static vs Dynamic' },
    { id: 'decision-exercise', title: 'Decision Exercise' },
  ],
  'deploying-a-static-html-css-javascript-site': [
    { id: 'project-shape', title: 'Project Shape' },
    { id: 'folder-nesting', title: 'Folder Nesting' },
    { id: 'guided-practice', title: 'Guided Practice' },
    { id: 'live-testing', title: 'Live Testing' },
  ],
  'building-and-deploying-a-vite-site': [
    { id: 'vite-builds', title: 'Vite Builds' },
    { id: 'repo-settings', title: 'This Project Settings' },
    { id: 'guided-practice', title: 'Guided Practice' },
    { id: 'common-mistakes', title: 'Common Mistakes' },
  ],
  'domains-dns-and-going-live': [
    { id: 'domain-dns-roles', title: 'Domain and DNS Roles' },
    { id: 'dns-records', title: 'DNS Records' },
    { id: 'dns-path', title: 'DNS Path' },
    { id: 'ownership-notes', title: 'Ownership Notes' },
  ],
  'testing-troubleshooting-and-continuous-improvement': [
    { id: 'testing-system', title: 'Testing System' },
    { id: 'common-problems', title: 'Common Problems' },
    { id: 'continuous-improvement', title: 'Continuous Improvement' },
    { id: 'deployment-checklist', title: 'Deployment Checklist' },
    { id: 'reflection', title: 'Reflection' },
  ],
};

usePageSections(sectionMap[currentLesson.value.id] || sectionMap.overview);

const copyStatus = ref('Copy checklist');

const checklistMarkdown = `# Deployment Checklist

Use this checklist before and after deploying a website.

## Project details

| Item | Details |
|---|---|
| Project name |  |
| Deployment method |  |
| Hosting service |  |
| Live URL |  |
| Repository URL |  |
| Build command |  |
| Output or public folder |  |
| Date deployed |  |

## Files and folders

- [ ] The homepage is named \`index.html\`.
- [ ] CSS, JavaScript, images and fonts are inside the project folder.
- [ ] Paths are relative, not local paths from one computer.
- [ ] File and folder names are simple, consistent and lowercase.
- [ ] The correct folder will be uploaded or published.
- [ ] For Vite projects, the production build has been created.
- [ ] For Vite projects, the output folder matches the host settings.

## Content and accessibility

- [ ] The page title and main heading are meaningful.
- [ ] Placeholder content has been removed.
- [ ] Links and buttons use clear text.
- [ ] Images have useful alt text where needed.
- [ ] Text is readable on mobile.
- [ ] Keyboard focus is visible.
- [ ] Colour contrast is acceptable.

## Live testing

- [ ] The live URL opens in a normal browser window.
- [ ] The live URL opens in a private browser window.
- [ ] CSS loads on the live site.
- [ ] JavaScript interactions work on the live site.
- [ ] Images load on the live site.
- [ ] Main navigation links work.
- [ ] The browser console has no obvious errors.
- [ ] Updates appear after deployment, or caching has been checked.

## Improvement log

| Date | Issue or improvement | Change made | Tested locally? | Tested live? | Notes |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

If something fails, that is not failure. That is testing doing its job.`;

const hostingReadinessQuestions = [
  {
    question: 'Why is "it works on my laptop" not enough evidence?',
    answer:
      'Local testing can hide missing files, local-only paths, case-sensitive filename problems, mobile issues, cache confusion, and deployment folder mistakes.',
  },
  {
    question: 'What file does a static host usually look for first?',
    answer:
      'Most static hosts look for index.html in the public website folder or publish directory.',
  },
  {
    question: 'Why should filenames be simple and lowercase?',
    answer:
      'Many servers treat uppercase and lowercase names as different. Simple lowercase names reduce broken CSS, JavaScript, image and link paths.',
  },
];

const staticGuidedPracticeSteps = [
  {
    title: 'Create a tiny deployment test folder',
    instructions:
      '<p>Create a folder called <code>deployment-test</code>. Inside it, add <code>index.html</code>, <code>styles.css</code>, and <code>script.js</code>. Keep the first deployment deliberately small.</p>',
    hints: ['Put the three files at the top level of the folder.'],
  },
  {
    title: 'Test it locally',
    instructions:
      '<p>Open <code>index.html</code> in a browser. Confirm the stylesheet loads and the button changes the message.</p>',
    hints: ['Fix local CSS or JavaScript problems before publishing.'],
  },
  {
    title: 'Publish using one beginner-friendly method',
    instructions:
      '<p>Use traditional hosting, a manual static upload, GitHub Pages, or a Git-connected host. Follow the provider instructions and upload or publish the folder that contains <code>index.html</code>.</p>',
    hints: ['Check provider documentation for current limits, plan rules and upload steps.'],
  },
  {
    title: 'Test the live URL',
    instructions:
      '<p>Open the published URL in a normal browser and a private browser window. Check the text, layout, button, CSS and console.</p>',
    hints: ['Testing the live URL is deployment evidence.'],
  },
];

const viteGuidedPracticeSteps = [
  {
    title: 'Run the development version',
    instructions:
      '<p>Start with the project command, commonly <code>npm run dev</code>, and confirm the site works locally.</p>',
  },
  {
    title: 'Create the production build',
    instructions:
      '<p>Run <code>npm run build</code>. For this repository, Vite outputs the production site to <code>dist/</code>.</p>',
  },
  {
    title: 'Inspect or preview the output',
    instructions:
      '<p>Open the generated output folder or run the project preview command if available. You are checking the built site, not just the source files.</p>',
  },
  {
    title: 'Deploy through the supported workflow',
    instructions:
      '<p>For this GraphitEdge project on Vercel, the deployable workflow uses the build command and output directory configured for the project. On other hosts, check the host settings before assuming the same values.</p>',
  },
  {
    title: 'Read the build log and test live',
    instructions:
      '<p>If the build fails, read the host build log from the first error upward. After a successful deploy, test the live site in normal and private browser windows.</p>',
  },
];

const troubleshootingProblems = [
  {
    title: 'Homepage not loading',
    cause:
      'index.html is missing, one folder too deep, or the host is looking at the wrong public folder.',
    fix:
      'Move index.html to the expected root, check the publish directory, redeploy and refresh the live URL.',
  },
  {
    title: 'Missing CSS',
    cause:
      'The stylesheet path is wrong, the CSS file was not uploaded, or filename capitalisation does not match.',
    fix:
      'Check the link href, match file names exactly, upload the CSS file, then test the live page again.',
  },
  {
    title: 'Broken images',
    cause:
      'Images were not uploaded, paths point to a local computer, or folder/file names changed.',
    fix:
      'Use relative paths, keep images inside the project, use simple lowercase filenames, and redeploy missing assets.',
  },
  {
    title: 'Works locally but not online',
    cause:
      'Local file paths, case-sensitive filename issues, wrong folder upload, or Vite source files deployed instead of build output.',
    fix:
      'Check paths and filenames, verify the public folder, run the build for Vite, and deploy the correct output folder.',
  },
  {
    title: 'Updates not appearing',
    cause:
      'Browser cache, deployment still processing, wrong site updated, or Git changes not pushed.',
    fix:
      'Hard refresh, test in a private browser, check the deployment dashboard, and confirm the correct repository or folder.',
  },
  {
    title: 'Incorrect Vite output',
    cause:
      'The host is publishing the source folder instead of the generated output folder.',
    fix:
      'Use the project build command and output directory. For this repository, that is commonly npm run build and dist.',
  },
  {
    title: 'Build failures',
    cause:
      'Dependency, Node version, environment variable, lint, syntax, or import errors stopped the production build.',
    fix:
      'Read the first meaningful build error, check the required Node version, install dependencies, then rebuild locally.',
  },
  {
    title: 'Case-sensitive paths',
    cause:
      'The local computer tolerated a filename mismatch that the host treats as different files.',
    fix:
      'Make filenames and references match exactly. Lowercase kebab-case names prevent many avoidable mistakes.',
  },
  {
    title: 'Browser caching',
    cause:
      'The browser is showing a saved older copy of CSS, JavaScript or HTML.',
    fix:
      'Hard refresh, test in a private window, and check the host deployment timestamp before changing code.',
  },
];

function copyChecklist() {
  navigator.clipboard
    .writeText(checklistMarkdown)
    .then(() => {
      copyStatus.value = 'Checklist copied';
      window.setTimeout(() => {
        copyStatus.value = 'Copy checklist';
      }, 2400);
    })
    .catch(() => {
      copyStatus.value = 'Copy failed';
    });
}

function downloadChecklist() {
  const blob = new Blob([checklistMarkdown], {
    type: 'text/markdown;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'deployment-checklist.md';
  link.click();
  URL.revokeObjectURL(url);
}

function printChecklist() {
  window.print();
}
</script>

<template>
  <div class="container section">
    <article class="tutorial-content deployment-module">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              <i class="fas fa-house mr-2"></i> Home
            </router-link>
          </li>
          <li><router-link to="/tutorials">Tutorials</router-link></li>
          <li><router-link to="/tutorials/deployments">Deployments</router-link></li>
          <li class="is-active">
            <a href="#" aria-current="page">{{ currentLesson.shortTitle }}</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-warning">Advanced</span>
          <span class="tag is-light">{{ currentLesson.duration }}</span>
          <span class="tag is-light">Deployment</span>
          <span class="tag is-light">{{ currentLesson.orderLabel }}</span>
        </div>
      </div>

      <p class="module-kicker">Deployment module</p>
      <h1 class="title is-1">{{ currentLesson.title }}</h1>
      <p class="subtitle is-5">{{ currentLesson.description }}</p>

      <nav class="module-sequence" aria-label="Getting a Website Online lesson sequence">
        <router-link
          v-for="lesson in lessonSequence"
          :key="lesson.id"
          :to="lesson.path"
          class="module-sequence__item"
          :class="{ 'is-current': lesson.id === currentLesson.id }"
          :aria-current="lesson.id === currentLesson.id ? 'page' : undefined"
        >
          <span>{{ lesson.orderLabel }}</span>
          <strong>{{ lesson.shortTitle }}</strong>
        </router-link>
      </nav>

      <template v-if="currentLesson.id === 'overview'">
        <AnticipatorySet
          title="Deployment Is a Workflow"
          icon="fas fa-rocket"
          hook="<p>A website is not truly finished when it works on your computer. Deployment is the workflow that puts it somewhere other people can reach, then proves it works from the live URL.</p><p>This module breaks that workflow into smaller lessons so each decision has a place: hosting, files, builds, domains, testing and improvement.</p>"
          :reflection-prompts="[
            'Which part of deployment feels clearest right now?',
            'Which part feels like button pressing without enough system understanding yet?',
            'What evidence would convince you a site is ready to share?'
          ]"
          connection="After the general lessons, apply the process in Black Swan Bistro Part 5 rather than trying to learn the system and prepare the project at the same time."
        />

        <section id="sequence">
          <h2 class="title is-3">The Six-Lesson Sequence</h2>
          <p>
            Work through the lessons in order. Earlier lessons explain the system;
            later lessons apply it to real deployment work.
          </p>
          <div class="lesson-grid">
            <router-link
              v-for="lesson in lessons"
              :key="lesson.id"
              :to="lesson.path"
              class="lesson-card"
            >
              <span>{{ lesson.orderLabel }}</span>
              <h3 class="title is-5">{{ lesson.title }}</h3>
              <p>{{ lesson.description }}</p>
              <small>{{ lesson.duration }}</small>
            </router-link>
          </div>
        </section>

        <section id="prerequisites">
          <h2 class="title is-3">Prerequisites</h2>
          <p>
            You should be comfortable editing HTML and CSS files, opening a project
            in a browser, checking basic links and images, and using simple Git
            workflows if you choose a Git-connected host.
          </p>
          <ul>
            <li><router-link to="/tutorials/intermediate/git-basics">Git Basics</router-link></li>
            <li><router-link to="/tutorials/intermediate/working-with-vite">Working with Vite</router-link></li>
            <li><router-link to="/tutorials/intermediate/test-and-validate-your-site">Test and Validate Your Site</router-link></li>
          </ul>
        </section>

        <section id="static-vs-vite">
          <h2 class="title is-3">Plain Static Deployment Versus Vite Deployment</h2>
          <p>
            A plain HTML, CSS and JavaScript site can usually be published from the
            folder that contains <code>index.html</code>. A Vite project has a
            development server and source files, so it usually needs a production
            build first. The deployable output is commonly the generated
            <code>dist</code> folder.
          </p>
          <figure class="tutorial-figure tutorial-figure--wide">
            <img
              src="/assets/images/tutorials/diagrams/tutorial-deployment-plain-vite-files.svg"
              alt="Comparison of plain HTML deployment using the folder with index.html and Vite deployment using a generated dist folder after a build step."
              width="960"
              height="540"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              Plain static sites and Vite sites can both become static deployments,
              but Vite adds a build step before publishing.
            </figcaption>
          </figure>
        </section>

        <section id="resources">
          <h2 class="title is-3">Resources and Project Application</h2>
          <p>
            The final lesson includes a copyable, downloadable and printable
            deployment checklist. Keep it nearby while you apply the process to
            <router-link to="/tutorials/advanced/black-swan-bistro-part-5">
              Black Swan Bistro Part 5: Prepare for Deployment
            </router-link>.
          </p>
          <div class="buttons">
            <router-link
              class="button is-primary"
              to="/tutorials/deployments/understanding-hosting-and-deployment"
            >
              Start the tutorial
            </router-link>
            <router-link
              class="button is-light"
              to="/tutorials/deployments/testing-troubleshooting-and-continuous-improvement#deployment-checklist"
            >
              Open the deployment checklist
            </router-link>
          </div>
        </section>
      </template>

      <template v-else-if="currentLesson.id === 'understanding-hosting-and-deployment'">
        <AnticipatorySet
          title="Leaving Your Laptop"
          icon="fas fa-upload"
          hook="<p>Local files are useful while you build. A live website has to work from a server for someone else, in their browser, on their device.</p><p>That move from local project to reachable website is deployment.</p>"
          :reflection-prompts="[
            'Have you seen a file or image work locally but fail elsewhere?',
            'What would you check before sending a live URL to another person?'
          ]"
          connection="This lesson gives the vocabulary and file checks you need before choosing a hosting path."
        />
        <LearningObjectives
          :objectives="[
            { verb: 'Explain', text: 'what deployment means' },
            { verb: 'Describe', text: 'the difference between a local site and a live site' },
            { verb: 'Identify', text: 'the roles of the browser, server and web host' },
            { verb: 'Recognise', text: 'why local success does not prove live success' },
            { verb: 'Spot', text: 'basic deployment risks in paths, filenames and folders' }
          ]"
          purpose="Deployment makes the website part of the web, not just a project folder on one computer."
          :prerequisites="[
            { topic: 'Files, Folders and Project Structure', link: '/tutorials/getting-started/files-folders-project-structure' },
            { topic: 'Test and Validate Your Site', link: '/tutorials/intermediate/test-and-validate-your-site' }
          ]"
        />

        <h2 id="what-deployment-means" class="title is-3">What Deployment Means</h2>
        <p>
          Deployment means publishing a website so it can be viewed online. For a
          basic static website, the browser needs access to HTML, CSS, JavaScript,
          images, fonts and other assets from a server or hosting platform.
        </p>
        <p>
          Your local project folder is where you build. The host is where visitors'
          browsers request the finished files. If those files are missing, nested
          too deeply or referenced with fragile paths, the live site will say so.
        </p>
        <figure class="tutorial-figure tutorial-figure--wide">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-deployment-workflow.svg"
            alt="Diagram showing local website files moving through hosting or build steps to a live URL, followed by testing and improvement."
            width="960"
            height="540"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Deployment is a workflow: prepare the files, publish them to a host,
            test the live URL, then improve the site from evidence.
          </figcaption>
        </figure>

        <h2 id="key-terms" class="title is-3">Key Terms</h2>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead>
              <tr><th>Term</th><th>Meaning</th></tr>
            </thead>
            <tbody>
              <tr><td>Local site</td><td>The version stored on your own computer.</td></tr>
              <tr><td>Live site</td><td>The version available online.</td></tr>
              <tr><td>Browser</td><td>The app that requests, downloads and displays website files.</td></tr>
              <tr><td>Server</td><td>A computer that sends website files to visitors.</td></tr>
              <tr><td>Web host</td><td>A service that stores and serves website files.</td></tr>
              <tr><td>Deployment</td><td>The act of publishing or updating the live site.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="local-vs-live" class="title is-3">Local Files Versus Live Websites</h2>
        <p>
          Opening <code>index.html</code> from your computer is useful early
          testing. It is not deployment. Local testing can hide paths that only
          work on your computer, missing files hidden by cache, case-sensitive
          filename problems and incorrect folder structure.
        </p>
        <p>
          It works on my laptop is encouraging. It is not deployment evidence.
        </p>
        <CheckpointBox
          id="checkpoint"
          title="Checkpoint: Is This Ready to Leave Your Laptop?"
          description="Before you deploy, can you explain these?"
          :questions="hostingReadinessQuestions"
        />

        <h2 id="inspection-exercise" class="title is-3">File-and-Folder Inspection Exercise</h2>
        <p>Open an existing project and check:</p>
        <ul class="checklist-list">
          <li><i class="fas fa-square"></i> <code>index.html</code> exists where the host will expect it.</li>
          <li><i class="fas fa-square"></i> CSS, JavaScript and image paths are relative.</li>
          <li><i class="fas fa-square"></i> Filenames are lowercase and match the references exactly.</li>
          <li><i class="fas fa-square"></i> No files are referenced from your local computer.</li>
          <li><i class="fas fa-square"></i> Required assets are inside the project folder.</li>
          <li><i class="fas fa-square"></i> The browser console has no obvious errors.</li>
        </ul>
      </template>

      <template v-else-if="currentLesson.id === 'choosing-a-hosting-path'">
        <LearningObjectives
          :objectives="[
            { verb: 'Compare', text: 'traditional hosting, manual static hosting and Git-based deployment' },
            { verb: 'Recognise', text: 'static and dynamic hosting needs' },
            { verb: 'Choose', text: 'an appropriate deployment method for a student project' },
            { verb: 'Explain', text: 'why free hosting may not suit every production website' },
            { verb: 'Identify', text: 'when support, ownership and business reliability matter' }
          ]"
          purpose="A good hosting choice fits the project, the learner, the maintenance workflow and the level of responsibility."
          :prerequisites="[{ topic: 'Understanding Hosting and Deployment', link: '/tutorials/deployments/understanding-hosting-and-deployment' }]"
        />
        <h2 id="hosting-paths" class="title is-3">The Three Main Hosting Paths</h2>
        <div class="columns hosting-options">
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Traditional web hosting</h3>
              <p>Usually provides a dashboard, file manager and public folder such as <code>public_html</code>, <code>htdocs</code> or <code>www</code>.</p>
              <p><strong>Best for:</strong> learning where files live on a host and understanding many small business hosting accounts.</p>
              <p><strong>Watch for:</strong> manual updates, overwrites, limited backups and unclear ownership.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Manual static hosting</h3>
              <p>Lets you upload a finished folder to a static host. It is useful for quick demos and tiny projects.</p>
              <p><strong>Best for:</strong> prototypes, class exercises and first static deployments.</p>
              <p><strong>Watch for:</strong> repeating the exact upload workflow when changes are needed.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Git-based deployment</h3>
              <p>Connects a repository to a host so pushes can trigger new deployments and build logs.</p>
              <p><strong>Best for:</strong> ongoing projects, Vite sites, portfolios and teams.</p>
              <p><strong>Watch for:</strong> build settings, repository permissions and logs that need careful reading.</p>
            </div>
          </div>
        </div>

        <h2 id="student-options" class="title is-3">Student Hosting Options</h2>
        <p>
          Services, prices, quotas and signup flows change. Treat provider names
          as examples, then check current documentation before relying on plan
          limits or terms.
        </p>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead>
              <tr><th>Path</th><th>Good fit</th><th>Main caution</th></tr>
            </thead>
            <tbody>
              <tr><td>Traditional hosting</td><td>Manual folder practice</td><td>Updates and backups need discipline</td></tr>
              <tr><td>Manual static hosting</td><td>Fast static demos</td><td>Manual redeploys can become confusing</td></tr>
              <tr><td>GitHub Pages</td><td>Simple static sites and portfolios</td><td>Requires repository confidence</td></tr>
              <tr><td>Netlify or Vercel with Git</td><td>Ongoing Vite projects</td><td>Build settings and plan terms matter</td></tr>
              <tr><td>Paid managed hosting</td><td>Business and client sites</td><td>Costs, support, renewals and ownership must be clear</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="static-vs-dynamic" class="title is-3">Static Versus Dynamic Deployment</h2>
        <p>
          A static site can be served as finished files. A dynamic site needs
          server-side processing, a database, authentication, checkout or editing
          features. Do not choose dynamic hosting because the word sounds more
          professional; choose it because the project needs dynamic behaviour.
        </p>

        <IndependentPractice
          id="decision-exercise"
          title="Hosting Decision Exercise"
          icon="fas fa-route"
          task="<p>Choose a hosting path for each scenario and write one sentence explaining your reasoning.</p>"
          :requirements="[
            'A tiny HTML classroom exercise',
            'An ongoing Vite portfolio project',
            'A small business website requiring reliability and clear ownership'
          ]"
          :stretch-goals="[
            'Name one risk for each hosting choice',
            'Identify what documentation you would check before signing up'
          ]"
        />
      </template>

      <template v-else-if="currentLesson.id === 'deploying-a-static-html-css-javascript-site'">
        <LearningObjectives
          :objectives="[
            { verb: 'Prepare', text: 'a simple static project for deployment' },
            { verb: 'Identify', text: 'the folder that must contain index.html' },
            { verb: 'Publish', text: 'the correct files' },
            { verb: 'Test', text: 'the live website rather than relying on local testing' },
            { verb: 'Record', text: 'the deployment method and live URL' }
          ]"
          purpose="A tiny static deployment teaches the publishing workflow without hiding problems inside a large project."
          :prerequisites="[{ topic: 'Choosing a Hosting Path', link: '/tutorials/deployments/choosing-a-hosting-path' }]"
        />
        <h2 id="project-shape" class="title is-3">Plain HTML, CSS and JavaScript Deployment</h2>
        <pre><code>deployment-test/
├── index.html
├── styles.css
└── script.js</code></pre>

        <h2 id="folder-nesting" class="title is-3">Correct and Incorrect Folder Nesting</h2>
        <p>The server should not have to go on a treasure hunt for <code>index.html</code>.</p>
        <div class="columns">
          <div class="column">
            <div class="box">
              <h3 class="title is-6">Usually wrong for the main address</h3>
              <pre><code>htdocs/
└── deployment-test/
    └── index.html</code></pre>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-6">Usually better</h3>
              <pre><code>htdocs/
├── index.html
├── styles.css
└── script.js</code></pre>
            </div>
          </div>
        </div>

        <GuidedPractice
          id="guided-practice"
          title="Deploy a Tiny Test Site"
          icon="fas fa-upload"
          :steps="staticGuidedPracticeSteps"
          :success-criteria="[
            'The live URL opens from a browser',
            'The homepage loads from index.html',
            'The stylesheet loads on the live site',
            'The JavaScript button works on the live site',
            'The deployment method, live URL and test result are recorded'
          ]"
        />

        <h3 class="title is-4">Create <code>index.html</code></h3>
        <pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Deployment Test&lt;/title&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;main&gt;
    &lt;h1&gt;My first deployed test site&lt;/h1&gt;
    &lt;p&gt;If you can read this online, deployment worked.&lt;/p&gt;
    &lt;button id="messageButton"&gt;Test JavaScript&lt;/button&gt;
    &lt;p id="message"&gt;&lt;/p&gt;
  &lt;/main&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <h3 class="title is-4">Create <code>styles.css</code></h3>
        <pre><code class="language-css">body {
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 2rem;
  background: #f7f3ed;
  color: #222;
}

main {
  max-width: 42rem;
  margin: 0 auto;
}

button {
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;
}</code></pre>

        <h3 class="title is-4">Create <code>script.js</code></h3>
        <pre><code class="language-js">const button = document.querySelector('#messageButton');
const message = document.querySelector('#message');

button.addEventListener('click', () =&gt; {
  message.textContent = 'JavaScript is working on the live site.';
});</code></pre>

        <h2 id="live-testing" class="title is-3">Record the Result</h2>
        <p>
          Write down the hosting service, deployment method, live URL, folder
          uploaded, date deployed and anything you had to fix. A live URL without
          notes is a fragile memory.
        </p>
      </template>

      <template v-else-if="currentLesson.id === 'building-and-deploying-a-vite-site'">
        <LearningObjectives
          :objectives="[
            { verb: 'Explain', text: 'why a Vite project requires a production build' },
            { verb: 'Distinguish', text: 'source files from production output' },
            { verb: 'Run', text: 'and inspect a Vite build' },
            { verb: 'Identify', text: 'the correct output directory' },
            { verb: 'Configure', text: 'common build and publish settings' },
            { verb: 'Recognise', text: 'routing, base path and wrong output folder failures' }
          ]"
          purpose="Vite makes development fast, but deployment should use the production output rather than the development workshop."
          :prerequisites="[{ topic: 'Deploying a Static HTML, CSS and JavaScript Site', link: '/tutorials/deployments/deploying-a-static-html-css-javascript-site' }]"
        />
        <h2 id="vite-builds" class="title is-3">Development Server Versus Production Build</h2>
        <p>During development, many Vite projects use:</p>
        <pre><code class="language-bash">npm run dev</code></pre>
        <p>Before deployment, they usually need:</p>
        <pre><code class="language-bash">npm run build</code></pre>
        <p>
          The build creates a production-ready output folder. In this repository,
          Vite builds to <code>dist/</code>. That folder is the packed version
          visitors should receive.
        </p>

        <h2 id="repo-settings" class="title is-3">This Repository's Deployment Context</h2>
        <p>
          GraphitEdge is a Vite/Vue site hosted on Vercel. The project uses a
          SPA rewrite in <code>vercel.json</code>, Vite SSG for production
          builds, and Node 22.x is required by the project instructions. Do not
          assume every Vite project has identical settings; read the repository
          configuration and the host's current documentation.
        </p>
        <div class="table-container">
          <table class="table is-bordered is-striped">
            <thead><tr><th>Setting</th><th>Common value here</th></tr></thead>
            <tbody>
              <tr><td>Build command</td><td><code>npm run build</code></td></tr>
              <tr><td>Output directory</td><td><code>dist</code></td></tr>
              <tr><td>Node version</td><td><code>22.x</code> required by project docs</td></tr>
            </tbody>
          </table>
        </div>

        <GuidedPractice
          id="guided-practice"
          title="Build and Deploy a Vite Site"
          icon="fas fa-gears"
          :steps="viteGuidedPracticeSteps"
          :success-criteria="[
            'The local development version runs',
            'The production build completes',
            'The generated output folder is identified',
            'The host build command and output directory are checked',
            'The live site is tested after deployment'
          ]"
        />

        <h2 id="common-mistakes" class="title is-3">Common Vite Deployment Mistakes</h2>
        <ul>
          <li>Uploading the source project instead of the generated output folder.</li>
          <li>Using the wrong output directory in the hosting dashboard.</li>
          <li>Ignoring a build log because the local development server worked.</li>
          <li>Forgetting that base paths and client-side routing can affect deployed URLs.</li>
          <li>Using a host Node version that does not match the project requirement.</li>
        </ul>
      </template>

      <template v-else-if="currentLesson.id === 'domains-dns-and-going-live'">
        <LearningObjectives
          :objectives="[
            { verb: 'Distinguish', text: 'a domain registrar from a hosting provider' },
            { verb: 'Explain', text: 'the basic role of DNS' },
            { verb: 'Recognise', text: 'common DNS record types' },
            { verb: 'Identify', text: 'apex domains and subdomains' },
            { verb: 'Follow', text: 'provider instructions without guessing record values' },
            { verb: 'Document', text: 'where domain, DNS, hosting and repository access are managed' }
          ]"
          purpose="Domains make sites easier to find, but DNS changes should be deliberate and documented."
          :prerequisites="[{ topic: 'Building and Deploying a Vite Site', link: '/tutorials/deployments/building-and-deploying-a-vite-site' }]"
        />

        <h2 id="domain-dns-roles" class="title is-3">Domains, DNS and Going Live</h2>
        <p>
          A deployment gives your site a live address, often on a hosting
          provider's subdomain. A custom domain is the human-friendly name you
          point at that hosted site. DNS tells browsers where that name should go.
        </p>
        <p>
          You do not need a custom domain for your first student deployment.
          Learn the hosting workflow first, then add domain setup when the site
          is ready to be shared more seriously.
        </p>

        <h2 id="dns-records" class="title is-3">Common DNS Pieces</h2>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead><tr><th>Piece</th><th>Role</th></tr></thead>
            <tbody>
              <tr><td>Domain registrar</td><td>Where the domain is registered and renewed.</td></tr>
              <tr><td>DNS provider</td><td>The service that manages DNS records for the domain.</td></tr>
              <tr><td>A record</td><td>Points a name to an IP address.</td></tr>
              <tr><td>CNAME record</td><td>Points one hostname to another hostname.</td></tr>
              <tr><td>Nameservers</td><td>Tell the internet which DNS provider manages the domain.</td></tr>
              <tr><td>Apex domain</td><td>The bare domain, such as <code>example.com</code>.</td></tr>
              <tr><td>Subdomain</td><td>A name below the domain, such as <code>www.example.com</code>.</td></tr>
              <tr><td>HTTPS / SSL</td><td>The secure connection browsers expect for modern sites.</td></tr>
            </tbody>
          </table>
        </div>

        <figure id="dns-path" class="tutorial-figure tutorial-figure--wide">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-deployment-dns-path.svg"
            alt="Diagram showing a visitor entering a domain, DNS pointing the domain to the hosting platform, and the host serving website files."
            width="960"
            height="540"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Visitor -> domain -> DNS -> hosting platform -> website files. DNS
            points the readable address at the place serving the site.
          </figcaption>
        </figure>

        <h2 id="ownership-notes" class="title is-3">Record Ownership and Service Locations</h2>
        <p>
          Do not invent DNS values. Use the current instructions from your host
          and registrar. Then record where the domain, DNS, hosting, repository,
          billing and account recovery are managed. Future-you will be grateful.
        </p>
      </template>

      <template v-else>
        <LearningObjectives
          :objectives="[
            { verb: 'Test', text: 'a live deployment systematically' },
            { verb: 'Troubleshoot', text: 'common file, path, build and cache problems' },
            { verb: 'Distinguish', text: 'local testing from production testing' },
            { verb: 'Use', text: 'a repeatable manual or Git-based improvement workflow' },
            { verb: 'Record', text: 'changes and deployment evidence' },
            { verb: 'Apply', text: 'a pre- and post-deployment checklist' }
          ]"
          purpose="A calm deployment workflow turns launch into a testable process instead of a dramatic guessing session."
          :prerequisites="[{ topic: 'Domains, DNS and Going Live', link: '/tutorials/deployments/domains-dns-and-going-live' }]"
        />

        <h2 id="testing-system" class="title is-3">Test the Live Site Systematically</h2>
        <p>
          Test the live URL, not only the local project. Open the site in a
          normal browser window, a private browser window and a narrow mobile
          viewport. Check the homepage, navigation, images, CSS, JavaScript,
          console output and any form or interactive behaviour.
        </p>

        <h2 id="common-problems" class="title is-3">Common Deployment Problems</h2>
        <div class="deployment-problems">
          <details v-for="problem in troubleshootingProblems" :key="problem.title">
            <summary>{{ problem.title }}</summary>
            <p><strong>Likely cause:</strong> {{ problem.cause }}</p>
            <p><strong>Fix:</strong> {{ problem.fix }}</p>
          </details>
        </div>

        <h2 id="continuous-improvement" class="title is-3">Continuous Improvement Workflow</h2>
        <div class="box">
          <h3 class="title is-5">Manual hosting workflow</h3>
          <pre><code>Notice issue -> Write it down -> Fix local file -> Test locally -> Upload changed file -> Test live site -> Record the change</code></pre>
        </div>
        <div class="box">
          <h3 class="title is-5">Git-based workflow</h3>
          <pre><code>Notice issue -> Create issue or task -> Fix locally -> Test locally -> Commit -> Push -> Deployment runs -> Test live site</code></pre>
          <p>
            Git-based deployment creates a cleaner trail of changes. You can see
            what changed, when it changed, and often why it changed.
          </p>
        </div>

        <h3 class="title is-4">Student Improvement Log</h3>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead>
              <tr>
                <th>Date</th><th>Issue or improvement</th><th>Change made</th>
                <th>Tested locally?</th><th>Tested live?</th><th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>YYYY-MM-DD</td><td>Navigation link broken</td><td>Fixed file path</td>
                <td>Yes</td><td>Yes</td><td>Link now works</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="deployment-checklist" class="title is-3">Deployment Checklist</h2>
        <p>
          Use this checklist before and after deploying a website. It is plain
          Markdown so it can live in a README, notes app, project issue or shared
          document.
        </p>
        <div class="box checklist-download-box">
          <div>
            <h3 class="title is-5">Copy or download the checklist</h3>
            <p>Keep the checklist with the project so updates stay repeatable.</p>
          </div>
          <div class="buttons">
            <button class="button is-primary" type="button" @click="copyChecklist">
              <span class="icon"><i class="fas fa-copy"></i></span>
              <span>{{ copyStatus }}</span>
            </button>
            <button class="button is-link is-light" type="button" @click="downloadChecklist">
              <span class="icon"><i class="fas fa-download"></i></span>
              <span>Download Markdown</span>
            </button>
            <button class="button is-light" type="button" @click="printChecklist">
              <span class="icon"><i class="fas fa-print"></i></span>
              <span>Print</span>
            </button>
          </div>
        </div>
        <details class="checklist-preview" open>
          <summary>Preview the full deployment checklist</summary>
          <pre><code>{{ checklistMarkdown }}</code></pre>
        </details>

        <h2 id="reflection" class="title is-3">Final Knowledge Check and Reflection</h2>
        <ol>
          <li>What is the difference between local testing and production testing?</li>
          <li>Which problem would you check first if CSS is missing?</li>
          <li>Why does a Vite site usually need a build before deployment?</li>
          <li>What details should be recorded after a deployment?</li>
          <li>How does Git-based deployment support continuous improvement?</li>
        </ol>
      </template>

      <ClosureSection
        :id="currentLesson.id === 'overview' ? undefined : 'closure'"
        :title="currentLesson.id === 'overview' ? 'Ready to Start the Pathway' : 'Ready for the Next Deployment Step'"
        :key-takeaways="[
          'Deployment is a workflow, not a single button.',
          'The live URL is the place where deployment evidence is gathered.',
          'The right hosting path depends on the project, the workflow and the responsibility involved.'
        ]"
        :objectives="[currentLesson.description]"
        readiness-message="If you can name the next test, record the result and explain why the chosen hosting path fits, the deployment process is becoming a system you can repeat."
        :reflection-prompts="[
          { icon: 'fas fa-rocket', title: 'Deployment evidence', questions: ['What would you test before sharing the live URL?'] },
          { icon: 'fas fa-list-check', title: 'Next action', questions: ['What should be recorded so this deployment can be repeated later?'] }
        ]"
        :next-steps="nextLesson ? `<p>Next: continue with <strong>${nextLesson.title}</strong>.</p>` : '<p>Next: apply the workflow to Black Swan Bistro Part 5.</p>'"
      />

      <div class="lesson-nav-buttons">
        <router-link v-if="previousLesson" class="button is-light" :to="previousLesson.path">
          <span class="icon"><i class="fas fa-arrow-left"></i></span>
          <span>{{ previousLesson.shortTitle }}</span>
        </router-link>
        <router-link v-if="nextLesson" class="button is-primary" :to="nextLesson.path">
          <span>{{ nextLesson.shortTitle }}</span>
          <span class="icon"><i class="fas fa-arrow-right"></i></span>
        </router-link>
        <router-link
          v-else
          class="button is-primary"
          to="/tutorials/advanced/black-swan-bistro-part-5"
        >
          <span>Apply it to Black Swan Bistro Part 5</span>
          <span class="icon"><i class="fas fa-arrow-right"></i></span>
        </router-link>
      </div>

      <TutorialRecommendations :current-path="currentLesson.path" />
    </article>
  </div>
</template>

<style scoped>
.deployment-module pre {
  overflow-x: auto;
}

.module-kicker {
  color: #4b5563;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.module-sequence {
  display: grid;
  gap: 0.6rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  margin: 1.5rem 0 2rem;
}

.module-sequence__item,
.lesson-card {
  border: 1px solid #d9e5ea;
  border-radius: 8px;
  color: inherit;
  display: block;
  padding: 1rem;
  text-decoration: none;
}

.module-sequence__item span,
.lesson-card span,
.lesson-card small {
  color: #64748b;
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
}

.module-sequence__item.is-current {
  border-color: #4b88a2;
  box-shadow: inset 0 0 0 2px #4b88a2;
}

.lesson-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.hosting-options .box {
  height: 100%;
}

.checklist-list {
  list-style: none;
  margin-left: 0;
}

.checklist-list li {
  align-items: flex-start;
  display: flex;
  gap: 0.75rem;
  margin: 0.4rem 0;
}

.checklist-list i {
  color: #64748b;
  font-size: 0.82rem;
  line-height: 1.75;
}

.deployment-problems {
  display: grid;
  gap: 0.75rem;
  margin: 1.5rem 0 2rem;
}

.deployment-problems details,
.checklist-preview {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
}

.deployment-problems summary,
.checklist-preview summary {
  cursor: pointer;
  font-weight: 700;
}

.checklist-download-box {
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.checklist-download-box .buttons {
  flex-shrink: 0;
}

.checklist-preview pre {
  margin-top: 1rem;
  max-height: 34rem;
  overflow: auto;
  white-space: pre;
}

.lesson-nav-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .checklist-download-box {
    align-items: stretch;
    flex-direction: column;
  }

  .checklist-download-box .buttons {
    display: grid;
  }

  .lesson-nav-buttons {
    align-items: stretch;
    flex-direction: column;
  }
}
</style>
