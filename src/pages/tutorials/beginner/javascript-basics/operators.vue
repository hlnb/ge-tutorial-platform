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
					<router-link to="/tutorials/beginner/javascript-basics">
						JavaScript Basics
					</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Operators & Expressions</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">30 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-success">Level 3</span>
		</div>

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
			Operators & Expressions in JavaScript
		</h1>
		<p class="subtitle">
			Learn how to perform calculations, compare values, and build expressions
			in JavaScript.
		</p>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> In this tutorial, you'll learn:
			</h3>
			<ul>
				<li>Arithmetic operators for mathematical calculations</li>
				<li>Comparison operators for testing conditions</li>
				<li>Logical operators for combining conditions</li>
				<li>Assignment operators for efficient coding</li>
				<li>How to build and evaluate expressions</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this tutorial, we
				recommend completing the
				<router-link to="/tutorials/beginner/javascript-basics/variables-data-types"
					>Variables & Data Types</router-link
				>
				tutorial to understand the concepts used here.
			</p>
		</div>

		<h2 class="title is-2">What are Operators?</h2>
		<p>
			Operators are symbols that perform operations on values and variables.
			Think of them as the verbs of programming - they're what makes things
			happen!
		</p>
		<p>
			In our restaurant analogy, operators are like the cooking instructions in
			a recipe. They tell the chef (JavaScript) what to do with the ingredients
			(variables and values).
		</p>

		<div class="box">
			<h3 class="title is-4">Types of Operators in JavaScript</h3>
			<div class="operators-diagram">
				<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
					<!-- Central "Operators" node -->
					<circle cx="300" cy="150" r="60" fill="#f7df1e" />
					<text x="300" y="155" text-anchor="middle" font-weight="bold">
						Operators
					</text>

					<!-- Arithmetic branch -->
					<line
						x1="300"
						y1="100"
						x2="150"
						y2="50"
						stroke="#333"
						stroke-width="2"
					/>
					<circle cx="150" cy="50" r="45" fill="#e34c26" />
					<text
						x="150"
						y="55"
						text-anchor="middle"
						font-weight="bold"
						fill="white"
					>
						Arithmetic
					</text>

					<!-- Comparison branch -->
					<line
						x1="250"
						y1="150"
						x2="150"
						y2="150"
						stroke="#333"
						stroke-width="2"
					/>
					<circle cx="150" cy="150" r="50" fill="#264de4" />
					<text
						x="150"
						y="155"
						text-anchor="middle"
						font-weight="bold"
						fill="white"
					>
						Comparison
					</text>

					<!-- Logical branch -->
					<line
						x1="300"
						y1="200"
						x2="150"
						y2="250"
						stroke="#333"
						stroke-width="2"
					/>
					<circle cx="150" cy="250" r="50" fill="#41b883" />
					<text
						x="150"
						y="255"
						text-anchor="middle"
						font-weight="bold"
						fill="white"
					>
						Logical
					</text>

					<!-- Assignment branch -->
					<line
						x1="350"
						y1="150"
						x2="450"
						y2="100"
						stroke="#333"
						stroke-width="2"
					/>
					<circle cx="450" cy="100" r="50" fill="#ff6b6b" />
					<text
						x="450"
						y="105"
						text-anchor="middle"
						font-weight="bold"
						fill="white"
					>
						Assignment
					</text>

					<!-- Other branch -->
					<line
						x1="350"
						y1="150"
						x2="450"
						y2="200"
						stroke="#333"
						stroke-width="2"
					/>
					<circle cx="450" cy="200" r="42" fill="#8a2be2" />
					<text
						x="450"
						y="205"
						text-anchor="middle"
						font-weight="bold"
						fill="white"
					>
						Other
					</text>
				</svg>
			</div>
			<p class="mt-4">
				We'll explore each of these operator types in detail, with examples
				relevant to our restaurant theme.
			</p>
		</div>

		<h2 id="arithmetic-operators" class="title is-2">Arithmetic Operators</h2>
		<p>
			Arithmetic operators perform mathematical calculations on numbers. They're
			essential for any calculations in your code.
		</p>

		<div class="table-container">
			<table class="table is-bordered is-striped is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>Operator</th>
						<th>Name</th>
						<th>Purpose</th>
						<th>Example</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>+</code></td>
						<td>Addition</td>
						<td>Adds numbers together</td>
						<td><code>5 + 3</code> equals <code>8</code></td>
					</tr>
					<tr>
						<td><code>-</code></td>
						<td>Subtraction</td>
						<td>Subtracts the right number from the left</td>
						<td><code>10 - 4</code> equals <code>6</code></td>
					</tr>
					<tr>
						<td><code>*</code></td>
						<td>Multiplication</td>
						<td>Multiplies numbers together</td>
						<td><code>3 * 4</code> equals <code>12</code></td>
					</tr>
					<tr>
						<td><code>/</code></td>
						<td>Division</td>
						<td>Divides the left number by the right</td>
						<td><code>12 / 3</code> equals <code>4</code></td>
					</tr>
					<tr>
						<td><code>%</code></td>
						<td>Modulus (Remainder)</td>
						<td>Returns the division remainder</td>
						<td><code>10 % 3</code> equals <code>1</code></td>
					</tr>
					<tr>
						<td><code>**</code></td>
						<td>Exponentiation</td>
						<td>Raises to the power of</td>
						<td><code>2 ** 3</code> equals <code>8</code></td>
					</tr>
					<tr>
						<td><code>++</code></td>
						<td>Increment</td>
						<td>Increases a value by 1</td>
						<td>
							<code>let x = 5; x++;</code> makes <code>x</code> equal
							<code>6</code>
						</td>
					</tr>
					<tr>
						<td><code>--</code></td>
						<td>Decrement</td>
						<td>Decreases a value by 1</td>
						<td>
							<code>let x = 5; x--;</code> makes <code>x</code> equal
							<code>4</code>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-chart-bar"></i> Arithmetic Operations Visualized
			</h3>
			<p>
				Let's visualize how arithmetic operators work in a restaurant context:
			</p>

			<div class="columns is-multiline">
				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h4 class="title is-5">Addition (+)</h4>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Plate 1 -->
								<circle
									cx="60"
									cy="60"
									r="40"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="60" y="65" text-anchor="middle" font-weight="bold">
									$24.99
								</text>
								<text x="60" y="85" text-anchor="middle" font-size="10">
									Salmon
								</text>

								<!-- Plus sign -->
								<text
									x="110"
									y="65"
									text-anchor="middle"
									font-size="24"
									font-weight="bold"
								>
									+
								</text>

								<!-- Plate 2 -->
								<circle
									cx="160"
									cy="60"
									r="40"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="160" y="65" text-anchor="middle" font-weight="bold">
									$18.99
								</text>
								<text x="160" y="85" text-anchor="middle" font-size="10">
									Pasta
								</text>

								<!-- Equals sign -->
								<text
									x="210"
									y="65"
									text-anchor="middle"
									font-size="24"
									font-weight="bold"
								>
									=
								</text>

								<!-- Result -->
								<rect
									x="230"
									y="30"
									width="60"
									height="60"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="2"
								/>
								<text x="260" y="65" text-anchor="middle" font-weight="bold">
									$43.98
								</text>
								<text x="260" y="85" text-anchor="middle" font-size="10">
									Total
								</text>
							</svg>
							<p class="mt-2">Adding items to a customer's bill</p>
						</div>
					</div>
				</div>

				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h4 class="title is-5">Multiplication (*)</h4>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Plate -->
								<circle
									cx="60"
									cy="60"
									r="40"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="60" y="65" text-anchor="middle" font-weight="bold">
									$9.99
								</text>
								<text x="60" y="85" text-anchor="middle" font-size="10">
									Wine
								</text>

								<!-- Multiplication sign -->
								<text
									x="110"
									y="65"
									text-anchor="middle"
									font-size="24"
									font-weight="bold"
								>
									×
								</text>

								<!-- Number of items -->
								<circle
									cx="160"
									cy="60"
									r="40"
									fill="#f0f8ff"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="160" y="65" text-anchor="middle" font-weight="bold">
									3
								</text>
								<text x="160" y="85" text-anchor="middle" font-size="10">
									Glasses
								</text>

								<!-- Equals sign -->
								<text
									x="210"
									y="65"
									text-anchor="middle"
									font-size="24"
									font-weight="bold"
								>
									=
								</text>

								<!-- Result -->
								<rect
									x="230"
									y="30"
									width="60"
									height="60"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="2"
								/>
								<text x="260" y="65" text-anchor="middle" font-weight="bold">
									$29.97
								</text>
								<text x="260" y="85" text-anchor="middle" font-size="10">
									Total
								</text>
							</svg>
							<p class="mt-2">Calculating cost for multiple items</p>
						</div>
					</div>
				</div>

				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h4 class="title is-5">Division (/)</h4>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Bill -->
								<rect
									x="20"
									y="30"
									width="60"
									height="60"
									rx="5"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="50" y="65" text-anchor="middle" font-weight="bold">
									$120
								</text>
								<text x="50" y="85" text-anchor="middle" font-size="10">
									Bill
								</text>

								<!-- Division sign -->
								<text
									x="110"
									y="65"
									text-anchor="middle"
									font-size="24"
									font-weight="bold"
								>
									÷
								</text>

								<!-- Number of people -->
								<g transform="translate(160, 60)">
									<circle
										cx="-15"
										cy="0"
										r="15"
										fill="#f0f8ff"
										stroke="#333"
										stroke-width="1"
									/>
									<circle
										cx="0"
										cy="0"
										r="15"
										fill="#f0f8ff"
										stroke="#333"
										stroke-width="1"
									/>
									<circle
										cx="15"
										cy="0"
										r="15"
										fill="#f0f8ff"
										stroke="#333"
										stroke-width="1"
									/>
									<text x="0" y="5" text-anchor="middle" font-weight="bold">
										4
									</text>
									<text x="0" y="25" text-anchor="middle" font-size="10">
										People
									</text>
								</g>

								<!-- Equals sign -->
								<text
									x="210"
									y="65"
									text-anchor="middle"
									font-size="24"
									font-weight="bold"
								>
									=
								</text>

								<!-- Result -->
								<rect
									x="230"
									y="30"
									width="60"
									height="60"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="2"
								/>
								<text x="260" y="65" text-anchor="middle" font-weight="bold">
									$30
								</text>
								<text x="260" y="85" text-anchor="middle" font-size="10">
									Per Person
								</text>
							</svg>
							<p class="mt-2">Splitting the bill among friends</p>
						</div>
					</div>
				</div>

				<div class="column is-full">
					<div class="notification is-warning is-light">
						<p>
							<i class="fas fa-exclamation-triangle mr-2"></i>
							<strong>Warning: Division by Zero</strong>
						</p>
						<p>
							In JavaScript (and mathematics in general), dividing by zero is
							not allowed and will result in <code>Infinity</code> or
							<code>-Infinity</code>. For example:
						</p>
						<pre><code>let result = 10 / 0;  // Results in Infinity
