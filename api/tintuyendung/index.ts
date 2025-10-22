import axios from "axios";
import { TinTuyenDungDangTin, TinTuyenDungResponse, Tintuyendungdoanhnghiep } from "./type";
import { authHeaders } from "../token";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpTHJUMWNscEViMUxtWFhWUEhyMlV2ZWE3Y2hUWTd3bU1MWEppSnBPcWFJIn0.eyJleHAiOjE3NjExMzA4MTUsImlhdCI6MTc2MTEzMDU3NSwiYXV0aF90aW1lIjoxNzYxMTMwNTczLCJqdGkiOiJvbnJ0YWM6OWYzZDMzZDYtM2E5Ni0zZDhmLWE3YWUtMzk5NzEyODkwNGE4IiwiaXNzIjoiaHR0cHM6Ly9zc28ucmlwdC52bi9yZWFsbXMvcmlwdCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJlYWI0OTg3Yi04NzVhLTRlMTMtYmMzNC01ODdhYTY4MTQ3MDgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJyaXB0LWNvbm5lY3QiLCJzaWQiOiJlOGVjNDZjMy02MzU4LTQzMTgtNWQ4Ni1mOGUwZjZhN2FlOTYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIk5IQV9UVVlFTl9EVU5HIiwib2ZmbGluZV9hY2Nlc3MiLCJHVUVTVCIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1yaXB0Il19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoic3RyaW5nIHN0cmluZyIsInByZWZlcnJlZF91c2VybmFtZSI6ImRvYW5obmdoaWVwMUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoic3RyaW5nIiwiZmFtaWx5X25hbWUiOiJzdHJpbmciLCJlbWFpbCI6ImRvYW5obmdoaWVwMUBnbWFpbC5jb20ifQ.MEqPoBpLCcVOXc6d4rI5pzwnhnq1h-G7hMwDBlw1h7stspuzURJ2aO8cxr91spdHDP8cEP2cgzXMf-n_jYJ6l3SnW1rYXQek9Ukm3wAWZeyU7l0a5fI2-HAVoF9KO0kOdCVAMDs8li6Uioi3990OkjWnEh4mSyjPgtPgrx0-7SSn0QyufuECVEPzz-FDkNDwarQ2dE3L-liplTNAACUrlOyYpzWNBfOj_tCBphITYnyYLYjL19a6IVrLeYAOjmaOf1l0olDeqHEChFl1cqr4lKqhVgVV1lHBCj6F-aJAniyb0BZ_txfJHvpHLEp9C-uOenFt5MuzM3jjEV3pARK0Ow"

export const postUngtuyen = async (data: TinTuyenDungDangTin) => {
    return axios.post<TinTuyenDungResponse>(
        `${API_URL}/tin-tuyen-dung/dang-tin`,
        data,
        {
            headers: {
                ...authHeaders(),
            },
        }
    );
};


export const getTintuyendungPageDoanhnghiep = async (page = 1, limit = 6) => {
    return axios.get<Tintuyendungdoanhnghiep[]>(`${API_URL}/tin-tuyen-dung/page`, {
        params: { page, limit },
        headers: {
            ...authHeaders(),
        },
    });

};
