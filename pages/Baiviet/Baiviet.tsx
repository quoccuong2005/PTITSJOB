import React, { useEffect } from "react";
import { getCVTemplatesList, getCVTemplatesPage } from "../../api/cvtemplatepublic";

const BaiVietPage: React.FC = () => {
    useEffect(() => {
        getCVTemplatesList()
            .then((response) => {
                console.log("Dữ liệu bài viếtp[ad[a]spd]:", response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
            });
    }, []);

    useEffect(() => {
        getCVTemplatesPage()
            .then((response) => {
                console.log("Dữ liệu bài viết pagedasdasdasd:", response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi gọi API page:", error);
            });
    }, []);




    return <div>Kiểm tra console để xem dữ liệu bài viết nhé!</div>;
};

export default BaiVietPage;

