// User roles
export enum USER_ROLE {
	USER = "USER",
	DOANH_NGHIEP = "DOANH_NGHIEP",
	ADMIN = "ADMIN",
}

export const dataGender = [
	{
		value: "Male",
		label: "Nam",
	},
	{
		value: "Female",
		label: "Nữ",
	},
];

export const dataLevel = [1, 2, 3, 4, 5].map((item) => ({
	value: item,
	label: item,
}));

export enum EHinhThucLamViec {
	Part_Time = "PartTime",
	Full_Time = "FullTime",
	Thuc_Tap = "Thực tập",
	Thuc_Tap_TN = "Thực tập tốt nghiệp",
	Khac = "Khác",
}

export const colorHinhThuc = {
	FullTime: "careerfy-blue",
	PartTime: "careerfy-red",
	Khác: "careerfy-green",
	"Thực tập": "careerfy-yellow",
	"Thực tập tốt nghiệp": "careerfy-purple",
};

export enum EChungThuc {
	CHUA_CHUNG_THUC = "Chưa chứng thực",
	CHUNG_THUC = "Chứng thực",
	TU_CHOI = "Từ chối",
}

export enum ETrangThaiBaiDang {
	CHO_DUYET = "Chờ duyệt",
	DA_DUYET = "Đã duyệt",
	TU_CHOI = "Từ chối",
}

export enum ETrangThaiUngVien {
	Cho_Duyet = "Chờ xử lý",
	Duyet = "Tiếp nhận",
	Tu_Choi = "Từ chối",
}

export enum ELang {
  EN_US = "en_US",
  VI_VN = "vi_VN",
  ZH_CN = "zh_CN",
  LO_LA = "lo_LA",
  ES_ES = "es_ES",
  KM_KH = "km_KH",
}

export const LangMap: Record<string, ELang> = {
  en: ELang.EN_US,
  vi: ELang.VI_VN,
  zh: ELang.ZH_CN,
  lo: ELang.LO_LA,
  es: ELang.ES_ES,
  km: ELang.KM_KH,
};

export const I18nLangMap: Record<string, string> = {
  en: "en-US",
  vi: "vi-VN",
  zh: "zh-CN",
  lo: "lo-LA",
  es: "es-ES",
  km: "km-KH",
};