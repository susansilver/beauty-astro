/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['Arial', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
		  display: ['"Playfair Display"', 'Arial', 'cursive'],
		  logo: ['"Righteous"', 'Arial', 'cursive'],
		  numbers: ['"Basteleur-Bold"', 'Arial', 'cursive'],
		  quotes: ['"Playfair Bold"', 'Arial', 'cursive'],
		  birthday: ['"Ouroboros"', 'Arial', 'cursive'],
	  },
		colors:{
			"primary": {
				50: "#E3EFFC",
				100: "#C8DFF9",
				200: "#95C1F3",
				300: "#5EA1ED",
				400: "#2781E7",
				500: "#1565C0",
				600: "#115098",
				700: "#0D3C73",
				800: "#09294E",
				900: "#041325",
			},
			"secondary": {
				50: "#FCE8F0",
				100: "#F9D2E0",
				200: "#F3A0BE",
				300: "#ED72A0",
				400: "#E7417E",
				500: "#D81B60",
				600: "#AC164D",
				700: "#83103B",
				800: "#560B26",
				900: "#2D0614",
			},
			"accent": {
				50: "#E9F9FB",
				100: "#D3F3F8",
				200: "#A8E8F0",
				300: "#7CDCE9",
				400: "#51D0E1",
				500: "#26C6DA",
				600: "#1E9DAE",
				700: "#167683",
				800: "#0F4F57",
				900: "#07272C",
			  },
		  'white': '#FAFAFA',
		  'black': '#212121',
		}
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }