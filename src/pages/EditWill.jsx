import { useState } from "react";
import { useLocation, useParams } from "react-router";
import TextareaAutosize from "react-textarea-autosize";
import { updateWill } from "../api/will";
import { questionList } from "../assets/objects/questionList";
import { Container, RowContainer } from "../components/commons/Container";
import Header from "../components/Result/Header";
import Will from "../components/Result/Will";
import "../EditWill.css";
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
		<Container className="editWill result-container">
			<Header owner={resultContent.owner} date={resultContent.createdAt} />
			{questionList.map((q, idx) => (
				<section className="question-wrapper" key={idx}>
					<h3>
						Q{idx + 1}. {q}
					</h3>
					<RowContainer className="input-wrapper">
						<div className="writewillTitle">{">>"}</div>
						<TextareaAutosize
							/* placeholder={resultContent[`answer${idx + 1}`]} */
							value={resultContent[`answer${idx + 1}`]}
							onChange={handleChange}
							name={`answer${idx + 1}`}
							required
						/>
					</RowContainer>
				</section>
			))}
			<Will content={resultContent.content} handleChange={handleChange} />
			<RowContainer className="btn-wrapper">
				<button className="border-btn green-btn" onClick={onSubmit}>
					수정하기
				</button>
			</RowContainer>
		</Container>
	);
};

export default EditWill;
