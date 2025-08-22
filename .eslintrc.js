module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier', 'unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'no-unused-vars': 'off', // Turn off unused vars warning
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'unused-imports/no-unused-imports': 'error', // Auto-remove unused imports
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        // varsIgnorePattern: '^_',
        // args: 'after-used',
        // argsIgnorePattern: '^_',
        // ignoreRestSiblings: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
