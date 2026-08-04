<script setup>
import { h, ref } from 'vue';
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

const tutorialPath = '/tutorials/advanced/black-swan-bistro-part-6';
const checklistBase = '/resources/black-swan-bistro-part-6';
const copyStatus = ref({});

const CodeBlockSample = {
  props: {
    label: { type: String, required: true },
    language: { type: String, required: true },
    code: { type: String, required: true },
    sampleKey: { type: String, required: true },
    copyStatus: { type: String, default: 'Copy' },
  },
  emits: ['copy'],
  setup(props, { emit }) {
    return () =>
      h('figure', { class: 'code-sample' }, [
        h('figcaption', [
          h('span', props.label),
          h('span', { class: 'code-language' }, props.language),
          h(
            'button',
            {
              class: 'button is-small is-light',
              type: 'button',
              onClick: () => emit('copy', props.sampleKey),
            },
            [
              h('span', { class: 'icon' }, [h('i', { class: 'fas fa-copy' })]),
              h('span', props.copyStatus),
            ],
          ),
        ]),
        h('pre', [h('code', props.code)]),
      ]);
  },
};

useTutorialHead({
  title: 'Black Swan Bistro - Part 6',
  description:
    'Deploy the Black Swan Bistro site through traditional hosting, GitHub Pages, or Vercel, then verify the live URL with a practical launch checklist.',
  path: tutorialPath,
  keywords:
    'Black Swan Bistro deployment, Vite deployment, GitHub Pages, Vercel, traditional hosting, deployment checklist',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Black Swan Bistro Part 6', path: tutorialPath },
  ],
});

