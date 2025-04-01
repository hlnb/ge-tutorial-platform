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
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'index.html'),
			},
			output: {
				manualChunks: {
					'vendor-vue': ['vue', 'vue-router', 'pinia'],
					'vendor-ui': ['@fortawesome/fontawesome-free'],
					'vendor-utils': ['@emailjs/browser'],
					
					'tutorials': [
						'@/pages/tutorials/beginner/javascript-basics/variables-data-types',
						'@/pages/tutorials/beginner/javascript-basics/conditionals',
						'@/pages/tutorials/beginner/javascript-basics/loops',
						'@/pages/tutorials/beginner/javascript-basics/functions',
						'@/pages/tutorials/beginner/javascript-basics/arrays',
						'@/pages/tutorials/beginner/javascript-basics/objects'
					],
					'projects': [
						'@/pages/projects/photo-gallery',
						'@/pages/projects/todo-list',
						'@/pages/projects/personal-profile',
						'@/pages/projects/calculator'
					],
					'posts': [
						'@/pages/posts/backend-programming',
						'@/pages/posts/javascript-basics',
						'@/pages/posts/responsive-design'
					]
				}
			}
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
