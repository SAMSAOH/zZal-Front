import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { reqDelivery } from "../api/delivery";
import { BorderBlueBtn } from "../components/commons/Buttons";
import {
	ColContainer,
	Container,
	RowContainer,
} from "../components/commons/Container";
import DeliveryModal from "../components/Result/DeliveryModal";
import { login } from "../modules/userSlice";
const Delivery = () => {
	const [isOpen, setIsOpen] = useState(false);
	/* redux로부터 userId 받기 */
	const { userId } = useSelector((state) => state.user);
	const handleClickDelivery = () => {
		reqDelivery(userId).then(() => setIsOpen(true));
	};

	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const code = params.get("code");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		if (code) {
			try {
				dispatch(login({ code, redirectUrl: "/delivery" }));
			} catch (error) {
				alert("로그인에 실패하였습니다.");
				navigate(-1);
			}
		}
	}, [code]);

	return (
		<>
			<BGContainer dir="column" alignCenter width="100%">
				<Head>배달하기</Head>
				<TextWrapper width="90%">
					<h3>{">> 배달하기란?"}</h3>
					<ContentWrapper>
						1년 마다, 나의 메일로 <br /> 유서를 배달해줍니다.
						<br /> <br /> 험난한 지구에서 살아남은 <br /> 당신에게 보내는 유서
						<br /> <br /> 1년전, 나를 돌아보세요.
					</ContentWrapper>
					<NoticeBox>
						** 배달 메일
						<br /> <br /> 카카오 계정 이메일로 발송됩니다.
					</NoticeBox>
				</TextWrapper>
				<RowContainer padding="20px 0">
					<BorderBlueBtn onClick={handleClickDelivery}>배달 신청</BorderBlueBtn>
				</RowContainer>
			</BGContainer>
			{isOpen && <DeliveryModal setIsOpen={setIsOpen} />}
		</>
	);
};

export default Delivery;
const BGContainer = styled(Container)`
	background-image: url("/img/mail.png");
	background-repeat: no-repeat;
	background-position: center;
`;
const TextWrapper = styled(ColContainer)`
	flex: 0.9;
	padding: 20px;
	justify-content: flex-start;
	background-color: #00000040;
`;
const NoticeBox = styled.p`
	width: 100%;
	border: solid 3px #f5de0e;
	padding: 20px;
	color: #f5de0e;
	background-color: #ffffff20;
	font-size: small;
`;
const ContentWrapper = styled.p`
	color: white;
	line-height: 1.5;
	margin: 20px 0;
	flex: 1;
`;
const Head = styled.h2`
	border-bottom: solid 3px white;
	width: 90%;
	text-align: center;
	padding-bottom: 20px;
`;
