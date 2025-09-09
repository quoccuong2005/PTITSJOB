import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BreadcrumbPage from "../../components/Breadcrumb";
import CourseProgramCard from "../../components/AISCard";
import { CourseCardProps } from "../../components/AISCard/types";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { ELang } from "../../utils/constant";
import { getAllKhoaHoc } from "../../api/khoahoc";
import useCommonTranslation from "../../hooks/useCommonTranslation";

const TatCaKhoaHocPage = () => {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);
  const [common] = useCommonTranslation();
  const router = useRouter();
  const { search = "" } = router.query;
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const getKhoaHoc = async (page?: number) => {
    try {
      const response = await getAllKhoaHoc({
        lang: currentLang as ELang,
        q: String(search),
        page: page || 1,
        limit: 3,
      });
      const data = response.data.data;
      const pagi = response.data.pagination;
      setTotal(pagi.total_pages);
      setCurrentPage(pagi.page);
      if (!data) return;
      const mapper: CourseCardProps[] = data.map((item) => {
        return {
          variant: "course",
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          id: item.id,
          title: item.name,
          href: item.course_url,
          imageUrl: item.image_url,
          durationMinutes: item.duration * 60,
          certificateType: item.topics.map((topic) => topic.name).join(", "),
          isAI: true,
        };
      });
      setCourses(mapper);
    } catch (err) {}
  };
  useEffect(() => {
    if (currentLang) getKhoaHoc();
  }, [currentLang, search]);

  useEffect(() => {
    setIsHydrated(true);
    setLoading(false);
  }, []);

  const handlePageChange = (page: number) => {
    getKhoaHoc(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                {courses.map((course) => (
                  <div key={course.id} className="course-item">
                    <CourseProgramCard {...course} />
                  </div>
                ))}
              </CoursesGrid>

              {courses.length === 0 && !loading && (
                <NoResultsSection>
                  <div className="no-results-text">
                    {common('pages.allCourses.noResultsWithQuery').replace('{query}', search as string)}
                  </div>
                </NoResultsSection>
              )}

              {total > 1 && (
                <PaginationSection>
                  <Pagination>
                    <button
                      className="nav-button prev"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M12.5 15L7.5 10L12.5 5"
                          stroke={currentPage === 1 ? "#C3C7CC" : "#051A53"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {Array.from({ length: Math.min(5, total) }, (_, i) => {
                      let pageNumber;
                      if (total <= 5) {
                        pageNumber = i + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= total - 2) {
                        pageNumber = total - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }

                      return (
                        <button
                          key={pageNumber}
                          className={`page-button ${
                            currentPage === pageNumber ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}

                    <button
                      className="nav-button next"
                      disabled={currentPage === total}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.5 5L12.5 10L7.5 15"
                          stroke={currentPage === total ? "#C3C7CC" : "#051A53"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
  min-height: 90vh;
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
    color: #051a53;
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
    color: #051a53;
    background: transparent;
    padding-left: 12px;

    &::placeholder {
      color: #c0c0c0;
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
    background: #f3f4f7;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background: #e5e7eb;
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
    color: #6f6f6f;

    &:hover {
      background: #f3f4f7;
    }

    &.active {
      background: #bc2826;
      color: #fff;
    }
  }
`;

export default TatCaKhoaHocPage;
