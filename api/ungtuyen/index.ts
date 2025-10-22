import axios from "axios";
import { Ungtuyen, UngTuyenResponse } from "./type";
import { authHeaders } from "../token";

const API_URL = "https://ais.aisenote.com/ript/job-connect";


export const postUngtuyen = async (id: string, data: Ungtuyen) => {
    return axios.post<UngTuyenResponse>(
        `${API_URL}/ung-tuyen/tin-tuyen-dung/${id}`,
        data,
        {
            headers: {
                ...authHeaders(),
            },
        }
    );
};

export const getUngtuyenByUser = async () => {
    return axios.get<UngTuyenResponse>(
        `${API_URL}/ung-tuyen/page/me`,
        {
            headers: {
                ...authHeaders(),
            },
        }
    );
}

export const getUngtuyenById = async (id: string) => {
    return axios.get<UngTuyenResponse>(
        `${API_URL}/ung-tuyen/${id}`,
        {
            headers: {
                ...authHeaders(),
            },
        }
    );
}
