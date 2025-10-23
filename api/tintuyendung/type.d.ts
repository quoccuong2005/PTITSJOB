export interface TinTuyenDungDangTin {
    tieuDe: string;
    viTriChuyenMon: string;
    kienThucNganhNghe: string;
    capBac: string;
    kinhNghiem: string; // ví dụ: "Không yêu cầu kinh nghiệm"
    moTa: string;
    yeuCauCongViec: string;
    quyenLoi: string;
    quyenLoiBoSung: string;
    hinhThucCongViec: string;
    mucLuong: number;
    mucLuongToiDa: number;
    mucLuongToiThieu: number;
    diaDiemLamViec: string;
    thuBatDauLamViec: string; // ví dụ: "Thứ 2"
    thuKetThucLamViec: string; // ví dụ: "Thứ 6"
    khungGioBatDauLamViec: string; // ví dụ: "08:00"
    khungGioKetThucLamViec: string; // ví dụ: "17:00"
    hanNhanHoSo: string; // ISO date string, ví dụ "2025-10-21T05:01:45.471Z"
    soLuongTuyen: number;
    hoTenNguoiLienHe: string;
    emailNguoiLienHe: string;
    soDienThoaiNguoiLienHe: string;
    lyDoTuChoiDuyet?: string; // optional - chỉ dùng khi bị từ chối
    ngayHetHan: string; // ISO date string
    ssoId: string;
    doanhNghiepId: string;
}

export interface DoanhNghiep {
    _id: string;
    ssoId: string;
    ten: string;
    email: string;
    soDienThoai: string;
    diaChi: string;
    tenNhaTuyenDung: string;
    emailNhaTuyenDung: string;
    soDienThoaiNhaTuyenDung: string;
    gioiTinhnhaTuyenDung: "Male" | "Female" | string;
    website: string;
    logo: string;
    moTa: string;
    loaiDoanhNghiep: string;
    quyMo: string; // ví dụ: "Dưới 10 nhân viên"
    linhVuc: string;
    namThanhLap: number;
    trangThaiTuyenDung: string; // ví dụ: "Đang tuyển dụng"
    trangThaiHienThi: string;   // ví dụ: "Hiển thị"
}

export interface TinTuyenDungResponse {
    _id: string;
    ssoId: string;
    doanhNghiepId: string;
    tieuDe: string;
    viTriChuyenMon: string;
    kienThucNganhNghe: string;
    capBac: string;
    kinhNghiem: string;
    moTa: string;
    yeuCauCongViec: string;
    quyenLoi: string;
    quyenLoiBoSung: string;
    hinhThucCongViec: string;
    mucLuong: number;
    mucLuongToiDa: number;
    mucLuongToiThieu: number;
    diaDiemLamViec: string;
    thuBatDauLamViec: string;
    thuKetThucLamViec: string;
    khungGioBatDauLamViec: string;
    khungGioKetThucLamViec: string;
    hanNhanHoSo: string; // ISO date string
    soLuongTuyen: number;
    hoTenNguoiLienHe: string;
    emailNguoiLienHe: string;
    soDienThoaiNguoiLienHe: string;
    trangThaiTin: string;    // ví dụ: "Đang hoạt động"
    trangThaiDuyet: string;  // ví dụ: "Chờ duyệt"
    lyDoTuChoiDuyet?: string;
    ngayHetHan: string;      // ISO date string
    doanhNghiep: DoanhNghiep;
    createdAt: string | Date;
    view: Record<string, any>; // tuỳ backend trả về (số lượt xem, chi tiết, v.v.)
}
/// lấy tin tuyển dụng của doanh nghiệp
export interface Tintuyendungdoanhnghiep {

    _id: string,
    ssoId: string,
    doanhNghiepId: string,
    tieuDe: string,
    viTriChuyenMon: string,
    kienThucNganhNghe: string,
    capBac: string,
    kinhNghiem: "Không yêu cầu kinh nghiệm",
    moTa: string,
    yeuCauCongViec: string,
    quyenLoi: string,
    quyenLoiBoSung: string,
    hinhThucCongViec: string,
    mucLuong: 0,
    mucLuongToiDa: 0,
    mucLuongToiThieu: 0,
    diaDiemLamViec: string,
    thuBatDauLamViec: "Thứ 2",
    thuKetThucLamViec: "Thứ 2",
    khungGioBatDauLamViec: string,
    khungGioKetThucLamViec: string,
    hanNhanHoSo: "2025-10-16T08:31:30.822Z",
    soLuongTuyen: 0,
    hoTenNguoiLienHe: string,
    emailNguoiLienHe: string,
    soDienThoaiNguoiLienHe: string,
    trangThaiTin: "Đang hoạt động",
    trangThaiDuyet: "Chờ duyệt",
    lyDoTuChoiDuyet: string,
    ngayHetHan: "2025-10-16T08:31:30.822Z",
    doanhNghiep: {
        _id: string,
        ssoId: string,
        dataPartitionCode: string,
        ten: string,
        email: string,
        soDienThoai: string,
        diaChi: string,
        tenNhaTuyenDung: string,
        emailNhaTuyenDung: string,
        soDienThoaiNhaTuyenDung: string,
        gioiTinhnhaTuyenDung: "Female",
        website: string,
        logo: string,
        moTa: string,
        loaiDoanhNghiep: string,
        quyMo: "Dưới 10 nhân viên",
        linhVuc: string,
        namThanhLap: 0,
        trangThaiTuyenDung: "Đang tuyển dụng",
        trangThaiHienThi: "Hiển thị"
    },
    createdAt: {},
    view: {}

}


