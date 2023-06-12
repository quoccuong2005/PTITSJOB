import styled from "styled-components";
import Card from "../Card";
import CardEvent from "../Event/components/CardEvent";
import {dataTinTuc} from "../../data";
import MiniCard from "../Event/components/MiniCard";
import {useEffect, useRef, useState} from "react";
// @ts-ignore
import Slider from "react-slick";
import {useTranslation} from "react-i18next";
import Title from "../Title";
import CardBanner from "../CardBanner";
import Button from "../Button";
import {IDataHome} from "../../utils/interface";
import axios from "axios";
import {ip} from "../../api/ip";
import {renderImage} from "../../utils/util";
import {useRouter} from "next/router";
const News = (props:{dataHome:IDataHome}) => {
	const [common] = useTranslation("common");
	const router=useRouter();
	const SliderRef = useRef(null);

	const settings = {
		dots: false,
		infinite: true,
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
					dots: true,
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


	const titleCard = (
		<div className='flex justify-between'>
			<div>{common('news.edu')}</div>
			<div className='button-arrow flex'>
				<button className='mr-[16px] flex items-center justify-center' onClick={handlePrev}>
					<img src='/images/icons/arrow-left.svg' alt={'image'} />
				</button>
				<button className='flex items-center justify-center' onClick={handleNext}>
					<img src='/images/icons/arrow-right.svg'  alt={'image'}/>
				</button>
			</div>
		</div>
	);
	if (props.dataHome?.tap_chi_khoa_hocs?.data?.length>0){
		return (
			<NewsWrapper>
				<div className=' wow fadeInDown bg-[#1421410A] py-[50px] px-[20px] lg:px-0'>
					<div className='container mx-auto'>
						<Title
							title={"Tạp chí khoa học"}
							uppercase={true}
						/>
						<div className='lg:grid hidden lg:grid-cols-2  grid-cols-1 gap-[30px] mt-[40px]'>
							{props.dataHome?.tap_chi_khoa_hocs?.data?.map((val, i) => {
								if (i<4){
									return (
										<div onClick={()=>{
											router.push(`/tap-chi-khoa-hoc/${val?.id}`)
										}} key={i}>
											<CardBanner
												imageUrl={renderImage(val?.attributes?.hinhAnh?.data?.attributes?.url)}
												title={val?.attributes?.tieuDe}
												description={val?.attributes?.moTa??''}
												dateTime={val?.attributes?.createdAt}
												key={i}
												type={"big"}
											/>
										</div>
									);
								}else {
									return null;
								}

							})}
						</div>
						<div className='lg:hidden grid lg:grid-cols-2  grid-cols-1 gap-[30px] mt-[40px]'>
							{props.dataHome?.tap_chi_khoa_hocs?.data?.map((val, i) => {
								if (i<4){
									return (
										<div onClick={()=>{
											router.push(`/tap-chi-khoa-hoc/${val?.id}`)
										}} key={i}>
											<CardBanner
												imageUrl={renderImage(val?.attributes?.hinhAnh?.data?.attributes?.url)}
												title={val?.attributes?.tieuDe}
												description={val?.attributes?.moTa??''}
												dateTime={val?.attributes?.createdAt}
												key={i}
												type={"small"}
											/>
										</div>
									);
								}else {
									return null
								}

							})}
						</div>
					</div>
					<div className="flex justify-center sm:mt-[40px] mt-[20px]">
						<Button type={"primary"}
										classname="lg:w-[279px]"
										onClick={()=>{
											window.open('https://jstic.ptit.edu.vn/index.html')
										}}>Xem thêm</Button>
					</div>
				</div>
			</NewsWrapper>
		);
	}else {
		return (
			<NewsWrapper>
				<div className='container mx-auto md:py-[50px] py-[20px]'>
					<div>
						<Title title={"TẠP CHÍ KHOA HỌC"} uppercase={true} />
					</div>
					<div className="w-full h-full justify-center items-center flex flex-col">
						<img className="mb-[16px]" src="/images/default/no_data.png" alt="image"/>
						<p className="text-secondary text-sm">Không có dữ liệu</p>
					</div>
				</div>
			</NewsWrapper>
		)
	}

};
const NewsWrapper = styled.div``;
export default News;
