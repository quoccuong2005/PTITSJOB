import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import RelatedJobs from "../../components/Vieclamlienquan"

const HuongDanVietCV: React.FC = () => {


    return (
        <Container>
            <MainContent>
                {/* Header */}
                <Header>
                    <Title>Hướng dẫn viết CV</Title>
                </Header>

                {/* Article Content */}
                <ArticleContent>
                    <ArticleSection>
                        <div className="font-semibold text-[#051A53]">
                            <ArticleParagraph>
                                Ngày nay, thương hiệu cá nhân là một khái niệm không còn xa lạ, đặc biệt đặc biệt là với giới trẻ nói
                                chung và đặc biệt sinh viên nói riêng. Mỗi dân gian là thời gian phân biệt biệt nơi vô hình hiện ra, bằng
                                nghìn hay hàng tỷ người khác. Chỉ cần nhắc tới một đặc điểm, một lĩnh vực, một ngành nghề hay một
                                hoạt động nào đó là sự khác biệt của họ rõ ràng trước gia đình hoặc kiêm định cá nhân được nhất cách
                                cách ý cạnh sử dụng thương hiệu có nhân của thiết đoạn ưu đại. Không để bạn che làn, NOC sẽ giúp
                                bạn giải đáp những thắc mắc và chia sẻ những thông tin về cũng bố tích và thư vị nhé!
                            </ArticleParagraph>
                        </div>
                    </ArticleSection>

                    <ArticleSection>
                        <SectionTitle>1. Thương hiệu cá nhân là gì?</SectionTitle>
                        <ArticleParagraph>
                            Thương hiệu cá nhân, hay personal branding là những tính cách, đặc điểm, cá tính riêng, độc đáo của một người
                            khiến người khác nhớ đến và cảm thấy rõ rệt sự khác biệt khi được biết hiền qua các hình động, việc làm ở các khu
                            cạnh nhứ học tập, cuộc sống, các mối quan hệ trong công ty, lớp học,...
                        </ArticleParagraph>
                    </ArticleSection>

                    <ArticleSection>
                        <SectionTitle>2. Làm thế nào để xây dựng thương hiệu cá nhân cho sinh viên?</SectionTitle>

                        <SubSection>
                            <SubSectionTitle>2.1. Thầu hiểu bản thân</SubSectionTitle>
                            <ArticleParagraph>
                                Đầu tiên, bạn cần tìm cho mình một khoảng yên tĩnh, hãi thở thật sâu và tự hỏi: Mình là ai? Mình thích điều gì? Mình
                                vững bạng gì?...để giúp bạn có thể hiểu và đánh giá bản thân.
                            </ArticleParagraph>
                            <ArticleParagraph>
                                Ngoài ra, hiện nay, một số các phương pháp như logical, các cầu hỏi trắc nghiệm tâm lý MBTI, hay The Big
                                Personalities giúp ta kiểm phẩy bản thân cũng phổ biến rộng rãi.
                            </ArticleParagraph>
                            <ArticleParagraph>
                                Thế với việc tìm hiểu những thắc mắc đó thì sẽ giúp bạn hay cấp tiền của bạn về điểm mạnh, điểm yếu
                                của ban thân. Bạn cảm thấy ngại gì? Đủng tự làng. Chẳn trả là lơi mời câu chuyện. Hãy mở đầu bằng tơi ơi sửng
                                cafe hay ta sera kể khóa tơi biết chuyện hơ ngay ra trước các cậu khạo.
                            </ArticleParagraph>
                        </SubSection>

                        <SubSection>
                            <SubSectionTitle>2.2. Đặt mục tiêu và xây dựng lộ trình dài hạn cho bản thân</SubSectionTitle>
                            <ArticleParagraph>
                                Cũng ta nên tự đặt mục tiêu xây dựng thương hiệu cá nhân ngay khi còn là sinh viên. Bội việc này sẽ hỗ trợ rôt cho
                                mỗi người trong quá trình tìm kiếm có hội việc làm sau này.
                            </ArticleParagraph>
                            <ArticleParagraph>
                                Để có thể xây dựng thương hiệu cá nhân hiệu quả, điều đầu tiên chúng ta cần làm chính là có được mọc tiêu rõ ràng,
                                một tầm nhìn đái hạn với tương lại của bản thân cũng như có mức tiêu cho mình, tiếp theo hãy tìên thất chúng
                                thành những mục tiêu nhỏ hơn thông qua sử dụng quy tắc S.M.A.R.T.
                            </ArticleParagraph>
                            <ArticleParagraph>
                                Specific: Những vần đề cụ thể, đủ hiểu
                            </ArticleParagraph>
                            <ArticleParagraph>
                                Measurable: Có thể đo lượng được kết quả
                            </ArticleParagraph>
                            <ArticleParagraph>
                                Attainable: Có tính khả thi cao
                            </ArticleParagraph>
                            <ArticleParagraph>
                                Realistic: Thực tế
                            </ArticleParagraph>
                            <ArticleParagraph>
                                Time bound: Thời hạn triển khai nhất định
                            </ArticleParagraph>
                        </SubSection>
                    </ArticleSection>
                </ArticleContent>
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
    padding: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        padding: 16px;
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

const ArticleContent = styled.div`
    background: white;
    border-radius: 8px;
    padding: 32px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    line-height: 1.6;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const ArticleSection = styled.section`
    margin-bottom: 32px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const SectionTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 16px 0;
    line-height: 1.4;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SubSection = styled.div`
    margin-bottom: 24px;
    margin-left: 16px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        margin-left: 8px;
    }
`;

const SubSectionTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #051A53;
    margin: 0 0 12px 0;
    line-height: 1.4;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

const ArticleParagraph = styled.p`
    font-size: 15px;
    color: #051A53;
    line-height: 1.7;
    margin: 0 0 16px 0;
    text-align: justify;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 1.6;
    }
`;

const SmartList = styled.ul`
    margin: 12px 0 0 20px;
    padding: 0;

    @media (max-width: 768px) {
        margin-left: 16px;
    }
`;

const SmartItem = styled.li`
    font-size: 15px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
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

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const AdBanners = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
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

export default HuongDanVietCV;