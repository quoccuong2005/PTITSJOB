import styled from "styled-components";
// @ts-ignore
import Slider from "react-slick";
import {useEffect, useRef, useState} from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title";
import Button from "../Button";
import CardBanner from "../CardBanner";
import {TuyenSinh} from "../../utils/interface";
import {renderImage} from "../../utils/util";
import {useRouter} from "next/router";

interface IProps{
	type:string
	name:string
	description:any
}
const Event = () => {
	const router=useRouter()
	const [common] = useTranslation("common");
	const SliderRef = useRef(null);
	const settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const [dataSuKien,setDataSuKien]=useState<TuyenSinh[]>([])

	const handleNext = () => {
		if (SliderRef && SliderRef.current) {
			//@ts-ignore
			SliderRef?.current?.slickNext();
		}
	};
	const handlePrev = () => {
		if (SliderRef && SliderRef.current) {
			//@ts-ignore
			SliderRef?.current?.slickPrev();
		}
	};

		return (
			<EventWrapper>
				<div className='container mx-auto py-[50px] px-[20px] lg:px-0'>
					<Title
						title={"Tin tức sự kiện"}
						uppercase={true}
						description={
						""
						}
						type={"default"}
					/>
					<div className={"sm:mt-[40px] mt-[20px]"}>
						<Slider ref={SliderRef} {...settings}>
							{dataSuKien?.map((val, i) => {
								return (
									<div key={i} className={"h-full"} onClick={()=>{
										router.push(`/tin-tuc/${val?.id}`)
									}}>
										<CardBanner imageUrl={renderImage(val?.thumbnail)} title={val.name} dateTime={val.created} key={i}  />
									</div>
								);
							})}
						</Slider>
					</div>
					<div className='flex justify-center md:mt-[70px] mt-[20px] '>
						<Button type={"default"} onClick={()=>{

						}}>Xem thêm</Button>
					</div>
				</div>
			</EventWrapper>
		);


};
const EventWrapper = styled.div`
	background-color: #DE221A;
	.button-arrow {
		button {
			background: #f8f9fa;
			border-radius: 100px;
			width: 36px;
			height: 36px;
		}
	}
	.slick-slide {
		padding: 0 8px;
	}
	.slick-track {
		display: flex !important;
	}

	.slick-slide {
		height: inherit !important;
	}
	.slick-slide > div {
		height: 100%;
	}
`;
export default Event;
