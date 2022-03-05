import React from "react";
import { questionList } from "../../assets/objects/questionList";
const Question = ({ idx }) => {
	return (
		<div className="question">
			{idx === 1 ? `Q1. 당신의 이름은?` : `Q${idx}.${questionList[idx - 2]}`}
		</div>
	);
};

export default Question;
