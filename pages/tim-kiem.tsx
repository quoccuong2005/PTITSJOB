import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BreadcrumbPage from "../components/Breadcrumb";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import DatePickerFake from "../components/DatePicker";
import DropdownFake from "../components/Dropdown";

import { ip, ip3 } from "../api/ip";
import moment from "moment";
import {renderImage, toRegex} from "../utils/util";
import CardSearch from "../components/CardSearch";
import Title from "../components/Title";
import { dataChucNang } from "../data";
import {DataSearch} from "../utils/interface";
import { axios } from "../api";
const TimKiem = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [common] = useTranslation("common");
	const router = useRouter();
	const [dataSearch, setDataSearch] = useState<DataSearch[]>([]);
const [total,setTotal]=useState<number>(0)
	const getDataSearch = async () => {
		try {
			const res = await axios.get(`${ip}/tin-tuc/v2/public/search-tin-tuc`, {
				params: {
					page: 1,
					limit: 10,
					condition: JSON.stringify({
						tieuDe:toRegex(router?.query?.keyword),
						ngayDang:(router?.query?.startDate||router?.query?.endDate)?{
							"$gte":router?.query?.startDate?router?.query?.startDate:undefined,
							"$lte":router?.query?.endDate?router?.query?.endDate:undefined
						}:undefined
					}),
				},
			});
			if (res) {
				setDataSearch(res?.data?.data?.result??[]);
				setTotal(res?.data?.data?.total??0)
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		console.log("router", router);
		if (router) {
			getDataSearch()
		}
	}, [router]);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => {
		console.log("data", data);
		// getData({
		// 	keyword: data?.keyword,
		// 	type: data?.type,
		// 	startDate: moment(data?.startDate).toISOString(),
		// 	endDate: moment(data?.endDate).toISOString(),
		// });
		router.push(
			`/tim-kiem?keyword=${data?.keyword?data?.keyword:router?.query?.keyword}${data?.type ? `&type=${data?.type}` : ""}${
				data?.dateStart ? `&startDate=${moment(data?.dateStart).toISOString()}` : ""
			}${data?.dateEnd ? `&endDate=${moment(data?.dateEnd).toISOString()}` : ""}`
		);
	};
	const option = [
		{ value: "NEWS", label: "Tin thường" },
		{ value: "ALBUMIMAGE", label: "Tin ảnh" },
		{ value: "ALBUMVIDEO", label: "Tin video" },
	];
	return (
		<SearchWrapper>
			<div className='container mx-auto bg-white  pt-2 pb-6 mb-2'>
				<BreadcrumbPage
					data={[
						{
							title: "Trang chủ",
							path: "/",
						},
						{
							title: "Tìm kiếm",
							path: "#",
						},
					]}
				/>
			</div>
			<div className='container mx-auto mb-[8px]'>
				<div className='grid sm:grid-cols-8 grid-cols-1 gap-[20px]'>
					<div className='sm:col-span-6 '>
						<div className='filter-box mb-4'>
							<div className='filter-box-header '>
								<span>Lọc tin tức</span>
								<span>Kết quả tìm Kiếm: 10 tin tức</span>
							</div>
							<div className='filter-box-content'>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className='mb-4'>
										<div className='search flex item-center'>
											<div className='relative w-full'>
												<input
													className='w-full'
													placeholder={router?.query?.keyword ? (router?.query?.keyword as string) : "Tìm kiếm"}
													{...register("keyword")}
												/>
												<div className='icon absolute top-[12.5px] left-[14.5px]'>
													<img src={"/images/icons/search.svg"} alt={"image"} />
												</div>
											</div>
											<button className='shrink-0 bg-primary' type='submit'>
												Tìm kiếm
											</button>
										</div>
										{errors.keyword && <p className='error-text'>Bắt buộc</p>}
									</div>
									<div className='grid grid-flow-row-dense  lg:grid-cols-2 gap-[24px]'>
										<div className='date-picker'>
											<Controller
												name={"dateStart"}
												control={control}
												render={({ field: { onChange, value } }) => (
													<DatePickerFake
														placeholder={"Nhập thời gian bắt đầu"}
														selected={value}
														onChange={(date) => {
															onChange(date);
														}}
													/>
												)}
											/>
										</div>
										<div className='date-picker'>
											<Controller
												name={"dateEnd"}
												control={control}
												render={({ field: { onChange, value } }) => (
													<DatePickerFake
														placeholder={"Nhập thời gian kết thúc"}
														selected={value}
														onChange={(date) => {
															onChange(date);
														}}
													/>
												)}
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className='data-result hidden lg:block'>
							{dataSearch?.map((val, i) => {
								return (
									<div className='mb-[30px]' key={i}>
										<CardSearch
											data={{
												title: val?.tieuDe,
												imageUrl: val?.anhDaiDien,
												dateTime: val?.ngayDang,
												link:`/tin-tuc/${val?._id}?type=${val?.idTopic?.name}`
											}}
										/>
									</div>
								);
							})}
						</div>
						<div className='data-result block lg:hidden'>
							{dataSearch?.map((val, i) => {
								return (
									<div className='mb-[30px]' key={i}>
										<CardSearch
											data={{
												title: val?.tieuDe,
												imageUrl: val?.anhDaiDien,
												dateTime: val?.ngayDang,
												link:`/tin-tuc/${val?._id}?type=${val?.idTopic?.name}`
											}}
										/>
									</div>
								);
							})}
						</div>
					</div>
					<div className='sm:col-span-2 hidden sm:block'>
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
										<div className='border-l-2 border-primary px-[8px]'>{val?.title}</div>
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</SearchWrapper>
	);
};
const SearchWrapper = styled.div`
	h2 {
		margin-bottom: 12px;
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 32px;
		display: flex;
		align-items: center;
		color: #212529;
	}
	.result {
	}
	.search {
		input {
			height: 100%;
			padding-left: 40px;
			background: #f1f3f5;
			//border-radius: 4px;
			&:focus {
				outline: none;
			}
		}
		img {
			width: 20px;
			height: 20px;
		}
		button {
			padding: 12px 24px;
			//border-radius: 0px 4px 4px 0px;
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			display: flex;
			align-items: center;
			color: #ffffff;
		}
	}
	.filter-box {
		border: 1px solid #d6261a;
		border-radius: 5px;
	}
	.filter-box-header {
		align-items: center;
		background-color: #d6261a;
		color: #fff;
		display: flex;
		font-size: 1.1rem;
		font-weight: 600;
		justify-content: space-between;
		padding: 4px 20px;
	}
	.filter-box-content {
		padding: 12px 20px;
	}
`;
export default TimKiem;
