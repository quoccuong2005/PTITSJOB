export interface BaiViet {
    _id: string,
    ssoId: string,
    tenTacGia: string,
    tieuDe: string,
    noiDung: string,
    hinhAnh: string,
    slug: string,
    tag: [
        string
    ],
    trangThai: Nháp,
    view: [
        {
            _id: string,
            baiVietId: string,
            ssoId: string
        }
    ]
}