import styled from "styled-components";
import { da } from "date-fns/locale";
import React from "react";
import Link from "next/link";
interface IProps {
  data: {
    no: string;
    title: string;
    content: string;
    link?: string;
  };
}
const CardNghienCuu = (props: IProps) => {
  const { data } = props;
  return (
    <CardNghienCuuWrapper>
      <Link href={data?.link ?? "#"}>
        <div className="flex hover:border-none border-b border-primary py-[40px] px-[20px] justify-between cursor-pointer">
          <div className="grid grid-cols-6 gap-[16px] w-full">
            <div className="col-span-1 no-number text-primary shrink-0 flex items-center">
              {data.no}
            </div>
            <div className="col-span-2 text-primary title flex items-center">{data.title}</div>
            <div className="col-span-3 w-full flex flex-col justify-center">
              <div className="content mb-[18px]">{data.content}</div>
              <div>
                <div className="show-more flex items-center cursor-pointer">
                  <div className="mr-[24px] shrink-0">Xem thêm</div>
                  <img src="./images/icons/arrow-right-2.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </CardNghienCuuWrapper>
  );
};
const CardNghienCuuWrapper = styled.div`
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(20, 33, 65, 0.06),
        rgba(20, 33, 65, 0.06)
      ),
      #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  }
  .no-number {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 76px;
    line-height: 92px;
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
  .content {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    color: #73787e;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .show-more {
    color: #de221a;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
`;
export default CardNghienCuu;
