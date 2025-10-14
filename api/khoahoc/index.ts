import axios from "axios";
import { ApiOdooResponse, Course } from "./type";
import { ELang } from "../../utils/constant";

export interface CourseSearchParams {
	q?: string;
	page?: number;
	limit?: number;
	order?: string;
	lang?: string;
}
export const getAllKhoaHoc = (params: CourseSearchParams) => {
	return axios.get<ApiOdooResponse<Course>>(`https://lms.ptit.edu.vn/lms/api/courses/search`, {
		params: params
	});
};

export const getKhoaHocPhoBien = (lang?: ELang) => {
	return axios.get<ApiOdooResponse<Course>>(`https://lms.ptit.edu.vn/lms/api/courses/popular`, {
		params: {
			lang: lang
		}
	});
};

export const getKhoaHocMoiNhat = (lang?: ELang) => {
	return axios.get<ApiOdooResponse<Course>>(`https://lms.ptit.edu.vn/lms/api/courses/latest`,
		{
			params: {
				lang: lang
			}
		}
	);
};

export const getKhoaHocMienPhi = (lang?: ELang) => {
	return axios.get<ApiOdooResponse<Course>>(`https://lms.ptit.edu.vn/lms/api/courses/free`, {
		params: {
			lang: lang
		}
	});
};

export const getKhoaHocNangCao = (lang?: ELang) => {
	return axios.get<ApiOdooResponse<Course>>(`https://lms.ptit.edu.vn/lms/api/courses/advanced`, {
		params: {
			lang: lang
		}
	});
};