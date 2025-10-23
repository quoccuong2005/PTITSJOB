import { useRouter } from "next/router";
import QueryString from "qs";
import OAuth2Login from "react-simple-oauth2-login";
import { toast } from "react-toastify";
import { axios } from "../../api";
import { useAuth } from "../../context/AuthContext";

const OAuthLogin = (props: { setShowModal?: any; redirect?: string }) => {
	const { oauthLogin, OAuthData, setTypeLogin } = useAuth();
	const router = useRouter();
	const { setShowModal, redirect } = props;

	const onSuccess = (response: { code: string; session_state: string }) => {
		console.log(response);
		const data = {
			"grant_type": "authorization_code",
			"redirect_uri": "http://localhost:3000/oauth-callback",
			"code": response.code,
			"client_id": "ript-connect"
		};
		axios({
			url: "https://sso.ript.vn/realms/ript/protocol/openid-connect/token",
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			data: QueryString.stringify(data),
		})
			.then((res) => {
				localStorage.setItem("access_token", res.data?.access_token);
				if (res.data.access_token && OAuthData?._id)
					oauthLogin({ accessToken: res.data.access_token, clientId: OAuthData._id })
						// ...existing code...
						.then(() => {
							toast.success("Đăng nhập thành công!");
							setTypeLogin("keycloak");
							localStorage.setItem("typeLogin", "keycloak");
							if (!setShowModal) {
								router.push((redirect as string) ?? "/");
								window.location.reload(); // Thêm dòng này để reload lại trang
							} else {
								setShowModal("");
								window.location.reload(); // Nếu dùng modal cũng reload lại
							}
						})
						// ...existing code...
						.catch(() => {
							toast.error("Đăng nhập thất bại");
							window.location.reload();
						});
			})
			.catch(() => {
				toast.error("Đăng nhập thất bại");
			});
	};

	const onFailure = (response: any) => console.error(response);

	return (
		<>
			{OAuthData ? (
				<OAuth2Login
					authorizationUrl='https://sso.ript.vn/realms/ript/protocol/openid-connect/auth'
					responseType='code'
					clientId='ript-connect'
					redirectUri={`http://localhost:3000/oauth-callback`}
					scope='openid profile email'
					onSuccess={onSuccess}
					onFailure={onFailure}
					popupWidth={800}
					buttonText={`Đăng nhập`}
					className='text-white bg-primary-500 border border-transparent hover:bg-primary-800 focus:ring-primary-300 disabled:hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:disabled:hover:bg-primary-600 focus:!ring-2 w-full items-center justify-center text-center font-medium focus:z-10 rounded-lg uppercase text-sm py-2.5 p-[11px]'
				/>
			) : null}
		</>
	);
};

export default OAuthLogin;
