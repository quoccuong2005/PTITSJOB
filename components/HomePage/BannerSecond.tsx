import AISButton from "../AISButton";
import { BannerWrappper } from "./bannerStyle";
import dynamic from "next/dynamic";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const BannerSecond = () => {
  const [common] = useCommonTranslation();
  
  return (
    <BannerWrappper>
      <div className="bg py-[20px]">
        <div className="container mx-auto h-full">
          <div className="banner-content h-full">
            <h2 className="title">
              <p className="w-[115px] inline-block"><CountUp end={1500} enableScrollSpy scrollSpyOnce/></p>{common("banner.courses_title")}
            </h2>
            <p className="description">
              {common("banner.description")}
            </p>
            <div style={{marginTop: '22px'}}>
              <AISButton type="primary">{common("banner.learn_more")}</AISButton>
            </div>
          </div>
        </div>
      </div>
    </BannerWrappper>
  );
};


export default BannerSecond;
