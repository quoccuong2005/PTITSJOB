interface IRouter {
	name: string;
	path: string;
	routes?: { name: string; path: string }[];
}

export const Router:IRouter[] = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "tin-tuyen-sinh",
		path: "/tin-tuyen-sinh",
	},
	{
		name: "su-kien",
		path: "/su-kien",
	},
	{
		name: "tuyen-sinh",
		path: "/tuyen-sinh",
	},
	{
		name: "thong-bao",
		path: "/thong-bao",
	},
	{
		name: "so-do",
		path: "/so-do",
	},
];
