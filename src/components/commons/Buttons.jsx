import styled from "styled-components";

export const Button = styled.button`
	all: unset;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	border: ${({ border }) => border};
`;

export const BorderBlueBtn = styled(Button)`
	background-color: transparent;
	border: solid 5px #36c6bd;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
`;

export const BorderGreenBtn = styled(Button)`
	background-color: transparent;
	border: solid 5px #2bc94d;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
`;

export const BlueBtn = styled(Button)`
	background-color: #36c6bd;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
`;

export const GreenBtn = styled(Button)`
	background-color: #2bc94d;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
`;
