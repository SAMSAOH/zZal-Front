import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Question from "../components/WriteIndex/Question";
import ImgPart from "../components/WriteIndex/ImgPart";
import InputPart from "../components/WriteIndex/InputPart";
import { setData } from "../modules/question";
import "../WriteIndex.css";
const WriteIndex = () => {
	const { idx } = useParams();
	const paramIdx = parseInt(idx);

	const { data } = useSelector((state) => state.question);
	const key = paramIdx === 1 ? "owner" : `answer${paramIdx - 1}`;
	const [input, setInput] = useState(data[key]);
	useEffect(() => {
		setInput(data[key]);
	}, [idx]);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const nextUrl = paramIdx === 7 ? "/write/will" : `/write/${paramIdx + 1}`;

	const handleNextClick = () => {
		if (input === "") {
			alert("내용을 입력해주세요.");
			return;
		}
		dispatch(setData(key, input));
		navigate(nextUrl);
	};

	return (
		<>
			<div className="write container white-border-container">
				<ImgPart idx={paramIdx} />
				<div className="writeLine">
					<div className="col-container writeIndexTextBox">
						<Question idx={paramIdx} />
						<InputPart
							input={input}
							setInput={setInput}
							type={paramIdx === 1 ? "owner" : "answer"}
						/>
						<button onClick={handleNextClick} className="nextBtn">
							다음
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default WriteIndex;
