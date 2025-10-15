import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Vieclamlienquan from '../../components/Relatedjobs';
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
import { getTintuyendungById } from "../../api/tintuyendungpublic/index"
import { Tintuyendungpublic } from "../../api/tintuyendungpublic/type"
const jobDetail = {
  id: "data-analyst",
  title: "Data Analyst (Risk Management)",
  company: {
    name: "Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam",
    logo: "https://dongphucvina.vn/wp-content/uploads/2023/05/logo-techcombank-dongphucvina.vn_.png",
    employeeCount: "30-40 nhân viên",
    type: "Dịch vụ khách hàng",
    address: "6 Quang Trung, Hoàn Kiếm, Hà Nội",
    website: "https://jobsapti.vn/viec-lam/...",
    description: "Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam (Techcombank) là một trong những ngân hàng thương mại hàng đầu tại Việt Nam."
  },
  mucLuong: "25 - 35 triệu",
  location: "Hà Nội, Việt Nam",
  salary: "25.000.000đ - 35.000.000đ",
  expiredDate: "30/10/2023",
  applyDate: "24/09/2023",
  postDate: "16/09/2025",
  experience: "Không yêu cầu",
  level: "Nhân viên",
  experienceYear: "2-3 năm",
  educationLevel: "Đại học trở lên",
  gender: "Nam/ Nữ",
  recruitCount: "1 nam/ 1 nữ",
  workType: "Internship",
  description: `
        <p>Techcombank hiện đang tìm kiếm ứng viên có kinh nghiệm và đam mê cho vị trí Data Analyst (Risk Management) để tham gia vào đội ngũ của chúng tôi.</p>
    `,
  jobDetail: [
    "Thu thập dữ liệu từ các hệ thống",
    "Thiết lập các yêu cầu về cơ sở hạ tầng dữ liệu để quản lý rủi ro cho danh mục tín dụng BB bán lẻ và nhỏ",
    "Xây dựng các công cụ, biện pháp nhận diện rủi ro tín dụng đối với khách hàng BB nhỏ lẻ",
    "Hàm mức tín dụng, quản lý rủi ro tín dụng",
    "Xây dựng chính báo sớm về giám sát rủi ro",
    "Xây dựng Chính sách, Sản phẩm, Công cụ, Chỉ tiêu quản điểm cảnh báo sớm và giám sát rủi ro đối với khách hàng BB nhỏ lẻ và nhỏ lẻ",
    "Thực hiện phân tích hành vi rủi ro, kiểm tra tuân chấp dựng và quản lý cảnh báo sớm",
    "Phối hợp với RBG & Small BB trong việc đào tạo các đơn vị kinh doanh về nhận diện và cảnh báo sớm rủi ro",
    "Quản lý danh mục đầu tư bán lẻ",
    "Xác định, kiểm soát và đánh giá chất lượng danh mục đầu tư của phân khúc ngân hàng bán lẻ và BB nhỏ",
    "Lập báo cáo định kỳ và báo cáo phân tích đột xuất về danh mục đầu tư và phân tích theo yêu cầu của HĐQT, HDQT và các đơn vị liên quan",
    "Tăng cường năng cao chất lượng báo cáo về rủi ro Hóa nợ dung và quản lý danh mục đầu tư",
    "Thực hiện mẫu cấu trúc chế độ rủi ro tín dụng theo quy định",
    "Quản lý rủi ro theo phân khúc BB bán lẻ & nhỏ bao gồm việc định đô lượng, giảm thiểu và báo cáo rui ro tin dụng Theo dõi tiến độ xử lý rủi ro theo đối danh mục nợ cần quan sát đặc biệt"
  ],
  requirements: [
    "2-3 năm kinh nghiệm trong QA, Quản lý rủi ro",
    "Có kiến thức tốt về các công cụ phân tích Python, SQL...",
    "Có kỹ năng thực vễ Microsoft Office (Word, Excel, PowerPoint, Outlook,...)",
    "Thành thạo các công cụ trực quan hóa dữ liệu (Tableau, PowerBI,...) là một lợi thế",
    "Kỹ năng báo cáo tiếng Anh xuất sắc",
    "Cách tiếp cận có phương pháp và hợp lý, khả năng lập kế hoạch công việc và đáp ứng thời hạn",
    "Hiểu biết về đạo đức của việc thu thập và làm việc với dữ liệu, tuân chỉnh các rà chủ ý đến bảng chủ tiêu",
    "Tư duy cởi mở, khả năng thích ứng nhanh với công nghệ mới/môi trường làm việc ngân hàng mới và học hỏi cách làm mới"
  ],
  benefits: [
    "Mức lương: 25 - 35 triệu",
    "Tham gia các khóa đào tạo nâng cao của Techcombank",
    "Được cân nhắc trong kỳ tăng lương hàng năm nếu có các chuyên gia/Quản lý cấp cao đề xuất tại thị trường Việt Nam.",
    "Chia sẻ lò trinh thăng tiến rõ ràng với đồng nghiệp cùng cấp bậc có năng lực",
    "Nắm bắt cơ hội đào tạo toàn diện, phát triển bản thân, và thăng tiến trong sự nghiệp"
  ],
  jobTags: ["UI/UX Design", "Thiết kế", "Công nghệ thị phường tiên"],
  locations: ["Hà Nội", "Đống Đa"]
};

