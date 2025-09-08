import styled from "styled-components";
import CardCTDT from "./CardCTDT";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
// @ts-ignore
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const ChuongTrinhDaoTao = () => {
  const [common] = useCommonTranslation();
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
      title: "Truyền thông ĐPT",
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
      <div className="container mx-auto px-6">
        <div className="header-section">
          <div className="text-content">
            <h2 className="title">{common("training.title")}</h2>
            <p className="subtitle">
              {common("training.subtitle")}
            </p>
          </div>

          <div className="navigation-arrows">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="arrow-btn prev-btn"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 5L7.5 10L12.5 15" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="arrow-btn next-btn"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="cards-container">
          <Slider ref={sliderRef} {...settings}>
            {dataCTDT.map((item, idx) => (
              <div className="card-slide" key={idx}>
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
  padding: 40px 0;
  
  .header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 17px;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .title {
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.19;
    letter-spacing: 5%;
    color: #051A53;
    margin: 0;
  }

  .subtitle {
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: 5%;
    color: #535355;
    margin: 0;
  }

  .navigation-arrows {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .arrow-btn {
    width: 36px;
    height: 36px;
    border-radius: 200px;
    background-color: #F3F4F7;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #E9EAED;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .cards-container {
    width: 100%;
  }

  .card-slide {
    padding: 0 10px;
  }

  .slick-track {
    display: flex !important;
    align-items: stretch;
  }

  .slick-slide {
    height: auto;
    
    > div {
      height: 100%;
    }
  }

  .slick-list {
    margin: 0 -10px;
  }

  @media (max-width: 1200px) {
    .header-section {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }

    .navigation-arrows {
      align-self: flex-end;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    
    .title {
      font-size: 20px;
    }

    .subtitle {
      font-size: 14px;
    }

    .card-slide {
      padding: 0 5px;
    }

    .slick-list {
      margin: 0 -5px;
    }
  }
`;

export default ChuongTrinhDaoTao;
