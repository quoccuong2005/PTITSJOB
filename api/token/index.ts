// Helper để quản lý token trong localStorage
const ACCESS_TOKEN_KEY = "access_token";

export const getToken = (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setToken = (token: string | null) => {
    if (typeof window === "undefined") return;
    if (token) localStorage.setItem(ACCESS_TOKEN_KEY, token);
    else localStorage.removeItem(ACCESS_TOKEN_KEY);
};

// Trả về headers chứa Authorization nếu có token
export const authHeaders = () => {
    const token = getToken();
    console.log("Auth token:", token);
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export default { getToken, setToken, authHeaders };

