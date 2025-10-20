export interface CvTemplate {
    _id: string;
    ten: string;
    hinhAnh: string;
    cvFile: string;
    templateData: Record<string, any>[];
    trangThai: "Nháp",
    createdAt: string;
    updatedAt: string;
}

export interface CvTemplateResponseData {
    result: CvTemplate[];
    total: number;
    skip: number;
    limit: number;
    page: number;
}

export interface CvTemplateResponse {
    data: CvTemplateResponseData;
    success: boolean;
}
