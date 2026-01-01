<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/">
						<i class="fa-solid fa-house mr-2"></i> Home
					</router-link>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/javascript-basics">
						JavaScript Basics
					</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Control Flow</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">45 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-success">Level 3</span>
		</div>

		<h1 class="title is-1">
			<i class="fa-brands fa-js html-icon mr-2"></i>
			Control Flow in JavaScript
		</h1>
		<p class="subtitle">
			Learn how to make decisions and repeat actions in your code.
		</p>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb fa-sm mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this tutorial, we
				recommend completing the
				<router-link to="/tutorials/beginner/javascript-basics/variables-data-types"
					>Variables & Data Types</router-link
				>
				and
				<router-link to="/tutorials/beginner/javascript-basics/operators"
					>Operators & Expressions</router-link
				>
				tutorials to understand the concepts used here.
			</p>
		</div>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb fa-sm"></i> In this tutorial, you'll learn:
			</h3>
			<ul>
				<li>How to make decisions in your code using if statements</li>
				<li>When and how to use else if for multiple conditions</li>
				<li>How to use switch statements for multiple choices</li>
				<li>Understanding and using the ternary operator</li>
				<li>Working with truthy and falsy values</li>
				<li>Best practices for writing conditional logic</li>
				<li>Real-world applications of control flow</li>
			</ul>
		</div>

		<h2 id="if-statements" class="title is-2">Conditions with If Statements</h2>
		<p>
			Conditions allow your code to make decisions based on different
			situations. Think of them as forks in a road - your code can take
			different paths depending on certain conditions.
		</p>

		<h3 id="basic-if" class="title is-4">Basic If Statement</h3>
		<p>
			The simplest form of a condition. If the condition is true, the code
			inside the curly braces will run:
		</p>

		<div class="diagram-container mb-4">
			<svg width="400" height="200" viewBox="0 0 400 200">
				<!-- Start circle -->
				<circle cx="50" cy="100" r="20" fill="#3273dc"/>
				<text x="50" y="105" text-anchor="middle" fill="white">Start</text>
				
				<!-- Decision diamond -->
				<path d="M 150,50 L 200,100 L 150,150 L 100,100 Z" fill="#ffdd57"/>
				<text x="150" y="105" text-anchor="middle">Condition?</text>
				
				<!-- True path -->
				<path d="M 200,100 L 300,100" stroke="#48c774" stroke-width="3" fill="none"/>
				<text x="250" y="90" text-anchor="middle" fill="#48c774">True</text>
				
				<!-- Code block -->
				<rect x="300" y="75" width="80" height="50" rx="5" fill="#48c774"/>
				<text x="340" y="105" text-anchor="middle" fill="white">Code</text>
				
				<!-- Connecting lines -->
				<path d="M 70,100 L 100,100" stroke="#3273dc" stroke-width="3" fill="none"/>
				<path d="M 150,150 L 150,180" stroke="#f14668" stroke-width="3" fill="none" stroke-dasharray="5,5"/>
				<text x="160" y="170" fill="#f14668">False (skip)</text>
			</svg>
		</div>

		<CodeMirror
			:code="basicIfCode"
			:value="basicIfCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 id="if-else" class="title is-4">If-Else Statement</h3>
		<p>
			This adds an alternative path. If the condition is true, the first block
			runs; otherwise, the else block runs:
		</p>

		<div class="diagram-container mb-4">
			<svg width="400" height="300" viewBox="0 0 400 300">
				<!-- Start circle -->
				<circle cx="50" cy="150" r="20" fill="#3273dc"/>
				<text x="50" y="155" text-anchor="middle" fill="white">Start</text>
				
				<!-- Decision diamond -->
				<path d="M 150,100 L 200,150 L 150,200 L 100,150 Z" fill="#ffdd57"/>
				<text x="150" y="155" text-anchor="middle">Condition?</text>
				
				<!-- True path -->
				<path d="M 200,150 L 250,100" stroke="#48c774" stroke-width="3" fill="none"/>
				<text x="220" y="110" text-anchor="middle" fill="#48c774">True</text>
				
				<!-- False path -->
				<path d="M 200,150 L 250,200" stroke="#f14668" stroke-width="3" fill="none"/>
				<text x="220" y="190" text-anchor="middle" fill="#f14668">False</text>
				
				<!-- True block -->
				<rect x="250" y="75" width="80" height="50" rx="5" fill="#48c774"/>
				<text x="290" y="105" text-anchor="middle" fill="white">Code A</text>
				
				<!-- False block -->
				<rect x="250" y="175" width="80" height="50" rx="5" fill="#f14668"/>
				<text x="290" y="205" text-anchor="middle" fill="white">Code B</text>
				
				<!-- Connecting lines -->
				<path d="M 70,150 L 100,150" stroke="#3273dc" stroke-width="3" fill="none"/>
			</svg>
		</div>

		<CodeMirror
			:code="ifElseCode"
			:value="ifElseCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 id="else-if" class="title is-4">If-Else If-Else</h3>
		<p>
			For multiple conditions, you can chain them together. The code checks each
			condition in order until one is true:
		</p>

		<div class="diagram-container mb-4">
			<svg width="500" height="400" viewBox="0 0 500 400">
				<!-- Start circle -->
				<circle cx="50" cy="200" r="20" fill="#3273dc"/>
				<text x="50" y="205" text-anchor="middle" fill="white">Start</text>
				
				<!-- First condition -->
				<path d="M 150,150 L 200,200 L 150,250 L 100,200 Z" fill="#ffdd57"/>
				<text x="150" y="205" text-anchor="middle">Condition 1?</text>
				
				<!-- Second condition -->
				<path d="M 300,150 L 350,200 L 300,250 L 250,200 Z" fill="#ffdd57"/>
				<text x="300" y="205" text-anchor="middle">Condition 2?</text>
				
				<!-- Code blocks -->
				<rect x="200" y="75" width="80" height="50" rx="5" fill="#48c774"/>
				<text x="235" y="105" text-anchor="middle" fill="white">Code A</text>
				
				<rect x="400" y="135" width="80" height="50" rx="5" fill="#48c774"/>
				<text x="440" y="160" text-anchor="middle" fill="white">Code B</text>
				
				<rect x="400" y="275" width="80" height="50" rx="5" fill="#f14668"/>
				<text x="440" y="305" text-anchor="middle" fill="white">Code C</text>
				
				<!-- Connecting lines -->
				<path d="M 70,200 L 100,200" stroke="#3273dc" stroke-width="3" fill="none"/>
				<path d="M 200,200 L 250,200" stroke="#3273dc" stroke-width="3" fill="none"/>
				<path d="M 150,150 L 200,100" stroke="#48c774" stroke-width="3" fill="none"/>
				<path d="M 300,150 L 400,150" stroke="#48c774" stroke-width="3" fill="none"/>
				<path d="M 300,250 L 400,300" stroke="#f14668" stroke-width="3" fill="none"/>
				
				<!-- Labels -->
				<text x="170" y="160" fill="#48c774">True</text>
				<text x="250" y="220" fill="#f14668">False</text>
				<text x="350" y="180" fill="#48c774">True</text>
				<text x="350" y="220" fill="#f14668">False</text>
			</svg>
		</div>

		<CodeMirror
			:code="ifElseIfCode"
			:value="ifElseIfCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Real-world analogy:</strong> Think of conditions like a
				restaurant host deciding where to seat guests. If it's a party of 2,
				seat them at a small table. If it's a party of 4-6, seat them at a
				medium table. Otherwise, seat them at a large table.
			</p>
		</div>

		<h2 class="title is-2">Comparison Operators</h2>
		<p>
			These operators compare values and return true or false. They're essential
			for creating conditions.
		</p>

		<CodeMirror
			:code="comparisonCode"
			:value="comparisonCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-exclamation-triangle"></i> Common Mistake
			</h3>
			<p>
				Be careful with <code>==</code> vs <code>===</code>. The triple equals
				(<code>===</code>) checks both value AND type, which is usually safer.
				For example:
			</p>
			<ul>
				<li><code>5 == "5"</code> is true (same value, different types)</li>
				<li><code>5 === "5"</code> is false (different types)</li>
			</ul>
			<p>
				It's generally recommended to use <code>===</code> to avoid unexpected
				behavior.
			</p>
		</div>

		<h2 class="title is-2">Loops</h2>
		<p>
			Loops allow you to repeat code multiple times. They're perfect for
			processing lists of data or doing something a specific number of times.
		</p>
		<p>
			Here's a brief introduction to loops - we'll cover these in much more
			detail in the
			<router-link to="/tutorials/beginner/javascript-basics/loops"
				>Loops tutorial</router-link
			>.
		</p>

		<h3 class="title is-4">For Loop</h3>
		<p>
			The most common loop. It has three parts: initialization, condition, and
			increment:
		</p>

		<CodeMirror
			:code="forLoopCode"
			:value="forLoopCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">While Loop</h3>
		<p>
			Repeats as long as a condition is true. Make sure the condition eventually
			becomes false, or you'll create an infinite loop:
		</p>

		<CodeMirror
			:code="whileLoopCode"
			:value="whileLoopCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Want to learn more about loops?</strong> Check out our dedicated
				<router-link to="/tutorials/beginner/javascript-basics/loops"
					>Loops tutorial</router-link
				>
				where we cover all types of loops in JavaScript in much more detail,
				including for...of, for...in, do...while, and advanced loop techniques.
			</p>
		</div>

		<h2 id="switch-statements" class="title is-2">Switch Statements</h2>
		<p>
			Switch statements are useful when you have multiple possible values for a
			single variable. They're cleaner than writing many if/else statements:
		</p>

		<div class="diagram-container mb-4">
			<svg width="500" height="400" viewBox="0 0 500 400">
				<!-- Start and value box -->
				<rect x="50" y="25" width="100" height="50" rx="5" fill="#3273dc"/>
				<text x="100" y="50" text-anchor="middle" fill="white">Value</text>
				
				<!-- Cases -->
				<rect x="200" y="25" width="100" height="50" rx="5" fill="#ffdd57"/>
				<text x="250" y="55" text-anchor="middle">Case A</text>
				
				<rect x="200" y="125" width="100" height="50" rx="5" fill="#ffdd57"/>
				<text x="250" y="155" text-anchor="middle">Case B</text>
				
				<rect x="200" y="225" width="100" height="50" rx="5" fill="#ffdd57"/>
				<text x="250" y="255" text-anchor="middle">Case C</text>
				
				<rect x="200" y="325" width="100" height="50" rx="5" fill="#f14668"/>
				<text x="250" y="355" text-anchor="middle">Default</text>
				
				<!-- Code blocks -->
				<rect x="350" y="25" width="100" height="50" rx="5" fill="#48c774"/>
				<text x="400" y="55" text-anchor="middle" fill="white">Code A</text>
				
				<rect x="350" y="125" width="100" height="50" rx="5" fill="#48c774"/>
				<text x="400" y="155" text-anchor="middle" fill="white">Code B</text>
				
				<rect x="350" y="225" width="100" height="50" rx="5" fill="#48c774"/>
				<text x="400" y="255" text-anchor="middle" fill="white">Code C</text>
				
				<rect x="350" y="325" width="100" height="50" rx="5" fill="#48c774"/>
				<text x="400" y="355" text-anchor="middle" fill="white">Code D</text>
				
				<!-- Connecting lines -->
				<path d="M 150,55 L 180,55" stroke="#3273dc" stroke-width="3" fill="none"/>
				<path d="M 180,50 L 180,350" stroke="#3273dc" stroke-width="3" fill="none"/>
				<path d="M 180,50 L 200,50" stroke="#3273dc" stroke-width="3" fill="none"/>
				<path d="M 180,150 L 200,150" stroke="#3273dc" stroke-width="3" fill="none"/>
				<path d="M 180,250 L 200,250" stroke="#3273dc" stroke-width="3" fill="none"/>
				<path d="M 180,350 L 200,350" stroke="#3273dc" stroke-width="3" fill="none"/>
				
				<!-- Break arrows -->
				<path d="M 300,50 L 350,50" stroke="#48c774" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
				<path d="M 300,150 L 350,150" stroke="#48c774" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
				<path d="M 300,250 L 350,250" stroke="#48c774" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
				<path d="M 300,350 L 350,350" stroke="#48c774" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
			</svg>
			
			<!-- Arrow marker definition -->
			<defs>
				<marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
					<polygon points="0 0, 10 3.5, 0 7" fill="#48c774"/>
				</marker>
			</defs>
		</div>

		<CodeMirror
			:code="switchCode"
			:value="switchCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> Important Note
			</h3>
			<p>
				Don't forget the <code>break</code> statement after each case! Without
				it, the code will "fall through" and continue executing the next cases,
				which is rarely what you want.
			</p>
		</div>

		<h3 id="switch-syntax" class="title is-4">Switch Syntax</h3>
		<p>
			Switch statements are useful when you have multiple possible values for a
			single variable. They're cleaner than writing many if/else statements:
		</p>

		<CodeMirror
			:code="switchCode"
			:value="switchCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 id="case-break" class="title is-4">Case and Break</h3>
		<p>
			Don't forget the <code>break</code> statement after each case! Without
			it, the code will "fall through" and continue executing the next cases,
			which is rarely what you want.
		</p>

		<h2 id="ternary-operator" class="title is-2">Ternary Operator</h2>
		<p>
			The ternary operator is a shorthand way to write simple if-else statements.
			It's perfect for quick conditional assignments and returns.
		</p>

		<div class="diagram-container mb-4">
			<svg width="600" height="200" viewBox="0 0 400 200">
				<!-- Condition box -->
				<rect x="50" y="75" width="100" height="50" rx="5" fill="#ffdd57"/>
				<text x="100" y="105" text-anchor="middle">Condition</text>
				
				<!-- Question mark -->
				<text x="170" y="105" text-anchor="middle" font-size="24" fill="#3273dc">?</text>
				
				<!-- True value -->
				<rect x="200" y="25" width="100" height="50" rx="5" fill="#48c774"/>
				<text x="250" y="55" text-anchor="middle" fill="white">True Value</text>
				
				<!-- Colon -->
				<text x="170" y="155" text-anchor="middle" font-size="24" fill="#3273dc">:</text>
				
				<!-- False value -->
				<rect x="200" y="125" width="100" height="50" rx="5" fill="#f14668"/>
				<text x="250" y="155" text-anchor="middle" fill="white">False Value</text>
				
				<!-- Result -->
				<rect x="350" y="75" width="100" height="50" rx="5" fill="#3273dc"/>
				<text x="400" y="105" text-anchor="middle" fill="white">Result</text>
				
				<!-- Connecting lines -->
				<path d="M 150,100 L 170,100" stroke="#3273dc" stroke-width="2" fill="none"/>
				<path d="M 170,100 L 200,50" stroke="#48c774" stroke-width="2" fill="none"/>
				<path d="M 170,100 L 200,150" stroke="#f14668" stroke-width="2" fill="none"/>
				<path d="M 300,50 L 350,100" stroke="#48c774" stroke-width="2" fill="none"/>
				<path d="M 300,150 L 350,100" stroke="#f14668" stroke-width="2" fill="none"/>
			</svg>
		</div>

		<CodeMirror
			:code="ternaryCode"
			:value="ternaryCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> When to Use Ternary
			</h3>
			<ul>
				<li>✅ Simple conditional assignments</li>
				<li>✅ Return statements with two outcomes</li>
				<li>✅ Template literals with conditional text</li>
				<li>❌ Complex conditions (use if/else)</li>
				<li>❌ Multiple outcomes (use if/else if)</li>
				<li>❌ When readability is crucial</li>
			</ul>
		</div>

		<h3 id="nested-ternary" class="title is-4">Nested Ternary</h3>
		<p>
			While possible, nesting ternary operators can make code hard to read.
			Use with caution:
		</p>

		<div class="columns">
			<div class="column">
				<h4 class="title is-5">❌ Hard to Read</h4>
				<CodeMirror
					:code="nestedTernaryBadCode"
					:value="nestedTernaryBadCode"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<div class="column">
				<h4 class="title is-5">✅ Better Alternative</h4>
				<CodeMirror
					:code="nestedTernaryGoodCode"
					:value="nestedTernaryGoodCode"
					language="javascript"
					:read-only="true"
				/>
			</div>
		</div>

		<h2 id="truthy-falsy" class="title is-2">Truthy and Falsy Values</h2>
		<p>
			In JavaScript, values can be converted to booleans automatically in
			conditional contexts. Understanding truthy and falsy values helps write
			cleaner conditions.
		</p>

		<h3 id="falsy-values" class="title is-4">Falsy Values</h3>
		<p>
			These values are considered false when used in conditions:
		</p>

		<CodeMirror
			:code="falsyCode"
			:value="falsyCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 id="truthy-values" class="title is-4">Truthy Values</h3>
		<p>
			Almost everything else is considered true! Here are common examples:
		</p>

		<CodeMirror
			:code="truthyCode"
			:value="truthyCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> Practical Uses
			</h3>
			<p>Understanding truthy/falsy values helps write cleaner code:</p>
			<CodeMirror
				:code="truthyFalsyExamplesCode"
				:value="truthyFalsyExamplesCode"
				language="javascript"
				:read-only="true"
			/>
		</div>

		<h2 id="practice" class="title is-2">Practice Exercises</h2>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Interactive Learning:</strong> Each exercise includes a "Try It" button that runs the code in your browser's console. Experiment with the code and see how changes affect the output!
			</p>
		</div>

		<div class="box practice-box mb-6">
			<h3 class="title is-4">Exercise 1: Menu Item Availability</h3>
			<p>Check if a menu item can be served based on time, availability, and preparation time:</p>
			
			<CodeMirror
				:code="exercise1Code"
				:value="exercise1Code"
				language="javascript"
				:read-only="true"
			/>
			<button class="button is-primary mt-3" @click="runExercise1">
				Try Exercise 1
			</button>
		</div>

		<div class="box practice-box mb-6">
			<h3 class="title is-4">Exercise 2: Customer Discount</h3>
			<p>Determine the discount using ternary operators and truthy/falsy values:</p>
			
			<CodeMirror
				:code="exercise2Code"
				:value="exercise2Code"
				language="javascript"
				:read-only="true"
			/>
			<button class="button is-primary mt-3" @click="runExercise2">
				Try Exercise 2
			</button>
		</div>

		<div class="box practice-box mb-6">
			<h3 class="title is-4">Exercise 3: Table Assignment</h3>
			<p>Use switch statements to assign tables based on party size and preferences:</p>
			
			<CodeMirror
				:code="exercise3Code"
				:value="exercise3Code"
				language="javascript"
				:read-only="true"
			/>
			<button class="button is-primary mt-3" @click="runExercise3">
				Try Exercise 3
			</button>
		</div>

		<div class="box challenge-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-star"></i> Challenge: Order Validation System
			</h3>
			<p>Create a comprehensive order validation system that checks multiple conditions:</p>
			
			<CodeMirror
				:code="challengeCode"
				:value="challengeCode"
				language="javascript"
				:read-only="true"
			/>
			<button class="button is-warning mt-3" @click="runChallenge">
				Try Challenge
			</button>
		</div>

		<div class="box tip-box mb-6">
			<h3 class="title is-4"><i class="fas fa-cog"></i> Setup</h3>
			<p>Choose one of these methods to practice:</p>
			<ol>
				<li>
					<strong>Browser Console:</strong>
					<ul>
						<li>Open DevTools (F12 or Cmd+Option+I)</li>
						<li>Go to the Console tab</li>
						<li>Type or paste the code directly</li>
					</ul>
				</li>
				<li>
					<strong>HTML File:</strong>
					<ul>
						<li>
							Create a new file called <code>practice.html</code> or use your
							existing one
						</li>
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

		<div class="box warning-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-exclamation-triangle"></i> Common Issues & Solutions
			</h3>
			<ul>
				<li>
					<strong>Console shows nothing:</strong> Make sure you're using
					console.log() to see results
				</li>
				<li>
					<strong>Syntax Errors:</strong> Check for missing curly braces {} or
					semicolons ;
				</li>
				<li>
					<strong>File not updating:</strong> Make sure you saved the file and
					refreshed the browser
				</li>
				<li>
					<strong>Cannot find console:</strong>
					<ul>
						<li>Chrome/Edge: Press F12 or right-click → Inspect</li>
						<li>Firefox: Press F12 or right-click → Inspect Element</li>
						<li>Safari: Enable Developer Tools in Preferences first</li>
					</ul>
				</li>
			</ul>
		</div>

		<h2 class="title is-2">Challenge: Black Swan Bistro Menu Filter</h2>
		<p>
			Let's put everything together by creating a menu filtering system for our
			restaurant:
		</p>

		<h3 class="title is-4">Step 1: Setup Menu Items</h3>
		<CodeMirror
			:code="menuItemsCode"
			:value="menuItemsCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">Step 2: Create Filter Functions</h3>
		<CodeMirror
			:code="filterFunctionsCode"
			:value="filterFunctionsCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4"><i class="fas fa-lightbulb"></i> Hints</h3>
			<ul>
				<li>Use array methods like filter()</li>
				<li>Check multiple conditions with && (AND) or || (OR)</li>
				<li>Remember to handle edge cases</li>
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

		<!-- Quiz section -->
		<TutorialQuiz />

		<!-- Recommendations for next steps -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/javascript-basics/conditionals'" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import { usePageSections } from '@/composables/usePageSections';
