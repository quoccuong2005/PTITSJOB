import styled from "styled-components";
import { useCommonTranslation } from "../hooks/useCommonTranslation";
import Banner from "../components/HomePage/Banner";
import DoiTac from "../components/HomePage/DoiTac";
import BannerSecond from "../components/HomePage/BannerSecond";
import BannerThird from "../components/HomePage/BannerThird";
import KhoaHoc from "../components/HomePage/KhoaHoc";
import MucTieuNgheNghiep from "../components/HomePage/MucTieuNgheNghiep";
import ChuongTrinhDaoTao from "../components/HomePage/ChuongTrinhDaoTao";

const HomePage = () => {
	const [common] = useCommonTranslation();
	
	return <HomePageWrapper>
		<Banner/>
		<DoiTac/>
		<KhoaHoc 
			title={common("courses.title")}
			description={common("courses.description")}
			buttonText={common("courses.button")}
		/>
		<MucTieuNgheNghiep 
			title={common("career.title")}
			description={common("career.description")}
			buttonText={common("career.button")}
		/>
		<BannerSecond/>
		<BannerThird/>
		<ChuongTrinhDaoTao/>
	</HomePageWrapper>;
}


const HomePageWrapper = styled.div`
`

export default HomePage;