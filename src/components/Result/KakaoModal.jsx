import React from "react";
import styled from "styled-components";
import { ColContainer } from "../commons/Container";
import KakaoBtn from "../commons/KakaoBtn";
import Modal from "../commons/Modal";
import { WhiteBorderModalContainer } from "./DeliveryModal";
const KakaoModal = ({ setIsOpen }) => {
	const handleDelClick = () => {
		setIsOpen(false);
	};
	return (
		<Modal setIsOpen={setIsOpen}>
			<WhiteBorderModalContainer>
				<DelButton onClick={handleDelClick}>x</DelButton>
				<span>배달하기 기능은 로그인 이후 가능합니다.</span>
				<YellowText>
					**로그인 시, email 제공 동의를 해주셔야 메일을 통해 배달하기가
					가능합니다.**
				</YellowText>
				<KakaoBtn redirectUri={"/delivery"} />
			</WhiteBorderModalContainer>
		</Modal>
	);
};

export default KakaoModal;
const DelButton = styled.button`
	width: 100%;
	text-align: right;
`;
const YellowText = styled.p`
	color: #f5de0e;
	text-align: center;
	font-size: small;
`;
