import axios from "axios";
import { useState } from "react";
import { useLocation, useParams } from "react-router";
import TextareaAutosize from "react-textarea-autosize";
import { questionList } from "../assets/objects/questionList";
import Header from "../components/Result/Header";
import Will from "../components/Result/Will";
import "../EditWill.css";
const EditWill = () => {
	const { willId } = useParams();
	const { state } = useLocation();
	const [resultContent, setResultContent] = useState(state);

	const onSubmit = () => {
		axios
			.put(`/update/${willId}`, resultContent)
			.then((res) => res === 200 && console.log("suc"));
	};
	const handleChange = (e) => {
		const { value, name } = e.target;
		setResultContent((p) => ({ ...p, [name]: value }));
	};
	return (
		<>
			<div className="editWill container result-container">
				<Header owner={resultContent.owner} />
				{questionList.map((q, idx) => (
					<section className="question-wrapper" key={idx}>
						<h3>Q{idx + 1 + "." + q}</h3>
						<div className="row-container input-wrapper">
							<div className="writewillTitle">{">>"}</div>
							<TextareaAutosize
								/* placeholder={resultContent[`answer${idx + 1}`]} */
								value={resultContent[`answer${idx + 1}`]}
								onChange={handleChange}
								name={`answer${idx + 1}`}
								required
							/>
						</div>
					</section>
				))}
				<Will content={resultContent.content} handleChange={handleChange} />
				<div className="row-container btn-wrapper">
					<button className="border-btn green-btn" onClick={onSubmit}>
						수정하기
					</button>
				</div>
			</div>
		</>
	);
};

export default EditWill;
