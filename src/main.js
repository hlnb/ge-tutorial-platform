import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import emailjs from '@emailjs/browser';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import 'bulma/css/bulma.min.css';

// Initialize EmailJS with your public key
emailjs.init('1kJQbNmfHImPDixr6'); // Replace with your actual public key

const app = createApp(App);
const head = createHead();

const router = createRouter({
	history: createWebHistory(),
	routes, // Routes generated by vite-plugin-pages
});

app.use(router);
app.use(head);
app.mount('#app');
