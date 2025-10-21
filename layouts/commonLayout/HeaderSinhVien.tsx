import React from "react";

const HeaderSinhVien = () => (
    <header className="w-full bg-blue-700 text-white py-4 px-6 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="font-bold text-xl">PTIT Jobs - Sinh viên</div>
            <nav className="space-x-4">
                <a href="/student" className="hover:underline">Trang chủ</a>
                <a href="/student/vieclam" className="hover:underline">Việc làm</a>
                <a href="/student/hoso" className="hover:underline">Hồ sơ</a>
            </nav>
        </div>
    </header>
);

export default HeaderSinhVien;
