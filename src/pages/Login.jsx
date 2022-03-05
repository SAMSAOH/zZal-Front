import KakaoBtn from "../components/commons/KakaoBtn";
import "../Login.css";
const Login = () => {
	return (
		<div className="login white-border-container">
			<div className="col-container logo-wrapper">
				<span className="sub-logo">
					<img src={"z.png"} width="16px" />
					세대 멸망 대비 프로젝트
				</span>
				<img src="logo.png" width="250px" id="logo" />
			</div>
			<img src="randingImg.png" width="80%" />
			<div className="col-container btn-wrapper">
				<KakaoBtn />
			</div>
		</div>
	);
};

export default Login;