import { createCodeRunner } from '@/utils/codeRunner';

// Toggle solution visibility
const showSolution = ref(false);
const toggleSolution = () => {
	showSolution.value = !showSolution.value;
};

// Create a code runner instance
const codeRunner = createCodeRunner();

// Code examples
const basicIfCode = `let price = 24.99;

if (price > 20) {
  console.log('This is a premium dish');
}`;

const ifElseCode = `let isVegetarian = true;

if (isVegetarian) {
  console.log('Offer vegetarian menu');
} else {
  console.log('Offer regular menu');
}`;

const ifElseIfCode = `let time = 14; // 24-hour format

if (time < 11) {
  console.log('Serve breakfast menu');
} else if (time < 16) {
  console.log('Serve lunch menu');
} else {
  console.log('Serve dinner menu');
}`;

const comparisonCode = `// Equal to (value)
console.log(5 == '5'); // true

// Strictly equal to (value and type)
console.log(5 === '5'); // false

// Not equal to
console.log(5 != '6'); // true

// Greater than
console.log(10 > 5); // true

// Less than or equal to
console.log(5 <= 5); // true

// Logical AND
console.log(true && true); // true
console.log(true && false); // false

// Logical OR
console.log(true || false); // true
console.log(false || false); // false`;

const forLoopCode = `// Basic for loop
for (let i = 0; i < 3; i++) {
  console.log(\`Dish \${i + 1}\`);
}

// Loop through array
let menuItems = ['Salmon', 'Steak', 'Pasta'];
for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]);
}`;

