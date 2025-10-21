// Dữ liệu khi tạo mới CV (request body)
export interface StudentCvCreateRequest {
    trangThai?: string;        // Trạng thái CV (vd: "Kích hoạt")
    ssoId: string;             // ID người dùng (SSO)
    cvTemplateId: string;      // ID template CV mà sinh viên chọn
    ten: string;               // Tên CV
    fileUrl: string;           // Đường dẫn file PDF hoặc DOCX CV đã lưu
}

// Dữ liệu trả về từ API (response)
export interface StudentCvResponse {
    data: {
        _id: string;
        ssoId: string;
        cvTemplateId: string;
        ten: string;
        fileUrl: string;
        trangThai: string;
    };
    success: boolean;
}
