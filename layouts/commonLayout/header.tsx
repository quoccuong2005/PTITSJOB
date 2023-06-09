import { DarkThemeToggle, Navbar, Spinner, Tooltip } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import LoginPopup from "./components/LoginPopup";
import SignupPopup from "./components/SignupPopup";
import UserDropdown from "./components/UserDropdown";
import styled from "styled-components";
import { rules } from "../../utils/rules";
import { useForm } from "react-hook-form";
import { Router } from "../../config";
import axios from "axios";
import { ip } from "../../api/ip";
import { IDataNavBar, MainMenu } from "../../utils/interface";
import { renderImage } from "../../utils/util";
import { el } from "date-fns/locale";
import { dataNavBar } from "../../data";
import { DivNode } from "postcss-value-parser";
import Button from "../../components/Button";
import moment from "moment";
import { toast } from "react-toastify";
import promise = toast.promise;
import dynamic from "next/dynamic";
import ReactGA from "react-ga";
import NavBarComponents from "../../components/NavBar";

interface IProps {
	language: string;
	handleChangeLanguage: (lang: string) => void;
}

const Header = (props: IProps) => {
	const [common] = useTranslation("common");
	const router = useRouter();
	const [typeMenu, setTypeMenu] = useState<string>("");
	const [linkLogo, setLinkLogo] = useState<string>();
	const [isScroll, setIsScroll] = useState<boolean>(false);
	const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
	const { language, handleChangeLanguage } = props;
	const [value, setValue] = useState<any>(moment().toISOString());
	const searchRef = useRef<HTMLDivElement>(null);
	const [dataNavBarClone, setDataNavBarClone] = useState<IDataNavBar[]>(dataNavBar);
	var interval: NodeJS.Timer | null | undefined = null;
	const {
		isAuthenticated,
		user,
		dataConfig,
		showAuthModal: showModal,
		setShowAuthModal: setShowModal,
		userLoading,
		setMenu,
	} = useAuth();
	const getDangBoTrucThuoc = async () => {
		try {
			const res = await axios.get(`${ip}/co-so-dang/public/cap-duoi-truc-thuoc`);
			if (res) {
				if (!router?.query?.name) {
					console.log('con ca',dataNavBarClone)
					const arrNav = [...dataNavBarClone];

					let obj: IDataNavBar = {
						name: "Hoạt động Đảng bộ",
						linkTo: "/dang-bo-truc-thuoc",
						childrenRouter: res?.data?.data?.map((val2: any) => {
							return {
								linkTo: `/?csd=${val2?._id}&name=${val2?.ten?.toUpperCase()}`,
								name: val2?.ten,
								isBlank: true,
							};
						}),
					};
					// arrNav.push(obj);
					// setDataNavBarClone(arrNav);
					return obj;
				}
			}
		} catch (e) {
			console.log(e);
		}
	};
	const getCoCauToChuc = async () => {
		try {
			const res = await axios.get(`${ip}/co-cau-to-chuc/all`);
			if (res) {
				console.log("rou", router);
				if (!router?.query?.name) {
					const arrNav = [...dataNavBarClone];
					let obj: IDataNavBar = {
						name: "Cơ cấu tổ chức",
						linkTo: "/co-cau/[id]",
						childrenRouter: res?.data?.data?.map((val2: any) => {
							return {
								linkTo: `/co-cau/${val2?._id}?type=${val2?.ten}`,
								name: val2?.ten,
								childrenRouter:
									val2.con?.length > 0
										? val2?.con?.map((item: any) => {
												return {
													linkTo: `/co-cau/${item?._id}?type=${item?.ten}`,
													name: item?.ten,
												};
										  })
										: undefined,
							};
						}),
					};
					// arrNav?.push(obj);
					// console.log("arr co cau", arrNav);
					// setDataNavBarClone(arrNav);
					return obj;

				}
			}
		} catch (e) {
			console.log(e);
		}
	};

	const getDataConfig = (type: string, valueGet?: string): any => {
		let obj = dataConfig?.find((item) => {
			return item.code === type;
		});
		if (valueGet) {
			return obj?.id;
		} else {
			return obj?.value;
		}
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const {
		register: register2,
		formState: { errors: errors2 },
		handleSubmit: handleSubmit2,
	} = useForm();
	const onSubmit = (data: any) => {
		if (data?.keyword) {
			router.push(`/tim-kiem?keyword=${data?.keyword}`);
		}
	};

	useEffect(() => {
		console.log('rou cc',router)
		if (router && router.pathname) {
			setTypeMenu(router?.pathname);
		}
	}, [router]);



	useEffect(() => {
		interval = setInterval(() => {
			setValue(moment().toISOString());
		}, 1000);
		return () => {
			// @ts-ignore
			clearInterval(interval);
		};
	}, []);


	useEffect(() => {
		Promise.all([getCoCauToChuc(), getDangBoTrucThuoc()]).then((values) => {
			console.log('con ca',values); // [3, 1337, "foo"]
			const arr=[...dataNavBarClone];
			// @ts-ignore
			setDataNavBarClone(arr.concat(values))
		});
	}, [router]);

	return (
		<HeaderWrapper className=''>
			<div>
				<div className='header hidden sm:block ' style={{ backgroundImage: `url(${"/images/header/bg-DN.png"})` }}>
					<div className=' header-2 container mx-auto '>
						<div className='flex justify-between'>
							<div className='flex items-center text-white shrink-0' onClick={()=>{
								router.push('/')
							}}>
								<img className='mr-[16px]' src='/images/header/co-dang-vn.svg' />
								<div className='flex flex-col items-center'>
									<p className='mb-0 text-xl name-tinh-uy font-bold'>SỔ TAY ĐẢNG VIÊN</p>
									<p className='mb-0 text-2xl font-bold  name-tinh-uy'>{router?.query?.name?router?.query?.name:'TỈNH UỶ ĐỒNG NAI'}</p>
								</div>
							</div>
							{/*<div className="image-uncle-ho w-full flex justify-center">*/}
							{/*	<img src="/images/header/cu-ho.png"/>*/}
							{/*</div>*/}
							<div id={"time"} className='shrink-0 mr-[32px] hidden sm:block'>
								<div className='hour'>{moment(value).format("HH:mm:ss")}</div>
								<div className='date'>{moment(value).format("dddd, DD/MM/YYYY")}</div>
							</div>
						</div>
						<div className={" hidden sm:block borderTop mt-[16px]"}>
							<div className='container mx-auto py-[8px]'>
								<div className='flex  justify-between items-center'>
									{/*<NavBarComponents data={dataNavBarClone}/>*/}
									<div className={"flex"}>
										{dataNavBarClone.map((value, index) => {
											return (
												<div
													onClick={() => {
														if (value?.childrenRouter?.length > 0) {
														} else {
															if (value?.isBlank) {
																window.open(`${value?.linkTo}`);
															} else {
																router.push(value?.linkTo);
															}
														}
													}}
													// href={value?.children?.length > 0 ? "" : value?.linkTo}
													className={` mr-[24px] last-of-type:mr-0 text-nav  cursor-pointer ${
														value?.linkTo?.localeCompare(typeMenu) === 0
															? `text-active ${isScroll ? "text-white md:border-b-2  md:border-white-500" : " md:border-b-2  md:border-[#ff0]"} `
															: `md:border-none ${isScroll ? "text-white" : "text-white"}`
													} block  `}
													key={index}
												>
													{value?.childrenRouter?.length > 0 ? (
														<>
															<Tooltip
																className={"tooltip-label"}
																content={
																	<div className='max-h-[200px] w-[300px]  overflow-y-scroll'>
																		{value?.childrenRouter?.map((value2, index2) => {
																			return (
																				<div
																					onClick={() => {
																						if (value2?.childrenRouter && value2?.childrenRouter?.length > 0) {
																						} else {
																							if (value2?.isBlank) {
																								window.open(`${value2?.linkTo}`);
																							} else {
																								router.push(value2?.linkTo);
																							}
																						}
																					}}
																					className={`text-children mr-[40px] cursor-pointer pt-2 ${
																						value2?.linkTo?.localeCompare(typeMenu) === 0
																							? "text-active md:border-b-2  md:border-primary-500"
																							: "md:border-none"
																					} block  hover:border-b hover:border-primary mb-[8px]`}
																					key={index2}
																				>
																					{value2?.childrenRouter && value2?.childrenRouter?.length > 0 ? (
																						<>
																							<Tooltip
																								className={"tooltip-label"}
																								content={
																									<div className='max-h-[200px] w-[250px] overflow-y-scroll'>
																										{value2?.childrenRouter?.map((value3, index3) => {
																											return (
																												<div
																													onClick={() => {
																														if (value3?.isBlank) {
																															window.open(`${value3?.linkTo}`);
																														} else {
																															router.push(value3?.linkTo);
																														}
																													}}
																													className={`text-children mr-[40px] cursor-pointer pt-2 ${
																														value3?.linkTo?.localeCompare(typeMenu) === 0
																															? "text-active md:border-b-2  md:border-primary-500"
																															: "md:border-none"
																													} block  hover:border-b hover:border-primary mb-[8px]`}
																													key={index2}
																												>
																													{value3.name}
																												</div>
																											);
																										})}
																									</div>
																								}
																								style={"light"}
																								// placement='right-start'
																								placement='right-start'
																							>
																								<div className='flex items-center'>
																									<div>{value2?.name}</div>
																								</div>
																							</Tooltip>
																						</>
																					) : (
																						<div className='flex items-center'>
																							<div>{value2?.name}</div>
																						</div>
																					)}
																				</div>
																			);
																		})}
																	</div>
																}
																style={"light"}
																placement='bottom'
															>
																<div className='flex items-center '>
																	{/*<div*/}
																	{/*	className='w-[20px] mr-[4px]'*/}
																	{/*	dangerouslySetInnerHTML={{ __html: (value?.icon as string) ?? "" }}*/}
																	{/*/>*/}
																	<div className="item-nav">{value?.name}</div>
																</div>
															</Tooltip>
														</>
													) : (
														<div className='flex items-center '>
															{/*<div*/}
															{/*	className='w-[20px] mr-[4px]'*/}
															{/*	dangerouslySetInnerHTML={{ __html: (value?.icon as string) ?? "" }}*/}
															{/*/>*/}
															<div className="item-nav">{value?.name}</div>
														</div>
													)}
												</div>
											);
										})}
									</div>
									<div className='flex items-center'>
										<div className='mr-[16px]'>
											<form onSubmit={handleSubmit(onSubmit)}>
												<div className='search flex item-center h-full'>
													<div className='relative'>
														<input placeholder={"Tìm kiếm"} {...register("keyword", { ...rules.required })} />
														{/*<div className='icon absolute top-[9.5px] left-[14.5px]'>*/}
														{/*	<img src={"/images/icons/search.svg"} alt={"image"} />*/}
														{/*</div>*/}
													</div>
													<button type='submit'>
														<img src={"/images/icons/search.svg"} alt={"image"} />
													</button>
												</div>
												{/*{errors.keyword && <p className='error-text'>Bắt buộc</p>}*/}
											</form>
										</div>
										<div>
											<a

												href={"https://stdv-dong-nai-dev.vercel.app/"}
												target={"_blank"}
												rel={"noreferrer"}
												className='bg-primary text-white rounded py-[4px] h-[28px] px-[12px]'
											>
												Đăng nhập
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
				{/*<div className='relative hidden sm:block'>*/}
				{/*	<img*/}
				{/*		className='w-full'*/}
				{/*		src='/images/header/Bannerweb2.png'*/}
				{/*		onClick={() => {*/}
				{/*			router.push("/");*/}
				{/*		}}*/}
				{/*	/>*/}
				{/*	<div id={"time"} className='absolute right-[15%] top-[20px]'>*/}
				{/*		<div className='hour'>{moment(value).format("HH:mm:ss")}</div>*/}
				{/*		<div className='date'>{moment(value).format("dddd, DD/MM/YYYY")}</div>*/}
				{/*	</div>*/}
				{/*</div>*/}

			</div>
			<div className='sm:hidden header pb-[16px] px-[8px] py-[4px]'>
				<div className='flex items-center text-white border-b-2 border-[#ff0] pb-[16px]'>
					<img className='mr-[16px]' src='/images/header/co-dang-vn.svg' />
					<div>
						<p className='mb-0 text-xl'>SỔ TAY ĐẢNG VIÊN</p>
						<p className='mb-0 text-2xl font-bold'>THÀNH UỶ ĐỒNG NAI</p>
					</div>
				</div>

				<div>
					<div className='flex mt-[20px] justify-between items-center'>
						<div className={"flex "}>
							{dataNavBarClone?.map((value, index) => {
								return (
									<div
										onClick={() => {
											if (value?.childrenRouter?.length > 0) {
											} else {
												if (value?.isBlank) {
													window.open(`${value?.linkTo}`);
												} else {
													router.push(value?.linkTo);
												}
											}
										}}
										// href={value?.children?.length > 0 ? "" : value?.linkTo}
										className={` mr-[8px] last-of-type:mr-0 text-nav-mobile  cursor-pointer ${
											value?.linkTo?.localeCompare(typeMenu) === 0
												? `text-white ${isScroll ? "text-white md:border-b-2  md:border-white-500" : "text-active "} `
												: `md:border-none ${isScroll ? "text-white" : "text-white"}`
										} block  `}
										key={index}
									>
										{value?.childrenRouter?.length > 0 ? (
											<>
												<Tooltip
													className={"tooltip-label"}
													content={
														<div className='max-h-[200px]  overflow-y-scroll'>
															{value?.childrenRouter?.map((value2, index2) => {
																return (
																	<div
																		onClick={() => {
																			if (value2?.childrenRouter && value2?.childrenRouter?.length > 0) {
																			} else {
																				if (value2?.isBlank) {
																					window.open(`${value2?.linkTo}`);
																				} else {
																					router.push(value2?.linkTo);
																				}
																			}
																		}}
																		className={`text-children mr-[40px] cursor-pointer pt-2 ${
																			value2?.linkTo?.localeCompare(typeMenu) === 0
																				? "text-active md:border-b-2  md:border-primary-500"
																				: "md:border-none"
																		} block  hover:border-b hover:border-primary mb-[8px]`}
																		key={`${index2}_${value2?.name}`}
																	>
																		{value2?.childrenRouter && value2?.childrenRouter?.length > 0 ? (
																			<>
																				<Tooltip
																					className={"tooltip-label"}
																					content={
																						<div className='max-h-[200px] w-[250px] overflow-y-scroll'>
																							{value2?.childrenRouter?.map((value3, index3) => {
																								return (
																									<div
																										onClick={() => {
																											if (value3?.isBlank) {
																												window.open(`${value3?.linkTo}`);
																											} else {
																												router.push(value3?.linkTo);
																											}
																										}}
																										className={`text-children mr-[40px] cursor-pointer pt-2 ${
																											value3?.linkTo?.localeCompare(typeMenu) === 0
																												? "text-active md:border-b-2  md:border-primary-500"
																												: "md:border-none"
																										} block  hover:border-b hover:border-primary mb-[8px]`}
																										key={`${index3}_${value3?.name}`}
																									>
																										{value3.name}
																									</div>
																								);
																							})}
																						</div>
																					}
																					style={"light"}
																					// placement='right-start'
																					placement='bottom-end'
																				>
																					<div className='flex items-center'>
																						<div>{value2?.name}</div>
																					</div>
																				</Tooltip>
																			</>
																		) : (
																			<div className='flex items-center'>
																				<div>{value2?.name}</div>
																			</div>
																		)}
																	</div>
																);
															})}
														</div>
													}
													style={"light"}
													placement='bottom'
												>
													<div className='flex items-center'>
														{/*<div*/}
														{/*	className='w-[20px] mr-[4px]'*/}
														{/*	dangerouslySetInnerHTML={{ __html: (value?.icon as string) ?? "" }}*/}
														{/*/>*/}
														<div>{value?.name}</div>
													</div>
												</Tooltip>
											</>
										) : (
											<div className='flex items-center'>
												{/*<div*/}
												{/*	className='w-[20px] mr-[4px]'*/}
												{/*	dangerouslySetInnerHTML={{ __html: (value?.icon as string) ?? "" }}*/}
												{/*/>*/}
												<div>{value?.name}</div>
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{/*<div className='container mx-auto mt-[20px] text-primary text-xl px-[20px] sm:px-0'>*/}
			{/*	{router?.query?.name ?? "Tỉnh uỷ Đồng Nai"}*/}
			{/*</div>*/}
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.div`
	.header {
		//background-image: url("/images/header/header-stdv.png");
		background: #b70b00;
		background-position: 100% 0;
		background-repeat: no-repeat;
		background-size: auto 100%;
		border: none;
	}

	.header-2 {
		background-image: url("/images/header/bg-header.png");
		background-position: top;
		background-repeat: no-repeat;
		background-size: auto 100%;
	}

	.header-branch {
		padding: 16px 0;

		.info {
			.line {
				width: 1px;
				height: 100%;
				margin: 0 16px;
				border-right: 1px solid #ffffff;
			}

			img {
				margin-right: 4px;
				width: 20px;
				height: 20px;
			}

			font-family: "Inter";
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
			color: #ffffff;
		}

		.socical {
			img {
				margin-right: 20px;

				&:last-of-type {
					margin-right: 0;
				}
			}
		}
	}

	.label {
		.tooltip-label {
			border-radius: 0px !important;
			padding: 20px 24px !important;
		}
	}

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
	}

	.text-nav {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 19px;
	}
	.text-nav-mobile {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 19px;
	}
	.text-active {
		color: #ff0 !important;
	}

	.menu-mobile {
		ul {
			li {
				margin-bottom: 8px;
				border-bottom: 1px solid #ececec;
			}
		}
	}

	.text-children {
		font-family: "Inter";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;

		color: #18202a;

		&:hover {
			color: #de221a;
		}
	}

	.hour {
		text-align: right;
		text-shadow: 0 1px 0 #b70b00, 1px 1px 0 #b70b00, 0 -1px 0 #b70b00, -1px 0 1px #b70b00, 0 -1px 1px #b70b00;
		color: #ffed00 !important;
		font-size: 25px !important;
	}

	.date {
		text-align: right;
		text-shadow: 0 1px 0 #b70b00, 1px 1px 0 #b70b00, 0 -1px 0 #b70b00, -1px 0 1px #b70b00, 0 -1px 1px #b70b00;
		color: #ffffff !important;
		font-size: 16px !important;
	}

	.name-tinh-uy {
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.31);
	}
	.item-nav{
		&:hover{
			color: #ff0;
		}
	}
	.borderTop{
		border-top-width: 1px;
		border-top-style: solid;
		border-image: linear-gradient(to right, #fff78c, transparent) 1;
	}
`;
export default React.memo(Header);