usePageSections([
  { id: 'intro', title: 'Introduction' },
  { id: 'deployment-model', title: 'Deployment Model' },
  { id: 'choose-pathway', title: 'Choose Pathway' },
  { id: 'downloads', title: 'Downloads' },
  { id: 'pathway-static', title: 'Traditional Hosting' },
  { id: 'pathway-vite', title: 'Vue and Vite' },
  { id: 'github-pages', title: 'GitHub Pages' },
  { id: 'vercel', title: 'Vercel' },
  { id: 'verify-launch', title: 'Verify Launch' },
  { id: 'troubleshooting', title: 'Troubleshooting' },
  { id: 'checkpoint', title: 'Checkpoint' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Mini Challenge' },
  { id: 'knowledge-check', title: 'Knowledge Check' },
  { id: 'recap', title: 'Recap' },
  { id: 'closure', title: 'Closure' },
]);

const codeSamples = {
  staticPaths: {
    label: 'HTML path examples',
    language: 'html',
    code: `<!-- Relative: works when pages and assets keep this relationship -->
<link rel="stylesheet" href="css/styles.css">

<!-- Root-relative: starts at the deployed domain root -->
<link rel="stylesheet" href="/css/styles.css">

<!-- Local computer path: will fail on the public web -->
<link rel="stylesheet" href="C:\\Users\\You\\Bistro\\css\\styles.css">`,
  },
  viteScripts: {
    label: 'Vite package scripts',
    language: 'json',
    code: `{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}`,
  },
  gitignore: {
    label: 'Vite .gitignore essentials',
    language: 'gitignore',
    code: `node_modules/
dist/
.env
.env.*
!.env.example
.DS_Store`,
  },
  viteBase: {
    label: 'Vite base for a GitHub Pages repository site',
    language: 'js',
    code: `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/YOUR-REPOSITORY/',
})`,
  },
  pagesWorkflow: {
    label: 'GitHub Pages workflow',
    language: 'yaml',
    code: `name: Deploy Black Swan Bistro to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v7
      - name: Set up Node.js
        uses: actions/setup-node@v6
        with:
          node-version: lts/*
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build production site
        run: npm run build
      - name: Configure GitHub Pages
        uses: actions/configure-pages@v6
      - name: Upload built site
        uses: actions/upload-pages-artifact@v5
        with:
          path: ./dist
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5`,
  },
  vercelRewrite: {
    label: 'Vercel SPA rewrite',
    language: 'json',
    code: `{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`,
  },
};

const checkpointQuestions = [
  {
    question:
      'Why can plain HTML/CSS/JS be uploaded directly, while a Vite project usually needs a build step?',
    answer:
      'Plain static files may already be browser-ready. A Vite project contains source modules and framework code that Vite transforms into production HTML, CSS, JavaScript, and assets.',
  },
  {
    question: 'What does the host serve for a standard Vite deployment?',
    answer:
      'The host serves the generated build output, normally the dist folder, not the editable source files in src.',
  },
  {
    question:
      'Why does a GitHub Pages repository site often need base: "/REPOSITORY/"?',
    answer:
      'A repository site is served below the repository path, so generated CSS and JavaScript URLs need to include that public base path.',
  },
  {
    question:
      'What is different about clicking a Vue Router link and refreshing a nested history-mode route?',
    answer:
      'Clicking a client-side link lets Vue Router update the view after the app has loaded. Refreshing or directly visiting the route asks the server for that path first, so static hosts need an appropriate fallback or routing strategy.',
  },
];

const knowledgeCheckQuestions = [
  {
    question:
      'Why does a Vite project require a build step while a plain HTML site may not?',
    answer:
      'Vite transforms Vue source files, imports, and dependencies into browser-ready production files. A plain HTML site may already contain files the browser can request directly.',
  },
  {
    question: "What is the purpose of Vite's dist directory?",
    answer:
      'The dist directory contains the generated production files that a static host should serve.',
  },
  {
    question: "Why can GitHub Pages require base: '/repository-name/'?",
    answer:
      'A repository site is served below the repository path, so built asset URLs need to include that public base.',
  },
  {
    question:
      'What is the difference between a production deployment and a preview deployment on Vercel?',
    answer:
      'Production is the chosen live deployment for visitors. Preview deployments are separate URLs for proposed or non-production changes.',
  },
  {
    question: 'Why should deployment verification happen on the live URL?',
    answer:
      'Hosting, paths, routing, HTTPS, caching, and DNS problems may only appear after the site is served from its public environment.',
  },
  {
    question: 'What is the safest first response to a failed deployment build?',
    answer:
      'Read the first meaningful build error, reproduce the production build locally, and fix the underlying source or configuration.',
  },
];

const guidedPracticeSteps = [
  {
    title: 'Pick the matching pathway',
    instructions:
      '<p>Open your Black Swan Bistro project and identify what kind of project it is. If it is plain <code>index.html</code>, CSS, images, and optional browser JavaScript, use Pathway A. If it has <code>package.json</code>, Vite scripts, and Vue source files, use Pathway B.</p>',
    hints: [
      'Do not choose based on which hosting logo feels friendliest. Choose based on the files in front of you.',
      'If the project has both versions, deploy the one you intend to maintain.',
    ],
  },
  {
    title: 'Prepare the release source',
    instructions:
      '<p>For traditional hosting, create a clean release folder containing only public files. For Vue/Vite, run <code>npm run build</code> and confirm the production output is created in <code>dist</code>.</p>',
    hints: [
      'A release folder should not contain notes, source artwork, private data, or old exports.',
      'A Vite deployment service should build from source and publish the generated output.',
    ],
  },
  {
    title: 'Publish without changing unrelated config',
    instructions:
      '<p>Follow the procedure for your host. Upload static files to the correct document root, or connect the GitHub repository to GitHub Pages/Vercel. Use the supplied templates as examples inside the Bistro project, not as changes to unrelated projects.</p>',
    hints: [
      'GitHub Pages for this Vite workflow must use GitHub Actions as the publishing source.',
      'On Vercel, add the catch-all rewrite only for a history-mode SPA.',
    ],
  },
  {
    title: 'Verify the live URL',
    instructions:
      '<p>Use the downloadable checklist on the public URL. Test navigation, assets, route refreshes, mobile layout, keyboard focus, HTTPS, console errors, and Network 404s. A successful build is not the same as a verified visitor experience.</p>',
    hints: [
      'Open at least one route directly in a fresh tab, not only through in-page navigation.',
      'Record the live URL, host, repository, branch, and any rollback notes.',
    ],
  },
];

const closureKeyTakeaways = [
  'Deployment is a hand-off from project files to a public host.',
  'Plain static sites can publish browser-ready files directly to the document root.',
  'Vite projects need a production build; the generated dist folder is what static hosts serve.',
  'GitHub Pages repository sites and Vite base paths must agree.',
  'Vercel normally detects Vite, builds with npm run build, and serves dist.',
  'A live URL still needs human verification after the platform reports success.',
];

const closureObjectives = [
  'Explain source, build output, repository, and host',
  'Deploy a static HTML version through traditional hosting',
  'Prepare a Vue/Vite project for GitHub-connected deployment',
  'Configure GitHub Pages or Vercel with the correct routing assumptions',
  'Use a checklist to verify the public deployment',
  'Diagnose common asset, route, build, DNS, and HTTPS problems',
];

const closureReflectionPrompts = [
  {
    icon: 'fas fa-route',
    title: 'Deployment Path',
    questions: [
      'Which pathway did you use, and what files actually went live?',
      'Where would you look first if the public site loaded without CSS?',
    ],
  },
  {
    icon: 'fas fa-clipboard-check',
    title: 'Verification',
    questions: [
      'Which live-site check caught something local testing might miss?',
      'What would you record so a future deployment feels less mysterious?',
    ],
  },
];

async function copyCode(key) {
  const sample = codeSamples[key];
  if (!sample) return;

  const copyWithTextarea = () => {
    const textarea = document.createElement('textarea');
    textarea.value = sample.code;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  try {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(sample.code);
      } catch {
        copyWithTextarea();
      }
    } else {
      copyWithTextarea();
    }
    copyStatus.value = { ...copyStatus.value, [key]: 'Copied' };
    window.setTimeout(() => {
      copyStatus.value = { ...copyStatus.value, [key]: 'Copy' };
    }, 1800);
  } catch {
    copyStatus.value = { ...copyStatus.value, [key]: 'Copy failed' };
  }
}
</script>

