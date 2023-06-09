import React from "react";
import styled, { CSSProperties } from "styled-components";
import moment from "moment/moment";
import { da } from "date-fns/locale";

interface IProps {
	data: { imageUrl: string; title: string; description?: string; dateTime?: string; link?: string };
	style?: CSSProperties;
	type?: "big1" | "big2" | "small1" | "small2";
}
const Card = (props: IProps) => {
	const { data } = props;
	const renderContent = () => {
		switch (props.type) {
			case "big1":
				return (
					<CardWrapper>
						<a href={data?.link ? data?.link : "#"} className="overflow-hidden wow fadeInUp">
							<div className='mb-[16px] h-[350px] overflow-hidden'>
								<img className="h-full w-full " src={data.imageUrl} alt={"image"} />
							</div>
							<div className='title hover:text-primary'>{data?.title}</div>
							<div className='description hover:text-primary' >{data?.description}</div>
						</a>
					</CardWrapper>
				);
				break;
			case "big2":
				return (
					<CardWrapper2>
						<a href={data?.link ? data?.link : "#"} className="overflow-hidden wow fadeInUp">
							<div className='mb-[16px] w-[400px] h-[260px] overflow-hidden'>
								<img className='rounded w-full h-full' src={data.imageUrl} alt={"image"} />
							</div>
							<div className='date-time mb-[5px]'>
								{data?.dateTime ? moment(data?.dateTime).format("DD/MM/YYYY") : ""}
							</div>
							<div className='title hover:text-primary'>{data?.title}</div>
						</a>
					</CardWrapper2>
				);
				break;
			case "small1":
				return (
					<CardWrapper3>
						<a href={data?.link ? data?.link : "#"} className='flex py-[16px] border-b border-[#ccc] wow fadeInUp'>
							<div className='mr-[20px] shrink-0'>
								<img className='rounded w-[90px]' src={data.imageUrl} alt={"image"} />
							</div>
							<div className='title hover:text-primary'>{data?.title}</div>
						</a>
					</CardWrapper3>
				);
				break;
			case "small2":
				return (
					<CardWrapper4>
						<a href={data?.link ? data?.link : "#"} className='flex py-[16px] border-b border-[#ccc] wow fadeInUp'>
							<div className='mr-[20px] shrink-0'>
								<img className='rounded w-[125px] ' src={data.imageUrl} alt={"image"} />
							</div>
							<div>
								<div className='title hover:text-primary'>{data?.title}</div>
								<div className='date-time'>{data?.dateTime ? moment(data?.dateTime).format("DD/MM/YYYY") : ""}</div>
							</div>
						</a>
					</CardWrapper4>
				);
				break;
			default:
				return <CardWrapper></CardWrapper>;
				break;
		}
	};
	return renderContent();
};
const CardWrapper = styled.div`
	img {
		transition: 0.3s;
		&:hover {
			transform: scale(1.1);
		}
	}
	.title {
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #031739;
		display: block;
		display: -webkit-box;
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: 8px;
		overflow: hidden;
		transition: all 0.3s ease;
		&:hover{
			color: #b70b00;
		}
	}
	.description {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		
		color: #031739;
		display: block;
		display: -webkit-box;
		font-size: 1rem;
		font-weight: 400;
		margin-bottom: 8px;
		transition: all 0.3s ease;
	}
`;
const CardWrapper2 = styled.div`
	img {
		transition: 0.3s;
		&:hover {
			transform: scale(1.1);
		}
	}
	.date-time {
		font-size: 13px;
	}
	.title {
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		color: #031739;
		display: block;
		display: -webkit-box;
		font-size: 1.2rem;
		font-weight: 500;
		margin-bottom: 8px;
		overflow: hidden;
		transition: all 0.3s ease;
		&:hover{
			color: #b70b00;
		}
	}
`;
const CardWrapper3 = styled.div`
	.title {
		color: #031739;
		display: block;
		display: -webkit-box;
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 8px;
		transition: all 0.3s ease;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;

		&:hover{
			color: #b70b00;
		}
	}
`;
const CardWrapper4 = styled.div`
	.date-time {
		font-size: 13px;
	}
	.title {
		color: #031739;
		display: block;
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 8px;

		transition: all 0.3s ease;
		
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;

		&:hover{
			color: #b70b00;
		}
	}
`;
export default Card;
