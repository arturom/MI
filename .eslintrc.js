module.exports = {
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "classes": true
    },
    'extends': 'airbnb',
    'rules': {
        'array-callback-return': ['off'],
        'arrow-body-style': ['off'],
        'arrow-parens': ['off'],
        'camelcase': ['off'],
        'comma-dangle': ['off'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'consistent-return': ['off'],
        'default-case': 'off',
        'eol-last': ['off'],
        'eqeqeq': 'off',
        'func-names': ['off'],
        'guard-for-in': 'off',
        'global-require': ['off'],
        'import/prefer-default-export': ['off'],
        'import/no-extraneous-dependencies': 'off',
        'class-methods-use-this': ['off'],
        'indent': ['error', 4],
        'import/first': 'off',
        'jsx-a11y/anchor-has-content': ['off'],
        'jsx-a11y/img-has-alt': ['off'],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'keyword-spacing': ['error', { 'after': true }],
        'linebreak-style': ['error', 'unix'],
        'max-len': 'off',
        'new-cap': 'off',
        'no-bitwise': 'off',
        'no-console': 'off',
        'no-class-assign': 'off',
        'no-constant-condition': 'off',
        'no-case-declarations': 'off',
        'no-else-return': 'off',
        'no-floating-decimal': 'off',
        'no-nested-ternary': 'off',
        'no-path-concat': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-return-assign': 'off',
        'no-self-compare': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-unreachable': 'off',
        'no-unneeded-ternary': 'off',
        'no-useless-escape': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'no-throw-literal': 'off',
        'no-trailing-spaces': 'off',
        'no-var': ['off'],
        'object-shorthand': 'off',
        'padded-blocks': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-template': 'off',
        'prefer-const': 'off',
        'quotes': ['error', 'single'],
        'react/forbid-prop-types': ['off'],
        'react/jsx-filename-extension': ['off'],
        'react/jsx-space-before-closing': ['off'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-danger': ['off'],
        'react/no-unescaped-entities': ['off'],
        'react/no-did-mount-set-state': ['off'],
        'react/self-closing-comp': ['off'],
        'react/prop-types': 'off',
        'semi': 'off',
        'space-before-function-paren': ['off'],
        'spaced-comment': ['off'],
        'space-in-parens': ['off'],
        'vars-on-top': ['off'],
        'wrap-iife': ['off']
    }
};