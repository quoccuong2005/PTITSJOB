import styled from "styled-components";
import {
  Big_Shoulders_Inline_Display,
  Dela_Gothic_One,
} from "next/font/google";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


// Fake Data
const jobCategories = [
  { id: "cntt", name: "Công nghệ thông tin", count: 18, isHot: true },
  { id: "it-software", name: "IT Phần mềm", count: 21, isHot: true },
  { id: "truyen-thong", name: "Truyền thông", count: 4 },
  { id: "marketing", name: "Marketing", count: 6 },
  { id: "quang-cao", name: "Quảng cáo", count: 4 },
  { id: "kinh-doanh", name: "Kinh doanh", count: 9 },
  { id: "ban-hang", name: "Bán hàng", count: 3 },
  { id: "dich-vu-kh", name: "Dịch vụ khách hàng", count: 2 },
];

const jobStats = {
  newJobsToday: 12,
  totalActiveJobs: 240,
  totalCompanies: 8,
};

const locationOptions = [
  { value: "", label: "Địa điểm" },
  { value: "hanoi", label: "Hà Nội" },
  { value: "hcm", label: "Hồ Chí Minh" },
  { value: "danang", label: "Đà Nẵng" },
  { value: "haiphong", label: "Hải Phòng" },
  { value: "cantho", label: "Cần Thơ" },
];

const industryOptions = [
  { value: "", label: "Ngành nghề" },
  { value: "it", label: "Công nghệ thông tin" },
  { value: "marketing", label: "Marketing & Truyền thông" },
  { value: "business", label: "Kinh doanh & Bán hàng" },
  { value: "finance", label: "Tài chính & Ngân hàng" },
  { value: "education", label: "Giáo dục & Đào tạo" },
];

const jobTypeOptions = [
  { value: "", label: "Hình thức việc" },
  { value: "fulltime", label: "Toàn thời gian" },
  { value: "parttime", label: "Bán thời gian" },
  { value: "intern", label: "Thực tập sinh" },
  { value: "contract", label: "Hợp đồng" },
  { value: "freelance", label: "Freelance" },
];

