import styled from "styled-components";
// @ts-ignore
import Slider from "react-slick";
import Link from "next/link";
import dynamic from "next/dynamic";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const DoiTac = () => {
  const logos = [
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
    "/images/logo-ptit.png",
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
        <h2 className="title">Với sự có mặt của hơn <span className="hight-light"><CountUp end={300}/>+ tổ chức giảng dạy</span> uy tín từ khắp nơi</h2>
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