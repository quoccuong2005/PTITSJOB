import { Button, DarkThemeToggle, Navbar, Spinner, Tooltip } from "flowbite-react";
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
import { MainMenu } from "../../utils/interface";
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
	const [dataMenu, setDataMenu] = useState<any>();
	const [linkLogo, setLinkLogo] = useState<string>();
	const [mainMenu, setMainMenu] = useState<MainMenu[]>([]);
	const [isScroll, setIsScroll] = useState<boolean>(false);
	const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
	const { language, handleChangeLanguage } = props;
	const searchRef = useRef<HTMLDivElement>(null);
	const {
		isAuthenticated,
		user,
		dataConfig,
		showAuthModal: showModal,
		setShowAuthModal: setShowModal,
		userLoading,
		setMenu,
	} = useAuth();
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
		fetch();
	}, [isAuthenticated]);
	useEffect(() => {
		console.log("router", router);
		if (router && router.pathname) {
			setTypeMenu(router?.pathname);
			// switch (router.asPath) {
			// 	case "/tin-tuc":
			// 		setTypeMenu("tin-tuc");
			// 		break;
			// 	case "/gioi-thieu":
			// 		console.log("vao cmnr");
			// 		setTypeMenu("gioi-thieu");
			// 		break;
			// 	case "/tuyen-sinh":
			// 		setTypeMenu("tuyen-sinh");
			// 		break;
			// 	case "/dao-tao":
			// 		setTypeMenu("dao-tao");
			// 		break;
			// 	case "/lien-he":
			// 		setTypeMenu("lien-he");
			// 		break;
			// 	case "/tin-tuyen-sinh":
			// 		setTypeMenu("tin-tuyen-sinh");
			// 		break;
			// 	case "/su-kien":
			// 		setTypeMenu("su-kien");
			// 		break;
			// 	case "/thong-bao":
			// 		setTypeMenu("thong-bao");
			// 		break;
			// 	case "/so-do":
			// 		setTypeMenu("so-do");
			// 		break;
			// 	case "/":
			// 		setTypeMenu("");
			// 		break;
			// }
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

	}, [router]);
	const getLogo = async () => {
		// const res= await renderImageByFolder(getDataConfig('logo','id'))
		const res = await axios.post(`${ip}file/v5/FileObject/GetFileInSharedFolder`, {
			sharedFolderType: 2,
			entityKey: getDataConfig("logo", "id"),
		});
		setLinkLogo(renderImage(res?.data?.data?.id));
	};
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
		<HeaderWrapper className=''>
			<div className='hidden sm:block bg-[#DE221A] px-6 '>
				<div className='container mx-auto '>
					<div className='header-branch flex justify-between items-center'>
						<div className=' flex items-center'>
							<img src={"/images/header/logo-header.png"} alt={"image"} />
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
											language === "vi" ? "border-white border" : ""
										} hover:border-white hover:border`}
										onClick={() => handleChangeLanguage("vi")}
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
			<div className={`label ${isScroll ? "fixed top-0 left-0 w-full bg-primary z-50" : ""}  shadow`}>
				<div className=' container sm:mx-auto lg:py-[20px] py-0 '>
					{/*<div className='logo'>*/}
					{/*	<img src={'/images/header/logo-db.png'} alt={"image"} />*/}
					{/*</div>*/}
					<div className={`bg-primary ${isScroll ? " bg-primary" : "lg:bg-white"} `}>
						<div className={`container mx-auto hidden sm:flex  justify-center items-center `}>
							<div className='flex items-center justify-center '>
								{dataNavBar.map((value, index) => {
									return (
										<div
											onClick={() => {
												if (value?.childrenRouter?.length > 0) {
												} else {
													router.push(value?.linkTo);
												}
											}}
											// href={value?.children?.length > 0 ? "" : value?.linkTo}
											className={` mr-[24px] last-of-type:mr-0 text-nav pt-2 cursor-pointer ${
												value?.linkTo?.localeCompare(typeMenu) === 0
													? `text-white ${
															isScroll
																? "text-white md:border-b-2  md:border-white-500"
																: "text-active md:border-b-2  md:border-primary-500"
													  } `
													: `md:border-none ${isScroll ? "text-white" : "text-black"}`
											} block  `}
											key={index}
										>
											{value?.childrenRouter?.length > 0 ? (
												<>
													<Tooltip
														className={"tooltip-label"}
														content={
															<>
																{value?.childrenRouter?.map((value2, index2) => {
																	return (
																		<div
																			onClick={() => {
																				router.push(value2?.linkTo);
																			}}
																			className={`text-children mr-[40px] cursor-pointer pt-2 ${
																				value2?.linkTo?.localeCompare(typeMenu) === 0
																					? "text-active md:border-b-2  md:border-primary-500"
																					: "md:border-none"
																			} block  hover:border-b hover:border-primary mb-[8px]`}
																			key={index2}
																		>
																			{value2.name}
																		</div>
																	);
																})}
															</>
														}
														style={"light"}
														placement='bottom'
													>
														{value?.name}
													</Tooltip>
												</>
											) : (
												<>{value?.name}</>
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
						<div className={"lg:hidden lg:invisible flex  justify-between lg:mt-[16px] mt-0 px-2 py-[8px] lg:py-0 "}>
							<div className='mr-[8px]'>
								<img src='./images/header/logo-header.png' alt={"image"} />
							</div>

							<div className='flex items-center relative shrink-0'>
								<div onClick={() => setShowMenu(!showMenu)}>
									<img src={"/images/icons/menu.svg"} alt={"image"} />
								</div>
								{showMenu && (
									<div className='menu-mobile absolute w-[180px] top-[50px] right-0 bg-white px-2 py-2 shadow-md rounded z-50'>
										<ul>
											{dataNavBar.map((value, index) => {
												return (
													<li key={index}>
														<Link
															href={value.linkTo}
															className={`${
																typeMenu === value.name ? "text-active" : ""
															} uppercase text-nav block md:border-b-2 md:border-primary-500 pb-[8px]`}
														>
															{value?.name}
														</Link>
													</li>
												);
											})}
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
`;
export default React.memo(Header);
