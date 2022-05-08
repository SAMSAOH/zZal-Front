import React from "react";
import styled from "styled-components";
import { RowContainer } from "../commons/Container";
const RecordTime = ({ time }) => {
	return (
		<RowContainer>
			<span style={{ color: "red" }}> ● </span>
			<Time id="time">
				{`${parseInt(time / 60)}`.padStart(2, "0")}:
				{`${parseInt(time) % 60}`.padStart(2, "0")}
			</Time>
		</RowContainer>
	);
};

export default RecordTime;
const Time=styled.span`
	 margin-left: 10px;
     opacity: 50%;	
`