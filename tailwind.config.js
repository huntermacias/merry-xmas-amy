/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	  ],
	theme: {
		extend: {
		  colors: {
			'soft-white': '#fdfdfd',
			'soft-blush': '#f7e6e6',
			'deep-red': '#8b0000',
			'charcoal': '#333333',
			'rich-pink': '#ff007f',
			// ... other colors ...
		  },
		  fontFamily: {
			'romantic': ['Parisienne', 'cursive'],
			// ... other font families ...
		  },
		},
		
	  },
	
	
  plugins: [],
}
