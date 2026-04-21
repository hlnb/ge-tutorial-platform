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
					<li>
						<router-link to="/tutorials/beginner">Beginner</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Why Your CSS Isn&rsquo;t Working</a>
					</li>
				</ul>
			</nav>

			<!-- Tutorial Metadata -->
			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-success">Beginner</span>
					<span class="tag is-light">30 minutes</span>
					<span class="tag is-light">CSS</span>
					<span class="tag is-light">Troubleshooting</span>
				</div>
			</div>

			<h1 class="title is-1">Why Your CSS Isn&rsquo;t Working (And How to Fix It)</h1>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 1: ANTICIPATORY SET                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<AnticipatorySet
				title="You Wrote the CSS. Nothing Changed."
				icon="🤔"
				:hook="`<p>You&rsquo;ve carefully written a CSS rule. You save the file. You switch to the browser and hit refresh. And&hellip; nothing. The page looks exactly the same. No error message. No warning. Just silence.</p><p>This is one of the most frustrating experiences in web development &mdash; and it happens to <em>everyone</em>, from first-day beginners to senior engineers. CSS fails silently. When something is wrong, the browser doesn&rsquo;t shout at you the way JavaScript does. It just quietly ignores the broken rule and moves on.</p><p>The good news? There are only a handful of reasons CSS doesn&rsquo;t work, and once you know what they are, you can diagnose any problem in under a minute.</p>`"
				:reflection-prompts="[
					'Have you ever changed a CSS property and refreshed the page, only to see nothing happen?',
					'Do you know how to check whether your browser is actually loading your stylesheet?',
					'If two CSS rules target the same element, how does the browser decide which one wins?'
				]"
				connection="In the next 30 minutes, you&rsquo;ll learn the most common reasons CSS breaks &mdash; and build a systematic debugging checklist you can use every time something doesn&rsquo;t look right."
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 2: LEARNING OBJECTIVES             -->
			<!-- ═══════════════════════════════════════════════════ -->
			<LearningObjectives
				:objectives="[
					'Identify the most common reasons CSS rules are ignored by the browser',
					'Diagnose CSS syntax errors including missing brackets, colons, and semicolons',
					'Explain how specificity and the cascade determine which styles win',
					'Use browser DevTools to inspect, toggle, and edit CSS rules in real time',
					'Apply a systematic debugging checklist to fix broken styles quickly'
				]"
				purpose="Professional developers spend a surprising amount of time debugging CSS. The difference between a beginner and an expert isn&rsquo;t that experts never have CSS problems &mdash; it&rsquo;s that they can find and fix them in seconds. This tutorial gives you the same mental checklist that experienced developers use, so you stop guessing and start diagnosing."
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CONTENT SECTION 1: Is Your CSS Even Loading?      -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="css-loading">Is Your CSS Even Loading?</h2>

			<p>Before you blame your rules, make sure the browser is actually reading your stylesheet. This is the number one cause of &ldquo;my CSS isn&rsquo;t working&rdquo; for beginners &mdash; and it&rsquo;s the easiest to fix.</p>

			<h3>Check 1: Is the &lt;link&gt; tag in your HTML?</h3>

			<p>Your HTML file needs a <code>&lt;link&gt;</code> element in the <code>&lt;head&gt;</code> that points to your stylesheet:</p>

			<pre><code>&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;My Page&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt;</code></pre>

			<p>If this line is missing, your CSS file exists but the browser has no idea it&rsquo;s there. It&rsquo;s like writing a letter and never posting it.</p>

			<h3>Check 2: Is the file path correct?</h3>

			<p>The <code>href</code> must match the actual location of your CSS file. If your stylesheet is in a <code>css/</code> folder, the path needs to include that folder:</p>

			<div class="columns mt-4">
				<div class="column">
					<div class="box" style="border-left: 4px solid #48c774;">
						<h4><i class="fas fa-check mr-2" style="color: #48c774;"></i>Correct</h4>
						<pre><code>&lt;!-- File is at css/style.css --&gt;
&lt;link rel="stylesheet"
      href="css/style.css"&gt;

&lt;!-- File is in the same folder --&gt;
&lt;link rel="stylesheet"
      href="style.css"&gt;</code></pre>
					</div>
				</div>
				<div class="column">
					<div class="box" style="border-left: 4px solid #f14668;">
						<h4><i class="fas fa-times mr-2" style="color: #f14668;"></i>Wrong</h4>
						<pre><code>&lt;!-- File is at css/style.css
     but path says root --&gt;
&lt;link rel="stylesheet"
      href="style.css"&gt;

