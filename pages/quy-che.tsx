import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import TableBase from "../components/tableBase";
import { dataDanhMuc, dataQuyChe } from "../data";
import { GioiThieu } from "../utils/interface";
import { ip } from "../api/ip";
import Title from "../components/Title";
import { Controller, useForm } from "react-hook-form";
import DropdownFake from "../components/Dropdown";
import { rules } from "../utils/rules";
import moment from "moment";
import { renderImage } from "../utils/util";
import TableBaseV2 from "../components/TableBaseV2";

const QuyChe = () => {
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [dataChiTiet, setDataChiTiet] = useState<GioiThieu>();
  const [dataGioiThieu, setDataGioiThieu] = useState<GioiThieu[]>([]);
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
  const getData = async () => {
    try {
      const res = await axios.get(`${ip}/van-ban/all`, {
        params: {
          coQuan: type,
        },
      });
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
      getData();
    }
  }, [router]);

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
    },
    {
      title: "Số văn bản",
      dataIndex: "so",
    },
    {
      title: "Ngày ban hành",
      dataIndex: "ngayBanHanh",
      render: (val: any) => {
        return val ? moment(val).format("DD/MM/YYYY") : "Không có dữ liệu";
      },
    },
    {
      title: "Thời gian bắt đầu hiệu lực",
      dataIndex: "thoiGianHieuLuc",
      render: (val: any) => {
        return val ? moment(val).format("DD/MM/YYYY") : "Không có dữ liệu";
      },
    },
    {
      title: "Trích yếu nội dung",
      dataIndex: "trichYeu",
      width: 300,
    },
    {
      title: "Loại văn bản",
      dataIndex: "loaiVanBan",
    },
    {
      title: "Cơ quan ban hành",
      dataIndex: "coQuanBanHanh",
    },
    {
      title: "Tài liệu đính kèm",
      dataIndex: "taiLieuDinhKem",
      width: '200px',
      render: (val: any) => {
        return <div className="w-full overflow-hidden break-words ">
          <a className="block link-download" href={renderImage(val?.url)}>{val?.name}</a>
        </div>;
      },
    },
  ];
  const onSubmit = (data: any) => {
    console.log("data", data);
    // getData({
    // 	keyword: data?.keyword,
    // 	type: data?.type,
    // 	startDate: moment(data?.startDate).toISOString(),
    // 	endDate: moment(data?.endDate).toISOString(),
    // });
    router.push(
      `/tim-kiem?keyword=${data?.keyword}${
        data?.type ? `&type=${data?.type}` : ""
      }${
        data?.dateStart
          ? `&startDate=${moment(data?.dateStart).toISOString()}`
          : ""
      }${
        data?.endDdateEndate
          ? `&endDate=${moment(data?.dateEnd).toISOString()}`
          : ""
      }`
    );
  };
  const option = [
    { value: "Quốc hội", label: "Quốc hội" },
    { value: "Chính phủ", label: "Chính phủ" },
    { value: "Bộ KH & CN", label: "Bộ KH & CN" },
    { value: "Bộ GD & DT", label: "Bộ GD & DT" },
    { value: "Bộ tài chính", label: "Bộ tài chính" },
    { value: "Học viện", label: "Học viện" },
  ];
  return (
    <QuyCheWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] lg:mb-[50px] mb-[20px]">
        <Title
          title={"CÁC VĂN BẢN QUY ĐỊNH VỀ KH, CN & ĐMST"}
          uppercase={true}
        />
        <div className="mb-[40px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-end">
              <div className="dropdown mr-[24px]">
                <Controller
                  name={"type"}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DropdownFake
                      option={option}
                      onChange={(val) => {
                        console.log("val", val);
                        onChange(val.value);
                      }}
                      value={value}
                      placeholder={"Văn bản cấp"}
                    />
                  )}
                />
              </div>
              <div className="">
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
                {errors.keyword && <p className="error-text">Bắt buộc</p>}
              </div>
            </div>
          </form>
        </div>
        <div>
          {/*<TableBase*/}
          {/*  columns={columns}*/}
          {/*  dataSource={dataGioiThieu?.map((val, i) => {*/}
          {/*    return {*/}
          {/*      ...val,*/}
          {/*      index: i + 1,*/}
          {/*    };*/}
          {/*  })}*/}
          {/*/>*/}
          <TableBaseV2
            columns={columns}
            dataSource={dataGioiThieu?.map((val, i) => {
              return {
                ...val,
                index: i + 1,
              };
            })}
          />
        </div>
      </div>
    </QuyCheWrapper>
  );
};
const QuyCheWrapper = styled.div`
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
export default QuyChe;
