import styled from "styled-components";
import BreadcrumbPage from "../../components/Breadcrumb";
import Share from "../../components/Share";
import ReactToPrint from "react-to-print";
import moment from "moment/moment";
import React, { useContext, useEffect, useRef, useState } from "react";
import TableBase from "../../components/tableBase";
import { dataDanhMuc } from "../../data";
import { axios } from "../../api";
import { ip } from "../../api/ip";
import { useRouter } from "next/router";
import {DataDetailKhoaHoc, DataDetailTableKhoaHoc} from "../../utils/interface";
import TableBaseV2 from "../../components/TableBaseV2";
import { ETYPEKHOAHOC } from "../../data/enum";
import { AuthContext } from "../../context/AuthContext";
import { renderImage } from "../../utils/util";
import Pagination from "../../components/pagination";

const ChiTietHoatDong = () => {
  const router = useRouter();
  let contentRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<any>(null);
  const [type, setType] = useState<string>();
  const [dataDetail, setDataDetail] = useState<DataDetailKhoaHoc>();
  const [dataDetailTable, setDataDetailTable] = useState<DataDetailTableKhoaHoc[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);
  const [total, setTotal] = useState<number>(0);
  const { langCode } = useContext(AuthContext);
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      align:'center',
      width: "80px",
    },
    {
      title: "Tên đề tài",
      dataIndex: ['attributes',"tenDeTai"],
      width: "300px",
      // align:'center',
      render: (val: any) => {
        return <div className="w-[300px]">{val}</div>;
      },
    },
    {
      title: "Mã đề tài",
      dataIndex: ['attributes',"maDeTai"],
      align:'center',
    },
    {
      title: "Chủ nhiệm đề tài",
      dataIndex: ['attributes',"chuNhiemDeTai"],
      align:'center',
    },
    {
      title: "Thời gian thực hiện",
      align:'center',
      dataIndex: ['attributes',"thoiGianThucHienBatDau"],
      render: (val: any, record: any) => {
        return (
          <>
            {moment(val).format("DD/MM/YYYY")} -{" "}
            {moment(record?.thoiGianThucHienKetThuc).format("DD/MM/YYYY")}
          </>
        );
      },
    },
    {
      title: "Thời gian nghiệm thu",
      align:'center',
      dataIndex: ['attributes',"thoiGianNghiemThu"],
      render: (val: any, record: any) => {
        return <>{moment(val).format("DD/MM/YYYY")}</>;
      },
    },
  ];
  const columnsCongBo = [
    {
      title: "STT",
      dataIndex: "index",
      align:'center',
      width: "80px",
    },
    {
      title: "Tên bài báo",
      align:'center',
      dataIndex: ['attributes',"tenDeTai"],
    },
    {
      title: "Tên tác giả",
      align:'center',
      dataIndex: ['attributes',"chuNhiemDeTai"],
    },
    {
      title: "Tạp chí/Hội nghị hội thảo",
      align:'center',
      dataIndex: ['attributes',"tapChiHoiNghi"],
    },
  ];
  const getData = async (id: string) => {
    try {
      const res = await axios.get(
        `${ip}/khoa-hoc-cong-nghe/${id}?locale=${langCode}`
      );
      if (res) {
        setDataDetail(res?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getDataDetail = async (id: string) => {
    try {
      const res = await axios.get(
        `${ip}/qlkh-chi-tiet-hoat-dong-kh-cn-and-dmsts?locale=${langCode}&populate=hinhAnh`,
        {
          params: {
            filters: {
              qlkh_hoat_dong_kh_cn_and_dmst: {
                id: { $eq: id },
              },
            },
            pagination: {
              page: page,
              pageSize: limit,
            },
          },
        }
      );
      if (res){
        setDataDetailTable(res?.data?.data??[])
        setTotal(res?.data?.meta?.pagination?.total ?? 0);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (router) {
      getData(router?.query?.id as string);
      setType(router?.query?.type as string);
    }
  }, [router, langCode]);
  useEffect(()=>{
    if (router) {

      getDataDetail(router?.query?.id as string);
    }
  },[page,limit])
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
            {/* <div className="flex justify-center">
              <p className="date lg:mr-[40px] mr-[20px]">
                Ngày đăng: {moment().format("DD/MM/YYYY HH:mm")}
              </p>
              <p className="date">
                Tác giả: {dataDetail?.tacGia ?? "Không có tác giả"}
              </p>
            </div> */}
          </div>
        </div>
        <div>
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: dataDetail?.noiDung ?? "" }}
          ></div>
          {/*{dataDetail?.taiLieuDinhKem && (*/}
          {/*  <a*/}
          {/*    href={renderImage(dataDetail?.taiLieuDinhKem?.url)}*/}
          {/*    target={"_blank"}*/}
          {/*    className="show-more flex items-center cursor-pointer mt-[26px]"*/}
          {/*  >*/}
          {/*    <div className="mr-[24px] shrink-0">Phụ lục đính kèm</div>*/}
          {/*    <img src="/images/icons/arrow-right-2.svg" alt="image" />*/}
          {/*  </a>*/}
          {/*)}*/}

          <div className="mt-[26px]">
            <TableBase
              //@ts-ignore
              columns={type !== ETYPEKHOAHOC.CB ? columns : columnsCongBo}
              dataSource={dataDetailTable?.map((val, i) => {
                return {
                  ...val,
                  index: i + 1 + (page - 1) * limit,
                };
              })}
            />
            <div className="show-more flex items-center justify-center md:mt-[16px] cursor-pointer mb-[50px]">
              <Pagination
                page={page}
                limit={limit}
                total={total}
                handleChangePage={(page) => {
                  setPage(page);
                }}
              />
            </div>
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
