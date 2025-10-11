// ...existing code...
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Banner1: React.FC = () => {
    return (
        <Wrapper>
            <Inner>
                <Left>
                    <Kicker>Tuyển dụng</Kicker>
                    <Title>
                        <span className="normal">thế hệ trẻ</span> đầy tài năng
                        <br />
                        dễ dàng hơn bao giờ hết
                    </Title>

                    <Desc>
                        Tiếp cận nhanh chóng nguồn nhân lực trẻ, năng động và sẵn sàng bứt phá.
                        Giải pháp thông minh giúp doanh nghiệp tìm đúng ứng viên phù hợp chỉ
                        trong vài bước.
                    </Desc>

                    <Actions>
                        <Primary href="/dashboard/post-job">Đăng tuyển ngay</Primary>
                    </Actions>
                </Left>


            </Inner>
        </Wrapper>
    );
};

export default Banner1;

// Styled
const Wrapper = styled.section`
  width: 100%;
  height: 600px;
  background: linear-gradient(90deg, #fff6f7 0%, #fff 30%);
  background-repeat: no-repeat;
  background-image: url('/images/home/Banner1background.png');
  background-size: 100% 100%;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 6px 30px rgba(2, 6, 23, 0.06);
  overflow: hidden;
  position: relative;
`;

const Inner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;

  @media (max-width: 992px) {
    padding: 10px;
    gap: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 0;
  padding-right: 16px;
`;

const Kicker = styled.div`
  color: #bf3b3b;
  font-weight: 700;
  margin-bottom: 8px;
  font-size: 18px;
`;

const Title = styled.h2`
  font-size: 34px;
  line-height: 1.05;
  color: #051a53;
  margin: 0 0 14px;
  font-weight: 800;

  .normal {
    display: inline-block;
    background: #fff3f4;
    color: #bf3b3b;
    padding: 6px 10px;
    border-radius: 6px;
    margin-right: 8px;
    font-weight: 800;
  }

  @media (max-width: 992px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Desc = styled.p`
  color: #4b5563;
  margin: 0 0 18px;
  max-width: 620px;
  font-size: 15px;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin: 0 auto 18px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const Primary = styled(Link)`
  display: inline-block;
  background: #0b76ff;
  color: #fff;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(11,118,255,0.18);

  &:hover {
    background: #095fd1;
  }
`;

// ...existing code...