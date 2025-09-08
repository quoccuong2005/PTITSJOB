import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import CourseProgramCard from "../AISCard";
import AISButton from "../AISButton";
import { ProgramCardProps } from "../AISCard/types";

interface MucTieuNgheNghiepProps {
  title?: string;
  description?: string;
  buttonText?: string;
  programs?: ProgramCardProps[];
}

const MucTieuNgheNghiep: React.FC<MucTieuNgheNghiepProps> = ({ 
  title = "Mục tiêu nghề nghiệp",
  description = "Khám phá các nghề nghiệp phù hợp với mong muốn công việc sau này của bạn",
  buttonText = "Khám phá tất cả nghề nghiệp",
  programs = []
}) => {
  const [activeTab, setActiveTab] = useState("Phổ biến");
  const router = useRouter();

  const tabs = [
    "Phổ biến",
    "Công nghệ thông tin", 
    "Đa phương tiện",
    "Khoa học dữ liệu",
    "Khoa học máy tính"
  ];

  const defaultPrograms: ProgramCardProps[] = [
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
      <div className="container mx-auto">
        <MainContent>
          <LeftSection>
            <h2 className="section-title">{title}</h2>
            <p className="section-description mt-[12px]">{description}</p>
            <div className="mt-[32px]">
              <AISButton>
                {buttonText}
              </AISButton>
            </div>
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
                <div
                  key={program.id}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/programs/${program.id}`);
                  }}
                >
                  <CourseProgramCard {...program} href="" />
                </div>
              ))}
            </CardsContainer>
          </RightSection>
        </MainContent>
      </div>
    </MucTieuNgheNghiepWrapper>
  );
};



const MucTieuNgheNghiepWrapper = styled.div`
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background: #F6FAFF;
  border-radius: 16px;
  padding: 20px;
`;

const LeftSection = styled.div`
  width: 280px;

  .section-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: #051A53;
    margin: 0;
  }

  .section-description {
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
