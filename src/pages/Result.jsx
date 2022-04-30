import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { getWillDetail } from "../api/will";
import AudioPart from "../components/Result/AudioPart";
import EditQuestion from "../components/Result/EditQuestion";
import Header from "../components/Result/Header";
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
	const [isYear, setIsYear] = useState(true);
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
				setIsYear(true);
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
	const QuestionContent = () => {
		return isEdit ? (
			<EditQuestion resultContent={resultContent} />
		) : (
			<Question resultContent={resultContent} />
		);
	};
	const ButtonContent = () => {
		if (!isMyPage) {
			return (
				<button className="border-btn green-btn" onClick={handleClickDelivery}>
					배달하기
				</button>
			);
		} else {
			return (
				isYear && (
					<button onClick={handleEditClick} className="border-btn green-btn">
						수정하기
					</button>
				)
			);
		}
	};
	return (
		<React.Fragment>
			<div className="result container result-container">
				<Header owner={resultContent.owner} date={resultContent.createdAt} />
				<QuestionContent />
				<Will content={resultContent.content} />
				<AudioPart resultContent={resultContent} />
				<div className="row-container btn-wrapper">
					<ShareBtn />
					<ButtonContent />
				</div>
			</div>
			{isOpen && <KakaoModal setIsOpen={setIsOpen} />}
		</React.Fragment>
	);
};

export default Result;
