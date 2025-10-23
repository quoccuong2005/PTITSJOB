export interface BaiViet {
    data: {
        _id: string,
        createdAt: string,
        ssoId: string,
        tenTacGia: string,
        loai: "Tin tức" | "Tư vấn hướng nghiệp",
        tieuDe: string,
        noiDung: string,
        hinhAnh: string,
        slug: string,
        tag: [
            string
        ],
        trangThai: "Phát hành" | "Đã duyệt" | "Chờ duyệt" | "Từ chối",
        view: [
            {
                _id: string,
                baiVietId: string,
                ssoId: string
            }
        ]
    }
    
}