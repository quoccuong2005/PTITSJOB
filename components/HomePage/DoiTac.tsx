import styled from "styled-components";
// @ts-ignore
import Slider from "react-slick";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const DoiTac = () => {
  const [common] = useCommonTranslation();
  const logos = [
    "/images/logo/abf51ba6a63c9a93bb6c88a984faeab9-3.png",
    "/images/logo/abf51ba6a63c9a93bb6c88a984faeab9.png",
    "/images/logo/Arm_Holdings-Logo.wine-1.png",
    "/images/logo/Ericsson-logo-1.png",
    "/images/logo/logo-fpt-inkythuatso-1-01-01-14-33-19-e1727270330460.jpg",
    "/images/logo/Logo-Rikkei.png",
    "/images/logo/Logo-Tap-doan-vien-thong-Viettel-Moi-02-01-1024x640-1-e1727270304736.jpg",
    "/images/logo/Logo-VNPT.png",
    "/images/logo/microsoft.png",
    "/images/logo/Mobifone.png",
    "/images/logo/Naver.png",
    "/images/logo/qualcomm.png",
    "/images/logo/VMO_Logo_Positive--e1727270372975.webp",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,  
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return <DoiTacWrapper>
    <div className="bg py-[40px]">
      <div className="container mx-auto">
        <h2 className="title">
          {common("partners.title")} <span className="hight-light"><CountUp end={300}/>{common("partners.organizations")}</span> {common("partners.subtitle")}
        </h2>
        <Slider className="slide" {...settings}>
        {logos.map((logo, i) => (
          <Link key={i} href={''}>
            <img className="logo" src={logo} alt={'logo_'+i}/>
          </Link>
        ))}
      </Slider>
      </div>
    </div>
    
  </DoiTacWrapper>;
}

const DoiTacWrapper = styled.div`
  .logo {
    height: 80px;
  }

  .bg {
    background-color: #F6FAFF;
  }

  .hight-light {
    font-weight: 800;
    font-size: 36px;
    line-height: 125%;
    letter-spacing: 3%;
    color: var(--primary-color);
  }

  .title {
    font-weight: 600;
    font-size: 28px;
    line-height: 125%;
    letter-spacing: 3%;
    text-align: center;
    color: #051A53;
  }

  .slide {
    margin-top: 40px;
  }
`

export default DoiTac;