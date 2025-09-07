import React from "react";
import styled from "styled-components";
import CourseProgramCard from "../AISCard";
import AISButton from "../AISButton";
import { CourseCardProps } from "../AISCard/types";

interface KhoaHocProps {
  title?: string;
  description?: string;
  buttonText?: string;
  courses?: CourseCardProps[];
}

const KhoaHoc: React.FC<KhoaHocProps> = ({ 
  title = "Chứng chỉ phổ biến nhất",
  description = "Khám phá các chứng chỉ phổ biến nhất của chúng tôi, sẵn sàng phục vụ cho mọi nhu cầu",
  buttonText = "Khám phá tất cả chứng chỉ",
  courses = []
}) => {
  const defaultCourses: CourseCardProps[] = [
    {
      variant: "course",
      id: "course_1",
      title: "Giải tích 1",
      href: "/courses/giai-tich-1",
      imageUrl: "/images/test_course1.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_2",
      title: "Đại số tuyến tính",
      href: "/courses/dai-so-tuyen-tinh",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 180,
      certificateType: "Chứng chỉ chuyên môn",
      status: "in_progress",
      progress: { percent: 65, completedLessons: 13, totalLessons: 20 }
    },
    {
      variant: "course",
      id: "course_3",
      title: "An toàn và bảo mật hệ thống thông tin",
      href: "/courses/an-toan-bao-mat",
      imageUrl: "/images/test_course1.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 240,
      certificateType: "Chứng chỉ chuyên môn",
      status: "completed",
      progress: { percent: 100, completedLessons: 24, totalLessons: 24 }
    },
    {
      variant: "course",
      id: "course_4",
      title: "Trí tuệ nhân tạo (AI)",
      href: "/courses/tri-tue-nhan-tao",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 320,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started",
      isAI: true
    },
  ];

  const coursesToDisplay = courses.length > 0 ? courses : defaultCourses;

  return (
    <KhoaHocWrapper>
      <div className="container py-10">
        <div className="section-header">
          <div className="header-content">
            <div className="text-content">
              <h2 className="section-title">{title}</h2>
              <p className="section-description">{description}</p>
            </div>
            <div className="navigation-arrows">
              <button className="nav-button" aria-label="Previous courses">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="nav-button" aria-label="Next courses">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="course-grid">
          {coursesToDisplay.map((course) => (
            <CourseProgramCard key={course.id} {...course} />
          ))}
        </div>

        <div className="button-container">
          <AISButton type="primary">
            {buttonText}
          </AISButton>
        </div>
      </div>
    </KhoaHocWrapper>
  );
};

const KhoaHocWrapper = styled.div`
  padding: 40px 0;
  background: #ffffff;
  
  .container {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-header {
    margin-bottom: 20px;
    width: 100%;
    max-width: 1240px;
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
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.193;
    letter-spacing: 0.05em;
    color: #051A53;
    margin: 0;
  }

  .section-description {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
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

  .course-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    width: 1240px;
    height: 420px;
    overflow-x: auto;
    flex-wrap: nowrap;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
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
      
      &::-webkit-scrollbar {
        height: 6px;
      }
      
      &::-webkit-scrollbar-track {
        background: #F3F4F7;
        border-radius: 3px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: #BC2826;
        border-radius: 3px;
      }
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