&lt;!-- Typo in folder name --&gt;
&lt;link rel="stylesheet"
      href="CSS/styles.css"&gt;</code></pre>
					</div>
				</div>
			</div>

			<div class="box" style="border-left: 4px solid #ffdd57;">
				<h4><i class="fas fa-exclamation-triangle mr-2" style="color: #ffdd57;"></i>Case matters on servers</h4>
				<p><code>style.css</code> and <code>Style.css</code> are the same file on your Mac &mdash; but on a Linux web server, they&rsquo;re two different files. Always use lowercase filenames.</p>
			</div>

			<h3>Check 3: Browser cache</h3>

			<p>Browsers cache (save a copy of) your CSS to load pages faster. When you edit your stylesheet and refresh, you might be seeing the <em>old</em> cached version.</p>

			<p><strong>Fix:</strong> Do a hard refresh:</p>

			<ul>
				<li><strong>Mac:</strong> <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd></li>
				<li><strong>Windows/Linux:</strong> <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd></li>
			</ul>

			<p>Or open DevTools (F12), go to the <strong>Network</strong> tab, and tick <strong>&ldquo;Disable cache&rdquo;</strong> while DevTools is open.</p>

			<div class="box analogy-box">
				<strong><i class="fas fa-lightbulb mr-2"></i>Think of caching like a photocopy:</strong>
				<p>The browser takes a photocopy of your stylesheet and uses that instead of checking the original file every time. A hard refresh forces it to throw away the photocopy and look at the real file again.</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CONTENT SECTION 2: Syntax Errors                  -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="syntax-errors">Syntax Errors: The Silent Breakers</h2>

			<p>CSS doesn&rsquo;t throw error messages like JavaScript. If you make a syntax mistake, the browser silently skips the broken rule &mdash; and sometimes everything that comes after it.</p>

			<h3>Missing curly brackets</h3>

			<p>If you forget a closing <code>}</code>, the browser can&rsquo;t tell where your rule ends. <strong>Every rule below the missing bracket may also break.</strong></p>

			<div class="columns mt-4">
				<div class="column">
					<div class="box" style="border-left: 4px solid #48c774;">
						<h4><i class="fas fa-check mr-2" style="color: #48c774;"></i>Correct</h4>
						<pre><code>h1 {
    color: navy;
    font-size: 2rem;
}

p {
    line-height: 1.6;
}</code></pre>
					</div>
				</div>
				<div class="column">
					<div class="box" style="border-left: 4px solid #f14668;">
						<h4><i class="fas fa-times mr-2" style="color: #f14668;"></i>Broken</h4>
						<pre><code>h1 {
    color: navy;
    font-size: 2rem;

/* Missing } above!
   The p rule gets swallowed */
p {
    line-height: 1.6;
}</code></pre>
					</div>
				</div>
			</div>

			<h3>Missing colons and semicolons</h3>

			<p>Every CSS declaration needs a colon between the property and value, and a semicolon at the end:</p>

			<pre><code>/* ✅ Correct */
color: navy;
font-size: 2rem;

/* ❌ Missing colon */
color navy;

/* ❌ Missing semicolon */
color: navy
font-size: 2rem</code></pre>

			<p>A missing semicolon can cause the next property to be treated as part of the current value &mdash; the browser sees <code>color: navy font-size: 2rem</code> as one invalid value and ignores both.</p>

			<h3>Space between value and unit</h3>

			<p>This one catches people all the time:</p>

			<pre><code>/* ✅ Works */
font-size: 26px;
margin: 1.5rem;

/* ❌ Broken — space between number and unit */
font-size: 26 px;
margin: 1.5 rem;</code></pre>

			<p>CSS requires the number and unit to be one continuous token. A space between them makes the value invalid, and the rule is silently ignored.</p>

			<div class="box highlight-box">
				<strong><i class="fas fa-info-circle mr-2"></i>Why doesn&rsquo;t CSS show error messages?</strong>
				<p>CSS was designed to be <strong>forward-compatible</strong>. When browsers encounter a property or value they don&rsquo;t understand, they skip it instead of crashing. This means new CSS features can be added without breaking old browsers &mdash; but it also means your typos get silently ignored instead of flagged.</p>
			</div>

			<CheckpointBox
				title="⏸️ Check: Loading &amp; Syntax"
				description="Can you spot the problems?"
				:questions="checkpointLoading"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CONTENT SECTION 3: Selector Issues                -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="selector-issues">Selector Issues: Targeting the Wrong Thing</h2>

			<p>Your CSS might be perfectly valid, but if the selector doesn&rsquo;t match any element in your HTML, the rule has nothing to style.</p>

			<h3>Typos in class and ID names</h3>

			<p>This is embarrassingly common &mdash; and hard to spot because CSS gives you no warning:</p>

			<pre><code>&lt;!-- HTML --&gt;
&lt;div class="hero-banner"&gt;...&lt;/div&gt;

/* CSS — typo! "heros" instead of "hero" */
.heros-banner {
    background: navy;
}</code></pre>

			<p>The selector <code>.heros-banner</code> matches nothing, so the rule is silently ignored. Always copy-paste class names from your HTML into your CSS to avoid this.</p>

			<h3>Forgetting the dot or hash</h3>

			<pre><code>/* ❌ Targets an element called &lt;hero-banner&gt;
   (which doesn't exist) */
hero-banner {
    background: navy;
}

/* ✅ Targets class="hero-banner" */
.hero-banner {
    background: navy;
}

/* ✅ Targets id="hero-banner" */
#hero-banner {
    background: navy;
}</code></pre>

			<h3>Invalid selector lists</h3>

			<p>If you group selectors with commas and <em>one</em> of them is invalid, <strong>the entire rule is ignored</strong> in standard CSS:</p>

			<pre><code>/* ❌ :invalid-pseudo doesn't exist
   — the ENTIRE rule is thrown out */
