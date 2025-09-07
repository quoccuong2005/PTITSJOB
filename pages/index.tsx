import styled from "styled-components";
import Banner from "../components/HomePage/Banner";
import DoiTac from "../components/HomePage/DoiTac";
import BannerSecond from "../components/HomePage/BannerSecond";
import BannerThird from "../components/HomePage/BannerThird";
import KhoaHoc from "../components/HomePage/KhoaHoc";
import MucTieuNgheNghiep from "../components/HomePage/MucTieuNgheNghiep";
import ChuongTrinhDaoTao from "../components/HomePage/ChuongTrinhDaoTao";

const HomePage = () => {
	return <HomePageWrapper>
		<Banner/>
		<DoiTac/>
		<BannerSecond/>
		<KhoaHoc 
			title="Chứng chỉ phổ biến nhất"
			description="Khám phá các chứng chỉ phổ biến nhất của chúng tôi, sẵn sàng phục vụ cho mọi nhu cầu"
			buttonText="Khám phá tất cả chứng chỉ"
		/>
		<MucTieuNgheNghiep 
			title="Mục tiêu nghề nghiệp"
			description="Khám phá các chương trình đào tạo chuyên sâu giúp bạn đạt được mục tiêu nghề nghiệp"
			buttonText="Xem tất cả chương trình"
		/>
		<BannerThird/>
		<ChuongTrinhDaoTao/>
	</HomePageWrapper>;
}


const HomePageWrapper = styled.div`
`

export default HomePage;