import axios from "axios";
import { NhaTuyenDung } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

export const getNhaTuyenDungList = async (id: string) => {
    const condition = { id };
    return axios.get<NhaTuyenDung[]>(`${API_URL}/doanh-nghiep/public/many`, {
        params: { condition: JSON.stringify(condition) },
    })
};

export const getNhaTuyenDungPage = async (params: { page: number; limit: number }) => {
    return axios.get<NhaTuyenDung[]>(`${API_URL}/doanh-nghiep/public/page`,
        {
            params
        });
};

export const getNhaTuyenDungById = async (doanhNghiepId: string) => {
    const condition = { doanhNghiepId };
    return axios.get<NhaTuyenDung[]>(`${API_URL}/doanh-nghiep/public/{doanhNghiepId}`, {
        params: { condition: JSON.stringify(condition) },
    });
};
