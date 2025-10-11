import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
const Address = () => {
    return (<>
        <MapContainer>
            <MapAddressInfo>
                <div className="flex items-center gap-2">
                    <MapLogoCompany src={companyInfo.logo}
                        alt={companyInfo.name}
                        style={{ width: '80px', height: '80px' }} />
                    <MapNameCompany>{companyInfo.name}</MapNameCompany>
                </div>
                <MapAddress>Địa chỉ: {companyInfo.address}</MapAddress>
            </MapAddressInfo>
            <MapPlaceholder>
                <MapIcon>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61 4.79 5.82 7.18 5.82C9.57 5.82 12 7.61 12 10C12 7.61 14.43 5.82 16.82 5.82C19.21 5.82 21 7.61 21 10Z" stroke="#007AFF" strokeWidth="2" fill="rgba(0, 122, 255, 0.1)" />
                    </svg>
                </MapIcon>
                <MapText>Bản đồ vị trí công ty</MapText>
            </MapPlaceholder>
        </MapContainer>
        <div className="bg-white p-5 rounded-lg shadow-md">
            <SidebarTitle>Chia sẻ đường liên kết</SidebarTitle>
            <ShareLinkContainer>
                <ShareLinkInput
                    type="text"
                    value="https://topcvpro.vn/cong-ty..."
                    readOnly
                />
                <CopyButton>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M8 4V8C8 9.1 8.9 10 10 10H14C15.1 10 16 9.1 16 8V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4ZM6 8V4C6 1.8 7.8 0 10 0H14C16.2 0 18 1.8 18 4V8C18 10.2 16.2 12 14 12H10C7.8 12 6 10.2 6 8Z" fill="#666666" />
                    </svg>
                </CopyButton>
            </ShareLinkContainer>
        </div>
    </>)
}
const MapContainer = styled.div`
    background: white;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const MapPlaceholder = styled.div`
    width: 100%;
    height: 200px;
    background: #f8f9fa;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #e5e7eb;
`;

const MapIcon = styled.div`
    margin-bottom: 12px;
`;

const MapText = styled.span`
    color: #6B7280;
    font-size: 14px;
`;
const MapAddressInfo = styled.div`
    align-items: center;
`;
const MapLogoCompany = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    border: 1px solid #e5e7eb;
`;
const MapNameCompany = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #051A53;
`;
const MapAddress = styled.div`
    font-size: 12px;
    color: #6B7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 275px;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const SidebarTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 20px;
`;
const ShareLinkContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 12px;
`;
const ShareLinkInput = styled.input`
    flex: 1;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    background: white;
    cursor: pointer;
    &:focus {
        outline: none;
        border-color: #007AFF;
        box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.2);
    }
`;
const CopyButton = styled.button`
    background: #f1f1f1;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;
    &:hover {
        background: #e1e1e1;
    }
`;
export default Address;