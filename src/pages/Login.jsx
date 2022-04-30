import { useEffect } from "react";
import { useLocation } from "react-router";
import KakaoBtn from "../components/commons/KakaoBtn";
import LogoWrapper from "../components/Login/Logo";
import "../Login.css";
import { login } from "../modules/userSlice";
const Login = () => {
	return (
		<div className="login white-border-container">
			<LogoWrapper />
			<img src="./img/randingImg.png" width="80%" alt="밀레니엄버그img" />
			<div className="col-container btn-wrapper">
				<KakaoBtn redirectUri={"/myPage"} />
			</div>
		</div>
	);
};

export default Login;
