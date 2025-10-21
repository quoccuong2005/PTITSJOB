import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { postNhaTuyenDungDangKy } from "../../../api/nhatuyendungdangkypublic";
import { GioiTinh, NhaTuyenDungDangKyRequest } from "../../../api/nhatuyendungdangkypublic/type";

type FormState = {
  companyName: string;
  website: string;
  companyPhone: string;
  companyEmail: string;
  companyType: string;
  companyAddress: string;
  recruiterName: string;
  recruiterGender: "male" | "female" | "";
  recruiterPhone: string;
  recruiterEmail: string;
  password: string;
  confirmPassword: string;
};

const initialState: FormState = {
  companyName: "",
  website: "",
  companyPhone: "",
  companyEmail: "",
  companyType: "",
  companyAddress: "",
  recruiterName: "",
  recruiterGender: "",
  recruiterPhone: "",
  recruiterEmail: "",
  password: "",
  confirmPassword: "",
};

const RegisterDoanhnghiep: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const handleChange =
    (k: keyof FormState) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm((s) => ({ ...s, [k]: e.target.value }));
      };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!form.companyName) nextErrors.companyName = "Bắt buộc";
    if (!form.website) nextErrors.website = "Bắt buộc";
    if (!form.companyPhone) nextErrors.companyPhone = "Bắt buộc";
    if (!form.companyEmail) nextErrors.companyEmail = "Bắt buộc";
    if (!form.companyType) nextErrors.companyType = "Bắt buộc";
    if (!form.companyAddress) nextErrors.companyAddress = "Bắt buộc";
    if (!form.recruiterName) nextErrors.recruiterName = "Bắt buộc";
    if (!form.recruiterGender) nextErrors.recruiterGender = "Bắt buộc";
    if (!form.recruiterPhone) nextErrors.recruiterPhone = "Bắt buộc";
    if (!form.recruiterEmail) nextErrors.recruiterEmail = "Bắt buộc";
    if (!form.password) nextErrors.password = "Bắt buộc";
    if (form.password !== form.confirmPassword)
      nextErrors.confirmPassword = "Mật khẩu không khớp";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const payload: NhaTuyenDungDangKyRequest = {
      verfiyCode: "X4L9-8M2Q",
      password: form.password,
      tenDoanhNghiep: form.companyName,
      soDienThoaiDoanhNghiep: form.companyPhone,
      emailDoanhNghiep: form.companyEmail,
      diaChiDoanhNghiep: form.companyAddress,
      websiteDoanhNghiep: form.website,
      loaiHinhKinhDoanh: form.companyType,
      hoTenNhaTuyenDung: form.recruiterName,
      soDienThoaiNhaTuyenDung: form.recruiterPhone,
      emailNhaTuyenDung: form.recruiterEmail,
      gioiTinh:
        form.recruiterGender === "female" ? GioiTinh.Female : GioiTinh.Male,
    };

    try {
      setLoading(true);
      const res = await postNhaTuyenDungDangKy(payload);
      console.log("✅ Kết quả đăng ký:", res.data);
      alert("Đăng ký thành công!");
      setForm(initialState);
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ||
        "Không thể đăng ký. Vui lòng thử lại.";
      console.error("❌ Lỗi đăng ký:", err.response?.data || err.message);
      alert(`Đăng ký thất bại: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <Card>
          <Header>
            <img
              src="/images/about/LogoSchool.png"
              alt="logoschool"
              className="mx-[auto] mb-[20px]"
            />
            <Title>ĐĂNG KÝ TÀI KHOẢN NHÀ TUYỂN DỤNG</Title>
            <Sub>Hãy cùng chúng tôi trở thành một phần của Jobs PTIT</Sub>
          </Header>

          <Form onSubmit={handleSubmit} noValidate>
            <SectionTitle>
              <span>Quy định</span>
              <img src="/images/icons/Line 405.png" alt="line" />
            </SectionTitle>

            <SectionHeader>Thông tin doanh nghiệp</SectionHeader>

            <TwoCols>
              <Field>
                <Label>
                  Tên doanh nghiệp<span className="text-[red]">*</span>
                </Label>
                <Input
                  value={form.companyName}
                  onChange={handleChange("companyName")}
                  placeholder="Nhập thông tin"
                />
                {errors.companyName && <Err>{errors.companyName}</Err>}
              </Field>

              <Field>
                <Label>
                  Tên Website <span className="text-[red]">*</span>
                </Label>
                <Input
                  value={form.website}
                  onChange={handleChange("website")}
                  placeholder="Nhập thông tin"
                />
                {errors.website && <Err>{errors.website}</Err>}
              </Field>
            </TwoCols>

            <TwoCols>
              <Field>
                <Label>
                  Số điện thoại doanh nghiệp <span className="text-[red]">*</span>
                </Label>
                <Input
                  value={form.companyPhone}
                  onChange={handleChange("companyPhone")}
                  placeholder="Nhập thông tin"
                />
                {errors.companyPhone && <Err>{errors.companyPhone}</Err>}
              </Field>

              <Field>
                <Label>
                  Email doanh nghiệp <span className="text-[red]">*</span>
                </Label>
                <Input
                  value={form.companyEmail}
                  onChange={handleChange("companyEmail")}
                  placeholder="Nhập thông tin"
                />
                {errors.companyEmail && <Err>{errors.companyEmail}</Err>}
              </Field>
            </TwoCols>

            <Field>
              <Label>
                Loại hình doanh nghiệp <span className="text-[red]">*</span>
              </Label>
              <Select
                value={form.companyType}
                onChange={handleChange("companyType")}
              >
                <option value="">Chọn</option>
                <option value="TNHH">TNHH</option>
                <option value="CTCP">CTCP</option>
                <option value="Tư nhân">Doanh nghiệp tư nhân</option>
              </Select>
              {errors.companyType && <Err>{errors.companyType}</Err>}
            </Field>

            <Field>
              <Label>
                Địa chỉ doanh nghiệp{" "}
                <span className="text-[red]">*</span>
              </Label>
              <Input
                value={form.companyAddress}
                onChange={handleChange("companyAddress")}
                placeholder="Nhập thông tin"
              />
              {errors.companyAddress && <Err>{errors.companyAddress}</Err>}
            </Field>

            <SectionHeader>
              Thông tin nhà tuyển dụng <span className="text-[red]">*</span>
            </SectionHeader>

            <TwoCols>
              <Field>
                <Label>
                  Họ và tên nhà tuyển dụng <span className="text-[red]">*</span>
                </Label>
                <Input
                  value={form.recruiterName}
                  onChange={handleChange("recruiterName")}
                  placeholder="Nhập thông tin"
                />
                {errors.recruiterName && <Err>{errors.recruiterName}</Err>}
              </Field>

              <Field>
                <Label>
                  Giới tính<span className="text-[red]">*</span>
                </Label>
                <RadioRow>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={form.recruiterGender === "male"}
                      onChange={() =>
                        setForm((s) => ({ ...s, recruiterGender: "male" }))
                      }
                    />{" "}
                    Nam
                  </label>
                  <label style={{ marginLeft: 12 }}>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={form.recruiterGender === "female"}
                      onChange={() =>
                        setForm((s) => ({ ...s, recruiterGender: "female" }))
                      }
                    />{" "}
                    Nữ
                  </label>
                </RadioRow>
                {errors.recruiterGender && <Err>{errors.recruiterGender}</Err>}
              </Field>
            </TwoCols>

            <TwoCols>
              <Field>
                <Label>
                  Số điện thoại nhà tuyển dụng{" "}
                  <span className="text-[red]">*</span>
                </Label>
                <Input
                  value={form.recruiterPhone}
                  onChange={handleChange("recruiterPhone")}
                  placeholder="Nhập thông tin"
                />
                {errors.recruiterPhone && <Err>{errors.recruiterPhone}</Err>}
              </Field>

              <Field>
                <Label>
                  Email nhà tuyển dụng <span className="text-[red]">*</span>
                </Label>
                <Input
                  value={form.recruiterEmail}
                  onChange={handleChange("recruiterEmail")}
                  placeholder="Nhập thông tin"
                />
                {errors.recruiterEmail && <Err>{errors.recruiterEmail}</Err>}
              </Field>
            </TwoCols>

            <TwoCols>
              <Field>
                <Label>
                  Mật khẩu <span className="text-[red]">*</span>
                </Label>
                <Input
                  type="password"
                  value={form.password}
                  onChange={handleChange("password")}
                  placeholder="Nhập mật khẩu"
                />
                {errors.password && <Err>{errors.password}</Err>}
              </Field>

              <Field>
                <Label>
                  Nhập lại mật khẩu <span className="text-[red]">*</span>
                </Label>
                <Input
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  placeholder="Nhập lại mật khẩu"
                />
                {errors.confirmPassword && <Err>{errors.confirmPassword}</Err>}
              </Field>
            </TwoCols>

            <ActionsRow>
              <Submit type="submit" disabled={loading}>
                {loading ? "Đang đăng ký..." : "Đăng ký"}
              </Submit>
            </ActionsRow>
          </Form>
        </Card>

        <SideImage role="img" aria-label="Illustration" />
      </Container>
    </Wrapper>
  );
};

export default RegisterDoanhnghiep;

/* Styled components */
const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: #f7f7f7;
  overflow: auto;
  padding: 24px;
`;

const Form = styled.form``;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1 1 60%;
  background: #ffffff;
  border-radius: 12px;
  padding: 28px;
  box-shadow: 0 6px 30px rgba(2, 6, 23, 0.06);
`;

const SideImage = styled.div`
  flex: 1 1 40%;
  border-radius: 12px;
  background-image: url("/images/about/imageLogin.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  min-height: 640px;
  @media (max-width: 992px) {
    background-image: none;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  color: #bf3b3b;
  font-size: 20px;
  font-weight: 800;
  margin: 8px 0;
`;

const Sub = styled.div`
  color: #6b7280;
  font-size: 13px;
`;

const SectionTitle = styled.div`
  background: #fff3f4;
  color: #bf3b3b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 12px;
  border-radius: 8px;
  margin: 18px 0;
  font-weight: 700;
`;

const SectionHeader = styled.h3`
  margin: 18px 0 12px;
  color: #051a53;
  font-size: 18px;
  font-weight: bold;
`;

const TwoCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 13px;
  color: #6f6f6f;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e6e9ee;
  font-size: 14px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e6e9ee;
  font-size: 14px;
`;

const RadioRow = styled.div`
  display: flex;
  gap: 12px;
  font-size: 14px;
`;

const ActionsRow = styled.div`
  margin-top: 18px;
`;

const Submit = styled.button`
  background: #bc2826;
  color: #fff;
  padding: 10px 18px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  &:disabled {
    background: #999;
    cursor: not-allowed;
  }
`;

const Err = styled.div`
  color: #bf3b3b;
  font-size: 12px;
  margin-top: 6px;
`;
