import styled from "styled-components";
import Title from "../Title";
import { dataDaoTao } from "../../data";
import CardEvent from "../Event/components/CardEvent";
import {IDataHome} from "../../utils/interface";
import {renderImage} from "../../utils/util";

const DonViNghienCuu = (props:{dataHome:IDataHome}) => {
	return (
		<DonViWrapper>
			<div className='container mx-auto px-[20px] lg:px-0 lg:mt-[50px] mt-[20px]'>
				<Title title={"Đơn vị nghiên cứu"} uppercase={true} />
				<div className='grid lg:grid-cols-3 grid-cols-1 gap-[30px]'>
					{props.dataHome?.don_vi_nghien_cuus?.data?.map((val, i) => {
						return (
							<CardEvent
								data={{
									imageUrl: renderImage(val?.attributes?.hinhAnh?.data?.attributes?.url),
									content: val?.attributes?.tieuDe,
									description: val?.attributes?.moTa??'',
									dateTime: val?.attributes?.createdAt,
									link: ``,
								}}
								category={'don-vi'}
                key={i}
							/>
						);
					})}
				</div>
			</div>
		</DonViWrapper>
	);
};
const DonViWrapper = styled.div``;
export default DonViNghienCuu;
