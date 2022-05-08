import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { RowContainer } from "../commons/Container";

const InputPart = ({ input, setInput, type }) => {
	const handleChange = (e) => {
		const { value } = e.target;
		setInput(value);
	};
	return (
		<InputWrapper>
			<InputMark>{">>"}</InputMark>
			<TextInput
				type="text"
				name="text"
				className="qnaInput"
				value={input}
				onChange={handleChange}
				maxLength={type === "ownerName" ? 20 : 200}
				placeholder={`${type === "ownerName" ? 20 : 200}자 이하`}
				required
			/>
		</InputWrapper>
	);
};

export default InputPart;
const InputWrapper = styled(RowContainer)`
	align-items: flex-start;
	padding: 10px 0;
	gap: 10px;
`;
const InputMark = styled.span`
	color: #f5de0e;
	font-size: large;
`;
const TextInput = styled(TextareaAutosize)`
	font-size: large;
	&::placeholder {
		color: white;
		opacity: 50%;
	}
`;
