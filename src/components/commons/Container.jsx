import styled from "styled-components";
import Flex from "./Flex";

export const Container = styled(Flex)`
	min-height: 100vh;
	flex-direction: column;
	align-items: center;
`;

export const RowContainer = styled(Flex)`
	flex-direction: row;
	align-items: center;
`;

export const ColContainer = styled(Flex)`
	flex-direction: column;
`;

export const CenterContainer = styled(Flex)`
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	justify-content: center;
	padding: 50px 0px;
`;

export const BgImgContainer = styled(Flex)`
	flex-direction: column;
	align-items: center;
	background-image: url("/public/img/bg_jet.png");
	background-size: 150px;
	background-repeat: no-repeat;
	background-position: 50px 300px;
	min-height: 100vh;
`;

export const BgContainer = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: #00000050;
	top: 0;
	left: 0;
	z-index: 1;
`;