const forOfCode = `let prices = [24.99, 29.99, 19.99];
for (let price of prices) {
  console.log(\`$\${price}\`);
}`;

const forInCode = `let dish = {
  name: 'Salmon',
  price: 24.99,
  isAvailable: true
};

for (let key in dish) {
  console.log(\`\${key}: \${dish[key]}\`);
}`;

const whileLoopCode = `let orders = 3;
while (orders > 0) {
  console.log(\`Processing order: \${orders}\`);
  orders--;
}`;

const switchCode = `let dayOfWeek = 'Monday';

switch (dayOfWeek) {
  case 'Monday':
    console.log('Chef Special: Pasta');
    break;
  case 'Tuesday':
    console.log('Chef Special: Fish');
    break;
  case 'Wednesday':
    console.log('Chef Special: Steak');
    break;
  default:
    console.log('Regular menu');
}`;

const htmlSetupCode = `<!DOCTYPE html>
<html>
  <head>
    <title>Control Flow Practice</title>
  </head>
  <body>
    <h1>Check the console for results</h1>

		<script>
			// Your practice code goes here
		` + ('</' + 'script>') + `

	
  </body>
</html>`;

const menuItemsCode = `const menuItems = [
  {
    name: 'Grilled Salmon',
    price: 24.99,
    category: 'Seafood',
    isAvailable: true,
    quantity: 5
  },
  {
    name: 'Beef Steak',
    price: 29.99,
    category: 'Meat',
    isAvailable: true,
    quantity: 3
  },
  {
    name: 'Vegetable Pasta',
    price: 18.99,
    category: 'Vegetarian',
    isAvailable: true,
    quantity: 8
  }
];`;

