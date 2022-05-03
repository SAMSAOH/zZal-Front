import React from "react";
import styled from "styled-components";

const Header = ({ owner, date }) => {
	return (
		<Head>
			<h2>{owner}의 유서</h2>
			<span>{date}</span>
		</Head>
	);
};

export default Header;
const Head = styled.div`
	border-bottom: solid 3px white;
	width: 90%;
	text-align: center;
	padding-bottom: 20px;
`;
