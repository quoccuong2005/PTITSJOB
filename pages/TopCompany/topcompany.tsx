import styled from "styled-components";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
import Banner from "../../components/HomepageStudent/Banner";
import TopCompany from "../../components/TopCompany";
const TopCompanys = () => {
    const [common] = useCommonTranslation();

    return <TopCompanysWrapper>
        <Banner />
        {/* <DoiTac/> */}
        <div className="pt-[40px]">
            <TopCompany />
        </div>


    </TopCompanysWrapper>;
}


const TopCompanysWrapper = styled.div`
  background: #F7F7F7;
`

export default TopCompanys;