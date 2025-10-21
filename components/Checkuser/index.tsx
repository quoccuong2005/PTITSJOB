
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

type Role = "candidate" | "recruiter" | null;

const Checkuser: React.FC = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only show if not set
    const saved = typeof window !== 'undefined' ? localStorage.getItem("userRole") : null;
    if (!saved) setShow(true);
    // Prevent scroll when modal open
    if (show) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [show]);

  const choose = (r: Role) => {
    if (!r) return;
    localStorage.setItem("userRole", r);
    setShow(false);
    if (r === "candidate") router.push("/");
    else if (r === "recruiter") router.push("/Doanhnghiep/Dashboard/dashboard");
  };

  if (!show) return null;

  return (
    <Backdrop role="dialog" aria-modal="true" aria-label="Chọn nhóm người dùng">
      <Card>
        <Header>
          <Greeting>Xin chào bạn <Emoji>👋</Emoji></Greeting>
          <Description>
            Hãy dành ít thời gian để xác nhận thông tin dưới đây,<br /> để chúng tôi mang đến trải nghiệm phù hợp nhất cho bạn.
            <br />
            Để sử dụng PTIT Jobs hiệu quả và đúng nhu cầu, vui lòng chọn nhóm phù hợp với bạn:
          </Description>
        </Header>

        <Options>
          <OptionCard onClick={() => choose("candidate")}>
            <Portrait src="/images/about/imageungvien.png" alt="Ứng viên" />
            <OptionLabel>Tôi là Ứng viên tìm việc</OptionLabel>
          </OptionCard>

          <OptionCard onClick={() => choose("recruiter")}>
            <Portrait src="/images/about/imagetuyendung.png" alt="Nhà tuyển dụng" />
            <OptionLabel $blue>Tôi là Nhà tuyển dụng</OptionLabel>
          </OptionCard>
        </Options>
      </Card>
    </Backdrop>
  );
};

export default Checkuser;

/* Styled */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
  padding: 24px;
  box-sizing: border-box;
`;

const Card = styled.div`
  width: 880px;
  max-width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 36px 40px;
  box-shadow: 0 20px 50px rgba(2,6,23,0.12);
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #f3f4f6;
  cursor: pointer;
  font-size: 16px;
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Greeting = styled.h3`
  margin: 0 0 8px 0;
  color: #bf3b3b;
  font-size: 22px;
  font-weight: 800;
`;

const Emoji = styled.span`
  margin-left: 8px;
`;

const Description = styled.p`
  margin: 0;
  color: black;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
`;

const Options = styled.div`
  display: flex;
  gap: 36px;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 18px;
  }
`;

const OptionCard = styled.button<{ $active?: boolean }>`
  flex: 0 0 320px;
  
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  transition: transform .12s ease, box-shadow .12s ease;
 

  &:hover { transform: translateY(-4px); }

  @media (max-width: 720px) {
    width: 100%;
    padding: 16px;
  }
`;

const Portrait = styled.img`
  width: 213px;
  height: 269px;
  object-fit: cover;
  
`;

const OptionLabel = styled.div<{ $blue?: boolean }>`
  display: inline-block;
  padding: 8px 18px;
  border-radius: 999px;
  font-weight: 700;
  color: ${(p) => (p.$blue ? "#0b66ff" : "#bf3b3b")};
  background: ${(p) => (p.$blue ? "rgba(11,102,255,0.06)" : "rgba(191,59,59,0.06)")};
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const ConfirmBtn = styled.button`
  background: #bf3b3b;
  color: white;
  border: none;
  padding: 10px 28px;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  opacity: 1;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;