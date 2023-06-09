import { Avatar, Dropdown } from "flowbite-react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
import Link from "next/link";

const UserDropdown = () => {
	const router = useRouter();
	const { isAuthenticated, user, logout, userLoading } = useAuth();

	const onLogout = () => {
		logout().then(() => {
			toast.success("Đăng xuất thành công");
			router.push("/");
		});
	};

	return (
		<Dropdown
			inline={true}
			label={<Avatar alt='Thông tin cá nhân' img={user?.profileUser?.avatarUrl} rounded={true} />}
		>
			<Dropdown.Header>
				<span className='block text-sm'>{[user?.profileUser?.lastname, user?.profileUser?.firstname].join(" ")}</span>
				<span className='block truncate text-sm font-medium'>{user?.profileUser?.emailLienLac}</span>
			</Dropdown.Header>
			<Dropdown.Item>
				<Link href={"/ho-so"}>Hồ sơ cá nhân</Link>
			</Dropdown.Item>
			<Dropdown.Item>
				<Link href={"/ho-so"}>Yêu thích</Link>
			</Dropdown.Item>
			<Dropdown.Item>
				<Link href={"/ho-so"}>Đổi mật khẩu</Link>
			</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item className='text-red-500' onClick={onLogout}>
				Đăng xuất
			</Dropdown.Item>
		</Dropdown>
	);
};

export default UserDropdown;