h1, h2, :invalid-pseudo {
    color: navy;
}

/* ✅ Split them so a bad selector
   doesn't break the good ones */
h1, h2 {
    color: navy;
}</code></pre>

			<div class="box" style="border-left: 4px solid #ffdd57;">
				<h4><i class="fas fa-exclamation-triangle mr-2" style="color: #ffdd57;"></i>Copy-paste is your friend</h4>
				<p>Instead of retyping class names, <strong>copy</strong> the class name from your HTML and <strong>paste</strong> it into your CSS. This eliminates typo-based selector mismatches instantly.</p>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CONTENT SECTION 4: Specificity & the Cascade      -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="specificity-cascade">Specificity &amp; the Cascade</h2>

			<p>This is where beginners get stuck the most. You write a rule, the selector is correct, the syntax is perfect &mdash; but the browser is applying a <em>different</em> rule instead. Why?</p>

			<h3>The cascade: last rule wins</h3>

			<p>When two rules have the same specificity and target the same element, the one that appears <strong>later</strong> in the stylesheet wins:</p>

			<pre><code>h1 {
    color: red;
}

/* This one wins — it comes later */
h1 {
    color: blue;
}</code></pre>

			<h3>Specificity: more specific rules win</h3>

			<p>But when rules have <em>different</em> specificity, the more specific one wins regardless of order. Think of specificity as a scoring system:</p>

			<div class="box highlight-box">
				<strong><i class="fas fa-info-circle mr-2"></i>Specificity scoring (simplified)</strong>
				<table class="table is-fullwidth mt-2">
					<thead>
						<tr>
							<th>Selector Type</th>
							<th>Score</th>
							<th>Example</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Element</td>
							<td>1 point</td>
							<td><code>p</code>, <code>h1</code>, <code>div</code></td>
						</tr>
						<tr>
							<td>Class</td>
							<td>10 points</td>
							<td><code>.hero</code>, <code>.nav-link</code></td>
						</tr>
						<tr>
							<td>ID</td>
							<td>100 points</td>
							<td><code>#header</code>, <code>#main</code></td>
						</tr>
						<tr>
							<td>Inline style</td>
							<td>1000 points</td>
							<td><code>style="color: red"</code></td>
						</tr>
					</tbody>
				</table>
			</div>

			<pre><code>/* Specificity: 1 (one element) */
p {
    color: black;
}

/* Specificity: 10 (one class) — WINS */
.intro {
    color: navy;
}

