// fakeJobsData.ts
export interface JobCardProps {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    time: string;
    tags: string[];
    image: string;
}

export const fakeJobsData: JobCardProps[] = [
    {
        id: "1",
        title: "Data Analyst (Risk Management)",
        company: "Ngân Hàng Thương Mại Cổ Phần A",
        location: "Hà Nội, Việt Nam",
        salary: "25.000.000đ - 35.000.000đ",
        time: "2 ngày trước",
        tags: ["UI/UX Design", "Tài chính ngân hàng", "Dịch vụ"],
        image: "https://dongphucstore.com/wp-content/uploads/2023/05/logo-1.jpg"
    },
    {
        id: "2",
        title: "Nhân Viên Nhập Liệu Biết Tiếng Trung",
        company: "Phương Chi Software Company",
        location: "Bắc Từ Liêm, Hà Nội",
        salary: "Từ 6.500.000đ",
        time: "2 ngày trước",
        tags: ["Nhập liệu", "Fulltime (Fresher)"],
        image: "https://dongphucstore.com/wp-content/uploads/2023/05/logo-1.jpg"
    },
    {
        id: "3",
        title: "Giám Sát Công Trình",
        company: "Công Ty TNHH MTV Phong Việt",
        location: "Hà Nội, Việt Nam",
        salary: "8.000.000đ - 14.000.000đ",
        time: "2 ngày trước",
        tags: ["Giám sát", "Thời vụ"],
        image: "https://dongphucstore.com/wp-content/uploads/2023/05/logo-1.jpg"
    },
    {
        id: "4",
        title: "Data Analyst (Risk Management)",
        company: "Ngân Hàng Thương Mại Cổ Phần A",
        location: "Hà Nội, Việt Nam",
        salary: "25.000.000đ - 35.000.000đ",
        time: "2 ngày trước",
        tags: ["UI/UX Design", "Tài chính ngân hàng", "Dịch vụ"],
        image: "https://dongphucstore.com/wp-content/uploads/2023/05/logo-1.jpg"
    },
    {
        id: "5",
        title: "Nhân Viên Nhập Liệu Biết Tiếng Trung",
        company: "Phương Chi Software Company",
        location: "Bắc Từ Liêm, Hà Nội",
        salary: "Từ 6.500.000đ",
        time: "2 ngày trước",
        tags: ["Nhập liệu", "Fulltime (Fresher)"],
        image: "https://dongphucstore.com/wp-content/uploads/2023/05/logo-1.jpg"
    },
    {
        id: "6",
        title: "Giám Sát Công Trình",
        company: "Công Ty TNHH MTV Phong Việt",
        location: "Hà Nội, Việt Nam",
        salary: "8.000.000đ - 14.000.000đ",
        time: "2 ngày trước",
        tags: ["Giám sát", "Thời vụ"],
        image: "https://dongphucstore.com/wp-content/uploads/2023/05/logo-1.jpg"
    }
];
