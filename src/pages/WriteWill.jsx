import React from "react";
import "../WriteWill.css";
const WriteWill = () => {

	
	return (
		<div className="container">
			<div className="writewillBox">
				<div className="writewillTitle">유서를 자유롭게 남겨보세요</div>
				<div className="writewill-wrapper"></div>
				<div className="writewillTitle"> &gt;&gt;</div>
			</div>
			<div className="writevoiceBox">
				<img src="../img/mic.png"></img>
				<div className="writevoiceTitle">음성 유서 남기기</div>
				<div className="writevoice-wrapper"></div>
			</div>
			<div className="blue-btn writeBlueBtn">작성 완료</div>
		</div>
	);
};

export default WriteWill;
