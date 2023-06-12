import { useForm } from "react-hook-form";
import { rules } from "../../utils/rules";
import styled from "styled-components";
import Card from "../../components/Card";
import { dataTinTuc } from "../../data";
import MiniCard from "../../components/Event/components/MiniCard";
import BreadcrumbPage from "../../components/Breadcrumb";
import React, { useEffect, useRef, useState } from "react";
import Share from "../../components/Share";
import FormGopY from "../../components/FormGopY";
import { useRouter } from "next/router";
import { tr } from "date-fns/locale";
import axios from "axios";
import { ip } from "../../api/ip";
import moment from "moment";
import { renderImage } from "../../utils/util";
import ReactToPrint from "react-to-print";
import CardBanner from "../../components/CardBanner";
import { IDataChiTiet } from "../../utils/interface";

const ChiTiet = () => {
  // const {
  // 	register,
  // 	reset,
  // 	handleSubmit,
  // 	formState: { errors },
  // } = useForm();
  const [dataChiTiet, setDataChiTiet] = useState<IDataChiTiet>();
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);
  const [content, setContent] = useState<any>(null);
  const router = useRouter();
  let contentRef = useRef<HTMLDivElement>(null);
  let timmer: NodeJS.Timeout | undefined;
  const onSubmit = async (data: any, callback: any) => {
    console.log("data", data);
    const obj = { ...data, articleId: router?.query?.id };
    try {
      const res = await axios.post(`${ip}/cmscore/v5/CommentArticle`, obj);
      if (res) {
        setSendSuccess(true);
        timmer = setTimeout(() => {
          setSendSuccess(false);
          callback(true);
        }, 10000);
      } else {
      }
    } catch (e) {
      console.log(e);
    }
  };
  // const getData = async () => {
  // 	try {
  // 		const res = await axios.get(`${ip}/cmscore/v5/Article/GetById/${router?.query?.id}`);
  // 		if (res) {
  // 			console.log("resss", res);
  // 			setDataChiTiet(res?.data?.data);
  // 		}
  // 	} catch (e) {
  // 		console.log(e);
  // 	}
  // };
  // const getDataComment = async () => {
  // 	try {
  // 		const res=await axios.post(`${ip}/cmscore/v5/CommentArticle/GetData/Custom/${router?.query?.id}`,{
  // 			"filters": [],
  // 			"sorts": [],
  // 			"pageInfo": {
  // 				"page": 1,
  // 				"pageSize": 10
  // 			}
  // 		})
  // 		if (res){
  // 			console.log('resss',res)
  // 			setDataComment(res?.data?.data)
  // 		}
  // 	}catch (e) {
  // 		console.log(e)
  // 	}
  // }
  const getData = async (id: string) => {
    try {
      const res = await axios.get(`${ip}/tap-chi-khoa-hocs/${id}`);
      if (res) {
        setDataChiTiet(res?.data?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (router?.query?.id) {
      getData(router?.query?.id as string);
      // getData();
      // getDataLienQuan();
    }
  }, [router]);
  useEffect(() => {
    return () => {
      clearTimeout(timmer);
    };
  }, []);
  return (
    <ChiTietWrapper>
      <div
        className="container mx-auto bg-white px-6 pt-6 pb-8"
        ref={contentRef}
      >
        <div className="flex justify-between">
          <BreadcrumbPage
            data={[
              {
                title: "Trang chủ",
                path: "/",
              },
              {
                title: "Tạp chí khoa học",
                path: "/#",
              },
            ]}
          />
          <div className="share flex">
            <Share ref={content} />
            <ReactToPrint
              trigger={() => (
                <div className="share-item">
                  <img src={"/images/icons/print-2.svg"} alt={"image"} />
                </div>
              )}
              content={() => contentRef?.current}
            />
          </div>
        </div>
        <div className={" mt-14 "}>
          <div
            className={
              "detail mb-14 flex flex-col items-center border-b border-[#C3C7CC]"
            }
          >
            <h2>{dataChiTiet?.attributes?.tieuDe} </h2>
            <div className="flex justify-center">
              {dataChiTiet?.attributes?.createdAt && (
                <p className="date lg:mr-[40px] mr-[20px]">
                  Ngày đăng:{" "}
                  {moment(dataChiTiet?.attributes?.createdAt).format(
                    "DD/MM/YYYY HH:mm"
                  )}
                </p>
              )}

              <p className="date">Tác giả: {dataChiTiet?.attributes?.tacGia??'Không có tác giả'}</p>
            </div>

            {/*<div className=' flex justify-end mt-[20px]'>*/}
            {/*	<div className="flex items-center flex-col">*/}
            {/*		<div className="name-author">Tên tác giả</div>*/}
            {/*		<div>{dataChiTiet?.pseudonym}</div>*/}
            {/*	</div>*/}
            {/*</div>*/}
          </div>
          {/*<FormGopY*/}
          {/*	onSubmit={(val, callback) => onSubmit(val, callback)}*/}
          {/*	sendSuccess={sendSuccess}*/}
          {/*	articleId={router?.query?.id as string}*/}
          {/*/>*/}
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: dataChiTiet?.attributes?.noiDung ?? "",
            }}
          ></div>

          {/*<div className='col-span-1 flex items-start'>*/}
          {/*	<Share ref={content}/>*/}
          {/*	<ReactToPrint*/}
          {/*	    trigger={() =>  <div className='share-item' >*/}
          {/*			<img src={"/images/icons/print-pri.svg"} alt={"image"} />*/}
          {/*		</div>}*/}
          {/*	    content={() => contentRef?.current}*/}
          {/*	/>*/}
          {/*</div>*/}
        </div>
      </div>
      {/*<div className={"container mx-auto mt-2 mb-2"}>*/}
      {/*  <div className="title-event lg:mb-[40px] flex justify-between">*/}
      {/*    <h2>Tin tức - Sự kiện đã diễn ra</h2>*/}
      {/*    <div className="show-more flex items-center cursor-pointer">*/}
      {/*      <div className="mr-[24px] shrink-0 text-primary">Xem thêm</div>*/}
      {/*      <img src="/images/icons/arrow-right-2.svg" alt="image" />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className={"grid grid-cols-3 gap-[30px]"}>*/}
      {/*    {dataTinTuc?.map((val, i) => {*/}
      {/*      return (*/}
      {/*        <div*/}
      {/*          onClick={() => {*/}
      {/*            router.push(`/tin-tuc/1`);*/}
      {/*          }}*/}
      {/*          key={i}*/}
      {/*        >*/}
      {/*          <CardBanner*/}
      {/*            imageUrl={val.imageUrl}*/}
      {/*            title={val.content}*/}
      {/*            description={val.description}*/}
      {/*            dateTime={val.dateTime}*/}
      {/*            key={i}*/}
      {/*            type={"list"}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </ChiTietWrapper>
  );
};
const ChiTietWrapper = styled.div`
  .detail {
    h2 {
      margin-bottom: 12px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      display: flex;
      align-items: center;
      color: #212529;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .date {
      margin-bottom: 20px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      /* identical to box height, or 138% */

      display: flex;
      align-items: center;

      /* Gray/Gray-6 */

      color: #868e96;
    }
  }
  .content {
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #212529;
    }
  }
  .send-status {
    margin-top: 24px;
    background: #ebfbee;
    border-radius: 8px;
    padding: 12px 16px;
    max-width: 575px;
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #212529;
    }
  }
  .title-detail {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: #212529;
  }
  .name-author {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    /* identical to box height, or 175% */

    display: flex;
    align-items: center;
    text-align: right;

    /* Gray/Gray-9 */

    color: #212529;
  }
  .share-item {
    cursor: pointer;
    margin-right: 16px;
    background: #f1f3f5;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    //&:last-of-type {
    //	margin-right: 0;
    //}
  }
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
`;
export default ChiTiet;
