import styled from "styled-components";
import Title from "../Title";
import CardEvent from "../Event/components/CardEvent";
// @ts-ignore
import Slider from "react-slick";
import { useRouter } from "next/router";

const LayoutTinTuc = () => {
	const router = useRouter();


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