const JobDetailPage = ({ id }: { id: string }) => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [common] = useCommonTranslation();
  const [Detailjob, setDetailjob] = useState<Tintuyendungpublic | null>(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const res = await getTintuyendungById(id);
        if (res.data.length > 0) {
          setDetailjob(res.data[0]);
        } else {
          setDetailjob(null);
        }
      } catch (error) {
        console.error("Error fetching job detail:", error);
        setDetailjob(null);
      }
    })();
  }, [id]);
  console.log("Detailjob", Detailjob);





  const handleApply = () => {
    // Kiểm tra đăng nhập và mở modal nếu chưa đăng nhập
    // const isLoggedIn = false; 
    // if (!isLoggedIn) {
    //   setShowLoginModal(true);
    // } else {
    //   // Xử lý ứng tuyển nếu đã đăng nhập
    //   alert("Đã nộp hồ sơ thành công!");
    // }
    router.push('/Formungtuyen/Formungtuyen');
  };

  return (
    <PageContainer>
      <JobDetailContainer>
        {/* Layout 2 cột chính */}
        <TwoColumnLayout>
          {/* Cột bên trái - Thông tin chính về công việc */}
          <LeftColumn>
            <JobDetailCard>
              <JobHeader>
                <JobTitle>{jobDetail.title}</JobTitle>
                <JobMetaRow>
                  <JobMetaItem>
                    <img src="/images/home/salary.png" alt="Mức lương" />
                    <div className="inline-grid">
                      <span>Mức lương </span>
                      <span className="text-[#051A53] ">{jobDetail.mucLuong}</span>
                    </div>
                  </JobMetaItem>
                  <JobMetaItem>
                    <img src="/images/home/location.png" alt="Địa điểm" />
                    <div className="inline-grid">
                      <span>Địa điểm </span>
                      <span className="text-[#051A53]">{jobDetail.location}</span>
                    </div>
                  </JobMetaItem>
                  <JobMetaItem>
                    <img src="/images/home/experience.png" alt="Kinh nghiệm" />
                    <div className="inline-grid">
                      <span>Kinh nghiệm </span>
                      <span className="text-[#051A53]">{jobDetail.experience}</span>
                    </div>
                  </JobMetaItem>
                  <JobMetaItem>
                    <img src="/images/home/calendarcolor.png" alt="Ngày đăng" />
                    <div className="inline-grid">
                      <span>Ngày đăng </span>
                      <span className="text-[#051A53]">{jobDetail.postDate}</span>
                    </div>
                  </JobMetaItem>
                </JobMetaRow>
                <JobMetaSecondRow>
                  <JobMetaItem>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" fill="#666" />
                    </svg>
                    <span>Hạn nộp hồ sơ: {jobDetail.applyDate}</span>
                  </JobMetaItem>
                </JobMetaSecondRow>
              </JobHeader>
              <div className="flex gap-[30px]">
                <ApplyButton onClick={handleApply} >
                  Ứng tuyển ngay
                </ApplyButton>
                <img src="/images/home/Yêu thích.png" className="w-[36px] h-[36px]" />
              </div>

              <FavoriteButton>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" fill="#BC2826" />
                </svg>
              </FavoriteButton>
            </JobDetailCard>

            <JobDetailSection>
              <SectionTitle>Mô tả công việc</SectionTitle>
              <div dangerouslySetInnerHTML={{ __html: jobDetail.description }} />

              <DetailList>
                {jobDetail.jobDetail.map((item, index) => (
                  <DetailListItem key={index}>{item}</DetailListItem>
                ))}
              </DetailList>



              <SectionTitle>Yêu cầu ứng viên</SectionTitle>
              <DetailList>
                {jobDetail.requirements.map((item, index) => (
                  <DetailListItem key={index}>{item}</DetailListItem>
                ))}
              </DetailList>

              <SectionTitle>Quyền lợi</SectionTitle>
              <DetailList>
                {jobDetail.benefits.map((item, index) => (
                  <DetailListItem key={index}>{item}</DetailListItem>
                ))}
              </DetailList>

              <ButtonContainer>
                <ApplyButton onClick={handleApply} fullWidth>
                  Ứng tuyển ngay
                </ApplyButton>
              </ButtonContainer>
            </JobDetailSection>
          </LeftColumn>

          {/* Cột bên phải - Thông tin công ty & các thông tin phụ */}
          <RightColumn>
            <CompanyInfoCard>
              <div className="flex ">

                <img className="w-[80px] h-[80px] object-contain border border-gray-300 rounded-lg mb-4" src={jobDetail.company.logo} alt={jobDetail.company.name} />

                <CompanyName>{jobDetail.company.name}</CompanyName>
              </div>
              <InfoList>
                <InfoItem>
                  <InfoLabel>Quy mô:</InfoLabel>
                  <InfoValue>{jobDetail.company.employeeCount}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Lĩnh vực:</InfoLabel>
                  <InfoValue>{jobDetail.company.type}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>Địa chỉ:</InfoLabel>
                  <InfoValue>{jobDetail.company.address}</InfoValue>
                </InfoItem>
              </InfoList>

              <ViewCompanyLink href="/company/techcombank">
                Xem trang công ty <ArrowIcon>→</ArrowIcon>
              </ViewCompanyLink>
            </CompanyInfoCard>

            <InfoSection>
              <SectionTitle>Thông tin chung</SectionTitle>
              <InfoGrid>
                <InfoGridItem>
                  <InfoGridIcon>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#666" />
                    </svg>
                  </InfoGridIcon>
                  <div>
                    <InfoGridLabel>Cấp bậc</InfoGridLabel>
                    <InfoGridValue>{jobDetail.level}</InfoGridValue>
                  </div>
                </InfoGridItem>

                <InfoGridItem>
                  <InfoGridIcon>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="#666" />
                    </svg>
                  </InfoGridIcon>
                  <div>
                    <InfoGridLabel>Học vấn</InfoGridLabel>
                    <InfoGridValue>{jobDetail.educationLevel}</InfoGridValue>
                  </div>
                </InfoGridItem>

                <InfoGridItem>
                  <InfoGridIcon>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2zm0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#666" />
                    </svg>
                  </InfoGridIcon>
                  <div>
                    <InfoGridLabel>Số lượng tuyển</InfoGridLabel>
                    <InfoGridValue>{jobDetail.recruitCount}</InfoGridValue>
                  </div>
                </InfoGridItem>

                <InfoGridItem>
                  <InfoGridIcon>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="#666" />
                    </svg>
                  </InfoGridIcon>
                  <div>
                    <InfoGridLabel>Hình thức làm việc</InfoGridLabel>
                    <InfoGridValue>{jobDetail.workType}</InfoGridValue>
                  </div>
                </InfoGridItem>

                <InfoGridItem>
                  <InfoGridIcon>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77v2.02c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V15.3c-2.58-.56-4-1.83-4-3.3 0-2.21 4.03-4 9-4s9 1.79 9 4c0 1.47-1.42 2.74-4 3.3v-2.59c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.31.31.85.09.85-.35v-2.02c4.06-.64 7-2.53 7-4.77 0-2.76-4.48-5-10-5z" fill="#666" />
                    </svg>
                  </InfoGridIcon>
                  <div>
                    <InfoGridLabel>Giới tính</InfoGridLabel>
                    <InfoGridValue>{jobDetail.gender}</InfoGridValue>
                  </div>
                </InfoGridItem>
              </InfoGrid>
            </InfoSection>

            <InfoSection>
              <SectionTitle>Chia sẻ đường liên kết</SectionTitle>
              <LinkShareInput>
                <input type="text" value={jobDetail.company.website} readOnly />
                <CopyButton>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="#666" />
                  </svg>
                </CopyButton>
              </LinkShareInput>
            </InfoSection>

            <InfoSection>
              <SectionTitle>Danh mục từ khóa liên quan</SectionTitle>
              <TagsContainer>
                {jobDetail.jobTags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagsContainer>
            </InfoSection>

            <InfoSection>
              <SectionTitle>Khu vực</SectionTitle>
              <TagsContainer>
                {jobDetail.locations.map((location, index) => (
                  <Tag key={index}>{location}</Tag>
                ))}
              </TagsContainer>
            </InfoSection>
          </RightColumn>
        </TwoColumnLayout>
      </JobDetailContainer>
      <div className="bg-[#FFF] ">
        <RelatedJob>
          <Vieclamlienquan
            title={common("vieclamlienquan.title")}
            description={common("vieclamlienquan.description")}
            buttonText={common("vieclamlienquan.button")}
          />
        </RelatedJob>
      </div>
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </PageContainer>
  );
};

