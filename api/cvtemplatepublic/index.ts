import axios from "axios";
import { CVTemplatePublic } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

export const getCVTemplatesList = async () => {
    return axios.get<CVTemplatePublic[]>(`${API_URL}/cv-template/public/many`)
};

export const getCVTemplatesPage = async (page = 1, limit = 6) => {
    return axios.get<CVTemplatePublic[]>(`${API_URL}/cv-template/public/page`,
        {
            params: {
                page,
                limit
            }
        });
};
