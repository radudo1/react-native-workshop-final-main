module.exports = {
  extends: 'universe/native',
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      extends: ['plugin:import/recommended', 'eslint:recommended', 'plugin:import/typescript'],
      rules: {
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'import/no-anonymous-default-export': 'off',
        'import/namespace': [
          'error',
          {
            allowComputed: true,
          },
        ],
        '@typescript-eslint/consistent-type-imports': 'error',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        curly: ['error', 'multi-line', 'consistent'],
        'no-sparse-arrays': 'error',
        'no-extra-semi': 'error',
        'no-empty': 'error',
        'no-duplicate-case': 'error',
        'no-dupe-keys': 'error',
        'no-unreachable': 'error',
        'no-var': 'error',
        'prefer-const': 'warn',
        'no-const-assign': 'error',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: 'react-native',
                group: 'external',
                position: 'before',
              },
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@lego*',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
