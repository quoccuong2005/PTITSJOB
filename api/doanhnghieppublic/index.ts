import axios from "axios";
import { NhaTuyenDung } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

export const getNhaTuyenDungList = async () => {
    return axios.get<NhaTuyenDung[]>(`${API_URL}/doanh-nghiep/public/many`)
};

export const getNhaTuyenDungPage = async (params: { page: number; limit: number }) => {
    return axios.get<NhaTuyenDung[]>(`${API_URL}/doanh-nghiep/public/page`,
        {
            params
        });
};
