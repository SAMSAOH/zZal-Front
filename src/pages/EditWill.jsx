import React from "react";

import { useState } from "react";
import { useLocation, useParams } from "react-router";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import { updateWill } from "../api/will";
import { questionList } from "../assets/objects/questionList";
import { BorderGreenBtn } from "../components/commons/Buttons";
import { Container, RowContainer } from "../components/commons/Container";
import Will from "../components/Result/Will";
const EditWill = () => {
	const { willId } = useParams();
	const { state } = useLocation();
	const [resultContent, setResultContent] = useState(state);

	const onSubmit = () => {
		updateWill(willId, resultContent);
	};
	const handleChange = (e) => {
		const { value, name } = e.target;
		setResultContent((p) => ({ ...p, [name]: value }));
	};
	return (
		<Container width="100%">
			<Head>
				<h2>{resultContent.owner}의 유서</h2>
				<span>{resultContent.date}</span>
			</Head>
			{questionList.map((q, idx) => (
				<QuestionWrapper key={idx}>
					<h3>
						Q{idx + 1}. {q}
					</h3>
					<RowContainer padding="0">
						<div>{">>"}</div>
						<TextArea
							/* placeholder={resultContent[`answer${idx + 1}`]} */
							value={resultContent[`answer${idx + 1}`]}
							onChange={handleChange}
							name={`answer${idx + 1}`}
							required
						/>
					</RowContainer>
				</QuestionWrapper>
			))}
			<Will content={resultContent.content} handleChange={handleChange} />
			<RowContainer>
				<BorderGreenBtn onClick={onSubmit}>수정하기</BorderGreenBtn>
			</RowContainer>
		</Container>
	);
};

export default EditWill;
const Head = styled.div`
	border-bottom: solid 3px white;
	width: 90%;
	text-align: center;
	padding-bottom: 20px;
`;

const TextArea = styled(TextareaAutosize)`
	font-size: large;
`;
const QuestionWrapper = styled.section`
	width: 90%;
	margin-bottom: 20px;
	h3 {
		color: #f5de0e;
	}
`;
