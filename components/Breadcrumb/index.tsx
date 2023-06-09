import { Breadcrumb } from "flowbite-react";
import styled from "styled-components";

interface IProps {
	data: {
		title?: string;
		path?: string;
	}[];
}
const BreadcrumbPage = (props: IProps) => {
	return (
		<BreadcrumbWrapper>
			<div className="mb-6 breadcrumb-cus">

					{props.data.map((val, i) => {
						if (val?.title){
							return (
								<div className="bread-item" key={i}>
									<a href={val.path} key={i}>
										{val.title}
									</a>
								</div>
							);
						}else {
							return null
						}

					})}

			</div>
		</BreadcrumbWrapper>

	);
};
const BreadcrumbWrapper=styled.div`
	
	.breadcrumb-cus {
		align-items: center;
		display: flex;
		margin-bottom: 8px;
		overflow: hidden;
		

		.bread-item {
			background-color: #b70b00;
			margin-right: 20px;
			padding: 6px 4px;
			position: relative;
			a{
				color: #FFFFFF;
				font-size: 14px;
			}
			&:first-child {
				border-bottom-left-radius: 4px;
				border-top-left-radius: 4px;
			}

			&:first-of-type {
				&:before {
					background-color: #b70b00;
					border-bottom: 17px solid transparent;
					border-left: 14px solid #fff;
					border-width: 17px 16px 16px;
					border-top: 17px solid transparent;
					right: -36px;

					content: "";
					display: block;
					height: 100%;
					position: absolute;
					top: 50%;
					//-webkit-transform: translateY(-50%);
					transform: translateY(-50%);
					width: 20px;
				}
			}

			&:after {
				border-bottom: 16px solid transparent;
				border-left: 12px solid #b70b00;
				border-top: 16px solid transparent;
				right: -20px;

				content: "";
				display: block;
				height: 100%;
				position: absolute;
				top: 50%;
				//-webkit-transform: translateY(-50%);
				transform: translateY(-50%);
				width: 20px;
			}
		}
	}
`
export default BreadcrumbPage;
