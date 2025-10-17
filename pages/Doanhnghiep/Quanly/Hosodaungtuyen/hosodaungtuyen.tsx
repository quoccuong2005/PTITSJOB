import React, { useMemo, useState } from "react";

type Applicant = {
    id: number;
    name: string;
    email: string;
    phone: string;
    avatar?: string;
    status: "Chưa xem" | "Đã xem" | "Đang xem xét" | "Ứng viên mới";
    submittedAt: string; // time string
    note?: string;
};

const SAMPLE_APPLICANTS: Applicant[] = [
    {
        id: 1,
        name: "Nguyễn Thị Thùy Trang",
        email: "Trangntt@gmail.com",
        phone: "0829573993",
        avatar: "/images/home/image-event-2.png",
        status: "Chưa xem",
        submittedAt: "11:40 05/07/2025",
    },
    {
        id: 2,
        name: "Nguyễn Thị Thùy Trang",
        email: "Trangntt@gmail.com",
        phone: "0829573993",
        avatar: "/images/avatar2.jpg",
        status: "Chưa xem",
        submittedAt: "11:40 05/07/2025",
    },
    {
        id: 3,
        name: "Phạm Minh Tuấn",
        email: "Tuanpm@gmail.com",
        phone: "0909876543",
        avatar: "/images/avatar3.jpg",
        status: "Đã xem",
        submittedAt: "11:40 05/07/2025",
    },
];

const STATUS_OPTIONS: Applicant["status"][] = [
    "Chưa xem",
    "Đã xem",
    "Đang xem xét",
    "Ứng viên mới",
];

function downloadCSV(rows: Applicant[]) {
    if (!rows || rows.length === 0) return;
    const headers = ["STT", "Họ tên", "Email", "Số điện thoại", "Trạng thái", "Thời gian gửi"];
    const lines = rows.map((r, i) => [
        i + 1,
        r.name,
        r.email,
        r.phone,
        r.status,
        r.submittedAt,
    ].map(v => `"${String(v).replace(/"/g, '""')}"`).join(','));
    const csv = [headers.join(','), ...lines].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hoso_ungvien.csv';
    a.click();
    URL.revokeObjectURL(url);
}

const HosodaungtuyenPage: React.FC = () => {
    const [applicants, setApplicants] = useState<Applicant[]>(SAMPLE_APPLICANTS);
    const [query, setQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('Tất cả');
    const [timeFilter, setTimeFilter] = useState<string>('Tất cả');
    const [onlyUnseen, setOnlyUnseen] = useState(false);

    const filtered = useMemo(() => {
        return applicants.filter(a => {
            if (onlyUnseen && a.status !== 'Chưa xem') return false;
            if (statusFilter !== 'Tất cả' && a.status !== statusFilter) return false;
            if (query) {
                const q = query.toLowerCase();
                if (!(a.name.toLowerCase().includes(q) || a.email.toLowerCase().includes(q) || a.phone.includes(q))) return false;
            }
            return true;
        });
    }, [applicants, query, statusFilter, onlyUnseen]);

    const changeStatus = (id: number, status: Applicant['status']) => {
        setApplicants(prev => prev.map(p => p.id === id ? { ...p, status } : p));
    };

    return (
        <div className="p-6">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-extrabold text-blue-900">Hồ Sơ Đã Ứng Tuyển</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-blue-600">{filtered.length} hồ sơ ứng viên</span>
                        <button onClick={() => downloadCSV(filtered)} className="px-4 py-2 border border-red-400 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50">Xuất danh sách CV</button>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">
                        <div className="col-span-1 md:col-span-1">
                            <select value={timeFilter} onChange={e => setTimeFilter(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm">
                                <option>Tất cả</option>
                                <option>Trong 7 ngày</option>
                                <option>Trong 30 ngày</option>
                            </select>
                        </div>
                        <div>
                            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="w-full border rounded-lg px-3 py-2 text-sm">
                                <option>Trạng thái CV</option>
                                {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div>
                            <select value={onlyUnseen ? 'Chưa xem' : 'Tất cả'} onChange={e => setOnlyUnseen(e.target.value === 'Chưa xem')} className="w-full border rounded-lg px-3 py-2 text-sm">
                                <option value="Tất cả">Tất cả</option>
                                <option value="Chưa xem">Chưa xem</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 col-span-1">
                            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Nhập thông tin cần tìm" className="w-full border rounded-lg px-3 py-2 text-sm" />
                        </div>
                        <div className="flex gap-2 justify-end md:justify-start">
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm">Tìm kiếm</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-50 text-gray-700">
                                <tr>
                                    <th className="px-4 py-3 text-left">STT</th>
                                    <th className="px-4 py-3 text-left">Họ tên ứng viên</th>
                                    <th className="px-4 py-3 text-left">Thông tin liên hệ</th>
                                    <th className="px-4 py-3 text-left">Trạng thái</th>
                                    <th className="px-4 py-3 text-left">Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((a, i) => (
                                    <tr key={a.id} className="border-t last:border-b">
                                        <td className="px-4 py-4 align-top">{i + 1}</td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <img src={a.avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" onError={(e: any) => { e.currentTarget.src = '/images/default-avatar.png' }} />
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-gray-900">{a.name}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className={`text-xs px-2 py-0.5 rounded border 
                                                                ${a.status === 'Chưa xem'
                                                                ? 'text-[#FAAD14] bg-[#FFFBE6] border-[#FAAD14]' // màu vàng
                                                                : a.status === 'Đã xem'
                                                                    ? 'text-[#52C41A] bg-[#F6FFED] border-[#52C41A]' // màu xanh lá
                                                                    : ''
                                                            }`}>{a.status === 'Chưa xem' ? 'Chưa xem' : a.status === 'Đã xem' ? 'Đã xem' : ''}</span>
                                                        <span className="text-xs text-gray-500">{a.submittedAt}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 align-top">
                                            <div className="flex flex-col text-sm text-gray-700">
                                                <div className="flex items-center gap-2"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" /></svg><span>{a.email}</span></div>
                                                <div className="flex items-center gap-2 mt-2"><svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 13h10l4-8H5.4" /></svg><span>{a.phone}</span></div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 align-top">
                                            <select value={a.status} onChange={e => changeStatus(a.id, e.target.value as Applicant['status'])} className="border rounded-lg px-3 py-2 text-sm bg-white">
                                                {STATUS_OPTIONS.map(s => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className="px-4 py-4 align-top text-right">
                                            <div className="flex justify-end items-center gap-3 text-gray-400">
                                                <button title="Xem ghi chú">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A2 2 0 0 1 21 9.618V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6.382a2 2 0 0 1 .447-1.136L10 2l5 8z" /></svg>
                                                </button>
                                                <button title="Ghi chú nội bộ">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-4 8v-4a1 1 0 0 1 1-1h3" /></svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-4 py-6 text-center text-gray-500">Không tìm thấy dữ liệu</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HosodaungtuyenPage;

