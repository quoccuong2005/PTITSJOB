import styled from "styled-components";
import { useCommonTranslation } from "../../hooks/useCommonTranslation";
import Banner from "../../components/HomepageStudent/Banner";
import ListCompany from "../../components/ListCompany";
const ListCompanys = () => {
    const [common] = useCommonTranslation();

    return <ListCompanysWrapper>
        <Banner />
        {/* <DoiTac/> */}
        <div className="pt-[40px]">
            <ListCompany />
        </div>


    </ListCompanysWrapper>;
}


const ListCompanysWrapper = styled.div`
  background: #F7F7F7;
`

export default ListCompanys;