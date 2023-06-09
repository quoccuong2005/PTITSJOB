"use client";

import { Button, Modal } from "flowbite-react";
import React from "react";

const ModalConfirm = (props: {
	visible: boolean;
	confirm: any;
	cancel: any;
	title?: string;
	content?: React.ReactNode;
	okText?: string;
	cancelText?: string;
	onHide?: any;
}) => {
	const { visible, confirm, cancel, title, content, okText, cancelText, onHide } = props;

	return (
		<Modal show={visible} onClose={onHide ?? cancel} size='lg'>
			<Modal.Header>{title ?? "Xác nhận xóa"}</Modal.Header>

			<Modal.Body>{content ?? "Xác nhận xóa mục này?"}</Modal.Body>
			<Modal.Footer>
				<Button onClick={cancel} color='gray'>
					{cancelText ?? "Đóng"}
				</Button>
				<Button onClick={confirm}>{okText ?? "Xóa"}</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalConfirm;
