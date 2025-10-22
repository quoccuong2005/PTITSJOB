import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface FieldCardProps {
  icon: string;
  title: string;
  jobCount: number;
  link: string;
}

interface CVProps {
  title: string;
  desription: string;
  link: string;
  textbutton: string;
}


const FieldCard: React.FC<FieldCardProps> = ({ icon, title, jobCount, link }) => {
  return (
    <CardWrapper href={link}>
      <div className="icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="job-count">
        <img src="/images/home/industry.png" alt="Group" />
        <span>{jobCount} việc làm</span>
      </div>
    </CardWrapper>
  );
};
const SampleCVCard: React.FC<CVProps> = ({ title, desription, link, textbutton }) => {
  return (
    <CardWrapperCV href={link} >
      <div className="cv-content">
        <h3>{title}</h3>
        <p>{desription}</p>
      </div>
      <div className="cv-button">
        <button>{textbutton}</button>
      </div>
    </CardWrapperCV>
  );
}

const Xaydungthuonghieucanhan = () => {
  const fakeCVData: CVProps[] = [
    {
      title: "Các mẫu CV đến từ Jobs PTIT",
      desription:
        "Phá bỏ những lối mòn xưa cũ, các mẫu CV sau được thiết kế với những chi tiết, màu sắc và bố cục sáng tạo - sẽ giúp bạn phản ánh rõ phong cách cá nhân và kết nối mạnh mẽ hơn với nhà tuyển dụng.",
      link: "/cv-templates",
      textbutton: "Khám phá kho tàng CV",
    },
    {
      title: "Tạo CV chuyên nghiệp",
      desription:
        "Một chiếc CV chuyên nghiệp sẽ giúp bạn gây ấn tượng với nhà tuyển dụng và tăng khả năng vượt qua vòng lọc CV.",
      link: "/create-cv",
      textbutton: "Tạo CV Online ngay",
    },
  ];

  return (
    <NganhNoiBatWrapper>
      <div className="container">
        <div className="header">
          <div className="title-section">
            <h2>Cùng chúng mình xây dựng thương hiệu cá nhân</h2>
            <p>Bạn muốn tìm việc mới nhưng chưa có mẫu CV, hãy tới với chúng mình</p>
          </div>
          <div className="navigation">
            <button className="nav-btn prev">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="nav-btn next">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="samplecv-grid flex flex-col md:flex-row  gap-[18px]">
          {fakeCVData.map(index => (
            <>
              <SampleCVCard
                title={index.title}
                desription={index.desription}
                link={index.link}
                textbutton={index.textbutton}
              />
            </>
          ))}
        </div>
      </div>
    </NganhNoiBatWrapper>
  );
};

// Styled components
const NganhNoiBatWrapper = styled.section`
  padding: 60px 0;
  background-color: #FFF;

  .container {
    max-width: 1240px;
    margin: 0 auto;
    
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 32px;
  }

  .title-section {
    h2 {
      font-size: 28px;
      font-weight: 700;
      color: #051A53;
      margin: 0 0 12px 0;
    }

    p {
      font-size: 16px;
      color: #535355;
      margin: 0;
    }
  }

  .navigation {
    display: flex;
    gap: 12px;
  }

  .nav-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: #F3F4F7;
    color: #051A53;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #E5E7EB;
    }
  }

  .fields-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-bottom: 70px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
    samplecv-grid {
     display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-bottom: 70px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
    }
`;

const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  background: #FFFFFF;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #EEEEEE;
  background: #F7F7F7;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
  }

  .icon {
    width: 120px;
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 16px 0;
    line-height: 1.4;
  }

  .job-count {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;
    font-size: 14px;

    svg {
      color: #A9A9A9;
      width: 16px;
      height: 16px;
    }
  }
`;
const CardWrapperCV = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(90deg, #FFFAFA 0%, #FFECEC 100%);
  border-radius: 12px;
  padding:15px 32px 32px 32px;
  text-decoration: none;
  color: #000;
  min-height: 200px;
  transition: box-shadow 0.3s ease;
  border: 1px solid #f1f1f1;
  position: relative;
  overflow: hidden;
  width: 590px;
  height: 200px;
  
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 44px;
    right: 0;
    width: 153.19px;
    height: 198.58px;
    background-image: url('/images/home/PTIT_LOGO 1.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top right;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #051A53;
    margin-bottom: 6px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: #535355;
    margin-bottom: 0;
    max-width: 100%;
  }

  .cv-content {
    margin-bottom: auto;
  }

  .cv-button {
  margin-top: 16px;
    button {
      background-color: #C02626; 
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      padding: 8px 24px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
      height: 40px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  
 
  
  @media (max-width: 768px) {
    padding: 9px;
    width: 100%;
    
    h3 {
      font-size: 20px;
    }
    
    p {
      font-size: 14px;
      max-width: 100%;
    }
    
    .cv-button button {
      padding: 10px 16px;
      font-size: 14px;
    }
  }
`;

export default Xaydungthuonghieucanhan;