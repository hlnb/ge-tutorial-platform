import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
// replace YOUR-REPOSITORY with the exact repository name.
// For a user site or custom domain at the root, use '/' or omit base.
export default defineConfig({
  plugins: [vue()],
  base: '/YOUR-REPOSITORY/',
})

