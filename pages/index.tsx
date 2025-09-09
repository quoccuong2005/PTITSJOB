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
			<KhoaHoc type="chungchi"
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
			<KhoaHoc type="phobien"
				title={"Khoá học phổ biến"}
				description={"Khám phá các khoá học phổ biến của chúng tôi, sẵn sàng phục vụ cho mọi nhu cầu"}
				buttonText={"Khám phá tất cả khoá học"}
			/>
		</div>
		<div className="py-[40px]">
			<KhoaHoc type="moinhat"
				title={"Khoá học mới nhất"}
				description={"Khám phá các khoá học mới nhất của chúng tôi, sẵn sàng phục vụ cho mọi nhu cầu"}
				buttonText={"Khám phá tất cả khoá học"}
			/>
		</div>
		<BannerThird/>
		<div className="py-[40px]">
			<KhoaHoc type="mienphi"
				title={"Khoá học miễn phí"}
				description={"Khám phá các khoá học miễn phí của chúng tôi, sẵn sàng phục vụ cho mọi nhu cầu"}
				buttonText={"Khám phá tất cả khoá học"}
			/>
		</div>
		<div className="py-[40px]">
			<KhoaHoc type="nangcao"
				title={"Khoá học nâng cao"}
				description={"Khám phá các khoá học nâng cao của chúng tôi, sẵn sàng phục vụ cho mọi nhu cầu"}
				buttonText={"Khám phá tất cả khoá học"}
			/>
		</div>
	</HomePageWrapper>;
}


const HomePageWrapper = styled.div`
`

export default HomePage;