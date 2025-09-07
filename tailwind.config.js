module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.js",
	],
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
					500: "#BC2826",
					600: "#b70000",
					700: "#a30000",
					800: "#8e0000",
					900: "#5f0000",
					DEFAULT: "#BC2826", //500
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
				// gray: {
				// 	50: "#fbf4f4",
				// 	100: "#f6e9e9",
				// 	200: "#e9c9c9",
				// 	300: "#a8c6db",
				// 	400: "#6799c1",
				// 	500: "#FFFFFF",
				// 	600: "#a5b0b2",
				// 	700: "#a7b0b6",
				// 	800: "#174164",
				// 	900: "#9ca1a4",
				// 	DEFAULT: "#C3C7CC", //500
				// 	on: "#f4fbfa", //50
				// 	dark: {
				// 		DEFAULT: "#dba8a8", //300
				// 		on: "#641717", //800
				// 	},
				// },
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
	plugins: [require("flowbite/plugin")],
};
