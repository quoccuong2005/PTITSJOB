import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import BreadcrumbPage from "../components/Breadcrumb";
import { rules } from "../utils/rules";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DatePickerFake from "../components/DatePicker";
import DatePicker from "react-datepicker";
import Modal from "../components/Common/Modal";

const DangKy: NextPage = () => {
	const [common] = useTranslation("common");
	const {
		register,
		reset,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [sendSuccess, setSendSuccess] = useState<boolean>(false);
	let timmer: NodeJS.Timeout | undefined;
	const onSubmit = (data: any) => {
		console.log("data", data);
		setSendSuccess(true);
		timmer = setTimeout(() => {
			setSendSuccess(false);
			reset();
		}, 10000);
	};
	useEffect(() => {
		return () => {
			clearTimeout(timmer);
		};
	}, []);
	return (
		<RegisterWrapper>
			<div className='container mx-auto bg-white px-6 pt-6 pb-[48px] mb-[8px]'>
				<BreadcrumbPage
					data={[
						{
							title: "Trang chủ",
							path: "/",
						},
						{
							title: "Tuyển sinh",
							path: "/#tuyen-sinh",
						},
						{
							title: "Khóa học",
							path: "/khoa-hoc/1",
						},
						{
							title: "Đăng ký",
							path: "#",
						},
					]}
				/>
				<div className=' grid grid-flow-row-dense grid-cols-2  sm:grid-cols-4'>
					<div className='col-span-3'>
						<div>
							<h2>Đăng ký học viên</h2>
							<div className='form'>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className={"lg:mb-6 mb-2"}>
										<div className={"lg:flex lg:items-center"}>
											<label className={"required-label shrink-0"}>Họ và tên</label>
											<input
												className={"w-full"}
												placeholder='Nhập họ tên'
												{...register("hoTen", { ...rules.required })}
											/>
										</div>
										{/*// @ts-ignore*/}
										{errors.hoTen && <p className='error-text'>{errors.hoTen?.message}</p>}
									</div>
									<div className={"mb-2 lg:mb-6"}>
										<div className={"lg:flex lg:items-center"}>
											<label className={"required-label shrink-0 lg:mb-0"}>Ngày sinh</label>
											<Controller
												name={"date"}
												control={control}
												render={({ field: { onChange, value } }) => (
													<DatePicker
														placeholderText={"Nhập ngày sinh"}
														selected={value}
														onChange={(date) => {
															onChange(date);
														}}
													/>
												)}
											/>
										</div>
										{/*// @ts-ignore*/}
										{errors.date && <p className='error-text'>{errors.date?.message}</p>}
									</div>

									<div className={"mb-2 lg:mb-6"}>
										<div className={"lg:flex lg:items-center"}>
											<label className={"required-label shrink-0 lg:mb-0"}>Đơn vị</label>
											<input
												className={"w-full"}
												placeholder='Nhập đơn vị'
												{...register("donVi", { ...rules.required })}
											/>
										</div>
										{/*// @ts-ignore*/}
										{errors.donVi && <p className='error-text'>{errors.donVi?.message}</p>}
									</div>
									<div className={"mb-2 lg:mb-6"}>
										<div className={"lg:flex lg:items-center"}>
											<label className={"required-label shrink-0 lg:mb-0"}>Địa chỉ</label>
											<input
												className={"w-full"}
												placeholder='Nhập địa chỉ'
												{...register("address", { ...rules.required })}
											/>
										</div>
										{/*// @ts-ignore*/}
										{errors.address && <p className='error-text'>{errors.address?.message}</p>}
									</div>
									<div className={"mb-2 lg:mb-6"}>
										<div className={"lg:flex lg:items-center"}>
											<label className={"required-label shrink-0 lg:mb-0"}>Email</label>
											<input
												className={"w-full"}
												placeholder='Nhập email'
												{...register("email", { ...rules.required, ...rules.email })}
											/>
										</div>
										{/*// @ts-ignore*/}
										{errors.email && <p className='error-text'>{errors.email?.message}</p>}
									</div>
									<div className={"mb-2 lg:mb-6"}>
										<div className={"lg:flex lg:items-center"}>
											<label className={"required-label shrink-0 lg:mb-0"}>Số điện thoại</label>
											<input
												className={"w-full"}
												placeholder='Nhập số điện thoại'
												{...register("phone", { ...rules.required, ...rules.sdt })}
											/>
										</div>
										{/*// @ts-ignore*/}
										{errors.phone && <p className='error-text'>{errors.phone?.message}</p>}
									</div>
									<div className={"mb-2 lg:mb-6"}>
										<div className={"lg:flex lg:items-center"}>
											<label className={"required-label shrink-0 lg:mb-0"}>Khóa học đăng ký</label>
											<input
												className={"w-full"}
												placeholder='Nhập khóa học đăng ký'
												{...register("khoaHoc", { ...rules.required })}
											/>
										</div>
										{/*// @ts-ignore*/}
										{errors.khoaHoc && <p className='error-text'>{errors.khoaHoc?.message}</p>}
									</div>
									<div className='lg:ml-[176px] flex justify-center lg:block '>
										<button type='submit' className='mt-6 btn bg-secondary'>
											Đăng ký học viên
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal
				show={sendSuccess}
				footer={undefined}
				showFooter={false}
				onCancel={() => {
					setSendSuccess(false);
					clearTimeout(timmer);
				}}
			>
				<div className='modal-success flex flex-col justify-center items-center px-[32px] py-[32px]'>
					<img src={"/images/icons/status-success.svg"} alt={"image"} className='mr-4' />
					<p className='title'>Đăng ký thành công</p>
					<p className='content'>
						Đăng ký thành viên thành công, vui lòng kiểm tra hòm thư điện tử để nhận thông tin tài khoản
					</p>
				</div>
			</Modal>
		</RegisterWrapper>
	);
};
const RegisterWrapper = styled.div`
	h2 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 32px;
		display: flex;
		align-items: center;
		color: #212529;
		margin-bottom: 32px;
	}
	.form {
		label {
			min-width: 160px;
			margin-right: 16px;
		}
		input {
			background: #f1f3f5;
			border-radius: 8px;
			padding: 12px;
			&:focus {
				outline: none;
			}
		}
		textarea {
			background: #f1f3f5;
			border-radius: 8px;
			resize: none;
			min-height: 180px;
			width: 100%;
			border: none;
			&:focus {
				outline: none;
			}
		}
		button {
			padding: 12px 64px;
			//border-radius: 8px;
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			/* identical to box height, or 150% */

			display: flex;
			align-items: center;

			/* White */

			color: #ffffff;
		}
		.title-form {
			font-family: "Inter";
			font-style: normal;
			font-weight: 700;
			font-size: 20px;
			line-height: 32px;
			display: flex;
			align-items: center;
			color: #212529;
		}
	}
	.modal-success {
		img {
			margin-bottom: 24px;
			width: 96px;
			height: 96px;
		}
		.title {
			margin-bottom: 12px;
			font-family: "Inter";
			font-style: normal;
			font-weight: 700;
			font-size: 24px;
			line-height: 150%;
			/* identical to box height, or 36px */

			display: flex;
			align-items: center;

			/* Gray/Gray-9 */

			color: #212529;
		}
		.content {
			font-family: "Inter";
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 160%;
			display: flex;
			align-items: center;
			text-align: center;
			color: #212529;
		}
	}
`;
export default DangKy;
