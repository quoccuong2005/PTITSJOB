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
		<div className="py-[40px]">
			<KhoaHoc 
				title={common("courses.title")}
				description={common("courses.description")}
				buttonText={common("courses.button")}
			/>
		</div>
		<div className="pt-[20px] pb-[40px]">
			<ChuongTrinhDaoTao/>
		</div>
		<div className="py-[40px]">
			<MucTieuNgheNghiep 
				title={common("career.title")}
				description={common("career.description")}
				buttonText={common("career.button")}
			/>
		</div>
		<BannerSecond/>
		<div className="py-[40px]">
			<KhoaHoc 
				title={common("courses.title")}
				description={common("courses.description")}
				buttonText={common("courses.button")}
			/>
		</div>
		<div className="py-[40px]">
			<KhoaHoc 
				title={common("courses.title")}
				description={common("courses.description")}
				buttonText={common("courses.button")}
			/>
		</div>
		<BannerThird/>
		<div className="py-[40px]">
			<KhoaHoc 
				title={common("courses.title")}
				description={common("courses.description")}
				buttonText={common("courses.button")}
			/>
		</div>
		<div className="py-[40px]">
			<KhoaHoc 
				title={common("courses.title")}
				description={common("courses.description")}
				buttonText={common("courses.button")}
			/>
		</div>
	</HomePageWrapper>;
}


const HomePageWrapper = styled.div`
`

export default HomePage;