import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ImgPart from "../components/WriteIndex/ImgPart";
import InputPart from "../components/WriteIndex/InputPart";
import { setData } from "../modules/questionSlice";
import { ColContainer, Container } from "../components/commons/Container";
import styled from "styled-components";
import { questionList } from "../assets/objects/questionList";
const WriteIndex = () => {
	const { idx } = useParams();
	const paramIdx = parseInt(idx);

	const { data } = useSelector((state) => state.question);
	const key = paramIdx === 1 ? "ownerName" : `answer${paramIdx - 1}`;
	const [input, setInput] = useState(data[key]);
	useEffect(() => {
		setInput(data[key]);
		document.getElementById("will-input").focus();
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
		<WriteContainer>
			<ImgPart idx={paramIdx} />
			<WriteIndexTextBox>
				<Quest>
					{paramIdx === 1
						? `Q1. 당신의 이름은?`
						: `Q${paramIdx}.${questionList[paramIdx - 2]}`}
				</Quest>
				<InputPart
					input={input}
					setInput={setInput}
					type={paramIdx === 1 ? "ownerName" : "answer"}
				/>
				<NextBtn onClick={handleNextClick}>다음</NextBtn>
			</WriteIndexTextBox>
		</WriteContainer>
	);
};

export default WriteIndex;
const WriteContainer = styled(Container)`
	font-size: large;
	color: white;
	min-height: 95vh;
	margin: 20px;
	border: solid 3px white;
	justify-content: flex-end;
	align-items: center;
`;
const WriteIndexTextBox = styled(ColContainer)`
	width: 100%;
	min-height: 25vh;
	padding: 10px 10px;
	background-color: #2bc94d;
	position: relative;
	border-top: solid 3px #fff;
`;
const NextBtn = styled.button`
	color: #f5de0e;
	font-size: large;
	position: absolute;
	right: 10px;
	bottom: 10px;
	cursor: pointer;
`;

const Quest = styled.div`
	color: #f5de0e;
	font-size: large;
`;
