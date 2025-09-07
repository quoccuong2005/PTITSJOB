import styled from "styled-components";
import AISButton from "../AISButton";
import { BannerWrappper } from "./bannerStyle";

const BannerSecond = () => {
  return (
    <BannerWrappper>
      <div className="bg py-[20px]">
        <div className="container mx-auto h-full">
          <div className="banner-content h-full">
            <h2 className="title">
              1500+ khoá học với nhiều chủ đề dành cho sinh viên
            </h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              auctor sapien pharetra mauris bibendum tristique.
            </p>
            <div style={{marginTop: '22px'}}>
              <AISButton type="primary">Tìm hiểu thêm</AISButton>
            </div>
          </div>
        </div>
      </div>
    </BannerWrappper>
  );
};


export default BannerSecond;
