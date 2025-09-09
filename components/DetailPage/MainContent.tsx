import React from 'react';
import styled from 'styled-components';
import { ProgramDetail } from './types';
import useCommonTranslation from '../../hooks/useCommonTranslation';

interface MainContentProps {
  program: ProgramDetail;
}

const MainContent: React.FC<MainContentProps> = ({ program }) => {
  const [common] = useCommonTranslation();
  const skills = program.skillNeeded
  ? Object.values(program.skillNeeded).filter(Boolean)
  : program.requiredSkills || [];
  const filteredSkills = skills.filter(skill => !skill.startsWith('common'));
  return (
    <MainContentWrapper>
      <div className="bg-main">
        <div className="container mx-auto flex items-center gap-[80px] py-[40px]">
          <div className="content-left">
            <h1 className="program-title">{program.title}</h1>
            <p className="program-description">{program.description}</p>
            
            <div className="skills-section">
              <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#051A53' }}>{common("skillsNeeded")}</span>
              <div className="skills-tags">
                {filteredSkills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="image-section">
            <div className="image-program-overlay">
              <img src={program.imageUrl} alt={program.title} />
            </div>
          </div>
        </div>
      </div>
    </MainContentWrapper>
  );
};

const MainContentWrapper = styled.div`
  .bg-main {
    background: linear-gradient(0deg, #fff0f0, #fff0f0),
      linear-gradient(90deg, rgba(255, 240, 240, 0) 0%, #fff0f0 100%);
  }

  .container {
    background-image: url(/images/home/imgBanner.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
  }

  .content-left {
    flex: 1;
    max-width: 800px;
  }

  .program-title {
    
    font-weight: 600;
    font-size: 44px;
    line-height: 150%;
    letter-spacing: 3%;
    color: var(--primary-color);
    margin-bottom: 24px;
  }

  .program-description {
    text-align: justify;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    color: #535355;
    margin-bottom: 16px;
  }

  .detailed-description {
    text-align: justify;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    color: #535355;
    margin-bottom: 24px;
  }

  .skills-section {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
 }

  .skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .skill-tag {
    background: white;
    border-radius: 16px;
    padding: 8px 16px;
    
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &.professional {
      background: linear-gradient(135deg, #FFF0F0 0%, #F0F8FF 100%);
      border: 1px solid #BC2826;
      color: #BC2826;
    }
  }
    
  .image-banner {
    width: 100%;
    
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .image-program-overlay {
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      object-fit: contain;
      border-radius: 16px;
      border: 2px solid white;
    }
  }

  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      gap: 40px;
    }

    .program-title {
      font-size: 36px;
    }

    .program-description {
      font-size: 16px;
    }

    .detailed-description {
      font-size: 14px;
    }

    .image-section {
      
    }

    .image-program-overlay {
      width: 400px;
      height: 400px;
      top: 10%;
    }
  }

  @media (max-width: 768px) {
    .program-title {
      font-size: 28px;
    }

    .program-description {
      font-size: 14px;
    }

    .detailed-description {
      font-size: 13px;
    }

    .image-program-overlay {
      width: 350px;
      height: 350px;
      top: 5%;
      padding: 20px;
    }

    .skill-tag {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`;

export default MainContent;
