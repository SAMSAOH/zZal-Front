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
	button {
		/* font-size: large; */
		box-shadow: 0px 0px 20px 10px #ffffff20;
		transition: 0.6s;
	}
	button:active {
		filter: brightness(1.2);
	}
`;
const BtnWrapper = styled(ColContainer)`
	font-size: x-large;
	gap: 20px;
	color: white;
	margin-top: 20px;
	width: 50vw;
	text-align: center;
`;
