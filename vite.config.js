import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

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
			onRoutesGenerated: (routes) => {
				return routes;
			},
		}),
	],
});
