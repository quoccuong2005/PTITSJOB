import styled from "styled-components";
import Title from "../Title";
import { ip } from "../../api/ip";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TuyenSinh } from "../../utils/interface";
import { renderImage } from "../../utils/util";
import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import { el } from "date-fns/locale";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Button from "../Button";

const Discover = (props:{dataHome:any}) => {
	const [dataTuyenSinh, setDataTuyenSinh] = useState<TuyenSinh[]>([]);
	const [dataTuyenSinhAnh, setDataTuyenSinhAnh] = useState<TuyenSinh[]>([]);
	const [tabs, setTabs] = useState<string>("ALBUMIMAGE");
	const router = useRouter();
	const [common] = useTranslation("common");
	const { dataConfig } = useAuth();


	useEffect(() => {

	}, []);
	const handleChangeTabs = (tabs: "ALBUMIMAGE" | "ALBUMVIDEO" | "AUDIO") => {
		setTabs(tabs);

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
	return (
		<DiscoverWrapper className=' md:px-0 md:mt-[50px] mt-[20px]'>
			{/*<div className={"discover-1 md:pt-[109px] md:pb-[96px] py-[20px] "}>*/}
			<div className={" h-[555px]"}>
				{/*<ReactPlayer url='https://youtu.be/XZTaNCfhyzY' width={"100%"} height={"555px"} />*/}
				<iframe width="100%" height="555" src="https://www.youtube.com/embed/XZTaNCfhyzY" title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen></iframe>
				{/*<div className='container mx-auto wow fadeInUp'>*/}
				{/*	<Title title={"Khám phá cùng chúng tôi"} uppercase={true} type={"default"} />*/}
				{/*	<div className=' title-dis relative px-[30px] md:mt-[28px]'>*/}
				{/*		<div className='absolute top-[-15px] left-[15px] text-6xl'>“</div>*/}
				{/*		<div className='text-center'>*/}
				{/*			“ Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis*/}
				{/*			enim velit mollit. Exercitation veniam consequat sunt nostrud amet.”{" "}*/}
				{/*		</div>*/}
				{/*		<div className='text-center'>{getDataConfig("website-description")}</div>*/}
				{/*		<div className='absolute bottom-[-15px] right-[15px] text-6xl'>”</div>*/}
				{/*	</div>*/}
				{/*	<div className='flex justify-center md:mt-[80px] rounded-3xl overflow-hidden'>*/}
				{/*		<img*/}
				{/*			className='w-[130px] h-[130px] rounded-full overflow-hidden'*/}
				{/*			src={`/images/home/logo-dis.png`}*/}
				{/*			alt='image'*/}
				{/*		/>*/}
				{/*	</div>*/}
				{/*</div>*/}
			</div>
		</DiscoverWrapper>
	);
};

const DiscoverWrapper = styled.div`
	.discover-1 {
		background-image: url("/images/home/kham-pha.png");
		background-repeat: no-repeat;
		background-size: cover;
	}
	.title-dis {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 28px;

		color: #ffffff;
	}
	.tabs-item {
		padding-bottom: 8px;
		cursor: pointer;
		margin-right: 50px;
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 32px;
		/* identical to box height, or 200% */

		display: flex;
		align-items: center;

		/* Gray/Gray-8 */

		color: #343a40;
		svg {
			margin-right: 12px;
		}
	}
	.tabs-item-active {
		color: #de221a;
		border-bottom: 1px solid #de221a;
		svg {
			path {
				fill: #de221a;
			}
		}
	}
`;
export default Discover;
