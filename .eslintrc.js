'use strict';

module.exports = {
    extends: ['airbnb', 'prettier', 'plugin:eslint-comments/recommended', 'prettier/react'],
    plugins: ['eslint-comments', 'unicorn', 'react-hooks', 'react'],
    parser: 'babel-eslint',
    env: {
        browser: true,
    },
    rules: {
        'no-restricted-syntax': 0,
        'react/jsx-wrap-multilines': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/require-default-props': 0,
        'no-void': 0,
        'generator-star-spacing': 0,
        'function-paren-newline': 0,
        'no-restricted-globals': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'linebreak-style': 0,
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': [0, 'camel-case'],
        // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'off',
        'react/jsx-filename-extension': 'off',
        // Use function hoisting to improve code readability
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        // Common abbreviations are known and readable
        'unicorn/prevent-abbreviations': 'off',
        'import/no-cycle': 0,
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks

        // issue https://github.com/facebook/react/issues/15204
        'react-hooks/exhaustive-deps': 'off', // Checks effect dependencies
        'object-curly-newline': 0,
        'implicit-arrow-linebreak': 0,
        'operator-linebreak': 0,
        'eslint-comments/no-unlimited-disable': 0,
        'no-param-reassign': 1,
        'no-unexpected-multiline': 'error',
        'import/no-extraneous-dependencies': 0,
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-nested-ternary': 0,
        'prefer-destructuring': 0,
        'no-unused-expressions': 0,
        'no-inner-declarations': 0,
        'no-console': 0,
        'func-names': 0,
        'react/no-string-refs': 1,
        'no-shadow': 1,
        'no-else-return': 1,
        'import/order': 0,
        'lines-between-class-members': 0,
        'object-shorthand': 0,
        'arrow-body-style': 0,
        'arrow-parens': 0,
        'spaced-comment': 0,
        'react/jsx-boolean-value': 0,
        'dot-notation': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/label-has-for': 0,
        'camelcase': 1,
        'no-underscore-dangle': 0,
    },
    settings: {
        // support import modules from TypeScript files in JavaScript files
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                    ['@utils', './src/utils'],
                    ['@assets', './src/assets'],
                    ['@components', './src/components'],
                    ['@pages', './src/pages'],
                    ['@router', './src/router'],
                    ['@store', './src/store'],
                    ['@services', './src/services'],
                    ['@layouts', './src/layouts'],
                ],
                extensions: [".json", ".js", ".jsx", ".ts", ".tsx", ".css", ".less", "scss", ".styl"],
            },
            node: { extensions: [".json", ".js", ".jsx", ".ts", ".tsx", ".css", ".less", "scss", ".styl"] },
        },
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use, //使用组件工厂规则
                                               // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React" 默认使用React语法
            "version": "detect", // React version. "detect" automatically picks the version you have installed. React版本，自动检索你安装的版本
                                 // You can also use `16.0`, `16.3`, etc, if you want to override the detected value. 如果你想重写检索值，你也可以使用16.0，16.3等值。
            "flowVersion": "0.53" // Flow version  //流程版本
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped. 任何函数名常常用于包裹propTypes，例如"forbidExtraProps"，如果没有被设置，任何被函数包裹的propType将被忽略。
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
    },
};
