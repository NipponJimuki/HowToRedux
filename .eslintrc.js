'use strict';

const ERROR = 2;
const INDENT = 4;

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        node: true,
        es6: true,
        browser: true,
    },
    extends: ['prettier', 'prettier/react', 'plugin:react/recommended', 'plugin:import/errors'],
    plugins: ['react', 'import', 'prettier'],
    rules: {
        indent: [
            ERROR,
            INDENT,
            {
                ignoredNodes: ['JSXElement *'],
                SwitchCase: 1,
            },
        ],
        'max-len': [ERROR, 120],
        'react/jsx-indent': [ERROR, INDENT],
        'comma-dangle': [ERROR, 'always-multiline'],
        'arrow-parens': [ERROR, 'as-needed'],
        'no-unused-vars': [ERROR, { argsIgnorePattern: '^store$|^next$|^action$$' }],
    },
};
