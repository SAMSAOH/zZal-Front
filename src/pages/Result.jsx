import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getWillDetail } from "../api/will";
import { BorderGreenBtn } from "../components/commons/Buttons";
import {
	ColContainer,
	Container,
	RowContainer,
} from "../components/commons/Container";
import AudioPart from "../components/Result/AudioPart";
import EditQuestion from "../components/Result/EditQuestion";
import KakaoModal from "../components/Result/KakaoModal";
import Question from "../components/Result/Question";
import ShareBtn from "../components/Result/ShareBtn";
import Will from "../components/Result/Will";
import "../Result.css";
const Result = () => {
	const { willId } = useParams();
	const [isOpen, setIsOpen] = useState(false);
	const { pathname } = useLocation();
	const [isMyPage, setIsMyPage] = useState(false);
	const [isAfterYear, setIsAfterYear] = useState(true);
	const [isEdit, setIsEdit] = useState(false);

	const handleClickDelivery = () => {
		setIsOpen(true);
	};
	const [resultContent, setResultContent] = useState({});
	useEffect(() => {
		getWillDetail(willId).then((data) => setResultContent(data));
		if (pathname.includes("mywill")) {
			setIsMyPage(true);
			const updateDate = new Date(resultContent.createdDate);
			const now = new Date();
			if (
				updateDate.getMonth() <= now.getMonth() &&
				updateDate.getDate() <= now.getDate()
			) {
				setIsAfterYear(true);
			}
		}
		if (pathname.includes("edit")) {
			setIsEdit(true);
		}
	}, []);

	const navigate = useNavigate();
	const handleEditClick = () => {
		navigate(`/mywill/edit/${willId}`, resultContent);
	};
	const ButtonContent = () => {
		if (isMyPage) {
			return (
				isAfterYear && (
					<BorderGreenBtn onClick={handleEditClick}>수정하기</BorderGreenBtn>
				)
			);
		} else {
			return (
				<BorderGreenBtn onClick={handleClickDelivery}>배달하기</BorderGreenBtn>
			);
		}
	};
	return (
		<React.Fragment>
			<Container width="100%">
				<Head>
					<h2>{resultContent.owner}의 유서</h2>
					<span>{resultContent.date}</span>
				</Head>
				<ColContainer width="90%">
					{isEdit ? (
						<EditQuestion resultContent={resultContent} />
					) : (
						<Question resultContent={resultContent} />
					)}
					<Will content={resultContent.content} isEdit={isEdit} />
					<AudioPart resultContent={resultContent} />
				</ColContainer>
				<BtnWrapper gap="10px" padding="30px 0" width="90%" justifyCenter>
					<ShareBtn />
					<ButtonContent />
				</BtnWrapper>
			</Container>
			{isOpen && <KakaoModal setIsOpen={setIsOpen} />}
		</React.Fragment>
	);
};

export default Result;
const Head = styled.div`
	border-bottom: solid 3px white;
	width: 90%;
	text-align: center;
	padding-bottom: 20px;
`;

const BtnWrapper = styled(RowContainer)`
	button {
		width: 100%;
		text-align: center;
	}
`;
