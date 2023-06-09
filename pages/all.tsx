import { Breadcrumb } from "flowbite-react";

import styled from "styled-components";
import MiniCard from "../components/Event/components/MiniCard";
import { useEffect, useState } from "react";
import { TuyenSinh } from "../utils/interface";
import { useRouter } from "next/router";
import axios from "axios";
import { ip } from "../api/ip";
import Pagination from "../components/pagination";
import {renderImage} from "../utils/util";


const All = () => {
    const [dataTuyenSinh, setDataTuyenSinh] = useState<TuyenSinh[]>([]);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {

    }, [page,router]);
    return (
        <TinTucWraper>
            <div className='container mx-auto bg-white px-6 pt-2 pb-14 mb-2'>
                {/*<BreadcrumbPage*/}
                {/*	data={[*/}
                {/*		{*/}
                {/*			title: "Trang chủ",*/}
                {/*			path: "/",*/}
                {/*		},*/}
                {/*		{*/}
                {/*			title: "Tin tức sự kiện",*/}
                {/*			path: "#",*/}
                {/*		},*/}
                {/*	]}*/}
                {/*/>*/}
                <div className='md:mt-[60px] md:mb-[40px] flex justify-center'>
                    <h2 className=''>{router?.query?.name}</h2>
                </div>
                <div className={"hidden lg:block"}>
                    {" "}
                    {dataTuyenSinh?.map((val, i) => {
                        return (
                            <div
                                className={"mb-[24px]"}
                                key={i}
                                onClick={() => {
                                    router.push(`/tin-tuc/${val?.id}`);
                                }}
                            >
                                <MiniCard
                                    data={{
                                        id: val?.id,
                                        imageUrl: renderImage(val?.thumbnail),
                                        content: val?.name,
                                        dateTime: val?.created,
                                        description: val?.summary,
                                        // link:`/tin-tuc/${val?.id}?type=TUYENSINH_DAIHOC`
                                    }}
                                    size={"large"}
                                    key={i}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='block lg:hidden'>
                    {dataTuyenSinh?.map((val, i) => {
                        return (
                            <div
                                className={"mb-[24px]"}
                                key={i}
                                onClick={() => {
                                    router.push(`/tin-tuc/${val?.id}`);
                                }}
                            >
                                <MiniCard
                                    data={{
                                        id: val?.id,
                                        imageUrl: renderImage(val?.thumbnail),
                                        content: val?.name,
                                        dateTime: val?.created,
                                        description: val?.summary,
                                        // link:`/tin-tuc/${val?.id}?type=TUYENSINH_DAIHOC`
                                    }}
                                    size={"small"}
                                    key={i}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='show-more flex items-center justify-center md:mt-[16px] cursor-pointer'>
                    {/*<div className='mr-[12px] '>Xem thêm </div>*/}
                    {/*<svg width='15' height='14' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg'>*/}
                    {/*	<path d='M0 7H13M13 7L7.7381 1.5M13 7L7.7381 12.5' stroke='currentColor' strokeWidth='2' />*/}

                    {/*</svg>*/}
                    <Pagination
                        page={1}
                        limit={10}
                        total={total}
                        handleChangePage={(page)=>{
                            console.log('page',page)
                            setPage(page)
                        }}
                    />
                </div>
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
		color: #DE221A;
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
	}
`;
export default All;
