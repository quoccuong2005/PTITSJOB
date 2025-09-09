import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import CourseProgramCard from "../AISCard";
import AISButton from "../AISButton";
import { ProgramCardProps } from "../AISCard/types";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";

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

  const [common] = useCommonTranslation();
  const tabs = [
    common("tabs.populate"),
    common("tabs.it"), 
    common("tabs.multimedia"),
    common("tabs.dataScience"),
    common("tabs.computerScience")
  ];

  const defaultPrograms: ProgramCardProps[] = [
    {
      variant: "program",
      id: "program_1",
      title: common("socialMedia.title"),
      href: "/chuong-trinh-dao-tao/truyen-thong-xa-hoi",
      imageUrl: "/images/social.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: common("socialMedia.description"),
      category: "Phổ biến"
    },
    {
      variant: "program",
      id: "program_2", 
      title: common("dataAnalyst.title"),
      href: "/programs/phan-tich-du-lieu",
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
      href: "/programs/an-ninh-mang",
      imageUrl: "/images/X5gFB1559764843.png",
      teachingOrgs: [
        { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
        
      ],
      description: common("networkSecurity.description"),
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
              <AISButton onClick={() => router.push('/chuong-trinh-dao-tao')}>
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
                    router.push(`/chuong-trinh-dao-tao/${program.id}`);
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
