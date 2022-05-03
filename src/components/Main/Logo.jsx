import { ColContainer } from "../commons/Container";
import styled from "styled-components";
const Logo = () => {
	return (
		<LogoWrapper>
			<LogoImg src="./img/logo.png" width="250px" id="logo" alt="logo" />
			<SubLogo>
				<img src={"./img/z.png"} width="16px" alt="z문자" />
				세대 멸망 대비 프로젝트
			</SubLogo>
		</LogoWrapper>
	);
};

export default Logo;
const LogoWrapper = styled(ColContainer)`
	width: 100%;
	align-items: center;
	height: 80vh;
`;
const LogoImg = styled.img`
	margin-top: 100px;
	margin-bottom: 20px;
`;
const SubLogo = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 70%;
	justify-content: flex-end;
`;
