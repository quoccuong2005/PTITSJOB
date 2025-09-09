import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BreadcrumbPage from '../../components/Breadcrumb';
import CourseProgramCard from '../../components/AISCard';
import { ProgramCardProps } from '../../components/AISCard/types';
import { useCommonTranslation } from '../../hooks/useCommonTranslation';

const TatCaChuongTrinhPage = () => {
  const [programs, setPrograms] = useState<ProgramCardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Phổ biến");
  const programsPerPage = 8; 

  const [common] = useCommonTranslation();
  
  const tabs = [
    common("tabs.populate"),
    common("tabs.it"), 
    common("tabs.multimedia"),
    common("tabs.dataScience"),
    common("tabs.computerScience")
  ];

  
  const mockPrograms: ProgramCardProps[] = [
    {
      variant: "program",
      id: "program_1",
      title: common("socialMedia.title"),
      href: "/chuong-trinh-dao-tao/truyen-thong-xa-hoi",
      imageUrl: "/images/social.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" }
      ],
      description: common("socialMedia.description"),
      category: "Phổ biến"
    },
    {
      variant: "program",
      id: "program_2", 
      title: common("dataAnalyst.title"),
      href: "/chuong-trinh-dao-tao/phan-tich-du-lieu",
      imageUrl: "/images/data-analysis.jpeg",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: common("dataAnalyst.description"),
      category: "Phổ biến"
    },
    {
      variant: "program",
      id: "program_3",
      title: common("networkSecurity.title"),
      href: "/chuong-trinh-dao-tao/an-ninh-mang",
      imageUrl: "/images/X5gFB1559764843.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: common("networkSecurity.description"),
      category: "Phổ biến"
    },
    {
      variant: "program",
      id: "program_4",
      title: "Chuyên gia phát triển Full-stack",
      href: "/chuong-trinh-dao-tao/fullstack-developer",
      imageUrl: "/images/ui.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: "Trở thành chuyên gia phát triển web đầy đủ với khả năng làm việc cả frontend và backend, sử dụng các công nghệ hiện đại như React, Node.js, và các cơ sở dữ liệu.",
      category: "Công nghệ thông tin"
    },
    {
      variant: "program",
      id: "program_5",
      title: "Chuyên gia thiết kế UX/UI",
      href: "/chuong-trinh-dao-tao/ux-ui-designer",
      imageUrl: "/images/social.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: "Học cách thiết kế giao diện người dùng trực quan và trải nghiệm người dùng tối ưu cho các ứng dụng web và di động.",
      category: "Công nghệ thông tin"
    },
    {
      variant: "program",
      id: "program_6",
      title: "Chuyên gia DevOps Engineer",
      href: "/chuong-trinh-dao-tao/devops-engineer",
      imageUrl: "/images/data-analysis.jpeg",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: "Nắm vững các công cụ và quy trình DevOps để tự động hóa việc triển khai, giám sát và quản lý hạ tầng công nghệ.",
      category: "Công nghệ thông tin"
    },
    {
      variant: "program",
      id: "program_7",
      title: "Chuyên gia Digital Marketing",
      href: "/chuong-trinh-dao-tao/digital-marketing",
      imageUrl: "/images/X5gFB1559764843.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: "Học các chiến lược marketing số hiệu quả, SEO, SEM, social media marketing và phân tích dữ liệu khách hàng.",
      category: "Đa phương tiện"
    },
    {
      variant: "program",
      id: "program_8",
      title: "Chuyên gia Machine Learning",
      href: "/chuong-trinh-dao-tao/machine-learning",
      imageUrl: "/images/ui.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: "Khám phá thế giới học máy với Python, TensorFlow và các thuật toán AI tiên tiến để giải quyết các bài toán thực tế.",
      category: "Khoa học dữ liệu"
    },
    {
      variant: "program",
      id: "program_9",
      title: "Chuyên gia Data Science",
      href: "/chuong-trinh-dao-tao/data-science",
      imageUrl: "/images/social.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: "Trở thành chuyên gia phân tích dữ liệu với Python, R, SQL và các kỹ thuật thống kê, machine learning để đưa ra insights từ dữ liệu.",
      category: "Khoa học dữ liệu"
    },
    {
      variant: "program",
      id: "program_10",
      title: "Chuyên gia Blockchain Developer",
      href: "/chuong-trinh-dao-tao/blockchain-developer",
      imageUrl: "/images/data-analysis.jpeg",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: "Học phát triển ứng dụng blockchain, smart contracts và cryptocurrency với Ethereum, Solidity và Web3.",
      category: "Khoa học máy tính"
    },
    {
      variant: "program",
      id: "program_11",
      title: "Chuyên gia Mobile App Development",
      href: "/chuong-trinh-dao-tao/mobile-app-development",
      imageUrl: "/images/X5gFB1559764843.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: "Phát triển ứng dụng di động đa nền tảng với React Native, Flutter hoặc native iOS/Android development.",
      category: "Khoa học máy tính"
    },
    {
      variant: "program",
      id: "program_12",
      title: "Chuyên gia Cloud Computing",
      href: "/chuong-trinh-dao-tao/cloud-computing",
      imageUrl: "/images/ui.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: "Nắm vững các dịch vụ cloud như AWS, Azure, Google Cloud và kiến trúc cloud để xây dựng hệ thống scalable.",
      category: "Khoa học máy tính"
    }
  ];

  useEffect(() => {
    
    const loadPrograms = async () => {
      setLoading(true);
      try {
        
        await new Promise(resolve => setTimeout(resolve, 500));
        setPrograms(mockPrograms);
      } catch (err) {
        setPrograms(mockPrograms);
      } finally {
        setLoading(false);
      }
    };

    loadPrograms();
  }, []);

  
  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = program.category === activeTab;
    return matchesSearch && matchesTab;
  });

  
  const totalPages = Math.ceil(filteredPrograms.length / programsPerPage);
  const startIndex = (currentPage - 1) * programsPerPage;
  const endIndex = startIndex + programsPerPage;
  const currentPrograms = filteredPrograms.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); 
    setSearchQuery(''); 
  };

  const handleProgramClick = (programId: string) => {
    console.log('Program clicked:', programId);
    
  };

  return (
    <Wrapper>
      <BreadcrumbSection>
        <div className="breadcrumb-container container mx-auto py-[12px]">
          <BreadcrumbPage
            data={[
              { title: 'Trang chủ', path: '/' },
              { title: 'Chương trình đào tạo', path: '/chuong-trinh-dao-tao' }
            ]}
          />
        </div>
      </BreadcrumbSection>

      <MainContent>
        <div className="container mx-auto">
          <Header>
            <div className="header-content">
              <h1 className="page-title">Chương trình đào tạo</h1>
              <SearchBox>
                <SearchIcon>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="#C0C0C0" strokeWidth="2"/>
                    <path d="M19 19l-4.35-4.35" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </SearchIcon>
                <input
                  type="text"
                  placeholder="Nhập từ khóa để tìm kiếm chương trình"
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
                  key={tab}
                  active={activeTab === tab}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab}
                </TabButton>
              ))}
            </TabsContainer>
          </TabsSection>

          {loading ? (
            <LoadingSection>
              <div className="loading-text">Đang tải chương trình đào tạo...</div>
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
                      ? `Không tìm thấy chương trình nào phù hợp với từ khóa "${searchQuery}" trong danh mục "${activeTab}"`
                      : `Không có chương trình nào trong danh mục "${activeTab}"`
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
