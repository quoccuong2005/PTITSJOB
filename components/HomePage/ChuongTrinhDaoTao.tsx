import styled from "styled-components";
import CardCTDT from "./CardCTDT";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
// @ts-ignore
import Slider from "react-slick";
import { useRef } from "react";

const ChuongTrinhDaoTao = () => {
  const [common] = useCommonTranslation();
  const sliderRef = useRef<Slider | null>(null);
  const dataCTDT = [
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.AIoT"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/tri-tue-nhan-tao-van-vat-aiot/",
    //   linkText: common("CTDT.explore"),
    // },
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.ATTT"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/nganh-an-toan-thong-tin/",
    //   linkText: common("CTDT.explore"),
    // },
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.UDU"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/chuong-trinh-cong-nghe-thong-tin-dinh-huong-ung-dung/",
    //   linkText: common("CTDT.explore"),
    // },
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.Logistics"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/chuong-trinh-logistics-va-quan-tri-chuoi-cung-ung/",
    //   linkText: common("CTDT.explore"),
    // },
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.AI"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/chuong-trinh-tri-tue-nhan-tao/",
    //   linkText: common("CTDT.explore"),
    // },
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.CNTTV-J"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/chuong-trinh-cong-nghe-thong-tin-viet-nhat/",
    //   linkText: common("CTDT.explore"),
    // },
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.GAME"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/chuong-trinh-thiet-ke-va-phat-trien-game/",
    //   linkText: common("CTDT.explore"),
    // },
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.QHCC"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/chuong-trinh-quan-he-cong-chung-nganh-marketing/",
    //   linkText: common("CTDT.explore"),
    // },
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.KT-CLC"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/nganh-ke-toan-chat-luong-cao-chuan-quoc-te-acca/",
    //   linkText: common("CTDT.explore"),
    // },
    // {
    //   icon: "/images/icons/icon-ctdt.svg",
    //   title: common("CTDT.CNTC"),
    //   link: "https://daotao.ptit.edu.vn/chuong-trinh-dao-tao/nganh-cong-nghe-tai-chinh-fintech/",
    //   linkText: common("CTDT.explore"),
    // },
    {
      id: "1",
      icon: "https://cskh.vpbank.com.vn/api/ccp-api/api/media/public/2021/08/09/VPBank_Final-Logo_0202-08.png",
      name: "Tek Experts Professional Services Vietnam",
      field: "Công nghệ thông tin",
      jobsCount: 5,
      highlight: true
    },
    {
      id: "2",
      icon: "https://cskh.vpbank.com.vn/api/ccp-api/api/media/public/2021/08/09/VPBank_Final-Logo_0202-08.png",
      name: "Ngân Hàng TMCP Kỹ Thương Việt Nam (Techcombank)",
      field: "Dịch vụ khách hàng",
      jobsCount: 2
    },
    {
      id: "3",
      icon: "https://cskh.vpbank.com.vn/api/ccp-api/api/media/public/2021/08/09/VPBank_Final-Logo_0202-08.png",
      name: "Tập Đoàn Công Nghiệp – Viễn Thông Quân Đội",
      field: "IT Phần mềm",
      jobsCount: 2
    },
    {
      id: "4",
      icon: "https://cskh.vpbank.com.vn/api/ccp-api/api/media/public/2021/08/09/VPBank_Final-Logo_0202-08.png",
      name: "Công Ty TNHH Một Thành Viên Phong Việt",
      field: "IT Phần mềm",
      jobsCount: 2
    },
    {
      id: "5",
      icon: "https://cskh.vpbank.com.vn/api/ccp-api/api/media/public/2021/08/09/VPBank_Final-Logo_0202-08.png",
      name: "Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank)",
      field: "Dịch vụ khách hàng",
      jobsCount: 2
    },
    {
      id: "6",
      icon: "https://cskh.vpbank.com.vn/api/ccp-api/api/media/public/2021/08/09/VPBank_Final-Logo_0202-08.png",
      name: "Phuong Chi Software Company",
      field: "Công nghệ thông tin",
      jobsCount: 4
    },
    {
      id: "7",
      icon: "https://cskh.vpbank.com.vn/api/ccp-api/api/media/public/2021/08/09/VPBank_Final-Logo_0202-08.png",
      name: "Công Ty Cổ Phần Văn Hoá Và Giáo Dục Tân Việt",
      field: "Công nghệ thông tin",
      jobsCount: 2
    },
    {
      id: "8",
      icon: "https://cskh.vpbank.com.vn/api/ccp-api/api/media/public/2021/08/09/VPBank_Final-Logo_0202-08.png",
      name: "Ngân Hàng TMCP Quân Đội (MB Bank)",
      field: "Dịch vụ khách hàng",
      jobsCount: 2
    }
  ];


  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <CTDTWrapper>
      <div className="container mx-auto">
        <div className="header-section">
          <div className="text-content">
            <h2 className="title">{common("training.title")}</h2>
            <p className="subtitle">
              {common("training.subtitle")}
            </p>
          </div>

          <div className="navigation-arrows">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="arrow-btn prev-btn"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 5L7.5 10L12.5 15" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="arrow-btn next-btn"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="#051A53" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="companies-grid">
          {dataCTDT.map((company, index) => (
            <div key={company.id} className={`company-item ${index === 0 ? "highlight-column" : ""}`}>
              <CardCTDT
                id={company.id}
                icon={company.icon}
                name={company.name}
                field={company.field}
                jobsCount={company.jobsCount}
                highlight={company.highlight}
              />
            </div>
          ))}
        </div>
      </div>
    </CTDTWrapper>
  );
};

const CTDTWrapper = styled.div`
  padding: 40px 0;
  background-color: #FFFFFF;

  .header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.2;
    color: #051A53;
    margin: 0;
  }

  .subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #535355;
    margin: 0;
  }

  .companies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .company-item {
    height: 100%;
    min-height: 160px;
  }

  .highlight-column {
    grid-row: span 2;
    height: 100%;
  }

  @media (max-width: 1200px) {
    .companies-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .highlight-column {
      grid-column: span 1;
    }
  }

  @media (max-width: 768px) {
    .companies-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    
    .highlight-column {
      grid-row: span 1;
    }
    
    .header-section {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default ChuongTrinhDaoTao;
