import React from 'react';
import styled from 'styled-components';
import { ProgramDetail } from './types';

export const mockPrograms: { [key: string]: ProgramDetail } = {
  'program_1': {
    title: 'Chuyên gia truyền thông xã hội',
    description: 'Chuyên gia truyền thông xã hội (Social Media Specialist) là người phụ trách xây dựng, triển khai và quản lý các chiến lược truyền thông trên các nền tảng mạng xã hội. Công việc chính bao gồm nghiên cứu xu hướng, sản xuất và tối ưu hóa nội dung, quản lý cộng đồng người dùng, theo dõi – phân tích hiệu quả chiến dịch, đồng thời phối hợp với các bộ phận marketing, PR hay bán hàng để nâng cao hình ảnh thương hiệu và thúc đẩy mục tiêu kinh doanh.',
    detailedDescription: 'Một chuyên gia truyền thông xã hội giỏi không chỉ am hiểu về hành vi người dùng trên mạng mà còn có khả năng sáng tạo nội dung cuốn hút, biết tận dụng công nghệ và dữ liệu để đưa ra quyết định hiệu quả. Đây là nghề nghiệp năng động, đòi hỏi sự linh hoạt, khả năng cập nhật xu hướng nhanh chóng và kỹ năng giao tiếp tốt để xây dựng mối quan hệ bền chặt giữa thương hiệu và cộng đồng.',
    imageUrl: '/images/social.png',
    teachingOrgs: [
      { name: 'PTIT', logoUrl: '/images/logo-ptit.png' },
      { name: 'RIPT', logoUrl: '/images/logo-ptit.png' }
    ],
    requiredSkills: ['C++', 'Trải nghiệm người dùng', 'AI Search'],
    achievableSkills: ['C++', 'Trải nghiệm người dùng', 'AI Search', 'UX Design']
  },
  'program_2': {
    title: 'Chuyên gia truyền thông xã hội',
    description: 'Chuyên gia truyền thông xã hội (Social Media Specialist) là người phụ trách xây dựng, triển khai và quản lý các chiến lược truyền thông trên các nền tảng mạng xã hội. Công việc chính bao gồm nghiên cứu xu hướng, sản xuất và tối ưu hóa nội dung, quản lý cộng đồng người dùng, theo dõi – phân tích hiệu quả chiến dịch, đồng thời phối hợp với các bộ phận marketing, PR hay bán hàng để nâng cao hình ảnh thương hiệu và thúc đẩy mục tiêu kinh doanh.',
    detailedDescription: 'Một chuyên gia truyền thông xã hội giỏi không chỉ am hiểu về hành vi người dùng trên mạng mà còn có khả năng sáng tạo nội dung cuốn hút, biết tận dụng công nghệ và dữ liệu để đưa ra quyết định hiệu quả. Đây là nghề nghiệp năng động, đòi hỏi sự linh hoạt, khả năng cập nhật xu hướng nhanh chóng và kỹ năng giao tiếp tốt để xây dựng mối quan hệ bền chặt giữa thương hiệu và cộng đồng.',
    imageUrl: '/images/social.png',
    teachingOrgs: [
      { name: 'PTIT', logoUrl: '/images/logo-ptit.png' },
      { name: 'RIPT', logoUrl: '/images/logo-ptit.png' }
    ],
    requiredSkills: ['C++', 'Trải nghiệm người dùng', 'AI Search'],
    achievableSkills: ['C++', 'Trải nghiệm người dùng', 'AI Search', 'UX Design']
  },
  'program_3': {
    title: 'Chuyên gia truyền thông xã hội',
    description: 'Chuyên gia truyền thông xã hội (Social Media Specialist) là người phụ trách xây dựng, triển khai và quản lý các chiến lược truyền thông trên các nền tảng mạng xã hội. Công việc chính bao gồm nghiên cứu xu hướng, sản xuất và tối ưu hóa nội dung, quản lý cộng đồng người dùng, theo dõi – phân tích hiệu quả chiến dịch, đồng thời phối hợp với các bộ phận marketing, PR hay bán hàng để nâng cao hình ảnh thương hiệu và thúc đẩy mục tiêu kinh doanh.',
    detailedDescription: 'Một chuyên gia truyền thông xã hội giỏi không chỉ am hiểu về hành vi người dùng trên mạng mà còn có khả năng sáng tạo nội dung cuốn hút, biết tận dụng công nghệ và dữ liệu để đưa ra quyết định hiệu quả. Đây là nghề nghiệp năng động, đòi hỏi sự linh hoạt, khả năng cập nhật xu hướng nhanh chóng và kỹ năng giao tiếp tốt để xây dựng mối quan hệ bền chặt giữa thương hiệu và cộng đồng.',
    imageUrl: '/images/social.png',
    teachingOrgs: [
      { name: 'PTIT', logoUrl: '/images/logo-ptit.png' },
      { name: 'RIPT', logoUrl: '/images/logo-ptit.png' }
    ],
    requiredSkills: ['C++', 'Trải nghiệm người dùng', 'AI Search'],
    achievableSkills: ['C++', 'Trải nghiệm người dùng', 'AI Search', 'UX Design']
  },
};

interface MainContentProps {
  program: ProgramDetail;
}

const MainContent: React.FC<MainContentProps> = ({ program }) => {
  return (
    <MainContentWrapper>
      <div className="bg-main">
        <div className="container mx-auto flex items-center gap-[80px] py-[40px]">
          <div className="content-left">
            <h1 className="program-title">{program.title}</h1>
            <p className="program-description">{program.description}</p>
            <p className="detailed-description">{program.detailedDescription}</p>
            
            <div className="skills-section">
              <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#051A53' }}>Kỹ năng bạn cần có</span>
              <div className="skills-tags">
                {program.requiredSkills.map((skill, idx) => (
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
