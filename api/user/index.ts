import { EChungThuc } from "../../utils/constant";
import { getRequest, IApiResponse, postRequest, putRequest } from "../index";
import { User } from "./type";

export const userLogin = (data: { username: string; password: string }) => {
	return postRequest("auth/login/web", data);
};

export const userResetPassword = (email: string) => {
	return getRequest("user/public/quen-mat-khau", { email });
};

export const userConfirmEmail = (token: any) => {
	return getRequest("user/public/confirm", { token });
};
export const userResendEmail = (email: string) => {
	return getRequest("user/public/resend-confirm", { email });
};

export const userLogout = () => {
	return postRequest("auth/logout");
};

export const getUserMe = (): Promise<IApiResponse<User.IRoot>> => {
	return getRequest(`user/me`);
};

export const getUserProfile = (): Promise<IApiResponse<any>> => {
	return getRequest(`profile/me`);
};

export const getUserProfileById = (idUser: string): Promise<IApiResponse<User.IProfile>> => {
	return getRequest(`profile/public/${idUser}/thong-tin-user`);
};

export const getCongTyDetail = (id: string): Promise<IApiResponse<User.IProfileDoanhNghiep>> => {
	return getRequest(`profile/public/${id}/thong-tin-nha-tuyen-dung`);
};

export const saveUserProfile = (
	data: Partial<User.IProfile | User.IProfileDoanhNghiep>,
	hasProfile: boolean,
	isDoanhNghiep?: boolean
): Promise<IApiResponse<User.IProfile | User.IProfileDoanhNghiep>> => {
	if (!isDoanhNghiep)
		if (!hasProfile) return postRequest("profile/thong-tin-ca-nhan", data);
		else return putRequest("profile/me", data);
	else if (!hasProfile) return postRequest("profile/thong-tin-doanh-nghiep", data);
	else return putRequest("profile/thong-tin-doanh-nghiep", data);
};

export const userChangePassword = (data: User.TChangePassword) => {
	return postRequest("user/me/change/password", data);
};

export const searchCongTy = (data: any): Promise<IApiResponse<User.IResponse>> => {
	const { condition, ...other } = data;
	return getRequest("profile/public/pageable-doanh-nghiep-public", {
		...other,
		condition: JSON.stringify(condition),
	});
};

export const searchCongTyElastic = (data: any): Promise<IApiResponse<User.IResponseElastic>> => {
	return postRequest("profile/public/search", data);
};

export const doanhNghiepGuiYeuCauXacThuc = (): Promise<IApiResponse<any>> => {
	return putRequest("profile/doanh-nghiep-gui-yeu-cau-xac-thuc", { yeuCauXacThuc: true });
};

export const adminTiepNhanXacThuc = (idCongTy: string): Promise<IApiResponse<any>> => {
	return putRequest(`profile/${idCongTy}/tiep-nhan-xac-thuc`, { tiepNhanXacThuc: true });
};

export const adminXacThuc = (
	idCongTy: string,
	chungThuc: EChungThuc,
	trangThaiUpdate: boolean
): Promise<IApiResponse<any>> => {
	return putRequest(`profile/${idCongTy}/xet-duyet`, { chungThuc, trangThaiUpdate });
};

export const getUserPageable = (data?: any): Promise<IApiResponse<User.IResponseUser>> => {
	const { condition, ...other } = data;
	return getRequest(`profile/pageable`, {
		...other,
		condition: JSON.stringify(condition),
	});
};

export const getDoanhNghiepPageable = (data?: any): Promise<IApiResponse<User.IResponse>> => {
	const { condition, ...other } = data;
	return getRequest(`profile/pageable-doanh-nghiep`, {
		...other,
		condition: JSON.stringify(condition),
	});
};

export const putDoanNghiepHangDau = (id: string, congTyHangDau: boolean) => {
	return putRequest(`profile/${id}/doanh-nghiep-hang-dau`, { congTyHangDau });
};

export const adminGetThongTinDoanhNghiep = (id: string): Promise<IApiResponse<User.IProfileDoanhNghiep>> => {
	return getRequest(`profile/${id}/admin/thong-tin-nha-tuyen-dung`);
};
