<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import '@/assets/styles/tutorials.css';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';

const tutorialPath = '/tutorials/advanced/black-swan-bistro-part-5';

useTutorialHead({
  title: 'Black Swan Bistro - Part 5',
  description:
    'Prepare the Black Swan Bistro site for production by checking files, links, images, metadata, accessibility, and final browser behaviour before deployment.',
  path: tutorialPath,
  keywords:
    'deployment preparation, production readiness, website checklist, Black Swan Bistro, beginner web development',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Black Swan Bistro Part 5', path: tutorialPath },
  ],
});

usePageSections([
  { id: 'intro', title: 'Introduction' },
  { id: 'production-readiness', title: 'Production Readiness' },
  { id: 'project-audit', title: 'Project Audit' },
  { id: 'links-and-paths', title: 'Links and Paths' },
  { id: 'image-prep', title: 'Image Prep' },
  { id: 'metadata', title: 'Metadata' },
  { id: 'accessibility-usability', title: 'Accessibility and Usability' },
  { id: 'final-browser-check', title: 'Final Browser Check' },
  { id: 'checkpoint', title: 'Checkpoint' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Independent Practice' },
  { id: 'recap', title: 'Recap' },
  { id: 'closure', title: 'Closure' },
  { id: 'additional-resources', title: 'Additional Resources' },
]);

const checkpointQuestions = [
  {
    question:
      'Why is a site that works locally not automatically ready for production?',
    answer:
      'A local site can hide problems that appear on a server: case-sensitive filenames, missing assets, broken relative paths, slow images, unclear metadata, mobile layout issues, and pages that were not tested from a visitor point of view.',
  },
  {
    question: 'What is the safest way to check navigation before deployment?',
    answer:
      'Open each page in the browser and click every navigation link from every page. A link that works from index.html may still be wrong from menu.html, about.html, or contact.html if the path was copied incorrectly.',
  },
  {
    question: 'Why should each page have its own title and meta description?',
    answer:
      'The title helps visitors, browser tabs, bookmarks, and search results identify the page. The meta description gives a short, useful summary of the page content instead of leaving the browser or search engine to guess.',
  },
  {
    question: 'What should you do if your final audit finds a small issue?',
    answer:
      'Fix it, test the specific page again, then repeat the relevant part of the checklist. The point of the audit is not to prove the site is perfect on the first pass; it is to catch issues before visitors do.',
  },
];

const guidedPracticeSteps = [
  {
    title: 'Create a deployment checklist',
    instructions:
      '<p>Inside your <code>black-swan-bistro</code> project folder, create a file called <code>deployment-checklist.md</code>. This is not part of the website visitors will see. It is your working record of what you checked before launch.</p><pre><code># Black Swan Bistro Deployment Checklist\n\n## Files\n- [ ] No unused draft files are in the project root\n- [ ] File and folder names are lowercase and predictable\n\n## Links\n- [ ] Navigation works from every page\n- [ ] Images load on every page\n- [ ] CSS loads on every page\n\n## Production review\n- [ ] Page titles are specific\n- [ ] Meta descriptions are useful\n- [ ] Site works on a narrow mobile viewport\n- [ ] Browser console has no unexpected errors</code></pre>',
    hints: [
      'A checklist file gives you a repeatable process. You can reuse the same pattern for later projects.',
      'Keep the checklist in the project folder, but do not link to it from the website.',
    ],
  },
  {
    title: 'Audit the project folder',
    instructions:
      '<p>Look at the root of the project folder. You should expect the main pages and asset folders to be easy to recognise:</p><pre><code>black-swan-bistro/\n  index.html\n  menu.html\n  about.html\n  contact.html\n  css/\n    style.css\n  images/\n  js/</code></pre><p>Remove unused duplicates such as <code>index-copy.html</code>, <code>old-style.css</code>, or draft images you no longer use. If you are unsure, move questionable files into a temporary holding folder outside the project before deleting anything.</p>',
    hints: [
      'Production preparation is partly about reducing confusion. The folder should tell a clear story.',
      'Do not rename files casually if they are already linked from HTML. Rename only when you can update every matching path.',
    ],
  },
  {
    title: 'Test every link and asset path',
    instructions:
      '<p>Open <code>index.html</code> in the browser. Click through to <code>menu.html</code>, <code>about.html</code>, and <code>contact.html</code>. Then repeat from each page.</p><p>While you test, watch for three clues: a page that does not open, an image that shows as broken, or a page that suddenly loses its CSS. Each clue usually points to a path problem.</p>',
    hints: [
      'If CSS disappears, check the <link rel="stylesheet" href="css/style.css"> line.',
      'If an image is broken, compare the exact filename in HTML with the actual file, including capital letters.',
    ],
  },
  {
    title: 'Prepare images for visitors',
    instructions:
      '<p>Open each bistro page and list every image it uses. For each one, check four things:</p><ol><li>The filename is lowercase and descriptive, such as <code>bistro-dining-room.jpg</code></li><li>The file is not far larger than the size it appears on the page</li><li>The <code>alt</code> text describes the meaningful content</li><li>The image supports the page instead of acting as filler</li></ol><p>If an image is decorative only, use an empty alt attribute: <code>alt=""</code>. If it communicates real content, write useful alt text.</p>',
    hints: [
      'A huge image can make a small site feel slow, especially on mobile data.',
      'Alt text should help someone understand the image purpose, not repeat nearby captions word for word.',
    ],
  },
  {
    title: 'Add production metadata',
    instructions:
      '<p>Open the <code>&lt;head&gt;</code> of each HTML page. Confirm each page has a specific title and a short description:</p><pre><code>&lt;title&gt;Menu - Black Swan Bistro&lt;/title&gt;\n&lt;meta\n  name="description"\n  content="Explore the seasonal menu at Black Swan Bistro, including starters, mains, desserts, and drinks."\n&gt;</code></pre><p>Keep descriptions plain and useful. They should describe the page, not oversell it.</p>',
    hints: [
      'Each page should have its own title. Four pages with the exact same title are harder to understand in browser tabs and search results.',
      'A description of about 140-160 characters is a sensible target, but clarity matters more than an exact count.',
    ],
  },
  {
    title: 'Run the final visitor test',
    instructions:
      '<p>Use the site like a first-time visitor. Do not read the code first. Open the homepage, move through the navigation, resize the browser to a narrow mobile width, and check that the contact page still makes sense.</p><p>Then open DevTools and check the Console. If you see an error, write it in your checklist before fixing it. The habit of recording issues will help you debug calmly later.</p>',
    hints: [
      'A final visitor test often catches small wording, spacing, and navigation issues that code review misses.',
      'If you change anything after this test, quickly retest the page you changed.',
    ],
  },
];

const closureKeyTakeaways = [
  'Production readiness is the step between "it works on my computer" and "a real visitor can use it".',
  'A clean project folder makes deployment less fragile because there are fewer confusing files and paths.',
  'Relative paths, image filenames, and navigation links should be tested from every page, not only from the homepage.',
  'Image preparation protects performance and accessibility at the same time.',
  'Titles and meta descriptions help people, browser tabs, bookmarks, and search previews understand each page.',
  'A written checklist turns deployment from a stressful guess into a repeatable workflow.',
];

const closureObjectives = [
  'Explain what production readiness means for a static website',
  'Audit a project folder before deployment',
  'Test navigation, CSS, JavaScript, and image paths across a multi-page site',
  'Prepare images with sensible filenames, sizes, and alt text',
  'Add page-specific titles and meta descriptions',
  'Run a final browser, mobile, and console review before publishing',
];

const closureReflectionPrompts = [
  {
    icon: 'fas fa-folder-open',
    title: 'Project Confidence',
    questions: [
      'Which part of your project folder felt clearest after the audit?',
      'Which file or path issue would have been easiest to miss without a checklist?',
    ],
  },
  {
    icon: 'fas fa-user-check',
    title: 'Visitor View',
    questions: [
      'What changed when you reviewed the site as a visitor instead of as the person who built it?',
      'Which page needs the most improvement before you would be comfortable sharing the live URL?',
    ],
  },
  {
    icon: 'fas fa-rocket',
    title: 'Launch Readiness',
    questions: [
      'What evidence tells you the bistro site is ready to deploy?',
      'What would you want to recheck immediately after the site goes live?',
    ],
  },
];
</script>

<template>
  <div class="container section">
    <div class="tutorial-content bsb-deployment-prep">
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
            <a href="#" aria-current="page">Black Swan Bistro - Part 5</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-warning">Advanced</span>
          <span class="tag is-light">45 min</span>
          <span class="tag is-link">Project</span>
          <span class="tag is-light">Part 5 of 7</span>
        </div>
      </div>

      <h1 id="intro" class="title is-1">Black Swan Bistro - Part 5</h1>
      <h2 class="subtitle is-4">Prepare for Deployment</h2>

      <p class="subtitle is-5">
        Turn the finished bistro project into a production-ready site by
        checking files, links, images, metadata, accessibility, and final
        browser behaviour before it goes live.
      </p>

      <AnticipatorySet
        title="From Finished Locally to Ready for Visitors"
        icon="🚀"
        :hook="`<p>In the earlier Black Swan Bistro lessons, you built the site piece by piece: first structure, then layout, then reusable patterns, then multiple pages, then a polish pass.</p><p>At this point, the bistro site may look finished on your own computer. That is a strong milestone, but it is not the same as being ready for production. A production site has to load from a server, work on other devices, explain itself clearly in browser tabs and search previews, and avoid the small file-path mistakes that local testing can hide.</p><p>This lesson is the calm pre-launch pass. You are not adding a new feature. You are checking that the work you already did can survive the move from your computer to the web.</p>`"
        :reflection-prompts="[
          'What could go wrong when a site moves from your computer to a live server?',
          'Which parts of your bistro project would you want to double-check before sharing it with someone else?',
          'How would a written checklist change the feeling of deployment?',
        ]"
        connection="This lesson follows the Part 4 multi-page build and Part 4B polish pass. It prepares the project for Part 6, where you will publish the bistro site."
      />

      <LearningObjectives
        :objectives="[
          'Explain what production readiness means for a static website',
          'Audit a project folder before deployment',
          'Test navigation, CSS, JavaScript, and image paths across a multi-page site',
          'Prepare images with sensible filenames, sizes, and alt text',
          'Add page-specific titles and meta descriptions',
          'Run a final browser, mobile, and console review before publishing',
        ]"
        purpose="Deployment becomes much easier when the project is already clean, understandable, and tested. This lesson gives you a repeatable launch-readiness process you can use on every static site you build."
        :prerequisites="[
          {
            topic: 'BSB Part 4: Multi-page Site',
            link: '/tutorials/intermediate/black-swan-bistro-part-4',
          },
          {
            topic: 'BSB Part 4B: Polish and Refine',
            link: '/tutorials/intermediate/black-swan-bistro-part-4b-polish-and-refine',
          },
          {
            topic: 'Deployment Fundamentals',
            link: '/tutorials/deployments/getting-a-website-online-hosting-deployment-continuous-improvement',
          },
        ]"
      />

      <section id="production-readiness">
        <h2 class="title is-3">What Production Readiness Means</h2>
        <p>
          Production is the version of a site that real visitors use. It might
          live on a hosting service, behind a custom domain, or on a temporary
          preview URL while you test. Either way, it is outside your own
          computer.
        </p>
        <p>
          That change matters because a browser loading files from a server is
          less forgiving than a learner testing one page locally. A missing
          capital letter in an image filename, an old draft file, or a vague
          page title may not feel urgent during development. Before deployment,
          those details become part of the visitor experience.
        </p>

        <figure class="tutorial-figure">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-5-production-flow.svg"
            alt="Diagram showing the Black Swan Bistro project moving from local files through production checks to a live server and visitor browser."
            width="960"
            height="520"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Production readiness sits between the project folder and the live
            server. It is the quality check that protects the visitor
            experience.
          </figcaption>
        </figure>

        <div class="notification is-info is-light">
          <p>
            <strong>Key idea:</strong> deployment is not only a technical step.
            It is also a review step. You are checking that the site is
            understandable, portable, accessible, and ready to be used by
            someone who did not build it.
          </p>
        </div>
      </section>

      <section id="project-audit">
        <h2 class="title is-3">Audit the Project Folder</h2>
        <p>
          Start with the project folder because every deployment method depends
          on it. If the folder contains old drafts, confusing names, or unused
          files, deployment becomes harder to reason about. A clean folder makes
          it obvious which files belong online.
        </p>

        <p>Your bistro project should now have a simple shape:</p>

        <pre><code>black-swan-bistro/
  index.html
  menu.html
  about.html
  contact.html
  css/
    style.css
  images/
  js/</code></pre>

        <p>
          It is fine if your exact image names differ, but the main idea should
          be clear: HTML pages at the project root, shared CSS in the
          <code>css</code> folder, and images in the <code>images</code> folder.
        </p>

        <div class="box">
          <h3 class="title is-5">Folder audit questions</h3>
          <ul>
            <li>Can you tell which file is the homepage?</li>
            <li>Are the four main pages named consistently?</li>
            <li>Are filenames lowercase and readable?</li>
            <li>
              Are old drafts or duplicate files outside the deployment folder?
            </li>
            <li>
              Can someone else open the folder and understand where the CSS and
              images live?
            </li>
          </ul>
        </div>
      </section>

      <section id="links-and-paths">
        <h2 class="title is-3">Check Links and Paths</h2>
        <p>
          Static websites rely on paths. A path tells the browser where to find
          another page, a CSS file, an image, or a script. In a multi-page site,
          copied paths are one of the most common sources of deployment bugs.
        </p>
        <p>
          For Black Swan Bistro, every page sits at the same level, so the
          navigation paths can stay simple:
        </p>

        <pre><code>&lt;nav class="site-nav"&gt;
  &lt;a class="site-nav__link" href="index.html"&gt;Home&lt;/a&gt;
  &lt;a class="site-nav__link" href="menu.html"&gt;Menu&lt;/a&gt;
  &lt;a class="site-nav__link" href="about.html"&gt;About&lt;/a&gt;
  &lt;a class="site-nav__link" href="contact.html"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;</code></pre>

        <p>
          Check paths by clicking like a visitor, not just by reading the code.
          Open each page and move through the navigation from there. If you only
          test from the homepage, you may miss a broken link on another page.
        </p>

        <figure class="tutorial-figure">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-5-path-check.svg"
            alt="Diagram of four Black Swan Bistro pages connected by navigation links, with CSS and images checked from each page."
            width="960"
            height="520"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Test each page as a starting point. A production check confirms that
            pages, CSS, and images resolve from the whole site, not only from
            the homepage.
          </figcaption>
        </figure>

        <div class="notification is-warning is-light">
          <p>
            <strong>Watch for case sensitivity:</strong> some servers treat
            <code>bistro-front.jpg</code> and <code>Bistro-Front.jpg</code> as
            different files. Match filenames exactly.
          </p>
        </div>
      </section>

      <section id="image-prep">
        <h2 class="title is-3">Prepare Images for the Real Web</h2>
        <p>
          Images often cause the biggest performance problem on small static
          sites. A beautiful restaurant photo can easily be several megabytes if
          it came straight from a camera or stock library. That may work on your
          laptop, but it can feel slow on a mobile connection.
        </p>

        <p>Before deployment, review every image and ask:</p>

        <ul>
          <li>Is the image still used on the site?</li>
          <li>Is the filename readable and lowercase?</li>
          <li>Is the file size reasonable for the way the image appears?</li>
          <li>
            Does the <code>alt</code> text explain the image when it has
            meaning?
          </li>
          <li>Is the image decorative, informative, or part of navigation?</li>
        </ul>

        <pre><code>&lt;img
  src="images/bistro-dining-room.jpg"
  alt="Warm dining room inside Black Swan Bistro with tables set for dinner"
