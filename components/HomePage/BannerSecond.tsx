import AISButton from "../AISButton";
import { BannerWrappper } from "./bannerStyle";
import dynamic from "next/dynamic";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
import router from "next/router";
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const BannerSecond = () => {
  const [common] = useCommonTranslation();
  
  return (
    <BannerWrappper>
      <div className="bg py-[20px] bg-none lg:bg-[url(/images/home/bg-second.jpeg)]">
        <div className="container mx-auto h-full">
          <div className="banner-content h-full">
            <h2 className="title">
              <p className="w-[55px] inline-block"><CountUp end={50} enableScrollSpy scrollSpyOnce/></p>{common("banner.courses_title")}
            </h2>
            <p className="description">
              {common("banner.description")}
            </p>
            <div style={{marginTop: '22px'}}>
              <AISButton onClick={() => router.push('/tat-ca-khoa-hoc')} type="primary">{common("banner.learn_more")}</AISButton>
            </div>
          </div>
        </div>
      </div>
    </BannerWrappper>
  );
};


export default BannerSecond;
