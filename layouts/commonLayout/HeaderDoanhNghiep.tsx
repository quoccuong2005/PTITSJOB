import React from "react";

const HeaderDoanhNghiep = () => (
    <header className="w-full bg-red-700 text-white py-4 px-6 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="font-bold text-xl">PTIT Jobs - Doanh nghiệp</div>
            <nav className="space-x-4">
                <a href="/recruiter" className="hover:underline">Trang chủ</a>
                <a href="/recruiter/tintuyendung" className="hover:underline">Tin tuyển dụng</a>
                <a href="/recruiter/ungvien" className="hover:underline">Ứng viên</a>
            </nav>
        </div>
    </header>
);

export default HeaderDoanhNghiep;
