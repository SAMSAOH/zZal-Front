import React from "react";
import styled from "styled-components";
import { ColContainer } from "../commons/Container";
const ImgPart = ({ idx }) => {
	return (
		<ImgWrapper center>
			<img
				src={require(`../../assets/imgs/q${idx}.png`)}
				width="250px"
				alt="questionImg"
			/>
		</ImgWrapper>
	);
};

export default ImgPart;
const ImgWrapper = styled(ColContainer)`
	flex: 1;
`;
