import React from "react";
import styled from "styled-components";
import Link from "next/link";

const newsData = [
    {
        img: "/images/home/Thuonghieucanhan.png",
        date: "24/07/2023",
        title: "Bạn là ai khi xung quanh toàn người giỏi?",
        link: "#",
    },
    {
        img: "/images/home/tracnghiemmbti.png",
        date: "24/07/2023",
        title: "Trắc nghiệm MBTI để làm gì ?",
        link: "#",
    },
    {
        img: "/images/home/maucvdep.png",
        date: "24/07/2023",
        title: "Một số mẫu CV dành cho sinh viên CNTT - PTIT",
        link: "#",
    },
];

const partners = [
    { img: "/images/home/riptdo.png" },
    { img: "/images/home/riptxanh.png" },
    { img: "/images/home/riptdo.png" },
    { img: "/images/home/riptxanh.png" },
    { img: "/images/home/riptdo.png" },
    { img: "/images/home/riptxanh.png" },
];

const Tintucvieclam = () => (
    <Wrapper>
        <Container>
            <SectionHeader>
                <div>
                    <h2>Tin Tức Việc Làm</h2>
                    <p>Điểm danh các tin tức đáng chú ý</p>
                </div>
                <NavButtons>
                    <button className="nav-btn prev">
                        <span>&#8592;</span>
                    </button>
                    <button className="nav-btn next">
                        <span>&#8594;</span>
                    </button>
                </NavButtons>
            </SectionHeader>

            <NewsList>
                {newsData.map((item, idx) => (
                    <NewsCard key={idx}>
                        <div className="image-container">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="content">
                            <div>
                                <div className="date-row">
                                    <img src="/images/home/calendar.png" alt="calendar" />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="news-title">{item.title}</h3>
                            </div>
                            <Link href={item.link} className="detail-btn">
                                Xem chi tiết
                            </Link>
                        </div>
                    </NewsCard>
                ))}
            </NewsList>

            <SectionHeader style={{ marginTop: '40px' }}>
                <div>
                    <h2>Đối Tác & Khách Hàng</h2>
                    <p>Được tin tưởng bởi rất nhiều doanh nghiệp lớn nhỏ</p>
                </div>
                <NavButtons>
                    <button className="nav-btn prev">
                        <span>&#8592;</span>
                    </button>
                    <button className="nav-btn next">
                        <span>&#8594;</span>
                    </button>
                </NavButtons>
            </SectionHeader>

            <PartnersGrid>
                {partners.map((p, idx) => (
                    <PartnerCard key={idx}>
                        <img src={p.img} alt="partner" />
                    </PartnerCard>
                ))}
            </PartnersGrid>
        </Container>
    </Wrapper>
);

const Wrapper = styled.div`
  background: #fafbfc;
  padding: 60px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;

  h2 {
    color: #051a53;
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  p {
    color: #535355;
    font-size: 16px;
    margin: 0;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 8px;

  .nav-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: #f3f4f7;
    color: #051a53;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #e5e7eb;
    }
  }
`;

const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  width: 384px;
height: 448px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  .image-container {
    width: 100%;
    height: 265.69px;
    overflow: hidden;
    border: 1px solid #EEEEEE;
    border-radius: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .date-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  }
  
  .news-title {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 16px 0;
    line-height: 1.4;
    color: #051a53;
    flex-grow: 1;
  }
  
  .detail-btn {
    display: inline-block;
    border: 1.5px solid #c02626;
    color: #c02626;
    background: transparent;
    text-decoration: none;
    border-radius: 6px;
    padding: 6px 16px;
    font-size: 14px;
    font-weight: 500;
    width: fit-content;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      background: #c02626;
      color: white;
    }
  }
`;

const CalendarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input[type="checkbox"] {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #c02626;
    border-radius: 2px;
    margin: 0;
    position: relative;
    
    &:checked::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      background: #c02626;
      border-radius: 1px;
    }
  }
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PartnerCard = styled.div`
    width: 183.33px;
    height: 100px;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  
  img {
    max-width: 100%;
    max-height: 60px;
    object-fit: contain;
  }
`;

export default Tintucvieclam;