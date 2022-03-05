import Modal from "../commons/Modal";
const DeliveryModal = ({ setIsOpen }) => {
	const handleDelClick = () => {
		setIsOpen(false);
	};
	return (
		<Modal setIsOpen={setIsOpen}>
			<div className="col-container border-container modal">
				<h3>배달 신청이 완료되었습니다.</h3>
				<span>
					{""} 으로 {""}에 배송 예정입니다.
				</span>
				<button className="border-btn white-btn" onClick={handleDelClick}>
					확인
				</button>
			</div>
		</Modal>
	);
};

export default DeliveryModal;
