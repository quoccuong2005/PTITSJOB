import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import FacebookLogin from "react-facebook-login";
import { toast } from "react-toastify";
import { postRequest } from "../../api";
import { getUserProfile } from "../../api/user";
import { useAuth } from "../../context/AuthContext";
import { USER_ROLE } from "../../utils/constant";

const Facebook = (props: { setShowModal: any }) => {
	const { setShowModal } = props;
	const { setUser } = useAuth();
	const router = useRouter();

	const responseFacebookFail = (response: any) => {
		console.log("error", response);
		toast.error("Không thành công. Vui lòng thử lại sau!");
	};

	const responseFacebook = async (response: any) => {
		// console.log("response", response);
		const res = await postRequest("/auth/login/facebook", { access_token: response.accessToken, platform: "Web" });
		// console.log(res);
		if (res.data?.accessToken) {
			localStorage.setItem("token", res.data?.accessToken);
			axios.defaults.headers.Authorization = `Bearer ${res.data?.accessToken}`;
			const { password, authorizationVersion, ...user } = res.data?.user;
			if (user) {
				getUserProfile().then((response) => {
					if (user.systemRole === USER_ROLE.USER) user.profileUser = response.data;
					else user.profileDoanhNghiep = response.data;
					setUser(user);
				});
			}
			toast.success("Đăng nhập thành công!");
			if (!setShowModal) router.push("/");
			else setShowModal("");
		}
	};
	return (
		<li>
			<FacebookLogin
				appId='738856883842620'
				autoLoad={false}
				fields='name,email,picture'
				callback={responseFacebook}
				cssClass='twm-facebook facebook-clr'
				onFailure={responseFacebookFail}
				textButton='Facebook'
				size='small'
				disableMobileRedirect
			/>
		</li>
	);
};

export default Facebook;
