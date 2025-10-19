import React from 'react'
import dynamic from 'next/dynamic'

// Import the ThongKe chart component (client-side safe)
const ThongKe = dynamic(() => import('../../../components/Doanhnghiep/DashboardafterLogin/thongke'), { ssr: false })

const BaoCaoThongKePage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-2xl font-semibold text-slate-800 mb-6">Báo Cáo Thống Kê</h1>
            <ThongKe />
        </div>
    )
}

export default BaoCaoThongKePage
