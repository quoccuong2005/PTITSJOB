import { Footer, Tooltip } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { Router } from "../../config";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { useRouter } from "next/router";
import axios from "axios";
import { ip, ip3 } from "../../api/ip";
import { useAuth } from "../../context/AuthContext";
import { dataFooterLocation, dataNavBar } from "../../data";

const MainFooter = () => {
	const [common] = useTranslation("common");
	const router = useRouter();
	const [dataConfigFooter, setDataConfigFooter] = useState<any[]>([]);
	const { menu, setDataConfig } = useAuth();

	const getDataConfig = (type: string): any => {
		return dataConfigFooter?.find((item) => {
			return item.code === type;
		})?.value;
	};
	return (
		<FooterWrapper>
			<div>
				<div className='container mx-auto lg:pt-[25px] pt-[20px] lg:pb-[25px] pb-[20px] px-[20px] md:px-0'>
					<div className='grid sm:grid-cols-2 grid-cols-1'>
						<div className=''>
							<h3 className="font-bold">© THÀNH UỶ ĐỒNG NAI - SỔ TAY ĐẢNG VIÊN ĐIỆN TỬ</h3>
							<p>Địa chỉ: Hà Huy Giáp, Quyết Thắng, Thành phố Biên Hòa, Đồng Nai</p>

							<p>Email: sotaydangvien@dongnai.gov.vn</p>
						</div>
						<div>
							<div className='col-xl-2'>
								<h4 className='footer-title font-bold'>Danh mục</h4>
								<div className='ft-group-link my-6'>
									<p className='mb-2'>
										<a className='text-gray-800' href='https://stdv-dong-nai-dev.vercel.app/'>
											Trang chủ
										</a>
									</p>
									<p className='mb-2'>
										<a className='text-gray-800' href='https://stdv-dong-nai-dev.vercel.app/'>
											Cơ cấu tổ chức
										</a>
									</p>
									<p className='mb-2'>
										<a className='text-gray-800' href='https://stdv-dong-nai-dev.vercel.app/'>
											Hoạt động Đảng bộ
										</a>
									</p>

								</div>
							</div>
						</div>
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
