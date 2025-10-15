import React, { useRef } from "react";
import styled from "styled-components";
// @ts-ignore
import Slider from "react-slick";

const Container = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1a2b6d;
  margin: 0;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ViewAll = styled.a`
  color: #0070f3;
  font-weight: 500;
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const ArrowButton = styled.button<{ disabled?: boolean }>`
  background: #f3f6fb;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #1a2b6d;
  font-size: 18px;
  transition: background 0.2s;
  &:hover {
    background: #e4eaf3;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const NotificationGrid = styled.div`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
  }
`;

const NotificationCard = styled.div`
  background: #fff;
  border-radius: 0;
  border: none;
  padding: 0 16px 0 0;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #f3f6fb;

  &:nth-child(2n) {
    border-right: none;
  }

  &:nth-child(n + 3) {
    margin-top: 24px;
    border-top: 1px dashed #f3f6fb;
    padding-top: 16px;
  }
`;

const NotificationTitle = styled.a`
  font-size: 15px;
  font-weight: 700;
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NotificationText = styled.span`
  color: #1a2b6d;
  font-weight: 700;
  font-size: 15px;
`;

const NotificationDate = styled.div`
  color: #7a7a7a;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
`;

const notifications = [
  {
    title: "1 ứng viên",
    text: "đã ứng tuyển vào vị trí Project Manager",
    date: "24/07/2023",
    link: "#",
  },
  {
    title: "1 ứng viên",
    text: "đã ứng tuyển vào vị trí Project Manager",
    date: "24/07/2023",
    link: "#",
  },
  {
    title: "1 ứng viên",
    text: "đã ứng tuyển vào vị trí Project Manager",
    date: "24/07/2023",
    link: "#",
  },
  {
    title: "1 ứng viên",
    text: "đã ứng tuyển vào vị trí Project Manager",
    date: "24/07/2023",
    link: "#",
  },
  {
    title: "1 ứng viên",
    text: "đã ứng tuyển vào vị trí Project Manager",
    date: "24/07/2023",
    link: "#",
  },
  {
    title: "1 ứng viên",
    text: "đã ứng tuyển vào vị trí Project Manager",
    date: "24/07/2023",
    link: "#",
  },
  {
    title: "1 ứng viên",
    text: "đã ứng tuyển vào vị trí Project Manager",
    date: "24/07/2023",
    link: "#",
  },
  {
    title: "1 ứng viên",
    text: "đã ứng tuyển vào vị trí Project Manager",
    date: "24/07/2023",
    link: "#",
  },
];

const ThongBaoQuanTrong: React.FC = () => {
  const maxPerPage = 6; // Hiển thị 4 item (2 hàng × 2 cột)
  const useSlider = notifications.length > maxPerPage;
  const sliderRef = useRef<any>(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Chia notifications thành nhóm 4
  const notificationGroups = [];
  for (let i = 0; i < notifications.length; i += maxPerPage) {
    notificationGroups.push(notifications.slice(i, i + maxPerPage));
  }

  return (
    <Container>
      <Header>
        <Title>Thông Báo Quan Trọng</Title>
        <HeaderRight>
          <ViewAll href="#">Xem tất cả</ViewAll>
          <ArrowButton onClick={() => sliderRef.current?.slickPrev()}>
            <span>&larr;</span>
          </ArrowButton>
          <ArrowButton onClick={() => sliderRef.current?.slickNext()}>
            <span>&rarr;</span>
          </ArrowButton>
        </HeaderRight>
      </Header>

      {useSlider ? (
        <Slider ref={sliderRef} {...sliderSettings}>
          {notificationGroups.map((group, idx) => (
            <NotificationGrid key={idx}>
              {group.map((item, i) => (
                <NotificationCard key={i}>
                  <NotificationTitle href={item.link}>
                    <span style={{ color: "#0070f3", fontWeight: 700 }}>
                      {item.title}
                    </span>
                    <NotificationText> {item.text}</NotificationText>
                  </NotificationTitle>
                  <NotificationDate>
                    <span role="img" aria-label="calendar">
                      📅
                    </span>
                    {item.date}
                  </NotificationDate>
                </NotificationCard>
              ))}
            </NotificationGrid>
          ))}
        </Slider>
      ) : (
        <NotificationGrid>
          {notifications.map((item, idx) => (
            <NotificationCard key={idx}>
              <NotificationTitle href={item.link}>
                <span style={{ color: "#0070f3", fontWeight: 700 }}>
                  {item.title}
                </span>
                <NotificationText> {item.text}</NotificationText>
              </NotificationTitle>
              <NotificationDate>
                <span role="img" aria-label="calendar">
                  📅
                </span>
                {item.date}
              </NotificationDate>
            </NotificationCard>
          ))}
        </NotificationGrid>
      )}
    </Container>
  );
};

export default ThongBaoQuanTrong;
