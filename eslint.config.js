import eslintPluginAstro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
  {
    files: ['**/*.astro'],
    plugins: {
      astro: eslintPluginAstro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      ...eslintPluginAstro.configs.recommended.rules,
    },
  },
]; 