import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Address from '../Diachi';


// Interface cho thông tin công ty
interface CompanyInfo {
    id: string;
    name: string;
    logo: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    employees: string;
    founded: string;
    industry: string;
    description: string;
    benefits: string[];
    workingHours: string;
    followers: number;
}
// Interface cho việc làm
interface Job {
    id: string;
    namecompany: string;
    title: string;
    location: string;
    postedDate: string;
    salary: string;
    tags: string[];
    daysAgo: string;
}
const jobCategories = [
    { name: 'Tài chính/Ngân hàng/Bảo hiểm', count: 2 },
    { name: 'Tài chính/Ngân hàng/Bảo hiểm', count: 1 },
    { name: 'Kinh doanh/Bán hàng', count: 2 }
];
// Dữ liệu mẫu thông tin công ty
const companyInfo: CompanyInfo = {
    id: '1',
    name: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
    logo: 'https://th.bing.com/th/id/OIP.2UMwVoG_D1MvvUlXkYEMRwHaEk?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
    address: 'Tòa nhà Techcombank, 191 Bà Triệu, Hai Bà Trưng, Hà Nội',
    phone: '1900 54 54 12',
    email: 'info@techcombank.com.vn',
    website: 'https://techcombank.com.vn',
    employees: '1000-5000 nhân viên',
    founded: '1993',
    industry: 'Ngân hàng - Tài chính',
    description: 'Được thành lập năm 1993 với trụ sở chính đặt tại Hà Nội, Techcombank là một trong những ngân hàng TMCP lớn nhất Việt Nam và một trong những ngân hàng hàng đầu ở Châu Á. Trong những năm trở lại đây, Techcombank liên tiếp được vinh danh tại các giải thưởng...',
    benefits: ['Bảo hiểm sức khỏe', 'Thưởng hiệu suất', 'Đào tạo và phát triển', 'Môi trường làm việc chuyên nghiệp'],
    workingHours: 'Thứ 2 - Thứ 6: 8:00 - 17:30',
    followers: 15420,
};
// Dữ liệu mẫu việc làm
const jobs: Job[] = [
    {
        id: '1',
        namecompany: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        title: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        postedDate: '2023-02-20',
        salary: '25.000.000đ - 35.000.000đ',
        tags: ['UI/UX Design', 'Internship'],
        daysAgo: '2 ngày trước'
    },
    {
        id: '2',
        namecompany: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        title: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        postedDate: '2023-02-21',
        salary: '25.000.000đ - 35.000.000đ',
        tags: ['UI/UX Design', 'Internship'],
        daysAgo: '4 ngày trước'
    },
    {
        id: '3',
        namecompany: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        title: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        postedDate: '2023-02-22',
        salary: '25.000.000đ - 35.000.000đv',
        tags: ['UI/UX Design', 'Internship'],
        daysAgo: '4 ngày trước'
    },
    {
        id: '4',
        namecompany: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        title: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        postedDate: '2023-02-23',
        salary: '25.000.000đ - 35.000.000đ',
        tags: ['UI/UX Design', 'Internship'],
        daysAgo: '4 ngày trước'
    },
    {
        id: '5',
        namecompany: 'Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam',
        title: 'Data Analyst (Risk Management)',
        location: 'Hà Nội, Việt Nam',
        postedDate: '2023-02-24',
        salary: '25.000.000đ - 35.000.000đ',
        tags: ['UI/UX Design', 'Internship'],
        daysAgo: '6 ngày trước'
    }
];
const CompanyInfo = () => {
    const handleFollowCompany = () => {
        // Logic theo dõi công ty
        console.log('Theo dõi công ty');
    };
    return (<>
        <CompanyHeader>
            <CompanyHeaderLeft>
                <CompanyLogo
                    src={companyInfo.logo}
                    alt={companyInfo.name}
                    onError={(e) => {
                        e.currentTarget.src = '/images/companies/default-company.png';
                    }}
                />
                <CompanyBasicInfo>
                    <CompanyName>{companyInfo.name}</CompanyName>
                    <CompanyMeta>
                        <MetaItem>
                            <img src='/images/home/website.png' />
                            <CompanyContact>
                                <ContactItem><span>Website</span> <ContactLink href={companyInfo.website} target="_blank">{companyInfo.website}</ContactLink></ContactItem>
                            </CompanyContact>
                        </MetaItem>
                        <MetaItem>
                            <FollowersIcon>
                                <img src='/images/home/employee.png' />
                            </FollowersIcon>
                            <div className="flex flex-col">
                                <span>Tổng số nhân viên</span>
                                <span>{companyInfo.employees.toLocaleString()}</span>
                            </div>
                        </MetaItem>
                        <MetaItem>
                            <img src="/images/home/industry.png" alt="Industry" />
                            <div className="flex flex-col">
                                <span>Việc làm đăng tuyển</span>
                                <span>{jobs.length} việc làm</span>
                            </div>
                        </MetaItem>
                    </CompanyMeta>

                </CompanyBasicInfo>
            </CompanyHeaderLeft>
            <div className="flex justify-between items-center md:mt-[30px] ">
                <div className="p-[8px] text-[#AE7174] bg-[#F7F6F5] rounded-[22px]">Dịch vụ khách hàng</div>
                <CompanyActions>
                    <FollowButton onClick={handleFollowCompany}>
                        Theo dõi ngay
                    </FollowButton>
                </CompanyActions>
            </div>
        </CompanyHeader>
        <CompanyDetailsSection>
            <SectionTitle>Giới thiệu công ty</SectionTitle>
            <CompanyDescription>
                {companyInfo.description}
            </CompanyDescription>


            <SectionTitle style={{ marginTop: '32px' }}>Danh mục số vị trí tuyển dụng theo hình thức việc làm</SectionTitle>
            <JobCategoriesGrid>
                {jobCategories.map((category, index) => (
                    <JobCategoryItem key={index}>
                        <JobCategoryBullet />
                        <span>{category.name} {category.count}</span>
                    </JobCategoryItem>
                ))}
            </JobCategoriesGrid>
        </CompanyDetailsSection>
    </>)
}
const CompanyHeader = styled.div`
    background: white;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        padding: 20px;
    }
`;
const CompanyHeaderLeft = styled.div`
    display: flex;
    gap: 20px;
    flex: 1;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`;
