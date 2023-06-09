import LoginForm from "../../../components/Account/LoginForm";
import Modal from "../../../components/Common/Modal";

const LoginPopup = (props: { showModal?: string; setShowModal: any }) => {
	const { showModal, setShowModal } = props;

	return (
		<Modal
			show={showModal === "dang-nhap"}
			onCancel={() => setShowModal("")}
			dismissible
			showFooter={false}
			title='Đăng nhập'
		>
			<LoginForm showModal={showModal} setShowModal={setShowModal} />
		</Modal>
	);
};

export default LoginPopup;
