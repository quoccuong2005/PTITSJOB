import React, {useEffect, useRef, useState} from "react";
import Button from "../Button";
import { IDataHome} from "../../utils/interface";
import axios from "axios";
import { ip } from "../../api/ip";
import { renderImage } from "../../utils/util";
// @ts-ignore
import Slider from "react-slick";
import styled from "styled-components";
import {dataBannerSlide} from "../../data";
import {images} from "next/dist/build/webpack/config/blocks/images";

const BannerHome = (props:{dataHome:IDataHome}) => {
	const SliderRef = useRef(null);

	useEffect(() => {

	}, []);
	const settings = {
		dots: true,
		infinite: true,
		fade: true,
		speed: 500,
		autoplay:true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	};
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
		<BannerWrapper>
				<div className="relative">
					<button
						className='hidden lg:flex next-btn mr-[16px] cursor-pointer  items-center justify-center absolute top-1/2 left-0 z-50 btn-next btn'
						onClick={handlePrev}
					>
						<img className={'w-[60px]'} src='/images/icons/arrow-left.svg' alt={'image'} />
					</button>
					<button
						className='hidden lg:flex prev-btn cursor-pointer  items-center justify-center absolute top-1/2 right-0 z-50 btn-prev btn'
						onClick={handleNext}
					>
						<img className={'w-[60px]'} src='/images/icons/arrow-right.svg' alt={'image'}/>
					</button>
					<Slider {...settings} ref={SliderRef}>
						{props.dataHome?.banner?.map((value,index)=>{
							return(
								<a href={value.linkTo} target={"_blank"} rel={"noreferrer"} key={index}>
									<img
										className='w-full h-[250px] lg:h-auto lg:max-h-[620px] wow fadeInUp object-cover object-bottom'
										src={renderImage(value?.images?.data?.attributes?.url)}
										alt={"image"}
									/>
								</a>
							)
						})}
					</Slider>
				</div>
		</BannerWrapper>
	);
};

const BannerWrapper=styled.div`
.btn{
	background: rgba(237, 240, 242, 0.4);
}
.slick-dots{
	bottom: 33px;
}
	.slick-dots li.slick-active button:before{
		font-size: 16px;
	}
	.slick-dots li button:before{
		font-size: 16px;
	}
`
export default BannerHome;
