import {useRouter} from "next/router";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/AuthContext";
import {DataNewListV2} from "../../../utils/interface";
import axios from "axios";
import {ip} from "../../../api/ip";
import moment from "moment/moment";
import CardEvent from "../../CardEvent";
import {renderImage} from "../../../utils/util";
import CardBanner from "../../CardBanner";
import Pagination from "../../pagination";

const DaDienRa = (props:{type:string,conditionSearch:any}) => {
  const router=useRouter();
  const {type}=props
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(2);
  const [total, setTotal] = useState<number>(0);
  const { langCode } = useContext(AuthContext);
  const [condition, setCondition] = useState<any>();
  const [dataNew, setDataNew] = useState<DataNewListV2[]>([]);
  const handleGetAllEvent = async () => {
    try {
      const res = await axios.get(
        `${ip}/qlkh-tin-tucs?locale=${langCode}&populate=deep`,
        {
          params: {
            filters: {
              kieu: {
                $eq: type,
              },
              // thoiGianBatDau: {
              //   $lte: moment().endOf("day").toISOString(),
              //   // $lte: moment().endOf("day").toISOString(),
              // },
              thoiGianKetThuc: {
                $lt: moment().startOf("day").toISOString(),
                // $lte: moment().endOf("day").toISOString(),
              },
              ...condition,
              ...props.conditionSearch
            },
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
  useEffect(()=>{
    if (type==='event'){
      handleGetAllEvent();
    }
  },[langCode,type,page,condition,props.conditionSearch])
  return(
    <>
      <div className="lg:mb-[80px] mb-[20px]">
        <div className="title-event lg:mb-[40px] flex justify-between">
          <h2>Tin tức - Sự kiện đã diễn ra</h2>
          {/*<div className="show-more flex items-center cursor-pointer">*/}
          {/*  <div className="mr-[24px] shrink-0">Xem thêm</div>*/}
          {/*  <img src="./images/icons/arrow-right-2.svg" alt="image" />*/}
          {/*</div>*/}
        </div>
        <div className={"hidden lg:grid grid-cols-1 gap-[30px] "}>
          {dataNew?.length > 0 ? (
            <>
              {dataNew
                // ?.filter((item) => {
                //   return moment(item?.attributes.thoiGianBatDau).isBefore(
                //     moment()
                //   );
                // })
                ?.map((val, i) => {
                  return (
                    <div
                      onClick={() => {
                        router.push(`/tin-tuc/${val?.id}`);
                      }}
                      key={i}
                    >
                      <CardEvent
                        data={{
                          imageUrl: renderImage(
                            val?.attributes?.hinhAnh?.data?.attributes
                              ?.url
                          ),
                          title: val?.attributes?.tieuDe,
                          content: val?.attributes?.moTa ?? "",
                          dateTime: val?.attributes?.thoiGianBatDau,
                          dateStart: val?.attributes.thoiGianBatDau,
                          dateEnd: val?.attributes.thoiGianKetThuc,
                          link: `/tin-tuc/1`,
                        }}
                        key={i}
                      />
                    </div>
                  );
                })}
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
        <div className="block lg:hidden">
          {dataNew.map((val, i) => {
            return (
              <div className={"mb-[24px]"} key={i}>
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
      </div>

    </>
  )
}
export default DaDienRa;