const filterFunctionsCode = `// Your challenge: Create these functions

function getAvailableItems() {
  // Return only available items
}

function getItemsByCategory(category) {
  // Return items in a specific category
}

function getItemsByPriceRange(min, max) {
  // Return items within price range
}

function getLowStockItems(threshold) {
  // Return items with quantity below threshold
}`;

const solutionCode = `function getAvailableItems() {
  return menuItems.filter(item => item.isAvailable && item.quantity > 0);
}

function getItemsByCategory(category) {
  return menuItems.filter(item => 
    item.category === category && item.isAvailable
  );
}

function getItemsByPriceRange(min, max) {
  return menuItems.filter(item => 
    item.price >= min && item.price <= max
  );
}

function getLowStockItems(threshold = 5) {
  return menuItems.filter(item => item.quantity <= threshold);
}

// Test the functions
console.log('Available items:', getAvailableItems());
console.log('Seafood items:', getItemsByCategory('Seafood'));
console.log('Items $15-$25:', getItemsByPriceRange(15, 25));
console.log('Low stock items:', getLowStockItems(3));`;

const sections = [
  {
    id: 'if-statements',
    title: 'if Statements',
    subsections: [
      { id: 'basic-if', title: 'Basic if Statement' },
      { id: 'if-else', title: 'if...else Statement' },
      { id: 'else-if', title: 'else if Clauses' }
    ]
  },
  {
    id: 'switch-statements',
    title: 'switch Statements',
    subsections: [
      { id: 'switch-syntax', title: 'switch Syntax' },
      { id: 'case-break', title: 'case and break' },
      { id: 'default-case', title: 'default Case' }
    ]
  },
  {
    id: 'ternary-operator',
    title: 'Ternary Operator',
    subsections: [
      { id: 'ternary-syntax', title: 'Ternary Syntax' },
      { id: 'nested-ternary', title: 'Nested Ternary' }
    ]
  },
  {
    id: 'truthy-falsy',
    title: 'Truthy and Falsy',
    subsections: [
      { id: 'falsy-values', title: 'Falsy Values' },
      { id: 'truthy-values', title: 'Truthy Values' }
    ]
  },
  {
    id: 'practice',
    title: 'Practice Exercises',
    subsections: []
  }
];

