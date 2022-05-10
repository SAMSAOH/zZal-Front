import React from "react";
import { questionList } from "../../assets/objects/questionList";

const Question = ({ resultContent }) => {
	return (
		<>
			{questionList.map((q, idx) => (
				<section key={idx}>
					<h3>Q{idx + 1 + "." + q}</h3>
					<input placeholder={resultContent[`answer${idx + 1}`]}></input>
				</section>
			))}
		</>
	);
};

export default Question;
