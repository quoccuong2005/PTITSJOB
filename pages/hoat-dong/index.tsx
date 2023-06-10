import styled from "styled-components";
import Title from "../../components/Title";
import React, { useEffect, useRef, useState } from "react";
import { DataDeTai, GioiThieu } from "../../utils/interface";
import { useRouter } from "next/router";
import axios from "axios";
import { ip } from "../../api/ip";
import { dataDeTai, dataNghienCuu } from "../../data";
import CardNghienCuu from "../../components/CardNghienCuu";
import CardDeTai from "../../components/CardDeTai";
import { Controller, useForm } from "react-hook-form";
import DropdownFake from "../../components/Dropdown";
import DatePickerFake from "../../components/DatePicker";
import moment from "moment/moment";
import { rules } from "../../utils/rules";
import { renderImage } from "../../utils/util";
import { ETYPEKHOAHOC } from "../../data/enum";
import { el } from "date-fns/locale";

const HoatDong = () => {
  const [dataSelectDeTai, setDataSelectDeTai] = useState<string>("Tất cả");
  const [dataYear, setDateYear] = useState<string>("2023");
  const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
  const [dataGioiThieu, setDataGioiThieu] = useState<DataDeTai[]>([]);
  const [condition, setCondition] = useState<any>();
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const [type, setType] = useState<string>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const getData = async (type: string) => {
    try {
      const res = await axios.get(`${ip}/khoa-hoc-cong-nghe/all?kieu=${type}`, {
        params: condition,
      });
      if (res) {
        console.log("resss", res);
        setDataGioiThieu(res?.data ?? []);
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
  }, [router, condition]);

  const onSubmit = (data: any) => {
    console.log("data", data);
    if (data && data?.keyword !== "" && data?.keyword) {
      setCondition(
        // JSON.stringify({
        //   tieuDe: { $ne: data?.keyword },
        // })
        {
          ...condition,
          tieuDeStr: data?.keyword,
        }
      );
    } else {
      delete condition?.tieuDeStr;
      setCondition({ ...condition });
    }
    // getData({
    // 	keyword: data?.keyword,
    // 	type: data?.type,
    // 	startDate: moment(data?.startDate).toISOString(),
    // 	endDate: moment(data?.endDate).toISOString(),
    // });
    // router.push(
    //   `/tim-kiem?keyword=${data?.keyword}${
    //     data?.type ? `&type=${data?.type}` : ""
    //   }${
    //     data?.dateStart
    //       ? `&startDate=${moment(data?.dateStart).toISOString()}`
    //       : ""
    //   }${
    //     data?.endDdateEndate
    //       ? `&endDate=${moment(data?.dateEnd).toISOString()}`
    //       : ""
    //   }`
    // );
  };
  const optionCB = [
    { value: "Tất cả", label: "Tất cả" },
    { value: "Trong nước", label: "Trong nước" },
    { value: "Quốc tế", label: "Quốc tế" },
    { value: "Hội nghị hội thảo", label: "Hội nghị hội thảo" },
    { value: "ISI/Scopus", label: "ISI/Scopus" },
  ];
  const option = [
    { value: "Tất cả", label: "Tất cả" },
    { value: "Cấp nhà nước", label: "Cấp nhà nước" },
    { value: "Cấp bộ", label: "Cấp bộ" },
    { value: "Cấp học viện", label: "Cấp học viện" },
  ];
  const optionYear = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
  ];
  const renderDeTaiName = (type: string): string => {
    switch (type) {
      case ETYPEKHOAHOC.DT:
        return "Đề tài/ dự án KH, CN & ĐMST";
      case ETYPEKHOAHOC.CB:
        return "CÔNG BỐ KHOA HỌC";
      case ETYPEKHOAHOC.SP:
        return "Sản phẩm KHCN tiêu biểu";
      default:
        return "";
    }
  };
  return (
    <HoatDongWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px]">
        <div className="mb-[40px]">
          <Title title={renderDeTaiName(type ?? "")} uppercase={true} />
          <div className="flex justify-end">
            <div className="dropdown mr-[24px]">
              <DropdownFake
                option={type === ETYPEKHOAHOC.CB ? optionCB : option}
                onChange={(val) => {
                  console.log("val", val);
                  setDataSelectDeTai(val?.value);
                  if (type === ETYPEKHOAHOC.CB) {
                    if (val?.value === "Tất cả") {
                      console.log("cc", condition);
                      delete condition?.phamVi;
                      setCondition({ ...condition });
                    } else {
                      setCondition({
                        ...condition,
                        phamVi: val?.value,
                      });
                    }
                  } else {
                    if (val?.value === "Tất cả") {
                      console.log("cc", condition);
                      delete condition?.capDo;
                      setCondition({ ...condition });
                    } else {
                      setCondition({
                        ...condition,
                        capDo: val?.value,
                      });
                    }
                  }
                }}
                value={dataSelectDeTai}
                placeholder={"Đề tài cấp"}
              />
            </div>
            <div className="dropdown mr-[24px]">
              <DropdownFake
                option={optionYear}
                onChange={(val) => {
                  console.log("val", val);
                }}
                value={dataYear}
                placeholder={"Năm"}
              />
            </div>
            <div className="">
              <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="search flex item-center h-full">
                  <div className="relative">
                    <input
                      placeholder={"Tìm kiếm"}
                      {...register("keyword", { ...rules.required })}
                    />
                    {/*<div className='icon absolute top-[9.5px] left-[14.5px]'>*/}
                    {/*	<img src={"/images/icons/search.svg"} alt={"image"} />*/}
                    {/*</div>*/}
                  </div>
                  <button type="submit">
                    <img src={"/images/icons/search-pri.svg"} alt={"image"} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {type === ETYPEKHOAHOC.DT && (
          <>
            <div className="grid grid-cols-2 gap-[30px]">
              {dataGioiThieu?.map((value, index) => {
                return (
                  <div
                    onClick={() => {
                      router.push(`/hoat-dong/${value?.id}`);
                    }}
                    key={index}
                  >
                    <CardDeTai
                      data={{
                        imageUrl: renderImage(value.imageUrl),
                        content: value?.tieuDe,
                        dateTime: value?.createdAt,
                        type: value?.capDo,
                        description: value?.moTa,
                      }}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
        {type === ETYPEKHOAHOC.CB && (
          <>
            <div className="grid grid-cols-2 gap-[30px]">
              {dataGioiThieu?.map((value, index) => {
                return (
                  <div
                    onClick={() => {
                      router.push(`/hoat-dong/${value?.id}`);
                    }}
                    key={index}
                  >
                    <CardDeTai
                      data={{
                        imageUrl: renderImage(value.imageUrl),
                        content: value?.tieuDe,
                        dateTime: value?.createdAt,
                        type: value?.phamVi,
                        description: value?.moTa,
                      }}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
        {type === ETYPEKHOAHOC.SP && (
          <>
            <div className="grid grid-cols-2 gap-[30px]">
              {dataGioiThieu?.map((value, index) => {
                return (
                  <div
                    onClick={() => {
                      router.push(`/hoat-dong/${value?.id}`);
                    }}
                    key={index}
                  >
                    <CardDeTai
                      data={{
                        imageUrl: renderImage(value.imageUrl),
                        content: value?.tieuDe,
                        dateTime: value?.createdAt,
                        type: value?.kieu,
                        description: value?.moTa,
                      }}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </HoatDongWrapper>
  );
};
const HoatDongWrapper = styled.div`
  .search {
    input {
      height: 100%;
      padding-left: 12px;
      background: #f1f3f5;
      border-radius: 4px 0 0 4px;
      &:focus {
        outline: none;
      }
    }
    img {
      width: 20px;
      height: 20px;
    }
    button {
      padding: 4px 12px;
      background: #f1f3f5;
      border-radius: 0px 4px 4px 0px;
      font-family: "Inter";
      font-style: normal;
      line-height: 20px;

      display: flex;
      align-items: center;

      color: #ffffff;
    }
  }
`;
export default HoatDong;
