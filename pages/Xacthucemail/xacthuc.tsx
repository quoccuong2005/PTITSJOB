import React, { useState } from "react";
import { postNhaTuyenDungXacthuc } from "../../api/nhatuyendungdangkypublic/index";

const DangKy = () => {
    const [email, setEmail] = useState("");
    const [verifyCode, setVerifyCode] = useState("");

    const handleXacThuc = async () => {
        try {
            const response = await postNhaTuyenDungXacthuc(email);
            console.log("Phản hồi từ server:", response.data);
            setVerifyCode(response.data.verifyCode);
            alert("Mã xác thực đã được gửi!");
        } catch (error: any) {
            console.error("Lỗi xác thực:", error.response?.data || error.message);
            alert("Gửi email xác thực thất bại!");
        }
    };
    console.log("email", email);

    return (
        <div>
            <h2>Đăng ký nhà tuyển dụng</h2>
            <input
                type="email"
                placeholder="Nhập email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleXacThuc}>Gửi mã xác thực</button>

            {verifyCode && <p>Mã xác thực: {verifyCode}</p>}
        </div>
    );
};

export default DangKy;