let negResult = -10 / 0;  // Results in -Infinity</code></pre>
						<p>
							This won't crash your program, but it can lead to unexpected
							behavior. Always check that your divisor is not zero before
							performing division:
						</p>
						<pre><code>// Safe division example
function safeDivide(numerator, denominator) {
  if (denominator === 0) {
    console.error("Cannot divide by zero!");
    return null;
  }
  return numerator / denominator;
}</code></pre>
						<p>
							In our restaurant analogy, this would be like trying to split a
							bill among zero people - it simply doesn't make sense!
						</p>
					</div>
				</div>

				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h4 class="title is-5">Modulus (%)</h4>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Party size -->
								<rect
									x="20"
									y="30"
									width="60"
									height="60"
									rx="5"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="50" y="65" text-anchor="middle" font-weight="bold">
									11
								</text>
								<text x="50" y="85" text-anchor="middle" font-size="10">
									People
								</text>

								<!-- Modulus sign -->
								<text
									x="110"
									y="65"
									text-anchor="middle"
									font-size="24"
									font-weight="bold"
								>
									%
								</text>

								<!-- Table size -->
								<rect
									x="130"
									y="30"
									width="60"
									height="60"
									rx="5"
									fill="#f0f8ff"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="160" y="65" text-anchor="middle" font-weight="bold">
									4
								</text>
								<text x="160" y="85" text-anchor="middle" font-size="10">
									Per Table
								</text>

								<!-- Equals sign -->
								<text
									x="210"
									y="65"
									text-anchor="middle"
									font-size="24"
									font-weight="bold"
								>
									=
								</text>

								<!-- Result -->
								<rect
									x="230"
									y="30"
									width="60"
									height="60"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="2"
								/>
								<text x="260" y="65" text-anchor="middle" font-weight="bold">
									3
								</text>
								<text x="260" y="85" text-anchor="middle" font-size="10">
									Extra Seats
								</text>
							</svg>
							<p class="mt-2">Finding extra seats needed for a party</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-info-circle"></i> Understanding the Modulus Operator
				(%)
			</h3>
			<p>
				The modulus operator (<code>%</code>) might be new to you if you haven't
				seen it in math class. It returns the <strong>remainder</strong> after
				division.
			</p>

			<div class="columns">
				<div class="column">
					<h4 class="title is-5">How It Works:</h4>
					<ul>
						<li>
							<code>10 % 3 = 1</code> (10 divided by 3 equals 3 with a remainder
							of 1)
						</li>
						<li>
							<code>8 % 4 = 0</code> (8 divided by 4 equals 2 with no remainder)
						</li>
						<li>
							<code>7 % 2 = 1</code> (7 divided by 2 equals 3 with a remainder
							of 1)
						</li>
					</ul>
				</div>
				<div class="column">
					<h4 class="title is-5">Common Uses:</h4>
					<ul>
						<li>
							Checking if a number is even or odd:
							<code>x % 2 === 0</code> (even if true)
						</li>
						<li>
							Cycling through a range (like hours on a clock):
							<code>hour % 12</code>
						</li>
						<li>
							Determining if a number is divisible by another:
							<code>x % y === 0</code>
						</li>
					</ul>
				</div>
			</div>

			<div class="mt-3">
				<p>In our restaurant example, we might use the modulus operator to:</p>
				<CodeMirror
					:code="modulusExample"
					:value="modulusExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
		</div>

		<h3 class="title is-4">Restaurant Examples</h3>
		<CodeMirror
			:code="arithmeticExamples"
			:value="arithmeticExamples"
			language="javascript"
			:read-only="true"
		/>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Special note about +:</strong> The <code>+</code> operator can
				also be used to concatenate (join) strings. For example,
				<code>"Hello" + " World"</code> results in <code>"Hello World"</code>.
			</p>
		</div>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> Order of Operations
			</h3>
			<p>
				JavaScript follows the standard mathematical order of operations, known
				as PEMDAS (in the US) or BEDMAS (in many other countries):
			</p>
			<ol>
				<li>
					<strong>P</strong>arentheses / <strong>B</strong>rackets:
					<code>()</code>
				</li>
				<li>
					<strong>E</strong>xponents / <strong>E</strong>xponentiation:
					<code>**</code>
				</li>
				<li>
					<strong>M</strong>ultiplication and <strong>D</strong>ivision:
					<code>*</code>, <code>/</code>, <code>%</code>
				</li>
				<li>
					<strong>A</strong>ddition and <strong>S</strong>ubtraction:
					<code>+</code>, <code>-</code>
				</li>
			</ol>
			<div class="order-of-operations-diagram">
				<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
					<!-- PEMDAS/BEDMAS diagram -->
					<rect x="50" y="20" width="300" height="30" fill="#f7df1e" />
					<text x="200" y="40" text-anchor="middle" font-weight="bold">
						Parentheses/Brackets ()
					</text>

					<rect
						x="75"
						y="55"
						width="250"
						height="25"
						fill="#f7df1e"
						opacity="0.9"
					/>
					<text x="200" y="72" text-anchor="middle" font-weight="bold">
						Exponents **
					</text>

					<rect
						x="100"
						y="85"
						width="200"
						height="25"
						fill="#f7df1e"
						opacity="0.8"
					/>
					<text x="200" y="102" text-anchor="middle" font-weight="bold">
						Multiplication * / %
					</text>

					<rect
						x="125"
						y="115"
						width="150"
						height="25"
						fill="#f7df1e"
						opacity="0.7"
					/>
					<text x="200" y="132" text-anchor="middle" font-weight="bold">
						Addition + -
					</text>
				</svg>
			</div>
			<p class="mt-3">
				Example: <code>2 + 3 * 4</code> equals <code>14</code> (not
				<code>20</code>) because multiplication happens before addition.
			</p>
			<p>
				If you want to change the order, use parentheses/brackets:
				<code>(2 + 3) * 4</code> equals <code>20</code>.
			</p>
			<div class="notification is-info is-light mt-3">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Note:</strong> You might have learned this as PEMDAS
					(Parentheses, Exponents, Multiplication/Division,
					Addition/Subtraction) or BEDMAS (Brackets, Exponents,
					Division/Multiplication, Addition/Subtraction). Both are correct and
					refer to the same order of operations.
				</p>
			</div>
		</div>

		<h3 class="title is-4">Try It Yourself</h3>
		<div class="box try-it-box">
			<p class="mb-4">
				Let's practice using operators with some real-world examples. Open your browser's console
				(F12 or right-click → Inspect → Console) and try these calculations:
			</p>
			
			<div class="code-examples-container">
				<div class="code-panel">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-5">Restaurant Bill Calculator</h5>
							<div class="code-container">
								<CodeMirror
									:code="restaurantExample"
									:value="restaurantExample"
									language="javascript"
									:read-only="true"
								/>
							</div>
							<button class="button is-primary mt-3" @click="runRestaurantExample">
								<i class="fas fa-play mr-2"></i> Run Example
							</button>
						</div>
					</div>
				</div>
				
				<div class="code-panel">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-5">Tip Calculator</h5>
							<div class="code-container">
								<CodeMirror
									:code="tipExample"
									:value="tipExample"
									language="javascript"
									:read-only="true"
								/>
							</div>
							<button class="button is-primary mt-3" @click="runTipExample">
								<i class="fas fa-play mr-2"></i> Run Example
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-lightbulb mr-2"></i>
					<strong>Pro Tip:</strong> Use the console to experiment with different values
					and operators. Try modifying the examples above with your own numbers!
				</p>
			</div>
		</div>

		<h2 id="comparison-operators" class="title is-2">Comparison Operators</h2>
		<p>
			Comparison operators compare two values and return a boolean result (true
			or false). They're essential for making decisions in your code.
		</p>

		<div class="table-container">
			<table class="table is-bordered is-striped is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>Operator</th>
						<th>Name</th>
						<th>Purpose</th>
						<th>Example</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>==</code></td>
						<td>Equal to (value)</td>
						<td>Tests if values are equal</td>
						<td><code>5 == "5"</code> is <code>true</code></td>
					</tr>
					<tr>
						<td><code>===</code></td>
						<td>Strictly equal to (value and type)</td>
						<td>Tests if values and types are equal</td>
						<td><code>5 === "5"</code> is <code>false</code></td>
					</tr>
					<tr>
						<td><code>!=</code></td>
						<td>Not equal to (value)</td>
						<td>Tests if values are not equal</td>
						<td><code>5 != "6"</code> is <code>true</code></td>
					</tr>
					<tr>
						<td><code>!==</code></td>
						<td>Strictly not equal to (value and type)</td>
						<td>Tests if values or types are not equal</td>
						<td><code>5 !== "5"</code> is <code>true</code></td>
					</tr>
					<tr>
						<td><code>></code></td>
						<td>Greater than</td>
						<td>Tests if left value is greater than right</td>
						<td><code>10 > 5</code> is <code>true</code></td>
					</tr>
					<tr>
						<td><code><</code></td>
						<td>Less than</td>
						<td>Tests if left value is less than right</td>
						<td><code>5 < 10</code> is <code>true</code></td>
					</tr>
					<tr>
						<td><code>>=</code></td>
						<td>Greater than or equal to</td>
						<td>Tests if left value is greater than or equal to right</td>
						<td><code>10 >= 10</code> is <code>true</code></td>
					</tr>
					<tr>
						<td><code><=</code></td>
						<td>Less than or equal to</td>
						<td>Tests if left value is less than or equal to right</td>
						<td><code>5 <= 5</code> is <code>true</code></td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="box warning-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-exclamation-triangle"></i> Important: == vs ===
			</h3>
			<div class="columns">
				<div class="column">
					<h4 class="title is-5">== (Double Equals)</h4>
					<p>Compares <strong>values</strong> only</p>
					<p>Performs type conversion</p>
					<p>Less strict, more forgiving</p>
					<CodeMirror
						:code="doubleEqualsExample"
						:value="doubleEqualsExample"
						language="javascript"
						:read-only="true"
					/>
				</div>
				<div class="column">
					<h4 class="title is-5">=== (Triple Equals)</h4>
					<p>Compares <strong>values AND types</strong></p>
					<p>No type conversion</p>
					<p>More strict, safer</p>
					<CodeMirror
						:code="tripleEqualsExample"
						:value="tripleEqualsExample"
						language="javascript"
						:read-only="true"
					/>
				</div>
			</div>
			<p class="mt-3">
				<strong>Best Practice:</strong> Use <code>===</code> (and
				<code>!==</code>) by default to avoid unexpected behavior.
			</p>
		</div>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-balance-scale"></i> Comparison Operators Visualized
			</h3>
			<p>
				Let's visualize how comparison operators work using restaurant prices:
			</p>

			<div class="columns is-multiline">
				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h4 class="title is-5">Greater Than (>)</h4>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Balance scale -->
								<line
									x1="150"
									y1="30"
									x2="150"
									y2="90"
									stroke="#333"
									stroke-width="2"
								/>
								<line
									x1="80"
									y1="60"
									x2="220"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>

								<!-- Left side (heavier) -->
								<line
									x1="80"
									y1="60"
									x2="80"
									y2="80"
									stroke="#333"
									stroke-width="2"
								/>
								<circle
									cx="80"
									cy="90"
									r="35"
									fill="#ff6b6b"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="80" y="95" text-anchor="middle" font-weight="bold">
									$29.99
								</text>

								<!-- Right side (lighter) -->
								<line
									x1="220"
									y1="60"
									x2="220"
									y2="40"
									stroke="#333"
									stroke-width="2"
								/>
								<circle
									cx="220"
									cy="30"
									r="30"
									fill="#4ecdc4"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="220" y="35" text-anchor="middle" font-weight="bold">
									$18.99
								</text>

								<!-- Result -->
								<rect
									x="125"
									y="75"
									width="50"
									height="20"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="1"
								/>
								<text x="150" y="115" text-anchor="middle" font-size="14">
									true
								</text>
							</svg>
							<p class="mt-2">$29.99 > $18.99 is true</p>
						</div>
					</div>
				</div>

				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h4 class="title is-5">Less Than or Equal To (<=)</h4>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Balance scale -->
								<line
									x1="150"
									y1="30"
									x2="150"
									y2="90"
									stroke="#333"
									stroke-width="2"
								/>
								<line
									x1="80"
									y1="60"
									x2="220"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>

								<!-- Left side (equal) -->
								<line
									x1="80"
									y1="60"
									x2="80"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>
								<circle
									cx="80"
									cy="60"
									r="35"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="80" y="65" text-anchor="middle" font-weight="bold">
									$24.99
								</text>

								<!-- Right side (equal) -->
								<line
									x1="220"
									y1="60"
									x2="220"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>
								<circle
									cx="220"
									cy="60"
									r="35"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="220" y="65" text-anchor="middle" font-weight="bold">
									$24.99
								</text>

								<!-- Result -->
								<rect
									x="125"
									y="100"
									width="50"
									height="20"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="1"
								/>
								<text x="150" y="115" text-anchor="middle" font-size="14">
									true
								</text>
							</svg>
							<p class="mt-2">$24.99 <= $24.99 is true</p>
						</div>
					</div>
				</div>
			</div>

			<h4 class="title is-5 mt-4">Comparison Truth Table</h4>
			<div class="table-container">
				<table class="table is-bordered is-striped is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th>Expression</th>
							<th>Result</th>
							<th>Visual</th>
							<th>Explanation</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>5 > 3</code></td>
							<td><span class="tag is-success">true</span></td>
							<td>
								<svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
									<circle cx="30" cy="15" r="10" fill="#ff6b6b" />
									<text x="30" y="20" text-anchor="middle" font-size="12">
										5
									</text>
									<text x="50" y="20" text-anchor="middle" font-size="16">
										&gt;
									</text>
									<circle cx="70" cy="15" r="8" fill="#4ecdc4" />
									<text x="70" y="20" text-anchor="middle" font-size="12">
										3
									</text>
								</svg>
							</td>
							<td>5 is greater than 3</td>
						</tr>
						<tr>
							<td><code>5 < 3</code></td>
							<td><span class="tag is-danger">false</span></td>
							<td>
								<svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
									<circle cx="30" cy="15" r="10" fill="#ff6b6b" />
									<text x="30" y="20" text-anchor="middle" font-size="12">
										5
									</text>
									<text x="50" y="20" text-anchor="middle" font-size="16">
										&lt;
									</text>
									<circle cx="70" cy="15" r="8" fill="#4ecdc4" />
									<text x="70" y="20" text-anchor="middle" font-size="12">
										3
									</text>
								</svg>
							</td>
							<td>5 is not less than 3</td>
						</tr>
						<tr>
							<td><code>5 >= 5</code></td>
							<td><span class="tag is-success">true</span></td>
							<td>
								<svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
									<circle cx="30" cy="15" r="10" fill="#f5f5f5" />
									<text x="30" y="20" text-anchor="middle" font-size="12">
										5
									</text>
									<text x="50" y="20" text-anchor="middle" font-size="16">
										≥
									</text>
									<circle cx="70" cy="15" r="10" fill="#f5f5f5" />
									<text x="70" y="20" text-anchor="middle" font-size="12">
										5
									</text>
								</svg>
							</td>
							<td>5 is equal to 5</td>
						</tr>
						<tr>
							<td><code>5 === "5"</code></td>
							<td><span class="tag is-danger">false</span></td>
							<td>
								<svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
									<circle cx="30" cy="15" r="10" fill="#ff6b6b" />
									<text x="30" y="20" text-anchor="middle" font-size="12">
										5
									</text>
									<text x="50" y="20" text-anchor="middle" font-size="16">
										≡
									</text>
									<rect
										x="60"
										y="5"
										width="20"
										height="20"
										rx="3"
										fill="#4ecdc4"
									/>
									<text x="70" y="20" text-anchor="middle" font-size="12">
										"5"
									</text>
								</svg>
							</td>
							<td>Different types (number vs string)</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Restaurant Analogy:</strong> Comparison operators are like
					checking reservations. Is this table for more than 4 people? Is the
					customer's budget less than or equal to $50? These comparisons help
					make decisions about seating, menu recommendations, and more.
				</p>
			</div>
		</div>

		<h3 class="title is-4">Restaurant Examples</h3>
		<CodeMirror
			:code="comparisonExamples"
			:value="comparisonExamples"
			language="javascript"
			:read-only="true"
		/>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Note:</strong> Comparison operators are essential for
				conditional statements (if/else), which we'll cover in the Control Flow
				tutorial.
			</p>
		</div>

		<h2 id="logical-operators" class="title is-2">Logical Operators</h2>
		<p>
			Logical operators combine multiple conditions and return a boolean result.
			 They're used to make complex decisions based on multiple factors.
		</p>

		<div class="table-container">
			<table class="table is-bordered is-striped is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>Operator</th>
						<th>Name</th>
						<th>Purpose</th>
						<th>Example</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>&&</code></td>
						<td>Logical AND</td>
						<td>Returns true if both conditions are true</td>
						<td>
							<code>true && true</code> is <code>true</code><br /><code
								>true && false</code
							>
							is <code>false</code>
						</td>
					</tr>
					<tr>
						<td><code>||</code></td>
						<td>Logical OR</td>
						<td>Returns true if at least one condition is true</td>
						<td>
							<code>true || false</code> is <code>true</code><br /><code
								>false || false</code
							>
							is <code>false</code>
						</td>
					</tr>
					<tr>
						<td><code>!</code></td>
						<td>Logical NOT</td>
						<td>Inverts a boolean value</td>
						<td>
							<code>!true</code> is <code>false</code><br /><code>!false</code>
							is <code>true</code>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="logical-operators-diagram">
			<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
				<!-- AND operator -->
				<g transform="translate(0, 0)">
					<text x="100" y="20" text-anchor="middle" font-weight="bold">
						AND (&&)
					</text>
					<rect
						x="50"
						y="30"
						width="50"
						height="50"
						fill="#3273dc"
						opacity="0.7"
					/>
					<rect
						x="100"
						y="30"
						width="50"
						height="50"
						fill="#3273dc"
						opacity="0.7"
					/>
					<text
						x="75"
						y="60"
						text-anchor="middle"
						fill="white"
						font-weight="bold"
					>
						A
					</text>
					<text
						x="125"
						y="60"
						text-anchor="middle"
						fill="white"
						font-weight="bold"
					>
						B
					</text>
					<rect x="50" y="80" width="100" height="25" fill="#3273dc" />
					<text
						x="100"
						y="97"
						text-anchor="middle"
						fill="white"
						font-weight="bold"
					>
						A && B
					</text>
					<text x="100" y="120" text-anchor="middle">Both must be true</text>
				</g>

				<!-- OR operator -->
				<g transform="translate(200, 0)">
					<text x="100" y="20" text-anchor="middle" font-weight="bold">
						OR (||)
					</text>
					<rect
						x="50"
						y="30"
						width="50"
						height="50"
						fill="#ff6b6b"
						opacity="0.7"
					/>
					<rect
						x="100"
						y="30"
						width="50"
						height="50"
						fill="#ff6b6b"
						opacity="0.7"
					/>
					<text
						x="75"
						y="60"
						text-anchor="middle"
						fill="white"
						font-weight="bold"
					>
						A
					</text>
					<text
						x="125"
						y="60"
						text-anchor="middle"
						fill="white"
						font-weight="bold"
					>
						B
					</text>
					<rect x="50" y="80" width="100" height="25" fill="#ff6b6b" />
					<text
						x="100"
						y="97"
						text-anchor="middle"
						fill="white"
						font-weight="bold"
					>
						A || B
					</text>
					<text x="100" y="120" text-anchor="middle">
						At least one must be true
					</text>
				</g>

				<!-- NOT operator -->
				<g transform="translate(400, 0)">
					<text x="100" y="20" text-anchor="middle" font-weight="bold">
						NOT (!)
					</text>
					<rect
						x="75"
						y="30"
						width="50"
						height="50"
						fill="#41b883"
						opacity="0.7"
					/>
					<text
						x="100"
						y="60"
						text-anchor="middle"
						fill="white"
						font-weight="bold"
					>
						A
					</text>
					<rect x="75" y="80" width="50" height="25" fill="#41b883" />
					<text
						x="100"
						y="97"
						text-anchor="middle"
						fill="white"
						font-weight="bold"
					>
						!A
					</text>
					<text x="100" y="120" text-anchor="middle">Inverts the value</text>
				</g>
			</svg>
		</div>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-project-diagram"></i> Logical Operators Visualized
			</h3>
			<p>
				Let's visualize how logical operators work using Venn diagrams and
				circuit diagrams:
			</p>

			<h4 class="title is-5 mt-4">Venn Diagrams</h4>
			<div class="columns">
				<div class="column">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">AND (&&)</h5>
							<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
								<!-- Two overlapping circles -->
								<circle
									cx="75"
									cy="75"
									r="60"
									fill="#3273dc"
									opacity="0.5"
									stroke="#333"
									stroke-width="1"
								/>
								<text
									x="50"
									y="75"
									text-anchor="middle"
									fill="white"
									font-weight="bold"
								>
									A
								</text>
								<text x="40" y="40" font-size="10">isVegetarian</text>

								<circle
									cx="125"
									cy="75"
									r="60"
									fill="#ff6b6b"
									opacity="0.5"
									stroke="#333"
									stroke-width="1"
								/>
								<text
									x="150"
									y="75"
									text-anchor="middle"
									fill="white"
									font-weight="bold"
								>
									B
								</text>
								<text x="160" y="40" font-size="10">!hasAllergies</text>

								<!-- Intersection (AND) -->
								<path
									d="M 75,75 m 25,0 a 25,25 0 0 1 0,0"
									fill="#41b883"
									opacity="0.8"
								/>
								<circle cx="100" cy="75" r="25" fill="#41b883" opacity="0.8" />
								<text
									x="100"
									y="80"
									text-anchor="middle"
									fill="white"
									font-weight="bold"
								>
									A && B
								</text>

								<text x="100" y="130" text-anchor="middle" font-size="12">
									Only the intersection is true
								</text>
							</svg>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">OR (||)</h5>
							<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
								<!-- Two overlapping circles -->
								<circle
									cx="75"
									cy="75"
									r="60"
									fill="#3273dc"
									opacity="0.5"
									stroke="#333"
									stroke-width="1"
								/>
								<text
									x="50"
									y="75"
									text-anchor="middle"
									fill="white"
									font-weight="bold"
								>
									A
								</text>
								<text x="40" y="20" font-size="10">isWeekend</text>

								<circle
									cx="125"
									cy="75"
									r="60"
									fill="#ff6b6b"
									opacity="0.5"
									stroke="#333"
									stroke-width="1"
								/>
								<text
									x="75"
									y="75"
									text-anchor="middle"
									fill="white"
									font-weight="bold"
								>
									B
								</text>
								<text x="110" y="20" font-size="10">!hasReservation</text>

								<!-- Union (OR) - highlight both circles -->
								<circle
									cx="75"
									cy="75"
									r="60"
									fill="#41b883"
									opacity="0.3"
									stroke="none"
								/>
								<circle
									cx="125"
									cy="75"
									r="60"
									fill="#41b883"
									opacity="0.3"
									stroke="none"
								/>
								<text
									x="100"
									y="80"
									text-anchor="middle"
									fill="#333"
									font-weight="bold"
								>
									A || B
								</text>

								<text x="100" y="130" text-anchor="middle" font-size="12">
									The entire area is true
								</text>
							</svg>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">NOT (!)</h5>
							<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
								<!-- Universe rectangle -->
								<rect
									x="25"
									y="25"
									width="150"
									height="100"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="1"
								/>
								<text x="40" y="45" font-size="10">
									Universe (all possible values)
								</text>

								<!-- Circle representing A -->
								<circle
									cx="100"
									cy="75"
									r="30"
									fill="#3273dc"
									opacity="0.3"
									stroke="#333"
									stroke-width="1"
								/>
								<text
									x="100"
									y="80"
									text-anchor="middle"
									fill="white"
									font-weight="bold"
								>
									A
								</text>
								<text x="100" y="95" text-anchor="middle" font-size="10">
									isWeekend
								</text>

								<!-- NOT A - everything outside the circle -->
								<path
									d="M 25,25 h 150 v 100 h -150 z"
									fill="#41b883"
									opacity="0.3"
								/>
								<circle cx="100" cy="75" r="40" fill="white" stroke="none" />
								<text x="90" y="130" text-anchor="middle" font-size="12">
									!A (everything outside A)
								</text>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<h4 class="title is-5 mt-4">Circuit Diagrams</h4>
			<div class="columns">
				<div class="column">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">AND Circuit</h5>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Input A -->
								<rect
									x="20"
									y="30"
									width="100"
									height="20"
									rx="3"
									fill="#3273dc"
									stroke="#333"
									stroke-width="1"
								/>
								<text x="70" y="45" text-anchor="middle" fill="white">
									isVegetarian
								</text>
								<line
									x1="120"
									y1="40"
									x2="150"
									y2="40"
									stroke="#333"
									stroke-width="2"
								/>

								<!-- Input B -->
								<rect
									x="20"
									y="70"
									width="100"
									height="20"
									rx="3"
									fill="#3273dc"
									stroke="#333"
									stroke-width="1"
								/>
								<text x="70" y="85" text-anchor="middle" fill="white">
									!hasAllergies
								</text>
								<line
									x1="120"
									y1="80"
									x2="150"
									y2="80"
									stroke="#333"
									stroke-width="2"
								/>

								<!-- AND Gate -->
								<path
									d="M 150,30 h 30 a 20,20 0 0 1 0,60 h -30 z"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="175" y="65" text-anchor="middle" font-weight="bold">
									AND
								</text>

								<!-- Output -->
								<line
									x1="210"
									y1="60"
									x2="250"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>
								<rect
									x="250"
									y="50"
									width="30"
									height="20"
									rx="3"
									fill="#41b883"
									stroke="#333"
									stroke-width="1"
								/>
								<text x="265" y="65" text-anchor="middle" fill="white">
									true
								</text>
							</svg>
							<p class="mt-2">
								Both inputs must be true for the output to be true
							</p>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">OR Circuit</h5>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Input A -->
								<rect
									x="5"
									y="30"
									width="110"
									height="20"
									rx="3"
									fill="#ff6b6b"
									stroke="#333"
									stroke-width="1"
								/>
								<text x="70" y="45" text-anchor="middle" fill="white">
									isWeekend
								</text>
								<line
									x1="115"
									y1="40"
									x2="150"
									y2="40"
									stroke="#333"
									stroke-width="2"
								/>

								<!-- Input B -->
								<rect
									x="5"
									y="70"
									width="120"
									height="20"
									rx="3"
									fill="#ff6b6b"
									stroke="#333"
									stroke-width="1"
								/>
								<text x="70" y="85" text-anchor="middle" fill="white">
									!hasReservation
								</text>
								<line
									x1="125"
									y1="80"
									x2="150"
									y2="80"
									stroke="#333"
									stroke-width="2"
								/>

								<!-- OR Gate -->
								<path
									d="M 150,30 h 10 q 20,0 20,30 q 0,30 -20,30 h -10 z"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="165" y="65" text-anchor="middle" font-weight="bold">
									OR
								</text>

								<!-- Output -->
								<line
									x1="180"
									y1="60"
									x2="250"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>
								<rect
									x="250"
									y="50"
									width="30"
									height="20"
									rx="3"
									fill="#41b883"
									stroke="#333"
									stroke-width="1"
								/>
								<text x="265" y="65" text-anchor="middle" fill="white">
									true
								</text>
							</svg>
							<p class="mt-2">
								At least one input must be true for the output to be true
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Restaurant Analogy:</strong> Logical operators are like
					restaurant policies. A customer can order from the special menu if
					they are vegetarian AND don't have allergies. A customer should expect
					to wait if it's the weekend OR they don't have a reservation.
				</p>
			</div>
		</div>

		<h3 class="title is-4">Restaurant Examples</h3>
		<CodeMirror
			:code="logicalExamples"
			:value="logicalExamples"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4"><i class="fas fa-lightbulb"></i> Truth Tables</h3>
			<div class="columns">
				<div class="column">
					<h4 class="title is-5">AND (&&)</h4>
					<table class="table is-bordered is-narrow">
						<thead>
							<tr>
								<th>A</th>
								<th>B</th>
								<th>A && B</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>true</td>
								<td>true</td>
								<td>true</td>
							</tr>
							<tr>
								<td>true</td>
								<td>false</td>
								<td>false</td>
							</tr>
							<tr>
								<td>false</td>
								<td>true</td>
								<td>false</td>
							</tr>
							<tr>
								<td>false</td>
								<td>false</td>
								<td>false</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<h4 class="title is-5">OR (||)</h4>
					<table class="table is-bordered is-narrow">
						<thead>
							<tr>
								<th>A</th>
								<th>B</th>
								<th>A || B</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>true</td>
								<td>true</td>
								<td>true</td>
							</tr>
							<tr>
								<td>true</td>
								<td>false</td>
								<td>true</td>
							</tr>
							<tr>
								<td>false</td>
								<td>true</td>
								<td>true</td>
							</tr>
							<tr>
								<td>false</td>
								<td>false</td>
								<td>false</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="column">
					<h4 class="title is-5">NOT (!)</h4>
					<table class="table is-bordered is-narrow">
						<thead>
							<tr>
								<th>A</th>
								<th>!A</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>true</td>
								<td>false</td>
							</tr>
							<tr>
								<td>false</td>
								<td>true</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<h2 id="assignment-operators" class="title is-2">Assignment Operators</h2>
		<p>
			Assignment operators assign values to variables. They're used to set or
			update variable values.
		</p>

		<div class="table-container">
			<table class="table is-bordered is-striped is-hoverable is-fullwidth">
				<thead>
					<tr>
						<th>Operator</th>
						<th>Name</th>
						<th>Purpose</th>
						<th>Example</th>
						<th>Equivalent to</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><code>=</code></td>
						<td>Assignment</td>
						<td>Assigns a value to a variable</td>
						<td><code>x = 10</code></td>
						<td><code>x = 10</code></td>
					</tr>
					<tr>
						<td><code>+=</code></td>
						<td>Addition assignment</td>
						<td>Adds and assigns</td>
						<td><code>x += 5</code></td>
						<td><code>x = x + 5</code></td>
					</tr>
					<tr>
						<td><code>-=</code></td>
						<td>Subtraction assignment</td>
						<td>Subtracts and assigns</td>
						<td><code>x -= 3</code></td>
						<td><code>x = x - 3</code></td>
					</tr>
					<tr>
						<td><code>*=</code></td>
						<td>Multiplication assignment</td>
						<td>Multiplies and assigns</td>
						<td><code>x *= 2</code></td>
						<td><code>x = x * 2</code></td>
					</tr>
					<tr>
						<td><code>/=</code></td>
						<td>Division assignment</td>
						<td>Divides and assigns</td>
						<td><code>x /= 4</code></td>
						<td><code>x = x / 4</code></td>
					</tr>
					<tr>
						<td><code>%=</code></td>
						<td>Remainder assignment</td>
						<td>Gets remainder and assigns</td>
						<td><code>x %= 3</code></td>
						<td><code>x = x % 3</code></td>
					</tr>
				</tbody>
			</table>
		</div>

		<h3 class="title is-4">Restaurant Examples</h3>
		<CodeMirror
			:code="assignmentExamples"
			:value="assignmentExamples"
			language="javascript"
			:read-only="true"
		/>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-exchange-alt"></i> Assignment Operators Visualized
			</h3>
			<p>Let's visualize how assignment operators change variable values:</p>

			<h4 class="title is-5 mt-4">Before and After Visualization</h4>
			<div class="columns is-multiline">
				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">Basic Assignment (=)</h5>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Variable container before -->
								<rect
									x="20"
									y="40"
									width="80"
									height="40"
									rx="5"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="60" y="50" text-anchor="middle" font-size="12">
									bill
								</text>
								<text
									x="60"
									y="70"
									text-anchor="middle"
									font-weight="bold"
									font-size="16"
								>
									undefined
								</text>

								<!-- Arrow -->
								<line
									x1="120"
									y1="60"
									x2="180"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>
								<polygon points="180,60 170,55 170,65" fill="#333" />
								<text x="150" y="50" text-anchor="middle" font-size="14">
									bill = 50
								</text>

								<!-- Variable container after -->
								<rect
									x="200"
									y="40"
									width="80"
									height="40"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="2"
								/>
								<text x="240" y="50" text-anchor="middle" font-size="12">
									bill
								</text>
								<text
									x="240"
									y="70"
									text-anchor="middle"
									font-weight="bold"
									font-size="16"
								>
									50
								</text>
							</svg>
							<p class="mt-2">Creating a new variable and assigning a value</p>
						</div>
					</div>
				</div>

				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">Addition Assignment (+=)</h5>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Variable container before -->
								<rect
									x="20"
									y="40"
									width="80"
									height="40"
									rx="5"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="60" y="50" text-anchor="middle" font-size="12">
									bill
								</text>
								<text
									x="60"
									y="70"
									text-anchor="middle"
									font-weight="bold"
									font-size="16"
								>
									50
								</text>

								<!-- Arrow -->
								<line
									x1="120"
									y1="60"
									x2="180"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>
								<polygon points="180,60 170,55 170,65" fill="#333" />
								<text x="150" y="50" text-anchor="middle" font-size="14">
									bill += 12
								</text>

								<!-- Variable container after -->
								<rect
									x="200"
									y="40"
									width="80"
									height="40"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="2"
								/>
								<text x="240" y="50" text-anchor="middle" font-size="12">
									bill
								</text>
								<text
									x="240"
									y="70"
									text-anchor="middle"
									font-weight="bold"
									font-size="16"
								>
									62
								</text>
							</svg>
							<p class="mt-2">Adding to an existing value (bill = bill + 12)</p>
						</div>
					</div>
				</div>

				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">Multiplication Assignment (*=)</h5>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Variable container before -->
								<rect
									x="20"
									y="40"
									width="80"
									height="40"
									rx="5"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="60" y="50" text-anchor="middle" font-size="12">
									bill
								</text>
								<text
									x="60"
									y="70"
									text-anchor="middle"
									font-weight="bold"
									font-size="16"
								>
									70
								</text>

								<!-- Arrow -->
								<line
									x1="120"
									y1="60"
									x2="180"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>
								<polygon points="180,60 170,55 170,65" fill="#333" />
								<text x="150" y="50" text-anchor="middle" font-size="14">
									bill *= 0.9
								</text>

								<!-- Variable container after -->
								<rect
									x="200"
									y="40"
									width="80"
									height="40"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="2"
								/>
								<text x="240" y="50" text-anchor="middle" font-size="12">
									bill
								</text>
								<text
									x="240"
									y="70"
									text-anchor="middle"
									font-weight="bold"
									font-size="16"
								>
									63
								</text>
							</svg>
							<p class="mt-2">Applying a 10% discount (bill = bill * 0.9)</p>
						</div>
					</div>
				</div>

				<div class="column is-half">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">Division Assignment (/=)</h5>
							<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
								<!-- Variable container before -->
								<rect
									x="20"
									y="40"
									width="80"
									height="40"
									rx="5"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="60" y="50" text-anchor="middle" font-size="12">
									bill
								</text>
								<text
									x="60"
									y="70"
									text-anchor="middle"
									font-weight="bold"
									font-size="16"
								>
									63
								</text>

								<!-- Arrow -->
								<line
									x1="120"
									y1="60"
									x2="180"
									y2="60"
									stroke="#333"
									stroke-width="2"
								/>
								<polygon points="180,60 170,55 170,65" fill="#333" />
								<text x="150" y="50" text-anchor="middle" font-size="14">
									bill /= 2
								</text>

								<!-- Variable container after -->
								<rect
									x="200"
									y="40"
									width="80"
									height="40"
									rx="5"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="2"
								/>
								<text x="240" y="50" text-anchor="middle" font-size="12">
									bill
								</text>
								<text
									x="240"
									y="70"
									text-anchor="middle"
									font-weight="bold"
									font-size="16"
								>
									31.5
								</text>
							</svg>
							<p class="mt-2">
								Splitting the bill between 2 people (bill = bill / 2)
							</p>
						</div>
					</div>
				</div>
			</div>

			<h4 class="title is-5 mt-4">Container Metaphor</h4>
			<div class="columns">
				<div class="column">
					<div class="card">
						<div class="card-content">
							<h5 class="title is-6">Variables as Containers</h5>
							<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
								<!-- Bill variable -->
								<rect
									x="50"
									y="30"
									width="100"
									height="140"
									rx="5"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="100" y="50" text-anchor="middle" font-weight="bold">
									bill
								</text>

								<!-- Initial value -->
								<rect
									x="60"
									y="60"
									width="80"
									height="30"
									rx="3"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="1"
								/>
								<text x="100" y="80" text-anchor="middle">$50</text>
								<text x="30" y="80" text-anchor="end" font-size="12">
									Initial:
								</text>

								<!-- After += -->
								<rect
									x="60"
									y="100"
									width="80"
									height="30"
									rx="3"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="1"
								/>
								<text x="100" y="120" text-anchor="middle">$62</text>
								<text x="30" y="120" text-anchor="end" font-size="12">
									+= 12:
								</text>

								<!-- After *= -->
								<rect
									x="60"
									y="140"
									width="80"
									height="30"
									rx="3"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="1"
								/>
								<text x="100" y="160" text-anchor="middle">$55.80</text>
								<text x="30" y="160" text-anchor="end" font-size="12">
									*= 0.9:
								</text>

								<!-- Tip variable -->
								<rect
									x="250"
									y="30"
									width="100"
									height="140"
									rx="5"
									fill="#f5f5f5"
									stroke="#333"
									stroke-width="2"
								/>
								<text x="300" y="50" text-anchor="middle" font-weight="bold">
									tip
								</text>

								<!-- Tip calculation -->
								<rect
									x="260"
									y="60"
									width="80"
									height="30"
									rx="3"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="1"
								/>
								<text x="300" y="80" text-anchor="middle">$11.16</text>
								<text x="230" y="80" text-anchor="end" font-size="12">
									= bill * 0.2:
								</text>

								<!-- Total -->
								<rect
									x="260"
									y="100"
									width="80"
									height="30"
									rx="3"
									fill="#e6f7ff"
									stroke="#1890ff"
									stroke-width="1"
								/>
								<text x="300" y="120" text-anchor="middle">$66.96</text>
								<text x="230" y="120" text-anchor="end" font-size="12">
									bill += tip:
								</text>

								<!-- Arrows showing flow -->
								<line
									x1="160"
									y1="75"
									x2="240"
									y2="75"
									stroke="#333"
									stroke-width="1"
									stroke-dasharray="5,5"
								/>
								<line
									x1="160"
									y1="160"
									x2="240"
									y2="75"
									stroke="#333"
									stroke-width="1"
									stroke-dasharray="5,5"
								/>
								<line
									x1="300"
									y1="90"
									x2="300"
									y2="100"
									stroke="#333"
									stroke-width="1"
								/>
								<polygon points="300,100 295,90 305,90" fill="#333" />
							</svg>
							<p class="mt-2">
								Variables store values that can be modified with assignment
								operators
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Restaurant Analogy:</strong> Assignment operators are like
					updating a customer's bill throughout their meal. You start with an
					initial amount, add items (+=), apply discounts (*=), split the bill
					(/=), and calculate the final total.
				</p>
			</div>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Tip:</strong> Assignment operators are shortcuts that make your
				code more concise. They're especially useful when you need to update a
				variable based on its current value.
			</p>
		</div>

		<h2 id="practice" class="title is-2">Practice Exercises</h2>
		<p>
			Let's practice using operators with real-world scenarios from our restaurant theme:
		</p>

		<div class="columns is-multiline">
			<div class="column is-half">
				<div class="card">
					<div class="card-content">
						<h3 class="title is-4">Exercise 1: Menu Price Calculator</h3>
						<p class="mb-4">Calculate the total price for a customer's order:</p>
						<CodeMirror
							:code="menuPriceExample"
							:value="menuPriceExample"
							language="javascript"
							:read-only="true"
						/>
						<button class="button is-primary mt-3" @click="runMenuPriceExample">
							<i class="fas fa-play mr-2"></i> Try It
						</button>
					</div>
				</div>
			</div>

			<div class="column is-half">
				<div class="card">
					<div class="card-content">
						<h3 class="title is-4">Exercise 2: Table Assignment</h3>
						<p class="mb-4">Use the modulus operator to assign tables to parties:</p>
						<CodeMirror
							:code="tableAssignmentExample"
							:value="tableAssignmentExample"
							language="javascript"
							:read-only="true"
						/>
						<button class="button is-primary mt-3" @click="runTableAssignmentExample">
							<i class="fas fa-play mr-2"></i> Try It
						</button>
					</div>
				</div>
			</div>

			<div class="column is-half">
				<div class="card">
					<div class="card-content">
						<h3 class="title is-4">Exercise 3: Discount Calculator</h3>
						<p class="mb-4">Calculate discounts based on conditions:</p>
						<CodeMirror
							:code="discountExample"
							:value="discountExample"
							language="javascript"
							:read-only="true"
						/>
						<button class="button is-primary mt-3" @click="runDiscountExample">
							<i class="fas fa-play mr-2"></i> Try It
						</button>
					</div>
				</div>
			</div>

			<div class="column is-half">
				<div class="card">
					<div class="card-content">
						<h3 class="title is-4">Exercise 4: Split Bill Calculator</h3>
						<p class="mb-4">Calculate individual shares when splitting the bill:</p>
						<CodeMirror
							:code="splitBillExample"
							:value="splitBillExample"
							language="javascript"
							:read-only="true"
						/>
						<button class="button is-primary mt-3" @click="runSplitBillExample">
							<i class="fas fa-play mr-2"></i> Try It
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="notification is-info is-light mt-4">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Pro Tips:</strong>
			</p>
			<ul>
				<li>Use the browser's console to experiment with different values</li>
				<li>Try combining different operators to solve more complex problems</li>
				<li>Pay attention to operator precedence when combining operations</li>
				<li>Use parentheses to make your calculations clearer</li>
			</ul>
		</div>

		<div class="box tip-box mt-6">
			<h3 class="title is-4"><i class="fas fa-graduation-cap"></i> Challenge Yourself</h3>
			<p>Try these additional challenges to test your understanding:</p>
			<ol>
				<li>Calculate the average bill amount for a table of customers</li>
				<li>Determine if a reservation time falls within operating hours</li>
				<li>Calculate the most efficient table arrangement for a large party</li>
				<li>Implement a loyalty points system using arithmetic operators</li>
			</ol>
		</div>

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

		<h3 class="title is-4">Challenge: Black Swan Bistro Bill Calculator</h3>
		<p>Create a program that calculates a restaurant bill with tax and tip:</p>

		<CodeMirror
			:code="challengeCode"
			:value="challengeCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4"><i class="fas fa-lightbulb"></i> Hints</h3>
			<ul>
				<li>Use arithmetic operators to calculate subtotal, tax, and tip</li>
				<li>
					Use comparison operators to check if the customer is eligible for a
					discount
				</li>
				<li>Use logical operators to combine multiple conditions</li>
				<li>Use assignment operators to update variables efficiently</li>
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
		<TutorialRecommendations :current-path="'/tutorials/beginner/javascript-basics/operators'" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import { usePageSections } from '@/composables/usePageSections';