<template>
  <div class="container section">
    <div class="tutorial-content bsb-deploy-site">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-house mr-2"></i> Home
            </router-link>
          </li>
          <li>
            <router-link to="/tutorials">Tutorials</router-link>
          </li>
          <li>
            <router-link to="/projects/black-swan-bistro"
              >Black Swan Bistro</router-link
            >
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Black Swan Bistro - Part 6</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-warning">Advanced</span>
          <span class="tag is-light">75-110 min</span>
          <span class="tag is-link">Project</span>
          <span class="tag is-light">Part 6 of 7</span>
          <span class="tag is-light">Verified 4 Aug 2026</span>
        </div>
      </div>

      <h1 id="intro" class="title is-1">Black Swan Bistro - Part 6</h1>
      <h2 class="subtitle is-4">Deploy the Site</h2>

      <p class="subtitle is-5">
        Publish the Black Swan Bistro using traditional hosting or a
        Git-connected Vue/Vite workflow, then verify that the live site is
        genuinely ready for visitors.
      </p>

      <AnticipatorySet
        title="From Your Computer to the Public Web"
        icon="🚀"
        :hook="`<p>You have planned the site, written the markup, styled the pages, improved the details, and tested the experience. Now the Bistro leaves your computer and becomes a real place on the web.</p><p>Deployment sounds grand. In practice, it means putting the browser-ready version of your site on a computer that answers public web requests. The interesting part is deciding <strong>which files are browser-ready</strong>, <strong>who builds them</strong>, and <strong>where they are served</strong>.</p>`"
        :reflection-prompts="[
          'What files should a visitor be able to request from your finished Bistro site?',
          'What might change when the site is loaded from a public URL instead of localhost?',
          'Where would you look first if the live site loaded but looked broken?',
        ]"
        connection="This lesson follows Part 5's production-readiness checklist. You will now use that readiness work to publish the Bistro and verify the live result."
      />

      <LearningObjectives
        :objectives="[
          'Explain the difference between source files, build output, a repository, and a hosting service',
          'Prepare the Black Swan Bistro for production without uploading development clutter',
          'Publish a static HTML site to a traditional hosting document root',
          'Place a Vue/Vite project in GitHub and deploy it with GitHub Pages or Vercel',
          'Recognise common problems involving asset paths, routes, build settings, DNS, and HTTPS',
          'Verify a live deployment using a repeatable launch checklist',
        ]"
        purpose="Deployment becomes much easier when you can name each hand-off. This lesson keeps the process practical: choose the right pathway, publish the correct files, and check the public URL like a real visitor."
        :prerequisites="[
          {
            topic: 'BSB Part 5: Prepare for Deployment',
            link: '/tutorials/advanced/black-swan-bistro-part-5',
          },
          {
            topic: 'Git Basics',
            link: '/tutorials/intermediate/git-basics',
          },
          {
            topic: 'Deployment Fundamentals',
            link: '/tutorials/deployments/getting-a-website-online-hosting-deployment-continuous-improvement',
          },
        ]"
      />

      <figure class="tutorial-figure hero-figure">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-6-local-to-public.svg"
          alt="Diagram showing the Black Swan Bistro moving from a localhost laptop through a host to a public HTTPS site on a phone."
          width="1600"
          height="900"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <figcaption>
          Deployment moves the browser-ready Bistro from your computer to a
          host that can answer public requests.
        </figcaption>
      </figure>

      <section id="deployment-model">
        <h2 class="title is-3">The Deployment Model</h2>
        <p>
          A deployment is not magic. It is a hand-off from your project files to
          a public web server. Once you can name each part of that hand-off, you
          can debug it.
        </p>

        <div class="columns deployment-model-columns">
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Static HTML pathway</h3>
              <ol>
                <li>Your finished HTML, CSS, JavaScript, and images exist.</li>
                <li>You upload those files to the domain's document root.</li>
                <li>The web server returns those same files to visitors.</li>
              </ol>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Vue/Vite pathway</h3>
              <ol>
                <li>You keep Vue source and project metadata in GitHub.</li>
                <li>A build command creates browser-ready output in <code>dist</code>.</li>
                <li>GitHub Pages or Vercel serves the built site.</li>
              </ol>
            </div>
          </div>
        </div>

        <h3 class="title is-4">Four terms that prevent most confusion</h3>
        <div class="table-container">
          <table class="table is-bordered is-striped">
            <thead>
              <tr>
                <th>Term</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Source</strong></td>
                <td>
                  The files you edit, such as Vue components, CSS, JavaScript,
                  images, configuration, and <code>package.json</code>.
                </td>
              </tr>
              <tr>
                <td><strong>Build</strong></td>
                <td>
                  The process that transforms source into optimised
                  browser-ready files. In Vite, <code>npm run build</code>
                  usually runs <code>vite build</code>.
                </td>
              </tr>
              <tr>
                <td><strong>Build output</strong></td>
                <td>
                  The generated production files. Vite uses <code>dist</code>
                  by default. Do not hand-edit it; regenerate it from source.
                </td>
              </tr>
              <tr>
                <td><strong>Host</strong></td>
                <td>
                  The service that stores or produces the public files and
                  answers browser requests.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="choose-pathway">
        <h2 class="title is-3">Choose Your Pathway</h2>
        <p>
          You can complete only the pathway that matches your project. Reading
          both is worthwhile, though: modern deployment is still the same web
          underneath, wearing more automation.
        </p>

        <div class="pathway-grid" aria-label="Deployment pathway choices">
          <a class="pathway-card" href="#pathway-static">
            <span class="pathway-icon"><i class="fas fa-folder-open"></i></span>
            <strong>Static HTML / traditional hosting</strong>
            <span>Your finished site files go live in the document root.</span>
          </a>
          <a class="pathway-card" href="#github-pages">
            <span class="pathway-icon"><i class="fab fa-github"></i></span>
            <strong>Vue/Vite / GitHub Pages</strong>
            <span>GitHub Actions builds and uploads <code>dist</code>.</span>
          </a>
          <a class="pathway-card" href="#vercel">
            <span class="pathway-icon"><i class="fas fa-cloud-upload-alt"></i></span>
            <strong>Vue/Vite / Vercel</strong>
            <span>Vercel detects Vite, builds, previews, and publishes.</span>
          </a>
        </div>
      </section>

      <section id="downloads">
        <h2 class="title is-3">Student Downloads</h2>
        <div class="box download-box">
          <div>
            <h3 class="title is-5">Deployment checklist and templates</h3>
            <p>
              Use the checklist before, during, and after deployment. The
              configuration templates are examples for the Bistro project; they
              are not installed as this repository's own deployment config.
            </p>
          </div>
          <div class="buttons">
            <a
              class="button is-primary"
              :href="`${checklistBase}/student-deployment-checklist.pdf`"
              download
            >
              <span class="icon"><i class="fas fa-file-pdf"></i></span>
              <span>Checklist PDF</span>
            </a>
            <a
              class="button is-link is-light"
              :href="`${checklistBase}/student-deployment-checklist.docx`"
              download
            >
              <span class="icon"><i class="fas fa-file-word"></i></span>
              <span>Checklist DOCX</span>
            </a>
            <a
              class="button is-light"
              :href="`${checklistBase}/config-templates/deploy-pages.yml`"
              download
            >
              <span class="icon"><i class="fas fa-code"></i></span>
              <span>Pages workflow</span>
            </a>
            <a
              class="button is-light"
              :href="`${checklistBase}/config-templates/vercel.json`"
              download
            >
              <span class="icon"><i class="fas fa-code"></i></span>
              <span>vercel.json</span>
            </a>
            <a
              class="button is-light"
              :href="`${checklistBase}/config-templates/vite.config.github-pages.js`"
              download
            >
              <span class="icon"><i class="fas fa-code"></i></span>
              <span>Vite Pages config</span>
            </a>
          </div>
        </div>
      </section>

      <section id="pathway-static">
        <h2 class="title is-3">Pathway A: Deploy Static HTML Through Traditional Hosting</h2>
        <p>
          Traditional hosting usually gives each domain a
          <strong>document root</strong>: the folder the web server treats as
          the public top level of that site. In cPanel-based hosting, a primary
          domain often uses <code>public_html</code>; an additional domain may
          use a folder inside it. Confirm the exact document root instead of
          guessing.
        </p>

        <figure class="tutorial-figure">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-6-document-root.svg"
            alt="Correct document-root diagram with index.html directly in public_html, compared with an incorrect extra release-folder level."
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            The document root is the public top level of the domain; an
            accidental extra folder changes the URL or hides the site.
          </figcaption>
        </figure>

        <h3 class="title is-4">Procedure</h3>
        <ol class="procedure-list">
          <li>
            <strong>Prepare a clean release folder.</strong> Copy only the
            public site files: <code>index.html</code>, page files, CSS,
            JavaScript, images, and any web fonts or icons you actually use.
          </li>
          <li>
            <strong>Test the release locally.</strong> Use a local server or
            editor preview and click every navigation link. Avoid relying only
            on double-clicked <code>file://</code> URLs.
          </li>
          <li>
            <strong>Identify the correct document root.</strong> Read it from
            the hosting control panel. The host controls this location.
          </li>
          <li>
            <strong>Back up the current live site.</strong> If files already
            exist, download or compress them before replacing anything.
          </li>
          <li>
            <strong>Upload the release.</strong> With File Manager, ZIP the
            release contents, upload, extract, and remove accidental nesting.
            With SFTP, upload the contents while preserving folders.
          </li>
          <li>
            <strong>Load the public URL.</strong> Use a private window, confirm
            HTTPS, and check whether <code>www</code> and non-<code>www</code>
            behaviour is intentional.
          </li>
        </ol>

        <CodeBlockSample
          v-bind="codeSamples.staticPaths"
          sample-key="staticPaths"
          :copy-status="copyStatus.staticPaths || 'Copy'"
          @copy="copyCode"
        />

        <details class="lesson-disclosure">
          <summary>Pathway A checkpoint: why must index.html be in the document root?</summary>
          <p>
            The server maps the domain's public root to the document-root
            folder, so its default home document must exist where that mapping
            expects it.
          </p>
        </details>
      </section>

      <section id="pathway-vite">
        <h2 class="title is-3">Pathway B: Deploy Vue/Vite Through GitHub</h2>
        <p>
          This pathway has three connected layers: your local Vue/Vite project,
          a GitHub repository that stores source history, and a deployment
          service that installs dependencies, builds the project, and publishes
          the result.
        </p>

        <figure class="tutorial-figure">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-6-vite-build.svg"
            alt="Process diagram showing Vue source files passing through npm run build and becoming a generated dist folder with browser-ready assets."
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Vite transforms editable project source into an optimised
            <code>dist</code> folder that a static host can serve.
          </figcaption>
        </figure>

        <h3 class="title is-4">Prove the production build locally</h3>
        <p>
          From the folder containing <code>package.json</code>, confirm the
          scripts, install dependencies, build, and preview:
        </p>

        <CodeBlockSample
          v-bind="codeSamples.viteScripts"
          sample-key="viteScripts"
          :copy-status="copyStatus.viteScripts || 'Copy'"
          @copy="copyCode"
        />

        <pre><code>npm install