const { pageSections } = usePageSections(sections);

// New code examples for ternary and truthy/falsy sections
const ternaryCode = `// Instead of:
let message;
if (isVegetarian) {
    message = 'Here is our vegetarian menu';
} else {
    message = 'Here is our regular menu';
}

// You can write:
const message = isVegetarian 
    ? 'Here is our vegetarian menu' 
    : 'Here is our regular menu';

// Great for conditional returns
function getPrice(dish) {
    return dish.isSpecial ? dish.price * 0.9 : dish.price;
}

// Perfect for template literals
const greeting = \`Welcome \${isVIP ? 'valued' : 'dear'} guest!\`;`;

const nestedTernaryBadCode = `// Hard to understand at a glance
const price = isSpecial 
    ? isVIP 
        ? 19.99 
        : 24.99 
    : isVIP 
        ? 29.99 
        : 34.99;`;

const nestedTernaryGoodCode = `// Much clearer with if/else
let price;
if (isSpecial) {
    price = isVIP ? 19.99 : 24.99;
} else {
    price = isVIP ? 29.99 : 34.99;
}`;

const falsyCode = `// All these are falsy
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(''));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// In conditions
if (orderCount) {  // same as orderCount !== 0
    console.log('We have orders to process');
}`;

const truthyCode = `// All these are truthy
console.log(Boolean(true));      // true
console.log(Boolean(42));        // true
console.log(Boolean('Hello'));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
console.log(Boolean(function(){})); // true

// Non-zero numbers are truthy
if (orderCount) {
    console.log(\`Processing \${orderCount} orders\`);
}`;

