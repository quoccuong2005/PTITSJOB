// ...existing code...
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Banner3: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <Left>
          <Title>
            Tuyển Tập Hình Thức Việc Làm Của Chúng Tôi -{" "}
            <span className="accent">Jobs PTIT</span>
          </Title>

          <List>
            <ListItem>
              <img src="/images/icons/Exclude.png" /> Thực tập/ Cộng tác viên
            </ListItem>
            <ListItem>
              <img src="/images/icons/Exclude.png" /> Việc làm bán thời gian/ theo ca
            </ListItem>
            <ListItem>
              <img src="/images/icons/Exclude.png" /> Việc làm ngắn hạn theo dự án
            </ListItem>
            <ListItem>
              <img src="/images/icons/Exclude.png" /> Việc làm Fulltime (Fresher/ SV mới tốt nghiệp)
            </ListItem>
          </List>

          <Actions>
            <CTA href="/employer/post-job">ĐĂNG TUYỂN NGAY</CTA>
          </Actions>
        </Left>

        <Right>
          <Illustration
            src="/images/about/2.png"
            alt="Jobs illustration"
          />
        </Right>
      </Inner>
    </Wrapper>
  );
};

export default Banner3;

/* Styled */
const Wrapper = styled.section`
  width: 100%;
  padding: 28px 0;
  box-sizing: border-box;
  background: white;
`;

const Inner = styled.div`
  max-width: 1299px;
  margin: 0 auto;
  padding: 28px;
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 0;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #0b2b61;
  margin: 0 0 18px;
  font-weight: 800;

  .accent {
    color: #bf3b3b;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ListItem = styled.li`
  background: rgba(255, 192, 192, 0.12);
  padding: 16px 18px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  color: #082047;
  font-weight: 600;
  gap: 12px;
  box-shadow: none;
`;

const Check = styled.span`
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: 50%;
  background: #e8f3ff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #0b66ff;
  font-size: 14px;
  font-weight: 700;

  &::after {
    content: "✓";
  }
`;

const Actions = styled.div`
  margin-top: 12px;
`;

const CTA = styled(Link)`
  display: inline-block;
  background: #d9f0ff;
  color: #0b66ff;
  padding: 10px 18px;
  border-radius: 24px;
  font-weight: 600;
  text-decoration: none;
`;

const Illustration = styled.img`
  max-width: 100%;
  height: 360px;
  border-radius: 6px;

  @media (max-width: 992px) {
    
    margin-top: 12px;
  }
`;
