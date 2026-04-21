 <template>
	<div class="container section">
		<div class="tutorial-content">
			<!-- Breadcrumb -->
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
					<li class="is-active">
						<a href="#" aria-current="page">Black Swan Bistro &mdash; Part 1</a>
					</li>
				</ul>
			</nav>

			<!-- Tutorial Metadata -->
			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-success">Beginner</span>
					<span class="tag is-light">60 min</span>
					<span class="tag is-link">Project</span>
					<span class="tag is-light">Part 1 of 7</span>
				</div>
			</div>

			<h1 class="title is-1">Black Swan Bistro &mdash; Part 1</h1>
			<h2 class="subtitle is-4">Build Your First Web Page</h2>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 1: ANTICIPATORY SET                 -->
			<!-- ═══════════════════════════════════════════════════ -->
			<AnticipatorySet
				title="From Blank Screen to Restaurant Website"
				icon="🍽️"
				:hook="`<p>You walk into a brand-new restaurant. There&rsquo;s no sign outside, no menu on the table, no information about opening hours. It doesn&rsquo;t matter how good the food is &mdash; nobody will stick around long enough to find out.</p><p>A website works the same way. You need a clear homepage that tells visitors <em>who you are</em>, <em>what you offer</em>, and <em>how to find you</em>. In this project you&rsquo;ll build exactly that &mdash; a complete homepage for the <strong>Black Swan Bistro</strong>, a fictional Perth restaurant &mdash; from an empty folder to a styled, working web page.</p>`"
				:reflection-prompts="[
					'Think of a restaurant website you&rsquo;ve visited. What info did you look for first?',
					'What makes a homepage feel trustworthy vs. unfinished?',
					'Have you ever left a website because it was hard to read or looked broken?'
				]"
				connection="Over the next 60 minutes you&rsquo;ll set up a project folder, write semantic HTML, link a stylesheet, and see your page come alive in the browser. This is Part 1 of a 7-part series that will take you from first page to fully deployed site."
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 2: LEARNING OBJECTIVES              -->
			<!-- ═══════════════════════════════════════════════════ -->
			<LearningObjectives
				:objectives="[
					'Set up a project folder with proper file and folder structure',
					'Write a semantically correct HTML homepage from scratch',
					'Use headings, paragraphs, lists, links, images, and a table in context',
					'Create a linked CSS stylesheet with colour variables, typography, and layout',
					'Preview and debug your page in a browser'
				]"
				purpose="Most tutorials teach HTML and CSS as separate topics. Real projects need both working together. By building a complete page from start to finish, you&rsquo;ll see how everything connects &mdash; and you&rsquo;ll have a genuine project to show for it."
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 1: FILE & FOLDER SETUP                       -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="project-setup">Step 1 &mdash; Set Up Your Project</h2>

			<p>Every professional web project starts the same way: an organised folder with files in predictable locations. Let&rsquo;s create ours.</p>

			<h3 id="where-to-put-it">Where Should Your Project Live?</h3>

			<p>Before you create anything, decide <strong>where</strong> on your computer your web projects will live. Pick one location and stick with it &mdash; consistency will save you time later.</p>

			<div class="box">
				<table class="table is-fullwidth">
					<thead>
						<tr>
							<th>Operating System</th>
							<th>Recommended Location</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><strong>macOS</strong></td>
							<td><code>~/Sites/</code> &mdash; This is the traditional web development folder on Mac. Open Finder and you&rsquo;ll find it in your home directory. If it doesn&rsquo;t exist, create it.</td>
						</tr>
						<tr>
							<td><strong>Windows</strong></td>
							<td><code>C:\Users\YourName\Projects\</code> &mdash; Create a <code>Projects</code> folder in your user directory. Avoid putting projects on the Desktop or in OneDrive&nbsp;&mdash; syncing services can interfere with development tools.</td>
						</tr>
						<tr>
							<td><strong>Linux</strong></td>
							<td><code>~/projects/</code> or <code>~/Sites/</code> &mdash; Either works. Create whichever name you prefer in your home directory.</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="notification is-warning is-light">
				<p><strong>Important:</strong> Avoid putting projects in cloud-synced folders (Dropbox, iCloud, OneDrive) or on external drives. Build tools like Vite can create thousands of tiny files in <code>node_modules</code>, which confuse sync services and slow everything down.</p>
			</div>

			<GuidedPractice
				title="Create the Black Swan Bistro project"
				:steps="setupSteps"
			/>

			<div class="notification is-info is-light mt-4">
				<p><strong>Your project structure should now look like this:</strong></p>
				<pre><code>black-swan-bistro/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    └── (empty for now)</code></pre>
			</div>

			<CheckpointBox :questions="checkpointSetup" />

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 2: HTML STRUCTURE                             -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="html-structure">Step 2 &mdash; Build the HTML</h2>

			<p>With the folder ready, it&rsquo;s time to write the HTML. We&rsquo;ll build the page section by section, using <strong>semantic elements</strong> &mdash; HTML tags that describe <em>what</em> the content is, not just how it looks.</p>

			<h3 id="boilerplate">The Boilerplate</h3>

			<p>Open <code>index.html</code> in VS Code and add the document shell. This is the foundation every HTML page needs:</p>

			<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Black Swan Bistro | Casual Riverside Dining in Perth&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;!-- We'll add content here --&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>

			<div class="notification is-warning is-light">
				<p><strong>Tip:</strong> In VS Code, type <code>!</code> then press <kbd>Tab</kbd> to generate the boilerplate instantly (Emmet shortcut). Then add the <code>&lt;link&gt;</code> and <code>&lt;title&gt;</code> manually.</p>
			</div>

			<h3 id="header-nav">Header &amp; Navigation</h3>

			<p>Inside the <code>&lt;body&gt;</code>, start with a <code>&lt;header&gt;</code> containing the restaurant name and a simple navigation:</p>

			<pre><code>&lt;header&gt;
    &lt;h1&gt;Black Swan Bistro&lt;/h1&gt;
    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#menu"&gt;Menu&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#hours"&gt;Hours&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
