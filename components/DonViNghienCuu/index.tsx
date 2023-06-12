import styled from "styled-components";
import Title from "../Title";
import { dataDaoTao } from "../../data";
import CardEvent from "../Event/components/CardEvent";
import {IDataHome} from "../../utils/interface";
import {renderImage} from "../../utils/util";
import Pagination from "../pagination";
import React, {useState} from "react";

const DonViNghienCuu = (props:{dataHome:IDataHome}) => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(3);
	const [total, setTotal] = useState<number>(0);
	if (props.dataHome?.don_vi_nghien_cuus?.data?.length>0){
		return (
			<DonViWrapper>
				<div className='container mx-auto px-[20px] lg:px-0 lg:mt-[50px] mt-[20px]'>
					<Title title={"Đơn vị nghiên cứu"} uppercase={true} />
					<div className='grid lg:grid-cols-3 grid-cols-1 gap-[30px]'>
						{props.dataHome?.don_vi_nghien_cuus?.data?.map((val, i) => {
							if (i<3){
								return (
									<CardEvent
										data={{
											imageUrl: renderImage(val?.attributes?.hinhAnh?.data?.attributes?.url),
											content: val?.attributes?.tieuDe,
											description: val?.attributes?.moTa??'',
											// dateTime: val?.attributes?.createdAt,
											link: val?.attributes?.duongDan,
										}}
										category={'don-vi'}
										key={i}
									/>
								);
							}else {
								return null;
							}

						})}
					</div>
					<div className="show-more flex items-center justify-center md:mt-[16px] cursor-pointer">
						<Pagination
							page={page}
							limit={3}
							total={total}
							handleChangePage={(page) => {
								console.log("page", page);
								setPage(page);
							}}
						/>
					</div>
				</div>
			</DonViWrapper>
		);
	}else {
		return (
			<DonViWrapper>
				<div className='container mx-auto md:py-[50px] py-[20px]'>
					<div>
						<Title title={"Đơn vị nghiên cứu"} uppercase={true} />
					</div>
					<div className="w-full h-full justify-center items-center flex flex-col">
						<img className="mb-[16px]" src="/images/default/no_data.png" alt="image"/>
						<p className="text-secondary text-sm">Không có dữ liệu</p>
					</div>
				</div>
			</DonViWrapper>
		)
	}

};
const DonViWrapper = styled.div``;
export default DonViNghienCuu;
