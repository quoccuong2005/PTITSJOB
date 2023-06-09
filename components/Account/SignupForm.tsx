import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { postRequest } from "../../api";
import { useAuth } from "../../context/AuthContext";
import { rules } from "../../utils/rules";

type TRegister = {
	lastName?: string;
	firstName?: string;
	tenCongTy?: string;
	username: string;
	password: string;
	confirmPassword: string;
};

const SignupForm = (props: { setShowModal?: any }) => {
	const { setShowModal } = props;
	const router = useRouter();
	const { isAuthenticated } = useAuth();
	const [signupMode, setSignupMode] = useState<string>("USER");
	const [formSubmitting, setFormSubmitting] = useState(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showPasswordRepeat, setShowPasswordRepeat] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		getValues,
	} = useForm({ defaultValues: {} as TRegister });

	useEffect(() => {
		if (isAuthenticated && router.pathname.includes("dang-ky")) router.push("/");
	}, [isAuthenticated]);

	const onRegister = async (data: any) => {
		// console.log(getValues("password"));

		if (data.confirmPassword !== data.password) {
			setError("confirmPassword", { message: "Mật khẩu xác nhận không chính xác" });
		} else {
			if (formSubmitting) return;
			setFormSubmitting(true);
			const { confirmPassword, ...rest } = data;
			postRequest("/user/public/dang-ky-tai-khoan", { ...rest, systemRole: signupMode })
				.then(() => {
					toast.success("Đăng ký thành công");
					if (!setShowModal) router.push("/");
					else setShowModal("");
				})
				.catch(() => {
					setFormSubmitting(false);
					console.error();
				});
		}
	};

	return (
		<div className={setShowModal ? "" : "login-page"}>
			<div className='modal-content-area'>
				<div className='modal-box-area'>
					<div className='careerfy-modal-title-box'>
						<h2>Đăng ký tài khoản</h2>
						{setShowModal ? (
							<span className='modal-close' onClick={() => setShowModal("")}>
								<i className='fa fa-times'></i>
							</span>
						) : null}
					</div>
					<form onSubmit={handleSubmit(onRegister)}>
						<div className='careerfy-box-title'>
							<span>Chọn loại tài khoản</span>
						</div>
						<div className='careerfy-user-options'>
							<ul>
								<li className={signupMode === "USER" ? "active" : ""} onClick={() => setSignupMode("USER")}>
									<a href='#'>
										<i className='careerfy-icon careerfy-user'></i>
										<span>Ứng viên</span>
										{/* <small>Tôi muốn tìm việc làm</small> */}
									</a>
								</li>
								<li
									className={signupMode === "DOANH_NGHIEP" ? "active" : ""}
									onClick={() => setSignupMode("DOANH_NGHIEP")}
								>
									<a href='#'>
										<i className='careerfy-icon careerfy-building'></i>
										<span>Nhà tuyển dụng</span>
										{/* <small>Tôi muôn tìm những ứng viên phù hợp nhất</small> */}
									</a>
								</li>
							</ul>
						</div>
						<div className='careerfy-user-form'>
							<ul>
								{signupMode === "DOANH_NGHIEP" ? (
									<li>
										<label className='required-label'>Tên doanh nghiệp</label>
										<div className='input-icon'>
											<input
												// placeholder='Nhập tên doanh nghiệp'
												type={"text"}
												{...register("tenCongTy", { ...rules.required, ...rules.maxLength(100) })}
											/>
											<i className='fas fa-building'></i>
										</div>
										<div className='invalid'>{errors.tenCongTy?.message}</div>
									</li>
								) : (
									<li>
										<div className='row'>
											<div className='col-xs-6 my-0'>
												<label className='required-label'>Họ đệm</label>
												<div className='input-icon'>
													<input
														// placeholder='Nhập họ đệm'
														type={"text"}
														{...register("lastName", { ...rules.required, ...rules.maxLength(20) })}
													/>
													<i className='fas fa-user'></i>
												</div>
												<div className='invalid'>{errors.lastName?.message}</div>
											</div>
											<div className='col-xs-6 my-0'>
												<label className='required-label'>Tên</label>
												<div className='input-icon'>
													<input
														// placeholder='Nhập tên'
														type={"text"}
														{...register("firstName", { ...rules.required, ...rules.maxLength(20) })}
													/>
													<i className='fas fa-user'></i>
												</div>
												<div className='invalid'>{errors.firstName?.message}</div>
											</div>
										</div>
									</li>
								)}
								<li>
									<label className='required-label'>Email</label>
									<div className='input-icon'>
										<input
											type={"text"}
											{...register("username", { ...rules.required, ...rules.email, ...rules.maxLength(256) })}
										/>
										<i className='fas fa-envelope'></i>
									</div>
									<div className='invalid'>{errors.username?.message}</div>
								</li>
								<li>
									<label className='required-label'>Mật khẩu</label>
									<div className='input-icon'>
										<input
											type={showPassword ? "text" : "password"}
											onKeyDown={(event) => {
												if (event.ctrlKey && event.key == "c") {
													return false;
												}
											}}
											{...register("password", { ...rules.required, ...rules.password, ...rules.maxLength(256) })}
										/>
										{showPassword ? (
											<i className='fas fa-eye' onClick={() => setShowPassword(false)}></i>
										) : (
											<i className='fas fa-eye-slash' onClick={() => setShowPassword(true)}></i>
										)}
									</div>
									<div className='invalid'>{errors.password?.message}</div>
								</li>
								<li>
									<label className='required-label'>Nhập lại mật khẩu</label>
									<div className='input-icon'>
										<input
											type={showPasswordRepeat ? "text" : "password"}
											{...register("confirmPassword", {
												...rules.required,
												...rules.password,
												...rules.checkConfirmPassword(getValues("password")),
											})}
										/>
										{showPasswordRepeat ? (
											<i className='fas fa-eye' onClick={() => setShowPasswordRepeat(false)}></i>
										) : (
											<i className='fas fa-eye-slash' onClick={() => setShowPasswordRepeat(true)}></i>
										)}
									</div>
									<div className='invalid'>{errors.confirmPassword?.message}</div>
								</li>
								<li className='careerfy-user-form-coltwo-full'>
									<button type='submit'>Đăng ký</button>
								</li>
							</ul>
						</div>
						<div className='clearfix'></div>
						<div className='careerfy-user-form-info'>
							<p>
								Bạn đã có tài khoản?{" "}
								{setShowModal ? (
									<Link href={"#"} type='button' onClick={() => setShowModal("dang-nhap")}>
										Đăng nhập tại đây
									</Link>
								) : (
									<Link href={"/dang-nhap"}>Đăng nhập tại đây</Link>
								)}
							</p>
						</div>
						{/* <div className='careerfy-box-title careerfy-box-title-sub'>
							<span>Hoặc sử dụng</span>
						</div>
						<div className='clearfix'></div>
						<ul className='careerfy-login-media'>
							<Facebook setShowModal={setShowModal} />
							<Google setShowModal={setShowModal} />
						</ul> */}
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignupForm;
