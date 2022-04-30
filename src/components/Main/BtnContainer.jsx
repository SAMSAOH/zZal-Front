import { Link } from "react-router-dom";
import styled from "styled-components";

const BtnContainer = () => {
	return (
		<Section className="btn-wrapper">
			<button className="solid-blue-btn">
				<Link to={`/write/${1}`}>유서 남기기</Link>
			</button>
			<button className="solid-green-btn">
				<Link to="/login">나의 유서함</Link>
			</button>
		</Section>
	);
};

export default BtnContainer;
const Section = styled.section`
	display: flex;
	flex-direction: column;
`;
