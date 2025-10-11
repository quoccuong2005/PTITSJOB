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

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Chuyển hướng đến trang kết quả tìm kiếm với các tham số đã chọn
        router.push({
            pathname: '/student/jobs',
            query: {
                keyword,
                location,
                industry,
                jobType
            }
        });
    };

    return (
        <BannerWrapper>
            <SearchFormContainer>
                <SearchForm onSubmit={handleSearch}>
                    <FilterItem>
                        <FilterIcon>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#637381" />
                            </svg>
                        </FilterIcon>
                        <FilterSelect>
                            <select
                                value={location}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value)}
                            >
                                {locationOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronIcon>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10l5 5 5-5z" fill="#637381" />
                                </svg>
                            </ChevronIcon>
                        </FilterSelect>
                    </FilterItem>

                    <FilterItem>
                        <FilterIcon>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h4v2h8V8h4v12z" fill="#637381" />
                            </svg>
                        </FilterIcon>
                        <FilterSelect>
                            <select
                                value={industry}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setIndustry(e.target.value)}
                            >
                                {industryOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronIcon>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10l5 5 5-5z" fill="#637381" />
                                </svg>
                            </ChevronIcon>
                        </FilterSelect>
                    </FilterItem>

                    <FilterItem>
                        <FilterIcon>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="#637381" />
                            </svg>
                        </FilterIcon>
                        <FilterSelect>
                            <select
                                value={jobType}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => setJobType(e.target.value)}
                            >
                                {jobTypeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronIcon>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 10l5 5 5-5z" fill="#637381" />
                                </svg>
                            </ChevronIcon>
                        </FilterSelect>
                    </FilterItem>

                    <SearchInputContainer>
                        <SearchIcon>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#637381" />
                            </svg>
                        </SearchIcon>
                        <input
                            type="text"
                            placeholder="Nhập thông tin cần tìm"
                            value={keyword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
                        />
                    </SearchInputContainer>

                    <SearchButtonContainer>
                        <SearchButton type="submit">
                            Tìm kiếm
                        </SearchButton>
                    </SearchButtonContainer>
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
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
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