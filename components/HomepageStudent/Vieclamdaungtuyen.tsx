import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// Mock data - có thể thay thế bằng dữ liệu thực từ API
const appliedJobs = [
  {
    id: 1,
    company: "Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam",
    position: "Data Analyst (Risk Management)",
    location: "Hà Nội, Việt Nam",
    salary: "25.000.000đ - 35.000.000đ",
    applyDate: "23-02-2023 (08:31)",
    logo: "https://seeklogo.com/images/T/techcombank-logo-D6919B38D2-seeklogo.com.png",
    status: "applied" // applied hoặc interviewing
  },
  {
    id: 2,
    company: "Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam",
    position: "Data Analyst (Risk Management)",
    location: "Hà Nội, Việt Nam",
    salary: "25.000.000đ - 35.000.000đ",
    applyDate: "23-02-2023 (08:31)",
    logo: "https://seeklogo.com/images/T/techcombank-logo-D6919B38D2-seeklogo.com.png",
    status: "applied"
  },
  {
    id: 3,
    company: "Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam",
    position: "Data Analyst (Risk Management)",
    location: "Hà Nội, Việt Nam",
    salary: "25.000.000đ - 35.000.000đ",
    interviewStatus: "Nhà tuyển dụng đã xem hồ sơ",
    logo: "https://seeklogo.com/images/T/techcombank-logo-D6919B38D2-seeklogo.com.png",
    status: "interviewing"
  },
  {
    id: 4,
    company: "Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam",
    position: "Data Analyst (Risk Management)",
    location: "Hà Nội, Việt Nam",
    salary: "25.000.000đ - 35.000.000đ",
    interviewStatus: "Nhà tuyển dụng đã xem hồ sơ",
    logo: "https://seeklogo.com/images/T/techcombank-logo-D6919B38D2-seeklogo.com.png",
    status: "interviewing"
  },
];

const Vieclamdaungtuyen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const jobsPerSlide = 2;
  const totalSlides = Math.ceil(appliedJobs.length / jobsPerSlide);

  const handlePrevious = () => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  // Lấy jobs cho slide hiện tại
  const displayedJobs = appliedJobs.slice(
    currentSlide * jobsPerSlide,
    (currentSlide + 1) * jobsPerSlide
  );

  return (
    <ViecLamWrapper>
      <Container>
        <Header>
          <HeaderContent>
            <Title>Việc Làm Đã Ứng Tuyển</Title>
            <Description>Biết giá trị của bạn và tìm công việc phù hợp với cuộc sống của bạn</Description>
          </HeaderContent>
          <ViewAllLink href="/student/applied-jobs">
            Xem tất cả
          </ViewAllLink>
        </Header>

        <NavigationButtons>
          <NavButton onClick={handlePrevious} aria-label="Trước">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#051A53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </NavButton>
          <NavButton onClick={handleNext} aria-label="Sau">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="#051A53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </NavButton>
        </NavigationButtons>

        <JobGrid>
          {displayedJobs.map((job) => (
            <JobCard key={job.id} href={`/student/jobs/${job.id}`}>
              <CompanyInfo>
                <CompanyLogo>
                  <img src={job.logo} alt={job.company} />
                </CompanyLogo>
                <CompanyDetails>
                  <CompanyName>{job.company}</CompanyName>
                  <JobPosition>{job.position}</JobPosition>
                </CompanyDetails>
              </CompanyInfo>

              <JobDetails>
                <JobLocation>
                  <LocationIcon>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#666" />
                    </svg>
                  </LocationIcon>
                  <span>{job.location}</span>
                </JobLocation>

                <InfoButtonWrapper>
                  <InfoButton>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#666" />
                    </svg>
                  </InfoButton>
                </InfoButtonWrapper>
              </JobDetails>

              <ApplicationStatus>
                {job.status === 'applied' ? (
                  <AppliedStatus>
                    <span>Đã ứng tuyển ({job.applyDate})</span>
                  </AppliedStatus>
                ) : (
                  <InterviewingStatus>
                    <span>{job.interviewStatus}</span>
                  </InterviewingStatus>
                )}
              </ApplicationStatus>
            </JobCard>
          ))}
        </JobGrid>

        <MobileViewAll>
          <ViewAllMobileLink href="/student/applied-jobs">
            Xem tất cả
          </ViewAllMobileLink>
        </MobileViewAll>
      </Container>
    </ViecLamWrapper>
  );
};

// Styled Components
const ViecLamWrapper = styled.section`
  background-color: #FF918F;
  background-image: linear-gradient(to right, #BC2826, #FF918F);
  padding: 40px 0;
  color: white;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-right: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding-right: 0;
  }
`;

const HeaderContent = styled.div`
  @media (max-width: 768px) {
    margin-right: 70px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ViewAllLink = styled(Link)`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
  display: inline-block;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileViewAll = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

const ViewAllMobileLink = styled(Link)`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
  display: inline-block;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  display: flex;
  gap: 8px;
  
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;

const NavButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0f0f0;
  }
`;

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
   
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const JobCard = styled(Link)`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  color: #333;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 100%;
  min-height: 180px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const CompanyDetails = styled.div`
  flex: 1;
  min-width: 0; /* Để đảm bảo ellipsis hoạt động */
`;

const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid #E1E1E1;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const CompanyName = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const JobPosition = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #051A53;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const JobDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
`;

const JobLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #666;
  flex: 1;
`;

const LocationIcon = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const InfoButtonWrapper = styled.div`
  flex-shrink: 0;
`;

const InfoButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ApplicationStatus = styled.div`
  margin-top: auto;
  display: flex;
`;

const StatusBase = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 200px;
  font-size: 13px;
  
  @media (max-width: 768px) {
    font-size: 11px;
    padding: 6px 10px;
  }
`;

const AppliedStatus = styled(StatusBase)`
  background-color: #FFF4E5;
  color: #F57C00;
`;

const InterviewingStatus = styled(StatusBase)`
  background-color: #E3F2FD;
  color: #1E88E5;
`;

export default Vieclamdaungtuyen;