&lt;/header&gt;</code></pre>

			<div class="notification is-info is-light">
				<p><strong>Why semantic elements?</strong> A <code>&lt;header&gt;</code> tells the browser (and screen readers) &ldquo;this is the top section of the page.&rdquo; A <code>&lt;nav&gt;</code> says &ldquo;this is navigation.&rdquo; Plain <code>&lt;div&gt;</code>s don&rsquo;t communicate anything &mdash; they&rsquo;re invisible to accessibility tools.</p>
			</div>

			<h3 id="hero-section">Hero Section</h3>

			<p>Below the header, add a hero section that welcomes visitors:</p>

			<pre><code>&lt;section id="hero"&gt;
    &lt;h2&gt;Casual Riverside Dining in Perth&lt;/h2&gt;
    &lt;p&gt;The Black Swan Bistro offers casual lunch and dinner fare
       in a relaxed riverside atmosphere. The menu changes
       seasonally to highlight the freshest Western Australian
       ingredients.&lt;/p&gt;
    &lt;a href="#menu"&gt;View Our Menu&lt;/a&gt;
&lt;/section&gt;</code></pre>

			<h3 id="about-section">About Section</h3>

			<pre><code>&lt;section id="about"&gt;
    &lt;h2&gt;Our Story&lt;/h2&gt;
    &lt;p&gt;Founded in 2010 by Chef &lt;strong&gt;Maria Rodriguez&lt;/strong&gt;,
       Black Swan Bistro brings over 20 years of culinary
       experience to Perth&rsquo;s Elizabeth Quay. We blend
       traditional Australian flavours with modern techniques,
       showcasing the finest local produce.&lt;/p&gt;
    &lt;p&gt;&lt;em&gt;Farm to table. Sustainability. Community.&lt;/em&gt;&lt;/p&gt;
