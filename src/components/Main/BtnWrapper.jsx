import { Link } from "react-router-dom";

const BtnWrapper = () => {
	return (
		<section className="col-container btn-wrapper">
			<button className="solid-blue-btn">
				<Link to={`/write/${1}`}>유서 남기기</Link>
			</button>
			<button className="solid-green-btn">
				<Link to="/login">나의 유서함</Link>
			</button>
		</section>
	);
};

export default BtnWrapper;
