import React from "react";
import { RowContainer } from "../commons/Container";
const RecordTime = ({ time }) => {
	return (
		<RowContainer>
			<span style={{ color: "red" }}> ● </span>
			<span id="time">
				{`${parseInt(time / 60)}`.padStart(2, "0")}:
				{`${parseInt(time) % 60}`.padStart(2, "0")}
			</span>
		</RowContainer>
	);
};

export default RecordTime;
