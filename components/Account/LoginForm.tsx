import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff, HiLockClosed, HiMail } from "react-icons/hi";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { rules } from "../../utils/rules";
import OAuthLogin from "../Common/OAuthLogin";

const LoginForm = (props: { showModal?: string; setShowModal: any }) => {
	const { showModal, setShowModal } = props;
	const { login, isAuthenticated } = useAuth();
	const router = useRouter();
	const { redirect } = router.query;
	const [formSubmitting, setFormSubmitting] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: { username: "", password: "" } });
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const isPopup = showModal === "dang-nhap";

	useEffect(() => {
		if (isAuthenticated && router.pathname.includes("dang-nhap")) router.push((redirect as string) ?? "/");
	}, [isAuthenticated]);

	const onLogin = (data: any) => {
		if (formSubmitting) return;
		setFormSubmitting(true);

		login(data)
			.then(() => {
				toast.success("Đăng nhập thành công!");

				if (isPopup) setShowModal("");
			})
			.catch((error) => {
				console.error(error);
				setFormSubmitting(false);
			});
	};

	return (
		<div className='max-w-xl self-center flex mx-auto flex-col'>
			{isPopup ? (
				<></>
			) : (
				<div className='text-2xl font-medium text-center uppercase pt-10'>
					<h2>Đăng nhập</h2>
				</div>
			)}

			<form onSubmit={handleSubmit(onLogin)}>
				<div className='flex flex-col gap-3'>
					<div className='block'>
						<div className='mb-2'>
							<Label value='Email' />
						</div>
						<TextInput
							type={"text"}
							{...register("username", { ...rules.required, ...rules.maxLength(256) })}
							required
							icon={HiMail}
							helperText={errors.username?.message}
							color={errors.username?.message ? "failure" : undefined}
						/>
					</div>

					<div className='block'>
						<div className='mb-2'>
							<Label htmlFor='password' value='Mật khẩu' />
						</div>
						<div className='relative'>
							<TextInput
								type={showPassword ? "text" : "password"}
								{...register("password", { ...rules.required, ...rules.maxLength(256) })}
								required
								icon={HiLockClosed}
								helperText={errors.password?.message}
								color={errors.password?.message ? "failure" : undefined}
							/>
							<button
								type='button'
								className='absolute right-2.5 bottom-0 h-full bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:!ring-0'
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<HiEye className='text-gray-600 dark:text-gray-100 text-xl' />
								) : (
									<HiEyeOff className='text-gray-600 dark:text-gray-100 text-xl' />
								)}
							</button>
						</div>
					</div>
					<Button type='submit' className='uppercase'>
						Đăng nhập
					</Button>

					<div className='flex justify-between text-sm dark:text-gray-300'>
						<p>
							Bạn chưa có tài khoản?{" "}
							{isPopup ? (
								<Link
									href={"#"}
									type='button'
									className='text-primary-500 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-500'
									onClick={() => setShowModal("dang-ky")}
								>
									Đăng ký tài khoản
								</Link>
							) : (
								<Link
									href={"/dang-ky"}
									className='text-primary-500 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-500'
								>
									Đăng ký tài khoản
								</Link>
							)}
						</p>
						<div className='careerfy-checkbox'>
							<p>
								<Link
									href={"#"}
									className='text-primary-500 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-500'
									onClick={() => setShowModal("quen-mat-khau")}
								>
									Quên mật khẩu?
								</Link>
							</p>
						</div>
					</div>

					<div className='inline-flex items-center justify-center w-full'>
						<hr className='w-64 h-0.5 my-6 bg-gray-200 border-0 rounded dark:bg-gray-500' />
						<div className='absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-700 text-sm dark:text-gray-300'>
							Hoặc sử dụng
						</div>
					</div>

					<div>
						{/* <Facebook setShowModal={setShowModal} />
							<Google setShowModal={setShowModal} /> */}
						<OAuthLogin setShowModal={setShowModal} redirect={redirect as string} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
