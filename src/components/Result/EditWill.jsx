import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import { RowContainer } from "../commons/Container";

const EditWill = ({ content, handleChange }) => {
	return (
		<section>
			<YellowH3>나의 유서</YellowH3>
			<hr />
			<RowContainer>
				<div>{">>"}</div>
				<TextareaAutosize
					type="text"
					name="content"
					value={content}
					onChange={handleChange}
					required
				/>
			</RowContainer>
		</section>
	);
};

export default EditWill;
const YellowH3 = styled.h3`
	color: #f5de0e;
`;
