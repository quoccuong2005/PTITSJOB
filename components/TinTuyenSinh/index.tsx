import styled from "styled-components";
import Title from "../Title";
import CardEvent from "../Event/components/CardEvent";
// @ts-ignore
import Slider from "react-slick";
import Button from "../Button";
import { da, el, tr } from "date-fns/locale";
import axios from "axios";
import { ip } from "../../api/ip";
import { useEffect, useState } from "react";
import { IDataHome } from "../../utils/interface";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";
interface IProps {
	type: string;
	name: string;
	description: any;
}
const TinTuyenSinh = (props: { dataHome: IDataHome }) => {

	const router = useRouter();

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					// centerMode: true,
					slidesToScroll: 2,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
	const handleRedirect = (id: string) => {
		router.push(`/tin-tuc/${id}`);
	};
if (props.dataHome?.tinTuc?.qlkh_tin_tuc_su_kiens?.data?.length>0){
	return (
		<TinTuyenSinhWrapper className='bg-[#1421410A] px-[20px] lg:px-0 md:py-[50px] py-[20px] '>
			<div className='container mx-auto'>
				<div>
					<Title title={props?.dataHome?.tinTuc?.title||"Tin tức - sự kiện"} uppercase={true} description={""} />
				</div>
				<div className='lg:grid lg:grid-cols-4 gap-[20px] hidden mt-[40px]'>
					{props.dataHome?.tinTuc?.qlkh_tin_tuc_su_kiens?.data?.map((value, i) => {
						if (i < 6) {
							if (i === 0 || i === 5) {
								return (
									<div className='col-span-2 ' key={i}>
										<CardEvent
											data={{
												imageUrl: renderImage(value?.attributes?.hinhAnh?.data?.attributes?.url),
												content: value?.attributes?.tieuDe,
												dateTime: value?.attributes?.createdAt,
												description: value?.attributes?.moTa ?? "",
												link: `/tin-tuc/${value?.id}?type=TUYENSINH_DAIHOC`,
											}}
											type={"big"}
										/>
									</div>
								);
							} else {
								return (
									<div key={i}>
										<CardEvent
											data={{
												imageUrl: renderImage(value?.attributes?.hinhAnh?.data?.attributes?.url),
												content: value?.attributes?.tieuDe,
												dateTime: value?.attributes?.createdAt,
												description: value?.attributes?.moTa ?? "",
												link: `/tin-tuc/${value?.id}?type=TUYENSINH_DAIHOC`,
											}}
											type={"small"}
										/>
									</div>
								);
							}
						}
					})}
				</div>
				<div className='lg:hidden block mt-[20px]'>
					<Slider {...settings}>
						{props.dataHome?.tinTuc?.qlkh_tin_tuc_su_kiens?.data?.map((value,i)=>{
							return(
								<div className="sm:pr-[16px]">
									<CardEvent
										data={{
											imageUrl: renderImage(value?.attributes?.hinhAnh?.data?.attributes?.url),
											content: value?.attributes?.tieuDe,
											dateTime: value?.attributes?.createdAt,
											description: value?.attributes?.moTa ?? "",
											link: `/tin-tuc/${value?.id}?type=TUYENSINH_DAIHOC`,
										}}
										category={'slide'}
										type={"small"}
									/>
								</div>
							)
						})}
					</Slider>
				</div>
				{props.dataHome?.tinTuc?.qlkh_tin_tuc_su_kiens?.data?.length>6&&
					<div className='flex justify-center lg:mt-[40px] mt-[20px]'>
						<Button
							type={"primary"}
							classname='lg:w-[279px]'
							onClick={() => {
								router.push("/tin-tuc");
							}}
						>
							Xem thêm
						</Button>
					</div>}

			</div>
		</TinTuyenSinhWrapper>
	);
}else {
	return (
		<TinTuyenSinhWrapper>
			<div className='container mx-auto md:py-[50px] py-[20px]'>
				<div>
					<Title title={"Tin tức - sự kiện"} uppercase={true} description={""} />
				</div>
			<div className="w-full h-full justify-center items-center flex flex-col">
				<img className="mb-[16px]" src="/images/default/no_data.png" alt="image"/>
				<p className="text-secondary text-sm">Không có dữ liệu</p>
			</div>
			</div>
		</TinTuyenSinhWrapper>
	)
}

};

const TinTuyenSinhWrapper = styled.div`

`;
export default TinTuyenSinh;
