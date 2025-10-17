import axios from "axios";
import { BaiViet } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

export const getBaiVietList = async () => {
    return axios.get<BaiViet[]>(`${API_URL}/bai-viet/public/many`, {
    });
};

export const getBaiVietPage = async (page = 1, limit = 6) => {
    return axios.get<BaiViet[]>(`${API_URL}/bai-viet/public/page`,
        {
            params: {
                page,
                limit
            }
        }
    );
};

export const getBaiVietSlug = async (slug: string) => {
    return axios.get<BaiViet[]>(`${API_URL}/bai-viet/public/slug/${slug}`);
}

