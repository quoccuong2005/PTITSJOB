import styled, {CSSProperties} from "styled-components";
import {da} from "date-fns/locale";
import moment from "moment";
interface IProps {
  data: { imageUrl: string; title: string; description?: string; dateTime?: string; link?: string };
  style?: CSSProperties;
}
const CardSearch = (props: IProps) => {
  const {data}=props;
  return(
    <CardSearchWrapper>
      <a className="sm:flex shadow cursor-pointer" href={data?.link?data?.link:'#'}>
        <img className="w-[300px] mr-[32px] wow fadeInUp" src={data?.imageUrl} alt="image"/>
        <div className="flex flex-col justify-center sm:py-[32px] sm:px-[32px] pt-[16px] sm:pt-0 wow fadeInUp">
          <div className="title-search">
            {data?.title}
          </div>
          <div className="text-normal">
            {data?.description}
          </div>
          <div className="flex items-center">
            <p className="mr-[8px] mb-0 text-normal"> Ngày xuất bản:</p> <p className="time mb-0">{moment(data?.dateTime).format("DD/MM/YYYY")}</p>
          </div>
        </div>
      </a>

    </CardSearchWrapper>
  )
}

const CardSearchWrapper=styled.div`
  .text-normal{
    color: #a1a5b7!important;
    font-size: 14px;
    font-weight: 400;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
.title-search{
  color: #369;
  display: inline-block;
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 15px;
  transition: all .3s ease;
  width: 100%;
}
  .time{
    color: #e41c1c!important;
    font-size: 15px;
    font-weight: 400;
  }

`
export default CardSearch;