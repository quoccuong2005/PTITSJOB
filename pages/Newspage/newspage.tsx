import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

// Mock data cho bài viết
const articleData = {
  title: "Bạn là ai khi xung quanh toàn người giỏi?",
  author: "Admin",
  date: "16/09/2025",
  views: 2535,
  content: [
    {
      type: 'paragraph',
      text: 'Ngày nay, thường hiếm có nhân sự mới khởi nghiệp không cảm và lo, đặc biệt đặc biệt là với giới trẻ mới chúng ta vào làm quen với nền nổi công. Nói đến tâm lý thự phấp phân biệt tuột với hàng trăm, hàng nghìn hay hàng tỷ người khác. Chỉ cần nhắc tới một đặc điểm, một tính vục, một ngành nghề hay một hoạt động nào đó là kỷ nhức mỗi cái tên "cơ thương hiệu" hiện ra. Tuy nhiên, không phải ai cũng biết cách xây dựng thương hiệu cá nhân đạt hiệu quả phù hượng đôi. Không để trọn chữ tìm, NGƯ sẽ giúp bạn giải đáp những thắc mắc và chia sẻ những thông tin có cùng bổ ích với thư ý nhé!'
    },
    {
      type: 'image',
      src: '/images/home/Thuonghieucanhan.png',
      alt: 'Thương hiệu cá nhân',
      caption: 'THƯƠNG HIỆU CÁ NHÂN'
    },
    {
      type: 'heading',
      level: 2,
      text: '1. Thương hiệu cá nhân là gì?'
    },
    {
      type: 'paragraph',
      text: 'Thương hiệu cá nhân, hay personal branding là những sản xuất, đặc điểm, và tính năng, đặc đào của một người tuyên ngôn khác nhau đến và cảm thấy nổi bật giữa đám đông, được biểu hiện qua các hành động, việc làm ở các khía cạnh như học tập, cuộc sống, các mối quan hệ trong công ty, hội học...'
    },
    {
      type: 'heading',
      level: 2,
      text: '2. Làm thế nào để xây dựng thương hiệu cá nhân cho sinh viên?'
    },
    {
      type: 'heading',
      level: 3,
      text: '2.1. Thấu hiểu bản thân'
    },
    {
      type: 'paragraph',
      text: 'Đầu tiên, bạn nên tìm cho mình một thương yến thật, khi thứ thật sâu về tự hỏi: Mình là ai? Mình thước điệu gì? Mình đang làm gì? để giúp bạn rõ thứ giúp mới điều và bản thân.'
    },
    {
      type: 'paragraph',
      text: 'Ngoài ra, hiệu nay, một số các phương pháp hiệu thuật các của hội ngành này ly MBTI hay The Big Personality giúp bạch phả bản thân rành rạnh phù hơn với công việc.'
    },
    {
      type: 'paragraph',
      text: 'Thệ đó, hãy mạnh dận tru chuyện về nói những người thích, người bạn hay cập trên biết về đảm nguồi, điểm yêu của bản thân. Bạn còn thấy ngạc nỉ đứng hị cùng là tính mới cẩu chuyện. Hãy nói điền khung để mỏi dí dàng cách tụy trả của đó khôn đừa tất chuyện minh!'
    },
    {
      type: 'heading',
      level: 3,
      text: '2.2. Đặt mục tiêu và xây dựng kỹ năth chờ hạn chèn khảo thực'
    },
    {
      type: 'paragraph',
      text: 'Chúng ta nên rõ rệt mục tiêu xây dựng thương hiệu cá nhân ngay khi còn là sinh viên. Biết rằng cây sẽ lớn tới đâu cho mới người trong quá trình tìm kiếm có hơi việc làm sau này.'
    },
    {
      type: 'paragraph',
      text: 'Đối có thể xây dựng thương hiệu cá nhân hiện quả, điều cầu tiên chúng ta cần làm chính là xác định mục tiêu rõ ràng, một lờ trinh dài hơn với phương pháp triển khai chị tiết. Khi đã có mục tiêu cho mình, hiệu theo hay khải chuỗi thành chướng mục tiêu nhìn hơn thông qua áp dựng quy tắc S.M.A.R.T.'
    },
    {
      type: 'paragraph',
      text: 'Specific: Những vấn để cụ thể, dễ hiểu.'
    },
    {
      type: 'paragraph',
      text: 'Measurable: Có thể đo lường được kết quả.'
    },
    {
      type: 'paragraph',
      text: 'Attainable: Có trinh khả thi cao.'
    },
    {
      type: 'paragraph',
      text: 'Realistic: Thực tế.'
    },
    {
      type: 'paragraph',
      text: 'Time bound: Thời hạn triển khai thật định.'
    }
  ],
  relatedPosts: [
    {
      id: 1,
      title: 'Trắc nghiệm MBTI để làm gì?',
      image: '/images/mbti-test.jpg',
      date: '24/07/2023'
    },
    {
      id: 2,
      title: 'Một số mẫu CV dành cho sinh viên CNTT - PTIT',
      image: '/images/cv-templates.jpg',
      date: '24/07/2023'
    }
  ],
  categories: [
    "UI/UX Design",
    "Thiết kế",
    "Công nghệ thị phường tiên"
  ]
};