/* Specificity: 11 (one element + one class) */
p.intro {
    color: red;
}</code></pre>

			<p>A class selector (<code>.intro</code>) always beats a plain element selector (<code>p</code>), no matter which comes first in the file.</p>

			<div class="box analogy-box">
				<strong><i class="fas fa-lightbulb mr-2"></i>Think of specificity like an address:</strong>
				<p>&ldquo;Deliver this to <em>any house</em> on the street&rdquo; (element selector) is vague. &ldquo;Deliver to <em>the blue house</em>&rdquo; (class) is more specific. &ldquo;Deliver to <em>42 Smith Street</em>&rdquo; (ID) is exact. The more specific instruction always wins.</p>
			</div>

			<h3>The <code>!important</code> trap</h3>

			<p>You might see advice to add <code>!important</code> to force a rule to win:</p>

			<pre><code>p {
    color: red !important;
}</code></pre>

			<p>This works &mdash; but it&rsquo;s a trap. Once you start using <code>!important</code>, the only way to override <em>that</em> rule is with <em>another</em> <code>!important</code>, and soon your stylesheet becomes an unmanageable mess. Professional developers treat <code>!important</code> as a last resort, not a first fix.</p>

			<div class="box" style="border-left: 4px solid #f14668;">
				<h4><i class="fas fa-ban mr-2" style="color: #f14668;"></i>Instead of <code>!important</code>:</h4>
				<ol>
					<li>Make your selector <strong>more specific</strong> (add a class or parent selector)</li>
					<li>Move the rule <strong>later</strong> in the stylesheet</li>
					<li>Remove the conflicting rule that&rsquo;s winning</li>
				</ol>
			</div>

			<CheckpointBox
				title="⏸️ Check: Selectors &amp; Specificity"
				description="Test your understanding:"
				:questions="checkpointSpecificity"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CONTENT SECTION 5: Inheritance & Conflicts        -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="inheritance-conflicts">Inheritance &amp; Third-Party Conflicts</h2>

			<p>Some CSS properties are <strong>inherited</strong> &mdash; child elements automatically pick up the value from their parent. Others are not.</p>

			<h3>What inherits and what doesn&rsquo;t</h3>

			<div class="columns mt-4">
				<div class="column">
					<div class="box" style="border-left: 4px solid #48c774;">
						<h4><i class="fas fa-check mr-2" style="color: #48c774;"></i>Inherited</h4>
						<ul>
							<li><code>color</code></li>
							<li><code>font-family</code></li>
							<li><code>font-size</code></li>
							<li><code>line-height</code></li>
							<li><code>text-align</code></li>
						</ul>
						<p class="mt-2"><em>Set these on a parent and children get them for free.</em></p>
					</div>
				</div>
				<div class="column">
					<div class="box" style="border-left: 4px solid #3298dc;">
						<h4><i class="fas fa-info-circle mr-2" style="color: #3298dc;"></i>NOT inherited</h4>
						<ul>
							<li><code>background</code></li>
							<li><code>border</code></li>
							<li><code>margin</code></li>
							<li><code>padding</code></li>
							<li><code>width</code> / <code>height</code></li>
						</ul>
						<p class="mt-2"><em>You must set these on each element individually.</em></p>
					</div>
				</div>
			</div>

			<h3>Third-party CSS conflicts</h3>

			<p>If you&rsquo;re using a CSS framework (Bootstrap, Bulma, Tailwind) or a CMS theme, their styles load <em>alongside</em> yours. When your rules don&rsquo;t seem to take effect, the framework&rsquo;s rules are probably winning the specificity battle.</p>

			<pre><code>/* Bulma's button styles might be:
   .button { background-color: white; }
   Specificity: 10

   Your override needs at least the same specificity: */
.button.my-custom-button {
    background-color: navy;
}
/* Specificity: 20 — wins! */</code></pre>

			<p><strong>Tip:</strong> In DevTools, look for rules with a line-through &mdash; that means they&rsquo;re being overridden by a more specific rule. The winning rule is shown above it.</p>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CONTENT SECTION 6: Browser DevTools               -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="devtools">Browser DevTools: Your CSS Debugger</h2>

			<p>DevTools is the single most valuable tool for debugging CSS. Every browser has them built in &mdash; no installation required.</p>

			<h3>Opening DevTools</h3>

			<ul>
				<li><strong>All browsers:</strong> Press <kbd>F12</kbd> or right-click any element &rarr; <strong>Inspect</strong></li>
				<li><strong>Mac shortcut:</strong> <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>I</kbd></li>
				<li><strong>Windows/Linux:</strong> <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd></li>
			</ul>

			<h3>The Elements panel</h3>

			<p>The Elements panel shows your HTML on the left and the CSS rules for the selected element on the right. This is where you&rsquo;ll do most of your debugging.</p>

			<h3>Key debugging techniques</h3>

			<ol>
				<li>
					<strong>Inspect the element</strong> &mdash; Right-click the problem element &rarr; Inspect. The Styles panel shows every CSS rule that applies.
				</li>
				<li>
					<strong>Look for crossed-out rules</strong> &mdash; A line through a property means it&rsquo;s being <strong>overridden</strong> by another rule. Look above it to see what&rsquo;s winning.
				</li>
				<li>
					<strong>Toggle rules on/off</strong> &mdash; Click the checkbox next to any property to disable it temporarily. This is the fastest way to find which rule is causing a problem.
				</li>
				<li>
					<strong>Edit values live</strong> &mdash; Click on any value (e.g. <code>navy</code>) and type a new one. The page updates instantly. This lets you experiment without touching your file.
				</li>
				<li>
					<strong>Check the Computed tab</strong> &mdash; This shows the <em>final</em> value the browser is actually using, after all cascade and inheritance calculations.
				</li>
			</ol>

			<div class="box analogy-box">
				<strong><i class="fas fa-lightbulb mr-2"></i>DevTools is like an X-ray for your page:</strong>
				<p>It lets you see inside the page &mdash; which rules are applied, which are overridden, and exactly why. If CSS is the clothes your page wears, DevTools lets you see the skeleton underneath.</p>
			</div>

			<h3>The outline trick for layout debugging</h3>

			<p>If an element seems to be the wrong size or in the wrong place, try adding a temporary outline to <em>everything</em>:</p>

			<pre><code>/* Add this temporarily */
