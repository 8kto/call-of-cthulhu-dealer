module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    'no-var': 'error',
    'import/no-extraneous-dependencies': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../*'],
            message: 'Use absolute paths when importing from parent directory',
          },
        ],
      },
    ],
    'no-restricted-modules': [
      'error',
      {
        patterns: ['../*'],
      },
    ],
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        groups: ['type', ['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'newline-before-return': 'error',
    'prefer-arrow-callback': ['error', { 'allowNamedFunctions': true }],
  },
}
