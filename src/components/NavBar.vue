<template>
  <div class="auth-bar">
    <div class="auth-inner container">
      <template v-if="!isAuth">
        <router-link to="/auth/login" class="auth-link">Login</router-link>
        <router-link to="/auth/register" class="auth-link auth-link--highlight">
          Sign Up
        </router-link>
      </template>
      <template v-else>
        <span class="welcome-label">Welcome, {{ user.name }}</span>
        <router-link to="/auth/logout" class="auth-link">Logout</router-link>
      </template>
    </div>
  </div>

  <nav class="navbar-shell" role="navigation" aria-label="Main navigation">
    <div class="navbar-inner container">
      <div class="navbar-brand">
        <router-link class="brand" to="/" @click="closeMenu">
          <img src="@/assets/ColourLogo.svg" alt="GraphiteEdge logo" />
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
          <router-link
            to="/my-progress"
            class="progress-link"
            @click="closeMenu"
          >
            My Progress
          </router-link>
        </div>

        <div class="navbar-mobile-auth">
          <template v-if="!isAuth">
            <router-link
              to="/auth/login"
              class="mobile-auth-link"
              @click="closeMenu"
            >
              Login
            </router-link>
            <router-link
              to="/auth/register"
              class="mobile-auth-link mobile-auth-link--primary"
              @click="closeMenu"
            >
              Sign Up
            </router-link>
          </template>
          <template v-else>
            <span class="welcome-label">{{ user.name }}</span>
            <router-link
              to="/auth/logout"
              class="mobile-auth-link"
              @click="closeMenu"
            >
              Logout
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </nav>

  <div
    v-if="isMenuOpen"
    class="navbar-overlay"
    aria-hidden="true"
    @click="closeMenu"
  ></div>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { currentUser, isAuthenticated } from "@/services/AuthService";

const route = useRoute();
const isMenuOpen = ref(false);

const isAuth = computed(
  () =>
    !!(
      isAuthenticated.value &&
      currentUser.value &&
      currentUser.value.id &&
      currentUser.value.email
    ),
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
  if (event.key === "Escape") {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.auth-bar {
  background: #d3d4d9;
  border-bottom: 1px solid var(--border-subtle);
}

.auth-inner {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
}

.auth-link,
.welcome-label {
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: var(--weight-semibold);
  color: var(--fg-default);
}

.auth-link {
  padding: 0.25rem 0.625rem;
  border-radius: var(--radius-full);
}

.auth-link--highlight {
  background: #111827;
  color: var(--color-white);
}

.navbar-shell {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-white);
  border-bottom: 1px solid var(--border-subtle);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
  gap: 1.5rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 auto;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
}

.brand img {
  height: 42px;
  width: auto;
}

.navbar-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-round);
  border: 1px solid rgba(15, 23, 42, 0.15);
  background: transparent;
  cursor: pointer;
}

.navbar-burger span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--fg-default);
  border-radius: 999px;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.navbar-burger.is-active span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}

.navbar-burger.is-active span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 0 0 auto;
}

.navbar-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.navbar-item,
.progress-link,
.mobile-auth-link {
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: var(--weight-semibold);
}

.navbar-item {
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-full);
  color: var(--fg-default);
}

.navbar-item:hover,
.navbar-item.router-link-active {
  background: rgba(79, 70, 229, 0.1);
  color: var(--color-link-active);
}

.progress-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background: #111827;
  color: var(--color-white);
  border-radius: var(--radius-full);
}

.progress-link:hover {
  color: var(--color-white);
  background: #1f2937;
}

.navbar-mobile-auth {
  display: none;
}

.navbar-overlay {
  display: none;
}

@media screen and (max-width: 1024px) {
  .navbar-burger {
    display: inline-flex;
  }

  .navbar-menu {
    position: absolute;
    top: calc(100% + 0.75rem);
    right: 1rem;
    left: 1rem;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    border-radius: 1.25rem;
    background: var(--color-white);
    box-shadow: var(--shadow-navbar);
    z-index: 60;
  }

  .navbar-menu.is-active {
    display: flex;
  }

  .navbar-links {
    flex-direction: column;
    align-items: stretch;
  }

  .navbar-item,
  .progress-link,
  .mobile-auth-link {
    width: 100%;
    text-align: center;
  }

  .navbar-cta {
    margin-top: 0.5rem;
  }

  .navbar-mobile-auth {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .mobile-auth-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1rem;
    border-radius: var(--radius-full);
    background: #f5f7fb;
    color: var(--fg-default);
  }

  .mobile-auth-link--primary {
    background: var(--color-primary);
    color: var(--color-white);
  }

  .navbar-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.4);
    z-index: 45;
  }
}
</style>
