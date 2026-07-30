// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Globales Ignorieren als allererster Eintrag (ohne 'files'-Schlüssel)
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      '**/*.config.mjs', // Ignoriert diese Konfigurationsdatei selbst
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['src/frontend/**/*.{ts,tsx}'],
    languageOptions: { globals: { ...globals.browser } },
  },

  {
    files: ['src/backend/**/*.ts'],
    languageOptions: { globals: { ...globals.node } },
  },

  eslintConfigPrettier, // LAST to resolve conflicts
];
