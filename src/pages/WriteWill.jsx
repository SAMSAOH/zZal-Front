import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TextareaAutosize from "react-textarea-autosize";
import RecordHandle from "../components/WriteWill/RecordHandle";
import "../WriteWill.css";
const WriteWill = () => {
	const [input, setInput] = useState("");
	const [recordFile, setRecordFile] = useState();
	const handleChange = (e) => {
		const { value } = e.target;
		setInput(value);
	};

	const { data } = useSelector((state) => state.question);
	const navigate = useNavigate();
	const handleSubmit = () => {
		try {
			const keys = Object.keys(data);
			const formData = new FormData();
			for (let key in keys) {
				formData.append(key, data[key]);
			}
			formData.append("voiceMail", recordFile);
			axios
				.post("/will/create", formData)
				.then((res) => navigate(`/result/${res.data.willId}`));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="container">
			<div className="writewillBox">
				<div className="writewillTitle">유서를 자유롭게 남겨보세요</div>
				<div className="row-container input-wrapper">
					<div className="writewillTitle">{">>"}</div>
					<TextareaAutosize
						type="text"
						name="text"
						className="qnaInput"
						value={input}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			<div className="writevoiceBox">
				<RecordHandle recordFile={recordFile} setRecordFile={setRecordFile} />
			</div>
			<button onClick={handleSubmit} className="blue-btn writeBlueBtn">
				작성 완료
			</button>
		</div>
	);
};

export default WriteWill;
