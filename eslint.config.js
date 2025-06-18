import eslintPluginNext from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import tsEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEsLintParser from '@typescript-eslint/parser';

export default [
  // Next.js configuration
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      '@next/next': eslintPluginNext,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs['core-web-vitals'].rules,
      'prettier/prettier': 'warn', // Show Prettier formatting errors in ESLint
    },
  },

  // TypeScript configuration
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsEslintEslintPlugin,
    },
    languageOptions: {
      parser: tsEsLintParser,
    },
    rules: {
      ...tsEslintEslintPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      'arrow-body-style': 'off',
    },
  },

  // Prettier configuration (disable conflicting rules)
  eslintConfigPrettier,
];
