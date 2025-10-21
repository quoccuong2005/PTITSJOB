import React from "react";
import styled from "styled-components";
import Link from "next/link";

type Step = {
  id: string;
  title: string;
  desc: string;
  number: number;
};

const steps: Step[] = [
  { id: "s1", number: 1, title: "Đăng tin tuyển dụng", desc: "Viết mô tả công việc rõ ràng, hấp dẫn." },
  { id: "s2", number: 2, title: "Tiếp cận ứng viên trẻ", desc: "Hệ thống tự động gợi ý hồ sơ phù hợp." },
  { id: "s3", number: 3, title: "Phỏng vấn & tuyển chọn", desc: "Lựa chọn nhân sự mới cho đội ngũ của bạn." },
];

const Quytrinhdongian: React.FC = () => {
  return (
    <div id="quytrinh">

      <Wrapper>
        <Inner>
          <Left>
            <Heading>
              <img src="/images/home/quytrinhdongian.png" alt="Quy Trình Đơn Giản" />
            </Heading>

            <List>
              {steps.map((s) => (
                <ListItem key={s.id}>
                  <Badge>{s.number}</Badge>
                  <ListContent>
                    <ItemTitle>{s.title}</ItemTitle>
                    <ItemDesc>{s.desc}</ItemDesc>
                  </ListContent>
                </ListItem>
              ))}
            </List>

            <CtaRow>
              <Cta href="/employer/post-job">ĐĂNG TUYỂN NGAY</Cta>
            </CtaRow>
          </Left>

          <Right>
            <CarouselMock>
              <Card>
                <CardNum>1</CardNum>
                <CardTitle>Đăng tin tuyển dụng</CardTitle>
                <div className="mt-[30px] items-center flex flex-col gap-[44px]">
                  <CardIllustration src="/images/home/dangtinimage.png" alt="step1" />
                  <img src="/images/home/Cham1.png" alt="step1" />
                </div>
              </Card>

              <Card>
                <CardNum>2</CardNum>
                <CardTitle>Tiếp cận ứng viên trẻ</CardTitle>
                <div className="mt-[30px] items-center flex flex-col gap-[44px]">
                  <CardIllustration src="/images/home/tiepcanimage.png" alt="step2" />
                  <img src="/images/home/Cham2.png" alt="step2" />
                </div>
              </Card>

              <Card>
                <CardNum>3</CardNum>
                <CardTitle>Phỏng vấn & tuyển chọn</CardTitle>
                <div className="mt-[30px] items-center flex flex-col gap-[44px]">
                  <CardIllustration src="/images/home/phongvanimage.png" alt="step3" />
                  <img src="/images/home/Cham3.png" alt="step3" />
                </div>
              </Card>
            </CarouselMock>
          </Right>
        </Inner>
      </Wrapper>
    </div>
  );
};

export default Quytrinhdongian;

/* Styled */
const Wrapper = styled.section`
  width: 100%;
  height:615px;
  background: #ffffff;
  padding: 70px 0 0 0;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    height: auto;
    padding: 40px 0 20px 0;

  }
  @media (max-width: 768px) {
    height: auto;
    padding: 40px 0 20px 0;
  }
`;

const Inner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  gap: 32px;
  align-items: flex-start;
  padding: 12px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 0;
  @media (max-width: 800px) {
    margin: 0 auto;
}
`;

const Right = styled.div`
  width: 558px;
  flex-shrink: 0;
  margin-top: 15px;
  @media (max-width: 1200px) {
    width: 460px;
  }

  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Heading = styled.h2`
  color: #0b2b61;
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 22px;
  line-height: 1.05;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  width:558px;

  @media (max-width: 1200px) {
    width: 460px;
  }
`;

const ListItem = styled.li`
  display: flex;
  gap: 14px;
  align-items: center;
  background: #fff1f2;
  padding: 16px 18px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(2, 6, 23, 0.04);
`;

const Badge = styled.div`
  min-width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ffd6d6;
  color: #bf3b3b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const ListContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  font-weight: 700;
  color: #082047;
`;

const ItemDesc = styled.div`
  color: #6b7280;
  font-size: 14px;
  margin-top: 6px;
`;

/* CTA */
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

/* Right mock carousel/cards */
const CarouselMock = styled.div`
  display: flex;
  gap: 18px;
  justify-content: flex-end;

  @media (max-width: 992px) {
    justify-content: center;
    gap: 12px;
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 574px;
  min-height: 364px;
  background: #fff;
  border-radius: 18px;
  border: 1px solid #FFF2E5;
  padding: 18px;
  box-shadow: 0 12px 30px rgba(2, 6, 23, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 364px;

  &:nth-child(2) {
    min-height: 364px;
    transform: translateY(-18px);
    box-shadow: 0 18px 36px rgba(2, 6, 23, 0.12);
  }

  @media (max-width: 992px) {
    width: 240px;
    min-height: 320px;

    /* disable elevation on small screens */
    &:nth-child(2) {
      transform: translateY(0);
      min-height: 360px;
      box-shadow: 0 12px 24px rgba(2,6,23,0.06);
    }
  }
`;

const CardNum = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #FFF2E1;
  color: #FFAF0B;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 12px;
  
`;

const CardTitle = styled.div`
  font-weight: 700;
  color: #0b2b61;
  font-size: 14px;
  margin-bottom: 12px;
`;

const CardIllustration = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  margin-top: auto;
  opacity: 0.98;
`;