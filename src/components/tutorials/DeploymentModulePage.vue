<script setup>
import { computed, ref } from 'vue';
import { useTutorialHead } from '@/composables/useTutorialHead';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
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
const pdfChecklistPath = '/resources/GraphiteEdge_Deployment_Checklist.pdf';

const lessonSequence = [
  {
    id: 'overview',
    orderLabel: 'Overview',
    title: 'Getting a Website Online',
    shortTitle: 'Overview',
    path: overviewPath,
    duration: 'Total: 160-210 min',
    description:
      'Understand deployment as a complete publishing system: files, hosting, DNS, domains, testing, troubleshooting, and future updates.',
    keywords:
      'website deployment tutorial, hosting for beginners, website deployment checklist, Vite deployment, DNS for beginners',
  },
  {
    id: 'deployment-is-publishing-not-just-uploading',
    orderLabel: 'Lesson 1',
    title: 'Deployment Is Publishing, Not Just Uploading',
    shortTitle: 'Publishing Workflow',
    path: '/tutorials/deployments/deployment-is-publishing-not-just-uploading',
    duration: '15-20 min',
    description:
      'Learn what deployment means, why local success is not live evidence, and how browsers, servers, domains, DNS, and files work together.',
    keywords:
      'what website deployment means, local website vs live website, index.html, relative file paths',
  },
  {
    id: 'understanding-hosting',
    orderLabel: 'Lesson 2',
    title: 'Understanding Hosting',
    shortTitle: 'Hosting Types',
    path: '/tutorials/deployments/understanding-hosting',
    duration: '20-25 min',
    description:
      'Compare shared hosting, static hosting, cloud hosting, VPS, dedicated servers, serverless hosting, and managed application hosting in plain English.',
    keywords:
      'website hosting types for beginners, shared hosting vs static hosting, VPS for students',
  },
  {
    id: 'choosing-a-hosting-path',
    orderLabel: 'Lesson 3',
    title: 'Choosing a Hosting Path',
    shortTitle: 'Choose a Path',
    path: '/tutorials/deployments/choosing-a-hosting-path',
    duration: '20-25 min',
    description:
      'Choose between traditional shared hosting, manual static hosting, and Git-connected deployment using realistic student and business scenarios.',
    keywords:
      'choose website hosting path, Git deployment vs manual upload, static hosting for students',
  },
  {
    id: 'traditional-shared-hosting-control-panels',
    orderLabel: 'Lesson 4',
    title: 'Traditional Shared Hosting and Control Panels',
    shortTitle: 'Shared Hosting',
    path: '/tutorials/deployments/traditional-shared-hosting-control-panels',
    duration: '25-30 min',
    description:
      'Understand shared hosting accounts, public web roots, control panels, account ownership, support boundaries, backups, and provider comparisons.',
    keywords:
      'shared hosting for students, cPanel File Manager, DirectAdmin Plesk, Australian web hosting students',
  },
  {
    id: 'uploading-html-css-javascript-website',
    orderLabel: 'Lesson 5',
    title: 'Uploading a Plain HTML, CSS and JavaScript Website',
    shortTitle: 'Upload Static Site',
    path: '/tutorials/deployments/uploading-html-css-javascript-website',
    duration: '25-30 min',
    description:
      'Publish a plain static website with a hosting File Manager or SFTP, check folder nesting, and test the live URL.',
    keywords:
      'upload HTML CSS JavaScript website, cPanel File Manager upload website, SFTP website upload',
  },
  {
    id: 'building-and-deploying-a-vite-site',
    orderLabel: 'Lesson 6',
    title: 'Building and Deploying a Vite Website',
    shortTitle: 'Deploy Vite Site',
    path: '/tutorials/deployments/building-and-deploying-a-vite-site',
    duration: '25-30 min',
    description:
      'Understand Vite source files, production builds, dist output, build commands, publish directories, environment variables, and routing concerns.',
    keywords:
      'deploy Vite website, npm run build, Vite dist folder, Vite base path deployment',
  },
  {
    id: 'domains-dns-and-going-live',
    orderLabel: 'Lesson 7',
    title: 'Domains, DNS, HTTPS and Going Live',
    shortTitle: 'Domains and DNS',
    path: '/tutorials/deployments/domains-dns-and-going-live',
    duration: '20-25 min',
    description:
      'Learn how registrars, DNS providers, hosting providers, SSL certificates, apex domains, www, redirects, and DNS propagation fit together.',
    keywords:
      'domains and DNS for beginners, A record CNAME nameservers HTTPS SSL, connect domain to hosting',
  },
  {
    id: 'testing-troubleshooting-live-website',
    orderLabel: 'Lesson 8',
    title: 'Testing and Troubleshooting a Live Website',
    shortTitle: 'Troubleshooting',
    path: '/tutorials/deployments/testing-troubleshooting-live-website',
    duration: '25-30 min',
    description:
      'Diagnose homepage, CSS, image, 404, white screen, caching, build, DNS, and routing problems using evidence instead of random changes.',
    keywords:
      'why website works locally but not online, missing CSS deployed website, white screen after deployment',
  },
  {
    id: 'continuous-improvement-deployment-workflows',
    orderLabel: 'Lesson 9',
    title: 'Continuous Improvement and Deployment Workflows',
    shortTitle: 'Improve Safely',
    path: '/tutorials/deployments/continuous-improvement-deployment-workflows',
    duration: '20-25 min',
    description:
      'Use manual and Git-based deployment workflows to plan, build, test, deploy, verify, monitor, improve, and repeat.',
    keywords:
      'website deployment workflow, continuous improvement website, Git deployment workflow beginners',
  },
  {
    id: 'deployment-lab-final-checklist',
    orderLabel: 'Lesson 10',
    title: 'Deployment Lab and Final Checklist',
    shortTitle: 'Deployment Lab',
    path: '/tutorials/deployments/deployment-lab-final-checklist',
    duration: '25-30 min',
    description:
      'Deploy the same tiny site through one or more workflows, compare the experience, use the deployment checklist, and apply the process to Black Swan Bistro.',
    keywords:
      'website deployment lab, deployment checklist, deploy deployment-test project',
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
    { id: 'publishing-system', title: 'Publishing System' },
    { id: 'five-questions', title: 'Five Questions' },
    { id: 'outcomes', title: 'Outcomes' },
    { id: 'sequence', title: 'Lesson Sequence' },
    { id: 'resources', title: 'Resources' },
  ],
  'deployment-is-publishing-not-just-uploading': [
    { id: 'local-live', title: 'Local and Live' },
    { id: 'system-roles', title: 'System Roles' },
    { id: 'paths-files', title: 'Paths and Files' },
    { id: 'inspection-exercise', title: 'Inspection Exercise' },
  ],
  'understanding-hosting': [
    { id: 'hosting-models', title: 'Hosting Models' },
    { id: 'hosting-comparison', title: 'Comparison Table' },
    { id: 'student-fit', title: 'Student Fit' },
  ],
  'choosing-a-hosting-path': [
    { id: 'three-paths', title: 'Three Paths' },
    { id: 'workflow-comparison', title: 'Workflow Comparison' },
    { id: 'decision-exercise', title: 'Decision Exercise' },
  ],
  'traditional-shared-hosting-control-panels': [
    { id: 'shared-hosting', title: 'Shared Hosting' },
    { id: 'control-panels', title: 'Control Panels' },
    { id: 'public-web-root', title: 'Public Web Root' },
    { id: 'provider-guidance', title: 'Provider Guidance' },
  ],
  'uploading-html-css-javascript-website': [
    { id: 'file-manager', title: 'File Manager' },
    { id: 'zip-files', title: 'ZIP Files' },
    { id: 'ftp-sftp', title: 'FTP and SFTP' },
    { id: 'guided-practice', title: 'Guided Practice' },
  ],
  'building-and-deploying-a-vite-site': [
    { id: 'vite-flow', title: 'Vite Flow' },
    { id: 'manual-vite', title: 'Manual Deployment' },
    { id: 'git-connected-vite', title: 'Git Deployment' },
    { id: 'vite-mistakes', title: 'Common Mistakes' },
  ],
  'domains-dns-and-going-live': [
    { id: 'domain-dns-roles', title: 'Roles' },
    { id: 'dns-records', title: 'DNS Records' },
    { id: 'dns-path', title: 'DNS Path' },
    { id: 'ownership-record', title: 'Ownership Record' },
  ],
  'testing-troubleshooting-live-website': [
    { id: 'troubleshooting-workflow', title: 'Workflow' },
    { id: 'problem-table', title: 'Problem Table' },
    { id: 'developer-tools', title: 'Developer Tools' },
  ],
  'continuous-improvement-deployment-workflows': [
    { id: 'improvement-cycle', title: 'Improvement Cycle' },
    { id: 'manual-workflow', title: 'Manual Workflow' },
    { id: 'git-workflow', title: 'Git Workflow' },
    { id: 'monitoring-tools', title: 'Monitoring Tools' },
  ],
  'deployment-lab-final-checklist': [
    { id: 'lab-project', title: 'Lab Project' },
    { id: 'lab-options', title: 'Lab Options' },
    { id: 'checklists', title: 'Checklists' },
    { id: 'reflection', title: 'Reflection' },
  ],
};

