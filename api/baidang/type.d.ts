import { EHinhThucLamViec, ETrangThaiBaiDang, ETrangThaiUngVien } from "../../utils/constant";
import { User } from "../user/type";

declare module BaiDang {
	export interface IRecord {
		_id: string;
		congTy?: User.IProfileDoanhNghiep;

		idNguoiDang: string;
		tenViec: string;
		viTri: string;
		hinhThucLamViec: EHinhThucLamViec;

		mucLuongToiThieu?: number;
		mucLuongToiDa?: number;
		nganh: any;
		linhVucCongTy: any;

		diaChi: {
			maTinh: string;
			tenTinh: string;
			maQuanHuyen: string;
			tenQuanHuyen: string;
			maPhuongXa: string;
			tenPhuongXa: string;
			soNhaTenDuong: string;
		};

		moTaCongViec?: string;

		thoiGianBd: string; //"2022-12-16T07:59:49.546Z";
		thoiGianKT: string; //"2022-12-16T07:59:49.546Z";
		soLuongTuyen: number;
		soLuongUngVien?: number;
		soLuongQuanTam?: number;
		gender?: "Male" | "Female" | "";
		kinhNghiemToiThieu?: number; // 0;
		yeuCauUngVien?: string;
		quyenLoiDuocHuong?: string;

		thoiGianUngTuyen?: string; // "2023-02-01T07:25:48.946Z";
		thoiGianXuLy?: string; // "2023-02-01T07:25:48.946Z";
		trangThaiBaiDang?: ETrangThaiBaiDang;
		trangThai?: ETrangThaiUngVien;
		createdAt?: string;
		updatedAt?: string;
	}

	export interface IResponse {
		limit: number; //10;
		offset: number; //0;
		page: number; //1;
		result: IRecord[];
		total: number; //0;
	}

	export interface IRecordElastic {
		hinhThucLamViec: EHinhThucLamViec; // "FullTime";
		logo?: string; // "https://ais.aisenote.com/cong-thong-tin-viec-lam/file/63a6caf8dffac506f709e29b";
		mucLuongToiDa?: number; // 500000000;
		mucLuongToiThieu?: number; // 0;
		tenCongTy?: string; // "Công ty Cổ phần Công nghệ A.I-Soft";
		tenLinhVuc?: string; // "Giáo dục, Đào tạo";
		tenNganh?: string; // "Công nghệ thông tin";
		tenQuanHuyen: string; // "Quận Hải Châu";
		tenTinh: string; // "Thành phố Đà Nẵng";
		tenViec: string; // "React Native Developer";
		thoiGianKT: string; // "2023-12-22T17:00:00.000Z";
		viTri: string; // "Nhân viên";
		idNguoiDang: string;
		_id: string; // "63a6c1117f9b6053051c83a9";
	}

	export interface IResponseElastic {
		limit: number; //10;
		offset: number; //0;
		page: number; //1;
		result: IRecordElastic[];
		total: number; //0;
	}

	export interface ISearch {
		maTinh?: string;
		maQuanHuyen?: string;
		maXaPhuong?: string;
		idNganh?: string;
		idLinhVuc?: string;
		loaiHinhLamViec?: string[];
		loai?: string;
		luongToiThieu?: string;
		luong?: [number, number];
		luongToiDa?: string;
		tuKhoa?: string;
		thuTu?: "moi_nhat";
	}

	export interface IUngVien {
		idTinDang: string; // "639d79f0969026e91f73440b";
		idUngVien: string; // "63998cdce1093abea27cbcbd";
		trangThai: ETrangThaiUngVien; // "Cho_Duyet";
		createdAt: string; // "2022-12-20T04:31:32.549Z";
		updatedAt: string; // "2022-12-20T04:31:32.549Z";
		ungVien?: {
			_id: string; // "639ad338186cb4d375b46558";
			user: string; // "63998cdce1093abea27cbcbd";
			firstname: string; // "Ngô Nhận";
			lastname: string; // "Ngô Nhận";
			emailLienLac: string; // "Ngô Nhận";
			avatarUrl: string; // "https://ais.aisenote.com/cong-thong-tin-viec-lam/file/639c40ff23844b54fef9439e";
		};
		id: string; // "63a13aa4d1b0c09325836ef6";
	}
	export interface IResponseUngVien {
		limit: number; //10;
		offset: number; //0;
		page: number; //1;
		result: IUngVien[];
		total: number; //0;
	}
}
