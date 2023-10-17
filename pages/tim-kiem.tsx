import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BreadcrumbPage from "../components/Breadcrumb";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import DatePickerFake from "../components/DatePicker";
import DropdownFake from "../components/Dropdown";
import MiniCard from "../components/Event/components/MiniCard";
import axios from "axios";
import { ip, ip3 } from "../api/ip";
import moment from "moment";
import { renderImage } from "../utils/util";
const TimKiem = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [common] = useTranslation("common");
	const router = useRouter();
	const [dataSearch, setDataSearch] = useState<any[]>();
	const getData = async (payload: { keyword?: string; type?: string; startDate?: string; endDate?: string }) => {
		try {
			const fillter = [];
			if (payload.keyword) {
				fillter.push({
					filters: [
						{
							filters: [],
							field: "name",
							operator: "contains",
							value: JSON.stringify(payload.keyword),
						},
						{
							filters: [],
							field: "summary",
							operator: "contains",
							value: JSON.stringify(payload.keyword),
						},
					],
					logic: "or",
				});
			}
			if (payload.type) {
				fillter.push({
					filters: [],
					field: "type",
					operator: "eq",
					value: JSON.stringify(payload.type),
				});
			}
			if (payload.startDate) {
				fillter.push({
					filters: [],
					field: "releaseDate",
					operator: "gte",
					value: JSON.stringify(payload.startDate),
				});
			}
			if (payload.endDate) {
				fillter.push({
					filters: [],
					field: "releaseDate",
					operator: "gte",
					value: JSON.stringify(payload.endDate),
				});
			}
			fillter?.push({
				filters: [],
				field: "statusView",
				operator: "eq",
				value: "2",
			});
			// [
			// 	{
			// 		filters: [
			// 			{
			// 				filters: [],
			// 				field: "name",
			// 				operator: "contains",
			// 				value: JSON.stringify(router?.query?.keyword),
			// 			},
			// 			{
			// 				filters: [],
			// 				field: "summary",
			// 				operator: "contains",
			// 				value: JSON.stringify(router?.query?.keyword),
			// 			},
			// 		],
			// 		logic: "or",
			// 	},
			// 	{
			// 		filters: [],
			// 		field: "type",
			// 		operator: "eq",
			// 		value: '"NEWS"',
			// 	},
			// 	{
			// 		filters: [],
			// 		field: "releaseDate",
			// 		operator: "gte",
			// 		value: '"2022-04-28T02:15:37.919Z"',
			// 	},
			// 	{
			// 		filters: [],
			// 		field: "releaseDate",
			// 		operator: "lte",
			// 		value: '"2023-04-28T02:15:37.919Z"',
			// 	},
			// 	// {
			// 	// 	filters: [],
			// 	// 	field: "statusView",
			// 	// 	operator: "eq",
			// 	// 	value: "2",
			// 	// },
			// ]
			const res = await axios.post(`${ip}/cmscore/v5/Article/GetData`, {
				filters: fillter,
				sorts: [
					{
						field: "releaseDate",
						dir: -1,
					},
				],
				pageInfo: {
					page: 1,
					pageSize: 10,
				},
			});
			if (res) {
				setDataSearch(res?.data?.data);
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		if (router) {
			getData({
				keyword: router?.query?.keyword as string,
				type: router?.query?.type as string,
				startDate: router?.query?.startDate as string,
				endDate: router?.query?.endDate as string,
			});
		}
	}, [router]);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => {
		// getData({
		// 	keyword: data?.keyword,
		// 	type: data?.type,
		// 	startDate: moment(data?.startDate).toISOString(),
		// 	endDate: moment(data?.endDate).toISOString(),
		// });
		router.push(
			`/tim-kiem?keyword=${data?.keyword}${data?.type ? `&type=${data?.type}` : ""}${
				data?.dateStart ? `&startDate=${moment(data?.dateStart).toISOString()}` : ""
			}${data?.endDdateEndate ? `&endDate=${moment(data?.dateEnd).toISOString()}` : ""}`
		);
	};
	const option = [
		{ value: "NEWS", label: "Tin thường" },
		{ value: "ALBUMIMAGE", label: "Tin ảnh" },
		{ value: "ALBUMVIDEO", label: "Tin video" },
	];
	return (
		<SearchWrapper>
			<div className='container mx-auto bg-white px-6 pt-2 pb-6 mb-2'>
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
				<h2 className='mt-[24px]'>{common("common.search-result")}</h2>
				<p className='search-result'>
					Có <b>{dataSearch?.length}</b> kết quả cho từ khóa <b>&quot;{router?.query?.keyword}&quot;</b>
				</p>
			</div>
			<div className='container mx-auto mb-[8px]'>
				<div className={"grid grid-flow-row-dense  lg:grid-cols-4 bg-white px-6 pt-6"}>
					<div className='col-span-4'>
						<div className='result'>
							<div className='form-result mb-[40px]'>
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
									<div className='grid grid-flow-row-dense  lg:grid-cols-3 gap-[24px]'>
										<div className='dropdown'>
											<Controller
												name={"type"}
												control={control}
												render={({ field: { onChange, value } }) => (
													<DropdownFake
														option={option}
														onChange={(val) => {
															onChange(val.value);
														}}
														value={value}
														placeholder={"Chọn"}
													/>
												)}
											/>
										</div>
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
							<div className='data-result hidden lg:block'>
								{dataSearch?.map((val, i) => {
									return (
										<div className='mb-[30px]' key={i}>
											<MiniCard
												data={{
													id: val?.id,
													imageUrl: renderImage(val?.thumbnail),
													content: val?.name,
													dateTime: val?.created,
													description: val?.description,
												}}
												size={"large"}
											/>
										</div>
									);
								})}
							</div>
							<div className='data-result block lg:hidden'>
								{dataSearch?.map((val, i) => {
									return (
										<div className='mb-[30px]' key={i}>
											<MiniCard
												data={{
													id: val?.id,
													imageUrl: renderImage(val?.thumbnail),
													content: val?.name,
													dateTime: val?.created,
													description: val?.description,
												}}
												size={"small"}
											/>
										</div>
									);
								})}
							</div>
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
`;
export default TimKiem;