const sections = [
  {
    id: 'arithmetic-operators',
    title: 'Arithmetic Operators',
    subsections: [
      { id: 'basic-arithmetic', title: 'Basic Arithmetic' },
      { id: 'increment-decrement', title: 'Increment and Decrement' },
      { id: 'operator-precedence', title: 'Operator Precedence' }
    ]
  },
  {
    id: 'comparison-operators',
    title: 'Comparison Operators',
    subsections: [
      { id: 'equality-operators', title: 'Equality Operators' },
      { id: 'relational-operators', title: 'Relational Operators' },
      { id: 'strict-vs-loose', title: 'Strict vs Loose Equality' }
    ]
  },
  {
    id: 'logical-operators',
    title: 'Logical Operators',
    subsections: [
      { id: 'and-or-not', title: 'AND, OR, NOT' },
      { id: 'short-circuit', title: 'Short-circuit Evaluation' }
    ]
  },
  {
    id: 'assignment-operators',
    title: 'Assignment Operators',
    subsections: [
      { id: 'basic-assignment', title: 'Basic Assignment' },
      { id: 'compound-assignment', title: 'Compound Assignment' }
    ]
  },
  {
    id: 'practice',
    title: 'Practice Exercises',
    subsections: []
  }
];

const { pageSections } = usePageSections(sections);

