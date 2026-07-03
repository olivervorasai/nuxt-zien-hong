import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        /**
         * Disallow accidental use of the browser global `name`.
         * This catches bare `name` references that can slip past linting and
         * type-checking because `name` exists on the DOM global scope.
         */
        'no-restricted-globals': [
            'error',
            {
                name: 'name',
                message:
                    "Use a specific local variable instead of the browser global 'name'.",
            },
        ],

        // Catch refs/computed refs used directly in conditions or expressions.
        'vue/no-ref-as-operand': 'error',

        // Enforce self-closing void elements
        'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    },
});
