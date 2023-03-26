import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled, { css } from "styled-components";
import { ColContainer, RowContainer } from "../commons/Container";

const Will = ({ content, handleChange, isEdit }) => {
	return (
		<ColContainer>
			<YellowH3>나의 유서</YellowH3>
			<TextContainer gap="10px">
				<div>{">>"}</div>
				<Textarea
					type="text"
					name="content"
					value={content}
					onChange={handleChange}
					required
					disabled={!isEdit}
				/>
			</TextContainer>
		</ColContainer>
	);
};

export default Will;
const YellowH3 = styled.h3`
	color: #f5de0e;
	border-bottom: solid 3px #f5de0e;
	padding-bottom: 20px;
`;
const TextContainer = styled(RowContainer)`
	align-items: flex-start;
`;

const Textarea = styled(TextareaAutosize)`
	${({ disabled }) =>
		disabled &&
		css`
			outline: none;
		`}
`;
