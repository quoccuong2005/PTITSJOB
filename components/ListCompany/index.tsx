import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Interface cho dữ liệu công ty
interface Company {
  id: string;
  name: string;
  logo: string;
  location: string;
  followers: number;
  reviews: number;
  description: string;
  verified?: boolean;
}

// Dữ liệu mẫu công ty
const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
    logo: 'https://toppng.com/uploads/preview/techcombank-logo-vector-11573944006nwkjhnpkvs.png',
    location: 'Hà Nội, Việt Nam',
    followers: 150,
    reviews: 210,
    description: ' Được thành lập năm 1993 với hội sở chính đặt tại Hà Nội, Techcombank là một trong những ngân hàng TMCP lớn nhất Việt Nam và một trong những ngân hàng hàng đầu ở Châu Á. Trong những năm trở lại đây, Techcombank liên tiếp được vinh danh tại các giải thưởng được trao bởi các tổ chức quốc tế uy tín như: EuroMoney, Global Finance, Wells Fargo, Bank of...',
  },
  {
    id: '2',
    name: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
    logo: 'https://toppng.com/uploads/preview/techcombank-logo-vector-11573944006nwkjhnpkvs.png',
    location: 'Hà Nội, Việt Nam',
    followers: 130,
    reviews: 160,
    description: 'VPBank xác định mục tiêu chiến lược trung và dài hạn là trở thành 1 (2023-2026) và tiếp tục duy trì vị thế ngân hàng TMCP tư nhân hàng đầu với quy mô lớn, hiệu quả, bền vững tại Việt Nam. Tầm nhìn ngân hàng số số 1 Việt Nam.',
  },
  {
    id: '3',
    name: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
    logo: 'https://toppng.com/uploads/preview/techcombank-logo-vector-11573944006nwkjhnpkvs.png',
    location: 'Hà Nội, Việt Nam',
    followers: 130,
    reviews: 160,
    description: 'VPBank xác định mục tiêu chiến lược trung và dài hạn là trở thành 1 (2023-2026) và tiếp tục duy trì vị thế ngân hàng TMCP tư nhân hàng đầu với quy mô lớn, hiệu quả, bền vững tại Việt Nam. Tầm nhìn ngân hàng số số 1 Việt Nam.',
  },
  {
    id: '4',
    name: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
    logo: 'https://toppng.com/uploads/preview/techcombank-logo-vector-11573944006nwkjhnpkvs.png',
    location: 'Hà Nội, Việt Nam',
    followers: 130,
    reviews: 160,
    description: 'VPBank xác định mục tiêu chiến lược trung và dài hạn là trở thành 1 (2023-2026) và tiếp tục duy trì vị thế ngân hàng TMCP tư nhân hàng đầu với quy mô lớn, hiệu quả, bền vững tại Việt Nam. Tầm nhìn ngân hàng số số 1 Việt Nam.',
  },
  {
    id: '5',
    name: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
    logo: 'https://toppng.com/uploads/preview/techcombank-logo-vector-11573944006nwkjhnpkvs.png',
    location: 'Hà Nội, Việt Nam',
    followers: 130,
    reviews: 160,
    description: 'VPBank xác định mục tiêu chiến lược trung và dài hạn là trở thành 1 (2023-2026) và tiếp tục duy trì vị thế ngân hàng TMCP tư nhân hàng đầu với quy mô lớn, hiệu quả, bền vững tại Việt Nam. Tầm nhìn ngân hàng số số 1 Việt Nam.',
  },
  {
    id: '6',
    name: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
    logo: 'https://toppng.com/uploads/preview/techcombank-logo-vector-11573944006nwkjhnpkvs.png',
    location: 'Hà Nội, Việt Nam',
    followers: 130,
    reviews: 160,
    description: 'VPBank xác định mục tiêu chiến lược trung và dài hạn là trở thành 1 (2023-2026) và tiếp tục duy trì vị thế ngân hàng TMCP tư nhân hàng đầu với quy mô lớn, hiệu quả, bền vững tại Việt Nam. Tầm nhìn ngân hàng số số 1 Việt Nam.',
  },
  {
    id: '7',
    name: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
    logo: 'https://toppng.com/uploads/preview/techcombank-logo-vector-11573944006nwkjhnpkvs.png',
    location: 'Hà Nội, Việt Nam',
    followers: 130,
    reviews: 160,
    description: 'VPBank xác định mục tiêu chiến lược trung và dài hạn là trở thành 1 (2023-2026) và tiếp tục duy trì vị thế ngân hàng TMCP tư nhân hàng đầu với quy mô lớn, hiệu quả, bền vững tại Việt Nam. Tầm nhìn ngân hàng số số 1 Việt Nam.',
  },
  {
    id: '8',
    name: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
    logo: 'https://toppng.com/uploads/preview/techcombank-logo-vector-11573944006nwkjhnpkvs.png',
    location: 'Hà Nội, Việt Nam',
    followers: 130,
    reviews: 160,
    description: 'VPBank xác định mục tiêu chiến lược trung và dài hạn là trở thành 1 (2023-2026) và tiếp tục duy trì vị thế ngân hàng TMCP tư nhân hàng đầu với quy mô lớn, hiệu quả, bền vững tại Việt Nam. Tầm nhìn ngân hàng số số 1 Việt Nam.',
  },

];

