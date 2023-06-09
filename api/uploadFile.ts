import { axios } from ".";

export async function uploadFile(payload: { file: string | Blob; filename: string; public: any }) {
	const form = new FormData();
	form.append("file", payload?.file);
	form.append("filename", payload?.filename);
	form.append("public", payload?.public);
	return axios.post(`file/data/single`, form, { headers: { "Content-Type": "multipart/form-data" } });
}

export async function uploadImage(payload: { file: string | Blob; filename: string; public: any }) {
	const form = new FormData();
	form.append("file", payload?.file);
	form.append("filename", payload?.filename);
	form.append("public", payload?.public);
	return axios.post(`file/image/single`, form, { headers: { "Content-Type": "multipart/form-data" } });
}
