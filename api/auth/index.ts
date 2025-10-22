import { getRequest, IApiResponse, postRequest } from "..";
import { Auth } from "./type";

export const getClientOAuth = (): Promise<IApiResponse<Auth.IClientOAuth[]>> => {
	return getRequest("client/public/oauth");
};

export const userLoginOAuth = (data: { accessToken: string; clientId: string }) => {
	return postRequest("auth/login/client/oauth", data);
};

export const getUserInfo = () => {
	return getRequest("https://sso.ript.vn/realms/ript/protocol/openid-connect/userinfo");
};