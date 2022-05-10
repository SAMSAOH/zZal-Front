import React from "react";
import styled from "styled-components";
import { Button } from "@components/commons/Buttons";
import { ColContainer } from "@components/commons/Container";
import Flex from "@components/commons/Flex";
import useScrollFadeIn from "@hooks/useScrollFadeIn";
import useTouchScrollSection from "@hooks/useTouchScrollSection";
import Logo from "@components/Main/Logo";
import { ReactComponent as ArrowDownIcon } from "@assets/imgs/ArrowDown.svg";
import { BlueBtn, GreenBtn } from "../components/commons/Buttons";
import { Link } from "react-router-dom";
import RandingImg from "@assets/imgs/randingImg.png";
import BGImg from "@assets/imgs/bg_jet.png";
import RandingTextImg from "@assets/imgs/text1.png";
const Main = () => {
	const { ref, style } = useScrollFadeIn();
	const { handleClickScrollDown } = useTouchScrollSection({ pageCount: 2 });
	return (
		<MainView imgUrl={BGImg}>
			<FirstSection>
				<img
					src={RandingTextImg}
					alt="randingText"
					id="randing-img"
					width="250px"
				/>
				<Logo />
				<TextWrapper>
					<li>◆◇ 나만의 유서 남기기</li>
					<li>◆◇ z세대는 유서를 공유한다</li>
					<li>◆◇ z세대는 디지털로 유서쓴다</li>
					<li>◆◇ z세대는 유서를 배달한다</li>
				</TextWrapper>
				<Button onClick={handleClickScrollDown}>
					<ArrowDownIcon width="30px" height="30px" />
				</Button>
			</FirstSection>
			<SecondSection ref={ref} style={style}>
				<Flex justifyCenter>
					<img src={RandingImg} width="300px" alt="밀레니엄버그Img" />
				</Flex>
				<TextCenterWrapper>
					{`>> 1년뒤 지국에서 살아남을`} <br />
					{`당신에게 유언을 남겨보세요.`}
				</TextCenterWrapper>
				<BtnWrapper>
					<BlueBtn>
						<Link to={`/write/${1}`}>유서 남기기</Link>
					</BlueBtn>
					<GreenBtn>
						<Link to="/login">나의 유서함</Link>
					</GreenBtn>
				</BtnWrapper>
			</SecondSection>
		</MainView>
	);
};
export default Main;
const MainView = styled(ColContainer)`
	background-image: url(${({ imgUrl }) => imgUrl}),
		linear-gradient(#05037b, #060532);
	background-size: 150px, 100%;
	background-repeat: no-repeat;
	background-position: 50px 300px, 0;
`;
const TextWrapper = styled(ColContainer)`
	color: #f5de0e;
	justify-content: center;
	line-height: 1.5;
	padding: 10vh 0;
	margin: 10vh 0;
	gap: 10px;
	background-color: #06053280;
	padding: 20px;
	box-shadow: 5px 5px 10px 5px #00000020;
	backdrop-filter: blur(2px);
`;

const TextCenterWrapper = styled.p`
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

const BtnWrapper = styled(ColContainer)`
	button {
		/* font-size: large; */
		box-shadow: 0px 0px 20px 10px #ffffff20;
		transition: 0.6s;
	}
	button:active {
		filter: brightness(1.2);
	}
	font-size: x-large;
	gap: 20px;
	color: white;
	margin-top: 20px;
	width: 80vw;
	text-align: center;
`;
