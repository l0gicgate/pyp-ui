module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  ignorePatterns: ['__mocks__/', 'node_modules/'],
  parser: '@babel/eslint-parser',
  plugins: ['jest', 'module-resolver', 'prettier', 'react'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-bitwise': ['error', { allow: ['^'] }],
    'no-console': ['error', { allow: ['error', 'log', 'warn'] }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/button-has-type': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: false,
      },
    ],
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  root: true,
};
