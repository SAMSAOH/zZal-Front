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
			<WhiteBorderModalContainer>
				<h3>배달 신청이 완료되었습니다.</h3>
				<span>
					{""} 으로 {""}에 배송 예정입니다.
				</span>
				<Button border="solid 3px white" onClick={handleConfirmClick}>
					확인
				</Button>
			</WhiteBorderModalContainer>
		</Modal>
	);
};

export default DeliveryModal;
export const WhiteBorderModalContainer = styled(ColContainer)`
	padding: 25px;
	border: solid 5px white;
	position: absolute;
	margin: 5%;
	background-color: #05037b;
	top: 30%;
	z-index: 1;
	gap: 30px;
	align-items: center;
`;
