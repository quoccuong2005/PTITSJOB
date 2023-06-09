export const dataNavBar: { linkTo: string; name: string; childrenRouter: { linkTo: string; name: string }[] }[] = [
	{
		linkTo: "/",
		name: "Trang chủ",
		childrenRouter: [],
	},
	{
		linkTo: "/gioi-thieu",
		name: "Giới thiệu",
		childrenRouter: [
			{
				linkTo: "/gioi-thieu?type=KH",
				name: "Chiến lược phát triển KH, CN & ĐMST",
			},
			{
				linkTo: "/gioi-thieu?type=NC",
				name: "Định hướng nghiên cứu",
			},
			{
				linkTo: "/gioi-thieu?type=LH",
				name: "Thông tin liên hệ",
			},
		],
	},
	{
		linkTo: "/tin-tuc",
		name: "Tin tức - sự kiện",
		childrenRouter: [],
	},
	{
		linkTo: "/hoat-dong",
		name: "Hoạt động KH, CN & ĐMST",
		childrenRouter: [
			{
				linkTo: "/hoat-dong?type=Đề tài",
				name: "Đề tài/ Dự án KH, CN & ĐMST",
			},
			{
				linkTo: "/hoat-dong?type=Công bố",
				name: "Công bố khoa học",
			},
			{
				linkTo: "/hoat-dong?type=Sản phẩm",
				name: "Sản phẩm KHCN tiêu biểu",
			},
		],
	},
	{
		linkTo: "https://jstic.ptit.edu.vn/index.html",
		name: "Tạp chí khoa học",
		childrenRouter: [],
	},
	{
		linkTo: "/don-vi-nghien-cuu",
		name: "Các đơn vị nghiên cứu",
		childrenRouter: [
			{
				linkTo: "/don-vi-nghien-cuu?type=Viện nghiên cứu",
				name: "Viện nghiên cứu",
			},
			{
				linkTo: "/don-vi-nghien-cuu?type=Phòng thí nghiệm",
				name: "Phòng thí nghiệm nghiên cứu",
			},
		],
	},

	{
		linkTo: "/quy-che",
		name: "Quy  chế, quy định KH, CN & ĐMST",
		childrenRouter: [],
	},
];
export const dataBannerSlide=[
	{
		imageUrl:'/images/home/banner-home.png',
		name:'',
		link:'#'
	},
	{
		imageUrl:'/images/home/banner-home-1.jpg',
		name:'',
		link:'#'
	},
	{
		imageUrl:'/images/home/banner-home-2.jpg',
		name:'',
		link:'#'
	},
	{
		imageUrl:'/images/home/banner-home-3.png',
		name:'',
		link:'#'
	},
]
export const dataCTDaoTao = [
	{
		imageUrl: "/images/home/cn1.png",
		content: "Lễ ký kết chương trình phối hợp công tác giữa Trường Đào tạo,...",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "12/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/27/le-ky-ket-chuong-trinh-phoi-hop-cong-tac-giua-truong-dao-tao-boi-duong-can-bo-quan-ly-thong-tin-va-truyen-thong-va-vien-chien-luoc-chuyen-doi-so/",
	},
	{
		imageUrl: "/images/home/cn2.png",
		content: "Khai giảng lớp “ Đào tạo nâng cao năng lực đội ngũ cán bộ...",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "07/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/20/khai-giang-lop-dao-tao-nang-cao-nang-luc-doi-ngu-can-bo-lam-cong-tac-thong-tin-doi-ngoai-nam-2020-tai-dien-bien/",
	},
	{
		imageUrl: "/images/home/cn3.png",
		content: "Khai giảng lớp “ Đào tạo nâng cao năng lực đội ngũ cán bộ...",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "07/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/20/khai-giang-lop-dao-tao-nang-cao-nang-luc-doi-ngu-can-bo-lam-cong-tac-thong-tin-doi-ngoai-nam-2020-tai-dien-bien/",
	},
];
export const dataTinTuc = [
	{
		imageUrl: "/images/home/tc-1.png",
		content: "Lễ ký kết chương trình phối hợp công tác giữa Trường Đào tạo,...",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "12/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/27/le-ky-ket-chuong-trinh-phoi-hop-cong-tac-giua-truong-dao-tao-boi-duong-can-bo-quan-ly-thong-tin-va-truyen-thong-va-vien-chien-luoc-chuyen-doi-so/",
	},
	{
		imageUrl: "/images/home/tc-2.png",
		content: "Khai giảng lớp “ Đào tạo nâng cao năng lực đội ngũ cán bộ...",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "07/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/20/khai-giang-lop-dao-tao-nang-cao-nang-luc-doi-ngu-can-bo-lam-cong-tac-thong-tin-doi-ngoai-nam-2020-tai-dien-bien/",
	},
	{
		imageUrl: "/images/home/tc-3.png",
		content: "Chi bộ Trường tổ chức Hội nghị tổng kết công tác Đảng năm 2022",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "07/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2022/12/28/chi-bo-truong-to-chuc-hoi-nghi-tong-ket-cong-tac-dang-nam-2022-va-trien-khai-phuong-huong-nhiem-vu-nam-2023/",
	},
	{
		imageUrl: "/images/home/tc-4.png",
		content: "Trường Đào tạo, Bồi dưỡng cán bộ quản lý Thông tin và Truyền thông",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "07/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2022/11/29/truong-dao-tao-boi-duong-can-bo-quan-ly-thong-tin-va-truyen-thong-to-chuc-ky-niem-40-nam-ngay-nha-giao-viet-nam-20-11-1982-20-11-2022/",
	},
];
export const dataTinTucNoiBat = [
	{
		imageUrl: "/images/home/tc-1.png",
		title: "Lễ ký kết chương trình phối hợp công tác giữa Trường Đào tạo,...",
		content:
			"Cuộc thi “Lập trình Robot năm 2023″ do Khoa Kỹ thuật điện tử 1 chủ trì. \n" +
			"Cuộc thi là nơi để các bạn sinh viên đam mê ROBOT có thêm sân chơi, cơ hội để thể hiện niềm đam mê sáng tạo của mình đối với nghiên cứu và phát triển công nghệ mới đồng thời khuyến khích, động viên phong trào sáng tạo trong học tập, nghiên cứu khoa học của sinh viên.",
		dateTime: "12/02/2023, 11:23",
		dateStart: "12/02/2023, 11:23",
		dateEnd: "12/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/27/le-ky-ket-chuong-trinh-phoi-hop-cong-tac-giua-truong-dao-tao-boi-duong-can-bo-quan-ly-thong-tin-va-truyen-thong-va-vien-chien-luoc-chuyen-doi-so/",
	},
	{
		imageUrl: "/images/home/tc-2.png",
		title: "Lễ ký kết chương trình phối hợp công tác giữa Trường Đào tạo,...",
		content:
			"Cuộc thi “Lập trình Robot năm 2023″ do Khoa Kỹ thuật điện tử 1 chủ trì. \n" +
			"Cuộc thi là nơi để các bạn sinh viên đam mê ROBOT có thêm sân chơi, cơ hội để thể hiện niềm đam mê sáng tạo của mình đối với nghiên cứu và phát triển công nghệ mới đồng thời khuyến khích, động viên phong trào sáng tạo trong học tập, nghiên cứu khoa học của sinh viên.",
		dateTime: "12/02/2023, 11:23",
		dateStart: "12/02/2023, 11:23",
		dateEnd: "12/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/27/le-ky-ket-chuong-trinh-phoi-hop-cong-tac-giua-truong-dao-tao-boi-duong-can-bo-quan-ly-thong-tin-va-truyen-thong-va-vien-chien-luoc-chuyen-doi-so/",
	},
	{
		imageUrl: "/images/home/tc-3.png",
		title: "Lễ ký kết chương trình phối hợp công tác giữa Trường Đào tạo,...",
		content:
			"Cuộc thi “Lập trình Robot năm 2023″ do Khoa Kỹ thuật điện tử 1 chủ trì. \n" +
			"Cuộc thi là nơi để các bạn sinh viên đam mê ROBOT có thêm sân chơi, cơ hội để thể hiện niềm đam mê sáng tạo của mình đối với nghiên cứu và phát triển công nghệ mới đồng thời khuyến khích, động viên phong trào sáng tạo trong học tập, nghiên cứu khoa học của sinh viên.",
		dateTime: "12/02/2023, 11:23",
		dateStart: "12/02/2023, 11:23",
		dateEnd: "12/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/27/le-ky-ket-chuong-trinh-phoi-hop-cong-tac-giua-truong-dao-tao-boi-duong-can-bo-quan-ly-thong-tin-va-truyen-thong-va-vien-chien-luoc-chuyen-doi-so/",
	},
];
export const dataDaoTao = [
	{
		imageUrl: "/images/home/dv1.png",
		content: "Lễ ký kết chương trình phối hợp công tác giữa Trường Đào tạo,...",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "12/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/27/le-ky-ket-chuong-trinh-phoi-hop-cong-tac-giua-truong-dao-tao-boi-duong-can-bo-quan-ly-thong-tin-va-truyen-thong-va-vien-chien-luoc-chuyen-doi-so/",
	},
	{
		imageUrl: "/images/home/dv2.png",
		content: "Khai giảng lớp “ Đào tạo nâng cao năng lực đội ngũ cán bộ...",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "07/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2023/02/20/khai-giang-lop-dao-tao-nang-cao-nang-luc-doi-ngu-can-bo-lam-cong-tac-thong-tin-doi-ngoai-nam-2020-tai-dien-bien/",
	},
	{
		imageUrl: "/images/home/dv3.png",
		content: "Chi bộ Trường tổ chức Hội nghị tổng kết công tác Đảng năm 2022",
		description: "Ngày 3/3/2023, tại Sơn La, Công đoàn TT&TT Việt Nam tổ chức Hội nghị sơ kết phong trào thi ...",
		dateTime: "07/02/2023, 11:23",
		link: "https://canbotttt.edu.vn/2022/12/28/chi-bo-truong-to-chuc-hoi-nghi-tong-ket-cong-tac-dang-nam-2022-va-trien-khai-phuong-huong-nhiem-vu-nam-2023/",
	},
];

