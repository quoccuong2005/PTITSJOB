import styled from "styled-components";
import Title from "../Title";
import CardEvent from "../Event/components/CardEvent";
// @ts-ignore
import Slider from "react-slick";
import Button from "../Button";
import { el, tr } from "date-fns/locale";
import axios from "axios";
import { ip } from "../../api/ip";
import { useEffect, useState } from "react";
import {TuyenSinh, TypeTinTuc} from "../../utils/interface";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";
import TinTuyenSinh from "../TinTuyenSinh";
import Event from "../Event";

const LayoutTinTuc = () => {
	const [dataTuyenSinh, setDataTuyenSinh] = useState<TypeTinTuc[]>([]);
	const router = useRouter();
	const getData = async () => {
		try {
			const res = await axios.post(`${ip}/cmscore/v5/NewsCategory/GetData/GetByTree`, {
				filters: [
					{
						valueIsField: false,
						filters: [],
						stringCompareOption: 0,
						field: "type",
						operator: "eq",
						value: '"NEWS"',
					},
				],
				sorts: [
					{
						field: "order",
						dir: 1,
					},
				],
				pageInfo: {
					page: 1,
					pageSize: 15,
				},
			});
			if (res) {
				console.log("res", res);
				setDataTuyenSinh(res?.data?.data);
			}
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	const handleRedirect = (id: string) => {
		router.push(`/tin-tuc/${id}`);
	};
	return (
		<LayoutTinTucWrapper className='px-[20px] lg:px-0 md:py-[50px] py-[20px] '>
            {/*{dataTuyenSinh?.map((value,i)=>{*/}
            {/*    if (i%2===0){*/}
            {/*        return(*/}
            {/*            <TinTuyenSinh type={value?.data?.code} key={i} name={value?.data?.name} description={value?.data?.description}/>*/}
            {/*        )*/}
            {/*    }else {*/}
            {/*        return(*/}
            {/*            <Event type={value?.data?.code} key={i} name={value?.data?.name} description={value?.data?.description}/>*/}
            {/*        )*/}
            {/*    }*/}
            {/*})}*/}
		</LayoutTinTucWrapper>
	);
};

const LayoutTinTucWrapper = styled.div`
	
`;
export default LayoutTinTuc;