npm run build
npm run preview</code></pre>

        <p>
          A standard Vite build creates <code>dist</code>.
          <code>vite preview</code> is a local production-build preview, not a
          production server. If <code>npm run build</code> fails, fix that
          before opening a hosting dashboard.
        </p>

        <h3 class="title is-4">Keep Git safe</h3>
        <p>
          Commit source, configuration, public assets, <code>package.json</code>,
          and the correct lockfile. Do not commit generated dependencies,
          generated output, real secret files, or private data. Values exposed
          to client-side Vite code are visible in the browser bundle; do not
          treat <code>VITE_</code> variables as secret.
        </p>

        <CodeBlockSample
          v-bind="codeSamples.gitignore"
          sample-key="gitignore"
          :copy-status="copyStatus.gitignore || 'Copy'"
          @copy="copyCode"
        />
      </section>

      <section id="github-pages">
        <h2 class="title is-3">Option B1: GitHub Pages</h2>
        <p>
          GitHub Pages serves static output. For a Vite project, GitHub Actions
          installs dependencies, runs the build, uploads <code>dist</code> as a
          Pages artifact, and deploys that artifact.
        </p>

        <figure class="tutorial-figure">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-6-github-pages-pipeline.svg"
            alt="Five-stage GitHub Pages pipeline from a push to main through install, Vite build, artifact upload, and publication at a repository URL."
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            GitHub Actions turns repository source into a Pages artifact; the
            Vite base must match the site's public repository path.
          </figcaption>
        </figure>

        <h3 class="title is-4">1. Set the correct Vite base path</h3>
        <p>
          For a repository site at
          <code>https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/</code>, set
          <code>base</code> to the repository path. For a user site or
          custom-domain root, use <code>/</code> or omit <code>base</code>.
        </p>

        <CodeBlockSample
          v-bind="codeSamples.viteBase"
          sample-key="viteBase"
          :copy-status="copyStatus.viteBase || 'Copy'"
          @copy="copyCode"
        />

        <h3 class="title is-4">2. Add the Pages workflow</h3>
        <p>
          Copy the supplied workflow template to
          <code>.github/workflows/deploy.yml</code> in the Bistro project. It
          builds and uploads <code>dist</code> with the permissions needed for
          Pages deployment. If your production branch is not <code>main</code>,
          change the workflow trigger.
        </p>

        <CodeBlockSample
          v-bind="codeSamples.pagesWorkflow"
          sample-key="pagesWorkflow"
          :copy-status="copyStatus.pagesWorkflow || 'Copy'"
          @copy="copyCode"
        />

        <h3 class="title is-4">3. Enable Pages and check routing</h3>
        <p>
          In GitHub, open <strong>Settings -> Pages</strong> and set
          <strong>Source</strong> to <strong>GitHub Actions</strong>. Push the
          workflow and configuration, then inspect the run in
          <strong>Actions</strong>.
        </p>
        <p>
          If the Bistro has no client-side router, no extra fallback is needed.
          If it uses Vue Router with <code>createWebHistory()</code>, direct
          visits to nested routes can return a GitHub Pages 404 because the
          static host looks for a real file at that path. Beginner-friendly
          options are hash history or a deliberate Pages-specific 404 fallback.
        </p>
      </section>

      <section id="vercel">
        <h2 class="title is-3">Option B2: Vercel</h2>
        <p>
          Vercel connects directly to GitHub. Production-branch pushes create
          production deployments; supported branches and pull requests can
          create preview deployments for review before production changes.
        </p>

        <figure class="tutorial-figure">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-6-vercel-branches.svg"
            alt="Branch diagram showing main creating a production Vercel deployment while a feature branch and pull request create preview deployments."
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            A connected Git repository can create a production deployment from
            the production branch and isolated previews from proposed changes.
          </figcaption>
        </figure>

        <h3 class="title is-4">Procedure</h3>
        <ol class="procedure-list">
          <li>
            Import the GitHub repository in Vercel and choose the folder
            containing the Bistro's <code>package.json</code>.
          </li>
          <li>
            Confirm the detected settings: framework preset Vite, build command
            <code>npm run build</code>, output directory <code>dist</code>, and
            the intended production branch.
          </li>
          <li>
            Add environment variables only if the project genuinely needs them
            at build time. Do not use client-side variables for private
            credentials.
          </li>
          <li>
            Deploy, open the public URL, and use previews for non-production
            changes when available.
          </li>
        </ol>

        <h3 class="title is-4">SPA rewrite: conditional, not automatic</h3>
        <p>
          If the app uses Vue Router history mode and direct visits to nested
          routes return 404, add the included <code>vercel.json</code>. This
          rewrite lets the SPA receive direct requests such as
          <code>/menu</code> and choose the view client-side. Do not add this
          blanket rewrite to a true multi-page site.
        </p>

        <CodeBlockSample
          v-bind="codeSamples.vercelRewrite"
          sample-key="vercelRewrite"
          :copy-status="copyStatus.vercelRewrite || 'Copy'"
          @copy="copyCode"
        />

        <details class="lesson-disclosure">
          <summary>Option B checkpoint: match each item to its job</summary>
          <ol>
            <li>GitHub repository: stores and versions source.</li>
            <li><code>npm run build</code>: transforms source for production.</li>
            <li><code>dist</code>: browser-ready output.</li>
            <li>GitHub Actions or Vercel: automates building and publishing.</li>
          </ol>
        </details>
      </section>

      <section id="verify-launch">
        <h2 class="title is-3">The Launch Verification Pass</h2>
        <p>
          A green deployment badge means the platform completed its
          instructions. It does not mean the Bistro is ready for a hungry
          visitor. Use the downloadable checklist and complete these passes on
          the public URL.
        </p>

        <div class="verification-grid">
          <div class="box">
            <h3 class="title is-5">Reachability</h3>
            <ul>
              <li>The expected URL loads over HTTPS.</li>
              <li>The page is not a provider placeholder or directory listing.</li>
              <li>The preferred domain format is consistent.</li>
            </ul>
          </div>
          <div class="box">
            <h3 class="title is-5">Content and navigation</h3>
            <ul>
              <li>All planned pages or views are reachable.</li>
              <li>Restaurant details are correct.</li>
              <li>Header, footer, buttons, and links work.</li>
            </ul>
          </div>
          <div class="box">
            <h3 class="title is-5">Visual quality</h3>
            <ul>
              <li>Images load and keep sensible proportions.</li>
              <li>Mobile, tablet, and desktop layouts work.</li>
              <li>Text remains readable at 200% zoom.</li>
            </ul>
          </div>
          <div class="box">
            <h3 class="title is-5">Accessibility and behaviour</h3>
            <ul>
              <li>Keyboard focus is visible.</li>
              <li>Headings follow a meaningful order.</li>
              <li>Forms and motion behave honestly and accessibly.</li>
            </ul>
          </div>
          <div class="box">
            <h3 class="title is-5">Technical quality</h3>
            <ul>
              <li>The console has no unexplained errors.</li>
              <li>The Network panel shows no missing local assets.</li>
              <li>Direct visits and refreshes work on client-side routes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="troubleshooting">
        <h2 class="title is-3">Troubleshooting by Symptom</h2>

        <figure class="tutorial-figure">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-6-debugging.svg"
            alt="Two debugging examples: a missing deployed asset caused by an incorrect base path and a nested SPA route returning 404 after refresh."
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Start with the failed request: assets usually point to path
            configuration; refresh-only route failures point to server fallback
            behaviour.
          </figcaption>
        </figure>

        <div class="troubleshooting-list">
          <details>
            <summary>The domain shows a default hosting page</summary>
            <p>
              Confirm the document root, placeholder index files, DNS target,
              and cache. A perfect upload to the wrong folder is still
              invisible.
            </p>
          </details>
          <details>
            <summary>The HTML loads but the page has no styling</summary>
            <p>
              Inspect the stylesheet request. On traditional hosting, check
              case and relative paths. On GitHub Pages, check Vite
              <code>base</code> against the repository name.
            </p>
          </details>
          <details>
            <summary>The Vite deployment is a blank page</summary>
            <p>
              Find the first failed module or asset request. Common causes are
              incorrect <code>base</code>, runtime JavaScript errors, missing
              committed files, or missing build-time variables.
            </p>
          </details>
          <details>
            <summary>The deployment build fails but local development works</summary>
            <p>
              Run a clean local build. Check <code>npm ci</code>, lockfile
              state, filename case, Node version, committed imports, and
              required build-time variables.
            </p>
          </details>
          <details>
            <summary>A nested Vue route works through clicks but fails after refresh</summary>
            <p>
              That is a server fallback problem, not the same operation as a
              client-side link click. On Vercel, add the SPA rewrite when the
              project is truly an SPA. On GitHub Pages, use hash history or a
              deliberate fallback strategy.
            </p>
          </details>
        </div>
      </section>

      <section id="checkpoint">
        <CheckpointBox
          title="Checkpoint: Can You Explain the Deployment Hand-Off?"
          description="Before the practical work, answer these in your own words."
          :questions="checkpointQuestions"
          :tips="[
            'Name the file state first: source, build output, or uploaded public files.',
            'A build service does not make client-exposed variables secret.',
            'Route refresh bugs often involve the server, not just the Vue app.',
          ]"
        />
      </section>

      <section id="guided-practice">
        <GuidedPractice
          title="Guided Practice: Deploy Black Swan Bistro"
          description="Choose the pathway that matches your project, publish the correct files, and verify the public result."
          :steps="guidedPracticeSteps"
          :success-criteria="[
            'You can name which files went live',
            'The public URL loads over HTTPS',
            'CSS, JavaScript, images, and routes work from the live URL',
            'You tested mobile layout, keyboard focus, and console/network errors',
            'You recorded the host, URL, branch or document root, and rollback notes',
          ]"
        />
      </section>

      <section id="independent-practice">
        <IndependentPractice
          title="Mini Challenge: Make One Safe Production Change"
          description="The first deployment proves the pipeline can work. The second proves you understand how to use it."
          task-title="Deploy one low-risk follow-up"
          task="<p>Change one low-risk content detail, such as the footer year or a short Bistro description. Test locally, deploy through the same pathway, confirm the public change, and record how you would roll it back.</p>"
          :requirements="[
            'Choose a change that does not affect core navigation or booking/contact behaviour',
            'Test locally before deploying',
            'Use the same deployment pathway as the first launch',
            'Confirm the change on the public URL',
            'Write one rollback note in your checklist',
          ]"
          :stretch-goals="[
            'Review a Vercel preview deployment before production',
            'Check one Lighthouse category and record one improvement idea',
            'Test the public URL on another device or network',
          ]"
          :rubric="[
            {
              criteria: 'Deployment control',
              success:
                'The follow-up change reaches the public URL through the intended pathway.',
            },
            {
              criteria: 'Verification',
              success:
                'The checklist records live URL testing, not only local testing.',
            },
            {
              criteria: 'Rollback thinking',
              success:
                'The notes explain how to restore the previous version if needed.',
            },
          ]"
        />
      </section>

      <section id="knowledge-check">
        <CheckpointBox
          title="Knowledge Check: Can You Verify a Deployment?"
          description="Use these questions to confirm the deployment ideas before you call the project finished."
          :questions="knowledgeCheckQuestions"
          answers-button-text="Show Suggested Answers"
          :tips="[
            'Think about which environment you are checking: local, preview, or production.',
            'Name the built files before naming the host.',
            'A live URL can reveal issues that localhost cannot.',
          ]"
        />
      </section>

      <section id="recap">
        <h2 class="title is-3">What You Have Built</h2>
        <p>
          The Black Swan Bistro is now more than a folder on your computer. You
          identified the browser-ready version of the project, moved it through
          a deployment pathway, connected files, build output, hosting, and a
          public URL, and checked the result as a visitor would experience it.
        </p>
        <p>
          That is the full web-development loop: plan, build, test, deploy,
          observe, improve.
        </p>
      </section>

      <section id="closure">
        <ClosureSection
          title="Part 6 Complete: The Bistro Is Live"
          :key-takeaways="closureKeyTakeaways"
          :objectives="closureObjectives"
          :reflection-prompts="closureReflectionPrompts"
          real-world-application="<p>Professional deployment work is less about dramatic button-clicking and more about repeatable evidence. Know what changed, where it was served, how it was checked, and how to recover if something goes sideways.</p>"
          next-steps="<p>From here, connect a custom domain, add privacy-respecting analytics, measure performance, document rollback, or move into ongoing website care.</p>"
        />
        <p class="verified-note">
          Technical instructions last verified 4 August 2026. Interfaces and
          action versions can change, so preserve the concepts and re-check the
          official resources below when updating this lesson.
        </p>
      </section>

      <TutorialRecommendations :current-path="tutorialPath" />
    </div>
  </div>
