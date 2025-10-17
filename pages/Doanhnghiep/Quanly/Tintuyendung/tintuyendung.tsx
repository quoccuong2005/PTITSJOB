import React from "react";

const sampleData = [
    {
        id: 1,
        code: "#23545A45",
        title: "Data Analyst (Risk Management)",
        applied: 3,
        needReview: true,
        expiredDate: "05/07/2025",
        status: "Đang hiển thị",
        statusColor: "bg-green-100 text-green-700",
    },
    {
        id: 2,
        code: "#23545A45",
        title: "Quality Assurance Engineer",
        applied: 0,
        needReview: false,
        expiredDate: "05/07/2025",
        status: "Chờ duyệt",
        statusColor: "bg-blue-100 text-blue-700",
    },
    {
        id: 3,
        code: "#23545A45",
        title: "Business Analyst",
        applied: 5,
        needReview: true,
        expiredDate: "05/07/2025",
        status: "Đã hết hạn",
        statusColor: "bg-red-100 text-red-700",
    },
];

const TintuyendungTable = () => {
    return (
        <div className="bg-white rounded-xl shadow p-6 mx-auto mt-8 w-[1280px] mb-8 ">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Tin Tuyển Dụng</h2>
            <div className="flex justify-end mb-2">
                <span className="text-blue-600 text-sm font-medium cursor-pointer">4 tin tuyển dụng</span>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="bg-gray-50 text-gray-700">
                            <th className="px-4 py-2 font-semibold text-left">STT</th>
                            <th className="px-4 py-2 font-semibold text-left">Tin tuyển dụng</th>
                            <th className="px-4 py-2 font-semibold text-left">Hồ sơ đã ứng tuyển</th>
                            <th className="px-4 py-2 font-semibold text-left">Ngày hết hạn tin</th>
                            <th className="px-4 py-2 font-semibold text-left">Trạng thái</th>
                            <th className="px-4 py-2 font-semibold text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleData.map((row, idx) => (
                            <tr key={row.id} className="border-b last:border-none">
                                <td className="px-4 py-3 font-medium text-gray-700">{idx + 1}</td>
                                <td className="px-4 py-3">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-blue-600 text-xs font-medium flex items-center gap-1">
                                            {row.code}
                                            <button className="ml-1" title="Copy">
                                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-400"><rect x="9" y="9" width="13" height="13" rx="2" /><rect x="2" y="2" width="13" height="13" rx="2" /></svg>
                                            </button>
                                        </span>
                                        <span className="font-semibold text-base text-gray-900">{row.title}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    {row.applied > 0 ? (
                                        <div className="flex flex-col gap-1">
                                            <span className="text-blue-700 font-medium">{row.applied} hồ sơ cần đánh giá</span>
                                            <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-200 transition">Xem ngay</button>
                                        </div>
                                    ) : (
                                        <span className="text-gray-500">Chưa có hồ sơ nào</span>
                                    )}
                                </td>
                                <td className="px-4 py-3 text-gray-700">{row.expiredDate}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${row.statusColor}`}>{row.status}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-3 text-gray-400">
                                        <button title="Sửa">
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>
                                        </button>
                                        <button title="Làm mới">
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v6h6" /><path d="M20 20v-6h-6" /><path d="M9 19A8 8 0 1 1 19 9" /></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TintuyendungTable;
