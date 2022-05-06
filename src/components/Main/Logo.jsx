import React from "react";
import { ColContainer } from "../commons/Container";
import styled from "styled-components";
const Logo = () => {
	return (
		<LogoWrapper>
			<LogoImg src="./img/logo.png" width="300px" id="logo" alt="logo" />
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
	justify-content: flex-start;
	height: 80vh;
`;
const LogoImg = styled.img`
	margin: 20px 0;
`;
const SubLogo = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 70%;
	justify-content: flex-end;
`;
