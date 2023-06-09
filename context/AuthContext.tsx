import React, { createContext, useContext, useEffect, useState } from "react";
import { axios } from "../api";
import { getClientOAuth, userLoginOAuth } from "../api/auth";
import { getAllApply, getAllBookmark, getAllFollow } from "../api/baidang";
import { getUserMe, getUserProfile, userLogin, userLogout } from "../api/user";
import { User } from "../api/user/type";
import i18n from "../i18n";
import { USER_ROLE } from "../utils/constant";
import { getRequest } from "../api";
import { Auth } from "../api/auth/type";
import { MainMenu} from "../utils/interface";

const defaultValue: Auth.AuthContextType = {
	isAuthenticated: false,
	userLoading: true,
	setUser: () => null,
	setShowAuthModal: () => null,
	setLangCode: () => null,
	login: () => Promise.resolve({} as User.IRoot),
	oauthLogin: () => Promise.resolve({} as User.IRoot),
	logout: () => Promise.resolve(1),
	allBookmark: [],
	setAllBookmark: () => null,
	allApply: [],
	setAllApply: () => null,
	allFollow: [],
	setAllFollow: () => null,
	OAuthData: {} as Auth.IClientOAuth,
	typeLogin: "default",
	setTypeLogin: () => null,
	setMenu: () => null,
	setDataConfig: () => null,
	menu:[],
	dataConfig:[]
};
const AuthContext = createContext<Auth.AuthContextType>(defaultValue);

export const AuthProvider = (props: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User.IRoot | undefined>(undefined);
	const [langCode, setLangCode] = useState<string>(i18n.language);
	const [menu, setMenu] = useState<MainMenu[]>([]);
	const [dataConfig, setDataConfig] = useState<any[]>([]);
	const [userLoading, setUserLoading] = useState(true);
	const [showAuthModal, setShowAuthModal] = useState("");
	const [allBookmark, setAllBookmark] = useState<string[]>([]);
	const [allApply, setAllApply] = useState<string[]>([]);
	const [allFollow, setAllFollow] = useState<string[]>([]);
	const [OAuthData, setOAuthData] = useState<Auth.IClientOAuth>({} as Auth.IClientOAuth);
	const [typeLogin, setTypeLogin] = useState<"keycloak" | "default">(
		typeof window !== "undefined" && localStorage.getItem("typeLogin")
			? (localStorage.getItem("typeLogin") as "keycloak" | "default")
			: "default"
	);
	const loadUserFromLocal = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			axios.defaults.headers.Authorization = `Bearer ${token}`;
			const { data: user } = await getUserMe();
			if (user) {
				await getUserProfile().then((response) => {
					if (user.systemRole === USER_ROLE.USER) user.profileUser = response.data?.data ?? response.data;
					else user.profileDoanhNghiep = response.data?.data ?? response.data;
					setUser(user);
				});
				return user;
			}
		}
		return {} as User.IRoot;
	};

	useEffect(() => {
		loadUserFromLocal()
			.then((user) => {
				if (user?.systemRole === USER_ROLE.USER) {
					getAllBookmark().then((res) =>
						setAllBookmark(res.data?.map((item: { idTinDang: string }) => item?.idTinDang))
					);
					getAllApply().then((res) => setAllApply(res.data?.map((item: { idTinDang: string }) => item?.idTinDang)));
					getAllFollow().then((res) => setAllFollow(res.data?.map((item: { idTheoDoi: string }) => item?.idTheoDoi)));
				}
			})
			.finally(() => setUserLoading(false));
		// getClientOAuth().then((res) => {
		// 	setOAuthData(res.data[0]);
		// });
	}, []);

	const handleLogin = (user: any, accessToken: any) => {
		if (accessToken) {
			localStorage.setItem("token", accessToken);
			axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
			if (user) {
				setUserLoading(true);
				getUserProfile()
					.then((response) => {
						if (user.systemRole === USER_ROLE.USER) user.profileUser = response.data;
						else user.profileDoanhNghiep = response.data;
						setUser(user);

						if (user?.systemRole === USER_ROLE.USER) {
							getAllBookmark().then((res) =>
								setAllBookmark(res.data?.map((item: { idTinDang: string }) => item?.idTinDang))
							);
							getAllApply().then((res) => setAllApply(res.data?.map((item: { idTinDang: string }) => item?.idTinDang)));
							getAllFollow().then((res) =>
								setAllFollow(res.data?.map((item: { idTheoDoi: string }) => item?.idTheoDoi))
							);
						}
					})
					.finally(() => setUserLoading(false));
			}
			return user as User.IRoot;
		}
	};

	const login = async (data: { username: string; password: string }) => {
		return userLogin(data).then(({ data: { user, accessToken } }) => {
			return handleLogin(user, accessToken);
		});
	};

	const oauthLogin = async (data: { accessToken: string; clientId: string }) => {
		return userLoginOAuth(data).then(({ data: { user, accessToken } }) => {
			return handleLogin(user, accessToken);
		});
	};

	const logout = async () => {
		return userLogout().then(() => {
			const id_token = localStorage.getItem("id_token");
			//  Logout keycloak
			if (id_token)
				getRequest(
					OAuthData.oauth.endSessionEndpoint,
					{ client_id: OAuthData.oauth.clientId, id_token_hint: id_token },
					{ enableNotify: false }
				);
			localStorage.removeItem("token");
			localStorage.removeItem("id_token");
			setUser(undefined);
			setTypeLogin("default");
			localStorage.removeItem("typeLogin");
			delete axios.defaults.headers.Authorization;

			return 1;
		});
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: !!user,
				userLoading,
				user,
				setUser,
				setLangCode,
				langCode,
				showAuthModal,
				setShowAuthModal,
				login,
				oauthLogin,
				logout,
				allApply,
				setAllApply,
				allBookmark,
				setAllBookmark,
				allFollow,
				setAllFollow,
				OAuthData,
				typeLogin: typeLogin,
				setTypeLogin,
				menu,
				setMenu,
				dataConfig,setDataConfig
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
