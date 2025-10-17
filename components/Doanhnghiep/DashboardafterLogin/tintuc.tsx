import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsCalendar3 } from 'react-icons/bs';

interface NewsItem {
    id: number;
    title: string;
    tag: string;
    tagColor: string;
    date: string;
    image?: string;
}

// Sample data - Add more items for multiple slides
const newsData: NewsItem[] = [
    {
        id: 1,
        title: 'Trắc nghiệm MBTI để làm gì ?',
        tag: 'LÀO NGHIỆM HỆ ĐỀ LÀM GÌ ?',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 2,
        title: 'Một số mẫu CV dành cho sinh viên CNTT - PTIT...',
        tag: 'MẪU CV ĐẸP',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 3,
        title: 'Trắc nghiệm MBTI để làm gì ?',
        tag: 'LÀO NGHIỆM HỆ ĐỀ LÀM GÌ ?',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 4,
        title: 'Một số mẫu CV dành cho sinh viên CNTT - PTIT...',
        tag: 'MẪU CV ĐẸP',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 5,
        title: 'Trắc nghiệm MBTI để làm gì ?',
        tag: 'LÀO NGHIỆM HỆ ĐỀ LÀM GÌ ?',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 6,
        title: 'Một số mẫu CV dành cho sinh viên CNTT - PTIT...',
        tag: 'MẪU CV ĐẸP',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    // Slide 2
    {
        id: 7,
        title: 'Trắc nghiệm MBTI để làm gì ?',
        tag: 'LÀO NGHIỆM HỆ ĐỀ LÀM GÌ ?',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 8,
        title: 'Một số mẫu CV dành cho sinh viên CNTT - PTIT...',
        tag: 'MẪU CV ĐẸP',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 9,
        title: 'Trắc nghiệm MBTI để làm gì ?',
        tag: 'LÀO NGHIỆM HỆ ĐỀ LÀM GÌ ?',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 10,
        title: 'Một số mẫu CV dành cho sinh viên CNTT - PTIT...',
        tag: 'MẪU CV ĐẸP',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 11,
        title: 'Trắc nghiệm MBTI để làm gì ?',
        tag: 'LÀO NGHIỆM HỆ ĐỀ LÀM GÌ ?',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
    {
        id: 12,
        title: 'Một số mẫu CV dành cho sinh viên CNTT - PTIT...',
        tag: 'MẪU CV ĐẸP',
        tagColor: 'bg-red-500',
        date: '24/07/2023',
    },
];

const TinTuc = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6; // 6 items per slide (2 rows x 3 columns)

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(0, newsData.length - itemsPerPage) : prev - itemsPerPage
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev >= newsData.length - itemsPerPage ? 0 : prev + itemsPerPage
        );
    };

    const visibleNews = newsData.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 w-[1280px] mx-[auto]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Tin Tức</h2>
                <div className="flex items-center gap-3">
                    <a
                        href="/tin-tuc"
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                        Xem tất cả
                    </a>
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="p-1.5 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            aria-label="Previous"
                        >
                            <FiChevronLeft className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= newsData.length - itemsPerPage}
                            className="p-1.5 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                            aria-label="Next"
                        >
                            <FiChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>

            {/* News Grid - 2 rows x 3 columns = 6 items */}
            <div className="grid grid-cols-3 gap-5">
                {visibleNews.map((news) => (
                    <div
                        key={news.id}
                        className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer bg-white"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-32 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden flex items-center justify-center">
                            {/* Large Icon Placeholder */}
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                                    <svg
                                        className="w-10 h-10 text-red-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Tag Badge */}
                            <div className="absolute top-2 left-2">
                                <div className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-sm flex items-center gap-1">
                                    <span className="block w-1 h-1 bg-white rounded-full"></span>
                                    <span className="uppercase leading-none">{news.tag}</span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-3">
                            <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 min-h-[40px] leading-tight">
                                {news.title}
                            </h3>

                            <div className="flex items-center text-gray-400 text-xs">
                                <BsCalendar3 className="w-3 h-3 mr-1" />
                                <span>{news.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* No progress indicator needed as per the image */}
        </div>
    );
};

export default TinTuc;
