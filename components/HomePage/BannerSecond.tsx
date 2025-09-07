import AISButton from "../AISButton";
import { BannerWrappper } from "./bannerStyle";
import dynamic from "next/dynamic";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const BannerSecond = () => {
  return (
    <BannerWrappper>
      <div className="bg py-[20px]">
        <div className="container mx-auto h-full">
          <div className="banner-content h-full">
            <h2 className="title">
              <CountUp end={1500} enableScrollSpy scrollSpyOnce/>+ khoá học với nhiều chủ đề dành cho sinh viên
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