export const dataFooterLocation = [
	{
		title: "Trụ sở chính",
		name: "122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội.",
	},
	{
		title: "Cơ sở đào tạo tại Hà Nội",
		name: "Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội.",
	},
	{
		title: "Học viện cơ sở tại TP. Hồ Chí Minh",
		name: "11 Nguyễn Đình Chiểu, P. Đa Kao, Q.1 TP Hồ Chí Minh.",
	},
	{
		title: "Cơ sở đào tạo tại TP Hồ Chí Minh",
		name: "Đường Man Thiện, P. Hiệp Phú, Q.9 TP Hồ Chí Minh.",
	},
];
export const dataNghienCuu = [
	{
		no: "01.",
		title: "Công nghệ thông tin, an toàn thông tin, điện tử, viễn thông, đa phương tiện",
		content:
			"Nghiên cứu các công nghệ mới phục vụ cách mạng công nghiệp 4.0; phát triển lĩnh vực học máy và ứng dụng, trí tuệ nhân tạo, khai thác dữ liệu lớn, \n" +
			"xử lý tri thức; nghiên cứu các hệ phân tán, tính toán hiệu năng cao, ....",
	},
	{
		no: "02.",
		title: "Kinh tế và quản lý",
		content:
			"Nghiên cứu về nền kinh tế số, ứng dụng CNTT, Internet trong hoạt động quản trị doanh nghiệp; nghiên cứu đánh giá tác động chính sách quản lý nhà nước, nghiên cứu đánh giá thị trường viễn thông, CNTT và truyền thông Việt Nam;...",
	},
	{
		no: "03.",
		title: "Khoa học cơ bản",
		content:
			"Nghiên cứu các lĩnh vực toán ứng dụng và tính toán; nghiên cứu thiết kế các bộ thí nghiệm vật lý, mô phỏng các thí nghiệm vật lý để hỗ trợ giảng dạy lý thuyết trên giảng đường.",
	},
];
export const dataDeTai = [
	{
		imageUrl: "/images/home/image-phong-su-3.png",
		content:
			"Lễ ký kết chương trình phối hợp công tác giữa Trường Đào tạo, Bồi dưỡng cán bộ quản lý Thông tin và Truyền thông và Viện chiến lược chuyển đổi số",
		dateTime: "07/02/2023, 11:23",
		type: "Cấp nhà nước",
		description: "Danh mục đề tài KHCN cấp Nhà nước thực hiện từ năm 2021",
	},
];

export const dataDanhMuc=[
	{
		index:1,
		tenDeTai:'Nghiên cứu phát triển thử nghiệm hệ thống giám sát giao thông ứng dụng kỹ thuật học sâu cho nhận dạng hình ảnh',
		maDeTai:'ĐT.020/18',
		chuNhiem:'PGS.TS. Từ Minh Phương',
		thoiGianThucHien:'Tháng 2 – 11/2022',
		thoiGianNghiemThu:'Tháng 12/2022',
	}
]
export const dataQuyChe=[
	{
		index:1,
		soVanBan:'569/QĐ-TTg',
		ngayBanHanh:'11/05/2022',
		ngayBatDauHieuLuc:'11/05/2022',
		trichYeu:'Ban hành Chiến lược phát triển khoa học, công nghệ và đổi mới sáng tạo đến năm 2030',
		loaiVanBan:'Quyết định',
		coQuanBanHanh:'Chính phủ',
		taiLieuDinhKem:'569/QĐ-TTg.doc'
	}
]