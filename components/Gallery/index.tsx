import styled from "styled-components";
import { Button, Navbar, Tabs, TabsRef } from "flowbite-react";
import React, { useRef, useState } from "react";
// @ts-ignore
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import {useRouter} from "next/router";
const Gallery = () => {
	const [common] = useTranslation("common");
	const router=useRouter();
	const [activeTab, setActiveTab] = useState<number>(1);
	const tabsRef = useRef<TabsRef>(null);
	const SliderRef = useRef(null);
	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
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
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
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
	const handleRedirect = () => {
	  switch (activeTab) {
			case 1:
				router.push('/anh-phong-su')
				break;
			case 2:
				router.push('/video-hoat-dong')
				break;
			case 3:
				break;
			default:
				router.push('/video-hoat-dong')
				break;
		}
	}
	return (
		<GalleryWrapper>
			{/*<Card title={"Thư viện ảnh và video"}>*/}
			{/*	<div className='grid grid-flow-row-dense grid-cols-1  lg:grid-cols-4 gap-[12px] lg:gap-[50px] wow fadeInUp'>*/}
			{/*		<div*/}
			{/*			className={`tabs-item ${activeTab === 1 ? "tabs-item-active" : ""}`}*/}
			{/*			onClick={() => {*/}
			{/*				setActiveTab(1);*/}
			{/*			}}*/}
			{/*		>*/}
			{/*			<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>*/}
			{/*				<path*/}
			{/*					fillRule='evenodd'*/}
			{/*					clipRule='evenodd'*/}
			{/*					d='M19 17.834C19 18.478 18.552 19 18 19H6L13.566 12.183C13.812 11.938 14.258 11.939 14.499 12.182L19 16.66V17.834ZM8 7C8.828 7 9.5 7.672 9.5 8.5C9.5 9.328 8.828 10 8 10C7.172 10 6.5 9.328 6.5 8.5C6.5 7.672 7.172 7 8 7ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z'*/}
			{/*					fill='#343A40'*/}
			{/*				/>*/}
			{/*			</svg>*/}
			{/*			{common("gallery.image")}*/}
			{/*		</div>*/}
			{/*		<div*/}
			{/*			className={`tabs-item ${activeTab === 2 ? "tabs-item-active" : ""}`}*/}
			{/*			onClick={() => {*/}
			{/*				setActiveTab(2);*/}
			{/*			}}*/}
			{/*		>*/}
			{/*			<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>*/}
			{/*				<path*/}
			{/*					fillRule='evenodd'*/}
			{/*					clipRule='evenodd'*/}
			{/*					d='M19 18.2559C19 18.6659 18.666 18.9999 18.256 18.9999H17V16.9999H19V18.2559ZM5 18.2559V16.9999H7V18.9999H5.744C5.334 18.9999 5 18.6659 5 18.2559ZM5.744 4.99988H7V6.99988H5V5.74388C5 5.33388 5.334 4.99988 5.744 4.99988ZM19 5.74388V6.99988H17V4.99988H18.256C18.666 4.99988 19 5.33388 19 5.74388ZM17 14.9999H19V12.9999H17V14.9999ZM17 10.9999H19V8.99988H17V10.9999ZM5 14.9999H7V12.9999H5V14.9999ZM5 10.9999H7V8.99988H5V10.9999ZM18.256 2.99988H5.744C4.231 2.99988 3 4.23188 3 5.74388V18.2559C3 19.7689 4.231 20.9999 5.744 20.9999H18.256C19.769 20.9999 21 19.7689 21 18.2559V5.74388C21 4.23188 19.769 2.99988 18.256 2.99988Z'*/}
			{/*					fill='#343A40'*/}
			{/*				/>*/}
			{/*			</svg>*/}
			{/*			{common("gallery.video")}*/}
			{/*		</div>*/}
			{/*		<div*/}
			{/*			className={`tabs-item ${activeTab === 3 ? "tabs-item-active" : ""}`}*/}
			{/*			onClick={() => {*/}
			{/*				setActiveTab(3);*/}
			{/*			}}*/}
			{/*		>*/}
			{/*			<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>*/}
			{/*				<path*/}
			{/*					fillRule='evenodd'*/}
			{/*					clipRule='evenodd'*/}
			{/*					d='M18.9473 14.9922V4.0002C18.9473 3.6972 18.8093 3.4092 18.5733 3.2202C18.3363 3.0302 18.0243 2.9582 17.7303 3.0242L8.7593 5.0172C8.3013 5.1192 7.9753 5.5252 7.9753 5.9932V14.3342C7.5353 14.1342 7.0513 14.0152 6.5363 14.0152C4.6103 14.0152 3.0443 15.5822 3.0443 17.5082C3.0443 19.4332 4.6103 21.0002 6.5363 21.0002C8.4623 21.0002 10.0283 19.4332 10.0283 17.5082C10.0283 17.3292 10.0023 17.1582 9.9753 16.9862V6.7962L16.9473 5.2462V12.3412C16.5073 12.1402 16.0223 12.0222 15.5083 12.0222C13.5823 12.0222 12.0153 13.5882 12.0153 15.5142C12.0153 17.4402 13.5823 19.0062 15.5083 19.0062C17.4333 19.0062 19.0003 17.4402 19.0003 15.5142C19.0003 15.3352 18.9733 15.1642 18.9473 14.9922Z'*/}
			{/*					fill='#343A40'*/}
			{/*				/>*/}
			{/*			</svg>*/}
			{/*			{common("gallery.audio")}*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<div className='content relative lg:px-[126px] lg:py-[24px] px-[24px] py-[12px]'>*/}
			{/*		<button*/}
			{/*			className='hidden lg:flex next-btn mr-[16px] flex items-center justify-center absolute top-1/2 left-[42px]'*/}
			{/*			onClick={handlePrev}*/}
			{/*		>*/}
			{/*			<img src='/images/icons/arrow-left.svg' alt={'image'} />*/}
			{/*		</button>*/}
			{/*		<button*/}
			{/*			className='hidden lg:flex prev-btn flex items-center justify-center absolute top-1/2 right-[42px]'*/}
			{/*			onClick={handleNext}*/}
			{/*		>*/}
			{/*			<img src='/images/icons/arrow-right.svg' alt={'image'}/>*/}
			{/*		</button>*/}
			{/*		<Slider ref={SliderRef} {...settings}>*/}
			{/*			{dataGallery?.map((val, i) => {*/}
			{/*				return (*/}
			{/*					<>*/}
			{/*						<CardEvent style={{ textAlign: "center" }} data={val} key={i} />*/}
			{/*					</>*/}
			{/*				);*/}
			{/*			})}*/}
			{/*		</Slider>*/}
			{/*		<div className='flex justify-center'>*/}
			{/*			<button className='seen-all lg:px-[64px] lg:py-[8px] px-3 py-[4px]' onClick={()=>handleRedirect()}>Xem tất cả</button>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</Card>*/}
		</GalleryWrapper>
	);
};
const GalleryWrapper = styled.div`
	.tabs-item {
		padding-bottom: 8px;
		cursor: pointer;
		margin-right: 50px;
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 32px;
		/* identical to box height, or 200% */

		display: flex;
		align-items: center;

		/* Gray/Gray-8 */

		color: #343a40;
		svg {
			margin-right: 12px;
		}
	}
	.tabs-item-active {
		color: #fa5252;
		border-bottom: 1px solid #fa5252;
		svg {
			path {
				fill: #fa5252;
			}
		}
	}
	.content {
		background: #f8f9fa;
		border-radius: 16px;
		.next-btn,
		.prev-btn {
			background: #e9ecef;
			border-radius: 100px;
			width: 36px;
			height: 36px;
		}
		.card {
			text-align: center;
		}
		.seen-all {
			background: #495057;
			border-radius: 4px;
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 14px;
			line-height: 20px;
			margin-top: 24px;
			color: #ffffff;
		}
		.image-card {
			margin-bottom: 24px;
		}
	}
`;
export default Gallery;