usePageSections(sectionMap[currentLesson.value.id] || sectionMap.overview);

const copyStatus = ref('Copy Markdown checklist');

const learningOutcomes = [
  'Explain deployment as a publishing system, not a single upload action.',
  'Compare hosting models and choose a sensible path for a project.',
  'Use traditional hosting concepts such as public web roots, File Manager, SFTP and control panels.',
  'Build and deploy a Vite project using production output.',
  'Connect domain, DNS, HTTPS and hosting decisions without inventing record values.',
  'Troubleshoot live deployment problems using evidence.',
  'Use a repeatable improvement workflow and checklist.',
];

const hostingModels = [
  {
    type: 'Shared hosting',
    goodFor: 'Small business and traditional websites',
    effort: 'Low to medium',
    studentUse: 'Good',
  },
  {
    type: 'Static hosting',
    goodFor: 'HTML, CSS, JavaScript and frontend builds',
    effort: 'Low',
    studentUse: 'Excellent',
  },
  {
    type: 'Cloud hosting',
    goodFor: 'Applications that need managed infrastructure',
    effort: 'Medium to high',
    studentUse: 'Later learning',
  },
  {
    type: 'VPS',
    goodFor: 'Custom server applications',
    effort: 'High',
    studentUse: 'Usually unnecessary',
  },
  {
    type: 'Dedicated server',
    goodFor: 'Large or specialised systems',
    effort: 'Very high',
    studentUse: 'Not suitable',
  },
  {
    type: 'Serverless platform',
    goodFor: 'Modern apps, APIs and functions',
    effort: 'Medium',
    studentUse: 'Later learning',
  },
  {
    type: 'Managed application hosting',
    goodFor: 'Framework apps where the platform handles server details',
    effort: 'Low to medium',
    studentUse: 'Good after fundamentals',
  },
];

const controlPanelTools = [
  ['File Manager', 'Upload, move, rename, extract and delete files on the host.'],
  ['Domains and subdomains', 'Connect names such as example.com or shop.example.com to sites.'],
  ['SSL certificates', 'Enable HTTPS so browsers can use a secure connection.'],
  ['Email accounts', 'Create mailbox accounts when the hosting plan includes email.'],
  ['Databases', 'Manage database-backed sites such as some CMS or PHP apps.'],
  ['PHP versions', 'Select runtime versions for PHP-based websites.'],
  ['Backups', 'Create or restore copies, depending on what the host provides.'],
  ['DNS tools', 'Edit records when DNS is managed by the hosting provider.'],
  ['Error logs', 'Inspect server-side errors when a page fails.'],
];

const providerGuidance = [
  {
    provider: 'VentraIP',
    url: 'https://ventraip.com.au/web-hosting/',
    checked: '14 July 2026',
    position:
      'Primary Australian shared-hosting example for students who want local account management and support context.',
    notes:
      'Official pages currently describe Australian ownership, Australian support context, cPanel-based hosting options and promotional monthly prices. Compare entry price, renewal price, storage, backups, email, SSL, support, data location and cancellation policy. Do not assume it is always cheapest.',
  },
  {
    provider: 'Hostinger',
    url: 'https://www.hostinger.com/web-hosting',
    checked: '14 July 2026',
    position: 'Budget-focused international option.',
    notes: 'Official pages currently show discounted long-term introductory pricing, renewal prices, storage, free SSL, backups and email inclusions that vary by plan. Check the subscription length and renewal rate before treating it as low-cost.',
  },
  {
    provider: 'Namecheap shared hosting',
    url: 'https://www.namecheap.com/hosting/shared/',
    checked: '14 July 2026',
    position: 'Useful for students already managing domains there.',
    notes: 'Official pages currently position shared hosting around cPanel, email accounts, SSD storage, backups and discounted first-term pricing. Check whether keeping domain and hosting together helps or reduces flexibility.',
  },
  {
    provider: 'DreamHost',
    url: 'https://www.dreamhost.com/hosting/',
    checked: '14 July 2026',
    position: 'Beginner-friendly international shared-hosting option.',
    notes: 'Official hosting pages currently present shared and managed options for small sites. Compare support, renewal cost, included email, backup model, control panel differences and data-location expectations.',
  },
  {
    provider: 'SiteGround',
    url: 'https://www.siteground.com/web-hosting.htm',
    checked: '14 July 2026',
    position: 'Often positioned around stronger support and managed features.',
    notes: 'Official Australian pages currently show discounted introductory pricing, renewal pricing excluding GST, SSL, CDN, daily backups and email. Students should compare total cost and whether the extra managed support is needed.',
  },
  {
    provider: 'Crazy Domains',
    url: 'https://www.crazydomains.com.au/web-hosting/',
    checked: '14 July 2026',
    position: 'A provider Australian students may encounter.',
    notes: 'Official Australian pages currently list shared Linux hosting tiers with websites, NVMe storage, email accounts, MySQL databases, free SSL and Cloudflare CDN. Compare renewal pricing, account ownership, support boundaries and cancellation policies carefully.',
  },
];

const modernStaticHostingLinks = [
  ['GitHub Pages', 'https://pages.github.com/'],
  ['Netlify', 'https://www.netlify.com/'],
  ['Vercel', 'https://vercel.com/'],
  ['Cloudflare Pages', 'https://pages.cloudflare.com/'],
];

const staticHostingGuidance = [
  {
    host: 'GitHub Pages',
    use: 'Simple repository-backed static sites',
    note:
      'Official GitHub Pages guidance describes sites hosted directly from a repository: edit, push and changes go live.',
  },
  {
    host: 'Netlify',
    use: 'Static sites, frontend builds, previews and Git deployments',
    note:
      'Official pricing currently includes a free tier with custom domains, SSL, deploy previews and usage credits. Check current credit limits before using it for client work.',
  },
  {
    host: 'Vercel',
    use: 'Frontend apps, Vite projects, previews and modern framework deployment',
    note:
      'Official pricing separates personal/hobby and paid/team use. Check whether the project is personal, commercial, or client work before choosing a plan.',
  },
  {
    host: 'Cloudflare Pages',
    use: 'Static sites and frontend builds on Cloudflare infrastructure',
    note:
      'Official Pages documentation positions it as a Git-connected static and frontend hosting platform. Check build limits, functions support and domain setup details.',
  },
];

const freeHostingLimitations = [
  'reduced storage or bandwidth',
  'limited databases or no email',
  'restricted support',
  'provider subdomains',
  'advertising, branding or disabled features',
  'account inactivity rules',
  'uncertain long-term availability',
  'restrictions on commercial use',
];

const staticGuidedPracticeSteps = [
  {
    title: 'Confirm the public web root',
    instructions:
      '<p>Find the folder your host serves to the web. Common names include <code>public_html</code>, <code>htdocs</code>, <code>www</code> and <code>httpdocs</code>. Confirm the correct folder in your host documentation.</p>',
  },
  {
    title: 'Back up or remove placeholder files',
    instructions:
      '<p>If the host created a placeholder homepage, download a backup before removing or replacing it. Do not delete files you do not understand on a real account.</p>',
  },
  {
    title: 'Upload the project files',
    instructions:
      '<p>Upload <code>index.html</code>, CSS, JavaScript and image folders so <code>index.html</code> sits directly inside the public web root.</p>',
  },
  {
    title: 'Test the live URL',
    instructions:
      '<p>Open the live address in a normal and private browser window. Check CSS, images, JavaScript, links and the browser console.</p>',
  },
];

const viteGuidedPracticeSteps = [
  {
    title: 'Run the development version',
    instructions:
      '<p>Run the project locally, often with <code>npm run dev</code>, and fix visible local problems first.</p>',
  },
  {
    title: 'Create the production build',
    instructions:
      '<p>Run <code>npm run build</code>. In many Vite projects, including GraphitEdge, the production output is <code>dist/</code>.</p>',
  },
  {
    title: 'Inspect the output',
    instructions:
      '<p>Use the project preview command where configured, or inspect the generated folder so you know which files will be published.</p>',
  },
  {
    title: 'Deploy and read the logs',
    instructions:
      '<p>For manual static hosting, deploy the built output. For Git-connected hosting, check the build command, output directory and build log.</p>',
  },
];

