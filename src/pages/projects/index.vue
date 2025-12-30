<template>
	<div class="content">
		<h1 class="title is-1">
			<i class="fas fa-laptop-code"></i> Practice Projects
		</h1>

		<p class="subtitle">
			Apply what you've learned with these hands-on projects
		</p>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Learning Tip:</strong> The best way to improve your web
				development skills is through practice. These projects are designed to
				reinforce concepts from our tutorials and help you build a portfolio of
				work.
			</p>
		</div>

		<router-view v-if="$route.name !== 'projects'" />

		<template v-else>
			<!-- HTML Projects -->
			<section class="project-category">
				<h2 class="title is-2"><i class="fas fa-code"></i> HTML Projects</h2>

				<div class="columns is-multiline">
					<!-- Personal Profile Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/personal-profile.svg" alt="Personal Profile Page" />
							</div>
							<div class="card-content">
								<p class="title is-4">Personal Profile Page</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">30 minutes</span>
								</p>
								<div class="content">
									Create a simple personal profile page with basic HTML structure.
									Practice using semantic HTML elements and document organization.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/personal-profile'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Recipe Page Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/recipe-page.svg" alt="Recipe Page" />
							</div>
							<div class="card-content">
								<p class="title is-4">Recipe Page</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">45 minutes</span>
								</p>
								<div class="content">
									Build a page for your favorite recipe using HTML structure.
									Practice organizing content with lists, headings, and sections.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/recipe-page'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Photo Gallery Project -->
					<div class="column is-one-third">
						<div class="card project-card">
									<div class="project-image">
								<img src="@/assets/images/photo-gallery.svg" alt="Photo Gallery" />
							</div>
							<div class="card-content">
								<p class="title is-4">Photo Gallery</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">60 minutes</span>
								</p>
								<div class="content">
									Build a simple photo gallery with images and captions. Practice
									working with the HTML image element and its attributes.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/photo-gallery'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>
				</div>
			</section>

			<!-- CSS Projects -->
			<section class="project-category">
				<h2 class="title is-2">
					<i class="fas fa-paint-brush"></i> CSS Projects
				</h2>

				<div class="columns is-multiline">
					<!-- CSS Selector Challenge -->
					<div class="column is-4">
						<div class="project-card">
							<div class="project-image">
								<img src="@/assets/images/selector-challenge.svg" alt="CSS Selector Challenge" />
							</div>
							<div class="project-content">
								<h3>CSS Selector Challenge</h3>
								<p>Practice selecting elements using different CSS selectors</p>
								<div class="project-tags">
									<span class="tag">CSS</span>
									<span class="tag">Beginner</span>
									<span class="tag">Practice</span>
								</div>
								<div class="project-meta">
									<span class="difficulty">Beginner</span>
									<span class="time">30 mins</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Card Component -->
					<div class="column is-4">
						<div class="project-card">
							<div class="project-image">
								<img src="@/assets/images/card-components.svg" alt="Card Components" />
							</div>
							<div class="project-content">
								<h3>Card Components</h3>
								<p>Create reusable card components using CSS box model</p>
								<div class="project-tags">
									<span class="tag">CSS</span>
									<span class="tag">Beginner</span>
									<span class="tag">Components</span>
								</div>
								<div class="project-meta">
									<span class="difficulty">Beginner</span>
									<span class="time">45 mins</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Color Palette -->
					<div class="column is-4">
						<div class="project-card">
							<div class="project-image">
								<img src="@/assets/images/color-palette.svg" alt="Color Palette" />
							</div>
							<div class="project-content">
								<h3>Color Palette</h3>
								<p>Create a beautiful color palette and typography system</p>
								<div class="project-tags">
									<span class="tag">CSS</span>
									<span class="tag">Beginner</span>
									<span class="tag">Design</span>
								</div>
								<div class="project-meta">
									<span class="difficulty">Beginner</span>
									<span class="time">30 mins</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Enhanced Projects (Intermediate Level) -->
					<div class="column is-12">
						<h3 class="title is-3 mt-6">Enhanced Projects (Intermediate Level)</h3>
					</div>

					<!-- Photo Gallery Enhanced -->
					<div class="column is-4">
						<div class="project-card">
							<div class="project-image">
								<img src="@/assets/images/photo-gallery-enhanced.svg" alt="Enhanced Photo Gallery" />
							</div>
							<div class="project-content">
								<h3>Enhanced Photo Gallery</h3>
								<p>Create a responsive photo gallery with modern CSS</p>
								<div class="project-tags">
									<span class="tag">CSS</span>
									<span class="tag">Intermediate</span>
									<span class="tag">Grid</span>
								</div>
								<div class="project-meta">
									<span class="difficulty">Intermediate</span>
									<span class="time">60 mins</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Personal Profile Enhanced -->
					<div class="column is-4">
						<div class="project-card">
							<div class="project-image">
								<img src="@/assets/images/personal-profile-enhanced.svg" alt="Enhanced Personal Profile" />
							</div>
							<div class="project-content">
								<h3>Enhanced Personal Profile</h3>
								<p>Build a professional profile page with animations</p>
								<div class="project-tags">
									<span class="tag">CSS</span>
									<span class="tag">Intermediate</span>
									<span class="tag">Layout</span>
								</div>
								<div class="project-meta">
									<span class="difficulty">Intermediate</span>
									<span class="time">45 mins</span>
								</div>
							</div>
						</div>
					</div>

					<!-- Todo List Enhanced -->
					<div class="column is-4">
						<div class="project-card">
							<div class="project-image">
								<img src="@/assets/images/todo-list-enhanced.svg" alt="Enhanced Todo List" />
							</div>
							<div class="project-content">
								<h3>Enhanced Todo List</h3>
								<p>Create an interactive todo list with animations</p>
								<div class="project-tags">
									<span class="tag">CSS</span>
									<span class="tag">Intermediate</span>
									<span class="tag">Animations</span>
								</div>
								<div class="project-meta">
									<span class="difficulty">Intermediate</span>
									<span class="time">45 mins</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- JavaScript Projects -->
			<section class="project-category">
				<h2 class="title is-2">
					<i class="fab fa-js"></i> JavaScript Projects
				</h2>

				<div class="columns is-multiline">
					<!-- Hello World App Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/hello-world-app.svg" alt="Hello World App" />
							</div>
							<div class="card-content">
								<p class="title is-4">Hello World App</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">15 minutes</span>
								</p>
								<div class="content">
									Create a simple interactive greeting application. Practice working with DOM manipulation, event handling, and user input.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/hello-world'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Number Game Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/number-game.svg" alt="Number Guessing Game" />
							</div>
							<div class="card-content">
								<p class="title is-4">Number Guessing Game</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">20 minutes</span>
								</p>
								<div class="content">
									Build a number guessing game with basic JavaScript. Practice working with numbers, conditionals, and user input validation.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/number-game'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Temperature Converter Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/temperature-converter.svg" alt="Temperature Converter" />
							</div>
							<div class="card-content">
								<p class="title is-4">Temperature Converter</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">25 minutes</span>
								</p>
								<div class="content">
									Build a temperature converter with real-time updates. Practice working with numbers, type conversion, and form handling.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/temperature-converter'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Color Switcher Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/color-switcher.svg" alt="Color Switcher" />
							</div>
							<div class="card-content">
								<p class="title is-4">Dynamic Color Switcher</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">20 minutes</span>
								</p>
								<div class="content">
									Create a color switcher with dynamic updates. Practice working with DOM manipulation, event handling, and color management.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/color-switcher'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Calculator App Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/calculator-app.svg" alt="Calculator App" />
							</div>
							<div class="card-content">
								<p class="title is-4">Calculator App</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">60 minutes</span>
								</p>
								<div class="content">
									Build a basic calculator with arithmetic operators. Practice JavaScript operators, functions, and DOM manipulation.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/calculator'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Grade Calculator Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/grade-calculator.svg" alt="Grade Calculator" />
							</div>
							<div class="card-content">
								<p class="title is-4">Grade Calculator</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">25 minutes</span>
								</p>
								<div class="content">
									Build a calculator that computes final grades based on weighted assignments. Practice working with numbers, variables, and user input validation.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/grade-calculator'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Interactive Message Board Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/message-board.svg" alt="Interactive Message Board" />
							</div>
							<div class="card-content">
								<p class="title is-4">Interactive Message Board</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">30 minutes</span>
								</p>
								<div class="content">
									Build an interactive message board with dynamic content. Practice DOM manipulation, event handling, and working with user input.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/interactive-demo'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Todo List Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/todo-list.svg" alt="Todo List" />
							</div>
							<div class="card-content">
								<p class="title is-4">Todo List</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">90 minutes</span>
								</p>
								<div class="content">
									Build a todo list with array iteration. Practice working with arrays, loops, and DOM manipulation.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/todo-list-2'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Quiz Game Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/quiz-game.svg" alt="Quiz Game" />
							</div>
							<div class="card-content">
								<p class="title is-4">Quiz Game</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">90 minutes</span>
								</p>
								<div class="content">
									Build a quiz with conditional logic. Practice working with conditionals, arrays, and user interaction.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/quiz-game'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>
				</div>
			</section>

			<!-- DOM Projects -->
			<section class="project-category">
				<h2 class="title is-2">
					<i class="fas fa-sitemap"></i> Document Object Model Projects
				</h2>

				<div class="columns is-multiline">
					<!-- Photo Gallery Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/photo-gallery.svg" alt="Photo Gallery" />
							</div>
							<div class="card-content">
								<p class="title is-4">Dynamic Photo Gallery</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">45 minutes</span>
								</p>
								<div class="content">
									Build an interactive photo gallery using arrays and DOM manipulation. Practice working with image elements, event handling, and array methods to create a responsive image browsing experience.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/photo-gallery-2'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>

					<!-- Todo List Project -->
					<div class="column is-one-third">
						<div class="card project-card">
							<div class="project-image">
								<img src="@/assets/images/todo-list.svg" alt="Todo List" />
							</div>
							<div class="card-content">
								<p class="title is-4">Interactive Todo List</p>
								<p class="subtitle is-6">
									<span class="tag is-info">Beginner</span>
									<span class="tag is-warning">60 minutes</span>
								</p>
								<div class="content">
									Create a dynamic todo list application that manages tasks using arrays. Practice DOM manipulation, event handling, and array methods to add, remove, and update task items.
								</div>
							</div>
							<footer class="card-footer">
								<router-link
									:to="'/projects/todo-list-2'"
									class="card-footer-item"
								>
									Start Project <i class="fas fa-arrow-right ml-2"></i>
								</router-link>
							</footer>
						</div>
					</div>
				</div>
			</section>

			<!-- Git Basics Projects -->
			<section>
				<h2 class="title is-2 mt-6"><i class="fab fa-git-alt mr-2"></i> Git Basics Projects</h2>
				<div class="columns is-multiline">
					<div class="column is-4">
						<router-link to="/projects/git-install" class="box">
							<div class="project-image mb-3">
								<img src="/images/projects/git-install.svg" alt="Install and Configure Git" style="height: 80px;" />
							</div>
							<h3 class="title is-4">Install and Configure Git</h3>
							<p>Install Git, set your username/email, and configure your default editor.</p>
						</router-link>
					</div>
					<div class="column is-4">
						<router-link to="/projects/git-verify" class="box">
							<div class="project-image mb-3">
								<img src="/images/projects/git-verify.svg" alt="Verify Git Installation" style="height: 80px;" />
							</div>
							<h3 class="title is-4">Verify Git Installation</h3>
							<p>Run git --version and git config --list to verify your setup.</p>
						</router-link>
					</div>
					<div class="column is-4">
						<router-link to="/projects/git-clone" class="box">
							<div class="project-image mb-3">
								<img src="/images/projects/git-clone.svg" alt="Clone and Explore" style="height: 80px;" />
							</div>
							<h3 class="title is-4">Clone and Explore</h3>
							<p>Clone a remote repository and explore its history.</p>
						</router-link>
					</div>
					<div class="column is-4">
						<router-link to="/projects/git-commit" class="box">
							<div class="project-image mb-3">
								<img src="/images/projects/git-commit.svg" alt="Commit Practice" style="height: 80px;" />
							</div>
							<h3 class="title is-4">Commit Practice</h3>
							<p>Make multiple commits and view the log.</p>
						</router-link>
					</div>
					<div class="column is-4">
						<router-link to="/projects/git-branch" class="box">
							<div class="project-image mb-3">
								<img src="/images/projects/git-branch.svg" alt="Branching Exercise" style="height: 80px;" />
							</div>
							<h3 class="title is-4">Branching Exercise</h3>
							<p>Create, switch, and merge branches in a sample repo.</p>
						</router-link>
					</div>
					<div class="column is-4">
						<router-link to="/projects/git-merge" class="box">
							<div class="project-image mb-3">
								<img src="/images/projects/git-merge.svg" alt="Merge Conflict Practice" style="height: 80px;" />
							</div>
							<h3 class="title is-4">Merge Conflict Practice</h3>
							<p>Practice resolving merge conflicts in a sample repo.</p>
						</router-link>
					</div>
					<div class="column is-4">
						<router-link to="/projects/git-remote" class="box">
							<div class="project-image mb-3">
								<img src="/images/projects/git-remote.svg" alt="Push & Pull" style="height: 80px;" />
							</div>
							<h3 class="title is-4">Push & Pull</h3>
							<p>Push local changes and pull updates from a remote.</p>
						</router-link>
					</div>
				</div>
			</section>

			<section class="mt-6">
				<h2 class="title is-3">
					<i class="fas fa-graduation-cap"></i> Learning Path
				</h2>
				<p>
					These projects are designed to complement our tutorials. For the best
					learning experience, we recommend:
				</p>
				<ol>
					<li>Complete the related tutorial</li>
					<li>Try the corresponding practice project</li>
					<li>Review the solution and learn from any challenges you faced</li>
					<li>Move on to the next tutorial in the learning path</li>
				</ol>

				<div class="notification is-success is-light mt-4">
					<p>
						<i class="fas fa-check-circle mr-2"></i>
						<strong>Pro Tip:</strong> Don't worry about making mistakes! The
						learning happens when you troubleshoot and solve problems on your own.
					</p>
				</div>
			</section>

			<section class="mt-6">
				<h2 class="title is-3">
					<i class="fas fa-question-circle"></i> Need Help?
				</h2>
				<p>If you get stuck on a project, try these resources:</p>
				<ul>
					<li>Review the related tutorial content</li>
					<li>Check out the example solutions provided in each project</li>
					<li>Use browser developer tools to debug your code</li>
					<li>Search for similar problems on MDN or Stack Overflow</li>
				</ul>
			</section>
		</template>
	</div>
</template>

<script setup>
// No special setup needed for this page
</script>

<script>
// Frontmatter for the page
export default {
	frontmatter: {
		title: 'Practice Projects',
		description:
			"Apply what you've learned with these hands-on web development projects",
		lastUpdated: '2023-09-30',
	},
};
</script>

<style scoped>
.project-category {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.project-card {
	height: 100%;
	display: flex;
	flex-direction: column;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card-content {
	flex-grow: 1;
}

.card-footer-item {
	background-color: #f5f5f5;
	transition: background-color 0.3s ease;
}

.card-footer-item:hover {
	background-color: #e8e8e8;
}
</style>
