import { useForm } from "react-hook-form";

import styled from "styled-components";

import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import moment from "moment";
import ReactToPrint from "react-to-print";
import { ip } from "../api/ip";
import { GioiThieu, GioiThieuNC } from "../utils/interface";
import Title from "../components/Title";
import { da, tr } from "date-fns/locale";
import { dataNghienCuu } from "../data";
import CardNghienCuu from "../components/CardNghienCuu";
import { AuthContext } from "../context/AuthContext";
import NoData from "../components/NoData";

const GioiThieu = () => {
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
  const [dataGioiThieu, setDataGioiThieu] = useState<any>();
  const [dataGioiThieuNC, setDataGioiThieuNC] = useState<GioiThieuNC[]>([]);
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const [type, setType] = useState<string>();
  const { dataThongTin, langCode } = useContext(AuthContext);
  const getData = async (typeStr: string) => {
    try {
      if (typeStr === "NC") {
        const res = await axios.get(
          `${ip}/qlkh-dinh-huong-nghien-cuus?locale=${langCode}`
        );
        if (res) {
          console.log("resss", res);
          setDataGioiThieuNC(res?.data?.data);
          setDataChiTiet(res?.data?.data?.[0]);
        }
      }
      if (typeStr === "KH") {
        const res = await axios.get(
          `${ip}/chien-luoc-phat-trien?locale=${langCode}`
        );
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
  }, [router, langCode]);

  return (
    <ChiTietWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px] px-[20px] lg:px-0">
        {type === "KH" && (
          <>
            <Title
              title={"Chiến lược phát triển KH, CN & ĐMST"}
              uppercase={true}
            />
						{dataGioiThieu?.attributes?.htmlContent?<>
							<div
								dangerouslySetInnerHTML={{
									__html: dataGioiThieu?.attributes?.htmlContent,
								}}
							></div>
							</>:<><NoData/></>}

          </>
        )}
        {type === "NC" && (
          <>
            <Title title={"ĐỊNH HƯỚNG NGHIÊN CỨU"} uppercase={true} />
            {dataGioiThieuNC?.length > 0 ? (
              <>
                {dataGioiThieuNC?.map((val, i) => {
                  return (
                    <CardNghienCuu
                      data={{
                        no: val?.attributes?.so,
                        title: val?.attributes.tieuDe,
                        content: val?.attributes?.moTa,
                        link: `/dinh-huong-nghien-cuu/${val?.id}`,
                      }}
                      key={i}
                    />
                  );
                })}
              </>
            ) : (
              <>
                <NoData />
              </>
            )}
          </>
        )}
        {type === "LH" && (
          <div className="lien-he">
            <Title title={"THÔNG TIN LIÊN HỆ"} uppercase={true} />
            <div className="sm:flex sm:justify-between sm:items-center block">
              <div className="info mb-[40px] sm:mb-0">
                <p className="mb-[40px]">{dataThongTin?.tenPhongTiepNhan}</p>
                <div className="item-info flex mb-[20px] items-center">
                  <img
                    className="mr-[16px]"
                    src="/images/icons/user.svg"
                    alt={"icon"}
                  />
                  <div className="font-bold">{dataThongTin?.truongPhong}</div>
                </div>
                <div className="item-info flex mb-[20px] items-center">
                  <img
                    className="mr-[16px]"
                    src="/images/icons/phone.svg"
                    alt={"icon"}
                  />
                  <div>{dataThongTin?.soDienThoai}</div>
                </div>
                <div className="item-info flex mb-[20px] items-center">
                  <img
                    className="mr-[16px]"
                    src="/images/icons/mail.svg"
                    alt={"icon"}
                  />
                  <div>{dataThongTin?.email}</div>
                </div>
                <div className="item-info flex items-center ">
                  <img
                    className="mr-[16px]"
                    src="/images/icons/location.svg"
                    alt={"icon"}
                  />
                  <div>{dataThongTin?.coSo1}</div>
                </div>
              </div>
              <div className="sm:w-[600px] sm:h-[450px]">
                <iframe
                  src={dataThongTin?.googleMap}
                  width="100%"
                  height="100%"
                  // style='border:0;'
                  // allowFullScreen='fa'
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
  .lien-he {
    .item-info {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;

      /* Black */

      color: #18202a;
    }
  }
  .chien-luoc {
    .item-info {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;

      color: #18202a;
    }
  }
  .muc-1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    /* Black */

    color: #18202a;
  }
  .muc-2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height, or 111% */

    /* Black */

    color: #18202a;
  }
`;
export default GioiThieu;
