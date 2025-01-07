import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		vue(),
		Pages({
			dirs: 'src/pages',
			extensions: ['vue', 'md'],
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
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
	optimizeDeps: {
		include: ['@emailjs/browser', 'vue-router'],
	},
});
