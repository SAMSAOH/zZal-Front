import React from "react";
import TextareaAutosize from "react-textarea-autosize";
const InputPart = ({ input, setInput, type }) => {
	const handleChange = (e) => {
		const { value } = e.target;
		setInput(value);
	};
	return (
		<div className="row-container input-wrapper">
			<span className="question" id="inputMark">
				{">>"}
			</span>
			<TextareaAutosize
				type="text"
				name="text"
				className="qnaInput"
				value={input}
				onChange={handleChange}
				maxLength={type === "owner" ? 20 : 200}
				placeholder={`${type === "owner" ? 20 : 200}자 이하`}
				required
			/>
		</div>
	);
};

export default InputPart;
