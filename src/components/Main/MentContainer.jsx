import styled from "styled-components";
import { ColContainer } from "../commons/Container";

const MentContainer = () => {
	return (
		<Section>
			<TextWrapper>
			<li>◆◇ 나만의 유서 남기기</li>
			<li>◆◇ z세대는 유서를 공유한다</li>
			<li>◆◇ z세대는 디지털로 유서쓴다</li>
			<li>◆◇ z세대는 유서를 배달한다</li>
			</TextWrapper>
		</Section>
	);
};

export default MentContainer;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
	background-color: #06053280;
	padding: 20px;
	box-shadow: 5px 5px 10px 5px #00000020;
	backdrop-filter: blur(2px);
`;
const TextWrapper=styled(ColContainer)`
	color: #F5DE0E;
	justify-content: center;
	line-height: 1.5;
	padding: 30vh 0;
`