</template>

<style scoped>
.bsb-deploy-site pre,
.code-sample pre {
  background: #1f2937;
  color: #f9fafb;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  margin: 1.25rem 0;
}

.bsb-deploy-site code {
  font-size: 0.95em;
}

.tutorial-figure {
  margin: 2rem 0;
}

.tutorial-figure img {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
}

.tutorial-figure figcaption,
.verified-note {
  color: #4b5563;
  font-size: 0.95rem;
  margin-top: 0.75rem;
}

.hero-figure img {
  border-color: #c4a35a;
}

.deployment-model-columns .box,
.verification-grid .box,
.download-box,
.pathway-card {
  border-radius: 8px;
}

.pathway-grid,
.verification-grid {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}

.pathway-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.verification-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.pathway-card {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-height: 100%;
  padding: 1.25rem;
  color: #1f2937;
  background: #fffaf2;
  border: 1px solid #d9d0c0;
  text-decoration: none;
}

.pathway-card:focus,
.pathway-card:hover {
  border-color: #7a1828;
  box-shadow: 0 0 0 3px rgba(122, 24, 40, 0.15);
}

.pathway-icon {
  color: #7a1828;
  font-size: 1.35rem;
}

.download-box {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: flex-start;
}

.download-box .buttons {
  justify-content: flex-end;
  min-width: 18rem;
}

