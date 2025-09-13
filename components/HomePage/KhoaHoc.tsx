import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CourseProgramCard from "../AISCard";
import AISButton from "../AISButton";
import { CourseCardProps } from "../AISCard/types";
// @ts-ignore
import Slider from "react-slick";
import { getKhoaHocMienPhi, getKhoaHocMoiNhat, getKhoaHocNangCao, getKhoaHocPhoBien } from "../../api/khoahoc";
import { useRouter } from "next/router";
import { ELang, LangMap } from "../../utils/constant";
import { useTranslation } from "react-i18next";

interface KhoaHocProps {
  title?: string;
  description?: string;
  buttonText?: string;
  courses?: CourseCardProps[];
  type?: "chungchi" | "phobien" | "moinhat" | "mienphi" | "nangcao",
  autoplay?: boolean
}

const KhoaHoc: React.FC<KhoaHocProps> = (props: KhoaHocProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const router = useRouter();
  const {title, description, buttonText, courses, type, autoplay=true} = props;
  const [listCourses, setListCourses] = useState<CourseCardProps[]>([]);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const settings = {
    dots: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: autoplay,        
    autoplaySpeed: 2000, 
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };
  useEffect(() => {
  if (!currentLang) return;

  const handler = setTimeout(() => {
    (async () => {
      console.log(currentLang);
      let res;
      switch (type) {
        case "chungchi":
        case "phobien":
          res = getKhoaHocPhoBien(currentLang as ELang);
          break;
        case "moinhat":
          res = getKhoaHocMoiNhat(currentLang as ELang);
          break;
        case "mienphi":
          res = getKhoaHocMienPhi(currentLang as ELang);
          break;
        case "nangcao":
          res = getKhoaHocNangCao(currentLang as ELang);
          break;
        default:
          res = getKhoaHocPhoBien(currentLang as ELang);
          break;
      }

      try {
        const response = await res;
        const data = response.data.data;
        if (!data) return;

        const mapper: CourseCardProps[] = data.map(item => ({
          variant: "course",
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          id: item.id,
          title: item.name,
          href: item.course_url,
          imageUrl: item.image_url,
          durationMinutes: item.duration * 60,
          certificateType: item.topics.map(topic => topic.name).join(", "),
          isAI: true,
          tags: item?.tags?.map(item => {
            return item.name
          })
        }));

        setListCourses(mapper);
      } catch (err) {
        console.error(err);
      }
    })();
  }, 100);

  return () => clearTimeout(handler);
}, [currentLang]);

  const coursesToDisplay = courses?.length ? courses : listCourses;

  return (
    <KhoaHocWrapper>
      <div className="container mx-auto">
        <div className="section-header">
          <div className="header-content">
            <div className="text-content">
              <h2 className="section-title">{title}</h2>
              <p className="section-description">{description}</p>
            </div>
            <div className="navigation-arrows">
              <button className="nav-button" aria-label="Previous courses" onClick={() => sliderRef.current?.slickPrev()}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="nav-button" aria-label="Next courses" onClick={() => sliderRef.current?.slickNext()}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {coursesToDisplay.map((course) => (
              <div className="slick-slide">
                <CourseProgramCard key={course.id} {...course} />
              </div>
            ))}
            </Slider>
        </div>

        <div className="button-container">
          <AISButton type="default" onClick={() => router.push('/tat-ca-khoa-hoc')}>
            {buttonText}
          </AISButton>
        </div>
      </div>
    </KhoaHocWrapper>
  );
};

const KhoaHocWrapper = styled.div`
  .slick-slider {
    margin-left: -10px;
    margin-right: -10px;
  }
  .slick-list {
    padding-top: 10px;
    .slick-track {
      display: flex;
      gap: 20px;
    }
  }
  .section-header {
    margin-bottom: 20px;
    width: 100%;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 17px;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .section-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.193;
    letter-spacing: 0.05em;
    color: #051A53;
    margin: 0;
  }

  .section-description {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.193;
    letter-spacing: 0.05em;
    color: #535355;
    margin: 0;
    max-width: 600px;
  }

  .navigation-arrows {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background: #F3F4F7;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #E5E7EB;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }

    &:focus-visible {
      outline: 2px solid #BC2826;
      outline-offset: 2px;
    }
  }

  .button-container {
    margin-top: 20px;
  }

  @media (max-width: 1280px) {
    .container {
      padding: 0 20px;
      max-width: 100%;
    }
    
    .course-grid {
      width: 100%;
      height: auto;
      justify-content: flex-start;
      overflow-x: auto;
      padding-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    
    .container {
      padding: 0 16px;
      max-width: 100%;
    }

    .header-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .navigation-arrows {
      align-self: flex-end;
    }

    .section-title {
      font-size: 20px;
    }

    .section-description {
      font-size: 14px;
    }

    .course-grid {
      width: 100%;
      height: auto;
      gap: 12px;
      justify-content: flex-start;
    }
  }
`;

export default KhoaHoc;
