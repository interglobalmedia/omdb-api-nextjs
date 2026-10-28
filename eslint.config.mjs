import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier/flat'

export default defineConfig([
	js.configs.recommended,
	...nextVitals,
	prettier,
	globalIgnores([
		'.next/**',
		'out/**',
		'build/**',
		'coverage/**',
		'next-env.d.ts',
	]),
])
