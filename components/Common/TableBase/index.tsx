import LoadingContent from "../../Loading/LoadingContent";
import Empty from "../Empty";
import { TTableProps } from "./type";

const TableBase = (props: TTableProps<any>) => {
	const { className, limit, page, loading, emptyText } = props;
	let data = props.data;
	let columns = props.columns.filter((item) => !item.hide);
	const addStt = props.addStt && limit && page;
	if (addStt && !columns.filter((item) => item.title === "TT").length) {
		columns.unshift({
			title: "TT",
			dataIndex: "stt",
			align: "center",
		});
		data = data.map((item, index) => ({ ...item, stt: index + 1 + (page - 1) * limit }));
	}

	return (
		<div className='content-table'>
			{loading ? <LoadingContent /> : !data.length ? <Empty title={emptyText} /> : null}

			{data.length ? (
				<table className={className}>
					<thead>
						<tr>
							{columns.map((col, index) => (
								<th key={index} style={{width:col.width}}>
									<div className={`text-${col.align ?? "left"}`}>{col.title}</div>
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{data?.map((item, index) => (
							<tr key={index}>
								{columns.map((col, i) => (
									<td
										key={i}
										style={col.onCell?.style && col.onCell?.style(item)}
										onClick={() => col.onCell?.onClick && col.onCell?.onClick(item)}
									>
										<div className={`text-${col.align ?? "left"}`}>
											{col.render
												? col.render(col.dataIndex ? item[col.dataIndex] : "", item)
												: col.dataIndex
												? item[col.dataIndex]
												: ""}
										</div>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			) : null}
		</div>
	);
};

export default TableBase;
