import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { CourseProgramCardProps, CourseCardProps, ProgramCardProps, CourseStatus, isCourseCard, isProgramCard } from "./types";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";

const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0 && mins > 0) {
    return `${hours} giờ ${Math.round(mins)} phút`;
  } else if (hours > 0) {
    return `${hours} giờ`;
  } else {
    return `${Math.round(mins)} phút`;
  }
};

const getStatusLabel = (status: CourseStatus): { text: string; color: string } => {
  switch (status) {
    case "in_progress":
      return { text: "Đang học", color: "#1677FF" };
    case "completed":
      return { text: "Hoàn thành", color: "#52C41A" };
    default:
      return { text: "Chưa bắt đầu", color: "#828D9B" };
  }
};

const CourseProgramCard: React.FC<CourseProgramCardProps> = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.id, props.variant);
    }
  };

  if (isCourseCard(props)) {
    return <CourseCard {...props} onCardClick={handleClick} />;
  } else if (isProgramCard(props)) {
    return <ProgramCard {...props} onCardClick={handleClick} />;
  }

  return null;
};

const CourseCard: React.FC<CourseCardProps & { onCardClick?: () => void }> = ({
  id,
  title,
  href,
  imageUrl,
  org,
  durationMinutes,
  certificateType,
  status = "not_started",
  progress,
  isAI = false,
  className = "",
  style,
  onCardClick,
}) => {
  const showProgress = status === "in_progress" || status === "completed" || (progress && progress.percent > 0);
  const actualProgress = status === "completed" ? 100 : progress?.percent || 0;
  const courseCard = (
    <CardWrapper className={className} style={style} onClick={onCardClick}>
      <CardContent>
        <CourseImageContainer>
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
          {isAI && (
            <AITag>
              <span>AI</span>
              <AIIcon />
            </AITag>
          )}
        </CourseImageContainer>        
        
        <OrgSection>
          <Image src={org.logoUrl} alt={org.name} width={24} height={24} />
          <OrgName>{org.name}</OrgName>
        </OrgSection>

        <CourseTitle>{title}</CourseTitle>

        <MetaSection>
          {durationMinutes && (
            <MetaRow>
              <MetaItem>
                <TimeIcon />
                <span>{formatDuration(durationMinutes)}</span>
              </MetaItem>
              {(status === "in_progress" || status === "completed") && (
                <StatusLabel status={status}>
                  {status === "in_progress" ? "Đang học" : "Hoàn thành"}
                </StatusLabel>
              )}
            </MetaRow>
          )}

          {status === "in_progress" ? (
            showProgress && progress && (
              <ProgressSection>
                <ProgressInfo>
                  <span>{actualProgress}%</span>
                  {progress.completedLessons && progress.totalLessons && (
                    <span>{progress.completedLessons}/{progress.totalLessons} bài học</span>
                  )}
                </ProgressInfo>
                <ProgressBar>
                  <ProgressFill percent={actualProgress} />
                </ProgressBar>
              </ProgressSection>
            )
          ) : (
            certificateType && (
              <MetaRow>
                <MetaItem>
                  <CertificateIcon />
                  <span>{certificateType}</span>
                </MetaItem>
              </MetaRow>
            )
          )}
        </MetaSection>
      </CardContent>
    </CardWrapper>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {courseCard}
      </Link>
    );
  }

  return courseCard;
};


const ProgramCard: React.FC<ProgramCardProps & { onCardClick?: () => void }> = ({
  id,
  title,
  href,
  imageUrl,
  teachingOrgs = [],
  description,
  className = "",
  style,
  onCardClick,
}) => {
  const [common] = useCommonTranslation();
  const programCard = (
    <ProgramCardWrapper className={className} style={style} onClick={onCardClick}>
      <ProgramImageContainer>
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      </ProgramImageContainer>
      
      <ProgramContentSection>
        <ProgramTitle>{title}</ProgramTitle>
        {description && (
          <ProgramDescription>{description}</ProgramDescription>
        )}
        
        <ProgramMetaSection>
          <MetaRow>
            <MetaItem>
              <OrgIcon />
              <span>{common("teach.title")}</span>
            </MetaItem>
          </MetaRow>
          
          <TeachingOrgsSection>
            {teachingOrgs.map((teachingOrg, index) => (
              <OrgBadgeProgram key={index}>
                <Image src={teachingOrg.logoUrl} alt={teachingOrg.name} width={28} height={28} />
                <span>{teachingOrg.name}</span>
              </OrgBadgeProgram>
            ))}
          </TeachingOrgsSection>
        </ProgramMetaSection>
      </ProgramContentSection>
    </ProgramCardWrapper>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {programCard}
      </Link>
    );
  }

  return programCard;
};

const TimeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BC2826" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
  </svg>
);

const CertificateIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BC2826" viewBox="0 0 16 16">
    <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  </svg>
);

const OrgIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BC2826" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5z"/>
  </svg>
);

const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BC2826" viewBox="0 0 16 16">
    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
  </svg>
);

const CardWrapper = styled.div`
  height: 375px;
  background: #FFFFFF;
  border: 1.2px solid #EEEEEE;
  border-radius: 16px;
  padding: 12px 0 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #BC2826;
  }

  &:focus-visible {
    outline: 2px solid #BC2826;
    outline-offset: 2px;
  }
`;

const ProgramCardWrapper = styled.div`
  height: 560px;
  background: #FFFFFF;
  border: 1.2px solid #EEEEEE;
  border-radius: 16px;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #BC2826;
  }

  &:focus-visible {
    outline: 2px solid #BC2826;
    outline-offset: 2px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  height: 100%;
`;


const CourseImageContainer = styled.div`
  position: relative;
  width: calc(100% - 20px);
  height: 154px;
  border-radius: 8px;
  overflow: hidden;
  background: #F5F5F5;
  margin: 0 10px;
  flex-shrink: 0;
`;

const ProgramImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 0;
  overflow: hidden;
  background: #F5F5F5;
  flex-shrink: 0;
`;

const ProgramContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  flex: 1;
`;

const OrgSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 20px;
  height: 24px;
  flex-shrink: 0;
`;

const OrgName = styled.span`
  
  font-weight: 500;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  color: #535355;
`;

const CourseTitle = styled.h3`
  
  font-weight: 600;
  font-size: 18px;
  line-height: 1.45;
  letter-spacing: 0.03em;
  color: #051A53;
  margin: 0;
  padding: 0 20px;
  flex-shrink: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 52px;
`;

const ProgramTitle = styled.h3`
  
  font-weight: 600;
  font-size: 20px;
  line-height: 1.45;
  letter-spacing: 0.03em;
  color: #051A53;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProgramDescription = styled.p`
  
  font-weight: 400;
  font-size: 15px;
  line-height: 1.55;
  letter-spacing: 0.03em;
  color: #535355;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MetaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
  margin-top: auto;
  flex-shrink: 0;
  height: 60px;
`;

const ProgramMetaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  flex-shrink: 0;
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  font-weight: 500;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  color: #535355;
`;

const StatusChip = styled.div<{ color: string }>`
  padding: 6px 8px;
  background: ${props => props.color === "#1677FF" ? "#DCEDFD" : "#F6FFED"};
  border-radius: 6px;
  
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${props => props.color};
  text-align: center;
`;

const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span {
    
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: #535355;
  }
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #E6F4FF;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div<{ percent: number }>`
  height: 100%;
  width: ${props => props.percent}%;
  background: #007AFF;
  border-radius: 12px;
  transition: width 0.3s ease;
`;

const TeachingOrgsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OrgBadgeProgram = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 28px;
    padding: 3px;
    object-fit: contain;
    height: 28px;
    border-radius: 8px;
    border: 1px solid #EEEEEE;
  }

  span {
    
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: #007AFF;
  }
`;


const AITag = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  height: 28px;
  background: #FFFFFF;
  border: 1px solid #BC2826;
  border-radius: 24px;
  
  span {
    
    font-weight: 500;
    font-size: 14px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    color: #BC2826;
    text-align: center;
  }
`;


const StatusLabel = styled.div<{ status: "in_progress" | "completed" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  height: 28px;
  border-radius: 6px;
  
  
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-align: center;
  
  ${props => props.status === "in_progress" && `
    background: #DCEDFD;
    color: #1677FF;
  `}
  
  ${props => props.status === "completed" && `
    background: #E4F5D3;
    color: #49AA19;
  `}
`;

export default CourseProgramCard;
export type { CourseProgramCardProps };
