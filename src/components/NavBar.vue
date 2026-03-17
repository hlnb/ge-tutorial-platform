<template>
	<div class="auth-bar">
		<div class="auth-inner container">
			<template v-if="!isAuth">
				<router-link to="/auth/login" class="auth-link">Login</router-link>
				<router-link to="/auth/register" class="auth-link highlight">
					Sign Up
				</router-link>
			</template>
			<template v-else>
				<span class="welcome-label">Welcome, {{ user.name }}</span>
				<router-link to="/auth/logout" class="auth-link">Logout</router-link>
			</template>
		</div>
	</div>

	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-inner container">
			<div class="navbar-brand">
				<router-link class="brand" to="/" @click="closeMenu">
					<img src="../assets/logo.svg" alt="GraphitEdge Logo" />
				</router-link>
				<button
					class="navbar-burger"
					:class="{ 'is-active': isMenuOpen }"
					aria-label="Toggle navigation menu"
					:type="'button'"
					:aria-expanded="isMenuOpen ? 'true' : 'false'"
					@click="toggleMenu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

			<div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
				<div class="navbar-links">
					<router-link class="navbar-item" to="/tutorials" @click="closeMenu">
						Tutorials
					</router-link>
					<router-link class="navbar-item" to="/projects" @click="closeMenu">
						Projects
					</router-link>
					<router-link class="navbar-item" to="/about" @click="closeMenu">
						About
					</router-link>
					<router-link class="navbar-item" to="/community" @click="closeMenu">
						Community
					</router-link>
					<router-link
						class="navbar-item"
						to="/the-graphite-journal"
						@click="closeMenu"
					>
						The Graphite Journal
					</router-link>
					<router-link class="navbar-item" to="/contact" @click="closeMenu">
						Contact
					</router-link>
				</div>

				<div class="navbar-cta">
					<router-link to="/my-progress" class="cta-link" @click="closeMenu">
						<span class="icon">
							<i class="fas fa-user-graduate"></i>
						</span>
						<span>My Progress</span>
					</router-link>
				</div>

				<div class="navbar-mobile-auth">
					<template v-if="!isAuth">
						<router-link to="/auth/login" class="button is-light" @click="closeMenu">
							Login
						</router-link>
						<router-link to="/auth/register" class="button is-primary" @click="closeMenu">
							Sign Up
						</router-link>
					</template>
					<template v-else>
						<span class="welcome-label">{{ user.name }}</span>
						<router-link to="/auth/logout" class="button is-light" @click="closeMenu">
							Logout
						</router-link>
					</template>
				</div>
			</div>
		</div>
	</nav>

	<div v-if="isMenuOpen" class="navbar-overlay" @click="closeMenu" aria-hidden="true"></div>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { currentUser, isAuthenticated } from '@/services/AuthService';

const route = useRoute();
const isMenuOpen = ref(false);

const isAuth = computed(
	() =>
		!!(
			isAuthenticated.value &&
			currentUser.value &&
			currentUser.value.id &&
			currentUser.value.email
		)
);
const user = computed(() => currentUser.value || {});

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
	isMenuOpen.value = false;
};

watch(
	() => route.fullPath,
	() => closeMenu(),
);

const handleKeydown = (event) => {
	if (event.key === 'Escape') {
		closeMenu();
	}
};

onMounted(() => {
	window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
	window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
@import '../assets/styles/main.css';

.auth-bar {
	background: #f5f7fb;
	border-bottom: 1px solid rgba(15, 23, 42, 0.08);
	font-size: 0.95rem;
}

.auth-inner {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 0.75rem;
	padding: 0.35rem 0;
}

.auth-link {
	color: #1f2933;
	font-weight: 600;
	padding: 0.35rem 0.75rem;
}

.auth-link.highlight {
	background: #111827;
	color: #fff;
	border-radius: 999px;
}

.welcome-label {
	color: #4b5563;
	font-weight: 600;
}

.navbar {
	background: #ffffff;
	border-bottom: 1px solid rgba(15, 23, 42, 0.08);
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 50;
}

	/* Force burger icon to remain visible on narrow screens */
.navbar-burger {
	display: inline-flex !important;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	border: 1px solid rgba(15, 23, 42, 0.15);
	background: transparent;
}

.brand img {
	height: 48px;
	width: auto;
}

.navbar-menu {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
	flex: 1;
}

.navbar-links {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: wrap;
}

.navbar-item {
	padding: 0.4rem 0.75rem;
	font-weight: 600;
	color: #1f2933;
	border-radius: 999px;
	transition: background 0.2s ease, color 0.2s ease;
}

.navbar-item:hover,
.navbar-item.router-link-active {
	background: rgba(79, 70, 229, 0.1);
	color: #4338ca;
}

.navbar-cta {
	margin-left: 0.5rem;
}

.cta-link {
	display: inline-flex;
	align-items: center;
	gap: 0.35rem;
	padding: 0.5rem 1rem;
	border-radius: 999px;
	background: #111827;
	color: #ffffff;
	font-weight: 600;
}

.cta-link .icon {
	color: inherit;
}

.navbar-burger {
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	border: 1px solid rgba(15, 23, 42, 0.15);
	background: transparent;
}

.navbar-burger span {
	display: block;
	width: 20px;
	height: 2px;
	background: #111827;
	margin: 3px 0;
	transition: transform 0.2s ease, opacity 0.2s ease;
}

.navbar-burger.is-active span:nth-child(1) {
	transform: translateY(5px) rotate(45deg);
}

.navbar-burger.is-active span:nth-child(2) {
	opacity: 0;
}

.navbar-burger.is-active span:nth-child(3) {
	transform: translateY(-5px) rotate(-45deg);
}

.navbar-mobile-auth {
	display: none;
}

.navbar-overlay {
	position: fixed;
	inset: 0;
	background: rgba(15, 23, 42, 0.4);
	z-index: 40;
}

@media (max-width: 1024px) {
	.navbar-inner {
		flex-direction: column;
		align-items: stretch;
	}

	.navbar-brand {
		width: 100%;
	}

	.navbar-menu {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.25rem;
		padding: 1.5rem;
		background: #ffffff;
		box-shadow: 0 20px 35px rgba(15, 23, 42, 0.12);
		display: none;
	}

	.navbar-menu.is-active {
		display: flex;
	}

	.navbar-links {
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
	}

	.navbar-item {
		width: 100%;
		padding: 0.75rem 0;
		border-radius: 0;
	}

	.navbar-cta,
	.navbar-mobile-auth {
		width: 100%;
	}

	.navbar-cta .cta-link {
		width: 100%;
		justify-content: center;
	}

	.navbar-mobile-auth {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		align-items: center;
	}

}

@media (min-width: 1025px) {
	.navbar-burger {
		display: none !important;
	}
}

@media (min-width: 1025px) {
	.navbar-burger {
		display: none;
	}
}
</style>
