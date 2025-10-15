import axios from "axios";
import { Tintuyendungpublic } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

export const getTintuyendungList = async () => {
    return axios.get<Tintuyendungpublic[]>(`${API_URL}/tin-tuyen-dung/public/many`);
};


export const getTintuyendungPage = async (page = 1, limit = 6) => {
    return axios.get<Tintuyendungpublic[]>(`${API_URL}/tin-tuyen-dung/public/page`, {
        params: { page, limit },
    });
};


export const getTintuyendungDaDuyet = async () => {
    const condition = { trangThaiDuyet: "Đã duyệt" };
    return axios.get<Tintuyendungpublic[]>(`${API_URL}/tin-tuyen-dung/public/many`, {
        params: { condition: JSON.stringify(condition) },
    });
};

export const getTintuyendungById = async (id: string) => {
    const condition = { _id: id };
    return axios.get<Tintuyendungpublic[]>(`${API_URL}/tin-tuyen-dung/public/many`, {
        params: { condition: JSON.stringify(condition) },
    });
};

export const getTintuyendungByDoanhNghiep = async (doanhNghiepId: string) => {
    const condition = { doanhNghiepId };
    return axios.get<Tintuyendungpublic[]>(`${API_URL}/tin-tuyen-dung/public/many`, {
        params: { condition: JSON.stringify(condition) },
    });
};
