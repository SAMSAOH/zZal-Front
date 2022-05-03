import { CenterContainer } from "../components/commons/Container";
import BtnWrapper from "../components/Main/BtnContainer";
import LogoWrapper from "../components/Main/Logo";
import MentWrapper from "../components/Main/MentContainer";
import styled from "styled-components";

import "../Main.css";
const Main = () => {
	return (
		<MainView imgUrl={process.env.PUBLIC_URL+ '/img/bg_jet.png'}>
		<img src="./img/text1.png" alt="randingText" />
				<LogoWrapper />
				<img src="./img/randingImg.png" width="80%" alt="밀레니엄버그Img" />
				<MentWrapper />
				<TextCenterWrapper>
					<h3>
						{">>"}1년뒤 지국에서 살아남을
						<br />
						당신에게 유언을 남겨보세요
					</h3>
				</TextCenterWrapper>
			<BtnWrapper />
		</MainView>
		
	);
};

export default Main;

const MainView=styled(CenterContainer)`
	background-image:  url(${(props)=>props.imgUrl}), linear-gradient(#05037B, #060532);
	background-size: 150px, 100%;
	background-repeat: no-repeat;
  	background-position: 50px 300px, 0;
`
const TextCenterWrapper=styled.section`
		text-align: center;
		line-height: 2;
`