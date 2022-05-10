import React from "react";
import { ColContainer } from "../commons/Container";
import styled from "styled-components";
import { ReactComponent as ZIcon } from "@assets/imgs/Z.svg";
import LogoImg from "@assets/imgs/logo.png";
const Logo = () => {
	return (
		<LogoWrapper>
			<LogoImgElement src={LogoImg} width="300px" id="logo" alt="logo" />
			<SubLogo>
				<ZIcon width="16px" alt="z문자" />
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
const LogoImgElement = styled.img`
	margin: 20px 0;
`;
const SubLogo = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 70%;
	justify-content: flex-end;
`;
