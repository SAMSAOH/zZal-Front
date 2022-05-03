import { Link } from "react-router-dom";
import styled from "styled-components";
import { BlueBtn, GreenBtn } from "../commons/Buttons";
import { ColContainer } from "../commons/Container";

const BtnContainer = () => {
	return (
		<Section>
			<BtnWrapper>
			<BlueBtn>
				<Link to={`/write/${1}`}>유서 남기기</Link>
			</BlueBtn>
			<GreenBtn>
				<Link to="/login">나의 유서함</Link>
			</GreenBtn>
			</BtnWrapper>
			
		</Section>
	);
};

export default BtnContainer;
const Section = styled.section`
	display: flex;
	flex-direction: column;
	
`;
const BtnWrapper=styled(ColContainer)`
	font-size: x-large;
	gap: 20px;
	color: white;
	margin-top: 20px;
	width: 50vw;
	text-align: center;
`
