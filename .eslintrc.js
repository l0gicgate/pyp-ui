module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  ignorePatterns: ['node_modules/'],
  parser: '@babel/eslint-parser',
  plugins: ['prettier', 'react', 'sort-keys'],
  root: true,
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-bitwise': ['error', { allow: ['^'] }],
    'no-console': ['error', { allow: ['error', 'log', 'warn'] }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/button-has-type': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
        reservedFirst: false,
      },
    ],
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: false },
    ],
    'sort-keys/sort-keys-fix': 1,
  },
};
