export enum GioiTinhNhaTuyenDung {
    Nam = 'Male',
    Nu = 'Female',
    Khac = 'Other'
}

export enum QuyMoDoanhNghiep {
    Duoi10 = 'Dưới 10 nhân viên',
    Tu10Den50 = '10-50 nhân viên',
    Tu50Den200 = '50-200 nhân viên',
    Tren200 = 'Trên 200 nhân viên'
}

export enum TrangThaiTuyenDung {
    DangTuyen = 'Đang tuyển dụng',
    TamDung = 'Tạm dừng',
    DaDong = 'Đã đóng'
}

export enum TrangThaiHienThi {
    HienThi = 'Hiển thị',
    An = 'Ẩn'
}

export interface NhaTuyenDung {
    _id: string;
    ssoId: string;
    ten: string;
    email: string;
    soDienThoai: string;
    diaChi: string;
    tenNhaTuyenDung: string;
    emailNhaTuyenDung: string;
    soDienThoaiNhaTuyenDung: string;
    gioiTinhnhaTuyenDung: GioiTinhNhaTuyenDung;
    website: string;
    logo: string;
    moTa: string;
    loaiDoanhNghiep: string;
    quyMo: QuyMoDoanhNghiep;
    linhVuc: string;
    namThanhLap: number;
    trangThaiTuyenDung: TrangThaiTuyenDung;
    trangThaiHienThi: TrangThaiHienThi;
}
