
import News from "../News";

import React, { useEffect, useState } from "react";
import TinTuyenSinh from "../TinTuyenSinh";
import BannerHome from "../BannerHome";
import ChuongTrinhDaoTao from "../ChuongTrinhDaoTao";
import Discover from "../Discover";
import About from "../About";
import DonViNghienCuu from "../DonViNghienCuu";
import axios from "axios";

const HomePage = () => {
	const [dataHome,setDataHome]=useState<any>()
	const getDataHome = async () => {
	  try {
			const res=await axios.get(`http://localhost:1337/api/qlkh-home-page?populate=deep`);
			if (res){
				setDataHome(res?.data?.data?.attributes)
			}
		}catch (e) {
			console.log(e)
		}
	}
	useEffect(()=>{
		getDataHome()
	},[])
	return (
		<div className='overflow-hidden'>
			<BannerHome dataHome={dataHome}/>
			<About dataHome={dataHome}/>

			<TinTuyenSinh dataHome={dataHome}/>
			<ChuongTrinhDaoTao dataHome={dataHome}/>

			<News dataHome={dataHome}/>
			<DonViNghienCuu dataHome={dataHome}/>



			<Discover dataHome={dataHome}/>
		</div>
	);
};
export default HomePage;
