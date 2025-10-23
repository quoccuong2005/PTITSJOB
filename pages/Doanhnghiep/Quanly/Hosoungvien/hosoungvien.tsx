import React, { useMemo, useState, useEffect } from 'react';
import { getHosoungvien } from "../../../../api/hosoungvien/index";
import { HosoungvienResponse, Hosoungvien } from "../../../../api/hosoungvien/type";
import { getUserInfo } from "../../../../api/auth";
import { formatDate } from "../../../../assets/formatDate"
import { putTrangthaiungvien } from "../../../../api/hosoungvien/index";
type Candidate = {
    id: number;
    name: string;
    email: string;
    phone: string;
    avatar?: string;
    status: 'Chưa xem' | 'Đã xem' | 'Đang xem xét' | 'Từ chối' | 'Mời phỏng vấn';
    seen?: boolean;
    submittedAt: string;
    jobRef?: string;
};


const SAMPLE: Candidate[] = [
    { id: 1, name: 'Lê Văn Minh', email: 'Minhlv@gmail.com', phone: '0834567890', avatar: '/images/avatar2.jpg', status: 'Đã xem', seen: true, submittedAt: '11:40 05/07/2025', jobRef: '#A123B456' },
    { id: 2, name: 'Phạm Minh Tuấn', email: 'Tuanpm@gmail.com', phone: '0909876543', avatar: '/images/avatar3.jpg', status: 'Đã xem', seen: true, submittedAt: '11:40 05/07/2025', jobRef: '#D4E56789' },
    { id: 3, name: 'Nguyễn Văn An', email: 'Annv@gmail.com', phone: '0976543210', avatar: '/images/avatar1.jpg', status: 'Từ chối', seen: false, submittedAt: '11:40 05/07/2025', jobRef: '#B0CDEF12' },
    { id: 4, name: 'Trần Ngọc Hân', email: 'Han.tn@gmail.com', phone: '0987654321', avatar: '/images/avatar4.jpg', status: 'Mời phỏng vấn', seen: false, submittedAt: '11:40 05/07/2025', jobRef: '#E1F2A3B4' },
];

const STATUS_OPTIONS = ["Đang chờ", "Nhà tuyển dụng đã chấp nhận", "Nhà tuyển dụng đã từ chối"] as const;

function downloadCSV(rows?: Candidate[] | null) {
    if (!rows || !rows.length) return;
    const headers = ['STT', 'Họ tên', 'Email', 'Số điện thoại', 'Trạng thái', 'Thời gian gửi', 'Tin tuyển dụng'];
    const lines = rows.map((r, i) => [i + 1, r.name, r.email, r.phone, r.status, r.submittedAt, r.jobRef || ''].map(v => `"${String(v).replace(/"/g, '""')}"`).join(','));
    const csv = [headers.join(','), ...lines].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'hoso_ungvien.csv'; a.click(); URL.revokeObjectURL(url);
}

