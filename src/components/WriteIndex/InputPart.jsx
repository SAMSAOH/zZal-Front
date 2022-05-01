import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { RowContainer } from "../commons/Container";
const InputPart = ({ input, setInput, type }) => {
	const handleChange = (e) => {
		const { value } = e.target;
		setInput(value);
	};
	return (
		<RowContainer className="input-wrapper">
			<span className="question" id="inputMark">
				{">>"}
			</span>
			<TextareaAutosize
				type="text"
				name="text"
				className="qnaInput"
				value={input}
				onChange={handleChange}
				maxLength={type === "ownerName" ? 20 : 200}
				placeholder={`${type === "ownerName" ? 20 : 200}자 이하`}
				required
			/>
		</RowContainer>
	);
};

export default InputPart;
