<template>
	<div class="container">
		<!-- Breadcrumb navigation -->
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/javascript-basics"
						>JavaScript Basics</router-link
					>
				</li>
				<li class="is-active"><a href="#" aria-current="page">Loops</a></li>
			</ul>
		</nav>

		<!-- Tutorial tags -->
		<div class="tags">
			<span class="tag is-info">Beginner</span>

			<span class="tag is-success">15 min</span>
		</div>

		<!-- Tutorial title -->
		<h1 class="title is-1">
			<span class="js-logo-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 630 630"
					class="js-logo"
				>
					<g id="js-logo">
						<rect
							id="background"
							x="0"
							y="0"
							width="630"
							height="630"
							fill="#f7df1e"
						/>
						<path
							id="j"
							d="m 165.65,526.47375 48.2125,-29.1775 C 223.16375,513.7875 231.625,527.74 251.92,527.74 c 19.45375,0 31.71875,-7.60975 31.71875,-37.21 l 0,-201.3 59.20375,0 0,202.1375 c 0,61.32 -35.94375,89.23125 -88.385,89.23125 -47.36125,0 -74.8525,-24.52875 -88.8075,-54.13"
						/>
						<path
							id="s"
							d="m 375,520.13 48.20625,-27.91125 c 12.69,20.72375 29.1825,35.9475 58.36125,35.9475 24.53125,0 40.17375,-12.26475 40.17375,-29.18125 0,-20.29875 -16.06875,-27.48875 -43.135,-39.32625 l -14.7975,-6.3475 c -42.715,-18.18125 -71.05,-41.0175 -71.05,-89.2275 0,-44.40375 33.83125,-78.2375 86.695,-78.2375 37.6375,0 64.7025,13.11125 84.15375,47.36625 l -46.09625,29.60125 c -10.15,-18.1825 -21.1425,-25.37125 -38.0575,-25.37125 -17.33875,0 -28.335,10.995 -28.335,25.37125 0,17.7625 10.99625,24.9525 36.3675,35.94875 l 14.8,6.3425 c 50.325,21.56875 78.66,43.5575 78.66,93.03375 0,53.2875 -41.86625,82.465 -98.11,82.465 -54.97625,0 -90.5,-26.2175 -107.83625,-60.47375"
						/>
					</g>
				</svg>
			</span>
			Loops in JavaScript
		</h1>
		<p class="subtitle is-3">
			Learn how to repeat actions and iterate through data
		</p>

		<!-- Learning objectives -->
		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-bullseye"></i> Learning Objectives
			</h3>
			<p>By the end of this tutorial, you'll be able to:</p>
			<ul>
				<li>Understand the purpose of loops in programming</li>
				<li>
					Use <code>for</code> loops to execute code a specific number of times
				</li>
				<li>
					Use <code>while</code> and <code>do...while</code> loops for
					conditional iteration
				</li>
				<li>Iterate through arrays and objects using loops</li>
				<li>
					Use <code>break</code> and <code>continue</code> to control loop
					execution
				</li>
				<li>Choose the appropriate loop for different scenarios</li>
			</ul>
		</div>

		<!-- Prerequisites notification -->
		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this tutorial, you
				should be familiar with JavaScript variables, data types, and control
				flow (if/else statements). If you're new to these concepts, check out
				our
				<router-link to="/tutorials/javascript-basics/variables"
					>Variables & Data Types</router-link
				>
				and
				<router-link to="/tutorials/javascript-basics/conditionals"
					>Control Flow</router-link
				>
				tutorials first.
			</p>
		</div>

		<!-- Introduction -->
		<h2 class="title is-2">Introduction to Loops</h2>
		<p>
			Imagine you're a chef at the Black Swan Bistro, and you need to prepare 10
			identical salads for a large party. Would you write out each step 10
			times? Of course not! You'd create a process and repeat it 10 times.
		</p>
		<p>
			This is exactly what loops do in programming. They allow you to repeat a
			block of code multiple times without having to write the same code over
			and over again.
		</p>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> Why Use Loops?
			</h3>
			<div class="columns">
				<div class="column">
					<h4 class="title is-5">Without Loops</h4>
					<CodeMirror
						:code="withoutLoopsExample"
						:value="withoutLoopsExample"
						language="javascript"
						:read-only="true"
					/>
				</div>
				<div class="column">
					<h4 class="title is-5">With Loops</h4>
					<CodeMirror
						:code="withLoopsExample"
						:value="withLoopsExample"
						language="javascript"
						:read-only="true"
					/>
				</div>
			</div>
			<p class="mt-3">
				As you can see, loops make your code more concise, readable, and
				maintainable. They're essential for working with collections of data and
				automating repetitive tasks.
			</p>
		</div>

		<!-- Types of Loops Overview -->
		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-sync-alt"></i> Types of Loops in JavaScript
			</h3>
			<div class="loop-diagram">
				<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
					<!-- Central "Loops" node -->
					<circle cx="300" cy="100" r="50" fill="#f7df1e" />
					<text x="300" y="105" text-anchor="middle" font-weight="bold">
						Loops
					</text>

					<!-- For loop branch -->
					<line
						x1="300"
						y1="50"
						x2="150"
						y2="50"
						stroke="#333"
						stroke-width="2"
					/>
					<circle cx="150" cy="50" r="40" fill="#e34c26" />
					<text
						x="150"
						y="55"
						text-anchor="middle"
						font-weight="bold"
						fill="white"
					>
						for
					</text>

					<!-- While loop branch -->
					<line
						x1="300"
						y1="100"
						x2="150"
						y2="150"
						stroke="#333"
						stroke-width="2"
					/>
					<circle cx="150" cy="150" r="40" fill="#264de4" />
					<text
						x="150"
						y="155"
						text-anchor="middle"
						font-weight="bold"
						fill="white"
					>
						while
					</text>

					<!-- Do-while loop branch -->
					<line
						x1="350"
						y1="100"
						x2="450"
						y2="50"
						stroke="#333"
						stroke-width="2"
					/>
					<circle cx="450" cy="50" r="40" fill="#ff6b6b" />
					<text
						x="450"
						y="55"
						text-anchor="middle"
						font-weight="bold"
						fill="white"
					>
						do...while
					</text>

					<!-- For...of loop branch -->
					<line
						x1="350"
						y1="100"
						x2="450"
						y2="150"
						stroke="#333"
						stroke-width="2"
					/>
					<circle cx="450" cy="150" r="40" fill="#41b883" />
					<text
						x="450"
						y="155"
						text-anchor="middle"
						font-weight="bold"
						fill="white"
					>
						for...of
					</text>
				</svg>
			</div>
			<p class="mt-3">
				JavaScript provides several types of loops, each with its own use cases.
				In this tutorial, we'll cover the most common ones and when to use each.
			</p>
		</div>

		<!-- For Loop Section -->
		<h2 class="title is-2">The for Loop</h2>
		<p>
			The <code>for</code> loop is the most commonly used loop in JavaScript.
			It's ideal when you know exactly how many times you want to execute a
			block of code.
		</p>

		<h3 class="title is-4">Syntax</h3>
		<CodeMirror
			:code="forLoopSyntax"
			:value="forLoopSyntax"
			language="javascript"
			:read-only="true"
		/>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-cogs"></i> Anatomy of a for Loop
			</h3>
			<div class="loop-visualization">
				<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
					<!-- Code background -->
					<rect
						x="50"
						y="50"
						width="500"
						height="60"
						rx="5"
						fill="#f5f5f5"
						stroke="#333"
						stroke-width="1"
					/>

					<!-- Loop parts -->
					<text x="70" y="85" font-family="monospace" font-size="16">
						for (let i = 0; i < 5; i++) { /* code to repeat */ }
					</text>

					<!-- Initialization -->
					<rect
						x="100"
						y="70"
						width="70"
						height="20"
						rx="3"
						fill="#ffcc80"
						fill-opacity="0.7"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="135" y="130" text-anchor="middle" font-size="14">
						Initialization
					</text>
					<text x="135" y="150" text-anchor="middle" font-size="12">
						Runs once at
					</text>
					<text x="135" y="165" text-anchor="middle" font-size="12">
						the beginning
					</text>
					<line
						x1="135"
						y1="90"
						x2="135"
						y2="120"
						stroke="#ff9800"
						stroke-width="1"
						stroke-dasharray="3,3"
					/>

					<!-- Condition -->
					<rect
						x="180"
						y="70"
						width="70"
						height="20"
						rx="3"
						fill="#80deea"
						fill-opacity="0.7"
						stroke="#00bcd4"
						stroke-width="1"
					/>
					<text x="215" y="130" text-anchor="middle" font-size="14">
						Condition
					</text>
					<text x="215" y="150" text-anchor="middle" font-size="12">
						Checked before
					</text>
					<text x="215" y="165" text-anchor="middle" font-size="12">
						each iteration
					</text>
					<line
						x1="215"
						y1="90"
						x2="215"
						y2="120"
						stroke="#00bcd4"
						stroke-width="1"
						stroke-dasharray="3,3"
					/>

					<!-- Increment -->
					<rect
						x="260"
						y="70"
						width="50"
						height="20"
						rx="3"
						fill="#a5d6a7"
						fill-opacity="0.7"
						stroke="#4caf50"
						stroke-width="1"
					/>
					<text x="285" y="130" text-anchor="middle" font-size="14">
						Increment
					</text>
					<text x="285" y="150" text-anchor="middle" font-size="12">
						Runs after
					</text>
					<text x="285" y="165" text-anchor="middle" font-size="12">
						each iteration
					</text>
					<line
						x1="285"
						y1="90"
						x2="285"
						y2="120"
						stroke="#4caf50"
						stroke-width="1"
						stroke-dasharray="3,3"
					/>

					<!-- Code block -->
					<rect
						x="320"
						y="70"
						width="180"
						height="20"
						rx="3"
						fill="#ef9a9a"
						fill-opacity="0.7"
						stroke="#f44336"
						stroke-width="1"
					/>
					<text x="410" y="130" text-anchor="middle" font-size="14">
						Code Block
					</text>
					<text x="410" y="150" text-anchor="middle" font-size="12">
						Executed for
					</text>
					<text x="410" y="165" text-anchor="middle" font-size="12">
						each iteration
					</text>
					<line
						x1="410"
						y1="90"
						x2="410"
						y2="120"
						stroke="#f44336"
						stroke-width="1"
						stroke-dasharray="3,3"
					/>
				</svg>
			</div>
			<div class="columns mt-4">
				<div class="column">
					<h4 class="title is-5">Initialization</h4>
					<p>
						<code>let i = 0</code> - Creates a counter variable and sets its
						initial value. This part runs only once when the loop starts.
					</p>
				</div>
				<div class="column">
					<h4 class="title is-5">Condition</h4>
					<p>
						<code>i < 5</code> - Defines when the loop should continue running.
						The loop will execute as long as this condition is true.
					</p>
				</div>
				<div class="column">
					<h4 class="title is-5">Increment</h4>
					<p>
						<code>i++</code> - Updates the counter after each iteration. This is
						typically used to increment or decrement the counter.
					</p>
				</div>
			</div>
		</div>

		<h3 class="title is-4">For Loop Execution Flow</h3>
		<div class="box highlight-box mb-6">
			<div class="loop-visualization">
				<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
					<!-- Flow diagram -->
					<!-- Start -->
					<rect
						x="250"
						y="20"
						width="100"
						height="40"
						rx="20"
						fill="#f5f5f5"
						stroke="#333"
						stroke-width="2"
					/>
					<text x="300" y="45" text-anchor="middle" font-weight="bold">
						Start
					</text>

					<!-- Initialization -->
					<rect
						x="250"
						y="80"
						width="100"
						height="40"
						rx="5"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="2"
					/>
					<text x="300" y="105" text-anchor="middle">let i = 0</text>

					<!-- Arrow -->
					<line
						x1="300"
						y1="60"
						x2="300"
						y2="80"
						stroke="#333"
						stroke-width="2"
					/>
					<polygon points="300,80 295,70 305,70" fill="#333" />

					<!-- Condition -->
					<polygon
						points="250,140 350,140 300,180"
						fill="#80deea"
						stroke="#00bcd4"
						stroke-width="2"
					/>
					<text x="300" y="165" text-anchor="middle">i < 5 ?</text>

					<!-- Arrow -->
					<line
						x1="300"
						y1="120"
						x2="300"
						y2="140"
						stroke="#333"
						stroke-width="2"
					/>
					<polygon points="300,140 295,130 305,130" fill="#333" />

					<!-- Code block -->
					<rect
						x="250"
						y="200"
						width="100"
						height="40"
						rx="5"
						fill="#ef9a9a"
						stroke="#f44336"
						stroke-width="2"
					/>
					<text x="300" y="225" text-anchor="middle">Run code</text>

					<!-- Arrow (Yes) -->
					<line
						x1="300"
						y1="180"
						x2="300"
						y2="200"
						stroke="#333"
						stroke-width="2"
					/>
					<polygon points="300,200 295,190 305,190" fill="#333" />
					<text x="315" y="190" font-size="12">Yes</text>

					<!-- Increment -->
					<rect
						x="400"
						y="200"
						width="100"
						height="40"
						rx="5"
						fill="#a5d6a7"
						stroke="#4caf50"
						stroke-width="2"
					/>
					<text x="450" y="225" text-anchor="middle">i++</text>

					<!-- Arrow -->
					<line
						x1="350"
						y1="220"
						x2="400"
						y2="220"
						stroke="#333"
						stroke-width="2"
					/>
					<polygon points="400,220 390,215 390,225" fill="#333" />

					<!-- Arrow back to condition -->
					<path
						d="M 450,200 L 450,160 L 350,160"
						fill="none"
						stroke="#333"
						stroke-width="2"
					/>
					<polygon points="350,160 360,155 360,165" fill="#333" />

					<!-- End -->
					<rect
						x="100"
						y="140"
						width="100"
						height="40"
						rx="20"
						fill="#f5f5f5"
						stroke="#333"
						stroke-width="2"
					/>
					<text x="150" y="165" text-anchor="middle" font-weight="bold">
						End
					</text>

					<!-- Arrow (No) -->
					<line
						x1="250"
						y1="160"
						x2="200"
						y2="160"
						stroke="#333"
						stroke-width="2"
					/>
					<polygon points="200,160 210,155 210,165" fill="#333" />
					<text x="225" y="150" font-size="12">No</text>
				</svg>
			</div>
			<div class="mt-4">
				<p>Here's how a for loop executes:</p>
				<ol>
					<li>
						The <strong>initialization</strong> statement runs once at the
						beginning.
					</li>
					<li>
						The <strong>condition</strong> is evaluated before each iteration.
					</li>
					<li>
						If the condition is <code>true</code>, the code block executes.
					</li>
					<li>
						After the code block executes, the
						<strong>increment</strong> statement runs.
					</li>
					<li>
						Steps 2-4 repeat until the condition becomes <code>false</code>.
					</li>
					<li>When the condition becomes <code>false</code>, the loop ends.</li>
				</ol>
			</div>
		</div>

		<h3 class="title is-4">Restaurant Example: Preparing Orders</h3>
		<CodeMirror
			:code="forLoopExample"
			:value="forLoopExample"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> Common For Loop Patterns
			</h3>
			<div class="columns">
				<div class="column">
					<h4 class="title is-5">Looping Through Arrays</h4>
					<CodeMirror
						:code="forLoopArrayExample"
						:value="forLoopArrayExample"
						language="javascript"
						:read-only="true"
					/>
				</div>
				<div class="column">
					<h4 class="title is-5">Counting Backwards</h4>
					<CodeMirror
						:code="forLoopBackwardsExample"
						:value="forLoopBackwardsExample"
						language="javascript"
						:read-only="true"
					/>
				</div>
			</div>
			<div class="columns mt-4">
				<div class="column">
					<h4 class="title is-5">Skipping Iterations</h4>
					<CodeMirror
						:code="forLoopSkipExample"
						:value="forLoopSkipExample"
						language="javascript"
						:read-only="true"
					/>
				</div>
				<div class="column">
					<h4 class="title is-5">Nested Loops</h4>
					<CodeMirror
						:code="forLoopNestedExample"
						:value="forLoopNestedExample"
						language="javascript"
						:read-only="true"
					/>
				</div>
			</div>
		</div>

		<div class="notification is-warning mt-4">
			<h4 class="title is-5">Common Mistakes with For Loops</h4>
			<div class="columns is-mobile is-multiline">
				<div class="column is-12-mobile is-6-tablet">
					<div class="content">
						<p><strong>Infinite Loops</strong></p>
						<p>
							Forgetting to update the counter variable or using the wrong
							condition can create infinite loops that crash your browser.
						</p>
						<pre><code>// Infinite loop - i is never incremented