const truthyFalsyExamplesCode = `// Check for empty string
const customerName = '';
if (!customerName) {
    console.log('Please enter your name');
}

// Check for undefined or null
const specialRequest = undefined;
if (specialRequest) {
    console.log('Special request:', specialRequest);
}

// Check for empty array
const orders = [];
if (orders.length) {  // More explicit than just 'if (orders)'
    console.log('Processing orders...');
}

// Default values
const tableSize = customerCount || 2;  // Use 2 if customerCount is falsy
const greeting = guestName && \`Welcome, \${guestName}!\`;  // Only if guestName exists`;

// Practice exercise code examples
const exercise1Code = `const menuItem = {
    name: 'Grilled Salmon',
    preparationTime: 25,
    isAvailable: true,
    ingredients: ['salmon', 'herbs', 'lemon']
};

function canServeItem(item, currentHour = new Date().getHours()) {
    // Check if it's within service hours (11 AM to 10 PM)
    const isServiceHours = currentHour >= 11 && currentHour < 22;
    
    // Check if we have enough time before closing
    const timeUntilClosing = 22 - currentHour;
    const hasEnoughTime = timeUntilClosing > (item.preparationTime / 60);
    
    // Check availability and ingredients
    const hasAllIngredients = item.ingredients && item.ingredients.length > 0;
    
    return isServiceHours && item.isAvailable && hasEnoughTime && hasAllIngredients
        ? \`Yes, we can serve \${item.name}!\`
        : \`Sorry, we cannot serve \${item.name} at this time.\`;
}

// Test the function
console.log(canServeItem(menuItem));`;

