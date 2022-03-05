import React from "react";
const RecordTime = ({ time }) => {
	return (
		<div className="row-container">
			<span style={{ color: "red" }}> ● </span>
			<span id="time">
				{`${parseInt(time / 60)}`.padStart(2, "0")}:
				{`${parseInt(time) % 60}`.padStart(2, "0")}
			</span>
		</div>
	);
};

export default RecordTime;