&lt;/section&gt;</code></pre>

			<div class="notification is-info is-light">
				<p><strong>Notice:</strong> We use <code>&lt;strong&gt;</code> for the chef&rsquo;s name (important information) and <code>&lt;em&gt;</code> for the tagline (emphasis). These are <em>semantic</em> choices &mdash; they convey meaning, not just bold/italic styling.</p>
			</div>

			<h3 id="menu-section">Featured Menu</h3>

			<p>The full menu will come in Part 4, but a homepage should tease the highlights:</p>

			<pre><code>&lt;section id="menu"&gt;
    &lt;h2&gt;Featured Menu&lt;/h2&gt;

    &lt;h3&gt;Starters&lt;/h3&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;strong&gt;Sydney Rock Oysters&lt;/strong&gt; &amp;mdash; served with
            lemon myrtle mignonette&lt;/li&gt;
        &lt;li&gt;&lt;strong&gt;Kangaroo Carpaccio&lt;/strong&gt; &amp;mdash; with native
            pepperberry &amp;amp; wattleseed crisps&lt;/li&gt;
        &lt;li&gt;&lt;strong&gt;Pumpkin &amp;amp; Macadamia Soup&lt;/strong&gt; &amp;mdash;
            roasted butternut with toasted macadamia&lt;/li&gt;
    &lt;/ul&gt;

    &lt;h3&gt;Mains&lt;/h3&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;strong&gt;Pan-Seared Barramundi&lt;/strong&gt; &amp;mdash; with
            lemon butter, asparagus &amp;amp; crushed potatoes&lt;/li&gt;
        &lt;li&gt;&lt;strong&gt;Grass-Fed Ribeye&lt;/strong&gt; &amp;mdash; 300g with
            red wine jus &amp;amp; roasted vegetables&lt;/li&gt;
        &lt;li&gt;&lt;strong&gt;Wild Mushroom Risotto&lt;/strong&gt; &amp;mdash;
            arborio rice with truffle oil &amp;amp; parmesan&lt;/li&gt;
    &lt;/ul&gt;

    &lt;h3&gt;Desserts&lt;/h3&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;strong&gt;Chocolate Lava Cake&lt;/strong&gt; &amp;mdash; with
            vanilla bean ice cream&lt;/li&gt;
        &lt;li&gt;&lt;strong&gt;Pavlova&lt;/strong&gt; &amp;mdash; with seasonal
            berries &amp;amp; passionfruit coulis&lt;/li&gt;
    &lt;/ul&gt;
&lt;/section&gt;</code></pre>

			<CheckpointBox :questions="checkpointHTML" />

			<h3 id="hours-section">Hours &amp; Location</h3>

			<p>A table is the right element when you have rows and columns of related data &mdash; like opening hours:</p>

			<pre><code>&lt;section id="hours"&gt;
    &lt;h2&gt;Hours &amp;amp; Location&lt;/h2&gt;

    &lt;table&gt;
        &lt;thead&gt;
            &lt;tr&gt;
                &lt;th&gt;Day&lt;/th&gt;
                &lt;th&gt;Hours&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
            &lt;tr&gt;
                &lt;td&gt;Monday&lt;/td&gt;
                &lt;td&gt;Closed&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td&gt;Tuesday &amp;ndash; Saturday&lt;/td&gt;
                &lt;td&gt;5:30 pm &amp;ndash; 10:00 pm&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td&gt;Sunday Lunch&lt;/td&gt;
                &lt;td&gt;12:00 pm &amp;ndash; 3:00 pm&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;

    &lt;address&gt;
        123 Gourmet Lane, Elizabeth Quay&lt;br&gt;
        Perth, WA 6000&lt;br&gt;
        &lt;a href="tel:+61893001234"&gt;(08) 9300 1234&lt;/a&gt;&lt;br&gt;
        &lt;a href="mailto:hello@blackswanbistro.com.au"&gt;
            hello@blackswanbistro.com.au&lt;/a&gt;
    &lt;/address&gt;
