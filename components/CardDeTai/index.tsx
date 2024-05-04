import styled, { CSSProperties } from "styled-components";
import Link from "next/link";
import moment from "moment/moment";
import { de } from "date-fns/locale";
interface IPorps {
  data: {
    imageUrl: string;
    content: string;
    type?: string;
    description?: string;
    dateTime?: string;
    link?: string;
  };
  style?: CSSProperties;
  type?: "big" | "small";
  vertical?: boolean;
}
const CardDeTai = (props: IPorps) => {
  const renderType = (type: string) => {
    switch (type) {
      case "Cấp nhà nước":
        return (
          <div className="py-[4px] px-[20px] bg-primary inline-block text-white">
            {type}
          </div>
        );
        break;
      case "Cấp bộ/Sở/Ban ngành":
        return (
          <div className="py-[4px] px-[20px] bg-primary inline-block text-white">
            {type}
          </div>
        );
        break;
      case "KHCN trong hợp tác quốc tế":
        return (
          <div className="py-[4px] px-[20px] bg-primary inline-block text-white">
            {type}
          </div>
        );
        break;
      case "Đề tài sinh viên":
        return (
          <div className="py-[4px] px-[20px] bg-primary inline-block text-white">
            {type}
          </div>
        );
        break;
      case "Cấp bộ":
        return (
          <div className="py-[4px] px-[20px] bg-[#0B8500] inline-block text-white">
            {type}
          </div>
        );
        break;
      case "Cấp học viện":
        return (
          <div className="py-[4px] px-[20px] bg-[#012169] inline-block text-white">
            {type}
          </div>
        );
        break;
      case "Trong nước":
        return (
          <div className="py-[4px] px-[20px] bg-primary inline-block text-white">
            Tạp chí {type}
          </div>
        );
        break;
      case "Quốc tế":
        return (
          <div className="py-[4px] px-[20px] bg-[#0B8500] inline-block text-white">
            Tạp chí {type}
          </div>
        );
        break;
      case "Hội nghị hội thảo":
        return (
          <div className="py-[4px] px-[20px] bg-[#FEA805] inline-block text-white">
            {type}
          </div>
        );
        break;
      case "ISI/Scopus":
        return (
          <div className="py-[4px] px-[20px] bg-[#012169] inline-block text-white">
            Tạp chí {type}
          </div>
        );
        break;
      default:
        return "";
    }
  };
  if (props?.vertical) {
    return (
      <CardDeTaiWrapper>
        <div className="h-full">
          <div
            className="card cursor-pointer h-full flex flex-col lg:flex-row"
            style={props.style}
          >
            <div className="relative shrink-0">
              <img
                className={`image-card wow fadeInUp lg:h-[250px] h-[250px] lg:w-[337px] w-full ${
                  props.data.imageUrl ? "object-cover" : "object-contain"
                } `}
                src={props.data.imageUrl}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/images/default/no_image.png";
                }}
                alt={"image"}
              />
              <div className="block lg:hidden absolute left-0 bottom-[-10px] w-full">
                <div className="w-full flex justify-center">
                  {props.data.type && (
                    <div className="">{renderType(props.data.type)}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="px-[20px]   pb-[26px] pt-[26px] bg-white">
              <div className="border-l-2 pl-[12px] md:border-primary-500 content wow fadeInUp ">
                <div className="hidden lg:block">
                  {props.data.type && (
                    <div className="mb-[8px]">
                      {renderType(props.data.type)}
                    </div>
                  )}
                </div>
                {props.data.content && (
                  <div className="content-title lg:min-h-[48px]  sm:min-h-[48px]">
                    {props.data.content}
                  </div>
                )}
              </div>
              {props.data.dateTime && (
                <div className="time-content flex items-center mb-[16px]">
                  <div className="mr-[16px]">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 7H13M13 7L7.7381 1.5M13 7L7.7381 12.5"
                        stroke="#DE221A"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  {moment(props.data.dateTime).format("DD/MM/YYYY")}
                </div>
              )}
              {props.data.description && (
                <div className="description ">{props.data.description}</div>
              )}
            </div>
          </div>
        </div>
      </CardDeTaiWrapper>
    );
  } else {
    return (
      <CardDeTaiWrapper>
        <Link href={props.data.link ? props.data.link : "#"} className="h-full">
          <div
            className="card cursor-pointer h-full flex flex-col"
            style={props.style}
          >
            <div className="relative">
              <img
                className={
                  "image-card wow fadeInUp lg:h-[321px] h-[250px] object-cover"
                }
                src={props.data.imageUrl}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/images/default/no_image.png";
                }}
                alt={"image"}
              />
              <div className="block lg:hidden absolute left-0 bottom-[-10px] w-full">
                <div className="w-full flex justify-center">
                  {props.data.type && (
                    <div className="">{renderType(props.data.type)}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="px-[20px]   pb-[26px] pt-[26px] bg-white">
              <div className="border-l-2 pl-[12px] md:border-primary-500 content wow fadeInUp ">
                <div className="hidden lg:block">
                  {props.data.type && (
                    <div className="mb-[8px]">
                      {renderType(props.data.type)}
                    </div>
                  )}
                </div>
                {props.data.content && (
                  <div className="content-title lg:min-h-[48px]  sm:min-h-[48px]">
                    {props.data.content}
                  </div>
                )}
              </div>
              {props.data.dateTime && (
                <div className="time-content flex items-center mb-[16px]">
                  <div className="mr-[16px]">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 7H13M13 7L7.7381 1.5M13 7L7.7381 12.5"
                        stroke="#DE221A"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  {moment(props.data.dateTime).format("DD/MM/YYYY HH:mm")}
                </div>
              )}
              {props.data.description && (
                <div className="description ">{props.data.description}</div>
              )}
            </div>
          </div>
        </Link>
      </CardDeTaiWrapper>
    );
  }
};

const CardDeTaiWrapper = styled.div`
  height: 100%;
  .card {
    //overflow: hidden;
    //max-width: 262px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    img {
      //max-width: 262px;
      //width: 100%;
    }
    .content-title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .content {
      margin-bottom: 6px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      color: #212529;
    }
    //.description {
    //  font-family: "Inter";
    //  font-style: normal;
    //  font-weight: 400;
    //  font-size: 14px;
    //  line-height: 20px;
    //  display: flex;
    //  align-items: center;
    //  color: #495057;
    //}
    .time {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #868e96;
    }
  }
  .time-content {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    color: #de221a;
  }
  .description {
    font-family: "Be Vietnam Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* 2/Content Second */

    color: #73787e;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
`;
export default CardDeTai;
