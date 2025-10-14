// ...existing code...
import React from "react";
import styled from "styled-components";

type Stat = {
    id: string;
    value: string;
    title: string;
    hint?: string;
    accent?: boolean;
};

const fakeStats: Stat[] = [
    { id: "s1", value: "64", title: "Hồ sơ ứng viên mới tốt nghiệp", hint: "Tăng 12% so với tháng trước", accent: true },
    { id: "s2", value: "240", title: "Tin tuyển dụng mỗi tháng", hint: "Trung bình", accent: false },
    { id: "s3", value: "8", title: "Doanh nghiệp đang sử dụng", hint: "Hoạt động", accent: false },
    { id: "s4", value: "99%", title: "Ứng viên phản hồi trong 48h", hint: "Phản hồi nhanh", accent: true },
];

const StatisticSection: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                {fakeStats.map((s) => (
                    <Card key={s.id} className={s.accent ? "accent" : ""}>
                        <Value>{s.value}</Value>
                        <Title>{s.title}</Title>
                        {s.hint && <Hint>{s.hint}</Hint>}
                    </Card>
                ))}
            </Container>
        </Wrapper>
    );
};

export default StatisticSection;
// ...existing code...

/* Styled */
const Wrapper = styled.section`
  width: 100%;
  background: linear-gradient(90deg, rgba(191,59,59,0.95), rgba(191,59,59,0.85));
  padding: 24px 0;
  box-sizing: border-box;
  background-image: url('/images/home/1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  padding: 6px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.95);
  border-radius: 8px;
  padding: 18px;
  box-shadow: 0 6px 18px rgba(2,6,23,0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;

  &.accent {
    background: rgba(255, 255, 255, 0.98);
  }
`;

const Value = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: #bf3b3b;
`;

const Title = styled.div`
  font-size: 14px;
  color: #082047;
  font-weight: 600;
`;

const Hint = styled.div`
  font-size: 12px;
  color: #6b7280;
`;
// ...existing code...