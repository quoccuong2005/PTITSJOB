import React, { useMemo, useState } from "react";

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

    // completeness check
    const step1Complete = useMemo(() => {
        return title && position && knowledge && description.length > 10;
    }, [title, position, knowledge, description]);

    const step2Complete = useMemo(() => {
        return jobType && salary && city;
    }, [jobType, salary, city]);

    // preview always shows if at least step 1 filled
    const canPreview = step1Complete || step2Complete;

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
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">
                                    Tiêu đề tin *
                                </label>
                                <input
                                    className="mt-1 w-full border rounded-md px-3 py-2"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Nhập tiêu đề tin"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Vị trí chuyên môn *
                                    </label>
                                    <input
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                        className="mt-1 w-full border rounded-md px-3 py-2"
                                        placeholder="Nhập vị trí chuyên môn"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Kiến thức ngành *
                                    </label>
                                    <input
                                        value={knowledge}
                                        onChange={(e) => setKnowledge(e.target.value)}
                                        className="mt-1 w-full border rounded-md px-3 py-2"
                                        placeholder="Nhập kiến thức ngành"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Cấp bậc
                                    </label>
                                    <input
                                        value={level}
                                        onChange={(e) => setLevel(e.target.value)}
                                        className="mt-1 w-full border rounded-md px-3 py-2"
                                        placeholder="Nhập cấp bậc"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Kinh nghiệm tối thiểu
                                    </label>
                                    <input
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                        className="mt-1 w-full border rounded-md px-3 py-2"
                                        placeholder="Nhập số năm kinh nghiệm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700">
                                    Mô tả công việc *
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={5}
                                    className="mt-1 w-full border rounded-md px-3 py-2"
                                    placeholder="Nhập mô tả chi tiết công việc..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">
                                    Yêu cầu ứng viên
                                </label>
                                <textarea
                                    value={requirements}
                                    onChange={(e) => setRequirements(e.target.value)}
                                    rows={3}
                                    className="mt-1 w-full border rounded-md px-3 py-2"
                                    placeholder="Nhập yêu cầu..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">
                                    Quyền lợi ứng viên
                                </label>
                                <textarea
                                    value={benefits}
                                    onChange={(e) => setBenefits(e.target.value)}
                                    rows={3}
                                    className="mt-1 w-full border rounded-md px-3 py-2"
                                    placeholder="Nhập quyền lợi..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">
                                    Quyền lợi bổ sung
                                </label>
                                <textarea
                                    value={extra}
                                    onChange={(e) => setExtra(e.target.value)}
                                    rows={2}
                                    className="mt-1 w-full border rounded-md px-3 py-2"
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
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Loại hình công việc *
                                    </label>
                                    <input
                                        value={jobType}
                                        onChange={(e) => setJobType(e.target.value)}
                                        className="mt-1 w-full border rounded-md px-3 py-2"
                                        placeholder="VD: Full-time"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Mức lương *
                                    </label>
                                    <input
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                        className="mt-1 w-full border rounded-md px-3 py-2"
                                        placeholder="Nhập mức lương"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Thành phố *
                                    </label>
                                    <input
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        className="mt-1 w-full border rounded-md px-3 py-2"
                                        placeholder="Chọn thành phố"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Quận / Huyện
                                    </label>
                                    <input
                                        value={district}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        className="mt-1 w-full border rounded-md px-3 py-2"
                                        placeholder="Chọn quận"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700">
                                        Địa chỉ cụ thể
                                    </label>
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="mt-1 w-full border rounded-md px-3 py-2"
                                        placeholder="Nhập địa chỉ cụ thể"
                                    />
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
                                >
                                    Thêm tin tuyển dụng
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT PREVIEW PANEL */}
                {canPreview && (
                    <div className="bg-blue-50 rounded-xl shadow-inner p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">
                            Xem trước tin đăng tuyển
                        </h3>
                        <div className="bg-white border rounded-lg p-5 shadow-sm">
                            <h4 className="text-xl font-semibold text-blue-900">
                                {title || "Chưa có tiêu đề"}
                            </h4>
                            <div className="text-gray-600 text-sm mt-1">
                                {position || "Chưa có vị trí"} • {city || "Chưa có thành phố"}
                                {district ? `, ${district}` : ""}
                            </div>

                            <div className="mt-4 text-sm leading-relaxed whitespace-pre-line text-gray-700">
                                {description || "Mô tả công việc sẽ hiển thị ở đây."}
                            </div>

                            {benefits && (
                                <div className="mt-4">
                                    <h5 className="font-semibold text-sm text-gray-800">
                                        Quyền lợi:
                                    </h5>
                                    <p className="text-sm text-gray-700 whitespace-pre-line">
                                        {benefits}
                                    </p>
                                </div>
                            )}

                            {extra && (
                                <div className="mt-2">
                                    <h5 className="font-semibold text-sm text-gray-800">
                                        Quyền lợi bổ sung:
                                    </h5>
                                    <p className="text-sm text-gray-700 whitespace-pre-line">
                                        {extra}
                                    </p>
                                </div>
                            )}

                            <div className="mt-4 border-t pt-3 text-xs text-gray-500">
                                <div>
                                    Mức lương:{" "}
                                    <span className="font-semibold text-gray-800">
                                        {salary || "Thỏa thuận"}
                                    </span>
                                </div>
                                <div>
                                    Hình thức:{" "}
                                    <span className="font-semibold text-gray-800">
                                        {jobType || "Chưa có"}
                                    </span>
                                </div>
                                <div>
                                    Địa điểm: {address || "Chưa có địa chỉ cụ thể"}, {city}{" "}
                                    {district && `(${district})`}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dangtuyen;
