import axios from "axios";
import { ip } from "../api/ip";

export const vndFormat = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });

export const hienThiMucLuong = (baiDang: { mucLuongToiThieu?: number; mucLuongToiDa?: number }) =>
	baiDang.mucLuongToiThieu &&
	baiDang.mucLuongToiThieu > 0 &&
	baiDang.mucLuongToiDa &&
	baiDang.mucLuongToiDa <= 200000000
		? `${Math.round(baiDang.mucLuongToiThieu / 100000) / 10} - ${Math.round(baiDang.mucLuongToiDa / 100000) / 10} triệu`
		: baiDang.mucLuongToiThieu && baiDang.mucLuongToiThieu > 0
		? `Từ ${Math.round(baiDang.mucLuongToiThieu / 100000) / 10} triệu`
		: baiDang.mucLuongToiDa && baiDang.mucLuongToiDa <= 200000000
		? `Đến ${Math.round(baiDang.mucLuongToiDa / 100000) / 10} triệu`
		: "Thỏa thuận";

export const hienThiDiaChi = (diaChi: any) =>
	[diaChi?.soNhaTenDuong, diaChi?.tenPhuongXa, diaChi?.tenQuanHuyen, diaChi?.tenTinh].filter((item) => item).join(", ");

export const hienThiWebsite = (url: string) => url.split("/").slice(0, 3).join("/");

/**
 * Number to currency format
 * @param number value
 */
export const inputFormat = (value: number): string => `${value}`.replace(/(?=(\d{3})+(?!\d))\B/g, ",");

/**
 * Input value to number
 * @param string value
 */
export const inputParse = (value: string): number => +value.replace(/\₫\s?|(,*)[^\d]/g, "");

const map = {
	a: "[aàáâãăăạảấầẩẫậắằẳẵặ]",
	e: "[eèéẹẻẽêềềểễệế]",
	i: "[iìíĩỉị]",
	o: "[oòóọỏõôốồổỗộơớờởỡợ]",
	u: "[uùúũụủưứừửữự]",
	y: "[yỳỵỷỹý]",
	d: "[dđ]",
	" ": " ",
};

function render(value: string) {
	// phục vụ hàm toRegex bên dưới
	let result = "";
	for (let char of value) {
		result += (map as any)[char] || char;
	}
	return result;
}

// page: 1,
// limit: 10,
// cond: {
//   hoTen: toRegex('h')
// }

export function Format(str: string) {
	// xóa hết dấu + đưa về chữ thường
	if (!str) return "";
	return str
		.toString()
		.trim()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/đ/g, "d");
}

export function toRegex(value: any) {
	if (!value) return undefined;
	// convert từ string sang dạng regex.
	return { $regex: `.*${render(Format(value))}.*`, $options: "i" };
}

export function Object2Regex(obj: Record<string, any>) {
	// convert từ string sang dạng regex.
	return Object.keys(obj).map((key) => ({
		[key]: { $regex: `.*${render(Format(obj[key]))}.*`, $options: "i" },
	}));
}
export function removeVietnameseTones(str: string, isXoaKhoangTrang?: boolean) {
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
	str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
	str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
	str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
	str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
	str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
	str = str.replace(/Đ/g, "D");
	// Some system encode vietnamese combining accent as individual utf-8 characters
	// Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
	str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
	str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
	// Remove extra spaces
	// Bỏ các khoảng trắng liền nhau
	str = str.replace(/ + /g, " ");
	str = str.trim();
	// Remove punctuations
	// Bỏ dấu câu, kí tự đặc biệt
	str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
	if (isXoaKhoangTrang) {
		str = str.replace(/\s/g, "");
	}
	return str;
}
export function renderImage(thumbnail: string) {
	return `http://localhost:1337${thumbnail}`;
}
// export async function renderImageByFolder(id: string) {
// 	const res = await axios.post(`${ip}file/v5/FileObject/GetFileInSharedFolder`, {
// 		sharedFolderType: 2,
// 		entityKey: id,
// 	});
// 	return `http://u2212-dev.dttt.vn/gwdevv5/file/v5/FileObject/public/${res?.data?.data?.id}/download`;
// }
