// ...existing code...
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Banner from "../../HomePage/Banner";

type Reason = {
  id: string;
  title: string;
  desc?: string;
};

const reasons: Reason[] = [
  { id: "r1", title: "Gợi ý ứng viên phù hợp", desc: "Dựa trên công nghệ lọc và phân tích thông tin hiện đại." },
  { id: "r2", title: "Quản lý ứng viên dễ dàng", desc: "Theo dõi toàn bộ quá trình tuyển chọn trên một nền tảng." },
  { id: "r3", title: "Lọc hồ sơ chính xác", desc: "Tìm đúng người trong hàng ngàn hồ sơ chỉ với vài cú nhấp chuột." },

];

const Banner2: React.FC = () => {
  return (
    <Wrapper>
      <Inner>

        <Left>
          <img src="/images/about/3.png" />
        </Left>

        <Right>
          <Heading>
            Công Cụ Tuyển Dụng Thông Minh
          </Heading>

          <List>
            {reasons.map((r) => (
              <ListItem key={r.id}>
                <Content>
                  <ItemTitle>{r.title}</ItemTitle>
                  {r.desc && <ItemDesc>{r.desc}</ItemDesc>}
                </Content>
              </ListItem>
            ))}
          </List>

          <CtaRow>
            <Cta href="/employer/post-job">ĐĂNG TUYỂN NGAY</Cta>
          </CtaRow>
        </Right>
      </Inner>
    </Wrapper>
  );
};

export default Banner2;

/* Styled */
const Wrapper = styled.section`
  width: 100%;
  height:526px;
  background: #fff;
  padding: 36px 0;
  box-sizing: border-box;
  
  @media (max-width: 995px) {
    height: auto;
    padding: 40px 0 20px 0;
    background-image: none;
    background-color: #fff6f7;
`;

const Inner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  gap: 114px;
  align-items: center;
  padding: 12px;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 18px;
  }
`;

/* Left uses background image so you can drop the PNG/SVG into public/images/home/Doanhnghiep-bg.png */
const Left = styled.div`
  flex: 1;
  min-width: 0;
  border-radius: 12px;
  min-height: 420px;

 

  @media (max-width: 1200px) {
    background-position: left center;
    background-size: 70%;
  }

  @media (max-width: 992px) {
    background-position: center top;
    background-size: 80%;
    min-height: 320px;
  }
`;

const Right = styled.div`
  flex: 1;
  min-width: 0;
  padding: 12px 24px;
`;

const Heading = styled.h2`
  color: #0b2b61;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 22px;
  line-height: 1.5;

  .accent {
    color: #bf3b3b;
  }

  @media (max-width: 480px) {
    text-align: center;
    font-size: 22px;
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
  display: flex;
  gap: 14px;
  align-items: center;
  background: linear-gradient(180deg, #FFEDED, #FFFAFA);
  padding: 14px 18px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.04);
  height: 88px;
`;



const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  font-weight: 700;
  color: #051A53;
  font-size: 18px;
`;

const ItemDesc = styled.div`
  color: #535355;
  font-size: 14px;
  margin-top: 6px;
`;

const CtaRow = styled.div`
  margin-top: 18px;
`;

const Cta = styled(Link)`
  display: inline-block;
  background: #e6f3ff;
  color: #0b66ff;
  padding: 10px 16px;
  border-radius: 24px;
  font-weight: 600;
  text-decoration: none;
`;
// ...existing code...