// Toggle solution visibility
const showSolution = ref(false);
const toggleSolution = () => {
	showSolution.value = !showSolution.value;
};

// Interactive example methods
const runRestaurantExample = () => {
	console.clear();
	console.log('Running Restaurant Bill Calculator Example:');
	console.log('----------------------------------------');
	
	let bill = 50;
	let taxRate = 0.08;
	let tipRate = 0.15;
	
	let taxAmount = bill * taxRate;
	let tipAmount = bill * tipRate;
	let total = bill + taxAmount + tipAmount;
	
	console.log('Subtotal: $' + bill.toFixed(2));
	console.log('Tax (8%): $' + taxAmount.toFixed(2));
	console.log('Tip (15%): $' + tipAmount.toFixed(2));
	console.log('Total: $' + total.toFixed(2));
	
	alert('Check the console to see the results!');
};

const runTipExample = () => {
	console.clear();
	console.log('Running Tip Calculator Example:');
	console.log('-----------------------------');
	
	let bill = 50;
	let tipRate = 0.15;
	let tipAmount = bill * tipRate;
	
	console.log('Bill: $' + bill.toFixed(2));
	console.log('Tip (15%): $' + tipAmount.toFixed(2));
	console.log('Total: $' + (bill + tipAmount).toFixed(2));
	
	alert('Check the console to see the results!');
};

