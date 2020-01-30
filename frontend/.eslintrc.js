module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    settings: {
        react: {
            createClass: 'createReactClass',
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        '@typescript-eslint/no-use-before-define': 0,
        'react/no-unescaped-entities': 0,
    },
};