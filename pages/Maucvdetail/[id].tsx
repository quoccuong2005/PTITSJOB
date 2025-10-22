import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getCVTemplatesList } from "../../api/cvtemplatepublic"
import { CVTemplatePublic } from "../../api/cvtemplatepublic/type"
import { postLuumauCV } from "../../api/studentcv/index"
import { toast } from "react-toastify";
const MauCVDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log("ID from router:", id);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [templateName, setTemplateName] = useState<string>("");
    const [detailCV, setdetailCV] = useState<any>(null);
    const [cvFile, setCvFile] = useState<string>("");
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
                    setdetailCV(template);
                    setCvFile(template.cvFile);
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
    console.log("Detail CV:", detailCV);

    const handleSave = async () => {
        setLoading(true);
        try {
            if (!detailCV) {
                throw new Error("Chi tiết CV không hợp lệ");
            }

            const res = await postLuumauCV(detailCV);
            console.log("Kết quả API:", res.data);

            toast.success("Lưu mẫu CV thành công!");
        } catch (err: any) {
            console.error("Lỗi khi lưu CV:", err);
            toast.error(err?.response?.data?.message || "Lỗi khi lưu CV!");
        } finally {
            setLoading(false);
        }
    };

    const handlePreview = () => {
        if (cvFile) {
            window.open(cvFile, "_blank");
        }
        else {
            toast.error("Không tìm thấy file CV để xem trước.");
        }
    }


    return (
        <>
            <div className="flex justify-between items-center p-4 w-[1280px] mx-auto  ">
                <div className="flex">
                    <button className="mr-4" onClick={() => router.back()}>← </button>
                    <div className="flex items-center gap-2">
                        <img src="/images/about/iconcvcolor.png" />
                        <h1 className="font-bold text-[#051A53] font-[20px]">{templateName}</h1>
                    </div>
                </div>
                <div>
                    <button onClick={() => handlePreview()} className="mr-6 border border-[#BC2826] text-[#BC2826] px-4 py-2 rounded-[10px] w-[120px] ">Xem trước</button>
                    <button onClick={() => handleSave()} className="bg-[#BC2826] text-white px-4 py-2 rounded-[10px] w-[120px]">Lưu CV</button>
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
