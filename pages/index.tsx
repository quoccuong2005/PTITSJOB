import styled from "styled-components";
import { useCommonTranslation } from "../hooks/useCommonTranslation";
import Banner from "../components/HomePage/Banner";
import DoiTac from "../components/HomePage/DoiTac";
import BannerSecond from "../components/HomePage/BannerSecond";
import BannerThird from "../components/HomePage/BannerThird";
import KhoaHoc from "../components/HomePage/KhoaHoc";
import MucTieuNgheNghiep from "../components/HomePage/MucTieuNgheNghiep";
import ChuongTrinhDaoTao from "../components/HomePage/ChuongTrinhDaoTao";
import NganhNoiBat from "../components/HomePage/Nganhnoibat";
import Tintucvieclam from "../components/HomePage/Tintucvieclam";
import TaisaonentimviecoJobsPTIT from "../components/HomePage/TaisaonentimviecoJobsPTIT";
const HomePage = () => {
	const [common] = useCommonTranslation();

	return <HomePageWrapper>
		<Banner />
		<div className="pt-[40px]">
			<KhoaHoc type="chungchi"
				autoplay={false}
				title={common("courses.title")}
				description={common("courses.description")}
				buttonText={common("courses.button")}
			/>
		</div>
		<div className="pb-[40px]">
			<ChuongTrinhDaoTao />
		</div>
		<div className="py-[40px]">
			<KhoaHoc type="phobien"
				title={common("popularCourses.title")}
				description={common("popularCourses.description")}
				buttonText={common("popularCourses.button")}
			/>
		</div>

		<div className="pb-[40px]">

			<NganhNoiBat />
		</div>

		<TaisaonentimviecoJobsPTIT />
		<div className="py-[40px]">

			<Tintucvieclam />
		</div>

	</HomePageWrapper>;
}


const HomePageWrapper = styled.div`
  background: #F7F7F7;
`

export default HomePage;