const troubleshootingProblems = [
  {
    symptom: 'Homepage does not load',
    causes:
      'No index.html, incorrect public folder, files nested one level too deep, DNS not connected, or deployment failed.',
    checks:
      'Confirm the live URL, public web root, deployment status, DNS connection and whether index.html is directly inside the served folder.',
    fix:
      'Move files to the correct public folder, wait for DNS/deployment completion where appropriate, then test the live URL again.',
  },
  {
    symptom: 'CSS does not load',
    causes:
      'Incorrect path, case mismatch, missing uploaded file, browser cache, or a server MIME issue.',
    checks:
      'Open DevTools Network, look for the CSS request, check status code, path, filename and capitalization.',
    fix:
      'Correct the href, upload the missing file, match case exactly and hard refresh or test in a private window.',
  },
  {
    symptom: 'Images are missing',
    causes:
      'Wrong filename, uppercase/lowercase mismatch, wrong extension, local-only path, or asset not included in the build.',
    checks:
      'Inspect the image URL in DevTools and compare it with the actual file in the deployed folder.',
    fix:
      'Use project-relative paths, simple lowercase filenames and redeploy the missing assets or rebuilt output.',
  },
  {
    symptom: 'Website works locally but not online',
    causes:
      'Missing build step, incorrect base path, missing files, unsupported server behaviour, SPA routing, or environment variables.',
    checks:
      'Check build output, host settings, console errors, network errors and deployment logs.',
    fix:
      'Build the project, deploy the correct output folder, configure routing/base path and add required environment variables.',
  },
  {
    symptom: 'Updates do not appear',
    causes:
      'Browser cache, CDN cache, deployment still processing, wrong branch, wrong hosting directory, or edited source not included in build.',
    checks:
      'Check deployment timestamp, branch, build log, uploaded directory and private-window result.',
    fix:
      'Redeploy the correct source/output, clear or wait for caches, and confirm you are testing the right live URL.',
  },
  {
    symptom: 'White screen',
    causes:
      'Missing JavaScript files, runtime errors, incorrect base path, missing environment variables, or broken client-side routing.',
    checks:
      'Open browser console, Network panel and deployment logs. Read the first meaningful error.',
    fix:
      'Fix the first error, rebuild, redeploy and verify. Do not change five things at once.',
  },
  {
    symptom: '404 errors',
    causes:
      'Missing files, wrong URL, case-sensitive paths, nested directories, SPA fallback routing, or wrong deployment directory.',
    checks:
      'Compare requested URL with deployed files and check host routing/fallback settings.',
    fix:
      'Correct the path, move files, configure SPA fallback where needed and redeploy.',
  },
];

const monitoringTools = [
  ['Browser developer tools', 'Shows console errors, failed network requests and loaded files.'],
  ['Lighthouse', 'Checks performance, accessibility, best practices and SEO signals.'],
  ['Google Search Console', 'Shows indexing, search visibility and crawl problems.'],
  ['Vercel Analytics', 'Helps Vercel-hosted projects understand traffic and performance patterns.'],
  ['Cloudflare Web Analytics', 'Lightweight traffic analytics for sites using Cloudflare.'],
  ['Uptime monitoring', 'Alerts when a live site becomes unavailable.'],
  ['Deployment logs', 'Explain what happened during build and publish steps.'],
  ['Change log', 'Records what changed, why, how it was deployed and what happened after.'],
];

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
| Domain registrar |  |
| DNS provider |  |
| Renewal date |  |
| Date deployed |  |

## Files and folders

- [ ] The homepage is named \`index.html\`.
- [ ] \`index.html\` is directly inside the public web root or publish directory.
- [ ] CSS, JavaScript, images and fonts are inside the project folder.
- [ ] Paths are relative, not local paths from one computer.
- [ ] File and folder names are simple, consistent and lowercase.
- [ ] ZIP files have been extracted when required.
- [ ] For Vite projects, the production build has been created.
- [ ] For Vite projects, the output folder matches the host settings.

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

| Date | Change | Reason | Deployment method | Result | Follow-up |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

Do not write passwords in this checklist.`;