&lt;/section&gt;</code></pre>

			<div class="notification is-info is-light">
				<p><strong>Why <code>&lt;address&gt;</code>?</strong> The <code>&lt;address&gt;</code> element tells search engines and screen readers &ldquo;this is contact information.&rdquo; It&rsquo;s a small semantic detail that improves accessibility and SEO.</p>
			</div>

			<h3 id="footer-section">Footer</h3>

			<pre><code>&lt;footer&gt;
    &lt;p&gt;&amp;copy; 2025 Black Swan Bistro. All rights reserved.&lt;/p&gt;
    &lt;p&gt;
        &lt;a href="#"&gt;Facebook&lt;/a&gt; |
        &lt;a href="#"&gt;Instagram&lt;/a&gt; |
        &lt;a href="#"&gt;TripAdvisor&lt;/a&gt;
    &lt;/p&gt;
&lt;/footer&gt;</code></pre>

			<p>Save the file and open <code>index.html</code> in your browser. You should see all your content displayed in plain, unstyled HTML &mdash; readable, structured, and semantic. It won&rsquo;t look pretty yet, but every element is in place.</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 3: CSS STYLING                                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="css-styling">Step 3 &mdash; Style with CSS</h2>

			<p>Now let&rsquo;s transform that plain HTML into something that looks like a real restaurant website. Open <code>css/style.css</code> and we&rsquo;ll build the stylesheet section by section.</p>

			<h3 id="css-variables">Colour Variables &amp; Base Styles</h3>

			<p>Start by defining the restaurant&rsquo;s brand colours as CSS custom properties. This means you only need to change one value to update the colour everywhere it&rsquo;s used:</p>

			<pre><code>/* ── Brand colours ─────────────────────────────── */
:root {
    --bistro-burgundy: #7d1c20;
    --bistro-gold: #d4af37;
    --bistro-ink: #2a1c16;
    --bistro-charcoal: #1c1c1c;
    --bistro-cream: #f6f1eb;
    --bistro-smoke: #ede7df;
}

/* ── Base reset &amp; typography ──────────────────── */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Source Sans Pro', Arial, sans-serif;
    color: var(--bistro-ink);
    background-color: var(--bistro-cream);
    line-height: 1.6;
}</code></pre>

			<div class="notification is-warning is-light">
				<p><strong>Why custom properties?</strong> If the client says &ldquo;make the burgundy a bit darker,&rdquo; you change <strong>one line</strong> and every heading, link, and border using <code>var(--bistro-burgundy)</code> updates automatically. This is how professionals manage colours.</p>
			</div>

			<h3 id="css-header">Header &amp; Navigation</h3>

			<pre><code>/* ── Header ────────────────────────────────────── */
header {
    background-color: var(--bistro-charcoal);
    color: #f8f8f8;
    padding: 1.5rem 2rem;
    text-align: center;
}

header h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2.4rem;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
}

/* ── Navigation ───────────────────────────────── */
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: #f8f8f8;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

nav a:hover {
    color: var(--bistro-gold);
}</code></pre>

			<h3 id="css-hero">Hero Section</h3>

			<pre><code>/* ── Hero ──────────────────────────────────────── */
#hero {
    background-color: var(--bistro-burgundy);
    color: #fff;
    text-align: center;
    padding: 4rem 2rem;
}

#hero h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2rem;
    margin-bottom: 1rem;
}

#hero p {
    max-width: 600px;
    margin: 0 auto 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

#hero a {
    display: inline-block;
    padding: 0.75rem 2rem;
    background-color: var(--bistro-gold);
    color: var(--bistro-charcoal);
    text-decoration: none;
    font-weight: 600;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

#hero a:hover {
    background-color: #c9a030;
}</code></pre>

			<h3 id="css-sections">Content Sections</h3>

			<pre><code>/* ── Sections (shared) ─────────────────────────── */
section {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

section h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.8rem;
    color: var(--bistro-burgundy);
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--bistro-gold);
    padding-bottom: 0.5rem;
}

