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
      'dark-love': '#1a1a2e',
      'love-light': '#e0e0e0',
      'love-accent': '#c44569',
      'love-highlight': '#4e4e50',
      'grinch-green': '#2f9e44',
      'grinch-yellow': '#f4d03f',
      'grinch-red': '#cb4335',
      'grinch-heart': '#9b59b6',
      'grinch-dark-green': '#1e5631',
			// ... other colors ...
		  },
		  fontFamily: {
			'romantic': ['Parisienne', 'cursive'],
      'techy': ['Roboto', 'sans-serif'],
			// ... other font families ...
		  },
		},
		
	  },
	
	
  plugins: [],
}
