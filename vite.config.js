import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/],
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'~': resolve(__dirname, 'src'),
			bulma: 'bulma/css/bulma.min.css',
		},
	},
	css: {
		postcss: true,
		devSourcemap: true,
		preprocessorOptions: {
			// Remove any sass/scss options if they exist
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
					bulma: ['bulma'],
				},
			},
		},
	},
	optimizeDeps: {
		include: ['@emailjs/browser', 'vue-router', 'bulma'],
	},
});
