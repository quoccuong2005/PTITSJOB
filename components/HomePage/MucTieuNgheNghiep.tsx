import React, { useState } from "react";
import styled from "styled-components";
import CourseProgramCard from "../AISCard";
import { CourseProgramCardProps } from "../AISCard/types";

interface MucTieuNgheNghiepProps {
  title?: string;
  description?: string;
  buttonText?: string;
  programs?: CourseProgramCardProps[];
}

const MucTieuNgheNghiep: React.FC<MucTieuNgheNghiepProps> = ({ 
  title = "Mục tiêu nghề nghiệp",
  description = "Khám phá các nghề nghiệp phù hợp với mong muốn công việc sau này của bạn",
  buttonText = "Khám phá tất cả nghề nghiệp",
  programs = []
}) => {
  const [activeTab, setActiveTab] = useState("Phổ biến");

  const tabs = [
    "Phổ biến",
    "Công nghệ thông tin", 
    "Đa phương tiện",
    "Khoa học dữ liệu",
    "Khoa học máy tính",
    "Phát triển cá nhân"
  ];

  const defaultPrograms: CourseProgramCardProps[] = [
    {
      variant: "program",
      id: "program_1",
      title: "Chuyên gia truyền thông xã hội",
      href: "/programs/truyen-thong-xa-hoi",
      imageUrl: "/images/social.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        { name: "RIPT", logoUrl: "/images/logo-ptit.png" }
      ],
      description: "Một nhà phân tích dữ liệu thu thập, dọn dẹp và giải thích dữ liệu để cung cấp thông tin chi tiết có thể thực hiện được. Họ sử dụng các công cụ như Excel, SQL và Tableau để phân tích xu hướng và giúp doanh nghiệp đưa ra quyết định dựa trên dữ liệu.",
      category: "Phổ biến"
    },
    {
      variant: "program",
      id: "program_2", 
      title: "Chuyên gia phân tích dữ liệu",
      href: "/programs/phan-tich-du-lieu",
      imageUrl: "/images/social.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        { name: "RIPT", logoUrl: "/images/logo-ptit.png" }
      ],
      description: "Một nhà phân tích dữ liệu thu thập, dọn dẹp và giải thích dữ liệu để cung cấp thông tin chi tiết có thể thực hiện được. Họ sử dụng các công cụ như Excel, SQL và Tableau để phân tích xu hướng và giúp doanh nghiệp đưa ra quyết định dựa trên dữ liệu.",
      category: "Phổ biến"
    },
    {
      variant: "program",
      id: "program_3",
      title: "Nhà phân tích An ninh Mạng",
      href: "/programs/an-ninh-mang",
      imageUrl: "/images/social.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        { name: "RIPT", logoUrl: "/images/logo-ptit.png" }
      ],
      description: "Một nhà phân tích dữ liệu thu thập, dọn dẹp và giải thích dữ liệu để cung cấp thông tin chi tiết có thể thực hiện được. Họ sử dụng các công cụ như Excel, SQL và Tableau để phân tích xu hướng và giúp doanh nghiệp đưa ra quyết định dựa trên dữ liệu.",
      category: "Phổ biến"
    }
  ];

  const programsToDisplay = programs.length > 0 ? programs : defaultPrograms;
  const filteredPrograms = programsToDisplay.filter(program => program.category === activeTab);

  return (
    <MucTieuNgheNghiepWrapper>
      <div className="container">
        <MainContent>
          <LeftSection>
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{description}</p>
            <ExploreButton>
              {buttonText}
            </ExploreButton>
          </LeftSection>
          
          <RightSection>
            <TabsContainer>
              {tabs.map((tab) => (
                <TabButton
                  key={tab}
                  active={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </TabButton>
              ))}
            </TabsContainer>
            
            <CardsContainer>
              {filteredPrograms.map((program) => (
                <CourseProgramCard key={program.id} {...program} />
              ))}
            </CardsContainer>
          </RightSection>
        </MainContent>
      </div>
    </MucTieuNgheNghiepWrapper>
  );
};



const MucTieuNgheNghiepWrapper = styled.div`
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 20px 10px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  flex: 0 0 auto;
  width: 280px;

  .section-title {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: #051A53;
    margin: 0;
  }

  .section-description {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.05em;
    color: #535355;
    margin: 0;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  flex: 1;
  min-width: 0;
`;

const ExploreButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  height: 40px;
  background: #BC2826;
  border: 1px solid #BC2826;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.193;
  letter-spacing: 0.03em;
  color: #FFFFFF;

  &:hover {
    background: #A01E1C;
    border-color: #A01E1C;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(188, 40, 38, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid #BC2826;
    outline-offset: 2px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  flex-wrap: wrap;
`;

const TabButton = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  padding: 8px 12px;
  border-radius: 200px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.193;
  letter-spacing: 0.03em;

  ${props => props.active ? `
    background: #FFF0F0;
    color: #BC2826;
  ` : `
    background: #FFFFFF;
    color: #051A53;
    
    &:hover {
      background: #FFF0F0;
      color: #BC2826;
    }
  `}

  &:focus-visible {
    outline: 2px solid #BC2826;
    outline-offset: 2px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 580px;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding-right: 20px;

  @media (max-width: 1280px) {
    justify-content: flex-start;
    height: auto;
    padding-bottom: 20px;
    
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
`;

export default MucTieuNgheNghiep;
