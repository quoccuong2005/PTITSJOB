import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { getNhaTuyenDungList } from '../../../api/doanhnghieppublic';
import { NhaTuyenDung } from '../../../api/doanhnghieppublic/type';
import { useRouter } from 'next/router';

// Interface cho công ty liên quan
interface RelatedCompany {
    id: string;
    name: string;
    logo: string;
    location: string;
    followers: number;
    postedDate: string;
    description: string;
}
// Dữ liệu mẫu công ty liên quan
const relatedCompanies: RelatedCompany[] = [
    {
        id: '1',
        name: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)',
        logo: 'https://th.bing.com/th/id/OIP.2UMwVoG_D1MvvUlXkYEMRwHaEk?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Hà Nội, Việt Nam',
        followers: 112,
        postedDate: '2 ngày trước',
        description: 'VPBank xác định mục tiêu chiến lược trung và dài hạn là trở thành 1 trong 3 ngân hàng TMCP tư nhân hàng đầu (2023-2026) và tiếp tục duy trì vị thế ngân hàng TMCP tư nhân hàng đầu tại Việt Nam. Tầm nhìn ngân hàng số số 1 Việt Nam.'
    },
    {
        id: '2',
        name: 'Tek Experts Professional Services Vietnam',
        logo: 'https://th.bing.com/th/id/OIP.2UMwVoG_D1MvvUlXkYEMRwHaEk?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Bắc Từ Liêm, Hà Nội',
        followers: 132,
        postedDate: '2 ngày trước',
        description: 'Tek Experts cung cấp các dịch vụ hỗ trợ kỹ thuật chuyên nghiệp cho các doanh nghiệp lớn trên toàn thế giới...'
    },
    {
        id: '3',
        name: 'Tập Đoàn Công Nghiệp - Viễn Thông Quân Đội',
        logo: 'https://th.bing.com/th/id/OIP.2UMwVoG_D1MvvUlXkYEMRwHaEk?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Hà Nội, Việt Nam',
        followers: 145,
        postedDate: '3 ngày trước',
        description: 'Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) là doanh nghiệp hoạt động trong lĩnh vực công nghệ thông tin và viễn thông...'
    },
    {
        id: '4',
        name: 'Tập Đoàn Công Nghiệp - Viễn Thông Quân Đội',
        logo: 'https://th.bing.com/th/id/OIP.2UMwVoG_D1MvvUlXkYEMRwHaEk?o=7&cb=12rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
        location: 'Hà Nội, Việt Nam',
        followers: 145,
        postedDate: '3 ngày trước',
        description: 'Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) là doanh nghiệp hoạt động trong lĩnh vực công nghệ thông tin và viễn thông...'
    }
];
const RelatedCompanies = () => {
    const [relatedCompany, setAddress] = useState<NhaTuyenDung[]>([]);

    useEffect(() => {
        getNhaTuyenDungList('1')
            .then((response: any) => {
                const company = response.data.data;
                setAddress(company.slice(0, 4) || []);
            }).catch(error => {
                console.error('Lỗi khi lấy thông tin công ty:', error);
            });
    }, [])
    return (<>
        <SidebarSection>
            <SidebarTitle>Doanh Nghiệp Liên Quan</SidebarTitle>

            <RelatedCompaniesList>
                {relatedCompany?.map((company) => (
                    <RelatedCompanyCard key={company._id}>
                        <RelatedCompanyHeader>
                            <div className="flex items-center gap-3">
                                <RelatedCompanyLogo
                                    src={company.logo}
                                    alt={company.ten}

                                />
                                <RelatedCompanyName>{company.ten}</RelatedCompanyName>
                            </div>
                            <RelatedCompanyInfo>

                                <RelatedCompanyMeta>
                                    <RelatedMetaItem>
                                        <LocationIcon>
                                            <img src="/images/home/mapicon.png" alt="Location" />
                                        </LocationIcon>
                                        <span className='truncate w-20'>{company.diaChi}</span>
                                    </RelatedMetaItem>
                                    <RelatedMetaItem>
                                        <FollowersIcon>
                                            <img src="/images/home/nhom2.png" alt="Employees" />
                                        </FollowersIcon>
                                        <span>{company.quyMo} </span>
                                    </RelatedMetaItem>
                                    <RelatedMetaItem>
                                        <WorkIcon>
                                            <img src="/images/home/congviec.png" alt="Posted Date" />
                                        </WorkIcon>
                                        <span>{company.namThanhLap}</span>
                                    </RelatedMetaItem>
                                </RelatedCompanyMeta>
                                <RelatedCompanyDescription>
                                    {company.moTa}
                                </RelatedCompanyDescription>

                                <RelatedCompanyActions>
                                    <ViewCompanyButton href={`/cong-ty/${company._id}`}>
                                        Xem trang công ty
                                    </ViewCompanyButton>
                                    <FollowRelatedButton>
                                        Theo dõi ngay
                                    </FollowRelatedButton>
                                </RelatedCompanyActions>
                            </RelatedCompanyInfo>
                        </RelatedCompanyHeader>
                    </RelatedCompanyCard>
                ))}
            </RelatedCompaniesList>
        </SidebarSection>
    </>)
}
const SidebarSection = styled.div`
    
`;
const SidebarTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 20px;
`;

const RelatedCompaniesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RelatedCompanyCard = styled.div`
    border-bottom: 1px solid #f1f1f1;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    
`;

const RelatedCompanyHeader = styled.div`
`;

const RelatedCompanyLogo = styled.img`
    width: 84px;
    height: 84px;
    object-fit: contain;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
    flex-shrink: 0;
`;

const RelatedCompanyInfo = styled.div`
    flex: 1;
    min-width: 0;
`;

const RelatedCompanyName = styled.h4`
    font-size: 16px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 8px;
    line-height: 1.3;
`;

const RelatedCompanyMeta = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    margin-top: 12px;
    flex-wrap: wrap;
`;

const RelatedMetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #666;
`;

const RelatedCompanyDescription = styled.p`
    font-size: 13px;
    line-height: 1.4;
    color: #4B5563;
    margin: 0 0 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const RelatedCompanyActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ViewCompanyButton = styled(Link)`
    color: #007AFF;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background 0.2s ease;

    &:hover {
        background: rgba(0, 122, 255, 0.1);
    }
`;

const FollowRelatedButton = styled.button`
    background: transparent;
    color: #BC2826;
    border: 1px solid #BC2826;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: #BC2826;
        color: white;
    }
`;
const LocationIcon = styled.div`
    display: flex;
`;
const FollowersIcon = styled.div`
    display: flex;
`;
const WorkIcon = styled.div`
    display: flex;
`;
export default RelatedCompanies;