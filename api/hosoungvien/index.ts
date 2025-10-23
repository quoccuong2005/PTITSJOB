import axios from "axios";
import { HosoungvienResponse } from "./type";
import { authHeaders } from "../token";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

export const getHosoungvien = async () => {
    return axios.get<HosoungvienResponse>(
        `${API_URL}/ung-tuyen/nha-tuyen-dung/page/me`,

        {
            headers: {
                ...authHeaders(),
            },
        }
    );
};

export const putTrangthaiungvien = async (id: string, data: { trangThaiUngTuyen: string }) => {
    return axios.put(
        `${API_URL}/ung-tuyen/nha-tuyen-dung/ung-tuyen/${id}`,
        data,
        {
            headers: {
                ...authHeaders(),
            },
        }
    );
}




