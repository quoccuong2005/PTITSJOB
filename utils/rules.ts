import { inputFormat } from "./util";

export const rules = {
	required: {
		required: "Bắt buộc",
		validate: {
			whitespaces: (value: any) =>
				typeof value === "string" ? !!value.trim() || "Toàn ký tự trắng không hợp lệ" : true,
		},
	},

	noWhiteSpaces: {
		validate: { whitespaces: (value: any) => !!value.trim() || "Toàn ký tự trắng không hợp lệ" },
	},

	minMax: (min: number, max: number) => ({
		min: {
			value: min,
			message: `Chỉ được nhập từ ${inputFormat(min)} đến ${inputFormat(max)}`,
		},
		max: {
			value: max,
			message: `Chỉ được nhập từ ${inputFormat(min)} đến ${inputFormat(max)}`,
		},
	}),

	maxLength: (length: number) => ({
		maxLength: {
			value: length,
			message: `Chỉ được nhập tối đa ${inputFormat(length)} ký tự`,
		},
	}),

	minLength: (length: number) => ({
		minLength: {
			value: length,
			message: `Tối thiểu ${inputFormat(length)} ký tự`,
		},
	}),

	checkConfirmPassword: (value: string) => ({
		validate: (text: string) => {
			console.log({ text, value });
			return text === value || "Mật khẩu xác nhận không chính xác";
		},
	}),

	email: {
		pattern: {
			value:
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: "Địa chỉ email không đúng định dạng",
		},
	},

	sdt: {
		pattern: {
			value: /^(09|03|07|08|05|01|02|04|06){1}[0-9]{8}$/,
			message: "Số điện thoại không đúng định dạng",
		},
	},

	password: {
		pattern: {
			value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*~(_)+/<>?}{:;",.=|])(?=.{8,})/,
			message: "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ thường, hoa, số và ký tự đặc biệt",
		},
	},

	httpUrl: {
		pattern: {
			value: /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
			message: "Địa chỉ không đúng định dạng",
		},
	},
};