for (let i = 0; i < 10; ) {
  console.log(i);
  // Missing i++
}</code></pre>
					</div>
				</div>
				<div class="column is-12-mobile is-6-tablet">
					<div class="content">
						<p><strong>Off-by-One Errors</strong></p>
						<p>
							Using the wrong comparison operator (< vs <=) can cause loops to
							run one too many or one too few times.
						</p>
						<pre><code>// Array has 5 elements (indexes 0-4)
const menu = ["Pasta", "Salad", "Steak", "Fish", "Dessert"];
// This will cause an error - index 5 doesn't exist
for (let i = 0; i <= menu.length; i++) {
  console.log(menu[i]);
}</code></pre>
					</div>
				</div>
			</div>
		</div>

		<!-- For...of Loop Section -->
		<h2 class="title is-2">The for...of Loop</h2>
		<p>
			The <code>for...of</code> loop is a modern JavaScript feature that
			provides a simpler way to iterate over iterable objects like arrays,
			strings, and more. It's perfect for when you need to access each element
			directly without worrying about indices.
		</p>

		<h3 class="title is-4">Syntax</h3>
		<CodeMirror
			:code="forOfLoopSyntax"
			:value="forOfLoopSyntax"
			language="javascript"
			:read-only="true"
		/>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-cogs"></i> For...of Loop Visualization
			</h3>
			<div class="loop-visualization">
				<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
					<!-- Array visualization -->
					<rect
						x="50"
						y="50"
						width="500"
						height="60"
						rx="5"
						fill="#f5f5f5"
						stroke="#333"
						stroke-width="1"
					/>

					<!-- Array elements -->
					<rect
						x="60"
						y="60"
						width="80"
						height="40"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="100" y="85" text-anchor="middle">"Salmon"</text>

					<rect
						x="150"
						y="60"
						width="80"
						height="40"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="190" y="85" text-anchor="middle">"Steak"</text>

					<rect
						x="240"
						y="60"
						width="80"
						height="40"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="280" y="85" text-anchor="middle">"Pasta"</text>

					<rect
						x="330"
						y="60"
						width="80"
						height="40"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="370" y="85" text-anchor="middle">"Salad"</text>

					<rect
						x="420"
						y="60"
						width="80"
						height="40"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="460" y="85" text-anchor="middle">"Cake"</text>

					<!-- Current element pointer -->
					<polygon points="280,120 270,140 290,140" fill="#41b883" />
					<text x="280" y="165" text-anchor="middle" font-weight="bold">
						Current Item: "Pasta"
					</text>

					<!-- Code representation -->
					<rect
						x="150"
						y="180"
						width="300"
						height="30"
						rx="3"
						fill="#e6f7ff"
						stroke="#1890ff"
						stroke-width="1"
					/>
					<text x="300" y="200" text-anchor="middle" font-family="monospace">
						for (const item of menuItems) { ... }
					</text>
				</svg>
			</div>
			<div class="mt-4">
				<p>Here's how a for...of loop works:</p>
				<ol>
					<li>
						The loop automatically iterates through each element in the iterable
						object.
					</li>
					<li>
						For each iteration, the current element is assigned to the specified
						variable (e.g., <code>item</code>).
					</li>
					<li>The code block is executed for each element.</li>
					<li>The loop continues until all elements have been processed.</li>
				</ol>
				<p class="notification is-info is-light mt-3">
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Key Advantage:</strong> The for...of loop simplifies iteration
					by giving you direct access to the values without having to use
					indices or worry about the length of the collection.
				</p>
			</div>
		</div>

		<h3 class="title is-4">Restaurant Example: Processing Orders</h3>
		<CodeMirror
			:code="forOfLoopExample"
			:value="forOfLoopExample"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> What Can You Iterate With for...of?
			</h3>
			<p>
				The for...of loop works with any iterable object in JavaScript,
				including:
			</p>
			<ul>
				<li><strong>Arrays:</strong> Iterate through array elements</li>
				<li><strong>Strings:</strong> Iterate through each character</li>
				<li><strong>Maps:</strong> Iterate through key-value pairs</li>
				<li><strong>Sets:</strong> Iterate through unique values</li>
				<li><strong>DOM collections:</strong> Iterate through DOM elements</li>
				<li>
					<strong>Arguments object:</strong> Iterate through function arguments
				</li>
			</ul>
			<CodeMirror
				:code="forOfLoopIterablesExample"
				:value="forOfLoopIterablesExample"
				language="javascript"
				:read-only="true"
			/>
		</div>

		<div class="box warning-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-exclamation-triangle"></i> for...of vs for...in
			</h3>
			<p>Don't confuse <code>for...of</code> with <code>for...in</code>:</p>
			<ul>
				<li>
					<strong>for...of:</strong> Iterates over the <em>values</em> of an
					iterable object
				</li>
				<li>
					<strong>for...in:</strong> Iterates over the
					<em>enumerable properties (keys)</em> of an object
				</li>
			</ul>
			<CodeMirror
				:code="forOfVsForInExample"
				:value="forOfVsForInExample"
				language="javascript"
				:read-only="true"
			/>
			<p class="mt-3">
				<strong>Best Practice:</strong> Use <code>for...of</code> for arrays and
				<code>for...in</code> for objects.
			</p>
		</div>

		<!-- Common Mistakes with for...of Loops -->
		<div class="notification is-warning mt-4">
			<h4 class="title is-5">Common Mistakes with for...of Loops</h4>
			<div class="columns is-mobile is-multiline">
				<div class="column is-12-mobile is-6-tablet">
					<div class="content">
						<p><strong>Using with Non-Iterables</strong></p>
						<p>
							for...of only works with iterable objects. Using it with objects
							will cause an error.
						</p>
						<pre><code>// Error: objects are not iterable
