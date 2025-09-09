import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BreadcrumbPage from '../../components/Breadcrumb';
import CourseProgramCard from '../../components/AISCard';
import { CourseCardProps } from '../../components/AISCard/types';
import { useRouter } from "next/router";
import { useCommonTranslation } from '../../hooks/useCommonTranslation';
import { getKhoaHocPhoBien } from '../../api/khoahoc';
import { ELang } from '../../utils/constant';
import { useTranslation } from 'react-i18next';

const TatCaKhoaHocPage = () => {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);
  const [common] = useCommonTranslation();
  const router = useRouter();
  const { search = "" } = router.query;
  const coursesPerPage = 12;
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const fetchCourses = async () => {
    if (!currentLang) return;
    
    setLoading(true);
    try {
      const response = await getKhoaHocPhoBien(currentLang as ELang);
      const data = response.data.data;
      
      if (data) {
        const mappedCourses: CourseCardProps[] = data.map(item => ({
          variant: "course",
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          id: item.id,
          title: item.name,
          href: item.course_url,
          imageUrl: item.image_url,
          durationMinutes: item.duration * 60,
          certificateType: item.topics.map(topic => topic.name).join(', '),
          status: "not_started",
          isAI: true
        }));
        setCourses(mappedCourses);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsHydrated(true);
    if (currentLang) {
      fetchCourses();
    }
  }, [currentLang]);

  
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes((search as string).toLowerCase())
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

  if (!isHydrated) {
    return (
      <Wrapper>
        <MainContent>
          <div className="container mx-auto">
            <Header>
              <div className="header-content">
                <h1 className="page-title">{common('pages.allCourses.title')}</h1>
              </div>
            </Header>
            <LoadingSection>
              <div className="loading-text">{common('pages.allCourses.loadingCourses')}</div>
            </LoadingSection>
          </div>
        </MainContent>
      </Wrapper>
    );
  }
  
  return (
    <Wrapper>
      <BreadcrumbSection>
        <div className="breadcrumb-container container mx-auto py-[12px]">
          <BreadcrumbPage
            data={[
              { title: common('breadcrumb.home'), path: '/' },
              { title: common('breadcrumb.allCourses'), path: '/tat-ca-khoa-hoc' }
            ]}
          />
        </div>
      </BreadcrumbSection>

      <MainContent>
        <div className="container mx-auto">
          <Header>
            <div className="header-content">
              <h1 className="page-title">{search ? common('pages.allCourses.searchResultsFor').replace('{query}', search as string) : common('pages.allCourses.title')}</h1>
            </div>
          </Header>

          {loading ? (
            <LoadingSection>
              <div className="loading-text">{common('pages.allCourses.loadingCourses')}</div>
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
                    {common('pages.allCourses.noResultsWithQuery').replace('{query}', search as string)}
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
  padding: 40px 0;
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
