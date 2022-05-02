import styled from "styled-components";

const MentContainer = () => {
	return (
		<Section className="text-wrapper">
			<li>◆◇ 나만의 유서 남기기</li>
			<li>◆◇ z세대는 유서를 공유한다</li>
			<li>◆◇ z세대는 디지털로 유서쓴다</li>
			<li>◆◇ z세대는 유서를 배달한다</li>
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
