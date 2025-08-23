import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';

export default [
  {
    ignores: [
      'dist',
      'node_modules',
      // duplicate (capitalized) project folder you are not using
      'Freelance-Jobs-WebApp'
    ]
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        IntersectionObserver: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: reactPlugin
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  }
];