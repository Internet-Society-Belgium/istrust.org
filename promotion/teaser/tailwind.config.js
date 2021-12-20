/* eslint-env node */

module.exports = {
	purne: false,
	content: ['./src/**/*.tsx'],
	theme: {
		colors: {
			primary: '#0077FF',
			secondary: {
				DEFAULT: '#19191A',
				light: '#7D7E80',
			},
			'dark-secondary': {
				DEFAULT: '#EDF0F2',
				light: '#898B8C',
			},
			container: '#FAFCFF',
			'dark-container': '#292E33',
			'secondary-container': '#E1E3E6',
			'secondary-dark-container': '#3D454D',
			background: '#EDF0F2',
			'dark-background': '#14171A',
		},
		fontFamily: {
			sans: ['Rubik', 'sans-serif'],
		},
		extend: {},
	},
};
