import styled from "styled-components";
import Title from "../Title";
import { dataCTDaoTao, dataDaoTao } from "../../data";
import CardBanner from "../CardBanner";
import CardEvent from "../Event/components/CardEvent";
import Button from "../Button";
import Card from "../Card";
import { useEffect, useState } from "react";
import { IDataHome } from "../../utils/interface";
import axios from "axios";
import { ip, ip3 } from "../../api/ip";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";
import { ro } from "date-fns/locale";
// @ts-ignore
import Slider from "react-slick";
import CardHoatDong from "../CardHoatDong";
import { ETYPEKHOAHOC } from "../../data/enum";
const ChuongTrinhDaoTao = (props: { dataHome: IDataHome }) => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
  useEffect(() => {}, []);
  if (
    props?.dataHome?.hoatDongKhoaHoc?.qlkh_hoat_dong_kh_cn_and_dmsts?.data
      ?.length > 0
  ) {
    return (
      <ChuongTrinhDaoTaoWrapper>
        <div
          className="bg-[#FFFFFF] py-[50px] px-[20px] lg:px-0 bg-cover bg-no-repeat relative lg:min-h-[500px] h-[300px]"
          style={{
            backgroundImage: `url(${renderImage(
              props?.dataHome?.hoatDongKhoaHoc?.anhNen?.data?.attributes?.url
            )})`,
          }}
        >
          <div className="absolute top-0 left-0 bg-[#00000082] w-full h-full z-20">

          </div>
          <div className={"absolute top-[50px] left-0 h-full w-full z-50"}>
            <div className="container mx-auto z-50">
              <Title
                title={
                  props?.dataHome?.hoatDongKhoaHoc?.title ||
                  "HOẠT ĐỘNG KH, CN & ĐMST"
                }
                type={'default'}
                uppercase={true}
              />
              <div className="hidden lg:grid grid-cols-2 gap-[40px]">
                {props.dataHome?.hoatDongKhoaHoc?.chuDe?.map((val, i) => {
                  // if (i < 3) {
                  return (
                    <div
                      className="cursor-pointer"
                      key={i}
                      onClick={() => {
                        router.push(
                          `/hoat-dong/?type=${val?.kieu}&capDo=${
                            val?.kieu === ETYPEKHOAHOC.CB
                              ? val?.phamVi
                              : val?.capDo
                          }`
                        );
                      }}
                    >
                      <CardHoatDong
                        imageUrl={renderImage(
                          val?.hinhAnh?.data?.attributes?.url
                        )}
                        title={val?.tieuDe}
                        description={val?.moTa ?? ""}
                        // dateTime={val?.createdAt}
                        key={i}
                        type={"big"}
                      />
                      {/*<Card*/}
                      {/*  data={{*/}
                      {/*    imageUrl: renderImage(*/}
                      {/*      val?.attributes?.hinhAnh?.data?.attributes?.url*/}
                      {/*    ),*/}
                      {/*    content: val?.attributes?.tieuDe,*/}
                      {/*    description: val?.attributes?.moTa ?? "",*/}
                      {/*    dateTime: val?.attributes?.createdAt,*/}
                      {/*    link: ``,*/}
                      {/*  }}*/}
                      {/*/>*/}
                    </div>
                  );
                  // } else {
                  //   return null;
                  // }
                })}
              </div>
              <div className="lg:hidden grid grid-cols-1 gap-[40px]">
                <Slider {...settings}>
                  {props.dataHome?.hoatDongKhoaHoc?.chuDe?.map(
                    (val, i) => {
                      return (
                        <div
                          className="cursor-pointer sm:pr-[16px]"
                          key={i}
                          onClick={() => {
                            router.push(`/hoat-dong/${val?.id}`);
                          }}
                        >
                          <CardHoatDong
                            imageUrl={renderImage(
                              val?.hinhAnh?.data?.attributes?.url
                            )}
                            title={val?.tieuDe}
                            description={val?.moTa ?? ""}
                            // dateTime={val?.createdAt}
                            key={i}
                            type={"big"}
                          />
                        </div>
                      );
                    }
                  )}
                </Slider>
              </div>
              {/*{props.dataHome?.hoatDongKhoaHoc?.qlkh_hoat_dong_kh_cn_and_dmsts*/}
              {/*  ?.data?.length > 3 && (*/}
              {/*  <div className="flex justify-center md:mt-[40px] mt-[20px]">*/}
              {/*    <Button*/}
              {/*      type={"primary"}*/}
              {/*      classname="lg:w-[279px]"*/}
              {/*      onClick={() => {*/}
              {/*        router.push(`/hoat-dong?type=Đề tài`);*/}
              {/*      }}*/}
              {/*    >*/}
              {/*      {props?.dataHome?.tieuDeButton}*/}
              {/*    </Button>*/}
              {/*  </div>*/}
              {/*)}*/}
            </div>
          </div>

        </div>
      </ChuongTrinhDaoTaoWrapper>
    );
  } else {
    return (
      <ChuongTrinhDaoTaoWrapper>
        <div className="container mx-auto md:py-[50px] py-[20px]">
          <div>
            <Title title={"HOẠT ĐỘNG KH, CN & ĐMST"} uppercase={true} />
          </div>
          <div className="w-full h-full justify-center items-center flex flex-col">
            <img
              className="mb-[16px]"
              src="/images/default/no_data.png"
              alt="image"
            />
            <p className="text-secondary text-sm">Không có dữ liệu</p>
          </div>
        </div>
      </ChuongTrinhDaoTaoWrapper>
    );
  }
};

const ChuongTrinhDaoTaoWrapper = styled.div``;
export default ChuongTrinhDaoTao;
