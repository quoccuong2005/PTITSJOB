import { ReactNode } from "react";

export interface IDataNavBar {
	icon?: ReactNode;
	linkTo: string;
	name: string;
	isBlank?: boolean;
	childrenRouter: {
		linkTo: string;
		name: string;
		isBlank?: boolean;
		childrenRouter?: { linkTo: string; name: string; isBlank?: boolean }[];
	}[];
}
export interface MainMenu {
	expanded: false;
	data: {
		id: "7a0e1b85-70b3-4a5a-aefb-741cd90a4ad0";
		name: "Giới thiệu";
		type: 1;
		pageCode: null;
		parentId: null;
		levelCode: null;
		isUsed: true;
		order: 2;
		icon: null;
		linkTo: "#";
		description: null;
		menuId: "c267bb02-9a35-49d3-b0b9-72442db39860";
		code: null;
		created: "2022-02-28T03:24:31.2674383Z";
		modified: "2023-01-06T08:24:59.141239Z";
		createdBy: "d81d7277-c99a-48bc-a00f-3eb43e0b03cd";
		modifiedBy: "40b079ce-8c36-4f6c-a20e-351908108d1b";
		isDeleted: false;
		persistedId: 241;
		menuIdNavigation: null;
		files: null;
		childMenu: null;
		aliasName: null;
		idOrganization: "00000000-0000-0000-0000-000000000000";
		isBuildIn: false;
		isBuildInAll: false;
		serviceCode: null;
		entity: null;
		entityKey: null;
		workflowCode: null;
		currentStateCode: null;
		workflowStateType: 0;
		isPrivate: false;
		userIdLastInWorkflow: null;
		donViIdLastInWorkflow: null;
		printFileId: null;
		version: 0;
		workflowCoreStatus: 0;
		__fieldCheckExist: null;
		_WorkflowCode: null;
		itemCongViec: null;
		basePermission: 0;
		pid: null;
		baseAutoNextStep: false;
		_GeneratedByBase: false;
	};
	children: [
		{
			expanded: false;
			data: {
				id: "3fd05a0f-a043-4ba9-8c95-7c7eac0218ea";
				name: "Giới thiệu chung";
				type: 2;
				pageCode: null;
				parentId: "7a0e1b85-70b3-4a5a-aefb-741cd90a4ad0";
				levelCode: null;
				isUsed: true;
				order: 1;
				icon: null;
				linkTo: "https://canbotttt.edu.vn/chuc-nang-nhiem-vu/";
				description: null;
				menuId: "c267bb02-9a35-49d3-b0b9-72442db39860";
				code: null;
				created: "2022-08-16T16:20:25.6606855Z";
				modified: "2023-01-09T07:04:41.3547304Z";
				createdBy: "d81d7277-c99a-48bc-a00f-3eb43e0b03cd";
				modifiedBy: "d81d7277-c99a-48bc-a00f-3eb43e0b03cd";
				isDeleted: false;
				persistedId: 272;
				menuIdNavigation: null;
				files: null;
				childMenu: null;
				aliasName: null;
				idOrganization: "00000000-0000-0000-0000-000000000000";
				isBuildIn: false;
				isBuildInAll: false;
				serviceCode: null;
				entity: null;
				entityKey: null;
				workflowCode: null;
				currentStateCode: null;
				workflowStateType: 0;
				isPrivate: false;
				userIdLastInWorkflow: null;
				donViIdLastInWorkflow: null;
				printFileId: null;
				version: 0;
				workflowCoreStatus: 0;
				__fieldCheckExist: null;
				_WorkflowCode: null;
				itemCongViec: null;
				basePermission: 0;
				pid: null;
				baseAutoNextStep: false;
				_GeneratedByBase: false;
			};
			children: [];
		},
		{
			expanded: false;
			data: {
				id: "65c149a2-1e02-48e5-a098-9034f9a85adf";
				name: "Lịch sử hình thành";
				type: 2;
				pageCode: null;
				parentId: "7a0e1b85-70b3-4a5a-aefb-741cd90a4ad0";
				levelCode: null;
				isUsed: true;
				order: 2;
				icon: null;
				linkTo: "https://canbotttt.edu.vn/lich-su-hinh-thanh/";
				description: null;
				menuId: "c267bb02-9a35-49d3-b0b9-72442db39860";
				code: null;
				created: "2022-03-01T08:08:57.5829669Z";
				modified: "2023-01-06T08:21:23.7783436Z";
				createdBy: "d81d7277-c99a-48bc-a00f-3eb43e0b03cd";
				modifiedBy: "40b079ce-8c36-4f6c-a20e-351908108d1b";
				isDeleted: false;
				persistedId: 254;
				menuIdNavigation: null;
				files: null;
				childMenu: null;
				aliasName: null;
				idOrganization: "00000000-0000-0000-0000-000000000000";
				isBuildIn: false;
				isBuildInAll: false;
				serviceCode: null;
				entity: null;
				entityKey: null;
				workflowCode: null;
				currentStateCode: null;
				workflowStateType: 0;
				isPrivate: false;
				userIdLastInWorkflow: null;
				donViIdLastInWorkflow: null;
				printFileId: null;
				version: 0;
				workflowCoreStatus: 0;
				__fieldCheckExist: null;
				_WorkflowCode: null;
				itemCongViec: null;
				basePermission: 0;
				pid: null;
				baseAutoNextStep: false;
				_GeneratedByBase: false;
			};
			children: [];
		},
		{
			expanded: false;
			data: {
				id: "c73e0f6d-f65d-4bd8-983f-d7903533f564";
				name: "Cơ cấu tổ chức";
				type: 2;
				pageCode: null;
				parentId: "7a0e1b85-70b3-4a5a-aefb-741cd90a4ad0";
				levelCode: null;
				isUsed: true;
				order: 3;
				icon: null;
				linkTo: "https://canbotttt.edu.vn/co-cau-to-chuc/";
				description: null;
				menuId: "c267bb02-9a35-49d3-b0b9-72442db39860";
				code: null;
				created: "2022-06-08T01:06:55.9137868Z";
				modified: "2023-01-06T08:21:27.7694246Z";
				createdBy: "d81d7277-c99a-48bc-a00f-3eb43e0b03cd";
				modifiedBy: "40b079ce-8c36-4f6c-a20e-351908108d1b";
				isDeleted: false;
				persistedId: 261;
				menuIdNavigation: null;
				files: null;
				childMenu: null;
				aliasName: null;
				idOrganization: "00000000-0000-0000-0000-000000000000";
				isBuildIn: false;
				isBuildInAll: false;
				serviceCode: null;
				entity: null;
				entityKey: null;
				workflowCode: null;
				currentStateCode: null;
				workflowStateType: 0;
				isPrivate: false;
				userIdLastInWorkflow: null;
				donViIdLastInWorkflow: null;
				printFileId: null;
				version: 0;
				workflowCoreStatus: 0;
				__fieldCheckExist: null;
				_WorkflowCode: null;
				itemCongViec: null;
				basePermission: 0;
				pid: null;
				baseAutoNextStep: false;
				_GeneratedByBase: false;
			};
			children: [];
		}
	];
}

