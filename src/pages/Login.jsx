import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import KakaoBtn from "../components/commons/KakaoBtn";
import LogoWrapper from "../components/Login/LogoWrapper";
import "../Login.css";
import { kakaoLoginHandler } from "../utils/KakaoLogin";
const Login = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const code = params.get("code");

	useEffect(() => {
		if (code) {
			kakaoLoginHandler(code).then((res) => {
				loginInfoHandler(res.userId);
			});
		}
	}, []);

	const navigate = useNavigate();
	const loginInfoHandler = (userId) => {
		window.localStorage.setItem(
			"userId",
			JSON.stringify({
				userId: userId,
			})
		);
		navigate("/myPage");
	};

	return (
		<div className="login white-border-container">
			<LogoWrapper />
			<img src="./img/randingImg.png" width="80%" />
			<div className="col-container btn-wrapper">
				<KakaoBtn />
			</div>
		</div>
	);
};

export default Login;
