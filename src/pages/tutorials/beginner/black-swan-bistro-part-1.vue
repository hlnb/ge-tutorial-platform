<template>
	<div class="container section">
		<div class="tutorial-content">
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

			<p class="subtitle is-5">
				Create a real restaurant homepage from scratch using HTML and CSS.
			</p>

			<div class="notification is-info is-light">
				<p>
					<i class="fas fa-hard-hat mr-2"></i><strong>Under Construction</strong>
				</p>
				<p>This tutorial is currently being developed. Check back soon for the full content!</p>
			</div>

			<router-link to="/tutorials" class="button is-primary is-outlined mt-4">
				<span class="icon"><i class="fas fa-arrow-left"></i></span>
				<span>Back to Tutorials</span>
			</router-link>
		</div>
	</div>
</template>

<script setup>
</script>
