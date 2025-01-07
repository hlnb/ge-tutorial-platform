import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/],
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag === 'markdown',
				},
			},
		}),
		Pages({
			extensions: ['vue', 'md'],
			dirs: 'src/pages',
			extendRoute(route) {
				// Add meta information for tutorials section
				if (route.path.startsWith('/tutorials/')) {
					return {
						...route,
						meta: {
							layout: 'default',
							section: 'tutorials',
						},
					};
				}
				return route;
			},
			onRoutesGenerated: (routes) => {
				return routes;
			},
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
