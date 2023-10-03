/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'"TT Norms"',
					'sans-serif',
					...defaultTheme.fontFamily.sans,
				],
			},
			colors: {
				ghost: '#F7F7FF',
				yale: {
					1: '#003B7A',
					2: '#0063CC',
					3: '#1F8BFF',
				},
				digital: {
					1: '#0CBDBD',
					2: '#2CF2F2',
					3: '#79F6F6',
				},
				tangerine: {
					0: '#F38353',
					1: '#F58D61',
					2: '#F8AC8C',
					3: '#FBC8B2',
				},
				jet: {
					1: '#3C3744',
					2: '#968EA4',
					3: '#CBC7D1',
				},
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'1xl': '1536px',
				'2xl': '2560px',
				'3xl': '3840px',
				'4xl': '4800px',
			},
		},
	},
	plugins: [],
};
