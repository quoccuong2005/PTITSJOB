import axios from "axios";
import { Ungtuyen, UngTuyenResponse } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpTHJUMWNscEViMUxtWFhWUEhyMlV2ZWE3Y2hUWTd3bU1MWEppSnBPcWFJIn0.eyJleHAiOjE3NjExMjM1MzQsImlhdCI6MTc2MTEyMzI5NCwiYXV0aF90aW1lIjoxNzYxMTIyNjQ1LCJqdGkiOiJvbnJ0cnQ6ZmJlYzEyZDktYWI0Ni01YzViLTY3NDctNmE0NDYyYTgxNGUyIiwiaXNzIjoiaHR0cHM6Ly9zc28ucmlwdC52bi9yZWFsbXMvcmlwdCIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiI0YThlOTQxMS1iMTE4LTRjNDAtYTMyMy05NmVlNzg1YWFkZGYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJyaXB0LWNvbm5lY3QiLCJzaWQiOiJlNTUyOTNmNi0yMDVjLTQyNTUtNWY1Yy03MWEyZDUyMmNlNGUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlFVQU5fVFJJX1ZJRU4iLCJDQU5fQk8iLCJvZmZsaW5lX2FjY2VzcyIsIkdVRVNUIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLXJpcHQiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctcmVhbG0iLCJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlThuqROIE5HVVnhu4ROIEjhu5JORyBBTkgiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0YW5uaGFAcHRpdC5lZHUudm4iLCJnaXZlbl9uYW1lIjoiVOG6pE4iLCJmYW1pbHlfbmFtZSI6Ik5HVVnhu4ROIEjhu5JORyBBTkgiLCJlbWFpbCI6InRyYW5nbG91MTAwM0BnbWFpbC5jb20ifQ.ojh1KuQxbBMrqlLQ4HcTUyrTpGU8SdcY3hoijJfg1oKL_nriD5585SHM8VNm6ohiBZy-FRmDiARQFfJJNwDjGZ3Oiy2Q7Gw7ASHMwdqSo4286WKArbpf2vK5i1HgYutWrhVEHu0IwVqYQusHoZ18OhgHEnRt_e7KG6KJFIX5IdHbU3cAVcT4yUmfk0u4qOoWizntk22J-s2TJxCI8RihZEB4Rq_LCCSE-kIQeYiTT7uH92QGrfmiOxYhkQYry1RvUYydLmatK95OC_6sjMpj4k6OiK8SC18Tql5PFLtwSgEUSW_oUdil0SEu1WuhUTtb3eO-gLgEFSR5MiouGqLcnA"

export const postUngtuyen = async (id: string, data: Ungtuyen) => {
    return axios.post<UngTuyenResponse>(
        `${API_URL}/ung-tuyen/tin-tuyen-dung/${id}`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const getUngtuyenByUser = async () => {
    return axios.get<UngTuyenResponse>(
        `${API_URL}/ung-tuyen/page/me`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
}

export const getUngtuyenById = async (id: string) => {
    return axios.get<UngTuyenResponse>(
        `${API_URL}/ung-tuyen/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
}
