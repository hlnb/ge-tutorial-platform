import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	build: {
		rollupOptions: {
			external: ['@rollup/rollup-linux-x64-gnu'],
		},
	},
	optimizeDeps: {
		exclude: ['@rollup/rollup-linux-x64-gnu'],
	},
});
