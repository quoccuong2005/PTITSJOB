// @ts-ignore
import Slider from "react-slick";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../Title";
import { dataChucNang } from "../../data";
import styled from "styled-components";
import Card from "../Card";
import moment from "moment";
import { ip } from "../../api/ip";
import { DataNew } from "../../utils/interface";
import { useRouter } from "next/router";
import LoadingSpin from "../LoadingSpin";
import { tr } from "date-fns/locale";
import NavBarComponents from "../NavBar";

const HomePage = () => {
	const router = useRouter();
	const [dataTinMoi, setDataTinMoi] = useState<DataNew[]>([]);
	const [dataTinTuc, setDataTinTuc] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [idCsd,setIdCsd]=useState<string>()
	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	const getDataTinMoi = async () => {
		try {
			setLoading(true);
			const res = await axios.get(`${ip}/tin-tuc/v2/public/tin-moi`, {
				params: {
					condition: JSON.stringify({
						idCoSoDang: router?.query?.csd,
					}),
				},
			});
			if (res) {
				setLoading(false);
				setDataTinMoi(res?.data?.data);
			}
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};
	const getData = async () => {
		try {
			//get data all tin moi
			setLoading(true);
			const res = await axios.get(`${ip}/tin-tuc/v2/public/all`, {
				params: {
					condition: JSON.stringify({
						idCoSoDang: router?.query?.csd,
					}),
				},
			});
			if (res) {
				setDataTinTuc(res?.data?.data);
				setLoading(false);
			}
			//get data tin moi
			const res2 = await axios.get(`${ip}/tin-tuc/v2/public/tin-moi`, {
				params: {
					condition: JSON.stringify({
						idCoSoDang: router?.query?.csd,
					}),
				},
			});
			if (res2) {
				setLoading(false);
				setDataTinMoi(res2?.data?.data);
			}
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};
	useEffect(() => {
		if (router?.query?.csd){
			setIdCsd(router?.query?.csd as string)
			getData();
		}else {
			getData();
		}

	}, [router,idCsd]);
	return (
		<LoadingSpin loading={loading}>
			<NavBarComponents data={[]}/>
			<HomaPageWrapper>
				<div className='overflow-hidden'>
					<div className='container mx-auto mb-[40px]  sm:px-0'>
						<div className='grid sm:grid-cols-8 grid-cols-1 gap-[20px] mb-[60px] mt-[20px]'>
							<div className='sm:col-span-6'>
								<Title title={"Tin mới nhất"} type='primary' uppercase={true} />
								<div className='grid sm:grid-cols-2 grid-cols-1 gap-[16px]'>
									<div>
										<Slider {...settings}>
											{dataTinMoi?.map((val, i) => {
												if (i < 3) {
													return (
														<div key={i}>
															<Card
																data={{
																	imageUrl: val?.anhDaiDien,
																	title: val?.tieuDe,
																	description: val?.moTa,
																	link: `/tin-tuc/${val?._id}`,
																}}
																type={"big1"}
															/>
														</div>
													);
												}
											})}
										</Slider>
									</div>
									<div className='list-small-card'>
										{dataTinMoi?.map((val, i) => {
											if (i > 3 && i < 10) {
												return (

														<Card
															data={{
																imageUrl: val?.anhDaiDien,
																title: val?.tieuDe,
																description: val?.noiDung,
																link: `/tin-tuc/${val?._id}`,
															}}
															type={"small1"}
															key={i}
														/>

												);
											}
										})}
									</div>
								</div>
							</div>
							<div className='sm:col-span-2 hidden sm:block'>
								<Title title={"Chức năng"} uppercase={true} />
								<div>
									{dataChucNang?.map((val, i) => {
										return (
											<a
												href={val?.link ? val?.link : "#"}
												target={"_blank"}
												rel={"noreferrer"}
												className='item-cn py-[4px] bg-[#f6f8fa] mb-[4px] cursor-pointer block wow fadeInRight'
												key={i}
											>
												<div className='border-l-2 border-primary px-[8px] list-chuc-nang'>{val?.title}</div>
											</a>
										);
									})}
								</div>
							</div>
						</div>
						<div className='grid sm:grid-cols-3 grid-cols-1 gap-[16px]'>
							{dataTinTuc?.map((val, i) => {
								return (
									<div key={i}>
										<Title title={val?.[0]?.idTopic?.name ?? ""} uppercase={true} onClick={()=>{
											router.push(`/danh-muc-tin/${val?.[0]?.idTopic?._id}?danhMuc=${val?.[0]?.idTopic?.name}`)
										}}/>
										<Card
											data={{
												imageUrl: val?.[0]?.anhDaiDien,
												title: val?.[0]?.tieuDe,
												dateTime: val?.[0]?.createdAt,
												link: `/tin-tuc/${val?.[0]?._id}?type=${val?.[0]?.idTopic?.name}`,
											}}
											type={"big2"}
										/>

										<div className='mt-[20px] list-small-card'>
											{val?.map((val2: any, i: number) => {
												if (i > 0 && i < 5) {
													return (
														<Card
															key={i}
															data={{
																imageUrl: val2?.anhDaiDien,
																title: val2?.tieuDe,
																dateTime: val2?.createdAt,
																link: `/tin-tuc/${val2?._id}?type=${val?.[0]?.idTopic?.name}`,
															}}
															type={"small2"}
														/>
													);
												}
											})}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</HomaPageWrapper>
		</LoadingSpin>
	);
};
const HomaPageWrapper = styled.div`
	.list-chuc-nang {
		&:hover{
			color: #b70b00;
		}
	}
	.list-small-card{
		div{
			&:last-of-type{
				a{
					border: none!important;
				}
			}
		}
	}
`;
export default HomePage;
