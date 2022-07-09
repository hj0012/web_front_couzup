module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'prettier/prettier': 0,
        'react/jsx-filename-extension': [
            0,
            {
                extensions: ['.ts', '.tsx', '.js', '.jsx'
                ]
            }
        ],
        'react/function-component-definition': 0,
        'import/no-unresolved': 0,
        'lines-between-class-members': 0,
        'class-methods-use-this': 0,
        'no-useless-constructor': 0,
        'no-use-before-define': 0,
        'no-unused-expressions': 0,
        'prefer-destructuring': 0,
        'no-empty-function': 0,
        'ignoreParameters': 0,
        'react/require-default-props': 0,
        'react/self-closing-comp': 0,
        'react/destructuring-assignment': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'jsx-a11y/no-static-element-interactions': [
            0,
            {
                handlers: [
                    'onClick',
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp',
                ],
                allowExpressionValues: true,
            },
        ],
        '@typescript-eslint/no-inferrable-types': [
            0,
            {
                ignoreParameters: true
            }
        ],
        '@typescript-eslint/strict-boolean-expressions': [
            2,
            {
                'allowString': false,
                'allowNumber': false
            }
        ],
        '@typescript-eslint/no-empty-function': [
            0,
            {
                allow: ['private-constructors', 'protected-constructors' | 'decoratedFunctions'
                    | 'overrideMethods']
            }
        ],
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'import/prefer-default-export': 0,
        'no-unused-vars': 0,
        'no-useless-return': 0,
        'no-unsafe-call': 0,
        "no-empty-function": 0,
        'jsx-a11y/aria-role': [
            0,
            {
                allowedInvalidRoles: ['text'
                ],
                ignoreNonDOM: true,
            }
        ],
        "jsx-a11y/label-has-associated-control": [
            0,
            // {
            //     "labelComponents": ["CustomLabel"],
            //     "labelAttributes": ["inputLabel"],
            //     "controlComponents": ["CustomInput"],
            //     "assert": "both",
            //     "depth": 3,
            // }
        ],
        'jsx-a11y/label-has-for': [
            0,
            {
                // 'components': ['Label'],
                // 'required': {
                //     'every': ['nesting', 'id']
                // },
                'allowChildren': false
            }
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never'
            }
        ]
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
};
