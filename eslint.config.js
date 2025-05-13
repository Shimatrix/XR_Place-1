// eslint.config.js
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    // Настройки для TypeScript и React
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      globals: {
        document: 'readonly',
        window: 'readonly',
        React: 'readonly',
        JSX: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        KeyboardEvent: 'readonly',
        SVGSVGElement: 'readonly',
        HTMLDivElement: 'readonly',
        IntersectionObserver: 'readonly',
        setTimeout: 'readonly'
      }
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': ['warn', { usePrettierrc: true }],
      'react/react-in-jsx-scope': 'off',
      'comma-dangle': 'off',
      'use-isnan': ['error', { enforceForSwitchCase: true }],
      'react/void-dom-elements-no-children': 'warn',
      'react/no-unsafe': 'warn',
      'react/no-unused-state': 'warn',
      'react/prefer-stateless-function': 'warn',
      'react/self-closing-comp': 'warn',
      'react/no-will-update-set-state': 'warn',
      'react/no-this-in-sfc': 'warn',
      'react/no-string-refs': 'warn',
      'react/no-redundant-should-component-update': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-key': 'warn',
      'react/jsx-max-props-per-line': ['warn', { maximum: 7 }],
      'react/jsx-max-depth': ['warn', { max: 8 }],
      'arrow-body-style': ['warn', 'as-needed'],
      'dot-notation': 'warn',
      'jsx-quotes': ['warn', 'prefer-single'],
      'valid-typeof': 'warn',
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: [
            'private-static-field',
            'protected-static-field',
            'public-static-field',
            'private-static-method',
            'protected-static-method',
            'public-static-method',
            'private-constructor',
            'protected-constructor',
            'public-constructor',
            'private-instance-field',
            'protected-instance-field',
            'public-instance-field',
            'private-instance-method',
            'protected-instance-method',
            'public-instance-method'
          ]
        }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  prettierConfig // Должен быть последним, чтобы переопределить конфликтующие правила
];
