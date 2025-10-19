import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';

// Interface cho dữ liệu
interface CareerOption {
  id: string;
  title: string;
  icon: string;
}

interface FieldOption {
  id: string;
  title: string;
}

// Mock data cho danh sách ngành nghề
const careerOptions: CareerOption[] = [
  { id: 'marketing', title: 'Marketing', icon: '/images/home/Marketing.gif' },
  { id: 'it', title: 'IT Phần mềm', icon: '/images/home/ITphanmem.gif' },
  { id: 'media', title: 'Truyền thông', icon: '/images/home/Truyenthong.gif' },
  { id: 'customer', title: 'Công nghệ thông tin', icon: '/images/home/CNTT.gif' },
  { id: 'business', title: 'Kinh doanh', icon: '/images/home/Kinh doanh.gif' },
  { id: 'ads', title: 'Quảng cáo', icon: '/images/home/Quangcao.gif' },
  { id: 'sales', title: 'Bán hàng', icon: '/images/home/Sell.gif' },
  { id: 'service', title: 'Dịch vụ khách hàng', icon: '/images/home/Dichvukhachhang.gif' }
];

// Mock data cho danh sách lĩnh vực chi tiết
const fieldOptions: FieldOption[] = [
  { id: 'field1', title: 'Thiết kếp Công tác viên' },
  { id: 'field2', title: 'Việc làm bán thời gian theo ca' },
  { id: 'field3', title: 'Viết bài nghiên hữu theo dự án' },
  { id: 'field4', title: 'Việc làm Fulltime (Fresher/ SV năm cuối nghiệp)' }
];

const LoginFlow: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState<'career' | 'field'>('career');
  const [selectedCareers, setSelectedCareers] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [error, setError] = useState('');

  // Xử lý chọn ngành nghề
  const toggleCareerSelection = (careerId: string) => {
    setSelectedCareers(prev =>
      prev.includes(careerId)
        ? prev.filter(id => id !== careerId)
        : [...prev, careerId]
    );
  };

  // Xử lý chọn lĩnh vực
  const toggleFieldSelection = (fieldId: string) => {
    setSelectedFields(prev =>
      prev.includes(fieldId)
        ? prev.filter(id => id !== fieldId)
        : [...prev, fieldId]
    );
  };

  // Xử lý hoàn thành chọn ngành nghề
  const handleCareerSubmit = () => {
    if (selectedCareers.length === 0) {
      setError('Vui lòng chọn ít nhất một ngành nghề');
      return;
    }

    setError('');
    setStep('field');
  };

  // Xử lý hoàn thành chọn lĩnh vực và chuyển hướng
  const handleFieldSubmit = () => {
    if (selectedFields.length === 0) {
      setError('Vui lòng chọn ít nhất một lĩnh vực');
      return;
    }

    // Lưu thông tin đã chọn vào localStorage hoặc gửi lên server
    localStorage.setItem('selectedCareers', JSON.stringify(selectedCareers));
    localStorage.setItem('selectedFields', JSON.stringify(selectedFields));

    // Chuyển hướng đến trang dành cho sinh viên
    router.push('/student/dashboard');
  };

  // Render modal chọn ngành nghề
  if (step === 'career') {
    return (
      <BackgroundContainer>
        <ModalOverlay>
          <ModalContainer>
            <ProgressBar>
              <ProgressDot active />
              <ProgressDot />
            </ProgressBar>

            <ModalHeader>
              <ModalTitle>Rất Vui Được Gặp Bạn !</ModalTitle>
              <ModalSubTitle>Bạn Đang Có Hứng Thú Với Ngành Nghề Nào</ModalSubTitle>
              <ModalDescription>
                Câu trả lời của bạn cho những câu hỏi tiếp theo sẽ giúp chúng tôi tìm ra những ý tưởng phù hợp nhất cho bạn
              </ModalDescription>
            </ModalHeader>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <CareerGrid>
              {careerOptions.map(career => (
                <CareerOption
                  key={career.id}
                  selected={selectedCareers.includes(career.id)}
                  onClick={() => toggleCareerSelection(career.id)}
                >
                  <CareerIcon>
                    <img src={career.icon} alt={career.title} />
                  </CareerIcon>
                  <CareerTitle>{career.title}</CareerTitle>
                  {selectedCareers.includes(career.id) && (
                    <CheckboxIcon>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="#BC2826" />
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff" />
                      </svg>
                    </CheckboxIcon>
                  )}
                </CareerOption>
              ))}
            </CareerGrid>

            <ModalButton onClick={handleCareerSubmit}>
              Bước tiếp theo
            </ModalButton>
          </ModalContainer>
        </ModalOverlay>
      </BackgroundContainer>
    );
  }

  // Render modal chọn lĩnh vực chi tiết
  if (step === 'field') {
    return (
      <BackgroundContainer>
        <ModalOverlay>
          <ModalContainer>
            <BackButton onClick={() => setStep('career')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#333" />
              </svg>
            </BackButton>

            <ProgressBar>
              <ProgressDot />
              <ProgressDot active />
            </ProgressBar>

            <ModalHeader>
              <ModalTitle>Hãy Cho Chúng Mình Biết</ModalTitle>
              <ModalSubTitle>Hình Thức Làm Việc Bạn Mong Muốn Là Gì</ModalSubTitle>
              <ModalDescription>
                Các lĩnh vực bạn quan tâm giúp chúng tôi cá nhân hóa nội dung để giúp bạn có trải nghiệm tốt nhất trên nền tảng
              </ModalDescription>
            </ModalHeader>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <FieldList>
              {fieldOptions.map(field => (
                <FieldOption
                  key={field.id}
                  selected={selectedFields.includes(field.id)}
                  onClick={() => toggleFieldSelection(field.id)}
                >
                  <FieldTitle>{field.title}</FieldTitle>
                  {selectedFields.includes(field.id) && (
                    <CheckIcon>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="#BC2826" />
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff" />
                      </svg>
                    </CheckIcon>
                  )}
                </FieldOption>
              ))}
            </FieldList>

            <ModalButton onClick={handleFieldSubmit}>
              Đi tới bản tin của bạn
            </ModalButton>
          </ModalContainer>
        </ModalOverlay>
      </BackgroundContainer>
    );
  }

  return null;
};

