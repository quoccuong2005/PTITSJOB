import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { getCVTemplatesList } from "../../api/cvtemplatepublic"
import { CVTemplatePublic } from "../../api/cvtemplatepublic/type"
// interface CVTemplate {
//     id: string;
//     name: string;
//     image: string;
//     category: string;
//     isPremium?: boolean;
// }


// Dữ liệu mẫu CV
// const cvTemplates: CVTemplate[] = [
//     {
//         id: '1',
//         name: 'Mẫu CV Tiêu Chuẩn',
//         image: 'https://images.careerviet.vn/content/images/mau-cv-tieng-viet-careerbuilder-6.jpg',
//         category: 'Tiêu chuẩn'
//     },
//     {
//         id: '2',
//         name: 'Mẫu CV Năng Động',
//         image: 'https://images.careerviet.vn/content/images/mau-cv-tieng-viet-careerbuilder-6.jpg',
//         category: 'Năng động'
//     },
//     {
//         id: '3',
//         name: 'Mẫu CV Chuyên Nghiệp',
//         image: 'https://images.careerviet.vn/content/images/mau-cv-tieng-viet-careerbuilder-6.jpg',
//         category: 'Chuyên nghiệp'
//     },
//     {
//         id: '4',
//         name: 'Mẫu CV Hiện Đại',
//         image: 'https://images.careerviet.vn/content/images/mau-cv-tieng-viet-careerbuilder-6.jpg',
//         category: 'Hiện đại'
//     },
//     {
//         id: '5',
//         name: 'Mẫu CV Ấn Tượng',
//         image: 'https://images.careerviet.vn/content/images/mau-cv-tieng-viet-careerbuilder-6.jpg',
//         category: 'Ấn tượng'
//     }
// ];

const MauCV: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [cvTemplates, setCvTemplates] = useState<CVTemplatePublic[]>([]);

    useEffect(() => {
        getCVTemplatesList()
            .then((response) => {
                console.log("API CV", response);
                setCvTemplates(response.data);
            }
            )
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
            });
    }, []);
    console.log("CV", cvTemplates);



    return (
        <Container>
            {/* Header Section */}
            <HeaderSection>
                <Breadcrumb>
                    <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                    <BreadcrumbItem href="/maucv" active>Mẫu CV</BreadcrumbItem>
                </Breadcrumb>

                <HeaderContent>
                    <Title>Tổng Hợp Mẫu CV Xin Việc Chuẩn 2025</Title>

                    <ViewAllLink href="/mau-cv/all">
                        Hơn {cvTemplates.length} mẫu CV
                    </ViewAllLink>
                </HeaderContent>
            </HeaderSection>


            {/* CV Templates Grid */}
            <TemplatesGrid>
                {Array.isArray(cvTemplates) && cvTemplates.map((template) => (
                    <TemplateCard key={template._id}>
                        <TemplateImageContainer>
                            <TemplateImage
                                src={template.hinhAnh}
                                alt={template.ten}
                                onError={(e) => {
                                    e.currentTarget.src = '/images/cv-templates/default-cv.jpg';
                                }}
                            />
                            <TemplateOverlay>
                                <PreviewButton href={`/mau-cv/preview/${template._id}`}>
                                    Xem trước
                                </PreviewButton>
                            </TemplateOverlay>
                        </TemplateImageContainer>

                        <TemplateInfo>
                            <TemplateName>{template.ten}</TemplateName>
                            <UseTemplateButton href={`/mau-cv/editor/${template._id}`}>
                                Dùng mẫu ngay
                            </UseTemplateButton>
                        </TemplateInfo>
                    </TemplateCard>
                ))}
            </TemplatesGrid>


        </Container>
    );
};

// Styled Components
const Container = styled.div`
    max-width: 1240px;
    margin: 0 auto;
    padding: 20px;
    min-height: 100vh;

    @media (max-width: 768px) {
        padding: 16px;
    }

    @media (max-width: 480px) {
        padding: 12px;
    }
`;

const HeaderSection = styled.div`
    margin-bottom: 32px;

    @media (max-width: 768px) {
        margin-bottom: 24px;
    }
`;

const Breadcrumb = styled.nav`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 14px;

    @media (max-width: 480px) {
        font-size: 13px;
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

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
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

    @media (max-width: 480px) {
        font-size: 22px;
    }
`;

const ViewAllLink = styled(Link)`
    color: #007AFF;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;
const TemplatesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 34px;
    margin-bottom: 48px;

    @media (max-width: 768px) {
        gap: 20px;
        margin-bottom: 40px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 16px;
        margin-bottom: 32px;
    }
`;

const TemplateCard = styled.div`
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    height: 630px;
    width: 386px;
    cursor: pointer;
    @media (max-width: 768px) {
        height: 600px;
        width: 100%;
    }
    @media (max-width: 480px) {
        height: 580px;
    }
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
`;

const TemplateImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    @media (max-width: 768px) {
        height: 475px;
    }

    @media (max-width: 480px) {
        height: 475px;
    }
`;

const TemplateImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${TemplateCard}:hover & {
        transform: scale(1.05);
    }
`;

const TemplateOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${TemplateCard}:hover & {
        opacity: 1;
    }
`;

const PreviewButton = styled(Link)`
    background: rgba(255, 255, 255, 0.9);
    color: #051A53;
    padding: 10px 20px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s ease;

    &:hover {
        background: white;
    }
`;

const TemplateInfo = styled.div`
    padding: 20px;

    @media (max-width: 480px) {
        padding: 16px;
    }
`;

const TemplateName = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 16px;

    @media (max-width: 480px) {
        font-size: 16px;
        margin-bottom: 12px;
    }
`;

const UseTemplateButton = styled(Link)`
    display: block;
    width: 36%;
    border: 1px solid #BC2826;
    color: #BC2826;
    padding: 10px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    transition: background 0.2s ease;

    &:hover {
        background: #A42321;
        color: white;
    }

    @media (max-width: 480px) {
        padding: 8px;
        font-size: 13px;
    }
`;

export default MauCV;