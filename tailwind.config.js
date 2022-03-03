let colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#ffffff",
			black: "#000000",
			gray: colors.slate,
			brand: {
				50: "#F4F2FF",
				100: "#D5CAFF",
				200: "#BBA2FF",
				300: "#A679FF",
				400: "#9651FF",
				500: "#8928FF",
				600: "#8001FF",
				700: "#6006CF",
				800: "#4409A2",
				900: "#2E0A76",
			},
			eletric: "#fa3889",
			brave: "#ff6e4e",
			bright: "#ffcc33",
			neon: "#6ef76e",
			pacific: "#0ce9da",
			azure: "#3377ff",

			error: colors.rose,
			success: colors.teal,
			warning: colors.amber,
		},
	},
	extend: {
		screens: {
			"3xl": "2000px",
		},
	},

	plugins: [],
};
