import styled, { CSSProperties } from "styled-components";
import moment from "moment";
import {da} from "date-fns/locale";
interface IProps {
	data: {
		imageUrl: string;
    title: string;
		content?: string;
		dateTime?: string;
		dateStart?: string;
		dateEnd?: string;
		link?: string;
	};
	style?: CSSProperties;
	type?: "big" | "small";
}
const CardEvent = (props:IProps) => {
  const {data}=props
	return (
		<CardEventWrapper>
			<div className='flex justify-between hover:shadow cursor-pointer'>
				<div className='time text-center shrink-0 mr-[50px]'>
					<p className='time-1 mb-[8px]'>Tháng {moment(data?.dateTime).month()+1}</p>
					<p className='date mb-[8px]'>{moment(data?.dateTime).date()}</p>
					<p className='time-1'>{moment(data?.dateTime).year()}</p>
				</div>
				<div className='content w-full '>
					<div className='rank-date mb-[16px]'>
            {moment(data?.dateStart).format('HH:mm DD/MM/YYYY')} - {moment(data?.dateEnd).format('HH:mm DD/MM/YYYY')}
          </div>
          <div className="title-content mb-[20px]">
            {data?.title}
          </div>
          <div className={"content-event"}>
            {data?.content}
          </div>
				</div>
				<div className='image shrink-0 ml-[50px] sm:w-[360px] sm:h-[240px]'>
          <img className="sm:w-full sm:h-full" src={data.imageUrl} alt={'image'}/>
        </div>
			</div>
		</CardEventWrapper>
	);
};
const CardEventWrapper = styled.div`
	.time {
		.time-1 {
			font-family: "Inter";
			font-style: normal;
			font-weight: 500;
			font-size: 12px;
			line-height: 15px;

			color: #18202a;
		}
		.date {
			font-family: "Inter";
			font-style: normal;
			font-weight: 700;
			font-size: 24px;
			line-height: 29px;

			color: #de221a;
		}
	}
  .content{
		.rank-date{
			font-family: 'Inter';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 17px;

			color: #73787E;
		}
    .title-content{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #18202A;

			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
    }
    .content-event{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #18202A;

			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 4;
			-webkit-box-orient: vertical;
			
    }
  }
 
`;
export default CardEvent;