const HosoungvienPage: React.FC = () => {
    const [rows, setRows] = useState<Candidate[]>(SAMPLE);
    const [query, setQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('Tất cả');
    const [apiData, setApiData] = useState<any[] | null>(null);
    const [infoDoanhNghiep, setInfoDoanhNghiep] = useState<any>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await getUserInfo();
                console.log("res user info", res.data);

                setInfoDoanhNghiep(res.data.sub);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    console.log("infoDoanhNghiep", infoDoanhNghiep);
    const handleChangetrangthai = async (id: string, newTrangThai: string) => {
        console.log("id", id, "newTrangThai", newTrangThai);
        try {
            const response = await putTrangthaiungvien(id, { trangThaiUngTuyen: newTrangThai });
            setApiData(prev => {
                if (!prev) return prev;
                return prev.map(item => item._id === id ? { ...item, trangThaiUngTuyen: newTrangThai } : item);
            });
            console.log("Trạng thái ứng viên đã được cập nhật:", response.data);
        } catch (error) {
            console.error("Lỗi khi cập nhật trạng thái ứng viên:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getHosoungvien();
                console.log("API Response get ho so:", response.data);
                const result = response.data.data.result || [];
                const SSODoanhnghiep = infoDoanhNghiep
                const filteredResult = result.filter((item: any) => item.tinTuyenDung?.ssoId === SSODoanhnghiep);
                setApiData(filteredResult);
                console.log("API Data:", filteredResult);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [infoDoanhNghiep]);





    const filtered = useMemo(() => rows.filter(r => {
        if (statusFilter !== 'Tất cả' && r.status !== statusFilter) return false;
        if (!query) return true;
        const q = query.toLowerCase();
        return r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q) || r.phone.includes(q) || (r.jobRef || '').toLowerCase().includes(q);
    }), [rows, query, statusFilter]);

    const changeStatus = (id: number, status: Candidate['status']) => setRows(prev => prev.map(r => r.id === id ? { ...r, status } : r));
    const markSeen = (id: number) => setRows(prev => prev.map(r => r.id === id ? { ...r, seen: true } : r));

    return (
        <>
            <div className="bg-[url('/images/home/1.png')] bg-cover bg-center w-full">
                <div className=" pt-4 pb-4 mb-6 lg:w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">
                        <div>
                            <select className="w-full border rounded px-3 py-2 text-sm">
                                <option>Thời gian</option>
                                <option>7 ngày</option>
                                <option>30 ngày</option>
                            </select>
                        </div>
                        <div>
                            <select className="w-full border rounded px-3 py-2 text-sm">
                                <option>Trạng thái CV</option>
                                <option>Ứng viên mới</option>
                                <option>Đang xem xét</option>
                            </select>
                        </div>
                        <div>
                            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="w-full border rounded px-3 py-2 text-sm">
                                <option value={'Tất cả'}>Tất cả</option>
                                {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <input value={query} onChange={e => setQuery(e.target.value)} className="w-full border rounded px-3 py-2 text-sm" placeholder="Nhập thông tin cần tìm" />
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-red-600 text-white px-4 py-2 rounded">Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 bg-gray-50 ">

                <div className="lg:w-[1280px] mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-blue-900">Hồ Sơ Ứng Viên</h1>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-blue-600">{apiData?.length} hồ sơ ứng viên</span>
                            <button onClick={() => downloadCSV(apiData)} className="px-4 py-2 border border-red-400 text-red-600 rounded">Xuất danh sách CV</button>
                        </div>
                    </div>


                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-50 text-gray-700">
                                    <tr>
                                        <th className="px-4 py-3 text-left">STT</th>
                                        <th className="px-4 py-3 text-left">Họ tên ứng viên</th>
                                        <th className="px-4 py-3 text-left">Thông tin liên hệ</th>
                                        <th className="px-4 py-3 text-left">Tin tuyển dụng</th>
                                        <th className="px-4 py-3 text-left">Trạng thái</th>
                                        <th className="px-4 py-3 text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(apiData || []).map((r, i) => (
                                        <tr key={r.id} className="border-t last:border-b">
                                            <td className="px-4 py-4 align-top">{i + 1}</td>
                                            <td className="px-4 py-4">
                                                <div className="flex items-center gap-3">
                                                    {r.avatar ? (<img src={r.avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />) : (<img src="/images/default/defaultimage.png" alt="avatar" className="w-12 h-12 rounded-full object-cover" />)}

                                                    <div>
                                                        <div className="font-semibold text-gray-900">{r.tenUngVien}</div>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className={`text-xs ${r.seen ? 'text-green-600 bg-green-100' : 'text-gray-400 bg-gray-100'} px-2 py-0.5 rounded`}>{r.seen ? 'Đã xem' : 'Chưa xem'}</span>
                                                            <span className="text-xs text-gray-500">{formatDate(r.createdAt)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 align-top">
                                                <div className="text-sm text-gray-700">
                                                    <div className="flex items-center gap-2"><img src="/images/about/emailicon.png" /> <span>{r.email}</span></div>
                                                    <div className="flex items-center gap-2 mt-2"><img src="/images/about/phoneicon.png" /> <span>{r.soDienThoai}</span></div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 align-top text-sm text-gray-800">
                                                <div className="font-semibold flex flex-col ">{r.jobRef} <span className=" text-gray-400 text-xs mt-2">{r.tinTuyenDung?.tieuDe || "Không có"}</span></div>
                                            </td>
                                            <td className="px-4 py-4 align-top">
                                                <select onChange={e => handleChangetrangthai(r._id, e.target.value)} value={r.trangThaiUngTuyen} className="border rounded px-3 py-2 text-sm bg-white">
                                                    {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                            </td>
                                            <td className="px-4 py-4 align-top text-right">
                                                <div className="flex justify-end gap-3 text-gray-400">
                                                    <button title="Đánh dấu đã xem" onClick={() => markSeen(r.id)} className="focus:outline-none"><img src="/images/about/mat.png" /></button>
                                                    <button title="Ghi chú"><img src="/images/about/Chat.png" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {filtered.length === 0 && (
                                        <tr>
                                            <td colSpan={6} className="px-4 py-8 text-center text-gray-500">Không tìm thấy dữ liệu</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HosoungvienPage;
