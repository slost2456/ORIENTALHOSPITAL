import nextPlugin from '@next/eslint-plugin-next';

export default [
  {
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@next/next/no-img-element': 'off'
    }
  }
];
