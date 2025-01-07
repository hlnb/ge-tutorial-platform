import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-vue-markdown';
import { resolve } from 'path';
import Prism from 'markdown-it-prism';

export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
		Markdown({
			markdownItOptions: {
				html: true,
				linkify: true,
				typographer: true,
			},
			markdownItSetup(md) {
				md.use(Prism);
			},
			wrapperComponent: 'post-layout',
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'~': resolve(__dirname, 'src'),
		},
	},
	build: {
		target: 'es2015',
		outDir: 'dist',
		assetsDir: 'assets',
		minify: 'terser',
		rollupOptions: {
			external: [],
			output: {
				manualChunks: {
					emailjs: ['@emailjs/browser'],
				},
			},
		},
	},
});
