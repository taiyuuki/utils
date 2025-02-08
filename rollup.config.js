import { defineConfig } from 'rollup'
import ts from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import babelPlugin from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import { importExportPlugin } from 'rollup-plugin-import-export'

const config = defineConfig([
    {
        input: ['src/index.ts'],
        output: [
            {
                dir: 'dist/esm',
                format: 'esm',
                preserveModules: true,
            },
            {
                dir: 'dist/cjs',
                format: 'cjs',
                preserveModules: true,
            },
        ],
        plugins: [
            importExportPlugin(),
            ts(),
            babelPlugin({ exclude: '**/node_modules/**', extentions: ['.ts'], babelHelpers: 'bundled' }),
            json(),
            commonjs(),
        ],
    },
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/umd/index.js',
                format: 'umd',
                name: 'utils',
            },
        ],
        plugins: [
            importExportPlugin(),
            ts(),
            babelPlugin({ exclude: '**/node_modules/**', extentions: ['.ts'], babelHelpers: 'bundled' }),
            json(),
            commonjs(),
            resolve({ preferBuiltins: true, mainFields: ['browser'] }),
            globals(),
            builtins(),
            terser(),
        ],
    },
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/types',
            format: 'esm',
            preserveModules: true,
        },
        plugins: [
            importExportPlugin(),
            dts(),
        ],
    },
])

export default config
