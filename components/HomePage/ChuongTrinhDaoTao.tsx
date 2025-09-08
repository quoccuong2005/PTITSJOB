"use client";

import styled from "styled-components";
import CardCTDT from "./CardCTDT";
import { useTranslation } from "react-i18next";
// @ts-ignore
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const ChuongTrinhDaoTao = () => {
  const { t } = useTranslation("common");
  const sliderRef = useRef<Slider | null>(null);
  const dataCTDT = [
    {
      icon: "/images/icons/icon-ctdt.svg",
      title: "Công nghệ Thông tin",
      link: "/ctdt/cong-nghe-thong-tin",
      linkText: "Khám phá chi tiết",
    },
    {
      icon: "/images/icons/icon-ctdt.svg",
      title: "Truyền thông Đa phương tiện",
      link: "/ctdt/truyen-thong-da-phuong-tien",
      linkText: "Khám phá chi tiết",
    },
    {
      icon: "/images/icons/icon-ctdt.svg",
      title: "Quản trị Kinh doanh",
      link: "/ctdt/quan-tri-kinh-doanh",
      linkText: "Khám phá chi tiết",
    },
    {
      icon: "/images/icons/icon-ctdt.svg",
      title: "Marketing",
      link: "/ctdt/marketing",
      linkText: "Khám phá chi tiết",
    },
    {
      icon: "/images/icons/icon-ctdt.svg",
      title: "Fintech",
      link: "/ctdt/fintech",
      linkText: "Khám phá chi tiết",
    },
    {
      icon: "/images/icons/icon-ctdt.svg",
      title: "An toàn thông tin",
      link: "/ctdt/an-toan-thong-tin",
      linkText: "Khám phá chi tiết",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <CTDTWrapper>
      <div className="container mx-auto">
        <div className="header">
          <h2 className="title">{t("training.title") as string}</h2>
          <p className="subtitle">
            {t("training.subtitle") as string}
          </p>
        </div>

        <div className="arrows">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="arrow-btn"
          >
            ‹
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="arrow-btn"
          >
            ›
          </button>
        </div>

        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {dataCTDT.map((item, idx) => (
              <div className="slick-slide" key={idx}>
                <CardCTDT
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                  linkText={item.linkText}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </CTDTWrapper>
  );
};

const CTDTWrapper = styled.div`
  .slick-track {
    display: flex !important;
    gap: 20px;
  }
  .slick-slide {
    height: auto;
    * {
      height: 100%;
    }
  }
`;

export default ChuongTrinhDaoTao;
