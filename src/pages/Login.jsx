import React from "react";
import styled from "styled-components";
import { ColContainer } from "../components/commons/Container";
import KakaoBtn from "../components/commons/KakaoBtn";
import Logo from "../components/Login/Logo";
import RandingImg from "@assets/imgs/randingImg.png";

const Login = () => {
	return (
		<WhiteBorderContainer spaceAround>
			<Logo />
			<img src={RandingImg} width="80%" alt="밀레니엄버그img" />
			<KakaoBtn redirectUri={"/myPage"} />
		</WhiteBorderContainer>
	);
};

export default Login;
const WhiteBorderContainer = styled(ColContainer)`
	margin: 20px;
	border: solid 3px white;
	align-items: center;
	height: calc(100vh - 40px);
	#kakao-btn {
		font-size: x-large;
	}
`;
