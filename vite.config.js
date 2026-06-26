import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import fs from 'fs';

export default defineConfig({
	base: '/',
	ssgOptions: {
		dirStyle: 'nested',
		includedRoutes(paths) {
			return paths.filter(
				(routePath) =>
					!routePath.startsWith('/auth') &&
					!routePath.startsWith('/admin') &&
					routePath !== '/404',
			);
		},
	},
	plugins: [
		// VueRouter must come before Vue plugin
		VueRouter({
			/* options */
			routesFolder: 'src/pages',
			extensions: ['.vue'],
			exclude: ['**/components/**', '**/layouts/**'],
			importMode: 'async',
			watch: process.env.NODE_ENV !== 'production',
			dts: 'src/typed-router.d.ts',
		}),
		vue(),
		visualizer({
			filename: 'dist/stats.html',
			template: 'treemap',
			gzipSize: true,
			brotliSize: true,
		}),
		// Custom plugin to serve admin HTML
		{
			name: 'serve-admin',
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					if (req.url === '/admin' || req.url === '/admin/') {
						const adminPath = path.resolve(__dirname, 'public/admin/index.html');
						const html = fs.readFileSync(adminPath, 'utf-8');
						res.setHeader('Content-Type', 'text/html');
						res.end(html);
						return;
					}
					next();
				});
			},
		},
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@vueuse/head': '@unhead/vue',
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
		sourcemap: false,
		cssCodeSplit: true,
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (id.includes('/firebase/')) return 'vendor-firebase';
						if (id.includes('/@codemirror/') || id.includes('/codemirror/')) {
							return 'vendor-editor';
						}
						if (id.includes('/highlight.js/')) return 'vendor-highlight';
						if (
							id.includes('/vue/') ||
							id.includes('/vue-router/') ||
							id.includes('/@vueuse/') ||
							id.includes('/@unhead/')
						) {
							return 'vendor-vue';
						}
					}
				},
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
		// Serve admin files directly, bypassing Vue router
		fs: {
			strict: false,
		},
	},
	// Configure rewrites to serve admin files
	preview: {
		port: 5173,
	},
});
