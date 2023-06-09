import styled from "styled-components";
import {useRouter} from "next/router";
import {ip, ip3} from "../api/ip";
import {JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState} from "react";
import axios from "axios";
import {ReactI18NextChild} from "react-i18next";

const TuyenSinh = () => {
	const router = useRouter();
	const handleRedirect = (id: string) => {
		router.push(`/khoa-hoc/${id}`)
	}
	const handleRegister = () => {
		router.push('/dang-ky')
	}
	const [dataTuyenSinh, setDataTuyenSinh] = useState<any[]>([])
	const getData = async () => {
		try {
			const res = await axios.post(`${ip3}/gwdevv5/daotao/v5/ChuongTrinhDaoTao/GetData/Custom`,
				{
					"filters": [],
					"sorts": [],
					"pageInfo": {
						"page": 1,
						"pageSize": 10
					}
				})
			if (res) {
				console.log('res', res)
				setDataTuyenSinh(res?.data?.data)
			}

		} catch (e) {
			console.log(e)
		}
	}
	useEffect(() => {
		getData();
	}, [])
	return (
		<TuyenSinhWrapper>
			<div className='container bg-white mx-auto px-[24px] pt-[32px] mb-[8px] pb-[48px]'>
				<div className="grid grid-flow-row-dense  lg:grid-cols-4">
					<div className="col-span-3">
						<h2 className="wow fadeInUp">CÁC CHƯƠNG TRÌNH ĐÀO TẠO, BỒI DƯỠNG</h2>
						<div className='data-view mb-[32px] wow fadeInUp'>
							{/*<p className='title mb-[16px]'>1. Chương trình Đào tạo bồi dưỡng theo tiêu chuẩn chức danh*/}
							{/*	nghề nghiệp</p>*/}
							{/*<p className='content mb-[16px]'>*/}
							{/*	Đối tượng tham dự: Viên chức cần hoàn thiện các điều kiện về tiêu chuẩn để giữ chức danh*/}
							{/*	biên tập viên hạng*/}
							{/*	II; Viên chức đang giữ chức danh biên tập viên hạng III (hoặc tương đương) và chuẩn bị*/}
							{/*	thi thăng hạng lên*/}
							{/*	biên tập viên hạng II*/}
							{/*</p>*/}
							<ul className="list-disc list-outside">
								{dataTuyenSinh?.filter((item)=>{
									return item?.khoaDaoTaos?.length>0
								})?.map((val, i) => {
									return (
										<li key={i}>{val?.ten}

											<ul>
												{val?.khoaDaoTaos?.map((value: {
													id: string;
													ten: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | Iterable<ReactI18NextChild> | null | undefined;
												}, index: Key | null | undefined)=>{
												return(
													<li className="link" onClick={()=>handleRedirect(value?.id)} key={index}>{value?.ten}</li>
												)
											})}
										</ul></li>
									)
								})}
								{/*<li onClick={handleRedirect}>Bồi dưỡng chức danh biên tập viên hạng II</li>*/}
								{/*<li onClick={handleRedirect}>Bồi dưỡng chức danh biên tập viên hạng III</li>*/}
								{/*<li onClick={handleRedirect}>Bồi dưỡng chức danh biên tập viên hạng I</li>*/}
							</ul>
						</div>
						{/*<div className='data-view wow fadeInUp'>*/}
						{/*	<p className='title mb-[16px]'>2. Chương trình Bồi dưỡng năng lực, kỹ năng lãnh đạo quản lý</p>*/}
						{/*	<p className='content mb-[16px]'>*/}
						{/*		Đối tượng tham dự: Lãnh đạo cấp phòng và tương đương, Cán bộ quy hoạch lãnh đạo cấp phòng và tương đương*/}
						{/*	</p>*/}
						{/*	<ul className="list-disc list-outside">*/}
						{/*		<li onClick={handleRedirect}>Bồi dưỡng cho lãnh đạo cấp phòng; lĩnh vực Nội chính, Tài chính Kế toán, Văn hóa – Xã hội</li>*/}
						{/*		<li onClick={handleRedirect}> Bồi dưỡng nâng cao kiến thức quản lý Nhà nước về báo chí</li>*/}
						{/*	</ul>*/}
						{/*</div>*/}
					</div>
				</div>
				{/*<button className="register bg-primary" onClick={handleRegister}>*/}
				{/*	Đăng ký học viên*/}
				{/*</button>*/}
			</div>
		</TuyenSinhWrapper>
	);
};
const TuyenSinhWrapper = styled.div`
	h2{
		margin-bottom: 32px;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 28px;
		line-height: 32px;
		/* identical to box height, or 114% */

		display: flex;
		align-items: center;

		/* Gray/Gray-9 */

		color: #212529;
	}
	.data-view {
		.title {
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 20px;
			line-height: 32px;
			/* identical to box height, or 160% */

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
			line-height: 24px;
			/* or 150% */

			display: flex;
			align-items: center;

			/* Gray/Gray-9 */

			color: #212529;
		}
		ul {
			margin-left: 24px;
			li {
				margin-bottom: 16px;
				cursor: pointer;
				font-family: "Inter";
				font-style: normal;
				font-weight: 600;
				font-size: 24px;
				line-height: 32px;
				//text-decoration-line: underline;
				color: #000000;
			}
			.link{
				cursor: pointer;
				margin-bottom: 16px;
				cursor: pointer;
				font-family: "Inter";
				font-style: normal;
				font-weight: 600;
				font-size: 18px;
				line-height: 32px;
				
				color: #228be6;
				&:hover{
					text-decoration-line: underline;
				}
			}
		}
	}
	.register{
		padding: 12px 64px;
		//border-radius: 8px;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		/* identical to box height, or 150% */

		display: flex;
		align-items: center;
		justify-content: center;

		/* White */

		color: #FFFFFF;
	}
`;
export default TuyenSinh;
