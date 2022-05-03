import React from "react";
import styled from "styled-components";
import { Button } from "@components/commons/Buttons";
import { ColContainer } from "@components/commons/Container";
import Flex from "@components/commons/Flex";
import useScrollFadeIn from "@components/hooks/useScrollFadeIn";
import useTouchScrollSection from "@components/hooks/useTouchScrollSection";
import BtnWrapper from "@components/Main/BtnContainer";
import LogoWrapper from "@components/Main/Logo";
import MentWrapper from "@components/Main/MentContainer";
import {ReactComponent as ArrowDownIcon} from "@assets/imgs/ArrowDown.svg";

const Main = () => {
	const { ref, style } = useScrollFadeIn();
	const { handleClickScrollDown } = useTouchScrollSection({ pageCount: 2 });
	return (
		<MainView imgUrl={process.env.PUBLIC_URL + "/img/bg_jet.png"}>
			<FirstSection>
				<img
					src="./img/text1.png"
					alt="randingText"
					id="randing-img"
					width="250px"
				/>
				<LogoWrapper />
				<MentWrapper />
				<Button onClick={handleClickScrollDown}>
					<ArrowDownIcon width="30px" height="30px"/>
				</Button>
			</FirstSection>
			<SecondSection ref={ref} style={style}>
				<Flex justifyCenter>
					<img src="./img/randingImg.png" width="300px" alt="밀레니엄버그Img" />
				</Flex>
				<TextCenterWrapper>
					<p>
						{`>> 1년뒤 지국에서 살아남을`} <br />
						{`당신에게 유언을 남겨보세요.`}
					</p>
				</TextCenterWrapper>
				<BtnWrapper />
			</SecondSection>
		</MainView>
	);
};
export default Main;
const MainView = styled(ColContainer)`
	background-image: url(${(props) => props.imgUrl}),
		linear-gradient(#05037b, #060532);
	background-size: 150px, 100%;
	background-repeat: no-repeat;
	background-position: 50px 300px, 0;
`;
const TextCenterWrapper = styled.section`
	text-align: center;
	line-height: 2;
	width: 80vw;
	font-size: large;
`;

const Section = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 80px 0;
	align-items: center;
`;

const FirstSection = styled(Section)`
	justify-content: space-around;
	#randing-img {
		opacity: 0.7;
	}
	svg {
		opacity: 0.7;
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
