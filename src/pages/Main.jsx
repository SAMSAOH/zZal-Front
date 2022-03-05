import { Link } from "react-router-dom";
import "../Main.css";
const Main = () => {
	return (
		<div className="main bg-img-container center-container">
			<img src="text1.png" width="200px" />
			<img src="logo.png" width="250px" id="logo" />
			<section className="col-container text-wrapper">
				<li>◆◇ 나만의 유서 남기기</li>
				<li>◆◇z세대는 디지털로 유서쓴다</li>
				<li>◆◇ z세대는 유서를 배달한다</li>
			</section>
			<section className="text-center-wrapper">
				<h3>
					{">>"}1년뒤 지국에서 살아남을
					<br />
					당신에게 유언을 남겨보세요
				</h3>
			</section>
			<section className="col-container btn-wrapper">
				<button className="solid-blue-btn">
					<Link to={`/write/${1}`}>유서 남기기</Link>
				</button>
				<button className="solid-green-btn">
					<Link to="/login">나의 유서함</Link>
				</button>
			</section>
		</div>
	);
};

export default Main;