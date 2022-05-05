import React from "react";
import { questionList } from "../../assets/objects/questionList";

const Question = ({ resultContent }) => {
	return (
		<React.Fragment>
			{questionList.map((q, idx) => (
				<section className="question-wrapper" key={idx}>
					<h4>
						Q{idx + 1}. {q}
					</h4>
					<span>{resultContent[`answer${idx + 1}`]}</span>
				</section>
			))}
		</React.Fragment>
	);
};

export default Question;
