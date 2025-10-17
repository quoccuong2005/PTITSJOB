import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Ungtuyen } from "../../api/ungtuyen/type";
import { postUngtuyen } from "../../api/ungtuyen";
import { getTintuyendungById } from "../../api/tintuyendungpublic/index"
import { Tintuyendungpublic } from "../../api/tintuyendungpublic/type"

const Formungtuyen: React.FC = () => {
  const router = useRouter();
  const rawId = router.query.id as string | string[] | undefined;
  const idParam = Array.isArray(rawId) ? rawId[0] : rawId;
  const [activeTab, setActiveTab] = useState<'upload' | 'direct'>('upload');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [Detailjob, setDetailjob] = useState<Tintuyendungpublic | null>(null);
  // Form data
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [introduction, setIntroduction] = useState('');

  useEffect(() => {
    if (!idParam) return;
    (async () => {
      try {
        const res = await getTintuyendungById(idParam);
        if (Array.isArray(res.data) && res.data.length > 0) {
          setDetailjob(res.data[0]);
        } else if (res.data && (res.data as any).data && Array.isArray((res.data as any).data) && (res.data as any).data.length > 0) {
          setDetailjob((res.data as any).data[0]);
        } else {
          setDetailjob(null);
        }
      } catch (error) {
        console.error("Error fetching job detail:", error);
        setDetailjob(null);
      }
    })();
  }, [idParam]);

  // Xử lý chọn file CV
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setUploadedFile(file);
    }
  };


  // 🧩 Gửi form ứng tuyển thật sự qua API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      const payload: Ungtuyen = {
        studentCvId: "CV20251014001",
        tenUngVien: "Nguyễn Quốc Cường",
        soDienThoai: "0987654321",
        email: "cuong.nguyen@example.com",
        diaChi: "Số 25, đường Trần Thái Tông, Cầu Giấy, Hà Nội",
        gioiThieu: "Tôi là một lập trình viên trẻ đam mê công nghệ, có kinh nghiệm phát triển web với React và Node.js. Tôi mong muốn được làm việc trong môi trường chuyên nghiệp để học hỏi và phát triển kỹ năng."
      };

      const response = await postUngtuyen(payload);

      if (response.data.success) {
        alert("Ứng tuyển thành công!");
        console.log("Kết quả:", response.data.data);
        // router.push("/ung-tuyen-thanh-cong");
      } else {
        alert("Ứng tuyển thất bại. Vui lòng thử lại!");
      }
    } catch (error) {
      console.error("Lỗi khi gửi hồ sơ:", error);
      alert("Có lỗi xảy ra khi gửi hồ sơ!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Container>


      <FormContainer>
        <FormHeader>
          <FormTitle>
            Ứng Tuyển Ngay <JobTitle>{Detailjob?.tieuDe}</JobTitle>
          </FormTitle>
          <CloseButton onClick={() => router.back()}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </CloseButton>
        </FormHeader>

        <FormSection>
          <SectionTitle>CV của bạn</SectionTitle>

          <TabContainer>
            <Tab active={activeTab === 'upload'} onClick={() => setActiveTab('upload')}>
              <div>
                <RadioButton checked={activeTab === 'upload'} readOnly />
                CV đã được chọn kích hoạt
                <div className="mt-2">
                  {activeTab === "upload" && (
                    <UploadSection>
                      {!uploadedFile ? (
                        <FileUploadLabel htmlFor="cv-upload">
                          <UploadIcon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 15H13V9H16L12 4L8 9H11V15Z" fill="#BC2826" />
                              <path d="M20 18H4V10H2V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V10H20V18Z" fill="#BC2826" />
                            </svg>
                          </UploadIcon>
                          <span>Tải lên CV của bạn</span>
                          <FileInput
                            type="file"
                            id="cv-upload"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                          />
                        </FileUploadLabel>
                      ) : (
                        <FilePreview>
                          <FileIcon>📄</FileIcon>
                          <FileDetails>
                            <FileName>{uploadedFile.name}</FileName>
                            <FileUploadTime>Cập nhật {new Date().toLocaleString()}</FileUploadTime>
                          </FileDetails>
                          <ViewFileButton>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 3C4.5 3 2 8 2 8C2 8 4.5 13 8 13C11.5 13 14 8 14 8C14 8 11.5 3 8 3ZM8 11C6.34 11 5 9.66 5 8C5 6.34 6.34 5 8 5C9.66 5 11 6.34 11 8C11 9.66 9.66 11 8 11Z" fill="#0066CC" />
                              <path d="M8 6C6.89 6 6 6.89 6 8C6 9.11 6.89 10 8 10C9.11 10 10 9.11 10 8C10 6.89 9.11 6 8 6Z" fill="#0066CC" />
                            </svg>
                          </ViewFileButton>
                        </FilePreview>
                      )}
                    </UploadSection>
                  )}
                </div>
              </div>
            </Tab>

            <Tab active={activeTab === 'direct'} onClick={() => setActiveTab('direct')}>
              <div>
                <RadioButton checked={activeTab === 'direct'} readOnly />
                Chọn CV khác từ bộ Sưu tập CV của tôi
              </div>
              <div>
                {activeTab === "direct" && (
                  <SelectCVSection>
                    <ActionButton>Đi tới kho hoạt</ActionButton>
                  </SelectCVSection>
                )}
              </div>
            </Tab>
          </TabContainer>
        </FormSection>

        <FormSection>
          <SectionTitle>Thông tin ứng viên</SectionTitle>

          <FormGrid>
            <FormGroup>
              <Label htmlFor="fullName">Họ và tên ứng viên <Required>*</Required></Label>
              <Input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Nhập họ tên" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Số điện thoại <Required>*</Required></Label>
              <Input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Nhập số điện thoại" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email liên hệ <Required>*</Required></Label>
              <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="location">Địa chỉ <Required>*</Required></Label>
              <Input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Nhập địa chỉ" required />
            </FormGroup>
          </FormGrid>
        </FormSection>

        <FormSection>
          <SectionTitle>Thư giới thiệu</SectionTitle>
          <SectiontwoTitle>Viết một đoạn giới thiệu ngắn gọn về bản thân, điểm mạnh, điểm yếu và mong muốn cho vị trí này</SectiontwoTitle>
          <TextArea id="introduction" value={introduction} onChange={(e) => setIntroduction(e.target.value)} placeholder="Nhập nội dung" rows={5} />
        </FormSection>

        <SubmitButton type="submit" onClick={handleSubmit} disabled={uploading}>
          {uploading ? 'Đang xử lý...' : 'Nộp hồ sơ ứng tuyển'}
        </SubmitButton>
      </FormContainer>
    </Container>
  );
};