const CompanyLogo = styled.img`
    width: 140px;
    height:140px;
    object-fit: contain;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 64px;
        height: 64px;
    }
`;
const CompanyBasicInfo = styled.div`
    flex: 1;
    min-width: 0;
`;
const CompanyName = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: #051A53;
    margin: 0 0 12px;
    max-width: 503px;
    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 8px;
    }
`;
const CompanyMeta = styled.div`
    display: flex;
    gap: 59px;
    margin-bottom: 12px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 16px;
    }
`;
const MetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    color: #666;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;
const CompanyContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;
const ContactItem = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #666;
`;

const ContactLink = styled.a`
    color: #007AFF;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 87px;
    &:hover {
        text-decoration: underline;
    }
`;
const FollowersIcon = styled.div`
    display: flex;
`;
const CompanyActions = styled.div`
    flex-shrink: 0;

   
`;
const FollowButton = styled.button`
    background: #BC2826;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background: #A42321;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;
const CompanyDetailsSection = styled.div`
    background: white;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 20px;
    }
`;
const SectionTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 16px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;
const CompanyDescription = styled.p`
    font-size: 14px;
    line-height: 1.6;
    color: #4B5563;
    margin-bottom: 24px;
`;
const JobCategoriesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
const JobCategoryItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    font-size: 14px;
    color: #4B5563;
`;
const JobCategoryBullet = styled.div`
    width: 4px;
    height: 4px;
    background-color: #6B7280;
    border-radius: 50%;
    flex-shrink: 0;
`
export default CompanyInfo;