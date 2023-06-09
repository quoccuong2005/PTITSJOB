import { CustomFlowbiteTheme } from "flowbite-react/lib/esm/components/Flowbite/FlowbiteTheme";

export const flowbiteTheme: CustomFlowbiteTheme = {
	footer: {
		base: "flex flex-col",
		brand: {
			base: "m-6 flex items-center",
		},
		groupLink: {
			base: "flex flex-col flex-wrap text-gray-500  text-white",
			link: {
				base: "mb-4 last:mr-0 md:mr-6",
			},
		},
		icon: {
			base: "text-gray-400 hover:text-gray-900  hover:text-white",
		},
	},
	modal: {
		body: {
			base: "space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8",
		},
	},
	button: {
		base: "bg-primary-500 font-medium justify-center hover:bg-primary-800 focus:ring-primary-300 disabled:hover:bg-primary-700  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800  disabled:hover:bg-primary-600 focus:!ring-2 p-0.5 duration-300",
		inner: { base: "flex items-center justify-center text-sm px-4 py-2" },
	},
	darkThemeToggle: {
		base: "rounded-lg p-2.5 py-0 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  text-gray-400  hover:bg-gray-700  focus:ring-gray-700",
	},
	textInput: { field: { input: { base: "w-full focus:ring-primary-700" } } },
	sidebar: {
		base: "h-full bg-gray-50",
		collapse: {
			list: "space-y-2 py-2 list-none",
		},
		inner: "h-full overflow-y-auto overflow-x-hidden bg-white py-4 px-3  bg-gray-800",
		item: {
			base: "no-underline flex items-center rounded-lg p-2 text-lg font-normal text-gray-900 hover:bg-gray-100  text-white  hover:bg-gray-700",
		},
		itemGroup: "list-none border-t border-gray-200 pt-3 first:mt-0 first:border-t-0 first:pt-0  border-gray-700",
	},
};
