import axios from "axios";
import { TinTuyenDungDangTin, TinTuyenDungResponse, Tintuyendungdoanhnghiep } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpTHJUMWNscEViMUxtWFhWUEhyMlV2ZWE3Y2hUWTd3bU1MWEppSnBPcWFJIn0.eyJleHAiOjE3NjEwMzUwNTMsImlhdCI6MTc2MTAzNDgxMywiYXV0aF90aW1lIjoxNzYxMDIzODM4LCJqdGkiOiJvbnJ0cnQ6MTJmZDViMzMtYzFlZS01YzFmLTljZmQtNDg1NzhhODg2NDMzIiwiaXNzIjoiaHR0cHM6Ly9zc28ucmlwdC52bi9yZWFsbXMvcmlwdCIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiI0YThlOTQxMS1iMTE4LTRjNDAtYTMyMy05NmVlNzg1YWFkZGYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJyaXB0LWNvbm5lY3QiLCJzaWQiOiJiNTI2YmRkMy02MWM5LTA1ZWMtY2E5ZS1lNDUzMzhmNjA3OTciLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlFVQU5fVFJJX1ZJRU4iLCJDQU5fQk8iLCJvZmZsaW5lX2FjY2VzcyIsIkdVRVNUIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLXJpcHQiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctcmVhbG0iLCJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlThuqROIE5HVVnhu4ROIEjhu5JORyBBTkgiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0YW5uaGFAcHRpdC5lZHUudm4iLCJnaXZlbl9uYW1lIjoiVOG6pE4iLCJmYW1pbHlfbmFtZSI6Ik5HVVnhu4ROIEjhu5JORyBBTkgiLCJlbWFpbCI6InRyYW5nbG91MTAwM0BnbWFpbC5jb20ifQ.hYVWwXU8Y_U1KoQyvHLP3lMaf2dycJM4yrLDbRfzQYQOnA94w9tQcYG94jCdMTMh1mUxU1Vn3fHyDfS2dCzmgHPltbUpsa-6B4Bugq8mn3dA6xuejSquuV5LRdLnr-wDN2HN7Csm-j5maNqoj50ArTfgcB4QoBK4zVvGJEtECgLvIDwh4tE39xvMUDTxP_nAJZ1N69FP7BnsvExH0_9ERj_Z_WdKPvaj8U2gmDZ6ZD5aFuuFlhnVAr8UIgGKK3WoWelY3kdD0dTBrtm_ju7rDN6zjW63JDECWu9aPqKCzlJbPBXxNRJ_SuWa2FPtK-w4gEr_uRIgX8rDn8CGlNx9Yw"

export const postUngtuyen = async (data: TinTuyenDungDangTin) => {
    return axios.post<TinTuyenDungResponse>(
        `${API_URL}/tin-tuyen-dung/dang-tin`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};


export const getTintuyendungPageDoanhnghiep = async (page = 1, limit = 6) => {
    return axios.get<Tintuyendungdoanhnghiep[]>(`${API_URL}/tin-tuyen-dung/page`, {
        params: { page, limit },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

};
