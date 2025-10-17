import styled from "styled-components";
import ThongBaoQuanTrong from "../../../components/Doanhnghiep/DashboardafterLogin/thongbaoquantrong"
import WelcomeDoanhnghiep from "../../../components/Doanhnghiep/DashboardafterLogin/welcomeDoanhnghiep"
import DangTuyenVaTimKiem from "../../../components/Doanhnghiep/DashboardafterLogin/dangtuyenvatimkiem"
import ThongKe from "../../../components/Doanhnghiep/DashboardafterLogin/thongke"
import TinTuc from "../../../components/Doanhnghiep/DashboardafterLogin/tintuc"
const DashboardCompanysafterLogin = () => {

  return <DashboardCompanysWrapper>
    <div className="my-5">
      <ThongBaoQuanTrong />

    </div>

    <div className="my-5">
      <WelcomeDoanhnghiep />
    </div>

    <div className="my-5" >
      <DangTuyenVaTimKiem />
    </div>

    <div className="my-5">
      <ThongKe />
    </div>

    <div className="my-5">
      <TinTuc />
    </div>


  </DashboardCompanysWrapper>;
}


const DashboardCompanysWrapper = styled.div`
  background: #F7F7F7;
`

export default DashboardCompanysafterLogin;