import styled from "styled-components";
import BreadcrumbPage from "../../components/Breadcrumb";
import Share from "../../components/Share";
import ReactToPrint from "react-to-print";
import moment from "moment/moment";
import React, { useRef, useState } from "react";
import TableBase from "../../components/tableBase";
import {dataDanhMuc} from "../../data";

const ChiTietHoatDong = () => {
	let contentRef = useRef<HTMLDivElement>(null);
	const [content, setContent] = useState<any>(null);
	const columns = [
		{
			title: "STT",
			dataIndex: "index",
		},
		{
			title: "Tên đề tài",
			dataIndex: "tenDeTai",
		},
		{
			title: "Mã đề tài",
			dataIndex: "maDeTai",
		},
		{
			title: "Chủ nhiệm đề tài",
			dataIndex: "chuNhiem",
		},
		{
			title: "Thời gian thực hiện",
			dataIndex: "thoiGianThucHien",
		},
		{
			title: "Thời gian nghiệm thu",
			dataIndex: "thoiGianNghiemThu",
		},
	];
	return (
		<ChiTietHoatDongWrapper>
			<div className='container mx-auto bg-white px-6 pt-6 pb-8' ref={contentRef}>
				<div className='flex justify-between'>
					<BreadcrumbPage
						data={[
							{
								title: "Đề tài/ Dự án KHCN",
								path: "/hoat-dong?type=CB",
							},
							{
								title: "Cấp nhà nước",
								path: "/#",
							},
						]}
					/>
					<div className='share flex'>
						<Share ref={content} />
						<ReactToPrint
							trigger={() => (
								<div className='share-item'>
									<img src={"/images/icons/print-2.svg"} alt={"image"} />
								</div>
							)}
							content={() => contentRef?.current}
						/>
					</div>
				</div>
				<div className={" mt-14 "}>
					<div className={"detail mb-14 flex flex-col items-center border-b border-[#C3C7CC]"}>
						<h2>DANH MỤC ĐỀ TÀI CẤP NHÀ NƯỚC NĂM 2022</h2>
						<div className='flex justify-center'>
							<p className='date lg:mr-[40px] mr-[20px]'>Ngày đăng: {moment().format("DD/MM/YYYY HH:mm")}</p>
							<p className='date'>Tác giả: NVB</p>
						</div>
					</div>
				</div>
				<div>
					<p className='title'>
						Dưới đây là danh sách các đề tài cấp nhà nước cảu Học viện Bưu chính công nghệ bưu chính viễn thông năm
						2022.
					</p>
					<div className='show-more flex items-center cursor-pointer mt-[26px]'>
						<div className='mr-[24px] shrink-0'>Phụ lục đính kèm</div>
						<img src='/images/icons/arrow-right-2.svg' alt='image' />
					</div>
					<div className="mt-[26px]">
						<TableBase columns={columns} dataSource={dataDanhMuc} />
					</div>
				</div>
			</div>
		</ChiTietHoatDongWrapper>
	);
};
const ChiTietHoatDongWrapper = styled.div`
	.show-more {
		color: #de221a;
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
	}
	.detail {
		h2 {
			margin-bottom: 12px;
			font-family: "Inter";
			font-style: normal;
			font-weight: 700;
			font-size: 24px;
			line-height: 32px;
			display: flex;
			align-items: center;
			color: #212529;

			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 4;
			-webkit-box-orient: vertical;
		}
		.date {
			margin-bottom: 20px;
			font-family: "Inter";
			font-style: normal;
			font-weight: 400;
			font-size: 13px;
			line-height: 18px;
			/* identical to box height, or 138% */

			display: flex;
			align-items: center;

			/* Gray/Gray-6 */

			color: #868e96;
		}
	}
	.content {
		p {
			font-family: "Inter";
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
			color: #212529;
		}
	}
	.send-status {
		margin-top: 24px;
		background: #ebfbee;
		border-radius: 8px;
		padding: 12px 16px;
		max-width: 575px;
		span {
			font-family: "Inter";
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			line-height: 150%;
			color: #212529;
		}
	}
	.title-detail {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 32px;

		color: #212529;
	}
	.name-author {
		font-family: "Inter";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 28px;
		/* identical to box height, or 175% */

		display: flex;
		align-items: center;
		text-align: right;

		/* Gray/Gray-9 */

		color: #212529;
	}
	.share-item {
		cursor: pointer;
		margin-right: 16px;
		background: #f1f3f5;
		border-radius: 100px;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		//&:last-of-type {
		//	margin-right: 0;
		//}
	}
	.title-event {
		h2 {
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 29px;

			color: #de221a;
		}
	}
`;
export default ChiTietHoatDong;
