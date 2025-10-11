import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface RelatedJob {
    id: string;
    companyName: string;
    companyLogo: string;
    jobTitle: string;
    location: string;
    salary: string;
    postedDate: string;
    tags: string[];
    isUrgent?: boolean;
    isSaved?: boolean;
}

// Dữ liệu mẫu việc làm liên quan
const relatedJobs: RelatedJob[] = [
    {
        id: '1',
        companyName: 'Tek Experts Professional Services Viet',
        companyLogo: 'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg',
        jobTitle: 'Hành Chính Nhân Sự - Thu Nhập',
        location: 'Bắc Từ Liêm, Hà Nội',
        salary: 'Từ 12.000.000đ',
        postedDate: '2 ngày trước',
        tags: ['Hành Chính', 'Partime']
    },
    {
        id: '2',
        companyName: 'Tập Đoàn Công Nghiệp - Viễn Thông...',
        companyLogo: 'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg',
        jobTitle: 'Chuyên Viên Pháp Lý',
        location: 'Hà Nội, Việt Nam',
        salary: 'Hấp dẫn',
        postedDate: '2 ngày trước',
        tags: ['Pháp lý', 'Partime']
    }
];




const RelatedJobs: React.FC = () => {
    return (<>
        <RelatedJobsList>
            {relatedJobs.map((job) => (
                <RelatedJobCard key={job.id}>
                    <RelatedJobHeader>
                        <div className="flex items-center gap-4">
                            <RelatedCompanyLogo
                                src={job.companyLogo}
                                alt={job.companyName}
                                onError={(e) => {
                                    e.currentTarget.src = '/images/companies/default-company.png';
                                }}
                            />
                            <div>
                                <RelatedCompanyName>{job.companyName}</RelatedCompanyName>
                                <RelatedJobTitle>{job.jobTitle}</RelatedJobTitle>
                            </div>
                        </div>
                        <RelatedJobInfo>


                            <RelatedJobDetails>
                                <RelatedInfoItem>
                                    <LocationIcon>
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 1.33334C5.42 1.33334 3.33334 3.42001 3.33334 6.00001C3.33334 9.50001 8 14.6667 8 14.6667C8 14.6667 12.6667 9.50001 12.6667 6.00001C12.6667 3.42001 10.58 1.33334 8 1.33334Z" fill="#666666" />
                                        </svg>
                                    </LocationIcon>
                                    <span>{job.location}</span>
                                </RelatedInfoItem>

                                <RelatedInfoItem>
                                    <TimeIcon>
                                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0Z" fill="#666666" />
                                        </svg>
                                    </TimeIcon>
                                    <span>{job.postedDate}</span>
                                </RelatedInfoItem>
                            </RelatedJobDetails>

                            <RelatedSalary>{job.salary}</RelatedSalary>


                        </RelatedJobInfo>
                        <div className="flex justify-between items-center mt-4">
                            <JobTags>
                                {job.tags.map((tag, index) => (
                                    <JobTag key={index}>{tag}</JobTag>
                                ))}
                            </JobTags>
                            <SaveButton>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3Z" stroke="#666" fill="none" strokeWidth="1.5" />
                                </svg>
                            </SaveButton>
                        </div>
                    </RelatedJobHeader>
                </RelatedJobCard>
            ))}
        </RelatedJobsList>

    </>);
};
const RelatedJobsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
`;

const RelatedJobCard = styled.div`
    background: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const RelatedJobHeader = styled.div`
    
    gap: 12px;
`;

const RelatedCompanyLogo = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    flex-shrink: 0;
`;

const RelatedJobInfo = styled.div`
    flex: 1;
    min-width: 0;
    margin-top: 12px;
`;

const RelatedJobTitle = styled.h4`
    font-size: 16px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 4px;
`;

const RelatedCompanyName = styled.div`
    font-size: 13px;
    color: #666;
    margin-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 195px;
`;

const RelatedJobDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

const RelatedInfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #666;
`;

const RelatedSalary = styled.div`
    color: #BC2826;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
`;

const JobTags = styled.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    
`;

const JobTag = styled.span`
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 15px;
    background-color: #F7F6F5;
    color: #AE7174;
`;

const SaveButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: background 0.2s ease;

    &:hover {
        background: #f5f5f5;
    }
`;
const LocationIcon = styled.div`
    display: flex;
`;

const TimeIcon = styled.div`
    display: flex;
`;



export default RelatedJobs;