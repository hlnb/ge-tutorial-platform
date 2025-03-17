<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/">
						<i class="fa-solid fa-house mr-2"></i> Home
					</router-link>
				</li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">Temperature Converter</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">25 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-primary">Numbers</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-thermometer-half mr-2"></i>
			Temperature Converter
		</h1>

		<div class="box">
			<h2 class="title is-4">Project Overview</h2>
			<p>
				Create a temperature converter that demonstrates these JavaScript concepts:
			</p>
			<ul>
				<li>Working with numbers and mathematical operations</li>
				<li>Type conversion between strings and numbers</li>
				<li>Form input handling and validation</li>
				<li>Real-time DOM updates</li>
				<li>Formatting numbers with decimal places</li>
			</ul>
		</div>

		<div class="box">
			<h2 class="title is-4">What You'll Build</h2>
			<p>A temperature converter application that:</p>
			<ul>
				<li>Converts between Celsius and Fahrenheit</li>
				<li>Updates results in real-time as users type</li>
				<li>Validates input to ensure only numbers are entered</li>
				<li>Displays formatted results with proper decimal places</li>
				<li>Provides a clean, user-friendly interface</li>
			</ul>
		</div>

		<div class="box">
			<h2 class="title is-4">Project Steps</h2>
			
			<div class="step-section mb-6">
				<h3 class="title is-5">1. HTML Structure</h3>
				<p>First, create the basic HTML structure for your converter:</p>
				<pre><code class="language-html">&lt;div class="converter-container"&gt;
  &lt;div class="field"&gt;
    &lt;label class="label"&gt;Celsius&lt;/label&gt;
    &lt;div class="control"&gt;
      &lt;input type="number" id="celsius" class="input" placeholder="Enter temperature in Celsius"&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="field"&gt;
    &lt;label class="label"&gt;Fahrenheit&lt;/label&gt;
    &lt;div class="control"&gt;
      &lt;input type="number" id="fahrenheit" class="input" placeholder="Enter temperature in Fahrenheit"&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div id="result" class="notification is-info is-light mt-4"&gt;
    Enter a temperature to see the conversion
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
			</div>

			<div class="step-section mb-6">
				<h3 class="title is-5">2. JavaScript Logic</h3>
				<p>Add the conversion logic and event handlers:</p>
				<pre><code class="language-javascript">// Get DOM elements
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const resultDiv = document.getElementById('result');

// Conversion functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Format number to 2 decimal places
function formatNumber(num) {
    return Number(num).toFixed(2);
}

// Update result when Celsius input changes
celsiusInput.addEventListener('input', function() {
    if (this.value === '') {
        fahrenheitInput.value = '';
        resultDiv.textContent = 'Enter a temperature to see the conversion';
        return;
    }

    const celsius = parseFloat(this.value);
    if (isNaN(celsius)) {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const fahrenheit = celsiusToFahrenheit(celsius);
    fahrenheitInput.value = formatNumber(fahrenheit);
    resultDiv.textContent = `${formatNumber(celsius)}°C = ${formatNumber(fahrenheit)}°F`;
});

// Update result when Fahrenheit input changes
fahrenheitInput.addEventListener('input', function() {
    if (this.value === '') {
        celsiusInput.value = '';
        resultDiv.textContent = 'Enter a temperature to see the conversion';
        return;
    }

    const fahrenheit = parseFloat(this.value);
    if (isNaN(fahrenheit)) {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const celsius = fahrenheitToCelsius(fahrenheit);
    celsiusInput.value = formatNumber(celsius);
    resultDiv.textContent = `${formatNumber(fahrenheit)}°F = ${formatNumber(celsius)}°C`;
});</code></pre>
			</div>

			<div class="step-section mb-6">
				<h3 class="title is-5">3. Styling</h3>
				<p>Add some CSS to style your converter:</p>
				<pre><code class="language-css">.converter-container {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.field {
    margin-bottom: 1.5rem;
}

.input:focus {
    border-color: #3273dc;
    box-shadow: 0 0 0 2px rgba(50, 115, 220, 0.25);
}

#result {
    text-align: center;
    font-size: 1.2rem;
}</code></pre>
			</div>
		</div>

		<div class="box">
			<h2 class="title is-4">Challenge Yourself</h2>
			<p>Once you've completed the basic converter, try these enhancements:</p>
			<ul>
				<li>Add Kelvin conversion support</li>
				<li>Create a temperature scale visualization</li>
				<li>Add common temperature reference points (freezing, boiling, etc.)</li>
				<li>Implement a temperature history feature</li>
				<li>Add unit conversion for other measurements (length, weight, etc.)</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Pro Tips:</strong>
			</p>
			<ul>
				<li>Use <code>parseFloat()</code> instead of <code>parseInt()</code> to handle decimal points</li>
				<li>Always validate user input before performing calculations</li>
				<li>Consider using the <code>step</code> attribute on number inputs for better precision</li>
				<li>Remember to handle edge cases like extremely high or low temperatures</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TemperatureConverter',
};
</script>

<style scoped>
.step-section {
	border-bottom: 1px solid #dbdbdb;
	padding-bottom: 2rem;
}

.step-section:last-child {
	border-bottom: none;
}

pre {
	margin: 1rem 0;
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 4px;
}

code {
	font-family: 'Fira Code', monospace;
}
</style> 