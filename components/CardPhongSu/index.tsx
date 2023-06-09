import styled from "styled-components";
import moment from "moment";
interface IProps {
	data: { imageUrl: string; content: string; dateTime: string };
}
const CardPhongSu = (props: IProps) => {
	const { data } = props;
	return (
		<CardPhongSuWrapper>
			<div className="hover:shadow h-full">
				<div className='image md:h-[157px]'>
					<img className='w-full h-full' src={data?.imageUrl} alt='image'
						 onError={({ currentTarget }) => {
							 currentTarget.onerror = null; // prevents looping
							 currentTarget.src = "/images/default/tin2.png";
						 }}/>
				</div>
				<div className='title h-auto mt-[20px]'>
					<div className='content cursor-pointer'>{data?.content}</div>
					<div className='time mt-[6px]'>{moment(data?.dateTime).format("DD/MM/YYYY HH:mm")}</div>
				</div>
			</div>
		</CardPhongSuWrapper>
	);
};
const CardPhongSuWrapper = styled.div`
	cursor: pointer;
	height: 100%;
	.title {
		.content {
			font-family: "Inter";
			font-style: normal;
			font-weight: 600;
			font-size: 16px;
			line-height: 28px;
			color: #212529;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      
		}
		.time {
			font-family: "Inter";
			font-style: normal;
			font-weight: 400;
			font-size: 12px;
			line-height: 18px;

			color: #868e96;
		}
	}
`;
export default CardPhongSu;
