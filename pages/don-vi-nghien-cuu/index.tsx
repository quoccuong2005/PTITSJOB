import styled from "styled-components";
import Title from "../../components/Title";
import React, { useEffect, useRef, useState } from "react";
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

const DonViNghienCuu = () => {
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [total, setTotal] = useState<number>(0);
  const [dataGioiThieu, setDataGioiThieu] = useState<DataDonVi[]>([]);
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const [type, setType] = useState<string>();

  const getData = async (type: string) => {
    try {
      const res = await axios.get(`${ip}/don-vi/all?type=${type}`, {
        params: {
          page: page,
          limit: limit,
        },
      });
      if (res) {
        console.log("resss", res);
        setDataGioiThieu(res?.data?.data ?? []);
        // setDataChiTiet(res?.data?.[0]);
        setTotal(res?.data?.metadata?.total ?? 0);
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
  }, [router, page]);

  return (
    <DonViNghienCuuWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px]">
        {type === ETYPEDONVI.VIEN_NGHIEN_CUU && (
          <>
            <Title title={"VIỆN NGHIÊN CỨU"} uppercase={true} />

              {dataGioiThieu?.length>0?<>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
                {dataGioiThieu?.map((val, i) => {
                  return (
                    <CardEvent
                      data={{
                        imageUrl: renderImage(val?.imageUrl),
                        content: val?.tieuDe,
                        description: val?.moTa ?? "",
                        // dateTime: val.createdAt,
                        link: val?.duongDan,
                      }}
                      category={"sach"}
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
              <div className="grid grid-cols-2 gap-[30px]">
                {dataGioiThieu?.map((value, index) => {
                  return (
                    <CardDeTai
                      data={{
                        imageUrl: renderImage(value.imageUrl),
                        content: value.tieuDe,
                        // dateTime: value.createdAt,
                        description: value.moTa ?? "",
                        link: value?.duongDan,
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
