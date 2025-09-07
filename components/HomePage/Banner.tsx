import styled from "styled-components";

// const syncopate = Syncopate({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

const Banner = () => {
  return <BannerWrappper>
    <div className="bg-banner">
      <div className="banner-content">
        <div className="show-date">
          Nền tảng Đại học số PTIT
        </div>
        {/* <div className={`${syncopate.className}`}>
          UNI-Learn
        </div> */}
        <div className="description">
          Nền tảng Đại học số PTIT
        </div>
      </div>
      <div className="image-banner">

      </div>
    </div>
  </BannerWrappper>;
}


const BannerWrappper = styled.div`
`
export default Banner;