// Login Modal Component
interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Đăng nhập để ứng tuyển</ModalTitle>
          <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <p>Vui lòng đăng nhập để tiếp tục ứng tuyển vị trí này.</p>
          <ModalButtonGroup>
            <ModalButton primary href="/login">Đăng nhập</ModalButton>
            <ModalButton href="/register">Đăng ký</ModalButton>
          </ModalButtonGroup>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled Components
const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const JobDetailContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const TwoColumnLayout = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  width: 350px;
  flex-shrink: 0;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const JobDetailCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 1px solid #e0e0e0;
`;

const JobHeader = styled.div``;

const JobTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #051A53;
  margin: 0 0 16px;
`;

const JobMetaRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 77px;
  margin-bottom: 16px;
  @media (max-width: 1200px) {
    gap: 40px;
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    gap: 24px;
    flex-direction: column;
  }
`;

const JobMetaSecondRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
`;

const JobMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
  
  svg {
    flex-shrink: 0;
  }
`;

const ApplyButton = styled.button<{ fullWidth?: boolean }>`
  background-color: #BC2826;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 24px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: ${props => props.fullWidth ? '100%' : '87%'};
  
  &:hover {
    background-color: #9c1f1e;
  }
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const JobDetailSection = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 16px 0 16px;
`;

const DetailList = styled.ul`
  list-style-type: disc;
  padding-left: 24px;
  margin: 0;
