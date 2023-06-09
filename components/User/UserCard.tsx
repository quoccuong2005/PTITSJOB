import { Avatar, Card } from "flowbite-react";
import React from "react";
import { HiArchive, HiBell, HiBookmark, HiHeart } from "react-icons/hi";
import Link from "next/link";

const UserCard = () => {
	return (
		<Card>
			<div className='flex flex-col items-center'>
				<Avatar rounded size={"xl"} className='-mt-20 w-fit' />
				<h2 className='mt-4 text-2xl font-bold uppercase text-gray-700 dark:text-gray-100'>Ngô Văn Nhận</h2>
				<h3 className='text-gray-500 dark:text-gray-400'>nhanc500@gmail.com</h3>

				<div className='w-full grid grid-cols-3 mt-10 gap-2'>
					<Link
						href={"/"}
						className='text-center text-sm hover:bg-gray-50 dark:hover:bg-gray-700 duration-300 rounded-lg p-2'
					>
						<HiBell className='text-5xl text-gray-200 dark:text-gray-600 mx-auto mb-2' />
						<span className='text-gray-500 dark:text-gray-400'>Thông báo</span>
					</Link>
					<Link
						href={"/"}
						className='text-center text-sm hover:bg-gray-50 dark:hover:bg-gray-700 duration-300 rounded-lg p-2'
					>
						<HiHeart className='text-5xl text-gray-200 dark:text-gray-600 mx-auto mb-2' />
						<span className='text-gray-500 dark:text-gray-400'>Yêu thích</span>
					</Link>
					<Link
						href={"/"}
						className='text-center text-sm hover:bg-gray-50 dark:hover:bg-gray-700 duration-300 rounded-lg p-2'
					>
						<HiArchive className='text-5xl text-gray-200 dark:text-gray-600 mx-auto mb-2' />
						<span className='text-gray-500 dark:text-gray-400'>Lưu trữ</span>
					</Link>
				</div>
			</div>
		</Card>
	);
};

export default UserCard;
