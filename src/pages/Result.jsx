import { useState } from "react";
import { questionList } from "../assets/objects/questionList";
import KakaoModal from "../components/Result/KakaoModal";
import "../Result.css";
const Result = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClickDelivery = () => {
		setIsOpen(true);
	};
	const handleAudioPlay = () => {
		const ad = document.getElementById("record");
		ad.play();
	};
	return (
		<>
			<div className="result container result-container">
				<h2 className="label">유서</h2>
				{questionList.map((q, idx) => (
					<section className="question-wrapper">
						<h3>Q{idx + 1 + "." + q}</h3>
						<span>{"내용"}</span>
					</section>
				))}
				<section>
					<h3>나의 유서</h3>
					<hr />
					<span>{""}</span>
				</section>
				<section>
					<h3 onClick={handleAudioPlay}>음성 유서 🔊</h3>
					<audio src="" id="record" />
					<spna className="yellow-text">{"날짜"}</spna>
				</section>
				<div className="row-container btn-wrapper">
					<button className="border-btn blue-btn">공유하기</button>
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
