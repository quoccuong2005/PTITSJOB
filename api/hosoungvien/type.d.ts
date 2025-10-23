// Thông tin của tin tuyển dụng (có thể null)
export interface TinTuyenDung {
    _id?: string;
    tieuDe?: string;
    viTriChuyenMon?: string;
    mucLuong?: number;
    diaDiemLamViec?: string;
    trangThaiTin?: string;
    trangThaiDuyet?: string;
    [key: string]: any; // đề phòng có thêm thuộc tính khác
}

// Thông tin ứng tuyển của sinh viên
export interface Hosoungvien {
    _id: string;
    tinTuyenDungId: string | null;
    ssoId: string | null;
    studentCvId: string;
    tenUngVien: string;
    soDienThoai: string;
    email: string;
    diaChi: string;
    gioiThieu: string;
    trangThaiUngTuyen: "Đang chờ" | "Đã duyệt" | "Từ chối" | string;
    dataPartitionCode: string | null;
    createdAt: string;
    updatedAt: string;
    tinTuyenDung: TinTuyenDung | null;
}

// Kết quả phân trang
export interface HosoungvienResponseData {
    page: number;
    skip: number;
    limit: number;
    total: number;
    result: Hosoungvien[];
}

// API Response tổng thể
export interface HosoungvienResponse {
    success: boolean;
    data: HosoungvienResponseData;
}



