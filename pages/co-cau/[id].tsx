import { useRouter } from "next/router";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { ca } from "date-fns/locale";
import axios from "axios";
import { ip } from "../../api/ip";
import { DetailData } from "../../utils/interface";
import BreadcrumbPage from "../../components/Breadcrumb";
import moment from "moment";
import Title from "../../components/Title";
import {dataChucNang} from "../../data";

const ChiTietTinTuc = () => {
  const router = useRouter();
  const [detailTinTuc, setDetailTinTuc] = useState<DetailData>();
  const getDetailTinTuc = async (id: string) => {
    try {
      const res = await axios.get(`${ip}/co-cau-to-chuc/${id}`);
      if (res) {
        setDetailTinTuc(res?.data?.data ?? {});
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (router && router.query?.id) {
      getDetailTinTuc(router?.query?.id as string);
    }
  }, [router]);
  return (
    <ChiTietWrapper>
      <div className='container mx-auto mb-[40px] mt-[20px]'>
        <BreadcrumbPage
          data={[
            {
              title: "Trang chủ",
              path: "/",
            },
            {
              title: `${router?.query?.type?router?.query?.type:'Tin tức mới nhất'}`,
              path: `/tin-tuc/${router?.query?.id}`,
            },
          ]}
        />
        <div className='grid sm:grid-cols-8 grid-cols-1 gap-[20px] '>
          <div className='sm:col-span-6 wow fadeInUp'>
            <div className='title uppercase mb-[8px]'>{router?.query?.type}</div>
            <div className='date-time mb-[4px]'>Ngày đăng:{' '}{moment(detailTinTuc?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</div>
            <div className={" "} dangerouslySetInnerHTML={{__html:detailTinTuc?.noiDung??''}}></div>
          </div>
          <div className='col-span-2 hidden sm:block wow fadeInRight'>
            <Title title={"Chức năng"} uppercase={true} />
            <div className='listcn'>
              {dataChucNang?.map((val, i) => {
                return (
                  <a
                    href={val?.link ? val?.link : "#"}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className='item-cn py-[4px] bg-[#f6f8fa] mb-[4px] cursor-pointer block'
                    key={i}
                  >
                    <div className='border-l-2 border-primary px-[8px] list-chuc-nang'>{val?.title}</div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ChiTietWrapper>
  );
};
const ChiTietWrapper = styled.div`
	.title {
		color: #2a72b9 !important;
		font-size: 1.5rem;
		font-weight: 600;
	}
	.date-time{
		color: #a1a5b7!important;
		font-size: 14px;
		font-weight: 400;
		
		
	}
  .list-chuc-nang {
    &:hover{
      color: #b70b00;
    }
  }
`;
export default ChiTietTinTuc;
