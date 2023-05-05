/* eslint-disable */

module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'airbnb-base',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:css/recommended',
      'prettier',
    ],
    plugins: ['react-hooks'],
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ignorePatterns: ['src/**/*.css'],
    rules: {
      'linebreak-style': 'off', // CRLF, LF 에러 무시
      'react/jsx-filename-extension': [
        'error',
        {
          allow: 'always',
          extensions: ['js', 'jsx', '.ts', '.tsx'],
        },
      ],
      'import/extensions': ['error', 'ignorePackages', { css: 'never' }],
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': ['off', { caseSensitive: false }],
      'object-property-newline': 'error',
      'one-var': ['error', 'never'],
      'space-unary-ops': ['error', { nonwords: false }],
      'brace-style': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'key-spacing': ['error', { afterColon: true }],
      'vars-on-top': 'error',
      'arrow-parens': ['error', 'always'],
      'object-curly-newline': [
        'error',
        {
          ExportDeclaration: {
            minProperties: 2,
          },
        },
      ],
      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
          ignoreUrls: true,
          ignorePattern: '^import .*',
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'lines-between-class-members': 'off',
      'no-shadow': 0,
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  
      'css/named-color': 'error',
      'css/no-length-zero-unit': 'error',
      'css/no-useless-color-alpha': 'error',
      'css/prefer-reduce-shorthand-property-box-values': 'error',
      'css/no-dupe-properties': 'error',
      'css/no-invalid-color-hex': 'error',
      'css/no-shorthand-property-overrides': 'error',
      'css/no-unknown-property': 'warn',
      'css/no-unknown-unit': 'error',
      'css/no-number-trailing-zeros': 'error',
      'css/number-leading-zero': 'error',
      'no-iterator': 'error',
  
      'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: false, numbers: false }],
      'array-callback-return': 'off',
      'func-style': 'off',
      'wrap-iife': ['error', 'inside', { functionPrototypeMethods: false }],
      'no-restricted-syntax': ['error', 'WithStatement'],
      'no-case-declarations': 'error',
      'array-bracket-spacing': ['error', 'never'],
      'operator-linebreak': [
        'error',
        'after',
        { overrides: { '+=': 'before', '?': 'before', ':': 'before' } },
      ],
      camelcase: ['error', { properties: 'never' }],
      'no-underscore-dangle': 'off',
      semi: ['error', 'always'],
      'no-use-before-define': 'off',
      'no-unused-expressions': ['error', { allowShortCircuit: true }],
      'import/prefer-default-export': 'off',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-return-assign': ['error', 'except-parens'],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          pathGroups: [
            { pattern: 'react', group: 'builtin', position: 'before' },
            { pattern: '@*', group: 'external', position: 'before' },
            { pattern: 'src/**', group: 'internal', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['react', 'src/**'],
        },
      ],
      '@typescript-eslint/ban-types': [
        'error',
        {
          types: {
            String: {
              message: 'Use string instead',
              fixWith: 'string',
            },
            Number: {
              message: 'Use number instead',
              fixWith: 'number',
            },
            Boolean: {
              message: 'Use boolean instead',
              fixWith: 'boolean',
            },
            '{}': {
              message: 'Use object instead',
              fixWith: 'object',
            },
          },
          extendDefaults: false,
        },
      ],
      'no-continue': 'off',
      '@typescript-eslint/naming-convention': [
        2,
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'enum',
          format: ['PascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
        {
          selector: 'property',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'method',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['**/setupTests.ts', '**/msw/*', '**/*.test.*', '**/craco.config.js'] },
      ],
    },
  };
  