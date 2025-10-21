import axios from "axios";
import { Ungtuyen, UngTuyenResponse } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpTHJUMWNscEViMUxtWFhWUEhyMlV2ZWE3Y2hUWTd3bU1MWEppSnBPcWFJIn0.eyJleHAiOjE3NjEwNDY2OTMsImlhdCI6MTc2MTA0NjQ1MywiYXV0aF90aW1lIjoxNzYxMDIzODM4LCJqdGkiOiJvbnJ0cnQ6OWU0ZjkzZGUtNDE1Ny02YTc2LTlhYjItNWE5Nzg0YWUzMGM3IiwiaXNzIjoiaHR0cHM6Ly9zc28ucmlwdC52bi9yZWFsbXMvcmlwdCIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiI0YThlOTQxMS1iMTE4LTRjNDAtYTMyMy05NmVlNzg1YWFkZGYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJyaXB0LWNvbm5lY3QiLCJzaWQiOiJiNTI2YmRkMy02MWM5LTA1ZWMtY2E5ZS1lNDUzMzhmNjA3OTciLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlFVQU5fVFJJX1ZJRU4iLCJDQU5fQk8iLCJvZmZsaW5lX2FjY2VzcyIsIkdVRVNUIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLXJpcHQiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctcmVhbG0iLCJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlThuqROIE5HVVnhu4ROIEjhu5JORyBBTkgiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0YW5uaGFAcHRpdC5lZHUudm4iLCJnaXZlbl9uYW1lIjoiVOG6pE4iLCJmYW1pbHlfbmFtZSI6Ik5HVVnhu4ROIEjhu5JORyBBTkgiLCJlbWFpbCI6InRyYW5nbG91MTAwM0BnbWFpbC5jb20ifQ.VgXL8xPeIFzXte8dF9tk8h3RzfYTgVlLC4LynIXHmOwI5H16NfjXXK4L6Ve0JejbwMEemQzodR5FJw91c8QDbITsyfsEyfAwn4gPN9pFBatmSIWAZILRvVAzTHyvTZY_Pzu-PlwM0Um5yKui6aoS3_g4r5xXD3IZ5GApmRZZjdR4Bq3YRCvKqTLXiWASbJNhKJ1Kk4czq1BGqycIU22tIVG09m6BA7H2ZDW-apNz671zfiyfwQXzCVO9Z0xQrPZeEW19E1V4dlKYtsBllrMKOWZVeSWknziHr0CwFy1757FuRO1P2mMd29EcF82W_VrnOKtqgzcnFGtxRiqj-vTaAw"

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
