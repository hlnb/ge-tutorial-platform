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
						<a href="#" aria-current="page">Do You Actually Need a CMS?</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-warning">Advanced</span>
					<span class="tag is-light">25 min</span>
					<span class="tag is-light">CMS</span>
					<span class="tag is-light">Decision</span>
				</div>
			</div>

			<h1 class="title is-1">Do You Actually Need a CMS?</h1>

			<p class="subtitle is-5">
				Understand when a CMS makes sense &mdash; and when static HTML is just fine.
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
