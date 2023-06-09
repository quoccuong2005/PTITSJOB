import { useState } from "react";

const PopoverConfirm = (props: {
	header?: any;
	body?: any;
	okText?: string;
	cancelText?: string;
	onOk: () => void;
	onCancel?: () => void;
	render: any;
	placement?: "right" | "top" | "left" | "bottom";
}) => {
	const { header, body, okText, cancelText, onOk, onCancel, render, placement } = props;
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState<any>();

	return (
		<>
			{/* <div
				onClick={(e) => {
					setTarget(e.target);
					setShow((show) => !show);
				}}
				style={{display:'inline'}}
			>
				{render}
			</div>
			<Overlay target={target} placement={placement ?? "top"} show={show} onExit={() => setShow(false)}>
				<Popover id='popover-basic' title={header ? header : null}>
					{body ?? "Xác nhận xóa?"}
					<div className='popconfirm-footer'>
						<button
							className='btn btn-default btn-sm'
							onClick={() => {
								if (onCancel) onCancel();
								setShow(false);
							}}
						>
							{cancelText ?? "Hủy"}
						</button>
						<button className='btn btn-primary btn-sm' onClick={onOk}>
							{okText ?? "Ok"}
						</button>
					</div>
				</Popover>
			</Overlay> */}
		</>
	);
};

export default PopoverConfirm;
