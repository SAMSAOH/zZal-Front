import KakaoBtn from "../components/commons/KakaoBtn";
import LogoWrapper from "../components/Login/LogoWrapper";
import "../Login.css";
const Login = () => {
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
