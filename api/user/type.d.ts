import { EChungThuc, USER_ROLE } from "../../utils/constant";

declare module User {
	export interface IRoot {
		_id: string; //"63900d318cd83a19492738c6";
		username: string; //"username";
		isEmailConfirmed: boolean;
		createPassword: boolean;
		// email: string;//"example@domain.co";
		systemRole: USER_ROLE; //"User";
		createdAt: string; // "2022-12-07T03:49:05.652Z";
		updatedAt: string; // "2022-12-07T03:49:05.652Z";
		profileUser?: IProfile;
		profileDoanhNghiep?: IProfileDoanhNghiep;
	}

	interface BaseProfile {
		id: string;
		user: string;
		emailLienLac: string;
		diaChi?: {
			maTinh: string;
			tenTinh: string;
			maQuanHuyen: string;
			tenQuanHuyen: string;
			maPhuongXa: string;
			tenPhuongXa: string;
			soNhaTenDuong: string;
		};
		facebookId?: string;

		publicInfo: true;
		createdAt: string;
		updatedAt: string;
	}

	export interface IProfile extends BaseProfile {
		avatarUrl?: string;
		firstname?: string;
		lastname?: string;
		dateOfBirth?: string; // "2022-12-14T04:21:34.479Z";
		ungTuyen: boolean; //true;
		gender?: "Male" | "Female" | "";
		phoneNumber: string;

		gioiThieuBanThan?: string;
		linkTrangCaNhan?: string;
		soThich?: string;

		viTri?: string;
		kyNang?: IKyNang[];

		lichSuLamViec?: ILichSuLamViec[];
		duAnThamGia?: IDuAn[];

		trinhDoHocVan?: string;
		hocVan?: IHocVan[];
		khoaHocThamGia?: IKhoaHoc[];

		chungChiDatDuoc?: IChungChi[];
		giaiThuongDatDuoc?: IGiaiThuong[];
		thongTinKhac?: string;

		nganh?: string;
	}

	export interface IProfileDoanhNghiep extends IInfoDoanhNghiep {
		chungThuc?: EChungThuc;
		congTyHangDau: boolean;

		thongTinUpdateLai?: Partial<IInfoDoanhNghiep>;
		// trangThaiUpdate: boolean; // false;
		updateLaiThongTin: boolean; // true;
		yeuCauXacThuc: boolean;
		soBaiDang?: number;
		luotTheoDoi?: number;
	}

	export interface IInfoDoanhNghiep extends BaseProfile {
		logo?: string;
		tenCongTy: string;
		mst: string;
		sdt: string;
		quyMoCongTy?: string;
		website?: string;
		gioiThieuThem?: string;

		linhVucHoatDong?: string[];
		linhVucList?: { _id: string; tenLinhVuc: string }[];
		nganh?: string[];
		nganhList?: { _id: string; tenNganh: string }[];
		giayPhepKinhDoanh?: string[];
		listAnhCongTy?: string[];
	}

	export interface IProfileDoanhNghiepElastic {
		logo: string; // "https://ais.aisenote.com/cong-thong-tin-viec-lam/file/63b5042f2a02d7daf48d85b6";
		soNhaTenDuong: string; // "News Skyline";
		tenCongTy: string; //"Công ty Cổ phần Công nghệ A.I-Soft";
		tenLinhViec: string[]; //["Bất động sản", "Giáo dục, Đào tạo", "Viễn thông"];
		tenNganh: string[]; //["Điện tử viễn thông", "Dịch vụ khách hàng"];
		tenPhuongXa: string; //"Phường Văn Quán";
		tenQuanHuyen: string; //"Quận Hà Đông";
		tenTinh: string; //"Thành phố Hà Nội";
		website: string;
		_id: string; //"639bfa78de34ddaf81245838";
	}

	export interface IResponse {
		limit: number; //10;
		offset: number; //0;
		page: number; //1;
		result: IProfileDoanhNghiep[];
		total: number; //0;
	}

	export interface IResponseUser {
		limit: number; //10;
		offset: number; //0;
		page: number; //1;
		result: IProfile[];
		total: number; //0;
	}

	export interface IResponseElastic {
		limit: number; //10;
		offset: number; //0;
		page: number; //1;
		result: IProfileDoanhNghiepElastic[];
		total: number; //0;
	}

	export interface IHocVan {
		truongHoc: string;
		chuyenNganhHoc?: string;
		anhDinhKem?: string;
		thoiGianBd?: string; // "2022-12-14T04:21:34.479Z";
		thoiGianKT?: string; // "2022-12-14T04:21:34.479Z";
		moTa?: string;
	}

	export interface ILichSuLamViec {
		congTy: string;
		chucVu: string;
		anhDinhKem?: string;
		thoiGianBd: string; //"2022-12-14T04:21:34.479Z";
		thoiGianKT: string; //"2022-12-14T04:21:34.479Z";
		moTa?: string;
	}

	export interface IChungChi {
		tenChungChi: string;
		toChuc?: string;
		anhDinhKem?: string;
		thoiGianBd: string; // "2022-12-14T04:21:34.479Z";
		thoiGianKT: string; // "2022-12-14T04:21:34.479Z";
	}

	export interface IKyNang {
		tenKyNang: string;
		level: number; // 0;
		moTa: string;
	}

	export interface IGiaiThuong {
		tenGiaiThuong: string;
		toChuc: string;
		anhDinhKem?: string;
		thoiGianBd: string; //"2022-12-14T04:21:34.479Z";
		thoiGianKT: string; //"2022-12-14T04:21:34.479Z";
	}

	export interface IDuAn {
		tenDuAn: string;
		soThanhVien: number;
		viTri: string;
		nhiemVu: string;
		thoiGianBd: string; //"2022-12-14T04:21:34.479Z";
		thoiGianKT: string; //"2022-12-14T04:21:34.479Z";
		moTa?: string;
	}

	export interface IKhoaHoc {
		tenKhoaHoc: string;
		toChuc?: string;
		anhDinhKem?: string;
		thoiGianBd: string; // "2022-12-14T04:21:34.479Z";
		thoiGianKT: string; // "2022-12-14T04:21:34.479Z";
		moTa?: string;
	}

	type TChangePassword = { oldPassword: string; newPassword: string; confirmPassword: string };

	export interface ISearch {
		maTinh?: string;
		maQuanHuyen?: string;
		maXaPhuong?: string;
		idNganh?: string;
		idLinhVuc?: string;
		tuKhoa?: string;
		thuTu?: "moi_nhat";
	}
}
