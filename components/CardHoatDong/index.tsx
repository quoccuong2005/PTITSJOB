import styled from "styled-components";
import moment from "moment";
interface IProps {
  imageUrl: string;
  title: string;
  description?: string;
  dateTime?: string;
  type?: "big" | "small" | "list";
}
const CardHoatDong = (props: IProps) => {
  if (props.type === "big") {
    return (
      <CardBigBannerWrapper className='hover:shadow-xl cursor-pointer bg-[#1421410A] '>
        <div className={"flex w-full"}>
          {/*<div className='relative w-1/2'>*/}
          {/*  <img*/}
          {/*    className="h-full w-full object-cover"*/}
          {/*    src={props.imageUrl}*/}
          {/*    onError={({ currentTarget }) => {*/}
          {/*      currentTarget.onerror = null; // prevents looping*/}
          {/*      currentTarget.src = "/images/default/no_image.png";*/}
          {/*    }}*/}
          {/*    alt={"image"}*/}
          {/*  />*/}
          {/*  <div className='hidden lg:block absolute bottom-0 right-0'>*/}
          {/*    <div className='box-1 w-[85px] py-[12px] text-center'>{moment(props.dateTime).date()}</div>*/}
          {/*    <div className='box-2 w-[85px] py-[12px] text-center'>Tháng {moment(props.dateTime).month() + 1}</div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className='ml-[30px] py-[14px]'>
            <div className='title-card '>{props.title}</div>
            {/*<div className='border-t-4 border-primary mb-[8px] w-[64px] mt-[12px]'></div>*/}
            {/*<div className='border-t-4 border-primary w-[64px] mb-[12px]'></div>*/}
            {props.description && <div className='title-card-2'>{props.description}</div>}
            {/*<button className='show-more mt-[12px]'>*/}
            {/*  <div className={"mr-2"}>Xem thêm</div>*/}
            {/*  <svg width='15' height='14' viewBox='0 0 15 14' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>*/}
            {/*    <path*/}
            {/*      d='M0 7H13M13 7L7.7381 1.5M13 7L7.7381 12.5'*/}
            {/*      stroke='currentColor'*/}
            {/*      strokeWidth='2'*/}
            {/*      fill='currentColor'*/}
            {/*    />*/}
            {/*  </svg>*/}
            {/*</button>*/}
          </div>
        </div>
      </CardBigBannerWrapper>
    );
  } else {
    if (props.type === "list") {
      return (
        <CardListBannerWrapper className='hover:shadow-xl cursor-pointer h-full'>
          <div className={"h-full w-full inline-block overflow-hidden"}>
            <div className='relative'>
              <img
                src={props.imageUrl}
                alt={"image"}
                className="h-[218px] object-cover"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/images/default/no_image.png";
                }}
              />
              <div className='absolute bottom-0 right-[0px]'>
                <div className={" py-[12px] px-[9px] bg-[#ffffffcc] text-primary w-[85px] text-center "}>
                  {moment(props.dateTime).date()}
                </div>
                <div
                  className={"py-[12px] px-[9px] bg-[#DE221A] inline-block relative text-white w-[85px] text-center  "}
                >
                  Tháng {moment(props.dateTime).month() + 1}
                  {/*<div className='absolute w-full px-2 top-0 left-0'>*/}
                  {/*	<div className='border-t-2'></div>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
            <div className={"px-[24px] py-[24px] bg-gradient-gray h-full"}>
              <div className=''>
                <div className=' title-card  min-h-[56px]  '>{props.title}</div>
                <div className='w-[64px] mt-[12px] mb-[12px]'>
                  <div className='border-t-2 border-primary'></div>
                </div>
                <div className='title-des '>{props.description}</div>
              </div>
            </div>
          </div>
        </CardListBannerWrapper>
      );
    } else {
      return (
        <CardBannerWrapper className='hover:shadow-xl cursor-pointer lg:h-full'>
          <div className={"lg:h-full w-full"}>
            <div className='relative'>
              <img
                className="w-full h-[250px] lg:h-full lg:max-h-[350px] object-cover"
                src={props.imageUrl}
                alt={"image"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/images/default/no_image.png";
                }}
              />
              <div
                className={
                  "hidden lg:block absolute bottom-0 left-[16px] py-[12px] px-[9px] bg-[#DE221A] text-white w-[85px] text-center "
                }
              >
                {moment(props.dateTime).date()}
              </div>
            </div>
            <div className={"px-[16px] pb-[16px]"}>
              <div className={"hidden  py-[12px] px-[9px] bg-[#DE221A] lg:inline-block relative text-white w-[85px] text-center"}>
                Tháng {moment(props.dateTime).month() + 1}
                <div className='absolute w-full px-2 top-0 left-0'>
                  <div className='border-t-2'></div>
                </div>
              </div>
              <div className="text-primary mt-[16px] flex items-center"><img className="w-[20px] h-[20px] mr-[6px]" src="/images/icons/clock.svg"/><span>{moment(props?.dateTime).format('DD/MM/YYYY')}</span></div>
              <div className='title min-h-[48px] mt-[17px] title-card border-l-4 px-[12px] border-primary-500 font-bold lg:font-medium'>{props.title}</div>
              <div className="description lg:hidden block min-h-[48px]">
                {props?.description}
              </div>
            </div>
          </div>
        </CardBannerWrapper>
      );
    }
  }
};
const CardBannerWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-content: center;
	background: #ffffff;
	.title-card {
	}
	.description{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.title{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
`;
const CardListBannerWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-content: center;
	background: #ffffff;
	img {
		width: 100%;
	}
	.title-card {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 28px;
		color: #18202a;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.title-des {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;

		color: #73787e;
		
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
`;
const CardBigBannerWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-content: center;
	//background: #f7f7f7;
	height: 100%;
	.box-1 {
		background: rgba(255, 255, 255, 0.8);
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;

		/* BlueMain */

		color: #de221a;
	}
	.box-2 {
		background: #de221a;
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;

		color: #ffffff;
	}
	img {
		width: 100%;
		//max-width: 277px;
	}
	.title-card {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 28px;

		color: #FFFFFF;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.title-card-2 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;
		color: #FFFFFF;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.show-more {
		padding: 4px 20px;
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 28px;
		/* identical to box height, or 175% */

		display: flex;
		align-items: center;
		text-align: center;

		//color: rgba(120, 120, 120, 0.4);
		color: #DE221A;
		//border: 1.5px solid rgba(120, 120, 120, 0.4);
		border: 1.5px solid #DE221A;
		&:hover {
			color: #fa5252;
			border: 1.5px solid #fa5252;
		}
	}
`;
export default CardHoatDong;