const exercise2Code = `function calculateDiscount(order) {
    const {
        isVIP = false,
        totalAmount = 0,
        visitCount = 0,
        hasPromoCode = false
    } = order;

    // Use ternary for VIP discount
    const vipDiscount = isVIP ? 0.15 : 0;
    
    // Use truthy/falsy for loyalty discount
    const loyaltyDiscount = visitCount && visitCount > 10 ? 0.1 : 0;
    
    // Use logical operators for promo code
    const promoDiscount = hasPromoCode && totalAmount > 50 ? 0.05 : 0;
    
    // Calculate total discount
    const totalDiscount = vipDiscount + loyaltyDiscount + promoDiscount;
    
    return {
        originalAmount: totalAmount,
        discount: totalDiscount,
        finalAmount: totalAmount * (1 - totalDiscount)
    };
}

// Test cases
const orders = [
    { totalAmount: 100, isVIP: true, visitCount: 15, hasPromoCode: true },
    { totalAmount: 45, visitCount: 5 },
    { totalAmount: 75, hasPromoCode: true }
];

orders.forEach(order => {
    console.log('Order Summary:', calculateDiscount(order));
});`;

const exercise3Code = `function assignTable(partySize, preferences = {}) {
    const {
        isQuiet = false,
        needsAccessible = false,
        isOutdoor = false
    } = preferences;

    switch (true) {
        case needsAccessible:
            return 'Assigning accessible table near entrance';
            
        case partySize > 8:
            return isQuiet 
                ? 'Assigning private dining room'
                : 'Assigning combined tables in main area';
            
        case isOutdoor && partySize <= 4:
            return 'Assigning patio table';
            
        case isQuiet && partySize <= 2:
            return 'Assigning quiet corner booth';
            
        default:
            return \`Assigning standard table for \${partySize}\`;
    }
}

// Test different scenarios
const scenarios = [
    { size: 2, prefs: { isQuiet: true } },
    { size: 10, prefs: { isQuiet: false } },
    { size: 4, prefs: { isOutdoor: true } },
    { size: 3, prefs: { needsAccessible: true } }
];

scenarios.forEach(({ size, prefs }) => {
    console.log(\`Party of \${size}:\`, assignTable(size, prefs));
});`;

