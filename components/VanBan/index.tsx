import styled from "styled-components";
import Title from "../Title";
import CardEvent from "../Event/components/CardEvent";
// @ts-ignore
import Slider from "react-slick";
import Button from "../Button";
import { el, tr } from "date-fns/locale";
import axios from "axios";
import { ip, ip3 } from "../../api/ip";
import { useEffect, useState } from "react";
import { TuyenSinh, VanBan } from "../../utils/interface";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";

const VanBan = () => {
	const [dataTuyenSinh, setDataTuyenSinh] = useState<VanBan[]>([]);
	const router = useRouter();
	const getData = async () => {
		try {
			const res = await axios.post(`${ip}/cmscore/v5/Document/GetData`, {
				filters: [],
				sorts: [
					{
						field: "created",
						dir: -1,
					},
				],
				pageInfo: {
					page: 1,
					pageSize: 10,
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
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const handleRedirect = (id: string) => {
		router.push(`/tin-tuc/${id}`);
	};
	if (dataTuyenSinh?.length > 0) {
		return (
			<TinTuyenSinhWrapper className='px-[20px] lg:px-0 md:py-[50px] py-[20px] '>
				<div>
					<Title title={"Văn bản quy phạm pháp luật "} uppercase={true} description={""} />
				</div>
				<div className='sm:grid sm:grid-cols-4 gap-4 hidden mt-[40px]'>
					{dataTuyenSinh?.map((value, i) => {
						return (
							<div key={i}>
								<CardEvent
									data={{
										imageUrl: "",
										content: value?.subject ?? "",
										dateTime: value?.created,
										description: "",
										link: `/van-ban/${value?.id}?type=TUYENSINH_DAIHOC`,
									}}
									category={'sach'}
									type={"small"}
								/>
							</div>
						);
					})}
				</div>
				<div className='sm:hidden block mt-[20px]'>
					<Slider {...settings}>
						{dataTuyenSinh?.map((val, i) => {
							return (
								<CardEvent
									data={{
										imageUrl: "",
										content: val?.codeNotation,
										dateTime: val?.created,
										description: "",
										link: `/van-ban/${val?.id}?type=TUYENSINH_DAIHOC`,
									}}
									key={i}
								></CardEvent>
							);
						})}
					</Slider>
				</div>
				<div className='flex justify-center sm:mt-[40px] mt-[20px]'>
					<Button
						type={"default"}
						onClick={() => {
							router.push("/van-ban");
						}}
					>
						Xem thêm
					</Button>
				</div>
			</TinTuyenSinhWrapper>
		);
	} else {
		return null;
	}
};

const TinTuyenSinhWrapper = styled.div`
	background-color: #ffffff;
`;
export default VanBan;
