import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import RelatedJobs from "../../components/Vieclamlienquan"

// Interface cho dữ liệu công việc đã ứng tuyển
interface SavedJob {
    id: string;
    companyName: string;
    companyLogo: string;
    jobTitle: string;
    location: string;
    salary: string;
    postedDate: string;
    tags: string[];
    savedDate: string;
    isUrgent?: boolean;
}



// Dữ liệu mẫu công việc đã lưu
const savedJobs: SavedJob[] = [
    {
        id: '1',
        companyName: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        companyLogo: 'https://tse2.mm.bing.net/th/id/OIP.2UMwVoG_D1MvvUlXkYEMRwHaEk?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
        jobTitle: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        salary: '25.000.000đ - 35.000.000đ',
        postedDate: '2 ngày trước',
        tags: ['UI/UX Design', 'Internship'],
        savedDate: '2023-02-20'
    },
    {
        id: '2',
        companyName: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        companyLogo: 'https://tse2.mm.bing.net/th/id/OIP.2UMwVoG_D1MvvUlXkYEMRwHaEk?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
        jobTitle: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        salary: '25.000.000đ - 35.000.000đ',
        postedDate: '2 ngày trước',
        tags: ['UI/UX Design', 'Internship'],
        savedDate: '2023-02-21'
    }
];



const ViecLamDaUngTuyen: React.FC = () => {
    const [savedJobsList, setSavedJobsList] = useState(savedJobs);

    // Xử lý xóa công việc khỏi danh sách đã lưu
    const handleRemoveFromSaved = (jobId: string) => {
        setSavedJobsList(prev => prev.filter(job => job.id !== jobId));
    };

    // Xử lý ứng tuyển ngay
    const handleApplyNow = (jobId: string) => {
        // Logic ứng tuyển - có thể redirect hoặc mở modal
        console.log('Ứng tuyển công việc:', jobId);
    };

    return (
        <Container>
            <MainContent>
                {/* Header */}
                <Header>
                    <Title>Việc Làm Đã Lưu</Title>
                    <div className="text-[#007AFF] font-medium">{savedJobsList.length} vị trí đã lưu</div>
                </Header>

                {/* Applied Jobs List */}
                <JobsList>
                    {savedJobsList.map((job) => (
                        <JobCard key={job.id}>
                            <JobHeader>
                                <CompanyInfo>
                                    <CompanyLogo
                                        src={job.companyLogo}
                                        alt={job.companyName}
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/companies/default-company.png';
                                        }}
                                    />
                                    <CompanyDetails>
                                        <CompanyName>{job.companyName}</CompanyName>
                                        <JobTitle>{job.jobTitle}</JobTitle>
                                    </CompanyDetails>
                                </CompanyInfo>
                            </JobHeader>

                            <JobDetails>
                                <JobInfo>
                                    <InfoItem>
                                        <LocationIcon>
                                            <img src="/images/home/mapicon.png" alt="Location" />
                                        </LocationIcon>
                                        <span>{job.location}</span>
                                    </InfoItem>

                                    <InfoItem>
                                        <TimeIcon>
                                            <img src="/images/home/calendar.png" alt="Time" />
                                        </TimeIcon>
                                        <span>{job.postedDate}</span>
                                    </InfoItem>

                                    <InfoItem>
                                        <SalaryIcon>
                                            <img src="/images/home/Lương.png" alt="Salary" />
                                        </SalaryIcon>
                                        <SalaryText>{job.salary}</SalaryText>
                                    </InfoItem>
                                </JobInfo>
                            </JobDetails>
                            <div className="flex justify-between items-center mt-4">
                                <JobStatus >
                                    {job.tags.map((tag, index) => (
                                        <JobTag key={index}>{tag}</JobTag>
                                    )
                                    )}
                                </JobStatus>
                                <JobActions>
                                    <Button onClick={() => handleApplyNow(job.id)}>
                                        <span>
                                            Ứng tuyển ngay
                                        </span>
                                    </Button>
                                    <RemoveButton onClick={() => handleRemoveFromSaved(job.id)}>
                                        <img src="/images/icons/Thungrac.png" alt="Xóa" />
                                    </RemoveButton>
                                </JobActions>
                            </div>
                        </JobCard>
                    ))}
                </JobsList>
            </MainContent>

            {/* Sidebar - Related Jobs */}
            <Sidebar>
                <SidebarTitle>Việc Làm Liên Quan</SidebarTitle>
                <RelatedJobs />

                {/* Advertisement Banners */}
                <AdBanners>
                    <AdBanner>
                        <img src="/images/home/thongbaotuyendung.png" alt="Nissan Advertisement" />
                    </AdBanner>
                    <AdBanner>
                        <img src="/images/home/LG.png" alt="LG Advertisement" />
                    </AdBanner>
                </AdBanners>
            </Sidebar>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    display: flex;
    max-width: 1240px;
    margin: 0 auto;
    padding: 20px;
    gap: 24px;
    min-height: 100vh;
    background-color: #F7F7F7;

    @media (max-width: 992px) {
        flex-direction: column;
        padding: 16px;
    }

    @media (max-width: 768px) {
        padding: 12px;
    }
`;

const MainContent = styled.div`
    flex: 1;
    min-width: 0;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    background-color: #FFF;
    border: 1px solid #EFEFEF;
    border-radius: 8px;
    padding: 12px;
    height: 87px;

    @media (max-width: 768px) {
        
    }
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 700;
    color: #051A53;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;
const Button = styled.button`
    background-color: #BC2826;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
        background-color: #a21e1c;
    }
`;



const JobsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const JobCard = styled.div`
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.2s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
        padding: 16px;
    }
`;
const JobTag = styled.span`
    display: inline-block;
    background-color: #F7F6F5;
    color: #AE7174;
    font-size: 15px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 12px;
    margin-right: 8px;
    margin-bottom: 4px;
`;

const JobHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px;
    }
`;

const CompanyInfo = styled.div`
    display: flex;
    gap: 12px;
    flex: 1;
`;

const CompanyLogo = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid #e5e7eb;
`;

const CompanyDetails = styled.div`
    flex: 1;
    min-width: 0;
`;

const CompanyName = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
`;

const JobTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #051A53;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const JobActions = styled.div`
    display: flex;
    gap: 8px;
`;

const RemoveButton = styled.button`
`;

const JobDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`;

const JobInfo = styled.div`
    display: flex;
    gap: 164px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 16px;
    }
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #666;
`;

const LocationIcon = styled.div`
    display: flex;
`;

const TimeIcon = styled.div`
    display: flex;
`;

const SalaryIcon = styled.div`
    display: flex;
`;

const SalaryText = styled.span`
    color: #BC2826;
    font-weight: 600;
`;

const JobStatus = styled.div`
    font-size: 14px;
    font-weight: 500;
    padding: 8px 12px 8px 0;
    border-radius: 20px;
`;

const Sidebar = styled.div`
    width: 320px;
    flex-shrink: 0;

    @media (max-width: 992px) {
        width: 100%;
    }
`;

const SidebarTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 16px;
`;

const SidebarFilter = styled.div`
    margin-bottom: 20px;

    select {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 14px;
        background: white;
    }
`;



const AdBanners = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const AdBanner = styled.div`
    border-radius: 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;

export default ViecLamDaUngTuyen;