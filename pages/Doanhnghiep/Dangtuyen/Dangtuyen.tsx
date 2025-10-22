import React, { useMemo, useState } from "react";
import styled from 'styled-components';
import Link from "next/link";
import { postUngtuyen } from "../../../api/tintuyendung";
import { TinTuyenDungDangTin } from "../../../api/tintuyendung/type";
import { toast } from "react-toastify";
const Dangtuyen: React.FC = () => {
    const [step, setStep] = useState<number>(1);

    // Step 1 fields
    const [title, setTitle] = useState("");
    const [position, setPosition] = useState("");
    const [level, setLevel] = useState("");
    const [knowledge, setKnowledge] = useState("");
    const [experience, setExperience] = useState("");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");
    const [benefits, setBenefits] = useState("");
    const [extra, setExtra] = useState("");

    // Step 2 fields
    const [jobType, setJobType] = useState("");
    const [salary, setSalary] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [address, setAddress] = useState("");
    const [trialStart, setTrialStart] = useState('');
    const [trialEnd, setTrialEnd] = useState('');
    const [workStart, setWorkStart] = useState('');
    const [workEnd, setWorkEnd] = useState('');
    const [deadline, setDeadline] = useState('');
    const [quantity, setQuantity] = useState('');
    const [receiverName, setReceiverName] = useState('');
    const [receiverPhone, setReceiverPhone] = useState('');
    const [receiverEmail, setReceiverEmail] = useState('');


    // completeness check
    const step1Complete = useMemo(() => {
        return title;
    }, [title]);

    const step2Complete = useMemo(() => {
        return jobType
    }, [jobType]);

    // preview always shows if at least step 1 filled
    const canPreview = step1Complete || step2Complete;
    const jobDetail = {
        id: "data-analyst",
        title: "Data Analyst (Risk Management)",
        company: {
            name: "Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam",
            logo: "https://dongphucvina.vn/wp-content/uploads/2023/05/logo-techcombank-dongphucvina.vn_.png",
            employeeCount: "30-40 nhân viên",
            type: "Dịch vụ khách hàng",
            address: "6 Quang Trung, Hoàn Kiếm, Hà Nội",
            website: "https://jobsapti.vn/viec-lam/...",
            description: "Ngân Hàng Thương Mại Cổ Phần Kỹ Thương Việt Nam (Techcombank) là một trong những ngân hàng thương mại hàng đầu tại Việt Nam."
        },
        mucLuong: "25 - 35 triệu",
        location: "Hà Nội, Việt Nam",
        salary: "25.000.000đ - 35.000.000đ",
        expiredDate: "30/10/2023",
        applyDate: "24/09/2023",
        postDate: "16/09/2025",
        experience: "Không yêu cầu",
        level: "Nhân viên",
        experienceYear: "2-3 năm",
        educationLevel: "Đại học trở lên",
        gender: "Nam/ Nữ",
        recruitCount: "1 nam/ 1 nữ",
        workType: "Internship",
        description: `
        <p>Techcombank hiện đang tìm kiếm ứng viên có kinh nghiệm và đam mê cho vị trí Data Analyst (Risk Management) để tham gia vào đội ngũ của chúng tôi.</p>
    `,
        jobDetail: [
            "Thu thập dữ liệu từ các hệ thống",
            "Thiết lập các yêu cầu về cơ sở hạ tầng dữ liệu để quản lý rủi ro cho danh mục tín dụng BB bán lẻ và nhỏ",
            "Xây dựng các công cụ, biện pháp nhận diện rủi ro tín dụng đối với khách hàng BB nhỏ lẻ",
            "Hàm mức tín dụng, quản lý rủi ro tín dụng",
            "Xây dựng chính báo sớm về giám sát rủi ro",
            "Xây dựng Chính sách, Sản phẩm, Công cụ, Chỉ tiêu quản điểm cảnh báo sớm và giám sát rủi ro đối với khách hàng BB nhỏ lẻ và nhỏ lẻ",
            "Thực hiện phân tích hành vi rủi ro, kiểm tra tuân chấp dựng và quản lý cảnh báo sớm",
            "Phối hợp với RBG & Small BB trong việc đào tạo các đơn vị kinh doanh về nhận diện và cảnh báo sớm rủi ro",
            "Quản lý danh mục đầu tư bán lẻ",
            "Xác định, kiểm soát và đánh giá chất lượng danh mục đầu tư của phân khúc ngân hàng bán lẻ và BB nhỏ",
            "Lập báo cáo định kỳ và báo cáo phân tích đột xuất về danh mục đầu tư và phân tích theo yêu cầu của HĐQT, HDQT và các đơn vị liên quan",
            "Tăng cường năng cao chất lượng báo cáo về rủi ro Hóa nợ dung và quản lý danh mục đầu tư",
            "Thực hiện mẫu cấu trúc chế độ rủi ro tín dụng theo quy định",
            "Quản lý rủi ro theo phân khúc BB bán lẻ & nhỏ bao gồm việc định đô lượng, giảm thiểu và báo cáo rui ro tin dụng Theo dõi tiến độ xử lý rủi ro theo đối danh mục nợ cần quan sát đặc biệt"
        ],
        requirements: [
            "2-3 năm kinh nghiệm trong QA, Quản lý rủi ro",
            "Có kiến thức tốt về các công cụ phân tích Python, SQL...",
            "Có kỹ năng thực vễ Microsoft Office (Word, Excel, PowerPoint, Outlook,...)",
            "Thành thạo các công cụ trực quan hóa dữ liệu (Tableau, PowerBI,...) là một lợi thế",
            "Kỹ năng báo cáo tiếng Anh xuất sắc",
            "Cách tiếp cận có phương pháp và hợp lý, khả năng lập kế hoạch công việc và đáp ứng thời hạn",
            "Hiểu biết về đạo đức của việc thu thập và làm việc với dữ liệu, tuân chỉnh các rà chủ ý đến bảng chủ tiêu",
            "Tư duy cởi mở, khả năng thích ứng nhanh với công nghệ mới/môi trường làm việc ngân hàng mới và học hỏi cách làm mới"
        ],
        benefits: [
            "Mức lương: 25 - 35 triệu",
            "Tham gia các khóa đào tạo nâng cao của Techcombank",
            "Được cân nhắc trong kỳ tăng lương hàng năm nếu có các chuyên gia/Quản lý cấp cao đề xuất tại thị trường Việt Nam.",
            "Chia sẻ lò trinh thăng tiến rõ ràng với đồng nghiệp cùng cấp bậc có năng lực",
            "Nắm bắt cơ hội đào tạo toàn diện, phát triển bản thân, và thăng tiến trong sự nghiệp"
        ],
        jobTags: ["UI/UX Design", "Thiết kế", "Công nghệ thị phường tiên"],
        locations: ["Hà Nội", "Đống Đa"]
    };
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* LEFT PANEL */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Đăng Tuyển Ngay
                    </h2>

                    {/* Step indicator */}
                    <div className="flex items-center mb-6">
                        <div
                            className={`flex items-center gap-2 ${step === 1 ? "text-red-600" : "text-gray-500"
                                }`}
                        >
                            <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center border font-semibold ${step === 1
                                    ? "bg-red-100 border-red-500 text-red-600"
                                    : "bg-white border-gray-300"
                                    }`}
                            >
                                1
                            </div>
                            <span className="text-sm font-medium">Vị trí chuyên môn</span>
                        </div>
                        <div className="flex-1 border-t border-gray-200 mx-3" />
                        <div
                            className={`flex items-center gap-2 ${step === 2 ? "text-red-600" : "text-gray-500"
                                }`}
                        >
                            <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center border font-semibold ${step === 2
                                    ? "bg-red-100 border-red-500 text-red-600"
                                    : "bg-white border-gray-300"
                                    }`}
                            >
                                2
                            </div>
                            <span className="text-sm font-medium">Mức lương & Địa điểm</span>
                        </div>
                    </div>

                    {/* Step 1 */}
                    {step === 1 && (
                        <div className="space-y-4">
                            <h3 className="text-[#051A53] font-semibold mb-2">Thông tin chung</h3>
                            <div>
                                <label className="block text-sm font-semibold text-[#6F6F6F]">
                                    Tiêu đề tin *
                                </label>
                                <input
                                    className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Nhập tiêu đề tin"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Vị trí chuyên môn *
                                    </label>
                                    <input
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                        placeholder="Nhập vị trí chuyên môn"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Kiến thức ngành *
                                    </label>
                                    <input
                                        value={knowledge}
                                        onChange={(e) => setKnowledge(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                        placeholder="Nhập kiến thức ngành"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Cấp bậc
                                    </label>
                                    <input
                                        value={level}
                                        onChange={(e) => setLevel(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                        placeholder="Nhập cấp bậc"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Kinh nghiệm tối thiểu
                                    </label>
                                    <input
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                        placeholder="Nhập yêu cầu kinh nghiệm"
                                    />
                                </div>
                            </div>
                            <h3 className="text-[#051A53] font-semibold mb-2">Thông tin chi tiết</h3>
                            <div>
                                <label className="block text-sm font-semibold text-[#6F6F6F]">
                                    Mô tả công việc *
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={5}
                                    className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                    placeholder="Nhập mô tả chi tiết công việc..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#6F6F6F]">
                                    Yêu cầu ứng viên
                                </label>
                                <textarea
                                    value={requirements}
                                    onChange={(e) => setRequirements(e.target.value)}
                                    rows={3}
                                    className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                    placeholder="Nhập yêu cầu..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#6F6F6F]">
                                    Quyền lợi ứng viên
                                </label>
                                <textarea
                                    value={benefits}
                                    onChange={(e) => setBenefits(e.target.value)}
                                    rows={3}
                                    className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                    placeholder="Nhập quyền lợi..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-[#6F6F6F]">
                                    Quyền lợi bổ sung
                                </label>
                                <textarea
                                    value={extra}
                                    onChange={(e) => setExtra(e.target.value)}
                                    rows={2}
                                    className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                    placeholder="Nhập quyền lợi bổ sung..."
                                />
                            </div>

                            <div className="flex justify-end pt-3">
                                <button
                                    disabled={!step1Complete}
                                    onClick={() => step1Complete && setStep(2)}
                                    className={`px-5 py-2 rounded-md font-semibold ${step1Complete
                                        ? "bg-red-600 text-white"
                                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                        }`}
                                >
                                    Tiếp theo
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                        <div className="space-y-4">
                            <h3 className="text-[#051A53] font-semibold mb-2">Mức lương & địa điểm </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Loại hình công việc *
                                    </label>
                                    <input
                                        value={jobType}
                                        onChange={(e) => setJobType(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                        placeholder="VD: Full-time"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Mức lương *
                                    </label>
                                    <input
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                        placeholder="Nhập mức lương"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Thành phố *
                                    </label>
                                    <input
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                        placeholder="Chọn thành phố"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Quận / Huyện
                                    </label>
                                    <input
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                        placeholder="Chọn quận"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Địa chỉ cụ thể
                                    </label>
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                        placeholder="Nhập địa chỉ cụ thể"
                                    />
                                </div>
                            </div>
                            {/* Thử làm việc */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Thứ làm việc (Bắt đầu)
                                    </label>
                                    <select
                                        value={trialStart}
                                        onChange={(e) => setTrialStart(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                    >
                                        <option value="">Chọn thứ bắt đầu</option>
                                        <option value="Thứ 2">Thứ 2</option>
                                        <option value="Thứ 3">Thứ 3</option>
                                        <option value="Thứ 4">Thứ 4</option>
                                        <option value="Thứ 5">Thứ 5</option>
                                        <option value="Thứ 6">Thứ 6</option>
                                        <option value="Thứ 7">Thứ 7</option>
                                        <option value="Chủ nhật">Chủ nhật</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Thứ làm việc (Kết thúc)
                                    </label>
                                    <select
                                        value={trialEnd}
                                        onChange={(e) => setTrialEnd(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                    >
                                        <option value="">Chọn thứ kết thúc</option>
                                        <option value="Thứ 2">Thứ 2</option>
                                        <option value="Thứ 3">Thứ 3</option>
                                        <option value="Thứ 4">Thứ 4</option>
                                        <option value="Thứ 5">Thứ 5</option>
                                        <option value="Thứ 6">Thứ 6</option>
                                        <option value="Thứ 7">Thứ 7</option>
                                        <option value="Chủ nhật">Chủ nhật</option>
                                    </select>
                                </div>
                            </div>


                            {/* Khung giờ làm việc */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Giờ làm việc (Bắt đầu) *
                                    </label>
                                    <input
                                        type="time"
                                        value={workStart}
                                        onChange={(e) => setWorkStart(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#6F6F6F]">
                                        Giờ làm việc (Kết thúc) *
                                    </label>
                                    <input
                                        type="time"
                                        value={workEnd}
                                        onChange={(e) => setWorkEnd(e.target.value)}
                                        className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                    />
                                </div>
                            </div>

                            {/* Thông tin nhận hồ sơ */}
                            <div className="pt-4">
                                <h3 className="text-[#051A53] font-semibold mb-2">Thông tin nhận hồ sơ</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-semibold text-[#6F6F6F]">
                                            Hạn nhận hồ sơ *
                                        </label>
                                        <input
                                            type="date"
                                            value={deadline}
                                            onChange={(e) => setDeadline(e.target.value)}
                                            className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#6F6F6F]">
                                            Số lượng tuyển dụng *
                                        </label>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                            placeholder="Nhập số lượng"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                                    <div>
                                        <label className="block text-sm font-semibold text-[#6F6F6F]">
                                            Họ tên người nhận *
                                        </label>
                                        <input
                                            value={receiverName}
                                            onChange={(e) => setReceiverName(e.target.value)}
                                            className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                            placeholder="Nhập họ tên"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#6F6F6F]">
                                            Số điện thoại *
                                        </label>
                                        <input
                                            value={receiverPhone}
                                            onChange={(e) => setReceiverPhone(e.target.value)}
                                            className="border border-gray-300 focus:border-red-500 focus:outline-none rounded-md px-3 py-2 w-full"
                                            placeholder="Nhập SĐT"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#6F6F6F]">
                                            Email người nhận
                                        </label>
                                        <input
                                            type="email"
                                            value={receiverEmail}
                                            onChange={(e) => setReceiverEmail(e.target.value)}
                                            className="border border-gray-300 focus:border-red-500 focus:ring-0 focus:outline-none rounded-md w-full p-2"
                                            placeholder="Nhập email"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-between pt-3">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-4 py-2 border rounded-md"
                                >
                                    Quay lại
                                </button>
                                <button
                                    disabled={!step2Complete}
                                    className={`px-5 py-2 rounded-md font-semibold ${step2Complete
                                        ? "bg-red-600 text-white"
                                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                        }`}
                                    onClick={async () => {
                                        if (!step2Complete) return;
                                        const data: TinTuyenDungDangTin = {
                                            tieuDe: title || "Nhân viên kinh doanh phần mềm",
                                            viTriChuyenMon: position || "Sales IT",
                                            kienThucNganhNghe: knowledge || "Công nghệ thông tin, phần mềm",
                                            capBac: level || "Nhân viên",
                                            kinhNghiem: "Không yêu cầu kinh nghiệm",
                                            moTa: description || "Tư vấn và chăm sóc khách hàng sử dụng sản phẩm phần mềm.",
                                            yeuCauCongViec: requirements || "Có kỹ năng giao tiếp tốt, ưu tiên ứng viên yêu thích công nghệ.",
                                            quyenLoi: benefits || "Thưởng KPI, bảo hiểm đầy đủ, du lịch hàng năm.",
                                            quyenLoiBoSung: extra || "Môi trường làm việc thân thiện, hỗ trợ đào tạo.",
                                            hinhThucCongViec: jobType || "Toàn thời gian",
                                            mucLuong: 15000000,
                                            mucLuongToiDa: 20000000,
                                            mucLuongToiThieu: 12000000,
                                            diaDiemLamViec: address || "Số 442 Nguyễn Thị Minh Khai, Phường 5, Quận 3, TP. Hồ Chí Minh",
                                            thuBatDauLamViec: trialStart || "Thứ 2",
                                            thuKetThucLamViec: trialEnd || "Thứ 6",
                                            khungGioBatDauLamViec: workStart || "08:00",
                                            khungGioKetThucLamViec: workEnd || "17:00",
                                            hanNhanHoSo: "2025-10-21T05:23:38.973Z",
                                            soLuongTuyen: 3,
                                            hoTenNguoiLienHe: receiverName || "Nguyễn Văn A",
                                            emailNguoiLienHe: receiverEmail || "nva@company.vn",
                                            soDienThoaiNguoiLienHe: receiverPhone || "0909123456",
                                            lyDoTuChoiDuyet: "",
                                            ngayHetHan: "2025-10-21T05:23:38.973Z",
                                            ssoId: "ede3764e-651c-412c-b11b-e3be1e5c6e39",
                                            doanhNghiepId: "68f89fa2aa693e0f18487b3e",
                                        };
                                        try {
                                            const res = await postUngtuyen(data);
                                            toast.success("Đăng tin tuyển dụng thành công!");
                                            setStep(1);
                                        } catch (err: any) {
                                            toast.error("Đăng tin thất bại!");
                                        }
                                    }}
                                >
                                    Thêm tin tuyển dụng
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT PREVIEW PANEL */}
                {canPreview ? (
                    <>
                        <div className="bg-blue-50 rounded-xl shadow-inner p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                Xem trước tin đăng tuyển
                            </h3>
                            <PageContainer>
                                <JobDetailContainer>
                                    {/* Layout 2 cột chính */}
                                    <TwoColumnLayout>
                                        {/* Cột bên trái - Thông tin chính về công việc */}
                                        <LeftColumn>
                                            <JobDetailCard>
                                                <JobHeader>
                                                    <JobTitle>{title || "Chưa có tiêu đề"}</JobTitle>
                                                    <JobMetaRow>
                                                        <JobMetaItem>
                                                            <img width="15" height="15" src="/images/home/salary.png" alt="Mức lương" />
                                                            <div className="inline-grid">
                                                                <span className="text-[6px]">Mức lương </span>
                                                                <span className="text-[#051A53] text-[7px] ">{salary || "Chưa có"}</span>
                                                            </div>
                                                        </JobMetaItem>
                                                        <JobMetaItem>
                                                            <img width="15" height="15" src="/images/home/location.png" alt="Địa điểm" />
                                                            <div className="inline-grid">
                                                                <span className="text-[6px]">Địa điểm </span>
                                                                <span className="text-[#051A53] text-[7px]">{address || "Chưa có"}</span>
                                                            </div>
                                                        </JobMetaItem>
                                                        <JobMetaItem>
                                                            <img width="15" height="15" src="/images/home/experience.png" alt="Kinh nghiệm" />
                                                            <div className="inline-grid">
                                                                <span className="text-[6px]">Kinh nghiệm </span>
                                                                <span className="text-[#051A53] text-[7px]">{experience || "Chưa có"}</span>
                                                            </div>
                                                        </JobMetaItem>
                                                        <JobMetaItem>
                                                            <img width="15" height="15" src="/images/home/calendarcolor.png" alt="Ngày đăng" />
                                                            <div className="inline-grid">
                                                                <span className="text-[6px]">Ngày đăng </span>
                                                                <span className="text-[#051A53] text-[7px]">{jobDetail.postDate}</span>
                                                            </div>
                                                        </JobMetaItem>
                                                    </JobMetaRow>
                                                    <JobMetaSecondRow>
                                                        <JobMetaItem>
                                                            <span className="text-[#AE7174] text-[6px] padding-[20px] bg-[#F7F6F5]">Hạn nộp hồ sơ: {deadline || "Chưa có"}</span>
                                                        </JobMetaItem>
                                                    </JobMetaSecondRow>
                                                </JobHeader>
                                            </JobDetailCard>

                                            <JobDetailSection>
                                                <SectionTitle>Mô tả công việc</SectionTitle>
                                                <DetailList>{description || "Chưa có mô tả công việc."}</DetailList>
                                                <SectionTitle>Yêu cầu ứng viên</SectionTitle>
                                                <DetailList>
                                                    {requirements || "Chưa có yêu cầu ứng viên."}
                                                </DetailList>

                                                <SectionTitle>Quyền lợi</SectionTitle>
                                                <DetailList>
                                                    {benefits || "Chưa có quyền lợi ứng viên."}
                                                </DetailList>

                                                <SectionTitle>Địa điểm làm việc</SectionTitle>
                                                <DetailList>
                                                    {address || "Chưa có địa điểm làm việc."}
                                                </DetailList>

                                                <SectionTitle>Thời gian làm việc</SectionTitle>
                                                <DetailList>
                                                    {workStart && workEnd && trialStart && trialEnd ? (
                                                        <span>{` ${trialStart} - ${trialEnd} (Từ ${workStart} - ${workEnd})`}</span>
                                                    ) : (
                                                        <span>Chưa có thời gian làm việc.</span>
                                                    )}
                                                </DetailList>

                                                <SectionTitle>Hạn nộp hồ sơ</SectionTitle>
                                                <DetailList>
                                                    {deadline || "Chưa có hạn nộp hồ sơ."}
                                                </DetailList>


                                            </JobDetailSection>
                                        </LeftColumn>

                                        {/* Cột bên phải - Thông tin công ty & các thông tin phụ */}
                                        <RightColumn>
                                            <CompanyInfoCard>
                                                <div className="flex w-[147.84px] h-[34.89px] ">

                                                    <img className="w-[34.89px] h-[34.89px] object-contain border border-gray-300 rounded-lg mb-4" src={jobDetail.company.logo} alt={jobDetail.company.name} />

                                                    <CompanyName>{jobDetail.company.name}</CompanyName>
                                                </div>
                                                <InfoList>
                                                    <InfoItem>
                                                        <InfoLabel>Quy mô:</InfoLabel>
                                                        <InfoValue>{jobDetail.company.employeeCount}</InfoValue>
                                                    </InfoItem>
                                                    <InfoItem>
                                                        <InfoLabel>Lĩnh vực:</InfoLabel>
                                                        <InfoValue>{jobDetail.company.type}</InfoValue>
                                                    </InfoItem>
                                                    <InfoItem>
                                                        <InfoLabel>Địa chỉ:</InfoLabel>
                                                        <InfoValue>{jobDetail.company.address}</InfoValue>
                                                    </InfoItem>
                                                </InfoList>

                                                <ViewCompanyLink href="/company/techcombank">
                                                    Xem trang công ty <ArrowIcon>→</ArrowIcon>
                                                </ViewCompanyLink>
                                            </CompanyInfoCard>

                                            <InfoSection>
                                                <SectionTitle>Thông tin chung</SectionTitle>
                                                <InfoGrid>
                                                    <InfoGridItem>
                                                        <InfoGridIcon>
                                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#666" />
                                                            </svg>
                                                        </InfoGridIcon>
                                                        <div>
                                                            <InfoGridLabel>Cấp bậc</InfoGridLabel>
                                                            <InfoGridValue>{level || "Chưa có"}</InfoGridValue>
                                                        </div>
                                                    </InfoGridItem>

                                                    <InfoGridItem>
                                                        <InfoGridIcon>
                                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                                                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="#666" />
                                                            </svg>
                                                        </InfoGridIcon>
                                                        <div>
                                                            <InfoGridLabel>Học vấn</InfoGridLabel>
                                                            <InfoGridValue>{jobDetail.educationLevel}</InfoGridValue>
                                                        </div>
                                                    </InfoGridItem>

                                                    <InfoGridItem>
                                                        <InfoGridIcon>
                                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                                                <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2zm0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#666" />
                                                            </svg>
                                                        </InfoGridIcon>
                                                        <div>
                                                            <InfoGridLabel>Số lượng tuyển</InfoGridLabel>
                                                            <InfoGridValue>{quantity || "Chưa có"}</InfoGridValue>
                                                        </div>
                                                    </InfoGridItem>

                                                    <InfoGridItem>
                                                        <InfoGridIcon>
                                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                                                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="#666" />
                                                            </svg>
                                                        </InfoGridIcon>
                                                        <div>
                                                            <InfoGridLabel>Hình thức làm việc</InfoGridLabel>
                                                            <InfoGridValue>{jobType || "Chưa có"}</InfoGridValue>
                                                        </div>
                                                    </InfoGridItem>

                                                    <InfoGridItem>
                                                        <InfoGridIcon>
                                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                                                <path d="M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77v2.02c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V15.3c-2.58-.56-4-1.83-4-3.3 0-2.21 4.03-4 9-4s9 1.79 9 4c0 1.47-1.42 2.74-4 3.3v-2.59c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.31.31.85.09.85-.35v-2.02c4.06-.64 7-2.53 7-4.77 0-2.76-4.48-5-10-5z" fill="#666" />
                                                            </svg>
                                                        </InfoGridIcon>
                                                        <div>
                                                            <InfoGridLabel>Giới tính</InfoGridLabel>
                                                            <InfoGridValue>{jobDetail.gender}</InfoGridValue>
                                                        </div>
                                                    </InfoGridItem>
                                                </InfoGrid>
                                            </InfoSection>
                                        </RightColumn>
                                    </TwoColumnLayout>
                                </JobDetailContainer>


                            </PageContainer>
                        </div>

                    </>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">Vui lòng hoàn thành tất cả các bước để xem trước tin đăng tuyển.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
`;

const JobDetailContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const TwoColumnLayout = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  width: auto;
  flex: 1;
`;

const RightColumn = styled.div`
  width: 168.77px;
  flex-shrink: 0;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const JobDetailCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 1px solid #e0e0e0;
  height: 85.49px;
`;

const JobHeader = styled.div``;

const JobTitle = styled.h1`
  font-size: 12px;
  font-weight: 700;
  color: #051A53;
  margin: 0 0 5px;
`;

const JobMetaRow = styled.div`
  width: 350px;
  height: 18px;
  display: flex;
  flex-wrap: nowrap;
  gap: 24px;
  margin-bottom: 16px;
  @media (max-width: 1200px) {
    gap: 40px;
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    gap: 15px;
    
  }
    @media (max-width: 1350px) {
    width: 100%;
    gap: 10px;

    
}
`;

const JobMetaSecondRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
`;

const JobMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
  
  svg {
    flex-shrink: 0;
  }
`;



const JobDetailSection = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const SectionTitle = styled.h2`
  font-size: 8px;
  font-weight: 600;
  color: #333;
  margin: 16px 0 16px;
`;

const DetailList = styled.ul`
  font-size: 7px;
  color: #444;
  list-style-type: disc;
  margin: 0;
`;

const CompanyInfoCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 7px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  height: 113.46px;
`;



const CompanyName = styled.h3`
  font-size: 8px;
  font-weight: 600;
  color: #333;
  margin-left: 16px;
`;

const InfoList = styled.div`
    margin-top: 8px;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  font-size: 6px;
  color: #666;
`;

const InfoValue = styled.span`
  font-size: 6px;
  color: #333;
  font-weight: 500;
`;

const ViewCompanyLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #007bff;
  font-size: 6px;
  font-weight: 500;
  text-decoration: none;
  margin-top: -2px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ArrowIcon = styled.span`
  font-size: 16px;
`;

const InfoSection = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  height: 167.39px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
`;

const InfoGridItem = styled.div`
  display: flex;
  gap: 12px;
`;

const InfoGridIcon = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 50%;
  flex-shrink: 0;
`;

const InfoGridLabel = styled.div`
  font-size: 6px;
  color: #666;
`;

const InfoGridValue = styled.div`
  font-size: 7px;
  font-weight: 500;
  color: #333;
`;

export default Dangtuyen;
