import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TextareaAutosize from "react-textarea-autosize";
import { postWill } from "../api/will";
import { BorderBlueBtn } from "../components/commons/Buttons";
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
			<WriteWillBox>
				<WriteWillTitle>유서를 자유롭게 남겨보세요</WriteWillTitle>
				<InputWrapper>
				<WriteWillTitle>{">>"}</WriteWillTitle>
					<TextareaAutosize
						type="text"
						name="text"
						className="qnaInput"
						value={data.content}
						onChange={handleChange}
						required
					/>
				</InputWrapper>	
			</WriteWillBox>
			<WriteVoiceBox>
				<RecordHandle recordFile={recordFile} setRecordFile={setRecordFile} />
			</WriteVoiceBox>
			<WriteBlueBtn onClick={handleSubmit}>
				작성 완료
			</WriteBlueBtn>
		</Container>
	);
};

export default WriteWill;
const WriteWillBox=styled.div`
	margin-top: 46px;
    width: 90%;
    min-height: 430px;
`
const WriteWillTitle=styled.div`
	font-size: 18px;
    margin-bottom: 22px;
`
const InputWrapper=styled(RowContainer)`
	border-top: solid 3px white;
	padding-top: 10px;
`
const WriteVoiceBox=styled.div`
 	width: 90%;
    height: 250px;
`
const WriteBlueBtn=styled(BorderBlueBtn)`
 
`