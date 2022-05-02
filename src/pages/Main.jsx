import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Button } from "../components/commons/Buttons";
import { Container } from "../components/commons/Container";
import Flex from "../components/commons/Flex";
import useScrollFadeIn from "../components/hooks/useScrollFadeIn";
import useTouchScrollSection from "../components/hooks/useTouchScrollSection";
import BtnWrapper from "../components/Main/BtnContainer";
import LogoWrapper from "../components/Main/Logo";
import MentWrapper from "../components/Main/MentContainer";
import "../Main.css";
const Main = () => {
	const { ref, style } = useScrollFadeIn();
	const { handleClickScrollDown } = useTouchScrollSection({ pageCount: 2 });
	return (
		<Container className="main">
			<FirstSection>
				<img src="./img/text1.png" alt="randingText" id="randing-img" />
				<LogoWrapper />
				<MentWrapper />
				<Button onClick={handleClickScrollDown}>
					<FontAwesomeIcon icon={faAngleDoubleDown} />
				</Button>
			</FirstSection>
			<SecondSection ref={ref} style={style}>
				<Flex justifyCenter>
					<img src="./img/randingImg.png" width="300px" alt="밀레니엄버그Img" />
				</Flex>
				<section className="text-center-wrapper">
					<h3>
						{">>"} 1년뒤 지구에서 살아남을
						<br />
						당신에게 유언을 남겨보세요.
					</h3>
				</section>
				<BtnWrapper />
			</SecondSection>
		</Container>
	);
};
export default Main;
const Section = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 100px 0;
	align-items: center;
`;

const FirstSection = styled(Section)`
	justify-content: space-around;
	#randing-img {
		opacity: 0.7;
	}
	svg {
		opacity: 0.5;
		transform: scale(3, 2);
		transition: 0.6s;
	}
	button {
		position: absolute;
		bottom: 20px;
	}
	button:active {
		& > svg path {
			opacity: 1;
		}
	}
`;
const SecondSection = styled(Section)`
	justify-content: space-between;
	& > div:nth-child(1) {
		flex: 0.8;
		align-items: flex-start;
	}
`;
