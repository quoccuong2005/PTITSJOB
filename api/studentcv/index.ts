import axios from "axios";
import { StudentCvCreateRequest, StudentCvResponse } from "./type";

const API_URL = "https://ais.aisenote.com/ript/job-connect";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJpTHJUMWNscEViMUxtWFhWUEhyMlV2ZWE3Y2hUWTd3bU1MWEppSnBPcWFJIn0.eyJleHAiOjE3NjExMzIyMDksImlhdCI6MTc2MTEzMTk2OSwiYXV0aF90aW1lIjoxNzYxMTMxOTY4LCJqdGkiOiJvbnJ0YWM6OTgzMTgxZGUtODcxMS04NjQyLTNkZTUtYjc1NTgyNGYyNDNiIiwiaXNzIjoiaHR0cHM6Ly9zc28ucmlwdC52bi9yZWFsbXMvcmlwdCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJlYWI0OTg3Yi04NzVhLTRlMTMtYmMzNC01ODdhYTY4MTQ3MDgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJyaXB0LWNvbm5lY3QiLCJzaWQiOiI0YzM3NmMyOS00NDZlLTIyZTEtMWE5Zi0zNTVjOWQ5ZTg2MjUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIk5IQV9UVVlFTl9EVU5HIiwib2ZmbGluZV9hY2Nlc3MiLCJHVUVTVCIsInVtYV9hdXRob3JpemF0aW9uIiwiZGVmYXVsdC1yb2xlcy1yaXB0Il19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoic3RyaW5nIHN0cmluZyIsInByZWZlcnJlZF91c2VybmFtZSI6ImRvYW5obmdoaWVwMUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoic3RyaW5nIiwiZmFtaWx5X25hbWUiOiJzdHJpbmciLCJlbWFpbCI6ImRvYW5obmdoaWVwMUBnbWFpbC5jb20ifQ.oDWePuU9-D3MnDUf08JrMgKyL6ZXlAfITwtdnGHxFyjoIsJOWkZaihQteMXyAk4EIFdv2XRAmKnzy68xdMT7XUQ5N0Lpu-BKbD49balHC_IQC_12mTVTYviXo2BSDtgT_rjeK36uYgcC_QcpL2fi7Id2dM0f5swV03YQhF-fB97zqAubgv9oU1wfJ-IUlDZ-4hBrtfeLgRIKQ7-wJKbNr3xAA51iyQ1mEQxUmBLee7UdrvuwIh9ZZkX1ltABIHTDUoboy60D3dWNVIM9nA04inMV8QraHLaiv2LfZNwMnFr4Z_2V1CGFvvPRy_wegdxzc5cs2lyq0E_pPD0TX6vcpQ";

export const postLuumauCV = async (data: StudentCvCreateRequest) => {
    return axios.post<StudentCvResponse>(
        `${API_URL}/student-cv`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};


