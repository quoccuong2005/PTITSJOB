import styled from "styled-components";
import {
  Big_Shoulders_Inline_Display,
  Dela_Gothic_One,
} from "next/font/google";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const font = Big_Shoulders_Inline_Display({
  subsets: ["latin"],
  weight: ["900"],
});

const font2 = Dela_Gothic_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Banner = () => {
  const { i18n } = useTranslation();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    
    const currentLang = i18n.language;
    
    const dayOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long'
    };
    
    const dayName = today.toLocaleDateString(currentLang, dayOptions);
    
    const hourOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    const timeString = today.toLocaleTimeString(currentLang, hourOptions);
    
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    const dateString = `${day}/${month}/${year}`;

    const formattedDate = `${dayName}, ${timeString} ${dateString}`;

    setCurrentDate(formattedDate);
  }, [i18n.language]); 
  
  return (
    <BannerWrappper>
      <div className="bg-banner">
        <div className="flex justify-between items-center container mx-auto h-[100%] bg-[#fef1f0] md:bg-[unset]">
          <div className="banner-content">
            <div className="show-date">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16.5C0 7.66344 7.16344 0.5 16 0.5C24.8366 0.5 32 7.66344 32 16.5C32 25.3366 24.8366 32.5 16 32.5C7.16344 32.5 0 25.3366 0 16.5Z"
                  fill="#FFE1DF"
                />
                <path
                  d="M10.667 12.1188C10.667 12.4344 10.9227 12.6901 11.2383 12.6901C11.5539 12.6901 11.8096 12.4344 11.8096 12.1188V11.1667H13.7148V12.1188C13.7148 12.4344 13.9705 12.6901 14.2861 12.6901C14.6017 12.69 14.8574 12.4344 14.8574 12.1188V11.1667H16.7617V12.1188C16.7617 12.4344 17.0184 12.6901 17.334 12.6901C17.6494 12.6899 17.9053 12.4343 17.9053 12.1188V11.1667H19.8096V12.1188C19.8096 12.4343 20.0654 12.6899 20.3809 12.6901C20.6965 12.6901 20.9531 12.4344 20.9531 12.1188V11.1667H21.7148C22.3458 11.1668 22.8573 11.6783 22.8574 12.3092V22.5954C22.8573 23.2264 22.3459 23.7378 21.7148 23.738H10.2861C9.655 23.738 9.14363 23.2265 9.14355 22.5954V12.3092C9.1437 11.6782 9.65504 11.1667 10.2861 11.1667H10.667V12.1188ZM12 21.071C11.6845 21.0711 11.4287 21.3277 11.4287 21.6432C11.4289 21.9586 11.6847 22.2144 12 22.2145H20C20.3155 22.2145 20.5711 21.9586 20.5713 21.6432C20.5713 21.3276 20.3156 21.071 20 21.071H12Z"
                  fill="#BC2826"
                />
                <path
                  d="M10.667 10.2143C10.667 9.89869 10.9228 9.64286 11.2384 9.64286V9.64286C11.554 9.64286 11.8098 9.89869 11.8098 10.2143V11.1667H10.667V10.2143Z"
                  fill="#BC2826"
                />
                <path
                  d="M13.7148 10.2143C13.7148 9.89869 13.9707 9.64286 14.2863 9.64286V9.64286C14.6019 9.64286 14.8577 9.89869 14.8577 10.2143V11.1667H13.7148V10.2143Z"
                  fill="#BC2826"
                />
                <path
                  d="M16.7627 10.2143C16.7627 9.89869 17.0185 9.64286 17.3341 9.64286V9.64286C17.6497 9.64286 17.9056 9.89869 17.9056 10.2143V11.1667H16.7627V10.2143Z"
                  fill="#BC2826"
                />
                <path
                  d="M19.8105 10.2143C19.8105 9.89869 20.0664 9.64286 20.382 9.64286V9.64286C20.6976 9.64286 20.9534 9.89869 20.9534 10.2143V11.1667H19.8105V10.2143Z"
                  fill="#BC2826"
                />
              </svg>
              <span>{currentDate}</span>
            </div>
            <div className={`${font.className} title text-[50px] md:text-[130px] fw-[700] md:fw-[900]`}>UNI-Learn</div>
            <div className={`${font2.className} description text-[20px] md:text-[35px] fw-[400] md:fw-[400]`}>
              <ReactTyped
                strings={[
                  "Nền tảng Đại học số PTIT",
                  "PTIT Digital University",
                  "Universitaria Digital PTIT",
                  "PTIT数字大学平台",
                  "ແພລດຟອມມະຫາວິທະຍາໄລດິຈິຕອນ PTIT",
                  "វេទិកាសាកលវិទ្យាល័យឌីជីថល PTIT",
                ]}
                typeSpeed={40}
                backSpeed={20}
                backDelay={1500}
                loop
                cursorChar="|"
              />
            </div>
          </div>
          {/* <div className="image-banner">
            <img src="/images/home/imgBanner.png" />
          </div> */}
        </div>
      </div>
    </BannerWrappper>
  );
};

const BannerWrappper = styled.div`
  .title {
    line-height: 120%;
    letter-spacing: 3%;
    text-transform: uppercase;
    color: var(--primary-color);
    margin-top: 32px;
  }

  .show-date {
    width: 283;
    height: 48;
    gap: 10px;
    border-radius: 24px;
    padding: 8px 20px 8px 10px;
    background-color: white;
    width: max-content;
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 3%;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .description {
    line-height: 120%;
    letter-spacing: 3%;
    color: var(--primary-color);
    max-width: 600px;
  }

  .image-banner {
    width: 550px;
    img {
      width: 100%;
    }
  }

  .bg-banner {
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
    background-color: #fef1f0;
    height: 420px;
    background-image: url(/images/home/banner-ptit.jpg);
  }
`;
export default Banner;