function copyChecklist() {
  navigator.clipboard
    .writeText(checklistMarkdown)
    .then(() => {
      copyStatus.value = 'Markdown checklist copied';
      window.setTimeout(() => {
        copyStatus.value = 'Copy Markdown checklist';
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

      <template v-if="currentLesson.id === 'overview'">
        <AnticipatorySet
          title="Deployment Is a Publishing System"
          icon="fas fa-rocket"
          hook="<p>A website is not truly finished when it works on your computer. Deployment is the publishing system that prepares the files, puts them on a host, connects the address, tests the live result and makes future updates safer.</p><p>The button you press matters less than understanding which part of the system that button changes.</p>"
          :reflection-prompts="[
            'Where are the website files?',
            'How will future updates reach the live website?',
            'What evidence would prove the site works for someone else?'
          ]"
          connection="After this general module, Black Swan Bistro Part 5 gives you a project-specific application of the same workflow."
        />

        <section id="publishing-system">
          <h2 class="title is-3">The Publishing Flow</h2>
          <p>
            Deployment is the part of web work where a private project becomes a
            public service. That sounds grand, but the practical idea is simple:
            the files must be prepared, placed somewhere a web server can serve
            them, connected to a name people can use, and checked after real
            browsers request them from the internet.
          </p>
          <pre><code>Local project
  -> Production-ready files
  -> Hosting server
  -> DNS
  -> Domain name
  -> Visitor's browser</code></pre>
          <p>
            Each step answers a different question. Your editor creates the files.
            The build or preparation step makes them ready for visitors. Hosting
            stores and serves them. DNS points a readable domain to the right
            service. The browser requests the files and reveals whether the system
            actually works.
          </p>
          <p>
            A beginner mistake is treating deployment as an upload event. Upload
            is only one possible transport method. Deployment also includes
            deciding what should be uploaded, confirming the server is looking in
            the right folder, checking whether the domain points to that server,
            enabling HTTPS, and knowing how the next change will be published
            without guessing.
          </p>
        </section>

        <section id="five-questions">
          <h2 class="title is-3">Five Deployment Questions</h2>
          <p>
            If a deployment feels confusing, return to these questions. They turn
            a vague problem into a system you can inspect.
          </p>
          <ol>
            <li>Where are the website files?</li>
            <li>How do the files reach the server?</li>
            <li>How does the domain point to the hosting service?</li>
            <li>How does the browser find and request the files?</li>
            <li>How are future updates published safely?</li>
          </ol>
          <p>
            Those questions apply whether you use a traditional hosting control
            panel, SFTP, GitHub Pages, Netlify, Vercel, Cloudflare Pages or a
            more advanced application platform. The labels change. The system
            thinking stays useful.
          </p>
        </section>

        <section id="outcomes">
          <h2 class="title is-3">Learning Outcomes and Prerequisites</h2>
          <p>
            Allow about <strong>160-210 minutes</strong> for the full module. You
            should already be comfortable editing HTML and CSS, testing a page in
            a browser, and using basic Git if you choose a Git-connected path.
          </p>
          <ul>
            <li v-for="outcome in learningOutcomes" :key="outcome">{{ outcome }}</li>
          </ul>
          <p>
            The module deliberately covers both traditional hosting and modern
            static hosting. Students still meet cPanel-style accounts, public
            web roots and SFTP in real client work, while Vite projects usually
            fit better with build-aware platforms. You do not need to love every
            workflow. You do need to recognise what problem each workflow solves.
          </p>
          <p>
            Helpful prerequisites:
            <router-link to="/tutorials/intermediate/git-basics">Git Basics</router-link>,
            <router-link to="/tutorials/intermediate/working-with-vite">Working with Vite</router-link>,
            and
            <router-link to="/tutorials/intermediate/test-and-validate-your-site">
              Test and Validate Your Site
            </router-link>.
          </p>
          <CheckpointBox
            title="Overview Knowledge Check"
            description="Before starting Lesson 1, check the system model."
            :questions="[
              { question: 'Why is deployment more than uploading files?', answer: 'Because the files must be prepared, hosted, connected through DNS and a domain, tested live, and updated safely later.' },
              { question: 'Which part of the system stores and serves the website files?', answer: 'The hosting server or hosting platform.' },
              { question: 'What should you do when provider dashboards change?', answer: 'Focus on the purpose of the setting, read current provider documentation, and verify the live result.' }
            ]"
          />
        </section>

        <section id="sequence">
          <h2 class="title is-3">The Ten-Lesson Sequence</h2>
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

        <section id="resources">
          <h2 class="title is-3">Checklist and Project Application</h2>
          <div class="box checklist-download-box">
            <div>
              <h3 class="title is-5">Download the GraphiteEdge Deployment Checklist</h3>
              <p>
                A practical pre-launch, deployment and post-launch checklist for
                static and Vite websites. The final lesson also keeps a lightweight
                printable Markdown checklist for in-lesson use.
              </p>
            </div>
            <a
              class="button is-primary"
              :href="pdfChecklistPath"
              download
              aria-label="Download the GraphiteEdge Deployment Checklist PDF"
            >
              <span class="icon"><i class="fas fa-file-pdf"></i></span>
              <span>Download PDF</span>
            </a>
          </div>
          <div class="buttons">
            <router-link
              class="button is-primary"
              to="/tutorials/deployments/deployment-is-publishing-not-just-uploading"
            >
              Start the tutorial
            </router-link>
            <router-link class="button is-light" to="/tutorials/advanced/black-swan-bistro-part-5">
              Apply it to Black Swan Bistro Part 5
            </router-link>
          </div>
        </section>
      </template>

      <template v-else-if="currentLesson.id === 'deployment-is-publishing-not-just-uploading'">
        <LearningObjectives
          :objectives="[
            { verb: 'Explain', text: 'deployment as publishing rather than uploading' },
            { verb: 'Describe', text: 'local development versus a live website' },
            { verb: 'Identify', text: 'browser, hosting, DNS and domain roles' },
            { verb: 'Compare', text: 'source files and production-ready files' },
            { verb: 'Inspect', text: 'paths, filenames, index.html and console errors before deployment' }
          ]"
          purpose="A live site has to work from a server for someone else, not just from your own project folder."
          :prerequisites="[
            { topic: 'Files, Folders and Project Structure', link: '/tutorials/getting-started/files-folders-project-structure' },
            { topic: 'Test and Validate Your Site', link: '/tutorials/intermediate/test-and-validate-your-site' }
          ]"
        />

        <h2 id="local-live" class="title is-3">Local Development Versus a Live Website</h2>
        <p>
          Local development is where you build and test on your own computer. A
          live website is stored on a hosting service and requested by visitors'
          browsers over the web. It works on my laptop is a starting point, not
          deployment evidence.
        </p>
        <p>
          When a page opens locally, the browser can often see files through your
          computer's file system or a local development server. That environment
          is more forgiving than the public web in some ways and completely
          different in others. It may hide case mismatches, allow local-only file
          references, or serve files from a development tool that will not exist
          on the host. A live visitor does not have your desktop, your folder
          structure, or your terminal running in the background.
        </p>
        <p>
          Deployment asks a stricter question: can a browser on another device
          request the public URL and receive every file the page needs? That
          includes HTML, CSS, JavaScript, images, fonts, icons and any generated
          build assets.
        </p>

        <h2 id="system-roles" class="title is-3">The Roles in the System</h2>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead><tr><th>Part</th><th>What it does</th></tr></thead>
            <tbody>
              <tr><td>Browser</td><td>Requests files, runs JavaScript and displays the page.</td></tr>
              <tr><td>Hosting server</td><td>Stores and serves website files.</td></tr>
              <tr><td>DNS</td><td>Points names to the right hosting location.</td></tr>
              <tr><td>Domain</td><td>The readable address people use.</td></tr>
              <tr><td>Production-ready files</td><td>The files that should be served to visitors, such as static files or a Vite <code>dist</code> build.</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="paths-files" class="title is-3">Paths, Filenames and <code>index.html</code></h2>
        <p>
          Absolute local paths fail online because visitors cannot access your
          computer. This path only works on one student's machine:
        </p>
        <pre><code class="language-html">&lt;img src="/Users/student/Desktop/project/images/logo.png" alt="Company logo"&gt;</code></pre>
        <p>Use a project-relative path instead:</p>
        <pre><code class="language-html">&lt;img src="./images/logo.png" alt="Company logo"&gt;</code></pre>
        <p>
          Case-sensitive servers also care about exact filenames. If the file is
          <code>Logo.PNG</code> but the HTML asks for <code>logo.png</code>, the
          live site may fail even if your local computer was forgiving.
        </p>
        <p>
          Most static hosts look for <code>index.html</code> first. The server
          should not need a treasure map to find it.
        </p>
        <div class="notification is-info is-light">
          <p>
            <strong>Worked example:</strong> if your CSS says
            <code>background-image: url('../Images/Hero.JPG')</code> but the
            folder on the server is <code>images/hero.jpg</code>, the live site
            can lose its hero image. Fix the reference and the filename so they
            match exactly, then redeploy the changed file.
          </p>
        </div>

        <h2 id="inspection-exercise" class="title is-3">Learner Activity: Inspect a Project</h2>
        <p>
          Choose a small project before trying to deploy it. This activity is a
          pre-flight check. It is much easier to fix paths and filenames before
          the project is mixed with hosting, DNS and caching questions.
        </p>
        <ul class="checklist-list">
          <li><i class="fas fa-square"></i> Confirm <code>index.html</code> exists.</li>
          <li><i class="fas fa-square"></i> Confirm files use relative paths.</li>
          <li><i class="fas fa-square"></i> Confirm filenames are consistently lowercase.</li>
          <li><i class="fas fa-square"></i> Confirm images and stylesheets load.</li>
          <li><i class="fas fa-square"></i> Confirm no files are referenced from outside the project folder.</li>
          <li><i class="fas fa-square"></i> Confirm the browser console has no obvious errors.</li>
        </ul>
        <CheckpointBox
          title="Publishing Knowledge Check"
          :questions="[
            { question: 'Why can an absolute path to /Users/student/Desktop fail online?', answer: 'The visitor and hosting server cannot access the student computer path.' },
            { question: 'Why does index.html matter on many static hosts?', answer: 'It is the default homepage file the server looks for inside the public web root.' },
            { question: 'What is one reason a file can work locally but fail online?', answer: 'Case-sensitive filename mismatch, missing upload, local-only path, or a build output difference.' }
          ]"
        />
      </template>

      <template v-else-if="currentLesson.id === 'understanding-hosting'">
        <LearningObjectives
          :objectives="[
            { verb: 'Compare', text: 'major hosting models in plain English' },
            { verb: 'Explain', text: 'why provider terminology can be inconsistent' },
            { verb: 'Identify', text: 'which hosting types are realistic for beginner student projects' },
            { verb: 'Avoid', text: 'unnecessary VPS or dedicated server complexity' }
          ]"
          purpose="Hosting is where the website lives, but different providers use similar words for very different services."
          :prerequisites="[{ topic: 'Deployment Is Publishing, Not Just Uploading', link: '/tutorials/deployments/deployment-is-publishing-not-just-uploading' }]"
        />
        <h2 id="hosting-models" class="title is-3">Hosting Models in Plain English</h2>
        <p>
          Hosting terminology is messy. One provider may call something cloud
          hosting, another may call a similar product managed hosting, and a third
          may bundle several services together. Focus on what the host actually
          does: stores files, runs code, manages servers, provides databases,
          handles builds or connects domains.
        </p>
        <p>
          A hosting service is a mix of responsibilities. Some services give you
          a folder for files and a control panel. Some connect to Git and run
          your build. Some rent you a server and expect you to configure the
          operating system. Some hide the server almost completely and run small
          functions when requests arrive. Beginner deployment becomes easier when
          you choose the service that matches the site you actually built.
        </p>
        <pre><code>Website files
  -> hosting account or platform
  -> server resources
  -> domain and DNS connection
  -> visitor requests</code></pre>

        <h2 id="hosting-comparison" class="title is-3">Hosting Comparison</h2>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead>
              <tr>
                <th>Hosting type</th>
                <th>Good for</th>
                <th>Technical effort</th>
                <th>Typical student use</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="model in hostingModels" :key="model.type">
                <td>{{ model.type }}</td>
                <td>{{ model.goodFor }}</td>
                <td>{{ model.effort }}</td>
                <td>{{ model.studentUse }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="student-fit" class="title is-3">What Beginners Usually Need</h2>
        <p>
          For most beginner work, static hosting and shared hosting are enough.
          A VPS or dedicated server teaches server administration, not just
          deployment. That can be valuable later, but it is usually unnecessary
          for a first portfolio, class exercise or static business website.
        </p>
        <p>
          Use shared hosting when you need a traditional account with domain
          tools, email, databases or PHP. Use static hosting when the site is
          HTML, CSS, JavaScript or a built frontend such as Vite. Use managed
          application hosting later when the project has server-side framework
          needs. Treat VPS and dedicated hosting as specialist tools, not a badge
          of seriousness.
        </p>
        <CheckpointBox
          title="Hosting Knowledge Check"
          :questions="[
            { question: 'Which hosting types are usually enough for beginner static sites?', answer: 'Static hosting and, in traditional environments, shared hosting.' },
            { question: 'Why is a VPS usually unnecessary for beginner deployment?', answer: 'It adds server administration responsibilities that are separate from publishing a static site.' },
            { question: 'Why should students be cautious with hosting terminology?', answer: 'Providers use terms inconsistently, so students should inspect what the service actually stores, builds, runs and supports.' }
          ]"
        />
      </template>

      <template v-else-if="currentLesson.id === 'choosing-a-hosting-path'">
        <LearningObjectives
          :objectives="[
            { verb: 'Compare', text: 'traditional shared hosting, manual static hosting and Git-connected hosting' },
            { verb: 'Match', text: 'hosting paths to realistic project scenarios' },
            { verb: 'Explain', text: 'how update workflows differ' },
            { verb: 'Check', text: 'provider terms without treating changing prices as permanent facts' }
          ]"
          purpose="A sensible hosting choice fits the project, the update workflow, support needs and account ownership."
          :prerequisites="[{ topic: 'Understanding Hosting', link: '/tutorials/deployments/understanding-hosting' }]"
        />
        <h2 id="three-paths" class="title is-3">Three Beginner Deployment Paths</h2>
        <p>
          Choosing hosting is not about finding the one perfect provider. It is
          about choosing a path that matches the project and the person who will
          maintain it. A classroom exercise can tolerate a simpler workflow than
          a client site with renewals, email and support responsibilities.
        </p>
        <div class="columns hosting-options">
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Path 1: Traditional shared hosting</h3>
              <p>Good for plain HTML/CSS/JS, small business sites, traditional hosting practice, and projects that may need email, databases or PHP later.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Path 2: Manual static hosting</h3>
              <p>Good for small static exercises, drag-and-drop deployment, quick demonstrations and simple portfolio experiments.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Path 3: Git-connected hosting</h3>
              <p>Good for Vite projects, ongoing portfolio sites, automated deployment and students learning version control.</p>
            </div>
          </div>
        </div>

        <h2 id="workflow-comparison" class="title is-3">How Updates Reach the Live Site</h2>
        <pre><code>Edit -> Zip -> Upload