const restaurant = {
  name: "Gourmet Eats",
  rating: 4.5
};

// This will cause an error
for (const prop of restaurant) {
  console.log(prop);
}</code></pre>
					</div>
				</div>
				<div class="column is-12-mobile is-6-tablet">
					<div class="content">
						<p><strong>Modifying the Iterable</strong></p>
						<p>
							Modifying the iterable while looping can cause unexpected
							behavior.
						</p>
						<pre><code>// Unpredictable behavior
const orders = ["Pasta", "Salad", "Steak"];

for (const order of orders) {
  console.log(order);
  // Adding items while iterating
  if (order === "Pasta") {
    orders.push("Garlic Bread");
  }
}</code></pre>
					</div>
				</div>
			</div>
		</div>

		<!-- For...in Loop Section -->
		<h2 class="title is-2">The for...in Loop</h2>
		<p>
			The <code>for...in</code> loop iterates over the enumerable properties
			(keys) of an object. It's particularly useful for working with objects
			when you need to access both the keys and their corresponding values.
		</p>

		<h3 class="title is-4">Syntax</h3>
		<CodeMirror
			:code="forInLoopSyntax"
			:value="forInLoopSyntax"
			language="javascript"
			:read-only="true"
		/>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-cogs"></i> For...in Loop Visualization
			</h3>
			<div class="loop-visualization">
				<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
					<!-- Object visualization -->
					<rect
						x="50"
						y="30"
						width="500"
						height="120"
						rx="5"
						fill="#f5f5f5"
						stroke="#333"
						stroke-width="1"
					/>
					<text x="70" y="50" font-family="monospace">menuPrices = {</text>

					<!-- Object properties -->
					<text x="90" y="70" font-family="monospace">"Salmon": 24.99,</text>
					<rect
						x="90"
						y="58"
						width="80"
						height="16"
						rx="3"
						fill="#80deea"
						fill-opacity="0.5"
						stroke="#00bcd4"
						stroke-width="1"
					/>

					<text x="90" y="90" font-family="monospace">"Steak": 29.99,</text>
					<rect
						x="90"
						y="78"
						width="70"
						height="16"
						rx="3"
						fill="#80deea"
						fill-opacity="0.5"
						stroke="#00bcd4"
						stroke-width="1"
					/>

					<text x="90" y="110" font-family="monospace">"Pasta": 18.99,</text>
					<rect
						x="90"
						y="98"
						width="70"
						height="16"
						rx="3"
						fill="#80deea"
						fill-opacity="0.5"
						stroke="#00bcd4"
						stroke-width="1"
					/>

					<text x="90" y="130" font-family="monospace">"Salad": 12.99</text>
					<rect
						x="90"
						y="118"
						width="70"
						height="16"
						rx="3"
						fill="#80deea"
						fill-opacity="0.5"
						stroke="#00bcd4"
						stroke-width="1"
					/>

					<text x="70" y="150" font-family="monospace">}</text>

					<!-- Current property pointer -->
					<polygon points="125,160 115,180 135,180" fill="#41b883" />
					<text x="125" y="195" text-anchor="middle" font-weight="bold">
						Current Key: "Pasta"
					</text>

					<!-- Code representation -->
					<rect
						x="300"
						y="80"
						width="220"
						height="30"
						rx="3"
						fill="#e6f7ff"
						stroke="#1890ff"
						stroke-width="1"
					/>
					<text x="410" y="100" text-anchor="middle" font-family="monospace">
						for (const key in menuPrices) { ... }
					</text>
				</svg>
			</div>
			<div class="mt-4">
				<p>Here's how a for...in loop works:</p>
				<ol>
					<li>
						The loop iterates through each enumerable property (key) of an
						object.
					</li>
					<li>
						For each iteration, the current property name is assigned to the
						specified variable (e.g., <code>key</code>).
					</li>
					<li>The code block is executed for each property.</li>
					<li>
						You can access the property's value using bracket notation:
						<code>object[key]</code>.
					</li>
				</ol>
				<p class="notification is-info is-light mt-3">
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Important Note:</strong> The for...in loop iterates over all
					enumerable properties, including those inherited through the prototype
					chain. Use <code>hasOwnProperty()</code> to filter out inherited
					properties if needed.
				</p>
			</div>
		</div>

		<h3 class="title is-4">Restaurant Example: Menu Pricing</h3>
		<CodeMirror
			:code="forInLoopExample"
			:value="forInLoopExample"
			language="javascript"
			:read-only="true"
		/>

		<!-- Common Mistakes with for...in Loops -->
		<div class="notification is-warning mt-4">
			<h4 class="title is-5">Common Mistakes with for...in Loops</h4>
			<div class="columns is-mobile is-multiline">
				<div class="column is-12-mobile is-6-tablet">
					<div class="content">
						<p><strong>Using with Arrays</strong></p>
						<p>
							for...in is designed for objects, not arrays. It can include
							properties other than numeric indices.
						</p>
						<pre><code>// Not recommended for arrays
