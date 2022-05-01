import { ColContainer } from "../commons/Container";

const Logo = () => {
	return (
		<ColContainer className="logo-wrapper">
			<img src="./img/logo.png" width="250px" id="logo" alt="logo" />
			<span className="sub-logo">
				<img src={"./img/z.png"} width="16px" alt="z문자" />
				세대 멸망 대비 프로젝트
			</span>
		</ColContainer>
	);
};

export default Logo;
