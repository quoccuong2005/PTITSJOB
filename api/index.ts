import Axios, { AxiosError, Method } from "axios";
import * as qs from "qs";
import { toast } from "react-toastify";

export interface IApiResponse<T> {
	status: number;
	data: T;
	error?: any;
}

export interface IReqOptions {
	enableNotify?: boolean;
	ignoreErrorMessage?: string;
}

const urls = {
	test: `https://ais.aisenote.com/cong-thong-tin-viec-lam/`,
	development: "https://ais.aisenote.com/cong-thong-tin-viec-lam/",
	production: "https://ais.aisenote.com/cong-thong-tin-viec-lam/",
};

export const axios = Axios.create({
	baseURL: urls[process.env.NODE_ENV],
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

function apiCall(
	url: string,
	method: Method,
	data?: { [key: string]: any },
	options?: IReqOptions
): Promise<IApiResponse<any>> {
	return new Promise<any>((resolve, reject) => {
		axios({
			url,
			method,
			data,
			params: data && ["get", "GET"].includes(method) ? data : undefined,
		})
			.then((next) => {
				if (next.status === 200 || !next.data?.data?.result?.Error)
					resolve({
						status: next.status,
						data: next.data?.data ?? next.data,
					});
				else reject(next.data);
			})
			.catch((error) => {
				handleRequestError(error, options);
				reject(error.response);
			});
	});
}

function getRequest(
	url: string,
	condition?: { [key: string]: any },
	options?: IReqOptions
): Promise<IApiResponse<any>> {
	const query = qs.stringify(condition, {
		encodeValuesOnly: true, // prettify URL
	});
	return apiCall(url + `${query?`?${query}`:''}`, "GET", undefined, options);
}

function postRequest(url: string, data?: { [key: string]: any }, options?: IReqOptions): Promise<IApiResponse<any>> {
	return apiCall(url, "POST", data, options);
}

function putRequest(url: string, data?: { [key: string]: any }, options?: IReqOptions) {
	return apiCall(url, "PUT", data, options);
}

function deleteRequest(url: string, data?: { [key: string]: any }, options?: IReqOptions) {
	return apiCall(url, "DELETE", data, options);
}

function handleRequestError(error: AxiosError, options?: IReqOptions) {
	try {
		const enableNotify = options && options.enableNotify !== undefined ? options.enableNotify : true;
		const ignoreErrorMessage: string | undefined = options ? options.ignoreErrorMessage : undefined;

		if (!enableNotify) return;
		if (error.response) {
			const { status, data } = error.response;
			if (status === 401) {
				handleHttpUnauthorized();
			}

			// @ts-ignore
			let message = data.errorCode ?? data.errorDescription;
			if (typeof message === "string") {
				if (message !== ignoreErrorMessage) {
					const regx = new RegExp(/^(invalid authen|an invalid response|an unexpected|query did)/i);
					if (regx.test(message)) message = "Không nhận được phản hồi từ máy chủ, vui lòng kiểm tra đường truyền.";
					else if (["UNAUTHORIZED_WRONG_PASSWORD", "UNAUTHORIZED_USERNAME_NOT_FOUND"].includes(message))
						message = "Đăng nhập thất bại: Sai tài khoản hoặc mật khẩu";
					else if (message === "BAD_REQUEST_WRONG_OLD_PASSWORD") message = "Mật khẩu cũ không chính xác";
					toast.error(message);
				}
				return;
			}
		}
		toast.error("Không nhận được phản hồi từ máy chủ, vui lòng kiểm tra đường truyền.");
	} catch (e) {
		console.error(e);
		toast.error("Không nhận được phản hồi từ máy chủ, vui lòng kiểm tra đường truyền.");
	}
}

function handleHttpUnauthorized() {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
}

export { getRequest, postRequest, putRequest, deleteRequest, handleRequestError, handleHttpUnauthorized };
