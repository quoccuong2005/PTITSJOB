import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CourseProgramCard from "../AISCard";
import AISButton from "../AISButton";
import { CourseCardProps } from "../AISCard/types";
import { fakeJobsData } from "../AISCard/FakeData/Fakedata";
import JobCard from "../AISCard/FakeData/JobCard";
// @ts-ignore
import Slider from "react-slick";
import { getKhoaHocMienPhi, getKhoaHocMoiNhat, getKhoaHocNangCao, getKhoaHocPhoBien } from "../../api/khoahoc";
import { useRouter } from "next/router";
import { ELang, LangMap } from "../../utils/constant";
import { useTranslation } from "react-i18next";
import { getTintuyendungPage } from "../../api/tintuyendungpublic";
import { Tintuyendungpublic } from "../../api/tintuyendungpublic/type";


// Filter tabs data
const filterTabs = [
  { id: "all", label: "Tất cả", isActive: true },
  { id: "schedule", label: "Thời vụ", isActive: false },
  // { id: "timeline", label: "Theo dự án", isActive: false },
  // { id: "fulltime", label: "Fulltime (Fresher)", isActive: false },
  // { id: "remote", label: "Từ xa linh hoạt", isActive: false },
  // { id: "internship", label: "Thực tập", isActive: false },
];

interface KhoaHocProps {
  title?: string;
  description?: string;
  buttonText?: string;
  courses?: CourseCardProps[];
  type?: "chungchi" | "phobien" | "moinhat" | "mienphi" | "nangcao",
  autoplay?: boolean;
  showFilter?: boolean;
}

const Vieclambanquantam: React.FC<KhoaHocProps> = (props: KhoaHocProps) => {
  const sliderRef = useRef<Slider | null>(null);
  const router = useRouter();
  const { title, description, buttonText, courses, type, autoplay = true, showFilter = true } = props;
  const [listCourses, setListCourses] = useState<CourseCardProps[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [jobList, setJobList] = useState<Tintuyendungpublic[]>([]);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const defaultSlidesToShow = 3;

  // determine how many slides to show based on available items to avoid react-slick cloning
  const computedSlidesToShow = Math.min(defaultSlidesToShow, Math.max(1, jobList.length || 1));

  const settings = {
    dots: false,
    speed: 600,
    slidesToShow: computedSlidesToShow,
    slidesToScroll: 1,
    arrows: false,
    infinite: jobList.length > defaultSlidesToShow,
    autoplay: autoplay && jobList.length > defaultSlidesToShow,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: Math.min(3, jobList.length || 1) } },
      { breakpoint: 992, settings: { slidesToShow: Math.min(2, jobList.length || 1) } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };
  useEffect(() => {
    getTintuyendungPage()
      .then((response: any) => {
        console.log("Dữ liệu bài viết tuyển dụng:", response.data);
        const payload = response.data.data.result;
        const list = Array.isArray(payload)
          ? payload
          : Array.isArray((payload && (payload as any).data))
            ? (payload as any).data
            : [];
        setJobList(list as Tintuyendungpublic[]);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, []);
  console.log("jobList", jobList);






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

          console.log(mapper);

          const reordered = [
            ...mapper.filter(item => item.id == '32'),
            ...mapper.filter(item => item.id != '32'),
          ];

          setListCourses(reordered);
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

          </div>
        </div>

        {/* Filter Tabs */}
        {showFilter && (
          <div className="filter-tabs-container">
            <div className="filter-tabs">
              <div className="filter-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 3H14L11 7V11L5 7V3Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Lọc theo:</span>
              </div>
              <div className="tabs-wrapper">
                <>
                  <button className="nav-button" aria-label="Previous courses" onClick={() => sliderRef.current?.slickPrev()}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12.5 15L7.5 10L12.5 5" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {filterTabs.map((tab) => (
                    <>
                      <button
                        key={tab.id}
                        className={`tab-button ${activeFilter === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveFilter(tab.id)}
                      >
                        {tab.label}
                      </button>
                    </>
                  ))}
                  <button className="nav-button" aria-label="Next courses" onClick={() => sliderRef.current?.slickNext()}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              </div>
            </div>
          </div>
        )}

        <div className="courses-grid">
          <Slider ref={sliderRef} {...settings}>
            {jobList.map((job) => (
              <div className="course-item" key={job._id}>
                <JobCard {...job} />
              </div>
            ))}
          </Slider>
        </div>


        <div className="navigation-arrows" style={{ justifyContent: 'center', marginBottom: '40px' }}>
          <button className="nav-button" aria-label="Previous courses" onClick={() => sliderRef.current?.slickPrev()}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button className="nav-button" aria-label="Next courses" onClick={() => sliderRef.current?.slickNext()}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
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
      gap: 10px;
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
    /* Grid Layout cho courses */
  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
  }

  .course-item {
    width: 100%;
    height: 230px;
  }

  /* Filter Tabs Styles */
  .filter-tabs-container {
    margin-bottom: 24px;
  }

  /* Filter Tabs Styles */
  .filter-tabs-container {
    margin-bottom: 24px;
  }

  .filter-tabs {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 0;
    justify-content: space-between;
  }

  .filter-icon {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #6B7280;
    font-weight: 500;
    white-space: nowrap;
    background: #F9FAFB;
    border-radius: 8px;
    border: 1px solid #E5E7EB;
    padding:10px;
  }

  .tabs-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .tab-button {
    padding: 6px 16px;
    background: transparent;
    border: 1px solid #D1D5DB;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
      background: #F3F4F6;
      border-color: #9CA3AF;
    }

    &.active {
      background: #FEE2E2;
      border-color: #FCA5A5;
      color: #DC2626;
    }

    &:focus-visible {
      outline: 2px solid #DC2626;
      outline-offset: 2px;
    }
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

    /* Mobile Filter Tabs */
    .filter-tabs {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      padding: 16px;
    }

    .filter-icon {
      margin-bottom: 4px;
    }

    .tabs-wrapper {
      width: 100%;
      gap: 8px;
    }

    .tab-button {
      flex: 1;
      min-width: 0;
      text-align: center;
      padding: 8px 12px;
      font-size: 13px;
    }
  }
`;

export default Vieclambanquantam;
