import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import { questionList } from "../assets/objects/questionList";
import "../WriteIndex.css";
const WriteIndex = () => {
	const { idx } = useParams();
	const paramIdx = parseInt(idx);
	const nextUrl = paramIdx === 6 ? "/write/will" : `/write/${paramIdx + 1}`;

	const [input, setInput] = useState("");
	const handleChange = (e) => {
		const { value } = e.target;
		setInput(value);
	};
	
	return (
		<>
			<div className="write container white-border-container">
				<div className="writeLine">
					<div className="col-container writeIndexTextBox">
						{" "}
						<div className="question">
							{paramIdx === 1
								? `Q1. 당신의 이름은?`
								: `Q${idx}.${questionList[idx - 1]}`}
						</div>
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
								
							/>
						</div>
							<Link to={nextUrl} className="nextBtn">	다음
							</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default WriteIndex;
