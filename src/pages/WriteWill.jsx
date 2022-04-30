import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TextareaAutosize from "react-textarea-autosize";
import { postWill } from "../api/will";
import { Container, RowContainer } from "../components/commons/Container";
import RecordHandle from "../components/WriteWill/RecordHandle";
import { setData } from "../modules/questionSlice";
import "../WriteWill.css";
const WriteWill = () => {
	const [recordFile, setRecordFile] = useState();
	const dispatch = useDispatch();
	const handleChange = (e) => {
		const { value } = e.target;
		dispatch(setData("content", value));
	};

	const { data } = useSelector((state) => state.question);
	const navigate = useNavigate();
	const handleSubmit = () => {
		try {
			const keys = Object.keys(data);
			const formData = new FormData();
			keys.map((key) => formData.append(key, data[key]));
			formData.append("voiceMail", recordFile);
			postWill(formData).then((data) => {
				navigate(`/result/${data.willId}`);
			});
		} catch (error) {
			alert("작성 중 오류가 발생하였습니다.");
			console.error(error);
		}
	};
	return (
		<Container>
			<div className="writewillBox">
				<div className="writewillTitle">유서를 자유롭게 남겨보세요</div>
				<RowContainer className="input-wrapper">
					<div className="writewillTitle">{">>"}</div>
					<TextareaAutosize
						type="text"
						name="text"
						className="qnaInput"
						value={data.content}
						onChange={handleChange}
						required
					/>
				</RowContainer>
			</div>
			<div className="writevoiceBox">
				<RecordHandle recordFile={recordFile} setRecordFile={setRecordFile} />
			</div>
			<button onClick={handleSubmit} className="blue-btn writeBlueBtn">
				작성 완료
			</button>
		</Container>
	);
};

export default WriteWill;
