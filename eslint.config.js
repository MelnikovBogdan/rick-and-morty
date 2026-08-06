import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react(?:/.*)?$'],
            ['^(?:react-dom|react-router-dom)(?:/.*)?$'],
            ['^@?\\w'],
            ['^(?:@(app|pages|widgets|features|shared)(?:/|$)|\\.)'],
            ['^\\u0000.*\\.(?:css|scss|sass|less|styl)(?:\\?.*)?$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  prettierConfig,
  pluginPrettier,
)