// Main component
const ListCompany: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 8; // Tăng số lượng công ty mỗi trang lên 8 để hiển thị 4 hàng, mỗi hàng 2 cột

  // Tính toán số trang
  const totalPages = Math.ceil(mockCompanies.length / companiesPerPage);

  // Lấy các công ty cho trang hiện tại
  const currentCompanies = mockCompanies.slice(
    (currentPage - 1) * companiesPerPage,
    currentPage * companiesPerPage
  );

  // Điều hướng sang trang khác
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Container>
      <HeaderSection>
        <Title>Danh Sách Công Ty</Title>
        <CompanyCount>Hơn 200+ doanh nghiệp</CompanyCount>
      </HeaderSection>

      <CompanyGrid>
        {currentCompanies.map((company) => (
          <CompanyCard key={company.id}>
            <div className="flex gap-4">
              <CompanyLogoSection>
                <CompanyLogo src={company.logo} alt={company.name} />
              </CompanyLogoSection>
              <div>
                <CompanyName>{company.name}</CompanyName>
                <CompanyMeta>
                  <LocationInfo>
                    <LocationIcon>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1.33334C5.42 1.33334 3.33334 3.42001 3.33334 6.00001C3.33334 9.50001 8 14.6667 8 14.6667C8 14.6667 12.6667 9.50001 12.6667 6.00001C12.6667 3.42001 10.58 1.33334 8 1.33334ZM8 7.66667C7.08334 7.66667 6.33334 6.91667 6.33334 6.00001C6.33334 5.08334 7.08334 4.33334 8 4.33334C8.91667 4.33334 9.66667 5.08334 9.66667 6.00001C9.66667 6.91667 8.91667 7.66667 8 7.66667Z" fill="#666666" />
                      </svg>
                    </LocationIcon>
                    <span>{company.location}</span>
                  </LocationInfo>
                  <FollowerInfo>
                    <FollowerIcon>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z" fill="#666666" />
                      </svg>
                    </FollowerIcon>
                    <span>{company.followers} người theo dõi</span>
                  </FollowerInfo>
                  <ReviewInfo>
                    <ReviewIcon>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 11.9067L12.12 14.6667L10.9867 9.92001L14.6667 6.86667L9.78 6.38667L8 2.00001L6.22 6.38667L1.33334 6.86667L5.01334 9.92001L3.88 14.6667L8 11.9067Z" fill="#666666" />
                      </svg>
                    </ReviewIcon>
                    <span>{company.reviews} đánh giá</span>
                  </ReviewInfo>
                </CompanyMeta>
              </div>
            </div>

            <CompanyInfoSection>
              <CompanyDescription>
                {company.description}
              </CompanyDescription>

              <ActionButtons>
                <ActionLink href="#">
                  Dịch vụ khách hàng
                </ActionLink>
                <ActionButton>
                  Theo dõi ngay
                </ActionButton>
              </ActionButtons>
            </CompanyInfoSection>
          </CompanyCard>
        ))}
      </CompanyGrid>

      <Pagination>
        <PageButton
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="#051A53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </PageButton>
        <PageInfo>{currentPage}/{totalPages} trang</PageInfo>
        <PageButton
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="#051A53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </PageButton>
      </Pagination>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #051A53;
  margin: 0;
`;

const CompanyCount = styled.span`
  color: #007AFF;
  font-size: 14px;
  font-weight: 500;
`;

// Thay đổi từ CompanyList thành CompanyGrid với grid layout
const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 32px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

// Bỏ CompanyRow vì không cần thiết nữa

const CompanyCard = styled.div`
  
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  padding: 16px;
  gap: 16px;
  height: 287px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const CompanyLogoSection = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  width: 84px;
    height: 84px;
`;

const CompanyLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #E5E7EB;
`;

const CompanyInfoSection = styled.div`
  flex: 1;
  min-width: 0; 
  margin-top: 8px;
`;

const CompanyName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #051A53;
  margin: 0 0 8px;
`;

const CompanyMeta = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 15px;
`;

const LocationInfo = styled(MetaItem)``;
const FollowerInfo = styled(MetaItem)``;
const ReviewInfo = styled(MetaItem)``;

const LocationIcon = styled.div`
  display: flex;
`;

const FollowerIcon = styled.div`
  display: flex;
`;

const ReviewIcon = styled.div`
  display: flex;
`;

const CompanyDescription = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: #4B5563;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '"';
    color: #666;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 52px;
  
  @media (max-width: 576px) {
    
  }
`;

const ActionLink = styled(Link)`
  color: #051A53;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 12px;
  cursor: pointer;
  display: inline-block;
  height: 34px;
  border: 1px solid #E5E7EB;
  border-radius: 20px;
  background-color: #F7F6F5;
  color: #AE7174;
`;

const ActionButton = styled.button`
  
  color: #BC2826;
  border: 1px solid #BC2826;
  border-radius: 5px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

const PageButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #E5E7EB;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: #F3F4F6;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  font-size: 14px;
  color: #4B5563;
`;

export default ListCompany;