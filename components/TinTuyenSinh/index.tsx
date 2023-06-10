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
	const handleRedirect = (id: string) => {
		router.push(`/tin-tuc/${id}`);
	};

	return (
		<TinTuyenSinhWrapper className='px-[20px] lg:px-0 md:py-[50px] py-[20px] '>
			<div className='container mx-auto'>
				<div>
					<Title title={"Tin tức - sự kiện"} uppercase={true} description={""} />
				</div>
				<div className='sm:grid sm:grid-cols-4 gap-[20px] hidden mt-[40px]'>
					{props.dataHome?.qlkh_tin_tucs?.data?.map((value, i) => {
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
					{/*<div className='col-span-2 '>*/}
					{/*	<CardEvent*/}
					{/*		data={{*/}
					{/*			imageUrl: "/images/home/sk1.png",*/}
					{/*			content: "Lễ khai mạc cuộc thi “Lập trình Robot năm 2023” ",*/}
					{/*			dateTime: "07/02/2023, 11:23",*/}
					{/*			description:*/}
					{/*				"Trường Đào tạo, Bồi dưỡng cán bộ quản lý Thông tin và Truyền thông thông báo chiêu sinh khóa ”...",*/}
					{/*		}}*/}
					{/*		type={"big"}*/}
					{/*	/>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<CardEvent*/}
					{/*		data={{*/}
					{/*			imageUrl: "/images/home/sk2.png",*/}
					{/*			content: "Lễ khai mạc cuộc thi “Lập trình Robot năm 2023” ",*/}
					{/*			dateTime: "07/02/2023, 11:23",*/}
					{/*			description:*/}
					{/*				"Trường Đào tạo, Bồi dưỡng cán bộ quản lý Thông tin và Truyền thông thông báo chiêu sinh khóa ”...",*/}
					{/*		}}*/}
					{/*		type={"small"}*/}
					{/*	/>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<CardEvent*/}
					{/*		data={{*/}
					{/*			imageUrl: "/images/home/sk3.png",*/}
					{/*			content: "Lễ khai mạc cuộc thi “Lập trình Robot năm 2023” ",*/}
					{/*			dateTime: "07/02/2023, 11:23",*/}
					{/*			description:*/}
					{/*				"Trường Đào tạo, Bồi dưỡng cán bộ quản lý Thông tin và Truyền thông thông báo chiêu sinh khóa ”...",*/}
					{/*		}}*/}
					{/*		type={"small"}*/}
					{/*	/>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<CardEvent*/}
					{/*		data={{*/}
					{/*			imageUrl: "/images/home/sk4.png",*/}
					{/*			content: "Lễ khai mạc cuộc thi “Lập trình Robot năm 2023” ",*/}
					{/*			dateTime: "07/02/2023, 11:23",*/}
					{/*			description:*/}
					{/*				"Trường Đào tạo, Bồi dưỡng cán bộ quản lý Thông tin và Truyền thông thông báo chiêu sinh khóa ”...",*/}
					{/*		}}*/}
					{/*		type={"small"}*/}
					{/*	/>*/}
					{/*</div>*/}
					{/*<div>*/}
					{/*	<CardEvent*/}
					{/*		data={{*/}
					{/*			imageUrl: "/images/home/sk5.png",*/}
					{/*			content: "Thông báo chiêu sinh Khóa ” Bồi dưỡng nghiệp vụ báo chí”",*/}
					{/*			dateTime: "07/02/2023, 11:23",*/}
					{/*			description:*/}
					{/*				"Trường Đào tạo, Bồi dưỡng cán bộ quản lý Thông tin và Truyền thông thông báo chiêu sinh khóa ”...",*/}
					{/*		}}*/}
					{/*		type={"small"}*/}
					{/*	/>*/}
					{/*</div>*/}
					{/*<div className='col-span-2 '>*/}
					{/*	<CardEvent*/}
					{/*		data={{*/}
					{/*			imageUrl: "/images/home/sk6.png",*/}
					{/*			content: "Thông báo chiêu sinh Khóa ” Bồi dưỡng nghiệp vụ báo chí”",*/}
					{/*			dateTime: "07/02/2023, 11:23",*/}
					{/*			description:*/}
					{/*				"Trường Đào tạo, Bồi dưỡng cán bộ quản lý Thông tin và Truyền thông thông báo chiêu sinh khóa ”...",*/}
					{/*		}}*/}
					{/*		type={"big"}*/}
					{/*	/>*/}
					{/*</div>*/}
				</div>
				<div className='sm:hidden block mt-[20px]'>
					<Slider {...settings}>

					</Slider>
				</div>
				<div className='flex justify-center sm:mt-[40px] mt-[20px]'>
					<Button
						type={"primary"}
						classname='lg:w-[279px]'
						onClick={() => {
							router.push("/tin-tuc");
						}}
					>
						Xem thêm
					</Button>
				</div>
			</div>
		</TinTuyenSinhWrapper>
	);
};

const TinTuyenSinhWrapper = styled.div`
	background-color: #ffffff;
`;
export default TinTuyenSinh;
