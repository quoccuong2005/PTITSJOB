import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { KnowledgeModulesProps, KnowledgeModule } from './types';
import CourseProgramCard from '../AISCard';
import AISButton from '../AISButton';
import { CourseCardProps } from '../AISCard/types';
import { getKhoaHocPhoBien } from '../../api/khoahoc';
import { ELang } from '../../utils/constant';
import { useTranslation } from 'react-i18next';
import useCommonTranslation from '../../hooks/useCommonTranslation';

const Modules: React.FC<KnowledgeModulesProps> = ({
  title,
  description,
  modules = [],
  onModuleClick,
  onCourseClick
}) => {
  const [common] = useCommonTranslation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [apiCourses, setApiCourses] = useState<CourseCardProps[]>([]);

  const displayTitle = title || common('modules.title');
  const displayDescription = description || common('modules.description');

  const defaultModules: KnowledgeModule[] = [
    {
      id: "module_1",
      name: common('modules.defaultModules.multimedia.name'),
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      rating: { score: 4.8, reviewCount: 23 },
      coursesRemaining: 6,
      totalCourses: 6,
      skills: [
        { name: common('modules.defaultModules.multimedia.skills.cpp'), level: "intermediate" },
        { name: common('modules.defaultModules.multimedia.skills.ux'), level: "beginner" },
        { name: common('modules.defaultModules.multimedia.skills.aiSearch'), level: "advanced" },
        { name: common('modules.defaultModules.multimedia.skills.uxDesign'), level: "intermediate" }
      ],
      courses: []
    },
    {
      id: "module_2",
      name: common('modules.defaultModules.dataScience.name'),
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      rating: { score: 4.6, reviewCount: 45 },
      coursesRemaining: 8,
      totalCourses: 8,
      skills: [
        { name: common('modules.defaultModules.dataScience.skills.python'), level: "intermediate" },
        { name: common('modules.defaultModules.dataScience.skills.machineLearning'), level: "advanced" },
        { name: common('modules.defaultModules.dataScience.skills.dataAnalysis'), level: "intermediate" },
        { name: common('modules.defaultModules.dataScience.skills.statistics'), level: "beginner" }
      ],
      courses: []
    }
  ];

  useEffect(() => {
    if (currentLang) {
      (async () => {
        try {
          const response = await getKhoaHocPhoBien(currentLang as ELang);
          const data = response.data.data;
          if (!data) return;
          
          const mapper: CourseCardProps[] = data.map(item => ({
            variant: "course" as const,
            org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
            id: item.id,
            title: item.name,
            href: item.course_url,
            imageUrl: item.image_url,
            durationMinutes: item.duration * 60,
            certificateType: item.topics.map(topic => topic.name).join(', '),
            isAI: true
          }));
          setApiCourses(mapper);
        } catch (err) {
          console.error('Error fetching courses:', err);
        }
      })();
    }
  }, [currentLang]);

  const ModuleWithNavigation: React.FC<{ module: KnowledgeModule }> = ({ module }) => {
    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
    const coursesPerPage = 3;
    
    const coursesToUse = apiCourses.length > 0 ? apiCourses : module.courses;
    const totalPages = Math.ceil(coursesToUse.length / coursesPerPage);
    
    const currentCourses = coursesToUse.slice(
      currentCourseIndex * coursesPerPage,
      (currentCourseIndex + 1) * coursesPerPage
    );

    const handlePrevious = () => {
      setCurrentCourseIndex((prev) => 
        prev === 0 ? totalPages - 1 : prev - 1
      );
    };

    const handleNext = () => {
      setCurrentCourseIndex((prev) => 
        prev === totalPages - 1 ? 0 : prev + 1
      );
    };

    return (
      <ModuleSection className='flex flex-col md:flex-row'>
        <MainModuleCard onClick={() => onModuleClick?.(module.id)}>
          <ModuleHeader>
            <OrgBadge>
              <Image src={module.org.logoUrl} alt={module.org.name} width={16} height={16} />
              <span>{module.org.name}</span>
            </OrgBadge>
            <ModuleTitle>{module.name}</ModuleTitle>
            
            <RatingSection>
              {renderStars(module.rating.score)}
              <RatingScore>{module.rating.score.toFixed(1)}</RatingScore>
              <RatingCount>{module.rating.reviewCount} {common('modules.reviewsCount')}</RatingCount>
            </RatingSection>

            <CourseCountSection>
              {renderCourseIcon()}
              <span>{module.coursesRemaining} {common('modules.coursesRemaining')}</span>
            </CourseCountSection>
          </ModuleHeader>

          <Divider />

          <SkillsSection>
            <SkillsTitle>{common('modules.skillsTitle')}</SkillsTitle>
            <SkillsTags>
              {module.skills.map((skill, index) => (
                <SkillTag key={index}>
                  {skill.name}
                </SkillTag>
              ))}
            </SkillsTags>
          </SkillsSection>

          <AISButton>
            {common('modules.exploreButton')}
          </AISButton>
        </MainModuleCard>

        <CoursesSection>
          <CoursesHeader>
            <CoursesCount>
            </CoursesCount>
            {totalPages > 1 && (
              <NavigationButtons>
                <NavButton onClick={handlePrevious} aria-label="Previous courses">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </NavButton>
                <NavButton onClick={handleNext} aria-label="Next courses">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </NavButton>
              </NavigationButtons>
            )}
          </CoursesHeader>
          
          <CoursesGrid>
            {currentCourses.map((course) => (
              <CourseProgramCard
                key={course.id}
                id={course.id}
                variant="course"
                title={course.title}
                href={course.href}
                imageUrl={course.imageUrl}
                org={course.org}
                certificateType={course.certificateType}
                isAI={course.isAI}
                durationMinutes={course.durationMinutes}
                onClick={(courseId) => onCourseClick?.(courseId)}
              />
            ))}
          </CoursesGrid>
        </CoursesSection>
      </ModuleSection>
    );
  };

  const modulesToDisplay = modules.length > 0 ? modules : defaultModules;

  const renderStars = (score: number) => {
    return (
      <StarIcon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 1.66663L12.575 6.88329L18.3333 7.72496L14.1667 11.7833L15.15 17.5166L10 14.8L4.85 17.5166L5.83333 11.7833L1.66667 7.72496L7.425 6.88329L10 1.66663Z" fill="#FFAF0B"/>
        </svg>
      </StarIcon>
    );
  };

  const renderCourseIcon = () => (
    <CourseIcon>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2.5 5H17.5V15H2.5V5Z" stroke="#051A53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.25 8.75H13.75" stroke="#051A53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.25 11.25H11.25" stroke="#051A53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </CourseIcon>
  );

  return (
    <ModulesWrapper>
      <div className="container mx-auto">
        <HeaderSection>
          <HeaderContent>
            <TextContent>
              <SectionTitle>{displayTitle}</SectionTitle>
              <SectionDescription>{displayDescription}</SectionDescription>
            </TextContent>
          </HeaderContent>
        </HeaderSection>

        {modulesToDisplay.map((module) => (
          <div className="mt-[32px]"><ModuleWithNavigation key={module.id} module={module} /></div>
        ))}
      </div>
    </ModulesWrapper>
  );
};