const runMenuPriceExample = () => {
	console.clear();
	console.log('Running Menu Price Calculator Example:');
	console.log('-----------------------------------');
	
	let salmonPrice = 24.99;
	let steakPrice = 29.99;
	let pastaPrice = 18.99;
	
	let total = (salmonPrice * 2) + pastaPrice;
	
	console.log('Salmon Price: $' + salmonPrice.toFixed(2));
	console.log('Steak Price: $' + steakPrice.toFixed(2));
	console.log('Pasta Price: $' + pastaPrice.toFixed(2));
	console.log('Total for 2 salmon dishes and 1 pasta: $' + total.toFixed(2));
	
	alert('Check the console to see the results!');
};

const runTableAssignmentExample = () => {
	console.clear();
	console.log('Running Table Assignment Example:');
	console.log('-------------------------------');
	
	let partySize = 7;
	let tableSize = 4;
	let tableAssignment = partySize % tableSize;
	tableAssignment = tableAssignment === 0 ? tableSize : tableAssignment;
	
	console.log('Party Size: ' + partySize);
	console.log('Table Size: ' + tableSize);
	console.log('Assigned to table: ' + tableAssignment);
	
	alert('Check the console to see the results!');
};

const runDiscountExample = () => {
	console.clear();
	console.log('Running Discount Calculator Example:');
	console.log('----------------------------------');
	
	let subtotal = 120;
	let discountRate = 0.10;
	let discountAmount = subtotal * discountRate;
	let total = subtotal - discountAmount;
	
	console.log('Subtotal: $' + subtotal.toFixed(2));
	console.log('Discount Rate: ' + (discountRate * 100) + '%');
	console.log('Discount Amount: $' + discountAmount.toFixed(2));
	console.log('Total after discount: $' + total.toFixed(2));
	
	alert('Check the console to see the results!');
};

