import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { axios } from "../../api";
import { ip } from "../../api/ip";
import BreadcrumbPage from "../../components/Breadcrumb";
import moment from "moment/moment";
import Title from "../../components/Title";
import {dataChucNang} from "../../data";
import styled from "styled-components";
import CardSearch from "../../components/CardSearch";
import {DataDanhMucTin} from "../../utils/interface";

const DanhMucTin = () => {
	const router = useRouter();
  const [dataDanhMucTin,setDataDanhMucTin]=useState<DataDanhMucTin[]>([])
  const [page,setPage]=useState<number>(1)
  const [limit,setLimit]=useState<number>(20)
	const getDataDanhMucTin = async () => {
		try {
			if (router?.query?.id) {
				const res = await axios.get(`${ip}/tin-tuc/v2/public/pageable`, {
					params: {
						page: page,
						limit: limit,
						condition: JSON.stringify({
							idTopic: router?.query?.id,
						}),
					},
				});
				if (res) {
					setDataDanhMucTin(res?.data?.data?.result??[])
				}
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getDataDanhMucTin();
	}, [router]);
	return <>
		<ChiTietWrapper>
			<div className='container mx-auto mb-[40px] mt-[20px]'>
				<BreadcrumbPage
					data={[
						{
							title: "Trang chủ",
							path: "/",
						},
						{
							title: `${router?.query?.danhMuc?router?.query?.danhMuc:'Tin tức mới nhất'}`,
							path: `/danh-muc-tin/${router?.query?.id}`,
						},
					]}
				/>
				<div className='grid sm:grid-cols-8 grid-cols-1 gap-[20px] '>
					<div className='sm:col-span-6 wow fadeInUp'>
						{dataDanhMucTin?.map((val,i)=>{
							return(
								<div className='mb-[30px]' key={i}>
									<CardSearch
										data={{
											title: val?.tieuDe,
											imageUrl: val?.anhDaiDien,
											dateTime: val?.ngayDang,
											description:val?.moTa,
											link:`/tin-tuc/${val?._id}?type=${val?.idTopic?.name}`
										}}
									/>
								</div>
							)
						})}

					</div>
					<div className='col-span-2 hidden sm:block wow fadeInRight'>
						<Title title={"Chức năng"} uppercase={true} />
						<div className='listcn'>
							{dataChucNang?.map((val, i) => {
								return (
									<a
										href={val?.link ? val?.link : "#"}
										target={"_blank"}
										rel={"noreferrer"}
										className='item-cn py-[4px] bg-[#f6f8fa] mb-[4px] cursor-pointer block'
										key={i}
									>
										<div className='border-l-2 border-primary px-[8px] list-chuc-nang'>{val?.title}</div>
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</ChiTietWrapper>

  </>;
};
const ChiTietWrapper = styled.div`
	.title {
		color: #2a72b9 !important;
		font-size: 1.5rem;
		font-weight: 600;
	}
	.date-time{
		color: #a1a5b7!important;
		font-size: 14px;
		font-weight: 400;
		
		
	}
	.list-chuc-nang {
		&:hover{
			color: #b70b00;
		}
	}
`;
export default DanhMucTin;
