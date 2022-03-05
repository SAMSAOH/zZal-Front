import KakaoBtn from "../components/commons/KakaoBtn";
import "../Login.css";
const Login = () => {
	return (
		<div className="login container white-border-container">
			<div className="logo-wrapper">
				<img src="logo.png" width="250px" id="logo" />
			</div>
			<div className="col-container btn-wrapper">
				<KakaoBtn />
			</div>
		</div>
	);
};

export default Login;
