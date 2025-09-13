import AISButton from "../AISButton";
import { BannerWrappper } from "./bannerStyle";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
import router from "next/router";

const BannerThird = () => {
  const [common] = useCommonTranslation();
  
  return (
    <BannerWrappper>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[60px] py-[32px]">
          <div className="w-[100%] lg:w-[50%]">
            <div className="bn-image md:pl-[80px]">
              <img src="/images/home/banner-3.jpg" />
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%]">
            <div className="banner-content h-full">
              <h2 className="title" style={{fontSize: '36px'}}>
                {common("banner.discover_title")}
              </h2>
              <p className="description">
                {common("banner.description")}
              </p>
              <div style={{ marginTop: "22px" }}>
                <AISButton type="primary" onClick={() => router.push('/tat-ca-khoa-hoc')}>{common("banner.explore_free")}</AISButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerWrappper>
  );
};
export default BannerThird;
