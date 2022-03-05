import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AudioPart from "../components/Result/AudioPart";
import Header from "../components/Result/Header";
import KakaoModal from "../components/Result/KakaoModal";
import Question from "../components/Result/Question";
import ShareBtn from "../components/Result/ShareBtn";
import Will from "../components/Result/Will";
import "../Result.css";
const Result = () => {
	const { willId } = useParams();
	const [isOpen, setIsOpen] = useState(false);
	const handleClickDelivery = () => {
		setIsOpen(true);
	};
	const [resultContent, setResultContent] = useState({});

	useEffect(() => {
		axios.get(`/will/${willId}`).then((res) => setResultContent(res.data));
	}, []);

	return (
		<>
			<div className="result container result-container">
				<Header owner={resultContent.owner} />
				<Question resultContent={resultContent} />
				<Will content={resultContent.content} />
				<AudioPart resultContent={resultContent} />
				<div className="row-container btn-wrapper">
					<ShareBtn />
					<button
						className="border-btn green-btn"
						onClick={handleClickDelivery}
					>
						배달하기
					</button>
				</div>
			</div>
			{isOpen && <KakaoModal setIsOpen={setIsOpen} />}
		</>
	);
};

export default Result;
