import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import CompanyInfo from "../../components/InfoCompany/Thongtincongty"
import JobListings from "../../components/InfoCompany/Vieclamdadangtuyen"
import Address from "../../components/InfoCompany/Diachi"
import RelatedCompanies from "../../components/InfoCompany/Doanhnghieplienquan"


const InfoCompany: React.FC = () => {
    return (
        <Container>
            {/* Breadcrumb */}
            <Breadcrumb>
                <BreadcrumbItem href="/">Tìm việc</BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem href="/cong-ty">Danh sách công ty</BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem href="/cong-ty/1" active>Ngân hàng thương mại cổ phần kỹ thương Việt Nam</BreadcrumbItem>
            </Breadcrumb>
            <TwoColumnLayout>
                <LeftColumn>
                    <CompanyInfo />
                    <JobListings />
                </LeftColumn>
                <RightColumn>
                    <Address />
                    <RelatedCompanies />
                </RightColumn>
            </TwoColumnLayout>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    min-height: 100vh;

    @media (max-width: 992px) {
        padding: 16px;
    }

    @media (max-width: 768px) {
        padding: 12px;
    }
`;
const Breadcrumb = styled.nav`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    font-size: 14px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        font-size: 13px;
        margin-bottom: 16px;
    }
`;

const BreadcrumbItem = styled(Link) <{ active?: boolean }>`
    color: ${props => props.active ? '#051A53' : '#666'};
    text-decoration: none;
    font-weight: ${props => props.active ? '600' : '400'};

    &:hover:not([active]) {
        color: #051A53;
    }
`;

const BreadcrumbSeparator = styled.span`
    margin: 0 8px;
    color: #666;
`;
const TwoColumnLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 375px;
    gap: 24px;

    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`;

const LeftColumn = styled.div`
    max-width: 792px;
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 992px) {
        order: -1;
    }
`;
export default InfoCompany;