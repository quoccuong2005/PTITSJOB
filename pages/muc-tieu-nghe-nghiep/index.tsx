import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import BreadcrumbPage from '../../components/Breadcrumb';
import CourseProgramCard from '../../components/AISCard';
import { ProgramCardProps } from '../../components/AISCard/types';
import { useCommonTranslation } from '../../hooks/useCommonTranslation';

type CategoryId = 'populate' | 'it' | 'media' | 'economic';


const TatCaChuongTrinhPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);
  const [common] = useCommonTranslation();
  const CATEGORIES: { id: CategoryId; label: string }[] = [
      { id: 'populate', label: common('tabs.populate') },
      { id: 'it',       label: common('tabs.it') },
      { id: 'media',    label: common('tabs.media') },
      { id: 'economic', label: common('tabs.economic') },
    ];
  const [activeTab, setActiveTab] = useState<CategoryId>('populate');
  const programsPerPage = 8;   
  const tabs = CATEGORIES;
  
  
  const rawPrograms = [
      {
        variant: 'program' as const,
        id: 'networkSecurity',
        href: '/muc-tieu-nghe-nghiep/networkSecurity',
        imageUrl: '/images/X5gFB1559764843.png',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'networkSecurity.title',
        descKey: 'networkSecurity.description',
        categoryId: 'populate' as CategoryId,
      },
      {
        variant: 'program' as const,
        id: 'financialAnalyst',
        href: '/muc-tieu-nghe-nghiep/phan-tich-tai-chinh',
        imageUrl: '/images/data-analysis.jpeg',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'financialAnalyst.title',
        descKey: 'financialAnalyst.description',
        categoryId: 'economic' as CategoryId,
      },
      {
        variant: 'program' as const,
        id: 'digitalStrategist',
        href: '/muc-tieu-nghe-nghiep/chien-luoc-truyen-thong-so',
        imageUrl: '/images/social.png',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'digitalStrategist.title',
        descKey: 'digitalStrategist.description',
        categoryId: 'media' as CategoryId,
      },
      {
        variant: 'program' as const,
        id: 'digitalStrategist_populate',
        href: '/muc-tieu-nghe-nghiep/chien-luoc-truyen-thong-so',
        imageUrl: '/images/social.png',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'digitalStrategist.title',
        descKey: 'digitalStrategist.description',
        categoryId: 'populate' as CategoryId,
      },
      {
        variant: 'program' as const,
        id: 'aiSpecialist_it',
        href: '/muc-tieu-nghe-nghiep/chuyen-gia-ai',
        imageUrl: '/images/data-analysis.jpeg',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'aiSpecialist.title',
        descKey: 'aiSpecialist.description',
        categoryId: 'it' as CategoryId,
      },
      {
        variant: 'program' as const,
        id: 'aiSpecialist_populate',
        href: '/muc-tieu-nghe-nghiep/chuyen-gia-ai',
        imageUrl: '/images/data-analysis.jpeg',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'aiSpecialist.title',
        descKey: 'aiSpecialist.description',
        categoryId: 'populate' as CategoryId,
      },
      {
        variant: 'program' as const,
        id: 'networkInfrastructure',
        href: '/muc-tieu-nghe-nghiep/ha-tang-mang',
        imageUrl: '/images/X5gFB1559764843.png',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'networkInfrastructure.title',
        descKey: 'networkInfrastructure.description',
        categoryId: 'it' as CategoryId,
      },
      {
        variant: 'program' as const,
        id: 'dataScientist_it',
        href: '/muc-tieu-nghe-nghiep/khoa-hoc-du-lieu',
        imageUrl: '/images/data-analysis.jpeg',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'dataScientist.title',
        descKey: 'dataScientist.description',
        categoryId: 'it' as CategoryId,
      },
      {
        variant: 'program' as const,
        id: 'dataScientist_economic',
        href: '/muc-tieu-nghe-nghiep/khoa-hoc-du-lieu',
        imageUrl: '/images/data-analysis.jpeg',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'dataScientist.title',
        descKey: 'dataScientist.description',
        categoryId: 'economic' as CategoryId,
      },
      {
        variant: 'program' as const,
        id: 'dataScientist_populate',
        href: '/muc-tieu-nghe-nghiep/khoa-hoc-du-lieu',
        imageUrl: '/images/data-analysis.jpeg',
        teachingOrgs: [{ name: 'PTIT', logoUrl: '/images/logo-ptit.png' }],
        titleKey: 'dataScientist.title',
        descKey: 'dataScientist.description',
        categoryId: 'populate' as CategoryId,
      },
    ];

  const programs = useMemo(() => {
    return rawPrograms.map(p => ({
      ...p,
      title: common(p.titleKey),
      description: p.descKey ? common(p.descKey) : undefined,
    }));
  }, [common]);

  const filteredPrograms = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return programs.filter(p => {
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        (p.description ?? '').toLowerCase().includes(q);
      const matchesTab = p.categoryId === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [programs, searchQuery, activeTab]);

  useEffect(() => {
    setIsHydrated(true);
    setActiveTab(tabs[0].id);
    const loadPrograms = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    loadPrograms();
  }, []);

  
  const totalPages = Math.ceil(filteredPrograms.length / programsPerPage);
  const startIndex = (currentPage - 1) * programsPerPage;
  const endIndex = startIndex + programsPerPage;
  const currentPrograms = filteredPrograms.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProgramClick = (programId: string) => {
    console.log('Program clicked:', programId);
    
  };
  if (!isHydrated) {
    return (
      <Wrapper>
        <MainContent>
          <div className="container mx-auto">
            <Header>
              <div className="header-content">
                <h1 className="page-title">{common('pages.allPrograms.title')}</h1>
              </div>
            </Header>
            <LoadingSection>
              <div className="loading-text">{common('pages.allPrograms.loadingPrograms')}</div>
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
              { title: common('breadcrumb.allPrograms'), path: '/muc-tieu-nghe-nghiep' }
            ]}
          />
        </div>
      </BreadcrumbSection>

      <MainContent>
        <div className="container mx-auto">
          <Header>
            <div className="header-content">
              <h1 className="page-title">{common('pages.allPrograms.title')}</h1>
              <SearchBox>
                <SearchIcon>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="#C0C0C0" strokeWidth="2"/>
                    <path d="M19 19l-4.35-4.35" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </SearchIcon>
                <input
                  type="text"
                  placeholder={common('pages.allPrograms.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </SearchBox>
            </div>
          </Header>

          <TabsSection>
            <TabsContainer>
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </TabButton>
              ))}
            </TabsContainer>
          </TabsSection>

          {loading ? (
            <LoadingSection>
              <div className="loading-text">{common('pages.allPrograms.loadingPrograms')}</div>
            </LoadingSection>
          ) : (
            <>
              <ProgramsGrid>
                {currentPrograms.map((program) => (
                  <div key={program.id} className="program-item">
                    <CourseProgramCard
                      {...program}
                      onClick={handleProgramClick}
                    />
                  </div>
                ))}
              </ProgramsGrid>

              {filteredPrograms.length === 0 && !loading && (
                <NoResultsSection>
                  <div className="no-results-text">
                    {searchQuery 
                      ? common('pages.allPrograms.noResultsWithQuery').replace('{query}', searchQuery).replace('{category}', tabs.find(tab => tab.id === activeTab)?.label || activeTab)
                      : common('pages.allPrograms.noResultsInCategory').replace('{category}', tabs.find(tab => tab.id === activeTab)?.label || activeTab)
                    }
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

const TabsSection = styled.div`
  margin-bottom: 32px;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 12px 24px;
  border: 1px solid ${props => props.active ? '#BC2826' : '#E5E7EB'};
  border-radius: 8px;
  background: ${props => props.active ? '#BC2826' : '#FFFFFF'};
  color: ${props => props.active ? '#FFFFFF' : '#6B7280'};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.25;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    border-color: #BC2826;
    background: ${props => props.active ? '#BC2826' : '#FEF2F2'};
    color: ${props => props.active ? '#FFFFFF' : '#BC2826'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(188, 40, 38, 0.1);
  }
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
    max-width: 500px;
  }
`;

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
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

export default TatCaChuongTrinhPage;
