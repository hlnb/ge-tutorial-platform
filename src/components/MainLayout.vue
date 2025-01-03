<template>
	<div class="main-layout">
		<NavBar />
		<slot></slot>
		<Footer />
	</div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<style>
/* Google Fonts import - add your specific fonts here */
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