.procedure-list li,
.verification-grid li,
.troubleshooting-list p {
  margin-bottom: 0.65rem;
}

.code-sample {
  margin: 1.5rem 0;
}

.code-sample figcaption {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  background: #f8f3ea;
  border: 1px solid #d9d0c0;
  border-radius: 8px 8px 0 0;
  color: #2d2724;
  font-weight: 700;
}

.code-sample pre {
  border-radius: 0 0 8px 8px;
  margin-top: 0;
}

.code-language {
  color: #7a1828;
  font-size: 0.85rem;
  text-transform: uppercase;
}

.code-sample button {
  margin-left: auto;
}

.lesson-disclosure,
.troubleshooting-list details {
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f3ea;
  border: 1px solid #d9d0c0;
  border-radius: 8px;
}

.lesson-disclosure summary,
.troubleshooting-list summary {
  cursor: pointer;
  color: #7a1828;
  font-weight: 700;
}

.troubleshooting-list details[open] summary {
  margin-bottom: 0.75rem;
}

@media (max-width: 900px) {
  .pathway-grid,
  .verification-grid {
    grid-template-columns: 1fr;
  }

  .download-box {
    display: block;
  }

  .download-box .buttons {
    justify-content: flex-start;
    min-width: 0;
    margin-top: 1rem;
  }
}

@media (max-width: 640px) {
  .code-sample figcaption {
    align-items: flex-start;
    flex-direction: column;
  }

  .code-sample button {
    margin-left: 0;
  }
}
</style>
