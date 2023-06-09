import { ETrangThaiBaiDang, ETrangThaiUngVien } from "../../utils/constant";
import { deleteRequest, getRequest, IApiResponse, postRequest, putRequest } from "../index";
import { BaiDang } from "./type";

export const getBaiDangPageable = (condition?: { [key: string]: any }): Promise<IApiResponse<BaiDang.IResponse>> => {
	return getRequest("dang-ung-tuyen/list-bai-dang-doanh-nghiep", condition);
};

export const getAdminBaiDangPageable = (data: any): Promise<IApiResponse<BaiDang.IResponse>> => {
	const { condition, ...other } = data;
	return getRequest("dang-ung-tuyen", { ...other, condition: JSON.stringify(condition) });
};

export const getBaiDangDetailAuth = (id: string): Promise<IApiResponse<BaiDang.IRecord>> => {
	return getRequest(`dang-ung-tuyen/${id}/chi-tiet-bai-dang`);
};

export const getBaiDangDetail = (id: string): Promise<IApiResponse<BaiDang.IRecord>> => {
	return getRequest(`dang-ung-tuyen/public/${id}/chi-tiet-bai-dang`);
};

export const postBaiDang = (data: BaiDang.IRecord) => {
	return postRequest("dang-ung-tuyen", data);
};

export const putBaiDang = (data: BaiDang.IRecord) => {
	return putRequest(`dang-ung-tuyen/${data._id}/update-bai-dang-tuyen`, data);
};

export const deleteBaiDang = (data: BaiDang.IRecord) => {
	return deleteRequest(`dang-ung-tuyen/${data._id}/xoa-bai-dang/`);
};

export const searchBaiDang = (data: any): Promise<IApiResponse<BaiDang.IResponse>> => {
	const { condition, ...other } = data;
	return getRequest("dang-ung-tuyen/public", { ...other, condition: JSON.stringify(condition) });
};

// Elastic search
export const searchBaiDangElastic = (data: any): Promise<IApiResponse<BaiDang.IResponseElastic>> => {
	return postRequest("dang-ung-tuyen/public/search", data);
};

export const getBaiDangCuaCongTy = (idNguoiDang: string, data?: any): Promise<IApiResponse<BaiDang.IResponse>> => {
	const { condition, ...other } = data;
	return getRequest("dang-ung-tuyen/public/tim-viec", {
		...other,
		condition: JSON.stringify({ ...condition, idNguoiDang }),
	});
};

export const getMyBaiDang = (type: "da-luu" | "ung-tuyen", data?: any): Promise<IApiResponse<BaiDang.IResponse>> => {
	const { condition, ...other } = data;
	return getRequest(`dang-ung-tuyen/list-my-${type === "da-luu" ? "quan-tam" : "ung-tuyen"}`, {
		...other,
		condition: JSON.stringify(condition),
	});
};

export const getUngVienTheoViecLam = (
	idViecLam: string,
	data?: any
): Promise<IApiResponse<BaiDang.IResponseUngVien>> => {
	const { condition, ...other } = data;
	return getRequest(`dang-ung-tuyen/${idViecLam}/list-ung-vien`, {
		...other,
		condition: JSON.stringify(condition),
	});
};

export const luuBaiDang = (data: { _id: string }) => {
	return postRequest(`dang-ung-tuyen/${data._id}/me/luu-tin-dang`);
};

export const xoaLuuBaiDang = (data: { _id: string }) => {
	return deleteRequest(`dang-ung-tuyen/${data._id}/me/xoa-tin-luu`);
};

export const ungTuyenBaiDang = (data: BaiDang.IRecord) => {
	return postRequest(`dang-ung-tuyen/${data._id}/me/ung-tuyen`);
};

export const huyUngTuyenBaiDang = (data: BaiDang.IRecord) => {
	return deleteRequest(`dang-ung-tuyen/${data._id}/me/bo-ung-tuyen`);
};

export const theoDoiCongTy = (idCongTy: string) => {
	return postRequest(`dang-ung-tuyen/${idCongTy}/me/theo-doi`);
};

export const huyTheoDoiCongTy = (idCongTy: string) => {
	return deleteRequest(`dang-ung-tuyen/${idCongTy}/me/bo-theo-doi`);
};

export const getAllBookmark = () => {
	return getRequest("dang-ung-tuyen/all-bai-luu");
};

export const getAllApply = () => {
	return getRequest("dang-ung-tuyen/all-ung-tuyen");
};

export const getAllFollow = () => {
	return getRequest("dang-ung-tuyen/all-theo-doi");
};

export const adminDuyetBaiDang = (listIdBai: string[], trangThaiBaiDang: ETrangThaiBaiDang) => {
	return putRequest(`dang-ung-tuyen/duyet-bai-dang-tuyen`, { listIdBai, trangThaiBaiDang });
};

export const putDuyetUngVien = (idTinDang: string, idUngVien: string, trangThai: ETrangThaiUngVien) => {
	return putRequest(`dang-ung-tuyen/${idTinDang}/duyet-ung-vien`, {
		listUngTuyen: [{ idUngVien, trangThai }],
	});
};
