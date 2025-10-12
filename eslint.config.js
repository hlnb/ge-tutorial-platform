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

  // Node.js files (API, config files)
  {
    name: 'app/node-files',
    files: ['api/**/*.js', 'vite.config.js', 'postcss.config.js', 'eslint.config.js'],
    languageOptions: {
      globals: {
        // Node.js globals
        global: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        fetch: 'readonly', // Node.js 18+ has fetch
      },
      sourceType: 'module',
    },
  },

  // Browser files (Vue components, frontend JS)
  {
    name: 'app/browser-files',
    files: ['src/**/*.{js,vue}', 'playground/**/*.js'],
    languageOptions: {
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
  navigator: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        Blob: 'readonly',
        FormData: 'readonly',
        HTMLElement: 'readonly',
        Event: 'readonly',
        alert: 'readonly',
        confirm: 'readonly',
        prompt: 'readonly',
      },
      sourceType: 'module',
    },
  },

  // Custom rules override
  {
    name: 'app/custom-rules',
    files: ['**/*.{js,mjs,jsx,vue}'],
    rules: {
      // Allow console for development
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'no-empty': 'warn',
      'no-undef': 'error',
      
      // Vue specific customizations
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/valid-define-props': 'off',
      'vue/require-prop-types': 'off',
      
      // Prettier integration
      'prettier/prettier': 'off', // Turn off prettier in ESLint, use separate prettier command
    },
  },
]