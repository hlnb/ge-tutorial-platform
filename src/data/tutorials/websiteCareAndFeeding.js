export const websiteCareLessons = [
  {
    slug: "overview",
    title: "Website Care and Feeding Overview",
    shortTitle: "Overview",
    path: "/tutorials/website-care-and-feeding/overview",
    description:
      "Learn how to keep a website healthy after launch with simple checks for content, links, forms, accessibility, SEO, analytics, backups, and updates.",
    duration: "35 min",
    tags: ["Maintenance", "SEO", "Accessibility", "Analytics", "Backups"],
    objectives: [
      { verb: "Explain", text: "why a website needs ongoing care after launch" },
      { verb: "Identify", text: "the main areas of website maintenance" },
      {
        verb: "Describe",
        text: "the difference between building, deploying, monitoring, maintaining, and improving a site",
      },
      { verb: "Create", text: "a simple care plan for a small website" },
      {
        verb: "Understand",
        text: "how maintenance differs between static sites, WordPress sites, traditional hosting, and builder platforms",
      },
    ],
    hook: `
      <p>Launching a website feels like the big finish.</p>
      <p>You have written the HTML. You have argued with CSS. You have tested the navigation, checked the mobile layout, and deployed the site. The page is live. The internet has accepted your offering.</p>
      <p>Surely that means the work is done. Not quite.</p>
      <p>A website is not a microwave meal. You do not build it, launch it, and forget it exists. A website is more like a pot plant with DNS records. It needs checking, pruning, feeding, and the occasional stern conversation.</p>
    `,
    intro:
      "Website care and feeding is the ongoing work of keeping a site useful, accurate, secure, accessible, and healthy after it goes live. This does not mean spending hours every day poking at your website. It means building simple habits so small problems are noticed before they become large problems.",
    visual: {
      src: "/assets/images/tutorials/diagrams/tutorial-website-care-lifecycle.svg",
      alt: "Diagram showing website care as a loop from build to test, deploy, monitor, maintain, and improve.",
      caption:
        "Website care is a cycle. After launch, monitoring, maintenance, and small improvements keep the site useful.",
    },
    sections: [
      {
        id: "what-care-means",
        title: "What Website Care and Feeding Means",
        body: `
          <p>Website care and feeding includes the practical tasks that keep a live website working properly.</p>
          <ul>
            <li>checking that pages still load</li>
            <li>checking links and navigation</li>
            <li>testing forms</li>
            <li>updating outdated content</li>
            <li>reviewing analytics</li>
            <li>checking mobile layouts</li>
            <li>improving page speed</li>
            <li>checking accessibility basics</li>
            <li>reviewing SEO titles and descriptions</li>
            <li>updating dependencies or plugins</li>
            <li>confirming backups are working</li>
            <li>checking that the site is still secure</li>
          </ul>
          <p>This might sound like a lot. The trick is not to do everything all at once. Weekly checks catch obvious problems, monthly checks catch deeper issues, quarterly reviews keep the site aligned with its purpose, and update checks make sure new changes have not broken old work.</p>
          <p>The goal is not perfection. The goal is awareness.</p>
        `,
      },
      {
        id: "living-system",
        title: "A Website Is a Living System",
        body: `
          <p>A live website may include content, HTML, CSS, JavaScript, images, documents, navigation, forms, hosting, domain registration, DNS records, analytics, SEO metadata, accessibility decisions, third-party scripts, backups, and security settings.</p>
          <p>When one part changes, another part can be affected. A changed image might slow the page down. A deleted page might create a broken link. A plugin update might break a layout. A contact form might appear to work, even when the email notification has stopped arriving.</p>
          <p>This is why professional web work includes checking, testing, and maintenance. Building the site is one part of the job. Caring for the site is what keeps it useful.</p>
        `,
      },
      {
        id: "website-lifecycle",
        title: "The Website Lifecycle",
        body: `
          <p>A healthy website moves through a cycle:</p>
          <p><strong>Build -> Test -> Deploy -> Monitor -> Maintain -> Improve</strong></p>
          <dl>
            <dt><strong>Build</strong></dt>
            <dd>Create the site structure, pages, content, layout, and functionality.</dd>
            <dt><strong>Test</strong></dt>
            <dd>Check layout, links, forms, accessibility, performance, and browser behaviour before publishing.</dd>
            <dt><strong>Deploy</strong></dt>
            <dd>Publish the website to a hosting service so other people can access it.</dd>
            <dt><strong>Monitor</strong></dt>
            <dd>Check how the live site is behaving. Look for broken links, form problems, traffic patterns, errors, and user behaviour.</dd>
            <dt><strong>Maintain</strong></dt>
            <dd>Keep the site updated, accurate, secure, and backed up.</dd>
            <dt><strong>Improve</strong></dt>
            <dd>Use what you learn to make small, useful changes over time.</dd>
          </dl>
          <p>A website does not need to be rebuilt every time something changes. Often, good maintenance is a series of small, sensible improvements. Tiny fixes. Big difference.</p>
        `,
      },
      {
        id: "site-types",
        title: "Care Needs Vary by Site Type",
        body: `
          <h3>Static Sites</h3>
          <p>Static sites built with HTML, CSS, JavaScript, Vite, Eleventy, Astro, or similar tools usually need Git repository checks, dependency updates, content updates, image optimisation, deployment checks, analytics checks, broken link checks, and domain or DNS awareness.</p>
          <h3>WordPress Sites</h3>
          <p>WordPress sites usually need plugin updates, theme updates, WordPress core updates, database backups, upload folder backups, spam checks, security checks, admin account reviews, form testing, and performance checks. A WordPress site should never be updated blindly without a backup. That is not bravery. That is how people meet the white screen of despair.</p>
          <h3>Traditional Hosted Sites</h3>
          <p>A traditional hosted site might use plain HTML, CSS, JavaScript, PHP, or files uploaded with FTP or cPanel. These sites usually need file backups, hosting account checks, domain renewal checks, SSL certificate checks, manual content updates, form testing, and storage checks.</p>
          <h3>No-code and Builder Sites</h3>
          <p>Sites built with platforms such as Wix, Squarespace, Shopify, or similar tools still need content reviews, subscription and billing checks, domain checks, form testing, theme checks, app reviews, image optimisation, and SEO checks.</p>
        `,
      },
      {
        id: "four-questions",
        title: "The Four Maintenance Questions",
        body: `
          <ol>
            <li><strong>Is it working?</strong> Can people load the site, move around it, submit forms, and complete important actions?</li>
            <li><strong>Is it accurate?</strong> Are dates, prices, opening hours, services, names, links, and downloads up to date?</li>
            <li><strong>Is it findable?</strong> Can search engines and people understand what the site is about?</li>
            <li><strong>Is it usable?</strong> Can people use the site on mobile, read the text, navigate by keyboard, and load pages reasonably quickly?</li>
          </ol>
          <p>Working. Accurate. Findable. Usable. That is a very good start.</p>
        `,
      },
    ],
    checkpoint: [
      {
        question: "What kind of website are you maintaining?",
        answer:
          "A useful answer names the site type, such as static site, WordPress site, hosted PHP site, Shopify store, Squarespace site, or another builder platform.",
      },
      {
        question: "Where is the site hosted?",
        answer:
          "A useful answer names the hosting or platform account, such as Vercel, Netlify, cPanel hosting, WordPress hosting, Shopify, Squarespace, or Wix.",
      },
      {
        question: "Where are the files stored?",
        answer:
          "A useful answer identifies the source of truth: a Git repository, hosting file manager, WordPress theme/uploads area, builder account, or local project folder.",
      },
      {
        question: "Does the site have a database?",
        answer:
          "Static sites often do not. WordPress, ecommerce, membership, booking, and many CMS sites usually do, and that database needs its own backup plan.",
      },
      {
        question: "Does the site have forms?",
        answer:
          "If yes, name each form and how submissions are delivered or stored. If no, write not applicable so the care plan stays honest.",
      },
      {
        question: "Does the site use analytics?",
        answer:
          "A useful answer names the analytics tool and what you check, such as Plausible, Google Analytics, Search Console, Jetpack, or platform analytics.",
      },
      {
        question: "Who is responsible for updates?",
        answer:
          "Name a person or role. A maintenance task without an owner is easy to forget, especially when the site appears to be working.",
      },
      {
        question: "What would be the most serious thing that could break?",
        answer:
          "Look for the highest-impact failure: the site going offline, contact forms not sending, checkout breaking, bookings failing, or key content becoming inaccurate.",
      },
    ],
    guidedPractice: {
      description: "Choose a small website you have built or managed and create a simple care note.",
      steps: [
        {
          title: "Step 1: Identify the site",
          instructions:
            "<p>Record the site name, site type, hosting provider, domain registrar, where the files live, and whether it uses a database, forms, or analytics.</p>",
        },
        {
          title: "Step 2: Name the important parts",
          instructions:
            "<p>List the main pages, the most important user action, and the biggest risk if something broke.</p>",
        },
        {
          title: "Step 3: Choose the first routines",
          instructions:
            "<p>Write one weekly check and one monthly check that would genuinely help this site.</p>",
        },
      ],
      successCriteria: [
        "You can describe the site type and where the site lives",
        "You know whether the site uses forms, analytics, or a database",
        "You have one realistic weekly check and one realistic monthly check",
      ],
    },
    independentPractice: {
      task:
        "<p>Create a care and feeding plan for one website. Keep it simple enough that you would actually use it.</p>",
      requirements: [
        "a weekly check",
        "a monthly check",
        "a quarterly review",
        "an update process",
        "a backup process",
        "an emergency note explaining what you would check first if the site stopped working",
      ],
    },
    reflection: [
      "What part of website maintenance surprised you?",
      "Which maintenance task feels most important for your current site?",
      "Which task could be automated or scheduled?",
      "What would you check first if the homepage suddenly looked broken?",
      "How could regular maintenance improve trust with visitors?",
    ],
    recap: [
      "A website is not finished when it is launched.",
      "Good website care includes checking content, links, forms, performance, accessibility, SEO, analytics, backups, and updates.",
      "The goal is to build simple routines that help you notice problems early.",
    ],
  },
  {
    slug: "weekly-website-check",
    title: "The Weekly Website Check",
    shortTitle: "Weekly Check",
    path: "/tutorials/website-care-and-feeding/weekly-website-check",
    description:
      "Learn how to run a simple weekly website check to catch obvious problems before they become bigger issues.",
    duration: "25 min",
    tags: ["Weekly checklist", "Testing", "Forms", "Mobile"],
    objectives: [
      { verb: "Perform", text: "a quick visual check of a live website" },
      { verb: "Test", text: "key navigation links and important pages" },
      { verb: "Check", text: "whether a contact form appears to work" },
      { verb: "Review", text: "a website on mobile" },
      { verb: "Record", text: "issues clearly for later fixing" },
    ],
    hook: `
      <p>Weekly website maintenance should not feel like preparing for a moon landing.</p>
      <p>The weekly check is a quick health check. Its job is to catch obvious problems before users find them first.</p>
      <p>You are looking for the digital equivalent of: the front door is jammed, the lights are off, the sign points to the wrong room, or the contact form has quietly gone on holiday.</p>
    `,
    intro:
      "For most small websites, a weekly check should take 10 to 15 minutes. You are not doing a full audit. You are making sure the site still works for a real person.",
    visual: {
      src: "/assets/images/tutorials/diagrams/tutorial-weekly-website-check-flow.svg",
      alt: "Diagram showing a weekly website check moving through homepage, navigation, forms, mobile layout, images, and issue notes.",
      caption:
        "A weekly check is a quick triage pass: test what visitors see first, then record anything that needs attention.",
    },
    sections: [
      {
        id: "what-to-check",
        title: "What to Check Each Week",
        body: `
          <p>Focus on the most visible and most important parts of the website: the homepage, main navigation, important pages, contact page, forms, mobile layout, broken images, analytics collection, and recent changes.</p>
        `,
      },
      {
        id: "homepage",
        title: "Step 1: Check That the Homepage Loads",
        body: `
          <p>Open the website in a browser and ask: Does the page load? Does the layout look normal? Is the main heading visible? Are images loading? Is anything obviously broken? Is the site using HTTPS?</p>
          <p>Do not start fixing things yet. First, observe. A calm first look is better than immediately changing six things and accidentally creating a seventh problem.</p>
        `,
      },
      {
        id: "navigation",
        title: "Step 2: Check the Navigation",
        body: `
          <p>Click through the main navigation. Check that each menu item opens the correct page, links are not going to old or missing pages, the navigation works on mobile, and buttons or calls to action go where expected.</p>
          <p>If users cannot move through the site, they cannot use the site.</p>
        `,
      },
      {
        id: "important-pages",
        title: "Step 3: Check Important Pages",
        body: `
          <p>Every site has pages that matter more than others. For a business site, these might be Home, Services, About, Contact, Booking, Menu, Pricing, or Events. For a portfolio site, these might be Home, Projects, About, Contact, and Resume or CV.</p>
          <p>Open the important pages and check whether the content is visible, headings are readable, images are loading, layout looks normal, and main links work.</p>
        `,
      },
      {
        id: "forms",
        title: "Step 4: Test Forms",
        body: `
          <p>Forms are sneaky. A form can look perfectly fine on the page while completely failing behind the scenes.</p>
          <p>If the site has a contact form, booking form, newsletter form, or enquiry form, test it regularly. Check whether you can fill it in, submit it, see the success message, receive the notification email, and understand what happens next.</p>
          <p>A contact form that does not send messages is not a contact form. It is decorative disappointment.</p>
        `,
      },
      {
        id: "mobile-images-analytics",
        title: "Step 5: Check Mobile, Images, and Analytics",
        body: `
          <p>Open the site on a phone or use browser responsive design tools. Check that text is readable, buttons are easy to tap, navigation is usable, images resize properly, and there is no sideways scrolling.</p>
          <p>Check whether images are loading on the homepage and important pages. If an image is missing, record which page it is on, what appears to be missing, whether the layout is affected, and whether the image is decorative or meaningful.</p>
          <p>You do not need to analyse all the data weekly. Just check that analytics are still collecting visits.</p>
        `,
      },
      {
        id: "record-issues",
        title: "Step 6: Record Issues Clearly",
        body: `
          <p>Do not rely on memory. Memory is where small website bugs go to wear disguises.</p>
          <p>Create a simple issue note with the date, page, problem, seriousness, whether a screenshot was taken, possible cause, and next action.</p>
        `,
      },
      {
        id: "weekly-checklist",
        title: "Weekly Checklist",
        body: `
          <ul class="checklist-list">
            <li>Homepage loads</li>
            <li>HTTPS is working</li>
            <li>Main navigation works</li>
            <li>Important pages load</li>
            <li>Contact page works</li>
            <li>Forms have been tested</li>
            <li>Mobile layout checked</li>
            <li>Images are loading</li>
            <li>No obvious broken layout</li>
            <li>Analytics still collecting data</li>
            <li>Any issues recorded clearly</li>
          </ul>
        `,
      },
    ],
    checkpoint: [
      {
        question: "Run a 10-minute weekly check on one live or local website.",
        answer:
          "A solid check covers the homepage, navigation, important pages, forms or contact paths, mobile layout, images, analytics collection, and a short issue note.",
      },
      {
        question: "Record something that works well.",
        answer:
          "Name something specific, such as the homepage loads quickly, the mobile menu opens, the contact page is reachable, or images are loading correctly.",
      },
      {
        question: "Record something that needs fixing.",
        answer:
          "A useful note includes the page, the problem, how serious it is, and the next action. Example: Contact page form submits, but no notification email arrived.",
      },
      {
        question: "Record something you are unsure about.",
        answer:
          "Good uncertainty notes are specific. Example: Analytics dashboard shows no visits this week; check whether tracking is installed or traffic is genuinely low.",
      },
    ],
    guidedPractice: {
      description: "Open your project site and create a weekly check note.",
      steps: [
        {
          title: "Step 1: Add the basics",
          instructions: "<p>Record the website, date, and who checked it.</p>",
        },
        {
          title: "Step 2: Check the main areas",
          instructions:
            "<p>Write short notes for homepage, navigation, important pages, forms, mobile, images, and analytics.</p>",
        },
        {
          title: "Step 3: Choose the next action",
          instructions:
            "<p>List issues found and choose the one next action that matters most.</p>",
        },
      ],
      successCriteria: [
        "Your note is short enough to repeat next week",
        "You tested at least one important user action",
        "You recorded any issue clearly enough to fix later",
      ],
    },
    independentPractice: {
      task:
        "<p>Create a weekly website check template for your own site. Include no more than 10 checks. If your checklist has 47 items, congratulations, you have accidentally created homework.</p>",
      requirements: [
        "homepage check",
        "navigation check",
        "important page check",
        "form or contact check, if relevant",
        "mobile check",
        "issue note area",
      ],
    },
    reflection: [
      "Which weekly check is most important for your site?",
      "Which part of the site would cause the biggest problem if it broke?",
      "How could you make the weekly check easier to remember?",
      "Where will you record issues when you find them?",
    ],
    recap: [
      "The weekly website check is a quick routine for catching obvious problems.",
      "It should focus on the homepage, navigation, important pages, forms, mobile layout, images, and analytics.",
      "The aim is to notice problems early, record them clearly, and keep the site reliable.",
    ],
  },
  {
    slug: "monthly-website-health-check",
    title: "The Monthly Website Health Check",
    shortTitle: "Monthly Check",
    path: "/tutorials/website-care-and-feeding/monthly-website-health-check",
    description:
      "Learn how to run a monthly website health check covering content, links, SEO, accessibility, analytics, performance, and backups.",
    duration: "35 min",
    tags: ["Monthly checklist", "SEO", "Accessibility", "Performance", "Backups"],
    objectives: [
      { verb: "Review", text: "website content for accuracy" },
      { verb: "Check", text: "links, forms, images, and downloads" },
      { verb: "Review", text: "basic SEO and accessibility issues" },
      { verb: "Check", text: "page performance and analytics patterns" },
      { verb: "Confirm", text: "backups or repository history are available" },
    ],
    hook: `
      <p>The weekly check catches obvious problems. The monthly health check goes deeper.</p>
      <p>This is where you look for the slow, quiet problems: outdated information, broken links, oversized images, confusing headings, missing alt text, poor mobile performance, forgotten downloads, analytics patterns, and backups that have not actually been checked.</p>
      <p>Monthly maintenance is not glamorous. It is more like checking the oil in a car. Ignore it for long enough and eventually the machine makes expensive noises.</p>
    `,
    intro:
      "For a small site, a monthly check might take 30 to 60 minutes. For a larger site, check the most important pages first.",
    visual: {
      src: "/assets/images/tutorials/diagrams/tutorial-monthly-health-check-matrix.svg",
      alt: "Matrix grouping monthly website checks into content, links and forms, SEO, accessibility, performance, analytics, backups, and updates.",
      caption:
        "Monthly care works best when the checks are grouped by purpose, so the review stays complete without becoming chaotic.",
    },
    sections: [
      {
        id: "monthly-scope",
        title: "What to Check Each Month",
        body: `
          <p>A monthly website health check should include content accuracy, broken links, forms, downloads, images, SEO metadata, heading structure, accessibility basics, mobile experience, page performance, analytics patterns, backups, updates, and dependencies.</p>
        `,
      },
      {
        id: "content-links-forms",
        title: "Steps 1-3: Content, Links, and Forms",
        body: `
          <p>Start with content. Check dates, prices, opening hours, staff names, contact details, old announcements, service information, event details, and downloadable files. Outdated content weakens trust.</p>
          <p>Then check internal links, external links, navigation links, buttons, footer links, download links, and links inside posts or tutorials. When recording a broken link, include the page, link text, broken URL, what it should link to instead, and whether it can be removed.</p>
          <p>Forms deserve another check during monthly maintenance. Test required fields, error messages, success messages, notification emails, spam protection, and where submitted data goes.</p>
        `,
      },
      {
        id: "images-seo-accessibility",
        title: "Steps 4-6: Images, SEO, and Accessibility",
        body: `
          <p>Images affect performance, accessibility, and trust. Check whether images are loading, too large, meaningfully named, and supported by useful alt text where needed. Also check whether PDFs or downloads are current.</p>
          <p>Monthly SEO maintenance does not mean chasing every search engine rumour like a caffeinated meerkat. Start with one clear H1, sensible H2 and H3 headings, descriptive page titles, useful meta descriptions, clear internal links, readable URLs, relevant image alt text, and content that matches the page purpose.</p>
          <p>Accessibility maintenance helps more people use the site. Check heading order, text readability, colour contrast, recognisable links, keyboard access, visible focus, useful alt text, clear form labels, and respectful motion.</p>
        `,
      },
      {
        id: "mobile-performance-analytics",
        title: "Steps 7-9: Mobile, Performance, and Analytics",
        body: `
          <p>Monthly mobile checks should go deeper than the weekly glance. Test key pages on a real phone if possible, including navigation, heading line breaks, tap targets, forms, images, cards, tables, code blocks, and page speed.</p>
          <p>For performance, focus on common causes: oversized images, too many scripts, unused plugins, large videos, heavy fonts, uncompressed files, and unnecessary third-party embeds. Do not obsess over a perfect score. Ask whether the site is fast enough to use comfortably.</p>
          <p>Monthly analytics reviews are about patterns: top pages, traffic sources, device types, search queries, exit patterns, traffic drops, traffic spikes, and important pages with little traffic. Analytics are not a report card on your worth as a human. They are a torch.</p>
        `,
      },
      {
        id: "backups",
        title: "Step 10: Check Backups and Version History",
        body: `
          <p>Backups matter most when something has already gone wrong. That is precisely the worst time to discover they do not exist.</p>
          <p>For static Git-based sites, check that the repository is up to date, recent changes have been committed, important branches are protected where needed, environment variables are documented safely, and deployment history is available.</p>
          <p>For WordPress sites, check database backups, upload backups, theme and plugin file recovery, safe storage, and restore instructions. For traditional hosted sites, check website files, database backups, hosting access details, and configuration notes.</p>
          <p>GitHub is not always a full website backup. If your database, uploads, form entries, or environment variables live somewhere else, they need their own backup plan.</p>
        `,
      },
    ],
    checkpoint: [
      {
        question: "Choose three important pages on your site.",
        answer:
          "Choose pages that affect trust or action, such as Home, Services, Pricing, Contact, Booking, About, a popular tutorial, or a checkout page.",
      },
      {
        question: "For each page, check whether the content is accurate.",
        answer:
          "A good answer checks dates, prices, contact details, opening hours, services, staff names, event details, downloads, and any claims that may age.",
      },
      {
        question: "For each page, check whether the main links work.",
        answer:
          "A useful check follows navigation links, buttons, downloads, internal links, form links, and calls to action to confirm they land in the expected place.",
      },
      {
        question: "For each page, check whether the heading structure is clear.",
        answer:
          "A clear page has one main H1, then headings that describe the page sections in a sensible order without skipping into confusing levels.",
      },
      {
        question: "For each page, record one improvement you could make.",
        answer:
          "Choose one realistic improvement, such as updating stale text, fixing a broken link, improving a title, replacing a large image, or clarifying a call to action.",
      },
    ],
    guidedPractice: {
      description: "Create a monthly health check table.",
      steps: [
        {
          title: "Step 1: Choose no more than five pages",
          instructions:
            "<p>Pick the pages where accuracy, contact, conversion, or learning flow matters most.</p>",
        },
        {
          title: "Step 2: Add practical columns",
          instructions:
            "<p>Use: Page, content accurate, links working, mobile okay, SEO title okay, accessibility concern, performance concern, and action needed.</p>",
        },
        {
          title: "Step 3: Choose one next improvement",
          instructions:
            "<p>Do not turn the check into a rebuild. Choose one improvement to handle next.</p>",
        },
      ],
      successCriteria: [
        "You reviewed a realistic number of pages",
        "You checked content, links, mobile, SEO, accessibility, and performance",
        "You chose one concrete next action",
      ],
    },
    independentPractice: {
      task:
        "<p>Run a monthly health check on one small website. Keep the scope small enough to finish.</p>",
      requirements: [
        "three things that are working well",
        "three things that need fixing",
        "one thing to improve next month",
      ],
    },
    reflection: [
      "Which monthly check would have the biggest impact on your site?",
      "What content is most likely to become outdated?",
      "What would happen if your site needed to be restored tomorrow?",
      "Where should maintenance notes be stored?",
      "How could analytics guide your next improvement?",
    ],
    recap: [
      "The monthly website health check helps you look beyond obvious problems.",
      "It covers content, links, forms, images, SEO, accessibility, mobile experience, performance, analytics, and backups.",
      "The goal is to keep the site accurate, usable, findable, and reliable.",
    ],
  },
  {
    slug: "updates-backups-version-control",
    title: "Updates, Backups, and Version Control",
    shortTitle: "Updates and Backups",
    path: "/tutorials/website-care-and-feeding/updates-backups-version-control",
    description:
      "Understand how updates, backups, and version control protect a website from avoidable disasters.",
    duration: "30 min",
    tags: ["Backups", "Git", "Version control", "Updates"],
    objectives: [
      { verb: "Explain", text: "why updates need to be tested" },
      { verb: "Describe", text: "the difference between version control and backups" },
      { verb: "Identify", text: "what needs backing up for different site types" },
      { verb: "Create", text: "a safe update process" },
      { verb: "Understand", text: "why rollback options matter" },
    ],
    hook: `
      <p>Updates are necessary. Updates can also break things.</p>
      <p>Both statements are true, which is deeply annoying and very web development.</p>
      <p>A healthy website needs updates, backups, and version control. These three ideas work together, but they are not the same thing.</p>
    `,
    intro:
      "Updates keep software current. Backups help recover lost data or files. Version control tracks changes to code and content files. When used well, they give you options. And options are very handy when a website suddenly decides to become abstract art.",
    visual: {
      src: "/assets/images/tutorials/diagrams/tutorial-updates-backups-version-control-map.svg",
      alt: "Relationship map showing updates, version control, backups, rollback, and the live website.",
      caption:
        "Updates, version control, and backups are related safety nets, but they do different jobs.",
    },
    sections: [
      {
        id: "updates",
        title: "Updates",
        body: `
          <p>Updates can apply to dependencies, frameworks, plugins, themes, content management systems, hosting settings, build tools, scripts, forms, and analytics tools.</p>
          <p>Updates may include security fixes, bug fixes, performance improvements, new features, and compatibility changes. Updating is important, but updating without testing can create new problems.</p>
        `,
      },
      {
        id: "static-updates",
        title: "Dependency Updates for Static Sites",
        body: `
          <p>Static sites built with tools such as Vite often use packages installed through npm. A simple update process might look like this:</p>
          <ol>
            <li>Check the current site works.</li>
            <li>Create a new branch.</li>
            <li>Update dependencies.</li>
            <li>Run the development server.</li>
            <li>Run the build command.</li>
            <li>Test key pages.</li>
            <li>Check the deployment preview.</li>
            <li>Merge only when everything looks correct.</li>
          </ol>
          <pre><code>npm outdated
npm update
npm run dev
npm run build</code></pre>
          <p>Do not update everything blindly right before you need the site. That is not maintenance. That is summoning.</p>
        `,
      },
      {
        id: "wordpress-updates",
        title: "Plugin and Theme Updates for WordPress",
        body: `
          <p>WordPress sites often include WordPress core, plugins, themes, custom code, a database, and media uploads.</p>
          <p>A safer WordPress update process is: back up the site, check what updates are available, update one group at a time if possible, test the homepage, test important pages, test forms, check mobile layout, check admin functionality, and record what changed.</p>
          <p>If the site has a staging environment, test updates there first. A staging site is a private copy of the site used for testing before changes go live.</p>
        `,
      },
      {
        id: "version-control",
        title: "Version Control",
        body: `
          <p>Version control tracks changes to files over time. Git is the most common version control tool used in web development.</p>
          <p>Version control helps you see what changed, compare versions, undo mistakes, work on branches, collaborate with others, and connect to deployment services.</p>
          <p>However, Git is not always a complete backup. It may not include database content, uploaded media stored elsewhere, environment variables, form submissions, analytics data, hosting settings, or DNS records.</p>
        `,
      },
      {
        id: "backups",
        title: "Backups",
        body: `
          <p>A backup is a copy of important website data that can be restored if something goes wrong. A useful backup is current enough to matter, stored somewhere safe, separate from the live site, restorable, and documented.</p>
          <p>A backup that cannot be restored is more of a comforting rumour than a recovery plan.</p>
          <p>Static sites need source files, content files, images, public assets, environment variable documentation, deployment settings, domain settings, DNS records, and analytics settings considered. WordPress sites need database, uploads, theme files, plugin files, custom code, and configuration backups. Builder sites may need separate copies of page content, images, product information, theme settings, custom code snippets, app integrations, and account ownership details.</p>
        `,
      },
      {
        id: "safe-process",
        title: "A Safe Update Process",
        body: `
          <ol>
            <li>Check the site before updating.</li>
            <li>Make sure a backup or rollback option exists.</li>
            <li>Update in a controlled way.</li>
            <li>Test the site after updating.</li>
            <li>Check important pages and forms.</li>
            <li>Check mobile layout.</li>
            <li>Record what changed.</li>
            <li>Keep notes for next time.</li>
          </ol>
          <p>This process works for many types of websites. The details may change, but the thinking stays the same.</p>
        `,
      },
      {
        id: "rollback",
        title: "Rollback Options",
        body: `
          <p>A rollback means returning to an earlier working version. Rollback options might include Git commits, deployment history, hosting backups, WordPress backups, manual file backups, or database backups.</p>
          <p>Before making major changes, ask: How would I undo this? Where is the last working version? Who has access to restore it? How long would restoration take? What data might be lost?</p>
          <p>Rollback planning is not pessimism. It is professional.</p>
        `,
      },
    ],
    checkpoint: [
      {
        question: "Where are the website files stored?",
        answer:
          "Name the source of truth, such as a GitHub repository, local project folder, hosting file manager, WordPress theme files, or builder platform account.",
      },
      {
        question: "Is there a Git repository?",
        answer:
          "If yes, record the repository location and main branch. If no, record what currently tracks changes, such as platform history, hosting backups, or manual copies.",
      },
      {
        question: "Does the site have a database?",
        answer:
          "WordPress, ecommerce, membership, booking, and CMS sites usually do. Static sites may not. If there is a database, it needs a separate backup and restore plan.",
      },
      {
        question: "Where are images and uploads stored?",
        answer:
          "They may live in the Git repository, WordPress uploads folder, a CMS media library, cloud storage, ecommerce platform, or builder account.",
      },
      {
        question: "Is there an automatic backup?",
        answer:
          "A useful answer names the backup system, frequency, what it includes, where backups are stored, and who can access them.",
      },
      {
        question: "Has anyone tested restoring a backup?",
        answer:
          "The safest answer is yes, with the date and restore method recorded. If not, the next maintenance task is to test or document the restore process.",
      },
      {
        question: "How would you undo a broken update?",
        answer:
          "A good rollback plan names the previous working version, who can restore it, which tool to use, and what data might be lost during restoration.",
      },
    ],
    guidedPractice: {
      description: "Create a backup map for a website.",
      steps: [
        {
          title: "Step 1: Map where things live",
          instructions:
            "<p>Record files, database, images/uploads, environment variables, hosting provider, domain registrar, and DNS provider.</p>",
        },
        {
          title: "Step 2: Map recovery",
          instructions:
            "<p>Record the backup method, restore method, who has access, and any notes future-you would need.</p>",
        },
        {
          title: "Step 3: Test the explanation",
          instructions:
            "<p>Explain how you would restore the last working version. If you cannot explain it yet, record that as the next thing to find out.</p>",
        },
      ],
      successCriteria: [
        "You know what Git covers and what it does not cover",
        "You can name the backup method for important site data",
        "You can describe a realistic rollback option",
      ],
    },
    independentPractice: {
      task: "<p>Create a safe update checklist for your own site.</p>",
      requirements: [
        "what to check before updating",
        "what to back up",
        "what to update",
        "what to test afterwards",
        "how to roll back",
        "where to record update notes",
      ],
    },
    reflection: [
      "What is the difference between a backup and version control?",
      "What part of your site would be hardest to replace?",
      "What update would make you most nervous?",
      "How could you reduce that risk?",
      "What would you write down so future-you knows what happened?",
    ],
    recap: [
      "Updates keep the site current.",
      "Version control tracks changes.",
      "Backups help restore what has been lost or broken.",
      "The safest approach is simple: check first, back up, update carefully, test afterwards, and record what changed.",
    ],
  },
  {
    slug: "analytics-without-panic",
    title: "Analytics Without Panic",
    shortTitle: "Analytics",
    path: "/tutorials/website-care-and-feeding/analytics-without-panic",
    description:
      "Learn how to use website analytics calmly and practically without turning every number into a personal judgement.",
    duration: "25 min",
    tags: ["Analytics", "Maintenance", "SEO", "Content review"],
    objectives: [
      { verb: "Explain", text: "what website analytics can and cannot tell you" },
      { verb: "Identify", text: "useful analytics patterns" },
      { verb: "Review", text: "traffic without panic" },
      { verb: "Use", text: "analytics to guide practical website improvements" },
      { verb: "Avoid", text: "vanity metrics as the only measure of success" },
    ],
    hook: `
      <p>Analytics can be useful.</p>
      <p>Analytics can also make perfectly sensible people stare at a graph and question their entire life.</p>
      <p>This lesson is about using analytics calmly. Website analytics are not a moral judgement. They are a torch.</p>
    `,
    intro:
      "Analytics help you see where people are coming from, which pages they visit, what devices they use, what content attracts attention, where people might be getting stuck, and whether changes have affected traffic. The goal is not to worship the numbers. The goal is to learn from them.",
    visual: {
      src: "/assets/images/tutorials/diagrams/tutorial-analytics-without-panic-loop.svg",
      alt: "Diagram showing a calm analytics loop: observe, interpret, choose one action, and review later.",
      caption:
        "Analytics are most useful when they lead to one practical improvement, then a later review.",
    },
    sections: [
      {
        id: "can-tell",
        title: "What Analytics Can Tell You",
        body: `
          <p>Analytics can help answer useful questions: How many people visited? Which pages were viewed most? Where did visitors come from? Did visitors use mobile or desktop? Did traffic change after a new post, update, or campaign?</p>
          <p>If most visitors use mobile, mobile layout matters even more. If a tutorial gets strong traffic, it may deserve a follow-up lesson. If people visit the contact page but do not submit the form, the form may need checking.</p>
        `,
      },
      {
        id: "cannot-tell",
        title: "What Analytics Cannot Tell You",
        body: `
          <p>Analytics cannot fully explain what a visitor was thinking, whether someone found the page emotionally helpful, whether a quiet reader valued the content, whether someone came back later on another device, whether a small audience is the right audience, or whether your work matters.</p>
          <p>Analytics show behaviour, not the whole human story. Use them as evidence, not as the only source of truth.</p>
        `,
      },
      {
        id: "useful-numbers",
        title: "Useful Numbers to Check",
        body: `
          <dl>
            <dt><strong>Page views</strong></dt>
            <dd>Which pages are people visiting?</dd>
            <dt><strong>Visitors</strong></dt>
            <dd>Is the site getting steady traffic, growing traffic, or no traffic?</dd>
            <dt><strong>Traffic sources</strong></dt>
            <dd>How are people finding the site?</dd>
            <dt><strong>Device type</strong></dt>
            <dd>Do you need to prioritise mobile improvements?</dd>
            <dt><strong>Top pages</strong></dt>
            <dd>What content is already working?</dd>
            <dt><strong>Low-performing important pages</strong></dt>
            <dd>Is an important page hard to find?</dd>
          </dl>
        `,
      },
      {
        id: "vanity-metrics",
        title: "Vanity Metrics",
        body: `
          <p>A vanity metric is a number that looks impressive but does not necessarily help you make a useful decision. Examples include total views without context, follower counts without engagement, one traffic spike with no follow-up action, or comparing your small site with a massive platform.</p>
          <p>Better questions include: Are the right people finding the site? Are visitors reaching the pages that matter? Are people able to take the next step? Is the site becoming clearer over time? What can I improve this month?</p>
        `,
      },
      {
        id: "small-sites",
        title: "Analytics for Small Sites",
        body: `
          <p>Small sites often have small numbers. That is normal. A local business site, personal portfolio, student project, or niche tutorial site does not need millions of visitors to be useful.</p>
          <p>For small sites, look for steady improvement, useful search queries, visits to important pages, engagement with new content, patterns over several months, and whether your site supports its purpose.</p>
          <p>Do not judge a small site with big-platform expectations. That is like judging a backyard herb garden for not being the Amazon rainforest.</p>
        `,
      },
      {
        id: "monthly-review",
        title: "Monthly Analytics Review",
        body: `
          <p>Once a month, check top pages, traffic sources, device types, search queries if available, pages with traffic drops, pages with unexpected traffic, important pages with low traffic, and recent changes that may explain patterns.</p>
          <p>Then choose one action. Not seventeen. One. Examples include improving the title of an important page, adding internal links to a useful tutorial, updating an old post, improving the mobile layout of a popular page, writing a follow-up tutorial, testing a contact form, or compressing images on a slow page.</p>
        `,
      },
      {
        id: "example",
        title: "Example Analytics Interpretation",
        body: `
          <p>Imagine a tutorial site has these patterns: most visitors arrive on the HTML basics tutorial, very few continue to the CSS tutorial, mobile users make up 70 percent of traffic, the tutorial index page gets very few visits, and search traffic is slowly increasing.</p>
          <p>A practical interpretation is that the HTML tutorial is findable, but the learning pathway may not be clear enough. Mobile experience matters because most visitors use mobile. The tutorial index may need better internal links from popular lessons.</p>
          <p>A practical action would be to add a clear next lesson link at the end of the HTML tutorial and improve the mobile layout of lesson navigation. No panic. No dramatic spreadsheet seance.</p>
        `,
      },
    ],
    checkpoint: [
      {
        question: "Find the most visited page.",
        answer:
          "A useful answer names the page and time period, such as the HTML basics tutorial was the top page for the last 30 days.",
      },
      {
        question: "Find the most common device type.",
        answer:
          "A useful answer names the dominant device category, such as mobile, desktop, or tablet, and notes whether that should affect testing priorities.",
      },
      {
        question: "Find one traffic source.",
        answer:
          "A useful answer names where visitors came from, such as search, direct visits, social media, referrals, email, or another website.",
      },
      {
        question: "Find one page that matters but may need more attention.",
        answer:
          "Look for an important page with low traffic, high exits, outdated content, weak internal links, unclear metadata, or a key user action that may need testing.",
      },
      {
        question: "Choose one small improvement you could make.",
        answer:
          "Choose one action tied to evidence, such as adding a next-lesson link, improving a page title, testing a form, compressing images, or clarifying navigation.",
      },
    ],
    guidedPractice: {
      description: "Create a monthly analytics note.",
      steps: [
        {
          title: "Step 1: Record the basics",
          instructions:
            "<p>Add the month, website, top page, most common traffic source, and most common device.</p>",
        },
        {
          title: "Step 2: Interpret one pattern",
          instructions:
            "<p>Write one interesting pattern, one possible concern, and one action to take.</p>",
        },
        {
          title: "Step 3: Review next month",
          instructions:
            "<p>Make a note to review the same action next month so analytics become a learning loop.</p>",
        },
      ],
      successCriteria: [
        "You chose evidence, not just a feeling",
        "You avoided judging the whole site from one number",
        "You selected one useful action",
      ],
    },
    independentPractice: {
      task:
        "<p>Review analytics for one website and choose one improvement based on evidence. Write down what you changed and why.</p>",
      requirements: [
        "one analytics pattern",
        "one possible explanation",
        "one improvement related to navigation, internal links, metadata, mobile layout, content, forms, images, or follow-up content",
      ],
    },
    reflection: [
      "Which analytics number feels most useful?",
      "Which number feels distracting?",
      "What pattern would make you check the site more closely?",
      "What is one improvement analytics could guide?",
      "How can you use analytics without turning them into self-judgement?",
    ],
    recap: [
      "Analytics are useful when they help you make better decisions.",
      "They are not a measure of your worth, skill, or future success.",
      "Use analytics to notice patterns, ask better questions, and choose small improvements.",
    ],
  },
  {
    slug: "website-care-and-feeding-checklist",
    title: "Website Care and Feeding Checklist",
    shortTitle: "Checklist",
    path: "/tutorials/website-care-and-feeding/website-care-and-feeding-checklist",
    description:
      "A practical checklist for weekly, monthly, quarterly, update, and emergency website maintenance.",
    duration: "20 min",
    tags: ["Checklist", "Maintenance", "Backups", "SEO", "Accessibility"],
    objectives: [
      { verb: "Use", text: "a weekly website check routine" },
      { verb: "Use", text: "a monthly website health check routine" },
      { verb: "Review", text: "a site quarterly" },
      { verb: "Test", text: "a site after major updates" },
      { verb: "Follow", text: "a basic emergency response process" },
    ],
    hook: `
      <p>Use this checklist to keep a website healthy after launch.</p>
      <p>You do not need to do every task every day. Use the weekly, monthly, quarterly, update, and emergency sections as separate routines.</p>
    `,
    intro:
      "This resource-style lesson gives you a practical checklist you can download, adapt, and use with a small website.",
    visual: {
      src: "/assets/images/tutorials/diagrams/tutorial-website-care-checklist-schedule.svg",
      alt: "Schedule diagram separating website care into weekly, monthly, quarterly, update, and emergency checklist routines.",
      caption:
        "The checklist is easier to use when weekly, monthly, quarterly, update, and emergency routines stay separate.",
    },
    download: {
      href: "/resources/website-care-and-feeding-checklist.md",
      label: "Download the Markdown checklist",
    },
    sections: [
      {
        id: "weekly",
        title: "Weekly Quick Check",
        body: `
          <p>Use this once a week.</p>
          <ul class="checklist-list">
            <li>Homepage loads correctly</li>
            <li>HTTPS is working</li>
            <li>Main navigation works</li>
            <li>Important pages load</li>
            <li>Contact page works</li>
            <li>Forms have been tested</li>
            <li>Notification emails arrive</li>
            <li>Mobile layout checked</li>
            <li>Images are loading</li>
            <li>No obvious broken layout</li>
            <li>Analytics are still collecting data</li>
            <li>Any issues are recorded clearly</li>
          </ul>
        `,
      },
      {
        id: "monthly",
        title: "Monthly Website Health Check",
        body: `
          <p>Use this once a month. Check content, links, forms, images and files, SEO, accessibility, mobile, performance, analytics, and backups.</p>
          <p>Useful notes to capture: month, checked by, key findings, issues to fix, and improvement chosen.</p>
        `,
      },
      {
        id: "quarterly",
        title: "Quarterly Website Review",
        body: `
          <ul>
            <li>Review the site purpose</li>
            <li>Review the homepage message and main navigation</li>
            <li>Review top-performing pages and underperforming important pages</li>
            <li>Remove outdated content and refresh stale content</li>
            <li>Check service or product information and brand consistency</li>
            <li>Review accessibility improvements, SEO opportunities, and analytics trends</li>
            <li>Review hosting costs, domain renewal dates, backup process, and admin access</li>
            <li>Plan next improvements</li>
          </ul>
        `,
      },
      {
        id: "after-updates",
        title: "After Every Major Update",
        body: `
          <p>Use this after content, code, plugin, theme, dependency, hosting, DNS, or deployment changes.</p>
          <ul>
            <li>Homepage loads</li>
            <li>Navigation works</li>
            <li>Important pages load</li>
            <li>Forms tested</li>
            <li>Mobile layout checked</li>
            <li>Images checked</li>
            <li>Console checked for obvious errors</li>
            <li>Build or deployment logs checked</li>
            <li>Analytics still working</li>
            <li>SEO metadata still present</li>
            <li>Accessibility basics checked</li>
            <li>Previous version or rollback option confirmed</li>
            <li>Update notes recorded</li>
          </ul>
        `,
      },
      {
        id: "emergency",
        title: "Emergency Checklist",
        body: `
          <p>First, stay calm. Then check whether the site is down for everyone or just you, whether it loads in another browser, another device, or mobile data, whether the hosting provider reports an outage, whether the domain is active, whether DNS and SSL are working, whether there was a recent deployment or update, whether content was renamed or deleted, whether build errors exist, and whether a previous working version can be restored.</p>
        `,
      },
      {
        id: "schedule",
        title: "Simple Maintenance Schedule",
        body: `
          <dl>
            <dt><strong>Weekly</strong></dt>
            <dd>Run the weekly quick check and record any issues.</dd>
            <dt><strong>Monthly</strong></dt>
            <dd>Run the monthly website health check and choose one improvement.</dd>
            <dt><strong>Quarterly</strong></dt>
            <dd>Review the site purpose, content, analytics, SEO, accessibility, and maintenance process.</dd>
            <dt><strong>After major updates</strong></dt>
            <dd>Test the site before walking away.</dd>
            <dt><strong>Emergency</strong></dt>
            <dd>Check hosting, domain, DNS, recent changes, and rollback options.</dd>
          </dl>
          <p>A website does not need constant fussing. It needs regular care. Small checks prevent big surprises.</p>
        `,
      },
    ],
    checkpoint: [
      {
        question: "Which checklist section would you use weekly?",
        answer:
          "Use the Weekly Quick Check. It focuses on visible site health: homepage, HTTPS, navigation, important pages, forms, mobile layout, images, analytics, and issue notes.",
      },
      {
        question: "Which section would you use after a deployment or dependency update?",
        answer:
          "Use After Every Major Update. It checks the site after code, content, plugin, theme, hosting, DNS, or deployment changes.",
      },
      {
        question: "Which emergency question would you check first if the site stopped loading?",
        answer:
          "Start by checking whether the site is down for everyone or just you, then check hosting status, domain/DNS/SSL, recent deployments, and rollback options.",
      },
    ],
    guidedPractice: {
      description: "Download or copy the checklist and adapt it for one small site.",
      steps: [
        {
          title: "Step 1: Remove irrelevant items",
          instructions:
            "<p>If your site has no database or forms, mark those items as not applicable rather than pretending they exist.</p>",
        },
        {
          title: "Step 2: Add site-specific details",
          instructions:
            "<p>Add the site name, main pages, hosting provider, where issues are recorded, and who is responsible.</p>",
        },
        {
          title: "Step 3: Schedule the first check",
          instructions:
            "<p>Pick a realistic weekly or monthly time. A checklist only works when it becomes a repeatable habit.</p>",
        },
      ],
      successCriteria: [
        "The checklist matches the site you are maintaining",
        "The weekly routine is short enough to repeat",
        "The emergency notes tell you where to look first",
      ],
    },
    independentPractice: {
      task:
        "<p>Create a saved copy of the checklist for one site and fill in the notes for the next weekly or monthly check.</p>",
      requirements: [
        "site name and checked-by fields",
        "at least one weekly note",
        "at least one monthly improvement target",
        "one emergency contact or restore note",
      ],
    },
    reflection: [
      "Which checklist section is most useful for your current site?",
      "Which item can you safely ignore because it does not apply?",
      "Where will you store maintenance notes?",
      "What would make this checklist easier to keep using?",
    ],
    recap: [
      "Use weekly, monthly, quarterly, update, and emergency routines separately.",
      "Checklist items should match the site type.",
      "Small checks prevent big surprises.",
    ],
  },
];

export function getWebsiteCareLesson(slug) {
  return websiteCareLessons.find((lesson) => lesson.slug === slug);
}
