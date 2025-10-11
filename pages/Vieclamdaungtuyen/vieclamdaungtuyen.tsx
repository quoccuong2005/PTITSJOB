import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import RelatedJobs from "../../components/Vieclamlienquan"

// Interface cho dữ liệu công việc đã ứng tuyển
interface AppliedJob {
    id: string;
    companyName: string;
    companyLogo: string;
    jobTitle: string;
    location: string;
    salary: string;
    appliedDate: string;
    status: 'pending' | 'accepted' | 'rejected' | 'expired';
    statusText: string;
    daysAgo: string;
    applicationDeadline?: string;
}



// Dữ liệu mẫu công việc đã ứng tuyển
const appliedJobs: AppliedJob[] = [
    {
        id: '1',
        companyName: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        companyLogo: 'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg',
        jobTitle: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        salary: '25.000.000đ - 35.000.000đ',
        appliedDate: '2023-02-20',
        status: 'pending',
        statusText: 'Đã ứng tuyển (23-02-2023 08:21)',
        daysAgo: '2 ngày trước'
    },
    {
        id: '2',
        companyName: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        companyLogo: 'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg',
        jobTitle: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        salary: '25.000.000đ - 35.000.000đ',
        appliedDate: '2023-02-21',
        status: 'pending',
        statusText: 'Đã ứng tuyển (23-02-2023 08:21)',
        daysAgo: '2 ngày trước'
    },
    {
        id: '3',
        companyName: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        companyLogo: 'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg',
        jobTitle: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        salary: '25.000.000đ - 35.000.000đ',
        appliedDate: '2023-02-22',
        status: 'accepted',
        statusText: 'Nhà tuyển dụng đã xem hồ sơ',
        daysAgo: '2 ngày trước'
    },
    {
        id: '4',
        companyName: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        companyLogo: 'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg',
        jobTitle: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        salary: '25.000.000đ - 35.000.000đ',
        appliedDate: '2023-02-23',
        status: 'accepted',
        statusText: 'Nhà tuyển dụng đã chấp nhận',
        daysAgo: '2 ngày trước'
    }
];



const ViecLamDaUngTuyen: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'accepted' | 'rejected'>('all');

    // Lọc công việc theo trạng thái
    const filteredJobs = activeTab === 'all'
        ? appliedJobs
        : appliedJobs.filter(job => job.status === activeTab);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return '#FFA500';
            case 'accepted':
                return '#28A745';
            case 'rejected':
                return '#DC3545';
            default:
                return '#6C757D';
        }
    };

    return (
        <Container>
            <MainContent>
                {/* Header */}
                <Header>
                    <Title>Việc Làm Đã Ứng Tuyển</Title>
                    <StatusFilter>
                        <StatusDropdown
                            value={activeTab}
                            onChange={(e) => setActiveTab(e.target.value as 'all' | 'pending' | 'accepted' | 'rejected')}
                        >
                            <option value="all">Tất cả</option>
                            <option value="pending">Đang chờ</option>
                            <option value="accepted">Đã xem</option>
                            <option value="rejected">Từ chối</option>
                        </StatusDropdown>
                    </StatusFilter>
                </Header>

                {/* Applied Jobs List */}
                <JobsList>
                    {filteredJobs.map((job) => (
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
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M8 1.33334C5.42 1.33334 3.33334 3.42001 3.33334 6.00001C3.33334 9.50001 8 14.6667 8 14.6667C8 14.6667 12.6667 9.50001 12.6667 6.00001C12.6667 3.42001 10.58 1.33334 8 1.33334Z" fill="#666666" />
                                            </svg>
                                        </LocationIcon>
                                        <span>{job.location}</span>
                                    </InfoItem>

                                    <InfoItem>
                                        <TimeIcon>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z" fill="#666666" />
                                                <path d="M8.5 4H7V8.5L10.75 10.75L11.5 9.5L8.5 7.75V4Z" fill="#666666" />
                                            </svg>
                                        </TimeIcon>
                                        <span>{job.daysAgo}</span>
                                    </InfoItem>

                                    <InfoItem>
                                        <SalaryIcon>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z" fill="#BC2826" />
                                            </svg>
                                        </SalaryIcon>
                                        <SalaryText>{job.salary}</SalaryText>
                                    </InfoItem>
                                </JobInfo>
                            </JobDetails>
                            <div className="flex justify-between items-center mt-4">
                                <JobStatus status={job.status}>
                                    {job.statusText}
                                </JobStatus>
                                <JobActions>
                                    <ViewButton href={`/viec-lam/chi-tiet/${job.id}`} >
                                        <img src="/images/home/iconeye.png" alt="Xem" />
                                    </ViewButton>
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
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
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

const StatusFilter = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-end;
    }
`;

const StatusDropdown = styled.select`
    padding: 8px 16px;
    border: 1px solid #EEEEEE;
    background-color: white;
    color: #333;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    min-width: 150px;
    transition: all 0.2s ease;
    
    /* Custom arrow */
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;
    padding-right: 40px;

    &:hover {
        border-color: #051A53;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:focus {
        outline: none;
        border-color: #051A53;
        box-shadow: 0 0 0 2px rgba(5, 26, 83, 0.1);
    }

    @media (max-width: 480px) {
        min-width: 120px;
        font-size: 13px;
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

const ViewButton = styled(Link)`
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

const JobStatus = styled.div<{ status: string }>`
    color: ${props => props.status === 'accepted' ? '#28A745' : props.status === 'rejected' ? '#DC3545' : '#FFA500'};
    font-size: 14px;
    font-weight: 500;
    background-color: ${props => props.status === 'accepted' ? '#E6F4EA' : props.status === 'rejected' ? '#F8D7DA' : '#FFF4E5'};
    padding: 8px 12px 8px 12px;
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