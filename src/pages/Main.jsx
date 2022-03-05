import BtnWrapper from "../components/Main/BtnWrapper";
import LogoWrapper from "../components/Main/LogoWrapper";
import MentWrapper from "../components/Main/MentWrapper";
import "../Main.css";
const Main = () => {
	return (
		<div className="main center-container">
			<img src="./img/text1.png" alt="randingText" />
			<LogoWrapper />
			<img src="./img/randingImg.png" width="80%" alt="밀레니엄버그Img" />
			<MentWrapper />
			<section className="text-center-wrapper">
				<h3>
					{">>"}1년뒤 지국에서 살아남을
					<br />
					당신에게 유언을 남겨보세요
				</h3>
			</section>
			<BtnWrapper />
		</div>
	);
};

export default Main;