export interface DataNew {
	"loaiChiBo": [],
	"_id": "647bfd84ad986aea9b24ac63",
	"ngayDang": "2023-06-04T02:57:08.590Z",
	"idCoSoDang": "608bea5ab56a58bc82accbab",
	"tieuDe": "CẢI TẠO CHUNG CƯ CŨ PHẢI GẮN VỚI TÁI THIẾT ĐÔ THỊ, QUY ĐỊNH THỜI HẠN SỞ HỮU CHUNG CƯ MỚI",
	"idTopic": "6422d2234608ac66adaf6d13",
	"anhDaiDien": "https://apidev.sotaydangvien.com/v2.2/file/648147d93782318e7cbefa23/anh%20dai%20dien%20tin.jpeg",
	"moTa": "Phát biểu thảo luận tại tổ sáng 5-6, trong chương trình kỳ họp thứ năm, Quốc hội khóa XV, Ủy viên Bộ Chính trị, Bí thư Thành ủy Hà Nội, Trưởng đoàn đại biểu Quốc hội thành phố Hà Nội Đinh Tiến Dũng nêu quan điểm, cải tạo chung cư cũ phải gắn với tái thiết đô thị và quy định thời hạn sở hữu chung cư mới giải quyết được vấn đề.",
	"loaiNoiDungTinTuc": "Văn bản",
	"noiDung": "<div>\n<div>\n<div><span>Ph&aacute;t biểu thảo luận tại tổ s&aacute;ng 5-6, trong chương tr&igrave;nh kỳ họp thứ năm, Quốc hội kh&oacute;a XV, Ủy vi&ecirc;n Bộ Ch&iacute;nh trị, B&iacute; thư Th&agrave;nh ủy H&agrave; Nội, Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Đinh Tiến Dũng n&ecirc;u quan điểm, cải tạo chung cư cũ phải gắn với t&aacute;i thiết đ&ocirc; thị v&agrave; quy định thời hạn sở hữu chung cư mới giải quyết được vấn đề.</span></div>\n</div>\n</div>\n<div>\n<div>\n<p><em><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/Ha%20Noi%204_b65f8241-80a6-40f2-afa7-8580467d493e.jpeg\" alt /></em></p>\n<p><em>Đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội thảo luận tại tổ s&aacute;ng 5-6.</em></p>\n<p><strong>Đề nghị t&iacute;nh to&aacute;n lại việc sở hữu chung cư kh&ocirc;ng c&oacute; thời hạn</strong></p>\n<p>Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Đinh Tiến Dũng nhận định, nh&agrave; t&aacute;i định cư ở H&agrave; Nội &ldquo;thừa vẫn thừa, thiếu vẫn thiếu&rdquo;. Thừa theo nhu cầu v&igrave; vừa qua một loạt dự &aacute;n người d&acirc;n chỉ nhận tiền, kh&ocirc;ng nhận nh&agrave;, c&ograve;n thiếu v&igrave; theo Luật Đất đai phải c&oacute; nh&agrave; t&aacute;i định cư mới được triển khai dự &aacute;n. Do đ&oacute;, B&iacute; thư Th&agrave;nh ủy Đinh Tiến Dũng cho rằng, dự thảo Luật Nh&agrave; ở (sửa đổi) n&ecirc;n c&oacute; hướng mở hơn, ho&agrave;n to&agrave;n giao cấp tỉnh c&oacute; thể bố tr&iacute; từ nh&agrave; t&aacute;i định cư sang nh&agrave; ở x&atilde; hội v&agrave; ngược lại để linh hoạt hơn.</p>\n<p>&ldquo;Chả lẽ bố tr&iacute; d&acirc;n ở ph&iacute;a T&acirc;y H&agrave; Nội sang Long Bi&ecirc;n nhận nh&agrave; t&aacute;i định cư? V&ocirc; l&yacute; lắm!&rdquo;, đồng ch&iacute; Đinh Tiến Dũng n&oacute;i, đồng thời nhấn mạnh, t&igrave;nh trạng tr&ecirc;n dẫn đến hệ quả l&agrave; thừa vẫn thừa, thiếu vẫn thiếu v&agrave; rất &aacute;ch tắc trong triển khai c&aacute;c dự &aacute;n giao th&ocirc;ng, dự &aacute;n trọng điểm của th&agrave;nh phố.</p>\n<p><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/HN5_f1a2eeb1-2a2b-44be-8c3a-2c1604868b25.jpeg\" alt /></p>\n<p><em>B&iacute; thư Th&agrave;nh ủy H&agrave; Nội, Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Đinh Tiến Dũng ph&aacute;t biểu thảo luận.</em></p>\n<p>Về tr&aacute;ch nhiệm nh&agrave; đầu tư dự &aacute;n nh&agrave; ở thương mại, B&iacute; thư Th&agrave;nh ủy H&agrave; Nội đề nghị bổ sung chế t&agrave;i bắt buộc trong luật về việc c&aacute;c chủ đầu tư n&agrave;y phải đảm bảo việc đầu tư hạ tầng x&atilde; hội. &ldquo;Thực tiễn c&oacute; chuyện l&agrave;m nh&agrave; b&aacute;n xong nhưng quay đi quay lại rất thiếu hạ tầng x&atilde; hội trong c&aacute;c dự &aacute;n, như thiếu trường học, bệnh viện. Ngay ở Thủ đ&ocirc;, c&oacute; dự &aacute;n nh&agrave; ở 20 năm nay rồi chưa x&acirc;y được trường học, d&acirc;n v&agrave;o ở k&iacute;n m&iacute;t&rdquo;, đồng ch&iacute; Đinh Tiến Dũng n&ecirc;u r&otilde; v&agrave; cho biết, th&agrave;nh phố y&ecirc;u cầu những dự &aacute;n kh&ocirc;ng đầu tư hạ tầng x&atilde; hội sẽ thu hồi lại, đề nghị tiếp tục đầu tư, c&oacute; thể bằng ng&acirc;n s&aacute;ch hoặc k&ecirc;u gọi nh&agrave; đầu tư thứ ph&aacute;t.</p>\n<p>Li&ecirc;n quan cải tạo chung cư cũ, B&iacute; thư Th&agrave;nh ủy H&agrave; Nội n&ecirc;u nhiều bất cập khi chung cư l&agrave; sở hữu của người d&acirc;n nhưng lại quy định cải tạo bằng đầu tư c&ocirc;ng, hoặc việc người d&acirc;n đ&oacute;ng g&oacute;p kinh ph&iacute; kiểm định nh&agrave; chung cư.</p>\n<p>B&iacute; thư Th&agrave;nh ủy Đinh Tiến Dũng cho rằng: &ldquo;Chỗ n&agrave;y kh&ocirc;ng cần thiết m&agrave; Nh&agrave; nước n&ecirc;n đứng ra l&agrave;m. B&acirc;y giờ đang muốn cải tạo chung cư, thỏa thuận với người d&acirc;n vui vẻ rời đi, lại bảo g&oacute;p tiền để kiểm định th&igrave; v&ocirc; l&yacute;&rdquo;. Theo B&iacute; thư Th&agrave;nh ủy, quy định cứng như vậy sẽ kh&ocirc;ng thể l&agrave;m được khi vận h&agrave;nh. Muốn an to&agrave;n cho người d&acirc;n th&igrave; Nh&agrave; nước phải c&oacute; tr&aacute;ch nhiệm, nguồn vốn d&agrave;nh cho việc cần thiết th&igrave; Nh&agrave; nước bỏ ra.</p>\n<p>B&ecirc;n cạnh đ&oacute;, cải tạo chung cư cũ phải gắn với t&aacute;i thiết đ&ocirc; thị v&agrave; quy định thời hạn sở hữu chung cư mới giải quyết được vấn đề. Thay v&igrave; c&aacute;ch l&agrave;m cải tạo từng t&ograve;a n&ecirc;n cải tạo chung cư theo từng khu. V&iacute; dụ nơi n&agrave;o c&oacute; 4-5 t&ograve;a chung cư cũ, mỗi t&ograve;a 4-5 tầng th&igrave; khi đầu tư x&acirc;y dựng lại, chỉ l&agrave;m 1-2 t&ograve;a v&agrave; l&agrave;m cao tầng hơn, c&ograve;n b&ecirc;n dưới để l&agrave;m kh&ocirc;ng gian thương mại v&agrave; dịch vụ, tầng hầm, b&atilde;i đỗ xe&hellip; Theo Trưởng đo&agrave;n Đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội, l&agrave;m như vậy người d&acirc;n sẽ c&oacute; kh&ocirc;ng gian sống đảm bảo hơn v&agrave; nh&agrave; đầu tư cũng c&oacute; lợi &iacute;ch.</p>\n<p><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/DOan%20HN%203_639f6c35-d71c-4532-8629-45e4f1e347a8.jpeg\" alt /></p>\n<p><em>C&aacute;c th&agrave;nh vi&ecirc;n Đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội thảo luận tại tổ s&aacute;ng 5-6.</em></p>\n<p>B&iacute; thư Th&agrave;nh ủy H&agrave; Nội khẳng định, khi quy định chung cư c&oacute; thời hạn, Nh&agrave; nước c&oacute; tr&aacute;ch nhiệm bảo vệ cuộc sống người d&acirc;n, cưỡng chế di dời khi chung cư xuống cấp, nguy hiểm cũng l&agrave; b&igrave;nh thường, v&igrave; lợi &iacute;ch của người d&acirc;n. Hoặc khi chưa đến thời hạn hoặc s&aacute;t đến thời hạn rồi m&agrave; chung cư xuống cấp, người d&acirc;n tự nguyện đồng t&igrave;nh th&igrave; Nh&agrave; nước cũng đứng ra l&agrave;m.</p>\n<p>&ldquo;Vừa qua, H&agrave; Nội lo v&igrave; sợ rủi ro ch&aacute;y nổ, động đất th&igrave; kh&ocirc;ng biết hậu quả thế n&agrave;o. B&ecirc;n cạnh đ&oacute; c&ograve;n thực tế nhiều nh&agrave; lắp gh&eacute;p, cơi nới n&ecirc;n rất &aacute;p lực&rdquo;, đồng ch&iacute; Đinh Tiến Dũng n&ecirc;u thực tế v&agrave; đề nghị t&iacute;nh to&aacute;n lại việc sở hữu chung cư kh&ocirc;ng c&oacute; thời hạn.</p>\n<p><strong>Thẩm quyền HĐND cấp tỉnh quyết định vấn đề về nh&agrave; ở l&agrave; ph&ugrave; hợp</strong></p>\n<p>Nhấn mạnh Luật Nh&agrave; ở rất quan trọng với H&agrave; Nội, Ph&oacute; B&iacute; thư Th&agrave;nh ủy, Chủ tịch HĐND th&agrave;nh phố, Ph&oacute; Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Nguyễn Ngọc Tuấn cho hay, vấn đề cần quan t&acirc;m khi triển khai x&acirc;y dựng c&aacute;c dự &aacute;n, đ&oacute; l&agrave; phải đảm bảo đủ điều kiện an to&agrave;n ph&ograve;ng ch&aacute;y, chữa ch&aacute;y. Vấn đề sở hữu chung - ri&ecirc;ng giữa chủ đầu tư - cư d&acirc;n - quản l&yacute; chung cư cũng cần phải quan t&acirc;m, kể cả khu vực để xe đạp cho người khuyết tật cũng c&oacute; tranh chấp phức tạp. Sau n&agrave;y n&ecirc;n chăng trong bản vẽ thiết kế của Sở X&acirc;y dựng nghi&ecirc;n cứu cả vấn đề n&agrave;y.</p>\n<p><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/HN6_28e5c943-45cf-46f4-a477-4fdbf981dd24.jpeg\" alt /></p>\n<p><em>Chủ tịch HĐND th&agrave;nh phố, Ph&oacute; Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Nguyễn Ngọc Tuấn thảo luận tại tổ.</em></p>\n<p>&ldquo;Li&ecirc;n quan cải tạo, x&acirc;y dựng lại chung cư cũ, Ch&iacute;nh phủ đ&atilde; c&oacute; Nghị định 69/2021/NĐ-CP, nhưng ngo&agrave;i r&agrave; so&aacute;t, cần t&iacute;nh to&aacute;n h&agrave;i h&ograve;a lợi &iacute;ch của người d&acirc;n, doanh nghiệp, Nh&agrave; nước. Đồng thời, khi x&acirc;y dựng, cải tạo cần gắn với vấn đề quy hoạch để đảm bảo đồng bộ&rdquo;, Ph&oacute; Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Nguyễn Ngọc Tuấn nhấn mạnh.</p>\n<p>T&aacute;n th&agrave;nh việc sửa đổi Luật Nh&agrave; ở, đại biểu Ho&agrave;ng Văn Cường (Đo&agrave;n H&agrave; Nội) cho rằng, nội dung thỏa thuận với nh&agrave; đầu tư trong việc lấy đất l&agrave;m dự &aacute;n dễ dẫn đến mất b&igrave;nh đẳng giữa c&aacute;c gi&aacute; đền b&ugrave;, v&igrave; thế n&ecirc;n c&oacute; sự can thiệp của Nh&agrave; nước. Đại biểu cũng cho rằng, thẩm quyền HĐND cấp tỉnh quyết định vấn đề về nh&agrave; ở l&agrave; ph&ugrave; hợp.</p>\n<p><em><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/HN7_c2fbcf68-fd1f-4aaf-81a7-5177892c6366.jpeg\" alt /></em></p>\n<p><em>Đại biểu Ho&agrave;ng Văn Cường (Đo&agrave;n H&agrave; Nội) thảo luận tại tổ.</em></p>\n<p>Theo đại biểu Ho&agrave;ng Văn Cường, Nh&agrave; nước thu hồi đất sẽ đảm bảo lợi &iacute;ch cho người d&acirc;n. Nếu để cho người d&acirc;n tự thỏa thuận, kh&ocirc;ng phải người d&acirc;n n&agrave;o cũng c&oacute; đủ năng lực để thỏa thuận với nh&agrave; đầu tư. Khi đ&oacute; lại xảy ra t&igrave;nh trạng c&ugrave;ng một dự &aacute;n, chỗ n&agrave;y đền b&ugrave; gi&aacute; cao, chỗ kia gi&aacute; thấp, trong khi c&oacute; c&aacute;c dự &aacute;n Nh&agrave; nước thu hồi đất v&igrave; lợi &iacute;ch c&ocirc;ng cộng lại thực hiện đền b&ugrave; theo gi&aacute; Nh&agrave; nước, sẽ nảy sinh khiếu kiện. Do đ&oacute;, Nh&agrave; nước đ&atilde; thu hồi đất l&agrave; phải đền b&ugrave; thỏa đ&aacute;ng.</p>\n<p><strong>Nguồn: B&aacute;o H&agrave;nộimới điện tử</strong></p>\n<p>Link:<a href=\"http://www.hanoimoi.com.vn/tin-tuc/Bat-dong-san/1066220/cai-tao-chung-cu-cu-phai-gan-voi-tai-thiet-do-thi-quy-dinh-thoi-han-so-huu-chung-cu-moi\">http://www.hanoimoi.com.vn/tin-tuc/Bat-dong-san/1066220/cai-tao-chung-cu-cu-phai-gan-voi-tai-thiet-do-thi-quy-dinh-thoi-han-so-huu-chung-cu-moi</a></p>\n</div>\n</div>\n<div><span>Đơn vị/Người đăng:&nbsp;Ban Tuy&ecirc;n gi&aacute;o Th&agrave;nh ủy</span></div>",
	"canCreateMaleSpeakVoiceAt": "2023-06-08T03:17:42.164Z",
	"canCreateFemaleSpeakVoiceAt": "2023-06-08T03:17:42.164Z",
	"trangThaiDuyetTin": "Đã phát hành",
	"doiTuong": "Đơn vị",
	"version": "2",
	"noiDungBaoNoi": "ha ha ha ha",
	"searchDate": "2023-06-04T02:57:08.590Z",
	"idNguoiDang": "644c9ac02b1efa72a0f33414",
	"vbeeToken": "kCdgq1okOxyQ6wKyjzaum_-nTB64SSB_efUwNa_4u7pHJ2mwuQrCBsWCT6ABB7Kw",
	"createdAt": "2023-06-04T02:57:08.866Z",
	"updatedAt": "2023-06-08T03:15:45.308Z",
	"speakVoiceReady": true,
	"__v": 0,
	"public": true,
	"urlMaleSpeakVoice": "https://apidev.sotaydangvien.com/v2.2/data/647bfd84ad986aea9b24ac63_male-speak-voice.mp3",
	"urlFemaleSpeakVoice": "https://apidev.sotaydangvien.com/v2.2/data/647bfd84ad986aea9b24ac63_female-speak-voice.mp3"
}
export interface DetailData {
	"loaiChiBo": [],
	"_id": "647bfd84ad986aea9b24ac63",
	"ngayDang": "2023-06-04T02:57:08.590Z",
	"idCoSoDang": "608bea5ab56a58bc82accbab",
	"tieuDe": "CẢI TẠO CHUNG CƯ CŨ PHẢI GẮN VỚI TÁI THIẾT ĐÔ THỊ, QUY ĐỊNH THỜI HẠN SỞ HỮU CHUNG CƯ MỚI",
	"idTopic": "6422d2234608ac66adaf6d13",
	"anhDaiDien": "https://apidev.sotaydangvien.com/v2.2/file/648147d93782318e7cbefa23/anh%20dai%20dien%20tin.jpeg",
	"moTa": "Phát biểu thảo luận tại tổ sáng 5-6, trong chương trình kỳ họp thứ năm, Quốc hội khóa XV, Ủy viên Bộ Chính trị, Bí thư Thành ủy Hà Nội, Trưởng đoàn đại biểu Quốc hội thành phố Hà Nội Đinh Tiến Dũng nêu quan điểm, cải tạo chung cư cũ phải gắn với tái thiết đô thị và quy định thời hạn sở hữu chung cư mới giải quyết được vấn đề.",
	"loaiNoiDungTinTuc": "Văn bản",
	"noiDung": "<div>\n<div>\n<div><span>Ph&aacute;t biểu thảo luận tại tổ s&aacute;ng 5-6, trong chương tr&igrave;nh kỳ họp thứ năm, Quốc hội kh&oacute;a XV, Ủy vi&ecirc;n Bộ Ch&iacute;nh trị, B&iacute; thư Th&agrave;nh ủy H&agrave; Nội, Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Đinh Tiến Dũng n&ecirc;u quan điểm, cải tạo chung cư cũ phải gắn với t&aacute;i thiết đ&ocirc; thị v&agrave; quy định thời hạn sở hữu chung cư mới giải quyết được vấn đề.</span></div>\n</div>\n</div>\n<div>\n<div>\n<p><em><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/Ha%20Noi%204_b65f8241-80a6-40f2-afa7-8580467d493e.jpeg\" alt /></em></p>\n<p><em>Đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội thảo luận tại tổ s&aacute;ng 5-6.</em></p>\n<p><strong>Đề nghị t&iacute;nh to&aacute;n lại việc sở hữu chung cư kh&ocirc;ng c&oacute; thời hạn</strong></p>\n<p>Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Đinh Tiến Dũng nhận định, nh&agrave; t&aacute;i định cư ở H&agrave; Nội &ldquo;thừa vẫn thừa, thiếu vẫn thiếu&rdquo;. Thừa theo nhu cầu v&igrave; vừa qua một loạt dự &aacute;n người d&acirc;n chỉ nhận tiền, kh&ocirc;ng nhận nh&agrave;, c&ograve;n thiếu v&igrave; theo Luật Đất đai phải c&oacute; nh&agrave; t&aacute;i định cư mới được triển khai dự &aacute;n. Do đ&oacute;, B&iacute; thư Th&agrave;nh ủy Đinh Tiến Dũng cho rằng, dự thảo Luật Nh&agrave; ở (sửa đổi) n&ecirc;n c&oacute; hướng mở hơn, ho&agrave;n to&agrave;n giao cấp tỉnh c&oacute; thể bố tr&iacute; từ nh&agrave; t&aacute;i định cư sang nh&agrave; ở x&atilde; hội v&agrave; ngược lại để linh hoạt hơn.</p>\n<p>&ldquo;Chả lẽ bố tr&iacute; d&acirc;n ở ph&iacute;a T&acirc;y H&agrave; Nội sang Long Bi&ecirc;n nhận nh&agrave; t&aacute;i định cư? V&ocirc; l&yacute; lắm!&rdquo;, đồng ch&iacute; Đinh Tiến Dũng n&oacute;i, đồng thời nhấn mạnh, t&igrave;nh trạng tr&ecirc;n dẫn đến hệ quả l&agrave; thừa vẫn thừa, thiếu vẫn thiếu v&agrave; rất &aacute;ch tắc trong triển khai c&aacute;c dự &aacute;n giao th&ocirc;ng, dự &aacute;n trọng điểm của th&agrave;nh phố.</p>\n<p><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/HN5_f1a2eeb1-2a2b-44be-8c3a-2c1604868b25.jpeg\" alt /></p>\n<p><em>B&iacute; thư Th&agrave;nh ủy H&agrave; Nội, Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Đinh Tiến Dũng ph&aacute;t biểu thảo luận.</em></p>\n<p>Về tr&aacute;ch nhiệm nh&agrave; đầu tư dự &aacute;n nh&agrave; ở thương mại, B&iacute; thư Th&agrave;nh ủy H&agrave; Nội đề nghị bổ sung chế t&agrave;i bắt buộc trong luật về việc c&aacute;c chủ đầu tư n&agrave;y phải đảm bảo việc đầu tư hạ tầng x&atilde; hội. &ldquo;Thực tiễn c&oacute; chuyện l&agrave;m nh&agrave; b&aacute;n xong nhưng quay đi quay lại rất thiếu hạ tầng x&atilde; hội trong c&aacute;c dự &aacute;n, như thiếu trường học, bệnh viện. Ngay ở Thủ đ&ocirc;, c&oacute; dự &aacute;n nh&agrave; ở 20 năm nay rồi chưa x&acirc;y được trường học, d&acirc;n v&agrave;o ở k&iacute;n m&iacute;t&rdquo;, đồng ch&iacute; Đinh Tiến Dũng n&ecirc;u r&otilde; v&agrave; cho biết, th&agrave;nh phố y&ecirc;u cầu những dự &aacute;n kh&ocirc;ng đầu tư hạ tầng x&atilde; hội sẽ thu hồi lại, đề nghị tiếp tục đầu tư, c&oacute; thể bằng ng&acirc;n s&aacute;ch hoặc k&ecirc;u gọi nh&agrave; đầu tư thứ ph&aacute;t.</p>\n<p>Li&ecirc;n quan cải tạo chung cư cũ, B&iacute; thư Th&agrave;nh ủy H&agrave; Nội n&ecirc;u nhiều bất cập khi chung cư l&agrave; sở hữu của người d&acirc;n nhưng lại quy định cải tạo bằng đầu tư c&ocirc;ng, hoặc việc người d&acirc;n đ&oacute;ng g&oacute;p kinh ph&iacute; kiểm định nh&agrave; chung cư.</p>\n<p>B&iacute; thư Th&agrave;nh ủy Đinh Tiến Dũng cho rằng: &ldquo;Chỗ n&agrave;y kh&ocirc;ng cần thiết m&agrave; Nh&agrave; nước n&ecirc;n đứng ra l&agrave;m. B&acirc;y giờ đang muốn cải tạo chung cư, thỏa thuận với người d&acirc;n vui vẻ rời đi, lại bảo g&oacute;p tiền để kiểm định th&igrave; v&ocirc; l&yacute;&rdquo;. Theo B&iacute; thư Th&agrave;nh ủy, quy định cứng như vậy sẽ kh&ocirc;ng thể l&agrave;m được khi vận h&agrave;nh. Muốn an to&agrave;n cho người d&acirc;n th&igrave; Nh&agrave; nước phải c&oacute; tr&aacute;ch nhiệm, nguồn vốn d&agrave;nh cho việc cần thiết th&igrave; Nh&agrave; nước bỏ ra.</p>\n<p>B&ecirc;n cạnh đ&oacute;, cải tạo chung cư cũ phải gắn với t&aacute;i thiết đ&ocirc; thị v&agrave; quy định thời hạn sở hữu chung cư mới giải quyết được vấn đề. Thay v&igrave; c&aacute;ch l&agrave;m cải tạo từng t&ograve;a n&ecirc;n cải tạo chung cư theo từng khu. V&iacute; dụ nơi n&agrave;o c&oacute; 4-5 t&ograve;a chung cư cũ, mỗi t&ograve;a 4-5 tầng th&igrave; khi đầu tư x&acirc;y dựng lại, chỉ l&agrave;m 1-2 t&ograve;a v&agrave; l&agrave;m cao tầng hơn, c&ograve;n b&ecirc;n dưới để l&agrave;m kh&ocirc;ng gian thương mại v&agrave; dịch vụ, tầng hầm, b&atilde;i đỗ xe&hellip; Theo Trưởng đo&agrave;n Đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội, l&agrave;m như vậy người d&acirc;n sẽ c&oacute; kh&ocirc;ng gian sống đảm bảo hơn v&agrave; nh&agrave; đầu tư cũng c&oacute; lợi &iacute;ch.</p>\n<p><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/DOan%20HN%203_639f6c35-d71c-4532-8629-45e4f1e347a8.jpeg\" alt /></p>\n<p><em>C&aacute;c th&agrave;nh vi&ecirc;n Đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội thảo luận tại tổ s&aacute;ng 5-6.</em></p>\n<p>B&iacute; thư Th&agrave;nh ủy H&agrave; Nội khẳng định, khi quy định chung cư c&oacute; thời hạn, Nh&agrave; nước c&oacute; tr&aacute;ch nhiệm bảo vệ cuộc sống người d&acirc;n, cưỡng chế di dời khi chung cư xuống cấp, nguy hiểm cũng l&agrave; b&igrave;nh thường, v&igrave; lợi &iacute;ch của người d&acirc;n. Hoặc khi chưa đến thời hạn hoặc s&aacute;t đến thời hạn rồi m&agrave; chung cư xuống cấp, người d&acirc;n tự nguyện đồng t&igrave;nh th&igrave; Nh&agrave; nước cũng đứng ra l&agrave;m.</p>\n<p>&ldquo;Vừa qua, H&agrave; Nội lo v&igrave; sợ rủi ro ch&aacute;y nổ, động đất th&igrave; kh&ocirc;ng biết hậu quả thế n&agrave;o. B&ecirc;n cạnh đ&oacute; c&ograve;n thực tế nhiều nh&agrave; lắp gh&eacute;p, cơi nới n&ecirc;n rất &aacute;p lực&rdquo;, đồng ch&iacute; Đinh Tiến Dũng n&ecirc;u thực tế v&agrave; đề nghị t&iacute;nh to&aacute;n lại việc sở hữu chung cư kh&ocirc;ng c&oacute; thời hạn.</p>\n<p><strong>Thẩm quyền HĐND cấp tỉnh quyết định vấn đề về nh&agrave; ở l&agrave; ph&ugrave; hợp</strong></p>\n<p>Nhấn mạnh Luật Nh&agrave; ở rất quan trọng với H&agrave; Nội, Ph&oacute; B&iacute; thư Th&agrave;nh ủy, Chủ tịch HĐND th&agrave;nh phố, Ph&oacute; Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Nguyễn Ngọc Tuấn cho hay, vấn đề cần quan t&acirc;m khi triển khai x&acirc;y dựng c&aacute;c dự &aacute;n, đ&oacute; l&agrave; phải đảm bảo đủ điều kiện an to&agrave;n ph&ograve;ng ch&aacute;y, chữa ch&aacute;y. Vấn đề sở hữu chung - ri&ecirc;ng giữa chủ đầu tư - cư d&acirc;n - quản l&yacute; chung cư cũng cần phải quan t&acirc;m, kể cả khu vực để xe đạp cho người khuyết tật cũng c&oacute; tranh chấp phức tạp. Sau n&agrave;y n&ecirc;n chăng trong bản vẽ thiết kế của Sở X&acirc;y dựng nghi&ecirc;n cứu cả vấn đề n&agrave;y.</p>\n<p><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/HN6_28e5c943-45cf-46f4-a477-4fdbf981dd24.jpeg\" alt /></p>\n<p><em>Chủ tịch HĐND th&agrave;nh phố, Ph&oacute; Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Nguyễn Ngọc Tuấn thảo luận tại tổ.</em></p>\n<p>&ldquo;Li&ecirc;n quan cải tạo, x&acirc;y dựng lại chung cư cũ, Ch&iacute;nh phủ đ&atilde; c&oacute; Nghị định 69/2021/NĐ-CP, nhưng ngo&agrave;i r&agrave; so&aacute;t, cần t&iacute;nh to&aacute;n h&agrave;i h&ograve;a lợi &iacute;ch của người d&acirc;n, doanh nghiệp, Nh&agrave; nước. Đồng thời, khi x&acirc;y dựng, cải tạo cần gắn với vấn đề quy hoạch để đảm bảo đồng bộ&rdquo;, Ph&oacute; Trưởng đo&agrave;n đại biểu Quốc hội th&agrave;nh phố H&agrave; Nội Nguyễn Ngọc Tuấn nhấn mạnh.</p>\n<p>T&aacute;n th&agrave;nh việc sửa đổi Luật Nh&agrave; ở, đại biểu Ho&agrave;ng Văn Cường (Đo&agrave;n H&agrave; Nội) cho rằng, nội dung thỏa thuận với nh&agrave; đầu tư trong việc lấy đất l&agrave;m dự &aacute;n dễ dẫn đến mất b&igrave;nh đẳng giữa c&aacute;c gi&aacute; đền b&ugrave;, v&igrave; thế n&ecirc;n c&oacute; sự can thiệp của Nh&agrave; nước. Đại biểu cũng cho rằng, thẩm quyền HĐND cấp tỉnh quyết định vấn đề về nh&agrave; ở l&agrave; ph&ugrave; hợp.</p>\n<p><em><img src=\"https://sotaydangvien.hanoi.dcs.vn/TaiLieu/LichCongTac/2023-06/HN7_c2fbcf68-fd1f-4aaf-81a7-5177892c6366.jpeg\" alt /></em></p>\n<p><em>Đại biểu Ho&agrave;ng Văn Cường (Đo&agrave;n H&agrave; Nội) thảo luận tại tổ.</em></p>\n<p>Theo đại biểu Ho&agrave;ng Văn Cường, Nh&agrave; nước thu hồi đất sẽ đảm bảo lợi &iacute;ch cho người d&acirc;n. Nếu để cho người d&acirc;n tự thỏa thuận, kh&ocirc;ng phải người d&acirc;n n&agrave;o cũng c&oacute; đủ năng lực để thỏa thuận với nh&agrave; đầu tư. Khi đ&oacute; lại xảy ra t&igrave;nh trạng c&ugrave;ng một dự &aacute;n, chỗ n&agrave;y đền b&ugrave; gi&aacute; cao, chỗ kia gi&aacute; thấp, trong khi c&oacute; c&aacute;c dự &aacute;n Nh&agrave; nước thu hồi đất v&igrave; lợi &iacute;ch c&ocirc;ng cộng lại thực hiện đền b&ugrave; theo gi&aacute; Nh&agrave; nước, sẽ nảy sinh khiếu kiện. Do đ&oacute;, Nh&agrave; nước đ&atilde; thu hồi đất l&agrave; phải đền b&ugrave; thỏa đ&aacute;ng.</p>\n<p><strong>Nguồn: B&aacute;o H&agrave;nộimới điện tử</strong></p>\n<p>Link:<a href=\"http://www.hanoimoi.com.vn/tin-tuc/Bat-dong-san/1066220/cai-tao-chung-cu-cu-phai-gan-voi-tai-thiet-do-thi-quy-dinh-thoi-han-so-huu-chung-cu-moi\">http://www.hanoimoi.com.vn/tin-tuc/Bat-dong-san/1066220/cai-tao-chung-cu-cu-phai-gan-voi-tai-thiet-do-thi-quy-dinh-thoi-han-so-huu-chung-cu-moi</a></p>\n</div>\n</div>\n<div><span>Đơn vị/Người đăng:&nbsp;Ban Tuy&ecirc;n gi&aacute;o Th&agrave;nh ủy</span></div>",
	"canCreateMaleSpeakVoiceAt": "2023-06-08T03:17:42.164Z",
	"canCreateFemaleSpeakVoiceAt": "2023-06-08T03:17:42.164Z",
	"trangThaiDuyetTin": "Đã phát hành",
	"doiTuong": "Đơn vị",
	"version": "2",
	"noiDungBaoNoi": "ha ha ha ha",
	"searchDate": "2023-06-04T02:57:08.590Z",
	"idNguoiDang": "644c9ac02b1efa72a0f33414",
	"vbeeToken": "kCdgq1okOxyQ6wKyjzaum_-nTB64SSB_efUwNa_4u7pHJ2mwuQrCBsWCT6ABB7Kw",
	"createdAt": "2023-06-04T02:57:08.866Z",
	"updatedAt": "2023-06-08T03:15:45.308Z",
	"speakVoiceReady": true,
	"__v": 0,
	"public": true,
	"urlMaleSpeakVoice": "https://apidev.sotaydangvien.com/v2.2/data/647bfd84ad986aea9b24ac63_male-speak-voice.mp3",
	"urlFemaleSpeakVoice": "https://apidev.sotaydangvien.com/v2.2/data/647bfd84ad986aea9b24ac63_female-speak-voice.mp3"
}
export interface DataSearch {
	_id: "647028bbe352e2e4502be06c";
	ngayDang: "2023-05-26T03:32:01.239Z";
	tieuDe: "bản tin công tác Trang đăng";
	anhDaiDien: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_the_Communist_Party_of_Vietnam.svg/640px-Flag_of_the_Communist_Party_of_Vietnam.svg.png";
	loaiNoiDungTinTuc: "Văn bản";
	moTa: "ahiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";
	noiDungBaoNoi: "";
	idNguoiDang: {
		_id: "644c9ac02b1efa72a0f33414";
		hoVaTen: "Test Một";
		username: "dv01";
		id: "644c9ac02b1efa72a0f33414";
	};
	createdAt: "2023-05-26T03:34:19.839Z";
	updatedAt: "2023-05-26T03:35:54.642Z";
	idTopic: {
		_id: "642116504608ac66ada5a94d";
		name: "Tin tức trong nước";
	};
}
export interface DataDanhMucTin{
	"_id": "64814a343782318e7cbefac2",
	"ngayDang": "2023-06-08T03:25:40.206Z",
	"tieuDe": "PHÁT TRIỂN QUAN HỆ HỮU NGHỊ HỢP TÁC GIỮA HÀ NỘI VÀ LA HABANA (CUBA) LÊN TẦM CAO MỚI",
	"idTopic": {
		"_id": "62d537d012ebc452df8aa0e9",
		"name": "Tin trong nước"
	},
	"anhDaiDien": "https://apidev.sotaydangvien.com/v2.2/file/64814a343782318e7cbefabe/anh%20dai%20dien%20tin.jpeg",
	"moTa": "Chiều 1-6, tại Hà Nội, Ủy viên Trung ương Đảng, Phó Bí thư Thường trực Thành ủy Hà Nội Nguyễn Thị Tuyến đã làm việc với Đại sứ Cuba tại Việt Nam Orlando Nicolas Hernández Guillen để thảo luận về chuyến thăm chính thức Thủ đô Hà Nội của Bí thư thứ nhất Thành ủy La Habana Luis Antonio Torres Iríbar và Đoàn đại biểu cấp cao Thành ủy La Habana dự kiến trong tuần tới và việc Hà Nội tặng La Habana 2.000 tấn gạo đễ hỗ trợ công tác an sinh xã hội.",
	"loaiNoiDungTinTuc": "Văn bản",
	"noiDungBaoNoi": "",
	"idNguoiDang": {
		"_id": "61e950b4a7469c40a682aeb6",
		"username": "admin",
		"hoVaTen": "Trần Văn 54",
		"id": "61e950b4a7469c40a682aeb6"
	},
	"createdAt": "2023-06-08T03:25:40.333Z",
	"updatedAt": "2023-06-08T03:26:40.930Z"
}