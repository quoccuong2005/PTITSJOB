import { useRouter } from "next/router";
import { ETYPEKHOAHOC } from "../../data/enum";
import axios from "axios";
import { ip } from "../../api/ip";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataDeTaiV2 } from "../../utils/interface";
import Title from "../../components/Title";
import DropdownFake from "../../components/Dropdown";
import CardDeTai from "../../components/CardDeTai";
import { renderImage } from "../../utils/util";
import Pagination from "../../components/pagination";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const HoatDongDeTai = () => {
  const router = useRouter();

  const [condition, setCondition] = useState<any>();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);
  const [total, setTotal] = useState<number>(0);
  const { langCode } = useContext(AuthContext);
  const [dataGioiThieu, setDataGioiThieu] = useState<DataDeTaiV2[]>([]);
  const [dataYear, setDateYear] = useState<string>("Tất cả");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setPage(1);
    if (data && data?.keyword !== "" && data?.keyword) {
      setCondition(
        // JSON.stringify({
        //   tieuDe: { $ne: data?.keyword },
        // })
        {
          ...condition,
          tieuDe: { $containsi: data?.keyword },
        }
      );
    } else {
      delete condition?.tieuDe;
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

  const getData = async (type: string) => {
    try {
      // const res = await axios.get(`${ip}/khoa-hoc-cong-nghe/all?kieu=${type}`, {
      //   params: {
      //     ...condition,
      //     page:page,
      //     limit:limit,
      //   },
      // });
      if (type) {
        let params = {};
        params = {
          filters: {
            kieu: {
              $eq: "Đề tài",
            },
            capDo: {
              $eq: router?.query?.type,
            },
            ...condition,
          },
          pagination: {
            page: page,
            pageSize: limit,
          },
        };

        const res = await axios.get(
          `${ip}/hoat-dong-khoa-hocs?locale=${langCode}&populate=hinhAnh`,
          {
            params: { ...params },
          }
        );
        if (res) {
          setDataGioiThieu(res?.data?.data ?? []);
          // setDataChiTiet(res?.data?.[0]);
          setTotal(res?.data?.meta?.pagination?.total ?? 0);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const optionYear = [
    { value: "Tất cả", label: "Tất cả" },
    { value: "Năm 2035", label: "Năm 2035" },
    { value: "Năm 2034", label: "Năm 2034" },
    { value: "Năm 2033", label: "Năm 2033" },
    { value: "Năm 2032", label: "Năm 2032" },
    { value: "Năm 2031", label: "Năm 2031" },
    { value: "Năm 2030", label: "Năm 2030" },
    { value: "Năm 2029", label: "Năm 2029" },
    { value: "Năm 2028", label: "Năm 2028" },
    { value: "Năm 2027", label: "Năm 2027" },
    { value: "Năm 2026", label: "Năm 2026" },
    { value: "Năm 2025", label: "Năm 2025" },
    { value: "Năm 2024", label: "Năm 2024" },
    { value: "Năm 2023", label: "Năm 2023" },
    { value: "Năm 2022", label: "Năm 2022" },
    { value: "Năm 2021", label: "Năm 2021" },
    { value: "Năm 2020", label: "Năm 2020" },
    { value: "Năm 2019", label: "Năm 2019" },
  ];

  useEffect(() => {
    if (router?.query) {
      getData(router?.query?.type as string);
    }
  }, [router, condition, page, langCode]);

  return (
    <>
      <HoatDongWrapper>
        <div className="container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px] px-[20px] xl:px-0">
          <div className="mb-[40px]">
            <Title title={"Đề tài/ dự án KH, CN & ĐMST"} uppercase={true} />
            <div className="lg:flex lg:justify-end  lg:flex-row grid sm:grid-cols-3 grid-cols-1 gap-[16px]">
              <div className="dropdown  sm:mb-0 ">
                <DropdownFake
                  option={optionYear}
                  onChange={(val) => {
                    setPage(1);
                    if (val?.value === "Tất cả") {
                      delete condition?.ngayDangTai;
                      delete condition?.namXuatBan;
                      setCondition({ ...condition });
                    } else {
                      setCondition({
                        ...condition,
                        // ngayDangTai: {
                        //   $gte: moment()
                        //     .set("years", +val?.value)
                        //     .startOf("years")
                        //     .toISOString(),
                        //   $lte: moment()
                        //     .set("years", +val?.value)
                        //     .endOf("years")
                        //     .toISOString(),
                        // },
                        namXuatBan: {
                          $eq: val?.value,
                        },
                      });
                    }
                  }}
                  value={dataYear}
                  placeholder={"Năm"}
                />
              </div>
              <div className="">
                <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
                  <div className="search flex item-center lg:h-full h-[36px]">
                    <div className="relative w-full">
                      <input
                        className="w-full"
                        placeholder={"Tìm kiếm"}
                        {...register("keyword")}
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

          {dataGioiThieu?.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-1 grid-cols-1 gap-[30px]">
                {dataGioiThieu?.map((value, index) => {
                  return (
                    <div
                      onClick={() => {
                        router.push(
                          `/hoat-dong/${value?.id}?type=${ETYPEKHOAHOC.DT}`
                        );
                      }}
                      key={index}
                    >
                      <CardDeTai
                        data={{
                          imageUrl: renderImage(
                            value?.attributes?.hinhAnh?.data?.attributes?.url
                          ),
                          content: value?.attributes?.tieuDe,
                          dateTime: value?.attributes?.ngayDangTai,
                          type: value?.attributes?.capDo,
                          description: value?.attributes?.moTa,
                        }}
                        key={index}
                        vertical
                      />
                    </div>
                  );
                })}{" "}
              </div>
            </>
          ) : (
            <>
              <div className="w-full h-full justify-center items-center flex flex-col">
                <img
                  className="mb-[16px]"
                  src="/images/default/no_data.png"
                  alt="image"
                />
                <p className="text-secondary text-sm">Không có dữ liệu</p>
              </div>
            </>
          )}
        </div>

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
      </HoatDongWrapper>
    </>
  );
};

const HoatDongWrapper = styled.div`
  .search {
    input {
      height: 100%;
      padding-left: 20px;
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
        //background-color: #003d98;
        color: #de221a;
      }
    }
    .active {
      color: #de221a;
      font-weight: 700;
    }
  }
`;
export default HoatDongDeTai;