const runSplitBillExample = () => {
	console.clear();
	console.log('Running Split Bill Calculator Example:');
	console.log('-----------------------------------');
	
	let total = 120;
	let numberOfPeople = 4;
	let perPerson = total / numberOfPeople;
	
	console.log('Total Bill: $' + total.toFixed(2));
	console.log('Number of People: ' + numberOfPeople);
	console.log('Each person pays: $' + perPerson.toFixed(2));
	
	alert('Check the console to see the results!');
};

// Code examples
const arithmeticExamples = `// Menu item prices
let salmonPrice = 24.99;
let steakPrice = 29.99;
let pastaPrice = 18.99;

// Calculate total for 2 salmon dishes and 1 pasta
let subtotal = (salmonPrice * 2) + pastaPrice;
console.log('Subtotal: $' + subtotal); // $68.97

// Calculate 10% tax
let taxRate = 0.1;
let taxAmount = subtotal * taxRate;
console.log('Tax: $' + taxAmount.toFixed(2)); // $6.90

// Calculate total with tax
let total = subtotal + taxAmount;
console.log('Total: $' + total.toFixed(2)); // $75.87

// Calculate change from $100
let change = 100 - total;
console.log('Change: $' + change.toFixed(2)); // $24.13`;

const tryArithmeticExamples = `// Try these calculations
10 + 5          // Addition
20 - 7          // Subtraction
4 * 6           // Multiplication
15 / 3          // Division
10 % 3          // Remainder
2 ** 3          // Exponentiation

// Order of operations
2 + 3 * 4       // Multiplication first
(2 + 3) * 4     // Parentheses first

// Increment and decrement
let count = 5;
count++;        // Increment
console.log(count);
count--;        // Decrement
console.log(count);`;

