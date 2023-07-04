import styled from "styled-components";
import Title from "../../components/Title";
import React, {useContext, useEffect, useRef, useState} from "react";
import { DataDonVi, GioiThieu } from "../../utils/interface";
import { useRouter } from "next/router";
import axios from "axios";
import { ip } from "../../api/ip";
import { dataDaoTao, dataDeTai, dataNghienCuu } from "../../data";
import CardNghienCuu from "../../components/CardNghienCuu";
import CardDeTai from "../../components/CardDeTai";
import CardEvent from "../../components/Event/components/CardEvent";
import { ETYPEDONVI } from "../../data/enum";
import { renderImage } from "../../utils/util";
import Pagination from "../../components/pagination";
import {AuthContext} from "../../context/AuthContext";

const DonViNghienCuu = () => {
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(4);
  const [total, setTotal] = useState<number>(0);
  const [dataGioiThieu, setDataGioiThieu] = useState<DataDonVi[]>([]);
  const router = useRouter();
  const {langCode}=useContext(AuthContext)
  const contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const [type, setType] = useState<string>();
  const [condition, setCondition] = useState<any>();
  const getData = async (type: string) => {
    try {
      const res = await axios.get(`${ip}/don-vi-nghien-cuus?locale=${langCode}&populate=deep`, {
        params: {
          filters: {
            kieu: {
              $eq: type,
            },
            ...condition,
          },
          sort: ['createdAt:desc'],
          pagination: {
            page: page,
            pageSize: limit,
          },
        },
      });
      if (res) {
        console.log("resss", res);
        setDataGioiThieu(res?.data?.data ?? []);
        // setDataChiTiet(res?.data?.[0]);
        setTotal(res?.data?.meta?.pagination?.total ?? 0);
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
  }, [router, page,langCode]);
useEffect(()=>{

    setPage(1)

},[type])
  return (
    <DonViNghienCuuWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px] px-[20px] xl:px-0">
        {type === ETYPEDONVI.VIEN_NGHIEN_CUU && (
          <>
            <Title title={"VIỆN NGHIÊN CỨU"} uppercase={true} />

              {dataGioiThieu?.length>0?<>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
                {dataGioiThieu?.map((val, i) => {
                  return (
                    <CardEvent
                      data={{
                        imageUrl: renderImage(val?.attributes?.hinhAnh?.data?.attributes?.url),
                        content: val?.attributes?.tieuDe,
                        description: val?.attributes?.moTa ?? "",
                        // dateTime: val.createdAt,
                        link: val?.attributes?.duongDan??'',
                      }}
                      category={"vien"}
                      key={i}
                    />
                  );
                })}  </div></>:<><div className="w-full h-full justify-center items-center flex flex-col">
                <img
                  className="mb-[16px]"
                  src="/images/default/no_data.png"
                  alt="image"
                />
                <p className="text-secondary text-sm">Không có dữ liệu</p>
              </div></>}


          </>
        )}
        {type === ETYPEDONVI.PHONG_THI_NGHIEM && (
          <>
            <Title title={"PHÒNG THÍ NGHIỆM NGHIÊN CỨU"} uppercase={true} />

              {dataGioiThieu?.length>0?<>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                {dataGioiThieu?.map((value, index) => {
                  return (
                    <CardDeTai
                      data={{
                        imageUrl: renderImage(value?.attributes?.hinhAnh?.data?.attributes?.url),
                        content: value?.attributes.tieuDe,
                        // dateTime: value.createdAt,
                        description: value?.attributes.moTa ?? "",
                        link: value?.attributes?.duongDan??'',
                      }}
                      key={index}
                    />
                  );
                })} </div></>:<><div className="w-full h-full justify-center items-center flex flex-col">
                <img
                  className="mb-[16px]"
                  src="/images/default/no_data.png"
                  alt="image"
                />
                <p className="text-secondary text-sm">Không có dữ liệu</p>
              </div></>}


          </>
        )}
      </div>
      <div className="show-more flex items-center justify-center md:mt-[16px] cursor-pointer">
        <Pagination
          page={page}
          limit={limit}
          total={total}
          handleChangePage={(page) => {
            console.log("page", page);
            setPage(page);
          }}
        />
      </div>
    </DonViNghienCuuWrapper>
  );
};
const DonViNghienCuuWrapper = styled.div``;
export default DonViNghienCuu;
