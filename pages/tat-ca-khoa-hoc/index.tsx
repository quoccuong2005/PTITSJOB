import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BreadcrumbPage from '../../components/Breadcrumb';
import CourseProgramCard from '../../components/AISCard';
import { CourseCardProps } from '../../components/AISCard/types';
// Removed: import { getKhoaHocPhoBien } from '../../api/khoahoc';

const TatCaKhoaHocPage = () => {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const coursesPerPage = 12;

  const mockCourses: CourseCardProps[] = [
    {
      variant: "course",
      id: "course_1",
      title: "Nguyên lý ngôn ngữ lập trình",
      href: "/courses/nguyen-ly-ngon-ngu-lap-trinh",
      imageUrl: "/images/test_course1.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_2",
      title: "Xác xuất thống kê",
      href: "/courses/xac-xuat-thong-ke",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_3",
      title: "An toàn và bảo mật hệ thống thông tin",
      href: "/courses/an-toan-bao-mat",
      imageUrl: "/images/test_course1.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_4",
      title: "Xử lý ngôn ngữ tự nhiên Natural Language Processing",
      href: "/courses/xu-ly-ngon-ngu-tu-nhien",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started",
      isAI: true
    },
    {
      variant: "course",
      id: "course_5",
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
      id: "course_6",
      title: "Đại số tuyến tính",
      href: "/courses/dai-so-tuyen-tinh",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_7",
      title: "Nguyên lý hệ điều hành",
      href: "/courses/nguyen-ly-he-dieu-hanh",
      imageUrl: "/images/test_course1.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Khoá học",
      status: "not_started",
      isAI: true
    },
    {
      variant: "course",
      id: "course_8",
      title: "Trí tuệ nhân tạo (AI)",
      href: "/courses/tri-tue-nhan-tao",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started",
      isAI: true
    },
    {
      variant: "course",
      id: "course_9",
      title: "Vật lý đại cương",
      href: "/courses/vat-ly-dai-cuong",
      imageUrl: "/images/test_course1.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_10",
      title: "Nhập môn lập trình",
      href: "/courses/nhap-mon-lap-trinh",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Khoá học",
      status: "not_started",
      isAI: true
    },
    {
      variant: "course",
      id: "course_11",
      title: "Mạng máy tính (Computer Networks)",
      href: "/courses/mang-may-tinh",
      imageUrl: "/images/test_course1.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_12",
      title: "Phát triển ứng dụng web",
      href: "/courses/phat-trien-ung-dung-web",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_13",
      title: "Công nghệ Web nâng cao (Fullstack, Frameworks: React, Angular, Vue…)",
      href: "/courses/cong-nghe-web-nang-cao",
      imageUrl: "/images/test_course1.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Khoá học",
      status: "not_started",
      isAI: true
    },
    {
      variant: "course",
      id: "course_14",
      title: "Phát triển ứng dụng di động (Android/iOS)",
      href: "/courses/phat-trien-ung-dung-di-dong",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_15",
      title: "Xử lý ảnh & thị giác máy tính",
      href: "/courses/xu-ly-anh-thi-giac-may-tinh",
      imageUrl: "/images/test_course1.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Khoá học",
      status: "not_started"
    },
    {
      variant: "course",
      id: "course_16",
      title: "Kỹ nghệ phần mềm nâng cao (Agile, DevOps)",
      href: "/courses/ky-nghe-phan-mem-nang-cao",
      imageUrl: "/images/test_course.png",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      durationMinutes: 136,
      certificateType: "Chứng chỉ chuyên môn",
      status: "not_started",
      isAI: true
    }
  ];

  useEffect(() => {
    // Set courses from mock data instead of fetching from an API
    setCourses(mockCourses);
    setLoading(false);
  }, []);

  
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseClick = (courseId: string) => {
    console.log('Course clicked:', courseId);
    
  };

  return (
    <Wrapper>
      <BreadcrumbSection>
        <div className="breadcrumb-container container mx-auto py-[12px]">
          <BreadcrumbPage
            data={[
              { title: 'Trang chủ', path: '/' },
              { title: 'Tất cả khóa học', path: '/tat-ca-khoa-hoc' }
            ]}
          />
        </div>
      </BreadcrumbSection>

      <MainContent>
        <div className="container mx-auto">
          <Header>
            <div className="header-content">
              <h1 className="page-title">Tất cả khoá học</h1>
            </div>
          </Header>

          {loading ? (
            <LoadingSection>
              <div className="loading-text">Đang tải khóa học...</div>
            </LoadingSection>
          ) : (
            <>
              <CoursesGrid>
                {currentCourses.map((course) => (
                  <div key={course.id} className="course-item">
                    <CourseProgramCard
                      {...course}
                      onClick={handleCourseClick}
                    />
                  </div>
                ))}
              </CoursesGrid>

              {filteredCourses.length === 0 && !loading && (
                <NoResultsSection>
                  <div className="no-results-text">
                    Không tìm thấy khóa học nào phù hợp với từ khóa "{searchQuery}"
                  </div>
                </NoResultsSection>
              )}

              {totalPages > 1 && (
                <PaginationSection>
                  <Pagination>
                    <button
                      className="nav-button prev"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.5 15L7.5 10L12.5 5" stroke={currentPage === 1 ? "#C3C7CC" : "#051A53"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = i + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNumber}
                          className={`page-button ${currentPage === pageNumber ? 'active' : ''}`}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}

                    <button
                      className="nav-button next"
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 5L12.5 10L7.5 15" stroke={currentPage === totalPages ? "#C3C7CC" : "#051A53"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </Pagination>
                </PaginationSection>
              )}
            </>
          )}
        </div>
      </MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  min-height: 100vh;
`;

const BreadcrumbSection = styled.div`
  background: #fff;
`;

const MainContent = styled.div`
  padding: 32px 100px 40px;
  
  @media (max-width: 1200px) {
    padding: 24px 20px 32px;
  }
`;

const Header = styled.div`
  margin-bottom: 20px;
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 17px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
    }
  }
  
  .page-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.193;
    letter-spacing: 0.05em;
    color: #051A53;
    margin: 0;
  }
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;
  border: 1.2px solid rgba(238, 238, 238, 0.93);
  border-radius: 8px;
  padding: 8px 16px 8px 12px;
  background: #fff;
  min-width: 320px;
  
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
  
  input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 16px;
    line-height: 1.193;
    letter-spacing: 0.03em;
    color: #051A53;
    background: transparent;
    padding-left: 12px;
    
    &::placeholder {
      color: #C0C0C0;
    }
  }
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const LoadingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  
  .loading-text {
    font-size: 16px;
    color: #535355;
  }
`;

const NoResultsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  
  .no-results-text {
    font-size: 16px;
    color: #535355;
    text-align: center;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 295px);
  gap: 20px;
  margin-bottom: 40px;
  justify-content: center;
  
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 295px);
  }
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 295px);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 295px;
  }
  
  .course-item {
    display: flex;
    justify-content: center;
  }
`;

const PaginationSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  .nav-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: #F3F4F7;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    
    &:not(:disabled):hover {
      background: #E5E7EB;
    }
  }
  
  .page-button {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 33px;
    height: 33px;
    padding: 7px 13px;
    border: none;
    border-radius: 8px;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.35;
    letter-spacing: 0.03em;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #fff;
    color: #6F6F6F;
    
    &:hover {
      background: #F3F4F7;
    }
    
    &.active {
      background: #BC2826;
      color: #fff;
    }
  }
`;

export default TatCaKhoaHocPage;