// Styled Components
const ErrorMessage = styled.div`
  padding: 10px;
  margin-bottom: 16px;
  background-color: #fff3f3;
  border: 1px solid #ffcaca;
  border-radius: 4px;
  color: #e60000;
  font-size: 14px;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/home/1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 999;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  width: 1080px;
  overflow-y: auto;
  position: relative;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h2`
  color: #051A53;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ModalSubTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #051A53;
  margin-bottom: 12px;
`;

const ModalDescription = styled.p`
  font-size: 16px;
  color: #535355;
`;

const ProgressBar = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  margin-bottom: 16px;
`;

interface ProgressDotProps {
  active?: boolean;
}

const ProgressDot = styled.div<ProgressDotProps>`
  width: 40px;
  height: 4px;
  background-color: ${props => props.active ? '#BC2826' : '#ddd'};
  border-radius: 2px;
`;

const CareerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface CareerOptionProps {
  selected: boolean;
}

const CareerOption = styled.div<CareerOptionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid ${props => props.selected ? '#BC2826' : '#ddd'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: white;
  position: relative;
  width: 235px;
  height: 186px;
  &:hover {
    border-color: #BC2826;
  }
    @media (max-width: 768px) {
      width: 100%;
    }
`;

const CheckboxIcon = styled.div`
  position: absolute;
    top: 17px;
    right: 11px;
    width: 32px;
    height: 32px;
    border-radius: 2px;
    overflow: hidden;
`;

const CareerIcon = styled.div`
  width: 120px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CareerTitle = styled.span`
  font-size: 18px;
    text-align: center;
    color: #051A53;
    width: 195px;
    height: 26px;
    font-weight: bold;
`;

const ModalButton = styled.button`
  width: 200px;
  height: 40px;
  padding: 8px;
  background-color: #BC2826;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  &:hover {
    background-color: #a12220;
  }
`;

const FieldList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

interface FieldOptionProps {
  selected: boolean;
}

const FieldOption = styled.div<FieldOptionProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid ${props => props.selected ? '#BC2826' : '#ddd'};
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  color: #333;
  position: relative;
  margin: 0 auto;
  width: 600px;
  height: 66px;
  &:hover {
    border-color: #BC2826;
  }
    @media (max-width: 768px) {
      width: 100%;
    }
`;

const FieldTitle = styled.span`
  font-size: 18px;
  margin: 0 auto;
`;

const CheckIcon = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  overflow: hidden;
`;

export default LoginFlow;