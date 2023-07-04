import { useForm } from "react-hook-form";
import { rules } from "../../utils/rules";
import styled from "styled-components";
import Card from "../../components/Card";
import { dataTinTuc } from "../../data";
import MiniCard from "../../components/Event/components/MiniCard";
import BreadcrumbPage from "../../components/Breadcrumb";
import React, { useContext, useEffect, useRef, useState } from "react";
import Share from "../../components/Share";
import FormGopY from "../../components/FormGopY";
import { useRouter } from "next/router";
import { tr } from "date-fns/locale";
import axios from "axios";
import { ip } from "../../api/ip";
import moment from "moment";
import { renderImage } from "../../utils/util";
import ReactToPrint from "react-to-print";
import CardBanner from "../../components/CardBanner";
import {
  DataNewList,
  DataNewListV2,
  IDataChiTiet,
} from "../../utils/interface";
import { AuthContext } from "../../context/AuthContext";
import CardEvent from "../../components/Event/components/CardEvent";
// @ts-ignore
import Slider from "react-slick";
const ChiTiet = () => {
  // const {
  // 	register,
  // 	reset,
  // 	handleSubmit,
  // 	formState: { errors },
  // } = useForm();
  const [dataChiTiet, setDataChiTiet] = useState<IDataChiTiet>();
  const [dataDaDienRa, setDataDaDienRa] = useState<DataNewListV2[]>([]);
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [content, setContent] = useState<any>(null);
  const router = useRouter();
  let contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(2);
  const [total, setTotal] = useState<number>(0);
  const { langCode } = useContext(AuthContext);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          // centerMode: true,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleGetAllDaDienRa = async () => {
    try {
      const res = await axios.get(
        `${ip}/qlkh-tin-tucs?locale=${langCode}&populate=deep`,
        {
          params: {
            filters: {
              // thoiGianBatDau: {
              //   $lte: moment().endOf("day").toISOString(),
              //   // $lte: moment().endOf("day").toISOString(),
              // },
              thoiGianKetThuc: {
                $lt: moment().startOf("day").toISOString(),
                // $lte: moment().endOf("day").toISOString(),
              },
            },
            // pagination: {
            //   page: page,
            //   pageSize: limit,
            // },
          },
        }
      );
      setDataDaDienRa(res?.data?.data ?? []);
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async (id: string) => {
    try {
      const res = await axios.get(
        `${ip}/qlkh-tin-tucs/${id}?locale=${langCode}`
      );
      if (res) {
        setDataChiTiet(res?.data?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (router?.query?.id) {
      getData(router?.query?.id as string);
      handleGetAllDaDienRa();
      // getData();
      // getDataLienQuan();
    }
  }, [router, langCode]);
  useEffect(() => {
    return () => {
      clearTimeout(timmer);
    };
  }, []);
  return (
    <ChiTietWrapper>
      <div
        className="container mx-auto bg-white px-6 sm:px-0 pt-6 pb-8"
        ref={contentRef}
      >
        <div className="lg:flex lg:justify-between">
          <BreadcrumbPage
            data={[
              {
                title: "Trang chủ",
                path: "/",
              },
              {
                title: "Tin tức - Sự kiện chi tiết",
                path: "/#",
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
            <h2>{dataChiTiet?.attributes?.tieuDe} </h2>
            <div className="flex justify-center">
              {dataChiTiet?.attributes?.createdAt && (
                <p className="date lg:mr-[40px] mr-[20px]">
                  Ngày đăng:{" "}
                  {moment(dataChiTiet?.attributes?.createdAt).format(
                    "DD/MM/YYYY HH:mm"
                  )}
                </p>
              )}

              <p className="date">
                Tác giả: {dataChiTiet?.attributes?.tacGia ?? "Không có tác giả"}
              </p>
            </div>

            {/*<div className=' flex justify-end mt-[20px]'>*/}
            {/*	<div className="flex items-center flex-col">*/}
            {/*		<div className="name-author">Tên tác giả</div>*/}
            {/*		<div>{dataChiTiet?.pseudonym}</div>*/}
            {/*	</div>*/}
            {/*</div>*/}
          </div>
          {/*<FormGopY*/}
          {/*	onSubmit={(val, callback) => onSubmit(val, callback)}*/}
          {/*	sendSuccess={sendSuccess}*/}
          {/*	articleId={router?.query?.id as string}*/}
          {/*/>*/}
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: dataChiTiet?.attributes?.noiDung ?? "",
            }}
          ></div>

          {/*<div className='col-span-1 flex items-start'>*/}
          {/*	<Share ref={content}/>*/}
          {/*	<ReactToPrint*/}
          {/*	    trigger={() =>  <div className='share-item' >*/}
          {/*			<img src={"/images/icons/print-pri.svg"} alt={"image"} />*/}
          {/*		</div>}*/}
          {/*	    content={() => contentRef?.current}*/}
          {/*	/>*/}
          {/*</div>*/}
        </div>
      </div>
      {dataDaDienRa?.length > 0 && (
        <div className={"container mx-auto mt-2 mb-[50px] px-[20px] lg:px-0"}>
          <div className="title-event lg:mb-[40px] flex justify-between">
            <h2>Tin tức - Sự kiện đã diễn ra</h2>
            <div
              className="show-more flex items-center cursor-pointer"
              onClick={() => {
                router.push("/tin-tuc");
              }}
            >
              <div className="hidden lg:block mr-[24px] shrink-0 text-primary">Xem thêm</div>
              <img src="/images/icons/arrow-right-2.svg" alt="image" />
            </div>
          </div>
          <div
            className={
              "lg:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] hidden "
            }
          >
            {dataDaDienRa?.map((val, i) => {
              if (i < 3) {
                return (
                  <div
                    onClick={() => {
                      router.push(`/tin-tuc/${val?.id}`);
                    }}
                    key={i}
                  >
                    <CardBanner
                      imageUrl={renderImage(
                        val?.attributes?.hinhAnh?.data?.attributes?.url
                      )}
                      title={val?.attributes.tieuDe}
                      description={val?.attributes.moTa}
                      dateTime={val?.attributes.createdAt}
                      key={i}
                      type={"list"}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="lg:hidden block mt-[20px]">
            <Slider {...settings}>
              {dataDaDienRa?.map((value, i) => {
                return (
                  <div
                    className="pr-[16px]"
                    onClick={() => {
                      router.push(`/tin-tuc/${value?.id}`);
                    }}
                  >
                    <CardBanner
                      imageUrl={renderImage(
                        value?.attributes?.hinhAnh?.data?.attributes?.url
                      )}
                      title={value?.attributes.tieuDe}
                      description={value?.attributes.moTa}
                      dateTime={value?.attributes.createdAt}
                      key={i}
                      type={"list"}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      )}
    </ChiTietWrapper>
  );
};
const ChiTietWrapper = styled.div`
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
export default ChiTiet;
