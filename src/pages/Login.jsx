import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { ColContainer } from "../components/commons/Container";
import KakaoBtn from "../components/commons/KakaoBtn";
import LogoWrapper from "../components/Login/Logo";
import "../Login.css";
import { login } from "../modules/userSlice";
const Login = () => {
	return (
		<WhiteBorderContainer className="login">
			<LogoWrapper />
			<img src="./img/randingImg.png" width="80%" alt="밀레니엄버그img" />
			<ColContainer className="btn-wrapper">
				<KakaoBtn redirectUri={"/myPage"} />
			</ColContainer>
		</WhiteBorderContainer>
	);
};

export default Login;
const WhiteBorderContainer = styled(ColContainer)`
	margin: 20px;
	border: solid 5px white;
	align-items: center;
`;
