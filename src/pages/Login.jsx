import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import KakaoBtn from "../components/commons/KakaoBtn";
import LogoWrapper from "../components/Login/LogoWrapper";
import "../Login.css";
import { setId } from "../modules/user";
import { kakaoLoginHandler } from "../utils/KakaoLogin";
const Login = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const code = params.get("code");

	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		if (code) {
			kakaoLoginHandler(code, "/login").then((res) => {
				dispatch(setId(res.userId));
				navigate("/myPage");
			});
		}
	}, []);

	return (
		<div className="login white-border-container">
			<LogoWrapper />
			<img src="./img/randingImg.png" width="80%" alt="밀레니엄버그img" />
			<div className="col-container btn-wrapper">
				<KakaoBtn redirectUri={"/login"} />
			</div>
		</div>
	);
};

export default Login;