const specials = ["Pasta", "Steak", "Fish"];
// Add a non-index property
specials.discount = "20% off";

for (const index in specials) {
  console.log(index, specials[index]);
  // Will include "discount" property
}</code></pre>
					</div>
				</div>
				<div class="column is-12-mobile is-6-tablet">
					<div class="content">
						<p><strong>Order Not Guaranteed</strong></p>
						<p>The order of iteration is not guaranteed with for...in loops.</p>
						<pre><code>// Order may vary between browsers
const menu = {
  appetizer: "Salad",
  main: "Steak",
  dessert: "Cake"
};

for (const course in menu) {
  console.log(course); // Order not guaranteed
}</code></pre>
					</div>
				</div>
			</div>
		</div>

		<!-- Break and Continue Section -->
		<h2 class="title is-2">Controlling Loops: break and continue</h2>
		<p>
			JavaScript provides two special statements to control the flow of loops:
			<code>break</code> and <code>continue</code>. These statements allow you
			to exit a loop early or skip iterations based on certain conditions.
		</p>

		<!-- Break statement section -->
		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-stop-circle"></i> The break Statement
			</h3>
			<p>
				The <code>break</code> statement terminates the current loop and
				transfers control to the statement following the loop.
			</p>
			<div class="loop-visualization">
				<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
					<!-- Loop visualization -->
					<rect
						x="50"
						y="30"
						width="200"
						height="140"
						rx="5"
						fill="#f5f5f5"
						stroke="#333"
						stroke-width="1"
					/>

					<!-- Loop iterations -->
					<rect
						x="70"
						y="50"
						width="160"
						height="20"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="150" y="65" text-anchor="middle">Iteration 1</text>

					<rect
						x="70"
						y="80"
						width="160"
						height="20"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="150" y="95" text-anchor="middle">Iteration 2</text>

					<rect
						x="70"
						y="110"
						width="160"
						height="20"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="150" y="125" text-anchor="middle">Iteration 3</text>

					<!-- Break -->
					<rect
						x="70"
						y="140"
						width="160"
						height="20"
						rx="3"
						fill="#ef9a9a"
						stroke="#f44336"
						stroke-width="1"
					/>
					<text x="150" y="155" text-anchor="middle">break</text>

					<!-- Arrow -->
					<line
						x1="230"
						y1="150"
						x2="270"
						y2="150"
						stroke="#f44336"
						stroke-width="2"
					/>
					<polygon points="270,150 260,145 260,155" fill="#f44336" />

					<!-- Exit -->
					<text x="280" y="155" text-anchor="middle" font-weight="bold">
						Exit Loop
					</text>
				</svg>
			</div>
			<p class="mt-3">Use <code>break</code> when:</p>
			<ul>
				<li>You've found what you're looking for</li>
				<li>An error condition occurs</li>
				<li>You need to exit the loop early for any reason</li>
			</ul>
			<CodeMirror
				:code="breakExample"
				:value="breakExample"
				language="javascript"
				:read-only="true"
			/>
		</div>

		<!-- Continue statement section -->
		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-fast-forward"></i> The continue Statement
			</h3>
			<p>
				The <code>continue</code> statement skips the current iteration and
				proceeds to the next iteration of the loop.
			</p>
			<div class="loop-visualization">
				<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
					<!-- Loop visualization -->
					<rect
						x="50"
						y="30"
						width="200"
						height="140"
						rx="5"
						fill="#f5f5f5"
						stroke="#333"
						stroke-width="1"
					/>

					<!-- Loop iterations -->
					<rect
						x="70"
						y="50"
						width="160"
						height="20"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="150" y="65" text-anchor="middle">Iteration 1</text>

					<!-- Continue -->
					<rect
						x="70"
						y="80"
						width="160"
						height="20"
						rx="3"
						fill="#a5d6a7"
						stroke="#4caf50"
						stroke-width="1"
					/>
					<text x="150" y="95" text-anchor="middle">continue</text>

					<!-- Arrow -->
					<path
						d="M 230,90 C 250,90 250,40 200,40"
						fill="none"
						stroke="#4caf50"
						stroke-width="2"
					/>
					<polygon points="200,40 210,35 210,45" fill="#4caf50" />
					<text x="250" y="70" text-anchor="middle" font-size="12">
						Skip to next
					</text>
					<text x="250" y="85" text-anchor="middle" font-size="12">
						iteration
					</text>

					<rect
						x="70"
						y="110"
						width="160"
						height="20"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="150" y="125" text-anchor="middle">Iteration 3</text>

					<rect
						x="70"
						y="140"
						width="160"
						height="20"
						rx="3"
						fill="#ffcc80"
						stroke="#ff9800"
						stroke-width="1"
					/>
					<text x="150" y="155" text-anchor="middle">Iteration 4</text>
				</svg>
			</div>
			<p class="mt-3">Use <code>continue</code> when:</p>
			<ul>
				<li>You want to skip certain iterations based on a condition</li>
				<li>You want to process only specific elements</li>
				<li>You want to filter out certain cases</li>
			</ul>
			<CodeMirror
				:code="continueExample"
				:value="continueExample"
				language="javascript"
				:read-only="true"
			/>
		</div>

		<!-- Choosing the Right Loop Section -->
		<h2 class="title is-2">Choosing the Right Loop</h2>
		<p>
			With so many loop types available in JavaScript, it's important to choose
			the right one for your specific use case. Here's a quick guide to help you
			decide:
		</p>

		<div class="table-container">
			<table class="table is-bordered is-striped is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>Loop Type</th>
						<th>Best Used For</th>
						<th>Example Scenario</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>for</code></td>
						<td>
							<ul>
								<li>When you know the number of iterations in advance</li>
								<li>When you need to use the loop counter</li>
								<li>
									When you need complex initialization or update expressions
								</li>
							</ul>
						</td>
						<td>
							Preparing a specific number of dishes, processing array elements
							by index
						</td>
					</tr>
					<tr>
						<td><code>while</code></td>
						<td>
							<ul>
								<li>When you don't know how many iterations you need</li>
								<li>When the loop should continue until a condition is met</li>
								<li>
									When you need to check the condition before the first
									iteration
								</li>
							</ul>
						</td>
						<td>
							Serving customers until the restaurant is empty, processing user
							input until valid
						</td>
					</tr>
					<tr>
						<td><code>do...while</code></td>
						<td>
							<ul>
								<li>When you want to ensure the loop runs at least once</li>
								<li>
									When you need to check the condition after the first iteration
								</li>
								<li>When implementing menus or prompts</li>
							</ul>
						</td>
						<td>
							Displaying a menu and getting user choice, validating user input
						</td>
					</tr>
					<tr>
						<td><code>for...of</code></td>
						<td>
							<ul>
								<li>When iterating over arrays or other iterable objects</li>
								<li>When you need the values directly</li>
								<li>When you don't need the index</li>
							</ul>
						</td>
						<td>
							Processing each item in an order, iterating through a list of
							ingredients
						</td>
					</tr>
					<tr>
						<td><code>for...in</code></td>
						<td>
							<ul>
								<li>When iterating over object properties</li>
								<li>When you need both the keys and values</li>
								<li>When working with dictionaries or maps</li>
							</ul>
						</td>
						<td>
							Displaying menu items and prices, processing configuration options
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Practice Exercise -->
		<h2 class="title is-2">Practice Exercise: Restaurant Order System</h2>
		<p>
			Let's put everything together by creating a simple restaurant order
			processing system:
		</p>

		<div class="box tip-box mb-6">
			<h3 class="title is-4"><i class="fas fa-cog"></i> Setup</h3>
			<p>You can practice this exercise in two ways:</p>
			<ol>
				<li>
					<strong>Browser Console:</strong>
					<ul>
						<li>Open your browser's DevTools (F12 or Cmd+Option+I)</li>
						<li>Go to the Console tab</li>
						<li>Type or paste the code directly</li>
					</ul>
				</li>
				<li>
					<strong>HTML File:</strong>
					<ul>
						<li>Create a new file called <code>practice.html</code></li>
						<li>Add this basic structure:</li>
					</ul>
				</li>
			</ol>

			<CodeMirror
				:code="htmlSetupCode"
				:value="htmlSetupCode"
				language="html"
				:read-only="true"
			/>
		</div>

		<h3 class="title is-4">Challenge: Black Swan Bistro Order System</h3>
		<p>
			Create a program that processes restaurant orders using different types of
			loops:
		</p>

		<CodeMirror
			:code="challengeCode"
			:value="challengeCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4"><i class="fas fa-lightbulb"></i> Hints</h3>
			<ul>
				<li>Use a <code>for</code> loop to iterate through the orders array</li>
				<li>
					Use a <code>for...of</code> loop to process each item in an order
				</li>
				<li>Use a <code>while</code> loop to simulate the cooking process</li>
				<li>Use a <code>for...in</code> loop to calculate the total price</li>
				<li>
					Use <code>break</code> and <code>continue</code> to handle special
					cases
				</li>
			</ul>
		</div>

		<div class="box solution-box mb-6">
			<h3 class="title is-4"><i class="fas fa-check-circle"></i> Solution</h3>
			<p>
				<button class="button is-info" @click="toggleSolution">
					{{ showSolution ? 'Hide Solution' : 'Show Solution' }}
				</button>
			</p>
			<div v-if="showSolution">
				<CodeMirror
					:code="solutionCode"
					:value="solutionCode"
					language="javascript"
					:read-only="true"
				/>
			</div>
		</div>

		<h2 class="title is-2">Interactive Resources</h2>
		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-external-link-alt"></i> Practice More
			</h3>
			<ul>
				<li>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
						target="_blank"
					>
						MDN: Loops and Iteration
					</a>
				</li>
				<li>
					<a href="https://javascript.info/while-for" target="_blank">
						JavaScript.info: Loops
					</a>
				</li>
				<li>
					<a
						href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript"
						target="_blank"
					>
						freeCodeCamp: Basic JavaScript
					</a>
				</li>
			</ul>
		</div>

		<div class="notification is-success is-light mt-6">
			<p>
				<i class="fas fa-check-circle mr-2"></i>
				<strong>What's Next?</strong> In the next tutorial, we'll learn about
				functions in JavaScript - how to create reusable blocks of code to
				organize your programs.
			</p>
			<div class="mt-3">
				<router-link
					to="/tutorials/javascript-basics/functions"
					class="button is-success"
				>
					Continue to Functions
					<i class="fas fa-arrow-right ml-2"></i>
				</router-link>
			</div>
		</div>

		<!-- Quiz section -->
		<TutorialQuiz />

		<!-- Recommendations for next steps -->
		<TutorialRecommendations />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import * as CodeMirrorModule from '@/components/CodeMirror.vue';
