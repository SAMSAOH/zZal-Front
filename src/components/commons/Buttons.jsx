import styled from "styled-components";

export const Button = styled.button`
	all: unset;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	border: ${({ border }) => border};
	margin: ${({ margin }) => margin};
`;

export const BorderYellowBtn = styled(Button)`
	background-color: transparent;
	border: solid 5px #f5de0e;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	&:active {
		filter: brightness(1.2);
	}
`;

export const BorderBlueBtn = styled(Button)`
	background-color: transparent;
	border: solid 5px #36c6bd;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	&:active {
		filter: brightness(1.2);
	}
`;

export const BorderGreenBtn = styled(Button)`
	background-color: transparent;
	border: solid 5px #2bc94d;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	&:active {
		filter: brightness(1.2);
	}
`;

export const BlueBtn = styled(Button)`
	background-color: #36c6bd;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	&:active {
		filter: brightness(1.2);
	}
`;

export const GreenBtn = styled(Button)`
	background-color: #2bc94d;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	&:active {
		filter: brightness(1.2);
	}
`;
