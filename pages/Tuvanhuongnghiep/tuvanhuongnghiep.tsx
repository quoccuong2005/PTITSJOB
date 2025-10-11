import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// Interface cho bài viết tư vấn
interface CareerArticle {
    id: string;
    title: string;
    category: string;
    image: string;
    date: string;
    type: 'brand' | 'quiz' | 'cv';
    link: string;
}

// Dữ liệu mẫu bài viết
const careerArticles: CareerArticle[] = [
    {
        id: '1',
        title: 'Bạn là ai khi xung quanh toàn người giỏi?',
        category: 'THƯƠNG HIỆU CÁ NHÂN',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'brand',
        link: '/tu-van/thuong-hieu-ca-nhan-1'
    },
    {
        id: '2',
        title: 'Trắc nghiệm MBTI để làm gì?',
        category: 'TRẮC NGHIỆM MBTI',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'quiz',
        link: '/tu-van/trac-nghiem-mbti-1'
    },
    {
        id: '3',
        title: 'Một số mẫu CV đánh cho sinh viên CNTT - PTIT',
        category: 'MẪU CV ĐẸP',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'cv',
        link: '/tu-van/mau-cv-dep-1'
    },
    {
        id: '4',
        title: 'Bạn là ai khi xung quanh toàn người giỏi?',
        category: 'THƯƠNG HIỆU CÁ NHÂN',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'brand',
        link: '/tu-van/thuong-hieu-ca-nhan-2'
    },
    {
        id: '5',
        title: 'Trắc nghiệm MBTI để làm gì?',
        category: 'TRẮC NGHIỆM MBTI',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'quiz',
        link: '/tu-van/trac-nghiem-mbti-2'
    },
    {
        id: '6',
        title: 'Một số mẫu CV đánh cho sinh viên CNTT - PTIT',
        category: 'MẪU CV ĐẸP',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'cv',
        link: '/tu-van/mau-cv-dep-2'
    },
    {
        id: '7',
        title: 'Bạn là ai khi xung quanh toàn người giỏi?',
        category: 'THƯƠNG HIỆU CÁ NHÂN',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'brand',
        link: '/tu-van/thuong-hieu-ca-nhan-3'
    },
    {
        id: '8',
        title: 'Trắc nghiệm MBTI để làm gì?',
        category: 'TRẮC NGHIỆM MBTI',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'quiz',
        link: '/tu-van/trac-nghiem-mbti-3'
    },
    {
        id: '9',
        title: 'Một số mẫu CV đánh cho sinh viên CNTT - PTIT',
        category: 'MẪU CV ĐẸP',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'cv',
        link: '/tu-van/mau-cv-dep-3'
    },
    {
        id: '10',
        title: 'Bạn là ai khi xung quanh toàn người giỏi?',
        category: 'THƯƠNG HIỆU CÁ NHÂN',
        image: '/images/home/Thuonghieucanhan.png',
        date: '24/07/2023',
        type: 'brand',
        link: '/tu-van/thuong-hieu-ca-nhan-4'
    }
];

const Tuvanhuongnghiep = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Filter articles based on search and category
    const filteredArticles = careerArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === '' || article.type === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <Container>
            {/* Search and Filter Section */}
            <div className="bg-[url('/images/home/1.png')] bg-cover bg-center">
                <HeaderSection>
                    <SearchFilterSection>
                        <SearchContainer>
                            <CategorySelect
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">Ngành nghề</option>
                                <option value="brand">Thương hiệu cá nhân</option>
                                <option value="quiz">Trắc nghiệm MBTI</option>
                                <option value="cv">Mẫu CV đẹp</option>
                            </CategorySelect>
                            <SearchInput
                                type="text"
                                placeholder="Nhập từ khóa tìm kiếm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />

                            <SearchButton>
                                Tìm kiếm
                            </SearchButton>
                        </SearchContainer>
                    </SearchFilterSection>
                </HeaderSection>
            </div>
            {/* Page Header with Title and View All Button */}
            <PageHeader>
                <HeaderLeft>
                    <PageTitle>Tư Vấn Hướng Nghiệp</PageTitle>
                </HeaderLeft>
                <HeaderRight>
                    Hơn {careerArticles.length} bài viết
                </HeaderRight>
            </PageHeader>



            {/* Articles Grid */}
            <ArticlesGrid>
                {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} type={article.type}>
                        <ArticleImageContainer type={article.type}>
                            <ArticleImage
                                src={article.image}
                                alt={article.title}
                                onError={(e) => {
                                    // Set fallback image based on type
                                    const fallbackImages = {
                                        brand: '/images/career/default-brand.png',
                                        quiz: '/images/career/default-quiz.png',
                                        cv: '/images/career/default-cv.png'
                                    };
                                    e.currentTarget.src = fallbackImages[article.type] || '/images/career/default.png';
                                }}
                            />
                            <CategoryBadge type={article.type}>
                                {article.category}
                            </CategoryBadge>
                            <NotificationIcon>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#FF6B35" />
                                </svg>
                            </NotificationIcon>
                        </ArticleImageContainer>

                        <ArticleContent>
                            <ArticleDate>
                                <DateIcon>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z" fill="#666" />
                                    </svg>
                                </DateIcon>
                                {article.date}
                            </ArticleDate>

                            <ArticleTitle>{article.title}</ArticleTitle>

                            <ReadMoreButton
                                href={article.link}
                                type={article.type}
                            >
                                Xem chi tiết
                            </ReadMoreButton>
                        </ArticleContent>
                    </ArticleCard>
                ))}
            </ArticlesGrid>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    margin: 0 auto;
    background-color: #f8f9fa;
    min-height: 100vh;
    padding-bottom: 40px;
    @media (max-width: 992px) {
        padding: 16px;
    }

    @media (max-width: 768px) {
        padding: 12px;
    }
