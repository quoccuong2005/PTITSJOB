import { useForm } from "react-hook-form";

import styled from "styled-components";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import moment from "moment";
import ReactToPrint from "react-to-print";
import { ip } from "../api/ip";
import {GioiThieu, GioiThieuNC} from "../utils/interface";
import Title from "../components/Title";
import {da, tr} from "date-fns/locale";
import {dataNghienCuu} from "../data";
import CardNghienCuu from "../components/CardNghienCuu";

const GioiThieu = () => {
	const [sendSuccess, setSendSuccess] = useState<boolean>(false);
	const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
	const [dataGioiThieu, setDataGioiThieu] = useState<GioiThieu[]>([]);
	const [dataGioiThieuNC, setDataGioiThieuNC] = useState<GioiThieuNC[]>([]);
	const router = useRouter();
	const contentRef = useRef<HTMLDivElement>(null);
	let timmer: NodeJS.Timeout | undefined;
	const [type, setType] = useState<string>();

	const getData = async (typeStr:string) => {
		try {
			if (typeStr==='NC'){
				const res = await axios.get(`${ip}/qlkh-dinh-huong-nghien-cuus`);
				if (res) {
					console.log("resss", res);
					setDataGioiThieuNC(res?.data?.data);
					setDataChiTiet(res?.data?.data?.[0]);
				}
			}
			if (typeStr==='KH'){
				const res = await axios.get(`${ip}/chien-luoc-phat-trien`);
				if (res) {
					console.log("resss", res);
					setDataGioiThieu(res?.data?.data);
					setDataChiTiet(res?.data?.data?.[0]);
				}
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
	return (
		<ChiTietWrapper>
			<div className='container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px]'>
				{type === "KH" && (
					<>
						<Title title={"Chiến lược phát triển KH, CN & ĐMST"} uppercase={true} />
						<div dangerouslySetInnerHTML={{__html:dataGioiThieu?.attributes?.htmlContent}}>
						</div>
						{/*<div className="chien-luoc" >*/}
						{/*	<p className='muc-1 mb-[28px]'>1.Quan điểm phát triển</p>*/}
						{/*	<div className='item-info flex mb-[20px]'>*/}
						{/*		<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*		<div>*/}
						{/*			Phát triển khoa học và công nghệ phù hợp các định hướng của Bộ Thông tin và Truyền thông, Bộ Khoa học*/}
						{/*			và Công nghệ (KHCN).*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className='item-info flex mb-[20px]'>*/}
						{/*		<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*		<div>*/}
						{/*			Nghiên cứu khoa học và phát triển công nghệ phục vụ nâng cao chất lượng đào tạo, nâng cao vị thế trong*/}
						{/*			nước và quốc tế của Học viện*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className='item-info flex mb-[20px]'>*/}
						{/*		<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*		<div>Xây dựng và triển khai các hoạt động KHCN của Học viện theo định hướng Đại học ứng dụng.</div>*/}
						{/*	</div>*/}
						{/*	<div className='item-info flex mb-[20px]'>*/}
						{/*		<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*		<div>*/}
						{/*			Triển khai công tác nghiên cứu khoa học theo hướng tăng cường các bài báo quốc tế có uy tín thuộc danh*/}
						{/*			mục ISI và Scopus và phát triển một số sản phẩm ứng dụng, thương mại hóa.*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className='item-info flex mb-[20px]'>*/}
						{/*		<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*		<div>*/}
						{/*			Tăng cường các hoạt động nghiên cứu khoa học (NCKH) của sinh viên và hỗ trợ các hoạt động khởi nghiệp.*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div className='item-info flex mb-[20px]'>*/}
						{/*		<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*		<div>Phát triển các Lab chuyên sâu của Học viện gắn với yêu cầu về kết quả NCKH.</div>*/}
						{/*	</div>*/}
						{/*</div>*/}
						{/*<div>*/}
						{/*	<p className='muc-1 mb-[28px]'>2. Mục tiêu</p>*/}
						{/*	<div className="mb-[24px]">*/}
						{/*		<p className='muc-2 mb-[28px]'>2.1. Mục tiêu chung</p>*/}
						{/*		<div>*/}
						{/*			Đến năm 2022, hoạt động KHCN đóng vai trò nòng cốt trong sự phát triển của Học viện và hỗ trợ cho việc*/}
						{/*			đổi mới chương trình đào tạo để đáp ứng các yêu cầu của cuộc cách mạng công nghiệp 4.0; Phát triển các*/}
						{/*			bài báo khoa học trong nước và quốc tế cả số lượng và chất lượng, đặc biệt là các bài báo thuộc danh*/}
						{/*			mục ISI và Scopus; Hình thành một số sản phẩm, dịch vụ KHCN thương mại hóa, chiếm lĩnh được thị*/}
						{/*			trường, tạo sự phát triển bền vững.*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*	<div>*/}
						{/*		<p className='muc-2 mb-[28px]'>2.2. Mục tiêu cụ thể</p>*/}
						{/*		<div className='item-info flex mb-[20px]'>*/}
						{/*			<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*			<div>*/}
						{/*				Đến năm 2022, Học viện nằm trong nhóm các Đại học có uy tín ở Việt Nam về số lượng các bài báo khoa*/}
						{/*				học được công bố ở trong nước và quốc tế; Hình thành một số sản phẩm, dịch vụ KHCN chủ lực, đưa lại*/}
						{/*				doanh thu cao, đảm bảo cân đối tài chính cho các Viện nghiên cứu;*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*		<div className='item-info flex mb-[20px]'>*/}
						{/*			<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*			<div>*/}
						{/*				Các Lab chuyên sâu hoạt động hiệu quả, có các kết quả nghiên cứu đạt trình độ tiên tiến của khu vực*/}
						{/*				ASEAN và thế giới; Kinh phí từ đề tài KHCN các cấp và nguồn thu từ các hoạt động dịch vụ KHCN tăng*/}
						{/*				trưởng qua các năm;*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*		<div className='item-info flex mb-[20px]'>*/}
						{/*			<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*			<div>*/}
						{/*				Công tác nghiên cứu khoa học của sinh viên phát triển mạnh mẽ; Hỗ trợ khởi nghiệp một số sản phẩm*/}
						{/*				nghiên cứu khoa học của sinh viên và giảng viên Học viện;*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*		<div className='item-info flex mb-[20px]'>*/}
						{/*			<img className='mr-[16px]' src='/images/icons/check.svg' alt={"icon"} />*/}
						{/*			<div>*/}
						{/*				Hàng năm, có trên 70% giảng viên cơ hữu, nghiên cứu viên tham gia nghiên cứu khoa học có bài báo,*/}
						{/*				công trình được công bố trên các tạp chí và kỷ yếu khoa học công nghệ chuyên ngành có uy tín cao ở*/}
						{/*				trong nước và quốc tế.*/}
						{/*			</div>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</div>*/}
					</>
				)}
				{type === "NC" && (
					<>
						<Title title={"ĐỊNH HƯỚNG NGHIÊN CỨU"} uppercase={true} />
						{dataGioiThieuNC?.map((val,i)=>{
							return(
								<CardNghienCuu data={{
									no:val?.attributes?.so,
									title:val?.attributes.tieuDe,
									content:val?.attributes?.moTa
								}}
								key={i}/>
							)
						})}
					</>
				)}
				{type === "LH" && (
					<div className="lien-he">
						<Title title={"THÔNG TIN LIÊN HỆ"} uppercase={true} />
						<div className='flex justify-between items-center'>
							<div className='info'>
								<p className='mb-[40px]'>Phòng Quản lý Khoa học Công nghệ và Hợp tác Quốc tế</p>
								<div className='item-info flex mb-[20px]'>
									<img className='mr-[16px]' src='/images/icons/user.svg' alt={"icon"} />
									<div>Trưởng phòng: Ông Ngô Đức Thiện</div>
								</div>
								<div className='item-info flex mb-[20px]'>
									<img className='mr-[16px]' src='/images/icons/phone.svg' alt={"icon"} />
									<div>024.33524054</div>
								</div>
								<div className='item-info flex mb-[20px]'>
									<img className='mr-[16px]' src='/images/icons/mail.svg' alt={"icon"} />
									<div>thiennd@ptit.edu.vn</div>
								</div>
								<div className='item-info flex '>
									<img className='mr-[16px]' src='/images/icons/location.svg' alt={"icon"} />
									<div>Tầng 2, nhà A1, Km10, Nguyễn Trãi, Hà Đông, Hà Nội</div>
								</div>
							</div>
							<div>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1815.9326580973234!2d105.78681389521923!3d20.980548456629805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acce762c2bb9%3A0xbb64e14683ccd786!2zSOG7jWMgVmnhu4duIENOIELGsHUgQ2jDrW5oIFZp4buFbiBUaMO0bmcgLSBIw6AgxJDDtG5n!5e0!3m2!1svi!2s!4v1684146065740!5m2!1svi!2s'
									width='600'
									height='450'
									// style='border:0;'
									// allowFullScreen='fa'
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
								></iframe>
							</div>
						</div>
					</div>
				)}
			</div>
		</ChiTietWrapper>
	);
};
const ChiTietWrapper = styled.div`
	.info {
		p {
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 18px;
			line-height: 22px;

			color: #18202a;
		}
	}
	h2 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 36px;
		line-height: 40px;
		/* identical to box height, or 111% */

		display: flex;
		align-items: center;

		color: #000000;
	}
	.list-menu {
		.item-menu {
			font-family: "Inter";
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
			/* identical to box height, or 143% */

			color: #000000;
			&:hover {
				//background-color: #DE221A;
				color: #de221a;
			}
		}
		.active {
			color: #de221a;
			font-weight: 700;
		}
	}
.lien-he{
	.item-info {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 18px;

		/* Black */

		color: #18202a;
	}
}
	.chien-luoc{
		.item-info {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 28px;

			color: #18202A;
		}
	}
	.muc-1{
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 22px;
		/* identical to box height */


		/* Black */

		color: #18202A;
	}
	.muc-2{
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 20px;
		/* identical to box height, or 111% */


		/* Black */

		color: #18202A;
	}
`;
export default GioiThieu;
