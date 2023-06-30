import styled from "styled-components";
import CardEvent from "../Event/components/CardEvent";
import Title from "../Title";
import React from "react";
// @ts-ignore
import Slider from "react-slick";
import { IDataHome } from "../../utils/interface";
import { useRouter } from "next/router";
import { renderImage } from "../../utils/util";

const About = (props: { dataHome: IDataHome }) => {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <AboutWrapper>
      <div className="container mx-auto lg:mt-[50px] mt-[20px] px-[20px] lg:px-0">
        <div>
          <Title title={"Về chúng tôi"} uppercase={true} description={""} />
        </div>
        <div className=" hidden lg:grid  grid-flow-col height-grid  gap-[30px]">
          <div className="row-span-2 col-span-2">
            <img
              className="h-full w-full"
              src={renderImage(
                props.dataHome?.about?.images?.data?.[0]?.attributes?.url
              )}
              alt={"image"}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/images/default/no_image.png";
              }}
            />
          </div>
          <div className="row-span-1 ">
            <img
              className="h-full w-full"
              src={renderImage(
                props.dataHome?.about?.images?.data?.[1]?.attributes?.url
              )}
              alt={"image"}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/images/default/no_image.png";
              }}
            />
          </div>
          <div className="row-span-1  ">
            <img
              className="h-full w-full"
              src={renderImage(
                props.dataHome?.about?.images?.data?.[2]?.attributes?.url
              )}
              alt={"image"}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/images/default/no_image.png";
              }}
            />
          </div>
        </div>
        <div className="block lg:hidden">
          <Slider {...settings}>
            <a href={"#"} target={"_blank"} rel={"noreferrer"}>
              <img
                className="h-[260px] sm:h-[360px] w-full object-cover object-bottom"
                src={"./images/about/about-1.png"}
                alt={"image"}
              />
            </a>
            <a href={"#"} target={"_blank"} rel={"noreferrer"}>
              <img
                className="h-[260px] sm:h-[360px] w-full object-cover object-bottom"
                src={"./images/about/about-2.png"}
                alt={"image"}
              />
            </a>
            <a href={"#"} target={"_blank"} rel={"noreferrer"}>
              <img
                className="h-[260px] sm:h-[360px] w-full object-cover object-bottom"
                src={"./images/about/about-3.png"}
                alt={"image"}
              />
            </a>
          </Slider>
        </div>
        <div className="van-tat grid lg:grid-cols-3 grid-cols-1 gap-[30px] lg:mt-[40px] mt-[20px]">
          <div
            className="item cursor-pointer"
            onClick={() => {
              router.push(`/gioi-thieu?type=KH`);
            }}
          >
            <div className="title uppercase border-l-2 border-primary px-[10px] mb-[20px]">
              CHIẾN LƯỢC
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: props.dataHome?.about?.chienluoc,
              }}
            ></div>
            {/*<a className='content' href={'https://portal.ptit.edu.vn/chien-luoc-khoa-hoc-cong-nghe/'} rel={'noreferrer'} target={"_blank"}>*/}
            {/*	Đến năm 2022, hoạt động KHCN đóng vai trò nòng cốt trong sự phát triển của Học viện và hỗ trợ cho việc đổi*/}
            {/*	mới chương trình đào tạo để đáp ứng các yêu cầu của cuộc cách mạng công nghiệp 4.0; Phát triển các bài báo*/}
            {/*	khoa học trong nước và quốc tế cả số lượng và chất lượng, đặc biệt là các bài báo thuộc danh mục ISI và*/}
            {/*	Scopus; Hình thành một số sản phẩm, dịch vụ KHCN thương mại hóa, chiếm lĩnh được thị trường, tạo sự phát*/}
            {/*	triển bền vững.*/}
            {/*</a>*/}
          </div>
          <div
            className="item cursor-pointer"
            onClick={() => {
              router.push(`/gioi-thieu?type=NC`);
            }}
          >
            <div className="title uppercase border-l-2 border-primary px-[10px] mb-[20px]">
              ĐỊNH HƯỚNG
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: props.dataHome?.about?.dinhhuong,
              }}
            ></div>
            {/*<a className='content' href={'https://portal.ptit.edu.vn/chien-luoc-phat-trien-giai-doan-2020-2025-tam-nhin-2030/'} rel={'noreferrer'} target={"_blank"}>*/}
            {/*	Đến năm 2025, trở thành trường đại học có quy mô và chất lượng đào tạo, nghiên cứu hàng đầu Việt Nam về*/}
            {/*	công nghệ số, là một trong các đơn vị chủ lực cung cấp nhân lực, tri thức, chuyển giao công nghệ phục vụ*/}
            {/*	chuyển đổi số quốc gia. Là cơ sở đào tạo đại học tiên phong trong đổi mới phương thức đào tạo, có hệ sinh*/}
            {/*	thái số gắn kết chặt chẽ giữa nhà trường, sinh viên, doanh nghiệp và xã hội với mô hình quản trị đại học*/}
            {/*	thông minh, thân thiện và chuyên nghiệp.*/}
            {/*</a>*/}
          </div>
          <div
            className="item cursor-pointer"
            onClick={() => {
              router.push(`/gioi-thieu?type=LH`);
            }}
          >
            <div className="title uppercase border-l-2 border-primary px-[10px] mb-[20px]">
              LIÊN HỆ
            </div>
            {/*<a className='content' href={"https://portal.ptit.edu.vn/co-cau-to-chuc/phong-quan-ly-khoa-hoc-cong-nghe-hop-tac-quoc-te/"} target={"_blank"} rel={'noreferrer'}>*/}
            {/*	<b>Địa chỉ:</b> Tầng 2, nhà A1, Km10, Nguyễn Trãi, Hà Đông, Hà Nội*/}
            {/*	<br /> <b>Điện thoại:</b> 024.33524054*/}
            {/*</a>*/}
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: props.dataHome?.about?.lienhe,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="kham-pha md:py-[50px] py-[20px] md:mt-[50px] mt-[20px]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="dicover mb-[20px] lg:mb-0">
            {props.dataHome?.khamPha?.title?.toUpperCase()}
          </div>
          <div className="flex flex-col items-center mb-[20px] lg:mb-0">
            <div className="count mb-[20px]">
              {props.dataHome?.khamPha?.duLieu?.[0]?.soLuong} +
            </div>
            <div className="des">
              {props.dataHome?.khamPha?.duLieu?.[0]?.title?.toUpperCase()}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="count mb-[20px]">
              {props.dataHome?.khamPha?.duLieu?.[1]?.soLuong} +
            </div>
            <div className="des">
              {props.dataHome?.khamPha?.duLieu?.[1]?.title?.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};
const AboutWrapper = styled.div`
  .kham-pha {
    background-image: url("./images/about/bg-kp.png");
    .dicover {
      font-family: "Be Vietnam Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 35px;

      color: #ffffff;
    }
    .count {
      font-family: "Be Vietnam Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 51px;
      color: #ffffff;
    }
    .des {
      font-family: "Be Vietnam Pro";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;

      color: #ffffff;
    }
  }
  .item {
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      color: #de221a;
    }
    .content {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #18202a;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
  .van-tat {
    .item {
      .content {
        &:hover {
          color: #de221a;
        }
      }
    }
  }
  .height-grid{
    grid-template-rows: repeat(2, minmax(0, 235px));
  }
`;
export default About;
