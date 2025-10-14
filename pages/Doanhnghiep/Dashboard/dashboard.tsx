import styled from "styled-components";
import Banner1 from "../../../components/Doanhnghiep/Dashboard/Banner1"
import Banner2 from "../../../components/Doanhnghiep/Dashboard/Banner2"
import Banner3 from "../../../components/Doanhnghiep/Dashboard/Banner3"
import StatisticSection from "../../../components/Doanhnghiep/Dashboard/statisticsection"
import Quytrinhdongian from "../../../components/Doanhnghiep/Dashboard/Quytrinhdongian"
import Lydodoanhnghiepchon from "../../../components/Doanhnghiep/Dashboard/Lydodoanhnghiepchon"
import Tintucvieclam from "../../../components/HomePage/Tintucvieclam"
const DashboardCompanys = () => {

  return <DashboardCompanysWrapper>
    <Banner1 />

    {/* <DoiTac/> */}
    <div >
      <Banner2 />
    </div>
    <div>
      <Banner3 />
    </div>
    <div>
      <StatisticSection />
    </div>
    <div>
      <Quytrinhdongian />
    </div>
    <div>
      <Lydodoanhnghiepchon />
    </div>
    <div>
      <Tintucvieclam />
    </div>


  </DashboardCompanysWrapper>;
}


const DashboardCompanysWrapper = styled.div`
  background: #F7F7F7;
`

export default DashboardCompanys;