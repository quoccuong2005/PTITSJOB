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
        </div>


        <div className="w-full max-w-[1240px] mx-auto pb-8">
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
              <select className="flex-1 text-gray-700 bg-transparent border-0 outline-none cursor-pointer !pr-0 ">
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

          <div className="w-full sm:w-[640px] md:w-[800px] lg:w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