`;

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        align-items: flex-start;
        margin-bottom: 16px;
    }
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div`
    font-size: 18px;
    color: #007AFF;
    `;

const PageTitle = styled.h1`
    font-size: 28px;
    font-weight: 700;
    color: #051A53;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;
const HeaderSection = styled.div`
    margin-bottom: 24px;
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 0 20px 0;

    @media (max-width: 768px) {
        padding: 16px;
        margin-bottom: 16px;
    }
`;

const SearchFilterSection = styled.div``;

const SearchContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr auto;
    gap: 12px;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 8px;
    }
`;

const CategorySelect = styled.select`
    padding: 10px 12px;
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
        padding: 12px;
        font-size: 15px;
    }
`;

const SearchInput = styled.input`
    padding: 10px 12px;
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

    &:hover {
        background: #A42321;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 12px 20px;
        font-size: 15px;
    }
`;

const ArticlesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1240px;
    margin: 0 auto;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

const ArticleCard = styled.div<{ type: string }>`
    
`;

const ArticleImageContainer = styled.div<{ type: string }>`
    position: relative;
    width: 100%;
    height: 200px;
    background: ${props => {
        switch (props.type) {
            case 'brand': return 'linear-gradient(135deg, #FF6B35, #F7931E)';
            case 'quiz': return 'linear-gradient(135deg, #FF4757, #FF6B7A)';
            case 'cv': return 'linear-gradient(135deg, #C0392B, #E74C3C)';
            default: return 'linear-gradient(135deg, #3498DB, #5DADE2)';
        }
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    @media (max-width: 768px) {
        height: 180px;
    }
`;

const ArticleImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CategoryBadge = styled.div<{ type: string }>`
    position: absolute;
    top: 16px;
    left: 16px;
    background: ${props => {
        switch (props.type) {
            case 'brand': return '#FF6B35';
            case 'quiz': return '#FF4757';
            case 'cv': return '#C0392B';
            default: return '#3498DB';
        }
    }};
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
        top: 12px;
        left: 12px;
        font-size: 10px;
        padding: 4px 8px;
    }
`;

const NotificationIcon = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        top: 12px;
        right: 12px;
        padding: 6px;
    }
`;

const ArticleContent = styled.div`
    padding: 20px 20px 20px 0 ;

    @media (max-width: 768px) {
        padding: 16px;
    }
`;

const ArticleDate = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    color: #666;
    font-size: 12px;
    margin-bottom: 12px;

    @media (max-width: 768px) {
        font-size: 11px;
        margin-bottom: 8px;
    }
`;

const DateIcon = styled.div`
    display: flex;
    align-items: center;
`;

const ArticleTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 16px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 768px) {
        font-size: 15px;
        margin-bottom: 12px;
    }
`;

const ReadMoreButton = styled(Link) <{ type: string }>`
    display: inline-block;
    color: #BC2626;
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    padding: 8px 16px;
    border: 1px solid #BC2626;
    border-radius: 6px;
    transition: all 0.2s ease;

    &:hover {
        background: #BC2626;
        color: white;
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 6px 12px;
    }
`;

export default Tuvanhuongnghiep;