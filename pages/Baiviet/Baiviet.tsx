import React, { useEffect } from "react";
import { getUngtuyenByUser } from "../../api/ungtuyen";
import { getUserInfo } from "../../api/userinfo";

const BaiVietPage: React.FC = () => {
    useEffect(() => {
        getUserInfo()
            .then((response) => {
                console.log("Dữ liệu bài viếtp[ad[a]spd]:", response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
            });
    }, []);







    return <div>Kiểm tra console để xem dữ liệu bài viết nhé!</div>;
};

export default BaiVietPage;

