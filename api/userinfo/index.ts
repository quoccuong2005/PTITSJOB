import axios from "axios";
import { authHeaders } from "../token";
const API_URL = "https://sso.ript.vn/realms/ript/protocol/openid-connect/userinfo";

export const getUserInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}`, {
            headers: {
                ...authHeaders(),
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user info:", error);
        throw error;
    }
};
