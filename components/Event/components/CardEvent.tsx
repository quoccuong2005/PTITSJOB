import styled, { CSSProperties } from "styled-components";
import moment from "moment";
import Link from "next/link";
interface IPorps {
  data: {
    imageUrl: string;
    content: string;
    description?: string;
    dateTime?: string;
    link?: string;
  };
  style?: CSSProperties;
  type?: "big" | "small";
  category?: string;
}
const CardEvent = (props: IPorps) => {
  if (props.type === "big") {
    return (
      <CardBigEventWrapper>
        <div className="card">
          <Link href={props.data.link ? props.data.link : "#"}>
            <div className="cover item-c">
              <div
                className="card cursor-pointer relative lg:h-[278px] h-full"
                style={props.style}
              >
                {props.category ? (
                  <img
                    className={
                      "image-card mb-[8px] wow fadeInUp h-full object-cover"
                    }
                    src={props.data.imageUrl}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = `${
                        props.category === "sach"
                          ? "/images/default/image-sach.jpg"
                          : "/images/default/course.png"
                      }`;
                    }}
                    alt={"image"}
                  />
                ) : (
                  <img
                    className={
                      "image-card mb-[8px] wow fadeInUp h-full object-cover"
                    }
                    src={props.data.imageUrl}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/images/default/tin1.png";
                    }}
                    alt={"image"}
                  />
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-cover"></div>
                <div className="text-content absolute lg:bottom-[10px] lg:left-[16px]">
                  <div className="border-l-4 px-[12px] ">
                    {props.data?.content}
                  </div>
                  {props.data.dateTime && (
                    <div className="flex items-center">
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
                            stroke="currentColor"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                      {moment(props.data.dateTime).format("DD/MM/YYYY HH:mm")}
                    </div>
                  )}
                </div>
              </div>

              <div className="card-back cursor-pointer">
                <div className="title-back px-[20px] flex flex-col justify-center pt-[50px]  bg-white">
                  <div className="border-l-2 pl-[12px] lg:border-primary-500 content wow fadeInUp h-full">
                    {props.data.dateTime && (
                      <div className="text-primary time-content flex items-center">
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
                              stroke="#BC2826"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                        {moment(props.data.dateTime).format("DD/MM/YYYY HH:mm")}
                      </div>
                    )}
                    <div className="card-content">{props.data.content}</div>
                  </div>
                  <div className="mt-[30px] text-gray-500 card-content">
                    {props.data.description}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </CardBigEventWrapper>
    );
  } else {
    return (
      <CardEventWrapper>
        <Link href={props.data.link ? props.data.link : "#"} className="h-full">
          <div
            className="card cursor-pointer h-full bg-white lg:shadow"
            style={props.style}
          >
            {props.category ? (
              <div className="h-[214px]">
                <img
                  className={"image-card wow fadeInUp  h-full  object-cover"}
                  src={props.data.imageUrl}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `${
                      props.category === "sach"
                        ? "/images/default/no_image.png"
                        : "/images/default/no_image.png"
                    }`;
                  }}
                  alt={"image"}
                />
              </div>
            ) : (
              <img
                className={
                  "image-card wow fadeInUp sm:h-[150px] lg:h-[139px] h-[250px] object-cover"
                }
                src={props.data.imageUrl}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "/images/default/no_image.png";
                }}
                alt={"image"}
              />
            )}
            <div className="lg:px-[20px]   lg:pb-[26px] lg:pt-[26px] pb-[16px] pt-[16px] px-[16px] bg-white">
              <p className="border-l-2 pl-[12px] lg:border-primary-500 content wow fadeInUp sm:min-h-[48px] ">
                {props.data.content}
              </p>
              {props?.data?.description && (
                <div className="block lg:hidden">
                  <div className="description  h-[40px]">
                    {props?.data?.description}
                  </div>
                </div>
              )}

              {props.data.dateTime && (
                <div className="time-content flex items-center">
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
                        stroke="#BC2826"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  {moment(props.data.dateTime).format("DD/MM/YYYY HH:mm")}
                </div>
              )}
            </div>
          </div>
        </Link>
      </CardEventWrapper>
    );
  }
};
const CardEventWrapper = styled.div`
  height: 100%;
  .card {
    //overflow: hidden;
    //max-width: 262px;
    //box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    img {
      //max-width: 262px;
      width: 100%;
    }
    .content {
      margin-bottom: 6px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #212529;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .description {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #495057;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
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
`;
const CardBigEventWrapper = styled.div`
  height: 100%;

  .card {
    //overflow: hidden;
    //max-width: 262px;

    img {
      //max-width: 262px;
      width: 100%;
    }
    .content {
      margin-bottom: 6px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #212529;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .description {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #495057;
    }
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
  .text-content {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;

    color: #ffffff;
  }

  .card {
    position: relative;
    //height: 400px;
    width: 100%;
    //margin: 10px 0;
    transition: ease all 1.3s;
    perspective: 1200px;

    &:hover {
      .cover {
        transform: rotateX(0deg) rotateY(-180deg);

        &:before {
          transform: translateZ(30px);
        }

        &:after {
          background-color: black;
        }

        h1 {
          transform: translateZ(100px);
        }

        .price {
          transform: translateZ(60px);
        }

        a {
          transform: translateZ(-60px) rotatey(-180deg);
        }
      }
    }

    .cover {
      //position: absolute;
      //height: 100%;
      top: 0;
      left: 0;
      width: 100%;
      transform-style: preserve-3d;
      transition: ease all 1.3s;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      //&:before {
      //	content: '';
      //	position: absolute;
      //	border: 5px solid rgba(255, 255, 255, .5);
      //	box-shadow: 0 0 12px rgba(0, 0, 0, .3);
      //	top: 20px;
      //	left: 20px;
      //	right: 20px;
      //	bottom: 20px;
      //	z-index: 2;
      //	transition: ease all 1.3s;
      //	transform-style: preserve-3d;
      //	transform: translateZ(0px);
      //}
      //
      //&:after {
      //	content: '';
      //	position: absolute;
      //	top: 0px;
      //	left: 0px;
      //	right: 0px;
      //	bottom: 0px;
      //	z-index: 2;
      //	transition: ease all 1.3s;
      //	background: rgba(0, 0, 0, .4);
      //}

      h1 {
        font-weight: 600;
        position: absolute;
        bottom: 55px;
        left: 50px;
        color: white;
        transform-style: preserve-3d;
        transition: ease all 1.3s;
        z-index: 3;
        font-size: 3em;
        transform: translateZ(0px);
      }

      .price {
        font-weight: 200;
        position: absolute;
        top: 55px;
        right: 50px;
        color: white;
        transform-style: preserve-3d;
        transition: ease all 1.3s;
        z-index: 4;
        font-size: 2em;
        transform: translateZ(0px);
      }
    }

    .card-back {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      width: 100%;
      background: #ffffff;
      border: 1px solid #f0f0f0;
      transform-style: preserve-3d;
      transition: ease all 1.3s;
      transform: translateZ(-1px);
      //display: flex;
      //align-items: center;
      //justify-content: center;

      .title-back {
        transform-style: preserve-3d;
        transition: ease transform 1.3s, ease background 0.5s;
        transform: translateZ(-1px) rotatey(-180deg);
        background: transparent;
        border: 1px solid white;
        font-weight: 200;
        font-size: 1.3em;
        //color: white;
        //padding: 14px 32px;
        outline: none;
        text-decoration: none;

        //&:hover {
        //	background-color: white;
        //	color: #0b0f08;
        //}
      }
    }
  }
  .card-content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export default CardEvent;