import * as TutorialRecommendationsModule from '@/components/TutorialRecommendations.vue';
import * as TutorialQuizModule from '@/components/TutorialQuiz.vue';

// Use the components with their namespace
const CodeMirror = CodeMirrorModule.default || CodeMirrorModule.CodeMirror;
const TutorialRecommendations = TutorialRecommendationsModule.default || TutorialRecommendationsModule.TutorialRecommendations;
const TutorialQuiz = TutorialQuizModule.default || TutorialQuizModule.TutorialQuiz;

// Toggle solution visibility
const showSolution = ref(false);
const toggleSolution = () => {
	showSolution.value = !showSolution.value;
};

// Open console function
const openConsole = () => {
	console.log('Try JavaScript loops here!');
	console.log('Example: for (let i = 0; i < 5; i++) { console.log(i); }');
	console.log('Then press Enter to see the result');
	alert('Console opened! Look for the console tab in developer tools.');
};

// Code examples
const withoutLoopsExample = `// Preparing 5 salads without loops
console.log("Preparing salad #1");
console.log("Washing lettuce for salad #1");
console.log("Adding tomatoes to salad #1");
console.log("Adding dressing to salad #1");
console.log("Salad #1 is ready!");

console.log("Preparing salad #2");
console.log("Washing lettuce for salad #2");
console.log("Adding tomatoes to salad #2");
console.log("Adding dressing to salad #2");
console.log("Salad #2 is ready!");

// ... and so on for salads #3, #4, and #5
// This is repetitive and error-prone!`;

const withLoopsExample = `// Preparing 5 salads with a loop
for (let i = 1; i <= 5; i++) {
  console.log("Preparing salad #" + i);
  console.log("Washing lettuce for salad #" + i);
  console.log("Adding tomatoes to salad #" + i);
  console.log("Adding dressing to salad #" + i);
  console.log("Salad #" + i + " is ready!");
}

// Much more concise and easier to maintain!`;

// For loop examples
const forLoopSyntax = `for (initialization; condition; increment) {
  // Code to be executed in each iteration
}`;

const forLoopExample = `// Preparing multiple orders at the Black Swan Bistro
const orders = [
  "Grilled Salmon",
  "Beef Steak",
  "Pasta Primavera",
  "Caesar Salad",
  "Chocolate Cake"
];

console.log("Starting to prepare orders...");

for (let i = 0; i < orders.length; i++) {
  console.log(\`Order #\${i + 1}: Preparing \${orders[i]}\`);
  console.log(\`Order #\${i + 1}: \${orders[i]} is ready to serve!\`);
}

console.log("All orders are ready!");

/* Output:
Starting to prepare orders...
Order #1: Preparing Grilled Salmon
Order #1: Grilled Salmon is ready to serve!
Order #2: Preparing Beef Steak
Order #2: Beef Steak is ready to serve!
Order #3: Preparing Pasta Primavera
Order #3: Pasta Primavera is ready to serve!
Order #4: Preparing Caesar Salad
Order #4: Caesar Salad is ready to serve!
Order #5: Preparing Chocolate Cake
Order #5: Chocolate Cake is ready to serve!
All orders are ready!
*/`;

