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
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">Recipe Page</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">45 minutes</span>
			<span class="tag is-success">HTML</span>
			<span class="tag is-primary">Content</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-utensils"></i> Recipe Page Project
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li>Create a complete HTML document for a recipe</li>
				<li>Implement appropriate HTML elements for different content types</li>
				<li>Practice organizing content with semantic HTML</li>
				<li>Use lists, headings, and sections effectively</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should
				complete the
				<router-link to="/tutorials/html-basics/first-page"
					>Your First HTML Page</router-link
				>
				tutorial.
			</p>
		</div>

		<section class="project-section">
			<h2 class="title is-2">Project Description</h2>
			<p>
				In this project, you'll create a recipe page for your favorite dish.
				This is a perfect way to practice HTML structure and content
				organization while creating something practical that showcases different
				HTML elements working together.
			</p>

			<div class="box mt-5">
				<h3 class="title is-4">Your Recipe Page Should Include:</h3>
				<ul>
					<li>A proper HTML document structure</li>
					<li>A heading with the recipe name</li>
					<li>A brief description or introduction to the recipe</li>
					<li>An ingredients list (using an unordered list)</li>
					<li>Step-by-step cooking instructions (using an ordered list)</li>
					<li>
						Additional information like prep time, cooking time, and servings
					</li>
					<li>Optional: nutritional information, tips, or variations</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Getting Started</h2>

			<h3 class="title is-4">Step 1: Set Up Your HTML File</h3>
			<p>
				Create a new file called <code>recipe.html</code> and set up the basic
				HTML structure:
			</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="htmlStructure"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 2: Add Your Recipe Header</h3>
			<p>
				Inside the body element, add a header section with your recipe name and
				introduction:
			</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="headerSection"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 3: Add Recipe Details</h3>
			<p>Create a section for recipe details like prep time and servings:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="detailsSection"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 4: Add Ingredients List</h3>
			<p>Create an unordered list for your ingredients:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="ingredientsSection"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 5: Add Cooking Instructions</h3>
			<p>Create an ordered list for your step-by-step instructions:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="instructionsSection"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Project Example</h2>
			<p>Here's what your completed recipe page might look like:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="completeExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<div class="notification is-success is-light mt-4">
				<p>
					<i class="fas fa-check-circle mr-2"></i>
					<strong>Remember:</strong> This is just an example. Use your own
					favorite recipe and customize the page to make it your own!
				</p>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Challenge Yourself</h2>
			<p>Once you've completed the basic requirements, try these challenges:</p>

			<div class="box">
				<h3 class="title is-5">Level Up Your Recipe Page</h3>
				<ul>
					<li>Add a section for recipe tips or variations</li>
					<li>Include a table for nutritional information</li>
					<li>Add a section for user reviews or comments</li>
					<li>Include links to similar recipes</li>
					<li>Add a print-friendly version link</li>
					<li>Use the time element for cooking and prep times</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Submit Your Project</h2>
			<p>Once you've completed your recipe page, you can:</p>
			<ul>
				<li>Save it to your computer for future reference</li>
				<li>
					Share it with friends and family who might want to try your recipe
				</li>
				<li>Deploy it to a free hosting service like GitHub Pages</li>
				<li>
					Start building a collection of recipe pages for your favorite dishes
				</li>
			</ul>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Next Steps:</strong> After completing this project, you might
					want to check out the
					<router-link to="/tutorials/html-basics/text"
						>Working with Text</router-link
					>
					tutorial to learn more ways to format your recipe content.
				</p>
			</div>
		</section>

	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

// Code examples
const htmlStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Favorite Recipe</title>
</head>
<body>
  <!-- Your recipe content will go here -->
</body>
</html>`);

const headerSection = ref(`<header>
  <h1>Classic Chocolate Chip Cookies</h1>
  <p>
    These homemade chocolate chip cookies are soft, chewy, and packed with chocolate chips.
    A family favorite that's perfect for any occasion!
  </p>
</header>`);

const detailsSection = ref(`<section>
  <h2>Recipe Details</h2>
  <ul>
    <li><strong>Prep Time:</strong> 15 minutes</li>
    <li><strong>Cook Time:</strong> 10-12 minutes</li>
    <li><strong>Total Time:</strong> 25-27 minutes</li>
    <li><strong>Yield:</strong> 24 cookies</li>
    <li><strong>Difficulty:</strong> Easy</li>
  </ul>
</section>`);

const ingredientsSection = ref(`<section>
  <h2>Ingredients</h2>
  <ul>
    <li>1 cup (2 sticks) unsalted butter, softened</li>
    <li>3/4 cup granulated sugar</li>
    <li>3/4 cup packed brown sugar</li>
    <li>2 large eggs</li>
    <li>2 teaspoons vanilla extract</li>
    <li>2 1/4 cups all-purpose flour</li>
    <li>1 teaspoon baking soda</li>
    <li>1/2 teaspoon salt</li>
    <li>2 cups semi-sweet chocolate chips</li>
    <li>1 cup chopped nuts (optional)</li>
  </ul>
</section>`);

const instructionsSection = ref(`<section>
  <h2>Instructions</h2>
  <ol>
    <li>Preheat oven to 375°F (190°C).</li>
    <li>In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth.</li>
    <li>Beat in the eggs one at a time, then stir in the vanilla.</li>
    <li>In a separate bowl, combine flour, baking soda, and salt.</li>
    <li>Gradually add the dry ingredients to the wet ingredients and mix well.</li>
    <li>Fold in the chocolate chips and nuts (if using).</li>
    <li>Drop by rounded tablespoons onto ungreased baking sheets.</li>
    <li>Bake for 10-12 minutes or until edges are golden brown.</li>
    <li>Allow cookies to cool on baking sheet for 2 minutes before transferring to wire racks to cool completely.</li>
  </ol>
