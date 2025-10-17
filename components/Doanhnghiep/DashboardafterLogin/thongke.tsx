import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

// Sample data for recruitment statistics
const recruitmentData = [
    { date: 'Thứ 2, 06/10', views: 30, posts: 65 },
    { date: 'Thứ 3, 07/10', views: 5, posts: 68 },
    { date: 'Thứ 4, 08/10', views: 8, posts: 60 },
    { date: 'Thứ 5, 09/10', views: 0, posts: 40 },
    { date: 'Thứ 6, 10/10', views: 0, posts: 35 },
    { date: 'Thứ 7, 11/10', views: 0, posts: 40 },
    { date: 'Chủ nhật, 12/10', views: 0, posts: 55 },
];

// Sample data for hiring statistics
const hiringData = [
    { date: 'Thứ 2, 06/10', hired: 42, rejected: 2 },
    { date: 'Thứ 3, 07/10', hired: 55, rejected: 3 },
    { date: 'Thứ 4, 08/10', hired: 48, rejected: 5 },
    { date: 'Thứ 5, 09/10', hired: 40, rejected: 4 },
    { date: 'Thứ 6, 10/10', hired: 38, rejected: 3 },
    { date: 'Thứ 7, 11/10', hired: 35, rejected: 2 },
    { date: 'Chủ nhật, 12/10', hired: 42, rejected: 1 },
];

const ThongKe = () => {
    const [recruitmentPeriod, setRecruitmentPeriod] = useState('Theo ngày');
    const [hiringPeriod, setHiringPeriod] = useState('Theo ngày');

    return (
        <div className=" w-[1280px] mx-[auto]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* TK Tin Tuyển Dụng Chart */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                            TK Tin Tuyển Dụng
                        </h2>
                        <div className="flex items-center gap-3">
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

                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={recruitmentData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey="date"
                                tick={{ fontSize: 12 }}
                                angle={-15}
                                textAnchor="end"
                                height={60}
                            />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip />
                            <Legend
                                wrapperStyle={{ fontSize: '14px' }}
                                iconType="line"
                            />
                            <Line
                                type="monotone"
                                dataKey="views"
                                stroke="#10b981"
                                strokeWidth={2}
                                name="Số lượt xem bài tuyển dụng"
                                dot={{ r: 4 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="posts"
                                stroke="#ef4444"
                                strokeWidth={2}
                                name="Số tin tuyển dụng đã đăng"
                                dot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* TK Tuyển Dụng Chart */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                            TK Tuyển Dụng
                        </h2>
                        <div className="flex items-center gap-3">
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

                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={hiringData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis
                                dataKey="date"
                                tick={{ fontSize: 12 }}
                                angle={-15}
                                textAnchor="end"
                                height={60}
                            />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip />
                            <Legend
                                wrapperStyle={{ fontSize: '14px' }}
                                iconType="line"
                            />
                            <Line
                                type="monotone"
                                dataKey="hired"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                name="Số sinh viên đã tuyển"
                                dot={{ r: 4 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="rejected"
                                stroke="#ef4444"
                                strokeWidth={2}
                                name="Số sinh viên bị từ chối"
                                dot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ThongKe;