const forLoopArrayExample = `// Calculating total revenue from orders
const orderPrices = [24.99, 29.99, 18.99, 12.99, 8.99];
let totalRevenue = 0;

for (let i = 0; i < orderPrices.length; i++) {
  totalRevenue += orderPrices[i];
}

console.log(\`Total revenue: $\${totalRevenue.toFixed(2)}\`);
// Output: Total revenue: $95.95`;

const forLoopBackwardsExample = `// Countdown to restaurant opening
console.log("Countdown to opening:");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("The Black Swan Bistro is now open!");

/* Output:
Countdown to opening:
10
9
8
7
6
5
4
3
2
1
The Black Swan Bistro is now open!
*/`;

const forLoopSkipExample = `// Processing even-numbered tables only
console.log("Checking even-numbered tables:");

for (let tableNum = 1; tableNum <= 10; tableNum++) {
  // Skip odd-numbered tables
  if (tableNum % 2 !== 0) {
    continue; // Skip the rest of this iteration
  }
  
  console.log(\`Checking table #\${tableNum}\`);
}

/* Output:
Checking even-numbered tables:
Checking table #2
Checking table #4
Checking table #6
Checking table #8
Checking table #10
*/`;

const forLoopNestedExample = `// Assigning servers to tables in different sections
const sections = ["Main", "Patio", "Bar"];
const tablesPerSection = 4;

for (let s = 0; s < sections.length; s++) {
  console.log(\`Section: \${sections[s]}\`);
  
  for (let t = 1; t <= tablesPerSection; t++) {
    console.log(\`  - Table \${sections[s]}-\${t}\`);
  }
}

/* Output:
Section: Main
  - Table Main-1
  - Table Main-2
  - Table Main-3
  - Table Main-4
Section: Patio
  - Table Patio-1
  - Table Patio-2
  - Table Patio-3
  - Table Patio-4
Section: Bar
  - Table Bar-1
  - Table Bar-2
  - Table Bar-3
  - Table Bar-4
*/`;

const infiniteLoopExample = `// DON'T RUN THIS CODE!
// This is an infinite loop
for (let i = 1; i > 0; i++) {
  console.log("This will never end!");
}

// The condition (i > 0) will always be true
// because i starts at 1 and keeps increasing`;

const offByOneExample = `// Array has 5 elements (indices 0-4)
const menuItems = ["Salmon", "Steak", "Pasta", "Salad", "Cake"];

// INCORRECT: This will cause an error
for (let i = 0; i <= menuItems.length; i++) {
  console.log(menuItems[i]); // Error on last iteration!
}

// CORRECT: Use < instead of <=
for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]); // Works correctly
}`;

// More code examples will be added here

// While loop examples
const whileLoopSyntax = `while (condition) {
  // Code to be executed as long as the condition is true
}`;

const whileLoopExample = `// Serving customers until the restaurant is empty
let customersInRestaurant = 8;

console.log("The Black Swan Bistro is open with " + 
            customersInRestaurant + " customers.");

while (customersInRestaurant > 0) {
  console.log("Serving customer...");
  customersInRestaurant--;
  console.log("Customers remaining: " + customersInRestaurant);
}

console.log("The restaurant is now empty.");

/* Output:
The Black Swan Bistro is open with 8 customers.
Serving customer...
Customers remaining: 7
Serving customer...
Customers remaining: 6
...
Serving customer...
Customers remaining: 0
The restaurant is now empty.
*/`;

const whileLoopUserInputExample = `// Simulating taking orders until the customer is done
// Note: In a browser, you would use prompt() for real user input

let orderComplete = false;
let orderItems = [];

// Simulating user input with an array of responses
const userResponses = ["Salmon", "Salad", "Wine", "no"];
let responseIndex = 0;

function getNextItem() {
  // In a real app, this would be: return prompt("What would you like to order? (Type 'no' to finish)");
  return userResponses[responseIndex++];
}

while (!orderComplete) {
  const item = getNextItem();
  
  if (item.toLowerCase() === "no") {
    orderComplete = true;
    console.log("Order complete!");
  } else {
    orderItems.push(item);
    console.log(\`Added \${item} to your order.\`);
  }
}

console.log(\`Final order: \${orderItems.join(", ")}\`);

/* Output:
Added Salmon to your order.
Added Salad to your order.
Added Wine to your order.
Order complete!
Final order: Salmon, Salad, Wine
*/`;

const whileLoopFindingExample = `// Finding a table with a specific reservation
const reservations = [
  { table: 1, name: "Johnson", guests: 2 },
  { table: 2, name: "Smith", guests: 4 },
  { table: 3, name: "Davis", guests: 3 },
  { table: 4, name: "Rodriguez", guests: 5 },
  { table: 5, name: "Chen", guests: 2 }
];

const searchName = "Davis";
let found = false;
let i = 0;

while (i < reservations.length && !found) {
  if (reservations[i].name === searchName) {
    found = true;
    console.log(\`Found reservation for \${searchName} at table \${reservations[i].table}\`);
  }
  i++;
}

if (!found) {
  console.log(\`No reservation found for \${searchName}\`);
}

/* Output:
Found reservation for Davis at table 3
*/`;

// Do-while loop examples
const doWhileLoopSyntax = `do {
  // Code to be executed at least once
} while (condition);`;

const doWhileLoopExample = `// Collecting customer feedback
let feedback = "";
let rating = 0;
let feedbackCollected = false;

// Simulating user input
const ratings = [4, 3, 5, 2];
let ratingIndex = 0;

function getNextRating() {
  // In a real app, this would be: return parseInt(prompt("Rate your experience from 1-5:"));
  return ratings[ratingIndex++];
}

do {
  rating = getNextRating();
  
  if (rating >= 1 && rating <= 5) {
    feedbackCollected = true;
    console.log(\`Thank you for your rating of \${rating} stars!\`);
    
    if (rating <= 3) {
      console.log("We're sorry your experience wasn't perfect. We'll do better next time!");
    }
  } else {
    console.log("Please enter a valid rating between 1 and 5.");
  }
} while (!feedbackCollected);

console.log("Feedback process complete.");

/* Output:
Thank you for your rating of 4 stars!
Feedback process complete.
*/`;

const doWhileLoopMenuExample = `// Restaurant management system menu
let option;
let exit = false;

// Simulating user input
const userChoices = [2, 1, 4];
let choiceIndex = 0;

function getNextChoice() {
  // In a real app, this would be: return parseInt(prompt("Enter your choice:"));
  return userChoices[choiceIndex++];
}

do {
  console.log("\\n===== BLACK SWAN BISTRO MANAGEMENT =====");
  console.log("1. View Reservations");
  console.log("2. Add New Order");
  console.log("3. Check Inventory");
  console.log("4. Exit");
  console.log("=======================================");
  
  option = getNextChoice();
  
  switch (option) {
    case 1:
      console.log("Viewing all reservations...");
      break;
    case 2:
      console.log("Adding new order...");
      break;
    case 3:
      console.log("Checking inventory levels...");
      break;
    case 4:
      console.log("Exiting system. Goodbye!");
      exit = true;
      break;
    default:
      console.log("Invalid option. Please try again.");
  }
} while (!exit);

/* Output:
===== BLACK SWAN BISTRO MANAGEMENT =====
1. View Reservations
2. Add New Order
3. Check Inventory
4. Exit
=======================================
Adding new order...

===== BLACK SWAN BISTRO MANAGEMENT =====
1. View Reservations
2. Add New Order
3. Check Inventory
4. Exit
=======================================
Viewing all reservations...

===== BLACK SWAN BISTRO MANAGEMENT =====
1. View Reservations
2. Add New Order
3. Check Inventory
4. Exit
=======================================
Exiting system. Goodbye!
*/`;

