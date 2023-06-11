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

const ChuongTrinhDaoTao = (props: { dataHome: IDataHome }) => {
  const router = useRouter();

  useEffect(() => {}, []);
  return (
    <ChuongTrinhDaoTaoWrapper>
      <div className="bg-[#FFFFFF] py-[50px] px-[20px] lg:px-0">
        <div className="container mx-auto ">
          <Title title={"HOẠT ĐỘNG KH, CN & ĐMST"} uppercase={true} />
          <div className="hidden lg:grid grid-cols-1 gap-[40px]">
            {props.dataHome?.hoat_dong_khoa_hocs?.data?.map((val, i) => {
              if (i < 3) {
                return (
                  <div
                    className="cursor-pointer"
                    key={i}
                    onClick={() => {
                      router.push(`/hoat-dong/${val?.id}`);
                    }}
                  >
                    <Card
                      data={{
                        imageUrl: renderImage(
                          val?.attributes?.hinhAnh?.data?.attributes?.url
                        ),
                        content: val?.attributes?.tieuDe,
                        description: val?.attributes?.moTa ?? "",
                        dateTime: val?.attributes?.createdAt,
                        link: ``,
                      }}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="lg:hidden grid grid-cols-1 gap-[40px]">
            {props.dataHome?.hoat_dong_khoa_hocs?.data?.map((val, i) => {
              return (
                <div
                  className="cursor-pointer"
                  key={i}
                  onClick={() => {
                    router.push(`/hoat-dong/${val?.id}`);
                  }}
                >
                  <CardEvent
                    data={{
                      imageUrl: renderImage(
                        val?.attributes?.hinhAnh?.data?.attributes?.url
                      ),
                      content: val?.attributes?.tieuDe,
                      description: val?.attributes?.moTa ?? "",
                      dateTime: val?.attributes?.createdAt,
                      link: ``,
                    }}
                    type={"small"}
                  />
                </div>
              );
            })}
          </div>
          {props.dataHome?.hoat_dong_khoa_hocs?.data?.length > 3 && (
            <div className="flex justify-center md:mt-[40px] mt-[20px]">
              <Button
                type={"primary"}
                classname="lg:w-[279px]"
                onClick={() => {
                  router.push(`/hoat-dong?type=DT`);
                }}
              >
                Xem thêm
              </Button>
            </div>
          )}
        </div>
      </div>
    </ChuongTrinhDaoTaoWrapper>
  );
};

const ChuongTrinhDaoTaoWrapper = styled.div``;
export default ChuongTrinhDaoTao;
