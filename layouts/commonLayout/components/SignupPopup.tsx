import SignupForm from "../../../components/Account/SignupForm";
import Modal from "../../../components/Common/Modal";

const SignupPopup = (props: { showModal?: string; setShowModal: any }) => {
	const { showModal, setShowModal } = props;
	return (
		<Modal
			show={showModal === "dang-ky"}
			onCancel={() => setShowModal("")}
			dismissible
			showFooter={false}
			title='Đăng ký'
		>
			<SignupForm setShowModal={setShowModal} />
		</Modal>
	);
};

export default SignupPopup;