* {
    outline: 1px solid red;
}</code></pre>

			<p>This draws a red border around every element so you can see their boundaries. Unlike <code>border</code>, <code>outline</code> doesn&rsquo;t affect the element&rsquo;s size or layout, so it won&rsquo;t change what you&rsquo;re debugging.</p>

			<CheckpointBox
				title="⏸️ Check: DevTools"
				description="Make sure you know the essentials:"
				:questions="checkpointDevTools"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CONTENT SECTION 7: Layout Gotchas                 -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="layout-gotchas">Layout Gotchas</h2>

			<p>Some CSS problems aren&rsquo;t about individual properties &mdash; they&rsquo;re about how elements interact with each other in the layout.</p>

			<h3>Overflow issues</h3>

			<p>If content is spilling outside its container or a horizontal scrollbar appears, check for:</p>

			<ul>
				<li>Fixed-width elements inside a flexible container</li>
				<li>Images wider than their parent (fix: <code>img { max-width: 100%; }</code>)</li>
				<li>Padding or borders adding to the element&rsquo;s total width (fix: <code>box-sizing: border-box</code>)</li>
			</ul>

			<h3>Collapsed margins</h3>

			<p>When two vertical margins touch, they don&rsquo;t add up &mdash; the larger one wins. This is called <strong>margin collapsing</strong> and it catches everyone off guard:</p>

			<pre><code>/* You'd expect 40px of space between them.
   You actually get 30px (the larger margin wins). */
h1 {
    margin-bottom: 20px;
}
p {
    margin-top: 30px;
}</code></pre>

			<h3>Z-index confusion</h3>

			<p><code>z-index</code> only works on elements with a <code>position</code> value other than <code>static</code>. This is the most common reason z-index &ldquo;doesn&rsquo;t work&rdquo;:</p>

			<pre><code>/* ❌ Won't work — no position set */
.popup {
    z-index: 999;
}

