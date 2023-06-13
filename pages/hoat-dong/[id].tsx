import styled from "styled-components";
import BreadcrumbPage from "../../components/Breadcrumb";
import Share from "../../components/Share";
import ReactToPrint from "react-to-print";
import moment from "moment/moment";
import React, {useEffect, useRef, useState} from "react";
import TableBase from "../../components/tableBase";
import { dataDanhMuc } from "../../data";
import { axios } from "../../api";
import { ip } from "../../api/ip";
import {useRouter} from "next/router";
import {DataDetailKhoaHoc} from "../../utils/interface";
import TableBaseV2 from "../../components/TableBaseV2";

const ChiTietHoatDong = () => {
	const router=useRouter();
  let contentRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<any>(null);
	const [dataDetail,setDataDetail]=useState<DataDetailKhoaHoc>()
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      width:'80px'
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
      dataIndex: "chuNhiemDeTai",
    },
    {
      title: "Thời gian thực hiện",
      dataIndex: "thoiGianThucHienBatDau",
      render:(val:any,record:any)=>{
        return(
          <>
            {moment(val).format("DD/MM/YYYY")} -  {moment(record?.thoiGianThucHienKetThuc).format("DD/MM/YYYY")}
          </>
        )
      }
    },
    {
      title: "Thời gian nghiệm thu",
      dataIndex: "thoiGianNghiemThu",
      render:(val:any,record:any)=>{
        return(
          <>
            {moment(val).format("DD/MM/YYYY")}
          </>
        )
      }
    },
  ];
  const getData = async (id: string) => {
    try {
      const res = await axios.get(`${ip}/khoa-hoc-cong-nghe/${id}`);
			if (res){
				setDataDetail(res?.data)
			}
    } catch (e) {
      console.log(e);
    }
  };
	useEffect(()=>{
		if (router){
			getData(router?.query?.id as string)
		}
	},[router])
  return (
    <ChiTietHoatDongWrapper>
      <div
        className="container mx-auto bg-white  pt-6 pb-8 px-[20px] lg:px-0"
        ref={contentRef}
      >
        <div className="lg:flex lg:justify-between ">
          <BreadcrumbPage
            data={[
              {
                title: "Trang chủ",
                path: "/",
              },
              {
                title: "HOẠT ĐỘNG KH, CN & ĐMST",
                path: "#",
              },
            ]}
          />
          <div className="share flex">
            <Share ref={content} />
            <ReactToPrint
              trigger={() => (
                <div className="share-item">
                  <img src={"/images/icons/print-2.svg"} alt={"image"} />
                </div>
              )}
              content={() => contentRef?.current}
            />
          </div>
        </div>
        <div className={" mt-14 "}>
          <div
            className={
              "detail mb-14 flex flex-col items-center border-b border-[#C3C7CC]"
            }
          >
            <h2>{dataDetail?.tieuDe}</h2>
            <div className="flex justify-center">
              <p className="date lg:mr-[40px] mr-[20px]">
                Ngày đăng: {moment().format("DD/MM/YYYY HH:mm")}
              </p>
              <p className="date">Tác giả: {dataDetail?.tacGia??'Không có tác giả'}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="title" dangerouslySetInnerHTML={{__html:dataDetail?.noiDung??''}}>

          </div>
          {/*<div className="show-more flex items-center cursor-pointer mt-[26px]">*/}
          {/*  <div className="mr-[24px] shrink-0">Phụ lục đính kèm</div>*/}
          {/*  <img src="/images/icons/arrow-right-2.svg" alt="image" />*/}
          {/*</div>*/}
          <div className="mt-[26px]">
            <TableBaseV2 columns={columns} dataSource={dataDetail?.chiTiet?.map((val,i)=>{
							return{
								...val,
								index:i+1
							}
						})} />
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