const doWhileLoopValidationExample = `// Validating a reservation time
let validTime = false;
let reservationTime;

// Simulating user input
const timeInputs = ["25:00", "9:00", "19:30"];
let timeIndex = 0;

function getNextTimeInput() {
  // In a real app, this would be: return prompt("Enter reservation time (HH:MM):");
  return timeInputs[timeIndex++];
}

do {
  reservationTime = getNextTimeInput();
  console.log(\`Checking time: \${reservationTime}\`);
  
  // Simple validation: check if it matches a time format and hour is 0-23
  const timePattern = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  
  if (timePattern.test(reservationTime)) {
    validTime = true;
    console.log(\`Reservation time set for \${reservationTime}\`);
  } else {
    console.log("Invalid time format. Please use HH:MM (24-hour format).");
  }
} while (!validTime);

console.log("Reservation process complete.");

/* Output:
Checking time: 25:00
Invalid time format. Please use HH:MM (24-hour format).
Checking time: 9:00
Reservation time set for 9:00
Reservation process complete.
*/`;

const whileLoopMistakeExample = `// DON'T RUN THIS CODE!
// This is an infinite loop
let i = 0;

while (i < 5) {
  console.log("This will run forever!");
  // Forgot to increment i
}

// CORRECT version:
let j = 0;
while (j < 5) {
  console.log("This will run 5 times.");
  j++; // Don't forget this!
}`;

const doWhileLoopMistakeExample = `// This will always run once, even though the condition is false
let alreadyDone = true;

do {
  console.log("This will run once, even though alreadyDone is true");
} while (!alreadyDone);

// If you want to check the condition first, use a regular while loop:
while (!alreadyDone) {
  console.log("This will never run because alreadyDone is true");
}`;

// For...of loop examples
const forOfLoopSyntax = `for (const element of iterable) {
  // Code to be executed for each element
}`;

const forOfLoopExample = `// Processing orders at the Black Swan Bistro
const orders = [
  "Grilled Salmon",
  "Beef Steak",
  "Pasta Primavera",
  "Caesar Salad",
  "Chocolate Cake"
];

console.log("Starting to prepare orders...");

// Using for...of to iterate through orders
for (const dish of orders) {
  console.log(\`Preparing \${dish}...\`);
  console.log(\`\${dish} is ready to serve!\`);
}

console.log("All orders are ready!");

/* Output:
Starting to prepare orders...
Preparing Grilled Salmon...
Grilled Salmon is ready to serve!
Preparing Beef Steak...
Beef Steak is ready to serve!
Preparing Pasta Primavera...
Pasta Primavera is ready to serve!
Preparing Caesar Salad...
Caesar Salad is ready to serve!
Preparing Chocolate Cake...
Chocolate Cake is ready to serve!
All orders are ready!
*/`;

const forOfLoopIterablesExample = `// Iterating through different types of iterables

// Array example
const ingredients = ["flour", "sugar", "eggs", "butter"];
console.log("Cake ingredients:");
for (const ingredient of ingredients) {
  console.log(\`- \${ingredient}\`);
}

// String example
const restaurantName = "BLACK SWAN";
console.log("\\nSpelling out the restaurant name:");
for (const letter of restaurantName) {
  console.log(letter);
}

// Map example
const menuPrices = new Map([
  ["Salmon", 24.99],
  ["Steak", 29.99],
  ["Pasta", 18.99]
]);
console.log("\\nMenu with prices:");
for (const [dish, price] of menuPrices) {
  console.log(\`\${dish}: $\${price}\`);
}

// Set example (unique values)
const uniqueCustomers = new Set(["Smith", "Johnson", "Smith", "Davis"]);
console.log("\\nUnique customers today:");
for (const customer of uniqueCustomers) {
  console.log(customer);
}`;

const forOfVsForInExample = `// Comparing for...of and for...in

const dishes = ["Salmon", "Steak", "Pasta"];

// for...of iterates over values
console.log("Using for...of (values):");
for (const dish of dishes) {
  console.log(dish);
}
/* Output:
Using for...of (values):
Salmon
Steak
Pasta
*/

// for...in iterates over indices (keys)
console.log("\\nUsing for...in (indices):");
for (const index in dishes) {
  console.log(index + ": " + dishes[index]);
}
/* Output:
Using for...in (indices):
0: Salmon
1: Steak
2: Pasta
*/

// Object with for...in (the correct use)
const menuPrices = {
  Salmon: 24.99,
  Steak: 29.99,
  Pasta: 18.99
};

console.log("\\nUsing for...in with an object (correct usage):");
for (const dish in menuPrices) {
  console.log(\`\${dish}: $\${menuPrices[dish]}\`);
}
/* Output:
Using for...in with an object (correct usage):
Salmon: $24.99
Steak: $29.99
Pasta: $18.99
*/

// Objects are not iterable with for...of by default
console.log("\\nTrying to use for...of with an object:");
try {
  for (const item of menuPrices) {
    console.log(item);
  }
} catch (error) {
  console.log(\`Error: \${error.message}\`);
}
/* Output:
Trying to use for...of with an object:
Error: menuPrices is not iterable
*/`;

// For...in loop examples
const forInLoopSyntax = `for (const key in object) {
  // Code to be executed for each property
}`;

const forInLoopExample = `// Managing menu prices at the Black Swan Bistro
const menuPrices = {
  "Grilled Salmon": 24.99,
  "Beef Steak": 29.99,
  "Pasta Primavera": 18.99,
  "Caesar Salad": 12.99,
  "Chocolate Cake": 8.99
};

console.log("Menu Items and Prices:");

// Using for...in to iterate through object properties
for (const dish in menuPrices) {
  console.log(\`\${dish}: $\${menuPrices[dish].toFixed(2)}\`);
}

// Calculating total menu value
let totalMenuValue = 0;
for (const dish in menuPrices) {
  totalMenuValue += menuPrices[dish];
}

console.log(\`\\nTotal value of all menu items: $\${totalMenuValue.toFixed(2)}\`);

// Applying a 10% price increase
console.log("\\nUpdated Menu (10% price increase):");
for (const dish in menuPrices) {
  menuPrices[dish] *= 1.1; // Increase price by 10%
  console.log(\`\${dish}: $\${menuPrices[dish].toFixed(2)}\`);
}

/* Output:
Menu Items and Prices:
Grilled Salmon: $24.99
Beef Steak: $29.99
Pasta Primavera: $18.99
Caesar Salad: $12.99
Chocolate Cake: $8.99

Total value of all menu items: $95.95

Updated Menu (10% price increase):
Grilled Salmon: $27.49
Beef Steak: $32.99
Pasta Primavera: $20.89
Caesar Salad: $14.29
Chocolate Cake: $9.89
*/`;

// Break and continue examples
const breakExample = `// Finding a specific reservation
const reservations = [
  { id: 101, name: "Johnson", time: "18:00", guests: 2 },
  { id: 102, name: "Smith", time: "19:00", guests: 4 },
  { id: 103, name: "Davis", time: "19:30", guests: 3 },
  { id: 104, name: "Rodriguez", time: "20:00", guests: 5 },
  { id: 105, name: "Chen", time: "20:30", guests: 2 }
];

const searchName = "Davis";
let foundReservation = null;

console.log(\`Searching for reservation under name: \${searchName}\`);

for (const reservation of reservations) {
  console.log(\`Checking reservation #\${reservation.id}...\`);
  
  if (reservation.name === searchName) {
    foundReservation = reservation;
    console.log(\`Found reservation for \${searchName}!\`);
    break; // Exit the loop once we find the reservation
  }
}

if (foundReservation) {
  console.log(\`\\nReservation details for \${searchName}:\`);
  console.log(\`Time: \${foundReservation.time}\`);
  console.log(\`Number of guests: \${foundReservation.guests}\`);
} else {
  console.log(\`\\nNo reservation found for \${searchName}\`);
}

/* Output:
Found reservation for Davis at table 3
*/`;

