import { Button, DarkThemeToggle, Navbar, Spinner, Tooltip } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {useContext, useEffect, useRef, useState} from "react";
import { useTranslation } from "react-i18next";
import {AuthContext, useAuth } from "../../context/AuthContext";
import LoginPopup from "./components/LoginPopup";
import SignupPopup from "./components/SignupPopup";
import UserDropdown from "./components/UserDropdown";
import styled from "styled-components";
import { rules } from "../../utils/rules";
import { useForm } from "react-hook-form";
import { Router } from "../../config";
import axios from "axios";
import { ip } from "../../api/ip";
import {DataMenu, MainMenu} from "../../utils/interface";
import { renderImage } from "../../utils/util";
import { el } from "date-fns/locale";
import { dataNavBar } from "../../data";
import { DivNode } from "postcss-value-parser";

interface IProps {
	language: string;
	handleChangeLanguage: (lang: string) => void;
}

const Header = (props: IProps) => {
	const [common] = useTranslation("common");
	const router = useRouter();
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [typeMenu, setTypeMenu] = useState<string>("");
	const [dataMenu, setDataMenu] = useState<DataMenu[]>([]);
	const [linkLogo, setLinkLogo] = useState<string>();
	const [mainMenu, setMainMenu] = useState<MainMenu[]>([]);
	const [isScroll, setIsScroll] = useState<boolean>(false);
	const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
	const { language, handleChangeLanguage } = props;
	const searchRef = useRef<HTMLDivElement>(null);
	const langRef = useRef<HTMLDivElement>(null);
	const {setDataThongTin,dataThongTin,langCode}=useContext(AuthContext)

	const [isChangeLang, setIsChangeLang] = useState<boolean>(false);
	const {
		isAuthenticated,
		user,
		dataConfig,
		showAuthModal: showModal,
		setShowAuthModal: setShowModal,
		userLoading,
		setMenu,
	} = useAuth();
	const onClickLanguage = () => {
		setIsChangeLang(!isChangeLang);
	};
	const onChangeLanguage = (e: any, language: string) => {
		props.handleChangeLanguage(language);
		setIsChangeLang(false);
	};
	const fetch = async () => {
		// await getAllProjectList()
		// 	.then((response) => setDanhSach(response.data))
		// 	.catch((e) => console.log(e));
		// if (isAuthenticated)
		// 	getNotificationPageable({ limit: 10, page: 1 })
		// 		.then((response) => {
		// 			setHasUnread(!!response.data.result.filter((item) => item.unread)?.length);
		// 		})
		// 		.catch(console.error);
	};
	const getThongTinChung = async () => {
	  try {
			const res=await axios.get(`${ip}/thong-tin-chung?locale=${langCode}`);
			if (res){
				setDataThongTin(res?.data)
			}
		}catch (e) {
			console.log(e)
		}
	}
	const getDataNav = async () => {
		try {
			const res=await axios.get(`${ip}/qlkh-cau-truc-trang-web?populate=deep&locale=${langCode}`);
			if (res){
				setDataMenu(res?.data?.data?.attributes?.cauTruc??[])
			}
		}catch (e) {
			console.log(e)
		}
	}
	// const getDataConfig = (type: string, valueGet?: string): any => {
	// 	let obj = dataConfig?.find((item) => {
	// 		return item.code === type;
	// 	});
	// 	if (valueGet) {
	// 		return obj?.id;
	// 	} else {
	// 		return obj?.value;
	// 	}
	// };
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
		getDataNav()
	}, [langCode]);
	useEffect(() => {
		console.log("router", router);
		if (router && router.pathname) {
			setTypeMenu(router?.pathname);
		}
	}, [router]);


	useEffect(() => {
		window.addEventListener("scroll", isSticky);
		return () => {
			window.removeEventListener("scroll", isSticky);
		};
	}, []);

	const isSticky = (e: any) => {
		if (window.scrollY > 167) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	};
	useEffect(() => {
		getThongTinChung()
	}, [router,langCode]);
	const handleClickOutside = (e: any) => {
		const { target } = e;
		const node = searchRef?.current;
		if (node) {
			if (!node.contains(target)) {
				setIsShowSearch(false)
			}
		}
	};
	useEffect(() => {
		window.addEventListener("click", handleClickOutside,true);
		return () => {
			window.removeEventListener("click", handleClickOutside,true);
		};
		// getLogo();
	}, []);
	return (
		<HeaderWrapper className=' shadow-header'>
			<div className='hidden sm:block bg-[#DE221A] px-6 '>
				<div className='container mx-auto '>
					<div className='header-branch flex justify-between items-center'>
						<div className=' flex items-center'>
							<img src={renderImage(dataThongTin?.logoHeader)} alt={"image"} />
						</div>
						<div className=' flex item-center' >
							{/*<img src={"/images/icons/facebook.svg"} />*/}
							{/*<img src={"/images/icons/twitter.svg"} />*/}
							{/*<img src={"/images/icons/youtube.svg"} />*/}
							<div className='flex md:order-2 ' ref={searchRef}>
								<div className='flex items-center z-50' >
									{isShowSearch ? (
										<div className='mr-[32px]'>
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
									) : (
										<div className="cursor-pointer " onClick={() => setIsShowSearch(true)}>
											<img   className='mr-[32px]' src='/images/icons/search-header.svg' alt={"image"} />
										 </div>
									)}
								</div>

								<div className='flex'>
									<div
										className={`mr-[8px] cursor-pointer ${
											language === "vi-VN" ? "border-white border" : ""
										} hover:border-white hover:border`}
										onClick={() => handleChangeLanguage("vi-VN")}
									>
										<img className='h-[30px] w-[45px]' src={"/images/icons/vn.svg"} alt={"image"} />
									</div>
									<div
										className={`cursor-pointer ${
											language === "en" ? "border-white border" : ""
										} hover:border-white hover:border`}
										onClick={() => handleChangeLanguage("en")}
									>
										<img className='h-[30px] w-[45px]' src={"/images/icons/us.svg"} alt={"image"} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`label ${isScroll ? "fixed top-0 left-0 w-full bg-primary z-50" : "lg:bg-white bg-primary"} `}>
				<div className=' container sm:mx-auto lg:py-[20px] py-0  '>
					{/*<div className='logo'>*/}
					{/*	<img src={'/images/header/logo-db.png'} alt={"image"} />*/}
					{/*</div>*/}
					<div className={` ${isScroll ? " bg-primary" : "lg:bg-white"} `}>
						<div className={`container mx-auto hidden sm:flex  justify-center items-center `}>
							<div className='flex items-center justify-center '>
								{dataMenu.map((value, index) => {
									return (
										<div
											onClick={() => {
												if (value?.trangCon?.length > 0) {
												} else {
													if (value?.sangTrangMoi) {
														window.open(value?.link)
													}else {
														router.push(value?.link);
													}

												}
											}}
											// href={value?.children?.length > 0 ? "" : value?.linkTo}
											className={` mr-[24px] last-of-type:mr-0 text-nav pt-2 cursor-pointer ${
												value?.link?.split('?')?.[0]?.localeCompare(typeMenu) === 0
													? `text-white ${
															isScroll
																? "text-white md:border-b-2  md:border-white-500"
																: "text-active md:border-b-2  md:border-primary-500"
													  } `
													: `md:border-none ${isScroll ? "text-white" : "text-black"}`
											} block  `}
											key={index}
										>
											{value?.trangCon?.length > 0 ? (
												<>
													<Tooltip
														className={"tooltip-label"}
														content={
															<>
																{value?.trangCon?.map((value2, index2) => {
																	return (
																		<div
																			onClick={() => {
																				if (value?.sangTrangMoi) {
																					window.open(value2?.link)
																				}else {
																					router.push(value2?.link);
																				}
																			}}
																			className={`text-children mr-[40px] cursor-pointer pt-2 ${
																				value2?.link?.localeCompare(typeMenu) === 0
																					? "text-active md:border-b-2  md:border-primary-500"
																					: "md:border-none"
																			} block  hover:border-b hover:border-primary mb-[8px]`}
																			key={index2}
																		>
																			{value2.ten}
																		</div>
																	);
																})}
															</>
														}
														style={"light"}
														placement='bottom'
													>
														{value?.ten}
													</Tooltip>
												</>
											) : (
												<>{value?.ten}</>
											)}
										</div>
									);
								})}
							</div>
							{/*<Navbar className='hidden lg:block'>*/}
							{/*	<Navbar.Collapse>*/}
							{/*		{Router.map((value, index) => {*/}
							{/*			return (*/}
							{/*				<Link*/}
							{/*					href={value.path}*/}
							{/*					className={`uppercase text-nav pt-2 ${*/}
							{/*						typeMenu === value.name ? "text-active md:border-t-2  md:border-primary-500" : "md:border-none"*/}
							{/*					} block  `}*/}
							{/*					key={index}*/}
							{/*				>*/}
							{/*					{common(`common.${value.name}`)}*/}
							{/*				</Link>*/}
							{/*			);*/}
							{/*		})}*/}
							{/*	</Navbar.Collapse>*/}
							{/*</Navbar>*/}
						</div>
						<div className={"lg:hidden lg:invisible flex  justify-between items-center lg:mt-[16px] mt-0 px-2 py-[8px] lg:py-0 "}>
							<div className='mr-[8px]'>
								<img src='./images/header/logo-header.png' alt={"image"} />
							</div>

							<div className='flex items-center relative shrink-0 mr-[8px]'>
								<div onClick={() => setShowMenu(!showMenu)}>
									<img src={"/images/icons/menu.svg"} alt={"image"} />
								</div>
								{showMenu && (
									<div className='menu-mobile absolute w-[180px] top-[50px] right-0 bg-white px-2 py-2 shadow-md rounded z-50'>
										<ul>
											{dataMenu.map((value, index) => {
												return (
													<li key={index}>
														<Link
															href={value.link}
															className={`${
																typeMenu === value.ten ? "text-active" : ""
															} uppercase text-nav block md:border-b-2 md:border-primary-500 pb-[8px]`}
														>
															{value?.ten}
														</Link>
													</li>
												);
											})}
										</ul>
									</div>
								)}
							</div>
							<div className="relative mr-2" ref={langRef}>
								<div
									className="language flex items-center "
									onClick={() => onClickLanguage()}
								>
									<img
										className="w-8"
										src={
											props.language === "vi-VN"
												? "/images/icons/vn.svg"
												: "/images/icons/us.svg"
										}
										alt=""
									/>
									{isChangeLang ? (
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 15l7-7 7 7"
											></path>
										</svg>
									) : (
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									)}
								</div>
								{isChangeLang && (
									<div className="language absolute top-9 right-0 shadow-lg py-2.5 w-40 secondary-bg rounded-xl ">
										<ul>
											<li className="hover:hover-bg px-2.5 cursor-pointer">
												<a
													className="flex items-center"
													onClick={(e) => onChangeLanguage(e, "en")}
												>
													<img
														className="w-8 mr-2"
														src="/images/us.png"
														alt=""
													/>{" "}
													<span>English (US)</span>
												</a>
											</li>
											<li className="hover:hover-bg px-2.5 cursor-pointer">
												<a
													className="flex items-center"
													onClick={(e) => onChangeLanguage(e, "vi-VN")}
												>
													<img
														className="w-8 mr-2"
														src="/images/vi.png"
														alt=""
													/>{" "}
													Tiếng Việt
												</a>
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.div`
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
	z-index: 10;
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
		.tooltip-label{
			border-radius: 0px!important;
			padding: 20px 24px!important;
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
	.text-active {
		color: #de221a !important;
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
	.shadow-header{
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
	}
`;
export default React.memo(Header);