Edit -> Save -> Upload changed files with SFTP
Edit -> Commit -> Push -> Automatic deployment</code></pre>
        <p>
          The first workflow is simple but easy to lose track of. The second is
          more controlled if you know which changed files matter. The third is
          repeatable and traceable, but only once Git basics make sense.
        </p>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead>
              <tr>
                <th>Question</th>
                <th>Shared hosting</th>
                <th>Manual static hosting</th>
                <th>Git-connected hosting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Who is it best for?</td>
                <td>Small business sites needing traditional account tools.</td>
                <td>Quick static exercises and demonstrations.</td>
                <td>Ongoing projects where changes should be traceable.</td>
              </tr>
              <tr>
                <td>What can go wrong?</td>
                <td>Wrong public folder, unclear ownership, renewal surprises.</td>
                <td>Wrong upload folder, stale files, missing build output.</td>
                <td>Wrong branch, failed build command, missing environment variables.</td>
              </tr>
              <tr>
                <td>What should be recorded?</td>
                <td>Account owner, renewal date, web root, support process.</td>
                <td>Upload method, public URL, source folder, last upload date.</td>
                <td>Repository, branch, build command, output directory, deploy URL.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <IndependentPractice
          id="decision-exercise"
          title="Hosting Decision Exercise"
          icon="fas fa-route"
          task="<p>Choose a hosting path for each scenario and explain why.</p>"
          :requirements="[
            'Scenario A: a small HTML and CSS classroom exercise',
            'Scenario B: a Vite portfolio project that will be updated regularly',
            'Scenario C: a small business website requiring reliable support, email and clear account ownership'
          ]"
          :stretch-goals="[
            'Name one risk for each path',
            'List which provider details must be checked before purchase or signup'
          ]"
        />
        <CheckpointBox
          title="Hosting Path Knowledge Check"
          :questions="[
            { question: 'Which path suits a Vite portfolio that will be updated regularly?', answer: 'Usually Git-connected hosting, because commits can trigger builds and deployments.' },
            { question: 'Which path may suit a small business site that needs email and clear account ownership?', answer: 'Traditional shared hosting can be appropriate if the plan, support, renewals and ownership are clear.' },
            { question: 'Why is Edit -> Zip -> Upload risky for long-term updates?', answer: 'It is easy to lose track of which files changed and which version is live.' }
          ]"
        />
      </template>

      <template v-else-if="currentLesson.id === 'traditional-shared-hosting-control-panels'">
        <LearningObjectives
          :objectives="[
            { verb: 'Explain', text: 'what shared hosting is' },
            { verb: 'Identify', text: 'common control panel tools' },
            { verb: 'Recognise', text: 'public web root folder names' },
            { verb: 'Compare', text: 'provider guidance without relying on fragile pricing claims' },
            { verb: 'Record', text: 'account ownership and support responsibilities' }
          ]"
          purpose="Traditional hosting is still common for small websites, so students should understand the account, not only the upload button."
          :prerequisites="[{ topic: 'Choosing a Hosting Path', link: '/tutorials/deployments/choosing-a-hosting-path' }]"
        />
        <h2 id="shared-hosting" class="title is-3">What Shared Hosting Includes</h2>
        <p>
          Shared hosting means many customer sites live on managed hosting
          infrastructure. A hosting account may include storage, bandwidth,
          domains, email, databases, backups, SSL, logs and support. The host
          manages the server environment; you still manage your files, renewals,
          credentials, content and backups.
        </p>
        <p>
          For client or business sites, account ownership matters. The business
          should know who owns the account, who pays renewal invoices, where
          support is requested and where backups live.
        </p>
        <p>
          Shared hosting is common because it bundles many practical website
          needs into one account. That convenience is also why students need to
          read carefully. Storage, bandwidth, email accounts, databases, backup
          frequency, support hours and renewal prices can vary across plans from
          the same provider. A cheap first year is not the same thing as a cheap
          website over three years.
        </p>
        <ul>
          <li><strong>Account ownership:</strong> the client or organisation should own the account where possible.</li>
          <li><strong>Billing responsibility:</strong> someone must receive and pay renewal notices.</li>
          <li><strong>Backup responsibility:</strong> provider backups are useful, but students should still keep project copies.</li>
          <li><strong>Support boundaries:</strong> hosts may help with server/account issues, but not custom code bugs.</li>
        </ul>

        <h2 id="control-panels" class="title is-3">Control Panels You May See</h2>
        <p>
          cPanel, DirectAdmin, Plesk and proprietary dashboards look different,
          but often provide equivalent functions.
        </p>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead><tr><th>Tool</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr v-for="tool in controlPanelTools" :key="tool[0]">
                <td>{{ tool[0] }}</td>
                <td>{{ tool[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="public-web-root" class="title is-3">The Public Web Root</h2>
        <pre><code>public_html/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── images/
    └── logo.svg</code></pre>
        <p>
          The public folder may be named <code>public_html</code>,
          <code>htdocs</code>, <code>www</code>, <code>httpdocs</code> or
          something provider-specific. Confirm the correct folder in your host's
          documentation.
        </p>

        <h2 id="provider-guidance" class="title is-3">Provider Guidance for Students</h2>
        <p>
          This section is educational, not promotional. Hosting prices, free
          plans, renewal rates and feature limits change frequently. Check each
          provider's current official website before signing up, distinguish
          introductory pricing from renewal pricing, and check currency, GST and
          cancellation terms where relevant.
        </p>
        <p>
          Provider details below were checked against current official provider
          pages on <strong>14 July 2026</strong>. They are deliberately written
          as comparison guidance rather than promises. Before students buy
          hosting, they should open the provider's current plan page and record
          the first-term price, renewal price, currency, GST/tax treatment,
          storage, email, databases, SSL, backups, support and cancellation
          policy.
        </p>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead><tr><th>Provider</th><th>Positioning</th><th>Compare carefully</th><th>Checked</th></tr></thead>
            <tbody>
              <tr v-for="provider in providerGuidance" :key="provider.provider">
                <td>
                  <a :href="provider.url" target="_blank" rel="noopener noreferrer">
                    {{ provider.provider }}
                  </a>
                </td>
                <td>{{ provider.position }}</td>
                <td>{{ provider.notes }}</td>
                <td>{{ provider.checked }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 class="title is-4">Free Traditional Hosting</h3>
        <p>
          Free shared hosting can be useful for experimentation, but it should not
          be recommended for real client or business sites. If you mention
          providers such as InfinityFree, AwardSpace or FreeHosting.com, verify
          their current terms first.
        </p>
        <ul>
          <li v-for="limitation in freeHostingLimitations" :key="limitation">{{ limitation }}</li>
        </ul>
        <p>
          Free shared hosting is most useful when the learning goal is to see a
          control panel, upload files and understand limitations. It is not a
          sensible default for a real client or business website because support,
          continuity, backups and commercial-use terms matter.
        </p>
        <h3 class="title is-4">Preferred Free Modern Hosting for Static Projects</h3>
        <p>
          GitHub Pages, Netlify, Vercel and Cloudflare Pages are not traditional
          shared hosting services. They are generally better suited to static
          sites and frontend projects than free shared hosting, especially when a
          project is already in Git.
        </p>
        <ul>
          <li v-for="host in modernStaticHostingLinks" :key="host[0]">
            <a :href="host[1]" target="_blank" rel="noopener noreferrer">
              {{ host[0] }}
            </a>
          </li>
        </ul>
        <CheckpointBox
          title="Shared Hosting Knowledge Check"
          :questions="[
            { question: 'What is the public web root?', answer: 'The folder the host serves to the web, such as public_html, htdocs, www or httpdocs.' },
            { question: 'Why should students compare renewal pricing separately from entry pricing?', answer: 'Introductory prices are often temporary; the renewal price is what the site may cost after the first term.' },
            { question: 'Why is free shared hosting unsuitable for a real business site?', answer: 'It may have limited support, uncertain continuity, restrictions, branding, reduced resources or unclear commercial terms.' }
          ]"
        />
      </template>

      <template v-else-if="currentLesson.id === 'uploading-html-css-javascript-website'">
        <LearningObjectives
          :objectives="[
            { verb: 'Upload', text: 'a plain static website using File Manager or SFTP' },
            { verb: 'Verify', text: 'that index.html is directly inside the web root' },
            { verb: 'Explain', text: 'why uploading a ZIP is not automatically publishing' },
            { verb: 'Protect', text: 'hosting credentials and live files' }
          ]"
          purpose="Manual deployment teaches exactly where files go and why folder nesting can break a homepage."
          :prerequisites="[{ topic: 'Traditional Shared Hosting and Control Panels', link: '/tutorials/deployments/traditional-shared-hosting-control-panels' }]"
        />
        <h2 id="file-manager" class="title is-3">File Manager Workflow</h2>
        <p>
          A hosting File Manager is a browser-based tool for working with files
          already on the hosting account. It is useful for beginners because it
          makes the remote folder visible, but it is still possible to upload the
          right files to the wrong place. Always confirm the public web root
          before changing anything.
        </p>
        <GuidedPractice
          title="Upload a Plain Static Site"
          icon="fas fa-upload"
          :steps="staticGuidedPracticeSteps"
          :success-criteria="[
            'The correct public web root is identified',
            'index.html is directly inside the public folder',
            'CSS, JavaScript and images are uploaded',
            'The live URL works in a normal and private browser window'
          ]"
        />
        <div class="columns">
          <div class="column">
            <div class="box">
              <h3 class="title is-6">Common mistake</h3>
              <pre><code>public_html/
└── my-project/
    └── index.html</code></pre>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-6">Usually correct</h3>
              <pre><code>public_html/
├── index.html
├── css/
├── js/
└── images/</code></pre>
            </div>
          </div>
        </div>

        <h2 id="zip-files" class="title is-3">Uploading a ZIP Is Not Publishing</h2>
        <p>
          Uploading <code>mywebsite.zip</code> only places an archive on the
          server. The archive usually needs to be extracted, and the extracted
          files need to be placed in the correct public directory. Uploading the
          ZIP is not the same as publishing what is inside it.
        </p>
        <p>
          A ZIP upload is a transport shortcut. If the host supports extraction,
          the useful workflow is: create the ZIP from the contents of the project
          folder, upload it into the correct public folder, extract it, then
          check that <code>index.html</code> sits directly in the web root. If
          extraction creates an extra wrapper folder, move the contents up one
          level or the homepage may not load.
        </p>

        <h2 id="ftp-sftp" class="title is-3">FTP, FTPS and SFTP</h2>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead><tr><th>Protocol</th><th>Plain-English meaning</th><th>Use</th></tr></thead>
            <tbody>
              <tr><td>FTP</td><td>Older file transfer protocol.</td><td>Avoid when secure alternatives are available.</td></tr>
              <tr><td>FTPS</td><td>FTP protected with TLS.</td><td>Acceptable when supported and configured correctly.</td></tr>
              <tr><td>SFTP</td><td>File transfer over SSH.</td><td>Prefer where supported.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          You may need a hostname, username, password, port and remote directory.
          Suitable clients include FileZilla, Cyberduck, WinSCP and Transmit
          as an optional paid macOS tool. Do not buy software just to complete
          this lesson.
        </p>
        <pre><code>Local computer files | Remote hosting files</code></pre>
        <p>
          The two-panel interface is the main idea: one side is your computer,
          the other side is the hosting account. Upload from local to remote;
          download from remote to local. Before replacing live files, check the
          timestamp, file size and remote path. If you are not sure whether a
          file is still needed, download a backup first.
        </p>
        <div class="notification is-warning is-light">
          <p>
            Do not share hosting passwords, commit credentials to Git or keep
            unused accounts open. Use separate accounts where available and store
            credentials securely.
          </p>
        </div>
        <CheckpointBox
          title="Manual Upload Knowledge Check"
          :questions="[
            { question: 'Why does public_html/my-project/index.html often fail as the homepage?', answer: 'The host may look for index.html directly inside public_html, not inside the nested my-project folder.' },
            { question: 'What is the difference between uploading a ZIP and publishing the site?', answer: 'The ZIP must be extracted and the extracted files must be in the correct public web root.' },
            { question: 'Which transfer method should students prefer when supported: FTP, FTPS or SFTP?', answer: 'SFTP, because it transfers files over SSH and avoids plain FTP credentials.' }
          ]"
        />
      </template>

      <template v-else-if="currentLesson.id === 'building-and-deploying-a-vite-site'">
        <LearningObjectives
          :objectives="[
            { verb: 'Explain', text: 'Vite source files versus production output' },
            { verb: 'Run', text: 'npm run dev and npm run build for the right purpose' },
            { verb: 'Identify', text: 'dist, build commands and publish directories' },
            { verb: 'Read', text: 'build logs and spot common Vite deployment mistakes' }
          ]"
          purpose="Vite makes development fast, but deployment should serve production output rather than the development workshop."
          :prerequisites="[{ topic: 'Uploading a Plain HTML, CSS and JavaScript Website', link: '/tutorials/deployments/uploading-html-css-javascript-website' }]"
        />
        <h2 id="vite-flow" class="title is-3">The Vite Deployment Flow</h2>
        <pre><code>src/
  -> npm run build
  -> dist/
  -> Hosting platform</code></pre>
        <p>
          <code>npm run dev</code> starts a development server. It is for local
          work. <code>npm run build</code> creates production-ready files. In
          many Vite projects, the output folder is <code>dist</code>.
        </p>
        <p>
          Think of the source project as the workshop and <code>dist</code> as
          the packed result. The workshop contains source files, dependencies,
          configuration and development conveniences. Visitors do not need that
          whole workshop. They need the built HTML, CSS, JavaScript and assets
          that Vite prepares for production.
        </p>
        <pre><code>npm run dev    # local development server
