import React, { useState, useEffect } from "react";
import styled from "styled-components";

type FormState = {
    email: string;
    password: string;
    remember: boolean;
};

const initialState: FormState = {
    email: "",
    password: "",
    remember: false,
};

const LoginDoanhnghiep: React.FC = () => {
    const [form, setForm] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showPassword, setShowPassword] = useState(false);

    // keep overlay behaviour if used as modal
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    const handleChange =
        (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) =>
            setForm((s) => ({ ...s, [k]: k === "remember" ? (e.target as HTMLInputElement).checked : e.target.value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const next: Record<string, string> = {};
        if (!form.email) next.email = "Bắt buộc";
        if (!form.password) next.password = "Bắt buộc";
        setErrors(next);
        if (Object.keys(next).length === 0) {
            // fake login
            console.log("login", form);
            alert("Đăng nhập (demo)");
            setForm(initialState);
        }
    };

    return (
        <Wrapper>
            <Container>
                <Card>
                    <Header>
                        <img src="/images/about/LogoSchool.png" alt="logoschool" className="mx-[auto] mb-[20px]" />
                        <Title>CHÀO MỪNG BẠN ĐÃ QUAY TRỞ LẠI</Title>
                        <Sub>Hãy cùng chúng tôi trở thành một phần của Jobs PTIT</Sub>
                    </Header>

                    <Form onSubmit={handleSubmit} noValidate>
                        <Field>
                            <Label>Email đăng nhập <Required>*</Required></Label>
                            <Input
                                type="email"
                                value={form.email}
                                onChange={handleChange("email")}
                                placeholder="Nhập thông tin"
                                aria-label="email"
                            />
                            {errors.email && <Err>{errors.email}</Err>}
                        </Field>

                        <Field style={{ marginTop: 18 }}>
                            <Label>Mật khẩu <Required>*</Required></Label>
                            <PasswordWrap>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={handleChange("password")}
                                    placeholder="Nhập mật khẩu"
                                    aria-label="password"
                                />
                                <Toggle type="button" onClick={() => setShowPassword((s) => !s)} aria-label="Toggle password">
                                    {showPassword ? "👁️" : "🙈"}
                                </Toggle>
                            </PasswordWrap>
                            {errors.password && <Err>{errors.password}</Err>}
                        </Field>

                        <Row>
                            <CheckboxRow>
                                <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <input type="checkbox" checked={form.remember} onChange={handleChange("remember")} />
                                    <span>Ghi nhớ đăng nhập</span>
                                </label>
                            </CheckboxRow>

                            <Forgot>
                                <Link href="#" >Quên mật khẩu?</Link>
                            </Forgot>
                        </Row>

                        <Actions>
                            <Submit type="submit">Đăng nhập</Submit>
                        </Actions>

                        <CenterNote>
                            Bạn chưa có tài khoản? <Link href="#" >Đăng ký ngay</Link>
                        </CenterNote>

                        <InfoBox>
                            <strong>Nếu bạn là <span style={{ color: "#bf3b3b" }}>nhà tuyển dụng</span>,</strong> hãy vui lòng liên hệ chúng tôi ngay để được nhận tài khoản dành riêng cho doanh nghiệp của bạn. Vui lòng nhấn <Link href="#" >Liên hệ ngay</Link> để nhận tư vấn tuyển dụng (giờ hành chính).
                        </InfoBox>
                    </Form>
                </Card>

                <SideImage role="img" aria-label="Illustration" />
            </Container>
        </Wrapper>
    );
};

export default LoginDoanhnghiep;

/* Styled components */
const Wrapper = styled.div`
 
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: #f7f7f7;
  overflow: auto;
  padding: 24px;
  box-sizing: border-box;
`;


const Container = styled.div`
  max-width: 1300px;
  margin: 118px auto;
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
  margin-bottom: 12px;
  max-width: 450px;
    text-align: center;
    margin: 0 auto 24px auto;
`;

const Required = styled.span`
  color: #d9534f;
  margin-left: 6px;
  font-weight: 700;
`;

const Title = styled.h2`
  color: #bf3b3b;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 800;
`;

const Sub = styled.div`
  color: #6b7280;
  font-size: 13px;
`;

const Form = styled.form`
    max-width: 465px;
    margin: 0 auto;
`;

const PasswordWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Toggle = styled.button`
  position: absolute;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const CheckboxRow = styled.div``;

const Forgot = styled.div`
  a {
    color: #bf3b3b;
    text-decoration: underline;
    font-size: 14px;
  }
`;

const Actions = styled.div`
  margin-top: 18px;
`;


const Field = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 13px;
  color: #6F6F6F;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e6e9ee;
  background: #fff;
  font-size: 14px;
`;

const CenterNote = styled.div`
  text-align: center;
  margin-top: 14px;
  color: #6b7280;
  a { color: #0b66ff; text-decoration: underline; margin-left: 6px; }
`;
const Link = styled.a`
  color: #0b66ff;
  text-decoration: underline;
    cursor: pointer;
    &:hover { text-decoration: none; }
`;
const InfoBox = styled.div`
  margin-top: 18px;
  background: #f3f7fb;
  border-radius: 8px;
  padding: 14px;
  color: #334155;
  font-size: 14px;
  line-height: 1.4;
`;

const Submit = styled.button`
  background: #BC2826;
  color: #fff;
  padding: 10px 18px;
  border-radius: 5px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  font-size: 15px;
`;

const Err = styled.div`
  color: #bf3b3b;
  font-size: 12px;
  margin-top: 6px;
`;