const doubleEqualsExample = `// Double equals (==) examples
5 == 5      // true (same value, same type)
5 == "5"    // true (same value, different type)
0 == false  // true (type conversion)
"" == false // true (type conversion)
null == undefined // true (type conversion)`;

const tripleEqualsExample = `// Triple equals (===) examples
5 === 5     // true (same value, same type)
5 === "5"   // false (different type)
0 === false // false (different type)
"" === false // false (different type)
null === undefined // false (different type)`;

const comparisonExamples = `// Menu pricing checks
let salmonPrice = 24.99;
let steakPrice = 29.99;
let pastaPrice = 18.99;

// Is salmon more expensive than pasta?
console.log(salmonPrice > pastaPrice); // true

// Is steak the most expensive item?
console.log(steakPrice > salmonPrice && steakPrice > pastaPrice); // true

// Is pasta less than $20?
console.log(pastaPrice < 20); // true

// Check if we have the correct price for salmon
let listedSalmonPrice = "24.99"; // String from menu listing
console.log(salmonPrice == listedSalmonPrice); // true (value comparison)
console.log(salmonPrice === listedSalmonPrice); // false (type is different)`;

const logicalExamples = `// Restaurant scenarios using logical operators
let isVegetarian = true;
let hasAllergies = false;
let isWeekend = true;
let hasReservation = false;

// Can serve special vegetarian menu?
// (Must be vegetarian AND not have allergies)
let canServeSpecialMenu = isVegetarian && !hasAllergies;
console.log('Can serve special menu:', canServeSpecialMenu); // true

// Should customer expect to wait?
// (It's the weekend OR they don't have a reservation)
let shouldExpectWait = isWeekend || !hasReservation;
console.log('Should expect to wait:', shouldExpectWait); // true

// Is eligible for weekday discount?
// (NOT weekend)
let isEligibleForWeekdayDiscount = !isWeekend;
console.log('Eligible for weekday discount:', isEligibleForWeekdayDiscount); // false

// Can be seated immediately?
// (Has reservation AND NOT weekend)
let canBeSeatImmediately = hasReservation && !isWeekend;
console.log('Can be seated immediately:', canBeSeatImmediately); // false`;

const assignmentExamples = `// Restaurant bill calculation with assignment operators
let bill = 50; // Starting bill amount

// Add appetizer ($12)
bill += 12; // bill = bill + 12
console.log('Bill after appetizer: $' + bill); // $62

// Add drinks ($8)
bill += 8; // bill = bill + 8
console.log('Bill after drinks: $' + bill); // $70

// Apply 10% discount
bill *= 0.9; // bill = bill * 0.9
console.log('Bill after discount: $' + bill); // $63

// Split between 2 people
bill /= 2; // bill = bill / 2
console.log('Bill per person: $' + bill); // $31.5

// Calculate tip (20% of original portion)
let tip = bill * 0.2;
console.log('Tip per person: $' + tip); // $6.3

// Total per person
bill += tip; // bill = bill + tip
console.log('Total per person: $' + bill.toFixed(2)); // $37.80`;

const arithmeticExpressionExample = `// Arithmetic expressions
let subtotal = 24.99 + 18.99 + 7.99; // 51.97
let tax = subtotal * 0.08; // 4.16
let total = subtotal + tax; // 56.13`;

const stringExpressionExample = `// String expressions
let firstName = "John";
let lastName = "Smith";
let fullName = firstName + " " + lastName; // "John Smith"

let greeting = \`Welcome to our restaurant, \${fullName}!\`; 
// "Welcome to our restaurant, John Smith!"`;

const logicalExpressionExample = `// Logical expressions
let isVIP = true;
let hasReservation = false;
let canSkipLine = isVIP || hasReservation; // true

let isWeekend = true;
let hasSpecialMenu = false;
let canOrderSpecial = !isWeekend && hasSpecialMenu; // false`;

const assignmentExpressionExample = `// Assignment expressions
let bill = 50;
let tip = bill * 0.15; // 7.5

// This is both an assignment and an arithmetic expression
let total = bill += tip; // 57.5

// Multiple assignments
let x = y = z = 10; // All three variables get value 10`;

