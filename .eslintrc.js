module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  globals: {
    cy: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'standard',
    'plugin:security/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'security']
}