section h3 {
    font-size: 1.3rem;
    color: var(--bistro-charcoal);
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}</code></pre>

			<h3 id="css-menu">Menu List Styling</h3>

			<pre><code>/* ── Menu items ────────────────────────────────── */
#menu ul {
    list-style: none;
    padding: 0;
}

#menu li {
    padding: 0.75rem 0;
    border-bottom: 1px dotted var(--bistro-smoke);
}

#menu li:last-child {
    border-bottom: none;
}</code></pre>

			<h3 id="css-table">Hours Table</h3>

			<pre><code>/* ── Table ─────────────────────────────────────── */
table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
}

th {
    background-color: var(--bistro-burgundy);
    color: #fff;
    padding: 0.75rem 1rem;
    text-align: left;
}

td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--bistro-smoke);
}

tr:nth-child(even) {
    background-color: var(--bistro-smoke);
}

/* ── Address ───────────────────────────────────── */
address {
    font-style: normal;
    line-height: 1.8;
}

address a {
    color: var(--bistro-burgundy);
}</code></pre>

			<h3 id="css-footer">Footer</h3>

			<pre><code>/* ── Footer ────────────────────────────────────── */
footer {
    background-color: var(--bistro-charcoal);
    color: #ccc;
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
}

footer a {
    color: var(--bistro-gold);
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}</code></pre>

			<CheckpointBox :questions="checkpointCSS" />

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 4: RESPONSIVE BASICS                         -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="responsive">Step 4 &mdash; Make It Responsive</h2>

			<p>Your page needs to work on phones too. Add this at the bottom of your stylesheet:</p>

			<pre><code>/* ── Responsive ────────────────────────────────── */
