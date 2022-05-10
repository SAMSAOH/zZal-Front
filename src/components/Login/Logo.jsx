import React from "react";
import { ColContainer } from "../commons/Container";
import styled from "styled-components";

const Logo = () => {
	return (
		<LogoWrapper>
			<SubLogo>
				<img src={"./img/z.png"} width="16px" alt="z문자" />
				세대 멸망 대비 프로젝트
			</SubLogo>
			<img src="./img/logo.png" width="250px" id="logo" alt="logo" />
		</LogoWrapper>
	);
};

export default Logo;
const LogoWrapper = styled(ColContainer)`
	width: 90%;
	display: flex;
	align-items: center;
	margin-top: 20%;
`;
const SubLogo = styled.span`
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 90%;
	justify-content: flex-end;
`;
