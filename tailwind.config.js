module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	plugins: [require("flowbite/plugin")],
	theme: {
		darkMode: 'class',
		extend: {
			colors: {
				primary: {
					50: "#f9e5e5",
					100: "#efb2b2",
					200: "#e57f7f",
					300: "#db4c4c",
					400: "#d11919",
					500: "#DE221A",
					600: "#b70000",
					700: "#a30000",
					800: "#8e0000",
					900: "#5f0000",
					DEFAULT: "#DE221A", //500
					on: "#f9e6e5", //50
					dark: {
						DEFAULT: "#5274fa", //300
						on: "#001ba3", //800
					},
				},
				secondary: {
					50: "#fbf4f4",
					100: "#f6e9e9",
					200: "#e9c9c9",
					300: "#dba8a8",
					400: "#c16767",
					500: "#a62626",
					600: "#952222",
					700: "#7d1d1d",
					800: "#641717",
					900: "#51131a",
					DEFAULT: "#FF1818", //500
					on: "#f4fbfa", //50
					dark: {
						DEFAULT: "#dba8a8", //300
						on: "#641717", //800
					},
				},
				white: {
					50: "#fbf4f4",
					100: "#f6e9e9",
					200: "#e7e1e1",
					300: "#dba8a8",
					400: "#b4a8a8",
					500: "#FFFFFF",
					600: "#867b7b",
					700: "#857d7d",
					800: "#5e5c5c",
					900: "#504f4f",
					DEFAULT: "#FFFFFF", //500
					on: "#f4fbfa", //50
					dark: {
						DEFAULT: "#dba8a8", //300
						on: "#641717", //800
					},
				},
			},
			keyframes: {
				fadeOpacity: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				}
			},
			animation: {
				fadeOpacity: 'fadeOpacity 1s forwards',
			}
		},
	},

};
