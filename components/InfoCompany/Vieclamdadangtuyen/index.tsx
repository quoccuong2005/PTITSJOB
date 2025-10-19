import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
        salary: '25.000.000đ - 35.000.000đ',
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

const JobListings = () => {
    const [jobFilters, setJobFilters] = useState({
        position: '',
        location: '',
        experience: ''
    });

    const handleFilterChange = (field: string, value: string) => {
        setJobFilters(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <JobsSection>
            <JobsSectionHeader>
                <SectionTitle>Việc Làm Đã Đăng Tuyển</SectionTitle>
                <ViewAllJobsLink href={`/cong-ty/${companyInfo.id}/viec-lam`}>
                    5 việc làm
                </ViewAllJobsLink>
            </JobsSectionHeader>

            {/* Job Filters */}
            <JobFilters>
                <FilterGroup>
                    <InputWrapper>
                        <img src="/images/home/industry.png" alt="Industry" />
                        <FilterSelect

                            value={jobFilters.position}
                            onChange={(e) => handleFilterChange('position', e.target.value)}
                        >
                            <option value="">Ngành nghề</option>
                            <option value="analyst">Data Analyst</option>
                            <option value="developer">Developer</option>
                        </FilterSelect>
                    </InputWrapper>
                </FilterGroup>

                <FilterGroup>
                    <InputWrapper>
                        <img src="/images/home/job-type.png" alt="Job Type" />
                        <FilterSelect
                            value={jobFilters.location}
                            onChange={(e) => handleFilterChange('location', e.target.value)}
                        >
                            <option value="">Nơi làm việc</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="hcm">TP. Hồ Chí Minh</option>
                        </FilterSelect>
                    </InputWrapper>
                </FilterGroup>

                <FilterGroup>
                    <InputWrapper>
                        <img src="/images/home/timkiem.png" alt="Search" />
                        <FilterInput
                            type="text"
                            placeholder="Từ khóa tìm kiếm"
                            value={jobFilters.experience}
                            onChange={(e) => handleFilterChange('experience', e.target.value)}
                        />
                    </InputWrapper>
                </FilterGroup>

                <SearchButton>
                    Tìm kiếm
                </SearchButton>
            </JobFilters>

            {/* Jobs List */}
            <JobsList>
                {jobs.map((job) => (
                    <JobCard key={job.id}>
                        <JobCardHeader>
                            <JobHeaderTop>
                                <CompanyLogo
                                    src={companyInfo.logo}
                                    alt={companyInfo.name}
                                />
                                <JobCompanyInfo>
                                    <CompanyName>{job.namecompany}</CompanyName>
                                    <JobTitle>{job.title}</JobTitle>
                                </JobCompanyInfo>
                            </JobHeaderTop>

                            <JobMeta>
                                <JobMetaItem>
                                    <LocationIcon>
                                        <img src="/images/home/mapicon.png" alt="Location" />
                                    </LocationIcon>
                                    <span>{job.location}</span>
                                </JobMetaItem>

                                <JobMetaItem>
                                    <TimeIcon>
                                        <img src="/images/home/calendar.png" alt="Time" />
                                    </TimeIcon>
                                    <span>{job.daysAgo}</span>
                                </JobMetaItem>
                                <JobMetaItem>
                                    <SalaryIcon>
                                        <img src="/images/home/Lương.png" alt="Salary" />
                                    </SalaryIcon>
                                    <SalaryText>{job.salary}</SalaryText>
                                </JobMetaItem>
                            </JobMeta>


                        </JobCardHeader>

                        <JobCardFooter>
                            <JobTags>
                                {job.tags.map((tag, index) => (
                                    <JobTag key={index}>{tag}</JobTag>
                                ))}
                            </JobTags>
                            <JobActions>
                                <ApplyButton href={`/viec-lam/${job.id}/ung-tuyen`}>
                                    Ứng tuyển ngay
                                </ApplyButton>
                            </JobActions>
                        </JobCardFooter>
                    </JobCard>
                ))}
            </JobsList>
        </JobsSection>
    );
};

// Styled Components with improved responsive design
const JobsSection = styled.div`

    @media (max-width: 768px) {
        padding: 16px;
        margin: 0 -4px;
    }
`;

const JobsSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 16px;
    }
`;

const SectionTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #051A53;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ViewAllJobsLink = styled(Link)`
    color: #007AFF;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

const JobFilters = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto;
    gap: 12px;
    margin-bottom: 24px;
    align-items: flex-end;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 8px;
        margin-bottom: 16px;
    }
`;

const FilterGroup = styled.div`
    display: flex;
    flex-direction: column;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    left: 12px;
    width: 18px;
    height: 18px;
    pointer-events: none;
    opacity: 0.7;
  }
`

const FilterSelect = styled.select`
    width: 100%;
    padding: 10px 12px 10px 38px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    background: white;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #007AFF;
    }

    @media (max-width: 768px) {
        
        font-size: 15px;
    }
`;

const FilterInput = styled.input`
    width: 100%;
    padding: 10px 12px 10px 38px; /* ✅ giống select */
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;

    &:focus {
        outline: none;
        border-color: #007AFF;
    }

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 15px;
    }
`;

const SearchButton = styled.button`
    background: #BC2826;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s ease;
    height: fit-content;

    &:hover {
        background: #0056b3;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 12px 20px;
        font-size: 15px;
    }
`;

const JobsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
        gap: 12px;
    }
`;

const JobCard = styled.div`
    background: white;
    border: 1px solid #EEEEEE;
    border-radius: 8px;
    padding: 20px;
    transition: box-shadow 0.2s ease;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        padding: 16px;
        border-radius: 6px;
    }
`;

const JobCardHeader = styled.div`
    margin-bottom: 16px;

    @media (max-width: 768px) {
        margin-bottom: 12px;
    }
`;

const JobHeaderTop = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 768px) {
        gap: 8px;
        margin-bottom: 8px;
    }
`;

const JobCompanyInfo = styled.div`
    flex: 1;
    min-width: 0;
`;

const CompanyName = styled.div`
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;

const JobTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #051A53;
    margin: 0;
    line-height: 1.3;

    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 1.2;
    }
`;

const JobMeta = styled.div`
    display: flex;
    gap: 130px;
    margin-bottom: 8px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 16px;
        margin-bottom: 6px;
    }
`;

const JobMetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: #666;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

const LocationIcon = styled.div`
    display: flex;
    align-items: center;
`;

const TimeIcon = styled.div`
    display: flex;
    align-items: center;
`;

const SalaryText = styled.div`
    color: #BC2826;
    font-weight: 600;
    font-size: 15px;
    @media (max-width: 768px) {
        font-size: 14px;
        margin-top: 2px;
    }
`;

const JobCardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
        margin-top: 12px;
    }
`;

const JobTags = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const JobTag = styled.span`
    background: #F7F6F5;
    color: #AE7174;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 11px;
        padding: 3px 8px;
    }
`;

const JobActions = styled.div`
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ApplyButton = styled(Link)`
    display: inline-block;
    background: #BC2826;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.2s ease;
    text-align: center;

    &:hover {
        background: #A42321;
    }

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        padding: 12px 20px;
        font-size: 15px;
    }
`;

const CompanyLogo = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    flex-shrink: 0;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
        border-radius: 6px;
    }
`;
const SalaryIcon = styled.div`
    display: flex;
    align-items: center;
`;

export default JobListings;