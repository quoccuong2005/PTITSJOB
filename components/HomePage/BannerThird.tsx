import styled from "styled-components";
import AISButton from "../AISButton";
import { BannerWrappper } from "./bannerStyle";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";

const BannerThird = () => {
  const [common] = useCommonTranslation();
  
  return (
    <BannerWrappper>
      <div className="container mx-auto">
        <div className="flex flex-row gap-[60px] py-[32px]">
          <div className="w-[50%]">
            <div className="bn-image">
              <img src="/images/home/img-banner3.png" />
            </div>
          </div>
          <div className="w-[50%]">
            <div className="banner-content h-full">
              <h2 className="title" style={{fontSize: '36px'}}>
                {common("banner.discover_title")}
              </h2>
              <p className="description">
                {common("banner.description")}
              </p>
              <div style={{ marginTop: "22px" }}>
                <AISButton type="primary">{common("banner.explore_free")}</AISButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerWrappper>
  );
};
export default BannerThird;