</section>`);

const completeExample = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Classic Chocolate Chip Cookies Recipe</title>
</head>
<body>
  <header>
    <h1>Classic Chocolate Chip Cookies</h1>
    <p>
      These homemade chocolate chip cookies are soft, chewy, and packed with chocolate chips.
      A family favorite that's perfect for any occasion!
    </p>
  </header>
  
  <main>
    <section>
      <h2>Recipe Details</h2>
      <ul>
        <li><strong>Prep Time:</strong> <time datetime="PT15M">15 minutes</time></li>
        <li><strong>Cook Time:</strong> <time datetime="PT12M">10-12 minutes</time></li>
        <li><strong>Total Time:</strong> <time datetime="PT27M">25-27 minutes</time></li>
        <li><strong>Yield:</strong> 24 cookies</li>
        <li><strong>Difficulty:</strong> Easy</li>
      </ul>
    </section>
    
    <section>
      <h2>Ingredients</h2>
      <ul>
        <li>1 cup (2 sticks) unsalted butter, softened</li>
        <li>3/4 cup granulated sugar</li>
        <li>3/4 cup packed brown sugar</li>
        <li>2 large eggs</li>
        <li>2 teaspoons vanilla extract</li>
        <li>2 1/4 cups all-purpose flour</li>
        <li>1 teaspoon baking soda</li>
        <li>1/2 teaspoon salt</li>
        <li>2 cups semi-sweet chocolate chips</li>
        <li>1 cup chopped nuts (optional)</li>
      </ul>
    </section>
    
    <section>
      <h2>Instructions</h2>
      <ol>
        <li>Preheat oven to 375°F (190°C).</li>
        <li>In a large bowl, cream together the butter, granulated sugar, and brown sugar until smooth.</li>
        <li>Beat in the eggs one at a time, then stir in the vanilla.</li>
        <li>In a separate bowl, combine flour, baking soda, and salt.</li>
        <li>Gradually add the dry ingredients to the wet ingredients and mix well.</li>
        <li>Fold in the chocolate chips and nuts (if using).</li>
        <li>Drop by rounded tablespoons onto ungreased baking sheets.</li>
        <li>Bake for 10-12 minutes or until edges are golden brown.</li>
        <li>Allow cookies to cool on baking sheet for 2 minutes before transferring to wire racks to cool completely.</li>
      </ol>
    </section>
    
    <section>
      <h2>Recipe Tips</h2>
      <ul>
        <li>For softer cookies, reduce baking time by 1-2 minutes.</li>
        <li>For crispier cookies, increase baking time by 1-2 minutes.</li>
        <li>Refrigerate the dough for 30 minutes before baking for thicker cookies.</li>
        <li>Use a cookie scoop for uniform cookies that bake evenly.</li>
      </ul>
    </section>
    
    <section>
      <h2>Nutritional Information</h2>
      <table border="1">
        <tr>
          <th>Nutrient</th>
          <th>Amount per Cookie</th>
        </tr>
        <tr>
          <td>Calories</td>
          <td>150</td>
        </tr>
        <tr>
          <td>Total Fat</td>
          <td>7g</td>
        </tr>
        <tr>
          <td>Saturated Fat</td>
          <td>4g</td>
        </tr>
        <tr>
          <td>Cholesterol</td>
          <td>20mg</td>
        </tr>
        <tr>
          <td>Sodium</td>
          <td>60mg</td>
        </tr>
        <tr>
          <td>Total Carbohydrates</td>
          <td>20g</td>
        </tr>
        <tr>
          <td>Dietary Fiber</td>
          <td>1g</td>
        </tr>
        <tr>
          <td>Sugars</td>
          <td>13g</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>2g</td>
        </tr>
      </table>
    </section>
    
    <section>
      <h2>Variations</h2>
      <dl>
        <dt>Double Chocolate</dt>
        <dd>Add 1/4 cup cocoa powder to the flour mixture for a chocolate cookie base.</dd>
        
        <dt>White Chocolate Macadamia</dt>
        <dd>Replace chocolate chips with white chocolate chips and use macadamia nuts.</dd>
        
        <dt>Oatmeal Chocolate Chip</dt>
        <dd>Replace 1 cup of flour with 1 1/2 cups of rolled oats for a heartier cookie.</dd>
      </dl>
    </section>
  </main>
  
  <footer>
    <p>Recipe created by Jane Smith | Last updated: <time datetime="2023-09-15">September 15, 2023</time></p>
    <p><a href="#">Print Recipe</a> | <a href="#">Share Recipe</a></p>
  </footer>
</body>
</html>`);
</script>

<script>
// Frontmatter for the project
export default {
	frontmatter: {
		title: 'Recipe Page',
		description: 'Build a page for your favorite recipe using HTML structure',
		category: 'HTML Projects',
		level: 'Beginner',
		tags: ['HTML', 'Content', 'Beginner'],
		lastUpdated: '2023-09-15',
	},
};
</script>

<style scoped>
.project-section {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.codemirror-wrapper {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	margin: 1.5rem 0;
}

code {
	background-color: #f5f5f5;
	color: #485fc7;
	padding: 0.2rem 0.4rem;
	border-radius: 4px;
}
</style>
