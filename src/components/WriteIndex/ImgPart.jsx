import React from "react";
const ImgPart = ({ idx }) => {
	return (
		<div className="img-wrapper">
			<img src={`../img/q${idx}.png`} width="250px" alt="questionImg" />
		</div>
	);
};

export default ImgPart;
