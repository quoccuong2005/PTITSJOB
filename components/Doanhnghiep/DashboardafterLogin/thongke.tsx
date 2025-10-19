import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const recruitmentData = [
    { date: "Thứ 2, 06/10", views: 30, posts: 65 },
    { date: "Thứ 3, 07/10", views: 5, posts: 68 },
    { date: "Thứ 4, 08/10", views: 8, posts: 60 },
    { date: "Thứ 5, 09/10", views: 0, posts: 40 },
    { date: "Thứ 6, 10/10", views: 0, posts: 35 },
    { date: "Thứ 7, 11/10", views: 0, posts: 40 },
    { date: "Chủ nhật, 12/10", views: 0, posts: 55 },
];

const hiringData = [
    { date: "Thứ 2, 06/10", hired: 42, rejected: 2 },
    { date: "Thứ 3, 07/10", hired: 55, rejected: 3 },
    { date: "Thứ 4, 08/10", hired: 48, rejected: 5 },
    { date: "Thứ 5, 09/10", hired: 40, rejected: 4 },
    { date: "Thứ 6, 10/10", hired: 38, rejected: 3 },
    { date: "Thứ 7, 11/10", hired: 35, rejected: 2 },
    { date: "Chủ nhật, 12/10", hired: 42, rejected: 1 },
];

const ThongKe = () => {
    const [recruitmentPeriod, setRecruitmentPeriod] = useState("Theo ngày");
    const [hiringPeriod, setHiringPeriod] = useState("Theo ngày");

    return (
        <div className="max-w-[1280px] w-full mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* TK Tin Tuyển Dụng */}
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
                            Thống Kê Tin Tuyển Dụng
                        </h2>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-3">
                            <select
                                value={recruitmentPeriod}
                                onChange={(e) => setRecruitmentPeriod(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                <option>Theo ngày</option>
                                <option>Theo tuần</option>
                                <option>Theo tháng</option>
                            </select>
                            <button className="px-4 py-1.5 border border-red-500 text-red-500 rounded-md text-sm hover:bg-red-50 transition-colors">
                                Xuất báo cáo
                            </button>
                        </div>
                    </div>

                    <div className="w-full h-[280px] sm:h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={recruitmentData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="date"
                                    tick={{ fontSize: 11 }}
                                    angle={-20}
                                    textAnchor="end"
                                    height={50}
                                />
                                <YAxis tick={{ fontSize: 11 }} />
                                <Tooltip />
                                <Legend wrapperStyle={{ fontSize: "13px" }} iconType="line" />
                                <Line
                                    type="monotone"
                                    dataKey="views"
                                    stroke="#10b981"
                                    strokeWidth={2}
                                    name="Lượt xem bài đăng"
                                    dot={{ r: 3 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="posts"
                                    stroke="#ef4444"
                                    strokeWidth={2}
                                    name="Tin tuyển dụng đã đăng"
                                    dot={{ r: 3 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* TK Tuyển Dụng */}
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
                            Thống Kê Tuyển Dụng
                        </h2>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-3">
                            <select
                                value={hiringPeriod}
                                onChange={(e) => setHiringPeriod(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                <option>Theo ngày</option>
                                <option>Theo tuần</option>
                                <option>Theo tháng</option>
                            </select>
                            <button className="px-4 py-1.5 border border-red-500 text-red-500 rounded-md text-sm hover:bg-red-50 transition-colors">
                                Xuất báo cáo
                            </button>
                        </div>
                    </div>

                    <div className="w-full h-[280px] sm:h-[320px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={hiringData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="date"
                                    tick={{ fontSize: 11 }}
                                    angle={-20}
                                    textAnchor="end"
                                    height={50}
                                />
                                <YAxis tick={{ fontSize: 11 }} />
                                <Tooltip />
                                <Legend wrapperStyle={{ fontSize: "13px" }} iconType="line" />
                                <Line
                                    type="monotone"
                                    dataKey="hired"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    name="Sinh viên đã tuyển"
                                    dot={{ r: 3 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="rejected"
                                    stroke="#ef4444"
                                    strokeWidth={2}
                                    name="Sinh viên bị từ chối"
                                    dot={{ r: 3 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThongKe;