&gt;</code></pre>

        <p>
          Good image preparation is not only about speed. It also supports
          accessibility and trust. A restaurant site with broken images or vague
          alt text feels unfinished, even if the layout is technically correct.
        </p>
      </section>

      <section id="metadata">
        <h2 class="title is-3">Add Production Metadata</h2>
        <p>
          Metadata lives in the <code>&lt;head&gt;</code> of each HTML page.
          Visitors do not always see it directly in the page content, but
          browsers, search previews, bookmarks, and sharing tools use it to
          understand the page.
        </p>

        <p>Each page should have its own title and description:</p>

        <pre><code>&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta
    name="description"
    content="Explore seasonal starters, mains, desserts, and drinks at Black Swan Bistro."
  &gt;
  &lt;title&gt;Menu - Black Swan Bistro&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt;</code></pre>

        <p>
          The description should be honest and specific. It does not need to
          sound like advertising. A clear summary is more useful than a dramatic
          one.
        </p>

        <div class="table-container">
          <table class="table is-bordered is-striped">
            <thead>
              <tr>
                <th>Page</th>
                <th>Example title</th>
                <th>Description focus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>index.html</code></td>
                <td>Black Swan Bistro</td>
                <td>Restaurant overview and main invitation</td>
              </tr>
              <tr>
                <td><code>menu.html</code></td>
                <td>Menu - Black Swan Bistro</td>
                <td>Food, drinks, and seasonal dishes</td>
              </tr>
              <tr>
                <td><code>about.html</code></td>
                <td>About - Black Swan Bistro</td>
                <td>Story, values, and team context</td>
              </tr>
              <tr>
                <td><code>contact.html</code></td>
                <td>Contact - Black Swan Bistro</td>
                <td>Opening hours, address, and enquiries</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="accessibility-usability">
        <h2 class="title is-3">Run an Accessibility and Usability Pass</h2>
        <p>
          Accessibility is part of production readiness because visitors do not
          all use the web in the same way. Some people use keyboards, screen
          readers, zoom, high contrast settings, or reduced motion preferences.
          A small site should still respect those needs.
        </p>

        <figure class="tutorial-figure">
          <img
            src="/assets/images/tutorials/diagrams/tutorial-black-swan-bistro-part-5-checklist-map.svg"
            alt="Checklist map grouping production checks into files, links, images, metadata, accessibility, mobile, and console review."
            width="960"
            height="520"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            A useful pre-deployment checklist covers the whole visitor
            experience, not just whether the HTML files exist.
          </figcaption>
        </figure>

        <div class="columns">
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Structure</h3>
              <ul>
                <li>One clear <code>&lt;h1&gt;</code> per page</li>
                <li>Headings move in a logical order</li>
                <li>Main content sits inside <code>&lt;main&gt;</code></li>
              </ul>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Interaction</h3>
              <ul>
                <li>Links and buttons can be reached by keyboard</li>
                <li>Focus states are visible</li>
                <li>Hover effects are not the only signal</li>
              </ul>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-5">Content</h3>
              <ul>
                <li>Link text is descriptive</li>
                <li>Forms have labels</li>
                <li>Images have useful alt text where needed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="final-browser-check">
        <h2 class="title is-3">Final Browser Check</h2>
        <p>
          The last check should feel practical. Open the site and behave like a
          visitor who has never seen the code. Move through the pages, resize
          the browser, check the contact details, and look for anything that
          feels broken, unfinished, or confusing.
        </p>

        <div class="box launch-checklist">
          <h3 class="title is-5">Pre-deployment review</h3>
          <ul>
            <li>Homepage loads with CSS and images</li>
            <li>Menu, About, and Contact pages open from every page</li>
            <li>Active navigation state matches the current page</li>
            <li>Images are not broken and have appropriate alt text</li>
            <li>Page titles and descriptions are specific</li>
            <li>Layout works at a narrow mobile width</li>
            <li>Contact links, email links, or form placeholders make sense</li>
            <li>Browser console has no unexpected errors</li>
          </ul>
        </div>

        <p>
          If something fails, that is useful information. Fix it, retest it, and
          update your checklist. Production readiness is not about never finding
          problems. It is about finding them before the site is public.
        </p>
      </section>

      <section id="checkpoint">
        <CheckpointBox
          title="Checkpoint: Can You Explain Launch Readiness?"
          description="Before you prepare the final checklist, answer these in your own words."
          :questions="checkpointQuestions"
          :tips="[
            'Think like a visitor, not only like the person who wrote the code.',
            'Paths, metadata, images, accessibility, and browser checks all support the same goal: a reliable live site.',
            'A checklist is a professional habit, not busywork.',
          ]"
        />
      </section>

      <section id="guided-practice">
        <GuidedPractice
          title="Guided Practice: Prepare Black Swan Bistro for Deployment"
          description="Work through the bistro project one review pass at a time. Keep your checklist open while you test."
          :steps="guidedPracticeSteps"
          :success-criteria="[
            'Your project folder contains only the files needed for the site',
            'Navigation works from every page',
            'CSS and images load correctly on every page',
            'Each page has a specific title and meta description',
            'You tested the site at a narrow mobile width',
            'You recorded any issues and fixes in a checklist',
          ]"
        />
      </section>

      <section id="independent-practice">
        <IndependentPractice
          title="Independent Practice: Write the Launch Notes"
          description="Now turn your audit into a short launch-readiness record."
          task-title="Create a production-readiness note"
          task="<p>Add a short section to <code>deployment-checklist.md</code> called <strong>Launch Notes</strong>. Summarise what you checked, what you fixed, and what you still want to review immediately after deployment.</p>"
          :requirements="[
            'Record the date of your pre-deployment review',
            'List at least three checks that passed',
            'List at least one issue you fixed or one risk you considered',
            'Write the live-site checks you will repeat after deployment',
            'Keep the note practical enough that another learner could understand your process',
          ]"
          :stretch-goals="[
            'Add basic Open Graph metadata for one page and explain what it does',
            'Run a Lighthouse audit in Chrome DevTools and record one improvement idea',
            'Compare your checklist with the general deployment checklist from the deployment fundamentals lesson',
          ]"
          :rubric="[
            {
              criteria: 'Folder and files',
              success:
                'The project folder is clean and the required pages/assets are easy to identify.',
            },
            {
              criteria: 'Testing',
              success:
                'The notes show evidence that navigation, images, CSS, mobile layout, and the console were checked.',
            },
            {
              criteria: 'Production judgement',
              success:
                'The notes explain not just what changed, but why the change matters before deployment.',
            },
          ]"
        />
      </section>

      <section id="recap">
        <h2 class="title is-3">Recap</h2>
        <p>
          In this lesson, you prepared Black Swan Bistro for deployment without
          rushing straight to a hosting dashboard. That is the point. A
          production-ready project is easier to publish because its files are
          clean, its links are tested, its images are sensible, its metadata is
          specific, and its visitor experience has been reviewed.
        </p>
        <p>
          You now have a checklist that belongs to the project. In Part 6, that
          checklist becomes your safety net when you push the site to a hosting
          service and test the live URL.
        </p>
      </section>

      <section id="closure">
        <ClosureSection
          title="Part 5 Complete: Your Bistro Is Launch-Ready"
          :key-takeaways="closureKeyTakeaways"
          :objectives="closureObjectives"
          :reflection-prompts="closureReflectionPrompts"
          real-world-application="<p>Professional teams use pre-launch checks for the same reason you used one here: deployment exposes small mistakes quickly. A calm checklist protects the project, the client, and the person doing the launch.</p>"
          next-steps="<p>Next, you will move into Black Swan Bistro Part 6 and deploy the site. Keep your checklist close. After the site is live, you will run many of the same checks again against the real URL.</p>"
        />
      </section>

      <section id="additional-resources">
        <h2 class="title is-3">Additional Resources</h2>
        <div class="content">
          <ul>
            <li>
              <a
                href="https://web.dev/learn/performance/"
                target="_blank"
                rel="noopener"
              >
                web.dev: Learn Performance
              </a>
              - practical guidance for making pages load faster.
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
                target="_blank"
                rel="noopener"
              >
                MDN: Metadata in HTML
              </a>
              - a clear explanation of what belongs in the document head.
            </li>
            <li>
              <a
                href="https://developer.chrome.com/docs/lighthouse/overview"
                target="_blank"
                rel="noopener"
              >
                Chrome Lighthouse overview
              </a>
              - a useful audit tool after you understand what it is checking.
            </li>
          </ul>
        </div>
      </section>

      <TutorialRecommendations :current-path="tutorialPath" />
    </div>
  </div>
</template>

<style scoped>
.bsb-deployment-prep pre {
  background: #1f2937;
  color: #f9fafb;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  margin: 1.25rem 0;
}

.bsb-deployment-prep code {
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

.tutorial-figure figcaption {
  color: #4b5563;
  font-size: 0.95rem;
  margin-top: 0.75rem;
}

.launch-checklist ul {
  columns: 2;
  column-gap: 2rem;
}

.launch-checklist li {
  break-inside: avoid;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .launch-checklist ul {
    columns: 1;
  }
}
</style>
