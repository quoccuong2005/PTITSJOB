import axios from "axios";
import { ApiOdooResponse, Course } from "./type";

export const getKhoaHocPhoBien = () => {
	return axios.get<ApiOdooResponse<Course>>(`https://lms.ptit.edu.vn/lms/api/courses/popular`);
};

export const getKhoaHocMoiNhat = () => {
	return axios.get<ApiOdooResponse<Course>>(`https://lms.ptit.edu.vn/lms/api/courses/latest`);
};

export const getKhoaHocMienPhi = () => {
	return axios.get<ApiOdooResponse<Course>>(`https://lms.ptit.edu.vn/lms/api/courses/free`);
};

export const getKhoaHocNangCao = () => {
	return axios.get<ApiOdooResponse<Course>>(`https://lms.ptit.edu.vn/lms/api/courses/advanced`);
};