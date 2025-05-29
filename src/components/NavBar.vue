<template>
	<!-- Auth Bar -->
	<div class="auth-bar">
		<div class="container is-flex is-justify-content-flex-end is-align-items-center py-1">
			<template v-if="!isAuthenticated">
				<router-link to="/auth/login" class="button is-small is-light mr-2">Login</router-link>
				<router-link to="/auth/register" class="button is-small is-primary">Sign Up</router-link>
			</template>
			<template v-else>
				<span class="mr-3">Welcome, {{ currentUser.name }}</span>
				<router-link to="/auth/logout" class="button is-small is-danger">Logout</router-link>
			</template>
		</div>
	</div>

	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link class="navbar-item" to="/">
				<img src="../assets/logo.svg" alt="GraphitEdge Logo" />
			</router-link>
		</div>

		<div class="navbar-menu">
			<div class="navbar-end">
				<router-link class="navbar-item has-text-dark" to="/tutorials">
					Tutorials
				</router-link>
				<router-link class="navbar-item has-text-dark" to="/projects">
					Projects
				</router-link>
				<router-link class="navbar-item has-text-dark" to="/about">
					About
				</router-link>
				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link has-text-dark">More</a>
					<div class="navbar-dropdown">
						<router-link class="navbar-item" to="/community">
							Community
						</router-link>
					</div>
				</div>
				<router-link
					class="navbar-item has-text-dark"
					to="/the-graphite-journal"
				>
					The Graphite Journal
				</router-link>
				<router-link class="navbar-item has-text-dark" to="/contact">
					Contact
				</router-link>
				<div class="navbar-item">
					<router-link to="/my-progress" class="navbar-item">
						<span class="icon">
							<i class="fas fa-user-graduate"></i>
						</span>
						<span>My Progress</span>
					</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import authService from '@/services/AuthService';

const forceUpdate = ref(0);
const isAuthenticated = computed(() => {
	forceUpdate.value;
	return authService.isUserAuthenticated();
});
const currentUser = computed(() => {
	forceUpdate.value;
	return authService.getCurrentUser() || {};
});

// Optional: force update on login/logout
onMounted(() => {
	window.addEventListener('storage', () => {
		forceUpdate.value++;
	});

	// Also update on route change (for logout redirect)
	const router = useRouter();
	router.afterEach(() => {
		forceUpdate.value++;
	});
});
</script>

<style>
@import '../assets/styles/main.css';

.auth-bar {
	background: #f5f5f5;
	border-bottom: 1px solid #e5e5e5;
	font-size: 0.95rem;
}

.navbar {
	padding: 1rem;
	background-color: var(--color-light-gray) !important;
	border-bottom: 1px solid var(--color-slate-gray) !important;
}

.navbar-brand {
	font-size: 1.5rem;
	font-weight: bold;
}

.navbar-menu {
	display: flex;
	justify-content: flex-end;
}

.navbar-item {
	text-decoration: none;
	padding: 0.5rem 1rem;
}

.navbar-item:hover {
	color: var(--color-mine-shaft-2) !important;
}
</style>
