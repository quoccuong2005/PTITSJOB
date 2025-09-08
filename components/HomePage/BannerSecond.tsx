import AISButton from "../AISButton";
import { BannerWrappper } from "./bannerStyle";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const BannerSecond = () => {
  const { t } = useTranslation("common");
  
  return (
    <BannerWrappper>
      <div className="bg py-[20px]">
        <div className="container mx-auto h-full">
          <div className="banner-content h-full">
            <h2 className="title">
              <CountUp end={1500} enableScrollSpy scrollSpyOnce/>{t("banner.courses_title") as string}
            </h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              auctor sapien pharetra mauris bibendum tristique.
            </p>
            <div style={{marginTop: '22px'}}>
              <AISButton type="primary">{t("banner.learn_more") as string}</AISButton>
            </div>
          </div>
        </div>
      </div>
    </BannerWrappper>
  );
};


export default BannerSecond;
