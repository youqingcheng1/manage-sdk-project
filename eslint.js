const override = require('./eslint/override')
const error = require('./eslint/error')
const bestPractices = require('./eslint/best-practices')
const variables = require('./eslint/variables')
const style = require('./eslint/style')
const es6 = require('./eslint/es6')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    ...error,
    ...bestPractices,
    ...variables,
    ...style,
    ...es6,
    ...override,
    'no-console': isProd ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': isProd ? 'warn' : 'off',
    'no-use-before-define': 0,
    'no-shadow': 0,
    'vue/comment-directive': 0,
    'vue/multi-word-component-names': 0,
    'vue/valid-next-tick': 0,
    'object-curly-newline': 0,
    'array-element-newline': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off'
  }
}
