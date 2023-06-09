import styled from "styled-components";
import Title from "../../components/Title";
import React, { useEffect, useRef, useState } from "react";
import { GioiThieu } from "../../utils/interface";
import { useRouter } from "next/router";
import axios from "axios";
import { ip } from "../../api/ip";
import { dataDeTai, dataNghienCuu } from "../../data";
import CardNghienCuu from "../../components/CardNghienCuu";
import CardDeTai from "../../components/CardDeTai";
import {Controller, useForm} from "react-hook-form";
import DropdownFake from "../../components/Dropdown";
import DatePickerFake from "../../components/DatePicker";
import moment from "moment/moment";
import {rules} from "../../utils/rules";
import {renderImage} from "../../utils/util";
import {ETYPEKHOAHOC} from "../../data/enum";

const HoatDong = () => {
	const [sendSuccess, setSendSuccess] = useState<boolean>(false);
	const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
	const [dataGioiThieu, setDataGioiThieu] = useState<GioiThieu[]>([]);
	const router = useRouter();
	const contentRef = useRef<HTMLDivElement>(null);
	let timmer: NodeJS.Timeout | undefined;
	const [type, setType] = useState<string>();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();
	const getData = async (type:string) => {
		try {
			const res = await axios.get(`${ip}/khoa-hoc-cong-nghe/all?type=${type}`);
			if (res) {
				console.log("resss", res);
				setDataGioiThieu(res?.data);
				setDataChiTiet(res?.data?.[0]);
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		if (router?.query) {
			getData(router?.query?.type as string);
			setType(router?.query?.type as string);
		}
	}, [router]);
	const getDataChiTiet = (id: string) => {
		let obj = dataGioiThieu?.find((item) => {
			return item?.id === id;
		});
		setDataChiTiet(obj);
	};
	const onSubmit = (data: any) => {
		console.log("data", data);
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
		{ value: "Cấp nhà nước", label: "Cấp nhà nước" },
		{ value: "Cấp bộ", label: "Cấp bộ" },
		{ value: "Cấp học viện", label: "Cấp học viện" },
	];
	const optionYear = [
		{ value: "2023", label: "2023" },
		{ value: "2022", label: "2022" },
		{ value: "2021", label: "2021" },
		{ value: "2020", label: "2020" },
		{ value: "2019", label: "2019" },

	];
	const renderDeTaiName = (type:string):string => {
switch (type) {
	case ETYPEKHOAHOC.DT:
		return 'Đề tài/ dự án KH, CN & ĐMST'
	case ETYPEKHOAHOC.CB:
		return 'CÔNG BỐ KHOA HỌC'
	case ETYPEKHOAHOC.SP:
		return 'Sản phẩm KHCN tiêu biểu'
	default:
		return  ''
}
	}
	return (
		<HoatDongWrapper>
			<div className='container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px]'>
				<div className="mb-[40px]">
					<Title title={renderDeTaiName(type??'')} uppercase={true} />
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='flex justify-end'>
							<div className='dropdown mr-[24px]'>
								<Controller
									name={"type"}
									control={control}
									render={({ field: { onChange, value } }) => (
										<DropdownFake
											option={option}
											onChange={(val) => {
												console.log("val", val);
												onChange(val.value);
											}}
											value={value}
											placeholder={"Đề tài cấp"}
										/>
									)}
								/>
							</div>
							<div className='dropdown mr-[24px]'>
								<Controller
									name={"year"}
									control={control}
									render={({ field: { onChange, value } }) => (
										<DropdownFake
											option={optionYear}
											onChange={(val) => {
												console.log("val", val);
												onChange(val.value);
											}}
											value={value}
											placeholder={"Năm"}
										/>
									)}
								/>
							</div>
							<div className=''>
								<div className='search flex item-center h-full'>
									<div className='relative'>
										<input placeholder={"Tìm kiếm"} {...register("keyword", { ...rules.required })} />
										{/*<div className='icon absolute top-[9.5px] left-[14.5px]'>*/}
										{/*	<img src={"/images/icons/search.svg"} alt={"image"} />*/}
										{/*</div>*/}
									</div>
									<button type='submit'>
										<img src={"/images/icons/search-pri.svg"} alt={"image"} />
									</button>
								</div>
								{errors.keyword && <p className='error-text'>Bắt buộc</p>}
							</div>
						</div>
					</form>
				</div>
				{type === ETYPEKHOAHOC.DT && (
					<>
					<div className="grid grid-cols-2 gap-[30px]">
            {dataGioiThieu?.map((value, index) => {
              return (
                <div onClick={()=>{
									router.push(`/hoat-dong/1`)
								}} key={index}>
									<CardDeTai
										data={{
											imageUrl: renderImage(value.imageUrl),
											content: value?.title,
											dateTime: value?.createdAt,
											type:value?.type,
											description:value?.description
										}}
										key={index}
									/>
								</div>
              );
            })}
          </div>
					</>
				)}
				{type === ETYPEKHOAHOC.CB && (
					<>
						<div className="grid grid-cols-2 gap-[30px]">
							{dataGioiThieu?.map((value, index) => {
								return (
									<CardDeTai
										data={{
											imageUrl: renderImage(value.imageUrl),
											content: value?.title,
											dateTime: value?.createdAt,
											type:value?.type,
											description:value?.description
										}}
										key={index}
									/>
								);
							})}
						</div>
					</>
				)}
				{type === ETYPEKHOAHOC.SP && (
					<>

						<div className="grid grid-cols-2 gap-[30px]">
							{dataGioiThieu?.map((value, index) => {
								return (
									<CardDeTai
										data={{
											imageUrl: renderImage(value.imageUrl),
											content: value?.title,
											dateTime: value?.createdAt,
											type:value?.type,
											description:value?.description
										}}
										key={index}
									/>
								);
							})}
						</div></>
				)}
			</div>
		</HoatDongWrapper>
	);
};
const HoatDongWrapper = styled.div`
	.search {
		input {
			height: 100%;
			padding-left: 12px;
			background: #f1f3f5;
			border-radius: 4px 0 0 4px;
			&:focus {
				outline: none;
			}
		}
		img {
			width: 20px;
			height: 20px;
		}
		button {
			padding: 4px 12px;
			background: #f1f3f5;
			border-radius: 0px 4px 4px 0px;
			font-family: "Inter";
			font-style: normal;
			line-height: 20px;

			display: flex;
			align-items: center;

			color: #ffffff;
		}
	}`;
export default HoatDong;
