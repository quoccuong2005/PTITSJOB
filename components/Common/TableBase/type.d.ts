import React from "react";

export type TColumn<T> = {
	title: string;
	dataIndex?: keyof T;
	render?: (value: any, record: T) => React.ReactNode;
	align?: "left" | "center" | "right";
	onCell?: { style?: (record: T) => any; onClick?: (record: T) => any };
	hide?: boolean;
	width?:string
};

export type TTableProps<T> = {
	data: T[];
	columns: TColumn<T>[];
	className?: string;
	addStt?: boolean;
	page?: number;
	limit?: number;
	loading?: boolean;
	emptyText?: string;
};
