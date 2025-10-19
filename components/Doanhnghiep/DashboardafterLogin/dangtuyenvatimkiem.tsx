import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 160px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    align-items: center;
    text-align: center;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Icon = styled.span`
  font-size: 28px;
  margin-right: 12px;
  color: #d32f2f;
  display: flex;
  align-items: center;

  svg {
    width: 28px;
    height: 28px;
  }
`;

const CardTitle = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #1a2b6d;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardButton = styled.a`
  display: inline-block;
  background: #e3f0ff;
  color: #0070f3;
  font-weight: 700;
  border-radius: 24px;
  padding: 10px 32px;
  font-size: 15px;
  text-decoration: none;
  margin-top: auto;
  transition: background 0.2s;
  align-self: center;

  &:hover {
    background: #cbe6ff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 24px;
    align-self: center;
  }
`;

const DangTuyenVaTimKiem: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Icon>
            {/* Document icon SVG */}
            <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
              <rect x="5" y="4" width="18" height="20" rx="3" stroke="#d32f2f" strokeWidth="2" />
              <rect x="9" y="8" width="10" height="2" rx="1" fill="#d32f2f" />
              <rect x="9" y="12" width="10" height="2" rx="1" fill="#d32f2f" />
              <rect x="9" y="16" width="6" height="2" rx="1" fill="#d32f2f" />
            </svg>
          </Icon>
          <CardTitle>Đăng Tin Tuyển Dụng</CardTitle>
        </CardHeader>
        <CardButton href="#">ĐĂNG TUYỂN NGAY</CardButton>
      </Card>

      <Card>
        <CardHeader>
          <Icon>
            {/* Search icon SVG */}
            <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
              <circle cx="13" cy="13" r="8" stroke="#d32f2f" strokeWidth="2" />
              <line x1="20" y1="20" x2="25" y2="25" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Icon>
          <CardTitle>Tìm Kiếm Ứng Viên</CardTitle>
        </CardHeader>
        <CardButton href="#">TÌM KIẾM NGAY</CardButton>
      </Card>
    </Container>
  );
};

export default DangTuyenVaTimKiem;
