export interface Ungtuyen {
    studentCvId: string,
    tenUngVien: string,
    soDienThoai: string,
    email: string,
    diaChi: string,
    gioiThieu: string,
}

export interface UngTuyenResponse {
    data: {
        _id: string;
        tinTuyenDungId: string;
        ssoId: string;
        studentCvId: string;
        tenUngVien: string;
        soDienThoai: string;
        email: string;
        diaChi: string;
        gioiThieu: string;
        trangThaiUngTuyen: 'Đang chờ' | 'Đã duyệt' | 'Từ chối' | string;
    };
    success: boolean;
}
