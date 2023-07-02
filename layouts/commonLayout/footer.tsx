import { Footer, Tooltip } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import styled from "styled-components";
import React, {useContext, useEffect, useRef, useState} from "react";
import { Router } from "../../config";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { useRouter } from "next/router";
import axios from "axios";
import { ip, ip3 } from "../../api/ip";
import { DataConfig } from "../../utils/interface";
import {AuthContext, useAuth} from "../../context/AuthContext";
import { dataFooterLocation, dataNavBar } from "../../data";
import {renderImage} from "../../utils/util";

const MainFooter = () => {
	const [common] = useTranslation("common");
	const router = useRouter();
	const [dataConfigFooter, setDataConfigFooter] = useState<DataConfig[]>([]);
	const { menu, setDataConfig } = useAuth();
	const {dataThongTin}=useContext(AuthContext);

	const getDataConfig = (type: string): any => {
		return null
	};
	return (
		<FooterWrapper>
			<div>
				<div className='lg:container mx-auto lg:pt-[60px] pt-[20px] lg:pb-[60px] pb-[20px] px-[20px] md:px-[20px]'>
					<div className='lg:flex block justify-between'>
						<div className='lg:max-w-[596px] wow fadeInUp'>
							<img className={"w-full"} src={renderImage(dataThongTin?.logoFooter)} />
							<div className='lg:flex hidden items-center mt-[20px]'>
								{/*<img className="mr-[20px] cursor-pointer" src="/images/icons/facebook-2.svg" alt={'image'}/>*/}
								<div className='mr-[20px] cursor-pointer'>
									<a href={getDataConfig("facebook")} target={"_blank"} rel={"noreferrer"}>
										<img src={"/images/icons/Facebook.svg"} alt={"image"} />
									</a>
								</div>
								<div className='mr-[20px] cursor-pointer'>
									<a href={getDataConfig("twitter")} target={"_blank"} rel={"noreferrer"}>
										<img src={"/images/icons/Twiter.svg"} alt={"image"} />
									</a>
								</div>
								{/*<img className="mr-[20px] cursor-pointer" src="/images/icons/twiter-2.svg" alt={'image'}/>*/}
								<a href={getDataConfig("youtube")} target={"_blank"} rel={"noreferrer"}>
									<img className=' cursor-pointer' src='/images/icons/Youtube.svg' alt={"image"} />
								</a>
							</div>
						</div>
						<div className='mt-[20px] lg:mt-0'>
							{/*{dataFooterLocation?.map((val, i) => {*/}
							{/*	return (*/}
							{/*		<div key={i} className='lg:mb-[32px] mb-[20px]'>*/}
							{/*			<div className='title-footer mb-[8px]'>{val?.title}</div>*/}
							{/*			<div className='content-footer'>{val?.name}</div>*/}
							{/*		</div>*/}
							{/*	);*/}
							{/*})}*/}
							<div  className='lg:mb-[32px] mb-[20px]'>
								<div className='title-footer mb-[8px]'>Trụ sở chính</div>
								<div className='content-footer'>{dataThongTin?.truSoChinh}</div>
							</div>
							<div  className='lg:mb-[32px] mb-[20px]'>
								<div className='title-footer mb-[8px]'>Cơ sở đào tạo tại Hà Nội</div>
								<div className='content-footer'>{dataThongTin?.coSo1}</div>
							</div>
							<div  className='lg:mb-[32px] mb-[20px]'>
								<div className='title-footer mb-[8px]'>Học viện cơ sở tại TP. Hồ Chí Minh</div>
								<div className='content-footer'>{dataThongTin?.hocVienCoSo}</div>
							</div>
							<div  className='lg:mb-[32px] mb-[20px]'>
								<div className='title-footer mb-[8px]'>Cơ sở đào tạo tại TP Hồ Chí Minh</div>
								<div className='content-footer'>{dataThongTin?.coSo2}</div>
							</div>
						</div>
						<div className='location hidden lg:block wow fadeInUp'>
							{dataNavBar?.map((value, index) => {
								return (
									<div
										onClick={() => {
											if (value?.childrenRouter?.length > 0) {
											} else {
												router.push(value?.linkTo);
											}
										}}
										className={` text-nav pt-2  block hover:text-[#DE221A] `}
										key={index}
									>
										{value?.childrenRouter?.length > 0 ? (
											<>
												<Tooltip
													content={
														<>
															{value?.childrenRouter?.map((value2, index2) => {
																return (
																	<div
																		onClick={() => {
																			if (value?.childrenRouter?.length > 0) {
																			} else {
																				router.push(value?.linkTo);
																			}
																		}}
																		className={` text-nav pt-2  block cursor-pointer `}
																		key={index2}
																	>
																		{value2.name}
																	</div>
																);
															})}
														</>
													}
													style={"light"}
													placement='right'
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
					</div>
					<div className='flex lg:hidden justify-center'>
						{/*<img className="mr-[20px] cursor-pointer" src="/images/icons/facebook-2.svg" alt={'image'}/>*/}
						<div className='mr-[20px] cursor-pointer'>
							<a href={getDataConfig("facebook")} target={"_blank"} rel={"noreferrer"}>
								<img src={"/images/icons/Facebook.svg"} alt={"image"} />
							</a>
						</div>

						<img className='mr-[20px] cursor-pointer' src='/images/icons/Twiter.svg' alt={"image"} />
						<a href={getDataConfig("youtube")}>
							<img className=' cursor-pointer' src='/images/icons/Youtube.svg' alt={"image"} />
						</a>
					</div>
				</div>
			</div>
		</FooterWrapper>
	);
};
const FooterWrapper = styled.div`
	background: linear-gradient(0deg, rgba(20, 33, 65, 0.07), rgba(20, 33, 65, 0.07)), #ffffff;
	.title-footer {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		/* identical to box height */

		/* Black */

		color: #18202a;
	}
	.content-footer {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		/* identical to box height */

		/* Black */

		color: #18202a;
	}
	.logo {
		img {
			max-width: 596px;
		}
	}
	ul {
		li {
			display: flex;
			margin-bottom: 16px;
			align-items: center;
			&:last-of-type {
				align-items: start;
			}
			img {
				width: 17px;
				margin-right: 16px;
			}
			.list-link {
				color: #1c7ed6;
			}
			a {
				color: #1c7ed6;
				text-decoration: underline;
			}
		}
	}
	.location {
		h2 {
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 32px;
			display: flex;
			align-items: center;
		}
	}
	.text-footer,
	.text-footer a {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 24px;
		color: #ffffff;
	}
	.list-link {
		a {
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 15px;
			line-height: 24px;
			color: #ffffff;
		}
	}
`;
export default MainFooter;
