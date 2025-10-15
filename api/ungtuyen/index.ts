import axios from "axios";
import { Ungtuyen, UngTuyenResponse } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

export const postUngtuyen = async (data: Ungtuyen) => {
    return axios.post<UngTuyenResponse>(`${API_URL}/ung-tuyen`, data);
};