// --- styled components ---
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 793px;
  padding: 24px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const FormTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const JobTitle = styled.span`
  color: #BC2826;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const FormSection = styled.section`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;
const SectiontwoTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #666;
  margin-bottom: 8px;
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

interface TabProps {
  active: boolean;
}

const Tab = styled.label<TabProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${props => props.active ? '#FFF3F3' : 'transparent'};
  border: 1px ${props => props.active ? "solid #FFBFC0" : "dashed #FFBFC0"};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#FFF3F3' : '#F9F9F9'};
  }
`;

const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 12px;
  accent-color: #BC2826;
  width: 18px;
  height: 18px;
`;

const UploadSection = styled.div`
  background-color: #FFF3F3;
  border: 1px dashed #FFD6D6;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const SelectCVSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;

const ActionButton = styled.button`
  background-color: #BC2826;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #A42321;
  }
`;

const FileUploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  span {
    color: #BC2826;
    font-weight: 500;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const UploadIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilePreview = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #E1E1E1;
`;

const FileIcon = styled.div`
  font-size: 24px;
`;

const FileDetails = styled.div`
  flex: 1;
`;

const FileName = styled.div`
  font-weight: 500;
  margin-bottom: 4px;
`;

const FileUploadTime = styled.div`
  font-size: 12px;
  color: #666;
`;

const ViewFileButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #0066CC;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
`;

const Required = styled.span`
  color: #BC2826;
  margin-left: 4px;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #E1E1E1;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #BC2826;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #E1E1E1;
  border-radius: 4px;
  width: 100%;
  resize: vertical;
  font-family: inherit;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #BC2826;
  }
`;

const SubmitButton = styled.button`
  background-color: #BC2826;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #A42321;
  }
  
  &:disabled {
    background-color: #D88886;
    cursor: not-allowed;
  }
`;

export default Formungtuyen;
