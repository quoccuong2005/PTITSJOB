import axios from "axios";
import { Ungtuyen, UngTuyenResponse } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpTHJUMWNscEViMUxtWFhWUEhyMlV2ZWE3Y2hUWTd3bU1MWEppSnBPcWFJIn0.eyJleHAiOjE3NjA4NTk1NDYsImlhdCI6MTc2MDg1OTMwNiwiYXV0aF90aW1lIjoxNzYwODQzNDU5LCJqdGkiOiJvbnJ0cnQ6MDYxZGViZDUtNWZhMS1mNDcwLTA3MTQtYzdmMDg5Nzk1NDg1IiwiaXNzIjoiaHR0cHM6Ly9zc28ucmlwdC52bi9yZWFsbXMvcmlwdCIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiI0YThlOTQxMS1iMTE4LTRjNDAtYTMyMy05NmVlNzg1YWFkZGYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJyaXB0LWNvbm5lY3QiLCJzaWQiOiJjNGQ3NTgwMS0yMmNmLTIyZTgtYWUyNS05MmM2ZWVlYjIwNjMiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlFVQU5fVFJJX1ZJRU4iLCJDQU5fQk8iLCJvZmZsaW5lX2FjY2VzcyIsIkdVRVNUIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLXJpcHQiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctcmVhbG0iLCJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlThuqROIE5HVVnhu4ROIEjhu5JORyBBTkgiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0YW5uaGFAcHRpdC5lZHUudm4iLCJnaXZlbl9uYW1lIjoiVOG6pE4iLCJmYW1pbHlfbmFtZSI6Ik5HVVnhu4ROIEjhu5JORyBBTkgiLCJlbWFpbCI6InRyYW5nbG91MTAwM0BnbWFpbC5jb20ifQ.o-lKf_5WWS29dLTcCqBoyZjyWTN11sa3Yvvq2VMHjTINWeczqu5ed4V2CqzxaSLoOIQsHd07oTZPggYr-4W9iYMencaFDkB_lz4G1XfzUOtMapVKnw4XqXo9y44MStXVpmhFGzLk49qC4h_S94f6GIyvrK-pqbJqEVMzPooyo7vxJep9AVTQZwYmUa6OgtibOvlpcBgsImCR5_-cQwqs1sT0cf6MwY99wBkzWj5jTbl7j_XLFwWM8SVNRDDLLFC8jeTmuP3__k3FUsJXDildzdxG2wNttVG7gXpfO4081kPZ_lA8vowYmCPdn0Y8kvNK9hSXiuVsYJRGgRInkLj-4g"

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
