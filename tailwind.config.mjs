import { colors } from './src/utils/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.primary,
				background: colors.background,
				foreground: colors.foreground,
			}
		},
	},
	plugins: [],
}
