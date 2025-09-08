import styled from "styled-components";
import AISButton from "../AISButton";
import { BannerWrappper } from "./bannerStyle";
import { useTranslation } from "react-i18next";

const BannerThird = () => {
  const { t } = useTranslation("common");
  
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
                {t("banner.discover_title") as string}
              </h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                auctor sapien pharetra mauris bibendum tristique.
              </p>
              <div style={{ marginTop: "22px" }}>
                <AISButton type="primary">{t("banner.explore_free") as string}</AISButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerWrappper>
  );
};
export default BannerThird;
