export enum GioiTinh {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

export interface NhaTuyenDungDangKyRequest {
    verfiyCode: string;
    password: string;
    tenDoanhNghiep: string;
    soDienThoaiDoanhNghiep: string;
    emailDoanhNghiep: string;
    diaChiDoanhNghiep: string;
    websiteDoanhNghiep: string;
    loaiHinhKinhDoanh: string;
    hoTenNhaTuyenDung: string;
    soDienThoaiNhaTuyenDung: string;
    emailNhaTuyenDung: string;
    gioiTinh: GioiTinh;
}