const getCurrentDate = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
};
//

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
    const updateDateTime = () => {
      const today = new Date();
      const currentLang = i18n.language;

      const dayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };
      const dayName = today.toLocaleDateString(currentLang, dayOptions);

      const hourOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const timeString = today.toLocaleTimeString(currentLang, hourOptions);

      const day = today.getDate().toString().padStart(2, "0");
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const year = today.getFullYear();
      const dateString = `${day}/${month}/${year}`;

      const formattedDate = `${dayName}, ${timeString} ${dateString}`;
      setCurrentDate(formattedDate);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [i18n.language]);

  return (
    <BannerWrappper>
      <div className="bg-banner sm:h-[1000px] md:h-[500px] lg:h-[630px]">
        {/* <img src="/images/home/2.png" className="bg-2 w-[20%] h-[100%] object-cover scale-x-[-1]" /> */}
        <div className="items-center container mx-auto bg-[#fef1f0] md:bg-[unset]">
          <div className="container mx-auto px-4 pb-[32px] pt-[60px]">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center mb-4 space-x-2">
                <div className="flex space-x-1 mr-4 ">

                  <img src="/images/home/P.png" alt="Logo JOBS PTIT" />
                  <img src="/images/home/T.png" alt="Logo JOBS PTIT" />
                  <img src="/images/home/I.png" alt="Logo JOBS PTIT" />
                  <img src="/images/home/T.png" alt="Logo JOBS PTIT" />
                </div>
                <div className="flex space-x-1">
                  <img src="/images/home/J.png" alt="Logo JOBS PTIT" />
                  <img src="/images/home/O.png" alt="Logo JOBS PTIT" />
                  <img src="/images/home/B.png" alt="Logo JOBS PTIT" />
                  <img src="/images/home/S.png" alt="Logo JOBS PTIT" />
                </div>
              </div>
              <p className="subtitle text-base sm:text-xl md:text-[32px] lg:text-[42px] leading-[120%] font-bold text-[#051A53]">
                Khám phá hơn <span className="text-[#BC2826] font-semibold text-2xl sm:text-4xl lg:text-[60px]">200+ việc làm</span> cho nhiều ngành nghề
              </p>
            </div>
          </div>


          {/* <div className="banner-content">
            <div className="show-date text-[16px] md:text-[18px]">
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
            <div className={`${font.className} title text-[50px] md:text-[130px] fw-[700] md:fw-[900]`}>UniVERSE</div>
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
          </div> */}
          {/* <div className="image-banner">
            <img src="/images/home/imgBanner.png" />
          </div> */}
        </div>


        <div className="w-full max-w-[1400px] mx-auto pb-8">
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-3 mb-6">
            <div className="flex items-center bg-white rounded-lg px-3 py-3 w-full lg:w-[280px] h-[56px] shadow-sm border">
              <span className="text-gray-500 mr-2"><img src="/images/home/map1.png" alt="Location" /></span>
              <select className="flex-1 text-gray-700 bg-transparent border-0 outline-none cursor-pointer">
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center bg-white rounded-lg px-3 py-3 w-full lg:w-[280px] h-[56px] shadow-sm border">
              <span className="text-gray-500 mr-2"><img src="/images/home/industry.png" alt="Industry" /></span>
              <select className="flex-1 text-gray-700 bg-transparent border-0 outline-none cursor-pointer">
                {industryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center bg-white rounded-lg px-3 py-3 w-full lg:w-[280px] h-[56px] shadow-sm border">
              <span className="text-gray-500 mr-2"><img src="/images/home/job-type.png" alt="Job Type" /></span>
              <select className="flex-1 text-gray-700 bg-transparent border-0 outline-none cursor-pointer">
                {jobTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <div className="flex items-center bg-white rounded-lg px-4 py-3 flex-1 h-[56px] shadow-sm border">
                <input
                  type="text"
                  placeholder="Nhập thông tin cần tìm"
                  className="flex-1 text-gray-700 bg-transparent border-0 outline-none"
                />
              </div>
              <button className="bg-[#BC2826] hover:bg-[#a01f1e] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full lg:w-[120px] h-[56px] shadow-lg">
                Tìm kiếm
              </button>
            </div>
          </div>

          <div className="w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cột trái - Thống kê ngành nghề */}
              <div className="space-y-2 text-sm bg-white p-[17px] rounded-lg">
                {Array.from({ length: Math.ceil(jobCategories.length / 2) }, (_, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {jobCategories.slice(rowIndex * 2, (rowIndex + 1) * 2).map((category) => (
                      <div key={category.id} className="flex justify-between items-center py-1">
                        <span className={`text-gray-700 text-base ${category.isHot ? 'font-semibold' : 'font-medium'}`}>
                          {category.name} {category.isHot ? '🔥' : ''}
                        </span>
                        <span className="font-bold text-gray-900 text-lg">{category.count}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>


              <div className="bg-white p-4 rounded-lg">

                <div className="mb-4 pb-2 border-b border-gray-200">
                  <span className="text-gray-600 text-sm mr-2">Thị trường việc làm hôm nay</span>
                  <span className="font-bold text-[#BC2826]">{getCurrentDate()}</span>
                </div>


                <div className="grid cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-[#FFF5F5] p-3 rounded-lg">
                    <div className="flex">
                      <div className="flex justify-center items-center mb-2 mr-[24px] ">
                        <img src="/images/home/Group 1687.png" />
                      </div>
                      <div className="text-gray-600 mb-2 font-semibold text-base">
                        <div>Số việc làm</div>
                        <div>mới hôm nay</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-gray-900 mr-1">{jobStats.newJobsToday} </div>
                      <img src="/images/home/Tăng.png" />
                    </div>
                  </div>

                  <div className="bg-[#FFF5F5] p-3 rounded-lg">
                    <div className="flex">
                      <div className="flex justify-center items-center mb-2 mr-[24px]">
                        <img src="/images/home/Group 1811.png" />
                      </div>
                      <div className="text-gray-600 mb-2 font-semibold text-base ">
                        <div>Số việc làm</div>
                        <div>đang tuyển</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{jobStats.totalActiveJobs}</div>
                  </div>

                  <div className="bg-[#FFF5F5] p-3 rounded-lg">
                    <div className="flex">
                      <div className="flex justify-center items-center mb-2 mr-[24px]">
                        <img src="/images/home/Cơ sở.png" />
                      </div>
                      <div className="text-gray-600 mb-2 font-semibold text-base">
                        <div>Số công ty</div>
                        <div>đang tuyển</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{jobStats.totalCompanies}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerWrappper>
  );
};

const BannerWrappper = styled.div`
  .title {
    line-height: 120%;
    letter-spacing: 3%;
    color: var(--primary-color);
    margin-top: 32px;
  }

  .show-date {
    gap: 10px;
    border-radius: 24px;
    padding: 8px 20px 8px 10px;
    background-color: white;
    width: max-content;
    font-weight: 600;
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(/images/home/1.png);
  }
 
`;
export default Banner;