@media (max-width: 700px) {
    header h1 {
        font-size: 1.8rem;
    }

    nav ul {
        flex-direction: column;
        gap: 0.75rem;
    }

    #hero {
        padding: 2.5rem 1rem;
    }

    #hero h2 {
        font-size: 1.5rem;
    }

    section {
        padding: 2rem 1rem;
    }
}</code></pre>

			<p>Save, refresh your browser, and resize the window. The nav should stack vertically on narrow screens, and the text should stay readable at any width.</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- STEP 5: PREVIEW & DEBUG                            -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="preview-debug">Step 5 &mdash; Preview &amp; Debug</h2>

			<p>Before calling this done, run through this quick checklist:</p>

			<div class="box">
				<h3 class="title is-5">Pre-Flight Checklist</h3>
				<ul>
					<li><strong>Open in browser</strong> &mdash; double-click <code>index.html</code> or use VS Code&rsquo;s Live Server extension</li>
					<li><strong>Check DevTools Console</strong> &mdash; press <kbd>F12</kbd> and look for errors (red text). A 404 means a file path is wrong</li>
					<li><strong>Validate your HTML</strong> &mdash; right-click → &ldquo;View Page Source&rdquo; and scan for unclosed tags or typos</li>
					<li><strong>Resize the window</strong> &mdash; does the layout hold up at phone, tablet, and desktop widths?</li>
					<li><strong>Check links</strong> &mdash; click each nav link. They should scroll to the matching section</li>
				</ul>
			</div>

			<div class="notification is-warning is-light">
				<p><strong>Common issues:</strong></p>
				<ul>
					<li><strong>Styles not loading?</strong> Check the <code>&lt;link&gt;</code> tag &mdash; does <code>href="css/style.css"</code> match your actual file path?</li>
					<li><strong>Fonts not changing?</strong> Google Fonts requires an internet connection. We&rsquo;ll add the <code>&lt;link&gt;</code> for Playfair Display in Part 2; for now the fallback serif will kick in.</li>
					<li><strong>Nav links not scrolling?</strong> Make sure each section&rsquo;s <code>id</code> matches the <code>href</code> in the nav (e.g., <code>id="menu"</code> and <code>href="#menu"</code>).</li>
				</ul>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- INDEPENDENT PRACTICE                               -->
			<!-- ═══════════════════════════════════════════════════ -->
			<IndependentPractice
				title="Extend Your Homepage"
				:task="`<p>You&rsquo;ve built the core homepage. Now add <strong>two more features</strong> on your own:</p>
				<ol>
					<li><strong>A &ldquo;Catering&rdquo; section</strong> between About and Menu. Include a heading, a short paragraph about Black Swan Catering for events, and a link that says &ldquo;Enquire Now&rdquo; pointing to <code>#contact</code>.</li>
					<li><strong>A &ldquo;Gallery Preview&rdquo; section</strong> before the footer. Add three placeholder <code>&amp;lt;img&amp;gt;</code> tags with descriptive <code>alt</code> text (the images can be broken for now &mdash; we&rsquo;ll add real images in Part 2). Hint: use <code>&amp;lt;figure&amp;gt;</code> and <code>&amp;lt;figcaption&amp;gt;</code>.</li>
				</ol>`"
				:requirements="[
					'Catering section uses a semantic &lt;section&gt; with an id',
					'Heading hierarchy is correct (h2 for section title, not h1)',
					'Enquire Now link points to #contact',
					'Gallery uses &lt;figure&gt; and &lt;figcaption&gt; elements',
					'All images have descriptive alt text'
				]"
				:stretch-goals="[
					'Add matching CSS styles for both new sections',
					'Add a nav link for the Catering section in the header',
					'Style the gallery images in a row using display: flex'
				]"
				:rubric="[
					{ criteria: 'Catering section uses a semantic &lt;section&gt; with an id', success: 'Section has &lt;section id=catering&gt; wrapping the content' },
					{ criteria: 'Heading hierarchy is correct', success: 'Uses &lt;h2&gt; for the section heading, not &lt;h1&gt;' },
					{ criteria: 'Gallery uses &lt;figure&gt; and &lt;figcaption&gt;', success: 'Each image is wrapped in &lt;figure&gt; with a &lt;figcaption&gt; caption' },
					{ criteria: 'New sections have matching CSS styles', success: 'Styles follow the same pattern as existing sections' }
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- WHAT YOU'VE BUILT                                  -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="what-youve-built">What You&rsquo;ve Built</h2>

			<p>Take a moment to appreciate what you&rsquo;ve accomplished. You now have:</p>

			<div class="box">
				<ul>
					<li>A <strong>properly structured project folder</strong> with separated HTML, CSS, JS, and images</li>
					<li>A <strong>semantic HTML homepage</strong> with header, nav, hero, about, menu, hours table, address, and footer</li>
					<li>A <strong>CSS stylesheet</strong> with custom properties, typography, layout, and a responsive media query</li>
					<li>A page that works on <strong>desktop and mobile</strong></li>
				</ul>
			</div>

			<h3>Coming Up in Part 2</h3>

			<p>In <strong>Part 2 &mdash; Layout &amp; Sections</strong>, you&rsquo;ll take this single-column page and give it a professional multi-section layout using CSS Flexbox. You&rsquo;ll add Google Fonts, images, and refine the spacing and visual hierarchy.</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CLOSURE                                            -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="summary">Summary</h2>

			<ClosureSection
				title="🏁 Part 1 Complete: Your First Web Page"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				:real-world-application="`<p><strong>Every real website follows this same process:</strong></p><ol><li>Set up a project folder with clear structure</li><li>Write semantic HTML with proper heading hierarchy</li><li>Link a stylesheet and define brand colours as variables</li><li>Test in the browser and fix issues with DevTools</li></ol><p>You&rsquo;ve just done all four. This is genuinely how professional web developers start every project.</p>`"
				:next-steps="`<p>In <strong>Part 2</strong>, you&rsquo;ll transform this single-column page into a proper layout with Flexbox, add images, integrate Google Fonts, and refine the visual design. Your Black Swan Bistro site is just getting started!</p>`"
			/>

			<TutorialRecommendations current-path="/tutorials/beginner/black-swan-bistro-part-1" />

			<TutorialCompletion tutorial-path="/tutorials/beginner/black-swan-bistro-part-1" />
		</div>
	</div>
</template>

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
import TutorialCompletion from '@/components/TutorialCompletion.vue';

useTutorialHead({
  title: "Black Swan Bistro — Part 1",
  description: "Build your first web page — write semantic HTML and add CSS styling in this hands-on beginner project.",
  path: "/tutorials/beginner/black-swan-bistro-part-1",
});

// ── Sidebar sections ─────────────────────────────────────────────
usePageSections([
	{ id: 'project-setup', label: 'Step 1 — Project Setup' },
	{ id: 'html-structure', label: 'Step 2 — Build the HTML' },
	{ id: 'css-styling', label: 'Step 3 — Style with CSS' },
	{ id: 'responsive', label: 'Step 4 — Responsive' },
	{ id: 'preview-debug', label: 'Step 5 — Preview & Debug' },
	{ id: 'what-youve-built', label: 'What You\'ve Built' },
	{ id: 'summary', label: 'Summary' },
]);

// ── Guided Practice: Project Setup ────────────────────────────────
const setupSteps = [
	{
		title: 'Navigate to your projects folder',
		instructions: '<p>Open your terminal and navigate to the folder where your web projects live:</p><pre><code># macOS\ncd ~/Sites\n\n# Windows (Command Prompt)\ncd %USERPROFILE%\\Projects\n\n# Linux\ncd ~/projects</code></pre><p>If the folder doesn\u2019t exist yet, create it first:</p><pre><code># macOS\nmkdir -p ~/Sites && cd ~/Sites\n\n# Windows (Command Prompt)\nmkdir %USERPROFILE%\\Projects && cd %USERPROFILE%\\Projects\n\n# Linux\nmkdir -p ~/projects && cd ~/projects</code></pre>',
		hints: ['Pick one location for all your web projects and stick with it. You\u2019ll always know where to find your work.'],
	},
	{
		title: 'Create the project folder',
		instructions: '<p>Now create the project folder and move into it:</p><pre><code>mkdir black-swan-bistro\ncd black-swan-bistro</code></pre><p>Or create a new folder called <code>black-swan-bistro</code> in Finder / File Explorer.</p>',
		hints: ['Keep the name all lowercase with hyphens \u2014 no spaces, no capitals.'],
	},
	{
		title: 'Create subfolders',
		instructions: '<p>Inside your project folder, create three subfolders:</p><pre><code>mkdir css js images</code></pre><p>In VS Code you can right-click in the Explorer panel \u2192 New Folder.</p>',
		hints: ['These three folders are the standard convention used by virtually every web project.'],
	},
	{
		title: 'Create the core files',
		instructions: '<p>Create the starter files in their correct locations:</p><pre><code>touch index.html css/style.css js/main.js</code></pre><p>Or right-click the appropriate folder in VS Code \u2192 New File.</p>',
		hints: ['Make sure style.css goes inside the css/ folder, not in the project root.'],
	},
	{
		title: 'Open in VS Code',
		instructions: '<p>Open the project folder in VS Code:</p><pre><code>code .</code></pre><p>Or launch VS Code and go to <strong>File \u2192 Open Folder\u2026</strong>, then navigate to your <code>black-swan-bistro</code> folder (e.g. <code>~/Sites/black-swan-bistro</code> on Mac).</p><p>You should see all three subfolders and your files in the Explorer sidebar on the left. If the sidebar isn\u2019t visible, press <kbd>Cmd+B</kbd> (Mac) or <kbd>Ctrl+B</kbd> (Windows/Linux) to toggle it.</p>',
		hints: ['If the "code" command doesn\u2019t work, open VS Code first, then use File \u2192 Open Folder. You can also drag the folder onto the VS Code icon.'],
	},
];

// ── Checkpoint: File Setup ────────────────────────────────────────
const checkpointSetup = [
	{
		question: 'Why is the homepage called index.html and not home.html?',
		answer: 'Web servers look for index.html by default. When someone visits your domain without specifying a filename, the server automatically serves index.html.',
	},
	{
		question: 'What are the three standard subfolders and what goes in each?',
		answer: 'css/ for stylesheets, js/ for JavaScript files, and images/ for pictures, icons, and graphics.',
	},
	{
		question: 'Why do we use lowercase names with hyphens (e.g., black-swan-bistro)?',
		answer: 'URLs are case-sensitive on most servers. Spaces cause problems in URLs (they become %20). Hyphens are readable and safe across all operating systems and web servers.',
	},
];

// ── Checkpoint: HTML ──────────────────────────────────────────────
const checkpointHTML = [
	{
		question: 'What is the difference between <section> and <div>?',
		answer: 'A <section> is a semantic element — it tells browsers and screen readers "this is a distinct section of content." A <div> has no meaning; it\'s just a generic container. Use <section> when the content represents a thematic grouping.',
	},
	{
		question: 'Why do we use <strong> for menu item names instead of <b>?',
		answer: '<strong> means "this content is important" — screen readers will emphasise it. <b> just makes text bold visually without conveying any meaning. Semantic HTML uses <strong> for importance.',
	},
	{
		question: 'What does the id attribute on a <section> do?',
		answer: 'It gives the section a unique identifier. Navigation links can point to it using href="#id" to scroll the user directly to that section. Each id must be unique on the page.',
	},
];

// ── Checkpoint: CSS ───────────────────────────────────────────────
const checkpointCSS = [
	{
		question: 'What advantage do CSS custom properties (variables) give you over hard-coded colour values?',
		answer: 'You define a colour once in :root and reference it everywhere with var(). To change the brand colour, you update one line instead of hunting through the entire stylesheet.',
	},
	{
		question: 'Why does the nav use display: flex and gap instead of float?',
		answer: 'Flexbox handles horizontal spacing cleanly — items auto-centre, gap adds even spacing, and it\'s easy to switch to vertical stacking on mobile. Float-based navigation requires clearfix hacks and is harder to maintain.',
	},
	{
		question: 'What does box-sizing: border-box do, and why set it on every element?',
		answer: 'It makes width and height include padding and border, so a 300px-wide element stays 300px even when you add padding. Without it, padding increases the total size, which breaks layouts.',
	},
];

// ── Closure ───────────────────────────────────────────────────────
const closureKeyTakeaways = [
	'Every web project starts with a clean folder structure: index.html at the root, css/, js/, and images/ subfolders.',
	'Semantic HTML (\u003Cheader\u003E, \u003Cnav\u003E, \u003Csection\u003E, \u003Cfooter\u003E, \u003Caddress\u003E) communicates meaning to browsers, screen readers, and search engines.',
	'CSS custom properties (--bistro-burgundy) let you manage brand colours from a single place.',
	'A mobile-friendly @media query ensures your page works on any device.',
	'DevTools (F12) is your debugging partner — always check the Console for errors.',
];

const closureObjectives = [
	'Set up a project folder with proper structure',
	'Write a semantic HTML homepage from scratch',
	'Use headings, paragraphs, lists, links, a table, and address',
	'Create a linked CSS stylesheet with variables and layout',
	'Preview and debug in a browser',
];

const closureReflectionPrompts = [
	{
		title: 'Building from Scratch',
		icon: '🏗️',
		questions: [
			'What was the most surprising thing about building a real page from scratch?',
			'Which step felt most natural? Which felt hardest?',
		],
	},
	{
		title: 'HTML & CSS Together',
		icon: '🎨',
		questions: [
			'Which HTML element did you find most useful? Which felt unfamiliar?',
			'How did adding CSS change your perception of the plain HTML page?',
		],
	},
	{
		title: 'Next Steps',
		icon: '🚀',
		questions: [
			'If you were building this for a real restaurant, what would you add next?',
		],
	},
];
</script>
