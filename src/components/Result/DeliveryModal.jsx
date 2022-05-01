import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button } from "../commons/Buttons";
import { ColContainer } from "../commons/Container";
import Modal from "../commons/Modal";
const DeliveryModal = ({ setIsOpen }) => {
	const navigate = useNavigate();
	const handleConfirmClick = () => {
		navigate(`/myPage`);
	};
	return (
		<Modal setIsOpen={setIsOpen}>
			<WhiteBorderContainer className="modal">
				<h3>배달 신청이 완료되었습니다.</h3>
				<span>
					{""} 으로 {""}에 배송 예정입니다.
				</span>
				<Button border="solid 3px white" onClick={handleConfirmClick}>
					확인
				</Button>
			</WhiteBorderContainer>
		</Modal>
	);
};

export default DeliveryModal;
const WhiteBorderContainer = styled(ColContainer)`
	padding: 25px;
	border: solid 5px white;
`;
