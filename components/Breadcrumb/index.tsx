import { Breadcrumb } from "flowbite-react";

interface IProps {
	data: {
		title: string;
		path: string;
	}[];
}
const BreadcrumbPage = (props: IProps) => {
	return (
		<div className="mb-6">
			<Breadcrumb aria-label='Default breadcrumb example'>
				{props.data.map((val, i) => {
					return (
						<Breadcrumb.Item href={val.path} key={i}>
							{val.title.toUpperCase()}
						</Breadcrumb.Item>
					);
				})}
			</Breadcrumb>
		</div>
	);
};
export default BreadcrumbPage;
