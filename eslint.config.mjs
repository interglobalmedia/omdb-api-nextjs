import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
	js.configs.recommended,
	...nextVitals,
	globalIgnores([
		'.next/**',
		'out/**',
		'build/**',
		'coverage/**',
		'next-env.d.ts',
	]),
])
