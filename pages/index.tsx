import styled from "styled-components";
import Banner from "../components/HomePage/Banner";
import DoiTac from "../components/HomePage/DoiTac";
import BannerSecond from "../components/HomePage/BannerSecond";
import BannerThird from "../components/HomePage/BannerThird";

const HomePage = () => {
	return <HomePageWrapper>
		<Banner/>
		<DoiTac/>
		<BannerSecond/>
		<BannerThird/>
	</HomePageWrapper>;
}


const HomePageWrapper = styled.div`
`

export default HomePage;