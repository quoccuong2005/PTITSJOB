import React from "react";
import GiangVienCard from "../components/User/GiangVienCard";
import SinhVienCard from "../components/User/SinhVienCard";
import UserCard from "../components/User/UserCard";

const HoSo = () => {
	return (
		<div className='p-2 md:p-4'>
			<div className='container mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-2 md:gap-4'>
				<UserCard />
				<div className='col-span-2 flex flex-col gap-2 md:gap-4'>
					<GiangVienCard />
					<SinhVienCard />
				</div>
			</div>
		</div>
	);
};

export default HoSo;
