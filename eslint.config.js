import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import configPrettier from 'eslint-config-prettier'

export default [
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**'],
  },

  // Base JavaScript configuration
  js.configs.recommended,

  // Vue.js configuration using flat configs
  ...pluginVue.configs['flat/essential'],
  ...pluginVue.configs['flat/strongly-recommended'],
  ...pluginVue.configs['flat/recommended'],

  // Prettier integration
  configPrettier,

  // Custom rules override
  {
    name: 'app/custom-rules',
    files: ['**/*.{js,mjs,jsx,vue}'],
    rules: {
      // Allow console for development
      'no-console': 'off',
      'no-unused-vars': 'warn',
      
      // Vue specific customizations
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      
      // Prettier integration
      'prettier/prettier': 'off', // Turn off prettier in ESLint, use separate prettier command
    },
  },
]