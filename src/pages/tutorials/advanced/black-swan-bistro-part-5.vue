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
						<a href="#" aria-current="page">Black Swan Bistro &mdash; Part 5</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-warning">Advanced</span>
					<span class="tag is-light">45 min</span>
					<span class="tag is-link">Project</span>
					<span class="tag is-light">Part 5 of 7</span>
				</div>
			</div>

			<h1 class="title is-1">Black Swan Bistro &mdash; Part 5</h1>
			<h2 class="subtitle is-4">Prepare for Deployment</h2>

			<p class="subtitle is-5">
				Optimise assets, add meta tags, and prepare the bistro site for production.
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
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "Black Swan Bistro — Part 5",
  description: "Prepare your site for deployment — optimise images, add meta tags, and get the bistro project production-ready.",
  path: "/tutorials/advanced/black-swan-bistro-part-5",
});
</script>
