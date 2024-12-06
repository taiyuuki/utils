import tyk_eslint from '@taiyuuki/eslint-config'

export default tyk_eslint({
    ts: true,
    ignores: [
        '**/doc',
        '**/temp',
        '**/etc',
        '**/cache',
    ],
    rules: { '@typescript-eslint/no-explicit-any': 'off' },
})
