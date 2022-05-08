import React from "react";
import styled from "styled-components";
import { questionList } from "../../assets/objects/questionList";
const Question = ({ idx }) => {
	return (
		<Quest>
			{idx === 1 ? `Q1. 당신의 이름은?` : `Q${idx}.${questionList[idx - 2]}`}
		</Quest>
	);
};

export default Question;
const Quest=styled.div`
	color: #F5DE0E;
    font-size: x-large;
`