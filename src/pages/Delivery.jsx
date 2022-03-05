import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import DeliveryModal from "../components/Result/DeliveryModal";
import "../Delivery.css";
import { setId } from "../modules/user";
import { kakaoLoginHandler } from "../utils/KakaoLogin";
const Delivery = () => {
	const [isOpen, setIsOpen] = useState(false);
	/* redux로부터 userId 받기 */
	const { userId } = useSelector((state) => state.user);
	const handleClickDelivery = () => {
		axios
			.post(`/will/delivery/${userId}`)
			.then((res) => res.status === 200 && setIsOpen(true));
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
					<section className="text-wrapper">
						<h3>{">>"}배달하기란?</h3>
						<span>{""}</span>
					</section>
					<section>
						<span className="yellow-text">
							**배달 메일
							<br /> 카카오 계정 이메일로 발송됩니다.
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
