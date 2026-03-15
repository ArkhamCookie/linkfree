import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig(
	eslint.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
	{
		files: ["public/js/*.js"],
		ignores: ["node_modules/"],
	},
	{
		plugins: {
			"@stylistic": stylistic,
		}
	},
	{
		rules: {
			"semi": "warn",
			"prefer-const": "error",
			"@stylistic/indent": ["warn", "tab"],
			"@stylistic/semi": ["warn", "always"],
			"@stylistic/quotes": ["warn", "double"],
		},
	},
);
