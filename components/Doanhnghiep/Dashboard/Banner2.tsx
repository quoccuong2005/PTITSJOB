// ...existing code...
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Banner1: React.FC = () => {
  return (<>
    <Wrapper>
      <Inner>

        <img src="/images/home/congcutuyendungthongminh.png" alt="Tuyển dụng" />

      </Inner>
    </Wrapper>
  </>
  );
};

export default Banner1;

// Styled
const Wrapper = styled.section`
  width: 100%;
  height: 510px;
  background: #FFF;
  background-repeat: no-repeat;
  background-image: url('/images/home/bgbanner2.png');
  background-size: 100% 100%;
  border-radius: 12px;
  box-shadow: 0 6px 30px rgba(2, 6, 23, 0.06);
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    height: auto;
    padding: 16px;
    background-image: none;
    background-color: #fff6f7;
`;

const Inner = styled.div`
  max-width: 1240px;
  margin: 28px auto;
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  flex-direction: row-reverse;
  @media (max-width: 992px) {
    padding: 10px;
    gap: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
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
  background: #DFEDFF;
  color: #007AFF;
  padding: 10px 18px;
  border-radius: 25px;
  font-weight: 700;
  text-decoration: none;

  
`;

// ...existing code...