const ModulesWrapper = styled.div`
  padding: 40px 0;
`;

const HeaderSection = styled.div`
  margin-bottom: 40px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h2`
  
  font-weight: 600;
  font-size: 24px;
  line-height: 1.193;
  letter-spacing: 0.05em;
  color: #051A53;
  margin: 0;
`;

const SectionDescription = styled.p`
  
  font-weight: 500;
  font-size: 16px;
  line-height: 1.193;
  letter-spacing: 0.05em;
  color: #535355;
  margin: 0;
  max-width: 600px;
`;

const ModuleSection = styled.div`
  gap: 40px;
  padding: 20px;
  background-color: #F6FAFF;
  border-radius: 16px;
`;

const MainModuleCard = styled.div`
  flex: 0 0 376px;
`;

const ModuleHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const OrgBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  width: fit-content;
  
  span {
    
    font-weight: 500;
    font-size: 16px;
    color: #828D9B;
  }
`;

const ModuleTitle = styled.h3`
  
  font-weight: 600;
  font-size: 24px;
  line-height: 1.45;
  letter-spacing: 0.03em;
  color: #051A53;
  margin: 0;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StarIcon = styled.div`
  display: flex;
  align-items: center;
`;

const RatingScore = styled.span`
  
  font-weight: 600;
  font-size: 16px;
  color: #BC2826;
`;

const RatingCount = styled.span`
  
  font-weight: 500;
  font-size: 16px;
  color: #051A53;
`;

const CourseCountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  span {
    
    font-weight: 500;
    font-size: 16px;
    color: #051A53;
  }
`;

const CourseIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  height: 2px;
  background: white;
  margin: 24px 0;
`;

const SkillsSection = styled.div`
  margin-bottom: 24px;
`;

const SkillsTitle = styled.h4`
  
  font-weight: 600;
  font-size: 16px;
  color: #051A53;
  margin: 0 0 16px 0;
`;

const SkillsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  background: #DCEDFD;
  color: #1677FF;
  padding: 6px 8px;
  border-radius: 6px;
  
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;

const ExploreButton = styled.button`
  width: 100%;
  background: white;
  color: #BC2826;
  border: 1px solid #BC2826;
  padding: 12px 16px;
  border-radius: 8px;
  
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #BC2826;
    color: white;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CoursesSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CoursesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CoursesCount = styled.span`
  
  font-weight: 500;
  font-size: 14px;
  color: #535355;
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const NavButton = styled.button`
  width: 32px;
  height: 32px;
  background: #F3F4F7;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #E5E7EB;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Modules;
