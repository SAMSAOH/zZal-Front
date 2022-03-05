import { questionList } from "../../assets/objects/questionList";

const Question = ({ resultContent }) => {
	return (
		<>
			{questionList.map((q, idx) => (
				<section className="question-wrapper">
					<h3>Q{idx + 1 + "." + q}</h3>
					<span>{resultContent[`answer${idx + 1}`]}</span>
				</section>
			))}
		</>
	);
};

export default Question;
