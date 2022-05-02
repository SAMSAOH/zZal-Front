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
			<Img src="./img/randingImg.png" width="80%" alt="밀레니엄버그img" />
			<ColContainer >
				<BtnWrapper>
					<KakaoBtn redirectUri={"/myPage"} />	
				</BtnWrapper>
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
const BtnWrapper=styled.div`
	font-size: x-large;
	gap: 20px;
	color: white;
	justify-content: flex-end;
	padding: 30px 0;
`;
const Img=styled.img`
	padding: 100px 0;
`