/* ✅ Works — position is set */
.popup {
    position: relative;
    z-index: 999;
}</code></pre>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- CONTENT SECTION 8: Debugging Checklist            -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="debugging-checklist">Your CSS Debugging Checklist</h2>

			<p>When your CSS isn&rsquo;t working, run through this checklist in order. Most problems are found in the first three steps:</p>

			<div class="box" style="border-left: 4px solid #48c774;">
				<h4><i class="fas fa-clipboard-check mr-2" style="color: #48c774;"></i>The Checklist</h4>
				<ol>
					<li><strong>Is the stylesheet linked?</strong> &mdash; Check the <code>&lt;link&gt;</code> tag in your HTML <code>&lt;head&gt;</code></li>
					<li><strong>Is the file path correct?</strong> &mdash; Check for typos and wrong folder paths</li>
					<li><strong>Is it cached?</strong> &mdash; Do a hard refresh (<kbd>Cmd/Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>)</li>
					<li><strong>Any syntax errors?</strong> &mdash; Check for missing <code>{}</code>, <code>:</code>, and <code>;</code></li>
					<li><strong>Does the selector match?</strong> &mdash; Check class/ID spelling, dots, and hashes</li>
					<li><strong>Is it being overridden?</strong> &mdash; Open DevTools and look for crossed-out rules</li>
					<li><strong>Is specificity losing?</strong> &mdash; Make your selector more specific</li>
					<li><strong>Is it inherited or not?</strong> &mdash; Check whether the property inherits</li>
					<li><strong>Browser compatibility?</strong> &mdash; Check MDN for browser support</li>
				</ol>
			</div>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 4: GUIDED PRACTICE                 -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="guided-practice">Guided Practice: Fix These Broken Styles</h2>

			<div class="notification is-info is-light">
				<p><strong><i class="fas fa-download"></i> Download the starter files:</strong></p>
				<ul>
					<li><a href="/projects/css-debugging/guided-practice/debug-practice.html" download>debug-practice.html</a></li>
					<li><a href="/projects/css-debugging/guided-practice/css/debug.css" download>css/debug.css</a></li>
				</ul>
				<p class="mt-2">Save both files to a folder on your computer (keep the <code>css/</code> subfolder structure).</p>
			</div>

			<GuidedPractice
				title="Debug a Broken Stylesheet"
				description="You&rsquo;ve been given a webpage with CSS that isn&rsquo;t working. Use your debugging checklist to find and fix each issue."
				:steps="guidedPracticeSteps"
				:success-criteria="[
					'All headings are styled with the correct colours',
					'The navigation links appear horizontally',
					'The hero section has its background colour',
					'No CSS rules are being silently ignored',
					'You can explain why each fix works'
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 6: INDEPENDENT PRACTICE            -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="independent-practice">Independent Challenge: CSS Detective</h2>

			<div class="notification is-warning is-light">
				<p><strong><i class="fas fa-download"></i> Download the challenge files:</strong></p>
				<ul>
					<li><a href="/projects/css-debugging/independent-practice/detective-challenge.html" download>detective-challenge.html</a></li>
					<li><a href="/projects/css-debugging/independent-practice/css/detective.css" download>css/detective.css</a></li>
				</ul>
				<p class="mt-2">This page has <strong>7 bugs</strong> hidden in the CSS. Save both files and use DevTools to find and fix them all.</p>
			</div>

			<IndependentPractice
				title="CSS Detective: Find All the Bugs"
				task="You&rsquo;ve been hired to fix a client&rsquo;s website. Their stylesheet has <strong>7 different CSS problems</strong> &mdash; a mix of loading issues, syntax errors, selector problems, and specificity conflicts. Create a simple HTML page with an intentionally broken stylesheet, then systematically find and fix each bug using DevTools and the debugging checklist."
				:requirements="[
					'Create an HTML page with at least a header, nav, hero section, and footer',
					'Write a CSS file with at least 7 intentional bugs (mix of categories from this tutorial)',
					'Include at least one missing-bracket error that breaks rules below it',
					'Include at least one selector typo (class name mismatch)',
					'Include at least one specificity conflict where the wrong rule wins',
					'Use DevTools to identify each bug before fixing it',
					'Document each bug you planted and how you fixed it in an HTML comment'
				]"
				:stretch-goals="[
					'Add a third-party CSS file (like a simple reset) and create a conflict that your custom styles need to override',
					'Use the browser Computed tab to trace an inherited property through three levels of nesting',
					'Create a z-index bug and fix it by adding the correct position property'
				]"
				:rubric="[
					{ criteria: '7+ intentional bugs covering at least 3 categories', success: 'Meets expectations' },
					{ criteria: 'Each bug is documented with the fix in a comment', success: 'Meets expectations' },
					{ criteria: 'DevTools was used (not just guessing) to diagnose', success: 'Meets expectations' },
					{ criteria: 'Stretch goals attempted — third-party conflict or z-index fix', success: 'Exceeds expectations' },
					{ criteria: 'Clean, well-organised final stylesheet after all fixes', success: 'Exceeds expectations' }
				]"
			/>

			<!-- ═══════════════════════════════════════════════════ -->
			<!-- HUNTER ELEMENT 8: CLOSURE                         -->
			<!-- ═══════════════════════════════════════════════════ -->
			<h2 id="summary">Summary</h2>

			<ClosureSection
				title="🏁 Lesson Complete: You Can Debug CSS"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				:real-world-application="closureRealWorld"
				:next-steps="closureNextSteps"
			/>

			<TutorialRecommendations current-path="/tutorials/beginner/why-your-css-isnt-working" />
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

useTutorialHead({
  title: "Why Your CSS Isn't Working",
  description: "Debug CSS that won't apply — understand cascade, specificity, and inheritance with a step-by-step troubleshooting checklist.",
  path: "/tutorials/beginner/why-your-css-isnt-working",
});

