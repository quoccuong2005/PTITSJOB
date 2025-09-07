import React from "react";
import styled, { CSSProperties } from "styled-components";
import moment from "moment/moment";

interface IProps {
	data: { imageUrl: string; content: string; description?: string; dateTime?: string; link?: string };
	style?: CSSProperties;
	type?: "big" | "small";
}
const Card = (props: IProps) => {
	return (
		<CardWrapper>
			<div className='flex '>
				<div className='w-1/2 max-h-[337px]'>
					<img
						src={props.data?.imageUrl}
						alt={"image"}
						className='w-full h-full'
						onError={({ currentTarget }) => {
							currentTarget.onerror = null; // prevents looping
							currentTarget.src = "/images/default/no_image.png";
						}}
					/>
				</div>
				<div className='px-[40px] py-[60px] w-1/2 bg-[#1421410A]'>
					<div className='border-l-2 pl-[12px] border-primary mb-[24px]'>
						<div className='flex text-primary items-center mb-[10px]'>
							<div className='mr-[16px] '>
								<svg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path d='M0 7H13M13 7L7.7381 1.5M13 7L7.7381 12.5' stroke='#BC2826' strokeWidth='2' />
								</svg>
							</div>
							{moment(props.data?.dateTime).format("DD/MM/YYYY HH:mm")}
						</div>
						<div className='text-content'>{props.data?.content}</div>
					</div>

					<div className='description ' dangerouslySetInnerHTML={{ __html: props.data?.description as string }}></div>
				</div>
			</div>
		</CardWrapper>
	);
};
const CardWrapper = styled.div`
	max-height: 337px;
	background-color: #ffffff;
	.description {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;
		color: #212529;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}
	.text-content {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 28px;
		color: #212529;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.text-primary {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;

		color: #BC2826;
	}
`;
export default Card;
