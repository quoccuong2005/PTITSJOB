import { useEffect, useRef } from "react";

const Modal = (props: ModalProps) => {
	const { title, onCancel, onOk, show, footer, children, okText, cancelText, center } = props;
	const dismissible = props.dismissible ?? true;
	const showFooter = props.showFooter ?? true;
	const modalRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<div
				className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center ${
					center ? "items-center" : "items-start"
				} ${show ? "" : "hidden"} flex bg-black/50`}
				onClick={(e: any) => {
					const { target } = e;
					if (modalRef.current && !modalRef.current.contains(target) && dismissible && onCancel) onCancel();
				}}
			>
				<div className='relative w-full h-full max-w-xl md:h-auto'>
					{/* Modal Content */}
					<div className='relative bg-white rounded-3xl shadow dark:bg-gray-700' ref={modalRef}>
						{/* Modal header */}
						{title ? (
							<div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>{title}</h3>
								<button
									type='button'
									className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
									onClick={() => {
										if (onCancel) onCancel();
									}}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='h-6 w-6'
									>
										<path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
									</svg>
								</button>
							</div>
						) : null}
					<div className="absolute top-[20px] right-[20px]">
						<button
							type='button'
							className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
							onClick={() => {
								if (onCancel) onCancel();
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='h-6 w-6'
							>
								<path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
							</svg>
						</button>
					</div>
						{/* Modal body */}
						<div className='p-4 space-y-4'>{children}</div>

						{/* Modal footer */}
						{showFooter ? (
							<div className='flex justify-end items-center p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
								{footer ? (
									footer.map((item) => item)
								) : (
									<>
										<button
											type='button'
											className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
											onClick={() => {
												if (onCancel) onCancel();
											}}
										>
											{cancelText ? cancelText : "Đóng"}
										</button>
										<button
											type='button'
											className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
											onClick={() => {
												if (onOk) onOk();
											}}
										>
											{okText ? okText : "Chấp nhận"}
										</button>
									</>
								)}
							</div>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;

type ModalProps = {
	show: boolean;
	center?: boolean;
	title?: string;
	dismissible?: boolean;
	showFooter?: boolean;
	footer?: JSX.Element[];
	children: JSX.Element;
	okText?: string;
	onOk?: () => any;
	cancelText?: string;
	onCancel?: () => any;
};
