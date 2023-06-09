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
		const data = {
			...response,
			grant_type: "authorization_code",
			// response_type: "code",
			client_id: OAuthData?.oauth.clientId,
			scope: "email profile openid",
			redirect_uri: `${process.env.BASE_URL}/oauth-callback`,
		};
		axios({
			url: OAuthData?.oauth.tokenEndpoint,
			method: "POST",
			headers: { "content-type": "application/x-www-form-urlencoded" },
			data: QueryString.stringify(data),
		})
			.then((res) => {
				localStorage.setItem("id_token", res.data?.id_token);
				if (res.data.access_token && OAuthData?._id)
					oauthLogin({ accessToken: res.data.access_token, clientId: OAuthData._id })
						.then(() => {
							toast.success("Đăng nhập thành công!");
							setTypeLogin("keycloak");
							localStorage.setItem("typeLogin", "keycloak");
							if (!setShowModal) router.push((redirect as string) ?? "/");
							else setShowModal("");
						})
						.catch(() => {
							toast.error("Đăng nhập thất bại");
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
					authorizationUrl={OAuthData?.oauth?.authorizationEndpoint}
					responseType='code'
					clientId={OAuthData?.oauth?.clientId}
					redirectUri={`${process.env.BASE_URL}/oauth-callback`}
					onSuccess={onSuccess}
					onFailure={onFailure}
					scope='email profile openid'
					popupWidth={800}
					buttonText={`Đăng nhập với ${OAuthData?.oauth?.name}`}
					className='text-white bg-primary-500 border border-transparent hover:bg-primary-800  focus:ring-primary-300 disabled:hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:disabled:hover:bg-primary-600 focus:!ring-2 w-full items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg uppercase text-sm py-2.5'
				/>
			) : null}
		</>
	);
};

export default OAuthLogin;
