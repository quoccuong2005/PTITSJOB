import React from 'react';
import styled from 'styled-components';
import { ProgramCardProps } from '../AISCard/types';
import CourseProgramCard from '../AISCard';
import AISButton from '../AISButton';
import useCommonTranslation from '../../hooks/useCommonTranslation';
import { getDefaultPrograms } from '../../data/muc-tieu-test';

interface RelatedProgramsProps {
  title?: string;
  programs?: ProgramCardProps[];
  currentProgramId?: string; 
  onProgramClick?: (programId: string) => void;
  onViewAllClick?: () => void;
}

const RelatedPrograms: React.FC<RelatedProgramsProps> = ({
  programs = [],
  currentProgramId,
  onProgramClick,
  onViewAllClick
}) => {
  const [common] = useCommonTranslation();
  
  
  const allPrograms = getDefaultPrograms(common);
  const getBaseId = (id?: string) => id?.split('_')[0] || "";
  
  const getRelatedPrograms = (): ProgramCardProps[] => {
    const baseCurrent = getBaseId(currentProgramId);

    const source = programs.length > 0 ? programs : allPrograms;

    const uniqueByBase = Array.from(
      new Map(
        source
          .filter(p => getBaseId(p.id) !== baseCurrent)
          .map(p => [getBaseId(p.id), p]) // key = baseId, value = first program
      ).values()
    );

    return uniqueByBase.sort(() => Math.random() - 0.5).slice(0, 4);
  };

  const programsToDisplay = getRelatedPrograms();

  return (
    <RelatedProgramsWrapper>
      <div className="container mx-auto">
        <ContentSection>
          <SectionTitle>{common("relatedPrograms.title")}</SectionTitle>

          <ProgramsGrid>
            {programsToDisplay.map((program) => (
              <CourseProgramCard
                key={program.id}
                {...program}
                onClick={(programId) => onProgramClick?.(programId)}
              />
            ))}
          </ProgramsGrid>
          
          <AISButton onClick={onViewAllClick}>
            {common("relatedPrograms.viewAll")}
          </AISButton>
        </ContentSection>
      </div>
    </RelatedProgramsWrapper>
  );
};

const RelatedProgramsWrapper = styled.div`
  padding: 40px 0;
  border-top: 1.5px solid #EEEEEE;
`;

const Container = styled.div`
  @media (max-width: 1200px) {
    padding: 0 40px;
  }
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  
  font-weight: 600;
  font-size: 24px;
  line-height: 1.193;
  letter-spacing: 0.05em;
  color: #051A53;
  margin: 0;
  text-align: left;
`;

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ViewAllButton = styled.button`
  background: #FFFFFF;
  color: #BC2826;
  border: 1px solid #BC2826;
  border-radius: 8px;
  padding: 12px 16px;
  
  font-weight: 600;
  font-size: 16px;
  line-height: 1.193;
  letter-spacing: 0.03em;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  margin: 0 auto;
  
  &:hover {
    background: #BC2826;
    color: #FFFFFF;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(188, 40, 38, 0.2);
  }
`;

export default RelatedPrograms;
