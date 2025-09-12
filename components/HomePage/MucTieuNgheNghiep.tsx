import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import CourseProgramCard from "../AISCard";
import AISButton from "../AISButton";
import { ProgramCardProps } from "../AISCard/types";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
import { getDefaultPrograms } from "../../data/muc-tieu-test";
import { set } from "lodash";

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
  const router = useRouter();
  const [common] = useCommonTranslation();
  const tabs = [
    common("tabs.populate"),
    common("tabs.it"), 
    common("tabs.media"),
    common("tabs.economic"),
  ];
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    setActiveTab(tabs[0]);
  }, [tabs[0]]);
  
  const defaultPrograms = getDefaultPrograms(common);

  const programsToDisplay = programs.length > 0 ? programs : defaultPrograms;
  const filteredPrograms = programsToDisplay.filter(program => program.categoryId === activeTab);

  return (
    <MucTieuNgheNghiepWrapper>
      <div className="container mx-auto">
        <MainContent className="flex flex-col lg:flex-row gap-[24px]">
          <LeftSection>
            <h2 className="section-title">{title}</h2>
            <p className="section-description mt-[12px]">{description}</p>
            <div className="mt-[32px]">
              <AISButton onClick={() => router.push('/muc-tieu-nghe-nghiep')}>
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
            
            <CardsContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-cols-auto gap-[20px]">
              {filteredPrograms.map((program) => (
                <div
                  key={program.id}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/muc-tieu-nghe-nghiep/${program.id}`);
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
