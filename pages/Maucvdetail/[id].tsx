import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCVTemplatesList } from "../../api/cvtemplatepublic"
import { CVTemplatePublic } from "../../api/cvtemplatepublic/type"
const MauCVDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log("ID from router:", id);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [templateName, setTemplateName] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        setError("");
        // Giả sử API trả về url ảnh CV theo id
        getCVTemplatesList()
            .then((response: any) => {
                const template = response.data.data.find((temp: CVTemplatePublic) => temp._id === id);
                if (template) {
                    setImageUrl(template.hinhAnh);
                    setTemplateName(template.ten);
                    setLoading(false);
                }
            })
            .catch((err) => {
                setError("Không tìm thấy ảnh CV");
                setLoading(false);
            });
    }, [id]);
    console.log("Image URL:", imageUrl);
    console.log("Template Name:", templateName);


    return (
        <>
            <div className="flex justify-between items-center p-4 w-[1280px] mx-auto  ">
                <div className="flex">
                    <button className="mr-4" onClick={() => router.back()}>← </button>
                    <h1>{templateName}</h1>
                </div>
                <div>
                    <button className="mr-6 border border-[#BC2826] text-[#BC2826] px-4 py-2 rounded-[10px] w-[120px] ">Xem trước</button>
                    <button className="bg-[#BC2826] text-white px-4 py-2 rounded-[10px] w-[120px]">Lưu CV</button>
                </div>
            </div>
            <div className="bg-[#F7F7F7] min-h-screen py-8 flex flex-col items-center justify-center">
                {loading ? (
                    <div className="text-gray-500 text-lg">Đang tải ảnh CV...</div>
                ) : error ? (
                    <div className="text-red-500 text-lg">{error}</div>
                ) : (
                    <img
                        src={imageUrl}
                        alt="CV Preview"
                        className="max-w-full rounded-xl shadow border bg-white"
                        style={{ maxHeight: "90vh", objectFit: "contain" }}
                    />
                )}
            </div>
        </>
    );
};

export default MauCVDetail;
