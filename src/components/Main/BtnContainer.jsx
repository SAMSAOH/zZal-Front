import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlueBtn, GreenBtn } from "../commons/Buttons";
import React from "react";
import { ColContainer } from "../commons/Container";

const BtnContainer = () => {
	return (
		<BtnWrapper>
			<BlueBtn>
				<Link to={`/write/${1}`}>유서 남기기</Link>
			</BlueBtn>
			<GreenBtn>
				<Link to="/login">나의 유서함</Link>
			</GreenBtn>
		</BtnWrapper>
	);
};

export default BtnContainer;
const BtnWrapper = styled(ColContainer)`
	button {
		/* font-size: large; */
		box-shadow: 0px 0px 20px 10px #ffffff20;
		transition: 0.6s;
	}
	button:active {
		filter: brightness(1.2);
	}
	font-size: x-large;
	gap: 20px;
	color: white;
	margin-top: 20px;
	width: 80vw;
	text-align: center;
`;
