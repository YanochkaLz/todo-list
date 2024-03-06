module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'@wemake-services/typescript/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'@typescript-eslint/explicit-function-return-type': [
			'error',
			{
				allowTypedFunctionExpressions: true,
			},
		],
		// indentation and spacing
		'@typescript-eslint/indent': ['error', 'tab'],
		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': ['error', 'never'],

		// parens and semicolons
		'no-extra-parens': 'off',
		'@typescript-eslint/no-extra-parens': 'error',

		semi: 'off',
		'@typescript-eslint/semi': ['error', 'never'],

		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: { delimiter: 'none', requireLast: false },
				singleline: { delimiter: 'comma', requireLast: false },
			},
		],

		// Special rules when typescript support is active:
		// See: https://github.com/benmosher/eslint-plugin-import
		'import/no-unresolved': 'error',
		'import/named': 'error',
		'import/no-absolute-path': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': 'error',
		'import/no-useless-path-segments': 'error',

		'import/export': 'error',
		'import/no-mutable-exports': 'error',
		'import/exports-last': 'error',
		'import/no-duplicates': 'error',
		'import/newline-after-import': 'error',
		'import/max-dependencies': ['error', { max: 15 }],
		'import/no-named-default': 'error',
		'import/no-anonymous-default-export': [
			'error',
			{
				allowObject: true,
				allowArrowFunction: true,
			},
		],
	},
}
