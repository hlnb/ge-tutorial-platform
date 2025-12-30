import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

export default defineConfig({
	base: '/',
	plugins: [
		vue(),
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
