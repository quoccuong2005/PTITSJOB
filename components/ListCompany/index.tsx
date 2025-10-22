import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getNhaTuyenDungPage } from '../../api/doanhnghieppublic';
import { NhaTuyenDung } from '../../api/doanhnghieppublic/type';





const ListCompany: React.FC = () => {
  const [companies, setCompanies] = useState<NhaTuyenDung[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(8);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getNhaTuyenDungPage({ page: currentPage, limit })
      .then((response: any) => {
        const { result, total } = response.data.data;
        setCompanies(result || []);
        setTotal(total || 0);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
        setError("Không thể tải dữ liệu công ty.");
      })
      .finally(() => setLoading(false));
  }, [currentPage, limit]);
  console.log("Companies", companies);
  const totalPages = Math.ceil(total / limit);

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
        <CompanyCount>{companies.length} doanh nghiệp</CompanyCount>
      </HeaderSection>

      <CompanyGrid>
        {companies.map((company) => (
          <a key={company._id} href={`/InfoCompany/${company._id}`}>
            <CompanyCard key={company._id}>
              <div className="flex gap-4">
                <CompanyLogoSection>
                  {company.logo ? (<CompanyLogo src={company.logo} alt={company.ten} />) : (<CompanyLogo src="/images/default/defaultimage.png" alt={company.ten} />)}
                </CompanyLogoSection>
                <div>
                  <CompanyName>{company.ten || "Không có"}</CompanyName>
                  <CompanyMeta>
                    <LocationInfo>
                      <LocationIcon>
                        <img src="/images/home/mapicon.png" alt="Location" />
                      </LocationIcon>
                      <span className=''>{company.diaChi || "Không có"}</span>
                    </LocationInfo>
                    <FollowerInfo>
                      <FollowerIcon>
                        <img src="/images/home/nhom2.png" alt="Employees" />
                      </FollowerIcon>
                      <span className=''>{company.quyMo || "Không có"} nhân viên</span>
                    </FollowerInfo>
                    <ReviewInfo>
                      <ReviewIcon>
                        <img src="/images/home/industrydefault.png" alt="Reviews" />
                      </ReviewIcon>
                      <span>{company.namThanhLap || "Không có"} việc làm </span>
                    </ReviewInfo>
                  </CompanyMeta>
                </div>
              </div>

              <CompanyInfoSection>
                <CompanyDescription>
                  {company.moTa || "Không có mô tả"}
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
          </a>
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
  height: 100%;
  
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
  object-fit: cover;
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