const continueExample = `// Processing orders with dietary restrictions
const orders = [
  { table: 1, dish: "Grilled Salmon", allergies: false },
  { table: 2, dish: "Beef Steak", allergies: false },
  { table: 3, dish: "Pasta Primavera", allergies: true },
  { table: 4, dish: "Caesar Salad", allergies: false },
  { table: 5, dish: "Chocolate Cake", allergies: true }
];

console.log("Processing regular orders first:");

for (const order of orders) {
  // Skip orders with allergy concerns for now
  if (order.allergies) {
    console.log(\`Skipping \${order.dish} for table \${order.table} - requires special handling for allergies.\`);
    continue; // Skip to the next iteration
  }
  
  console.log(\`Preparing \${order.dish} for table \${order.table}...\`);
  console.log(\`\${order.dish} for table \${order.table} is ready to serve!\`);
}

console.log("\\nNow processing orders with allergy concerns:");

for (const order of orders) {
  if (!order.allergies) {
    continue; // Skip orders without allergy concerns
  }
  
  console.log(\`Carefully preparing \${order.dish} for table \${order.table} with allergy protocols...\`);
  console.log(\`\${order.dish} for table \${order.table} is ready to serve (allergy-safe)!\`);
}

/* Output:
Processing regular orders first:
Preparing Grilled Salmon for table 1...
Grilled Salmon for table 1 is ready to serve!
Preparing Beef Steak for table 2...
Beef Steak for table 2 is ready to serve!
Skipping Pasta Primavera for table 3 - requires special handling for allergies.
Preparing Caesar Salad for table 4...
Caesar Salad for table 4 is ready to serve!
Skipping Chocolate Cake for table 5 - requires special handling for allergies.

Now processing orders with allergy concerns:
Carefully preparing Pasta Primavera for table 3 with allergy protocols...
Pasta Primavera for table 3 is ready to serve (allergy-safe)!
Carefully preparing Chocolate Cake for table 5 with allergy protocols...
Chocolate Cake for table 5 is ready to serve (allergy-safe)!
*/`;

// Practice exercise examples
const htmlSetupCode = `<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Loops Practice</title>
  </head>
  <body>
    <h1>Check the console for results</h1>

    <script>
      // Your practice code goes here
    <\/script>
  </body>
</html>`;

const challengeCode = `// Challenge: Create a restaurant order processing system

// 1. Create an array of orders, where each order contains multiple items
// 2. Use a for loop to process each order
// 3. Use a for...of loop to process each item in an order
// 4. Use a while loop to simulate the cooking process
// 5. Use a for...in loop to calculate the total price of each order
// 6. Use break and continue to handle special cases

// Your code here`;

const solutionCode = `// Black Swan Bistro Order Processing System

// Menu prices
const menuPrices = {
  "Grilled Salmon": 24.99,
  "Beef Steak": 29.99,
  "Pasta Primavera": 18.99,
  "Caesar Salad": 12.99,
  "Chocolate Cake": 8.99,
  "House Wine": 9.99,
  "Garlic Bread": 5.99,
  "Soup of the Day": 7.99
};

// Orders for different tables
const orders = [
  {
    tableNumber: 1,
    items: ["Grilled Salmon", "Caesar Salad", "Chocolate Cake"],
    specialRequests: false,
    status: "pending"
  },
  {
    tableNumber: 2,
    items: ["Beef Steak", "Garlic Bread", "House Wine"],
    specialRequests: true,
    status: "pending"
  },
  {
    tableNumber: 3,
    items: ["Pasta Primavera", "Soup of the Day"],
    specialRequests: false,
    status: "pending"
  },
  {
    tableNumber: 4,
    items: ["Beef Steak", "Beef Steak", "Caesar Salad", "Chocolate Cake"],
    specialRequests: false,
    status: "pending"
  }
];

// 1. Process each order using a for loop
console.log("===== BLACK SWAN BISTRO ORDER SYSTEM =====");
for (let i = 0; i < orders.length; i++) {
  const order = orders[i];
  console.log(\`\\nProcessing order for Table #\${order.tableNumber}:\`);
  
  // Skip tables with special requests for now
  if (order.specialRequests) {
    console.log(\`Table #\${order.tableNumber} has special requests. Handling separately.\`);
    continue;
  }
  
  // 2. Process each item in the order using for...of
  console.log(\`Items ordered:\`);
  for (const item of order.items) {
    console.log(\`- \${item}\`);
  }
  
  // 3. Simulate cooking process with while loop
  let cookingTime = 5; // minutes
  console.log(\`\\nCooking order for Table #\${order.tableNumber}:\`);
  while (cookingTime > 0) {
    console.log(\`\${cookingTime} minute(s) remaining...\`);
    cookingTime--;
    
    // If we're cooking a steak, it needs extra attention
    if (order.items.includes("Beef Steak") && cookingTime === 2) {
      console.log(\`Flipping the steak...\`);
    }
  }
  console.log(\`Cooking complete for Table #\${order.tableNumber}!\`);
  
  // 4. Calculate total price using for...in
  let totalPrice = 0;
  let itemCounts = {};
  
  // Count items
  for (const item of order.items) {
    if (itemCounts[item]) {
      itemCounts[item]++;
    } else {
      itemCounts[item] = 1;
    }
  }
  
  console.log(\`\\nBill for Table #\${order.tableNumber}:\`);
  for (const item in itemCounts) {
    const quantity = itemCounts[item];
    const itemTotal = menuPrices[item] * quantity;
    totalPrice += itemTotal;
    console.log(\`\${item} x\${quantity}: $\${itemTotal.toFixed(2)}\`);
  }
  
  // Apply discount for large orders
  if (totalPrice > 50) {
    const discount = totalPrice * 0.1;
    console.log(\`Subtotal: $\${totalPrice.toFixed(2)}\`);
    console.log(\`Discount (10%): -$\${discount.toFixed(2)}\`);
    totalPrice -= discount;
  }
  
  // Add tax
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + tax;
  
  console.log(\`Tax (8%): $\${tax.toFixed(2)}\`);
  console.log(\`Total: $\${finalTotal.toFixed(2)}\`);
  
  // Update order status
  orders[i].status = "completed";
}

// Process special requests
console.log("\\n===== PROCESSING SPECIAL REQUESTS =====");
for (const order of orders) {
  if (order.specialRequests) {
    console.log(\`Handling special requests for Table #\${order.tableNumber}:\`);
    
    // Calculate total
    let totalPrice = 0;
    for (const item of order.items) {
      totalPrice += menuPrices[item];
      console.log(\`- \${item}: $\${menuPrices[item].toFixed(2)}\`);
    }
    
    console.log(\`Special preparation completed for Table #\${order.tableNumber}\`);
    console.log(\`Total: $\${totalPrice.toFixed(2)}\`);
    
    // Update order status
    order.status = "completed";
  }
}

// Final status check
console.log("\\n===== FINAL ORDER STATUS =====");
let allOrdersCompleted = true;
for (const order of orders) {
  console.log(\`Table #\${order.tableNumber}: \${order.status.toUpperCase()}\`);
  if (order.status !== "completed") {
    allOrdersCompleted = false;
    break;
  }
}

if (allOrdersCompleted) {
  console.log("\\nAll orders have been successfully processed!");
} else {
  console.log("\\nThere are still pending orders to process.");
}`;
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Loops in JavaScript',
		description:
			'Learn how to use loops to repeat actions and iterate through data in JavaScript',
		category: 'JavaScript',
		level: 'Beginner',
		order: 5,
		tags: ['javascript', 'loops', 'iteration', 'for', 'while'],
		lastUpdated: '2023-10-15',
	},
};
</script>

<style scoped>
.highlight-box {
	background-color: #f0f8ff;
	border-left: 5px solid #3273dc;
}

.try-it-box {
	background-color: #f0fff4;
	border-left: 5px solid #48c774;
}

.tip-box {
	background-color: #fff5eb;
	border-left: 5px solid #ffdd57;
}

.warning-box {
	background-color: #feecf0;
	border-left: 5px solid #f14668;
}

.solution-box {
	background-color: #f5f5f5;
	border-left: 5px solid #363636;
}

.js-logo-container {
	display: inline-block;
	width: 40px;
	height: 40px;
	margin-right: 10px;
	vertical-align: middle;
}

.js-logo {
	width: 100%;
	height: 100%;
}

.loop-diagram {
	max-width: 600px;
	margin: 0 auto;
}

.box h3 {
	margin-bottom: 1rem;
}

.box ul,
.box ol {
	margin-left: 1.5rem;
}

.notification {
	margin: 1.5rem 0;
}

.button {
	transition: all 0.3s ease;
}

.button:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.loop-visualization {
	max-width: 100%;
	margin: 1rem auto;
}

.loop-animation {
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 1rem;
	background-color: #f9f9f9;
}

.table-container {
	overflow-x: auto;
}
</style>