const NewsPage = () => {
  return (
    <PageContainer>
      <Container>
        {/* Header và Breadcrumbs */}
        <Breadcrumbs>
          <HomeIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" fill="#666" />
            </svg>
          </HomeIcon>
          <Link href="/">Trang chủ</Link> &gt; <Link href="/tin-tuc">Tin tức</Link> &gt; <span>{articleData.title}</span>
        </Breadcrumbs>

        <PageContent>
          {/* Main Content */}
          <MainContent>
            <ArticleTitle>{articleData.title}</ArticleTitle>

            {/* Author and Date */}
            <ArticleMeta>
              <MetaItem>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" fill="#666" />
                </svg>
                <div className="inline-grid">
                  <span>Ngày đăng:</span>
                  <span>{articleData.date}</span>
                </div>
              </MetaItem>
              <MetaItem>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#666" />
                </svg>
                <div className="inline-grid">
                  <span>Người đăng:</span>
                  <span>{articleData.author}</span>
                </div>
              </MetaItem>
            </ArticleMeta>

            {/* Article Content */}
            <ArticleContent>
              {articleData.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return <p key={index}>{block.text}</p>;
                } else if (block.type === 'image') {
                  return (
                    <ArticleImageContainer key={index}>
                      <ArticleImage>
                        <img src={block.src} alt={block.alt} />
                      </ArticleImage>
                      {block.caption && <ImageCaption>{block.caption}</ImageCaption>}
                    </ArticleImageContainer>
                  );
                } else if (block.type === 'heading') {
                  switch (block.level) {
                    case 2:
                      return <SectionHeading key={index}>{block.text}</SectionHeading>;
                    case 3:
                      return <SubSectionHeading key={index}>{block.text}</SubSectionHeading>;
                    default:
                      return <h4 key={index}>{block.text}</h4>;
                  }
                }
                return null;
              })}
            </ArticleContent>
          </MainContent>

          {/* Sidebar */}
          <SidebarContainer>
            {/* Views Counter */}
            <SidebarBox>
              <SidebarTitle>Thông tin chung</SidebarTitle>
              <StatsContainer>
                <StatsItem>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" fill="#666" />
                  </svg>
                  <div className="inline-grid">
                    <span>Ngày đăng</span>
                    <span>{articleData.date}</span>
                  </div>
                </StatsItem>
                <StatsItem>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#666" />
                  </svg>
                  <div className="inline-grid">
                    <span>Người đăng</span>
                    <span>{articleData.author}</span>
                  </div>
                </StatsItem>
                <StatsItem>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#666" />
                  </svg>
                  <div className="inline-grid">
                    <span>Địa điểm</span>
                    <span>Hà Nội</span>
                  </div>
                </StatsItem>
                <StatsItem>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="#666" />
                  </svg>
                  <div className="inline-grid">
                    <span>Lượt xem</span>
                    <span>{articleData.views}</span>
                  </div>
                </StatsItem>
              </StatsContainer>
            </SidebarBox>
            {/* Share Links */}
            <SidebarBox>
              <SidebarTitle>Chia sẻ đường link này</SidebarTitle>
              <LinkShareInput>
                <input type="text" placeholder="https://jobsapti.vn/viec-lam/..." readOnly />
                <CopyButton>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="#666" />
                  </svg>
                </CopyButton>
              </LinkShareInput>
              <SocialIcons>
                <FacebookIcon href="#">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                  </svg>
                </FacebookIcon>
                <TwitterIcon href="#">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.23009 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z" />
                  </svg>
                </TwitterIcon>
                <LinkedInIcon href="#">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M6.94 5.00002C6.94 5.53043 6.7293 6.03914 6.35423 6.41421C5.97916 6.78929 5.47045 7.00002 4.94 7.00002C4.40955 7.00002 3.90084 6.78929 3.52577 6.41421C3.15069 6.03914 2.94 5.53043 2.94 5.00002C2.94 4.46961 3.15069 3.96091 3.52577 3.58583C3.90084 3.21076 4.40955 3.00002 4.94 3.00002C5.47045 3.00002 5.97916 3.21076 6.35423 3.58583C6.7293 3.96091 6.94 4.46961 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" />
                  </svg>
                </LinkedInIcon>
              </SocialIcons>
            </SidebarBox>

            {/* Danh mục liên quan */}
            <SidebarBox>
              <SidebarTitle>Danh mục từ khóa liên quan</SidebarTitle>
              <CategoryList>
                {articleData.categories.map((category, index) => (
                  <CategoryItem key={index}>
                    <Link href={`/category/${encodeURIComponent(category)}`}>{category}</Link>
                  </CategoryItem>
                ))}
              </CategoryList>
            </SidebarBox>

            {/* Bài viết liên quan */}
            <SidebarBox>
              <SidebarTitle>Bài Viết Liên Quan</SidebarTitle>
              <RelatedPostList>
                {articleData.relatedPosts.map(post => (
                  <RelatedPostItem key={post.id}>
                    <RelatedPostLink href={`/news/${post.id}`}>
                      <RelatedPostImage>
                        <img src={post.image} alt={post.title} />
                      </RelatedPostImage>
                      <RelatedPostInfo>
                        <RelatedPostTitle>{post.title}</RelatedPostTitle>
                        <RelatedPostDate>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" fill="#666" />
                          </svg>
                          <span>{post.date}</span>
                        </RelatedPostDate>
                      </RelatedPostInfo>
                    </RelatedPostLink>
                  </RelatedPostItem>
                ))}
              </RelatedPostList>
            </SidebarBox>
          </SidebarContainer>
        </PageContent>
      </Container>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 20px 16px;
