import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { postRequest } from "../../api";
import { getUserProfile } from "../../api/user";
import { useAuth } from "../../context/AuthContext";
import { USER_ROLE } from "../../utils/constant";

const Google = (props: { setShowModal: any }) => {
	const { setShowModal } = props;
	const { setUser } = useAuth();
	const router = useRouter();

	const responseGoogle = async (response: any) => {
		const res = await postRequest("/auth/login/google", { access_token: response.credential, platform: "Web" });
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
		<GoogleOAuthProvider clientId='847095552696-6qmo01gndbfb6u3vt6i2hruni2ljhbhj.apps.googleusercontent.com'>
			<GoogleLogin
				onSuccess={responseGoogle}
				onError={() => {
					console.log("Login Failed");
				}}
				width='259'
			/>
		</GoogleOAuthProvider>
	);
};

export default Google;
