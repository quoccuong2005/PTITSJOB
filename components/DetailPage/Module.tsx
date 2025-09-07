import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { KnowledgeModulesProps, KnowledgeModule } from './types';
import CourseProgramCard from '../AISCard';

const Modules: React.FC<KnowledgeModulesProps> = ({
  title = "Modun kiến thức",
  description = "Khám phá các chứng chỉ mới nhất của chúng tôi, sẵn sàng phục vụ cho mọi nhu cầu",
  modules = [],
  onModuleClick,
  onCourseClick
}) => {

  // Component for individual module with navigation
  const ModuleWithNavigation: React.FC<{ module: KnowledgeModule }> = ({ module }) => {
    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
    const coursesPerPage = 3;
    const totalPages = Math.ceil(module.courses.length / coursesPerPage);
    
    const currentCourses = module.courses.slice(
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
      <ModuleSection>
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
              <RatingCount>{module.rating.reviewCount} đánh giá</RatingCount>
            </RatingSection>

            <CourseCountSection>
              {renderCourseIcon()}
              <span>{module.coursesRemaining} khoá học phải hoàn thành</span>
            </CourseCountSection>
          </ModuleHeader>

          <Divider />

          <SkillsSection>
            <SkillsTitle>Kỹ năng bạn sẽ đạt được</SkillsTitle>
            <SkillsTags>
              {module.skills.map((skill, index) => (
                <SkillTag key={index}>
                  {skill.name}
                </SkillTag>
              ))}
            </SkillsTags>
          </SkillsSection>

          <ExploreButton>
            Khám phá chứng chỉ
          </ExploreButton>
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

  const defaultModules: KnowledgeModule[] = [
    {
      id: "module_1",
      name: "Công nghệ Đa phương tiện",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      rating: { score: 4.8, reviewCount: 23 },
      coursesRemaining: 6,
      totalCourses: 6,
      skills: [
        { name: "C++", level: "intermediate" },
        { name: "Trải nghiệm người dùng", level: "beginner" },
        { name: "AI Search", level: "advanced" },
        { name: "UX Design", level: "intermediate" }
      ],
      courses: [
        {
          id: "course_1",
          title: "Mạng máy tính (Computer Networks)",
          href: "/courses/test_course1",
          imageUrl: "/images/test_course1.png",
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          certificateType: "Chứng chỉ chuyên môn",
          durationMinutes: 180
        },
        {
          id: "course_2", 
          title: "Phát triển ứng dụng web",
          href: "/courses/test_course",
          imageUrl: "/images/test_course.png",
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          certificateType: "Chứng chỉ chuyên môn",
          durationMinutes: 240
        },
        {
          id: "course_3",
          title: "Nhập môn lập trình",
          href: "/courses/test_course",
          imageUrl: "/images/test_course1.png", 
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          certificateType: "Chứng chỉ chuyên môn",
          isAI: true,
          durationMinutes: 120
        },
        {
          id: "course_4",
          title: "Phân tích dữ liệu với Python",
          href: "/courses/course_4",
          imageUrl: "/images/test_course1.png",
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          certificateType: "Chứng chỉ chuyên môn",
          durationMinutes: 300
        },
        {
          id: "course_5",
          title: "Machine Learning cơ bản",
          href: "/courses/course_5",
          imageUrl: "/images/test_course.png",
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          certificateType: "Chứng chỉ chuyên môn",
          isAI: true,
          durationMinutes: 360
        }
      ]
    },
    {
      id: "module_2",
      name: "Khoa học Dữ liệu",
      org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
      rating: { score: 4.6, reviewCount: 45 },
      coursesRemaining: 8,
      totalCourses: 8,
      skills: [
        { name: "Python", level: "intermediate" },
        { name: "Machine Learning", level: "advanced" },
        { name: "Data Analysis", level: "intermediate" },
        { name: "Statistics", level: "beginner" }
      ],
      courses: [
        {
          id: "course_4",
          title: "Phân tích dữ liệu với Python",
          href: "/courses/course_4",
          imageUrl: "/images/test_course1.png",
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          certificateType: "Chứng chỉ chuyên môn",
          durationMinutes: 300
        },
        {
          id: "course_5",
          title: "Machine Learning cơ bản",
          href: "/courses/course_5",
          imageUrl: "/images/test_course.png",
          org: { name: "PTIT", logoUrl: "/images/logo-ptit.png" },
          certificateType: "Chứng chỉ chuyên môn",
          isAI: true,
          durationMinutes: 360
        }
      ]
    }
  ];

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
      <Container>
        <HeaderSection>
          <HeaderContent>
            <TextContent>
              <SectionTitle>{title}</SectionTitle>
              <SectionDescription>{description}</SectionDescription>
            </TextContent>
          </HeaderContent>
        </HeaderSection>

        <ContentSection>
          {modulesToDisplay.map((module) => (
            <ModuleWithNavigation key={module.id} module={module} />
          ))}
        </ContentSection>
      </Container>
    </ModulesWrapper>
  );
};

const ModulesWrapper = styled.div`
  padding: 60px 0;
  background: #FAFBFC;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
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
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.193;
  letter-spacing: 0.05em;
  color: #051A53;
  margin: 0;
`;

const SectionDescription = styled.p`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.193;
  letter-spacing: 0.05em;
  color: #535355;
  margin: 0;
  max-width: 600px;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const ModuleSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;
`;

const MainModuleCard = styled.div`
  flex: 0 0 376px;
  background: #F6FAFF;
  border-radius: 16px;
  padding: 24px;
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
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #828D9B;
  }
`;

const ModuleTitle = styled.h3`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
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
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #BC2826;
`;

const RatingCount = styled.span`
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #051A53;
`;

const CourseCountSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  span {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
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
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
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
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
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
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
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
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
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
