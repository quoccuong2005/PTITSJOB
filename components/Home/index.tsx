import News from "../News";

import React, { useContext, useEffect, useState } from "react";
import TinTuyenSinh from "../TinTuyenSinh";
import BannerHome from "../BannerHome";
import ChuongTrinhDaoTao from "../ChuongTrinhDaoTao";
import Discover from "../Discover";
import About from "../About";
import DonViNghienCuu from "../DonViNghienCuu";
import axios from "axios";
import { ip } from "../../api/ip";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  // const [dataHome,setDataHome]=useState<any>()
  const { langCode, setDataHome, dataHome } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [oldLangCode, setOldLangCode] = useState<string>();
  const getDataHome = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${ip}/qlkh-home-page?populate=deep&locale=${langCode}`
      );
      if (res) {
        setDataHome(res?.data?.data?.attributes);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!dataHome || oldLangCode !== langCode) {
      getDataHome();
      setOldLangCode(langCode);
    }
  }, [langCode]);
  return (
    <div className="overflow-hidden">
      <BannerHome dataHome={dataHome} />
      <About dataHome={dataHome} />

      <TinTuyenSinh dataHome={dataHome} />
      <ChuongTrinhDaoTao dataHome={dataHome} />

      <News dataHome={dataHome} />
      <DonViNghienCuu dataHome={dataHome} />

      <Discover dataHome={dataHome} />
    </div>
  );
};
export default HomePage;
