import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { reqDelivery } from "../api/delivery";
import DeliveryModal from "../components/Result/DeliveryModal";
import "../Delivery.css";
import { setId } from "../modules/user";
import { kakaoLoginHandler } from "../utils/KakaoLogin";
const Delivery = () => {
	const [isOpen, setIsOpen] = useState(false);
	/* redux로부터 userId 받기 */
	const { userId } = useSelector((state) => state.user);
	const handleClickDelivery = () => {
		reqDelivery(userId).then(() => setIsOpen(true));
	};

	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const code = params.get("code");

	const dispatch = useDispatch();
	useEffect(() => {
		if (code) {
			kakaoLoginHandler(code, "/delivery").then((res) => {
				/* redux에 userId 저장 */
				dispatch(setId(res.userId));
			});
		}
	}, []);

	return (
		<>
			<div className="delivery container">
				<h2 className="label">배달하기</h2>
				<div className="text-wrapper">
					<h3>{">>"}배달하기란?</h3>
					<span className="content-wrapper">
						1년 마다, 나의 메일로 <br /> 유서를 배달해줍니다.
						<br /> <br /> 험난한 지구에서 살아남은 <br /> 당신에게 보내는 유서
						<br /> <br /> 1년전, 나를 돌아보세요.
					</span>
					<section>
						<span className="yellow-text">
							**배달 메일
							<br /> <br /> 카카오 계정 이메일로 발송됩니다.
						</span>
					</section>
				</div>
				<div className="row-container btn-wrapper">
					<button className="border-btn blue-btn" onClick={handleClickDelivery}>
						배달 신청
					</button>
				</div>
			</div>
			{isOpen && <DeliveryModal setIsOpen={setIsOpen} />}
		</>
	);
};

export default Delivery;