const challengeCode = `class OrderValidator {
    constructor(order) {
        this.order = order;
        this.errors = [];
    }

    validate() {
        this.checkBasicRequirements()
            .checkItemAvailability()
            .checkTimingAndCapacity()
            .checkSpecialRequirements();

        return {
            isValid: this.errors.length === 0,
            errors: this.errors,
            order: this.order
        };
    }

    checkBasicRequirements() {
        const { items, customerInfo } = this.order;

        if (!items?.length) {
            this.errors.push('Order must contain at least one item');
        }

        if (!customerInfo?.name) {
            this.errors.push('Customer name is required');
        }

        return this;
    }

    checkItemAvailability() {
        const { items } = this.order;
        
        items?.forEach(item => {
            if (!item.isAvailable) {
                this.errors.push(\`\${item.name} is currently unavailable\`);
            }
            
            if (item.quantity > item.maxPerOrder) {
                this.errors.push(
                    \`Maximum \${item.maxPerOrder} \${item.name} per order\`
                );
            }
        });

        return this;
    }

    checkTimingAndCapacity() {
        const { deliveryTime, isDelivery } = this.order;
        const currentHour = new Date().getHours();

        if (isDelivery) {
            // Delivery hours: 11 AM to 9:30 PM
            if (currentHour < 11 || currentHour >= 21.5) {
                this.errors.push('Delivery is only available 11 AM - 9:30 PM');
            }

            // Check delivery radius (if applicable)
            if (this.order.deliveryDistance > 5) {
                this.errors.push('Address is outside delivery radius');
            }
        }

        return this;
    }

    checkSpecialRequirements() {
        const { specialRequests, allergyInfo } = this.order;

        // Handle special requests
        if (specialRequests?.length) {
            specialRequests.forEach(request => {
                if (!this.isValidSpecialRequest(request)) {
                    this.errors.push(\`Cannot accommodate: \${request}\`);
                }
            });
        }

        // Handle allergy information
        if (allergyInfo?.length) {
            this.validateAllergyPrecautions();
        }

        return this;
    }

    isValidSpecialRequest(request) {
        const validRequests = [
            'no onions',
            'extra spicy',
            'gluten-free',
            'dairy-free'
        ];
        return validRequests.includes(request.toLowerCase());
    }

    validateAllergyPrecautions() {
        const { allergyInfo, items } = this.order;
        
        items.forEach(item => {
            const allergens = this.getAllergens(item);
            const hasAllergicIngredient = allergyInfo.some(
                allergy => allergens.includes(allergy)
            );
            
            if (hasAllergicIngredient) {
                this.errors.push(
                    \`\${item.name} contains allergens: \${allergens.join(', ')}\`
                );
            }
        });
    }

    getAllergens(item) {
        // Simplified allergen check
        return item.allergens || [];
    }
}

// Test the validator
const testOrder = {
    items: [
        {
            name: 'Seafood Pasta',
            isAvailable: true,
            quantity: 2,
            maxPerOrder: 3,
            allergens: ['shellfish', 'gluten']
        }
    ],
    customerInfo: {
        name: 'John Doe',
        phone: '555-0123'
    },
    isDelivery: true,
    deliveryDistance: 3,
    specialRequests: ['gluten-free'],
    allergyInfo: ['shellfish']
};

const validator = new OrderValidator(testOrder);
console.log('Validation Result:', validator.validate());`;

// Exercise runner functions
const runExercise1 = () => {
    console.clear();
    console.log('Exercise 1: Menu Item Availability');
    console.log('----------------------------------');
    codeRunner.run(exercise1Code);
};

const runExercise2 = () => {
    console.clear();
    console.log('Exercise 2: Customer Discount');
    console.log('----------------------------');
    codeRunner.run(exercise2Code);
};

const runExercise3 = () => {
    console.clear();
    console.log('Exercise 3: Table Assignment');
    console.log('---------------------------');
    codeRunner.run(exercise3Code);
};

const runChallenge = () => {
    console.clear();
    console.log('Challenge: Order Validation System');
    console.log('--------------------------------');
    codeRunner.run(challengeCode);
};
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Control Flow in JavaScript',
		description: 'Learn how to control program flow with conditions and loops',
		category: 'JavaScript',
		level: 'Beginner',
		order: 3,
		tags: ['javascript', 'control flow', 'conditions', 'loops'],
		lastUpdated: '2023-10-15',
	},
};
</script>

<style scoped>
.html-icon {
		color: #f7df1f;
		font-size: 3rem;
		background-color: #000;
		padding: 0;
	}
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
.svg-inline--fa{
	width: 1em;
	height: 1em;
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

.diagram-container {
	background: white;
	padding: 1rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	margin: 1.5rem 0;
}

svg {
	max-width: 100%;
	height: auto;
}

svg text {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	font-size: 12px;
}
</style>
