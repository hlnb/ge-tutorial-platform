import './services/firebase'; // Ensure firebase is initialized before using auth and db
import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import { routes, scrollBehavior, setupRouterGuards } from './router/config';

// Import Bulma CSS
import 'bulma/css/bulma.min.css';

// Import any custom CSS
import './assets/main.css';

export const createApp = ViteSSG(
	App,
	{ routes, scrollBehavior },
	({ app, router }) => {
		setupRouterGuards(router);
	},
);
