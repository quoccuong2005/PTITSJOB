import styled from "styled-components";
import Title from "../../components/Title";
import React, { useEffect, useRef, useState } from "react";
import {DataDonVi, GioiThieu} from "../../utils/interface";
import { useRouter } from "next/router";
import axios from "axios";
import { ip } from "../../api/ip";
import {dataDaoTao, dataDeTai, dataNghienCuu} from "../../data";
import CardNghienCuu from "../../components/CardNghienCuu";
import CardDeTai from "../../components/CardDeTai";
import CardEvent from "../../components/Event/components/CardEvent";
import {ETYPEDONVI} from "../../data/enum";
import {renderImage} from "../../utils/util";

const DonViNghienCuu = () => {
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
  const [dataGioiThieu, setDataGioiThieu] = useState<DataDonVi[]>([]);
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const [type, setType] = useState<string>();

  const getData = async (type:string) => {
    try {
      const res = await axios.get(`${ip}/don-vi/all?type=${type}`);
      if (res) {
        console.log("resss", res);
        setDataGioiThieu(res?.data);
        setDataChiTiet(res?.data?.[0]);
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
    <DonViNghienCuuWrapper>
      <div className='container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px]'>
        {type === ETYPEDONVI.VIEN_NGHIEN_CUU && (
          <>
            <Title title={"VIỆN NGHIÊN CỨU"} uppercase={true} />
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-[30px]'>
              {dataGioiThieu?.map((val, i) => {
                return (
                  <CardEvent
                    data={{
                      imageUrl: renderImage(val?.imageUrl),
                      content: val?.tieuDe,
                      description: val?.moTa??'',
                      dateTime: val.createdAt,
                      link: ``,
                    }}
                    key={i}
                  />
                );
              })}
            </div>
          </>
        )}
        {type === ETYPEDONVI.PHONG_THI_NGHIEM && (
          <>
            <Title title={"PHÒNG THÍ NGHIỆM NGHIÊN CỨU"} uppercase={true} />
            <div className="grid grid-cols-2 gap-[30px]">
              {dataGioiThieu?.map((value, index) => {
                return (
                  <CardDeTai
                    data={{
                      imageUrl: renderImage(value.imageUrl),
                      content: value.tieuDe,
                      dateTime: value.createdAt,
                      description:value.moTa??''
                    }}
                    key={index}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </DonViNghienCuuWrapper>
  );
};
const DonViNghienCuuWrapper = styled.div``;
export default DonViNghienCuu;
