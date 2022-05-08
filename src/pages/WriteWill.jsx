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
		dispatch(setData({ key: "content", data: value }));
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
				<WriteWillTitle>유서를 자유롭게 남겨보세요.</WriteWillTitle>
				<InputWrapper>
					<WriteWillTitle>{">>"}</WriteWillTitle>
					<InputText
						type="text"
						name="content"
						className="qnaInput"
						value={data.content}
						onChange={handleChange}
						required
					/>
				</InputWrapper>
			</WriteWillBox>
			<RecordHandle recordFile={recordFile} setRecordFile={setRecordFile} />
			<BorderBlueBtn onClick={handleSubmit} margin="30px 0">
				작성 완료
			</BorderBlueBtn>
		</Container>
	);
};

export default WriteWill;
const WriteWillBox = styled.div`
	margin-top: 46px;
	width: 90%;
	min-height: 400px;
`;
const WriteWillTitle = styled.div`
	font-size: 18px;
	margin-bottom: 22px;
`;
const InputWrapper = styled(RowContainer)`
	border-top: solid 3px white;
	padding-top: 10px;
	align-items: flex-start;
`;
const InputText = styled(TextareaAutosize)`
	font-size: large;
`;
