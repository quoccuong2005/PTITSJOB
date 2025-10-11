import styled from "styled-components";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
import Banner from "../../components/HomepageStudent/Banner";
import Vieclambanquantam from "../../components/HomepageStudent/Vieclambanquantam";
import Vieclamdaungtuyen from "../../components/HomepageStudent/Vieclamdaungtuyen"
import KhoaHoc from "../../components/HomePage/KhoaHoc";
import ChuongTrinhDaoTao from "../../components/HomePage/ChuongTrinhDaoTao"
import Xaydungthuonghieucanhan from "../../components/HomepageStudent/Xaydungthuonghieucanhan";
import Tintucvieclam from "../../components/HomePage/Tintucvieclam"
import Thitruongvieclamhomnay from "../../components/HomepageStudent/Thitruongvieclamhomnay";
const StudentDashboard = () => {
  const [common] = useCommonTranslation();

  return <HomePageWrapper>
    <Banner />
    {/* <DoiTac/> */}
    <div className="pt-[40px]">
      <Vieclambanquantam
        title={common("vieclambanquantam.title")}
        description={common("vieclambanquantam.description")}
        buttonText={common("vieclambanquantam.button")}
      />
    </div>
    <div className="pb-[40px]">
      <Vieclamdaungtuyen
      />
    </div>
    <div className="pb-[40px]">
      <KhoaHoc
        title={common("courses.title")}
        description={common("courses.description")}
        buttonText={common("courses.button")}
      />
    </div>
    <div className="py-[40px]">
      <ChuongTrinhDaoTao />
    </div>
    <div className="py-[40px]">
      <KhoaHoc type="phobien"
        title={common("popularCourses.title")}
        description={common("popularCourses.description")}
        buttonText={common("popularCourses.button")}
      />
    </div>

    <div className="">
      <Xaydungthuonghieucanhan />
    </div>


    <div className="">
      <Tintucvieclam />
    </div>
    {/* <div className="py-[40px]">
			<KhoaHoc type="nangcao"
				title={common("advancedCourses.title")}
				description={common("advancedCourses.description")}
				buttonText={common("advancedCourses.button")}
			/>
		</div> */}
  </HomePageWrapper>;
}


const HomePageWrapper = styled.div`
  background: #F7F7F7;
`

export default StudentDashboard;