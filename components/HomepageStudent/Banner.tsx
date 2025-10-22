import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const locationOptions = [
  { value: "", label: "Địa điểm" },
  { value: "hanoi", label: "Hà Nội" },
  { value: "hcm", label: "Hồ Chí Minh" },
  { value: "danang", label: "Đà Nẵng" },
  { value: "other", label: "Khác" },
];

const industryOptions = [
  { value: "", label: "Ngành nghề" },
  { value: "it", label: "Công nghệ thông tin" },
  { value: "marketing", label: "Marketing" },
  { value: "finance", label: "Tài chính" },
  { value: "education", label: "Giáo dục" },
];

const jobTypeOptions = [
  { value: "", label: "Hình thức việc" },
  { value: "fulltime", label: "Toàn thời gian" },
  { value: "parttime", label: "Bán thời gian" },
  { value: "intern", label: "Thực tập" },
];

const Banner = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [jobType, setJobType] = useState('');



  return (
    <BannerWrapper>
      <SearchFormContainer>
        <SearchForm >
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-3 ">
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
        </SearchForm>
      </SearchFormContainer>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  background-color: #fbe9e7;
  padding: 12px 0;
  width: 100%;
`;

const SearchFormContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const SearchForm = styled.form`
  
`;

const FilterItem = styled.div`
  position: relative;
  background-color: white;
  border-radius: 4px;
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FilterIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px 0 12px;
`;

const FilterSelect = styled.div`
  position: relative;
  height: 100%;
  
  select {
    height: 100%;
    appearance: none;
    border: none;
    background: transparent;
    padding: 0 32px 0 0;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    outline: none;
    
    &::-ms-expand {
      display: none;
    }
  }
`;

const ChevronIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const SearchInputContainer = styled.div`
  position: relative;
  flex: 1;
  background-color: white;
  border-radius: 4px;
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    padding: 0 12px 0 36px;
    font-size: 14px;
    outline: none;
    color: #333;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const SearchButtonContainer = styled.div`
  height: 40px;
`;

const SearchButton = styled.button`
  height: 100%;
  background-color: #bc2826;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #a01f1e;
  }
`;

export default Banner;