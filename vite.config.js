import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
	base: '/',
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	css: {
		postcss: true,
		devSourcemap: true,
	},
	build: {
		target: 'es2015',
		outDir: 'dist',
		assetsDir: 'assets',
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'index.html'),
				// Add any other entry points you need
			},
		},
	},
	optimizeDeps: {
		include: ['@emailjs/browser', 'vue-router'],
	},
	server: {
		port: 5173,
		strictPort: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