`;

const Breadcrumbs = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;

  a {
    color: #0066cc;
    text-decoration: none;
    margin: 0 5px;
  }
`;

const HomeIcon = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const PageContent = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  flex: 1;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const SidebarContainer = styled.aside`
  width: 350px;
  flex-shrink: 0;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const ArticleTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0 0 16px;
`;

const ArticleMeta = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
  gap: 24%;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    flex-shrink: 0;
  }
`;

const ArticleContent = styled.div`
  p {
    margin-bottom: 16px;
    line-height: 1.6;
    color: #333;
    text-align: justify;
  }
`;

const SectionHeading = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 24px 0 16px;
`;

const SubSectionHeading = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 20px 0 14px;
`;

const ArticleImageContainer = styled.figure`
  margin: 24px 0;
  text-align: center;
`;

const ArticleImage = styled.div`
  margin-bottom: 10px;
  background-color: #f8f8f8;
  padding-bottom: 15px;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ImageCaption = styled.figcaption`
  font-size: 16px;
  color: #BC2826;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
`;

const SidebarBox = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const SidebarTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StatsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  
  svg {
    flex-shrink: 0;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

const LinkShareInput = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
  
  input {
    flex: 1;
    border: none;
    padding: 8px 12px;
    font-size: 14px;
    outline: none;
  }
`;

const CopyButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  border-left: 1px solid #ddd;
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #e5e5e5;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FacebookIcon = styled(SocialIcon)`
  background-color: #BC2826;
`;

const TwitterIcon = styled(SocialIcon)`
  background-color: #BC2826;
`;

const LinkedInIcon = styled(SocialIcon)`
  background-color: #BC2826;
`;

const CategoryList = styled.div`
`;

const CategoryItem = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      color: #BC2826;
    }
  }
`;

const RelatedPostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RelatedPostItem = styled.div`
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const RelatedPostLink = styled(Link)`
  display: flex;
  text-decoration: none;
  gap: 12px;
`;

const RelatedPostImage = styled.div`
  width: 90px;
  height: 70px;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RelatedPostInfo = styled.div`
  flex: 1;
`;

const RelatedPostTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin: 0 0 8px;
  line-height: 1.3;
`;

const RelatedPostDate = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #666;
`;

export default NewsPage;