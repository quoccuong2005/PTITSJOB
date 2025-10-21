import axios from "axios";
import { NhaTuyenDungDangKyRequest } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

export const postNhaTuyenDungDangKy = async (data: NhaTuyenDungDangKyRequest) => {
    return axios.post<NhaTuyenDungDangKyRequest[]>(`${API_URL}/nha-tuyen-dung-dang-ky/public/dang-ky`, data)
};

export const postNhaTuyenDungXacthuc = async (email: string) => {
    return axios.post<{ verifyCode: string }>(
        `${API_URL}/nha-tuyen-dung-dang-ky/public/dang-ky/xac-thuc-email`,
        { email: email }
    );
};