const complexExpressionExample = `// Complex expression example
let appetizer = 12.99;
let entree = 24.99;
let dessert = 8.99;
let drinkPrice = 5.99;
let numDrinks = 2;

// Calculate bill with tax and tip
let subtotal = appetizer + entree + dessert + (drinkPrice * numDrinks);
let tax = subtotal * 0.08;
let tip = subtotal * 0.18;
let total = subtotal + tax + tip;

console.log('Subtotal: $' + subtotal.toFixed(2)); // $58.95
console.log('Tax: $' + tax.toFixed(2)); // $4.72
console.log('Tip: $' + tip.toFixed(2)); // $10.61
console.log('Total: $' + total.toFixed(2)); // $74.28

// Check if bill is over budget
let budget = 70;
let isOverBudget = total > budget;
console.log('Is over budget? ' + isOverBudget); // true

// Calculate how much over budget
let amountOverBudget = isOverBudget ? total - budget : 0;
console.log('Amount over budget: $' + amountOverBudget.toFixed(2)); // $4.28`;

const htmlSetupCode = `<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Operators Practice</title>
  </head>
  <body>
    <h1>Check the console for results</h1>

    <script>
      // Your practice code goes here
    <\/script>
  </body>
</html>`;

const challengeCode = `// Challenge: Create a restaurant bill calculator

// 1. Define menu items and their prices
// 2. Calculate subtotal for a customer's order
// 3. Apply tax (8%)
// 4. Calculate tip (15% for regular customers, 20% for excellent service)
// 5. Apply a discount if applicable (10% for orders over $100)
// 6. Calculate the final total
// 7. Format the output to show a nice bill summary

// Your code here`;

const solutionCode = `// Black Swan Bistro Bill Calculator

// Menu items and prices
const menuItems = {
  'Grilled Salmon': 24.99,
  'Beef Steak': 29.99,
  'Pasta Primavera': 18.99,
  'Caesar Salad': 12.99,
  'Chocolate Cake': 8.99,
  'House Wine': 9.99
};

// Customer's order
const order = [
  'Grilled Salmon',
  'Beef Steak',
  'Caesar Salad',
  'House Wine',
  'House Wine'
];

// Calculate subtotal
let subtotal = 0;
for (let item of order) {
  subtotal += menuItems[item];
}

// Constants
const TAX_RATE = 0.08;
const REGULAR_TIP_RATE = 0.15;
const EXCELLENT_TIP_RATE = 0.20;
const DISCOUNT_THRESHOLD = 100;
const DISCOUNT_RATE = 0.10;

// Customer info
const isExcellentService = true;
const isRegularCustomer = true;

// Calculate tax
const taxAmount = subtotal * TAX_RATE;

// Apply discount if eligible
let discountAmount = 0;
if (subtotal > DISCOUNT_THRESHOLD) {
  discountAmount = subtotal * DISCOUNT_RATE;
}

// Subtotal after discount
const discountedSubtotal = subtotal - discountAmount;

// Calculate tip
let tipRate = isExcellentService ? EXCELLENT_TIP_RATE : REGULAR_TIP_RATE;
// Regular customers always tip well
if (isRegularCustomer && tipRate < EXCELLENT_TIP_RATE) {
  tipRate = EXCELLENT_TIP_RATE;
}
const tipAmount = discountedSubtotal * tipRate;

// Calculate total
const totalAmount = discountedSubtotal + taxAmount + tipAmount;

// Format currency
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

// Print bill
console.log('===== BLACK SWAN BISTRO =====');
console.log('Your Order:');
for (let item of order) {
  console.log(\`\${item}: \${formatCurrency(menuItems[item])}\`);
}
console.log('---------------------------');
console.log(\`Subtotal: \${formatCurrency(subtotal)}\`);
if (discountAmount > 0) {
  console.log(\`Discount: -\${formatCurrency(discountAmount)}\`);
  console.log(\`Subtotal after discount: \${formatCurrency(discountedSubtotal)}\`);
}
console.log(\`Tax (8%): \${formatCurrency(taxAmount)}\`);
console.log(\`Tip (\${tipRate * 100}%): \${formatCurrency(tipAmount)}\`);
console.log(\`Total: \${formatCurrency(totalAmount)}\`);
console.log('===========================');
console.log('Thank you for dining with us!');`;

const modulusExample = `// Using modulus in restaurant scenarios

// 1. Assigning tables (tables are numbered 1-10)
let partyNumber = 27;
let tableAssignment = partyNumber % 10;
// If tableAssignment is 0, use table 10 instead
tableAssignment = tableAssignment === 0 ? 10 : tableAssignment;
console.log('Party #27 is assigned to table:', tableAssignment); // 7

// 2. Rotating staff for different shifts
let dayOfMonth = 15;
let numberOfServers = 5;
let serverOnDuty = dayOfMonth % numberOfServers;
// Server IDs are 1-5, but modulus gives 0-4, so add 1
serverOnDuty = serverOnDuty === 0 ? numberOfServers : serverOnDuty;
console.log('Server on duty for day 15:', serverOnDuty); // 5

// 3. Checking if a reservation can be split evenly
let partySize = 7;
let tableSize = 4;
let hasRemainder = partySize % tableSize !== 0;
console.log('Need extra table for remainder?', hasRemainder); // true
console.log('Number of extra seats needed:', partySize % tableSize); // 3`;

const restaurantExample = `// Restaurant bill calculator
let bill = 50; // Starting bill amount
let taxRate = 0.08; // 8% tax rate
let tipRate = 0.15; // 15% tip rate

// Calculate tax
let taxAmount = bill * taxRate;

// Calculate tip
let tipAmount = bill * tipRate;

// Calculate total with tax and tip
let total = bill + taxAmount + tipAmount;

console.log('Subtotal: $' + bill);
console.log('Tax: $' + taxAmount.toFixed(2));
console.log('Tip: $' + tipAmount.toFixed(2));
console.log('Total: $' + total.toFixed(2));`;

const tipExample = `// Tip calculator
let bill = 50; // Starting bill amount
let tipRate = 0.15; // 15% tip rate

// Calculate tip
let tipAmount = bill * tipRate;

console.log('Bill: $' + bill);
console.log('Tip: $' + tipAmount.toFixed(2));
console.log('Total: $' + (bill + tipAmount).toFixed(2));`;

const menuPriceExample = `// Menu price calculator
let salmonPrice = 24.99;
let steakPrice = 29.99;
let pastaPrice = 18.99;

// Calculate total for 2 salmon dishes and 1 pasta
let total = (salmonPrice * 2) + pastaPrice;
console.log('Total price for 2 salmon dishes and 1 pasta: $' + total.toFixed(2));`;

const tableAssignmentExample = `// Table assignment
let partySize = 7;
let tableSize = 4;
let tableAssignment = partySize % tableSize;
// If tableAssignment is 0, use table 4
tableAssignment = tableAssignment === 0 ? tableSize : tableAssignment;
console.log('Party of 7 is assigned to table:', tableAssignment);`;

const discountExample = `// Discount calculator
let subtotal = 120; // Total before discount
let discountRate = 0.10; // 10% discount
let discountAmount = subtotal * discountRate;
let total = subtotal - discountAmount;
console.log('Subtotal: $' + subtotal.toFixed(2));
console.log('Discount: $' + discountAmount.toFixed(2));
console.log('Total after discount: $' + total.toFixed(2));`;

const splitBillExample = `// Split bill calculator
let total = 120; // Total bill amount
let numberOfPeople = 4; // Number of people splitting the bill
let perPerson = total / numberOfPeople;
console.log('Total bill: $' + total.toFixed(2));
console.log('Each person pays: $' + perPerson.toFixed(2));`;
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Operators & Expressions in JavaScript',
		description:
			'Learn about JavaScript operators for calculations, comparisons, and logical operations',
		category: 'JavaScript',
		level: 'Beginner',
		order: 3,
		tags: ['javascript', 'operators', 'expressions'],
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

.operators-diagram {
	max-width: 600px;
	margin: 0 auto;
}

.logical-operators-diagram {
	max-width: 600px;
	margin: 2rem auto;
}

.order-of-operations-diagram {
	max-width: 400px;
	margin: 1rem auto;
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

.code-examples-container {
	overflow-x: auto;
	white-space: nowrap;
	padding-bottom: 1rem;
	margin: 0 -1rem;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: thin;
	scrollbar-color: #dbdbdb #f5f5f5;
}

.code-examples-container::-webkit-scrollbar {
	height: 8px;
}

.code-examples-container::-webkit-scrollbar-track {
	background: #f5f5f5;
	border-radius: 4px;
}

.code-examples-container::-webkit-scrollbar-thumb {
	background: #dbdbdb;
	border-radius: 4px;
}

.code-examples-container::-webkit-scrollbar-thumb:hover {
	background: #b5b5b5;
}

.code-panel {
	display: inline-block;
	vertical-align: top;
	width: calc(50% - 1rem);
	min-width: 300px;
	max-width: 500px;
	margin: 0 0.5rem;
}

.code-container {
	max-height: 400px;
	overflow-y: auto;
}

.card {
	height: 100%;
	margin-bottom: 0;
}

.card-content {
	height: 100%;
	display: flex;
	flex-direction: column;
}

.button {
	margin-top: auto;
}
</style>