npm run build  # production output
npm run preview # local preview of the built output, when configured</code></pre>
        <GuidedPractice
          title="Build and Deploy a Vite Site"
          icon="fas fa-gears"
          :steps="viteGuidedPracticeSteps"
          :success-criteria="[
            'The development site runs locally',
            'The production build completes',
            'The output folder is identified',
            'Build logs are checked',
            'The live site is tested after deployment'
          ]"
        />

        <h2 id="manual-vite" class="title is-3">Manual Static Hosting With Vite</h2>
        <p>
          When manually deploying a Vite project to static hosting, students
          should usually deploy the generated <code>dist</code> output, not the
          source project folder. Check whether the host expects the folder itself
          or the contents of the folder.
        </p>
        <p>
          If your built files live in <code>dist/</code>, manually uploading the
          repository root can publish the wrong thing. The host may receive
          <code>src/</code>, <code>package.json</code> and configuration files
          but no production-ready homepage. Build first, inspect the output,
          then upload the output expected by the host.
        </p>

        <h2 id="git-connected-vite" class="title is-3">Git-Connected Vite Deployment</h2>
        <p>A Git-connected platform normally:</p>
        <ol>
          <li>clones the repository</li>
          <li>installs dependencies</li>
          <li>runs the build command</li>
          <li>publishes the configured output directory</li>
        </ol>
        <p>
          For a typical Vite project the build command is often
          <code>npm run build</code> and the publish directory is often
          <code>dist</code>. Do not type those from memory if the project differs:
          read <code>package.json</code> and the hosting platform's framework
          settings. If the build fails, the log is not decoration. It is the
          first witness.
        </p>
        <h3 class="title is-4">Static Hosts for Vite and Frontend Builds</h3>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead><tr><th>Platform</th><th>Useful for</th><th>Student note</th></tr></thead>
            <tbody>
              <tr v-for="host in staticHostingGuidance" :key="host.host">
                <td>{{ host.host }}</td>
                <td>{{ host.use }}</td>
                <td>{{ host.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="vite-mistakes" class="title is-3">Common Vite Deployment Mistakes</h2>
        <ul>
          <li>publishing <code>src</code></li>
          <li>publishing the repository root when the host expects built output</li>
          <li>using the wrong build command</li>
          <li>setting the wrong output directory</li>
          <li>missing environment variables</li>
          <li>incorrect base path configuration</li>
          <li>broken SPA routing or missing fallback configuration</li>
        </ul>
        <p>
          If the site appears as a white page after deployment, open the browser
          console and Network panel. Missing JavaScript files, 404s for assets,
          or errors mentioning environment variables often point directly to the
          deployment setting that needs attention.
        </p>
        <CheckpointBox
          title="Vite Deployment Knowledge Check"
          :questions="[
            { question: 'What folder do students usually deploy for a manual Vite static deployment?', answer: 'The production output folder, commonly dist, rather than the source project folder.' },
            { question: 'What does a Git-connected platform normally do after a push?', answer: 'Clone the repository, install dependencies, run the build command and publish the configured output directory.' },
            { question: 'Where should students look first when a Vite deployment fails?', answer: 'The build log, browser console and Network panel.' }
          ]"
        />
      </template>

      <template v-else-if="currentLesson.id === 'domains-dns-and-going-live'">
        <LearningObjectives
          :objectives="[
            { verb: 'Distinguish', text: 'domain registrar, DNS provider, hosting provider and web server roles' },
            { verb: 'Recognise', text: 'A, AAAA, CNAME and nameserver records' },
            { verb: 'Explain', text: 'HTTPS, SSL issuance and www/non-www redirects' },
            { verb: 'Record', text: 'website ownership details without storing passwords' }
          ]"
          purpose="Going live is less mysterious when domain, DNS, hosting and HTTPS each have a job."
          :prerequisites="[{ topic: 'Building and Deploying a Vite Website', link: '/tutorials/deployments/building-and-deploying-a-vite-site' }]"
        />
        <h2 id="domain-dns-roles" class="title is-3">Who Does What?</h2>
        <p>
          Domains and DNS feel abstract because nothing visible moves when you
          change them. You are editing directions. A domain is the readable name;
          DNS is the lookup system that tells browsers where that name should go;
          hosting is the place that responds with the website.
        </p>
        <ul>
          <li><strong>Domain registrar:</strong> registers and renews the domain.</li>
          <li><strong>DNS provider:</strong> manages the records that point names to services.</li>
          <li><strong>Hosting provider:</strong> stores and serves the website files or app.</li>
          <li><strong>Web server:</strong> responds to browser requests.</li>
          <li><strong>SSL certificate:</strong> enables HTTPS and browser trust.</li>
        </ul>

        <h2 id="dns-records" class="title is-3">DNS Records and HTTPS</h2>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead><tr><th>Item</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>A record</td><td>Points a name to an IPv4 address.</td></tr>
              <tr><td>AAAA record</td><td>Points a name to an IPv6 address.</td></tr>
              <tr><td>CNAME record</td><td>Points one hostname to another hostname.</td></tr>
              <tr><td>Nameservers</td><td>Tell the internet which DNS provider manages the domain.</td></tr>
              <tr><td>Apex domain</td><td>The bare domain, such as <code>example.com</code>.</td></tr>
              <tr><td>www subdomain</td><td>A common subdomain, such as <code>www.example.com</code>.</td></tr>
              <tr><td>DNS propagation</td><td>The time it can take for DNS changes to be visible broadly.</td></tr>
              <tr><td>HTTPS redirect</td><td>Sends visitors to the secure version of the site.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Do not invent DNS values. Follow the current connection instructions
          from the hosting provider and registrar.
        </p>
        <p>
          Most domain tasks involve either changing nameservers or adding records.
          Nameservers delegate DNS management to a provider. Individual records,
          such as A, AAAA and CNAME records, point specific names to specific
          destinations. Which method is correct depends on the host. Guessing DNS
          values is how a tidy lesson becomes an afternoon of mysterious failure.
        </p>

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
            Visitor -> domain name -> DNS lookup -> hosting server -> website
            files. DNS points the readable name to the place serving the site.
          </figcaption>
        </figure>

        <h2 id="ownership-record" class="title is-3">Website Ownership Record Exercise</h2>
        <p>Record these details, but never write passwords in the worksheet:</p>
        <ul>
          <li>domain registrar</li>
          <li>DNS provider</li>
          <li>hosting provider</li>
          <li>repository location</li>
          <li>account owner</li>
          <li>renewal date</li>
          <li>support details</li>
          <li>backup location</li>
        </ul>
        <CheckpointBox
          title="DNS Knowledge Check"
          :questions="[
            { question: 'What is the difference between a registrar and a DNS provider?', answer: 'The registrar registers and renews the domain; the DNS provider manages the records that point the domain to services.' },
            { question: 'Why should students avoid invented DNS values?', answer: 'DNS values must match the current hosting provider instructions or the domain may point to the wrong place.' },
            { question: 'Why should passwords not be written into the ownership worksheet?', answer: 'The worksheet should record where accounts are managed, not expose credentials.' }
          ]"
        />
      </template>

      <template v-else-if="currentLesson.id === 'testing-troubleshooting-live-website'">
        <LearningObjectives
          :objectives="[
            { verb: 'Diagnose', text: 'deployment problems using symptoms and evidence' },
            { verb: 'Use', text: 'browser developer tools, network requests and deployment logs' },
            { verb: 'Fix', text: 'one meaningful issue at a time' },
            { verb: 'Avoid', text: 'random changes before reading the first useful error' }
          ]"
          purpose="Troubleshooting is calmer when you read the system before changing the system."
          :prerequisites="[{ topic: 'Domains, DNS, HTTPS and Going Live', link: '/tutorials/deployments/domains-dns-and-going-live' }]"
        />
        <h2 id="troubleshooting-workflow" class="title is-3">Troubleshooting Workflow</h2>
        <pre><code>Confirm the live URL
  -> Check the deployment status
  -> Open browser developer tools
  -> Read the first meaningful error
  -> Check paths and filenames
  -> Check build and hosting logs
  -> Fix one issue
  -> Redeploy and verify</code></pre>
        <p>
          Resist the urge to change things randomly. The first real error is often
          the site trying to tell you exactly where to look.
        </p>
        <p>
          Good troubleshooting separates symptoms from causes. "The site is
          broken" is too broad. "The homepage loads but the CSS file returns
          404" is useful. "The Vite JavaScript file is requested from the wrong
          base path" is even better. Each observation narrows the system.
        </p>

        <h2 id="problem-table" class="title is-3">Common Live Website Problems</h2>
        <div class="deployment-problems">
          <details v-for="problem in troubleshootingProblems" :key="problem.symptom">
            <summary>{{ problem.symptom }}</summary>
            <p><strong>Likely causes:</strong> {{ problem.causes }}</p>
            <p><strong>Checks:</strong> {{ problem.checks }}</p>
            <p><strong>Possible fix:</strong> {{ problem.fix }}</p>
          </details>
        </div>

        <h2 id="developer-tools" class="title is-3">What to Inspect</h2>
        <ul>
          <li>browser console errors</li>
          <li>Network panel failed requests and status codes</li>
          <li>deployment logs from the hosting provider</li>
          <li>missing JavaScript, CSS and image files</li>
          <li>base path and environment variable errors</li>
          <li>case-sensitive file paths and nested folders</li>
        </ul>
        <h3 class="title is-4">Case Study: CSS Missing After Upload</h3>
        <p>
          Symptom: the homepage text appears, but it looks unstyled. In DevTools,
          the Network panel shows <code>css/styles.css</code> returning 404.
          First check whether the file was uploaded. Then check exact folder and
          filename case. If the file is really named <code>CSS/Styles.css</code>,
          rename files and references consistently, upload again and hard-refresh
          the page.
        </p>
        <h3 class="title is-4">Case Study: Vite White Screen</h3>
        <p>
          Symptom: the deployed page is blank. The console shows a missing
          JavaScript bundle or a runtime error. Check the deployment log for a
          failed build, confirm the output directory is <code>dist</code>, check
          base path configuration, and confirm required environment variables are
          defined on the hosting platform.
        </p>
        <CheckpointBox
          title="Troubleshooting Knowledge Check"
          :questions="[
            { question: 'Why should students read the first meaningful error before changing files?', answer: 'It identifies the part of the system that is failing and prevents random changes.' },
            { question: 'What should be checked when images work locally but not online?', answer: 'Filename case, extension, path, upload/build inclusion, and whether the reference points outside the project.' },
            { question: 'What panels in browser developer tools are most useful for deployment issues?', answer: 'The Console for runtime errors and the Network panel for missing files, status codes and incorrect paths.' }
          ]"
        />
      </template>

      <template v-else-if="currentLesson.id === 'continuous-improvement-deployment-workflows'">
        <LearningObjectives
          :objectives="[
            { verb: 'Explain', text: 'deployment as an ongoing improvement cycle' },
            { verb: 'Use', text: 'manual and Git-based workflows safely' },
            { verb: 'Choose', text: 'monitoring tools for specific problems' },
            { verb: 'Maintain', text: 'a simple change log' }
          ]"
          purpose="Deployment is not the end. It is how the website starts receiving evidence from the real world."
          :prerequisites="[{ topic: 'Testing and Troubleshooting a Live Website', link: '/tutorials/deployments/testing-troubleshooting-live-website' }]"
        />
        <h2 id="improvement-cycle" class="title is-3">The Improvement Cycle</h2>
        <pre><code>Plan -> Build -> Test -> Deploy -> Verify -> Monitor -> Improve -> Repeat</code></pre>
        <p>
          Deployment is not a graduation ceremony for a website. It is the start
          of a cycle. After a site goes live, real browsers, real networks and
          real users provide evidence. The calm workflow is to make one sensible
          change, test it, deploy it, verify the result and record what happened.
        </p>

        <h2 id="manual-workflow" class="title is-3">Manual Workflow</h2>
        <pre><code>Edit locally
  -> Test locally
  -> Back up live files
  -> Upload changed files
  -> Test live site
  -> Record the change</code></pre>
        <p>
          Manual updates are acceptable for small sites if they are deliberate.
          Keep a local copy, back up files before replacing them, upload only
          what changed when you can, and write down the change. Without a record,
          the next person has to solve the same mystery again.
        </p>

        <h2 id="git-workflow" class="title is-3">Git Workflow</h2>
        <pre><code>Create or choose a branch
  -> Make changes
  -> Test locally
  -> Commit
  -> Push
  -> Preview deployment
  -> Review
  -> Merge
  -> Production deployment</code></pre>
        <p>
          Keep this beginner-friendly. The point is not to perform ceremony; the
          point is to make changes traceable and reversible.
        </p>
        <p>
          For beginners, the Git workflow can stay simple: commit working
          changes, push to the connected repository, review the preview if the
          platform provides one, then merge or deploy to production when ready.
          The value is not ceremony. The value is a trail of what changed and
          when.
        </p>

        <h2 id="monitoring-tools" class="title is-3">Monitoring and Feedback Tools</h2>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead><tr><th>Tool</th><th>Problem it helps solve</th></tr></thead>
            <tbody>
              <tr v-for="tool in monitoringTools" :key="tool[0]">
                <td>{{ tool[0] }}</td>
                <td>{{ tool[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 class="title is-4">Improvement Log</h3>
        <p>Memory is not a reliable release-management system.</p>
        <div class="table-container">
          <table class="table is-bordered is-striped is-fullwidth">
            <thead>
              <tr><th>Date</th><th>Change</th><th>Reason</th><th>Deployment method</th><th>Result</th><th>Follow-up</th></tr>
            </thead>
            <tbody>
              <tr><td>YYYY-MM-DD</td><td>Compressed hero image</td><td>Slow mobile load</td><td>Git push</td><td>Lighthouse improved</td><td>Check again next month</td></tr>
            </tbody>
          </table>
        </div>
        <CheckpointBox
          title="Continuous Improvement Knowledge Check"
          :questions="[
            { question: 'Why should live changes be recorded?', answer: 'A change log helps future maintainers understand what changed, why, how it was deployed and what happened next.' },
            { question: 'What is the purpose of a preview deployment?', answer: 'It lets you inspect changes in a live-like environment before production.' },
            { question: 'Name one monitoring tool and the problem it helps solve.', answer: 'Examples include Lighthouse for performance/accessibility checks, Search Console for search visibility, analytics for traffic patterns, uptime monitoring for outages, or deployment logs for build failures.' }
          ]"
        />
      </template>

      <template v-else>
        <LearningObjectives
          :objectives="[
            { verb: 'Deploy', text: 'a small website through at least one workflow' },
            { verb: 'Compare', text: 'manual, GitHub Pages and Netlify or Vercel options where practical' },
            { verb: 'Use', text: 'the Markdown checklist and branded PDF checklist appropriately' },
            { verb: 'Apply', text: 'the process to Black Swan Bistro Part 5' }
          ]"
          purpose="A small lab turns deployment from an idea into evidence."
          :prerequisites="[{ topic: 'Continuous Improvement and Deployment Workflows', link: '/tutorials/deployments/continuous-improvement-deployment-workflows' }]"
        />
        <h2 id="lab-project" class="title is-3">Deployment Lab Project</h2>
        <pre><code>deployment-test/
├── index.html
├── styles.css
└── script.js</code></pre>
        <p>
          Use the tiny site from the upload lesson, or create a similarly small
          page. Small is the point. If something breaks, there are only a few
          files to inspect.
        </p>
        <h3 class="title is-4">Starter Files</h3>
        <pre><code class="language-html">&lt;!-- index.html --&gt;
&lt;!doctype html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;title&gt;Deployment Test&lt;/title&gt;
    &lt;link rel="stylesheet" href="./styles.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;main&gt;
      &lt;h1&gt;Deployment Test&lt;/h1&gt;
      &lt;p&gt;If you can read this online, the HTML deployed.&lt;/p&gt;
      &lt;button id="status-button"&gt;Test JavaScript&lt;/button&gt;
      &lt;p id="status"&gt;JavaScript has not run yet.&lt;/p&gt;
    &lt;/main&gt;
    &lt;script src="./script.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        <pre><code class="language-css">/* styles.css */
body {
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 2rem;
}

main {
  border: 2px solid #4b88a2;
  max-width: 42rem;
  padding: 1.5rem;
}</code></pre>
        <pre><code class="language-js">// script.js
document.querySelector('#status-button').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'JavaScript is running online.';
});</code></pre>

        <h2 id="lab-options" class="title is-3">Choose at Least One Lab Option</h2>
        <p>
          Complete at least one deployment method. If time allows, complete two
          and compare the feedback each one gives you. The goal is not to collect
          accounts; the goal is to notice how each workflow moves files from
          local project to live URL.
        </p>
        <div class="columns hosting-options">
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Lab A: Traditional shared hosting</h3>
              <p>Deploy using File Manager or SFTP. Record the public web root and live URL.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Lab B: GitHub Pages</h3>
              <p>Deploy through a repository workflow. Record the branch and published URL.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Lab C: Netlify or Vercel</h3>
              <p>Deploy through Git integration or a supported manual deployment. Read the deployment feedback.</p>
            </div>
          </div>
        </div>

        <h2 id="checklists" class="title is-3">Deployment Checklists</h2>
        <div class="box checklist-download-box">
          <div>
            <h3 class="title is-5">Download the GraphiteEdge Deployment Checklist</h3>
            <p>
              Use the branded PDF as a reusable deployment workbook. Use the
              Markdown checklist below as a lightweight in-lesson resource.
            </p>
          </div>
          <a
            class="button is-primary"
            :href="pdfChecklistPath"
            download
            aria-label="Download the GraphiteEdge Deployment Checklist PDF"
          >
            <span class="icon"><i class="fas fa-file-pdf"></i></span>
            <span>Download PDF</span>
          </a>
        </div>
        <div class="box checklist-download-box">
          <div>
            <h3 class="title is-5">Printable Markdown Checklist</h3>
            <p>Copy, download or print this lightweight checklist for your project notes.</p>
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

        <h2 id="reflection" class="title is-3">Reflection Questions</h2>
        <ol>
          <li>Which method was easiest?</li>
          <li>Which method gave the clearest feedback?</li>
          <li>Which method would be easiest to update?</li>
          <li>Which method would be most appropriate for a client?</li>
          <li>Where are the domain, DNS and hosting accounts managed?</li>
          <li>What could go wrong if account ownership is unclear?</li>
        </ol>
        <p>
          Next, apply this process to
          <router-link to="/tutorials/advanced/black-swan-bistro-part-5">
            Black Swan Bistro Part 5: Prepare for Deployment
          </router-link>.
        </p>
        <CheckpointBox
          title="Deployment Lab Knowledge Check"
          :questions="[
            { question: 'What evidence proves the lab deployed successfully?', answer: 'The live URL loads the HTML, CSS and JavaScript from another browser/device or private window, with no obvious console errors.' },
            { question: 'Why is a tiny lab useful before deploying a larger project?', answer: 'It isolates the deployment workflow so problems are easier to diagnose.' },
            { question: 'What should students record after the lab?', answer: 'The deployment method, live URL, account/platform location, source repository or folder, DNS/domain details if used, result and follow-up tasks.' }
          ]"
        />
      </template>

      <ClosureSection
        :id="currentLesson.id === 'overview' ? undefined : 'closure'"
        :title="currentLesson.id === 'overview' ? 'Ready to Start the Pathway' : 'Ready for the Next Deployment Step'"
        :key-takeaways="[
          'Deployment is a publishing workflow, not just a button.',
          'The live URL is where deployment evidence is gathered.',
          'The right hosting path depends on files, update workflow, support needs and ownership.',
          'Troubleshooting starts with the first meaningful error.'
        ]"
        :objectives="[currentLesson.description]"
        readiness-message="If you can name which part of the system you are changing, test the live result and record the outcome, deployment is becoming a repeatable workflow."
        :reflection-prompts="[
          { icon: 'fas fa-rocket', title: 'Deployment evidence', questions: ['What would prove this site works for someone else?'] },
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

.lesson-card {
  border: 1px solid #d9e5ea;
  border-radius: 8px;
  color: inherit;
  display: block;
  padding: 1rem;
  text-decoration: none;
}

.lesson-card span,
.lesson-card small {
  color: #64748b;
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
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
