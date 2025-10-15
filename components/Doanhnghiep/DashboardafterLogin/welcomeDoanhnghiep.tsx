import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1a2b6d;
  margin-bottom: 24px;
  span {
    color: #d32f2f;
    font-weight: 700;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const StatCard = styled.div<{ bg?: string }>`
  background: ${({ bg }) => bg || "#f5f5f5"};
  border-radius: 16px;
  padding: 24px 18px 18px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 160px;
  width: 296px;
  height: 200px;
`;

const StatInfo = styled.div`
  flex: 1;
`;

const StatNumber = styled.div<{ color?: string }>`
  font-size: 40px;
  font-weight: 700;
  color: ${({ color }) => color || "#d32f2f"};
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 18px;
  color: #1a2b6d;
  font-weight: 500;
  margin-bottom: 16px;
`;

const StatButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #e3f0ff 0%, #cbe6ff 100%);
  color: #0070f3;
  font-weight: 700;
  border-radius: 24px;
  padding: 8px 24px;
  font-size: 15px;
  text-decoration: none;
  margin-top: 8px;
  transition: background 0.2s;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #cbe6ff 0%, #e3f0ff 100%);
  }
`;

const StatImage = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 16px;
  object-fit: contain;
`;

const stats = [
    {
        number: "10",
        label: "CV của ứng viên chưa xem",
        button: "Xem CV ngay",
        buttonLink: "#",
        bg: "linear-gradient(135deg, #ffeaea 0%, #ffeaea 100%)",
        color: "#d32f2f",
        img: "/images/about/Card1.png",
    },
    {
        number: "54",
        label: "CV của ứng viên đang xét duyệt",
        button: "Xem CV ngay",
        buttonLink: "#",
        bg: "linear-gradient(135deg, #f3eaff 0%, #f3eaff 100%)",
        color: "#d32f2f",
        img: "/images/about/Card2.png",
    },
    {
        number: "6",
        label: "CV đã tuyển dụng thành công",
        button: "Xem CV ngay",
        buttonLink: "#",
        bg: "linear-gradient(135deg, #eafff3 0%, #eafff3 100%)",
        color: "#1db46b",
        img: "/images/about/Card3.png",
    },
    {
        number: "06",
        label: "Tin tuyển dụng đã đăng",
        button: "Xem tin ngay",
        buttonLink: "#",
        bg: "linear-gradient(135deg, #eaf6ff 0%, #eaf6ff 100%)",
        color: "#0070f3",
        img: "/images/about/Card4.png",
    },
];

const WelcomeDoanhnghiep: React.FC = () => {
    return (
        <Container>
            <Title>
                Xin Chào, <span>Công Ty Cổ Phần Công Nghệ HNS</span>
            </Title>
            <StatsGrid>
                {stats.map((stat, idx) => (
                    <StatCard key={idx} bg={stat.bg}>
                        <StatInfo>
                            <StatNumber color={stat.color}>{stat.number}</StatNumber>
                            <StatLabel>{stat.label}</StatLabel>
                            <StatButton href={stat.buttonLink}>{stat.button}</StatButton>
                        </StatInfo>
                        <StatImage src={stat.img} alt="stat" />
                    </StatCard>
                ))}
            </StatsGrid>
        </Container>
    );
};

export default WelcomeDoanhnghiep;
// ...existing code...