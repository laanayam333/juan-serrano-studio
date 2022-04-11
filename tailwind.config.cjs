const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				body: ['Neue Haas Grotesk Text', ...fontFamily.sans],
				heading: ['Voyage', ...fontFamily.serif],
				subheading: ['Neue Haas Grotesk Display', ...fontFamily.sans]
			},
			colors: {
				highlight: '#1818D6',
				light: '#F6F3EC',
				dark: '#363533'
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
