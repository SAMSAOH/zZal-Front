import { ColContainer } from "../commons/Container";

const Logo = () => {
	return (
		<ColContainer className="logo-wrapper" padding="30px 0">
			<img src="./img/logo.png" width="300px" id="logo" alt="logo" />
			<span className="sub-logo">
				<img src={"./img/z.png"} width="16px" alt="z문자" />
				세대 멸망 대비 프로젝트
			</span>
		</ColContainer>
	);
};

export default Logo;
