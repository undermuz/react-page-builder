import globals from "globals"

import { defineConfig } from "eslint/config"
import js from "@eslint/js"

import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: globals.browser,
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat["jsx-runtime"],
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: [`**/*.{ts,tsx}`],
        rules: {
            "no-unused-vars": "off",
        },
    },
    {
        ignores: ["node_modules/*", "build/*", "dist/*"],
        rules: {
            "no-undef": "warn",
            "react/prop-types": "off",
            "no-useless-escape": 0,
            "no-prototype-builtins": "off",
            "no-debugger": 0,
            "no-console": 0,
            "new-cap": 0,
            strict: 1,
            "no-underscore-dangle": 0,
            "no-use-before-define": 0,
            "eol-last": 0,
            "require-atomic-updates": 0,
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/consistent-type-exports": "error",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/ban-ts-comment": "off",
        },
    },
])