// ── Sidebar sections ─────────────────────────────────────────────
usePageSections([
	{ id: 'css-loading', title: 'Is Your CSS Loading?' },
	{ id: 'syntax-errors', title: 'Syntax Errors' },
	{ id: 'selector-issues', title: 'Selector Issues' },
	{ id: 'specificity-cascade', title: 'Specificity & Cascade' },
	{ id: 'inheritance-conflicts', title: 'Inheritance & Conflicts' },
	{ id: 'devtools', title: 'Browser DevTools' },
	{ id: 'layout-gotchas', title: 'Layout Gotchas' },
	{ id: 'debugging-checklist', title: 'Debugging Checklist' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Challenge' },
	{ id: 'summary', title: 'Summary' },
]);

// ── Checkpoint: Loading & Syntax ──────────────────────────────────
const checkpointLoading = [
	{
		question: 'Your page has no styles at all. What is the very first thing you should check?',
		answer: 'Check that the \u003Clink\u003E tag is in the \u003Chead\u003E of your HTML and that the href path is correct. If the stylesheet isn\u2019t linked, the browser has no idea it exists.',
	},
	{
		question: 'You edited your CSS but the page still looks the same after refreshing. What could cause this?',
		answer: 'Browser caching. The browser is showing you the old saved version of your stylesheet. Do a hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows/Linux) to force it to re-download the file.',
	},
	{
		question: 'What happens when you forget a closing curly bracket } in CSS?',
		answer: 'The browser can\u2019t tell where the rule ends, so it swallows everything that follows until it finds another closing bracket. This can break multiple rules below the mistake, not just the one with the error.',
	},
];

// ── Checkpoint: Selectors & Specificity ──────────────────────────
const checkpointSpecificity = [
	{
		question: 'You wrote .hero { color: red; } but the text stays black. In DevTools, you see that p { color: black; } has a line through it and body { color: black; } does not. What\u2019s happening?',
		answer: 'The colour is being inherited from body, not from a p rule. Since .hero doesn\u2019t have a colour conflict with a higher-specificity rule, check that the selector actually matches \u2014 the class name might be misspelled in the HTML or CSS.',
	},
	{
		question: 'Which selector wins: p { color: red; } or .intro { color: blue; }?',
		answer: '.intro wins because a class selector (specificity ~10) always beats an element selector (specificity ~1), regardless of which comes first in the stylesheet.',
	},
	{
		question: 'Why is !important considered bad practice?',
		answer: 'Because the only way to override an !important rule is with another !important rule that has equal or higher specificity. This creates an escalating war of !important declarations that makes your stylesheet very difficult to maintain.',
	},
];

// ── Checkpoint: DevTools ──────────────────────────────────────────
const checkpointDevTools = [
	{
		question: 'How do you open DevTools in any browser?',
		answer: 'Press F12, or right-click any element and choose Inspect. On Mac you can also use Cmd+Option+I.',
	},
	{
		question: 'In the Styles panel, what does a line through a CSS property mean?',
		answer: 'It means that property is being overridden by another rule with higher specificity or that appears later in the cascade. The winning rule is shown above the crossed-out one.',
	},
	{
		question: 'Why is outline better than border for debugging layout issues?',
		answer: 'Unlike border, outline does not affect the element\u2019s size or layout. Adding a border changes the element\u2019s dimensions (unless you use box-sizing: border-box), which can shift the layout and change the very problem you\u2019re trying to debug.',
	},
];

// ── Guided Practice Steps ─────────────────────────────────────────
const guidedPracticeSteps = [
	{
		title: 'Create the test page',
		instructions: '<p>Create a new file called <code>debug-practice.html</code> and add this HTML:</p><pre><code>\u003C!DOCTYPE html\u003E\n\u003Chtml lang="en"\u003E\n\u003Chead\u003E\n    \u003Cmeta charset="UTF-8"\u003E\n    \u003Ctitle\u003ECSS Debug Practice\u003C/title\u003E\n    \u003Clink rel="stylesheet" href="css/debug.css"\u003E\n\u003C/head\u003E\n\u003Cbody\u003E\n    \u003Cheader\u003E\n        \u003Ch1\u003EMy Website\u003C/h1\u003E\n        \u003Cnav\u003E\n            \u003Cul\u003E\n                \u003Cli\u003E\u003Ca href="#"\u003EHome\u003C/a\u003E\u003C/li\u003E\n                \u003Cli\u003E\u003Ca href="#"\u003EAbout\u003C/a\u003E\u003C/li\u003E\n                \u003Cli\u003E\u003Ca href="#"\u003EContact\u003C/a\u003E\u003C/li\u003E\n            \u003C/ul\u003E\n        \u003C/nav\u003E\n    \u003C/header\u003E\n    \u003Csection id="hero" class="hero-section"\u003E\n        \u003Ch2\u003EWelcome\u003C/h2\u003E\n        \u003Cp class="intro"\u003EThis is a test page for debugging CSS.\u003C/p\u003E\n    \u003C/section\u003E\n\u003C/body\u003E\n\u003C/html\u003E</code></pre>',
		hints: ['Make sure you create a css/ folder and put the stylesheet inside it.'],
	},
	{
		title: 'Create the broken stylesheet',
		instructions: '<p>Create <code>css/debug.css</code> with these intentionally broken rules:</p><pre><code>/* Bug 1: Missing closing bracket */\nh1 {\n    color: navy;\n    font-size: 2.5rem;\n\n/* Bug 2: Selector typo */\n.hero_section {\n    background-color: #f0f0f0;\n    padding: 3rem;\n}\n\n/* Bug 3: Missing colon */\nnav ul {\n    list-style none;\n    display: flex;\n    gap: 1.5rem;\n}\n\n/* Bug 4: Space in value */\n.intro {\n    font-size: 1.2 rem;\n    line-height: 1.8;\n}</code></pre>',
		hints: ['There are 4 bugs. Can you spot them just by reading the code before opening the browser?'],
	},
	{
		title: 'Open the page and observe',
		instructions: '<p>Open <code>debug-practice.html</code> in your browser. Notice what looks wrong:</p><ul><li>Is the h1 styled?</li><li>Does the hero section have a background?</li><li>Is the nav list horizontal?</li><li>Is the intro paragraph larger?</li></ul><p>Open DevTools (F12) and inspect the h1 element. What do you see in the Styles panel?</p>',
		hints: ['If the h1 has no styles at all, the bug might be breaking not just its own rule but everything below it too.'],
	},
	{
		title: 'Fix Bug 1: Missing bracket',
		instructions: '<p>Add the missing <code>}</code> after the h1 rule. Save and hard-refresh. The h1 should now be navy and large \u2014 and the rules below it should start working.</p><pre><code>h1 {\n    color: navy;\n    font-size: 2.5rem;\n}  /* \u2190 This was missing! */</code></pre>',
		hints: ['A missing closing bracket can break every rule that comes after it. Always fix bracket issues first.'],
	},
	{
		title: 'Fix Bugs 2\u20134',
		instructions: '<p>Now fix the remaining three bugs:</p><ol><li><strong>Bug 2:</strong> The HTML uses <code>class="hero-section"</code> but the CSS says <code>.hero_section</code> (underscore vs hyphen). Change the CSS to <code>.hero-section</code></li><li><strong>Bug 3:</strong> <code>list-style none</code> is missing a colon. It should be <code>list-style: none;</code></li><li><strong>Bug 4:</strong> <code>1.2 rem</code> has a space. Remove it to get <code>1.2rem</code></li></ol>',
		hints: ['After each fix, save and refresh to confirm it worked. Fix one bug at a time so you know which fix solved which problem.'],
	},
	{
		title: 'Verify in DevTools',
		instructions: '<p>After all fixes, inspect each element and confirm:</p><ul><li>h1 \u2014 Styles panel shows <code>color: navy</code> and <code>font-size: 2.5rem</code> (no line-through)</li><li>.hero-section \u2014 Shows <code>background-color: #f0f0f0</code></li><li>nav ul \u2014 Shows <code>display: flex</code> and <code>list-style: none</code></li><li>.intro \u2014 Shows <code>font-size: 1.2rem</code></li></ul><p>No rules should be crossed out or inactive.</p>',
		hints: ['If any rule still has a line through it, another rule is overriding it. Check specificity.'],
	},
];

// ── Closure Data ──────────────────────────────────────────────────
const closureKeyTakeaways = [
	'Always check the basics first: is the stylesheet linked, is the path correct, is the browser cached?',
	'CSS fails silently \u2014 a missing bracket, colon, or semicolon can break rules with no error message',
	'Specificity determines which rule wins: IDs beat classes, classes beat elements, and !important overrides all (but use it as a last resort)',
	'Browser DevTools let you inspect, toggle, and edit CSS rules in real time \u2014 learn to use them',
	'Most CSS problems fall into just a few categories: run through the debugging checklist and you\u2019ll find the issue quickly',
];

const closureObjectives = [
	'Identify the most common reasons CSS rules are ignored by the browser',
	'Diagnose CSS syntax errors including missing brackets, colons, and semicolons',
	'Explain how specificity and the cascade determine which styles win',
	'Use browser DevTools to inspect, toggle, and edit CSS rules in real time',
	'Apply a systematic debugging checklist to fix broken styles quickly',
];

const closureReflectionPrompts = [
	{
		title: '\uD83D\uDCAD Reflection Questions',
		icon: '\uD83D\uDCAD',
		questions: [
			'Which type of CSS bug have you encountered most often in your own projects?',
			'How will using DevTools change the way you debug styles compared to just editing the file and refreshing?',
			'Why do you think CSS was designed to fail silently instead of showing error messages?',
			'What is the first thing you will check next time your CSS doesn\u2019t work?',
		],
	},
];

const closureRealWorld = '<p><strong>Professional developers debug CSS every single day.</strong> The difference between a beginner and an expert isn\u2019t that experts write perfect CSS \u2014 it\u2019s that they can identify and fix problems in seconds using a systematic approach:</p><ol><li>Check the obvious (is the file loading?)</li><li>Use DevTools to see what the browser is actually doing</li><li>Fix one thing at a time and test after each change</li></ol><p>Print out the debugging checklist from this tutorial and keep it next to your computer until it becomes second nature.</p>';

const closureNextSteps = '<p>Now that you can debug CSS, you\u2019re ready to start writing more ambitious stylesheets. In the <strong>CSS Flexbox</strong> tutorial, you\u2019ll learn modern layout techniques \u2014 and you\u2019ll have the debugging skills to fix any problems along the way.</p>';
</script>

<style scoped>
.tutorial-content {
	max-width: 800px;
	margin: 0 auto;
}

.tutorial-meta {
	margin: 2rem 0;
}

.analogy-box {
	background: #fff9e6;
	border-left: 4px solid #ffd700;
}

.highlight-box {
	background: #f0f9ff;
	border-left: 4px solid #3298dc;
}
</style>
