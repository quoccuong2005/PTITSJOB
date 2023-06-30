import { Breadcrumb } from "flowbite-react";
import { dataTinTuc, dataTinTucNoiBat } from "../../data";
import MiniCard from "../../components/Event/components/MiniCard";
import styled from "styled-components";
import BreadcrumbPage from "../../components/Breadcrumb";
import axios from "axios";
import { ip } from "../../api/ip";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";
import { Controller, useForm } from "react-hook-form";
import DropdownFake from "../../components/Dropdown";
import DatePickerFake from "../../components/DatePicker";
import moment from "moment/moment";
import { da, el } from "date-fns/locale";
import { DataNew, DataNewList, DataNewListV2 } from "../../utils/interface";
import Pagination from "../../components/pagination";
import CardBanner from "../../components/CardBanner";
import CardEvent from "../../components/CardEvent";
import { AuthContext } from "../../context/AuthContext";
import SapToi from "../../components/News/components/sapToi";
import DaDienRa from "../../components/News/components/daDienRa";
import DangDienRa from "../../components/News/components/dangDienRa";

const Tintuc = () => {
  const router = useRouter();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [total, setTotal] = useState<number>(0);
  const [type, setType] = useState<"news" | "event">("news");
  const [dataNew, setDataNew] = useState<DataNewListV2[]>([]);
  const [condition, setCondition] = useState<any>();
  const { langCode } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  // const handleGetAll = async () => {
  //   try {
  //     const res = await axios.get(`${ip}/tin-tuc-su-kien/all?type=${type}&locale=${langCode}`, {
  //       params: {
  //         ...condition,
  //         page: page,
  //         limit: limit,
  //       },
  //     });
  //     if (res) {
  //       setDataNew(res?.data?.data ?? []);
  //       setTotal(res?.data?.metadata?.total ?? 0);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const handleGetAll = async () => {
    try {
      const res = await axios.get(
        `${ip}/qlkh-tin-tucs?locale=${langCode}&populate=deep`,
        {
          params: {
            filters: {
              kieu: {
                $eq: type,
              },
              ...condition,
            },
            sort: ["createdAt:desc"],
            pagination: {
              page: page,
              pageSize: limit,
            },
          },
        }
      );
      if (res) {
        setDataNew(res?.data?.data ?? []);
        setTotal(res?.data?.meta?.pagination?.total ?? 0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("router", router);
  }, [router]);
  useEffect(() => {
    if (type === "news") {
      handleGetAll();
    } else {
    }
  }, [type, condition, page, limit, langCode]);

  const onSubmit = (data: any) => {
    console.log("data", data);
    if (data && data?.keyword !== "" && data?.keyword) {
      setCondition({
        ...condition,
        tieuDe: {
          $containsi: data?.keyword,
        },
      });
    } else {
      delete condition?.tieuDe;
      setCondition({ ...condition });
    }
  };
  const handleChangeType = (val: "news" | "event") => {
    setPage(1);
    setType(val);
  };
  return (
    <TinTucWraper>
      <div className="container mx-auto bg-white  pt-2 pb-14 mb-2 px-[20px] lg:px-0">
        <div className="md:mt-[40px] md:mb-[40px] lg:flex block justify-between">
          {/*<h2 className="">Tin tức sự kiện</h2>*/}
          <div className="flex justify-center lg:justify-start  mb-[20px] lg:mb-0">
            <div
              className={`text-normal px-[24px] py-[8px] ${
                type === "news"
                  ? "bg-white border-t-2 border-primary"
                  : "bg-gradient-gray"
              } cursor-pointer`}
              onClick={() => handleChangeType("news")}
            >
              Tin mới nhất
            </div>
            <div
              className={`text-normal px-[24px] py-[8px] ${
                type === "event"
                  ? "bg-white border-t-2 border-primary"
                  : "bg-gradient-gray"
              } cursor-pointer`}
              onClick={() => handleChangeType("event")}
            >
              Sự kiện nổi bật
            </div>
          </div>
          {/*{type === "news" && (*/}
          <div className="mb-[20px] lg:mb-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <div className="">
                  <div className="search flex item-center">
                    <div className="relative w-full">
                      <input
                        className="w-full px-[20px] py-[8px]"
                        placeholder={
                          router?.query?.keyword
                            ? (router?.query?.keyword as string)
                            : "Tìm kiếm"
                        }
                        {...register("keyword")}
                      />
                      <div className="icon absolute top-[8px] right-[20px]">
                        <button type="submit">
                          <img
                            src={"/images/icons/search-pri.svg"}
                            alt={"image"}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {errors.keyword && <p className="error-text">Bắt buộc</p>}
                </div>
              </div>
            </form>
          </div>
          {/*)}*/}
        </div>
        {type === "news" && (
          <div>
            {dataNew?.length > 0 ? (
              <>
                <div className={"hidden lg:grid grid-cols-3 gap-[30px] "}>
                  {dataNew?.map((val, i) => {
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
                          title={val?.attributes?.tieuDe}
                          description={val?.attributes?.moTa ?? ""}
                          dateTime={val?.attributes?.createdAt}
                          key={i}
                          type={"list"}
                        />
                      </div>
                    );
                  })}
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

            <div className="block lg:hidden">
              {dataNew.map((val, i) => {
                return (
                  <div
                    className={"mb-[24px]"}
                    key={i}
                    onClick={() => {
                      router.push(`/tin-tuc/${val?.id}`);
                    }}
                  >
                    <CardBanner
                      imageUrl={renderImage(
                        val?.attributes?.hinhAnh?.data?.attributes?.url
                      )}
                      title={val?.attributes?.tieuDe}
                      description={val?.attributes?.moTa ?? ""}
                      dateTime={val?.attributes?.createdAt}
                      key={i}
                      type={"small"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {type === "event" && (
          <div className="event">
            <SapToi type={type} conditionSearch={condition} />
            <DaDienRa type={type} conditionSearch={condition} />
            <DangDienRa type={type} conditionSearch={condition} />
            {/*<div className="show-more flex items-center justify-center md:mt-[16px] cursor-pointer">*/}
            {/*  <Pagination*/}
            {/*    page={page}*/}
            {/*    limit={limit}*/}
            {/*    total={totalEvented}*/}
            {/*    handleChangePage={(page) => {*/}
            {/*      console.log("page", page);*/}
            {/*      setPage(page);*/}
            {/*    }}*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
        )}
        {type === "news" && (
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
        )}
      </div>
    </TinTucWraper>
  );
};
const TinTucWraper = styled.div`
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
  .show-more {
    color: #de221a;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
  .search {
    input {
      height: 100%;
      padding-left: 40px;
      background: #f1f3f5;
      //border-radius: 4px;
      &:focus {
        outline: none;
      }
    }
    img {
      width: 20px;
      height: 20px;
    }
    button {
      //padding: 12px 24px;
      //border-radius: 0px 4px 4px 0px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #ffffff;
    }
  }
  .event {
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
  }
`;
export default Tintuc;