`;

const DetailListItem = styled.li`
  margin-bottom: 8px;
  line-height: 1.5;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
`;

const CompanyInfoCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  background-color: #f5f5f5;
  margin-bottom: 16px;
  
  img {
    width: 80px;
    height: 80px ;
    object-fit: contain;
  }
`;

const CompanyName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-left: 16px;
`;

const InfoList = styled.div`
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

const InfoValue = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 500;
`;

const ViewCompanyLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #007bff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  margin-top: 16px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ArrowIcon = styled.span`
  font-size: 16px;
`;

const InfoSection = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`;

const InfoGridItem = styled.div`
  display: flex;
  gap: 12px;
`;

const InfoGridIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 50%;
  flex-shrink: 0;
`;

const InfoGridLabel = styled.div`
  font-size: 13px;
  color: #666;
`;

const InfoGridValue = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const LinkShareInput = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  
  input {
    flex: 1;
    border: none;
    padding: 8px 12px;
    font-size: 14px;
    outline: none;
  }
`;

const CopyButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  border-left: 1px solid #ddd;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #e5e5e5;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #555;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  
  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
  
  p {
    margin: 0 0 24px;
    text-align: center;
    color: #666;
  }
`;

const ModalButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

interface ModalButtonProps {
  primary?: boolean;
}

const ModalButton = styled(Link) <ModalButtonProps>`
  flex: 1;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  
  ${props => props.primary ? `
    background-color: #BC2826;
    color: white;
    
    &:hover {
      background-color: #9c1f1e;
    }
  ` : `
    background-color: #f5f5f5;
    color: #333;
    
    &:hover {
      background-color: #e5e5e5;
    }
  `}
`;
const RelatedJob = styled.div`
  max-width: 1240px;
  padding: 24px;
  
  margin: 0 auto ;
`;

export default JobDetailPage;