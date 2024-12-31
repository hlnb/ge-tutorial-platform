import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import mdx from 'vite-plugin-mdx';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [vue(), mdx(), Pages()],
});
